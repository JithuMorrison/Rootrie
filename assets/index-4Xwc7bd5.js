(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function BQ(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var kc={exports:{}},tl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function gQ(){if(Kg)return tl;Kg=1;var r=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function i(l,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:r,type:l,key:d,ref:c!==void 0?c:null,props:f}}return tl.Fragment=a,tl.jsx=i,tl.jsxs=i,tl}var Mg;function hQ(){return Mg||(Mg=1,kc.exports=gQ()),kc.exports}var u=hQ(),_c={exports:{}},DA={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function pQ(){if(Og)return DA;Og=1;var r=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),C=Symbol.iterator;function b(m){return m===null||typeof m!="object"?null:(m=C&&m[C]||m["@@iterator"],typeof m=="function"?m:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,J={};function cA(m,G,lA){this.props=m,this.context=G,this.refs=J,this.updater=lA||_}cA.prototype.isReactComponent={},cA.prototype.setState=function(m,G){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,G,"setState")},cA.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function iA(){}iA.prototype=cA.prototype;function tA(m,G,lA){this.props=m,this.context=G,this.refs=J,this.updater=lA||_}var gA=tA.prototype=new iA;gA.constructor=tA,j(gA,cA.prototype),gA.isPureReactComponent=!0;var uA=Array.isArray,q={H:null,A:null,T:null,S:null,V:null},Z=Object.prototype.hasOwnProperty;function CA(m,G,lA,aA,F,P){return lA=P.ref,{$$typeof:r,type:m,key:G,ref:lA!==void 0?lA:null,props:P}}function T(m,G){return CA(m.type,G,void 0,void 0,void 0,m.props)}function M(m){return typeof m=="object"&&m!==null&&m.$$typeof===r}function BA(m){var G={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(lA){return G[lA]})}var nA=/\/+/g;function oA(m,G){return typeof m=="object"&&m!==null&&m.key!=null?BA(""+m.key):G.toString(36)}function xA(){}function dA(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(xA,xA):(m.status="pending",m.then(function(G){m.status==="pending"&&(m.status="fulfilled",m.value=G)},function(G){m.status==="pending"&&(m.status="rejected",m.reason=G)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function R(m,G,lA,aA,F){var P=typeof m;(P==="undefined"||P==="boolean")&&(m=null);var W=!1;if(m===null)W=!0;else switch(P){case"bigint":case"string":case"number":W=!0;break;case"object":switch(m.$$typeof){case r:case a:W=!0;break;case Q:return W=m._init,R(W(m._payload),G,lA,aA,F)}}if(W)return F=F(m),W=aA===""?"."+oA(m,0):aA,uA(F)?(lA="",W!=null&&(lA=W.replace(nA,"$&/")+"/"),R(F,G,lA,"",function(OA){return OA})):F!=null&&(M(F)&&(F=T(F,lA+(F.key==null||m&&m.key===F.key?"":(""+F.key).replace(nA,"$&/")+"/")+W)),G.push(F)),1;W=0;var bA=aA===""?".":aA+":";if(uA(m))for(var hA=0;hA<m.length;hA++)aA=m[hA],P=bA+oA(aA,hA),W+=R(aA,G,lA,P,F);else if(hA=b(m),typeof hA=="function")for(m=hA.call(m),hA=0;!(aA=m.next()).done;)aA=aA.value,P=bA+oA(aA,hA++),W+=R(aA,G,lA,P,F);else if(P==="object"){if(typeof m.then=="function")return R(dA(m),G,lA,aA,F);throw G=String(m),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return W}function x(m,G,lA){if(m==null)return m;var aA=[],F=0;return R(m,aA,"","",function(P){return G.call(lA,P,F++)}),aA}function O(m){if(m._status===-1){var G=m._result;G=G(),G.then(function(lA){(m._status===0||m._status===-1)&&(m._status=1,m._result=lA)},function(lA){(m._status===0||m._status===-1)&&(m._status=2,m._result=lA)}),m._status===-1&&(m._status=0,m._result=G)}if(m._status===1)return m._result.default;throw m._result}var z=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function sA(){}return DA.Children={map:x,forEach:function(m,G,lA){x(m,function(){G.apply(this,arguments)},lA)},count:function(m){var G=0;return x(m,function(){G++}),G},toArray:function(m){return x(m,function(G){return G})||[]},only:function(m){if(!M(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},DA.Component=cA,DA.Fragment=i,DA.Profiler=c,DA.PureComponent=tA,DA.StrictMode=l,DA.Suspense=g,DA.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,DA.__COMPILER_RUNTIME={__proto__:null,c:function(m){return q.H.useMemoCache(m)}},DA.cache=function(m){return function(){return m.apply(null,arguments)}},DA.cloneElement=function(m,G,lA){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var aA=j({},m.props),F=m.key,P=void 0;if(G!=null)for(W in G.ref!==void 0&&(P=void 0),G.key!==void 0&&(F=""+G.key),G)!Z.call(G,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&G.ref===void 0||(aA[W]=G[W]);var W=arguments.length-2;if(W===1)aA.children=lA;else if(1<W){for(var bA=Array(W),hA=0;hA<W;hA++)bA[hA]=arguments[hA+2];aA.children=bA}return CA(m.type,F,void 0,void 0,P,aA)},DA.createContext=function(m){return m={$$typeof:d,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:f,_context:m},m},DA.createElement=function(m,G,lA){var aA,F={},P=null;if(G!=null)for(aA in G.key!==void 0&&(P=""+G.key),G)Z.call(G,aA)&&aA!=="key"&&aA!=="__self"&&aA!=="__source"&&(F[aA]=G[aA]);var W=arguments.length-2;if(W===1)F.children=lA;else if(1<W){for(var bA=Array(W),hA=0;hA<W;hA++)bA[hA]=arguments[hA+2];F.children=bA}if(m&&m.defaultProps)for(aA in W=m.defaultProps,W)F[aA]===void 0&&(F[aA]=W[aA]);return CA(m,P,void 0,void 0,null,F)},DA.createRef=function(){return{current:null}},DA.forwardRef=function(m){return{$$typeof:h,render:m}},DA.isValidElement=M,DA.lazy=function(m){return{$$typeof:Q,_payload:{_status:-1,_result:m},_init:O}},DA.memo=function(m,G){return{$$typeof:w,type:m,compare:G===void 0?null:G}},DA.startTransition=function(m){var G=q.T,lA={};q.T=lA;try{var aA=m(),F=q.S;F!==null&&F(lA,aA),typeof aA=="object"&&aA!==null&&typeof aA.then=="function"&&aA.then(sA,z)}catch(P){z(P)}finally{q.T=G}},DA.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},DA.use=function(m){return q.H.use(m)},DA.useActionState=function(m,G,lA){return q.H.useActionState(m,G,lA)},DA.useCallback=function(m,G){return q.H.useCallback(m,G)},DA.useContext=function(m){return q.H.useContext(m)},DA.useDebugValue=function(){},DA.useDeferredValue=function(m,G){return q.H.useDeferredValue(m,G)},DA.useEffect=function(m,G,lA){var aA=q.H;if(typeof lA=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return aA.useEffect(m,G)},DA.useId=function(){return q.H.useId()},DA.useImperativeHandle=function(m,G,lA){return q.H.useImperativeHandle(m,G,lA)},DA.useInsertionEffect=function(m,G){return q.H.useInsertionEffect(m,G)},DA.useLayoutEffect=function(m,G){return q.H.useLayoutEffect(m,G)},DA.useMemo=function(m,G){return q.H.useMemo(m,G)},DA.useOptimistic=function(m,G){return q.H.useOptimistic(m,G)},DA.useReducer=function(m,G,lA){return q.H.useReducer(m,G,lA)},DA.useRef=function(m){return q.H.useRef(m)},DA.useState=function(m){return q.H.useState(m)},DA.useSyncExternalStore=function(m,G,lA){return q.H.useSyncExternalStore(m,G,lA)},DA.useTransition=function(){return q.H.useTransition()},DA.version="19.1.0",DA}var Rg;function ju(){return Rg||(Rg=1,_c.exports=pQ()),_c.exports}var eA=ju();const hu=BQ(eA);var Vc={exports:{}},nl={},zc={exports:{}},Xc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function wQ(){return jg||(jg=1,function(r){function a(x,O){var z=x.length;x.push(O);A:for(;0<z;){var sA=z-1>>>1,m=x[sA];if(0<c(m,O))x[sA]=O,x[z]=m,z=sA;else break A}}function i(x){return x.length===0?null:x[0]}function l(x){if(x.length===0)return null;var O=x[0],z=x.pop();if(z!==O){x[0]=z;A:for(var sA=0,m=x.length,G=m>>>1;sA<G;){var lA=2*(sA+1)-1,aA=x[lA],F=lA+1,P=x[F];if(0>c(aA,z))F<m&&0>c(P,aA)?(x[sA]=P,x[F]=z,sA=F):(x[sA]=aA,x[lA]=z,sA=lA);else if(F<m&&0>c(P,z))x[sA]=P,x[F]=z,sA=F;else break A}}return O}function c(x,O){var z=x.sortIndex-O.sortIndex;return z!==0?z:x.id-O.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var g=[],w=[],Q=1,C=null,b=3,_=!1,j=!1,J=!1,cA=!1,iA=typeof setTimeout=="function"?setTimeout:null,tA=typeof clearTimeout=="function"?clearTimeout:null,gA=typeof setImmediate<"u"?setImmediate:null;function uA(x){for(var O=i(w);O!==null;){if(O.callback===null)l(w);else if(O.startTime<=x)l(w),O.sortIndex=O.expirationTime,a(g,O);else break;O=i(w)}}function q(x){if(J=!1,uA(x),!j)if(i(g)!==null)j=!0,Z||(Z=!0,oA());else{var O=i(w);O!==null&&R(q,O.startTime-x)}}var Z=!1,CA=-1,T=5,M=-1;function BA(){return cA?!0:!(r.unstable_now()-M<T)}function nA(){if(cA=!1,Z){var x=r.unstable_now();M=x;var O=!0;try{A:{j=!1,J&&(J=!1,tA(CA),CA=-1),_=!0;var z=b;try{e:{for(uA(x),C=i(g);C!==null&&!(C.expirationTime>x&&BA());){var sA=C.callback;if(typeof sA=="function"){C.callback=null,b=C.priorityLevel;var m=sA(C.expirationTime<=x);if(x=r.unstable_now(),typeof m=="function"){C.callback=m,uA(x),O=!0;break e}C===i(g)&&l(g),uA(x)}else l(g);C=i(g)}if(C!==null)O=!0;else{var G=i(w);G!==null&&R(q,G.startTime-x),O=!1}}break A}finally{C=null,b=z,_=!1}O=void 0}}finally{O?oA():Z=!1}}}var oA;if(typeof gA=="function")oA=function(){gA(nA)};else if(typeof MessageChannel<"u"){var xA=new MessageChannel,dA=xA.port2;xA.port1.onmessage=nA,oA=function(){dA.postMessage(null)}}else oA=function(){iA(nA,0)};function R(x,O){CA=iA(function(){x(r.unstable_now())},O)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(x){x.callback=null},r.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<x?Math.floor(1e3/x):5},r.unstable_getCurrentPriorityLevel=function(){return b},r.unstable_next=function(x){switch(b){case 1:case 2:case 3:var O=3;break;default:O=b}var z=b;b=O;try{return x()}finally{b=z}},r.unstable_requestPaint=function(){cA=!0},r.unstable_runWithPriority=function(x,O){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var z=b;b=x;try{return O()}finally{b=z}},r.unstable_scheduleCallback=function(x,O,z){var sA=r.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?sA+z:sA):z=sA,x){case 1:var m=-1;break;case 2:m=250;break;case 5:m=1073741823;break;case 4:m=1e4;break;default:m=5e3}return m=z+m,x={id:Q++,callback:O,priorityLevel:x,startTime:z,expirationTime:m,sortIndex:-1},z>sA?(x.sortIndex=z,a(w,x),i(g)===null&&x===i(w)&&(J?(tA(CA),CA=-1):J=!0,R(q,z-sA))):(x.sortIndex=m,a(g,x),j||_||(j=!0,Z||(Z=!0,oA()))),x},r.unstable_shouldYield=BA,r.unstable_wrapCallback=function(x){var O=b;return function(){var z=b;b=O;try{return x.apply(this,arguments)}finally{b=z}}}}(Xc)),Xc}var Gg;function QQ(){return Gg||(Gg=1,zc.exports=wQ()),zc.exports}var Yc={exports:{}},Re={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function mQ(){if(kg)return Re;kg=1;var r=ju();function a(g){var w="https://react.dev/errors/"+g;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var Q=2;Q<arguments.length;Q++)w+="&args[]="+encodeURIComponent(arguments[Q])}return"Minified React error #"+g+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(g,w,Q){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:C==null?null:""+C,children:g,containerInfo:w,implementation:Q}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(g,w){if(g==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return Re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,Re.createPortal=function(g,w){var Q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(a(299));return f(g,w,null,Q)},Re.flushSync=function(g){var w=d.T,Q=l.p;try{if(d.T=null,l.p=2,g)return g()}finally{d.T=w,l.p=Q,l.d.f()}},Re.preconnect=function(g,w){typeof g=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,l.d.C(g,w))},Re.prefetchDNS=function(g){typeof g=="string"&&l.d.D(g)},Re.preinit=function(g,w){if(typeof g=="string"&&w&&typeof w.as=="string"){var Q=w.as,C=h(Q,w.crossOrigin),b=typeof w.integrity=="string"?w.integrity:void 0,_=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;Q==="style"?l.d.S(g,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:C,integrity:b,fetchPriority:_}):Q==="script"&&l.d.X(g,{crossOrigin:C,integrity:b,fetchPriority:_,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},Re.preinitModule=function(g,w){if(typeof g=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var Q=h(w.as,w.crossOrigin);l.d.M(g,{crossOrigin:Q,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&l.d.M(g)},Re.preload=function(g,w){if(typeof g=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var Q=w.as,C=h(Q,w.crossOrigin);l.d.L(g,Q,{crossOrigin:C,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},Re.preloadModule=function(g,w){if(typeof g=="string")if(w){var Q=h(w.as,w.crossOrigin);l.d.m(g,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:Q,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else l.d.m(g)},Re.requestFormReset=function(g){l.d.r(g)},Re.unstable_batchedUpdates=function(g,w){return g(w)},Re.useFormState=function(g,w,Q){return d.H.useFormState(g,w,Q)},Re.useFormStatus=function(){return d.H.useHostTransitionStatus()},Re.version="19.1.0",Re}var _g;function CQ(){if(_g)return Yc.exports;_g=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(a){console.error(a)}}return r(),Yc.exports=mQ(),Yc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function UQ(){if(Vg)return nl;Vg=1;var r=QQ(),a=ju(),i=CQ();function l(A){var e="https://react.dev/errors/"+A;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+A+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)}function f(A){var e=A,t=A;if(A.alternate)for(;e.return;)e=e.return;else{A=e;do e=A,(e.flags&4098)!==0&&(t=e.return),A=e.return;while(A)}return e.tag===3?t:null}function d(A){if(A.tag===13){var e=A.memoizedState;if(e===null&&(A=A.alternate,A!==null&&(e=A.memoizedState)),e!==null)return e.dehydrated}return null}function h(A){if(f(A)!==A)throw Error(l(188))}function g(A){var e=A.alternate;if(!e){if(e=f(A),e===null)throw Error(l(188));return e!==A?null:A}for(var t=A,n=e;;){var s=t.return;if(s===null)break;var o=s.alternate;if(o===null){if(n=s.return,n!==null){t=n;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===t)return h(s),A;if(o===n)return h(s),e;o=o.sibling}throw Error(l(188))}if(t.return!==n.return)t=s,n=o;else{for(var B=!1,p=s.child;p;){if(p===t){B=!0,t=s,n=o;break}if(p===n){B=!0,n=s,t=o;break}p=p.sibling}if(!B){for(p=o.child;p;){if(p===t){B=!0,t=o,n=s;break}if(p===n){B=!0,n=o,t=s;break}p=p.sibling}if(!B)throw Error(l(189))}}if(t.alternate!==n)throw Error(l(190))}if(t.tag!==3)throw Error(l(188));return t.stateNode.current===t?A:e}function w(A){var e=A.tag;if(e===5||e===26||e===27||e===6)return A;for(A=A.child;A!==null;){if(e=w(A),e!==null)return e;A=A.sibling}return null}var Q=Object.assign,C=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),cA=Symbol.for("react.profiler"),iA=Symbol.for("react.provider"),tA=Symbol.for("react.consumer"),gA=Symbol.for("react.context"),uA=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),CA=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),BA=Symbol.for("react.memo_cache_sentinel"),nA=Symbol.iterator;function oA(A){return A===null||typeof A!="object"?null:(A=nA&&A[nA]||A["@@iterator"],typeof A=="function"?A:null)}var xA=Symbol.for("react.client.reference");function dA(A){if(A==null)return null;if(typeof A=="function")return A.$$typeof===xA?null:A.displayName||A.name||null;if(typeof A=="string")return A;switch(A){case j:return"Fragment";case cA:return"Profiler";case J:return"StrictMode";case q:return"Suspense";case Z:return"SuspenseList";case M:return"Activity"}if(typeof A=="object")switch(A.$$typeof){case _:return"Portal";case gA:return(A.displayName||"Context")+".Provider";case tA:return(A._context.displayName||"Context")+".Consumer";case uA:var e=A.render;return A=A.displayName,A||(A=e.displayName||e.name||"",A=A!==""?"ForwardRef("+A+")":"ForwardRef"),A;case CA:return e=A.displayName||null,e!==null?e:dA(A.type)||"Memo";case T:e=A._payload,A=A._init;try{return dA(A(e))}catch{}}return null}var R=Array.isArray,x=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},sA=[],m=-1;function G(A){return{current:A}}function lA(A){0>m||(A.current=sA[m],sA[m]=null,m--)}function aA(A,e){m++,sA[m]=A.current,A.current=e}var F=G(null),P=G(null),W=G(null),bA=G(null);function hA(A,e){switch(aA(W,e),aA(P,A),aA(F,null),e.nodeType){case 9:case 11:A=(A=e.documentElement)&&(A=A.namespaceURI)?cg(A):0;break;default:if(A=e.tagName,e=e.namespaceURI)e=cg(e),A=ug(e,A);else switch(A){case"svg":A=1;break;case"math":A=2;break;default:A=0}}lA(F),aA(F,A)}function OA(){lA(F),lA(P),lA(W)}function re(A){A.memoizedState!==null&&aA(bA,A);var e=F.current,t=ug(e,A.type);e!==t&&(aA(P,A),aA(F,t))}function He(A){P.current===A&&(lA(F),lA(P)),bA.current===A&&(lA(bA),Wr._currentValue=z)}var Le=Object.prototype.hasOwnProperty,Ke=r.unstable_scheduleCallback,xe=r.unstable_cancelCallback,vt=r.unstable_shouldYield,jn=r.unstable_requestPaint,Qe=r.unstable_now,Nt=r.unstable_getCurrentPriorityLevel,tn=r.unstable_ImmediatePriority,nn=r.unstable_UserBlockingPriority,bt=r.unstable_NormalPriority,Gn=r.unstable_LowPriority,X=r.unstable_IdlePriority,rA=r.log,I=r.unstable_setDisableYieldValue,H=null,$=null;function fA(A){if(typeof rA=="function"&&I(A),$&&typeof $.setStrictMode=="function")try{$.setStrictMode(H,A)}catch{}}var L=Math.clz32?Math.clz32:kA,AA=Math.log,TA=Math.LN2;function kA(A){return A>>>=0,A===0?32:31-(AA(A)/TA|0)|0}var _A=256,E=4194304;function QA(A){var e=A&42;if(e!==0)return e;switch(A&-A){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return A&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return A}}function wA(A,e,t){var n=A.pendingLanes;if(n===0)return 0;var s=0,o=A.suspendedLanes,B=A.pingedLanes;A=A.warmLanes;var p=n&134217727;return p!==0?(n=p&~o,n!==0?s=QA(n):(B&=p,B!==0?s=QA(B):t||(t=p&~A,t!==0&&(s=QA(t))))):(p=n&~o,p!==0?s=QA(p):B!==0?s=QA(B):t||(t=n&~A,t!==0&&(s=QA(t)))),s===0?0:e!==0&&e!==s&&(e&o)===0&&(o=s&-s,t=e&-e,o>=t||o===32&&(t&4194048)!==0)?e:s}function UA(A,e){return(A.pendingLanes&~(A.suspendedLanes&~A.pingedLanes)&e)===0}function te(A,e){switch(A){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oe(){var A=_A;return _A<<=1,(_A&4194048)===0&&(_A=256),A}function ce(){var A=E;return E<<=1,(E&62914560)===0&&(E=4194304),A}function zA(A){for(var e=[],t=0;31>t;t++)e.push(A);return e}function jA(A,e){A.pendingLanes|=e,e!==268435456&&(A.suspendedLanes=0,A.pingedLanes=0,A.warmLanes=0)}function Ve(A,e,t,n,s,o){var B=A.pendingLanes;A.pendingLanes=t,A.suspendedLanes=0,A.pingedLanes=0,A.warmLanes=0,A.expiredLanes&=t,A.entangledLanes&=t,A.errorRecoveryDisabledLanes&=t,A.shellSuspendCounter=0;var p=A.entanglements,U=A.expirationTimes,D=A.hiddenUpdates;for(t=B&~t;0<t;){var k=31-L(t),Y=1<<k;p[k]=0,U[k]=-1;var N=D[k];if(N!==null)for(D[k]=null,k=0;k<N.length;k++){var K=N[k];K!==null&&(K.lane&=-536870913)}t&=~Y}n!==0&&Lt(A,n,0),o!==0&&s===0&&A.tag!==0&&(A.suspendedLanes|=o&~(B&~e))}function Lt(A,e,t){A.pendingLanes|=e,A.suspendedLanes&=~e;var n=31-L(e);A.entangledLanes|=e,A.entanglements[n]=A.entanglements[n]|1073741824|t&4194090}function an(A,e){var t=A.entangledLanes|=e;for(A=A.entanglements;t;){var n=31-L(t),s=1<<n;s&e|A[n]&e&&(A[n]|=e),t&=~s}}function rn(A){switch(A){case 2:A=1;break;case 8:A=4;break;case 32:A=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:A=128;break;case 268435456:A=134217728;break;default:A=0}return A}function ln(A){return A&=-A,2<A?8<A?(A&134217727)!==0?32:268435456:8:2}function ca(){var A=O.p;return A!==0?A:(A=window.event,A===void 0?32:Sg(A.type))}function np(A,e){var t=O.p;try{return O.p=A,e()}finally{O.p=t}}var sn=Math.random().toString(36).slice(2),Me="__reactFiber$"+sn,ze="__reactProps$"+sn,ua="__reactContainer$"+sn,Is="__reactEvents$"+sn,ap="__reactListeners$"+sn,rp="__reactHandles$"+sn,Wu="__reactResources$"+sn,sr="__reactMarker$"+sn;function Ns(A){delete A[Me],delete A[ze],delete A[Is],delete A[ap],delete A[rp]}function fa(A){var e=A[Me];if(e)return e;for(var t=A.parentNode;t;){if(e=t[ua]||t[Me]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(A=gg(A);A!==null;){if(t=A[Me])return t;A=gg(A)}return e}A=t,t=A.parentNode}return null}function da(A){if(A=A[Me]||A[ua]){var e=A.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return A}return null}function or(A){var e=A.tag;if(e===5||e===26||e===27||e===6)return A.stateNode;throw Error(l(33))}function Ba(A){var e=A[Wu];return e||(e=A[Wu]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ve(A){A[sr]=!0}var Pu=new Set,$u={};function kn(A,e){ga(A,e),ga(A+"Capture",e)}function ga(A,e){for($u[A]=e,A=0;A<e.length;A++)Pu.add(e[A])}var lp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Af={},ef={};function ip(A){return Le.call(ef,A)?!0:Le.call(Af,A)?!1:lp.test(A)?ef[A]=!0:(Af[A]=!0,!1)}function El(A,e,t){if(ip(e))if(t===null)A.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":A.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){A.removeAttribute(e);return}}A.setAttribute(e,""+t)}}function Hl(A,e,t){if(t===null)A.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":A.removeAttribute(e);return}A.setAttribute(e,""+t)}}function Kt(A,e,t,n){if(n===null)A.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":A.removeAttribute(t);return}A.setAttributeNS(e,t,""+n)}}var Ls,tf;function ha(A){if(Ls===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ls=e&&e[1]||"",tf=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ls+A+tf}var Ks=!1;function Ms(A,e){if(!A||Ks)return"";Ks=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(K){var N=K}Reflect.construct(A,[],Y)}else{try{Y.call()}catch(K){N=K}A.call(Y.prototype)}}else{try{throw Error()}catch(K){N=K}(Y=A())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(K){if(K&&N&&typeof K.stack=="string")return[K.stack,N.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),B=o[0],p=o[1];if(B&&p){var U=B.split(`
`),D=p.split(`
`);for(s=n=0;n<U.length&&!U[n].includes("DetermineComponentFrameRoot");)n++;for(;s<D.length&&!D[s].includes("DetermineComponentFrameRoot");)s++;if(n===U.length||s===D.length)for(n=U.length-1,s=D.length-1;1<=n&&0<=s&&U[n]!==D[s];)s--;for(;1<=n&&0<=s;n--,s--)if(U[n]!==D[s]){if(n!==1||s!==1)do if(n--,s--,0>s||U[n]!==D[s]){var k=`
`+U[n].replace(" at new "," at ");return A.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",A.displayName)),k}while(1<=n&&0<=s);break}}}finally{Ks=!1,Error.prepareStackTrace=t}return(t=A?A.displayName||A.name:"")?ha(t):""}function sp(A){switch(A.tag){case 26:case 27:case 5:return ha(A.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 15:return Ms(A.type,!1);case 11:return Ms(A.type.render,!1);case 1:return Ms(A.type,!0);case 31:return ha("Activity");default:return""}}function nf(A){try{var e="";do e+=sp(A),A=A.return;while(A);return e}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function rt(A){switch(typeof A){case"bigint":case"boolean":case"number":case"string":case"undefined":return A;case"object":return A;default:return""}}function af(A){var e=A.type;return(A=A.nodeName)&&A.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function op(A){var e=af(A)?"checked":"value",t=Object.getOwnPropertyDescriptor(A.constructor.prototype,e),n=""+A[e];if(!A.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,o=t.set;return Object.defineProperty(A,e,{configurable:!0,get:function(){return s.call(this)},set:function(B){n=""+B,o.call(this,B)}}),Object.defineProperty(A,e,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(B){n=""+B},stopTracking:function(){A._valueTracker=null,delete A[e]}}}}function Sl(A){A._valueTracker||(A._valueTracker=op(A))}function rf(A){if(!A)return!1;var e=A._valueTracker;if(!e)return!0;var t=e.getValue(),n="";return A&&(n=af(A)?A.checked?"true":"false":A.value),A=n,A!==t?(e.setValue(A),!0):!1}function Dl(A){if(A=A||(typeof document<"u"?document:void 0),typeof A>"u")return null;try{return A.activeElement||A.body}catch{return A.body}}var cp=/[\n"\\]/g;function lt(A){return A.replace(cp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Os(A,e,t,n,s,o,B,p){A.name="",B!=null&&typeof B!="function"&&typeof B!="symbol"&&typeof B!="boolean"?A.type=B:A.removeAttribute("type"),e!=null?B==="number"?(e===0&&A.value===""||A.value!=e)&&(A.value=""+rt(e)):A.value!==""+rt(e)&&(A.value=""+rt(e)):B!=="submit"&&B!=="reset"||A.removeAttribute("value"),e!=null?Rs(A,B,rt(e)):t!=null?Rs(A,B,rt(t)):n!=null&&A.removeAttribute("value"),s==null&&o!=null&&(A.defaultChecked=!!o),s!=null&&(A.checked=s&&typeof s!="function"&&typeof s!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?A.name=""+rt(p):A.removeAttribute("name")}function lf(A,e,t,n,s,o,B,p){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(A.type=o),e!=null||t!=null){if(!(o!=="submit"&&o!=="reset"||e!=null))return;t=t!=null?""+rt(t):"",e=e!=null?""+rt(e):t,p||e===A.value||(A.value=e),A.defaultValue=e}n=n??s,n=typeof n!="function"&&typeof n!="symbol"&&!!n,A.checked=p?A.checked:!!n,A.defaultChecked=!!n,B!=null&&typeof B!="function"&&typeof B!="symbol"&&typeof B!="boolean"&&(A.name=B)}function Rs(A,e,t){e==="number"&&Dl(A.ownerDocument)===A||A.defaultValue===""+t||(A.defaultValue=""+t)}function pa(A,e,t,n){if(A=A.options,e){e={};for(var s=0;s<t.length;s++)e["$"+t[s]]=!0;for(t=0;t<A.length;t++)s=e.hasOwnProperty("$"+A[t].value),A[t].selected!==s&&(A[t].selected=s),s&&n&&(A[t].defaultSelected=!0)}else{for(t=""+rt(t),e=null,s=0;s<A.length;s++){if(A[s].value===t){A[s].selected=!0,n&&(A[s].defaultSelected=!0);return}e!==null||A[s].disabled||(e=A[s])}e!==null&&(e.selected=!0)}}function sf(A,e,t){if(e!=null&&(e=""+rt(e),e!==A.value&&(A.value=e),t==null)){A.defaultValue!==e&&(A.defaultValue=e);return}A.defaultValue=t!=null?""+rt(t):""}function of(A,e,t,n){if(e==null){if(n!=null){if(t!=null)throw Error(l(92));if(R(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),e=t}t=rt(e),A.defaultValue=t,n=A.textContent,n===t&&n!==""&&n!==null&&(A.value=n)}function wa(A,e){if(e){var t=A.firstChild;if(t&&t===A.lastChild&&t.nodeType===3){t.nodeValue=e;return}}A.textContent=e}var up=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cf(A,e,t){var n=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?A.setProperty(e,""):e==="float"?A.cssFloat="":A[e]="":n?A.setProperty(e,t):typeof t!="number"||t===0||up.has(e)?e==="float"?A.cssFloat=t:A[e]=(""+t).trim():A[e]=t+"px"}function uf(A,e,t){if(e!=null&&typeof e!="object")throw Error(l(62));if(A=A.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?A.setProperty(n,""):n==="float"?A.cssFloat="":A[n]="");for(var s in e)n=e[s],e.hasOwnProperty(s)&&t[s]!==n&&cf(A,s,n)}else for(var o in e)e.hasOwnProperty(o)&&cf(A,o,e[o])}function js(A){if(A.indexOf("-")===-1)return!1;switch(A){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),dp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tl(A){return dp.test(""+A)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":A}var Gs=null;function ks(A){return A=A.target||A.srcElement||window,A.correspondingUseElement&&(A=A.correspondingUseElement),A.nodeType===3?A.parentNode:A}var Qa=null,ma=null;function ff(A){var e=da(A);if(e&&(A=e.stateNode)){var t=A[ze]||null;A:switch(A=e.stateNode,e.type){case"input":if(Os(A,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=A;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+lt(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var n=t[e];if(n!==A&&n.form===A.form){var s=n[ze]||null;if(!s)throw Error(l(90));Os(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<t.length;e++)n=t[e],n.form===A.form&&rf(n)}break A;case"textarea":sf(A,t.value,t.defaultValue);break A;case"select":e=t.value,e!=null&&pa(A,!!t.multiple,e,!1)}}}var _s=!1;function df(A,e,t){if(_s)return A(e,t);_s=!0;try{var n=A(e);return n}finally{if(_s=!1,(Qa!==null||ma!==null)&&(pi(),Qa&&(e=Qa,A=ma,ma=Qa=null,ff(e),A)))for(e=0;e<A.length;e++)ff(A[e])}}function cr(A,e){var t=A.stateNode;if(t===null)return null;var n=t[ze]||null;if(n===null)return null;t=n[e];A:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(A=A.type,n=!(A==="button"||A==="input"||A==="select"||A==="textarea")),A=!n;break A;default:A=!1}if(A)return null;if(t&&typeof t!="function")throw Error(l(231,e,typeof t));return t}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vs=!1;if(Mt)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){Vs=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{Vs=!1}var on=null,zs=null,Il=null;function Bf(){if(Il)return Il;var A,e=zs,t=e.length,n,s="value"in on?on.value:on.textContent,o=s.length;for(A=0;A<t&&e[A]===s[A];A++);var B=t-A;for(n=1;n<=B&&e[t-n]===s[o-n];n++);return Il=s.slice(A,1<n?1-n:void 0)}function Nl(A){var e=A.keyCode;return"charCode"in A?(A=A.charCode,A===0&&e===13&&(A=13)):A=e,A===10&&(A=13),32<=A||A===13?A:0}function Ll(){return!0}function gf(){return!1}function Xe(A){function e(t,n,s,o,B){this._reactName=t,this._targetInst=s,this.type=n,this.nativeEvent=o,this.target=B,this.currentTarget=null;for(var p in A)A.hasOwnProperty(p)&&(t=A[p],this[p]=t?t(o):o[p]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ll:gf,this.isPropagationStopped=gf,this}return Q(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),e}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(A){return A.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Xe(_n),fr=Q({},_n,{view:0,detail:0}),Bp=Xe(fr),Xs,Ys,dr,Ml=Q({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zs,button:0,buttons:0,relatedTarget:function(A){return A.relatedTarget===void 0?A.fromElement===A.srcElement?A.toElement:A.fromElement:A.relatedTarget},movementX:function(A){return"movementX"in A?A.movementX:(A!==dr&&(dr&&A.type==="mousemove"?(Xs=A.screenX-dr.screenX,Ys=A.screenY-dr.screenY):Ys=Xs=0,dr=A),Xs)},movementY:function(A){return"movementY"in A?A.movementY:Ys}}),hf=Xe(Ml),gp=Q({},Ml,{dataTransfer:0}),hp=Xe(gp),pp=Q({},fr,{relatedTarget:0}),Js=Xe(pp),wp=Q({},_n,{animationName:0,elapsedTime:0,pseudoElement:0}),Qp=Xe(wp),mp=Q({},_n,{clipboardData:function(A){return"clipboardData"in A?A.clipboardData:window.clipboardData}}),Cp=Xe(mp),Up=Q({},_n,{data:0}),pf=Xe(Up),xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yp(A){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(A):(A=bp[A])?!!e[A]:!1}function Zs(){return yp}var Fp=Q({},fr,{key:function(A){if(A.key){var e=xp[A.key]||A.key;if(e!=="Unidentified")return e}return A.type==="keypress"?(A=Nl(A),A===13?"Enter":String.fromCharCode(A)):A.type==="keydown"||A.type==="keyup"?vp[A.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zs,charCode:function(A){return A.type==="keypress"?Nl(A):0},keyCode:function(A){return A.type==="keydown"||A.type==="keyup"?A.keyCode:0},which:function(A){return A.type==="keypress"?Nl(A):A.type==="keydown"||A.type==="keyup"?A.keyCode:0}}),Ep=Xe(Fp),Hp=Q({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wf=Xe(Hp),Sp=Q({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zs}),Dp=Xe(Sp),Tp=Q({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ip=Xe(Tp),Np=Q({},Ml,{deltaX:function(A){return"deltaX"in A?A.deltaX:"wheelDeltaX"in A?-A.wheelDeltaX:0},deltaY:function(A){return"deltaY"in A?A.deltaY:"wheelDeltaY"in A?-A.wheelDeltaY:"wheelDelta"in A?-A.wheelDelta:0},deltaZ:0,deltaMode:0}),Lp=Xe(Np),Kp=Q({},_n,{newState:0,oldState:0}),Mp=Xe(Kp),Op=[9,13,27,32],qs=Mt&&"CompositionEvent"in window,Br=null;Mt&&"documentMode"in document&&(Br=document.documentMode);var Rp=Mt&&"TextEvent"in window&&!Br,Qf=Mt&&(!qs||Br&&8<Br&&11>=Br),mf=" ",Cf=!1;function Uf(A,e){switch(A){case"keyup":return Op.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xf(A){return A=A.detail,typeof A=="object"&&"data"in A?A.data:null}var Ca=!1;function jp(A,e){switch(A){case"compositionend":return xf(e);case"keypress":return e.which!==32?null:(Cf=!0,mf);case"textInput":return A=e.data,A===mf&&Cf?null:A;default:return null}}function Gp(A,e){if(Ca)return A==="compositionend"||!qs&&Uf(A,e)?(A=Bf(),Il=zs=on=null,Ca=!1,A):null;switch(A){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Qf&&e.locale!=="ko"?null:e.data;default:return null}}var kp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vf(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e==="input"?!!kp[A.type]:e==="textarea"}function bf(A,e,t,n){Qa?ma?ma.push(n):ma=[n]:Qa=n,e=xi(e,"onChange"),0<e.length&&(t=new Kl("onChange","change",null,t,n),A.push({event:t,listeners:e}))}var gr=null,hr=null;function _p(A){rg(A,0)}function Ol(A){var e=or(A);if(rf(e))return A}function yf(A,e){if(A==="change")return e}var Ff=!1;if(Mt){var Ws;if(Mt){var Ps="oninput"in document;if(!Ps){var Ef=document.createElement("div");Ef.setAttribute("oninput","return;"),Ps=typeof Ef.oninput=="function"}Ws=Ps}else Ws=!1;Ff=Ws&&(!document.documentMode||9<document.documentMode)}function Hf(){gr&&(gr.detachEvent("onpropertychange",Sf),hr=gr=null)}function Sf(A){if(A.propertyName==="value"&&Ol(hr)){var e=[];bf(e,hr,A,ks(A)),df(_p,e)}}function Vp(A,e,t){A==="focusin"?(Hf(),gr=e,hr=t,gr.attachEvent("onpropertychange",Sf)):A==="focusout"&&Hf()}function zp(A){if(A==="selectionchange"||A==="keyup"||A==="keydown")return Ol(hr)}function Xp(A,e){if(A==="click")return Ol(e)}function Yp(A,e){if(A==="input"||A==="change")return Ol(e)}function Jp(A,e){return A===e&&(A!==0||1/A===1/e)||A!==A&&e!==e}var We=typeof Object.is=="function"?Object.is:Jp;function pr(A,e){if(We(A,e))return!0;if(typeof A!="object"||A===null||typeof e!="object"||e===null)return!1;var t=Object.keys(A),n=Object.keys(e);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var s=t[n];if(!Le.call(e,s)||!We(A[s],e[s]))return!1}return!0}function Df(A){for(;A&&A.firstChild;)A=A.firstChild;return A}function Tf(A,e){var t=Df(A);A=0;for(var n;t;){if(t.nodeType===3){if(n=A+t.textContent.length,A<=e&&n>=e)return{node:t,offset:e-A};A=n}A:{for(;t;){if(t.nextSibling){t=t.nextSibling;break A}t=t.parentNode}t=void 0}t=Df(t)}}function If(A,e){return A&&e?A===e?!0:A&&A.nodeType===3?!1:e&&e.nodeType===3?If(A,e.parentNode):"contains"in A?A.contains(e):A.compareDocumentPosition?!!(A.compareDocumentPosition(e)&16):!1:!1}function Nf(A){A=A!=null&&A.ownerDocument!=null&&A.ownerDocument.defaultView!=null?A.ownerDocument.defaultView:window;for(var e=Dl(A.document);e instanceof A.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)A=e.contentWindow;else break;e=Dl(A.document)}return e}function $s(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e&&(e==="input"&&(A.type==="text"||A.type==="search"||A.type==="tel"||A.type==="url"||A.type==="password")||e==="textarea"||A.contentEditable==="true")}var Zp=Mt&&"documentMode"in document&&11>=document.documentMode,Ua=null,Ao=null,wr=null,eo=!1;function Lf(A,e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;eo||Ua==null||Ua!==Dl(n)||(n=Ua,"selectionStart"in n&&$s(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),wr&&pr(wr,n)||(wr=n,n=xi(Ao,"onSelect"),0<n.length&&(e=new Kl("onSelect","select",null,e,t),A.push({event:e,listeners:n}),e.target=Ua)))}function Vn(A,e){var t={};return t[A.toLowerCase()]=e.toLowerCase(),t["Webkit"+A]="webkit"+e,t["Moz"+A]="moz"+e,t}var xa={animationend:Vn("Animation","AnimationEnd"),animationiteration:Vn("Animation","AnimationIteration"),animationstart:Vn("Animation","AnimationStart"),transitionrun:Vn("Transition","TransitionRun"),transitionstart:Vn("Transition","TransitionStart"),transitioncancel:Vn("Transition","TransitionCancel"),transitionend:Vn("Transition","TransitionEnd")},to={},Kf={};Mt&&(Kf=document.createElement("div").style,"AnimationEvent"in window||(delete xa.animationend.animation,delete xa.animationiteration.animation,delete xa.animationstart.animation),"TransitionEvent"in window||delete xa.transitionend.transition);function zn(A){if(to[A])return to[A];if(!xa[A])return A;var e=xa[A],t;for(t in e)if(e.hasOwnProperty(t)&&t in Kf)return to[A]=e[t];return A}var Mf=zn("animationend"),Of=zn("animationiteration"),Rf=zn("animationstart"),qp=zn("transitionrun"),Wp=zn("transitionstart"),Pp=zn("transitioncancel"),jf=zn("transitionend"),Gf=new Map,no="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");no.push("scrollEnd");function Qt(A,e){Gf.set(A,e),kn(e,[A])}var kf=new WeakMap;function it(A,e){if(typeof A=="object"&&A!==null){var t=kf.get(A);return t!==void 0?t:(e={value:A,source:e,stack:nf(e)},kf.set(A,e),e)}return{value:A,source:e,stack:nf(e)}}var st=[],va=0,ao=0;function Rl(){for(var A=va,e=ao=va=0;e<A;){var t=st[e];st[e++]=null;var n=st[e];st[e++]=null;var s=st[e];st[e++]=null;var o=st[e];if(st[e++]=null,n!==null&&s!==null){var B=n.pending;B===null?s.next=s:(s.next=B.next,B.next=s),n.pending=s}o!==0&&_f(t,s,o)}}function jl(A,e,t,n){st[va++]=A,st[va++]=e,st[va++]=t,st[va++]=n,ao|=n,A.lanes|=n,A=A.alternate,A!==null&&(A.lanes|=n)}function ro(A,e,t,n){return jl(A,e,t,n),Gl(A)}function ba(A,e){return jl(A,null,null,e),Gl(A)}function _f(A,e,t){A.lanes|=t;var n=A.alternate;n!==null&&(n.lanes|=t);for(var s=!1,o=A.return;o!==null;)o.childLanes|=t,n=o.alternate,n!==null&&(n.childLanes|=t),o.tag===22&&(A=o.stateNode,A===null||A._visibility&1||(s=!0)),A=o,o=o.return;return A.tag===3?(o=A.stateNode,s&&e!==null&&(s=31-L(t),A=o.hiddenUpdates,n=A[s],n===null?A[s]=[e]:n.push(e),e.lane=t|536870912),o):null}function Gl(A){if(50<_r)throw _r=0,fc=null,Error(l(185));for(var e=A.return;e!==null;)A=e,e=A.return;return A.tag===3?A.stateNode:null}var ya={};function $p(A,e,t,n){this.tag=A,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(A,e,t,n){return new $p(A,e,t,n)}function lo(A){return A=A.prototype,!(!A||!A.isReactComponent)}function Ot(A,e){var t=A.alternate;return t===null?(t=Pe(A.tag,e,A.key,A.mode),t.elementType=A.elementType,t.type=A.type,t.stateNode=A.stateNode,t.alternate=A,A.alternate=t):(t.pendingProps=e,t.type=A.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=A.flags&65011712,t.childLanes=A.childLanes,t.lanes=A.lanes,t.child=A.child,t.memoizedProps=A.memoizedProps,t.memoizedState=A.memoizedState,t.updateQueue=A.updateQueue,e=A.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=A.sibling,t.index=A.index,t.ref=A.ref,t.refCleanup=A.refCleanup,t}function Vf(A,e){A.flags&=65011714;var t=A.alternate;return t===null?(A.childLanes=0,A.lanes=e,A.child=null,A.subtreeFlags=0,A.memoizedProps=null,A.memoizedState=null,A.updateQueue=null,A.dependencies=null,A.stateNode=null):(A.childLanes=t.childLanes,A.lanes=t.lanes,A.child=t.child,A.subtreeFlags=0,A.deletions=null,A.memoizedProps=t.memoizedProps,A.memoizedState=t.memoizedState,A.updateQueue=t.updateQueue,A.type=t.type,e=t.dependencies,A.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),A}function kl(A,e,t,n,s,o){var B=0;if(n=A,typeof A=="function")lo(A)&&(B=1);else if(typeof A=="string")B=eQ(A,t,F.current)?26:A==="html"||A==="head"||A==="body"?27:5;else A:switch(A){case M:return A=Pe(31,t,e,s),A.elementType=M,A.lanes=o,A;case j:return Xn(t.children,s,o,e);case J:B=8,s|=24;break;case cA:return A=Pe(12,t,e,s|2),A.elementType=cA,A.lanes=o,A;case q:return A=Pe(13,t,e,s),A.elementType=q,A.lanes=o,A;case Z:return A=Pe(19,t,e,s),A.elementType=Z,A.lanes=o,A;default:if(typeof A=="object"&&A!==null)switch(A.$$typeof){case iA:case gA:B=10;break A;case tA:B=9;break A;case uA:B=11;break A;case CA:B=14;break A;case T:B=16,n=null;break A}B=29,t=Error(l(130,A===null?"null":typeof A,"")),n=null}return e=Pe(B,t,e,s),e.elementType=A,e.type=n,e.lanes=o,e}function Xn(A,e,t,n){return A=Pe(7,A,n,e),A.lanes=t,A}function io(A,e,t){return A=Pe(6,A,null,e),A.lanes=t,A}function so(A,e,t){return e=Pe(4,A.children!==null?A.children:[],A.key,e),e.lanes=t,e.stateNode={containerInfo:A.containerInfo,pendingChildren:null,implementation:A.implementation},e}var Fa=[],Ea=0,_l=null,Vl=0,ot=[],ct=0,Yn=null,Rt=1,jt="";function Jn(A,e){Fa[Ea++]=Vl,Fa[Ea++]=_l,_l=A,Vl=e}function zf(A,e,t){ot[ct++]=Rt,ot[ct++]=jt,ot[ct++]=Yn,Yn=A;var n=Rt;A=jt;var s=32-L(n)-1;n&=~(1<<s),t+=1;var o=32-L(e)+s;if(30<o){var B=s-s%5;o=(n&(1<<B)-1).toString(32),n>>=B,s-=B,Rt=1<<32-L(e)+s|t<<s|n,jt=o+A}else Rt=1<<o|t<<s|n,jt=A}function oo(A){A.return!==null&&(Jn(A,1),zf(A,1,0))}function co(A){for(;A===_l;)_l=Fa[--Ea],Fa[Ea]=null,Vl=Fa[--Ea],Fa[Ea]=null;for(;A===Yn;)Yn=ot[--ct],ot[ct]=null,jt=ot[--ct],ot[ct]=null,Rt=ot[--ct],ot[ct]=null}var ke=null,ie=null,VA=!1,Zn=null,yt=!1,uo=Error(l(519));function qn(A){var e=Error(l(418,""));throw Cr(it(e,A)),uo}function Xf(A){var e=A.stateNode,t=A.type,n=A.memoizedProps;switch(e[Me]=A,e[ze]=n,t){case"dialog":KA("cancel",e),KA("close",e);break;case"iframe":case"object":case"embed":KA("load",e);break;case"video":case"audio":for(t=0;t<zr.length;t++)KA(zr[t],e);break;case"source":KA("error",e);break;case"img":case"image":case"link":KA("error",e),KA("load",e);break;case"details":KA("toggle",e);break;case"input":KA("invalid",e),lf(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Sl(e);break;case"select":KA("invalid",e);break;case"textarea":KA("invalid",e),of(e,n.value,n.defaultValue,n.children),Sl(e)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||n.suppressHydrationWarning===!0||og(e.textContent,t)?(n.popover!=null&&(KA("beforetoggle",e),KA("toggle",e)),n.onScroll!=null&&KA("scroll",e),n.onScrollEnd!=null&&KA("scrollend",e),n.onClick!=null&&(e.onclick=vi),e=!0):e=!1,e||qn(A)}function Yf(A){for(ke=A.return;ke;)switch(ke.tag){case 5:case 13:yt=!1;return;case 27:case 3:yt=!0;return;default:ke=ke.return}}function Qr(A){if(A!==ke)return!1;if(!VA)return Yf(A),VA=!0,!1;var e=A.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=A.type,t=!(t!=="form"&&t!=="button")||Ec(A.type,A.memoizedProps)),t=!t),t&&ie&&qn(A),Yf(A),e===13){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(l(317));A:{for(A=A.nextSibling,e=0;A;){if(A.nodeType===8)if(t=A.data,t==="/$"){if(e===0){ie=Ct(A.nextSibling);break A}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++;A=A.nextSibling}ie=null}}else e===27?(e=ie,bn(A.type)?(A=Tc,Tc=null,ie=A):ie=e):ie=ke?Ct(A.stateNode.nextSibling):null;return!0}function mr(){ie=ke=null,VA=!1}function Jf(){var A=Zn;return A!==null&&(Ze===null?Ze=A:Ze.push.apply(Ze,A),Zn=null),A}function Cr(A){Zn===null?Zn=[A]:Zn.push(A)}var fo=G(null),Wn=null,Gt=null;function cn(A,e,t){aA(fo,e._currentValue),e._currentValue=t}function kt(A){A._currentValue=fo.current,lA(fo)}function Bo(A,e,t){for(;A!==null;){var n=A.alternate;if((A.childLanes&e)!==e?(A.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),A===t)break;A=A.return}}function go(A,e,t,n){var s=A.child;for(s!==null&&(s.return=A);s!==null;){var o=s.dependencies;if(o!==null){var B=s.child;o=o.firstContext;A:for(;o!==null;){var p=o;o=s;for(var U=0;U<e.length;U++)if(p.context===e[U]){o.lanes|=t,p=o.alternate,p!==null&&(p.lanes|=t),Bo(o.return,t,A),n||(B=null);break A}o=p.next}}else if(s.tag===18){if(B=s.return,B===null)throw Error(l(341));B.lanes|=t,o=B.alternate,o!==null&&(o.lanes|=t),Bo(B,t,A),B=null}else B=s.child;if(B!==null)B.return=s;else for(B=s;B!==null;){if(B===A){B=null;break}if(s=B.sibling,s!==null){s.return=B.return,B=s;break}B=B.return}s=B}}function Ur(A,e,t,n){A=null;for(var s=e,o=!1;s!==null;){if(!o){if((s.flags&524288)!==0)o=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var B=s.alternate;if(B===null)throw Error(l(387));if(B=B.memoizedProps,B!==null){var p=s.type;We(s.pendingProps.value,B.value)||(A!==null?A.push(p):A=[p])}}else if(s===bA.current){if(B=s.alternate,B===null)throw Error(l(387));B.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(A!==null?A.push(Wr):A=[Wr])}s=s.return}A!==null&&go(e,A,t,n),e.flags|=262144}function zl(A){for(A=A.firstContext;A!==null;){if(!We(A.context._currentValue,A.memoizedValue))return!0;A=A.next}return!1}function Pn(A){Wn=A,Gt=null,A=A.dependencies,A!==null&&(A.firstContext=null)}function Oe(A){return Zf(Wn,A)}function Xl(A,e){return Wn===null&&Pn(A),Zf(A,e)}function Zf(A,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},Gt===null){if(A===null)throw Error(l(308));Gt=e,A.dependencies={lanes:0,firstContext:e},A.flags|=524288}else Gt=Gt.next=e;return t}var Aw=typeof AbortController<"u"?AbortController:function(){var A=[],e=this.signal={aborted:!1,addEventListener:function(t,n){A.push(n)}};this.abort=function(){e.aborted=!0,A.forEach(function(t){return t()})}},ew=r.unstable_scheduleCallback,tw=r.unstable_NormalPriority,me={$$typeof:gA,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ho(){return{controller:new Aw,data:new Map,refCount:0}}function xr(A){A.refCount--,A.refCount===0&&ew(tw,function(){A.controller.abort()})}var vr=null,po=0,Ha=0,Sa=null;function nw(A,e){if(vr===null){var t=vr=[];po=0,Ha=Qc(),Sa={status:"pending",value:void 0,then:function(n){t.push(n)}}}return po++,e.then(qf,qf),e}function qf(){if(--po===0&&vr!==null){Sa!==null&&(Sa.status="fulfilled");var A=vr;vr=null,Ha=0,Sa=null;for(var e=0;e<A.length;e++)(0,A[e])()}}function aw(A,e){var t=[],n={status:"pending",value:null,reason:null,then:function(s){t.push(s)}};return A.then(function(){n.status="fulfilled",n.value=e;for(var s=0;s<t.length;s++)(0,t[s])(e)},function(s){for(n.status="rejected",n.reason=s,s=0;s<t.length;s++)(0,t[s])(void 0)}),n}var Wf=x.S;x.S=function(A,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&nw(A,e),Wf!==null&&Wf(A,e)};var $n=G(null);function wo(){var A=$n.current;return A!==null?A:Ae.pooledCache}function Yl(A,e){e===null?aA($n,$n.current):aA($n,e.pool)}function Pf(){var A=wo();return A===null?null:{parent:me._currentValue,pool:A}}var br=Error(l(460)),$f=Error(l(474)),Jl=Error(l(542)),Qo={then:function(){}};function Ad(A){return A=A.status,A==="fulfilled"||A==="rejected"}function Zl(){}function ed(A,e,t){switch(t=A[t],t===void 0?A.push(e):t!==e&&(e.then(Zl,Zl),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw A=e.reason,nd(A),A;default:if(typeof e.status=="string")e.then(Zl,Zl);else{if(A=Ae,A!==null&&100<A.shellSuspendCounter)throw Error(l(482));A=e,A.status="pending",A.then(function(n){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=n}},function(n){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw A=e.reason,nd(A),A}throw yr=e,br}}var yr=null;function td(){if(yr===null)throw Error(l(459));var A=yr;return yr=null,A}function nd(A){if(A===br||A===Jl)throw Error(l(483))}var un=!1;function mo(A){A.updateQueue={baseState:A.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Co(A,e){A=A.updateQueue,e.updateQueue===A&&(e.updateQueue={baseState:A.baseState,firstBaseUpdate:A.firstBaseUpdate,lastBaseUpdate:A.lastBaseUpdate,shared:A.shared,callbacks:null})}function fn(A){return{lane:A,tag:0,payload:null,callback:null,next:null}}function dn(A,e,t){var n=A.updateQueue;if(n===null)return null;if(n=n.shared,(YA&2)!==0){var s=n.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),n.pending=e,e=Gl(A),_f(A,null,t),e}return jl(A,n,e,t),Gl(A)}function Fr(A,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var n=e.lanes;n&=A.pendingLanes,t|=n,e.lanes=t,an(A,t)}}function Uo(A,e){var t=A.updateQueue,n=A.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var s=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var B={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};o===null?s=o=B:o=o.next=B,t=t.next}while(t!==null);o===null?s=o=e:o=o.next=e}else s=o=e;t={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},A.updateQueue=t;return}A=t.lastBaseUpdate,A===null?t.firstBaseUpdate=e:A.next=e,t.lastBaseUpdate=e}var xo=!1;function Er(){if(xo){var A=Sa;if(A!==null)throw A}}function Hr(A,e,t,n){xo=!1;var s=A.updateQueue;un=!1;var o=s.firstBaseUpdate,B=s.lastBaseUpdate,p=s.shared.pending;if(p!==null){s.shared.pending=null;var U=p,D=U.next;U.next=null,B===null?o=D:B.next=D,B=U;var k=A.alternate;k!==null&&(k=k.updateQueue,p=k.lastBaseUpdate,p!==B&&(p===null?k.firstBaseUpdate=D:p.next=D,k.lastBaseUpdate=U))}if(o!==null){var Y=s.baseState;B=0,k=D=U=null,p=o;do{var N=p.lane&-536870913,K=N!==p.lane;if(K?(RA&N)===N:(n&N)===N){N!==0&&N===Ha&&(xo=!0),k!==null&&(k=k.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});A:{var HA=A,FA=p;N=e;var WA=t;switch(FA.tag){case 1:if(HA=FA.payload,typeof HA=="function"){Y=HA.call(WA,Y,N);break A}Y=HA;break A;case 3:HA.flags=HA.flags&-65537|128;case 0:if(HA=FA.payload,N=typeof HA=="function"?HA.call(WA,Y,N):HA,N==null)break A;Y=Q({},Y,N);break A;case 2:un=!0}}N=p.callback,N!==null&&(A.flags|=64,K&&(A.flags|=8192),K=s.callbacks,K===null?s.callbacks=[N]:K.push(N))}else K={lane:N,tag:p.tag,payload:p.payload,callback:p.callback,next:null},k===null?(D=k=K,U=Y):k=k.next=K,B|=N;if(p=p.next,p===null){if(p=s.shared.pending,p===null)break;K=p,p=K.next,K.next=null,s.lastBaseUpdate=K,s.shared.pending=null}}while(!0);k===null&&(U=Y),s.baseState=U,s.firstBaseUpdate=D,s.lastBaseUpdate=k,o===null&&(s.shared.lanes=0),Cn|=B,A.lanes=B,A.memoizedState=Y}}function ad(A,e){if(typeof A!="function")throw Error(l(191,A));A.call(e)}function rd(A,e){var t=A.callbacks;if(t!==null)for(A.callbacks=null,A=0;A<t.length;A++)ad(t[A],e)}var Da=G(null),ql=G(0);function ld(A,e){A=Zt,aA(ql,A),aA(Da,e),Zt=A|e.baseLanes}function vo(){aA(ql,Zt),aA(Da,Da.current)}function bo(){Zt=ql.current,lA(Da),lA(ql)}var Bn=0,IA=null,ZA=null,he=null,Wl=!1,Ta=!1,Aa=!1,Pl=0,Sr=0,Ia=null,rw=0;function ue(){throw Error(l(321))}function yo(A,e){if(e===null)return!1;for(var t=0;t<e.length&&t<A.length;t++)if(!We(A[t],e[t]))return!1;return!0}function Fo(A,e,t,n,s,o){return Bn=o,IA=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,x.H=A===null||A.memoizedState===null?_d:Vd,Aa=!1,o=t(n,s),Aa=!1,Ta&&(o=sd(e,t,n,s)),id(A),o}function id(A){x.H=ai;var e=ZA!==null&&ZA.next!==null;if(Bn=0,he=ZA=IA=null,Wl=!1,Sr=0,Ia=null,e)throw Error(l(300));A===null||be||(A=A.dependencies,A!==null&&zl(A)&&(be=!0))}function sd(A,e,t,n){IA=A;var s=0;do{if(Ta&&(Ia=null),Sr=0,Ta=!1,25<=s)throw Error(l(301));if(s+=1,he=ZA=null,A.updateQueue!=null){var o=A.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}x.H=fw,o=e(t,n)}while(Ta);return o}function lw(){var A=x.H,e=A.useState()[0];return e=typeof e.then=="function"?Dr(e):e,A=A.useState()[0],(ZA!==null?ZA.memoizedState:null)!==A&&(IA.flags|=1024),e}function Eo(){var A=Pl!==0;return Pl=0,A}function Ho(A,e,t){e.updateQueue=A.updateQueue,e.flags&=-2053,A.lanes&=~t}function So(A){if(Wl){for(A=A.memoizedState;A!==null;){var e=A.queue;e!==null&&(e.pending=null),A=A.next}Wl=!1}Bn=0,he=ZA=IA=null,Ta=!1,Sr=Pl=0,Ia=null}function Ye(){var A={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?IA.memoizedState=he=A:he=he.next=A,he}function pe(){if(ZA===null){var A=IA.alternate;A=A!==null?A.memoizedState:null}else A=ZA.next;var e=he===null?IA.memoizedState:he.next;if(e!==null)he=e,ZA=A;else{if(A===null)throw IA.alternate===null?Error(l(467)):Error(l(310));ZA=A,A={memoizedState:ZA.memoizedState,baseState:ZA.baseState,baseQueue:ZA.baseQueue,queue:ZA.queue,next:null},he===null?IA.memoizedState=he=A:he=he.next=A}return he}function Do(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dr(A){var e=Sr;return Sr+=1,Ia===null&&(Ia=[]),A=ed(Ia,A,e),e=IA,(he===null?e.memoizedState:he.next)===null&&(e=e.alternate,x.H=e===null||e.memoizedState===null?_d:Vd),A}function $l(A){if(A!==null&&typeof A=="object"){if(typeof A.then=="function")return Dr(A);if(A.$$typeof===gA)return Oe(A)}throw Error(l(438,String(A)))}function To(A){var e=null,t=IA.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var n=IA.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=Do(),IA.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(A),n=0;n<A;n++)t[n]=BA;return e.index++,t}function _t(A,e){return typeof e=="function"?e(A):e}function Ai(A){var e=pe();return Io(e,ZA,A)}function Io(A,e,t){var n=A.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=t;var s=A.baseQueue,o=n.pending;if(o!==null){if(s!==null){var B=s.next;s.next=o.next,o.next=B}e.baseQueue=s=o,n.pending=null}if(o=A.baseState,s===null)A.memoizedState=o;else{e=s.next;var p=B=null,U=null,D=e,k=!1;do{var Y=D.lane&-536870913;if(Y!==D.lane?(RA&Y)===Y:(Bn&Y)===Y){var N=D.revertLane;if(N===0)U!==null&&(U=U.next={lane:0,revertLane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),Y===Ha&&(k=!0);else if((Bn&N)===N){D=D.next,N===Ha&&(k=!0);continue}else Y={lane:0,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},U===null?(p=U=Y,B=o):U=U.next=Y,IA.lanes|=N,Cn|=N;Y=D.action,Aa&&t(o,Y),o=D.hasEagerState?D.eagerState:t(o,Y)}else N={lane:Y,revertLane:D.revertLane,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},U===null?(p=U=N,B=o):U=U.next=N,IA.lanes|=Y,Cn|=Y;D=D.next}while(D!==null&&D!==e);if(U===null?B=o:U.next=p,!We(o,A.memoizedState)&&(be=!0,k&&(t=Sa,t!==null)))throw t;A.memoizedState=o,A.baseState=B,A.baseQueue=U,n.lastRenderedState=o}return s===null&&(n.lanes=0),[A.memoizedState,n.dispatch]}function No(A){var e=pe(),t=e.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=A;var n=t.dispatch,s=t.pending,o=e.memoizedState;if(s!==null){t.pending=null;var B=s=s.next;do o=A(o,B.action),B=B.next;while(B!==s);We(o,e.memoizedState)||(be=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),t.lastRenderedState=o}return[o,n]}function od(A,e,t){var n=IA,s=pe(),o=VA;if(o){if(t===void 0)throw Error(l(407));t=t()}else t=e();var B=!We((ZA||s).memoizedState,t);B&&(s.memoizedState=t,be=!0),s=s.queue;var p=fd.bind(null,n,s,A);if(Tr(2048,8,p,[A]),s.getSnapshot!==e||B||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Na(9,ei(),ud.bind(null,n,s,t,e),null),Ae===null)throw Error(l(349));o||(Bn&124)!==0||cd(n,e,t)}return t}function cd(A,e,t){A.flags|=16384,A={getSnapshot:e,value:t},e=IA.updateQueue,e===null?(e=Do(),IA.updateQueue=e,e.stores=[A]):(t=e.stores,t===null?e.stores=[A]:t.push(A))}function ud(A,e,t,n){e.value=t,e.getSnapshot=n,dd(e)&&Bd(A)}function fd(A,e,t){return t(function(){dd(e)&&Bd(A)})}function dd(A){var e=A.getSnapshot;A=A.value;try{var t=e();return!We(A,t)}catch{return!0}}function Bd(A){var e=ba(A,2);e!==null&&nt(e,A,2)}function Lo(A){var e=Ye();if(typeof A=="function"){var t=A;if(A=t(),Aa){fA(!0);try{t()}finally{fA(!1)}}}return e.memoizedState=e.baseState=A,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_t,lastRenderedState:A},e}function gd(A,e,t,n){return A.baseState=t,Io(A,ZA,typeof n=="function"?n:_t)}function iw(A,e,t,n,s){if(ni(A))throw Error(l(485));if(A=e.action,A!==null){var o={payload:s,action:A,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(B){o.listeners.push(B)}};x.T!==null?t(!0):o.isTransition=!1,n(o),t=e.pending,t===null?(o.next=e.pending=o,hd(e,o)):(o.next=t.next,e.pending=t.next=o)}}function hd(A,e){var t=e.action,n=e.payload,s=A.state;if(e.isTransition){var o=x.T,B={};x.T=B;try{var p=t(s,n),U=x.S;U!==null&&U(B,p),pd(A,e,p)}catch(D){Ko(A,e,D)}finally{x.T=o}}else try{o=t(s,n),pd(A,e,o)}catch(D){Ko(A,e,D)}}function pd(A,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){wd(A,e,n)},function(n){return Ko(A,e,n)}):wd(A,e,t)}function wd(A,e,t){e.status="fulfilled",e.value=t,Qd(e),A.state=t,e=A.pending,e!==null&&(t=e.next,t===e?A.pending=null:(t=t.next,e.next=t,hd(A,t)))}function Ko(A,e,t){var n=A.pending;if(A.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=t,Qd(e),e=e.next;while(e!==n)}A.action=null}function Qd(A){A=A.listeners;for(var e=0;e<A.length;e++)(0,A[e])()}function md(A,e){return e}function Cd(A,e){if(VA){var t=Ae.formState;if(t!==null){A:{var n=IA;if(VA){if(ie){e:{for(var s=ie,o=yt;s.nodeType!==8;){if(!o){s=null;break e}if(s=Ct(s.nextSibling),s===null){s=null;break e}}o=s.data,s=o==="F!"||o==="F"?s:null}if(s){ie=Ct(s.nextSibling),n=s.data==="F!";break A}}qn(n)}n=!1}n&&(e=t[0])}}return t=Ye(),t.memoizedState=t.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:md,lastRenderedState:e},t.queue=n,t=jd.bind(null,IA,n),n.dispatch=t,n=Lo(!1),o=Go.bind(null,IA,!1,n.queue),n=Ye(),s={state:e,dispatch:null,action:A,pending:null},n.queue=s,t=iw.bind(null,IA,s,o,t),s.dispatch=t,n.memoizedState=A,[e,t,!1]}function Ud(A){var e=pe();return xd(e,ZA,A)}function xd(A,e,t){if(e=Io(A,e,md)[0],A=Ai(_t)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=Dr(e)}catch(B){throw B===br?Jl:B}else n=e;e=pe();var s=e.queue,o=s.dispatch;return t!==e.memoizedState&&(IA.flags|=2048,Na(9,ei(),sw.bind(null,s,t),null)),[n,o,A]}function sw(A,e){A.action=e}function vd(A){var e=pe(),t=ZA;if(t!==null)return xd(e,t,A);pe(),e=e.memoizedState,t=pe();var n=t.queue.dispatch;return t.memoizedState=A,[e,n,!1]}function Na(A,e,t,n){return A={tag:A,create:t,deps:n,inst:e,next:null},e=IA.updateQueue,e===null&&(e=Do(),IA.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=A.next=A:(n=t.next,t.next=A,A.next=n,e.lastEffect=A),A}function ei(){return{destroy:void 0,resource:void 0}}function bd(){return pe().memoizedState}function ti(A,e,t,n){var s=Ye();n=n===void 0?null:n,IA.flags|=A,s.memoizedState=Na(1|e,ei(),t,n)}function Tr(A,e,t,n){var s=pe();n=n===void 0?null:n;var o=s.memoizedState.inst;ZA!==null&&n!==null&&yo(n,ZA.memoizedState.deps)?s.memoizedState=Na(e,o,t,n):(IA.flags|=A,s.memoizedState=Na(1|e,o,t,n))}function yd(A,e){ti(8390656,8,A,e)}function Fd(A,e){Tr(2048,8,A,e)}function Ed(A,e){return Tr(4,2,A,e)}function Hd(A,e){return Tr(4,4,A,e)}function Sd(A,e){if(typeof e=="function"){A=A();var t=e(A);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return A=A(),e.current=A,function(){e.current=null}}function Dd(A,e,t){t=t!=null?t.concat([A]):null,Tr(4,4,Sd.bind(null,e,A),t)}function Mo(){}function Td(A,e){var t=pe();e=e===void 0?null:e;var n=t.memoizedState;return e!==null&&yo(e,n[1])?n[0]:(t.memoizedState=[A,e],A)}function Id(A,e){var t=pe();e=e===void 0?null:e;var n=t.memoizedState;if(e!==null&&yo(e,n[1]))return n[0];if(n=A(),Aa){fA(!0);try{A()}finally{fA(!1)}}return t.memoizedState=[n,e],n}function Oo(A,e,t){return t===void 0||(Bn&1073741824)!==0?A.memoizedState=e:(A.memoizedState=t,A=KB(),IA.lanes|=A,Cn|=A,t)}function Nd(A,e,t,n){return We(t,e)?t:Da.current!==null?(A=Oo(A,t,n),We(A,e)||(be=!0),A):(Bn&42)===0?(be=!0,A.memoizedState=t):(A=KB(),IA.lanes|=A,Cn|=A,e)}function Ld(A,e,t,n,s){var o=O.p;O.p=o!==0&&8>o?o:8;var B=x.T,p={};x.T=p,Go(A,!1,e,t);try{var U=s(),D=x.S;if(D!==null&&D(p,U),U!==null&&typeof U=="object"&&typeof U.then=="function"){var k=aw(U,n);Ir(A,e,k,tt(A))}else Ir(A,e,n,tt(A))}catch(Y){Ir(A,e,{then:function(){},status:"rejected",reason:Y},tt())}finally{O.p=o,x.T=B}}function ow(){}function Ro(A,e,t,n){if(A.tag!==5)throw Error(l(476));var s=Kd(A).queue;Ld(A,s,e,z,t===null?ow:function(){return Md(A),t(n)})}function Kd(A){var e=A.memoizedState;if(e!==null)return e;e={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_t,lastRenderedState:z},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_t,lastRenderedState:t},next:null},A.memoizedState=e,A=A.alternate,A!==null&&(A.memoizedState=e),e}function Md(A){var e=Kd(A).next.queue;Ir(A,e,{},tt())}function jo(){return Oe(Wr)}function Od(){return pe().memoizedState}function Rd(){return pe().memoizedState}function cw(A){for(var e=A.return;e!==null;){switch(e.tag){case 24:case 3:var t=tt();A=fn(t);var n=dn(e,A,t);n!==null&&(nt(n,e,t),Fr(n,e,t)),e={cache:ho()},A.payload=e;return}e=e.return}}function uw(A,e,t){var n=tt();t={lane:n,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},ni(A)?Gd(e,t):(t=ro(A,e,t,n),t!==null&&(nt(t,A,n),kd(t,e,n)))}function jd(A,e,t){var n=tt();Ir(A,e,t,n)}function Ir(A,e,t,n){var s={lane:n,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(ni(A))Gd(e,s);else{var o=A.alternate;if(A.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var B=e.lastRenderedState,p=o(B,t);if(s.hasEagerState=!0,s.eagerState=p,We(p,B))return jl(A,e,s,0),Ae===null&&Rl(),!1}catch{}finally{}if(t=ro(A,e,s,n),t!==null)return nt(t,A,n),kd(t,e,n),!0}return!1}function Go(A,e,t,n){if(n={lane:2,revertLane:Qc(),action:n,hasEagerState:!1,eagerState:null,next:null},ni(A)){if(e)throw Error(l(479))}else e=ro(A,t,n,2),e!==null&&nt(e,A,2)}function ni(A){var e=A.alternate;return A===IA||e!==null&&e===IA}function Gd(A,e){Ta=Wl=!0;var t=A.pending;t===null?e.next=e:(e.next=t.next,t.next=e),A.pending=e}function kd(A,e,t){if((t&4194048)!==0){var n=e.lanes;n&=A.pendingLanes,t|=n,e.lanes=t,an(A,t)}}var ai={readContext:Oe,use:$l,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useLayoutEffect:ue,useInsertionEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useSyncExternalStore:ue,useId:ue,useHostTransitionStatus:ue,useFormState:ue,useActionState:ue,useOptimistic:ue,useMemoCache:ue,useCacheRefresh:ue},_d={readContext:Oe,use:$l,useCallback:function(A,e){return Ye().memoizedState=[A,e===void 0?null:e],A},useContext:Oe,useEffect:yd,useImperativeHandle:function(A,e,t){t=t!=null?t.concat([A]):null,ti(4194308,4,Sd.bind(null,e,A),t)},useLayoutEffect:function(A,e){return ti(4194308,4,A,e)},useInsertionEffect:function(A,e){ti(4,2,A,e)},useMemo:function(A,e){var t=Ye();e=e===void 0?null:e;var n=A();if(Aa){fA(!0);try{A()}finally{fA(!1)}}return t.memoizedState=[n,e],n},useReducer:function(A,e,t){var n=Ye();if(t!==void 0){var s=t(e);if(Aa){fA(!0);try{t(e)}finally{fA(!1)}}}else s=e;return n.memoizedState=n.baseState=s,A={pending:null,lanes:0,dispatch:null,lastRenderedReducer:A,lastRenderedState:s},n.queue=A,A=A.dispatch=uw.bind(null,IA,A),[n.memoizedState,A]},useRef:function(A){var e=Ye();return A={current:A},e.memoizedState=A},useState:function(A){A=Lo(A);var e=A.queue,t=jd.bind(null,IA,e);return e.dispatch=t,[A.memoizedState,t]},useDebugValue:Mo,useDeferredValue:function(A,e){var t=Ye();return Oo(t,A,e)},useTransition:function(){var A=Lo(!1);return A=Ld.bind(null,IA,A.queue,!0,!1),Ye().memoizedState=A,[!1,A]},useSyncExternalStore:function(A,e,t){var n=IA,s=Ye();if(VA){if(t===void 0)throw Error(l(407));t=t()}else{if(t=e(),Ae===null)throw Error(l(349));(RA&124)!==0||cd(n,e,t)}s.memoizedState=t;var o={value:t,getSnapshot:e};return s.queue=o,yd(fd.bind(null,n,o,A),[A]),n.flags|=2048,Na(9,ei(),ud.bind(null,n,o,t,e),null),t},useId:function(){var A=Ye(),e=Ae.identifierPrefix;if(VA){var t=jt,n=Rt;t=(n&~(1<<32-L(n)-1)).toString(32)+t,e="«"+e+"R"+t,t=Pl++,0<t&&(e+="H"+t.toString(32)),e+="»"}else t=rw++,e="«"+e+"r"+t.toString(32)+"»";return A.memoizedState=e},useHostTransitionStatus:jo,useFormState:Cd,useActionState:Cd,useOptimistic:function(A){var e=Ye();e.memoizedState=e.baseState=A;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=Go.bind(null,IA,!0,t),t.dispatch=e,[A,e]},useMemoCache:To,useCacheRefresh:function(){return Ye().memoizedState=cw.bind(null,IA)}},Vd={readContext:Oe,use:$l,useCallback:Td,useContext:Oe,useEffect:Fd,useImperativeHandle:Dd,useInsertionEffect:Ed,useLayoutEffect:Hd,useMemo:Id,useReducer:Ai,useRef:bd,useState:function(){return Ai(_t)},useDebugValue:Mo,useDeferredValue:function(A,e){var t=pe();return Nd(t,ZA.memoizedState,A,e)},useTransition:function(){var A=Ai(_t)[0],e=pe().memoizedState;return[typeof A=="boolean"?A:Dr(A),e]},useSyncExternalStore:od,useId:Od,useHostTransitionStatus:jo,useFormState:Ud,useActionState:Ud,useOptimistic:function(A,e){var t=pe();return gd(t,ZA,A,e)},useMemoCache:To,useCacheRefresh:Rd},fw={readContext:Oe,use:$l,useCallback:Td,useContext:Oe,useEffect:Fd,useImperativeHandle:Dd,useInsertionEffect:Ed,useLayoutEffect:Hd,useMemo:Id,useReducer:No,useRef:bd,useState:function(){return No(_t)},useDebugValue:Mo,useDeferredValue:function(A,e){var t=pe();return ZA===null?Oo(t,A,e):Nd(t,ZA.memoizedState,A,e)},useTransition:function(){var A=No(_t)[0],e=pe().memoizedState;return[typeof A=="boolean"?A:Dr(A),e]},useSyncExternalStore:od,useId:Od,useHostTransitionStatus:jo,useFormState:vd,useActionState:vd,useOptimistic:function(A,e){var t=pe();return ZA!==null?gd(t,ZA,A,e):(t.baseState=A,[A,t.queue.dispatch])},useMemoCache:To,useCacheRefresh:Rd},La=null,Nr=0;function ri(A){var e=Nr;return Nr+=1,La===null&&(La=[]),ed(La,A,e)}function Lr(A,e){e=e.props.ref,A.ref=e!==void 0?e:null}function li(A,e){throw e.$$typeof===C?Error(l(525)):(A=Object.prototype.toString.call(e),Error(l(31,A==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":A)))}function zd(A){var e=A._init;return e(A._payload)}function Xd(A){function e(y,v){if(A){var S=y.deletions;S===null?(y.deletions=[v],y.flags|=16):S.push(v)}}function t(y,v){if(!A)return null;for(;v!==null;)e(y,v),v=v.sibling;return null}function n(y){for(var v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function s(y,v){return y=Ot(y,v),y.index=0,y.sibling=null,y}function o(y,v,S){return y.index=S,A?(S=y.alternate,S!==null?(S=S.index,S<v?(y.flags|=67108866,v):S):(y.flags|=67108866,v)):(y.flags|=1048576,v)}function B(y){return A&&y.alternate===null&&(y.flags|=67108866),y}function p(y,v,S,V){return v===null||v.tag!==6?(v=io(S,y.mode,V),v.return=y,v):(v=s(v,S),v.return=y,v)}function U(y,v,S,V){var vA=S.type;return vA===j?k(y,v,S.props.children,V,S.key):v!==null&&(v.elementType===vA||typeof vA=="object"&&vA!==null&&vA.$$typeof===T&&zd(vA)===v.type)?(v=s(v,S.props),Lr(v,S),v.return=y,v):(v=kl(S.type,S.key,S.props,null,y.mode,V),Lr(v,S),v.return=y,v)}function D(y,v,S,V){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=so(S,y.mode,V),v.return=y,v):(v=s(v,S.children||[]),v.return=y,v)}function k(y,v,S,V,vA){return v===null||v.tag!==7?(v=Xn(S,y.mode,V,vA),v.return=y,v):(v=s(v,S),v.return=y,v)}function Y(y,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=io(""+v,y.mode,S),v.return=y,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case b:return S=kl(v.type,v.key,v.props,null,y.mode,S),Lr(S,v),S.return=y,S;case _:return v=so(v,y.mode,S),v.return=y,v;case T:var V=v._init;return v=V(v._payload),Y(y,v,S)}if(R(v)||oA(v))return v=Xn(v,y.mode,S,null),v.return=y,v;if(typeof v.then=="function")return Y(y,ri(v),S);if(v.$$typeof===gA)return Y(y,Xl(y,v),S);li(y,v)}return null}function N(y,v,S,V){var vA=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return vA!==null?null:p(y,v,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case b:return S.key===vA?U(y,v,S,V):null;case _:return S.key===vA?D(y,v,S,V):null;case T:return vA=S._init,S=vA(S._payload),N(y,v,S,V)}if(R(S)||oA(S))return vA!==null?null:k(y,v,S,V,null);if(typeof S.then=="function")return N(y,v,ri(S),V);if(S.$$typeof===gA)return N(y,v,Xl(y,S),V);li(y,S)}return null}function K(y,v,S,V,vA){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return y=y.get(S)||null,p(v,y,""+V,vA);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case b:return y=y.get(V.key===null?S:V.key)||null,U(v,y,V,vA);case _:return y=y.get(V.key===null?S:V.key)||null,D(v,y,V,vA);case T:var NA=V._init;return V=NA(V._payload),K(y,v,S,V,vA)}if(R(V)||oA(V))return y=y.get(S)||null,k(v,y,V,vA,null);if(typeof V.then=="function")return K(y,v,S,ri(V),vA);if(V.$$typeof===gA)return K(y,v,S,Xl(v,V),vA);li(v,V)}return null}function HA(y,v,S,V){for(var vA=null,NA=null,yA=v,EA=v=0,Fe=null;yA!==null&&EA<S.length;EA++){yA.index>EA?(Fe=yA,yA=null):Fe=yA.sibling;var GA=N(y,yA,S[EA],V);if(GA===null){yA===null&&(yA=Fe);break}A&&yA&&GA.alternate===null&&e(y,yA),v=o(GA,v,EA),NA===null?vA=GA:NA.sibling=GA,NA=GA,yA=Fe}if(EA===S.length)return t(y,yA),VA&&Jn(y,EA),vA;if(yA===null){for(;EA<S.length;EA++)yA=Y(y,S[EA],V),yA!==null&&(v=o(yA,v,EA),NA===null?vA=yA:NA.sibling=yA,NA=yA);return VA&&Jn(y,EA),vA}for(yA=n(yA);EA<S.length;EA++)Fe=K(yA,y,EA,S[EA],V),Fe!==null&&(A&&Fe.alternate!==null&&yA.delete(Fe.key===null?EA:Fe.key),v=o(Fe,v,EA),NA===null?vA=Fe:NA.sibling=Fe,NA=Fe);return A&&yA.forEach(function(Sn){return e(y,Sn)}),VA&&Jn(y,EA),vA}function FA(y,v,S,V){if(S==null)throw Error(l(151));for(var vA=null,NA=null,yA=v,EA=v=0,Fe=null,GA=S.next();yA!==null&&!GA.done;EA++,GA=S.next()){yA.index>EA?(Fe=yA,yA=null):Fe=yA.sibling;var Sn=N(y,yA,GA.value,V);if(Sn===null){yA===null&&(yA=Fe);break}A&&yA&&Sn.alternate===null&&e(y,yA),v=o(Sn,v,EA),NA===null?vA=Sn:NA.sibling=Sn,NA=Sn,yA=Fe}if(GA.done)return t(y,yA),VA&&Jn(y,EA),vA;if(yA===null){for(;!GA.done;EA++,GA=S.next())GA=Y(y,GA.value,V),GA!==null&&(v=o(GA,v,EA),NA===null?vA=GA:NA.sibling=GA,NA=GA);return VA&&Jn(y,EA),vA}for(yA=n(yA);!GA.done;EA++,GA=S.next())GA=K(yA,y,EA,GA.value,V),GA!==null&&(A&&GA.alternate!==null&&yA.delete(GA.key===null?EA:GA.key),v=o(GA,v,EA),NA===null?vA=GA:NA.sibling=GA,NA=GA);return A&&yA.forEach(function(dQ){return e(y,dQ)}),VA&&Jn(y,EA),vA}function WA(y,v,S,V){if(typeof S=="object"&&S!==null&&S.type===j&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case b:A:{for(var vA=S.key;v!==null;){if(v.key===vA){if(vA=S.type,vA===j){if(v.tag===7){t(y,v.sibling),V=s(v,S.props.children),V.return=y,y=V;break A}}else if(v.elementType===vA||typeof vA=="object"&&vA!==null&&vA.$$typeof===T&&zd(vA)===v.type){t(y,v.sibling),V=s(v,S.props),Lr(V,S),V.return=y,y=V;break A}t(y,v);break}else e(y,v);v=v.sibling}S.type===j?(V=Xn(S.props.children,y.mode,V,S.key),V.return=y,y=V):(V=kl(S.type,S.key,S.props,null,y.mode,V),Lr(V,S),V.return=y,y=V)}return B(y);case _:A:{for(vA=S.key;v!==null;){if(v.key===vA)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){t(y,v.sibling),V=s(v,S.children||[]),V.return=y,y=V;break A}else{t(y,v);break}else e(y,v);v=v.sibling}V=so(S,y.mode,V),V.return=y,y=V}return B(y);case T:return vA=S._init,S=vA(S._payload),WA(y,v,S,V)}if(R(S))return HA(y,v,S,V);if(oA(S)){if(vA=oA(S),typeof vA!="function")throw Error(l(150));return S=vA.call(S),FA(y,v,S,V)}if(typeof S.then=="function")return WA(y,v,ri(S),V);if(S.$$typeof===gA)return WA(y,v,Xl(y,S),V);li(y,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(t(y,v.sibling),V=s(v,S),V.return=y,y=V):(t(y,v),V=io(S,y.mode,V),V.return=y,y=V),B(y)):t(y,v)}return function(y,v,S,V){try{Nr=0;var vA=WA(y,v,S,V);return La=null,vA}catch(yA){if(yA===br||yA===Jl)throw yA;var NA=Pe(29,yA,null,y.mode);return NA.lanes=V,NA.return=y,NA}finally{}}}var Ka=Xd(!0),Yd=Xd(!1),ut=G(null),Ft=null;function gn(A){var e=A.alternate;aA(Ce,Ce.current&1),aA(ut,A),Ft===null&&(e===null||Da.current!==null||e.memoizedState!==null)&&(Ft=A)}function Jd(A){if(A.tag===22){if(aA(Ce,Ce.current),aA(ut,A),Ft===null){var e=A.alternate;e!==null&&e.memoizedState!==null&&(Ft=A)}}else hn()}function hn(){aA(Ce,Ce.current),aA(ut,ut.current)}function Vt(A){lA(ut),Ft===A&&(Ft=null),lA(Ce)}var Ce=G(0);function ii(A){for(var e=A;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||Dc(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function ko(A,e,t,n){e=A.memoizedState,t=t(n,e),t=t==null?e:Q({},e,t),A.memoizedState=t,A.lanes===0&&(A.updateQueue.baseState=t)}var _o={enqueueSetState:function(A,e,t){A=A._reactInternals;var n=tt(),s=fn(n);s.payload=e,t!=null&&(s.callback=t),e=dn(A,s,n),e!==null&&(nt(e,A,n),Fr(e,A,n))},enqueueReplaceState:function(A,e,t){A=A._reactInternals;var n=tt(),s=fn(n);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=dn(A,s,n),e!==null&&(nt(e,A,n),Fr(e,A,n))},enqueueForceUpdate:function(A,e){A=A._reactInternals;var t=tt(),n=fn(t);n.tag=2,e!=null&&(n.callback=e),e=dn(A,n,t),e!==null&&(nt(e,A,t),Fr(e,A,t))}};function Zd(A,e,t,n,s,o,B){return A=A.stateNode,typeof A.shouldComponentUpdate=="function"?A.shouldComponentUpdate(n,o,B):e.prototype&&e.prototype.isPureReactComponent?!pr(t,n)||!pr(s,o):!0}function qd(A,e,t,n){A=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,n),e.state!==A&&_o.enqueueReplaceState(e,e.state,null)}function ea(A,e){var t=e;if("ref"in e){t={};for(var n in e)n!=="ref"&&(t[n]=e[n])}if(A=A.defaultProps){t===e&&(t=Q({},t));for(var s in A)t[s]===void 0&&(t[s]=A[s])}return t}var si=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function Wd(A){si(A)}function Pd(A){console.error(A)}function $d(A){si(A)}function oi(A,e){try{var t=A.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function AB(A,e,t){try{var n=A.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Vo(A,e,t){return t=fn(t),t.tag=3,t.payload={element:null},t.callback=function(){oi(A,e)},t}function eB(A){return A=fn(A),A.tag=3,A}function tB(A,e,t,n){var s=t.type.getDerivedStateFromError;if(typeof s=="function"){var o=n.value;A.payload=function(){return s(o)},A.callback=function(){AB(e,t,n)}}var B=t.stateNode;B!==null&&typeof B.componentDidCatch=="function"&&(A.callback=function(){AB(e,t,n),typeof s!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var p=n.stack;this.componentDidCatch(n.value,{componentStack:p!==null?p:""})})}function dw(A,e,t,n,s){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=t.alternate,e!==null&&Ur(e,t,s,!0),t=ut.current,t!==null){switch(t.tag){case 13:return Ft===null?Bc():t.alternate===null&&se===0&&(se=3),t.flags&=-257,t.flags|=65536,t.lanes=s,n===Qo?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([n]):e.add(n),hc(A,n,s)),!1;case 22:return t.flags|=65536,n===Qo?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([n]):t.add(n)),hc(A,n,s)),!1}throw Error(l(435,t.tag))}return hc(A,n,s),Bc(),!1}if(VA)return e=ut.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=s,n!==uo&&(A=Error(l(422),{cause:n}),Cr(it(A,t)))):(n!==uo&&(e=Error(l(423),{cause:n}),Cr(it(e,t))),A=A.current.alternate,A.flags|=65536,s&=-s,A.lanes|=s,n=it(n,t),s=Vo(A.stateNode,n,s),Uo(A,s),se!==4&&(se=2)),!1;var o=Error(l(520),{cause:n});if(o=it(o,t),kr===null?kr=[o]:kr.push(o),se!==4&&(se=2),e===null)return!0;n=it(n,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,A=s&-s,t.lanes|=A,A=Vo(t.stateNode,n,A),Uo(t,A),!1;case 1:if(e=t.type,o=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Un===null||!Un.has(o))))return t.flags|=65536,s&=-s,t.lanes|=s,s=eB(s),tB(s,A,t,n),Uo(t,s),!1}t=t.return}while(t!==null);return!1}var nB=Error(l(461)),be=!1;function Se(A,e,t,n){e.child=A===null?Yd(e,null,t,n):Ka(e,A.child,t,n)}function aB(A,e,t,n,s){t=t.render;var o=e.ref;if("ref"in n){var B={};for(var p in n)p!=="ref"&&(B[p]=n[p])}else B=n;return Pn(e),n=Fo(A,e,t,B,o,s),p=Eo(),A!==null&&!be?(Ho(A,e,s),zt(A,e,s)):(VA&&p&&oo(e),e.flags|=1,Se(A,e,n,s),e.child)}function rB(A,e,t,n,s){if(A===null){var o=t.type;return typeof o=="function"&&!lo(o)&&o.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=o,lB(A,e,o,n,s)):(A=kl(t.type,null,n,e,e.mode,s),A.ref=e.ref,A.return=e,e.child=A)}if(o=A.child,!Po(A,s)){var B=o.memoizedProps;if(t=t.compare,t=t!==null?t:pr,t(B,n)&&A.ref===e.ref)return zt(A,e,s)}return e.flags|=1,A=Ot(o,n),A.ref=e.ref,A.return=e,e.child=A}function lB(A,e,t,n,s){if(A!==null){var o=A.memoizedProps;if(pr(o,n)&&A.ref===e.ref)if(be=!1,e.pendingProps=n=o,Po(A,s))(A.flags&131072)!==0&&(be=!0);else return e.lanes=A.lanes,zt(A,e,s)}return zo(A,e,t,n,s)}function iB(A,e,t){var n=e.pendingProps,s=n.children,o=A!==null?A.memoizedState:null;if(n.mode==="hidden"){if((e.flags&128)!==0){if(n=o!==null?o.baseLanes|t:t,A!==null){for(s=e.child=A.child,o=0;s!==null;)o=o|s.lanes|s.childLanes,s=s.sibling;e.childLanes=o&~n}else e.childLanes=0,e.child=null;return sB(A,e,n,t)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},A!==null&&Yl(e,o!==null?o.cachePool:null),o!==null?ld(e,o):vo(),Jd(e);else return e.lanes=e.childLanes=536870912,sB(A,e,o!==null?o.baseLanes|t:t,t)}else o!==null?(Yl(e,o.cachePool),ld(e,o),hn(),e.memoizedState=null):(A!==null&&Yl(e,null),vo(),hn());return Se(A,e,s,t),e.child}function sB(A,e,t,n){var s=wo();return s=s===null?null:{parent:me._currentValue,pool:s},e.memoizedState={baseLanes:t,cachePool:s},A!==null&&Yl(e,null),vo(),Jd(e),A!==null&&Ur(A,e,n,!0),null}function ci(A,e){var t=e.ref;if(t===null)A!==null&&A.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(l(284));(A===null||A.ref!==t)&&(e.flags|=4194816)}}function zo(A,e,t,n,s){return Pn(e),t=Fo(A,e,t,n,void 0,s),n=Eo(),A!==null&&!be?(Ho(A,e,s),zt(A,e,s)):(VA&&n&&oo(e),e.flags|=1,Se(A,e,t,s),e.child)}function oB(A,e,t,n,s,o){return Pn(e),e.updateQueue=null,t=sd(e,n,t,s),id(A),n=Eo(),A!==null&&!be?(Ho(A,e,o),zt(A,e,o)):(VA&&n&&oo(e),e.flags|=1,Se(A,e,t,o),e.child)}function cB(A,e,t,n,s){if(Pn(e),e.stateNode===null){var o=ya,B=t.contextType;typeof B=="object"&&B!==null&&(o=Oe(B)),o=new t(n,o),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=_o,e.stateNode=o,o._reactInternals=e,o=e.stateNode,o.props=n,o.state=e.memoizedState,o.refs={},mo(e),B=t.contextType,o.context=typeof B=="object"&&B!==null?Oe(B):ya,o.state=e.memoizedState,B=t.getDerivedStateFromProps,typeof B=="function"&&(ko(e,t,B,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(B=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),B!==o.state&&_o.enqueueReplaceState(o,o.state,null),Hr(e,n,o,s),Er(),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(A===null){o=e.stateNode;var p=e.memoizedProps,U=ea(t,p);o.props=U;var D=o.context,k=t.contextType;B=ya,typeof k=="object"&&k!==null&&(B=Oe(k));var Y=t.getDerivedStateFromProps;k=typeof Y=="function"||typeof o.getSnapshotBeforeUpdate=="function",p=e.pendingProps!==p,k||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(p||D!==B)&&qd(e,o,n,B),un=!1;var N=e.memoizedState;o.state=N,Hr(e,n,o,s),Er(),D=e.memoizedState,p||N!==D||un?(typeof Y=="function"&&(ko(e,t,Y,n),D=e.memoizedState),(U=un||Zd(e,t,U,n,N,D,B))?(k||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=D),o.props=n,o.state=D,o.context=B,n=U):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{o=e.stateNode,Co(A,e),B=e.memoizedProps,k=ea(t,B),o.props=k,Y=e.pendingProps,N=o.context,D=t.contextType,U=ya,typeof D=="object"&&D!==null&&(U=Oe(D)),p=t.getDerivedStateFromProps,(D=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(B!==Y||N!==U)&&qd(e,o,n,U),un=!1,N=e.memoizedState,o.state=N,Hr(e,n,o,s),Er();var K=e.memoizedState;B!==Y||N!==K||un||A!==null&&A.dependencies!==null&&zl(A.dependencies)?(typeof p=="function"&&(ko(e,t,p,n),K=e.memoizedState),(k=un||Zd(e,t,k,n,N,K,U)||A!==null&&A.dependencies!==null&&zl(A.dependencies))?(D||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,K,U),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,K,U)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||B===A.memoizedProps&&N===A.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||B===A.memoizedProps&&N===A.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=K),o.props=n,o.state=K,o.context=U,n=k):(typeof o.componentDidUpdate!="function"||B===A.memoizedProps&&N===A.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||B===A.memoizedProps&&N===A.memoizedState||(e.flags|=1024),n=!1)}return o=n,ci(A,e),n=(e.flags&128)!==0,o||n?(o=e.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:o.render(),e.flags|=1,A!==null&&n?(e.child=Ka(e,A.child,null,s),e.child=Ka(e,null,t,s)):Se(A,e,t,s),e.memoizedState=o.state,A=e.child):A=zt(A,e,s),A}function uB(A,e,t,n){return mr(),e.flags|=256,Se(A,e,t,n),e.child}var Xo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yo(A){return{baseLanes:A,cachePool:Pf()}}function Jo(A,e,t){return A=A!==null?A.childLanes&~t:0,e&&(A|=ft),A}function fB(A,e,t){var n=e.pendingProps,s=!1,o=(e.flags&128)!==0,B;if((B=o)||(B=A!==null&&A.memoizedState===null?!1:(Ce.current&2)!==0),B&&(s=!0,e.flags&=-129),B=(e.flags&32)!==0,e.flags&=-33,A===null){if(VA){if(s?gn(e):hn(),VA){var p=ie,U;if(U=p){A:{for(U=p,p=yt;U.nodeType!==8;){if(!p){p=null;break A}if(U=Ct(U.nextSibling),U===null){p=null;break A}}p=U}p!==null?(e.memoizedState={dehydrated:p,treeContext:Yn!==null?{id:Rt,overflow:jt}:null,retryLane:536870912,hydrationErrors:null},U=Pe(18,null,null,0),U.stateNode=p,U.return=e,e.child=U,ke=e,ie=null,U=!0):U=!1}U||qn(e)}if(p=e.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return Dc(p)?e.lanes=32:e.lanes=536870912,null;Vt(e)}return p=n.children,n=n.fallback,s?(hn(),s=e.mode,p=ui({mode:"hidden",children:p},s),n=Xn(n,s,t,null),p.return=e,n.return=e,p.sibling=n,e.child=p,s=e.child,s.memoizedState=Yo(t),s.childLanes=Jo(A,B,t),e.memoizedState=Xo,n):(gn(e),Zo(e,p))}if(U=A.memoizedState,U!==null&&(p=U.dehydrated,p!==null)){if(o)e.flags&256?(gn(e),e.flags&=-257,e=qo(A,e,t)):e.memoizedState!==null?(hn(),e.child=A.child,e.flags|=128,e=null):(hn(),s=n.fallback,p=e.mode,n=ui({mode:"visible",children:n.children},p),s=Xn(s,p,t,null),s.flags|=2,n.return=e,s.return=e,n.sibling=s,e.child=n,Ka(e,A.child,null,t),n=e.child,n.memoizedState=Yo(t),n.childLanes=Jo(A,B,t),e.memoizedState=Xo,e=s);else if(gn(e),Dc(p)){if(B=p.nextSibling&&p.nextSibling.dataset,B)var D=B.dgst;B=D,n=Error(l(419)),n.stack="",n.digest=B,Cr({value:n,source:null,stack:null}),e=qo(A,e,t)}else if(be||Ur(A,e,t,!1),B=(t&A.childLanes)!==0,be||B){if(B=Ae,B!==null&&(n=t&-t,n=(n&42)!==0?1:rn(n),n=(n&(B.suspendedLanes|t))!==0?0:n,n!==0&&n!==U.retryLane))throw U.retryLane=n,ba(A,n),nt(B,A,n),nB;p.data==="$?"||Bc(),e=qo(A,e,t)}else p.data==="$?"?(e.flags|=192,e.child=A.child,e=null):(A=U.treeContext,ie=Ct(p.nextSibling),ke=e,VA=!0,Zn=null,yt=!1,A!==null&&(ot[ct++]=Rt,ot[ct++]=jt,ot[ct++]=Yn,Rt=A.id,jt=A.overflow,Yn=e),e=Zo(e,n.children),e.flags|=4096);return e}return s?(hn(),s=n.fallback,p=e.mode,U=A.child,D=U.sibling,n=Ot(U,{mode:"hidden",children:n.children}),n.subtreeFlags=U.subtreeFlags&65011712,D!==null?s=Ot(D,s):(s=Xn(s,p,t,null),s.flags|=2),s.return=e,n.return=e,n.sibling=s,e.child=n,n=s,s=e.child,p=A.child.memoizedState,p===null?p=Yo(t):(U=p.cachePool,U!==null?(D=me._currentValue,U=U.parent!==D?{parent:D,pool:D}:U):U=Pf(),p={baseLanes:p.baseLanes|t,cachePool:U}),s.memoizedState=p,s.childLanes=Jo(A,B,t),e.memoizedState=Xo,n):(gn(e),t=A.child,A=t.sibling,t=Ot(t,{mode:"visible",children:n.children}),t.return=e,t.sibling=null,A!==null&&(B=e.deletions,B===null?(e.deletions=[A],e.flags|=16):B.push(A)),e.child=t,e.memoizedState=null,t)}function Zo(A,e){return e=ui({mode:"visible",children:e},A.mode),e.return=A,A.child=e}function ui(A,e){return A=Pe(22,A,null,e),A.lanes=0,A.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},A}function qo(A,e,t){return Ka(e,A.child,null,t),A=Zo(e,e.pendingProps.children),A.flags|=2,e.memoizedState=null,A}function dB(A,e,t){A.lanes|=e;var n=A.alternate;n!==null&&(n.lanes|=e),Bo(A.return,e,t)}function Wo(A,e,t,n,s){var o=A.memoizedState;o===null?A.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=t,o.tailMode=s)}function BB(A,e,t){var n=e.pendingProps,s=n.revealOrder,o=n.tail;if(Se(A,e,n.children,t),n=Ce.current,(n&2)!==0)n=n&1|2,e.flags|=128;else{if(A!==null&&(A.flags&128)!==0)A:for(A=e.child;A!==null;){if(A.tag===13)A.memoizedState!==null&&dB(A,t,e);else if(A.tag===19)dB(A,t,e);else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break A;for(;A.sibling===null;){if(A.return===null||A.return===e)break A;A=A.return}A.sibling.return=A.return,A=A.sibling}n&=1}switch(aA(Ce,n),s){case"forwards":for(t=e.child,s=null;t!==null;)A=t.alternate,A!==null&&ii(A)===null&&(s=t),t=t.sibling;t=s,t===null?(s=e.child,e.child=null):(s=t.sibling,t.sibling=null),Wo(e,!1,s,t,o);break;case"backwards":for(t=null,s=e.child,e.child=null;s!==null;){if(A=s.alternate,A!==null&&ii(A)===null){e.child=s;break}A=s.sibling,s.sibling=t,t=s,s=A}Wo(e,!0,t,null,o);break;case"together":Wo(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zt(A,e,t){if(A!==null&&(e.dependencies=A.dependencies),Cn|=e.lanes,(t&e.childLanes)===0)if(A!==null){if(Ur(A,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(A!==null&&e.child!==A.child)throw Error(l(153));if(e.child!==null){for(A=e.child,t=Ot(A,A.pendingProps),e.child=t,t.return=e;A.sibling!==null;)A=A.sibling,t=t.sibling=Ot(A,A.pendingProps),t.return=e;t.sibling=null}return e.child}function Po(A,e){return(A.lanes&e)!==0?!0:(A=A.dependencies,!!(A!==null&&zl(A)))}function Bw(A,e,t){switch(e.tag){case 3:hA(e,e.stateNode.containerInfo),cn(e,me,A.memoizedState.cache),mr();break;case 27:case 5:re(e);break;case 4:hA(e,e.stateNode.containerInfo);break;case 10:cn(e,e.type,e.memoizedProps.value);break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(gn(e),e.flags|=128,null):(t&e.child.childLanes)!==0?fB(A,e,t):(gn(e),A=zt(A,e,t),A!==null?A.sibling:null);gn(e);break;case 19:var s=(A.flags&128)!==0;if(n=(t&e.childLanes)!==0,n||(Ur(A,e,t,!1),n=(t&e.childLanes)!==0),s){if(n)return BB(A,e,t);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),aA(Ce,Ce.current),n)break;return null;case 22:case 23:return e.lanes=0,iB(A,e,t);case 24:cn(e,me,A.memoizedState.cache)}return zt(A,e,t)}function gB(A,e,t){if(A!==null)if(A.memoizedProps!==e.pendingProps)be=!0;else{if(!Po(A,t)&&(e.flags&128)===0)return be=!1,Bw(A,e,t);be=(A.flags&131072)!==0}else be=!1,VA&&(e.flags&1048576)!==0&&zf(e,Vl,e.index);switch(e.lanes=0,e.tag){case 16:A:{A=e.pendingProps;var n=e.elementType,s=n._init;if(n=s(n._payload),e.type=n,typeof n=="function")lo(n)?(A=ea(n,A),e.tag=1,e=cB(null,e,n,A,t)):(e.tag=0,e=zo(null,e,n,A,t));else{if(n!=null){if(s=n.$$typeof,s===uA){e.tag=11,e=aB(null,e,n,A,t);break A}else if(s===CA){e.tag=14,e=rB(null,e,n,A,t);break A}}throw e=dA(n)||n,Error(l(306,e,""))}}return e;case 0:return zo(A,e,e.type,e.pendingProps,t);case 1:return n=e.type,s=ea(n,e.pendingProps),cB(A,e,n,s,t);case 3:A:{if(hA(e,e.stateNode.containerInfo),A===null)throw Error(l(387));n=e.pendingProps;var o=e.memoizedState;s=o.element,Co(A,e),Hr(e,n,null,t);var B=e.memoizedState;if(n=B.cache,cn(e,me,n),n!==o.cache&&go(e,[me],t,!0),Er(),n=B.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:B.cache},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){e=uB(A,e,n,t);break A}else if(n!==s){s=it(Error(l(424)),e),Cr(s),e=uB(A,e,n,t);break A}else{switch(A=e.stateNode.containerInfo,A.nodeType){case 9:A=A.body;break;default:A=A.nodeName==="HTML"?A.ownerDocument.body:A}for(ie=Ct(A.firstChild),ke=e,VA=!0,Zn=null,yt=!0,t=Yd(e,null,n,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(mr(),n===s){e=zt(A,e,t);break A}Se(A,e,n,t)}e=e.child}return e;case 26:return ci(A,e),A===null?(t=Qg(e.type,null,e.pendingProps,null))?e.memoizedState=t:VA||(t=e.type,A=e.pendingProps,n=bi(W.current).createElement(t),n[Me]=e,n[ze]=A,Te(n,t,A),ve(n),e.stateNode=n):e.memoizedState=Qg(e.type,A.memoizedProps,e.pendingProps,A.memoizedState),null;case 27:return re(e),A===null&&VA&&(n=e.stateNode=hg(e.type,e.pendingProps,W.current),ke=e,yt=!0,s=ie,bn(e.type)?(Tc=s,ie=Ct(n.firstChild)):ie=s),Se(A,e,e.pendingProps.children,t),ci(A,e),A===null&&(e.flags|=4194304),e.child;case 5:return A===null&&VA&&((s=n=ie)&&(n=kw(n,e.type,e.pendingProps,yt),n!==null?(e.stateNode=n,ke=e,ie=Ct(n.firstChild),yt=!1,s=!0):s=!1),s||qn(e)),re(e),s=e.type,o=e.pendingProps,B=A!==null?A.memoizedProps:null,n=o.children,Ec(s,o)?n=null:B!==null&&Ec(s,B)&&(e.flags|=32),e.memoizedState!==null&&(s=Fo(A,e,lw,null,null,t),Wr._currentValue=s),ci(A,e),Se(A,e,n,t),e.child;case 6:return A===null&&VA&&((A=t=ie)&&(t=_w(t,e.pendingProps,yt),t!==null?(e.stateNode=t,ke=e,ie=null,A=!0):A=!1),A||qn(e)),null;case 13:return fB(A,e,t);case 4:return hA(e,e.stateNode.containerInfo),n=e.pendingProps,A===null?e.child=Ka(e,null,n,t):Se(A,e,n,t),e.child;case 11:return aB(A,e,e.type,e.pendingProps,t);case 7:return Se(A,e,e.pendingProps,t),e.child;case 8:return Se(A,e,e.pendingProps.children,t),e.child;case 12:return Se(A,e,e.pendingProps.children,t),e.child;case 10:return n=e.pendingProps,cn(e,e.type,n.value),Se(A,e,n.children,t),e.child;case 9:return s=e.type._context,n=e.pendingProps.children,Pn(e),s=Oe(s),n=n(s),e.flags|=1,Se(A,e,n,t),e.child;case 14:return rB(A,e,e.type,e.pendingProps,t);case 15:return lB(A,e,e.type,e.pendingProps,t);case 19:return BB(A,e,t);case 31:return n=e.pendingProps,t=e.mode,n={mode:n.mode,children:n.children},A===null?(t=ui(n,t),t.ref=e.ref,e.child=t,t.return=e,e=t):(t=Ot(A.child,n),t.ref=e.ref,e.child=t,t.return=e,e=t),e;case 22:return iB(A,e,t);case 24:return Pn(e),n=Oe(me),A===null?(s=wo(),s===null&&(s=Ae,o=ho(),s.pooledCache=o,o.refCount++,o!==null&&(s.pooledCacheLanes|=t),s=o),e.memoizedState={parent:n,cache:s},mo(e),cn(e,me,s)):((A.lanes&t)!==0&&(Co(A,e),Hr(e,null,null,t),Er()),s=A.memoizedState,o=e.memoizedState,s.parent!==n?(s={parent:n,cache:n},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),cn(e,me,n)):(n=o.cache,cn(e,me,n),n!==s.cache&&go(e,[me],t,!0))),Se(A,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(l(156,e.tag))}function Xt(A){A.flags|=4}function hB(A,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)A.flags&=-16777217;else if(A.flags|=16777216,!vg(e)){if(e=ut.current,e!==null&&((RA&4194048)===RA?Ft!==null:(RA&62914560)!==RA&&(RA&536870912)===0||e!==Ft))throw yr=Qo,$f;A.flags|=8192}}function fi(A,e){e!==null&&(A.flags|=4),A.flags&16384&&(e=A.tag!==22?ce():536870912,A.lanes|=e,ja|=e)}function Kr(A,e){if(!VA)switch(A.tailMode){case"hidden":e=A.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?A.tail=null:t.sibling=null;break;case"collapsed":t=A.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e||A.tail===null?A.tail=null:A.tail.sibling=null:n.sibling=null}}function le(A){var e=A.alternate!==null&&A.alternate.child===A.child,t=0,n=0;if(e)for(var s=A.child;s!==null;)t|=s.lanes|s.childLanes,n|=s.subtreeFlags&65011712,n|=s.flags&65011712,s.return=A,s=s.sibling;else for(s=A.child;s!==null;)t|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=A,s=s.sibling;return A.subtreeFlags|=n,A.childLanes=t,e}function gw(A,e,t){var n=e.pendingProps;switch(co(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(e),null;case 1:return le(e),null;case 3:return t=e.stateNode,n=null,A!==null&&(n=A.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),kt(me),OA(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(A===null||A.child===null)&&(Qr(e)?Xt(e):A===null||A.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Jf())),le(e),null;case 26:return t=e.memoizedState,A===null?(Xt(e),t!==null?(le(e),hB(e,t)):(le(e),e.flags&=-16777217)):t?t!==A.memoizedState?(Xt(e),le(e),hB(e,t)):(le(e),e.flags&=-16777217):(A.memoizedProps!==n&&Xt(e),le(e),e.flags&=-16777217),null;case 27:He(e),t=W.current;var s=e.type;if(A!==null&&e.stateNode!=null)A.memoizedProps!==n&&Xt(e);else{if(!n){if(e.stateNode===null)throw Error(l(166));return le(e),null}A=F.current,Qr(e)?Xf(e):(A=hg(s,n,t),e.stateNode=A,Xt(e))}return le(e),null;case 5:if(He(e),t=e.type,A!==null&&e.stateNode!=null)A.memoizedProps!==n&&Xt(e);else{if(!n){if(e.stateNode===null)throw Error(l(166));return le(e),null}if(A=F.current,Qr(e))Xf(e);else{switch(s=bi(W.current),A){case 1:A=s.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:A=s.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":A=s.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":A=s.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":A=s.createElement("div"),A.innerHTML="<script><\/script>",A=A.removeChild(A.firstChild);break;case"select":A=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?A.multiple=!0:n.size&&(A.size=n.size);break;default:A=typeof n.is=="string"?s.createElement(t,{is:n.is}):s.createElement(t)}}A[Me]=e,A[ze]=n;A:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)A.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break A;for(;s.sibling===null;){if(s.return===null||s.return===e)break A;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=A;A:switch(Te(A,t,n),t){case"button":case"input":case"select":case"textarea":A=!!n.autoFocus;break A;case"img":A=!0;break A;default:A=!1}A&&Xt(e)}}return le(e),e.flags&=-16777217,null;case 6:if(A&&e.stateNode!=null)A.memoizedProps!==n&&Xt(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(l(166));if(A=W.current,Qr(e)){if(A=e.stateNode,t=e.memoizedProps,n=null,s=ke,s!==null)switch(s.tag){case 27:case 5:n=s.memoizedProps}A[Me]=e,A=!!(A.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||og(A.nodeValue,t)),A||qn(e)}else A=bi(A).createTextNode(n),A[Me]=e,e.stateNode=A}return le(e),null;case 13:if(n=e.memoizedState,A===null||A.memoizedState!==null&&A.memoizedState.dehydrated!==null){if(s=Qr(e),n!==null&&n.dehydrated!==null){if(A===null){if(!s)throw Error(l(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[Me]=e}else mr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;le(e),s=!1}else s=Jf(),A!==null&&A.memoizedState!==null&&(A.memoizedState.hydrationErrors=s),s=!0;if(!s)return e.flags&256?(Vt(e),e):(Vt(e),null)}if(Vt(e),(e.flags&128)!==0)return e.lanes=t,e;if(t=n!==null,A=A!==null&&A.memoizedState!==null,t){n=e.child,s=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(s=n.alternate.memoizedState.cachePool.pool);var o=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==s&&(n.flags|=2048)}return t!==A&&t&&(e.child.flags|=8192),fi(e,e.updateQueue),le(e),null;case 4:return OA(),A===null&&xc(e.stateNode.containerInfo),le(e),null;case 10:return kt(e.type),le(e),null;case 19:if(lA(Ce),s=e.memoizedState,s===null)return le(e),null;if(n=(e.flags&128)!==0,o=s.rendering,o===null)if(n)Kr(s,!1);else{if(se!==0||A!==null&&(A.flags&128)!==0)for(A=e.child;A!==null;){if(o=ii(A),o!==null){for(e.flags|=128,Kr(s,!1),A=o.updateQueue,e.updateQueue=A,fi(e,A),e.subtreeFlags=0,A=t,t=e.child;t!==null;)Vf(t,A),t=t.sibling;return aA(Ce,Ce.current&1|2),e.child}A=A.sibling}s.tail!==null&&Qe()>gi&&(e.flags|=128,n=!0,Kr(s,!1),e.lanes=4194304)}else{if(!n)if(A=ii(o),A!==null){if(e.flags|=128,n=!0,A=A.updateQueue,e.updateQueue=A,fi(e,A),Kr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!VA)return le(e),null}else 2*Qe()-s.renderingStartTime>gi&&t!==536870912&&(e.flags|=128,n=!0,Kr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(A=s.last,A!==null?A.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Qe(),e.sibling=null,A=Ce.current,aA(Ce,n?A&1|2:A&1),e):(le(e),null);case 22:case 23:return Vt(e),bo(),n=e.memoizedState!==null,A!==null?A.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(t&536870912)!==0&&(e.flags&128)===0&&(le(e),e.subtreeFlags&6&&(e.flags|=8192)):le(e),t=e.updateQueue,t!==null&&fi(e,t.retryQueue),t=null,A!==null&&A.memoizedState!==null&&A.memoizedState.cachePool!==null&&(t=A.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(e.flags|=2048),A!==null&&lA($n),null;case 24:return t=null,A!==null&&(t=A.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),kt(me),le(e),null;case 25:return null;case 30:return null}throw Error(l(156,e.tag))}function hw(A,e){switch(co(e),e.tag){case 1:return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 3:return kt(me),OA(),A=e.flags,(A&65536)!==0&&(A&128)===0?(e.flags=A&-65537|128,e):null;case 26:case 27:case 5:return He(e),null;case 13:if(Vt(e),A=e.memoizedState,A!==null&&A.dehydrated!==null){if(e.alternate===null)throw Error(l(340));mr()}return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 19:return lA(Ce),null;case 4:return OA(),null;case 10:return kt(e.type),null;case 22:case 23:return Vt(e),bo(),A!==null&&lA($n),A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 24:return kt(me),null;case 25:return null;default:return null}}function pB(A,e){switch(co(e),e.tag){case 3:kt(me),OA();break;case 26:case 27:case 5:He(e);break;case 4:OA();break;case 13:Vt(e);break;case 19:lA(Ce);break;case 10:kt(e.type);break;case 22:case 23:Vt(e),bo(),A!==null&&lA($n);break;case 24:kt(me)}}function Mr(A,e){try{var t=e.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var s=n.next;t=s;do{if((t.tag&A)===A){n=void 0;var o=t.create,B=t.inst;n=o(),B.destroy=n}t=t.next}while(t!==s)}}catch(p){$A(e,e.return,p)}}function pn(A,e,t){try{var n=e.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var o=s.next;n=o;do{if((n.tag&A)===A){var B=n.inst,p=B.destroy;if(p!==void 0){B.destroy=void 0,s=e;var U=t,D=p;try{D()}catch(k){$A(s,U,k)}}}n=n.next}while(n!==o)}}catch(k){$A(e,e.return,k)}}function wB(A){var e=A.updateQueue;if(e!==null){var t=A.stateNode;try{rd(e,t)}catch(n){$A(A,A.return,n)}}}function QB(A,e,t){t.props=ea(A.type,A.memoizedProps),t.state=A.memoizedState;try{t.componentWillUnmount()}catch(n){$A(A,e,n)}}function Or(A,e){try{var t=A.ref;if(t!==null){switch(A.tag){case 26:case 27:case 5:var n=A.stateNode;break;case 30:n=A.stateNode;break;default:n=A.stateNode}typeof t=="function"?A.refCleanup=t(n):t.current=n}}catch(s){$A(A,e,s)}}function Et(A,e){var t=A.ref,n=A.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(s){$A(A,e,s)}finally{A.refCleanup=null,A=A.alternate,A!=null&&(A.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(s){$A(A,e,s)}else t.current=null}function mB(A){var e=A.type,t=A.memoizedProps,n=A.stateNode;try{A:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break A;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(s){$A(A,A.return,s)}}function $o(A,e,t){try{var n=A.stateNode;Mw(n,A.type,t,e),n[ze]=e}catch(s){$A(A,A.return,s)}}function CB(A){return A.tag===5||A.tag===3||A.tag===26||A.tag===27&&bn(A.type)||A.tag===4}function Ac(A){A:for(;;){for(;A.sibling===null;){if(A.return===null||CB(A.return))return null;A=A.return}for(A.sibling.return=A.return,A=A.sibling;A.tag!==5&&A.tag!==6&&A.tag!==18;){if(A.tag===27&&bn(A.type)||A.flags&2||A.child===null||A.tag===4)continue A;A.child.return=A,A=A.child}if(!(A.flags&2))return A.stateNode}}function ec(A,e,t){var n=A.tag;if(n===5||n===6)A=A.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(A,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(A),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=vi));else if(n!==4&&(n===27&&bn(A.type)&&(t=A.stateNode,e=null),A=A.child,A!==null))for(ec(A,e,t),A=A.sibling;A!==null;)ec(A,e,t),A=A.sibling}function di(A,e,t){var n=A.tag;if(n===5||n===6)A=A.stateNode,e?t.insertBefore(A,e):t.appendChild(A);else if(n!==4&&(n===27&&bn(A.type)&&(t=A.stateNode),A=A.child,A!==null))for(di(A,e,t),A=A.sibling;A!==null;)di(A,e,t),A=A.sibling}function UB(A){var e=A.stateNode,t=A.memoizedProps;try{for(var n=A.type,s=e.attributes;s.length;)e.removeAttributeNode(s[0]);Te(e,n,t),e[Me]=A,e[ze]=t}catch(o){$A(A,A.return,o)}}var Yt=!1,fe=!1,tc=!1,xB=typeof WeakSet=="function"?WeakSet:Set,ye=null;function pw(A,e){if(A=A.containerInfo,yc=Di,A=Nf(A),$s(A)){if("selectionStart"in A)var t={start:A.selectionStart,end:A.selectionEnd};else A:{t=(t=A.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var s=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break A}var B=0,p=-1,U=-1,D=0,k=0,Y=A,N=null;e:for(;;){for(var K;Y!==t||s!==0&&Y.nodeType!==3||(p=B+s),Y!==o||n!==0&&Y.nodeType!==3||(U=B+n),Y.nodeType===3&&(B+=Y.nodeValue.length),(K=Y.firstChild)!==null;)N=Y,Y=K;for(;;){if(Y===A)break e;if(N===t&&++D===s&&(p=B),N===o&&++k===n&&(U=B),(K=Y.nextSibling)!==null)break;Y=N,N=Y.parentNode}Y=K}t=p===-1||U===-1?null:{start:p,end:U}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fc={focusedElem:A,selectionRange:t},Di=!1,ye=e;ye!==null;)if(e=ye,A=e.child,(e.subtreeFlags&1024)!==0&&A!==null)A.return=e,ye=A;else for(;ye!==null;){switch(e=ye,o=e.alternate,A=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((A&1024)!==0&&o!==null){A=void 0,t=e,s=o.memoizedProps,o=o.memoizedState,n=t.stateNode;try{var HA=ea(t.type,s,t.elementType===t.type);A=n.getSnapshotBeforeUpdate(HA,o),n.__reactInternalSnapshotBeforeUpdate=A}catch(FA){$A(t,t.return,FA)}}break;case 3:if((A&1024)!==0){if(A=e.stateNode.containerInfo,t=A.nodeType,t===9)Sc(A);else if(t===1)switch(A.nodeName){case"HEAD":case"HTML":case"BODY":Sc(A);break;default:A.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((A&1024)!==0)throw Error(l(163))}if(A=e.sibling,A!==null){A.return=e.return,ye=A;break}ye=e.return}}function vB(A,e,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:wn(A,t),n&4&&Mr(5,t);break;case 1:if(wn(A,t),n&4)if(A=t.stateNode,e===null)try{A.componentDidMount()}catch(B){$A(t,t.return,B)}else{var s=ea(t.type,e.memoizedProps);e=e.memoizedState;try{A.componentDidUpdate(s,e,A.__reactInternalSnapshotBeforeUpdate)}catch(B){$A(t,t.return,B)}}n&64&&wB(t),n&512&&Or(t,t.return);break;case 3:if(wn(A,t),n&64&&(A=t.updateQueue,A!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{rd(A,e)}catch(B){$A(t,t.return,B)}}break;case 27:e===null&&n&4&&UB(t);case 26:case 5:wn(A,t),e===null&&n&4&&mB(t),n&512&&Or(t,t.return);break;case 12:wn(A,t);break;case 13:wn(A,t),n&4&&FB(A,t),n&64&&(A=t.memoizedState,A!==null&&(A=A.dehydrated,A!==null&&(t=yw.bind(null,t),Vw(A,t))));break;case 22:if(n=t.memoizedState!==null||Yt,!n){e=e!==null&&e.memoizedState!==null||fe,s=Yt;var o=fe;Yt=n,(fe=e)&&!o?Qn(A,t,(t.subtreeFlags&8772)!==0):wn(A,t),Yt=s,fe=o}break;case 30:break;default:wn(A,t)}}function bB(A){var e=A.alternate;e!==null&&(A.alternate=null,bB(e)),A.child=null,A.deletions=null,A.sibling=null,A.tag===5&&(e=A.stateNode,e!==null&&Ns(e)),A.stateNode=null,A.return=null,A.dependencies=null,A.memoizedProps=null,A.memoizedState=null,A.pendingProps=null,A.stateNode=null,A.updateQueue=null}var ne=null,Je=!1;function Jt(A,e,t){for(t=t.child;t!==null;)yB(A,e,t),t=t.sibling}function yB(A,e,t){if($&&typeof $.onCommitFiberUnmount=="function")try{$.onCommitFiberUnmount(H,t)}catch{}switch(t.tag){case 26:fe||Et(t,e),Jt(A,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:fe||Et(t,e);var n=ne,s=Je;bn(t.type)&&(ne=t.stateNode,Je=!1),Jt(A,e,t),Yr(t.stateNode),ne=n,Je=s;break;case 5:fe||Et(t,e);case 6:if(n=ne,s=Je,ne=null,Jt(A,e,t),ne=n,Je=s,ne!==null)if(Je)try{(ne.nodeType===9?ne.body:ne.nodeName==="HTML"?ne.ownerDocument.body:ne).removeChild(t.stateNode)}catch(o){$A(t,e,o)}else try{ne.removeChild(t.stateNode)}catch(o){$A(t,e,o)}break;case 18:ne!==null&&(Je?(A=ne,Bg(A.nodeType===9?A.body:A.nodeName==="HTML"?A.ownerDocument.body:A,t.stateNode),el(A)):Bg(ne,t.stateNode));break;case 4:n=ne,s=Je,ne=t.stateNode.containerInfo,Je=!0,Jt(A,e,t),ne=n,Je=s;break;case 0:case 11:case 14:case 15:fe||pn(2,t,e),fe||pn(4,t,e),Jt(A,e,t);break;case 1:fe||(Et(t,e),n=t.stateNode,typeof n.componentWillUnmount=="function"&&QB(t,e,n)),Jt(A,e,t);break;case 21:Jt(A,e,t);break;case 22:fe=(n=fe)||t.memoizedState!==null,Jt(A,e,t),fe=n;break;default:Jt(A,e,t)}}function FB(A,e){if(e.memoizedState===null&&(A=e.alternate,A!==null&&(A=A.memoizedState,A!==null&&(A=A.dehydrated,A!==null))))try{el(A)}catch(t){$A(e,e.return,t)}}function ww(A){switch(A.tag){case 13:case 19:var e=A.stateNode;return e===null&&(e=A.stateNode=new xB),e;case 22:return A=A.stateNode,e=A._retryCache,e===null&&(e=A._retryCache=new xB),e;default:throw Error(l(435,A.tag))}}function nc(A,e){var t=ww(A);e.forEach(function(n){var s=Fw.bind(null,A,n);t.has(n)||(t.add(n),n.then(s,s))})}function $e(A,e){var t=e.deletions;if(t!==null)for(var n=0;n<t.length;n++){var s=t[n],o=A,B=e,p=B;A:for(;p!==null;){switch(p.tag){case 27:if(bn(p.type)){ne=p.stateNode,Je=!1;break A}break;case 5:ne=p.stateNode,Je=!1;break A;case 3:case 4:ne=p.stateNode.containerInfo,Je=!0;break A}p=p.return}if(ne===null)throw Error(l(160));yB(o,B,s),ne=null,Je=!1,o=s.alternate,o!==null&&(o.return=null),s.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)EB(e,A),e=e.sibling}var mt=null;function EB(A,e){var t=A.alternate,n=A.flags;switch(A.tag){case 0:case 11:case 14:case 15:$e(e,A),At(A),n&4&&(pn(3,A,A.return),Mr(3,A),pn(5,A,A.return));break;case 1:$e(e,A),At(A),n&512&&(fe||t===null||Et(t,t.return)),n&64&&Yt&&(A=A.updateQueue,A!==null&&(n=A.callbacks,n!==null&&(t=A.shared.hiddenCallbacks,A.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:var s=mt;if($e(e,A),At(A),n&512&&(fe||t===null||Et(t,t.return)),n&4){var o=t!==null?t.memoizedState:null;if(n=A.memoizedState,t===null)if(n===null)if(A.stateNode===null){A:{n=A.type,t=A.memoizedProps,s=s.ownerDocument||s;e:switch(n){case"title":o=s.getElementsByTagName("title")[0],(!o||o[sr]||o[Me]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=s.createElement(n),s.head.insertBefore(o,s.querySelector("head > title"))),Te(o,n,t),o[Me]=A,ve(o),n=o;break A;case"link":var B=Ug("link","href",s).get(n+(t.href||""));if(B){for(var p=0;p<B.length;p++)if(o=B[p],o.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&o.getAttribute("rel")===(t.rel==null?null:t.rel)&&o.getAttribute("title")===(t.title==null?null:t.title)&&o.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){B.splice(p,1);break e}}o=s.createElement(n),Te(o,n,t),s.head.appendChild(o);break;case"meta":if(B=Ug("meta","content",s).get(n+(t.content||""))){for(p=0;p<B.length;p++)if(o=B[p],o.getAttribute("content")===(t.content==null?null:""+t.content)&&o.getAttribute("name")===(t.name==null?null:t.name)&&o.getAttribute("property")===(t.property==null?null:t.property)&&o.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&o.getAttribute("charset")===(t.charSet==null?null:t.charSet)){B.splice(p,1);break e}}o=s.createElement(n),Te(o,n,t),s.head.appendChild(o);break;default:throw Error(l(468,n))}o[Me]=A,ve(o),n=o}A.stateNode=n}else xg(s,A.type,A.stateNode);else A.stateNode=Cg(s,n,A.memoizedProps);else o!==n?(o===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):o.count--,n===null?xg(s,A.type,A.stateNode):Cg(s,n,A.memoizedProps)):n===null&&A.stateNode!==null&&$o(A,A.memoizedProps,t.memoizedProps)}break;case 27:$e(e,A),At(A),n&512&&(fe||t===null||Et(t,t.return)),t!==null&&n&4&&$o(A,A.memoizedProps,t.memoizedProps);break;case 5:if($e(e,A),At(A),n&512&&(fe||t===null||Et(t,t.return)),A.flags&32){s=A.stateNode;try{wa(s,"")}catch(K){$A(A,A.return,K)}}n&4&&A.stateNode!=null&&(s=A.memoizedProps,$o(A,s,t!==null?t.memoizedProps:s)),n&1024&&(tc=!0);break;case 6:if($e(e,A),At(A),n&4){if(A.stateNode===null)throw Error(l(162));n=A.memoizedProps,t=A.stateNode;try{t.nodeValue=n}catch(K){$A(A,A.return,K)}}break;case 3:if(Ei=null,s=mt,mt=yi(e.containerInfo),$e(e,A),mt=s,At(A),n&4&&t!==null&&t.memoizedState.isDehydrated)try{el(e.containerInfo)}catch(K){$A(A,A.return,K)}tc&&(tc=!1,HB(A));break;case 4:n=mt,mt=yi(A.stateNode.containerInfo),$e(e,A),At(A),mt=n;break;case 12:$e(e,A),At(A);break;case 13:$e(e,A),At(A),A.child.flags&8192&&A.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(oc=Qe()),n&4&&(n=A.updateQueue,n!==null&&(A.updateQueue=null,nc(A,n)));break;case 22:s=A.memoizedState!==null;var U=t!==null&&t.memoizedState!==null,D=Yt,k=fe;if(Yt=D||s,fe=k||U,$e(e,A),fe=k,Yt=D,At(A),n&8192)A:for(e=A.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,s&&(t===null||U||Yt||fe||ta(A)),t=null,e=A;;){if(e.tag===5||e.tag===26){if(t===null){U=t=e;try{if(o=U.stateNode,s)B=o.style,typeof B.setProperty=="function"?B.setProperty("display","none","important"):B.display="none";else{p=U.stateNode;var Y=U.memoizedProps.style,N=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;p.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(K){$A(U,U.return,K)}}}else if(e.tag===6){if(t===null){U=e;try{U.stateNode.nodeValue=s?"":U.memoizedProps}catch(K){$A(U,U.return,K)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===A)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break A;for(;e.sibling===null;){if(e.return===null||e.return===A)break A;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=A.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,nc(A,t))));break;case 19:$e(e,A),At(A),n&4&&(n=A.updateQueue,n!==null&&(A.updateQueue=null,nc(A,n)));break;case 30:break;case 21:break;default:$e(e,A),At(A)}}function At(A){var e=A.flags;if(e&2){try{for(var t,n=A.return;n!==null;){if(CB(n)){t=n;break}n=n.return}if(t==null)throw Error(l(160));switch(t.tag){case 27:var s=t.stateNode,o=Ac(A);di(A,o,s);break;case 5:var B=t.stateNode;t.flags&32&&(wa(B,""),t.flags&=-33);var p=Ac(A);di(A,p,B);break;case 3:case 4:var U=t.stateNode.containerInfo,D=Ac(A);ec(A,D,U);break;default:throw Error(l(161))}}catch(k){$A(A,A.return,k)}A.flags&=-3}e&4096&&(A.flags&=-4097)}function HB(A){if(A.subtreeFlags&1024)for(A=A.child;A!==null;){var e=A;HB(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),A=A.sibling}}function wn(A,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)vB(A,e.alternate,e),e=e.sibling}function ta(A){for(A=A.child;A!==null;){var e=A;switch(e.tag){case 0:case 11:case 14:case 15:pn(4,e,e.return),ta(e);break;case 1:Et(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&QB(e,e.return,t),ta(e);break;case 27:Yr(e.stateNode);case 26:case 5:Et(e,e.return),ta(e);break;case 22:e.memoizedState===null&&ta(e);break;case 30:ta(e);break;default:ta(e)}A=A.sibling}}function Qn(A,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,s=A,o=e,B=o.flags;switch(o.tag){case 0:case 11:case 15:Qn(s,o,t),Mr(4,o);break;case 1:if(Qn(s,o,t),n=o,s=n.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(D){$A(n,n.return,D)}if(n=o,s=n.updateQueue,s!==null){var p=n.stateNode;try{var U=s.shared.hiddenCallbacks;if(U!==null)for(s.shared.hiddenCallbacks=null,s=0;s<U.length;s++)ad(U[s],p)}catch(D){$A(n,n.return,D)}}t&&B&64&&wB(o),Or(o,o.return);break;case 27:UB(o);case 26:case 5:Qn(s,o,t),t&&n===null&&B&4&&mB(o),Or(o,o.return);break;case 12:Qn(s,o,t);break;case 13:Qn(s,o,t),t&&B&4&&FB(s,o);break;case 22:o.memoizedState===null&&Qn(s,o,t),Or(o,o.return);break;case 30:break;default:Qn(s,o,t)}e=e.sibling}}function ac(A,e){var t=null;A!==null&&A.memoizedState!==null&&A.memoizedState.cachePool!==null&&(t=A.memoizedState.cachePool.pool),A=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(A=e.memoizedState.cachePool.pool),A!==t&&(A!=null&&A.refCount++,t!=null&&xr(t))}function rc(A,e){A=null,e.alternate!==null&&(A=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==A&&(e.refCount++,A!=null&&xr(A))}function Ht(A,e,t,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)SB(A,e,t,n),e=e.sibling}function SB(A,e,t,n){var s=e.flags;switch(e.tag){case 0:case 11:case 15:Ht(A,e,t,n),s&2048&&Mr(9,e);break;case 1:Ht(A,e,t,n);break;case 3:Ht(A,e,t,n),s&2048&&(A=null,e.alternate!==null&&(A=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==A&&(e.refCount++,A!=null&&xr(A)));break;case 12:if(s&2048){Ht(A,e,t,n),A=e.stateNode;try{var o=e.memoizedProps,B=o.id,p=o.onPostCommit;typeof p=="function"&&p(B,e.alternate===null?"mount":"update",A.passiveEffectDuration,-0)}catch(U){$A(e,e.return,U)}}else Ht(A,e,t,n);break;case 13:Ht(A,e,t,n);break;case 23:break;case 22:o=e.stateNode,B=e.alternate,e.memoizedState!==null?o._visibility&2?Ht(A,e,t,n):Rr(A,e):o._visibility&2?Ht(A,e,t,n):(o._visibility|=2,Ma(A,e,t,n,(e.subtreeFlags&10256)!==0)),s&2048&&ac(B,e);break;case 24:Ht(A,e,t,n),s&2048&&rc(e.alternate,e);break;default:Ht(A,e,t,n)}}function Ma(A,e,t,n,s){for(s=s&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var o=A,B=e,p=t,U=n,D=B.flags;switch(B.tag){case 0:case 11:case 15:Ma(o,B,p,U,s),Mr(8,B);break;case 23:break;case 22:var k=B.stateNode;B.memoizedState!==null?k._visibility&2?Ma(o,B,p,U,s):Rr(o,B):(k._visibility|=2,Ma(o,B,p,U,s)),s&&D&2048&&ac(B.alternate,B);break;case 24:Ma(o,B,p,U,s),s&&D&2048&&rc(B.alternate,B);break;default:Ma(o,B,p,U,s)}e=e.sibling}}function Rr(A,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=A,n=e,s=n.flags;switch(n.tag){case 22:Rr(t,n),s&2048&&ac(n.alternate,n);break;case 24:Rr(t,n),s&2048&&rc(n.alternate,n);break;default:Rr(t,n)}e=e.sibling}}var jr=8192;function Oa(A){if(A.subtreeFlags&jr)for(A=A.child;A!==null;)DB(A),A=A.sibling}function DB(A){switch(A.tag){case 26:Oa(A),A.flags&jr&&A.memoizedState!==null&&nQ(mt,A.memoizedState,A.memoizedProps);break;case 5:Oa(A);break;case 3:case 4:var e=mt;mt=yi(A.stateNode.containerInfo),Oa(A),mt=e;break;case 22:A.memoizedState===null&&(e=A.alternate,e!==null&&e.memoizedState!==null?(e=jr,jr=16777216,Oa(A),jr=e):Oa(A));break;default:Oa(A)}}function TB(A){var e=A.alternate;if(e!==null&&(A=e.child,A!==null)){e.child=null;do e=A.sibling,A.sibling=null,A=e;while(A!==null)}}function Gr(A){var e=A.deletions;if((A.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var n=e[t];ye=n,NB(n,A)}TB(A)}if(A.subtreeFlags&10256)for(A=A.child;A!==null;)IB(A),A=A.sibling}function IB(A){switch(A.tag){case 0:case 11:case 15:Gr(A),A.flags&2048&&pn(9,A,A.return);break;case 3:Gr(A);break;case 12:Gr(A);break;case 22:var e=A.stateNode;A.memoizedState!==null&&e._visibility&2&&(A.return===null||A.return.tag!==13)?(e._visibility&=-3,Bi(A)):Gr(A);break;default:Gr(A)}}function Bi(A){var e=A.deletions;if((A.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var n=e[t];ye=n,NB(n,A)}TB(A)}for(A=A.child;A!==null;){switch(e=A,e.tag){case 0:case 11:case 15:pn(8,e,e.return),Bi(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,Bi(e));break;default:Bi(e)}A=A.sibling}}function NB(A,e){for(;ye!==null;){var t=ye;switch(t.tag){case 0:case 11:case 15:pn(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:xr(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,ye=n;else A:for(t=A;ye!==null;){n=ye;var s=n.sibling,o=n.return;if(bB(n),n===t){ye=null;break A}if(s!==null){s.return=o,ye=s;break A}ye=o}}}var Qw={getCacheForType:function(A){var e=Oe(me),t=e.data.get(A);return t===void 0&&(t=A(),e.data.set(A,t)),t}},mw=typeof WeakMap=="function"?WeakMap:Map,YA=0,Ae=null,LA=null,RA=0,JA=0,et=null,mn=!1,Ra=!1,lc=!1,Zt=0,se=0,Cn=0,na=0,ic=0,ft=0,ja=0,kr=null,Ze=null,sc=!1,oc=0,gi=1/0,hi=null,Un=null,De=0,xn=null,Ga=null,ka=0,cc=0,uc=null,LB=null,_r=0,fc=null;function tt(){if((YA&2)!==0&&RA!==0)return RA&-RA;if(x.T!==null){var A=Ha;return A!==0?A:Qc()}return ca()}function KB(){ft===0&&(ft=(RA&536870912)===0||VA?oe():536870912);var A=ut.current;return A!==null&&(A.flags|=32),ft}function nt(A,e,t){(A===Ae&&(JA===2||JA===9)||A.cancelPendingCommit!==null)&&(_a(A,0),vn(A,RA,ft,!1)),jA(A,t),((YA&2)===0||A!==Ae)&&(A===Ae&&((YA&2)===0&&(na|=t),se===4&&vn(A,RA,ft,!1)),St(A))}function MB(A,e,t){if((YA&6)!==0)throw Error(l(327));var n=!t&&(e&124)===0&&(e&A.expiredLanes)===0||UA(A,e),s=n?xw(A,e):gc(A,e,!0),o=n;do{if(s===0){Ra&&!n&&vn(A,e,0,!1);break}else{if(t=A.current.alternate,o&&!Cw(t)){s=gc(A,e,!1),o=!1;continue}if(s===2){if(o=e,A.errorRecoveryDisabledLanes&o)var B=0;else B=A.pendingLanes&-536870913,B=B!==0?B:B&536870912?536870912:0;if(B!==0){e=B;A:{var p=A;s=kr;var U=p.current.memoizedState.isDehydrated;if(U&&(_a(p,B).flags|=256),B=gc(p,B,!1),B!==2){if(lc&&!U){p.errorRecoveryDisabledLanes|=o,na|=o,s=4;break A}o=Ze,Ze=s,o!==null&&(Ze===null?Ze=o:Ze.push.apply(Ze,o))}s=B}if(o=!1,s!==2)continue}}if(s===1){_a(A,0),vn(A,e,0,!0);break}A:{switch(n=A,o=s,o){case 0:case 1:throw Error(l(345));case 4:if((e&4194048)!==e)break;case 6:vn(n,e,ft,!mn);break A;case 2:Ze=null;break;case 3:case 5:break;default:throw Error(l(329))}if((e&62914560)===e&&(s=oc+300-Qe(),10<s)){if(vn(n,e,ft,!mn),wA(n,0,!0)!==0)break A;n.timeoutHandle=fg(OB.bind(null,n,t,Ze,hi,sc,e,ft,na,ja,mn,o,2,-0,0),s);break A}OB(n,t,Ze,hi,sc,e,ft,na,ja,mn,o,0,-0,0)}}break}while(!0);St(A)}function OB(A,e,t,n,s,o,B,p,U,D,k,Y,N,K){if(A.timeoutHandle=-1,Y=e.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(qr={stylesheets:null,count:0,unsuspend:tQ},DB(e),Y=aQ(),Y!==null)){A.cancelPendingCommit=Y(zB.bind(null,A,e,o,t,n,s,B,p,U,k,1,N,K)),vn(A,o,B,!D);return}zB(A,e,o,t,n,s,B,p,U)}function Cw(A){for(var e=A;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var s=t[n],o=s.getSnapshot;s=s.value;try{if(!We(o(),s))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vn(A,e,t,n){e&=~ic,e&=~na,A.suspendedLanes|=e,A.pingedLanes&=~e,n&&(A.warmLanes|=e),n=A.expirationTimes;for(var s=e;0<s;){var o=31-L(s),B=1<<o;n[o]=-1,s&=~B}t!==0&&Lt(A,t,e)}function pi(){return(YA&6)===0?(Vr(0),!1):!0}function dc(){if(LA!==null){if(JA===0)var A=LA.return;else A=LA,Gt=Wn=null,So(A),La=null,Nr=0,A=LA;for(;A!==null;)pB(A.alternate,A),A=A.return;LA=null}}function _a(A,e){var t=A.timeoutHandle;t!==-1&&(A.timeoutHandle=-1,Rw(t)),t=A.cancelPendingCommit,t!==null&&(A.cancelPendingCommit=null,t()),dc(),Ae=A,LA=t=Ot(A.current,null),RA=e,JA=0,et=null,mn=!1,Ra=UA(A,e),lc=!1,ja=ft=ic=na=Cn=se=0,Ze=kr=null,sc=!1,(e&8)!==0&&(e|=e&32);var n=A.entangledLanes;if(n!==0)for(A=A.entanglements,n&=e;0<n;){var s=31-L(n),o=1<<s;e|=A[s],n&=~o}return Zt=e,Rl(),t}function RB(A,e){IA=null,x.H=ai,e===br||e===Jl?(e=td(),JA=3):e===$f?(e=td(),JA=4):JA=e===nB?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,et=e,LA===null&&(se=1,oi(A,it(e,A.current)))}function jB(){var A=x.H;return x.H=ai,A===null?ai:A}function GB(){var A=x.A;return x.A=Qw,A}function Bc(){se=4,mn||(RA&4194048)!==RA&&ut.current!==null||(Ra=!0),(Cn&134217727)===0&&(na&134217727)===0||Ae===null||vn(Ae,RA,ft,!1)}function gc(A,e,t){var n=YA;YA|=2;var s=jB(),o=GB();(Ae!==A||RA!==e)&&(hi=null,_a(A,e)),e=!1;var B=se;A:do try{if(JA!==0&&LA!==null){var p=LA,U=et;switch(JA){case 8:dc(),B=6;break A;case 3:case 2:case 9:case 6:ut.current===null&&(e=!0);var D=JA;if(JA=0,et=null,Va(A,p,U,D),t&&Ra){B=0;break A}break;default:D=JA,JA=0,et=null,Va(A,p,U,D)}}Uw(),B=se;break}catch(k){RB(A,k)}while(!0);return e&&A.shellSuspendCounter++,Gt=Wn=null,YA=n,x.H=s,x.A=o,LA===null&&(Ae=null,RA=0,Rl()),B}function Uw(){for(;LA!==null;)kB(LA)}function xw(A,e){var t=YA;YA|=2;var n=jB(),s=GB();Ae!==A||RA!==e?(hi=null,gi=Qe()+500,_a(A,e)):Ra=UA(A,e);A:do try{if(JA!==0&&LA!==null){e=LA;var o=et;e:switch(JA){case 1:JA=0,et=null,Va(A,e,o,1);break;case 2:case 9:if(Ad(o)){JA=0,et=null,_B(e);break}e=function(){JA!==2&&JA!==9||Ae!==A||(JA=7),St(A)},o.then(e,e);break A;case 3:JA=7;break A;case 4:JA=5;break A;case 7:Ad(o)?(JA=0,et=null,_B(e)):(JA=0,et=null,Va(A,e,o,7));break;case 5:var B=null;switch(LA.tag){case 26:B=LA.memoizedState;case 5:case 27:var p=LA;if(!B||vg(B)){JA=0,et=null;var U=p.sibling;if(U!==null)LA=U;else{var D=p.return;D!==null?(LA=D,wi(D)):LA=null}break e}}JA=0,et=null,Va(A,e,o,5);break;case 6:JA=0,et=null,Va(A,e,o,6);break;case 8:dc(),se=6;break A;default:throw Error(l(462))}}vw();break}catch(k){RB(A,k)}while(!0);return Gt=Wn=null,x.H=n,x.A=s,YA=t,LA!==null?0:(Ae=null,RA=0,Rl(),se)}function vw(){for(;LA!==null&&!vt();)kB(LA)}function kB(A){var e=gB(A.alternate,A,Zt);A.memoizedProps=A.pendingProps,e===null?wi(A):LA=e}function _B(A){var e=A,t=e.alternate;switch(e.tag){case 15:case 0:e=oB(t,e,e.pendingProps,e.type,void 0,RA);break;case 11:e=oB(t,e,e.pendingProps,e.type.render,e.ref,RA);break;case 5:So(e);default:pB(t,e),e=LA=Vf(e,Zt),e=gB(t,e,Zt)}A.memoizedProps=A.pendingProps,e===null?wi(A):LA=e}function Va(A,e,t,n){Gt=Wn=null,So(e),La=null,Nr=0;var s=e.return;try{if(dw(A,s,e,t,RA)){se=1,oi(A,it(t,A.current)),LA=null;return}}catch(o){if(s!==null)throw LA=s,o;se=1,oi(A,it(t,A.current)),LA=null;return}e.flags&32768?(VA||n===1?A=!0:Ra||(RA&536870912)!==0?A=!1:(mn=A=!0,(n===2||n===9||n===3||n===6)&&(n=ut.current,n!==null&&n.tag===13&&(n.flags|=16384))),VB(e,A)):wi(e)}function wi(A){var e=A;do{if((e.flags&32768)!==0){VB(e,mn);return}A=e.return;var t=gw(e.alternate,e,Zt);if(t!==null){LA=t;return}if(e=e.sibling,e!==null){LA=e;return}LA=e=A}while(e!==null);se===0&&(se=5)}function VB(A,e){do{var t=hw(A.alternate,A);if(t!==null){t.flags&=32767,LA=t;return}if(t=A.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(A=A.sibling,A!==null)){LA=A;return}LA=A=t}while(A!==null);se=6,LA=null}function zB(A,e,t,n,s,o,B,p,U){A.cancelPendingCommit=null;do Qi();while(De!==0);if((YA&6)!==0)throw Error(l(327));if(e!==null){if(e===A.current)throw Error(l(177));if(o=e.lanes|e.childLanes,o|=ao,Ve(A,t,o,B,p,U),A===Ae&&(LA=Ae=null,RA=0),Ga=e,xn=A,ka=t,cc=o,uc=s,LB=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(A.callbackNode=null,A.callbackPriority=0,Ew(bt,function(){return qB(),null})):(A.callbackNode=null,A.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=x.T,x.T=null,s=O.p,O.p=2,B=YA,YA|=4;try{pw(A,e,t)}finally{YA=B,O.p=s,x.T=n}}De=1,XB(),YB(),JB()}}function XB(){if(De===1){De=0;var A=xn,e=Ga,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=x.T,x.T=null;var n=O.p;O.p=2;var s=YA;YA|=4;try{EB(e,A);var o=Fc,B=Nf(A.containerInfo),p=o.focusedElem,U=o.selectionRange;if(B!==p&&p&&p.ownerDocument&&If(p.ownerDocument.documentElement,p)){if(U!==null&&$s(p)){var D=U.start,k=U.end;if(k===void 0&&(k=D),"selectionStart"in p)p.selectionStart=D,p.selectionEnd=Math.min(k,p.value.length);else{var Y=p.ownerDocument||document,N=Y&&Y.defaultView||window;if(N.getSelection){var K=N.getSelection(),HA=p.textContent.length,FA=Math.min(U.start,HA),WA=U.end===void 0?FA:Math.min(U.end,HA);!K.extend&&FA>WA&&(B=WA,WA=FA,FA=B);var y=Tf(p,FA),v=Tf(p,WA);if(y&&v&&(K.rangeCount!==1||K.anchorNode!==y.node||K.anchorOffset!==y.offset||K.focusNode!==v.node||K.focusOffset!==v.offset)){var S=Y.createRange();S.setStart(y.node,y.offset),K.removeAllRanges(),FA>WA?(K.addRange(S),K.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),K.addRange(S))}}}}for(Y=[],K=p;K=K.parentNode;)K.nodeType===1&&Y.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof p.focus=="function"&&p.focus(),p=0;p<Y.length;p++){var V=Y[p];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}Di=!!yc,Fc=yc=null}finally{YA=s,O.p=n,x.T=t}}A.current=e,De=2}}function YB(){if(De===2){De=0;var A=xn,e=Ga,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=x.T,x.T=null;var n=O.p;O.p=2;var s=YA;YA|=4;try{vB(A,e.alternate,e)}finally{YA=s,O.p=n,x.T=t}}De=3}}function JB(){if(De===4||De===3){De=0,jn();var A=xn,e=Ga,t=ka,n=LB;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?De=5:(De=0,Ga=xn=null,ZB(A,A.pendingLanes));var s=A.pendingLanes;if(s===0&&(Un=null),ln(t),e=e.stateNode,$&&typeof $.onCommitFiberRoot=="function")try{$.onCommitFiberRoot(H,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=x.T,s=O.p,O.p=2,x.T=null;try{for(var o=A.onRecoverableError,B=0;B<n.length;B++){var p=n[B];o(p.value,{componentStack:p.stack})}}finally{x.T=e,O.p=s}}(ka&3)!==0&&Qi(),St(A),s=A.pendingLanes,(t&4194090)!==0&&(s&42)!==0?A===fc?_r++:(_r=0,fc=A):_r=0,Vr(0)}}function ZB(A,e){(A.pooledCacheLanes&=e)===0&&(e=A.pooledCache,e!=null&&(A.pooledCache=null,xr(e)))}function Qi(A){return XB(),YB(),JB(),qB()}function qB(){if(De!==5)return!1;var A=xn,e=cc;cc=0;var t=ln(ka),n=x.T,s=O.p;try{O.p=32>t?32:t,x.T=null,t=uc,uc=null;var o=xn,B=ka;if(De=0,Ga=xn=null,ka=0,(YA&6)!==0)throw Error(l(331));var p=YA;if(YA|=4,IB(o.current),SB(o,o.current,B,t),YA=p,Vr(0,!1),$&&typeof $.onPostCommitFiberRoot=="function")try{$.onPostCommitFiberRoot(H,o)}catch{}return!0}finally{O.p=s,x.T=n,ZB(A,e)}}function WB(A,e,t){e=it(t,e),e=Vo(A.stateNode,e,2),A=dn(A,e,2),A!==null&&(jA(A,2),St(A))}function $A(A,e,t){if(A.tag===3)WB(A,A,t);else for(;e!==null;){if(e.tag===3){WB(e,A,t);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Un===null||!Un.has(n))){A=it(t,A),t=eB(2),n=dn(e,t,2),n!==null&&(tB(t,n,e,A),jA(n,2),St(n));break}}e=e.return}}function hc(A,e,t){var n=A.pingCache;if(n===null){n=A.pingCache=new mw;var s=new Set;n.set(e,s)}else s=n.get(e),s===void 0&&(s=new Set,n.set(e,s));s.has(t)||(lc=!0,s.add(t),A=bw.bind(null,A,e,t),e.then(A,A))}function bw(A,e,t){var n=A.pingCache;n!==null&&n.delete(e),A.pingedLanes|=A.suspendedLanes&t,A.warmLanes&=~t,Ae===A&&(RA&t)===t&&(se===4||se===3&&(RA&62914560)===RA&&300>Qe()-oc?(YA&2)===0&&_a(A,0):ic|=t,ja===RA&&(ja=0)),St(A)}function PB(A,e){e===0&&(e=ce()),A=ba(A,e),A!==null&&(jA(A,e),St(A))}function yw(A){var e=A.memoizedState,t=0;e!==null&&(t=e.retryLane),PB(A,t)}function Fw(A,e){var t=0;switch(A.tag){case 13:var n=A.stateNode,s=A.memoizedState;s!==null&&(t=s.retryLane);break;case 19:n=A.stateNode;break;case 22:n=A.stateNode._retryCache;break;default:throw Error(l(314))}n!==null&&n.delete(e),PB(A,t)}function Ew(A,e){return Ke(A,e)}var mi=null,za=null,pc=!1,Ci=!1,wc=!1,aa=0;function St(A){A!==za&&A.next===null&&(za===null?mi=za=A:za=za.next=A),Ci=!0,pc||(pc=!0,Sw())}function Vr(A,e){if(!wc&&Ci){wc=!0;do for(var t=!1,n=mi;n!==null;){if(A!==0){var s=n.pendingLanes;if(s===0)var o=0;else{var B=n.suspendedLanes,p=n.pingedLanes;o=(1<<31-L(42|A)+1)-1,o&=s&~(B&~p),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(t=!0,tg(n,o))}else o=RA,o=wA(n,n===Ae?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||UA(n,o)||(t=!0,tg(n,o));n=n.next}while(t);wc=!1}}function Hw(){$B()}function $B(){Ci=pc=!1;var A=0;aa!==0&&(Ow()&&(A=aa),aa=0);for(var e=Qe(),t=null,n=mi;n!==null;){var s=n.next,o=Ag(n,e);o===0?(n.next=null,t===null?mi=s:t.next=s,s===null&&(za=t)):(t=n,(A!==0||(o&3)!==0)&&(Ci=!0)),n=s}Vr(A)}function Ag(A,e){for(var t=A.suspendedLanes,n=A.pingedLanes,s=A.expirationTimes,o=A.pendingLanes&-62914561;0<o;){var B=31-L(o),p=1<<B,U=s[B];U===-1?((p&t)===0||(p&n)!==0)&&(s[B]=te(p,e)):U<=e&&(A.expiredLanes|=p),o&=~p}if(e=Ae,t=RA,t=wA(A,A===e?t:0,A.cancelPendingCommit!==null||A.timeoutHandle!==-1),n=A.callbackNode,t===0||A===e&&(JA===2||JA===9)||A.cancelPendingCommit!==null)return n!==null&&n!==null&&xe(n),A.callbackNode=null,A.callbackPriority=0;if((t&3)===0||UA(A,t)){if(e=t&-t,e===A.callbackPriority)return e;switch(n!==null&&xe(n),ln(t)){case 2:case 8:t=nn;break;case 32:t=bt;break;case 268435456:t=X;break;default:t=bt}return n=eg.bind(null,A),t=Ke(t,n),A.callbackPriority=e,A.callbackNode=t,e}return n!==null&&n!==null&&xe(n),A.callbackPriority=2,A.callbackNode=null,2}function eg(A,e){if(De!==0&&De!==5)return A.callbackNode=null,A.callbackPriority=0,null;var t=A.callbackNode;if(Qi()&&A.callbackNode!==t)return null;var n=RA;return n=wA(A,A===Ae?n:0,A.cancelPendingCommit!==null||A.timeoutHandle!==-1),n===0?null:(MB(A,n,e),Ag(A,Qe()),A.callbackNode!=null&&A.callbackNode===t?eg.bind(null,A):null)}function tg(A,e){if(Qi())return null;MB(A,e,!0)}function Sw(){jw(function(){(YA&6)!==0?Ke(tn,Hw):$B()})}function Qc(){return aa===0&&(aa=oe()),aa}function ng(A){return A==null||typeof A=="symbol"||typeof A=="boolean"?null:typeof A=="function"?A:Tl(""+A)}function ag(A,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,A.id&&t.setAttribute("form",A.id),e.parentNode.insertBefore(t,e),A=new FormData(A),t.parentNode.removeChild(t),A}function Dw(A,e,t,n,s){if(e==="submit"&&t&&t.stateNode===s){var o=ng((s[ze]||null).action),B=n.submitter;B&&(e=(e=B[ze]||null)?ng(e.formAction):B.getAttribute("formAction"),e!==null&&(o=e,B=null));var p=new Kl("action","action",null,n,s);A.push({event:p,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(aa!==0){var U=B?ag(s,B):new FormData(s);Ro(t,{pending:!0,data:U,method:s.method,action:o},null,U)}}else typeof o=="function"&&(p.preventDefault(),U=B?ag(s,B):new FormData(s),Ro(t,{pending:!0,data:U,method:s.method,action:o},o,U))},currentTarget:s}]})}}for(var mc=0;mc<no.length;mc++){var Cc=no[mc],Tw=Cc.toLowerCase(),Iw=Cc[0].toUpperCase()+Cc.slice(1);Qt(Tw,"on"+Iw)}Qt(Mf,"onAnimationEnd"),Qt(Of,"onAnimationIteration"),Qt(Rf,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(qp,"onTransitionRun"),Qt(Wp,"onTransitionStart"),Qt(Pp,"onTransitionCancel"),Qt(jf,"onTransitionEnd"),ga("onMouseEnter",["mouseout","mouseover"]),ga("onMouseLeave",["mouseout","mouseover"]),ga("onPointerEnter",["pointerout","pointerover"]),ga("onPointerLeave",["pointerout","pointerover"]),kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zr));function rg(A,e){e=(e&4)!==0;for(var t=0;t<A.length;t++){var n=A[t],s=n.event;n=n.listeners;A:{var o=void 0;if(e)for(var B=n.length-1;0<=B;B--){var p=n[B],U=p.instance,D=p.currentTarget;if(p=p.listener,U!==o&&s.isPropagationStopped())break A;o=p,s.currentTarget=D;try{o(s)}catch(k){si(k)}s.currentTarget=null,o=U}else for(B=0;B<n.length;B++){if(p=n[B],U=p.instance,D=p.currentTarget,p=p.listener,U!==o&&s.isPropagationStopped())break A;o=p,s.currentTarget=D;try{o(s)}catch(k){si(k)}s.currentTarget=null,o=U}}}}function KA(A,e){var t=e[Is];t===void 0&&(t=e[Is]=new Set);var n=A+"__bubble";t.has(n)||(lg(e,A,2,!1),t.add(n))}function Uc(A,e,t){var n=0;e&&(n|=4),lg(t,A,n,e)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function xc(A){if(!A[Ui]){A[Ui]=!0,Pu.forEach(function(t){t!=="selectionchange"&&(Nw.has(t)||Uc(t,!1,A),Uc(t,!0,A))});var e=A.nodeType===9?A:A.ownerDocument;e===null||e[Ui]||(e[Ui]=!0,Uc("selectionchange",!1,e))}}function lg(A,e,t,n){switch(Sg(e)){case 2:var s=iQ;break;case 8:s=sQ;break;default:s=Mc}t=s.bind(null,e,t,A),s=void 0,!Vs||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),n?s!==void 0?A.addEventListener(e,t,{capture:!0,passive:s}):A.addEventListener(e,t,!0):s!==void 0?A.addEventListener(e,t,{passive:s}):A.addEventListener(e,t,!1)}function vc(A,e,t,n,s){var o=n;if((e&1)===0&&(e&2)===0&&n!==null)A:for(;;){if(n===null)return;var B=n.tag;if(B===3||B===4){var p=n.stateNode.containerInfo;if(p===s)break;if(B===4)for(B=n.return;B!==null;){var U=B.tag;if((U===3||U===4)&&B.stateNode.containerInfo===s)return;B=B.return}for(;p!==null;){if(B=fa(p),B===null)return;if(U=B.tag,U===5||U===6||U===26||U===27){n=o=B;continue A}p=p.parentNode}}n=n.return}df(function(){var D=o,k=ks(t),Y=[];A:{var N=Gf.get(A);if(N!==void 0){var K=Kl,HA=A;switch(A){case"keypress":if(Nl(t)===0)break A;case"keydown":case"keyup":K=Ep;break;case"focusin":HA="focus",K=Js;break;case"focusout":HA="blur",K=Js;break;case"beforeblur":case"afterblur":K=Js;break;case"click":if(t.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=hp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=Dp;break;case Mf:case Of:case Rf:K=Qp;break;case jf:K=Ip;break;case"scroll":case"scrollend":K=Bp;break;case"wheel":K=Lp;break;case"copy":case"cut":case"paste":K=Cp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=wf;break;case"toggle":case"beforetoggle":K=Mp}var FA=(e&4)!==0,WA=!FA&&(A==="scroll"||A==="scrollend"),y=FA?N!==null?N+"Capture":null:N;FA=[];for(var v=D,S;v!==null;){var V=v;if(S=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||S===null||y===null||(V=cr(v,y),V!=null&&FA.push(Xr(v,V,S))),WA)break;v=v.return}0<FA.length&&(N=new K(N,HA,null,t,k),Y.push({event:N,listeners:FA}))}}if((e&7)===0){A:{if(N=A==="mouseover"||A==="pointerover",K=A==="mouseout"||A==="pointerout",N&&t!==Gs&&(HA=t.relatedTarget||t.fromElement)&&(fa(HA)||HA[ua]))break A;if((K||N)&&(N=k.window===k?k:(N=k.ownerDocument)?N.defaultView||N.parentWindow:window,K?(HA=t.relatedTarget||t.toElement,K=D,HA=HA?fa(HA):null,HA!==null&&(WA=f(HA),FA=HA.tag,HA!==WA||FA!==5&&FA!==27&&FA!==6)&&(HA=null)):(K=null,HA=D),K!==HA)){if(FA=hf,V="onMouseLeave",y="onMouseEnter",v="mouse",(A==="pointerout"||A==="pointerover")&&(FA=wf,V="onPointerLeave",y="onPointerEnter",v="pointer"),WA=K==null?N:or(K),S=HA==null?N:or(HA),N=new FA(V,v+"leave",K,t,k),N.target=WA,N.relatedTarget=S,V=null,fa(k)===D&&(FA=new FA(y,v+"enter",HA,t,k),FA.target=S,FA.relatedTarget=WA,V=FA),WA=V,K&&HA)e:{for(FA=K,y=HA,v=0,S=FA;S;S=Xa(S))v++;for(S=0,V=y;V;V=Xa(V))S++;for(;0<v-S;)FA=Xa(FA),v--;for(;0<S-v;)y=Xa(y),S--;for(;v--;){if(FA===y||y!==null&&FA===y.alternate)break e;FA=Xa(FA),y=Xa(y)}FA=null}else FA=null;K!==null&&ig(Y,N,K,FA,!1),HA!==null&&WA!==null&&ig(Y,WA,HA,FA,!0)}}A:{if(N=D?or(D):window,K=N.nodeName&&N.nodeName.toLowerCase(),K==="select"||K==="input"&&N.type==="file")var vA=yf;else if(vf(N))if(Ff)vA=Yp;else{vA=zp;var NA=Vp}else K=N.nodeName,!K||K.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?D&&js(D.elementType)&&(vA=yf):vA=Xp;if(vA&&(vA=vA(A,D))){bf(Y,vA,t,k);break A}NA&&NA(A,N,D),A==="focusout"&&D&&N.type==="number"&&D.memoizedProps.value!=null&&Rs(N,"number",N.value)}switch(NA=D?or(D):window,A){case"focusin":(vf(NA)||NA.contentEditable==="true")&&(Ua=NA,Ao=D,wr=null);break;case"focusout":wr=Ao=Ua=null;break;case"mousedown":eo=!0;break;case"contextmenu":case"mouseup":case"dragend":eo=!1,Lf(Y,t,k);break;case"selectionchange":if(Zp)break;case"keydown":case"keyup":Lf(Y,t,k)}var yA;if(qs)A:{switch(A){case"compositionstart":var EA="onCompositionStart";break A;case"compositionend":EA="onCompositionEnd";break A;case"compositionupdate":EA="onCompositionUpdate";break A}EA=void 0}else Ca?Uf(A,t)&&(EA="onCompositionEnd"):A==="keydown"&&t.keyCode===229&&(EA="onCompositionStart");EA&&(Qf&&t.locale!=="ko"&&(Ca||EA!=="onCompositionStart"?EA==="onCompositionEnd"&&Ca&&(yA=Bf()):(on=k,zs="value"in on?on.value:on.textContent,Ca=!0)),NA=xi(D,EA),0<NA.length&&(EA=new pf(EA,A,null,t,k),Y.push({event:EA,listeners:NA}),yA?EA.data=yA:(yA=xf(t),yA!==null&&(EA.data=yA)))),(yA=Rp?jp(A,t):Gp(A,t))&&(EA=xi(D,"onBeforeInput"),0<EA.length&&(NA=new pf("onBeforeInput","beforeinput",null,t,k),Y.push({event:NA,listeners:EA}),NA.data=yA)),Dw(Y,A,D,t,k)}rg(Y,e)})}function Xr(A,e,t){return{instance:A,listener:e,currentTarget:t}}function xi(A,e){for(var t=e+"Capture",n=[];A!==null;){var s=A,o=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||o===null||(s=cr(A,t),s!=null&&n.unshift(Xr(A,s,o)),s=cr(A,e),s!=null&&n.push(Xr(A,s,o))),A.tag===3)return n;A=A.return}return[]}function Xa(A){if(A===null)return null;do A=A.return;while(A&&A.tag!==5&&A.tag!==27);return A||null}function ig(A,e,t,n,s){for(var o=e._reactName,B=[];t!==null&&t!==n;){var p=t,U=p.alternate,D=p.stateNode;if(p=p.tag,U!==null&&U===n)break;p!==5&&p!==26&&p!==27||D===null||(U=D,s?(D=cr(t,o),D!=null&&B.unshift(Xr(t,D,U))):s||(D=cr(t,o),D!=null&&B.push(Xr(t,D,U)))),t=t.return}B.length!==0&&A.push({event:e,listeners:B})}var Lw=/\r\n?/g,Kw=/\u0000|\uFFFD/g;function sg(A){return(typeof A=="string"?A:""+A).replace(Lw,`
`).replace(Kw,"")}function og(A,e){return e=sg(e),sg(A)===e}function vi(){}function qA(A,e,t,n,s,o){switch(t){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||wa(A,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&wa(A,""+n);break;case"className":Hl(A,"class",n);break;case"tabIndex":Hl(A,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Hl(A,t,n);break;case"style":uf(A,n,o);break;case"data":if(e!=="object"){Hl(A,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||t!=="href")){A.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){A.removeAttribute(t);break}n=Tl(""+n),A.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){A.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(t==="formAction"?(e!=="input"&&qA(A,e,"name",s.name,s,null),qA(A,e,"formEncType",s.formEncType,s,null),qA(A,e,"formMethod",s.formMethod,s,null),qA(A,e,"formTarget",s.formTarget,s,null)):(qA(A,e,"encType",s.encType,s,null),qA(A,e,"method",s.method,s,null),qA(A,e,"target",s.target,s,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){A.removeAttribute(t);break}n=Tl(""+n),A.setAttribute(t,n);break;case"onClick":n!=null&&(A.onclick=vi);break;case"onScroll":n!=null&&KA("scroll",A);break;case"onScrollEnd":n!=null&&KA("scrollend",A);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(l(61));if(t=n.__html,t!=null){if(s.children!=null)throw Error(l(60));A.innerHTML=t}}break;case"multiple":A.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":A.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){A.removeAttribute("xlink:href");break}t=Tl(""+n),A.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?A.setAttribute(t,""+n):A.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?A.setAttribute(t,""):A.removeAttribute(t);break;case"capture":case"download":n===!0?A.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?A.setAttribute(t,n):A.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?A.setAttribute(t,n):A.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?A.removeAttribute(t):A.setAttribute(t,n);break;case"popover":KA("beforetoggle",A),KA("toggle",A),El(A,"popover",n);break;case"xlinkActuate":Kt(A,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Kt(A,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Kt(A,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Kt(A,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Kt(A,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Kt(A,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Kt(A,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Kt(A,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Kt(A,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":El(A,"is",n);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=fp.get(t)||t,El(A,t,n))}}function bc(A,e,t,n,s,o){switch(t){case"style":uf(A,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(l(61));if(t=n.__html,t!=null){if(s.children!=null)throw Error(l(60));A.innerHTML=t}}break;case"children":typeof n=="string"?wa(A,n):(typeof n=="number"||typeof n=="bigint")&&wa(A,""+n);break;case"onScroll":n!=null&&KA("scroll",A);break;case"onScrollEnd":n!=null&&KA("scrollend",A);break;case"onClick":n!=null&&(A.onclick=vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$u.hasOwnProperty(t))A:{if(t[0]==="o"&&t[1]==="n"&&(s=t.endsWith("Capture"),e=t.slice(2,s?t.length-7:void 0),o=A[ze]||null,o=o!=null?o[t]:null,typeof o=="function"&&A.removeEventListener(e,o,s),typeof n=="function")){typeof o!="function"&&o!==null&&(t in A?A[t]=null:A.hasAttribute(t)&&A.removeAttribute(t)),A.addEventListener(e,n,s);break A}t in A?A[t]=n:n===!0?A.setAttribute(t,""):El(A,t,n)}}}function Te(A,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":KA("error",A),KA("load",A);var n=!1,s=!1,o;for(o in t)if(t.hasOwnProperty(o)){var B=t[o];if(B!=null)switch(o){case"src":n=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:qA(A,e,o,B,t,null)}}s&&qA(A,e,"srcSet",t.srcSet,t,null),n&&qA(A,e,"src",t.src,t,null);return;case"input":KA("invalid",A);var p=o=B=s=null,U=null,D=null;for(n in t)if(t.hasOwnProperty(n)){var k=t[n];if(k!=null)switch(n){case"name":s=k;break;case"type":B=k;break;case"checked":U=k;break;case"defaultChecked":D=k;break;case"value":o=k;break;case"defaultValue":p=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(l(137,e));break;default:qA(A,e,n,k,t,null)}}lf(A,o,p,U,D,B,s,!1),Sl(A);return;case"select":KA("invalid",A),n=B=o=null;for(s in t)if(t.hasOwnProperty(s)&&(p=t[s],p!=null))switch(s){case"value":o=p;break;case"defaultValue":B=p;break;case"multiple":n=p;default:qA(A,e,s,p,t,null)}e=o,t=B,A.multiple=!!n,e!=null?pa(A,!!n,e,!1):t!=null&&pa(A,!!n,t,!0);return;case"textarea":KA("invalid",A),o=s=n=null;for(B in t)if(t.hasOwnProperty(B)&&(p=t[B],p!=null))switch(B){case"value":n=p;break;case"defaultValue":s=p;break;case"children":o=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(l(91));break;default:qA(A,e,B,p,t,null)}of(A,n,s,o),Sl(A);return;case"option":for(U in t)if(t.hasOwnProperty(U)&&(n=t[U],n!=null))switch(U){case"selected":A.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:qA(A,e,U,n,t,null)}return;case"dialog":KA("beforetoggle",A),KA("toggle",A),KA("cancel",A),KA("close",A);break;case"iframe":case"object":KA("load",A);break;case"video":case"audio":for(n=0;n<zr.length;n++)KA(zr[n],A);break;case"image":KA("error",A),KA("load",A);break;case"details":KA("toggle",A);break;case"embed":case"source":case"link":KA("error",A),KA("load",A);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in t)if(t.hasOwnProperty(D)&&(n=t[D],n!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,e));default:qA(A,e,D,n,t,null)}return;default:if(js(e)){for(k in t)t.hasOwnProperty(k)&&(n=t[k],n!==void 0&&bc(A,e,k,n,t,void 0));return}}for(p in t)t.hasOwnProperty(p)&&(n=t[p],n!=null&&qA(A,e,p,n,t,null))}function Mw(A,e,t,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,o=null,B=null,p=null,U=null,D=null,k=null;for(K in t){var Y=t[K];if(t.hasOwnProperty(K)&&Y!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":U=Y;default:n.hasOwnProperty(K)||qA(A,e,K,null,n,Y)}}for(var N in n){var K=n[N];if(Y=t[N],n.hasOwnProperty(N)&&(K!=null||Y!=null))switch(N){case"type":o=K;break;case"name":s=K;break;case"checked":D=K;break;case"defaultChecked":k=K;break;case"value":B=K;break;case"defaultValue":p=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(l(137,e));break;default:K!==Y&&qA(A,e,N,K,n,Y)}}Os(A,B,p,U,D,k,o,s);return;case"select":K=B=p=N=null;for(o in t)if(U=t[o],t.hasOwnProperty(o)&&U!=null)switch(o){case"value":break;case"multiple":K=U;default:n.hasOwnProperty(o)||qA(A,e,o,null,n,U)}for(s in n)if(o=n[s],U=t[s],n.hasOwnProperty(s)&&(o!=null||U!=null))switch(s){case"value":N=o;break;case"defaultValue":p=o;break;case"multiple":B=o;default:o!==U&&qA(A,e,s,o,n,U)}e=p,t=B,n=K,N!=null?pa(A,!!t,N,!1):!!n!=!!t&&(e!=null?pa(A,!!t,e,!0):pa(A,!!t,t?[]:"",!1));return;case"textarea":K=N=null;for(p in t)if(s=t[p],t.hasOwnProperty(p)&&s!=null&&!n.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:qA(A,e,p,null,n,s)}for(B in n)if(s=n[B],o=t[B],n.hasOwnProperty(B)&&(s!=null||o!=null))switch(B){case"value":N=s;break;case"defaultValue":K=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==o&&qA(A,e,B,s,n,o)}sf(A,N,K);return;case"option":for(var HA in t)if(N=t[HA],t.hasOwnProperty(HA)&&N!=null&&!n.hasOwnProperty(HA))switch(HA){case"selected":A.selected=!1;break;default:qA(A,e,HA,null,n,N)}for(U in n)if(N=n[U],K=t[U],n.hasOwnProperty(U)&&N!==K&&(N!=null||K!=null))switch(U){case"selected":A.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:qA(A,e,U,N,n,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var FA in t)N=t[FA],t.hasOwnProperty(FA)&&N!=null&&!n.hasOwnProperty(FA)&&qA(A,e,FA,null,n,N);for(D in n)if(N=n[D],K=t[D],n.hasOwnProperty(D)&&N!==K&&(N!=null||K!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(l(137,e));break;default:qA(A,e,D,N,n,K)}return;default:if(js(e)){for(var WA in t)N=t[WA],t.hasOwnProperty(WA)&&N!==void 0&&!n.hasOwnProperty(WA)&&bc(A,e,WA,void 0,n,N);for(k in n)N=n[k],K=t[k],!n.hasOwnProperty(k)||N===K||N===void 0&&K===void 0||bc(A,e,k,N,n,K);return}}for(var y in t)N=t[y],t.hasOwnProperty(y)&&N!=null&&!n.hasOwnProperty(y)&&qA(A,e,y,null,n,N);for(Y in n)N=n[Y],K=t[Y],!n.hasOwnProperty(Y)||N===K||N==null&&K==null||qA(A,e,Y,N,n,K)}var yc=null,Fc=null;function bi(A){return A.nodeType===9?A:A.ownerDocument}function cg(A){switch(A){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ug(A,e){if(A===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return A===1&&e==="foreignObject"?0:A}function Ec(A,e){return A==="textarea"||A==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hc=null;function Ow(){var A=window.event;return A&&A.type==="popstate"?A===Hc?!1:(Hc=A,!0):(Hc=null,!1)}var fg=typeof setTimeout=="function"?setTimeout:void 0,Rw=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,jw=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(A){return dg.resolve(null).then(A).catch(Gw)}:fg;function Gw(A){setTimeout(function(){throw A})}function bn(A){return A==="head"}function Bg(A,e){var t=e,n=0,s=0;do{var o=t.nextSibling;if(A.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(0<n&&8>n){t=n;var B=A.ownerDocument;if(t&1&&Yr(B.documentElement),t&2&&Yr(B.body),t&4)for(t=B.head,Yr(t),B=t.firstChild;B;){var p=B.nextSibling,U=B.nodeName;B[sr]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&B.rel.toLowerCase()==="stylesheet"||t.removeChild(B),B=p}}if(s===0){A.removeChild(o),el(e);return}s--}else t==="$"||t==="$?"||t==="$!"?s++:n=t.charCodeAt(0)-48;else n=0;t=o}while(t);el(e)}function Sc(A){var e=A.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Sc(t),Ns(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}A.removeChild(t)}}function kw(A,e,t,n){for(;A.nodeType===1;){var s=t;if(A.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(A.nodeName!=="INPUT"||A.type!=="hidden"))break}else if(n){if(!A[sr])switch(e){case"meta":if(!A.hasAttribute("itemprop"))break;return A;case"link":if(o=A.getAttribute("rel"),o==="stylesheet"&&A.hasAttribute("data-precedence"))break;if(o!==s.rel||A.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||A.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||A.getAttribute("title")!==(s.title==null?null:s.title))break;return A;case"style":if(A.hasAttribute("data-precedence"))break;return A;case"script":if(o=A.getAttribute("src"),(o!==(s.src==null?null:s.src)||A.getAttribute("type")!==(s.type==null?null:s.type)||A.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&o&&A.hasAttribute("async")&&!A.hasAttribute("itemprop"))break;return A;default:return A}}else if(e==="input"&&A.type==="hidden"){var o=s.name==null?null:""+s.name;if(s.type==="hidden"&&A.getAttribute("name")===o)return A}else return A;if(A=Ct(A.nextSibling),A===null)break}return null}function _w(A,e,t){if(e==="")return null;for(;A.nodeType!==3;)if((A.nodeType!==1||A.nodeName!=="INPUT"||A.type!=="hidden")&&!t||(A=Ct(A.nextSibling),A===null))return null;return A}function Dc(A){return A.data==="$!"||A.data==="$?"&&A.ownerDocument.readyState==="complete"}function Vw(A,e){var t=A.ownerDocument;if(A.data!=="$?"||t.readyState==="complete")e();else{var n=function(){e(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),A._reactRetry=n}}function Ct(A){for(;A!=null;A=A.nextSibling){var e=A.nodeType;if(e===1||e===3)break;if(e===8){if(e=A.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return A}var Tc=null;function gg(A){A=A.previousSibling;for(var e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return A;e--}else t==="/$"&&e++}A=A.previousSibling}return null}function hg(A,e,t){switch(e=bi(t),A){case"html":if(A=e.documentElement,!A)throw Error(l(452));return A;case"head":if(A=e.head,!A)throw Error(l(453));return A;case"body":if(A=e.body,!A)throw Error(l(454));return A;default:throw Error(l(451))}}function Yr(A){for(var e=A.attributes;e.length;)A.removeAttributeNode(e[0]);Ns(A)}var dt=new Map,pg=new Set;function yi(A){return typeof A.getRootNode=="function"?A.getRootNode():A.nodeType===9?A:A.ownerDocument}var qt=O.d;O.d={f:zw,r:Xw,D:Yw,C:Jw,L:Zw,m:qw,X:Pw,S:Ww,M:$w};function zw(){var A=qt.f(),e=pi();return A||e}function Xw(A){var e=da(A);e!==null&&e.tag===5&&e.type==="form"?Md(e):qt.r(A)}var Ya=typeof document>"u"?null:document;function wg(A,e,t){var n=Ya;if(n&&typeof e=="string"&&e){var s=lt(e);s='link[rel="'+A+'"][href="'+s+'"]',typeof t=="string"&&(s+='[crossorigin="'+t+'"]'),pg.has(s)||(pg.add(s),A={rel:A,crossOrigin:t,href:e},n.querySelector(s)===null&&(e=n.createElement("link"),Te(e,"link",A),ve(e),n.head.appendChild(e)))}}function Yw(A){qt.D(A),wg("dns-prefetch",A,null)}function Jw(A,e){qt.C(A,e),wg("preconnect",A,e)}function Zw(A,e,t){qt.L(A,e,t);var n=Ya;if(n&&A&&e){var s='link[rel="preload"][as="'+lt(e)+'"]';e==="image"&&t&&t.imageSrcSet?(s+='[imagesrcset="'+lt(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(s+='[imagesizes="'+lt(t.imageSizes)+'"]')):s+='[href="'+lt(A)+'"]';var o=s;switch(e){case"style":o=Ja(A);break;case"script":o=Za(A)}dt.has(o)||(A=Q({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:A,as:e},t),dt.set(o,A),n.querySelector(s)!==null||e==="style"&&n.querySelector(Jr(o))||e==="script"&&n.querySelector(Zr(o))||(e=n.createElement("link"),Te(e,"link",A),ve(e),n.head.appendChild(e)))}}function qw(A,e){qt.m(A,e);var t=Ya;if(t&&A){var n=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+lt(n)+'"][href="'+lt(A)+'"]',o=s;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Za(A)}if(!dt.has(o)&&(A=Q({rel:"modulepreload",href:A},e),dt.set(o,A),t.querySelector(s)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Zr(o)))return}n=t.createElement("link"),Te(n,"link",A),ve(n),t.head.appendChild(n)}}}function Ww(A,e,t){qt.S(A,e,t);var n=Ya;if(n&&A){var s=Ba(n).hoistableStyles,o=Ja(A);e=e||"default";var B=s.get(o);if(!B){var p={loading:0,preload:null};if(B=n.querySelector(Jr(o)))p.loading=5;else{A=Q({rel:"stylesheet",href:A,"data-precedence":e},t),(t=dt.get(o))&&Ic(A,t);var U=B=n.createElement("link");ve(U),Te(U,"link",A),U._p=new Promise(function(D,k){U.onload=D,U.onerror=k}),U.addEventListener("load",function(){p.loading|=1}),U.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Fi(B,e,n)}B={type:"stylesheet",instance:B,count:1,state:p},s.set(o,B)}}}function Pw(A,e){qt.X(A,e);var t=Ya;if(t&&A){var n=Ba(t).hoistableScripts,s=Za(A),o=n.get(s);o||(o=t.querySelector(Zr(s)),o||(A=Q({src:A,async:!0},e),(e=dt.get(s))&&Nc(A,e),o=t.createElement("script"),ve(o),Te(o,"link",A),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(s,o))}}function $w(A,e){qt.M(A,e);var t=Ya;if(t&&A){var n=Ba(t).hoistableScripts,s=Za(A),o=n.get(s);o||(o=t.querySelector(Zr(s)),o||(A=Q({src:A,async:!0,type:"module"},e),(e=dt.get(s))&&Nc(A,e),o=t.createElement("script"),ve(o),Te(o,"link",A),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(s,o))}}function Qg(A,e,t,n){var s=(s=W.current)?yi(s):null;if(!s)throw Error(l(446));switch(A){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=Ja(t.href),t=Ba(s).hoistableStyles,n=t.get(e),n||(n={type:"style",instance:null,count:0,state:null},t.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){A=Ja(t.href);var o=Ba(s).hoistableStyles,B=o.get(A);if(B||(s=s.ownerDocument||s,B={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(A,B),(o=s.querySelector(Jr(A)))&&!o._p&&(B.instance=o,B.state.loading=5),dt.has(A)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},dt.set(A,t),o||AQ(s,A,t,B.state))),e&&n===null)throw Error(l(528,""));return B}if(e&&n!==null)throw Error(l(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Za(t),t=Ba(s).hoistableScripts,n=t.get(e),n||(n={type:"script",instance:null,count:0,state:null},t.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,A))}}function Ja(A){return'href="'+lt(A)+'"'}function Jr(A){return'link[rel="stylesheet"]['+A+"]"}function mg(A){return Q({},A,{"data-precedence":A.precedence,precedence:null})}function AQ(A,e,t,n){A.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=A.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),Te(e,"link",t),ve(e),A.head.appendChild(e))}function Za(A){return'[src="'+lt(A)+'"]'}function Zr(A){return"script[async]"+A}function Cg(A,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var n=A.querySelector('style[data-href~="'+lt(t.href)+'"]');if(n)return e.instance=n,ve(n),n;var s=Q({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(A.ownerDocument||A).createElement("style"),ve(n),Te(n,"style",s),Fi(n,t.precedence,A),e.instance=n;case"stylesheet":s=Ja(t.href);var o=A.querySelector(Jr(s));if(o)return e.state.loading|=4,e.instance=o,ve(o),o;n=mg(t),(s=dt.get(s))&&Ic(n,s),o=(A.ownerDocument||A).createElement("link"),ve(o);var B=o;return B._p=new Promise(function(p,U){B.onload=p,B.onerror=U}),Te(o,"link",n),e.state.loading|=4,Fi(o,t.precedence,A),e.instance=o;case"script":return o=Za(t.src),(s=A.querySelector(Zr(o)))?(e.instance=s,ve(s),s):(n=t,(s=dt.get(o))&&(n=Q({},t),Nc(n,s)),A=A.ownerDocument||A,s=A.createElement("script"),ve(s),Te(s,"link",n),A.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(l(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,Fi(n,t.precedence,A));return e.instance}function Fi(A,e,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=n.length?n[n.length-1]:null,o=s,B=0;B<n.length;B++){var p=n[B];if(p.dataset.precedence===e)o=p;else if(o!==s)break}o?o.parentNode.insertBefore(A,o.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(A,e.firstChild))}function Ic(A,e){A.crossOrigin==null&&(A.crossOrigin=e.crossOrigin),A.referrerPolicy==null&&(A.referrerPolicy=e.referrerPolicy),A.title==null&&(A.title=e.title)}function Nc(A,e){A.crossOrigin==null&&(A.crossOrigin=e.crossOrigin),A.referrerPolicy==null&&(A.referrerPolicy=e.referrerPolicy),A.integrity==null&&(A.integrity=e.integrity)}var Ei=null;function Ug(A,e,t){if(Ei===null){var n=new Map,s=Ei=new Map;s.set(t,n)}else s=Ei,n=s.get(t),n||(n=new Map,s.set(t,n));if(n.has(A))return n;for(n.set(A,null),t=t.getElementsByTagName(A),s=0;s<t.length;s++){var o=t[s];if(!(o[sr]||o[Me]||A==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var B=o.getAttribute(e)||"";B=A+B;var p=n.get(B);p?p.push(o):n.set(B,[o])}}return n}function xg(A,e,t){A=A.ownerDocument||A,A.head.insertBefore(t,e==="title"?A.querySelector("head > title"):null)}function eQ(A,e,t){if(t===1||e.itemProp!=null)return!1;switch(A){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return A=e.disabled,typeof e.precedence=="string"&&A==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function vg(A){return!(A.type==="stylesheet"&&(A.state.loading&3)===0)}var qr=null;function tQ(){}function nQ(A,e,t){if(qr===null)throw Error(l(475));var n=qr;if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var s=Ja(t.href),o=A.querySelector(Jr(s));if(o){A=o._p,A!==null&&typeof A=="object"&&typeof A.then=="function"&&(n.count++,n=Hi.bind(n),A.then(n,n)),e.state.loading|=4,e.instance=o,ve(o);return}o=A.ownerDocument||A,t=mg(t),(s=dt.get(s))&&Ic(t,s),o=o.createElement("link"),ve(o);var B=o;B._p=new Promise(function(p,U){B.onload=p,B.onerror=U}),Te(o,"link",t),e.instance=o}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,A),(A=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=Hi.bind(n),A.addEventListener("load",e),A.addEventListener("error",e))}}function aQ(){if(qr===null)throw Error(l(475));var A=qr;return A.stylesheets&&A.count===0&&Lc(A,A.stylesheets),0<A.count?function(e){var t=setTimeout(function(){if(A.stylesheets&&Lc(A,A.stylesheets),A.unsuspend){var n=A.unsuspend;A.unsuspend=null,n()}},6e4);return A.unsuspend=e,function(){A.unsuspend=null,clearTimeout(t)}}:null}function Hi(){if(this.count--,this.count===0){if(this.stylesheets)Lc(this,this.stylesheets);else if(this.unsuspend){var A=this.unsuspend;this.unsuspend=null,A()}}}var Si=null;function Lc(A,e){A.stylesheets=null,A.unsuspend!==null&&(A.count++,Si=new Map,e.forEach(rQ,A),Si=null,Hi.call(A))}function rQ(A,e){if(!(e.state.loading&4)){var t=Si.get(A);if(t)var n=t.get(null);else{t=new Map,Si.set(A,t);for(var s=A.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<s.length;o++){var B=s[o];(B.nodeName==="LINK"||B.getAttribute("media")!=="not all")&&(t.set(B.dataset.precedence,B),n=B)}n&&t.set(null,n)}s=e.instance,B=s.getAttribute("data-precedence"),o=t.get(B)||n,o===n&&t.set(null,s),t.set(B,s),this.count++,n=Hi.bind(this),s.addEventListener("load",n),s.addEventListener("error",n),o?o.parentNode.insertBefore(s,o.nextSibling):(A=A.nodeType===9?A.head:A,A.insertBefore(s,A.firstChild)),e.state.loading|=4}}var Wr={$$typeof:gA,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function lQ(A,e,t,n,s,o,B,p){this.tag=1,this.containerInfo=A,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zA(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zA(0),this.hiddenUpdates=zA(null),this.identifierPrefix=n,this.onUncaughtError=s,this.onCaughtError=o,this.onRecoverableError=B,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function bg(A,e,t,n,s,o,B,p,U,D,k,Y){return A=new lQ(A,e,t,B,p,U,D,Y),e=1,o===!0&&(e|=24),o=Pe(3,null,null,e),A.current=o,o.stateNode=A,e=ho(),e.refCount++,A.pooledCache=e,e.refCount++,o.memoizedState={element:n,isDehydrated:t,cache:e},mo(o),A}function yg(A){return A?(A=ya,A):ya}function Fg(A,e,t,n,s,o){s=yg(s),n.context===null?n.context=s:n.pendingContext=s,n=fn(e),n.payload={element:t},o=o===void 0?null:o,o!==null&&(n.callback=o),t=dn(A,n,e),t!==null&&(nt(t,A,e),Fr(t,A,e))}function Eg(A,e){if(A=A.memoizedState,A!==null&&A.dehydrated!==null){var t=A.retryLane;A.retryLane=t!==0&&t<e?t:e}}function Kc(A,e){Eg(A,e),(A=A.alternate)&&Eg(A,e)}function Hg(A){if(A.tag===13){var e=ba(A,67108864);e!==null&&nt(e,A,67108864),Kc(A,67108864)}}var Di=!0;function iQ(A,e,t,n){var s=x.T;x.T=null;var o=O.p;try{O.p=2,Mc(A,e,t,n)}finally{O.p=o,x.T=s}}function sQ(A,e,t,n){var s=x.T;x.T=null;var o=O.p;try{O.p=8,Mc(A,e,t,n)}finally{O.p=o,x.T=s}}function Mc(A,e,t,n){if(Di){var s=Oc(n);if(s===null)vc(A,e,n,Ti,t),Dg(A,n);else if(cQ(s,A,e,t,n))n.stopPropagation();else if(Dg(A,n),e&4&&-1<oQ.indexOf(A)){for(;s!==null;){var o=da(s);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var B=QA(o.pendingLanes);if(B!==0){var p=o;for(p.pendingLanes|=2,p.entangledLanes|=2;B;){var U=1<<31-L(B);p.entanglements[1]|=U,B&=~U}St(o),(YA&6)===0&&(gi=Qe()+500,Vr(0))}}break;case 13:p=ba(o,2),p!==null&&nt(p,o,2),pi(),Kc(o,2)}if(o=Oc(n),o===null&&vc(A,e,n,Ti,t),o===s)break;s=o}s!==null&&n.stopPropagation()}else vc(A,e,n,null,t)}}function Oc(A){return A=ks(A),Rc(A)}var Ti=null;function Rc(A){if(Ti=null,A=fa(A),A!==null){var e=f(A);if(e===null)A=null;else{var t=e.tag;if(t===13){if(A=d(e),A!==null)return A;A=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;A=null}else e!==A&&(A=null)}}return Ti=A,null}function Sg(A){switch(A){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nt()){case tn:return 2;case nn:return 8;case bt:case Gn:return 32;case X:return 268435456;default:return 32}default:return 32}}var jc=!1,yn=null,Fn=null,En=null,Pr=new Map,$r=new Map,Hn=[],oQ="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dg(A,e){switch(A){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":Pr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(e.pointerId)}}function Al(A,e,t,n,s,o){return A===null||A.nativeEvent!==o?(A={blockedOn:e,domEventName:t,eventSystemFlags:n,nativeEvent:o,targetContainers:[s]},e!==null&&(e=da(e),e!==null&&Hg(e)),A):(A.eventSystemFlags|=n,e=A.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),A)}function cQ(A,e,t,n,s){switch(e){case"focusin":return yn=Al(yn,A,e,t,n,s),!0;case"dragenter":return Fn=Al(Fn,A,e,t,n,s),!0;case"mouseover":return En=Al(En,A,e,t,n,s),!0;case"pointerover":var o=s.pointerId;return Pr.set(o,Al(Pr.get(o)||null,A,e,t,n,s)),!0;case"gotpointercapture":return o=s.pointerId,$r.set(o,Al($r.get(o)||null,A,e,t,n,s)),!0}return!1}function Tg(A){var e=fa(A.target);if(e!==null){var t=f(e);if(t!==null){if(e=t.tag,e===13){if(e=d(t),e!==null){A.blockedOn=e,np(A.priority,function(){if(t.tag===13){var n=tt();n=rn(n);var s=ba(t,n);s!==null&&nt(s,t,n),Kc(t,n)}});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){A.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}A.blockedOn=null}function Ii(A){if(A.blockedOn!==null)return!1;for(var e=A.targetContainers;0<e.length;){var t=Oc(A.nativeEvent);if(t===null){t=A.nativeEvent;var n=new t.constructor(t.type,t);Gs=n,t.target.dispatchEvent(n),Gs=null}else return e=da(t),e!==null&&Hg(e),A.blockedOn=t,!1;e.shift()}return!0}function Ig(A,e,t){Ii(A)&&t.delete(e)}function uQ(){jc=!1,yn!==null&&Ii(yn)&&(yn=null),Fn!==null&&Ii(Fn)&&(Fn=null),En!==null&&Ii(En)&&(En=null),Pr.forEach(Ig),$r.forEach(Ig)}function Ni(A,e){A.blockedOn===e&&(A.blockedOn=null,jc||(jc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,uQ)))}var Li=null;function Ng(A){Li!==A&&(Li=A,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Li===A&&(Li=null);for(var e=0;e<A.length;e+=3){var t=A[e],n=A[e+1],s=A[e+2];if(typeof n!="function"){if(Rc(n||t)===null)continue;break}var o=da(t);o!==null&&(A.splice(e,3),e-=3,Ro(o,{pending:!0,data:s,method:t.method,action:n},n,s))}}))}function el(A){function e(U){return Ni(U,A)}yn!==null&&Ni(yn,A),Fn!==null&&Ni(Fn,A),En!==null&&Ni(En,A),Pr.forEach(e),$r.forEach(e);for(var t=0;t<Hn.length;t++){var n=Hn[t];n.blockedOn===A&&(n.blockedOn=null)}for(;0<Hn.length&&(t=Hn[0],t.blockedOn===null);)Tg(t),t.blockedOn===null&&Hn.shift();if(t=(A.ownerDocument||A).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var s=t[n],o=t[n+1],B=s[ze]||null;if(typeof o=="function")B||Ng(t);else if(B){var p=null;if(o&&o.hasAttribute("formAction")){if(s=o,B=o[ze]||null)p=B.formAction;else if(Rc(s)!==null)continue}else p=B.action;typeof p=="function"?t[n+1]=p:(t.splice(n,3),n-=3),Ng(t)}}}function Gc(A){this._internalRoot=A}Ki.prototype.render=Gc.prototype.render=function(A){var e=this._internalRoot;if(e===null)throw Error(l(409));var t=e.current,n=tt();Fg(t,n,A,e,null,null)},Ki.prototype.unmount=Gc.prototype.unmount=function(){var A=this._internalRoot;if(A!==null){this._internalRoot=null;var e=A.containerInfo;Fg(A.current,2,null,A,null,null),pi(),e[ua]=null}};function Ki(A){this._internalRoot=A}Ki.prototype.unstable_scheduleHydration=function(A){if(A){var e=ca();A={blockedOn:null,target:A,priority:e};for(var t=0;t<Hn.length&&e!==0&&e<Hn[t].priority;t++);Hn.splice(t,0,A),t===0&&Tg(A)}};var Lg=a.version;if(Lg!=="19.1.0")throw Error(l(527,Lg,"19.1.0"));O.findDOMNode=function(A){var e=A._reactInternals;if(e===void 0)throw typeof A.render=="function"?Error(l(188)):(A=Object.keys(A).join(","),Error(l(268,A)));return A=g(e),A=A!==null?w(A):null,A=A===null?null:A.stateNode,A};var fQ={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mi.isDisabled&&Mi.supportsFiber)try{H=Mi.inject(fQ),$=Mi}catch{}}return nl.createRoot=function(A,e){if(!c(A))throw Error(l(299));var t=!1,n="",s=Wd,o=Pd,B=$d,p=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(o=e.onCaughtError),e.onRecoverableError!==void 0&&(B=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(p=e.unstable_transitionCallbacks)),e=bg(A,1,!1,null,null,t,n,s,o,B,p,null),A[ua]=e.current,xc(A),new Gc(e)},nl.hydrateRoot=function(A,e,t){if(!c(A))throw Error(l(299));var n=!1,s="",o=Wd,B=Pd,p=$d,U=null,D=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(B=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(U=t.unstable_transitionCallbacks),t.formState!==void 0&&(D=t.formState)),e=bg(A,1,!0,e,t??null,n,s,o,B,p,U,D),e.context=yg(null),t=e.current,n=tt(),n=rn(n),s=fn(n),s.callback=null,dn(t,s,n),t=n,e.current.lanes=t,jA(e,t),St(e),A[ua]=e.current,xc(A),new Ki(e)},nl.version="19.1.0",nl}var zg;function xQ(){if(zg)return Vc.exports;zg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(a){console.error(a)}}return r(),Vc.exports=UQ(),Vc.exports}var vQ=xQ();/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bQ=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yQ=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,i,l)=>l?l.toUpperCase():i.toLowerCase()),Xg=r=>{const a=yQ(r);return a.charAt(0).toUpperCase()+a.slice(1)},Yh=(...r)=>r.filter((a,i,l)=>!!a&&a.trim()!==""&&l.indexOf(a)===i).join(" ").trim(),FQ=r=>{for(const a in r)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var EQ={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HQ=eA.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:c="",children:f,iconNode:d,...h},g)=>eA.createElement("svg",{ref:g,...EQ,width:a,height:a,stroke:r,strokeWidth:l?Number(i)*24/Number(a):i,className:Yh("lucide",c),...!f&&!FQ(h)&&{"aria-hidden":"true"},...h},[...d.map(([w,Q])=>eA.createElement(w,Q)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=(r,a)=>{const i=eA.forwardRef(({className:l,...c},f)=>eA.createElement(HQ,{ref:f,iconNode:a,className:Yh(`lucide-${bQ(Xg(r))}`,`lucide-${r}`,l),...c}));return i.displayName=Xg(r),i};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SQ=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Gu=ge("arrow-left",SQ);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DQ=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],vl=ge("arrow-right",DQ);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TQ=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],IQ=ge("calendar",TQ);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NQ=[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]],LQ=ge("chart-no-axes-gantt",NQ);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KQ=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Jh=ge("copy",KQ);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MQ=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Us=ge("download",MQ);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OQ=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],Zh=ge("git-merge",OQ);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],jQ=ge("grid-3x3",RQ);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GQ=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],ku=ge("image",GQ);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kQ=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],_Q=ge("message-square",kQ);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VQ=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],zQ=ge("move",VQ);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XQ=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],YQ=ge("pen",XQ);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JQ=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],An=ge("plus",JQ);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZQ=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],qQ=ge("rotate-ccw",ZQ);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WQ=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],qh=ge("save",WQ);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PQ=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],wt=ge("trash-2",PQ);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $Q=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],bl=ge("upload",$Q);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Wh=ge("users",Am);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],tm=ge("x",em);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Ph=ge("zoom-in",nm);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],$h=ge("zoom-out",am),rm=({projects:r,onCreateProject:a,onLoadProject:i,onDeleteProject:l})=>{const[c,f]=eA.useState(!1);return u.jsxs("div",{className:"evolution-chart-main",children:[u.jsxs("div",{className:"welcome-screen",children:[u.jsx("div",{className:"welcome-icon",children:"🌿"}),u.jsx("h2",{children:"Evolution Chart Maker"}),u.jsx("p",{children:"Visualize evolutionary relationships and timelines"}),u.jsxs("button",{onClick:()=>f(!0),className:"primary-btn",children:[u.jsx(An,{size:16})," New Project"]}),r.length>0&&u.jsxs("div",{className:"project-list",children:[u.jsx("h3",{children:"Your Projects"}),r.map(d=>u.jsxs("div",{className:"project-card",onClick:()=>i(d),children:[u.jsxs("div",{className:"project-card-content",children:[u.jsx("div",{className:"project-card-name",children:d.name}),u.jsxs("div",{className:"project-card-meta",children:[u.jsx("span",{children:new Date(d.createdAt).toLocaleDateString()}),u.jsxs("span",{children:[d.nodes?.length||0," nodes • ",d.connections?.length||0," connections"]})]})]}),u.jsxs("div",{className:"project-card-actions",children:[u.jsx("button",{onClick:h=>{h.stopPropagation(),i(d)},className:"open-btn",children:u.jsx(vl,{size:16})}),u.jsx("button",{onClick:h=>{h.stopPropagation(),confirm("Delete this project?")&&l(d.id)},className:"delete-btn",children:u.jsx(wt,{size:16})})]})]},d.id))]})]}),c&&u.jsx("div",{className:"modal-overlay",children:u.jsxs("div",{className:"modal-content",children:[u.jsxs("div",{className:"modal-header",children:[u.jsx("h2",{children:"Create New Project"}),u.jsx("button",{onClick:()=>f(!1),className:"close-btn",children:"×"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Project Name"}),u.jsx("input",{type:"text",placeholder:"e.g., Mammalian Evolution",id:"projectName",autoFocus:!0})]}),u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Timeline Start"}),u.jsx("input",{type:"number",defaultValue:"500",id:"timelineStart"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Timeline End"}),u.jsx("input",{type:"number",defaultValue:"0",id:"timelineEnd"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Time Unit"}),u.jsxs("select",{id:"timeUnit",defaultValue:"mya",children:[u.jsx("option",{value:"bya",children:"Billion Years Ago (BYA)"}),u.jsx("option",{value:"mya",children:"Million Years Ago (MYA)"}),u.jsx("option",{value:"kya",children:"Thousand Years Ago (KYA)"}),u.jsx("option",{value:"ya",children:"Years Ago (YA)"})]})]}),u.jsxs("div",{className:"modal-footer",children:[u.jsx("button",{onClick:()=>f(!1),className:"cancel-btn",children:"Cancel"}),u.jsx("button",{onClick:()=>{const d=document.getElementById("projectName").value,h=parseFloat(document.getElementById("timelineStart").value),g=parseFloat(document.getElementById("timelineEnd").value),w=document.getElementById("timeUnit").value;d.trim()&&h>g&&(a(d,h,g,w),f(!1))},className:"create-btn",children:"Create Project"})]})]})}),u.jsx("style",{jsx:!0,children:`
        .evolution-chart-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
          color: white;
        }
        
        .welcome-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .welcome-icon {
          font-size: 64px;
          margin-bottom: 20px;
          opacity: 0.9;
        }
        
        .welcome-screen h2 {
          font-size: 36px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        
        .welcome-screen p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
          max-width: 600px;
        }
        
        .primary-btn {
          background: white;
          color: #059669;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          margin-bottom: 40px;
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .project-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .project-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .project-card {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .project-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .project-card-content {
          flex: 1;
        }
        
        .project-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .project-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
        }
        
        .project-card-actions {
          display: flex;
          gap: 8px;
        }
        
        .open-btn, .delete-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        
        .open-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .open-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .delete-btn {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        
        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          max-width: 500px;
          max-height: 80vh;
          overflow: auto;
          color: #1f2937;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
          font-size: 24px;
          font-weight: 700;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          font-size: 24px;
          color: #6b7280;
        }
        
        .close-btn:hover {
          color: #4b5563;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #4b5563;
        }
        
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #059669;
        }
        
        .form-row {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .form-row .form-group {
          flex: 1;
          margin-bottom: 0;
        }
        
        select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 16px;
          padding-right: 30px;
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }
        
        .cancel-btn {
          background: #f3f4f6;
          color: #4b5563;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .cancel-btn:hover {
          background: #e5e7eb;
        }
        
        .create-btn {
          background: #059669;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #047857;
        }
      `})]})},Oi=[{value:"bya",label:"Billion Years Ago (BYA)",multiplier:1e9},{value:"mya",label:"Million Years Ago (MYA)",multiplier:1e6},{value:"kya",label:"Thousand Years Ago (KYA)",multiplier:1e3},{value:"ya",label:"Years Ago (YA)",multiplier:1}],lm=({project:r,nodes:a,connections:i,onUpdateProject:l,onBack:c})=>{const g="#ffffff",w="#ffeb3b",Q=eA.useRef(null),C=eA.useRef(null);eA.useRef(null);const b=eA.useRef(0),_=eA.useRef({x:0,y:0}),j=eA.useRef({x:0,y:0}),J=eA.useRef(0),cA=eA.useRef(!1),[iA,tA]=eA.useState(a||[]),[gA,uA]=eA.useState(i||[]),[q,Z]=eA.useState(null),[CA,T]=eA.useState(null),[M,BA]=eA.useState(r?.zoom||1),[nA,oA]=eA.useState(r?.pan||{x:0,y:0}),[xA,dA]=eA.useState(r?.pan||{x:0,y:0}),[R,x]=eA.useState(!1),[O,z]=eA.useState(null),[sA,m]=eA.useState(!1),[G,lA]=eA.useState(null);eA.useEffect(()=>{if(r){const I=setTimeout(()=>{l({...r,nodes:iA,connections:gA,zoom:M,pan:nA})},500);return()=>clearTimeout(I)}},[iA,gA,M,nA,r,l]),eA.useEffect(()=>{let I;const H=()=>{const $=Date.now(),fA=Math.min($-b.current,100)/1e3;if(b.current=$,fA>0&&!cA.current){const L=(xA.x-nA.x)*.2,AA=(xA.y-nA.y)*.2;Math.abs(L)>.1||Math.abs(AA)>.1?(oA(TA=>({x:TA.x+L,y:TA.y+AA})),I=requestAnimationFrame(H)):oA(xA)}else I=requestAnimationFrame(H)};return I=requestAnimationFrame(H),()=>cancelAnimationFrame(I)},[nA,xA]);const aA=eA.useCallback(I=>{if(!r)return 0;const H=F(I.value,I.unit),$=F(r.timelineStart,r.timeUnit),fA=F(r.timelineEnd,r.timeUnit),L=$-fA,AA=($-H)/L,TA=Q.current?.offsetWidth||800;return AA*TA},[r]),F=(I,H)=>{const $=Oi.find(fA=>fA.value===H)||Oi[0];return I*$.multiplier},P=(I,H)=>H==="bya"?`${I} BYA`:H==="mya"?`${I} MYA`:H==="kya"?`${I} KYA`:`${I} YA`,W=eA.useCallback(I=>{if(!r)return 0;const H=Q.current?.offsetWidth||800,$=F(r.timelineStart,r.timeUnit),fA=F(r.timelineEnd,r.timeUnit),L=$-fA,AA=I/H;return $-AA*L},[r]),bA=eA.useCallback(()=>{if(!r)return[];const I=Q.current?.offsetWidth||800,H=F(r.timelineStart,r.timeUnit),$=F(r.timelineEnd,r.timeUnit),fA=H-$,L=fA/M;let AA;L>2e9?AA=1e9:L>1e9?AA=5e8:L>5e8?AA=1e8:L>2e8?AA=5e7:L>1e8?AA=25e6:L>5e7?AA=1e7:L>2e7?AA=5e6:L>1e7?AA=25e5:L>5e6?AA=1e6:L>2e6?AA=5e5:L>1e6?AA=25e4:L>5e5?AA=1e5:L>2e5?AA=5e4:L>1e5?AA=25e3:L>5e4?AA=1e4:L>2e4?AA=5e3:L>1e4?AA=2500:L>5e3?AA=1e3:L>2e3?AA=500:L>1e3?AA=250:L>500?AA=100:L>200?AA=50:L>100?AA=25:L>50?AA=10:L>20?AA=5:AA=1;const TA=[],kA=W(-nA.x/M),_A=W((I-nA.x)/M),E=Math.ceil(Math.min(kA,_A)/AA)*AA,QA=Math.floor(Math.max(kA,_A)/AA)*AA;for(let wA=E;wA<=QA;wA+=AA)if(wA>=$&&wA<=H){let UA=wA,te="ya";wA>=1e9?(UA=wA/1e9,te="bya"):wA>=1e6?(UA=wA/1e6,te="mya"):wA>=1e3&&(UA=wA/1e3,te="kya"),TA.push({value:UA,unit:te,position:(H-wA)/fA})}return TA},[r,M,nA,W]),hA=(I,H)=>{if(!r)return;const $=Q.current.getBoundingClientRect(),fA=I-$.left,L=H-$.top-60,TA=W((fA-nA.x)/M)/(Oi.find(_A=>_A.value===r.timeUnit)?.multiplier||1),kA={id:Date.now(),x:(fA-nA.x)/M,y:Math.max(20,(L-nA.y)/M),title:"New Species",description:"Description here...",imageSrc:"",timeline:{value:parseFloat(TA.toFixed(4)),unit:r.timeUnit}};tA([...iA,kA]),z(kA),x(!0)},OA=I=>{tA(iA.map(H=>H.id===I.id?I:H)),z(null),x(!1)},re=I=>{tA(iA.filter(H=>H.id!==I)),uA(gA.filter(H=>H.from!==I&&H.to!==I)),Z(null)},He=(I,H)=>{const $={id:Date.now(),from:I,to:H};uA([...gA,$])},Le=I=>{uA(gA.filter(H=>H.id!==I)),T(null)},Ke=(I,H)=>{sA||(I.stopPropagation(),cA.current=!0,Z(H),T(null),Q.current.getBoundingClientRect(),_.current={x:I.clientX,y:I.clientY},J.current=performance.now())},xe=eA.useCallback(I=>{if(!cA.current||!q)return;const H=performance.now(),$=(H-J.current)/1e3;J.current=H;const fA=Q.current.getBoundingClientRect();I.clientX-fA.left,I.clientY-fA.top;const L=I.clientX-_.current.x,AA=I.clientY-_.current.y;_.current={x:I.clientX,y:I.clientY},j.current={x:L/($||.016),y:AA/($||.016)};const TA=AA/M,kA=Math.max(20,q.y+TA),_A={...q,y:kA};tA(E=>E.map(QA=>QA.id===q.id?_A:QA)),Z(_A)},[q,M]),vt=eA.useCallback(()=>{if(cA.current){if(cA.current=!1,Math.abs(j.current.y)>50){const H=j.current.y*.9;dA($=>({x:$.x,y:$.y-H}))}j.current={x:0,y:0}}},[]),jn=(I,H)=>{I.stopPropagation(),sA?G?G!==H.id&&(gA.find(fA=>fA.from===G&&fA.to===H.id||fA.from===H.id&&fA.to===G)||He(G,H.id),m(!1),lA(null)):lA(H.id):cA.current||(Z(H),T(null))},Qe=(I,H)=>{if(!I||!H)return"";const $=aA(I.timeline)+120/2,fA=I.y+100/2,L=aA(H.timeline)+120/2,AA=H.y+100/2,TA=Math.abs(fA-AA)*.3;return`M ${$} ${fA}
            C ${$} ${fA+TA},
              ${L} ${AA-TA},
              ${L} ${AA}`},Nt=(I,H)=>{const $=aA(I.timeline)+60,fA=I.y+100/2,L=aA(H.timeline)+120/2,AA=H.y+100/2;return{x:($+L)/2,y:(fA+AA)/2}},tn=()=>{if(!r)return;const H=JSON.stringify({project:r,nodes:iA,connections:gA,zoom:M,pan:nA},null,2),$=new Blob([H],{type:"application/json"}),fA=URL.createObjectURL($),L=document.createElement("a");L.href=fA,L.download=`${r.name.replace(/\s+/g,"-")}-evolution-chart.json`,L.click(),URL.revokeObjectURL(fA)},nn=I=>{const H=I.target.files[0];if(!H)return;const $=new FileReader;$.onload=fA=>{try{const L=JSON.parse(fA.target.result);L.project&&L.nodes&&(l({...L.project,nodes:L.nodes,connections:L.connections,zoom:L.zoom,pan:L.pan}),tA(L.nodes),uA(L.connections),BA(L.zoom||1),oA(L.pan||{x:0,y:0}),dA(L.pan||{x:0,y:0}))}catch{alert("Error parsing the file. Please check the file format.")}},$.readAsText(H)},bt=I=>{I.ctrlKey||I.metaKey?hA(I.clientX,I.clientY):(Z(null),T(null),sA&&(m(!1),lA(null)))},Gn=I=>{z(I),x(!0)},X=(I,H=null,$=null)=>{const fA=Math.max(.1,Math.min(5,M+I));if(H!==null&&$!==null){const L=Q.current.getBoundingClientRect(),AA=H-L.left,TA=$-L.top-60,kA={x:AA-(AA-nA.x)*(fA/M),y:TA-(TA-nA.y)*(fA/M)};oA(kA),dA(kA)}BA(fA)},rA=I=>{I.preventDefault();const H=.5;I.shiftKey?dA($=>({x:$.x-I.deltaY*H,y:$.y})):dA($=>({x:$.x-I.deltaX*H,y:$.y-I.deltaY*H}))};return eA.useEffect(()=>{const I=()=>vt();return document.addEventListener("mousemove",xe),document.addEventListener("mouseup",I),()=>{document.removeEventListener("mousemove",xe),document.removeEventListener("mouseup",I)}},[xe,vt]),u.jsxs("div",{className:"evolution-chart-maker",children:[u.jsxs("div",{className:"header",children:[u.jsxs("div",{className:"header-left",children:[u.jsx("h1",{children:"🧬 Evolution Chart Maker"}),u.jsx("span",{className:"project-name",children:r.name})]}),u.jsxs("div",{className:"toolbar",children:[u.jsx("button",{onClick:c,className:"toolbar-btn primary",children:"← Back to Projects"}),u.jsx("button",{onClick:()=>{m(!sA),lA(null)},className:`toolbar-btn ${sA?"danger":"warning"}`,children:sA?"Cancel":"Connect"}),u.jsxs("button",{onClick:()=>C.current?.click(),className:"toolbar-btn warning",children:[u.jsx(bl,{size:16})," Import"]}),u.jsxs("button",{onClick:tn,className:"toolbar-btn info",children:[u.jsx(Us,{size:16})," Export"]}),u.jsxs("div",{className:"zoom-controls",children:[u.jsx("button",{onClick:()=>X(.1),className:"zoom-btn",children:u.jsx(Ph,{size:16})}),u.jsx("button",{onClick:()=>X(-.1),className:"zoom-btn",children:u.jsx($h,{size:16})})]})]})]}),u.jsx("div",{className:"timeline",children:bA().map((I,H)=>u.jsxs("div",{className:"timeline-marker",style:{left:`${I.position*(Q.current?.offsetWidth||800)*M+nA.x}px`},children:[u.jsx("div",{className:"timeline-line"}),u.jsx("span",{className:"timeline-label",children:P(I.value,I.unit)})]},H))}),u.jsxs("div",{ref:Q,onClick:bt,onWheel:rA,className:"canvas",style:{cursor:sA?"crosshair":cA.current?"grabbing":"default"},children:[u.jsx("svg",{className:"connections-svg",children:gA.map(I=>{const H=iA.find(AA=>AA.id===I.from),$=iA.find(AA=>AA.id===I.to);if(!H||!$)return null;const fA=Nt(H,$),L=CA===I.id||q&&(q.id===H.id||q.id===$.id);return u.jsxs("g",{children:[u.jsx("path",{d:Qe(H,$),stroke:L?w:g,strokeWidth:L?"3":"2",fill:"none",opacity:"0.8",transform:`translate(${nA.x}, ${nA.y+60}) scale(${M})`}),L&&u.jsx("circle",{cx:fA.x*M+nA.x,cy:fA.y*M+nA.y+60,r:8*M,fill:"#e53e3e",onClick:AA=>{AA.stopPropagation(),Le(I.id)},style:{cursor:"pointer",pointerEvents:"auto"}})]},I.id)})}),iA.map(I=>u.jsxs("div",{className:`node ${q?.id===I.id?"selected":""}`,style:{left:`${aA(I.timeline)*M+nA.x}px`,top:`${I.y*M+nA.y+60}px`,width:`${120*M}px`,height:`${100*M}px`,transform:q?.id===I.id&&cA.current?"scale(1.02)":"scale(1)",transition:"transform 0.1s ease"},onMouseDown:H=>Ke(H,I),onClick:H=>jn(H,I),onDoubleClick:()=>Gn(I),children:[u.jsxs("div",{style:{display:"flex"},children:[I.imageSrc&&u.jsx("img",{src:I.imageSrc,alt:I.title,className:"node-image",style:{width:`${40*M}px`,height:`${40*M}px`}}),u.jsxs("div",{children:[u.jsx("div",{className:"node-title",style:{fontSize:`${11*M}px`},children:I.title}),u.jsx("div",{className:"node-timeline",style:{fontSize:`${9*M}px`},children:P(I.timeline.value,I.timeline.unit)})]})]}),q?.id===I.id&&u.jsx("button",{onClick:H=>{H.stopPropagation(),re(I.id)},className:"delete-node-btn",style:{width:`${24*M}px`,height:`${24*M}px`},children:u.jsx(wt,{size:12*M})})]},I.id)),sA&&u.jsx("div",{className:"connection-mode-indicator",children:G?"Select child node":"Select parent node"}),u.jsxs("div",{className:"instructions-panel",children:[u.jsxs("div",{children:["💡 ",u.jsx("strong",{children:"Ctrl+Click:"})," Create new node"]}),u.jsxs("div",{children:["🔗 ",u.jsx("strong",{children:"Connect Mode:"})," Click two nodes to link them"]}),u.jsxs("div",{children:["❌ ",u.jsx("strong",{children:"Click connection midpoint:"})," Delete connection"]}),u.jsxs("div",{children:["📍 ",u.jsx("strong",{children:"Drag:"})," Move nodes vertically"]}),u.jsxs("div",{children:["✏️ ",u.jsx("strong",{children:"Double-click:"})," Edit node details"]}),u.jsxs("div",{children:["🔍 ",u.jsx("strong",{children:"Scroll:"})," Pan | ",u.jsx("strong",{children:"Shift+Scroll:"})," Horizontal Pan | ",u.jsx("strong",{children:"Ctrl+Scroll:"})," Zoom"]})]})]}),R&&O&&u.jsx("div",{className:"modal-overlay",children:u.jsxs("div",{className:"modal-content",children:[u.jsxs("div",{className:"modal-header",children:[u.jsx("h2",{children:"Edit Node"}),u.jsx("button",{onClick:()=>x(!1),className:"close-btn",children:u.jsx(tm,{size:20})})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Title"}),u.jsx("input",{type:"text",defaultValue:O.title,placeholder:"Species name",id:"nodeTitle"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Image URL"}),u.jsx("input",{type:"text",defaultValue:O.imageSrc,placeholder:"https://example.com/image.jpg",id:"nodeImage"})]}),u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Timeline Value"}),u.jsx("input",{type:"number",defaultValue:O.timeline.value,id:"nodeTimelineValue"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Time Unit"}),u.jsx("select",{id:"nodeTimelineUnit",defaultValue:O.timeline.unit,children:Oi.map(I=>u.jsx("option",{value:I.value,children:I.value.toUpperCase()},I.value))})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Description"}),u.jsx("textarea",{defaultValue:O.description,placeholder:"Brief description of the species...",rows:4,id:"nodeDescription"})]}),u.jsxs("div",{className:"form-actions",children:[u.jsx("button",{onClick:()=>x(!1),className:"cancel-btn",children:"Cancel"}),u.jsx("button",{onClick:()=>{const I={...O,title:document.getElementById("nodeTitle").value,imageSrc:document.getElementById("nodeImage").value,timeline:{value:parseFloat(document.getElementById("nodeTimelineValue").value),unit:document.getElementById("nodeTimelineUnit").value},description:document.getElementById("nodeDescription").value};OA(I)},className:"save-btn",children:"Save Changes"})]})]})}),u.jsx("input",{ref:C,type:"file",accept:".json",onChange:nn,style:{display:"none"}}),u.jsx("style",{jsx:!0,children:`
        .evolution-chart-maker {
          width: 91.7vw;
          height: 100vh;
          background: #4a90a4;
          font-family: system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
        }
        
        .header {
          background: rgba(255, 255, 255, 0.95);
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(0,0,0,0.1);
          z-index: 1000;
          position: relative;
        }
        
        .header-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
          color: #2d3748;
        }
        
        .project-name {
          background: #4299e1;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
        }
        
        .toolbar {
          display: flex;
          gap: 8px;
        }
        
        .toolbar-btn {
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 500;
          font-size: 14px;
        }
        
        .primary {
          background: #48bb78;
        }
        
        .warning {
          background: #ed8936;
        }
        
        .danger {
          background: #f56565;
        }
        
        .info {
          background: #4299e1;
        }
        
        .zoom-controls {
          display: flex;
          gap: 4px;
        }
        
        .zoom-btn {
          padding: 8px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          background: #e2e8f0;
        }
        
        .timeline {
          position: absolute;
          top: 70px;
          left: 0;
          right: 0;
          height: 60px;
          background: rgba(255, 255, 255, 0.9);
          border-bottom: 2px solid #4299e1;
          z-index: 100;
          overflow: hidden;
        }
        
        .timeline-marker {
          position: absolute;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 60px;
        }
        
        .timeline-line {
          width: 2px;
          height: 20px;
          background: #4299e1;
          margin-bottom: 4px;
        }
        
        .timeline-label {
          font-size: 12px;
          font-weight: 600;
          color: #2d3748;
          white-space: nowrap;
        }
        
        .canvas {
          position: absolute;
          top: 130px;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          background: #4a90a4;
        }
        
        .connections-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .node {
          position: absolute;
          background: #66bb6a;
          border-radius: 25px;
          padding: 8px;
          cursor: grab;
          z-index: 10;
          border: 2px solid rgba(255,255,255,0.3);
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .node.selected {
          background: #81c784;
          border: 3px solid #2e7d32;
          z-index: 100;
        }
        
        .node-image {
          object-fit: cover;
          border-radius: 50%;
          margin-bottom: 4px;
          pointer-events: none;
        }
        
        .node-title {
          color: white;
          font-weight: 600;
          text-align: center;
          margin-bottom: 2px;
          line-height: 1.2;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        
        .node-timeline {
          color: rgba(255,255,255,0.9);
          text-align: center;
          font-weight: 500;
        }
        
        .delete-node-btn {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #e53e3e;
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
        }
        
        .connection-mode-indicator {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.9);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          color: #2d3748;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          z-index: 1000;
        }
        
        .instructions-panel {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.9);
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 12px;
          color: #4a5568;
          z-index: 100;
        }
        
        .instructions-panel div {
          margin-bottom: 4px;
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 400px;
          max-height: 80vh;
          overflow: auto;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        
        .form-group {
          margin-bottom: 16px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 6px;
          font-weight: 600;
          color: #4a5568;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
        }
        
        .form-group textarea {
          resize: vertical;
        }
        
        .form-row {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }
        
        .form-row .form-group {
          flex: 1;
          margin-bottom: 0;
        }
        
        .form-actions {
          display: flex;
          gap: 12px;
        }
        
        .cancel-btn {
          flex: 1;
          background: #e2e8f0;
          color: #4a5568;
          border: none;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }
        
        .save-btn {
          flex: 1;
          background: #48bb78;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }
        
        select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 16px;
          padding-right: 30px;
        }
      `})]})},im=({flowcharts:r,onCreateFlowchart:a,onLoadFlowchart:i,onDeleteFlowchart:l,onImportFlowchart:c})=>{const[f,d]=eA.useState(!1),[h,g]=eA.useState(!1),[w,Q]=eA.useState("");return u.jsxs("div",{className:"flowchart-main",children:[u.jsxs("div",{className:"welcome-screen",children:[u.jsx("div",{className:"welcome-icon",children:"📊"}),u.jsx("h2",{children:"Flowchart Designer"}),u.jsx("p",{children:"Create and visualize complex processes with intuitive flowcharts"}),u.jsxs("div",{className:"action-buttons",children:[u.jsxs("button",{onClick:()=>d(!0),className:"primary-btn",children:[u.jsx(An,{size:16})," New Flowchart"]}),u.jsxs("button",{onClick:()=>g(!0),className:"secondary-btn",children:[u.jsx(bl,{size:16})," Import"]})]}),r.length>0&&u.jsxs("div",{className:"flowchart-list",children:[u.jsx("h3",{children:"Your Flowcharts"}),r.map(C=>u.jsxs("div",{className:"flowchart-card",onClick:()=>i(C),children:[u.jsxs("div",{className:"flowchart-card-content",children:[u.jsx("div",{className:"flowchart-card-name",children:C.name}),u.jsxs("div",{className:"flowchart-card-meta",children:[u.jsx("span",{children:new Date(C.createdAt).toLocaleDateString()}),u.jsxs("span",{children:[C.nodes?.length||0," nodes • ",C.edges?.length||0," edges"]})]})]}),u.jsxs("div",{className:"flowchart-card-actions",children:[u.jsx("button",{onClick:b=>{b.stopPropagation(),i(C)},className:"open-btn",children:u.jsx(vl,{size:16})}),u.jsx("button",{onClick:b=>{b.stopPropagation(),confirm("Delete this flowchart?")&&l(C.id)},className:"delete-btn",children:u.jsx(wt,{size:16})})]})]},C.id))]})]}),f&&u.jsx("div",{className:"modal-overlay",children:u.jsxs("div",{className:"modal-content",children:[u.jsxs("div",{className:"modal-header",children:[u.jsx("h2",{children:"Create New Flowchart"}),u.jsx("button",{onClick:()=>d(!1),className:"close-btn",children:"×"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Flowchart Name"}),u.jsx("input",{type:"text",placeholder:"e.g., User Registration Flow",id:"flowchartName",autoFocus:!0})]}),u.jsxs("div",{className:"modal-footer",children:[u.jsx("button",{onClick:()=>d(!1),className:"cancel-btn",children:"Cancel"}),u.jsx("button",{onClick:()=>{const C=document.getElementById("flowchartName").value;C.trim()&&(a(C),d(!1))},className:"create-btn",children:"Create Flowchart"})]})]})}),h&&u.jsx("div",{className:"modal-overlay",children:u.jsxs("div",{className:"modal-content",children:[u.jsxs("div",{className:"modal-header",children:[u.jsx("h2",{children:"Import Flowchart"}),u.jsx("button",{onClick:()=>g(!1),className:"close-btn",children:"×"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Paste JSON Data"}),u.jsx("textarea",{value:w,onChange:C=>Q(C.target.value),placeholder:"Paste your flowchart JSON here...",rows:8})]}),u.jsxs("div",{className:"modal-footer",children:[u.jsx("button",{onClick:()=>g(!1),className:"cancel-btn",children:"Cancel"}),u.jsx("button",{onClick:()=>{try{c(w),g(!1),Q("")}catch(C){alert("Invalid JSON: "+C.message)}},className:"create-btn",children:"Import"})]})]})}),u.jsx("style",{jsx:!0,children:`
        .flowchart-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
          color: white;
        }
        
        .welcome-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .welcome-icon {
          font-size: 64px;
          margin-bottom: 20px;
          opacity: 0.9;
        }
        
        .welcome-screen h2 {
          font-size: 36px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        
        .welcome-screen p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
          max-width: 600px;
        }
        
        .action-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
        }
        
        .primary-btn {
          background: white;
          color: #4f46e5;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .secondary-btn {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          backdrop-filter: blur(10px);
        }
        
        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .flowchart-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .flowchart-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .flowchart-card {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .flowchart-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .flowchart-card-content {
          flex: 1;
        }
        
        .flowchart-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .flowchart-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
        }
        
        .flowchart-card-actions {
          display: flex;
          gap: 8px;
        }
        
        .open-btn, .delete-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        
        .open-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .open-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .delete-btn {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        
        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          max-width: 500px;
          max-height: 80vh;
          overflow: auto;
          color: #1f2937;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
          font-size: 24px;
          font-weight: 700;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          font-size: 24px;
          color: #6b7280;
        }
        
        .close-btn:hover {
          color: #4b5563;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #4b5563;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #4f46e5;
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }
        
        .cancel-btn {
          background: #f3f4f6;
          color: #4b5563;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .cancel-btn:hover {
          background: #e5e7eb;
        }
        
        .create-btn {
          background: #4f46e5;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #4338ca;
        }
      `})]})},sm=({flowchart:r,nodes:a,edges:i,jsonInput:l,onJsonInputChange:c,onImportJson:f,onUpdateFlowchart:d,onBack:h})=>{const[g,w]=eA.useState("editor"),[Q,C]=eA.useState(null),[b,_]=eA.useState(null),[j,J]=eA.useState(null),[cA,iA]=eA.useState(null),[tA,gA]=eA.useState(null),[uA,q]=eA.useState(null),[Z,CA]=eA.useState(""),[T,M]=eA.useState(!1),[BA,nA]=eA.useState(null),[oA,xA]=eA.useState(!1),[dA,R]=eA.useState(""),[x,O]=eA.useState(null),z=eA.useRef(null),sA=eA.useRef(null);eA.useEffect(()=>{const X=rA=>{rA.key==="Delete"&&(b?xe():j&&vt())};return document.addEventListener("keydown",X),()=>{document.removeEventListener("keydown",X)}},[b,j]);const m=()=>JSON.stringify({nodes:a,edges:i},null,2),G=()=>{c(m()),w("json")},lA=X=>{const rA=X.target.files[0];if(!rA)return;const I=new FileReader;I.onload=H=>{try{const $=JSON.parse(H.target.result);c(JSON.stringify($,null,2)),w("json")}catch{alert("Invalid JSON file")}},I.readAsText(rA),X.target.value=""},aA=()=>{try{const X=JSON.parse(l);d({...r,nodes:X.nodes||[],edges:X.edges||[]})}catch(X){alert("Invalid JSON: "+X.message)}},F=()=>{const X=document.createElement("canvas"),rA=X.getContext("2d");X.width=800,X.height=600,rA.fillStyle="#1a1a1a",rA.fillRect(0,0,X.width,X.height),i.forEach(H=>{const $=a.find(L=>L.id===H.from),fA=a.find(L=>L.id===H.to);if($&&fA){const L=P($,fA,H);if(rA.strokeStyle="#646cff",rA.lineWidth=2,rA.beginPath(),L.length>2){rA.moveTo(L[0].x,L[0].y);for(let E=1;E<L.length;E++)rA.lineTo(L[E].x,L[E].y)}else rA.moveTo(L[0].x,L[0].y),rA.lineTo(L[1].x,L[1].y);rA.stroke();const AA=L[L.length-1],TA=L[L.length-2],kA=Math.atan2(AA.y-TA.y,AA.x-TA.x),_A=10;if(rA.fillStyle="#646cff",rA.beginPath(),rA.moveTo(AA.x,AA.y),rA.lineTo(AA.x-_A*Math.cos(kA-Math.PI/6),AA.y-_A*Math.sin(kA-Math.PI/6)),rA.lineTo(AA.x-_A*Math.cos(kA+Math.PI/6),AA.y-_A*Math.sin(kA+Math.PI/6)),rA.closePath(),rA.fill(),H.label){const E=W(L);rA.fillStyle="white",rA.font="12px Arial",rA.textAlign="center",rA.fillText(H.label,E.x,E.y-5)}}}),a.forEach(H=>{rA.fillStyle="#646cff",H.type==="rectangle"?rA.fillRect(H.x,H.y,H.width,H.height):H.type==="circle"?(rA.beginPath(),rA.arc(H.x+H.width/2,H.y+H.height/2,H.width/2,0,2*Math.PI),rA.fill()):H.type==="diamond"||H.type==="rhombus"?(rA.beginPath(),rA.moveTo(H.x+H.width/2,H.y),rA.lineTo(H.x+H.width,H.y+H.height/2),rA.lineTo(H.x+H.width/2,H.y+H.height),rA.lineTo(H.x,H.y+H.height/2),rA.closePath(),rA.fill()):H.type==="oval"&&(rA.beginPath(),rA.ellipse(H.x+H.width/2,H.y+H.height/2,H.width/2,H.height/2,0,0,2*Math.PI),rA.fill()),rA.fillStyle="white",rA.font="12px Arial",rA.textAlign="center",rA.textBaseline="middle",rA.fillText(H.text,H.x+H.width/2,H.y+H.height/2)});const I=document.createElement("a");I.download=`${r.name||"flowchart"}.png`,I.href=X.toDataURL(),I.click()},P=(X,rA,I)=>{const H=X.x+X.width/2,$=X.y+X.height/2,fA=rA.x+rA.width/2,L=rA.y+rA.height/2,AA=i.filter(jA=>jA.from===I.from&&jA.to===I.to||jA.from===I.to&&jA.to===I.from),TA=AA.findIndex(jA=>jA.id===I.id),kA=30;if(AA.length===1)return[{x:H,y:$},{x:fA,y:L}];const _A=fA-H,E=L-$,QA=Math.sqrt(_A*_A+E*E),wA=-E/QA,UA=_A/QA,te=wA*kA*TA,oe=UA*kA*TA,ce=(H+fA)/2+te,zA=($+L)/2+oe;return[{x:H,y:$},{x:ce,y:zA},{x:fA,y:L}]},W=X=>{if(X.length===2)return{x:(X[0].x+X[1].x)/2,y:(X[0].y+X[1].y)/2};const rA=Math.floor(X.length/2),I=X[rA-1],H=X[rA];return{x:(I.x+H.x)/2,y:(I.y+H.y)/2}},bA=(X,rA,I,H=5)=>{const $=X.x-rA.x,fA=X.y-rA.y,L=I.x-rA.x,AA=I.y-rA.y,TA=$*L+fA*AA,kA=L*L+AA*AA;let _A=-1;kA!==0&&(_A=TA/kA);let E,QA;_A<0?(E=rA.x,QA=rA.y):_A>1?(E=I.x,QA=I.y):(E=rA.x+_A*L,QA=rA.y+_A*AA);const wA=X.x-E,UA=X.y-QA;return Math.sqrt(wA*wA+UA*UA)<=H},hA=(X,rA)=>{for(const I of i){const H=a.find(L=>L.id===I.from),$=a.find(L=>L.id===I.to);if(!H||!$)continue;const fA=P(H,$,I);for(let L=0;L<fA.length-1;L++)if(bA({x:X,y:rA},fA[L],fA[L+1]))return I}return null},OA=X=>{if(tA||uA)return;const I=X.currentTarget.getBoundingClientRect(),H=(X.clientX-I.left-r.pan.x)/r.zoom,$=(X.clientY-I.top-r.pan.y)/r.zoom,fA=a.find(AA=>H>=AA.x&&H<=AA.x+AA.width&&$>=AA.y&&$<=AA.y+AA.height),L=fA?null:hA(H,$);if(T&&fA){if(!BA)nA(fA);else if(fA.id!==BA.id)if(BA.type==="diamond"||BA.type==="rhombus")O({id:Date.now(),from:BA.id,to:fA.id}),xA(!0);else{const AA={id:Date.now(),from:BA.id,to:fA.id,label:""};d({...r,edges:[...i,AA]}),nA(null),M(!1),C(null)}return}if(fA){_(fA),J(null);return}if(L){J(L),_(null);return}if(Q&&Q!=="arrow"){const AA={id:Date.now(),type:Q,x:H,y:$,width:Q==="oval"?100:120,height:60,text:re(Q)};d({...r,nodes:[...a,AA]}),C(null)}_(null),J(null)},re=X=>{switch(X){case"oval":return"Start/End";case"diamond":return"Decision";case"rhombus":return"Decision";case"rectangle":return"Process";default:return X.charAt(0).toUpperCase()+X.slice(1)}},He=X=>{gA(X.id),CA(X.text)},Le=X=>{q(X.id),CA(X.label||"")},Ke=()=>{if(tA){const X=a.map(rA=>rA.id===tA?{...rA,text:Z}:rA);d({...r,nodes:X}),gA(null)}else if(uA){const X=i.map(rA=>rA.id===uA?{...rA,label:Z}:rA);d({...r,edges:X}),q(null)}CA("")},xe=()=>{if(!b)return;const X=a.filter(I=>I.id!==b.id),rA=i.filter(I=>I.from!==b.id&&I.to!==b.id);d({...r,nodes:X,edges:rA}),_(null)},vt=()=>{if(!j)return;const X=i.filter(rA=>rA.id!==j.id);d({...r,edges:X}),J(null)},jn=(X,rA)=>{if(tA||uA)return;const H=z.current.getBoundingClientRect(),$=X.clientX-H.left,fA=X.clientY-H.top;iA({nodeId:rA.id,startX:$,startY:fA,originalX:rA.x,originalY:rA.y})},Qe=eA.useCallback(X=>{if(!cA)return;const I=z.current.getBoundingClientRect(),H=X.clientX-I.left,$=X.clientY-I.top,fA=(H-cA.startX)/r.zoom,L=($-cA.startY)/r.zoom,AA=a.map(TA=>TA.id===cA.nodeId?{...TA,x:cA.originalX+fA,y:cA.originalY+L}:TA);d({...r,nodes:AA})},[cA,a,r,d]),Nt=eA.useCallback(()=>{iA(null)},[]);hu.useEffect(()=>{if(cA)return document.addEventListener("mousemove",Qe),document.addEventListener("mouseup",Nt),()=>{document.removeEventListener("mousemove",Qe),document.removeEventListener("mouseup",Nt)}},[cA,Qe,Nt]);const tn=()=>{C("arrow"),M(!0),nA(null)},nn=()=>{if(!x)return;const X={...x,label:dA};d({...r,edges:[...i,X]}),nA(null),M(!1),C(null),xA(!1),O(null),R("")},bt=X=>{const rA=b?.id===X.id,I=tA===X.id;let H={position:"absolute",left:`${X.x}px`,top:`${X.y}px`,width:`${X.width}px`,height:`${X.height}px`,backgroundColor:rA?"#7c3aed":"#646cff",display:"flex",justifyContent:"center",alignItems:"center",color:"white",cursor:"move",fontSize:"12px",textAlign:"center",wordBreak:"break-word",padding:"5px",boxSizing:"border-box",border:rA?"2px solid #a855f7":"1px solid transparent",userSelect:"none",transition:"all 0.2s ease"};return X.type==="circle"||X.type==="oval"?H.borderRadius=(X.type==="oval","50%"):X.type==="diamond"||X.type==="rhombus"?(H.clipPath="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",H.borderRadius="0"):H.borderRadius="4px",u.jsx("div",{style:H,onMouseDown:$=>jn($,X),onDoubleClick:()=>He(X),children:I?u.jsx("input",{type:"text",value:Z,onChange:$=>CA($.target.value),onBlur:Ke,onKeyPress:$=>$.key==="Enter"&&Ke(),style:{background:"transparent",border:"none",color:"white",textAlign:"center",fontSize:"12px",width:"100%",outline:"none"},autoFocus:!0}):X.text},X.id)},Gn=X=>{const rA=a.find(L=>L.id===X.from),I=a.find(L=>L.id===X.to);if(!rA||!I)return null;const H=P(rA,I,X),$=j?.id===X.id,fA=uA===X.id;return u.jsxs("div",{children:[H.map((L,AA)=>{if(AA===H.length-1)return null;const TA=H[AA+1],kA=Math.sqrt(Math.pow(TA.x-L.x,2)+Math.pow(TA.y-L.y,2)),_A=Math.atan2(TA.y-L.y,TA.x-L.x)*180/Math.PI;return u.jsx("div",{style:{position:"absolute",left:`${L.x}px`,top:`${L.y}px`,width:`${kA}px`,height:$?"4px":"2px",backgroundColor:$?"#a855f7":"#646cff",transformOrigin:"0 0",transform:`rotate(${_A}deg)`,cursor:"pointer"},onClick:E=>{E.stopPropagation(),J(X),_(null)},onDoubleClick:E=>{E.stopPropagation(),Le(X)}},`segment-${AA}`)}),(()=>{const L=H[H.length-1],AA=H[H.length-2],TA=Math.atan2(L.y-AA.y,L.x-AA.x)*180/Math.PI;return u.jsx("div",{style:{position:"absolute",left:`${L.x-5}px`,top:`${L.y-5}px`,width:"0",height:"0",borderLeft:`8px solid ${$?"#a855f7":"#646cff"}`,borderTop:"5px solid transparent",borderBottom:"5px solid transparent",transform:`rotate(${TA}deg)`,transformOrigin:"0 50%",cursor:"pointer"},onClick:kA=>{kA.stopPropagation(),J(X),_(null)},onDoubleClick:kA=>{kA.stopPropagation(),Le(X)}})})(),(X.label||fA)&&u.jsx("div",{style:{position:"absolute",left:`${W(H).x}px`,top:`${W(H).y-10}px`,color:"white",fontSize:"10px",backgroundColor:"rgba(0,0,0,0.7)",padding:"2px 4px",borderRadius:"3px",transform:"translate(-50%, -50%)",cursor:"pointer",border:fA?"1px solid #646cff":"none"},onClick:L=>{L.stopPropagation(),J(X),_(null)},onDoubleClick:L=>{L.stopPropagation(),Le(X)},children:fA?u.jsx("input",{type:"text",value:Z,onChange:L=>CA(L.target.value),onBlur:Ke,onKeyPress:L=>L.key==="Enter"&&Ke(),style:{background:"transparent",border:"none",color:"white",textAlign:"center",fontSize:"10px",width:"60px",outline:"none"},autoFocus:!0}):X.label})]},X.id)};return u.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"20px",color:"rgba(255, 255, 255, 0.87)"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px",paddingBottom:"15px",borderBottom:"1px solid #444"},children:[u.jsx("h2",{style:{margin:"0",fontSize:"1.8em",color:"rgba(255, 255, 255, 0.87)"},children:r.name}),u.jsx("button",{onClick:h,style:{padding:"8px 16px",backgroundColor:"#1a1a1a",color:"rgba(255, 255, 255, 0.87)",border:"1px solid #646cff",borderRadius:"8px",cursor:"pointer",fontSize:"1em",transition:"all 0.25s",fontWeight:"500"},children:"Back to List"})]}),u.jsxs("div",{style:{display:"flex",marginBottom:"20px",borderBottom:"1px solid #444"},children:[u.jsx("button",{onClick:()=>w("editor"),style:{padding:"10px 20px",border:"none",backgroundColor:g==="editor"?"#646cff":"#1a1a1a",color:"rgba(255, 255, 255, 0.87)",cursor:"pointer",fontSize:"1em",marginRight:"5px",borderRadius:"8px 8px 0 0",fontWeight:"500",transition:"all 0.25s"},children:"Flowchart Editor"}),u.jsx("button",{onClick:()=>w("json"),style:{padding:"10px 20px",border:"none",backgroundColor:g==="json"?"#646cff":"#1a1a1a",color:"rgba(255, 255, 255, 0.87)",cursor:"pointer",fontSize:"1em",borderRadius:"8px 8px 0 0",fontWeight:"500",transition:"all 0.25s"},children:"JSON Editor"})]}),g==="editor"?u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px",padding:"15px",backgroundColor:"#1a1a1a",borderRadius:"8px",border:"1px solid #333"},children:[u.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[u.jsx("button",{onClick:()=>C("rectangle"),style:{padding:"8px 16px",backgroundColor:Q==="rectangle"?"#646cff":"#333",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.25s"},children:"Add Rectangle"}),u.jsx("button",{onClick:()=>C("diamond"),style:{padding:"8px 16px",backgroundColor:Q==="diamond"?"#646cff":"#333",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.25s"},children:"Add Diamond"}),u.jsx("button",{onClick:()=>C("rhombus"),style:{padding:"8px 16px",backgroundColor:Q==="rhombus"?"#646cff":"#333",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.25s"},children:"Add Rhombus"}),u.jsx("button",{onClick:()=>C("circle"),style:{padding:"8px 16px",backgroundColor:Q==="circle"?"#646cff":"#333",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.25s"},children:"Add Circle"}),u.jsx("button",{onClick:()=>C("oval"),style:{padding:"8px 16px",backgroundColor:Q==="oval"?"#646cff":"#333",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.25s"},children:"Add Oval"}),u.jsx("button",{onClick:tn,style:{padding:"8px 16px",backgroundColor:T?"#646cff":"#333",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.25s"},children:T?BA?"Select Target":"Select Source":"Connect Nodes"}),b&&u.jsx("button",{onClick:xe,style:{padding:"8px 16px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.25s"},children:"Delete Node"}),j&&u.jsx("button",{onClick:vt,style:{padding:"8px 16px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.25s"},children:"Delete Connection"})]}),u.jsxs("div",{style:{display:"flex",gap:"10px",marginLeft:"auto"},children:[u.jsx("button",{onClick:F,style:{padding:"8px 16px",backgroundColor:"#ff9800",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.25s"},children:"Export as Image"}),u.jsx("button",{onClick:()=>navigator.clipboard.writeText(m()),style:{padding:"8px 16px",backgroundColor:"#9c27b0",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.25s"},children:"Copy JSON"}),u.jsx("button",{onClick:G,style:{padding:"8px 16px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",transition:"all 0.25s"},children:"Fetch Current JSON"})]})]}),(Q||T)&&u.jsx("div",{style:{padding:"10px",backgroundColor:"rgba(100, 108, 255, 0.1)",border:"1px solid #646cff",borderRadius:"8px",color:"#646cff",textAlign:"center"},children:T?BA?`Click on target node to connect from "${BA.text}"`:"Click on a node to start connection":`Click on canvas to place a ${Q}`}),u.jsxs("div",{ref:z,onClick:OA,style:{height:"600px",border:"2px dashed #646cff",borderRadius:"8px",backgroundColor:"#1a1a1a",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",overflow:"hidden",cursor:Q?"crosshair":"default"},children:[a.length===0&&!Q&&u.jsx("p",{style:{color:"#666",fontStyle:"italic",pointerEvents:"none"},children:"Select a tool from the toolbar to start building your flowchart"}),u.jsxs("div",{style:{position:"absolute",transform:`scale(${r.zoom}) translate(${r.pan.x}px, ${r.pan.y}px)`,transformOrigin:"0 0",width:"100%",height:"100%"},children:[i.map(Gn),a.map(bt)]})]}),u.jsx("div",{style:{fontSize:"14px",color:"#888",textAlign:"center",marginTop:"10px"},children:'• Single click to select nodes/connections • Double click to edit text • Drag nodes to move them • Use "Connect Nodes" to create arrows • Press Delete to remove selected item'})]}):u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px"},children:[u.jsxs("div",{style:{border:"1px solid #444",borderRadius:"8px",padding:"15px",backgroundColor:"#1a1a1a"},children:[u.jsx("h3",{style:{marginTop:"0",color:"rgba(255, 255, 255, 0.87)"},children:"Import JSON"}),u.jsx("textarea",{value:l,onChange:X=>c(X.target.value),placeholder:"Paste your flowchart JSON here",style:{width:"100%",minHeight:"300px",padding:"10px",border:"1px solid #444",borderRadius:"8px",fontFamily:"monospace",marginBottom:"15px",backgroundColor:"#242424",color:"rgba(255, 255, 255, 0.87)",resize:"vertical"}}),u.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"15px"},children:[u.jsx("button",{onClick:aA,style:{padding:"10px 20px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",flex:1,fontSize:"1em",fontWeight:"500",transition:"all 0.25s"},children:"Import JSON"}),u.jsx("button",{onClick:()=>sA.current.click(),style:{padding:"10px 20px",backgroundColor:"#2196F3",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",flex:1,fontSize:"1em",fontWeight:"500",transition:"all 0.25s"},children:"Import from File"}),u.jsx("input",{type:"file",ref:sA,onChange:lA,accept:".json",style:{display:"none"}})]})]}),u.jsxs("div",{style:{border:"1px solid #444",borderRadius:"8px",padding:"15px",backgroundColor:"#1a1a1a"},children:[u.jsx("h3",{style:{marginTop:"0",color:"rgba(255, 255, 255, 0.87)"},children:"Current Flowchart JSON"}),u.jsx("pre",{style:{backgroundColor:"#242424",padding:"15px",border:"1px solid #444",borderRadius:"8px",overflow:"auto",maxHeight:"400px",fontFamily:"monospace",color:"rgba(255, 255, 255, 0.87)",whiteSpace:"pre-wrap",wordWrap:"break-word"},children:m()})]})]}),oA&&u.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.7)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},children:u.jsxs("div",{style:{backgroundColor:"#1a1a1a",padding:"20px",borderRadius:"8px",width:"300px",border:"1px solid #646cff"},children:[u.jsx("h3",{style:{marginTop:0,color:"white"},children:"Add Connection Label"}),u.jsx("p",{style:{color:"#aaa",marginBottom:"20px"},children:'Please enter a label for this connection (e.g., "Yes" or "No"):'}),u.jsx("input",{type:"text",value:dA,onChange:X=>R(X.target.value),style:{width:"100%",padding:"8px",marginBottom:"20px",backgroundColor:"#242424",border:"1px solid #444",color:"white",borderRadius:"4px"},autoFocus:!0}),u.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"10px"},children:[u.jsx("button",{onClick:()=>{xA(!1),R(""),nA(null),M(!1),C(null)},style:{padding:"8px 16px",backgroundColor:"#333",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Cancel"}),u.jsx("button",{onClick:nn,style:{padding:"8px 16px",backgroundColor:"#646cff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Add Label"})]})]})})]})},om=({ganttCharts:r,onCreateGanttChart:a,onLoadGanttChart:i,onDeleteGanttChart:l})=>{const[c,f]=eA.useState(!1);return u.jsxs("div",{className:"gantt-main",children:[u.jsxs("div",{className:"welcome-screen",children:[u.jsx("div",{className:"welcome-icon",children:u.jsx(LQ,{size:48})}),u.jsx("h2",{children:"Gantt Chart Planner"}),u.jsx("p",{children:"Plan and visualize project timelines with interactive Gantt charts"}),u.jsx("div",{className:"action-buttons",children:u.jsxs("button",{onClick:()=>f(!0),className:"primary-btn",children:[u.jsx(An,{size:16})," New Gantt Chart"]})}),r.length>0&&u.jsxs("div",{className:"gantt-list",children:[u.jsx("h3",{children:"Your Gantt Charts"}),r.map(d=>u.jsxs("div",{className:"gantt-card",onClick:()=>i(d),children:[u.jsxs("div",{className:"gantt-card-content",children:[u.jsx("div",{className:"gantt-card-name",children:d.name}),u.jsxs("div",{className:"gantt-card-meta",children:[u.jsxs("span",{children:[u.jsx(IQ,{size:14})," ",new Date(d.createdAt).toLocaleDateString()]}),u.jsxs("span",{children:[d.tasks?.length||0," tasks"]})]})]}),u.jsxs("div",{className:"gantt-card-actions",children:[u.jsx("button",{onClick:h=>{h.stopPropagation(),i(d)},className:"open-btn",children:u.jsx(vl,{size:16})}),u.jsx("button",{onClick:h=>{h.stopPropagation(),confirm("Delete this Gantt chart?")&&l(d.id)},className:"delete-btn",children:u.jsx(wt,{size:16})})]})]},d.id))]})]}),c&&u.jsx("div",{className:"modal-overlay",children:u.jsxs("div",{className:"modal-content",children:[u.jsxs("div",{className:"modal-header",children:[u.jsx("h2",{children:"Create New Gantt Chart"}),u.jsx("button",{onClick:()=>f(!1),className:"close-btn",children:"×"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Project Name"}),u.jsx("input",{type:"text",placeholder:"e.g., Website Redesign Project",id:"ganttName",autoFocus:!0})]}),u.jsxs("div",{className:"modal-footer",children:[u.jsx("button",{onClick:()=>f(!1),className:"cancel-btn",children:"Cancel"}),u.jsx("button",{onClick:()=>{const d=document.getElementById("ganttName").value;d.trim()&&(a(d),f(!1))},className:"create-btn",children:"Create Gantt Chart"})]})]})}),u.jsx("style",{jsx:!0,children:`
        .gantt-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
          color: white;
        }
        
        .welcome-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .welcome-icon {
          margin-bottom: 20px;
          opacity: 0.9;
        }
        
        .welcome-screen h2 {
          font-size: 36px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        
        .welcome-screen p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
          max-width: 600px;
        }
        
        .action-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
        }
        
        .primary-btn {
          background: white;
          color: #3b82f6;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .gantt-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .gantt-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .gantt-card {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .gantt-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .gantt-card-content {
          flex: 1;
        }
        
        .gantt-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .gantt-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .gantt-card-actions {
          display: flex;
          gap: 8px;
        }
        
        .open-btn, .delete-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        
        .open-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .open-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .delete-btn {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        
        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          max-width: 500px;
          max-height: 80vh;
          overflow: auto;
          color: #1f2937;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
          font-size: 24px;
          font-weight: 700;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          font-size: 24px;
          color: #6b7280;
        }
        
        .close-btn:hover {
          color: #4b5563;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #4b5563;
        }
        
        .form-group input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }
        
        .cancel-btn {
          background: #f3f4f6;
          color: #4b5563;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .cancel-btn:hover {
          background: #e5e7eb;
        }
        
        .create-btn {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #2563eb;
        }
      `})]})};/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var pu=function(r,a){return pu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,l){i.__proto__=l}||function(i,l){for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(i[c]=l[c])},pu(r,a)};function xt(r,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");pu(r,a);function i(){this.constructor=r}r.prototype=a===null?Object.create(a):(i.prototype=a.prototype,new i)}var wu=function(){return wu=Object.assign||function(a){for(var i,l=1,c=arguments.length;l<c;l++){i=arguments[l];for(var f in i)Object.prototype.hasOwnProperty.call(i,f)&&(a[f]=i[f])}return a},wu.apply(this,arguments)};function _e(r,a,i,l){function c(f){return f instanceof i?f:new i(function(d){d(f)})}return new(i||(i=Promise))(function(f,d){function h(Q){try{w(l.next(Q))}catch(C){d(C)}}function g(Q){try{w(l.throw(Q))}catch(C){d(C)}}function w(Q){Q.done?f(Q.value):c(Q.value).then(h,g)}w((l=l.apply(r,[])).next())})}function je(r,a){var i={label:0,sent:function(){if(f[0]&1)throw f[1];return f[1]},trys:[],ops:[]},l,c,f,d;return d={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(d[Symbol.iterator]=function(){return this}),d;function h(w){return function(Q){return g([w,Q])}}function g(w){if(l)throw new TypeError("Generator is already executing.");for(;i;)try{if(l=1,c&&(f=w[0]&2?c.return:w[0]?c.throw||((f=c.return)&&f.call(c),0):c.next)&&!(f=f.call(c,w[1])).done)return f;switch(c=0,f&&(w=[w[0]&2,f.value]),w[0]){case 0:case 1:f=w;break;case 4:return i.label++,{value:w[1],done:!1};case 5:i.label++,c=w[1],w=[0];continue;case 7:w=i.ops.pop(),i.trys.pop();continue;default:if(f=i.trys,!(f=f.length>0&&f[f.length-1])&&(w[0]===6||w[0]===2)){i=0;continue}if(w[0]===3&&(!f||w[1]>f[0]&&w[1]<f[3])){i.label=w[1];break}if(w[0]===6&&i.label<f[1]){i.label=f[1],f=w;break}if(f&&i.label<f[2]){i.label=f[2],i.ops.push(w);break}f[2]&&i.ops.pop(),i.trys.pop();continue}w=a.call(r,i)}catch(Q){w=[6,Q],c=0}finally{l=f=0}if(w[0]&5)throw w[1];return{value:w[0]?w[1]:void 0,done:!0}}}function Ri(r,a,i){if(arguments.length===2)for(var l=0,c=a.length,f;l<c;l++)(f||!(l in a))&&(f||(f=Array.prototype.slice.call(a,0,l)),f[l]=a[l]);return r.concat(f||a)}var en=function(){function r(a,i,l,c){this.left=a,this.top=i,this.width=l,this.height=c}return r.prototype.add=function(a,i,l,c){return new r(this.left+a,this.top+i,this.width+l,this.height+c)},r.fromClientRect=function(a,i){return new r(i.left+a.windowBounds.left,i.top+a.windowBounds.top,i.width,i.height)},r.fromDOMRectList=function(a,i){var l=Array.from(i).find(function(c){return c.width!==0});return l?new r(l.left+a.windowBounds.left,l.top+a.windowBounds.top,l.width,l.height):r.EMPTY},r.EMPTY=new r(0,0,0,0),r}(),xs=function(r,a){return en.fromClientRect(r,a.getBoundingClientRect())},cm=function(r){var a=r.body,i=r.documentElement;if(!a||!i)throw new Error("Unable to get document size");var l=Math.max(Math.max(a.scrollWidth,i.scrollWidth),Math.max(a.offsetWidth,i.offsetWidth),Math.max(a.clientWidth,i.clientWidth)),c=Math.max(Math.max(a.scrollHeight,i.scrollHeight),Math.max(a.offsetHeight,i.offsetHeight),Math.max(a.clientHeight,i.clientHeight));return new en(0,0,l,c)},vs=function(r){for(var a=[],i=0,l=r.length;i<l;){var c=r.charCodeAt(i++);if(c>=55296&&c<=56319&&i<l){var f=r.charCodeAt(i++);(f&64512)===56320?a.push(((c&1023)<<10)+(f&1023)+65536):(a.push(c),i--)}else a.push(c)}return a},Be=function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];if(String.fromCodePoint)return String.fromCodePoint.apply(String,r);var i=r.length;if(!i)return"";for(var l=[],c=-1,f="";++c<i;){var d=r[c];d<=65535?l.push(d):(d-=65536,l.push((d>>10)+55296,d%1024+56320)),(c+1===i||l.length>16384)&&(f+=String.fromCharCode.apply(String,l),l.length=0)}return f},Yg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",um=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ji=0;ji<Yg.length;ji++)um[Yg.charCodeAt(ji)]=ji;var Jg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ol=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Gi=0;Gi<Jg.length;Gi++)ol[Jg.charCodeAt(Gi)]=Gi;var fm=function(r){var a=r.length*.75,i=r.length,l,c=0,f,d,h,g;r[r.length-1]==="="&&(a--,r[r.length-2]==="="&&a--);var w=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(a):new Array(a),Q=Array.isArray(w)?w:new Uint8Array(w);for(l=0;l<i;l+=4)f=ol[r.charCodeAt(l)],d=ol[r.charCodeAt(l+1)],h=ol[r.charCodeAt(l+2)],g=ol[r.charCodeAt(l+3)],Q[c++]=f<<2|d>>4,Q[c++]=(d&15)<<4|h>>2,Q[c++]=(h&3)<<6|g&63;return w},dm=function(r){for(var a=r.length,i=[],l=0;l<a;l+=2)i.push(r[l+1]<<8|r[l]);return i},Bm=function(r){for(var a=r.length,i=[],l=0;l<a;l+=4)i.push(r[l+3]<<24|r[l+2]<<16|r[l+1]<<8|r[l]);return i},sa=5,_u=11,Jc=2,gm=_u-sa,A0=65536>>sa,hm=1<<sa,Zc=hm-1,pm=1024>>sa,wm=A0+pm,Qm=wm,mm=32,Cm=Qm+mm,Um=65536>>_u,xm=1<<gm,vm=xm-1,Zg=function(r,a,i){return r.slice?r.slice(a,i):new Uint16Array(Array.prototype.slice.call(r,a,i))},bm=function(r,a,i){return r.slice?r.slice(a,i):new Uint32Array(Array.prototype.slice.call(r,a,i))},ym=function(r,a){var i=fm(r),l=Array.isArray(i)?Bm(i):new Uint32Array(i),c=Array.isArray(i)?dm(i):new Uint16Array(i),f=24,d=Zg(c,f/2,l[4]/2),h=l[5]===2?Zg(c,(f+l[4])/2):bm(l,Math.ceil((f+l[4])/4));return new Fm(l[0],l[1],l[2],l[3],d,h)},Fm=function(){function r(a,i,l,c,f,d){this.initialValue=a,this.errorValue=i,this.highStart=l,this.highValueIndex=c,this.index=f,this.data=d}return r.prototype.get=function(a){var i;if(a>=0){if(a<55296||a>56319&&a<=65535)return i=this.index[a>>sa],i=(i<<Jc)+(a&Zc),this.data[i];if(a<=65535)return i=this.index[A0+(a-55296>>sa)],i=(i<<Jc)+(a&Zc),this.data[i];if(a<this.highStart)return i=Cm-Um+(a>>_u),i=this.index[i],i+=a>>sa&vm,i=this.index[i],i=(i<<Jc)+(a&Zc),this.data[i];if(a<=1114111)return this.data[this.highValueIndex]}return this.errorValue},r}(),qg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Em=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ki=0;ki<qg.length;ki++)Em[qg.charCodeAt(ki)]=ki;var Hm="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",Wg=50,Sm=1,e0=2,t0=3,Dm=4,Tm=5,Pg=7,n0=8,$g=9,Nn=10,Qu=11,Ah=12,mu=13,Im=14,cl=15,Cu=16,_i=17,al=18,Nm=19,eh=20,Uu=21,rl=22,qc=23,qa=24,at=25,ul=26,fl=27,Wa=28,Lm=29,la=30,Km=31,Vi=32,zi=33,xu=34,vu=35,bu=36,Cl=37,yu=38,ss=39,os=40,Wc=41,a0=42,Mm=43,Om=[9001,65288],r0="!",MA="×",Xi="÷",Fu=ym(Hm),Wt=[la,bu],Eu=[Sm,e0,t0,Tm],l0=[Nn,n0],th=[fl,ul],Rm=Eu.concat(l0),nh=[yu,ss,os,xu,vu],jm=[cl,mu],Gm=function(r,a){a===void 0&&(a="strict");var i=[],l=[],c=[];return r.forEach(function(f,d){var h=Fu.get(f);if(h>Wg?(c.push(!0),h-=Wg):c.push(!1),["normal","auto","loose"].indexOf(a)!==-1&&[8208,8211,12316,12448].indexOf(f)!==-1)return l.push(d),i.push(Cu);if(h===Dm||h===Qu){if(d===0)return l.push(d),i.push(la);var g=i[d-1];return Rm.indexOf(g)===-1?(l.push(l[d-1]),i.push(g)):(l.push(d),i.push(la))}if(l.push(d),h===Km)return i.push(a==="strict"?Uu:Cl);if(h===a0||h===Lm)return i.push(la);if(h===Mm)return f>=131072&&f<=196605||f>=196608&&f<=262141?i.push(Cl):i.push(la);i.push(h)}),[l,i,c]},Pc=function(r,a,i,l){var c=l[i];if(Array.isArray(r)?r.indexOf(c)!==-1:r===c)for(var f=i;f<=l.length;){f++;var d=l[f];if(d===a)return!0;if(d!==Nn)break}if(c===Nn)for(var f=i;f>0;){f--;var h=l[f];if(Array.isArray(r)?r.indexOf(h)!==-1:r===h)for(var g=i;g<=l.length;){g++;var d=l[g];if(d===a)return!0;if(d!==Nn)break}if(h!==Nn)break}return!1},ah=function(r,a){for(var i=r;i>=0;){var l=a[i];if(l===Nn)i--;else return l}return 0},km=function(r,a,i,l,c){if(i[l]===0)return MA;var f=l-1;if(Array.isArray(c)&&c[f]===!0)return MA;var d=f-1,h=f+1,g=a[f],w=d>=0?a[d]:0,Q=a[h];if(g===e0&&Q===t0)return MA;if(Eu.indexOf(g)!==-1)return r0;if(Eu.indexOf(Q)!==-1||l0.indexOf(Q)!==-1)return MA;if(ah(f,a)===n0)return Xi;if(Fu.get(r[f])===Qu||(g===Vi||g===zi)&&Fu.get(r[h])===Qu||g===Pg||Q===Pg||g===$g||[Nn,mu,cl].indexOf(g)===-1&&Q===$g||[_i,al,Nm,qa,Wa].indexOf(Q)!==-1||ah(f,a)===rl||Pc(qc,rl,f,a)||Pc([_i,al],Uu,f,a)||Pc(Ah,Ah,f,a))return MA;if(g===Nn)return Xi;if(g===qc||Q===qc)return MA;if(Q===Cu||g===Cu)return Xi;if([mu,cl,Uu].indexOf(Q)!==-1||g===Im||w===bu&&jm.indexOf(g)!==-1||g===Wa&&Q===bu||Q===eh||Wt.indexOf(Q)!==-1&&g===at||Wt.indexOf(g)!==-1&&Q===at||g===fl&&[Cl,Vi,zi].indexOf(Q)!==-1||[Cl,Vi,zi].indexOf(g)!==-1&&Q===ul||Wt.indexOf(g)!==-1&&th.indexOf(Q)!==-1||th.indexOf(g)!==-1&&Wt.indexOf(Q)!==-1||[fl,ul].indexOf(g)!==-1&&(Q===at||[rl,cl].indexOf(Q)!==-1&&a[h+1]===at)||[rl,cl].indexOf(g)!==-1&&Q===at||g===at&&[at,Wa,qa].indexOf(Q)!==-1)return MA;if([at,Wa,qa,_i,al].indexOf(Q)!==-1)for(var C=f;C>=0;){var b=a[C];if(b===at)return MA;if([Wa,qa].indexOf(b)!==-1)C--;else break}if([fl,ul].indexOf(Q)!==-1)for(var C=[_i,al].indexOf(g)!==-1?d:f;C>=0;){var b=a[C];if(b===at)return MA;if([Wa,qa].indexOf(b)!==-1)C--;else break}if(yu===g&&[yu,ss,xu,vu].indexOf(Q)!==-1||[ss,xu].indexOf(g)!==-1&&[ss,os].indexOf(Q)!==-1||[os,vu].indexOf(g)!==-1&&Q===os||nh.indexOf(g)!==-1&&[eh,ul].indexOf(Q)!==-1||nh.indexOf(Q)!==-1&&g===fl||Wt.indexOf(g)!==-1&&Wt.indexOf(Q)!==-1||g===qa&&Wt.indexOf(Q)!==-1||Wt.concat(at).indexOf(g)!==-1&&Q===rl&&Om.indexOf(r[h])===-1||Wt.concat(at).indexOf(Q)!==-1&&g===al)return MA;if(g===Wc&&Q===Wc){for(var _=i[f],j=1;_>0&&(_--,a[_]===Wc);)j++;if(j%2!==0)return MA}return g===Vi&&Q===zi?MA:Xi},_m=function(r,a){a||(a={lineBreak:"normal",wordBreak:"normal"});var i=Gm(r,a.lineBreak),l=i[0],c=i[1],f=i[2];(a.wordBreak==="break-all"||a.wordBreak==="break-word")&&(c=c.map(function(h){return[at,la,a0].indexOf(h)!==-1?Cl:h}));var d=a.wordBreak==="keep-all"?f.map(function(h,g){return h&&r[g]>=19968&&r[g]<=40959}):void 0;return[l,c,d]},Vm=function(){function r(a,i,l,c){this.codePoints=a,this.required=i===r0,this.start=l,this.end=c}return r.prototype.slice=function(){return Be.apply(void 0,this.codePoints.slice(this.start,this.end))},r}(),zm=function(r,a){var i=vs(r),l=_m(i,a),c=l[0],f=l[1],d=l[2],h=i.length,g=0,w=0;return{next:function(){if(w>=h)return{done:!0,value:null};for(var Q=MA;w<h&&(Q=km(i,f,c,++w,d))===MA;);if(Q!==MA||w===h){var C=new Vm(i,Q,g,w);return g=w,{value:C,done:!1}}return{done:!0,value:null}}}},Xm=1,Ym=2,yl=4,rh=8,fs=10,lh=47,hl=92,Jm=9,Zm=32,Yi=34,ll=61,qm=35,Wm=36,Pm=37,Ji=39,Zi=40,il=41,$m=95,qe=45,AC=33,eC=60,tC=62,nC=64,aC=91,rC=93,lC=61,iC=123,qi=63,sC=125,ih=124,oC=126,cC=128,sh=65533,$c=42,ia=43,uC=44,fC=58,dC=59,Ul=46,BC=0,gC=8,hC=11,pC=14,wC=31,QC=127,Dt=-1,i0=48,s0=97,o0=101,mC=102,CC=117,UC=122,c0=65,u0=69,f0=70,xC=85,vC=90,Ge=function(r){return r>=i0&&r<=57},bC=function(r){return r>=55296&&r<=57343},Pa=function(r){return Ge(r)||r>=c0&&r<=f0||r>=s0&&r<=mC},yC=function(r){return r>=s0&&r<=UC},FC=function(r){return r>=c0&&r<=vC},EC=function(r){return yC(r)||FC(r)},HC=function(r){return r>=cC},Wi=function(r){return r===fs||r===Jm||r===Zm},ds=function(r){return EC(r)||HC(r)||r===$m},oh=function(r){return ds(r)||Ge(r)||r===qe},SC=function(r){return r>=BC&&r<=gC||r===hC||r>=pC&&r<=wC||r===QC},In=function(r,a){return r!==hl?!1:a!==fs},Pi=function(r,a,i){return r===qe?ds(a)||In(a,i):ds(r)?!0:!!(r===hl&&In(r,a))},Au=function(r,a,i){return r===ia||r===qe?Ge(a)?!0:a===Ul&&Ge(i):Ge(r===Ul?a:r)},DC=function(r){var a=0,i=1;(r[a]===ia||r[a]===qe)&&(r[a]===qe&&(i=-1),a++);for(var l=[];Ge(r[a]);)l.push(r[a++]);var c=l.length?parseInt(Be.apply(void 0,l),10):0;r[a]===Ul&&a++;for(var f=[];Ge(r[a]);)f.push(r[a++]);var d=f.length,h=d?parseInt(Be.apply(void 0,f),10):0;(r[a]===u0||r[a]===o0)&&a++;var g=1;(r[a]===ia||r[a]===qe)&&(r[a]===qe&&(g=-1),a++);for(var w=[];Ge(r[a]);)w.push(r[a++]);var Q=w.length?parseInt(Be.apply(void 0,w),10):0;return i*(c+h*Math.pow(10,-d))*Math.pow(10,g*Q)},TC={type:2},IC={type:3},NC={type:4},LC={type:13},KC={type:8},MC={type:21},OC={type:9},RC={type:10},jC={type:11},GC={type:12},kC={type:14},$i={type:23},_C={type:1},VC={type:25},zC={type:24},XC={type:26},YC={type:27},JC={type:28},ZC={type:29},qC={type:31},Hu={type:32},d0=function(){function r(){this._value=[]}return r.prototype.write=function(a){this._value=this._value.concat(vs(a))},r.prototype.read=function(){for(var a=[],i=this.consumeToken();i!==Hu;)a.push(i),i=this.consumeToken();return a},r.prototype.consumeToken=function(){var a=this.consumeCodePoint();switch(a){case Yi:return this.consumeStringToken(Yi);case qm:var i=this.peekCodePoint(0),l=this.peekCodePoint(1),c=this.peekCodePoint(2);if(oh(i)||In(l,c)){var f=Pi(i,l,c)?Ym:Xm,d=this.consumeName();return{type:5,value:d,flags:f}}break;case Wm:if(this.peekCodePoint(0)===ll)return this.consumeCodePoint(),LC;break;case Ji:return this.consumeStringToken(Ji);case Zi:return TC;case il:return IC;case $c:if(this.peekCodePoint(0)===ll)return this.consumeCodePoint(),kC;break;case ia:if(Au(a,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(a),this.consumeNumericToken();break;case uC:return NC;case qe:var h=a,g=this.peekCodePoint(0),w=this.peekCodePoint(1);if(Au(h,g,w))return this.reconsumeCodePoint(a),this.consumeNumericToken();if(Pi(h,g,w))return this.reconsumeCodePoint(a),this.consumeIdentLikeToken();if(g===qe&&w===tC)return this.consumeCodePoint(),this.consumeCodePoint(),zC;break;case Ul:if(Au(a,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(a),this.consumeNumericToken();break;case lh:if(this.peekCodePoint(0)===$c)for(this.consumeCodePoint();;){var Q=this.consumeCodePoint();if(Q===$c&&(Q=this.consumeCodePoint(),Q===lh))return this.consumeToken();if(Q===Dt)return this.consumeToken()}break;case fC:return XC;case dC:return YC;case eC:if(this.peekCodePoint(0)===AC&&this.peekCodePoint(1)===qe&&this.peekCodePoint(2)===qe)return this.consumeCodePoint(),this.consumeCodePoint(),VC;break;case nC:var C=this.peekCodePoint(0),b=this.peekCodePoint(1),_=this.peekCodePoint(2);if(Pi(C,b,_)){var d=this.consumeName();return{type:7,value:d}}break;case aC:return JC;case hl:if(In(a,this.peekCodePoint(0)))return this.reconsumeCodePoint(a),this.consumeIdentLikeToken();break;case rC:return ZC;case lC:if(this.peekCodePoint(0)===ll)return this.consumeCodePoint(),KC;break;case iC:return jC;case sC:return GC;case CC:case xC:var j=this.peekCodePoint(0),J=this.peekCodePoint(1);return j===ia&&(Pa(J)||J===qi)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(a),this.consumeIdentLikeToken();case ih:if(this.peekCodePoint(0)===ll)return this.consumeCodePoint(),OC;if(this.peekCodePoint(0)===ih)return this.consumeCodePoint(),MC;break;case oC:if(this.peekCodePoint(0)===ll)return this.consumeCodePoint(),RC;break;case Dt:return Hu}return Wi(a)?(this.consumeWhiteSpace(),qC):Ge(a)?(this.reconsumeCodePoint(a),this.consumeNumericToken()):ds(a)?(this.reconsumeCodePoint(a),this.consumeIdentLikeToken()):{type:6,value:Be(a)}},r.prototype.consumeCodePoint=function(){var a=this._value.shift();return typeof a>"u"?-1:a},r.prototype.reconsumeCodePoint=function(a){this._value.unshift(a)},r.prototype.peekCodePoint=function(a){return a>=this._value.length?-1:this._value[a]},r.prototype.consumeUnicodeRangeToken=function(){for(var a=[],i=this.consumeCodePoint();Pa(i)&&a.length<6;)a.push(i),i=this.consumeCodePoint();for(var l=!1;i===qi&&a.length<6;)a.push(i),i=this.consumeCodePoint(),l=!0;if(l){var c=parseInt(Be.apply(void 0,a.map(function(g){return g===qi?i0:g})),16),f=parseInt(Be.apply(void 0,a.map(function(g){return g===qi?f0:g})),16);return{type:30,start:c,end:f}}var d=parseInt(Be.apply(void 0,a),16);if(this.peekCodePoint(0)===qe&&Pa(this.peekCodePoint(1))){this.consumeCodePoint(),i=this.consumeCodePoint();for(var h=[];Pa(i)&&h.length<6;)h.push(i),i=this.consumeCodePoint();var f=parseInt(Be.apply(void 0,h),16);return{type:30,start:d,end:f}}else return{type:30,start:d,end:d}},r.prototype.consumeIdentLikeToken=function(){var a=this.consumeName();return a.toLowerCase()==="url"&&this.peekCodePoint(0)===Zi?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===Zi?(this.consumeCodePoint(),{type:19,value:a}):{type:20,value:a}},r.prototype.consumeUrlToken=function(){var a=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===Dt)return{type:22,value:""};var i=this.peekCodePoint(0);if(i===Ji||i===Yi){var l=this.consumeStringToken(this.consumeCodePoint());return l.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===Dt||this.peekCodePoint(0)===il)?(this.consumeCodePoint(),{type:22,value:l.value}):(this.consumeBadUrlRemnants(),$i)}for(;;){var c=this.consumeCodePoint();if(c===Dt||c===il)return{type:22,value:Be.apply(void 0,a)};if(Wi(c))return this.consumeWhiteSpace(),this.peekCodePoint(0)===Dt||this.peekCodePoint(0)===il?(this.consumeCodePoint(),{type:22,value:Be.apply(void 0,a)}):(this.consumeBadUrlRemnants(),$i);if(c===Yi||c===Ji||c===Zi||SC(c))return this.consumeBadUrlRemnants(),$i;if(c===hl)if(In(c,this.peekCodePoint(0)))a.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),$i;else a.push(c)}},r.prototype.consumeWhiteSpace=function(){for(;Wi(this.peekCodePoint(0));)this.consumeCodePoint()},r.prototype.consumeBadUrlRemnants=function(){for(;;){var a=this.consumeCodePoint();if(a===il||a===Dt)return;In(a,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},r.prototype.consumeStringSlice=function(a){for(var i=5e4,l="";a>0;){var c=Math.min(i,a);l+=Be.apply(void 0,this._value.splice(0,c)),a-=c}return this._value.shift(),l},r.prototype.consumeStringToken=function(a){var i="",l=0;do{var c=this._value[l];if(c===Dt||c===void 0||c===a)return i+=this.consumeStringSlice(l),{type:0,value:i};if(c===fs)return this._value.splice(0,l),_C;if(c===hl){var f=this._value[l+1];f!==Dt&&f!==void 0&&(f===fs?(i+=this.consumeStringSlice(l),l=-1,this._value.shift()):In(c,f)&&(i+=this.consumeStringSlice(l),i+=Be(this.consumeEscapedCodePoint()),l=-1))}l++}while(!0)},r.prototype.consumeNumber=function(){var a=[],i=yl,l=this.peekCodePoint(0);for((l===ia||l===qe)&&a.push(this.consumeCodePoint());Ge(this.peekCodePoint(0));)a.push(this.consumeCodePoint());l=this.peekCodePoint(0);var c=this.peekCodePoint(1);if(l===Ul&&Ge(c))for(a.push(this.consumeCodePoint(),this.consumeCodePoint()),i=rh;Ge(this.peekCodePoint(0));)a.push(this.consumeCodePoint());l=this.peekCodePoint(0),c=this.peekCodePoint(1);var f=this.peekCodePoint(2);if((l===u0||l===o0)&&((c===ia||c===qe)&&Ge(f)||Ge(c)))for(a.push(this.consumeCodePoint(),this.consumeCodePoint()),i=rh;Ge(this.peekCodePoint(0));)a.push(this.consumeCodePoint());return[DC(a),i]},r.prototype.consumeNumericToken=function(){var a=this.consumeNumber(),i=a[0],l=a[1],c=this.peekCodePoint(0),f=this.peekCodePoint(1),d=this.peekCodePoint(2);if(Pi(c,f,d)){var h=this.consumeName();return{type:15,number:i,flags:l,unit:h}}return c===Pm?(this.consumeCodePoint(),{type:16,number:i,flags:l}):{type:17,number:i,flags:l}},r.prototype.consumeEscapedCodePoint=function(){var a=this.consumeCodePoint();if(Pa(a)){for(var i=Be(a);Pa(this.peekCodePoint(0))&&i.length<6;)i+=Be(this.consumeCodePoint());Wi(this.peekCodePoint(0))&&this.consumeCodePoint();var l=parseInt(i,16);return l===0||bC(l)||l>1114111?sh:l}return a===Dt?sh:a},r.prototype.consumeName=function(){for(var a="";;){var i=this.consumeCodePoint();if(oh(i))a+=Be(i);else if(In(i,this.peekCodePoint(0)))a+=Be(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(i),a}},r}(),B0=function(){function r(a){this._tokens=a}return r.create=function(a){var i=new d0;return i.write(a),new r(i.read())},r.parseValue=function(a){return r.create(a).parseComponentValue()},r.parseValues=function(a){return r.create(a).parseComponentValues()},r.prototype.parseComponentValue=function(){for(var a=this.consumeToken();a.type===31;)a=this.consumeToken();if(a.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(a);var i=this.consumeComponentValue();do a=this.consumeToken();while(a.type===31);if(a.type===32)return i;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},r.prototype.parseComponentValues=function(){for(var a=[];;){var i=this.consumeComponentValue();if(i.type===32)return a;a.push(i),a.push()}},r.prototype.consumeComponentValue=function(){var a=this.consumeToken();switch(a.type){case 11:case 28:case 2:return this.consumeSimpleBlock(a.type);case 19:return this.consumeFunction(a)}return a},r.prototype.consumeSimpleBlock=function(a){for(var i={type:a,values:[]},l=this.consumeToken();;){if(l.type===32||PC(l,a))return i;this.reconsumeToken(l),i.values.push(this.consumeComponentValue()),l=this.consumeToken()}},r.prototype.consumeFunction=function(a){for(var i={name:a.value,values:[],type:18};;){var l=this.consumeToken();if(l.type===32||l.type===3)return i;this.reconsumeToken(l),i.values.push(this.consumeComponentValue())}},r.prototype.consumeToken=function(){var a=this._tokens.shift();return typeof a>"u"?Hu:a},r.prototype.reconsumeToken=function(a){this._tokens.unshift(a)},r}(),Fl=function(r){return r.type===15},ir=function(r){return r.type===17},PA=function(r){return r.type===20},WC=function(r){return r.type===0},Su=function(r,a){return PA(r)&&r.value===a},g0=function(r){return r.type!==31},lr=function(r){return r.type!==31&&r.type!==4},Tt=function(r){var a=[],i=[];return r.forEach(function(l){if(l.type===4){if(i.length===0)throw new Error("Error parsing function args, zero tokens for arg");a.push(i),i=[];return}l.type!==31&&i.push(l)}),i.length&&a.push(i),a},PC=function(r,a){return a===11&&r.type===12||a===28&&r.type===29?!0:a===2&&r.type===3},Rn=function(r){return r.type===17||r.type===15},we=function(r){return r.type===16||Rn(r)},h0=function(r){return r.length>1?[r[0],r[1]]:[r[0]]},Ne={type:17,number:0,flags:yl},Vu={type:16,number:50,flags:yl},Ln={type:16,number:100,flags:yl},dl=function(r,a,i){var l=r[0],c=r[1];return[ee(l,a),ee(typeof c<"u"?c:l,i)]},ee=function(r,a){if(r.type===16)return r.number/100*a;if(Fl(r))switch(r.unit){case"rem":case"em":return 16*r.number;case"px":default:return r.number}return r.number},p0="deg",w0="grad",Q0="rad",m0="turn",bs={name:"angle",parse:function(r,a){if(a.type===15)switch(a.unit){case p0:return Math.PI*a.number/180;case w0:return Math.PI/200*a.number;case Q0:return a.number;case m0:return Math.PI*2*a.number}throw new Error("Unsupported angle type")}},C0=function(r){return r.type===15&&(r.unit===p0||r.unit===w0||r.unit===Q0||r.unit===m0)},U0=function(r){var a=r.filter(PA).map(function(i){return i.value}).join(" ");switch(a){case"to bottom right":case"to right bottom":case"left top":case"top left":return[Ne,Ne];case"to top":case"bottom":return ht(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[Ne,Ln];case"to right":case"left":return ht(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[Ln,Ln];case"to bottom":case"top":return ht(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[Ln,Ne];case"to left":case"right":return ht(270)}return 0},ht=function(r){return Math.PI*r/180},Mn={name:"color",parse:function(r,a){if(a.type===18){var i=$C[a.name];if(typeof i>"u")throw new Error('Attempting to parse an unsupported color function "'+a.name+'"');return i(r,a.values)}if(a.type===5){if(a.value.length===3){var l=a.value.substring(0,1),c=a.value.substring(1,2),f=a.value.substring(2,3);return Kn(parseInt(l+l,16),parseInt(c+c,16),parseInt(f+f,16),1)}if(a.value.length===4){var l=a.value.substring(0,1),c=a.value.substring(1,2),f=a.value.substring(2,3),d=a.value.substring(3,4);return Kn(parseInt(l+l,16),parseInt(c+c,16),parseInt(f+f,16),parseInt(d+d,16)/255)}if(a.value.length===6){var l=a.value.substring(0,2),c=a.value.substring(2,4),f=a.value.substring(4,6);return Kn(parseInt(l,16),parseInt(c,16),parseInt(f,16),1)}if(a.value.length===8){var l=a.value.substring(0,2),c=a.value.substring(2,4),f=a.value.substring(4,6),d=a.value.substring(6,8);return Kn(parseInt(l,16),parseInt(c,16),parseInt(f,16),parseInt(d,16)/255)}}if(a.type===20){var h=$t[a.value.toUpperCase()];if(typeof h<"u")return h}return $t.TRANSPARENT}},On=function(r){return(255&r)===0},Ee=function(r){var a=255&r,i=255&r>>8,l=255&r>>16,c=255&r>>24;return a<255?"rgba("+c+","+l+","+i+","+a/255+")":"rgb("+c+","+l+","+i+")"},Kn=function(r,a,i,l){return(r<<24|a<<16|i<<8|Math.round(l*255)<<0)>>>0},ch=function(r,a){if(r.type===17)return r.number;if(r.type===16){var i=a===3?1:255;return a===3?r.number/100*i:Math.round(r.number/100*i)}return 0},uh=function(r,a){var i=a.filter(lr);if(i.length===3){var l=i.map(ch),c=l[0],f=l[1],d=l[2];return Kn(c,f,d,1)}if(i.length===4){var h=i.map(ch),c=h[0],f=h[1],d=h[2],g=h[3];return Kn(c,f,d,g)}return 0};function eu(r,a,i){return i<0&&(i+=1),i>=1&&(i-=1),i<1/6?(a-r)*i*6+r:i<1/2?a:i<2/3?(a-r)*6*(2/3-i)+r:r}var fh=function(r,a){var i=a.filter(lr),l=i[0],c=i[1],f=i[2],d=i[3],h=(l.type===17?ht(l.number):bs.parse(r,l))/(Math.PI*2),g=we(c)?c.number/100:0,w=we(f)?f.number/100:0,Q=typeof d<"u"&&we(d)?ee(d,1):1;if(g===0)return Kn(w*255,w*255,w*255,1);var C=w<=.5?w*(g+1):w+g-w*g,b=w*2-C,_=eu(b,C,h+1/3),j=eu(b,C,h),J=eu(b,C,h-1/3);return Kn(_*255,j*255,J*255,Q)},$C={hsl:fh,hsla:fh,rgb:uh,rgba:uh},pl=function(r,a){return Mn.parse(r,B0.create(a).parseComponentValue())},$t={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},AU={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(r,a){return a.map(function(i){if(PA(i))switch(i.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},eU={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},ys=function(r,a){var i=Mn.parse(r,a[0]),l=a[1];return l&&we(l)?{color:i,stop:l}:{color:i,stop:null}},dh=function(r,a){var i=r[0],l=r[r.length-1];i.stop===null&&(i.stop=Ne),l.stop===null&&(l.stop=Ln);for(var c=[],f=0,d=0;d<r.length;d++){var h=r[d].stop;if(h!==null){var g=ee(h,a);g>f?c.push(g):c.push(f),f=g}else c.push(null)}for(var w=null,d=0;d<c.length;d++){var Q=c[d];if(Q===null)w===null&&(w=d);else if(w!==null){for(var C=d-w,b=c[w-1],_=(Q-b)/(C+1),j=1;j<=C;j++)c[w+j-1]=_*j;w=null}}return r.map(function(J,cA){var iA=J.color;return{color:iA,stop:Math.max(Math.min(1,c[cA]/a),0)}})},tU=function(r,a,i){var l=a/2,c=i/2,f=ee(r[0],a)-l,d=c-ee(r[1],i);return(Math.atan2(d,f)+Math.PI*2)%(Math.PI*2)},nU=function(r,a,i){var l=typeof r=="number"?r:tU(r,a,i),c=Math.abs(a*Math.sin(l))+Math.abs(i*Math.cos(l)),f=a/2,d=i/2,h=c/2,g=Math.sin(l-Math.PI/2)*h,w=Math.cos(l-Math.PI/2)*h;return[c,f-w,f+w,d-g,d+g]},Ut=function(r,a){return Math.sqrt(r*r+a*a)},Bh=function(r,a,i,l,c){var f=[[0,0],[0,a],[r,0],[r,a]];return f.reduce(function(d,h){var g=h[0],w=h[1],Q=Ut(i-g,l-w);return(c?Q<d.optimumDistance:Q>d.optimumDistance)?{optimumCorner:h,optimumDistance:Q}:d},{optimumDistance:c?1/0:-1/0,optimumCorner:null}).optimumCorner},aU=function(r,a,i,l,c){var f=0,d=0;switch(r.size){case 0:r.shape===0?f=d=Math.min(Math.abs(a),Math.abs(a-l),Math.abs(i),Math.abs(i-c)):r.shape===1&&(f=Math.min(Math.abs(a),Math.abs(a-l)),d=Math.min(Math.abs(i),Math.abs(i-c)));break;case 2:if(r.shape===0)f=d=Math.min(Ut(a,i),Ut(a,i-c),Ut(a-l,i),Ut(a-l,i-c));else if(r.shape===1){var h=Math.min(Math.abs(i),Math.abs(i-c))/Math.min(Math.abs(a),Math.abs(a-l)),g=Bh(l,c,a,i,!0),w=g[0],Q=g[1];f=Ut(w-a,(Q-i)/h),d=h*f}break;case 1:r.shape===0?f=d=Math.max(Math.abs(a),Math.abs(a-l),Math.abs(i),Math.abs(i-c)):r.shape===1&&(f=Math.max(Math.abs(a),Math.abs(a-l)),d=Math.max(Math.abs(i),Math.abs(i-c)));break;case 3:if(r.shape===0)f=d=Math.max(Ut(a,i),Ut(a,i-c),Ut(a-l,i),Ut(a-l,i-c));else if(r.shape===1){var h=Math.max(Math.abs(i),Math.abs(i-c))/Math.max(Math.abs(a),Math.abs(a-l)),C=Bh(l,c,a,i,!1),w=C[0],Q=C[1];f=Ut(w-a,(Q-i)/h),d=h*f}break}return Array.isArray(r.size)&&(f=ee(r.size[0],l),d=r.size.length===2?ee(r.size[1],c):f),[f,d]},rU=function(r,a){var i=ht(180),l=[];return Tt(a).forEach(function(c,f){if(f===0){var d=c[0];if(d.type===20&&d.value==="to"){i=U0(c);return}else if(C0(d)){i=bs.parse(r,d);return}}var h=ys(r,c);l.push(h)}),{angle:i,stops:l,type:1}},As=function(r,a){var i=ht(180),l=[];return Tt(a).forEach(function(c,f){if(f===0){var d=c[0];if(d.type===20&&["top","left","right","bottom"].indexOf(d.value)!==-1){i=U0(c);return}else if(C0(d)){i=(bs.parse(r,d)+ht(270))%ht(360);return}}var h=ys(r,c);l.push(h)}),{angle:i,stops:l,type:1}},lU=function(r,a){var i=ht(180),l=[],c=1,f=0,d=3,h=[];return Tt(a).forEach(function(g,w){var Q=g[0];if(w===0){if(PA(Q)&&Q.value==="linear"){c=1;return}else if(PA(Q)&&Q.value==="radial"){c=2;return}}if(Q.type===18){if(Q.name==="from"){var C=Mn.parse(r,Q.values[0]);l.push({stop:Ne,color:C})}else if(Q.name==="to"){var C=Mn.parse(r,Q.values[0]);l.push({stop:Ln,color:C})}else if(Q.name==="color-stop"){var b=Q.values.filter(lr);if(b.length===2){var C=Mn.parse(r,b[1]),_=b[0];ir(_)&&l.push({stop:{type:16,number:_.number*100,flags:_.flags},color:C})}}}}),c===1?{angle:(i+ht(180))%ht(360),stops:l,type:c}:{size:d,shape:f,stops:l,position:h,type:c}},x0="closest-side",v0="farthest-side",b0="closest-corner",y0="farthest-corner",F0="circle",E0="ellipse",H0="cover",S0="contain",iU=function(r,a){var i=0,l=3,c=[],f=[];return Tt(a).forEach(function(d,h){var g=!0;if(h===0){var w=!1;g=d.reduce(function(C,b){if(w)if(PA(b))switch(b.value){case"center":return f.push(Vu),C;case"top":case"left":return f.push(Ne),C;case"right":case"bottom":return f.push(Ln),C}else(we(b)||Rn(b))&&f.push(b);else if(PA(b))switch(b.value){case F0:return i=0,!1;case E0:return i=1,!1;case"at":return w=!0,!1;case x0:return l=0,!1;case H0:case v0:return l=1,!1;case S0:case b0:return l=2,!1;case y0:return l=3,!1}else if(Rn(b)||we(b))return Array.isArray(l)||(l=[]),l.push(b),!1;return C},g)}if(g){var Q=ys(r,d);c.push(Q)}}),{size:l,shape:i,stops:c,position:f,type:2}},es=function(r,a){var i=0,l=3,c=[],f=[];return Tt(a).forEach(function(d,h){var g=!0;if(h===0?g=d.reduce(function(Q,C){if(PA(C))switch(C.value){case"center":return f.push(Vu),!1;case"top":case"left":return f.push(Ne),!1;case"right":case"bottom":return f.push(Ln),!1}else if(we(C)||Rn(C))return f.push(C),!1;return Q},g):h===1&&(g=d.reduce(function(Q,C){if(PA(C))switch(C.value){case F0:return i=0,!1;case E0:return i=1,!1;case S0:case x0:return l=0,!1;case v0:return l=1,!1;case b0:return l=2,!1;case H0:case y0:return l=3,!1}else if(Rn(C)||we(C))return Array.isArray(l)||(l=[]),l.push(C),!1;return Q},g)),g){var w=ys(r,d);c.push(w)}}),{size:l,shape:i,stops:c,position:f,type:2}},sU=function(r){return r.type===1},oU=function(r){return r.type===2},zu={name:"image",parse:function(r,a){if(a.type===22){var i={url:a.value,type:0};return r.cache.addImage(a.value),i}if(a.type===18){var l=D0[a.name];if(typeof l>"u")throw new Error('Attempting to parse an unsupported image function "'+a.name+'"');return l(r,a.values)}throw new Error("Unsupported image type "+a.type)}};function cU(r){return!(r.type===20&&r.value==="none")&&(r.type!==18||!!D0[r.name])}var D0={"linear-gradient":rU,"-moz-linear-gradient":As,"-ms-linear-gradient":As,"-o-linear-gradient":As,"-webkit-linear-gradient":As,"radial-gradient":iU,"-moz-radial-gradient":es,"-ms-radial-gradient":es,"-o-radial-gradient":es,"-webkit-radial-gradient":es,"-webkit-gradient":lU},uU={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(r,a){if(a.length===0)return[];var i=a[0];return i.type===20&&i.value==="none"?[]:a.filter(function(l){return lr(l)&&cU(l)}).map(function(l){return zu.parse(r,l)})}},fU={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(r,a){return a.map(function(i){if(PA(i))switch(i.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},dU={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(r,a){return Tt(a).map(function(i){return i.filter(we)}).map(h0)}},BU={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(r,a){return Tt(a).map(function(i){return i.filter(PA).map(function(l){return l.value}).join(" ")}).map(gU)}},gU=function(r){switch(r){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},rr;(function(r){r.AUTO="auto",r.CONTAIN="contain",r.COVER="cover"})(rr||(rr={}));var hU={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(r,a){return Tt(a).map(function(i){return i.filter(pU)})}},pU=function(r){return PA(r)||we(r)},Fs=function(r){return{name:"border-"+r+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},wU=Fs("top"),QU=Fs("right"),mU=Fs("bottom"),CU=Fs("left"),Es=function(r){return{name:"border-radius-"+r,initialValue:"0 0",prefix:!1,type:1,parse:function(a,i){return h0(i.filter(we))}}},UU=Es("top-left"),xU=Es("top-right"),vU=Es("bottom-right"),bU=Es("bottom-left"),Hs=function(r){return{name:"border-"+r+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(a,i){switch(i){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},yU=Hs("top"),FU=Hs("right"),EU=Hs("bottom"),HU=Hs("left"),Ss=function(r){return{name:"border-"+r+"-width",initialValue:"0",type:0,prefix:!1,parse:function(a,i){return Fl(i)?i.number:0}}},SU=Ss("top"),DU=Ss("right"),TU=Ss("bottom"),IU=Ss("left"),NU={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},LU={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(r,a){switch(a){case"rtl":return 1;case"ltr":default:return 0}}},KU={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(r,a){return a.filter(PA).reduce(function(i,l){return i|MU(l.value)},0)}},MU=function(r){switch(r){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},OU={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(r,a){switch(a){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},RU={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(r,a){return a.type===20&&a.value==="normal"?0:a.type===17||a.type===15?a.number:0}},Bs;(function(r){r.NORMAL="normal",r.STRICT="strict"})(Bs||(Bs={}));var jU={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(r,a){switch(a){case"strict":return Bs.STRICT;case"normal":default:return Bs.NORMAL}}},GU={name:"line-height",initialValue:"normal",prefix:!1,type:4},gh=function(r,a){return PA(r)&&r.value==="normal"?1.2*a:r.type===17?a*r.number:we(r)?ee(r,a):a},kU={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(r,a){return a.type===20&&a.value==="none"?null:zu.parse(r,a)}},_U={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(r,a){switch(a){case"inside":return 0;case"outside":default:return 1}}},Du={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(r,a){switch(a){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},Ds=function(r){return{name:"margin-"+r,initialValue:"0",prefix:!1,type:4}},VU=Ds("top"),zU=Ds("right"),XU=Ds("bottom"),YU=Ds("left"),JU={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(r,a){return a.filter(PA).map(function(i){switch(i.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},ZU={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(r,a){switch(a){case"break-word":return"break-word";case"normal":default:return"normal"}}},Ts=function(r){return{name:"padding-"+r,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},qU=Ts("top"),WU=Ts("right"),PU=Ts("bottom"),$U=Ts("left"),Ax={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(r,a){switch(a){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},ex={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(r,a){switch(a){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},tx={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(r,a){return a.length===1&&Su(a[0],"none")?[]:Tt(a).map(function(i){for(var l={color:$t.TRANSPARENT,offsetX:Ne,offsetY:Ne,blur:Ne},c=0,f=0;f<i.length;f++){var d=i[f];Rn(d)?(c===0?l.offsetX=d:c===1?l.offsetY=d:l.blur=d,c++):l.color=Mn.parse(r,d)}return l})}},nx={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(r,a){switch(a){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},ax={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(r,a){if(a.type===20&&a.value==="none")return null;if(a.type===18){var i=ix[a.name];if(typeof i>"u")throw new Error('Attempting to parse an unsupported transform function "'+a.name+'"');return i(a.values)}return null}},rx=function(r){var a=r.filter(function(i){return i.type===17}).map(function(i){return i.number});return a.length===6?a:null},lx=function(r){var a=r.filter(function(g){return g.type===17}).map(function(g){return g.number}),i=a[0],l=a[1];a[2],a[3];var c=a[4],f=a[5];a[6],a[7],a[8],a[9],a[10],a[11];var d=a[12],h=a[13];return a[14],a[15],a.length===16?[i,l,c,f,d,h]:null},ix={matrix:rx,matrix3d:lx},hh={type:16,number:50,flags:yl},sx=[hh,hh],ox={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(r,a){var i=a.filter(we);return i.length!==2?sx:[i[0],i[1]]}},cx={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(r,a){switch(a){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},wl;(function(r){r.NORMAL="normal",r.BREAK_ALL="break-all",r.KEEP_ALL="keep-all"})(wl||(wl={}));var ux={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(r,a){switch(a){case"break-all":return wl.BREAK_ALL;case"keep-all":return wl.KEEP_ALL;case"normal":default:return wl.NORMAL}}},fx={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(r,a){if(a.type===20)return{auto:!0,order:0};if(ir(a))return{auto:!1,order:a.number};throw new Error("Invalid z-index number parsed")}},T0={name:"time",parse:function(r,a){if(a.type===15)switch(a.unit.toLowerCase()){case"s":return 1e3*a.number;case"ms":return a.number}throw new Error("Unsupported time type")}},dx={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(r,a){return ir(a)?a.number:1}},Bx={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},gx={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(r,a){return a.filter(PA).map(function(i){switch(i.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(i){return i!==0})}},hx={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(r,a){var i=[],l=[];return a.forEach(function(c){switch(c.type){case 20:case 0:i.push(c.value);break;case 17:i.push(c.number.toString());break;case 4:l.push(i.join(" ")),i.length=0;break}}),i.length&&l.push(i.join(" ")),l.map(function(c){return c.indexOf(" ")===-1?c:"'"+c+"'"})}},px={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},wx={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(r,a){if(ir(a))return a.number;if(PA(a))switch(a.value){case"bold":return 700;case"normal":default:return 400}return 400}},Qx={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(r,a){return a.filter(PA).map(function(i){return i.value})}},mx={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(r,a){switch(a){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},Ue=function(r,a){return(r&a)!==0},Cx={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(r,a){if(a.length===0)return[];var i=a[0];return i.type===20&&i.value==="none"?[]:a}},Ux={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(r,a){if(a.length===0)return null;var i=a[0];if(i.type===20&&i.value==="none")return null;for(var l=[],c=a.filter(g0),f=0;f<c.length;f++){var d=c[f],h=c[f+1];if(d.type===20){var g=h&&ir(h)?h.number:1;l.push({counter:d.value,increment:g})}}return l}},xx={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(r,a){if(a.length===0)return[];for(var i=[],l=a.filter(g0),c=0;c<l.length;c++){var f=l[c],d=l[c+1];if(PA(f)&&f.value!=="none"){var h=d&&ir(d)?d.number:0;i.push({counter:f.value,reset:h})}}return i}},vx={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(r,a){return a.filter(Fl).map(function(i){return T0.parse(r,i)})}},bx={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(r,a){if(a.length===0)return null;var i=a[0];if(i.type===20&&i.value==="none")return null;var l=[],c=a.filter(WC);if(c.length%2!==0)return null;for(var f=0;f<c.length;f+=2){var d=c[f].value,h=c[f+1].value;l.push({open:d,close:h})}return l}},ph=function(r,a,i){if(!r)return"";var l=r[Math.min(a,r.length-1)];return l?i?l.open:l.close:""},yx={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(r,a){return a.length===1&&Su(a[0],"none")?[]:Tt(a).map(function(i){for(var l={color:255,offsetX:Ne,offsetY:Ne,blur:Ne,spread:Ne,inset:!1},c=0,f=0;f<i.length;f++){var d=i[f];Su(d,"inset")?l.inset=!0:Rn(d)?(c===0?l.offsetX=d:c===1?l.offsetY=d:c===2?l.blur=d:l.spread=d,c++):l.color=Mn.parse(r,d)}return l})}},Fx={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(r,a){var i=[0,1,2],l=[];return a.filter(PA).forEach(function(c){switch(c.value){case"stroke":l.push(1);break;case"fill":l.push(0);break;case"markers":l.push(2);break}}),i.forEach(function(c){l.indexOf(c)===-1&&l.push(c)}),l}},Ex={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},Hx={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(r,a){return Fl(a)?a.number:0}},Sx=function(){function r(a,i){var l,c;this.animationDuration=mA(a,vx,i.animationDuration),this.backgroundClip=mA(a,AU,i.backgroundClip),this.backgroundColor=mA(a,eU,i.backgroundColor),this.backgroundImage=mA(a,uU,i.backgroundImage),this.backgroundOrigin=mA(a,fU,i.backgroundOrigin),this.backgroundPosition=mA(a,dU,i.backgroundPosition),this.backgroundRepeat=mA(a,BU,i.backgroundRepeat),this.backgroundSize=mA(a,hU,i.backgroundSize),this.borderTopColor=mA(a,wU,i.borderTopColor),this.borderRightColor=mA(a,QU,i.borderRightColor),this.borderBottomColor=mA(a,mU,i.borderBottomColor),this.borderLeftColor=mA(a,CU,i.borderLeftColor),this.borderTopLeftRadius=mA(a,UU,i.borderTopLeftRadius),this.borderTopRightRadius=mA(a,xU,i.borderTopRightRadius),this.borderBottomRightRadius=mA(a,vU,i.borderBottomRightRadius),this.borderBottomLeftRadius=mA(a,bU,i.borderBottomLeftRadius),this.borderTopStyle=mA(a,yU,i.borderTopStyle),this.borderRightStyle=mA(a,FU,i.borderRightStyle),this.borderBottomStyle=mA(a,EU,i.borderBottomStyle),this.borderLeftStyle=mA(a,HU,i.borderLeftStyle),this.borderTopWidth=mA(a,SU,i.borderTopWidth),this.borderRightWidth=mA(a,DU,i.borderRightWidth),this.borderBottomWidth=mA(a,TU,i.borderBottomWidth),this.borderLeftWidth=mA(a,IU,i.borderLeftWidth),this.boxShadow=mA(a,yx,i.boxShadow),this.color=mA(a,NU,i.color),this.direction=mA(a,LU,i.direction),this.display=mA(a,KU,i.display),this.float=mA(a,OU,i.cssFloat),this.fontFamily=mA(a,hx,i.fontFamily),this.fontSize=mA(a,px,i.fontSize),this.fontStyle=mA(a,mx,i.fontStyle),this.fontVariant=mA(a,Qx,i.fontVariant),this.fontWeight=mA(a,wx,i.fontWeight),this.letterSpacing=mA(a,RU,i.letterSpacing),this.lineBreak=mA(a,jU,i.lineBreak),this.lineHeight=mA(a,GU,i.lineHeight),this.listStyleImage=mA(a,kU,i.listStyleImage),this.listStylePosition=mA(a,_U,i.listStylePosition),this.listStyleType=mA(a,Du,i.listStyleType),this.marginTop=mA(a,VU,i.marginTop),this.marginRight=mA(a,zU,i.marginRight),this.marginBottom=mA(a,XU,i.marginBottom),this.marginLeft=mA(a,YU,i.marginLeft),this.opacity=mA(a,dx,i.opacity);var f=mA(a,JU,i.overflow);this.overflowX=f[0],this.overflowY=f[f.length>1?1:0],this.overflowWrap=mA(a,ZU,i.overflowWrap),this.paddingTop=mA(a,qU,i.paddingTop),this.paddingRight=mA(a,WU,i.paddingRight),this.paddingBottom=mA(a,PU,i.paddingBottom),this.paddingLeft=mA(a,$U,i.paddingLeft),this.paintOrder=mA(a,Fx,i.paintOrder),this.position=mA(a,ex,i.position),this.textAlign=mA(a,Ax,i.textAlign),this.textDecorationColor=mA(a,Bx,(l=i.textDecorationColor)!==null&&l!==void 0?l:i.color),this.textDecorationLine=mA(a,gx,(c=i.textDecorationLine)!==null&&c!==void 0?c:i.textDecoration),this.textShadow=mA(a,tx,i.textShadow),this.textTransform=mA(a,nx,i.textTransform),this.transform=mA(a,ax,i.transform),this.transformOrigin=mA(a,ox,i.transformOrigin),this.visibility=mA(a,cx,i.visibility),this.webkitTextStrokeColor=mA(a,Ex,i.webkitTextStrokeColor),this.webkitTextStrokeWidth=mA(a,Hx,i.webkitTextStrokeWidth),this.wordBreak=mA(a,ux,i.wordBreak),this.zIndex=mA(a,fx,i.zIndex)}return r.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},r.prototype.isTransparent=function(){return On(this.backgroundColor)},r.prototype.isTransformed=function(){return this.transform!==null},r.prototype.isPositioned=function(){return this.position!==0},r.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},r.prototype.isFloating=function(){return this.float!==0},r.prototype.isInlineLevel=function(){return Ue(this.display,4)||Ue(this.display,33554432)||Ue(this.display,268435456)||Ue(this.display,536870912)||Ue(this.display,67108864)||Ue(this.display,134217728)},r}(),Dx=function(){function r(a,i){this.content=mA(a,Cx,i.content),this.quotes=mA(a,bx,i.quotes)}return r}(),wh=function(){function r(a,i){this.counterIncrement=mA(a,Ux,i.counterIncrement),this.counterReset=mA(a,xx,i.counterReset)}return r}(),mA=function(r,a,i){var l=new d0,c=i!==null&&typeof i<"u"?i.toString():a.initialValue;l.write(c);var f=new B0(l.read());switch(a.type){case 2:var d=f.parseComponentValue();return a.parse(r,PA(d)?d.value:a.initialValue);case 0:return a.parse(r,f.parseComponentValue());case 1:return a.parse(r,f.parseComponentValues());case 4:return f.parseComponentValue();case 3:switch(a.format){case"angle":return bs.parse(r,f.parseComponentValue());case"color":return Mn.parse(r,f.parseComponentValue());case"image":return zu.parse(r,f.parseComponentValue());case"length":var h=f.parseComponentValue();return Rn(h)?h:Ne;case"length-percentage":var g=f.parseComponentValue();return we(g)?g:Ne;case"time":return T0.parse(r,f.parseComponentValue())}break}},Tx="data-html2canvas-debug",Ix=function(r){var a=r.getAttribute(Tx);switch(a){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Tu=function(r,a){var i=Ix(r);return i===1||a===i},It=function(){function r(a,i){if(this.context=a,this.textNodes=[],this.elements=[],this.flags=0,Tu(i,3))debugger;this.styles=new Sx(a,window.getComputedStyle(i,null)),Lu(i)&&(this.styles.animationDuration.some(function(l){return l>0})&&(i.style.animationDuration="0s"),this.styles.transform!==null&&(i.style.transform="none")),this.bounds=xs(this.context,i),Tu(i,4)&&(this.flags|=16)}return r}(),Nx="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",Qh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Bl=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ts=0;ts<Qh.length;ts++)Bl[Qh.charCodeAt(ts)]=ts;var Lx=function(r){var a=r.length*.75,i=r.length,l,c=0,f,d,h,g;r[r.length-1]==="="&&(a--,r[r.length-2]==="="&&a--);var w=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(a):new Array(a),Q=Array.isArray(w)?w:new Uint8Array(w);for(l=0;l<i;l+=4)f=Bl[r.charCodeAt(l)],d=Bl[r.charCodeAt(l+1)],h=Bl[r.charCodeAt(l+2)],g=Bl[r.charCodeAt(l+3)],Q[c++]=f<<2|d>>4,Q[c++]=(d&15)<<4|h>>2,Q[c++]=(h&3)<<6|g&63;return w},Kx=function(r){for(var a=r.length,i=[],l=0;l<a;l+=2)i.push(r[l+1]<<8|r[l]);return i},Mx=function(r){for(var a=r.length,i=[],l=0;l<a;l+=4)i.push(r[l+3]<<24|r[l+2]<<16|r[l+1]<<8|r[l]);return i},oa=5,Xu=11,tu=2,Ox=Xu-oa,I0=65536>>oa,Rx=1<<oa,nu=Rx-1,jx=1024>>oa,Gx=I0+jx,kx=Gx,_x=32,Vx=kx+_x,zx=65536>>Xu,Xx=1<<Ox,Yx=Xx-1,mh=function(r,a,i){return r.slice?r.slice(a,i):new Uint16Array(Array.prototype.slice.call(r,a,i))},Jx=function(r,a,i){return r.slice?r.slice(a,i):new Uint32Array(Array.prototype.slice.call(r,a,i))},Zx=function(r,a){var i=Lx(r),l=Array.isArray(i)?Mx(i):new Uint32Array(i),c=Array.isArray(i)?Kx(i):new Uint16Array(i),f=24,d=mh(c,f/2,l[4]/2),h=l[5]===2?mh(c,(f+l[4])/2):Jx(l,Math.ceil((f+l[4])/4));return new qx(l[0],l[1],l[2],l[3],d,h)},qx=function(){function r(a,i,l,c,f,d){this.initialValue=a,this.errorValue=i,this.highStart=l,this.highValueIndex=c,this.index=f,this.data=d}return r.prototype.get=function(a){var i;if(a>=0){if(a<55296||a>56319&&a<=65535)return i=this.index[a>>oa],i=(i<<tu)+(a&nu),this.data[i];if(a<=65535)return i=this.index[I0+(a-55296>>oa)],i=(i<<tu)+(a&nu),this.data[i];if(a<this.highStart)return i=Vx-zx+(a>>Xu),i=this.index[i],i+=a>>oa&Yx,i=this.index[i],i=(i<<tu)+(a&nu),this.data[i];if(a<=1114111)return this.data[this.highValueIndex]}return this.errorValue},r}(),Ch="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Wx=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ns=0;ns<Ch.length;ns++)Wx[Ch.charCodeAt(ns)]=ns;var Px=1,au=2,ru=3,Uh=4,xh=5,$x=7,vh=8,lu=9,iu=10,bh=11,yh=12,Fh=13,Eh=14,su=15,Av=function(r){for(var a=[],i=0,l=r.length;i<l;){var c=r.charCodeAt(i++);if(c>=55296&&c<=56319&&i<l){var f=r.charCodeAt(i++);(f&64512)===56320?a.push(((c&1023)<<10)+(f&1023)+65536):(a.push(c),i--)}else a.push(c)}return a},ev=function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];if(String.fromCodePoint)return String.fromCodePoint.apply(String,r);var i=r.length;if(!i)return"";for(var l=[],c=-1,f="";++c<i;){var d=r[c];d<=65535?l.push(d):(d-=65536,l.push((d>>10)+55296,d%1024+56320)),(c+1===i||l.length>16384)&&(f+=String.fromCharCode.apply(String,l),l.length=0)}return f},tv=Zx(Nx),Bt="×",ou="÷",nv=function(r){return tv.get(r)},av=function(r,a,i){var l=i-2,c=a[l],f=a[i-1],d=a[i];if(f===au&&d===ru)return Bt;if(f===au||f===ru||f===Uh||d===au||d===ru||d===Uh)return ou;if(f===vh&&[vh,lu,bh,yh].indexOf(d)!==-1||(f===bh||f===lu)&&(d===lu||d===iu)||(f===yh||f===iu)&&d===iu||d===Fh||d===xh||d===$x||f===Px)return Bt;if(f===Fh&&d===Eh){for(;c===xh;)c=a[--l];if(c===Eh)return Bt}if(f===su&&d===su){for(var h=0;c===su;)h++,c=a[--l];if(h%2===0)return Bt}return ou},rv=function(r){var a=Av(r),i=a.length,l=0,c=0,f=a.map(nv);return{next:function(){if(l>=i)return{done:!0,value:null};for(var d=Bt;l<i&&(d=av(a,f,++l))===Bt;);if(d!==Bt||l===i){var h=ev.apply(null,a.slice(c,l));return c=l,{value:h,done:!1}}return{done:!0,value:null}}}},lv=function(r){for(var a=rv(r),i=[],l;!(l=a.next()).done;)l.value&&i.push(l.value.slice());return i},iv=function(r){var a=123;if(r.createRange){var i=r.createRange();if(i.getBoundingClientRect){var l=r.createElement("boundtest");l.style.height=a+"px",l.style.display="block",r.body.appendChild(l),i.selectNode(l);var c=i.getBoundingClientRect(),f=Math.round(c.height);if(r.body.removeChild(l),f===a)return!0}}return!1},sv=function(r){var a=r.createElement("boundtest");a.style.width="50px",a.style.display="block",a.style.fontSize="12px",a.style.letterSpacing="0px",a.style.wordSpacing="0px",r.body.appendChild(a);var i=r.createRange();a.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var l=a.firstChild,c=vs(l.data).map(function(g){return Be(g)}),f=0,d={},h=c.every(function(g,w){i.setStart(l,f),i.setEnd(l,f+g.length);var Q=i.getBoundingClientRect();f+=g.length;var C=Q.x>d.x||Q.y>d.y;return d=Q,w===0?!0:C});return r.body.removeChild(a),h},ov=function(){return typeof new Image().crossOrigin<"u"},cv=function(){return typeof new XMLHttpRequest().responseType=="string"},uv=function(r){var a=new Image,i=r.createElement("canvas"),l=i.getContext("2d");if(!l)return!1;a.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{l.drawImage(a,0,0),i.toDataURL()}catch{return!1}return!0},Hh=function(r){return r[0]===0&&r[1]===255&&r[2]===0&&r[3]===255},fv=function(r){var a=r.createElement("canvas"),i=100;a.width=i,a.height=i;var l=a.getContext("2d");if(!l)return Promise.reject(!1);l.fillStyle="rgb(0, 255, 0)",l.fillRect(0,0,i,i);var c=new Image,f=a.toDataURL();c.src=f;var d=Iu(i,i,0,0,c);return l.fillStyle="red",l.fillRect(0,0,i,i),Sh(d).then(function(h){l.drawImage(h,0,0);var g=l.getImageData(0,0,i,i).data;l.fillStyle="red",l.fillRect(0,0,i,i);var w=r.createElement("div");return w.style.backgroundImage="url("+f+")",w.style.height=i+"px",Hh(g)?Sh(Iu(i,i,0,0,w)):Promise.reject(!1)}).then(function(h){return l.drawImage(h,0,0),Hh(l.getImageData(0,0,i,i).data)}).catch(function(){return!1})},Iu=function(r,a,i,l,c){var f="http://www.w3.org/2000/svg",d=document.createElementNS(f,"svg"),h=document.createElementNS(f,"foreignObject");return d.setAttributeNS(null,"width",r.toString()),d.setAttributeNS(null,"height",a.toString()),h.setAttributeNS(null,"width","100%"),h.setAttributeNS(null,"height","100%"),h.setAttributeNS(null,"x",i.toString()),h.setAttributeNS(null,"y",l.toString()),h.setAttributeNS(null,"externalResourcesRequired","true"),d.appendChild(h),h.appendChild(c),d},Sh=function(r){return new Promise(function(a,i){var l=new Image;l.onload=function(){return a(l)},l.onerror=i,l.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(r))})},Ie={get SUPPORT_RANGE_BOUNDS(){var r=iv(document);return Object.defineProperty(Ie,"SUPPORT_RANGE_BOUNDS",{value:r}),r},get SUPPORT_WORD_BREAKING(){var r=Ie.SUPPORT_RANGE_BOUNDS&&sv(document);return Object.defineProperty(Ie,"SUPPORT_WORD_BREAKING",{value:r}),r},get SUPPORT_SVG_DRAWING(){var r=uv(document);return Object.defineProperty(Ie,"SUPPORT_SVG_DRAWING",{value:r}),r},get SUPPORT_FOREIGNOBJECT_DRAWING(){var r=typeof Array.from=="function"&&typeof window.fetch=="function"?fv(document):Promise.resolve(!1);return Object.defineProperty(Ie,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:r}),r},get SUPPORT_CORS_IMAGES(){var r=ov();return Object.defineProperty(Ie,"SUPPORT_CORS_IMAGES",{value:r}),r},get SUPPORT_RESPONSE_TYPE(){var r=cv();return Object.defineProperty(Ie,"SUPPORT_RESPONSE_TYPE",{value:r}),r},get SUPPORT_CORS_XHR(){var r="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Ie,"SUPPORT_CORS_XHR",{value:r}),r},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var r=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(Ie,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:r}),r}},Ql=function(){function r(a,i){this.text=a,this.bounds=i}return r}(),dv=function(r,a,i,l){var c=hv(a,i),f=[],d=0;return c.forEach(function(h){if(i.textDecorationLine.length||h.trim().length>0)if(Ie.SUPPORT_RANGE_BOUNDS){var g=Dh(l,d,h.length).getClientRects();if(g.length>1){var w=Yu(h),Q=0;w.forEach(function(b){f.push(new Ql(b,en.fromDOMRectList(r,Dh(l,Q+d,b.length).getClientRects()))),Q+=b.length})}else f.push(new Ql(h,en.fromDOMRectList(r,g)))}else{var C=l.splitText(h.length);f.push(new Ql(h,Bv(r,l))),l=C}else Ie.SUPPORT_RANGE_BOUNDS||(l=l.splitText(h.length));d+=h.length}),f},Bv=function(r,a){var i=a.ownerDocument;if(i){var l=i.createElement("html2canvaswrapper");l.appendChild(a.cloneNode(!0));var c=a.parentNode;if(c){c.replaceChild(l,a);var f=xs(r,l);return l.firstChild&&c.replaceChild(l.firstChild,l),f}}return en.EMPTY},Dh=function(r,a,i){var l=r.ownerDocument;if(!l)throw new Error("Node has no owner document");var c=l.createRange();return c.setStart(r,a),c.setEnd(r,a+i),c},Yu=function(r){if(Ie.SUPPORT_NATIVE_TEXT_SEGMENTATION){var a=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(a.segment(r)).map(function(i){return i.segment})}return lv(r)},gv=function(r,a){if(Ie.SUPPORT_NATIVE_TEXT_SEGMENTATION){var i=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(i.segment(r)).map(function(l){return l.segment})}return wv(r,a)},hv=function(r,a){return a.letterSpacing!==0?Yu(r):gv(r,a)},pv=[32,160,4961,65792,65793,4153,4241],wv=function(r,a){for(var i=zm(r,{lineBreak:a.lineBreak,wordBreak:a.overflowWrap==="break-word"?"break-word":a.wordBreak}),l=[],c,f=function(){if(c.value){var d=c.value.slice(),h=vs(d),g="";h.forEach(function(w){pv.indexOf(w)===-1?g+=Be(w):(g.length&&l.push(g),l.push(Be(w)),g="")}),g.length&&l.push(g)}};!(c=i.next()).done;)f();return l},Qv=function(){function r(a,i,l){this.text=mv(i.data,l.textTransform),this.textBounds=dv(a,this.text,l,i)}return r}(),mv=function(r,a){switch(a){case 1:return r.toLowerCase();case 3:return r.replace(Cv,Uv);case 2:return r.toUpperCase();default:return r}},Cv=/(^|\s|:|-|\(|\))([a-z])/g,Uv=function(r,a,i){return r.length>0?a+i.toUpperCase():r},N0=function(r){xt(a,r);function a(i,l){var c=r.call(this,i,l)||this;return c.src=l.currentSrc||l.src,c.intrinsicWidth=l.naturalWidth,c.intrinsicHeight=l.naturalHeight,c.context.cache.addImage(c.src),c}return a}(It),L0=function(r){xt(a,r);function a(i,l){var c=r.call(this,i,l)||this;return c.canvas=l,c.intrinsicWidth=l.width,c.intrinsicHeight=l.height,c}return a}(It),K0=function(r){xt(a,r);function a(i,l){var c=r.call(this,i,l)||this,f=new XMLSerializer,d=xs(i,l);return l.setAttribute("width",d.width+"px"),l.setAttribute("height",d.height+"px"),c.svg="data:image/svg+xml,"+encodeURIComponent(f.serializeToString(l)),c.intrinsicWidth=l.width.baseVal.value,c.intrinsicHeight=l.height.baseVal.value,c.context.cache.addImage(c.svg),c}return a}(It),M0=function(r){xt(a,r);function a(i,l){var c=r.call(this,i,l)||this;return c.value=l.value,c}return a}(It),Nu=function(r){xt(a,r);function a(i,l){var c=r.call(this,i,l)||this;return c.start=l.start,c.reversed=typeof l.reversed=="boolean"&&l.reversed===!0,c}return a}(It),xv=[{type:15,flags:0,unit:"px",number:3}],vv=[{type:16,flags:0,number:50}],bv=function(r){return r.width>r.height?new en(r.left+(r.width-r.height)/2,r.top,r.height,r.height):r.width<r.height?new en(r.left,r.top+(r.height-r.width)/2,r.width,r.width):r},yv=function(r){var a=r.type===Fv?new Array(r.value.length+1).join("•"):r.value;return a.length===0?r.placeholder||"":a},gs="checkbox",hs="radio",Fv="password",Th=707406591,Ju=function(r){xt(a,r);function a(i,l){var c=r.call(this,i,l)||this;switch(c.type=l.type.toLowerCase(),c.checked=l.checked,c.value=yv(l),(c.type===gs||c.type===hs)&&(c.styles.backgroundColor=3739148031,c.styles.borderTopColor=c.styles.borderRightColor=c.styles.borderBottomColor=c.styles.borderLeftColor=2779096575,c.styles.borderTopWidth=c.styles.borderRightWidth=c.styles.borderBottomWidth=c.styles.borderLeftWidth=1,c.styles.borderTopStyle=c.styles.borderRightStyle=c.styles.borderBottomStyle=c.styles.borderLeftStyle=1,c.styles.backgroundClip=[0],c.styles.backgroundOrigin=[0],c.bounds=bv(c.bounds)),c.type){case gs:c.styles.borderTopRightRadius=c.styles.borderTopLeftRadius=c.styles.borderBottomRightRadius=c.styles.borderBottomLeftRadius=xv;break;case hs:c.styles.borderTopRightRadius=c.styles.borderTopLeftRadius=c.styles.borderBottomRightRadius=c.styles.borderBottomLeftRadius=vv;break}return c}return a}(It),O0=function(r){xt(a,r);function a(i,l){var c=r.call(this,i,l)||this,f=l.options[l.selectedIndex||0];return c.value=f&&f.text||"",c}return a}(It),R0=function(r){xt(a,r);function a(i,l){var c=r.call(this,i,l)||this;return c.value=l.value,c}return a}(It),j0=function(r){xt(a,r);function a(i,l){var c=r.call(this,i,l)||this;c.src=l.src,c.width=parseInt(l.width,10)||0,c.height=parseInt(l.height,10)||0,c.backgroundColor=c.styles.backgroundColor;try{if(l.contentWindow&&l.contentWindow.document&&l.contentWindow.document.documentElement){c.tree=k0(i,l.contentWindow.document.documentElement);var f=l.contentWindow.document.documentElement?pl(i,getComputedStyle(l.contentWindow.document.documentElement).backgroundColor):$t.TRANSPARENT,d=l.contentWindow.document.body?pl(i,getComputedStyle(l.contentWindow.document.body).backgroundColor):$t.TRANSPARENT;c.backgroundColor=On(f)?On(d)?c.styles.backgroundColor:d:f}}catch{}return c}return a}(It),Ev=["OL","UL","MENU"],cs=function(r,a,i,l){for(var c=a.firstChild,f=void 0;c;c=f)if(f=c.nextSibling,_0(c)&&c.data.trim().length>0)i.textNodes.push(new Qv(r,c,i.styles));else if(ar(c))if(Y0(c)&&c.assignedNodes)c.assignedNodes().forEach(function(h){return cs(r,h,i,l)});else{var d=G0(r,c);d.styles.isVisible()&&(Hv(c,d,l)?d.flags|=4:Sv(d.styles)&&(d.flags|=2),Ev.indexOf(c.tagName)!==-1&&(d.flags|=8),i.elements.push(d),c.slot,c.shadowRoot?cs(r,c.shadowRoot,d,l):!ps(c)&&!V0(c)&&!ws(c)&&cs(r,c,d,l))}},G0=function(r,a){return Ku(a)?new N0(r,a):z0(a)?new L0(r,a):V0(a)?new K0(r,a):Dv(a)?new M0(r,a):Tv(a)?new Nu(r,a):Iv(a)?new Ju(r,a):ws(a)?new O0(r,a):ps(a)?new R0(r,a):X0(a)?new j0(r,a):new It(r,a)},k0=function(r,a){var i=G0(r,a);return i.flags|=4,cs(r,a,i,i),i},Hv=function(r,a,i){return a.styles.isPositionedWithZIndex()||a.styles.opacity<1||a.styles.isTransformed()||Zu(r)&&i.styles.isTransparent()},Sv=function(r){return r.isPositioned()||r.isFloating()},_0=function(r){return r.nodeType===Node.TEXT_NODE},ar=function(r){return r.nodeType===Node.ELEMENT_NODE},Lu=function(r){return ar(r)&&typeof r.style<"u"&&!us(r)},us=function(r){return typeof r.className=="object"},Dv=function(r){return r.tagName==="LI"},Tv=function(r){return r.tagName==="OL"},Iv=function(r){return r.tagName==="INPUT"},Nv=function(r){return r.tagName==="HTML"},V0=function(r){return r.tagName==="svg"},Zu=function(r){return r.tagName==="BODY"},z0=function(r){return r.tagName==="CANVAS"},Ih=function(r){return r.tagName==="VIDEO"},Ku=function(r){return r.tagName==="IMG"},X0=function(r){return r.tagName==="IFRAME"},Nh=function(r){return r.tagName==="STYLE"},Lv=function(r){return r.tagName==="SCRIPT"},ps=function(r){return r.tagName==="TEXTAREA"},ws=function(r){return r.tagName==="SELECT"},Y0=function(r){return r.tagName==="SLOT"},Lh=function(r){return r.tagName.indexOf("-")>0},Kv=function(){function r(){this.counters={}}return r.prototype.getCounterValue=function(a){var i=this.counters[a];return i&&i.length?i[i.length-1]:1},r.prototype.getCounterValues=function(a){var i=this.counters[a];return i||[]},r.prototype.pop=function(a){var i=this;a.forEach(function(l){return i.counters[l].pop()})},r.prototype.parse=function(a){var i=this,l=a.counterIncrement,c=a.counterReset,f=!0;l!==null&&l.forEach(function(h){var g=i.counters[h.counter];g&&h.increment!==0&&(f=!1,g.length||g.push(1),g[Math.max(0,g.length-1)]+=h.increment)});var d=[];return f&&c.forEach(function(h){var g=i.counters[h.counter];d.push(h.counter),g||(g=i.counters[h.counter]=[]),g.push(h.reset)}),d},r}(),Kh={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Mh={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},Mv={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},Ov={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},$a=function(r,a,i,l,c,f){return r<a||r>i?xl(r,c,f.length>0):l.integers.reduce(function(d,h,g){for(;r>=h;)r-=h,d+=l.values[g];return d},"")+f},J0=function(r,a,i,l){var c="";do i||r--,c=l(r)+c,r/=a;while(r*a>=a);return c},de=function(r,a,i,l,c){var f=i-a+1;return(r<0?"-":"")+(J0(Math.abs(r),f,l,function(d){return Be(Math.floor(d%f)+a)})+c)},ra=function(r,a,i){i===void 0&&(i=". ");var l=a.length;return J0(Math.abs(r),l,!1,function(c){return a[Math.floor(c%l)]})+i},tr=1,Dn=2,Tn=4,gl=8,Pt=function(r,a,i,l,c,f){if(r<-9999||r>9999)return xl(r,4,c.length>0);var d=Math.abs(r),h=c;if(d===0)return a[0]+h;for(var g=0;d>0&&g<=4;g++){var w=d%10;w===0&&Ue(f,tr)&&h!==""?h=a[w]+h:w>1||w===1&&g===0||w===1&&g===1&&Ue(f,Dn)||w===1&&g===1&&Ue(f,Tn)&&r>100||w===1&&g>1&&Ue(f,gl)?h=a[w]+(g>0?i[g-1]:"")+h:w===1&&g>0&&(h=i[g-1]+h),d=Math.floor(d/10)}return(r<0?l:"")+h},Oh="十百千萬",Rh="拾佰仟萬",jh="マイナス",cu="마이너스",xl=function(r,a,i){var l=i?". ":"",c=i?"、":"",f=i?", ":"",d=i?" ":"";switch(a){case 0:return"•"+d;case 1:return"◦"+d;case 2:return"◾"+d;case 5:var h=de(r,48,57,!0,l);return h.length<4?"0"+h:h;case 4:return ra(r,"〇一二三四五六七八九",c);case 6:return $a(r,1,3999,Kh,3,l).toLowerCase();case 7:return $a(r,1,3999,Kh,3,l);case 8:return de(r,945,969,!1,l);case 9:return de(r,97,122,!1,l);case 10:return de(r,65,90,!1,l);case 11:return de(r,1632,1641,!0,l);case 12:case 49:return $a(r,1,9999,Mh,3,l);case 35:return $a(r,1,9999,Mh,3,l).toLowerCase();case 13:return de(r,2534,2543,!0,l);case 14:case 30:return de(r,6112,6121,!0,l);case 15:return ra(r,"子丑寅卯辰巳午未申酉戌亥",c);case 16:return ra(r,"甲乙丙丁戊己庚辛壬癸",c);case 17:case 48:return Pt(r,"零一二三四五六七八九",Oh,"負",c,Dn|Tn|gl);case 47:return Pt(r,"零壹貳參肆伍陸柒捌玖",Rh,"負",c,tr|Dn|Tn|gl);case 42:return Pt(r,"零一二三四五六七八九",Oh,"负",c,Dn|Tn|gl);case 41:return Pt(r,"零壹贰叁肆伍陆柒捌玖",Rh,"负",c,tr|Dn|Tn|gl);case 26:return Pt(r,"〇一二三四五六七八九","十百千万",jh,c,0);case 25:return Pt(r,"零壱弐参四伍六七八九","拾百千万",jh,c,tr|Dn|Tn);case 31:return Pt(r,"영일이삼사오육칠팔구","십백천만",cu,f,tr|Dn|Tn);case 33:return Pt(r,"零一二三四五六七八九","十百千萬",cu,f,0);case 32:return Pt(r,"零壹貳參四五六七八九","拾百千",cu,f,tr|Dn|Tn);case 18:return de(r,2406,2415,!0,l);case 20:return $a(r,1,19999,Ov,3,l);case 21:return de(r,2790,2799,!0,l);case 22:return de(r,2662,2671,!0,l);case 22:return $a(r,1,10999,Mv,3,l);case 23:return ra(r,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return ra(r,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return de(r,3302,3311,!0,l);case 28:return ra(r,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",c);case 29:return ra(r,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",c);case 34:return de(r,3792,3801,!0,l);case 37:return de(r,6160,6169,!0,l);case 38:return de(r,4160,4169,!0,l);case 39:return de(r,2918,2927,!0,l);case 40:return de(r,1776,1785,!0,l);case 43:return de(r,3046,3055,!0,l);case 44:return de(r,3174,3183,!0,l);case 45:return de(r,3664,3673,!0,l);case 46:return de(r,3872,3881,!0,l);case 3:default:return de(r,48,57,!0,l)}},Z0="data-html2canvas-ignore",Gh=function(){function r(a,i,l){if(this.context=a,this.options=l,this.scrolledElements=[],this.referenceElement=i,this.counters=new Kv,this.quoteDepth=0,!i.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(i.ownerDocument.documentElement,!1)}return r.prototype.toIFrame=function(a,i){var l=this,c=Rv(a,i);if(!c.contentWindow)return Promise.reject("Unable to find iframe window");var f=a.defaultView.pageXOffset,d=a.defaultView.pageYOffset,h=c.contentWindow,g=h.document,w=kv(c).then(function(){return _e(l,void 0,void 0,function(){var Q,C;return je(this,function(b){switch(b.label){case 0:return this.scrolledElements.forEach(Xv),h&&(h.scrollTo(i.left,i.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(h.scrollY!==i.top||h.scrollX!==i.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(h.scrollX-i.left,h.scrollY-i.top,0,0))),Q=this.options.onclone,C=this.clonedReferenceElement,typeof C>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:g.fonts&&g.fonts.ready?[4,g.fonts.ready]:[3,2];case 1:b.sent(),b.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,Gv(g)]:[3,4];case 3:b.sent(),b.label=4;case 4:return typeof Q=="function"?[2,Promise.resolve().then(function(){return Q(g,C)}).then(function(){return c})]:[2,c]}})})});return g.open(),g.write(Vv(document.doctype)+"<html></html>"),zv(this.referenceElement.ownerDocument,f,d),g.replaceChild(g.adoptNode(this.documentElement),g.documentElement),g.close(),w},r.prototype.createElementClone=function(a){if(Tu(a,2))debugger;if(z0(a))return this.createCanvasClone(a);if(Ih(a))return this.createVideoClone(a);if(Nh(a))return this.createStyleClone(a);var i=a.cloneNode(!1);return Ku(i)&&(Ku(a)&&a.currentSrc&&a.currentSrc!==a.src&&(i.src=a.currentSrc,i.srcset=""),i.loading==="lazy"&&(i.loading="eager")),Lh(i)?this.createCustomElementClone(i):i},r.prototype.createCustomElementClone=function(a){var i=document.createElement("html2canvascustomelement");return uu(a.style,i),i},r.prototype.createStyleClone=function(a){try{var i=a.sheet;if(i&&i.cssRules){var l=[].slice.call(i.cssRules,0).reduce(function(f,d){return d&&typeof d.cssText=="string"?f+d.cssText:f},""),c=a.cloneNode(!1);return c.textContent=l,c}}catch(f){if(this.context.logger.error("Unable to access cssRules property",f),f.name!=="SecurityError")throw f}return a.cloneNode(!1)},r.prototype.createCanvasClone=function(a){var i;if(this.options.inlineImages&&a.ownerDocument){var l=a.ownerDocument.createElement("img");try{return l.src=a.toDataURL(),l}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",a)}}var c=a.cloneNode(!1);try{c.width=a.width,c.height=a.height;var f=a.getContext("2d"),d=c.getContext("2d");if(d)if(!this.options.allowTaint&&f)d.putImageData(f.getImageData(0,0,a.width,a.height),0,0);else{var h=(i=a.getContext("webgl2"))!==null&&i!==void 0?i:a.getContext("webgl");if(h){var g=h.getContextAttributes();g?.preserveDrawingBuffer===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",a)}d.drawImage(a,0,0)}return c}catch{this.context.logger.info("Unable to clone canvas as it is tainted",a)}return c},r.prototype.createVideoClone=function(a){var i=a.ownerDocument.createElement("canvas");i.width=a.offsetWidth,i.height=a.offsetHeight;var l=i.getContext("2d");try{return l&&(l.drawImage(a,0,0,i.width,i.height),this.options.allowTaint||l.getImageData(0,0,i.width,i.height)),i}catch{this.context.logger.info("Unable to clone video as it is tainted",a)}var c=a.ownerDocument.createElement("canvas");return c.width=a.offsetWidth,c.height=a.offsetHeight,c},r.prototype.appendChildNode=function(a,i,l){(!ar(i)||!Lv(i)&&!i.hasAttribute(Z0)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(i)))&&(!this.options.copyStyles||!ar(i)||!Nh(i))&&a.appendChild(this.cloneNode(i,l))},r.prototype.cloneChildNodes=function(a,i,l){for(var c=this,f=a.shadowRoot?a.shadowRoot.firstChild:a.firstChild;f;f=f.nextSibling)if(ar(f)&&Y0(f)&&typeof f.assignedNodes=="function"){var d=f.assignedNodes();d.length&&d.forEach(function(h){return c.appendChildNode(i,h,l)})}else this.appendChildNode(i,f,l)},r.prototype.cloneNode=function(a,i){if(_0(a))return document.createTextNode(a.data);if(!a.ownerDocument)return a.cloneNode(!1);var l=a.ownerDocument.defaultView;if(l&&ar(a)&&(Lu(a)||us(a))){var c=this.createElementClone(a);c.style.transitionProperty="none";var f=l.getComputedStyle(a),d=l.getComputedStyle(a,":before"),h=l.getComputedStyle(a,":after");this.referenceElement===a&&Lu(c)&&(this.clonedReferenceElement=c),Zu(c)&&Zv(c);var g=this.counters.parse(new wh(this.context,f)),w=this.resolvePseudoContent(a,c,d,ml.BEFORE);Lh(a)&&(i=!0),Ih(a)||this.cloneChildNodes(a,c,i),w&&c.insertBefore(w,c.firstChild);var Q=this.resolvePseudoContent(a,c,h,ml.AFTER);return Q&&c.appendChild(Q),this.counters.pop(g),(f&&(this.options.copyStyles||us(a))&&!X0(a)||i)&&uu(f,c),(a.scrollTop!==0||a.scrollLeft!==0)&&this.scrolledElements.push([c,a.scrollLeft,a.scrollTop]),(ps(a)||ws(a))&&(ps(c)||ws(c))&&(c.value=a.value),c}return a.cloneNode(!1)},r.prototype.resolvePseudoContent=function(a,i,l,c){var f=this;if(l){var d=l.content,h=i.ownerDocument;if(!(!h||!d||d==="none"||d==="-moz-alt-content"||l.display==="none")){this.counters.parse(new wh(this.context,l));var g=new Dx(this.context,l),w=h.createElement("html2canvaspseudoelement");uu(l,w),g.content.forEach(function(C){if(C.type===0)w.appendChild(h.createTextNode(C.value));else if(C.type===22){var b=h.createElement("img");b.src=C.value,b.style.opacity="1",w.appendChild(b)}else if(C.type===18){if(C.name==="attr"){var _=C.values.filter(PA);_.length&&w.appendChild(h.createTextNode(a.getAttribute(_[0].value)||""))}else if(C.name==="counter"){var j=C.values.filter(lr),J=j[0],cA=j[1];if(J&&PA(J)){var iA=f.counters.getCounterValue(J.value),tA=cA&&PA(cA)?Du.parse(f.context,cA.value):3;w.appendChild(h.createTextNode(xl(iA,tA,!1)))}}else if(C.name==="counters"){var gA=C.values.filter(lr),J=gA[0],uA=gA[1],cA=gA[2];if(J&&PA(J)){var q=f.counters.getCounterValues(J.value),Z=cA&&PA(cA)?Du.parse(f.context,cA.value):3,CA=uA&&uA.type===0?uA.value:"",T=q.map(function(nA){return xl(nA,Z,!1)}).join(CA);w.appendChild(h.createTextNode(T))}}}else if(C.type===20)switch(C.value){case"open-quote":w.appendChild(h.createTextNode(ph(g.quotes,f.quoteDepth++,!0)));break;case"close-quote":w.appendChild(h.createTextNode(ph(g.quotes,--f.quoteDepth,!1)));break;default:w.appendChild(h.createTextNode(C.value))}}),w.className=Mu+" "+Ou;var Q=c===ml.BEFORE?" "+Mu:" "+Ou;return us(i)?i.className.baseValue+=Q:i.className+=Q,w}}},r.destroy=function(a){return a.parentNode?(a.parentNode.removeChild(a),!0):!1},r}(),ml;(function(r){r[r.BEFORE=0]="BEFORE",r[r.AFTER=1]="AFTER"})(ml||(ml={}));var Rv=function(r,a){var i=r.createElement("iframe");return i.className="html2canvas-container",i.style.visibility="hidden",i.style.position="fixed",i.style.left="-10000px",i.style.top="0px",i.style.border="0",i.width=a.width.toString(),i.height=a.height.toString(),i.scrolling="no",i.setAttribute(Z0,"true"),r.body.appendChild(i),i},jv=function(r){return new Promise(function(a){if(r.complete){a();return}if(!r.src){a();return}r.onload=a,r.onerror=a})},Gv=function(r){return Promise.all([].slice.call(r.images,0).map(jv))},kv=function(r){return new Promise(function(a,i){var l=r.contentWindow;if(!l)return i("No window assigned for iframe");var c=l.document;l.onload=r.onload=function(){l.onload=r.onload=null;var f=setInterval(function(){c.body.childNodes.length>0&&c.readyState==="complete"&&(clearInterval(f),a(r))},50)}})},_v=["all","d","content"],uu=function(r,a){for(var i=r.length-1;i>=0;i--){var l=r.item(i);_v.indexOf(l)===-1&&a.style.setProperty(l,r.getPropertyValue(l))}return a},Vv=function(r){var a="";return r&&(a+="<!DOCTYPE ",r.name&&(a+=r.name),r.internalSubset&&(a+=r.internalSubset),r.publicId&&(a+='"'+r.publicId+'"'),r.systemId&&(a+='"'+r.systemId+'"'),a+=">"),a},zv=function(r,a,i){r&&r.defaultView&&(a!==r.defaultView.pageXOffset||i!==r.defaultView.pageYOffset)&&r.defaultView.scrollTo(a,i)},Xv=function(r){var a=r[0],i=r[1],l=r[2];a.scrollLeft=i,a.scrollTop=l},Yv=":before",Jv=":after",Mu="___html2canvas___pseudoelement_before",Ou="___html2canvas___pseudoelement_after",kh=`{
    content: "" !important;
    display: none !important;
}`,Zv=function(r){qv(r,"."+Mu+Yv+kh+`
         .`+Ou+Jv+kh)},qv=function(r,a){var i=r.ownerDocument;if(i){var l=i.createElement("style");l.textContent=a,r.appendChild(l)}},q0=function(){function r(){}return r.getOrigin=function(a){var i=r._link;return i?(i.href=a,i.href=i.href,i.protocol+i.hostname+i.port):"about:blank"},r.isSameOrigin=function(a){return r.getOrigin(a)===r._origin},r.setContext=function(a){r._link=a.document.createElement("a"),r._origin=r.getOrigin(a.location.href)},r._origin="about:blank",r}(),Wv=function(){function r(a,i){this.context=a,this._options=i,this._cache={}}return r.prototype.addImage=function(a){var i=Promise.resolve();return this.has(a)||(du(a)||eb(a))&&(this._cache[a]=this.loadImage(a)).catch(function(){}),i},r.prototype.match=function(a){return this._cache[a]},r.prototype.loadImage=function(a){return _e(this,void 0,void 0,function(){var i,l,c,f,d=this;return je(this,function(h){switch(h.label){case 0:return i=q0.isSameOrigin(a),l=!fu(a)&&this._options.useCORS===!0&&Ie.SUPPORT_CORS_IMAGES&&!i,c=!fu(a)&&!i&&!du(a)&&typeof this._options.proxy=="string"&&Ie.SUPPORT_CORS_XHR&&!l,!i&&this._options.allowTaint===!1&&!fu(a)&&!du(a)&&!c&&!l?[2]:(f=a,c?[4,this.proxy(f)]:[3,2]);case 1:f=h.sent(),h.label=2;case 2:return this.context.logger.debug("Added image "+a.substring(0,256)),[4,new Promise(function(g,w){var Q=new Image;Q.onload=function(){return g(Q)},Q.onerror=w,(tb(f)||l)&&(Q.crossOrigin="anonymous"),Q.src=f,Q.complete===!0&&setTimeout(function(){return g(Q)},500),d._options.imageTimeout>0&&setTimeout(function(){return w("Timed out ("+d._options.imageTimeout+"ms) loading image")},d._options.imageTimeout)})];case 3:return[2,h.sent()]}})})},r.prototype.has=function(a){return typeof this._cache[a]<"u"},r.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},r.prototype.proxy=function(a){var i=this,l=this._options.proxy;if(!l)throw new Error("No proxy defined");var c=a.substring(0,256);return new Promise(function(f,d){var h=Ie.SUPPORT_RESPONSE_TYPE?"blob":"text",g=new XMLHttpRequest;g.onload=function(){if(g.status===200)if(h==="text")f(g.response);else{var C=new FileReader;C.addEventListener("load",function(){return f(C.result)},!1),C.addEventListener("error",function(b){return d(b)},!1),C.readAsDataURL(g.response)}else d("Failed to proxy resource "+c+" with status code "+g.status)},g.onerror=d;var w=l.indexOf("?")>-1?"&":"?";if(g.open("GET",""+l+w+"url="+encodeURIComponent(a)+"&responseType="+h),h!=="text"&&g instanceof XMLHttpRequest&&(g.responseType=h),i._options.imageTimeout){var Q=i._options.imageTimeout;g.timeout=Q,g.ontimeout=function(){return d("Timed out ("+Q+"ms) proxying "+c)}}g.send()})},r}(),Pv=/^data:image\/svg\+xml/i,$v=/^data:image\/.*;base64,/i,Ab=/^data:image\/.*/i,eb=function(r){return Ie.SUPPORT_SVG_DRAWING||!nb(r)},fu=function(r){return Ab.test(r)},tb=function(r){return $v.test(r)},du=function(r){return r.substr(0,4)==="blob"},nb=function(r){return r.substr(-3).toLowerCase()==="svg"||Pv.test(r)},pA=function(){function r(a,i){this.type=0,this.x=a,this.y=i}return r.prototype.add=function(a,i){return new r(this.x+a,this.y+i)},r}(),Ar=function(r,a,i){return new pA(r.x+(a.x-r.x)*i,r.y+(a.y-r.y)*i)},as=function(){function r(a,i,l,c){this.type=1,this.start=a,this.startControl=i,this.endControl=l,this.end=c}return r.prototype.subdivide=function(a,i){var l=Ar(this.start,this.startControl,a),c=Ar(this.startControl,this.endControl,a),f=Ar(this.endControl,this.end,a),d=Ar(l,c,a),h=Ar(c,f,a),g=Ar(d,h,a);return i?new r(this.start,l,d,g):new r(g,h,f,this.end)},r.prototype.add=function(a,i){return new r(this.start.add(a,i),this.startControl.add(a,i),this.endControl.add(a,i),this.end.add(a,i))},r.prototype.reverse=function(){return new r(this.end,this.endControl,this.startControl,this.start)},r}(),gt=function(r){return r.type===1},ab=function(){function r(a){var i=a.styles,l=a.bounds,c=dl(i.borderTopLeftRadius,l.width,l.height),f=c[0],d=c[1],h=dl(i.borderTopRightRadius,l.width,l.height),g=h[0],w=h[1],Q=dl(i.borderBottomRightRadius,l.width,l.height),C=Q[0],b=Q[1],_=dl(i.borderBottomLeftRadius,l.width,l.height),j=_[0],J=_[1],cA=[];cA.push((f+g)/l.width),cA.push((j+C)/l.width),cA.push((d+J)/l.height),cA.push((w+b)/l.height);var iA=Math.max.apply(Math,cA);iA>1&&(f/=iA,d/=iA,g/=iA,w/=iA,C/=iA,b/=iA,j/=iA,J/=iA);var tA=l.width-g,gA=l.height-b,uA=l.width-C,q=l.height-J,Z=i.borderTopWidth,CA=i.borderRightWidth,T=i.borderBottomWidth,M=i.borderLeftWidth,BA=ee(i.paddingTop,a.bounds.width),nA=ee(i.paddingRight,a.bounds.width),oA=ee(i.paddingBottom,a.bounds.width),xA=ee(i.paddingLeft,a.bounds.width);this.topLeftBorderDoubleOuterBox=f>0||d>0?ae(l.left+M/3,l.top+Z/3,f-M/3,d-Z/3,XA.TOP_LEFT):new pA(l.left+M/3,l.top+Z/3),this.topRightBorderDoubleOuterBox=f>0||d>0?ae(l.left+tA,l.top+Z/3,g-CA/3,w-Z/3,XA.TOP_RIGHT):new pA(l.left+l.width-CA/3,l.top+Z/3),this.bottomRightBorderDoubleOuterBox=C>0||b>0?ae(l.left+uA,l.top+gA,C-CA/3,b-T/3,XA.BOTTOM_RIGHT):new pA(l.left+l.width-CA/3,l.top+l.height-T/3),this.bottomLeftBorderDoubleOuterBox=j>0||J>0?ae(l.left+M/3,l.top+q,j-M/3,J-T/3,XA.BOTTOM_LEFT):new pA(l.left+M/3,l.top+l.height-T/3),this.topLeftBorderDoubleInnerBox=f>0||d>0?ae(l.left+M*2/3,l.top+Z*2/3,f-M*2/3,d-Z*2/3,XA.TOP_LEFT):new pA(l.left+M*2/3,l.top+Z*2/3),this.topRightBorderDoubleInnerBox=f>0||d>0?ae(l.left+tA,l.top+Z*2/3,g-CA*2/3,w-Z*2/3,XA.TOP_RIGHT):new pA(l.left+l.width-CA*2/3,l.top+Z*2/3),this.bottomRightBorderDoubleInnerBox=C>0||b>0?ae(l.left+uA,l.top+gA,C-CA*2/3,b-T*2/3,XA.BOTTOM_RIGHT):new pA(l.left+l.width-CA*2/3,l.top+l.height-T*2/3),this.bottomLeftBorderDoubleInnerBox=j>0||J>0?ae(l.left+M*2/3,l.top+q,j-M*2/3,J-T*2/3,XA.BOTTOM_LEFT):new pA(l.left+M*2/3,l.top+l.height-T*2/3),this.topLeftBorderStroke=f>0||d>0?ae(l.left+M/2,l.top+Z/2,f-M/2,d-Z/2,XA.TOP_LEFT):new pA(l.left+M/2,l.top+Z/2),this.topRightBorderStroke=f>0||d>0?ae(l.left+tA,l.top+Z/2,g-CA/2,w-Z/2,XA.TOP_RIGHT):new pA(l.left+l.width-CA/2,l.top+Z/2),this.bottomRightBorderStroke=C>0||b>0?ae(l.left+uA,l.top+gA,C-CA/2,b-T/2,XA.BOTTOM_RIGHT):new pA(l.left+l.width-CA/2,l.top+l.height-T/2),this.bottomLeftBorderStroke=j>0||J>0?ae(l.left+M/2,l.top+q,j-M/2,J-T/2,XA.BOTTOM_LEFT):new pA(l.left+M/2,l.top+l.height-T/2),this.topLeftBorderBox=f>0||d>0?ae(l.left,l.top,f,d,XA.TOP_LEFT):new pA(l.left,l.top),this.topRightBorderBox=g>0||w>0?ae(l.left+tA,l.top,g,w,XA.TOP_RIGHT):new pA(l.left+l.width,l.top),this.bottomRightBorderBox=C>0||b>0?ae(l.left+uA,l.top+gA,C,b,XA.BOTTOM_RIGHT):new pA(l.left+l.width,l.top+l.height),this.bottomLeftBorderBox=j>0||J>0?ae(l.left,l.top+q,j,J,XA.BOTTOM_LEFT):new pA(l.left,l.top+l.height),this.topLeftPaddingBox=f>0||d>0?ae(l.left+M,l.top+Z,Math.max(0,f-M),Math.max(0,d-Z),XA.TOP_LEFT):new pA(l.left+M,l.top+Z),this.topRightPaddingBox=g>0||w>0?ae(l.left+Math.min(tA,l.width-CA),l.top+Z,tA>l.width+CA?0:Math.max(0,g-CA),Math.max(0,w-Z),XA.TOP_RIGHT):new pA(l.left+l.width-CA,l.top+Z),this.bottomRightPaddingBox=C>0||b>0?ae(l.left+Math.min(uA,l.width-M),l.top+Math.min(gA,l.height-T),Math.max(0,C-CA),Math.max(0,b-T),XA.BOTTOM_RIGHT):new pA(l.left+l.width-CA,l.top+l.height-T),this.bottomLeftPaddingBox=j>0||J>0?ae(l.left+M,l.top+Math.min(q,l.height-T),Math.max(0,j-M),Math.max(0,J-T),XA.BOTTOM_LEFT):new pA(l.left+M,l.top+l.height-T),this.topLeftContentBox=f>0||d>0?ae(l.left+M+xA,l.top+Z+BA,Math.max(0,f-(M+xA)),Math.max(0,d-(Z+BA)),XA.TOP_LEFT):new pA(l.left+M+xA,l.top+Z+BA),this.topRightContentBox=g>0||w>0?ae(l.left+Math.min(tA,l.width+M+xA),l.top+Z+BA,tA>l.width+M+xA?0:g-M+xA,w-(Z+BA),XA.TOP_RIGHT):new pA(l.left+l.width-(CA+nA),l.top+Z+BA),this.bottomRightContentBox=C>0||b>0?ae(l.left+Math.min(uA,l.width-(M+xA)),l.top+Math.min(gA,l.height+Z+BA),Math.max(0,C-(CA+nA)),b-(T+oA),XA.BOTTOM_RIGHT):new pA(l.left+l.width-(CA+nA),l.top+l.height-(T+oA)),this.bottomLeftContentBox=j>0||J>0?ae(l.left+M+xA,l.top+q,Math.max(0,j-(M+xA)),J-(T+oA),XA.BOTTOM_LEFT):new pA(l.left+M+xA,l.top+l.height-(T+oA))}return r}(),XA;(function(r){r[r.TOP_LEFT=0]="TOP_LEFT",r[r.TOP_RIGHT=1]="TOP_RIGHT",r[r.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",r[r.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(XA||(XA={}));var ae=function(r,a,i,l,c){var f=4*((Math.sqrt(2)-1)/3),d=i*f,h=l*f,g=r+i,w=a+l;switch(c){case XA.TOP_LEFT:return new as(new pA(r,w),new pA(r,w-h),new pA(g-d,a),new pA(g,a));case XA.TOP_RIGHT:return new as(new pA(r,a),new pA(r+d,a),new pA(g,w-h),new pA(g,w));case XA.BOTTOM_RIGHT:return new as(new pA(g,a),new pA(g,a+h),new pA(r+d,w),new pA(r,w));case XA.BOTTOM_LEFT:default:return new as(new pA(g,w),new pA(g-d,w),new pA(r,a+h),new pA(r,a))}},Qs=function(r){return[r.topLeftBorderBox,r.topRightBorderBox,r.bottomRightBorderBox,r.bottomLeftBorderBox]},rb=function(r){return[r.topLeftContentBox,r.topRightContentBox,r.bottomRightContentBox,r.bottomLeftContentBox]},ms=function(r){return[r.topLeftPaddingBox,r.topRightPaddingBox,r.bottomRightPaddingBox,r.bottomLeftPaddingBox]},lb=function(){function r(a,i,l){this.offsetX=a,this.offsetY=i,this.matrix=l,this.type=0,this.target=6}return r}(),rs=function(){function r(a,i){this.path=a,this.target=i,this.type=1}return r}(),ib=function(){function r(a){this.opacity=a,this.type=2,this.target=6}return r}(),sb=function(r){return r.type===0},W0=function(r){return r.type===1},ob=function(r){return r.type===2},_h=function(r,a){return r.length===a.length?r.some(function(i,l){return i===a[l]}):!1},cb=function(r,a,i,l,c){return r.map(function(f,d){switch(d){case 0:return f.add(a,i);case 1:return f.add(a+l,i);case 2:return f.add(a+l,i+c);case 3:return f.add(a,i+c)}return f})},P0=function(){function r(a){this.element=a,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return r}(),$0=function(){function r(a,i){if(this.container=a,this.parent=i,this.effects=[],this.curves=new ab(this.container),this.container.styles.opacity<1&&this.effects.push(new ib(this.container.styles.opacity)),this.container.styles.transform!==null){var l=this.container.bounds.left+this.container.styles.transformOrigin[0].number,c=this.container.bounds.top+this.container.styles.transformOrigin[1].number,f=this.container.styles.transform;this.effects.push(new lb(l,c,f))}if(this.container.styles.overflowX!==0){var d=Qs(this.curves),h=ms(this.curves);_h(d,h)?this.effects.push(new rs(d,6)):(this.effects.push(new rs(d,2)),this.effects.push(new rs(h,4)))}}return r.prototype.getEffects=function(a){for(var i=[2,3].indexOf(this.container.styles.position)===-1,l=this.parent,c=this.effects.slice(0);l;){var f=l.effects.filter(function(g){return!W0(g)});if(i||l.container.styles.position!==0||!l.parent){if(c.unshift.apply(c,f),i=[2,3].indexOf(l.container.styles.position)===-1,l.container.styles.overflowX!==0){var d=Qs(l.curves),h=ms(l.curves);_h(d,h)||c.unshift(new rs(h,6))}}else c.unshift.apply(c,f);l=l.parent}return c.filter(function(g){return Ue(g.target,a)})},r}(),Ru=function(r,a,i,l){r.container.elements.forEach(function(c){var f=Ue(c.flags,4),d=Ue(c.flags,2),h=new $0(c,r);Ue(c.styles.display,2048)&&l.push(h);var g=Ue(c.flags,8)?[]:l;if(f||d){var w=f||c.styles.isPositioned()?i:a,Q=new P0(h);if(c.styles.isPositioned()||c.styles.opacity<1||c.styles.isTransformed()){var C=c.styles.zIndex.order;if(C<0){var b=0;w.negativeZIndex.some(function(j,J){return C>j.element.container.styles.zIndex.order?(b=J,!1):b>0}),w.negativeZIndex.splice(b,0,Q)}else if(C>0){var _=0;w.positiveZIndex.some(function(j,J){return C>=j.element.container.styles.zIndex.order?(_=J+1,!1):_>0}),w.positiveZIndex.splice(_,0,Q)}else w.zeroOrAutoZIndexOrTransformedOrOpacity.push(Q)}else c.styles.isFloating()?w.nonPositionedFloats.push(Q):w.nonPositionedInlineLevel.push(Q);Ru(h,Q,f?Q:i,g)}else c.styles.isInlineLevel()?a.inlineLevel.push(h):a.nonInlineLevel.push(h),Ru(h,a,i,g);Ue(c.flags,8)&&Ap(c,g)})},Ap=function(r,a){for(var i=r instanceof Nu?r.start:1,l=r instanceof Nu?r.reversed:!1,c=0;c<a.length;c++){var f=a[c];f.container instanceof M0&&typeof f.container.value=="number"&&f.container.value!==0&&(i=f.container.value),f.listValue=xl(i,f.container.styles.listStyleType,!0),i+=l?-1:1}},ub=function(r){var a=new $0(r,null),i=new P0(a),l=[];return Ru(a,i,i,l),Ap(a.container,l),i},Vh=function(r,a){switch(a){case 0:return pt(r.topLeftBorderBox,r.topLeftPaddingBox,r.topRightBorderBox,r.topRightPaddingBox);case 1:return pt(r.topRightBorderBox,r.topRightPaddingBox,r.bottomRightBorderBox,r.bottomRightPaddingBox);case 2:return pt(r.bottomRightBorderBox,r.bottomRightPaddingBox,r.bottomLeftBorderBox,r.bottomLeftPaddingBox);case 3:default:return pt(r.bottomLeftBorderBox,r.bottomLeftPaddingBox,r.topLeftBorderBox,r.topLeftPaddingBox)}},fb=function(r,a){switch(a){case 0:return pt(r.topLeftBorderBox,r.topLeftBorderDoubleOuterBox,r.topRightBorderBox,r.topRightBorderDoubleOuterBox);case 1:return pt(r.topRightBorderBox,r.topRightBorderDoubleOuterBox,r.bottomRightBorderBox,r.bottomRightBorderDoubleOuterBox);case 2:return pt(r.bottomRightBorderBox,r.bottomRightBorderDoubleOuterBox,r.bottomLeftBorderBox,r.bottomLeftBorderDoubleOuterBox);case 3:default:return pt(r.bottomLeftBorderBox,r.bottomLeftBorderDoubleOuterBox,r.topLeftBorderBox,r.topLeftBorderDoubleOuterBox)}},db=function(r,a){switch(a){case 0:return pt(r.topLeftBorderDoubleInnerBox,r.topLeftPaddingBox,r.topRightBorderDoubleInnerBox,r.topRightPaddingBox);case 1:return pt(r.topRightBorderDoubleInnerBox,r.topRightPaddingBox,r.bottomRightBorderDoubleInnerBox,r.bottomRightPaddingBox);case 2:return pt(r.bottomRightBorderDoubleInnerBox,r.bottomRightPaddingBox,r.bottomLeftBorderDoubleInnerBox,r.bottomLeftPaddingBox);case 3:default:return pt(r.bottomLeftBorderDoubleInnerBox,r.bottomLeftPaddingBox,r.topLeftBorderDoubleInnerBox,r.topLeftPaddingBox)}},Bb=function(r,a){switch(a){case 0:return ls(r.topLeftBorderStroke,r.topRightBorderStroke);case 1:return ls(r.topRightBorderStroke,r.bottomRightBorderStroke);case 2:return ls(r.bottomRightBorderStroke,r.bottomLeftBorderStroke);case 3:default:return ls(r.bottomLeftBorderStroke,r.topLeftBorderStroke)}},ls=function(r,a){var i=[];return gt(r)?i.push(r.subdivide(.5,!1)):i.push(r),gt(a)?i.push(a.subdivide(.5,!0)):i.push(a),i},pt=function(r,a,i,l){var c=[];return gt(r)?c.push(r.subdivide(.5,!1)):c.push(r),gt(i)?c.push(i.subdivide(.5,!0)):c.push(i),gt(l)?c.push(l.subdivide(.5,!0).reverse()):c.push(l),gt(a)?c.push(a.subdivide(.5,!1).reverse()):c.push(a),c},ep=function(r){var a=r.bounds,i=r.styles;return a.add(i.borderLeftWidth,i.borderTopWidth,-(i.borderRightWidth+i.borderLeftWidth),-(i.borderTopWidth+i.borderBottomWidth))},Cs=function(r){var a=r.styles,i=r.bounds,l=ee(a.paddingLeft,i.width),c=ee(a.paddingRight,i.width),f=ee(a.paddingTop,i.width),d=ee(a.paddingBottom,i.width);return i.add(l+a.borderLeftWidth,f+a.borderTopWidth,-(a.borderRightWidth+a.borderLeftWidth+l+c),-(a.borderTopWidth+a.borderBottomWidth+f+d))},gb=function(r,a){return r===0?a.bounds:r===2?Cs(a):ep(a)},hb=function(r,a){return r===0?a.bounds:r===2?Cs(a):ep(a)},Bu=function(r,a,i){var l=gb(nr(r.styles.backgroundOrigin,a),r),c=hb(nr(r.styles.backgroundClip,a),r),f=pb(nr(r.styles.backgroundSize,a),i,l),d=f[0],h=f[1],g=dl(nr(r.styles.backgroundPosition,a),l.width-d,l.height-h),w=wb(nr(r.styles.backgroundRepeat,a),g,f,l,c),Q=Math.round(l.left+g[0]),C=Math.round(l.top+g[1]);return[w,Q,C,d,h]},er=function(r){return PA(r)&&r.value===rr.AUTO},is=function(r){return typeof r=="number"},pb=function(r,a,i){var l=a[0],c=a[1],f=a[2],d=r[0],h=r[1];if(!d)return[0,0];if(we(d)&&h&&we(h))return[ee(d,i.width),ee(h,i.height)];var g=is(f);if(PA(d)&&(d.value===rr.CONTAIN||d.value===rr.COVER)){if(is(f)){var w=i.width/i.height;return w<f!=(d.value===rr.COVER)?[i.width,i.width/f]:[i.height*f,i.height]}return[i.width,i.height]}var Q=is(l),C=is(c),b=Q||C;if(er(d)&&(!h||er(h))){if(Q&&C)return[l,c];if(!g&&!b)return[i.width,i.height];if(b&&g){var _=Q?l:c*f,j=C?c:l/f;return[_,j]}var J=Q?l:i.width,cA=C?c:i.height;return[J,cA]}if(g){var iA=0,tA=0;return we(d)?iA=ee(d,i.width):we(h)&&(tA=ee(h,i.height)),er(d)?iA=tA*f:(!h||er(h))&&(tA=iA/f),[iA,tA]}var gA=null,uA=null;if(we(d)?gA=ee(d,i.width):h&&we(h)&&(uA=ee(h,i.height)),gA!==null&&(!h||er(h))&&(uA=Q&&C?gA/l*c:i.height),uA!==null&&er(d)&&(gA=Q&&C?uA/c*l:i.width),gA!==null&&uA!==null)return[gA,uA];throw new Error("Unable to calculate background-size for element")},nr=function(r,a){var i=r[a];return typeof i>"u"?r[0]:i},wb=function(r,a,i,l,c){var f=a[0],d=a[1],h=i[0],g=i[1];switch(r){case 2:return[new pA(Math.round(l.left),Math.round(l.top+d)),new pA(Math.round(l.left+l.width),Math.round(l.top+d)),new pA(Math.round(l.left+l.width),Math.round(g+l.top+d)),new pA(Math.round(l.left),Math.round(g+l.top+d))];case 3:return[new pA(Math.round(l.left+f),Math.round(l.top)),new pA(Math.round(l.left+f+h),Math.round(l.top)),new pA(Math.round(l.left+f+h),Math.round(l.height+l.top)),new pA(Math.round(l.left+f),Math.round(l.height+l.top))];case 1:return[new pA(Math.round(l.left+f),Math.round(l.top+d)),new pA(Math.round(l.left+f+h),Math.round(l.top+d)),new pA(Math.round(l.left+f+h),Math.round(l.top+d+g)),new pA(Math.round(l.left+f),Math.round(l.top+d+g))];default:return[new pA(Math.round(c.left),Math.round(c.top)),new pA(Math.round(c.left+c.width),Math.round(c.top)),new pA(Math.round(c.left+c.width),Math.round(c.height+c.top)),new pA(Math.round(c.left),Math.round(c.height+c.top))]}},Qb="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",zh="Hidden Text",mb=function(){function r(a){this._data={},this._document=a}return r.prototype.parseMetrics=function(a,i){var l=this._document.createElement("div"),c=this._document.createElement("img"),f=this._document.createElement("span"),d=this._document.body;l.style.visibility="hidden",l.style.fontFamily=a,l.style.fontSize=i,l.style.margin="0",l.style.padding="0",l.style.whiteSpace="nowrap",d.appendChild(l),c.src=Qb,c.width=1,c.height=1,c.style.margin="0",c.style.padding="0",c.style.verticalAlign="baseline",f.style.fontFamily=a,f.style.fontSize=i,f.style.margin="0",f.style.padding="0",f.appendChild(this._document.createTextNode(zh)),l.appendChild(f),l.appendChild(c);var h=c.offsetTop-f.offsetTop+2;l.removeChild(f),l.appendChild(this._document.createTextNode(zh)),l.style.lineHeight="normal",c.style.verticalAlign="super";var g=c.offsetTop-l.offsetTop+2;return d.removeChild(l),{baseline:h,middle:g}},r.prototype.getMetrics=function(a,i){var l=a+" "+i;return typeof this._data[l]>"u"&&(this._data[l]=this.parseMetrics(a,i)),this._data[l]},r}(),tp=function(){function r(a,i){this.context=a,this.options=i}return r}(),Cb=1e4,Ub=function(r){xt(a,r);function a(i,l){var c=r.call(this,i,l)||this;return c._activeEffects=[],c.canvas=l.canvas?l.canvas:document.createElement("canvas"),c.ctx=c.canvas.getContext("2d"),l.canvas||(c.canvas.width=Math.floor(l.width*l.scale),c.canvas.height=Math.floor(l.height*l.scale),c.canvas.style.width=l.width+"px",c.canvas.style.height=l.height+"px"),c.fontMetrics=new mb(document),c.ctx.scale(c.options.scale,c.options.scale),c.ctx.translate(-l.x,-l.y),c.ctx.textBaseline="bottom",c._activeEffects=[],c.context.logger.debug("Canvas renderer initialized ("+l.width+"x"+l.height+") with scale "+l.scale),c}return a.prototype.applyEffects=function(i){for(var l=this;this._activeEffects.length;)this.popEffect();i.forEach(function(c){return l.applyEffect(c)})},a.prototype.applyEffect=function(i){this.ctx.save(),ob(i)&&(this.ctx.globalAlpha=i.opacity),sb(i)&&(this.ctx.translate(i.offsetX,i.offsetY),this.ctx.transform(i.matrix[0],i.matrix[1],i.matrix[2],i.matrix[3],i.matrix[4],i.matrix[5]),this.ctx.translate(-i.offsetX,-i.offsetY)),W0(i)&&(this.path(i.path),this.ctx.clip()),this._activeEffects.push(i)},a.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},a.prototype.renderStack=function(i){return _e(this,void 0,void 0,function(){var l;return je(this,function(c){switch(c.label){case 0:return l=i.element.container.styles,l.isVisible()?[4,this.renderStackContent(i)]:[3,2];case 1:c.sent(),c.label=2;case 2:return[2]}})})},a.prototype.renderNode=function(i){return _e(this,void 0,void 0,function(){return je(this,function(l){switch(l.label){case 0:if(Ue(i.container.flags,16))debugger;return i.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(i)]:[3,3];case 1:return l.sent(),[4,this.renderNodeContent(i)];case 2:l.sent(),l.label=3;case 3:return[2]}})})},a.prototype.renderTextWithLetterSpacing=function(i,l,c){var f=this;if(l===0)this.ctx.fillText(i.text,i.bounds.left,i.bounds.top+c);else{var d=Yu(i.text);d.reduce(function(h,g){return f.ctx.fillText(g,h,i.bounds.top+c),h+f.ctx.measureText(g).width},i.bounds.left)}},a.prototype.createFontStyle=function(i){var l=i.fontVariant.filter(function(d){return d==="normal"||d==="small-caps"}).join(""),c=Fb(i.fontFamily).join(", "),f=Fl(i.fontSize)?""+i.fontSize.number+i.fontSize.unit:i.fontSize.number+"px";return[[i.fontStyle,l,i.fontWeight,f,c].join(" "),c,f]},a.prototype.renderTextNode=function(i,l){return _e(this,void 0,void 0,function(){var c,f,d,h,g,w,Q,C,b=this;return je(this,function(_){return c=this.createFontStyle(l),f=c[0],d=c[1],h=c[2],this.ctx.font=f,this.ctx.direction=l.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",g=this.fontMetrics.getMetrics(d,h),w=g.baseline,Q=g.middle,C=l.paintOrder,i.textBounds.forEach(function(j){C.forEach(function(J){switch(J){case 0:b.ctx.fillStyle=Ee(l.color),b.renderTextWithLetterSpacing(j,l.letterSpacing,w);var cA=l.textShadow;cA.length&&j.text.trim().length&&(cA.slice(0).reverse().forEach(function(iA){b.ctx.shadowColor=Ee(iA.color),b.ctx.shadowOffsetX=iA.offsetX.number*b.options.scale,b.ctx.shadowOffsetY=iA.offsetY.number*b.options.scale,b.ctx.shadowBlur=iA.blur.number,b.renderTextWithLetterSpacing(j,l.letterSpacing,w)}),b.ctx.shadowColor="",b.ctx.shadowOffsetX=0,b.ctx.shadowOffsetY=0,b.ctx.shadowBlur=0),l.textDecorationLine.length&&(b.ctx.fillStyle=Ee(l.textDecorationColor||l.color),l.textDecorationLine.forEach(function(iA){switch(iA){case 1:b.ctx.fillRect(j.bounds.left,Math.round(j.bounds.top+w),j.bounds.width,1);break;case 2:b.ctx.fillRect(j.bounds.left,Math.round(j.bounds.top),j.bounds.width,1);break;case 3:b.ctx.fillRect(j.bounds.left,Math.ceil(j.bounds.top+Q),j.bounds.width,1);break}}));break;case 1:l.webkitTextStrokeWidth&&j.text.trim().length&&(b.ctx.strokeStyle=Ee(l.webkitTextStrokeColor),b.ctx.lineWidth=l.webkitTextStrokeWidth,b.ctx.lineJoin=window.chrome?"miter":"round",b.ctx.strokeText(j.text,j.bounds.left,j.bounds.top+w)),b.ctx.strokeStyle="",b.ctx.lineWidth=0,b.ctx.lineJoin="miter";break}})}),[2]})})},a.prototype.renderReplacedElement=function(i,l,c){if(c&&i.intrinsicWidth>0&&i.intrinsicHeight>0){var f=Cs(i),d=ms(l);this.path(d),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(c,0,0,i.intrinsicWidth,i.intrinsicHeight,f.left,f.top,f.width,f.height),this.ctx.restore()}},a.prototype.renderNodeContent=function(i){return _e(this,void 0,void 0,function(){var l,c,f,d,h,g,tA,tA,w,Q,C,b,uA,_,j,q,J,cA,iA,tA,gA,uA,q;return je(this,function(Z){switch(Z.label){case 0:this.applyEffects(i.getEffects(4)),l=i.container,c=i.curves,f=l.styles,d=0,h=l.textNodes,Z.label=1;case 1:return d<h.length?(g=h[d],[4,this.renderTextNode(g,f)]):[3,4];case 2:Z.sent(),Z.label=3;case 3:return d++,[3,1];case 4:if(!(l instanceof N0))return[3,8];Z.label=5;case 5:return Z.trys.push([5,7,,8]),[4,this.context.cache.match(l.src)];case 6:return tA=Z.sent(),this.renderReplacedElement(l,c,tA),[3,8];case 7:return Z.sent(),this.context.logger.error("Error loading image "+l.src),[3,8];case 8:if(l instanceof L0&&this.renderReplacedElement(l,c,l.canvas),!(l instanceof K0))return[3,12];Z.label=9;case 9:return Z.trys.push([9,11,,12]),[4,this.context.cache.match(l.svg)];case 10:return tA=Z.sent(),this.renderReplacedElement(l,c,tA),[3,12];case 11:return Z.sent(),this.context.logger.error("Error loading svg "+l.svg.substring(0,255)),[3,12];case 12:return l instanceof j0&&l.tree?(w=new a(this.context,{scale:this.options.scale,backgroundColor:l.backgroundColor,x:0,y:0,width:l.width,height:l.height}),[4,w.render(l.tree)]):[3,14];case 13:Q=Z.sent(),l.width&&l.height&&this.ctx.drawImage(Q,0,0,l.width,l.height,l.bounds.left,l.bounds.top,l.bounds.width,l.bounds.height),Z.label=14;case 14:if(l instanceof Ju&&(C=Math.min(l.bounds.width,l.bounds.height),l.type===gs?l.checked&&(this.ctx.save(),this.path([new pA(l.bounds.left+C*.39363,l.bounds.top+C*.79),new pA(l.bounds.left+C*.16,l.bounds.top+C*.5549),new pA(l.bounds.left+C*.27347,l.bounds.top+C*.44071),new pA(l.bounds.left+C*.39694,l.bounds.top+C*.5649),new pA(l.bounds.left+C*.72983,l.bounds.top+C*.23),new pA(l.bounds.left+C*.84,l.bounds.top+C*.34085),new pA(l.bounds.left+C*.39363,l.bounds.top+C*.79)]),this.ctx.fillStyle=Ee(Th),this.ctx.fill(),this.ctx.restore()):l.type===hs&&l.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(l.bounds.left+C/2,l.bounds.top+C/2,C/4,0,Math.PI*2,!0),this.ctx.fillStyle=Ee(Th),this.ctx.fill(),this.ctx.restore())),xb(l)&&l.value.length){switch(b=this.createFontStyle(f),uA=b[0],_=b[1],j=this.fontMetrics.getMetrics(uA,_).baseline,this.ctx.font=uA,this.ctx.fillStyle=Ee(f.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=bb(l.styles.textAlign),q=Cs(l),J=0,l.styles.textAlign){case 1:J+=q.width/2;break;case 2:J+=q.width;break}cA=q.add(J,0,0,-q.height/2+1),this.ctx.save(),this.path([new pA(q.left,q.top),new pA(q.left+q.width,q.top),new pA(q.left+q.width,q.top+q.height),new pA(q.left,q.top+q.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Ql(l.value,cA),f.letterSpacing,j),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!Ue(l.styles.display,2048))return[3,20];if(l.styles.listStyleImage===null)return[3,19];if(iA=l.styles.listStyleImage,iA.type!==0)return[3,18];tA=void 0,gA=iA.url,Z.label=15;case 15:return Z.trys.push([15,17,,18]),[4,this.context.cache.match(gA)];case 16:return tA=Z.sent(),this.ctx.drawImage(tA,l.bounds.left-(tA.width+10),l.bounds.top),[3,18];case 17:return Z.sent(),this.context.logger.error("Error loading list-style-image "+gA),[3,18];case 18:return[3,20];case 19:i.listValue&&l.styles.listStyleType!==-1&&(uA=this.createFontStyle(f)[0],this.ctx.font=uA,this.ctx.fillStyle=Ee(f.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",q=new en(l.bounds.left,l.bounds.top+ee(l.styles.paddingTop,l.bounds.width),l.bounds.width,gh(f.lineHeight,f.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Ql(i.listValue,q),f.letterSpacing,gh(f.lineHeight,f.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),Z.label=20;case 20:return[2]}})})},a.prototype.renderStackContent=function(i){return _e(this,void 0,void 0,function(){var l,c,iA,f,d,iA,h,g,iA,w,Q,iA,C,b,iA,_,j,iA,J,cA,iA;return je(this,function(tA){switch(tA.label){case 0:if(Ue(i.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(i.element)];case 1:tA.sent(),l=0,c=i.negativeZIndex,tA.label=2;case 2:return l<c.length?(iA=c[l],[4,this.renderStack(iA)]):[3,5];case 3:tA.sent(),tA.label=4;case 4:return l++,[3,2];case 5:return[4,this.renderNodeContent(i.element)];case 6:tA.sent(),f=0,d=i.nonInlineLevel,tA.label=7;case 7:return f<d.length?(iA=d[f],[4,this.renderNode(iA)]):[3,10];case 8:tA.sent(),tA.label=9;case 9:return f++,[3,7];case 10:h=0,g=i.nonPositionedFloats,tA.label=11;case 11:return h<g.length?(iA=g[h],[4,this.renderStack(iA)]):[3,14];case 12:tA.sent(),tA.label=13;case 13:return h++,[3,11];case 14:w=0,Q=i.nonPositionedInlineLevel,tA.label=15;case 15:return w<Q.length?(iA=Q[w],[4,this.renderStack(iA)]):[3,18];case 16:tA.sent(),tA.label=17;case 17:return w++,[3,15];case 18:C=0,b=i.inlineLevel,tA.label=19;case 19:return C<b.length?(iA=b[C],[4,this.renderNode(iA)]):[3,22];case 20:tA.sent(),tA.label=21;case 21:return C++,[3,19];case 22:_=0,j=i.zeroOrAutoZIndexOrTransformedOrOpacity,tA.label=23;case 23:return _<j.length?(iA=j[_],[4,this.renderStack(iA)]):[3,26];case 24:tA.sent(),tA.label=25;case 25:return _++,[3,23];case 26:J=0,cA=i.positiveZIndex,tA.label=27;case 27:return J<cA.length?(iA=cA[J],[4,this.renderStack(iA)]):[3,30];case 28:tA.sent(),tA.label=29;case 29:return J++,[3,27];case 30:return[2]}})})},a.prototype.mask=function(i){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(i.slice(0).reverse()),this.ctx.closePath()},a.prototype.path=function(i){this.ctx.beginPath(),this.formatPath(i),this.ctx.closePath()},a.prototype.formatPath=function(i){var l=this;i.forEach(function(c,f){var d=gt(c)?c.start:c;f===0?l.ctx.moveTo(d.x,d.y):l.ctx.lineTo(d.x,d.y),gt(c)&&l.ctx.bezierCurveTo(c.startControl.x,c.startControl.y,c.endControl.x,c.endControl.y,c.end.x,c.end.y)})},a.prototype.renderRepeat=function(i,l,c,f){this.path(i),this.ctx.fillStyle=l,this.ctx.translate(c,f),this.ctx.fill(),this.ctx.translate(-c,-f)},a.prototype.resizeImage=function(i,l,c){var f;if(i.width===l&&i.height===c)return i;var d=(f=this.canvas.ownerDocument)!==null&&f!==void 0?f:document,h=d.createElement("canvas");h.width=Math.max(1,l),h.height=Math.max(1,c);var g=h.getContext("2d");return g.drawImage(i,0,0,i.width,i.height,0,0,l,c),h},a.prototype.renderBackgroundImage=function(i){return _e(this,void 0,void 0,function(){var l,c,f,d,h,g;return je(this,function(w){switch(w.label){case 0:l=i.styles.backgroundImage.length-1,c=function(Q){var C,b,_,BA,x,O,xA,dA,T,j,BA,x,O,xA,dA,J,cA,iA,tA,gA,uA,q,Z,CA,T,M,BA,nA,oA,xA,dA,R,x,O,z,sA,m,G,lA,aA,F,P;return je(this,function(W){switch(W.label){case 0:if(Q.type!==0)return[3,5];C=void 0,b=Q.url,W.label=1;case 1:return W.trys.push([1,3,,4]),[4,f.context.cache.match(b)];case 2:return C=W.sent(),[3,4];case 3:return W.sent(),f.context.logger.error("Error loading background-image "+b),[3,4];case 4:return C&&(_=Bu(i,l,[C.width,C.height,C.width/C.height]),BA=_[0],x=_[1],O=_[2],xA=_[3],dA=_[4],T=f.ctx.createPattern(f.resizeImage(C,xA,dA),"repeat"),f.renderRepeat(BA,T,x,O)),[3,6];case 5:sU(Q)?(j=Bu(i,l,[null,null,null]),BA=j[0],x=j[1],O=j[2],xA=j[3],dA=j[4],J=nU(Q.angle,xA,dA),cA=J[0],iA=J[1],tA=J[2],gA=J[3],uA=J[4],q=document.createElement("canvas"),q.width=xA,q.height=dA,Z=q.getContext("2d"),CA=Z.createLinearGradient(iA,gA,tA,uA),dh(Q.stops,cA).forEach(function(bA){return CA.addColorStop(bA.stop,Ee(bA.color))}),Z.fillStyle=CA,Z.fillRect(0,0,xA,dA),xA>0&&dA>0&&(T=f.ctx.createPattern(q,"repeat"),f.renderRepeat(BA,T,x,O))):oU(Q)&&(M=Bu(i,l,[null,null,null]),BA=M[0],nA=M[1],oA=M[2],xA=M[3],dA=M[4],R=Q.position.length===0?[Vu]:Q.position,x=ee(R[0],xA),O=ee(R[R.length-1],dA),z=aU(Q,x,O,xA,dA),sA=z[0],m=z[1],sA>0&&m>0&&(G=f.ctx.createRadialGradient(nA+x,oA+O,0,nA+x,oA+O,sA),dh(Q.stops,sA*2).forEach(function(bA){return G.addColorStop(bA.stop,Ee(bA.color))}),f.path(BA),f.ctx.fillStyle=G,sA!==m?(lA=i.bounds.left+.5*i.bounds.width,aA=i.bounds.top+.5*i.bounds.height,F=m/sA,P=1/F,f.ctx.save(),f.ctx.translate(lA,aA),f.ctx.transform(1,0,0,F,0,0),f.ctx.translate(-lA,-aA),f.ctx.fillRect(nA,P*(oA-aA)+aA,xA,dA*P),f.ctx.restore()):f.ctx.fill())),W.label=6;case 6:return l--,[2]}})},f=this,d=0,h=i.styles.backgroundImage.slice(0).reverse(),w.label=1;case 1:return d<h.length?(g=h[d],[5,c(g)]):[3,4];case 2:w.sent(),w.label=3;case 3:return d++,[3,1];case 4:return[2]}})})},a.prototype.renderSolidBorder=function(i,l,c){return _e(this,void 0,void 0,function(){return je(this,function(f){return this.path(Vh(c,l)),this.ctx.fillStyle=Ee(i),this.ctx.fill(),[2]})})},a.prototype.renderDoubleBorder=function(i,l,c,f){return _e(this,void 0,void 0,function(){var d,h;return je(this,function(g){switch(g.label){case 0:return l<3?[4,this.renderSolidBorder(i,c,f)]:[3,2];case 1:return g.sent(),[2];case 2:return d=fb(f,c),this.path(d),this.ctx.fillStyle=Ee(i),this.ctx.fill(),h=db(f,c),this.path(h),this.ctx.fill(),[2]}})})},a.prototype.renderNodeBackgroundAndBorders=function(i){return _e(this,void 0,void 0,function(){var l,c,f,d,h,g,w,Q,C=this;return je(this,function(b){switch(b.label){case 0:return this.applyEffects(i.getEffects(2)),l=i.container.styles,c=!On(l.backgroundColor)||l.backgroundImage.length,f=[{style:l.borderTopStyle,color:l.borderTopColor,width:l.borderTopWidth},{style:l.borderRightStyle,color:l.borderRightColor,width:l.borderRightWidth},{style:l.borderBottomStyle,color:l.borderBottomColor,width:l.borderBottomWidth},{style:l.borderLeftStyle,color:l.borderLeftColor,width:l.borderLeftWidth}],d=vb(nr(l.backgroundClip,0),i.curves),c||l.boxShadow.length?(this.ctx.save(),this.path(d),this.ctx.clip(),On(l.backgroundColor)||(this.ctx.fillStyle=Ee(l.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(i.container)]):[3,2];case 1:b.sent(),this.ctx.restore(),l.boxShadow.slice(0).reverse().forEach(function(_){C.ctx.save();var j=Qs(i.curves),J=_.inset?0:Cb,cA=cb(j,-J+(_.inset?1:-1)*_.spread.number,(_.inset?1:-1)*_.spread.number,_.spread.number*(_.inset?-2:2),_.spread.number*(_.inset?-2:2));_.inset?(C.path(j),C.ctx.clip(),C.mask(cA)):(C.mask(j),C.ctx.clip(),C.path(cA)),C.ctx.shadowOffsetX=_.offsetX.number+J,C.ctx.shadowOffsetY=_.offsetY.number,C.ctx.shadowColor=Ee(_.color),C.ctx.shadowBlur=_.blur.number,C.ctx.fillStyle=_.inset?Ee(_.color):"rgba(0,0,0,1)",C.ctx.fill(),C.ctx.restore()}),b.label=2;case 2:h=0,g=0,w=f,b.label=3;case 3:return g<w.length?(Q=w[g],Q.style!==0&&!On(Q.color)&&Q.width>0?Q.style!==2?[3,5]:[4,this.renderDashedDottedBorder(Q.color,Q.width,h,i.curves,2)]:[3,11]):[3,13];case 4:return b.sent(),[3,11];case 5:return Q.style!==3?[3,7]:[4,this.renderDashedDottedBorder(Q.color,Q.width,h,i.curves,3)];case 6:return b.sent(),[3,11];case 7:return Q.style!==4?[3,9]:[4,this.renderDoubleBorder(Q.color,Q.width,h,i.curves)];case 8:return b.sent(),[3,11];case 9:return[4,this.renderSolidBorder(Q.color,h,i.curves)];case 10:b.sent(),b.label=11;case 11:h++,b.label=12;case 12:return g++,[3,3];case 13:return[2]}})})},a.prototype.renderDashedDottedBorder=function(i,l,c,f,d){return _e(this,void 0,void 0,function(){var h,g,w,Q,C,b,_,j,J,cA,iA,tA,gA,uA,q,Z,q,Z;return je(this,function(CA){return this.ctx.save(),h=Bb(f,c),g=Vh(f,c),d===2&&(this.path(g),this.ctx.clip()),gt(g[0])?(w=g[0].start.x,Q=g[0].start.y):(w=g[0].x,Q=g[0].y),gt(g[1])?(C=g[1].end.x,b=g[1].end.y):(C=g[1].x,b=g[1].y),c===0||c===2?_=Math.abs(w-C):_=Math.abs(Q-b),this.ctx.beginPath(),d===3?this.formatPath(h):this.formatPath(g.slice(0,2)),j=l<3?l*3:l*2,J=l<3?l*2:l,d===3&&(j=l,J=l),cA=!0,_<=j*2?cA=!1:_<=j*2+J?(iA=_/(2*j+J),j*=iA,J*=iA):(tA=Math.floor((_+J)/(j+J)),gA=(_-tA*j)/(tA-1),uA=(_-(tA+1)*j)/tA,J=uA<=0||Math.abs(J-gA)<Math.abs(J-uA)?gA:uA),cA&&(d===3?this.ctx.setLineDash([0,j+J]):this.ctx.setLineDash([j,J])),d===3?(this.ctx.lineCap="round",this.ctx.lineWidth=l):this.ctx.lineWidth=l*2+1.1,this.ctx.strokeStyle=Ee(i),this.ctx.stroke(),this.ctx.setLineDash([]),d===2&&(gt(g[0])&&(q=g[3],Z=g[0],this.ctx.beginPath(),this.formatPath([new pA(q.end.x,q.end.y),new pA(Z.start.x,Z.start.y)]),this.ctx.stroke()),gt(g[1])&&(q=g[1],Z=g[2],this.ctx.beginPath(),this.formatPath([new pA(q.end.x,q.end.y),new pA(Z.start.x,Z.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},a.prototype.render=function(i){return _e(this,void 0,void 0,function(){var l;return je(this,function(c){switch(c.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=Ee(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),l=ub(i),[4,this.renderStack(l)];case 1:return c.sent(),this.applyEffects([]),[2,this.canvas]}})})},a}(tp),xb=function(r){return r instanceof R0||r instanceof O0?!0:r instanceof Ju&&r.type!==hs&&r.type!==gs},vb=function(r,a){switch(r){case 0:return Qs(a);case 2:return rb(a);case 1:default:return ms(a)}},bb=function(r){switch(r){case 1:return"center";case 2:return"right";case 0:default:return"left"}},yb=["-apple-system","system-ui"],Fb=function(r){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?r.filter(function(a){return yb.indexOf(a)===-1}):r},Eb=function(r){xt(a,r);function a(i,l){var c=r.call(this,i,l)||this;return c.canvas=l.canvas?l.canvas:document.createElement("canvas"),c.ctx=c.canvas.getContext("2d"),c.options=l,c.canvas.width=Math.floor(l.width*l.scale),c.canvas.height=Math.floor(l.height*l.scale),c.canvas.style.width=l.width+"px",c.canvas.style.height=l.height+"px",c.ctx.scale(c.options.scale,c.options.scale),c.ctx.translate(-l.x,-l.y),c.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+l.width+"x"+l.height+" at "+l.x+","+l.y+") with scale "+l.scale),c}return a.prototype.render=function(i){return _e(this,void 0,void 0,function(){var l,c;return je(this,function(f){switch(f.label){case 0:return l=Iu(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,i),[4,Hb(l)];case 1:return c=f.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=Ee(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(c,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},a}(tp),Hb=function(r){return new Promise(function(a,i){var l=new Image;l.onload=function(){a(l)},l.onerror=i,l.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(r))})},Sb=function(){function r(a){var i=a.id,l=a.enabled;this.id=i,this.enabled=l,this.start=Date.now()}return r.prototype.debug=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,Ri([this.id,this.getTime()+"ms"],a)):this.info.apply(this,a))},r.prototype.getTime=function(){return Date.now()-this.start},r.prototype.info=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,Ri([this.id,this.getTime()+"ms"],a))},r.prototype.warn=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,Ri([this.id,this.getTime()+"ms"],a)):this.info.apply(this,a))},r.prototype.error=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,Ri([this.id,this.getTime()+"ms"],a)):this.info.apply(this,a))},r.instances={},r}(),Db=function(){function r(a,i){var l;this.windowBounds=i,this.instanceName="#"+r.instanceCount++,this.logger=new Sb({id:this.instanceName,enabled:a.logging}),this.cache=(l=a.cache)!==null&&l!==void 0?l:new Wv(this,a)}return r.instanceCount=1,r}(),qu=function(r,a){return a===void 0&&(a={}),Tb(r,a)};typeof window<"u"&&q0.setContext(window);var Tb=function(r,a){return _e(void 0,void 0,void 0,function(){var i,l,c,f,d,h,g,w,Q,C,b,_,j,J,cA,iA,tA,gA,uA,q,CA,Z,CA,T,M,BA,nA,oA,xA,dA,R,x,O,z,sA,m,G,lA,aA,F;return je(this,function(P){switch(P.label){case 0:if(!r||typeof r!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(i=r.ownerDocument,!i)throw new Error("Element is not attached to a Document");if(l=i.defaultView,!l)throw new Error("Document is not attached to a Window");return c={allowTaint:(T=a.allowTaint)!==null&&T!==void 0?T:!1,imageTimeout:(M=a.imageTimeout)!==null&&M!==void 0?M:15e3,proxy:a.proxy,useCORS:(BA=a.useCORS)!==null&&BA!==void 0?BA:!1},f=wu({logging:(nA=a.logging)!==null&&nA!==void 0?nA:!0,cache:a.cache},c),d={windowWidth:(oA=a.windowWidth)!==null&&oA!==void 0?oA:l.innerWidth,windowHeight:(xA=a.windowHeight)!==null&&xA!==void 0?xA:l.innerHeight,scrollX:(dA=a.scrollX)!==null&&dA!==void 0?dA:l.pageXOffset,scrollY:(R=a.scrollY)!==null&&R!==void 0?R:l.pageYOffset},h=new en(d.scrollX,d.scrollY,d.windowWidth,d.windowHeight),g=new Db(f,h),w=(x=a.foreignObjectRendering)!==null&&x!==void 0?x:!1,Q={allowTaint:(O=a.allowTaint)!==null&&O!==void 0?O:!1,onclone:a.onclone,ignoreElements:a.ignoreElements,inlineImages:w,copyStyles:w},g.logger.debug("Starting document clone with size "+h.width+"x"+h.height+" scrolled to "+-h.left+","+-h.top),C=new Gh(g,r,Q),b=C.clonedReferenceElement,b?[4,C.toIFrame(i,h)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return _=P.sent(),j=Zu(b)||Nv(b)?cm(b.ownerDocument):xs(g,b),J=j.width,cA=j.height,iA=j.left,tA=j.top,gA=Ib(g,b,a.backgroundColor),uA={canvas:a.canvas,backgroundColor:gA,scale:(sA=(z=a.scale)!==null&&z!==void 0?z:l.devicePixelRatio)!==null&&sA!==void 0?sA:1,x:((m=a.x)!==null&&m!==void 0?m:0)+iA,y:((G=a.y)!==null&&G!==void 0?G:0)+tA,width:(lA=a.width)!==null&&lA!==void 0?lA:Math.ceil(J),height:(aA=a.height)!==null&&aA!==void 0?aA:Math.ceil(cA)},w?(g.logger.debug("Document cloned, using foreign object rendering"),CA=new Eb(g,uA),[4,CA.render(b)]):[3,3];case 2:return q=P.sent(),[3,5];case 3:return g.logger.debug("Document cloned, element located at "+iA+","+tA+" with size "+J+"x"+cA+" using computed rendering"),g.logger.debug("Starting DOM parsing"),Z=k0(g,b),gA===Z.styles.backgroundColor&&(Z.styles.backgroundColor=$t.TRANSPARENT),g.logger.debug("Starting renderer for element at "+uA.x+","+uA.y+" with size "+uA.width+"x"+uA.height),CA=new Ub(g,uA),[4,CA.render(Z)];case 4:q=P.sent(),P.label=5;case 5:return(!((F=a.removeContainer)!==null&&F!==void 0)||F)&&(Gh.destroy(_)||g.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),g.logger.debug("Finished rendering"),[2,q]}})})},Ib=function(r,a,i){var l=a.ownerDocument,c=l.documentElement?pl(r,getComputedStyle(l.documentElement).backgroundColor):$t.TRANSPARENT,f=l.body?pl(r,getComputedStyle(l.body).backgroundColor):$t.TRANSPARENT,d=typeof i=="string"?pl(r,i):i===null?$t.TRANSPARENT:4294967295;return a===l.documentElement?On(c)?On(f)?d:f:c:d};const Nb=Object.freeze(Object.defineProperty({__proto__:null,default:qu},Symbol.toStringTag,{value:"Module"})),Lb=({ganttChart:r,tasks:a,onUpdateGanttChart:i,onBack:l})=>{const[c,f]=eA.useState({name:"",startDate:new Date().toISOString().split("T")[0],endDate:new Date(Date.now()+6048e5).toISOString().split("T")[0],progress:0,dependencies:[],color:w()}),[d,h]=eA.useState(null),g=eA.useRef(null);function w(){const T=["#3b82f6","#ef4444","#10b981","#f59e0b","#6366f1","#ec4899","#14b8a6","#f97316","#8b5cf6","#d946ef"];return T[Math.floor(Math.random()*T.length)]}const Q=eA.useMemo(()=>{if(a.length===0){const R=new Date,x=new Date(R.getTime()+30*24*60*60*1e3);return{startDate:R,endDate:x,totalDays:30}}const T=a.flatMap(R=>[new Date(R.startDate),new Date(R.endDate)]),M=new Date(Math.min(...T)),BA=new Date(Math.max(...T)),nA=7,oA=new Date(M.getTime()-nA*24*60*60*1e3),xA=new Date(BA.getTime()+nA*24*60*60*1e3),dA=Math.ceil((xA-oA)/(24*60*60*1e3));return{startDate:oA,endDate:xA,totalDays:dA}},[a]),C=eA.useMemo(()=>{const T=[],{startDate:M,totalDays:BA}=Q;for(let nA=0;nA<=BA;nA+=7){const oA=new Date(M.getTime()+nA*24*60*60*1e3);T.push({date:oA,position:nA/BA*100,label:oA.toLocaleDateString("en-US",{month:"short",day:"numeric"})})}return T},[Q]),b=T=>{const M=new Date(T),{startDate:BA,totalDays:nA}=Q,oA=Math.max(0,(M-BA)/(24*60*60*1e3));return Math.min(100,oA/nA*100)},_=(T,M)=>{const BA=new Date(T),nA=new Date(M),{totalDays:oA}=Q,xA=Math.max(1,(nA-BA)/(24*60*60*1e3));return Math.min(100,xA/oA*100)},j=()=>{if(!c.name.trim())return;const T=[...a,{id:Date.now(),...c,progress:Math.min(100,Math.max(0,parseInt(c.progress)||0))}];i({...r,tasks:T}),f({name:"",startDate:new Date().toISOString().split("T")[0],endDate:new Date(Date.now()+7*24*60*60*1e3).toISOString().split("T")[0],progress:0,dependencies:[],color:w()})},J=T=>{const BA=a.filter(nA=>nA.id!==T).map(nA=>({...nA,dependencies:nA.dependencies.filter(oA=>oA!==T)}));i({...r,tasks:BA})},cA=(T,M)=>{const BA=a.map(nA=>nA.id===T?{...nA,...M}:nA);i({...r,tasks:BA})},iA=T=>{h({...T})},tA=()=>{d&&(cA(d.id,d),h(null))},gA=()=>{h(null)},uA=()=>{const T={...r,tasks:a},M=JSON.stringify(T,null,2),BA=new Blob([M],{type:"application/json"}),nA=URL.createObjectURL(BA),oA=document.createElement("a");oA.href=nA,oA.download=`${r.name.replace(/\s+/g,"_")}_gantt.json`,document.body.appendChild(oA),oA.click(),document.body.removeChild(oA),URL.revokeObjectURL(nA)},q=T=>{const M=T.target.files[0];if(!M)return;const BA=new FileReader;BA.onload=nA=>{try{const oA=JSON.parse(nA.target.result);oA.name&&Array.isArray(oA.tasks)?i(oA):alert("Invalid Gantt chart file format")}catch{alert("Error parsing JSON file")}},BA.readAsText(M)},Z=()=>{g.current&&qu(g.current,{scrollX:-window.scrollX,scrollY:-window.scrollY,windowWidth:g.current.scrollWidth,windowHeight:g.current.scrollHeight,scale:2}).then(T=>{const M=document.createElement("a");M.download=`${r.name.replace(/\s+/g,"_")}_gantt.png`,M.href=T.toDataURL("image/png"),M.click()})},CA=T=>a.find(M=>M.id===T);return u.jsxs("div",{className:"gantt-maker",children:[u.jsxs("div",{className:"toolbar",children:[u.jsxs("button",{onClick:l,className:"back-btn",children:[u.jsx(Gu,{size:16})," Back"]}),u.jsx("h2",{children:r.name}),u.jsx("div",{className:"spacer"}),u.jsxs("div",{className:"export-actions",children:[u.jsxs("button",{onClick:uA,className:"export-btn",title:"Export as JSON",children:[u.jsx(Us,{size:16})," JSON"]}),u.jsxs("label",{className:"import-btn",title:"Import from JSON",children:[u.jsx(bl,{size:16})," JSON",u.jsx("input",{type:"file",accept:".json",onChange:q,style:{display:"none"}})]}),u.jsxs("button",{onClick:Z,className:"export-btn",title:"Export as Image",children:[u.jsx(ku,{size:16})," Image"]})]})]}),u.jsxs("div",{className:"gantt-container",children:[u.jsxs("div",{className:"gantt-sidebar",children:[u.jsxs("div",{className:"sidebar-header",children:["Tasks (",a.length,")"]}),u.jsx("div",{className:"task-list",children:a.map(T=>u.jsxs("div",{className:"task-item",children:[u.jsxs("div",{className:"task-info",children:[u.jsx("div",{className:"task-name",children:T.name}),u.jsxs("div",{className:"task-dates",children:[new Date(T.startDate).toLocaleDateString()," - ",new Date(T.endDate).toLocaleDateString()]}),u.jsxs("div",{className:"task-progress-text",children:[T.progress,"% complete"]}),T.dependencies.length>0&&u.jsxs("div",{className:"task-dependencies",children:["Dependencies: ",T.dependencies.map(M=>CA(M)?.name).filter(Boolean).join(", ")]})]}),u.jsxs("div",{className:"task-actions",children:[u.jsx("button",{onClick:()=>iA(T),className:"edit-btn",title:"Edit task",children:u.jsx(YQ,{size:14})}),u.jsx("button",{onClick:()=>J(T.id),className:"delete-btn",title:"Delete task",children:u.jsx(wt,{size:14})})]})]},T.id))}),u.jsxs("div",{className:"add-task-form",children:[u.jsx("h3",{children:"Add New Task"}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Task Name"}),u.jsx("input",{type:"text",value:c.name,onChange:T=>f({...c,name:T.target.value}),placeholder:"Task description"})]}),u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Start Date"}),u.jsx("input",{type:"date",value:c.startDate,onChange:T=>f({...c,startDate:T.target.value})})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"End Date"}),u.jsx("input",{type:"date",value:c.endDate,onChange:T=>f({...c,endDate:T.target.value})})]})]}),u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Progress (%)"}),u.jsx("input",{type:"number",min:"0",max:"100",value:c.progress,onChange:T=>f({...c,progress:T.target.value})})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Color"}),u.jsxs("div",{className:"color-picker",children:[u.jsx("input",{type:"color",value:c.color,onChange:T=>f({...c,color:T.target.value})}),u.jsx("button",{onClick:()=>f({...c,color:w()}),className:"random-color-btn",title:"Random color",children:"Random"})]})]})]}),u.jsxs("button",{onClick:j,className:"add-btn",children:[u.jsx(An,{size:16})," Add Task"]})]})]}),u.jsxs("div",{className:"gantt-timeline",ref:g,children:[u.jsxs("div",{className:"timeline-header",children:[u.jsx("div",{className:"timeline-title",children:"Timeline"}),u.jsx("div",{className:"timeline-scale",children:C.map((T,M)=>u.jsxs("div",{className:"scale-point",style:{left:`${T.position}%`},children:[u.jsx("div",{className:"scale-line"}),u.jsx("div",{className:"scale-label",children:T.label})]},M))})]}),u.jsxs("div",{className:"timeline-content",children:[a.map((T,M)=>{const BA=b(T.startDate),nA=_(T.startDate,T.endDate),oA=`${T.color}33`;return u.jsx("div",{className:"timeline-row",children:u.jsxs("div",{className:"timeline-task",children:[u.jsxs("div",{className:"task-bar",style:{left:`${BA}%`,width:`${nA}%`,background:`linear-gradient(to right, ${T.color} ${T.progress}%, ${oA} ${T.progress}%)`,borderColor:T.color},title:`${T.name}: ${T.progress}% complete`,children:[u.jsxs("div",{className:"task-progress",children:[T.progress,"%"]}),u.jsx("div",{className:"task-label",children:T.name})]}),T.dependencies.map(xA=>{const dA=CA(xA);if(!dA)return null;const R=a.findIndex(z=>z.id===xA),x=b(dA.endDate),O=_(dA.startDate,dA.endDate);return u.jsxs("svg",{className:"dependency-arrow",style:{position:"absolute",left:`${x+O}%`,top:`${(R-M)*44-12}px`,width:`${Math.abs(BA-(x+O))}%`,height:`${Math.abs((M-R)*44)+24}px`,pointerEvents:"none",zIndex:1},children:[u.jsx("defs",{children:u.jsx("marker",{id:`arrowhead-${T.id}-${xA}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:u.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})})}),u.jsx("path",{d:`M 0 ${R<M?0:Math.abs((M-R)*44)} 
                                L ${Math.abs(BA-(x+O))*.5} ${R<M?0:Math.abs((M-R)*44)} 
                                L ${Math.abs(BA-(x+O))*.5} ${R<M?Math.abs((M-R)*44):0} 
                                L ${Math.abs(BA-(x+O))} ${R<M?Math.abs((M-R)*44):0}`,stroke:"#64748b",strokeWidth:"2",fill:"none",markerEnd:`url(#arrowhead-${T.id}-${xA})`})]},`dep-${xA}`)})]})},T.id)}),u.jsx("div",{className:"today-line",style:{left:`${b(new Date().toISOString().split("T")[0])}%`},children:u.jsx("div",{className:"today-label",children:"Today"})})]})]})]}),d&&u.jsx("div",{className:"modal-overlay",children:u.jsxs("div",{className:"modal",children:[u.jsx("h3",{children:"Edit Task"}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Task Name"}),u.jsx("input",{type:"text",value:d.name,onChange:T=>h({...d,name:T.target.value})})]}),u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Start Date"}),u.jsx("input",{type:"date",value:d.startDate,onChange:T=>h({...d,startDate:T.target.value})})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"End Date"}),u.jsx("input",{type:"date",value:d.endDate,onChange:T=>h({...d,endDate:T.target.value})})]})]}),u.jsxs("div",{className:"form-row",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Progress (%)"}),u.jsx("input",{type:"number",min:"0",max:"100",value:d.progress,onChange:T=>h({...d,progress:T.target.value})})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Color"}),u.jsx("input",{type:"color",value:d.color,onChange:T=>h({...d,color:T.target.value})})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Dependencies"}),u.jsx("div",{className:"dependency-list",children:a.filter(T=>T.id!==d.id).map(T=>u.jsxs("label",{className:"dependency-item",children:[u.jsx("input",{type:"checkbox",checked:d.dependencies.includes(T.id),onChange:M=>{M.target.checked?h({...d,dependencies:[...d.dependencies,T.id]}):h({...d,dependencies:d.dependencies.filter(BA=>BA!==T.id)})}}),T.name]},T.id))})]}),u.jsxs("div",{className:"modal-actions",children:[u.jsx("button",{onClick:gA,className:"cancel-btn",children:"Cancel"}),u.jsx("button",{onClick:tA,className:"save-btn",children:"Save Changes"})]})]})}),u.jsx("style",{jsx:!0,children:`
        .gantt-maker {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        .toolbar {
          display: flex;
          align-items: center;
          padding: 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 20px;
          color: #1e293b;
        }
        
        .spacer {
          flex: 1;
        }
        
        .export-actions {
          display: flex;
          gap: 8px;
        }
        
        .export-btn, .import-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 14px;
        }
        
        .export-btn {
          background: #3b82f6;
          color: white;
          border: 1px solid #3b82f6;
        }
        
        .export-btn:hover {
          background: #2563eb;
        }
        
        .import-btn {
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
          position: relative;
        }
        
        .import-btn:hover {
          background: #e2e8f0;
        }
        
        .back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
        }
        
        .back-btn:hover {
          background: #e2e8f0;
        }
        
        .gantt-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .gantt-sidebar {
          width: 350px;
          background: white;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          overflow: auto;
        }
        
        .sidebar-header {
          padding: 16px;
          font-weight: 600;
          color: #1e293b;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .task-list {
          flex: 1;
          overflow: auto;
          padding: 8px 0;
        }
        
        .task-item {
          display: flex;
          align-items: flex-start;
          padding: 12px 16px;
          border-bottom: 1px solid #f1f5f9;
          gap: 12px;
        }
        
        .task-item:hover {
          background: #f8fafc;
        }
        
        .task-info {
          flex: 1;
        }
        
        .task-name {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 4px;
        }
        
        .task-dates {
          font-size: 12px;
          color: #64748b;
          margin-bottom: 2px;
        }
        
        .task-progress-text {
          font-size: 12px;
          color: #3b82f6;
          font-weight: 500;
          margin-bottom: 2px;
        }
        
        .task-dependencies {
          font-size: 11px;
          color: #64748b;
          font-style: italic;
        }
        
        .task-actions {
          display: flex;
          gap: 4px;
        }
        
        .edit-btn, .delete-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .edit-btn {
          background: #dbeafe;
          color: #3b82f6;
        }
        
        .edit-btn:hover {
          background: #bfdbfe;
        }
        
        .delete-btn {
          background: #fee2e2;
          color: #ef4444;
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .add-task-form {
          padding: 16px;
          border-top: 1px solid #e2e8f0;
        }
        
        .add-task-form h3 {
          margin-top: 0;
          margin-bottom: 16px;
          font-size: 16px;
          color: #1e293b;
        }
        
        .form-group {
          margin-bottom: 12px;
        }
        
        .form-row {
          display: flex;
          gap: 12px;
        }
        
        .form-row .form-group {
          flex: 1;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 4px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
        }
        
        .form-group input {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 14px;
          box-sizing: border-box;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .color-picker {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .color-picker input[type="color"] {
          width: 40px;
          height: 40px;
          padding: 2px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          cursor: pointer;
        }
        
        .random-color-btn {
          padding: 8px 12px;
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
        }
        
        .random-color-btn:hover {
          background: #e2e8f0;
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 16px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        
        .add-btn:hover {
          background: #2563eb;
        }
        
        .gantt-timeline {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: auto;
        }
        
        .timeline-header {
          padding: 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          position: relative;
        }
        
        .timeline-title {
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 16px;
        }
        
        .timeline-scale {
          position: relative;
          height: 40px;
        }
        
        .scale-point {
          position: absolute;
          transform: translateX(-50%);
        }
        
        .scale-line {
          width: 1px;
          height: 16px;
          background: #d1d5db;
          margin: 0 auto 4px;
        }
        
        .scale-label {
          font-size: 11px;
          color: #64748b;
          text-align: center;
          white-space: nowrap;
        }
        
        .timeline-content {
          flex: 1;
          padding: 16px;
          position: relative;
          min-height: 400px;
          background: repeating-linear-gradient(
            to right,
            #f8fafc,
            #f8fafc 1px,
            white 1px,
            white 50px
          );
        }
        
        .timeline-row {
          height: 44px;
          margin-bottom: 4px;
          position: relative;
        }
        
        .timeline-task {
          height: 36px;
          position: relative;
        }
        
        .task-bar {
          position: absolute;
          height: 28px;
          top: 4px;
          border-radius: 4px;
          box-sizing: border-box;
          cursor: pointer;
          transition: all 0.2s;
          overflow: hidden;
        }
        
        .task-bar:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .task-progress {
          position: absolute;
          right: 4px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 10px;
          color: #1e40af;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.9);
          padding: 1px 3px;
          border-radius: 2px;
        }
        
        .task-label {
          position: absolute;
          left: 4px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 11px;
          color: #1e40af;
          font-weight: 500;
          max-width: calc(100% - 40px);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .dependency-arrow {
          pointer-events: none;
        }
        
        .today-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #ef4444;
          z-index: 10;
        }
        
        .today-label {
          position: absolute;
          top: -8px;
          left: 4px;
          font-size: 10px;
          color: #ef4444;
          font-weight: 600;
          background: white;
          padding: 2px 4px;
          border-radius: 2px;
          white-space: nowrap;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .modal {
          background: white;
          border-radius: 8px;
          padding: 24px;
          width: 500px;
          max-width: 90vw;
          max-height: 80vh;
          overflow: auto;
        }
        
        .modal h3 {
          margin-top: 0;
          margin-bottom: 20px;
          color: #1e293b;
        }
        
        .dependency-list {
          max-height: 120px;
          overflow: auto;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          padding: 8px;
        }
        
        .dependency-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px 0;
          font-size: 14px;
          cursor: pointer;
        }
        
        .dependency-item input {
          width: auto;
        }
        
        .modal-actions {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          margin-top: 24px;
        }
        
        .cancel-btn {
          padding: 8px 16px;
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          cursor: pointer;
        }
        
        .cancel-btn:hover {
          background: #e2e8f0;
        }
        
        .save-btn {
          padding: 8px 16px;
          background: #3b82f6;
          color: white;
          border: 1px solid #3b82f6;
          border-radius: 6px;
          cursor: pointer;
        }
        
        .save-btn:hover {
          background: #2563eb;
        }
      `})]})},Kb=({useCaseDiagrams:r,onCreateUseCaseDiagram:a,onLoadUseCaseDiagram:i,onDeleteUseCaseDiagram:l})=>{const[c,f]=eA.useState(!1);return u.jsxs("div",{className:"use-case-main",children:[u.jsxs("div",{className:"welcome-screen",children:[u.jsx("div",{className:"welcome-icon",children:u.jsx(Wh,{size:48})}),u.jsx("h2",{children:"Use Case Diagram Designer"}),u.jsx("p",{children:"Model system functionality with actors and use cases"}),u.jsx("div",{className:"action-buttons",children:u.jsxs("button",{onClick:()=>f(!0),className:"primary-btn",children:[u.jsx(An,{size:16})," New Diagram"]})}),r.length>0&&u.jsxs("div",{className:"diagram-list",children:[u.jsx("h3",{children:"Your Use Case Diagrams"}),r.map(d=>u.jsxs("div",{className:"diagram-card",onClick:()=>i(d),children:[u.jsxs("div",{className:"diagram-card-content",children:[u.jsx("div",{className:"diagram-card-name",children:d.name}),u.jsxs("div",{className:"diagram-card-meta",children:[u.jsx("span",{children:new Date(d.createdAt).toLocaleDateString()}),u.jsxs("span",{children:[d.actors?.length||0," actors • ",d.useCases?.length||0," use cases"]})]})]}),u.jsxs("div",{className:"diagram-card-actions",children:[u.jsx("button",{onClick:h=>{h.stopPropagation(),i(d)},className:"open-btn",children:u.jsx(vl,{size:16})}),u.jsx("button",{onClick:h=>{h.stopPropagation(),confirm("Delete this diagram?")&&l(d.id)},className:"delete-btn",children:u.jsx(wt,{size:16})})]})]},d.id))]})]}),c&&u.jsx("div",{className:"modal-overlay",children:u.jsxs("div",{className:"modal-content",children:[u.jsxs("div",{className:"modal-header",children:[u.jsx("h2",{children:"Create New Use Case Diagram"}),u.jsx("button",{onClick:()=>f(!1),className:"close-btn",children:"×"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Diagram Name"}),u.jsx("input",{type:"text",placeholder:"e.g., Online Shopping System",id:"diagramName",autoFocus:!0})]}),u.jsxs("div",{className:"modal-footer",children:[u.jsx("button",{onClick:()=>f(!1),className:"cancel-btn",children:"Cancel"}),u.jsx("button",{onClick:()=>{const d=document.getElementById("diagramName").value;d.trim()&&(a(d),f(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),u.jsx("style",{jsx:!0,children:`
        .use-case-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
          color: white;
        }
        
        .welcome-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .welcome-icon {
          margin-bottom: 20px;
          opacity: 0.9;
        }
        
        .welcome-screen h2 {
          font-size: 36px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        
        .welcome-screen p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
          max-width: 600px;
        }
        
        .action-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
        }
        
        .primary-btn {
          background: white;
          color: #10b981;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .diagram-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .diagram-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .diagram-card {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .diagram-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .diagram-card-content {
          flex: 1;
        }
        
        .diagram-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .diagram-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .diagram-card-actions {
          display: flex;
          gap: 8px;
        }
        
        .open-btn, .delete-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        
        .open-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .open-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .delete-btn {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        
        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          max-width: 500px;
          max-height: 80vh;
          overflow: auto;
          color: #1f2937;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
          font-size: 24px;
          font-weight: 700;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          font-size: 24px;
          color: #6b7280;
        }
        
        .close-btn:hover {
          color: #4b5563;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #4b5563;
        }
        
        .form-group input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: #10b981;
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }
        
        .cancel-btn {
          background: #f3f4f6;
          color: #4b5563;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .cancel-btn:hover {
          background: #e5e7eb;
        }
        
        .create-btn {
          background: #10b981;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #059669;
        }
      `})]})},Mb="modulepreload",Ob=function(r){return"/Rootrie/"+r},Xh={},Rb=function(a,i,l){let c=Promise.resolve();if(i&&i.length>0){let w=function(Q){return Promise.all(Q.map(C=>Promise.resolve(C).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};var d=w;document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),g=h?.nonce||h?.getAttribute("nonce");c=w(i.map(Q=>{if(Q=Ob(Q),Q in Xh)return;Xh[Q]=!0;const C=Q.endsWith(".css"),b=C?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${Q}"]${b}`))return;const _=document.createElement("link");if(_.rel=C?"stylesheet":Mb,C||(_.as="script"),_.crossOrigin="",_.href=Q,g&&_.setAttribute("nonce",g),document.head.appendChild(_),C)return new Promise((j,J)=>{_.addEventListener("load",j),_.addEventListener("error",()=>J(new Error(`Unable to preload CSS for ${Q}`)))})}))}function f(h){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=h,window.dispatchEvent(g),!g.defaultPrevented)throw h}return c.then(h=>{for(const g of h||[])g.status==="rejected"&&f(g.reason);return a().catch(f)})},jb=({useCaseDiagram:r,actors:a=[],useCases:i=[],relationships:l=[],onUpdateUseCaseDiagram:c,onBack:f})=>{const[d,h]=eA.useState(""),[g,w]=eA.useState(""),[Q,C]=eA.useState(null),[b,_]=eA.useState(null),[j,J]=eA.useState("association"),[cA,iA]=eA.useState("editor"),[tA,gA]=eA.useState(""),[uA,q]=eA.useState(null),[Z,CA]=eA.useState({x:0,y:0}),[T,M]=eA.useState(!1),[BA,nA]=eA.useState(!1),[oA,xA]=eA.useState(1),[dA,R]=eA.useState({x:0,y:0}),[x,O]=eA.useState(!1),[z,sA]=eA.useState({x:0,y:0}),m=eA.useRef(null),G=eA.useRef(null),lA=20,aA=60,F=80,P=150,W=40;eA.useEffect(()=>{gA(JSON.stringify({actors:a,useCases:i,relationships:l},null,2))},[a,i,l]);const bA=E=>BA?Math.round(E/lA)*lA:E,hA=()=>{if(!d.trim())return;const E=[...a,{id:Date.now(),name:d,x:bA(100+Math.random()*200),y:bA(100+Math.random()*200)}];c({...r,actors:E}),h("")},OA=()=>{if(!g.trim())return;const E=[...i,{id:Date.now(),name:g,x:bA(300+Math.random()*300),y:bA(150+Math.random()*200)}];c({...r,useCases:E}),w("")},re=E=>{const QA=a.filter(UA=>UA.id!==E),wA=l.filter(UA=>!(UA.source===E||UA.target===E));c({...r,actors:QA,relationships:wA})},He=E=>{const QA=i.filter(UA=>UA.id!==E),wA=l.filter(UA=>!(UA.source===E||UA.target===E));c({...r,useCases:QA,relationships:wA})},Le=()=>{if(!Q||!b)return;const E={id:Date.now(),source:Q,target:b,type:j};c({...r,relationships:[...l,E]}),C(null),_(null)},Ke=E=>{const QA=l.filter(wA=>wA.id!==E);c({...r,relationships:QA})},xe=(E,QA)=>QA?{x:E.x+aA/2,y:E.y+F/2}:{x:E.x+P/2,y:E.y+W/2},vt=(E,QA,wA)=>{const UA=xe(E,QA);if(QA)return{x:UA.x+25*Math.cos(wA),y:UA.y+25*Math.sin(wA)};{const te=P/2,oe=W/2,ce=Math.cos(wA),zA=Math.sin(wA),jA=te*oe/Math.sqrt(oe*oe*ce*ce+te*te*zA*zA);return{x:UA.x+jA*ce,y:UA.y+jA*zA}}},jn=(E,QA,wA,UA)=>{const te=G.current;if(!te)return{x:E,y:QA};const oe=te.getBoundingClientRect(),ce=Math.max(0,-dA.x),zA=Math.max(0,-dA.y),jA=Math.min(oe.width/oA-wA,oe.width/oA-dA.x-wA),Ve=Math.min(oe.height/oA-UA,oe.height/oA-dA.y-UA);return{x:Math.max(ce,Math.min(jA,E)),y:Math.max(zA,Math.min(Ve,QA))}},Qe=(E,QA,wA)=>{E.preventDefault(),E.stopPropagation();const UA=m.current.getBoundingClientRect(),te=(E.clientX-UA.left-dA.x)/oA,oe=(E.clientY-UA.top-dA.y)/oA;q({...QA,type:wA}),CA({x:te-QA.x,y:oe-QA.y})},Nt=E=>{if(!(!uA&&!x)){if(x){const QA=E.clientX-z.x,wA=E.clientY-z.y;R(UA=>({x:UA.x+QA,y:UA.y+wA})),sA({x:E.clientX,y:E.clientY});return}if(uA){const QA=m.current.getBoundingClientRect();let wA=(E.clientX-QA.left-dA.x)/oA-Z.x,UA=(E.clientY-QA.top-dA.y)/oA-Z.y;wA=bA(wA),UA=bA(UA);const te=uA.type==="actor"?aA:P,oe=uA.type==="actor"?F:W,ce=jn(wA,UA,te,oe);if(uA.type==="actor"){const zA=a.map(jA=>jA.id===uA.id?{...jA,x:ce.x,y:ce.y}:jA);c({...r,actors:zA})}else if(uA.type==="useCase"){const zA=i.map(jA=>jA.id===uA.id?{...jA,x:ce.x,y:ce.y}:jA);c({...r,useCases:zA})}}}},tn=()=>{q(null),O(!1)},nn=E=>{E.target===m.current&&(O(!0),sA({x:E.clientX,y:E.clientY}))},bt=()=>{xA(E=>Math.min(E*1.2,3))},Gn=()=>{xA(E=>Math.max(E/1.2,.3))},X=()=>{xA(1),R({x:0,y:0})},rA=()=>{const E=a.map((wA,UA)=>({...wA,x:50,y:100+UA*120})),QA=i.map((wA,UA)=>({...wA,x:400,y:100+UA*80}));c({...r,actors:E,useCases:QA})};eA.useEffect(()=>{const E=wA=>Nt(wA),QA=()=>tn();if(uA||x)return document.addEventListener("mousemove",E),document.addEventListener("mouseup",QA),()=>{document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",QA)}},[uA,x,Z,dA,oA,a,i,c,r,z,BA]);const I=()=>JSON.stringify({actors:a,useCases:i,relationships:l},null,2),H=()=>{navigator.clipboard.writeText(I())},$=()=>{try{const E=JSON.parse(tA);Array.isArray(E.actors)&&Array.isArray(E.useCases)&&Array.isArray(E.relationships)?c({...r,actors:E.actors,useCases:E.useCases,relationships:E.relationships}):alert("Invalid JSON format. Expected actors, useCases, and relationships arrays.")}catch(E){alert("Error parsing JSON: "+E.message)}},fA=E=>{const QA=E.target.files[0];if(!QA)return;const wA=new FileReader;wA.onload=UA=>{gA(UA.target.result)},wA.readAsText(QA)},L=()=>{if(!m.current)return;const E=m.current.style.transform;m.current.style.transform="scale(1) translate(0px, 0px)",Rb(()=>Promise.resolve().then(()=>Nb),void 0).then(QA=>{QA.default(m.current,{backgroundColor:"#f8fafc",scale:2,useCORS:!0}).then(wA=>{const UA=document.createElement("a");UA.download=`${r.name||"use-case-diagram"}.png`,UA.href=wA.toDataURL("image/png"),UA.click(),m.current.style.transform=E})})},AA=()=>{if(!T)return null;const E=G.current;if(!E)return null;const QA=E.getBoundingClientRect(),wA=QA.width/oA,UA=QA.height/oA,te=Math.floor(-dA.x/oA/lA)*lA,oe=Math.floor(-dA.y/oA/lA)*lA,ce=[];for(let zA=te;zA<wA-dA.x/oA;zA+=lA)ce.push(u.jsx("line",{x1:zA,y1:0,x2:zA,y2:UA,stroke:"#e2e8f0",strokeWidth:"1"},`v-${zA}`));for(let zA=oe;zA<UA-dA.y/oA;zA+=lA)ce.push(u.jsx("line",{x1:0,y1:zA,x2:wA,y2:zA,stroke:"#e2e8f0",strokeWidth:"1"},`h-${zA}`));return u.jsx("svg",{className:"grid-overlay",children:ce})},TA=E=>u.jsxs("div",{className:"actor",style:{left:`${E.x}px`,top:`${E.y}px`,width:`${aA}px`,height:`${F}px`,cursor:uA?.id===E.id?"grabbing":"grab"},onMouseDown:QA=>Qe(QA,E,"actor"),children:[u.jsx("div",{className:"actor-icon",children:u.jsx(Wh,{size:20})}),u.jsx("div",{className:"actor-name",children:E.name})]},E.id),kA=E=>u.jsx("div",{className:"use-case",style:{left:`${E.x}px`,top:`${E.y}px`,width:`${P}px`,height:`${W}px`,cursor:uA?.id===E.id?"grabbing":"grab"},onMouseDown:QA=>Qe(QA,E,"useCase"),children:u.jsx("div",{className:"use-case-name",children:E.name})},E.id),_A=E=>{const QA=a.find(ca=>ca.id===E.source),wA=i.find(ca=>ca.id===E.target);if(!QA||!wA)return null;const UA=xe(QA,!0),te=xe(wA,!1),oe=te.x-UA.x,ce=te.y-UA.y,zA=Math.atan2(ce,oe),jA=vt(QA,!0,zA),Ve=vt(wA,!1,zA+Math.PI);let Lt={},an={};E.type==="include"?(Lt={strokeDasharray:"5,5",stroke:"#3b82f6"},an={fill:"#3b82f6"}):E.type==="extend"?(Lt={strokeDasharray:"8,3",stroke:"#10b981"},an={fill:"#10b981"}):E.type==="generalization"?(Lt={stroke:"#8b5cf6"},an={fill:"none",stroke:"#8b5cf6",strokeWidth:"2"}):(Lt={stroke:"#64748b"},an={fill:"#64748b"});const rn=8,ln=Math.atan2(Ve.y-jA.y,Ve.x-jA.x);return Ve.x-rn*Math.cos(ln-Math.PI/6),Ve.y-rn*Math.sin(ln-Math.PI/6),Ve.x-rn*Math.cos(ln+Math.PI/6),Ve.y-rn*Math.sin(ln+Math.PI/6),u.jsxs("svg",{className:"relationship",children:[u.jsx("defs",{children:u.jsx("marker",{id:`arrowhead-${E.id}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:u.jsx("polygon",{points:"0 0, 10 3.5, 0 7",...an})})}),u.jsx("line",{x1:jA.x,y1:jA.y,x2:Ve.x,y2:Ve.y,strokeWidth:"2",markerEnd:`url(#arrowhead-${E.id})`,...Lt}),E.type!=="association"&&u.jsx("text",{x:(jA.x+Ve.x)/2,y:(jA.y+Ve.y)/2-8,textAnchor:"middle",fontSize:"11",fill:Lt.stroke||"#64748b",className:"relationship-label",children:`<<${E.type}>>`})]},E.id)};return u.jsxs("div",{className:"use-case-maker",children:[u.jsxs("div",{className:"toolbar",children:[u.jsxs("button",{onClick:f,className:"back-btn",children:[u.jsx(Gu,{size:16})," Back"]}),u.jsx("h2",{children:r.name}),u.jsx("div",{className:"spacer"}),u.jsxs("div",{className:"toolbar-controls",children:[u.jsx("button",{onClick:()=>M(!T),className:`tool-btn ${T?"active":""}`,children:u.jsx(jQ,{size:16})}),u.jsx("button",{onClick:()=>nA(!BA),className:`tool-btn ${BA?"active":""}`,children:u.jsx(zQ,{size:16})}),u.jsx("button",{onClick:Gn,className:"tool-btn",children:u.jsx($h,{size:16})}),u.jsxs("span",{className:"zoom-level",children:[Math.round(oA*100),"%"]}),u.jsx("button",{onClick:bt,className:"tool-btn",children:u.jsx(Ph,{size:16})}),u.jsx("button",{onClick:X,className:"tool-btn",children:u.jsx(qQ,{size:16})}),u.jsx("button",{onClick:rA,className:"tool-btn",children:"Auto"})]}),u.jsxs("div",{className:"export-buttons",children:[u.jsxs("button",{onClick:L,className:"export-btn",children:[u.jsx(ku,{size:16})," Export Image"]}),u.jsxs("button",{onClick:H,className:"export-btn",children:[u.jsx(Jh,{size:16})," Copy JSON"]}),u.jsxs("button",{onClick:()=>{const E=new Blob([I()],{type:"application/json"}),QA=URL.createObjectURL(E),wA=document.createElement("a");wA.href=QA,wA.download=`${r.name||"use-case-diagram"}.json`,document.body.appendChild(wA),wA.click(),document.body.removeChild(wA),URL.revokeObjectURL(QA)},className:"export-btn",children:[u.jsx(Us,{size:16})," Export JSON"]})]})]}),u.jsxs("div",{className:"tabs",children:[u.jsx("button",{className:`tab ${cA==="editor"?"active":""}`,onClick:()=>iA("editor"),children:"Diagram Editor"}),u.jsx("button",{className:`tab ${cA==="json"?"active":""}`,onClick:()=>iA("json"),children:"JSON Editor"})]}),cA==="editor"?u.jsxs("div",{className:"diagram-container",children:[u.jsxs("div",{className:"diagram-sidebar",children:[u.jsxs("div",{className:"sidebar-section",children:[u.jsx("h3",{children:"Actors"}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"text",value:d,onChange:E=>h(E.target.value),placeholder:"New actor name",onKeyPress:E=>E.key==="Enter"&&hA()}),u.jsxs("button",{onClick:hA,className:"add-btn",children:[u.jsx(An,{size:16})," Add Actor"]})]}),u.jsx("div",{className:"actor-list",children:a.map(E=>u.jsxs("div",{className:"list-item",children:[u.jsx("div",{className:"item-name",children:E.name}),u.jsx("button",{onClick:()=>re(E.id),className:"delete-btn",children:u.jsx(wt,{size:14})})]},E.id))})]}),u.jsxs("div",{className:"sidebar-section",children:[u.jsx("h3",{children:"Use Cases"}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"text",value:g,onChange:E=>w(E.target.value),placeholder:"New use case name",onKeyPress:E=>E.key==="Enter"&&OA()}),u.jsxs("button",{onClick:OA,className:"add-btn",children:[u.jsx(An,{size:16})," Add Use Case"]})]}),u.jsx("div",{className:"use-case-list",children:i.map(E=>u.jsxs("div",{className:"list-item",children:[u.jsx("div",{className:"item-name",children:E.name}),u.jsx("button",{onClick:()=>He(E.id),className:"delete-btn",children:u.jsx(wt,{size:14})})]},E.id))})]}),u.jsxs("div",{className:"sidebar-section",children:[u.jsx("h3",{children:"Relationships"}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Actor"}),u.jsxs("select",{value:Q||"",onChange:E=>C(E.target.value?parseInt(E.target.value):null),children:[u.jsx("option",{value:"",children:"Select actor"}),a.map(E=>u.jsx("option",{value:E.id,children:E.name},E.id))]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Use Case"}),u.jsxs("select",{value:b||"",onChange:E=>_(E.target.value?parseInt(E.target.value):null),children:[u.jsx("option",{value:"",children:"Select use case"}),i.map(E=>u.jsx("option",{value:E.id,children:E.name},E.id))]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Relationship Type"}),u.jsxs("select",{value:j,onChange:E=>J(E.target.value),children:[u.jsx("option",{value:"association",children:"Association"}),u.jsx("option",{value:"include",children:"Include"}),u.jsx("option",{value:"extend",children:"Extend"}),u.jsx("option",{value:"generalization",children:"Generalization"})]})]}),u.jsxs("button",{onClick:Le,disabled:!Q||!b,className:"add-btn",children:[u.jsx(Zh,{size:16})," Add Relationship"]})]}),u.jsxs("div",{className:"sidebar-section",children:[u.jsx("h3",{children:"Current Relationships"}),u.jsx("div",{className:"relationship-list",children:l.map(E=>{const QA=a.find(UA=>UA.id===E.source)||a.find(UA=>UA.id===E.target),wA=i.find(UA=>UA.id===E.source)||i.find(UA=>UA.id===E.target);return!QA||!wA?null:u.jsxs("div",{className:"list-item",children:[u.jsxs("div",{className:"item-name",children:[QA.name," → ",wA.name," (",E.type,")"]}),u.jsx("button",{onClick:()=>Ke(E.id),className:"delete-btn",children:u.jsx(wt,{size:14})})]},E.id)})})]})]}),u.jsx("div",{className:"diagram-canvas-container",ref:G,onMouseDown:nn,children:u.jsxs("div",{className:"diagram-canvas",ref:m,style:{transform:`scale(${oA}) translate(${dA.x/oA}px, ${dA.y/oA}px)`,transformOrigin:"0 0"},children:[AA(),l.map(_A),a.map(TA),i.map(kA)]})})]}):u.jsxs("div",{className:"json-editor",children:[u.jsx("div",{className:"json-actions",children:u.jsxs("button",{onClick:()=>{const E=document.createElement("input");E.type="file",E.accept=".json",E.onchange=fA,E.click()},className:"import-btn",children:[u.jsx(bl,{size:16})," Import JSON File"]})}),u.jsx("textarea",{value:tA,onChange:E=>gA(E.target.value),className:"json-textarea"}),u.jsxs("button",{onClick:$,className:"import-btn",children:[u.jsx(qh,{size:16})," Apply JSON"]})]}),u.jsx("style",{jsx:!0,children:`
        .use-case-maker {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
        }
        
        .toolbar {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 18px;
          color: #1e293b;
        }
        
        .spacer {
          flex: 1;
        }
        
        .toolbar-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-right: 16px;
        }
        
        .tool-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .tool-btn:hover {
          background: #e2e8f0;
          color: #475569;
        }
        
        .tool-btn.active {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }
        
        .zoom-level {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
          min-width: 40px;
          text-align: center;
        }
        
        .export-buttons {
          display: flex;
          gap: 8px;
        }
        
        .back-btn, .export-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 14px;
        }
        
        .back-btn {
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
        }
        
        .back-btn:hover {
          background: #e2e8f0;
        }
        
        .export-btn {
          background: #3b82f6;
          color: white;
          border: 1px solid #3b82f6;
        }
        
        .export-btn:hover {
          background: #2563eb;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          background: white;
          flex-shrink: 0;
        }
        
        .tab {
          padding: 12px 24px;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 500;
          color: #64748b;
          border-bottom: 2px solid transparent;
        }
        
        .tab.active {
          color: #3b82f6;
          border-bottom-color: #3b82f6;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .diagram-sidebar {
          width: 300px;
          background: white;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          flex-shrink: 0;
        }
        
        .sidebar-section {
          padding: 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .sidebar-section h3 {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 16px;
          color: #1e293b;
        }
        
        .form-group {
          margin-bottom: 12px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 4px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
        }
        
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 14px;
          box-sizing: border-box;
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 16px;
          background: #10b981;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
          transition: background 0.2s;
        }
        
        .add-btn:hover {
          background: #059669;
        }
        
        .add-btn:disabled {
          background: #d1fae5;
          cursor: not-allowed;
          color: #6b7280;
        }
        
        .actor-list,
        .use-case-list,
        .relationship-list {
          max-height: 200px;
          overflow-y: auto;
          margin-top: 12px;
          color: #1e293b;
        }
        
        .list-item {
          display: flex;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .item-name {
          flex: 1;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-right: 8px;
        }
        
        .delete-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fee2e2;
          color: #ef4444;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .diagram-canvas-container {
          flex: 1;
          background: #f8fafc;
          position: relative;
          overflow: hidden;
          cursor: grab;
        }
        
        .diagram-canvas-container:active {
          cursor: grabbing;
        }
        
        .diagram-canvas {
          width: 100%;
          height: 100%;
          position: relative;
          background: #f8fafc;
        }
        
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }
        
        .actor {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 10;
          user-select: none;
          color: #1e293b;
        }
        
        .actor-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          border: 2px solid #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: all 0.2s;
        }
        
        .actor:hover .actor-icon {
          border-color: #3b82f6;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        
        .actor-name {
          margin-top: 8px;
          font-size: 12px;
          text-align: center;
          font-weight: 500;
          background: white;
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          max-width: 80px;
          word-wrap: break-word;
          line-height: 1.2;
        }
        
        .use-case {
          position: absolute;
          background: white;
          border: 2px solid #64748b;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 500;
          z-index: 10;
          user-select: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: all 0.2s;
          text-align: center;
          line-height: 1.2;
          color: #1e293b;
        }
        
        .use-case:hover {
          border-color: #3b82f6;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        
        .use-case-name {
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        
        .relationship {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 5;
        }
        
        .relationship-label {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-weight: 500;
        }
        
        .json-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 16px;
          background: white;
          overflow: hidden;
        }
        
        .json-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
          flex-shrink: 0;
        }
        
        .import-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          background: #10b981;
          color: white;
          transition: background 0.2s;
        }
        
        .import-btn:hover {
          background: #059669;
        }
        
        .json-textarea {
          flex: 1;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 13px;
          resize: none;
          margin-bottom: 12px;
          line-height: 1.5;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        /* Scrollbar styles */
        .actor-list::-webkit-scrollbar,
        .use-case-list::-webkit-scrollbar,
        .relationship-list::-webkit-scrollbar,
        .diagram-sidebar::-webkit-scrollbar,
        .json-textarea::-webkit-scrollbar {
          width: 6px;
        }
        
        .actor-list::-webkit-scrollbar-track,
        .use-case-list::-webkit-scrollbar-track,
        .relationship-list::-webkit-scrollbar-track,
        .diagram-sidebar::-webkit-scrollbar-track,
        .json-textarea::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        
        .actor-list::-webkit-scrollbar-thumb,
        .use-case-list::-webkit-scrollbar-thumb,
        .relationship-list::-webkit-scrollbar-thumb,
        .diagram-sidebar::-webkit-scrollbar-thumb,
        .json-textarea::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        
        .actor-list::-webkit-scrollbar-thumb:hover,
        .use-case-list::-webkit-scrollbar-thumb:hover,
        .relationship-list::-webkit-scrollbar-thumb:hover,
        .diagram-sidebar::-webkit-scrollbar-thumb:hover,
        .json-textarea::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `})]})},Gb=({sequenceDiagrams:r,onCreateSequenceDiagram:a,onLoadSequenceDiagram:i,onDeleteSequenceDiagram:l})=>{const[c,f]=eA.useState(!1);return u.jsxs("div",{className:"sequence-main",children:[u.jsxs("div",{className:"welcome-screen",children:[u.jsx("div",{className:"welcome-icon",children:u.jsx(_Q,{size:48})}),u.jsx("h2",{children:"Sequence Diagram Designer"}),u.jsx("p",{children:"Model interactions between objects in sequential order"}),u.jsx("div",{className:"action-buttons",children:u.jsxs("button",{onClick:()=>f(!0),className:"primary-btn",children:[u.jsx(An,{size:16})," New Diagram"]})}),r.length>0&&u.jsxs("div",{className:"diagram-list",children:[u.jsx("h3",{children:"Your Sequence Diagrams"}),r.map(d=>u.jsxs("div",{className:"diagram-card",onClick:()=>i(d),children:[u.jsxs("div",{className:"diagram-card-content",children:[u.jsx("div",{className:"diagram-card-name",children:d.name}),u.jsxs("div",{className:"diagram-card-meta",children:[u.jsx("span",{children:new Date(d.createdAt).toLocaleDateString()}),u.jsxs("span",{children:[d.participants?.length||0," participants • ",d.messages?.length||0," messages"]})]})]}),u.jsxs("div",{className:"diagram-card-actions",children:[u.jsx("button",{onClick:h=>{h.stopPropagation(),i(d)},className:"open-btn",children:u.jsx(vl,{size:16})}),u.jsx("button",{onClick:h=>{h.stopPropagation(),confirm("Delete this diagram?")&&l(d.id)},className:"delete-btn",children:u.jsx(wt,{size:16})})]})]},d.id))]})]}),c&&u.jsx("div",{className:"modal-overlay",children:u.jsxs("div",{className:"modal-content",children:[u.jsxs("div",{className:"modal-header",children:[u.jsx("h2",{children:"Create New Sequence Diagram"}),u.jsx("button",{onClick:()=>f(!1),className:"close-btn",children:"×"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Diagram Name"}),u.jsx("input",{type:"text",placeholder:"e.g., User Login Process",id:"diagramName",autoFocus:!0})]}),u.jsxs("div",{className:"modal-footer",children:[u.jsx("button",{onClick:()=>f(!1),className:"cancel-btn",children:"Cancel"}),u.jsx("button",{onClick:()=>{const d=document.getElementById("diagramName").value;d.trim()&&(a(d),f(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),u.jsx("style",{jsx:!0,children:`
        .sequence-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden;
          user-select: none;
          color: white;
        }
        
        .welcome-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .welcome-icon {
          margin-bottom: 20px;
          opacity: 0.9;
        }
        
        .welcome-screen h2 {
          font-size: 36px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        
        .welcome-screen p {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.9;
          max-width: 600px;
        }
        
        .action-buttons {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
        }
        
        .primary-btn {
          background: white;
          color: #3b82f6;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .diagram-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .diagram-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .diagram-card {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .diagram-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .diagram-card-content {
          flex: 1;
        }
        
        .diagram-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .diagram-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .diagram-card-actions {
          display: flex;
          gap: 8px;
        }
        
        .open-btn, .delete-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        
        .open-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .open-btn:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .delete-btn {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
        }
        
        .delete-btn:hover {
          background: rgba(239, 68, 68, 0.3);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }
        
        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 24px;
          width: 100%;
          max-width: 500px;
          max-height: 80vh;
          overflow: auto;
          color: #1f2937;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .modal-header h2 {
          margin: 0;
          color: #2d3748;
          font-size: 24px;
          font-weight: 700;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          font-size: 24px;
          color: #6b7280;
        }
        
        .close-btn:hover {
          color: #4b5563;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #4b5563;
        }
        
        .form-group input {
          width: 100%;
          padding: 12px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }
        
        .form-group input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }
        
        .cancel-btn {
          background: #f3f4f6;
          color: #4b5563;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .cancel-btn:hover {
          background: #e5e7eb;
        }
        
        .create-btn {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #2563eb;
        }
      `})]})},kb=({sequenceDiagram:r,participants:a=[],messages:i=[],onUpdateSequenceDiagram:l,onBack:c})=>{const[f,d]=eA.useState(""),[h,g]=eA.useState(""),[w,Q]=eA.useState(""),[C,b]=eA.useState(""),[_,j]=eA.useState("sync"),[J,cA]=eA.useState("editor"),[iA,tA]=eA.useState(""),[gA,uA]=eA.useState(null),[q,Z]=eA.useState({x:0,y:0}),CA=eA.useRef(null);eA.useEffect(()=>{tA(JSON.stringify({participants:a,messages:i},null,2))},[a,i]);const T=()=>{if(!f.trim())return;const F=[...a,{id:Date.now(),name:f,x:50+a.length*150,y:50}];l({...r,participants:F}),d("")},M=()=>{if(!h.trim()||!w||!C)return;const F=a.find(bA=>bA.id===parseInt(w)),P=a.find(bA=>bA.id===parseInt(C));if(!F||!P)return;const W=[...i,{id:Date.now(),text:h,from:F.id,to:P.id,type:_,order:i.length+1}];l({...r,messages:W}),g(""),Q(""),b("")},BA=F=>{const P=a.filter(hA=>hA.id!==F),bA=i.filter(hA=>!(hA.from===F||hA.to===F)).map((hA,OA)=>({...hA,order:OA+1}));l({...r,participants:P,messages:bA})},nA=F=>{const W=i.filter(bA=>bA.id!==F).map((bA,hA)=>({...bA,order:hA+1}));l({...r,messages:W})},oA=F=>{const P=i.findIndex(bA=>bA.id===F);if(P<=0)return;const W=[...i];[W[P-1],W[P]]=[W[P],W[P-1]],W.forEach((bA,hA)=>{bA.order=hA+1}),l({...r,messages:W})},xA=F=>{const P=i.findIndex(bA=>bA.id===F);if(P>=i.length-1)return;const W=[...i];[W[P],W[P+1]]=[W[P+1],W[P]],W.forEach((bA,hA)=>{bA.order=hA+1}),l({...r,messages:W})},dA=(F,P)=>{const W=F.currentTarget.getBoundingClientRect(),bA=F.clientX-W.left,hA=F.clientY-W.top;uA(P),Z({x:bA-P.x,y:hA-P.y})},R=F=>{if(!gA)return;const P=CA.current.getBoundingClientRect(),W=F.clientX-P.left-q.x,bA=F.clientY-P.top-q.y,hA=a.map(OA=>OA.id===gA.id?{...OA,x:W,y:bA}:OA);l({...r,participants:hA})},x=()=>{uA(null)};eA.useEffect(()=>{if(gA)return document.addEventListener("mousemove",R),document.addEventListener("mouseup",x),()=>{document.removeEventListener("mousemove",R),document.removeEventListener("mouseup",x)}},[gA,R]);const O=()=>JSON.stringify({participants:a,messages:i},null,2),z=()=>{navigator.clipboard.writeText(O())},sA=()=>{try{const F=JSON.parse(iA);Array.isArray(F.participants)&&Array.isArray(F.messages)?l({...r,participants:F.participants,messages:F.messages}):alert("Invalid JSON format. Expected participants and messages arrays.")}catch(F){alert("Error parsing JSON: "+F.message)}},m=F=>{const P=F.target.files[0];if(!P)return;const W=new FileReader;W.onload=bA=>{tA(bA.target.result)},W.readAsText(P)},G=()=>{CA.current&&qu(CA.current,{backgroundColor:"#f8fafc",scale:2}).then(F=>{const P=document.createElement("a");P.download=`${r.name||"sequence-diagram"}.png`,P.href=F.toDataURL("image/png"),P.click()})},lA=F=>u.jsxs("div",{className:"participant",style:{left:`${F.x}px`,top:`${F.y}px`,cursor:gA?.id===F.id?"grabbing":"grab"},onMouseDown:P=>dA(P,F),children:[u.jsx("div",{className:"participant-line"}),u.jsx("div",{className:"participant-name",children:F.name})]},F.id),aA=(F,P)=>{const W=a.find(xe=>xe.id===F.from),bA=a.find(xe=>xe.id===F.to);if(!W||!bA)return null;const hA=120+P*50,OA=W.x+25,re=bA.x+25;let He={},Le="",Ke=OA<re?"right":"left";return F.type==="async"?(He={strokeDasharray:"5,5",stroke:"#3b82f6"},Le=Ke==="right"?`${re-10},${hA-5} ${re},${hA} ${re-10},${hA+5}`:`${OA+10},${hA-5} ${OA},${hA} ${OA+10},${hA+5}`):F.type==="return"?(He={stroke:"#10b981"},Le=Ke==="right"?`${OA+10},${hA-5} ${OA},${hA} ${OA+10},${hA+5}`:`${re-10},${hA-5} ${re},${hA} ${re-10},${hA+5}`):(He={stroke:"#64748b"},Le=Ke==="right"?`${re-10},${hA-5} ${re},${hA} ${re-10},${hA+5}`:`${OA+10},${hA-5} ${OA},${hA} ${OA+10},${hA+5}`),u.jsxs(hu.Fragment,{children:[u.jsxs("svg",{className:"message",children:[u.jsx("line",{x1:OA,y1:hA,x2:re,y2:hA,strokeWidth:"2",...He}),u.jsx("polygon",{points:Le,fill:He.stroke||"#64748b"}),u.jsx("text",{x:(OA+re)/2,y:hA-10,textAnchor:"middle",fontSize:"12",fill:He.stroke||"#64748b",children:F.text})]}),F.type==="sync"&&u.jsx(hu.Fragment,{children:u.jsxs("svg",{className:"activation-bar",children:[u.jsx("rect",{x:OA-2,y:hA,width:"4",height:"40",fill:"#64748b",opacity:"0.3"}),u.jsx("rect",{x:re-2,y:hA,width:"4",height:"40",fill:"#64748b",opacity:"0.3"})]})})]},F.id)};return u.jsxs("div",{className:"sequence-maker",children:[u.jsxs("div",{className:"toolbar",children:[u.jsxs("button",{onClick:c,className:"back-btn",children:[u.jsx(Gu,{size:16})," Back"]}),u.jsx("h2",{children:r.name}),u.jsx("div",{className:"spacer"}),u.jsxs("div",{className:"export-buttons",children:[u.jsxs("button",{onClick:G,className:"export-btn",children:[u.jsx(ku,{size:16})," Export Image"]}),u.jsxs("button",{onClick:z,className:"export-btn",children:[u.jsx(Jh,{size:16})," Copy JSON"]}),u.jsxs("button",{onClick:()=>{const F=new Blob([O()],{type:"application/json"}),P=URL.createObjectURL(F),W=document.createElement("a");W.href=P,W.download=`${r.name||"sequence-diagram"}.json`,document.body.appendChild(W),W.click(),document.body.removeChild(W),URL.revokeObjectURL(P)},className:"export-btn",children:[u.jsx(Us,{size:16})," Export JSON"]})]})]}),u.jsxs("div",{className:"tabs",children:[u.jsx("button",{className:`tab ${J==="editor"?"active":""}`,onClick:()=>cA("editor"),children:"Diagram Editor"}),u.jsx("button",{className:`tab ${J==="json"?"active":""}`,onClick:()=>cA("json"),children:"JSON Editor"})]}),J==="editor"?u.jsxs("div",{className:"diagram-container",children:[u.jsxs("div",{className:"diagram-sidebar",children:[u.jsxs("div",{className:"sidebar-section",children:[u.jsx("h3",{children:"Participants"}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"text",value:f,onChange:F=>d(F.target.value),placeholder:"New participant name",onKeyPress:F=>F.key==="Enter"&&T()}),u.jsxs("button",{onClick:T,className:"add-btn",children:[u.jsx(An,{size:16})," Add Participant"]})]}),u.jsx("div",{className:"participant-list",children:a.map(F=>u.jsxs("div",{className:"list-item",children:[u.jsx("div",{className:"item-name",children:F.name}),u.jsx("button",{onClick:()=>BA(F.id),className:"delete-btn",children:u.jsx(wt,{size:14})})]},F.id))})]}),u.jsxs("div",{className:"sidebar-section",children:[u.jsx("h3",{children:"Messages"}),u.jsx("div",{className:"form-group",children:u.jsx("input",{type:"text",value:h,onChange:F=>g(F.target.value),placeholder:"Message text",onKeyPress:F=>F.key==="Enter"&&M()})}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"From"}),u.jsxs("select",{value:w||"",onChange:F=>Q(F.target.value),children:[u.jsx("option",{value:"",children:"Select participant"}),a.map(F=>u.jsx("option",{value:F.id,children:F.name},F.id))]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"To"}),u.jsxs("select",{value:C||"",onChange:F=>b(F.target.value),children:[u.jsx("option",{value:"",children:"Select participant"}),a.map(F=>u.jsx("option",{value:F.id,children:F.name},F.id))]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{children:"Message Type"}),u.jsxs("select",{value:_,onChange:F=>j(F.target.value),children:[u.jsx("option",{value:"sync",children:"Synchronous"}),u.jsx("option",{value:"async",children:"Asynchronous"}),u.jsx("option",{value:"return",children:"Return"})]})]}),u.jsxs("button",{onClick:M,disabled:!h.trim()||!w||!C,className:"add-btn",children:[u.jsx(Zh,{size:16})," Add Message"]})]}),u.jsxs("div",{className:"sidebar-section",children:[u.jsx("h3",{children:"Message Sequence"}),u.jsx("div",{className:"message-list",children:i.sort((F,P)=>F.order-P.order).map(F=>{const P=a.find(bA=>bA.id===F.from),W=a.find(bA=>bA.id===F.to);return!P||!W?null:u.jsxs("div",{className:"message-item",children:[u.jsxs("div",{className:"message-info",children:[u.jsxs("div",{className:"message-order",children:[F.order,"."]}),u.jsxs("div",{className:"message-text",children:[P.name," → ",W.name,": ",F.text]}),u.jsx("div",{className:"message-type",children:F.type})]}),u.jsxs("div",{className:"message-actions",children:[u.jsx("button",{onClick:()=>oA(F.id),disabled:F.order===1,className:"move-btn",children:"↑"}),u.jsx("button",{onClick:()=>xA(F.id),disabled:F.order===i.length,className:"move-btn",children:"↓"}),u.jsx("button",{onClick:()=>nA(F.id),className:"delete-btn",children:u.jsx(wt,{size:14})})]})]},F.id)})})]})]}),u.jsxs("div",{className:"diagram-canvas",ref:CA,children:[i.sort((F,P)=>F.order-P.order).map((F,P)=>aA(F,P)),a.map(lA)]})]}):u.jsxs("div",{className:"json-editor",children:[u.jsx("div",{className:"json-actions",children:u.jsxs("button",{onClick:()=>{const F=document.createElement("input");F.type="file",F.accept=".json",F.onchange=m,F.click()},className:"import-btn",children:[u.jsx(bl,{size:16})," Import JSON File"]})}),u.jsx("textarea",{value:iA,onChange:F=>tA(F.target.value),className:"json-textarea"}),u.jsxs("button",{onClick:sA,className:"import-btn",children:[u.jsx(qh,{size:16})," Apply JSON"]})]}),u.jsx("style",{jsx:!0,children:`
        .sequence-maker {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        .toolbar {
          display: flex;
          align-items: center;
          padding: 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 20px;
          color: #1e293b;
        }
        
        .spacer {
          flex: 1;
        }
        
        .export-buttons {
          display: flex;
          gap: 8px;
        }
        
        .back-btn, .export-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .back-btn {
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #e2e8f0;
        }
        
        .back-btn:hover {
          background: #e2e8f0;
        }
        
        .export-btn {
          background: #3b82f6;
          color: white;
          border: 1px solid #3b82f6;
        }
        
        .export-btn:hover {
          background: #2563eb;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          background: white;
        }
        
        .tab {
          padding: 12px 24px;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 500;
          color: #64748b;
          border-bottom: 2px solid transparent;
        }
        
        .tab.active {
          color: #3b82f6;
          border-bottom-color: #3b82f6;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .diagram-sidebar {
          width: 300px;
          background: white;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          overflow: auto;
        }
        
        .sidebar-section {
          padding: 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .sidebar-section h3 {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 16px;
          color: #1e293b;
        }
        
        .form-group {
          margin-bottom: 12px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 4px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
        }
        
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 14px;
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 16px;
          background: #10b981;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
        }
        
        .add-btn:hover {
          background: #059669;
        }
        
        .add-btn:disabled {
          background: #d1fae5;
          cursor: not-allowed;
        }
        
        .participant-list,
        .message-list {
          max-height: 200px;
          overflow-y: auto;
          margin-top: 12px;
        }
        
        .list-item {
          display: flex;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .item-name {
          flex: 1;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .delete-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fee2e2;
          color: #ef4444;
          border: none;
          cursor: pointer;
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .diagram-canvas {
          flex: 1;
          background: #f8fafc;
          position: relative;
          overflow: auto;
        }
        
        .participant {
          position: absolute;
          width: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .participant-line {
          width: 2px;
          height: 500px;
          background: #64748b;
        }
        
        .participant-name {
          margin-top: 4px;
          font-size: 12px;
          text-align: center;
          font-weight: 500;
          background: white;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid #e2e8f0;
        }
        
        .message {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .activation-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .message-item {
          display: flex;
          flex-direction: column;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .message-info {
          display: flex;
          align-items: center;
          margin-bottom: 4px;
        }
        
        .message-order {
          font-weight: bold;
          margin-right: 8px;
          font-size: 12px;
          color: #64748b;
        }
        
        .message-text {
          flex: 1;
          font-size: 12px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .message-type {
          font-size: 10px;
          background: #e2e8f0;
          padding: 2px 4px;
          border-radius: 4px;
          margin-left: 8px;
          color: #475569;
        }
        
        .message-actions {
          display: flex;
          gap: 4px;
          justify-content: flex-end;
        }
        
        .move-btn {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e2e8f0;
          color: #475569;
          border: none;
          cursor: pointer;
          font-size: 10px;
          padding: 0;
        }
        
        .move-btn:hover {
          background: #cbd5e1;
        }
        
        .move-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .json-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 16px;
          background: white;
        }
        
        .json-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }
        
        .import-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          background: #10b981;
          color: white;
        }
        
        .import-btn:hover {
          background: #059669;
        }
        
        .json-textarea {
          flex: 1;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-family: monospace;
          font-size: 14px;
          resize: none;
          margin-bottom: 12px;
        }
      `})]})},SA={PROJECT:"projects",FLOWCHART:"flowcharts",GANTT:"gantt",USE_CASE:"usecase",SEQUENCE:"sequence"},gu=()=>({projects:[],currentProject:null,flowcharts:[],currentFlowchart:null,ganttCharts:[],currentGanttChart:null,useCaseDiagrams:[],currentUseCaseDiagram:null,sequenceDiagrams:[],currentSequenceDiagram:null}),_b=()=>{const r=localStorage.getItem("evolutionChartData");if(!r)return gu();try{const a=JSON.parse(r);return{...gu(),...a}}catch(a){return console.error("Failed to parse localStorage data:",a),gu()}},sl=r=>{localStorage.setItem("evolutionChartData",JSON.stringify(r))},Vb=()=>{const[,r]=eA.useReducer(R=>R+1,0),[a,i]=eA.useState(SA.PROJECT),[l,c]=eA.useState(""),f=()=>_b(),d=(R,x,O={})=>{const z=f(),sA={id:Date.now(),name:x,createdAt:new Date().toISOString(),...O},m={...z};switch(m.currentProject=null,m.currentFlowchart=null,m.currentGanttChart=null,m.currentUseCaseDiagram=null,m.currentSequenceDiagram=null,R){case SA.PROJECT:m.projects=[...z.projects,sA],m.currentProject=sA;break;case SA.FLOWCHART:m.flowcharts=[...z.flowcharts,sA],m.currentFlowchart=sA;break;case SA.GANTT:m.ganttCharts=[...z.ganttCharts,sA],m.currentGanttChart=sA;break;case SA.USE_CASE:m.useCaseDiagrams=[...z.useCaseDiagrams,sA],m.currentUseCaseDiagram=sA;break;case SA.SEQUENCE:m.sequenceDiagrams=[...z.sequenceDiagrams,sA],m.currentSequenceDiagram=sA;break}sl(m),r()},h=(R,x)=>{const O=f(),z={...O};switch(R){case SA.PROJECT:z.projects=O.projects.filter(sA=>sA.id!==x),O.currentProject?.id===x&&(z.currentProject=null);break;case SA.FLOWCHART:z.flowcharts=O.flowcharts.filter(sA=>sA.id!==x),O.currentFlowchart?.id===x&&(z.currentFlowchart=null);break;case SA.GANTT:z.ganttCharts=O.ganttCharts.filter(sA=>sA.id!==x),O.currentGanttChart?.id===x&&(z.currentGanttChart=null);break;case SA.USE_CASE:z.useCaseDiagrams=O.useCaseDiagrams.filter(sA=>sA.id!==x),O.currentUseCaseDiagram?.id===x&&(z.currentUseCaseDiagram=null);break;case SA.SEQUENCE:z.sequenceDiagrams=O.sequenceDiagrams.filter(sA=>sA.id!==x),O.currentSequenceDiagram?.id===x&&(z.currentSequenceDiagram=null);break}sl(z),r()},g=(R,x)=>{const O=f(),z={...O};switch(R){case SA.PROJECT:z.projects=O.projects.map(sA=>sA.id===x.id?x:sA),z.currentProject=x;break;case SA.FLOWCHART:z.flowcharts=O.flowcharts.map(sA=>sA.id===x.id?x:sA),z.currentFlowchart=x;break;case SA.GANTT:z.ganttCharts=O.ganttCharts.map(sA=>sA.id===x.id?x:sA),z.currentGanttChart=x;break;case SA.USE_CASE:z.useCaseDiagrams=O.useCaseDiagrams.map(sA=>sA.id===x.id?x:sA),z.currentUseCaseDiagram=x;break;case SA.SEQUENCE:z.sequenceDiagrams=O.sequenceDiagrams.map(sA=>sA.id===x.id?x:sA),z.currentSequenceDiagram=x;break}sl(z),r()},w=(R,x,O,z)=>{d(SA.PROJECT,R,{timelineStart:x,timelineEnd:O,timeUnit:z,nodes:[],connections:[],zoom:1,pan:{x:0,y:0}})},Q=R=>{d(SA.FLOWCHART,R,{nodes:[],edges:[],zoom:1,pan:{x:0,y:0}})},C=R=>{d(SA.GANTT,R,{tasks:[],startDate:new Date().toISOString(),endDate:new Date(Date.now()+30*24*60*60*1e3).toISOString()})},b=R=>{d(SA.USE_CASE,R,{actors:[],useCases:[],relationships:[],zoom:1,pan:{x:0,y:0}})},_=R=>{d(SA.SEQUENCE,R,{participants:[],messages:[],zoom:1,pan:{x:0,y:0}})},j=R=>h(SA.PROJECT,R),J=R=>h(SA.FLOWCHART,R),cA=R=>h(SA.GANTT,R),iA=R=>h(SA.USE_CASE,R),tA=R=>h(SA.SEQUENCE,R),gA=R=>g(SA.PROJECT,R),uA=R=>g(SA.FLOWCHART,R),q=R=>g(SA.GANTT,R),Z=R=>g(SA.USE_CASE,R),CA=R=>g(SA.SEQUENCE,R),T=R=>{try{const x=JSON.parse(R);return d(SA.FLOWCHART,`Imported Flowchart ${new Date().toLocaleString()}`,{nodes:x.nodes||[],edges:x.edges||[],zoom:1,pan:{x:0,y:0}}),!0}catch(x){return console.error("Invalid JSON:",x),!1}},M=()=>{const x={...f(),currentProject:null,currentFlowchart:null,currentGanttChart:null,currentUseCaseDiagram:null,currentSequenceDiagram:null};sl(x),r()},BA=(R,x)=>{const z={...f(),currentProject:null,currentFlowchart:null,currentGanttChart:null,currentUseCaseDiagram:null,currentSequenceDiagram:null};switch(R){case SA.PROJECT:z.currentProject=x;break;case SA.FLOWCHART:z.currentFlowchart=x;break;case SA.GANTT:z.currentGanttChart=x;break;case SA.USE_CASE:z.currentUseCaseDiagram=x;break;case SA.SEQUENCE:z.currentSequenceDiagram=x;break}sl(z),r()},nA={appContainer:{minHeight:"100vh",width:"97.3%",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",padding:"20px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},mainCard:{maxWidth:"1400px",margin:"0 auto",background:"rgba(255, 255, 255, 0.98)",backdropFilter:"blur(20px)",borderRadius:"24px",boxShadow:"0 25px 50px rgba(0, 0, 0, 0.15)",overflow:"hidden",minHeight:"85vh"},header:{background:"linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)",color:"white",padding:"40px 30px",textAlign:"center",position:"relative"},headerTitle:{fontSize:"36px",fontWeight:"800",margin:"0 0 12px 0",textShadow:"0 4px 8px rgba(0, 0, 0, 0.3)",letterSpacing:"-0.5px"},headerSubtitle:{fontSize:"18px",opacity:"0.95",margin:"0",fontWeight:"400"},modeSelector:{display:"flex",justifyContent:"center",padding:"30px 30px 0 30px",gap:"16px",marginBottom:"25px"},tabButton:{padding:"16px 32px",border:"2px solid transparent",borderRadius:"50px",background:"rgba(0, 0, 0, 0.05)",color:"#64748b",fontSize:"16px",fontWeight:"600",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",outline:"none",position:"relative",backdropFilter:"blur(10px)"},tabButtonActive:R=>({background:`linear-gradient(135deg, ${R} 0%, ${R} 100%)`,color:"white",borderColor:"rgba(255, 255, 255, 0.2)",boxShadow:`0 8px 25px rgba(${oA(R)}, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)`,transform:"translateY(-2px)"}),tabButtonHover:R=>({background:`rgba(${oA(R)}, 0.1)`,color:R})},oA=R=>{const x=parseInt(R.slice(1,3),16),O=parseInt(R.slice(3,5),16),z=parseInt(R.slice(5,7),16);return`${x}, ${O}, ${z}`},xA=()=>[{type:SA.PROJECT,label:"📊 Evolution Charts",color:"#4f46e5",component:u.jsx(rm,{projects:f().projects,onCreateProject:w,onLoadProject:R=>BA(SA.PROJECT,R),onDeleteProject:j})},{type:SA.FLOWCHART,label:"🔄 Flowcharts",color:"#7c3aed",component:u.jsx(im,{flowcharts:f().flowcharts,onCreateFlowchart:Q,onLoadFlowchart:R=>BA(SA.FLOWCHART,R),onDeleteFlowchart:J,onImportFlowchart:T})},{type:SA.GANTT,label:"📅 Gantt Charts",color:"#3b82f6",component:u.jsx(om,{ganttCharts:f().ganttCharts,onCreateGanttChart:C,onLoadGanttChart:R=>BA(SA.GANTT,R),onDeleteGanttChart:cA})},{type:SA.USE_CASE,label:"👥 Use Case",color:"#10b981",component:u.jsx(Kb,{useCaseDiagrams:f().useCaseDiagrams,onCreateUseCaseDiagram:b,onLoadUseCaseDiagram:R=>BA(SA.USE_CASE,R),onDeleteUseCaseDiagram:iA})},{type:SA.SEQUENCE,label:"↔️ Sequence",color:"#06b6d4",component:u.jsx(Gb,{sequenceDiagrams:f().sequenceDiagrams,onCreateSequenceDiagram:_,onLoadSequenceDiagram:R=>BA(SA.SEQUENCE,R),onDeleteSequenceDiagram:tA})}],dA=f();return u.jsx("div",{style:nA.appContainer,children:u.jsx("div",{style:nA.mainCard,children:dA.currentProject?u.jsx(lm,{project:dA.currentProject,nodes:dA.currentProject.nodes||[],connections:dA.currentProject.connections||[],onUpdateProject:gA,onBack:M}):dA.currentFlowchart?u.jsx(sm,{flowchart:dA.currentFlowchart,nodes:dA.currentFlowchart.nodes||[],edges:dA.currentFlowchart.edges||[],jsonInput:l,onJsonInputChange:c,onImportJson:T,onUpdateFlowchart:uA,onBack:M}):dA.currentGanttChart?u.jsx(Lb,{ganttChart:dA.currentGanttChart,tasks:dA.currentGanttChart.tasks||[],onUpdateGanttChart:q,onBack:M}):dA.currentUseCaseDiagram?u.jsx(jb,{useCaseDiagram:dA.currentUseCaseDiagram,actors:dA.currentUseCaseDiagram.actors||[],useCases:dA.currentUseCaseDiagram.useCases||[],relationships:dA.currentUseCaseDiagram.relationships||[],onUpdateUseCaseDiagram:Z,onBack:M}):dA.currentSequenceDiagram?u.jsx(kb,{sequenceDiagram:dA.currentSequenceDiagram,participants:dA.currentSequenceDiagram.participants||[],messages:dA.currentSequenceDiagram.messages||[],onUpdateSequenceDiagram:CA,onBack:M}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:nA.header,children:[u.jsx("h1",{style:nA.headerTitle,children:"Visual Designer Suite"}),u.jsx("p",{style:nA.headerSubtitle,children:"Create stunning diagrams and charts"})]}),u.jsx("div",{style:nA.modeSelector,children:xA().map(R=>u.jsx("button",{onClick:()=>i(R.type),style:{...nA.tabButton,...a===R.type?nA.tabButtonActive(R.color):{}},onMouseEnter:x=>{a!==R.type&&(x.target.style.background=nA.tabButtonHover(R.color).background,x.target.style.color=nA.tabButtonHover(R.color).color)},onMouseLeave:x=>{a!==R.type&&(x.target.style.background=nA.tabButton.background,x.target.style.color=nA.tabButton.color)},children:R.label},R.type))}),xA().find(R=>R.type===a)?.component]})})})};vQ.createRoot(document.getElementById("root")).render(u.jsx(eA.StrictMode,{children:u.jsx(Vb,{})}));
