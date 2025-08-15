(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))i(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function l(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(u){if(u.ep)return;u.ep=!0;const d=l(u);fetch(u.href,d)}})();function wm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Au={exports:{}},di={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yh;function bm(){if(Yh)return di;Yh=1;var r=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function l(i,u,d){var f=null;if(d!==void 0&&(f=""+d),u.key!==void 0&&(f=""+u.key),"key"in u){d={};for(var B in u)B!=="key"&&(d[B]=u[B])}else d=u;return u=d.ref,{$$typeof:r,type:i,key:f,ref:u!==void 0?u:null,props:d}}return di.Fragment=a,di.jsx=l,di.jsxs=l,di}var Jh;function Cm(){return Jh||(Jh=1,Au.exports=bm()),Au.exports}var s=Cm(),eu={exports:{}},JA={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh;function ym(){if(Zh)return JA;Zh=1;var r=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),y=Symbol.iterator;function T(C){return C===null||typeof C!="object"?null:(C=y&&C[y]||C["@@iterator"],typeof C=="function"?C:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,nA={};function hA(C,v,K){this.props=C,this.context=v,this.refs=nA,this.updater=K||W}hA.prototype.isReactComponent={},hA.prototype.setState=function(C,v){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,v,"setState")},hA.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function oA(){}oA.prototype=hA.prototype;function lA(C,v,K){this.props=C,this.context=v,this.refs=nA,this.updater=K||W}var CA=lA.prototype=new oA;CA.constructor=lA,Z(CA,hA.prototype),CA.isPureReactComponent=!0;var BA=Array.isArray,eA={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function yA(C,v,K,E,Y,iA){return K=iA.ref,{$$typeof:r,type:C,key:v,ref:K!==void 0?K:null,props:iA}}function L(C,v){return yA(C.type,v,void 0,void 0,void 0,C.props)}function z(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function wA(C){var v={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(K){return v[K]})}var sA=/\/+/g;function dA(C,v){return typeof C=="object"&&C!==null&&C.key!=null?wA(""+C.key):v.toString(36)}function UA(){}function jA(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(UA,UA):(C.status="pending",C.then(function(v){C.status==="pending"&&(C.status="fulfilled",C.value=v)},function(v){C.status==="pending"&&(C.status="rejected",C.reason=v)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function SA(C,v,K,E,Y){var iA=typeof C;(iA==="undefined"||iA==="boolean")&&(C=null);var H=!1;if(C===null)H=!0;else switch(iA){case"bigint":case"string":case"number":H=!0;break;case"object":switch(C.$$typeof){case r:case a:H=!0;break;case b:return H=C._init,SA(H(C._payload),v,K,E,Y)}}if(H)return Y=Y(C),H=E===""?"."+dA(C,0):E,BA(Y)?(K="",H!=null&&(K=H.replace(sA,"$&/")+"/"),SA(Y,v,K,"",function(LA){return LA})):Y!=null&&(z(Y)&&(Y=L(Y,K+(Y.key==null||C&&C.key===Y.key?"":(""+Y.key).replace(sA,"$&/")+"/")+H)),v.push(Y)),1;H=0;var uA=E===""?".":E+":";if(BA(C))for(var mA=0;mA<C.length;mA++)E=C[mA],iA=uA+dA(E,mA),H+=SA(E,v,K,iA,Y);else if(mA=T(C),typeof mA=="function")for(C=mA.call(C),mA=0;!(E=C.next()).done;)E=E.value,iA=uA+dA(E,mA++),H+=SA(E,v,K,iA,Y);else if(iA==="object"){if(typeof C.then=="function")return SA(jA(C),v,K,E,Y);throw v=String(C),Error("Objects are not valid as a React child (found: "+(v==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":v)+"). If you meant to render a collection of children, use an array instead.")}return H}function M(C,v,K){if(C==null)return C;var E=[],Y=0;return SA(C,E,"","",function(iA){return v.call(K,iA,Y++)}),E}function J(C){if(C._status===-1){var v=C._result;v=v(),v.then(function(K){(C._status===0||C._status===-1)&&(C._status=1,C._result=K)},function(K){(C._status===0||C._status===-1)&&(C._status=2,C._result=K)}),C._status===-1&&(C._status=0,C._result=v)}if(C._status===1)return C._result.default;throw C._result}var pA=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var v=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(v))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function QA(){}return JA.Children={map:M,forEach:function(C,v,K){M(C,function(){v.apply(this,arguments)},K)},count:function(C){var v=0;return M(C,function(){v++}),v},toArray:function(C){return M(C,function(v){return v})||[]},only:function(C){if(!z(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},JA.Component=hA,JA.Fragment=l,JA.Profiler=u,JA.PureComponent=lA,JA.StrictMode=i,JA.Suspense=h,JA.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=eA,JA.__COMPILER_RUNTIME={__proto__:null,c:function(C){return eA.H.useMemoCache(C)}},JA.cache=function(C){return function(){return C.apply(null,arguments)}},JA.cloneElement=function(C,v,K){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var E=Z({},C.props),Y=C.key,iA=void 0;if(v!=null)for(H in v.ref!==void 0&&(iA=void 0),v.key!==void 0&&(Y=""+v.key),v)!P.call(v,H)||H==="key"||H==="__self"||H==="__source"||H==="ref"&&v.ref===void 0||(E[H]=v[H]);var H=arguments.length-2;if(H===1)E.children=K;else if(1<H){for(var uA=Array(H),mA=0;mA<H;mA++)uA[mA]=arguments[mA+2];E.children=uA}return yA(C.type,Y,void 0,void 0,iA,E)},JA.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:d,_context:C},C},JA.createElement=function(C,v,K){var E,Y={},iA=null;if(v!=null)for(E in v.key!==void 0&&(iA=""+v.key),v)P.call(v,E)&&E!=="key"&&E!=="__self"&&E!=="__source"&&(Y[E]=v[E]);var H=arguments.length-2;if(H===1)Y.children=K;else if(1<H){for(var uA=Array(H),mA=0;mA<H;mA++)uA[mA]=arguments[mA+2];Y.children=uA}if(C&&C.defaultProps)for(E in H=C.defaultProps,H)Y[E]===void 0&&(Y[E]=H[E]);return yA(C,iA,void 0,void 0,null,Y)},JA.createRef=function(){return{current:null}},JA.forwardRef=function(C){return{$$typeof:B,render:C}},JA.isValidElement=z,JA.lazy=function(C){return{$$typeof:b,_payload:{_status:-1,_result:C},_init:J}},JA.memo=function(C,v){return{$$typeof:m,type:C,compare:v===void 0?null:v}},JA.startTransition=function(C){var v=eA.T,K={};eA.T=K;try{var E=C(),Y=eA.S;Y!==null&&Y(K,E),typeof E=="object"&&E!==null&&typeof E.then=="function"&&E.then(QA,pA)}catch(iA){pA(iA)}finally{eA.T=v}},JA.unstable_useCacheRefresh=function(){return eA.H.useCacheRefresh()},JA.use=function(C){return eA.H.use(C)},JA.useActionState=function(C,v,K){return eA.H.useActionState(C,v,K)},JA.useCallback=function(C,v){return eA.H.useCallback(C,v)},JA.useContext=function(C){return eA.H.useContext(C)},JA.useDebugValue=function(){},JA.useDeferredValue=function(C,v){return eA.H.useDeferredValue(C,v)},JA.useEffect=function(C,v,K){var E=eA.H;if(typeof K=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return E.useEffect(C,v)},JA.useId=function(){return eA.H.useId()},JA.useImperativeHandle=function(C,v,K){return eA.H.useImperativeHandle(C,v,K)},JA.useInsertionEffect=function(C,v){return eA.H.useInsertionEffect(C,v)},JA.useLayoutEffect=function(C,v){return eA.H.useLayoutEffect(C,v)},JA.useMemo=function(C,v){return eA.H.useMemo(C,v)},JA.useOptimistic=function(C,v){return eA.H.useOptimistic(C,v)},JA.useReducer=function(C,v,K){return eA.H.useReducer(C,v,K)},JA.useRef=function(C){return eA.H.useRef(C)},JA.useState=function(C){return eA.H.useState(C)},JA.useSyncExternalStore=function(C,v,K){return eA.H.useSyncExternalStore(C,v,K)},JA.useTransition=function(){return eA.H.useTransition()},JA.version="19.1.0",JA}var qh;function Pu(){return qh||(qh=1,eu.exports=ym()),eu.exports}var V=Pu();const vm=wm(V);var tu={exports:{}},fi={},nu={exports:{}},au={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function Qm(){return Wh||(Wh=1,function(r){function a(M,J){var pA=M.length;M.push(J);A:for(;0<pA;){var QA=pA-1>>>1,C=M[QA];if(0<u(C,J))M[QA]=J,M[pA]=C,pA=QA;else break A}}function l(M){return M.length===0?null:M[0]}function i(M){if(M.length===0)return null;var J=M[0],pA=M.pop();if(pA!==J){M[0]=pA;A:for(var QA=0,C=M.length,v=C>>>1;QA<v;){var K=2*(QA+1)-1,E=M[K],Y=K+1,iA=M[Y];if(0>u(E,pA))Y<C&&0>u(iA,E)?(M[QA]=iA,M[Y]=pA,QA=Y):(M[QA]=E,M[K]=pA,QA=K);else if(Y<C&&0>u(iA,pA))M[QA]=iA,M[Y]=pA,QA=Y;else break A}}return J}function u(M,J){var pA=M.sortIndex-J.sortIndex;return pA!==0?pA:M.id-J.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;r.unstable_now=function(){return d.now()}}else{var f=Date,B=f.now();r.unstable_now=function(){return f.now()-B}}var h=[],m=[],b=1,y=null,T=3,W=!1,Z=!1,nA=!1,hA=!1,oA=typeof setTimeout=="function"?setTimeout:null,lA=typeof clearTimeout=="function"?clearTimeout:null,CA=typeof setImmediate<"u"?setImmediate:null;function BA(M){for(var J=l(m);J!==null;){if(J.callback===null)i(m);else if(J.startTime<=M)i(m),J.sortIndex=J.expirationTime,a(h,J);else break;J=l(m)}}function eA(M){if(nA=!1,BA(M),!Z)if(l(h)!==null)Z=!0,P||(P=!0,dA());else{var J=l(m);J!==null&&SA(eA,J.startTime-M)}}var P=!1,yA=-1,L=5,z=-1;function wA(){return hA?!0:!(r.unstable_now()-z<L)}function sA(){if(hA=!1,P){var M=r.unstable_now();z=M;var J=!0;try{A:{Z=!1,nA&&(nA=!1,lA(yA),yA=-1),W=!0;var pA=T;try{e:{for(BA(M),y=l(h);y!==null&&!(y.expirationTime>M&&wA());){var QA=y.callback;if(typeof QA=="function"){y.callback=null,T=y.priorityLevel;var C=QA(y.expirationTime<=M);if(M=r.unstable_now(),typeof C=="function"){y.callback=C,BA(M),J=!0;break e}y===l(h)&&i(h),BA(M)}else i(h);y=l(h)}if(y!==null)J=!0;else{var v=l(m);v!==null&&SA(eA,v.startTime-M),J=!1}}break A}finally{y=null,T=pA,W=!1}J=void 0}}finally{J?dA():P=!1}}}var dA;if(typeof CA=="function")dA=function(){CA(sA)};else if(typeof MessageChannel<"u"){var UA=new MessageChannel,jA=UA.port2;UA.port1.onmessage=sA,dA=function(){jA.postMessage(null)}}else dA=function(){oA(sA,0)};function SA(M,J){yA=oA(function(){M(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return T},r.unstable_next=function(M){switch(T){case 1:case 2:case 3:var J=3;break;default:J=T}var pA=T;T=J;try{return M()}finally{T=pA}},r.unstable_requestPaint=function(){hA=!0},r.unstable_runWithPriority=function(M,J){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var pA=T;T=M;try{return J()}finally{T=pA}},r.unstable_scheduleCallback=function(M,J,pA){var QA=r.unstable_now();switch(typeof pA=="object"&&pA!==null?(pA=pA.delay,pA=typeof pA=="number"&&0<pA?QA+pA:QA):pA=QA,M){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=pA+C,M={id:b++,callback:J,priorityLevel:M,startTime:pA,expirationTime:C,sortIndex:-1},pA>QA?(M.sortIndex=pA,a(m,M),l(h)===null&&M===l(m)&&(nA?(lA(yA),yA=-1):nA=!0,SA(eA,pA-QA))):(M.sortIndex=C,a(h,M),Z||W||(Z=!0,P||(P=!0,dA()))),M},r.unstable_shouldYield=wA,r.unstable_wrapCallback=function(M){var J=T;return function(){var pA=T;T=J;try{return M.apply(this,arguments)}finally{T=pA}}}}(au)),au}var Ph;function Um(){return Ph||(Ph=1,nu.exports=Qm()),nu.exports}var ru={exports:{}},at={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h;function Fm(){if($h)return at;$h=1;var r=Pu();function a(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)m+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var i={d:{f:l,r:function(){throw Error(a(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(h,m,b){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:y==null?null:""+y,children:h,containerInfo:m,implementation:b}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function B(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return at.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,at.createPortal=function(h,m){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(a(299));return d(h,m,null,b)},at.flushSync=function(h){var m=f.T,b=i.p;try{if(f.T=null,i.p=2,h)return h()}finally{f.T=m,i.p=b,i.d.f()}},at.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,i.d.C(h,m))},at.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},at.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var b=m.as,y=B(b,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,W=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;b==="style"?i.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:T,fetchPriority:W}):b==="script"&&i.d.X(h,{crossOrigin:y,integrity:T,fetchPriority:W,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},at.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var b=B(m.as,m.crossOrigin);i.d.M(h,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&i.d.M(h)},at.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var b=m.as,y=B(b,m.crossOrigin);i.d.L(h,b,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},at.preloadModule=function(h,m){if(typeof h=="string")if(m){var b=B(m.as,m.crossOrigin);i.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else i.d.m(h)},at.requestFormReset=function(h){i.d.r(h)},at.unstable_batchedUpdates=function(h,m){return h(m)},at.useFormState=function(h,m,b){return f.H.useFormState(h,m,b)},at.useFormStatus=function(){return f.H.useHostTransitionStatus()},at.version="19.1.0",at}var AB;function Em(){if(AB)return ru.exports;AB=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(a){console.error(a)}}return r(),ru.exports=Fm(),ru.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eB;function Hm(){if(eB)return fi;eB=1;var r=Um(),a=Pu(),l=Em();function i(A){var e="https://react.dev/errors/"+A;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+A+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)}function d(A){var e=A,t=A;if(A.alternate)for(;e.return;)e=e.return;else{A=e;do e=A,(e.flags&4098)!==0&&(t=e.return),A=e.return;while(A)}return e.tag===3?t:null}function f(A){if(A.tag===13){var e=A.memoizedState;if(e===null&&(A=A.alternate,A!==null&&(e=A.memoizedState)),e!==null)return e.dehydrated}return null}function B(A){if(d(A)!==A)throw Error(i(188))}function h(A){var e=A.alternate;if(!e){if(e=d(A),e===null)throw Error(i(188));return e!==A?null:A}for(var t=A,n=e;;){var o=t.return;if(o===null)break;var c=o.alternate;if(c===null){if(n=o.return,n!==null){t=n;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===t)return B(o),A;if(c===n)return B(o),e;c=c.sibling}throw Error(i(188))}if(t.return!==n.return)t=o,n=c;else{for(var g=!1,x=o.child;x;){if(x===t){g=!0,t=o,n=c;break}if(x===n){g=!0,n=o,t=c;break}x=x.sibling}if(!g){for(x=c.child;x;){if(x===t){g=!0,t=c,n=o;break}if(x===n){g=!0,n=c,t=o;break}x=x.sibling}if(!g)throw Error(i(189))}}if(t.alternate!==n)throw Error(i(190))}if(t.tag!==3)throw Error(i(188));return t.stateNode.current===t?A:e}function m(A){var e=A.tag;if(e===5||e===26||e===27||e===6)return A;for(A=A.child;A!==null;){if(e=m(A),e!==null)return e;A=A.sibling}return null}var b=Object.assign,y=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),nA=Symbol.for("react.strict_mode"),hA=Symbol.for("react.profiler"),oA=Symbol.for("react.provider"),lA=Symbol.for("react.consumer"),CA=Symbol.for("react.context"),BA=Symbol.for("react.forward_ref"),eA=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),yA=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),wA=Symbol.for("react.memo_cache_sentinel"),sA=Symbol.iterator;function dA(A){return A===null||typeof A!="object"?null:(A=sA&&A[sA]||A["@@iterator"],typeof A=="function"?A:null)}var UA=Symbol.for("react.client.reference");function jA(A){if(A==null)return null;if(typeof A=="function")return A.$$typeof===UA?null:A.displayName||A.name||null;if(typeof A=="string")return A;switch(A){case Z:return"Fragment";case hA:return"Profiler";case nA:return"StrictMode";case eA:return"Suspense";case P:return"SuspenseList";case z:return"Activity"}if(typeof A=="object")switch(A.$$typeof){case W:return"Portal";case CA:return(A.displayName||"Context")+".Provider";case lA:return(A._context.displayName||"Context")+".Consumer";case BA:var e=A.render;return A=A.displayName,A||(A=e.displayName||e.name||"",A=A!==""?"ForwardRef("+A+")":"ForwardRef"),A;case yA:return e=A.displayName||null,e!==null?e:jA(A.type)||"Memo";case L:e=A._payload,A=A._init;try{return jA(A(e))}catch{}}return null}var SA=Array.isArray,M=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pA={pending:!1,data:null,method:null,action:null},QA=[],C=-1;function v(A){return{current:A}}function K(A){0>C||(A.current=QA[C],QA[C]=null,C--)}function E(A,e){C++,QA[C]=A.current,A.current=e}var Y=v(null),iA=v(null),H=v(null),uA=v(null);function mA(A,e){switch(E(H,e),E(iA,A),E(Y,null),e.nodeType){case 9:case 11:A=(A=e.documentElement)&&(A=A.namespaceURI)?bh(A):0;break;default:if(A=e.tagName,e=e.namespaceURI)e=bh(e),A=Ch(e,A);else switch(A){case"svg":A=1;break;case"math":A=2;break;default:A=0}}K(Y),E(Y,A)}function LA(){K(Y),K(iA),K(H)}function FA(A){A.memoizedState!==null&&E(uA,A);var e=Y.current,t=Ch(e,A.type);e!==t&&(E(iA,A),E(Y,t))}function OA(A){iA.current===A&&(K(Y),K(iA)),uA.current===A&&(K(uA),li._currentValue=pA)}var Ae=Object.prototype.hasOwnProperty,Oe=r.unstable_scheduleCallback,ZA=r.unstable_cancelCallback,ye=r.unstable_shouldYield,YA=r.unstable_requestPaint,GA=r.unstable_now,ie=r.unstable_getCurrentPriorityLevel,Qe=r.unstable_ImmediatePriority,ct=r.unstable_UserBlockingPriority,_e=r.unstable_NormalPriority,lt=r.unstable_LowPriority,ut=r.unstable_IdlePriority,Ft=r.log,AA=r.unstable_setDisableYieldValue,fA=null,DA=null;function F(A){if(typeof Ft=="function"&&AA(A),DA&&typeof DA.setStrictMode=="function")try{DA.setStrictMode(fA,A)}catch{}}var D=Math.clz32?Math.clz32:gA,q=Math.log,xA=Math.LN2;function gA(A){return A>>>=0,A===0?32:31-(q(A)/xA|0)|0}var w=256,p=4194304;function Q(A){var e=A&42;if(e!==0)return e;switch(A&-A){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return A&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return A}}function j(A,e,t){var n=A.pendingLanes;if(n===0)return 0;var o=0,c=A.suspendedLanes,g=A.pingedLanes;A=A.warmLanes;var x=n&134217727;return x!==0?(n=x&~c,n!==0?o=Q(n):(g&=x,g!==0?o=Q(g):t||(t=x&~A,t!==0&&(o=Q(t))))):(x=n&~c,x!==0?o=Q(x):g!==0?o=Q(g):t||(t=n&~A,t!==0&&(o=Q(t)))),o===0?0:e!==0&&e!==o&&(e&c)===0&&(c=o&-o,t=e&-e,c>=t||c===32&&(t&4194048)!==0)?e:o}function k(A,e){return(A.pendingLanes&~(A.suspendedLanes&~A.pingedLanes)&e)===0}function G(A,e){switch(A){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rA(){var A=w;return w<<=1,(w&4194048)===0&&(w=256),A}function TA(){var A=p;return p<<=1,(p&62914560)===0&&(p=4194304),A}function KA(A){for(var e=[],t=0;31>t;t++)e.push(A);return e}function XA(A,e){A.pendingLanes|=e,e!==268435456&&(A.suspendedLanes=0,A.pingedLanes=0,A.warmLanes=0)}function ae(A,e,t,n,o,c){var g=A.pendingLanes;A.pendingLanes=t,A.suspendedLanes=0,A.pingedLanes=0,A.warmLanes=0,A.expiredLanes&=t,A.entangledLanes&=t,A.errorRecoveryDisabledLanes&=t,A.shellSuspendCounter=0;var x=A.entanglements,U=A.expirationTimes,R=A.hiddenUpdates;for(t=g&~t;0<t;){var $=31-D(t),aA=1<<$;x[$]=0,U[$]=-1;var _=R[$];if(_!==null)for(R[$]=null,$=0;$<_.length;$++){var X=_[$];X!==null&&(X.lane&=-536870913)}t&=~aA}n!==0&&Ue(A,n,0),c!==0&&o===0&&A.tag!==0&&(A.suspendedLanes|=c&~(g&~e))}function Ue(A,e,t){A.pendingLanes|=e,A.suspendedLanes&=~e;var n=31-D(e);A.entangledLanes|=e,A.entanglements[n]=A.entanglements[n]|1073741824|t&4194090}function ue(A,e){var t=A.entangledLanes|=e;for(A=A.entanglements;t;){var n=31-D(t),o=1<<n;o&e|A[n]&e&&(A[n]|=e),t&=~o}}function le(A){switch(A){case 2:A=1;break;case 8:A=4;break;case 32:A=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:A=128;break;case 268435456:A=134217728;break;default:A=0}return A}function tt(A){return A&=-A,2<A?8<A?(A&134217727)!==0?32:268435456:8:2}function S(){var A=J.p;return A!==0?A:(A=window.event,A===void 0?32:Rh(A.type))}function cA(A,e){var t=J.p;try{return J.p=A,e()}finally{J.p=t}}var bA=Math.random().toString(36).slice(2),EA="__reactFiber$"+bA,vA="__reactProps$"+bA,qA="__reactContainer$"+bA,ee="__reactEvents$"+bA,_A="__reactListeners$"+bA,me="__reactHandles$"+bA,He="__reactResources$"+bA,dt="__reactMarker$"+bA;function ft(A){delete A[EA],delete A[vA],delete A[ee],delete A[_A],delete A[me]}function Xt(A){var e=A[EA];if(e)return e;for(var t=A.parentNode;t;){if(e=t[qA]||t[EA]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(A=Uh(A);A!==null;){if(t=A[EA])return t;A=Uh(A)}return e}A=t,t=A.parentNode}return null}function Ca(A){if(A=A[EA]||A[qA]){var e=A.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return A}return null}function mr(A){var e=A.tag;if(e===5||e===26||e===27||e===6)return A.stateNode;throw Error(i(33))}function ya(A){var e=A[He];return e||(e=A[He]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ve(A){A[dt]=!0}var od=new Set,cd={};function Pn(A,e){va(A,e),va(A+"Capture",e)}function va(A,e){for(cd[A]=e,A=0;A<e.length;A++)od.add(e[A])}var d0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ud={},dd={};function f0(A){return Ae.call(dd,A)?!0:Ae.call(ud,A)?!1:d0.test(A)?dd[A]=!0:(ud[A]=!0,!1)}function ki(A,e,t){if(f0(e))if(t===null)A.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":A.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){A.removeAttribute(e);return}}A.setAttribute(e,""+t)}}function Ki(A,e,t){if(t===null)A.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":A.removeAttribute(e);return}A.setAttribute(e,""+t)}}function en(A,e,t,n){if(n===null)A.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":A.removeAttribute(t);return}A.setAttributeNS(e,t,""+n)}}var Ys,fd;function Qa(A){if(Ys===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ys=e&&e[1]||"",fd=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ys+A+fd}var Js=!1;function Zs(A,e){if(!A||Js)return"";Js=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var aA=function(){throw Error()};if(Object.defineProperty(aA.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(aA,[])}catch(X){var _=X}Reflect.construct(A,[],aA)}else{try{aA.call()}catch(X){_=X}A.call(aA.prototype)}}else{try{throw Error()}catch(X){_=X}(aA=A())&&typeof aA.catch=="function"&&aA.catch(function(){})}}catch(X){if(X&&_&&typeof X.stack=="string")return[X.stack,_.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=n.DetermineComponentFrameRoot(),g=c[0],x=c[1];if(g&&x){var U=g.split(`
`),R=x.split(`
`);for(o=n=0;n<U.length&&!U[n].includes("DetermineComponentFrameRoot");)n++;for(;o<R.length&&!R[o].includes("DetermineComponentFrameRoot");)o++;if(n===U.length||o===R.length)for(n=U.length-1,o=R.length-1;1<=n&&0<=o&&U[n]!==R[o];)o--;for(;1<=n&&0<=o;n--,o--)if(U[n]!==R[o]){if(n!==1||o!==1)do if(n--,o--,0>o||U[n]!==R[o]){var $=`
`+U[n].replace(" at new "," at ");return A.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",A.displayName)),$}while(1<=n&&0<=o);break}}}finally{Js=!1,Error.prepareStackTrace=t}return(t=A?A.displayName||A.name:"")?Qa(t):""}function g0(A){switch(A.tag){case 26:case 27:case 5:return Qa(A.type);case 16:return Qa("Lazy");case 13:return Qa("Suspense");case 19:return Qa("SuspenseList");case 0:case 15:return Zs(A.type,!1);case 11:return Zs(A.type.render,!1);case 1:return Zs(A.type,!0);case 31:return Qa("Activity");default:return""}}function gd(A){try{var e="";do e+=g0(A),A=A.return;while(A);return e}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function Et(A){switch(typeof A){case"bigint":case"boolean":case"number":case"string":case"undefined":return A;case"object":return A;default:return""}}function hd(A){var e=A.type;return(A=A.nodeName)&&A.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function h0(A){var e=hd(A)?"checked":"value",t=Object.getOwnPropertyDescriptor(A.constructor.prototype,e),n=""+A[e];if(!A.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,c=t.set;return Object.defineProperty(A,e,{configurable:!0,get:function(){return o.call(this)},set:function(g){n=""+g,c.call(this,g)}}),Object.defineProperty(A,e,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(g){n=""+g},stopTracking:function(){A._valueTracker=null,delete A[e]}}}}function Oi(A){A._valueTracker||(A._valueTracker=h0(A))}function Bd(A){if(!A)return!1;var e=A._valueTracker;if(!e)return!0;var t=e.getValue(),n="";return A&&(n=hd(A)?A.checked?"true":"false":A.value),A=n,A!==t?(e.setValue(A),!0):!1}function Ri(A){if(A=A||(typeof document<"u"?document:void 0),typeof A>"u")return null;try{return A.activeElement||A.body}catch{return A.body}}var B0=/[\n"\\]/g;function Ht(A){return A.replace(B0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function qs(A,e,t,n,o,c,g,x){A.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?A.type=g:A.removeAttribute("type"),e!=null?g==="number"?(e===0&&A.value===""||A.value!=e)&&(A.value=""+Et(e)):A.value!==""+Et(e)&&(A.value=""+Et(e)):g!=="submit"&&g!=="reset"||A.removeAttribute("value"),e!=null?Ws(A,g,Et(e)):t!=null?Ws(A,g,Et(t)):n!=null&&A.removeAttribute("value"),o==null&&c!=null&&(A.defaultChecked=!!c),o!=null&&(A.checked=o&&typeof o!="function"&&typeof o!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?A.name=""+Et(x):A.removeAttribute("name")}function pd(A,e,t,n,o,c,g,x){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(A.type=c),e!=null||t!=null){if(!(c!=="submit"&&c!=="reset"||e!=null))return;t=t!=null?""+Et(t):"",e=e!=null?""+Et(e):t,x||e===A.value||(A.value=e),A.defaultValue=e}n=n??o,n=typeof n!="function"&&typeof n!="symbol"&&!!n,A.checked=x?A.checked:!!n,A.defaultChecked=!!n,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(A.name=g)}function Ws(A,e,t){e==="number"&&Ri(A.ownerDocument)===A||A.defaultValue===""+t||(A.defaultValue=""+t)}function Ua(A,e,t,n){if(A=A.options,e){e={};for(var o=0;o<t.length;o++)e["$"+t[o]]=!0;for(t=0;t<A.length;t++)o=e.hasOwnProperty("$"+A[t].value),A[t].selected!==o&&(A[t].selected=o),o&&n&&(A[t].defaultSelected=!0)}else{for(t=""+Et(t),e=null,o=0;o<A.length;o++){if(A[o].value===t){A[o].selected=!0,n&&(A[o].defaultSelected=!0);return}e!==null||A[o].disabled||(e=A[o])}e!==null&&(e.selected=!0)}}function xd(A,e,t){if(e!=null&&(e=""+Et(e),e!==A.value&&(A.value=e),t==null)){A.defaultValue!==e&&(A.defaultValue=e);return}A.defaultValue=t!=null?""+Et(t):""}function md(A,e,t,n){if(e==null){if(n!=null){if(t!=null)throw Error(i(92));if(SA(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}t==null&&(t=""),e=t}t=Et(e),A.defaultValue=t,n=A.textContent,n===t&&n!==""&&n!==null&&(A.value=n)}function Fa(A,e){if(e){var t=A.firstChild;if(t&&t===A.lastChild&&t.nodeType===3){t.nodeValue=e;return}}A.textContent=e}var p0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wd(A,e,t){var n=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?n?A.setProperty(e,""):e==="float"?A.cssFloat="":A[e]="":n?A.setProperty(e,t):typeof t!="number"||t===0||p0.has(e)?e==="float"?A.cssFloat=t:A[e]=(""+t).trim():A[e]=t+"px"}function bd(A,e,t){if(e!=null&&typeof e!="object")throw Error(i(62));if(A=A.style,t!=null){for(var n in t)!t.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?A.setProperty(n,""):n==="float"?A.cssFloat="":A[n]="");for(var o in e)n=e[o],e.hasOwnProperty(o)&&t[o]!==n&&wd(A,o,n)}else for(var c in e)e.hasOwnProperty(c)&&wd(A,c,e[c])}function Ps(A){if(A.indexOf("-")===-1)return!1;switch(A){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var x0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),m0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zi(A){return m0.test(""+A)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":A}var $s=null;function Ao(A){return A=A.target||A.srcElement||window,A.correspondingUseElement&&(A=A.correspondingUseElement),A.nodeType===3?A.parentNode:A}var Ea=null,Ha=null;function Cd(A){var e=Ca(A);if(e&&(A=e.stateNode)){var t=A[vA]||null;A:switch(A=e.stateNode,e.type){case"input":if(qs(A,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=A;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ht(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var n=t[e];if(n!==A&&n.form===A.form){var o=n[vA]||null;if(!o)throw Error(i(90));qs(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(e=0;e<t.length;e++)n=t[e],n.form===A.form&&Bd(n)}break A;case"textarea":xd(A,t.value,t.defaultValue);break A;case"select":e=t.value,e!=null&&Ua(A,!!t.multiple,e,!1)}}}var eo=!1;function yd(A,e,t){if(eo)return A(e,t);eo=!0;try{var n=A(e);return n}finally{if(eo=!1,(Ea!==null||Ha!==null)&&(Fl(),Ea&&(e=Ea,A=Ha,Ha=Ea=null,Cd(e),A)))for(e=0;e<A.length;e++)Cd(A[e])}}function wr(A,e){var t=A.stateNode;if(t===null)return null;var n=t[vA]||null;if(n===null)return null;t=n[e];A:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(A=A.type,n=!(A==="button"||A==="input"||A==="select"||A==="textarea")),A=!n;break A;default:A=!1}if(A)return null;if(t&&typeof t!="function")throw Error(i(231,e,typeof t));return t}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),to=!1;if(tn)try{var br={};Object.defineProperty(br,"passive",{get:function(){to=!0}}),window.addEventListener("test",br,br),window.removeEventListener("test",br,br)}catch{to=!1}var bn=null,no=null,Gi=null;function vd(){if(Gi)return Gi;var A,e=no,t=e.length,n,o="value"in bn?bn.value:bn.textContent,c=o.length;for(A=0;A<t&&e[A]===o[A];A++);var g=t-A;for(n=1;n<=g&&e[t-n]===o[c-n];n++);return Gi=o.slice(A,1<n?1-n:void 0)}function _i(A){var e=A.keyCode;return"charCode"in A?(A=A.charCode,A===0&&e===13&&(A=13)):A=e,A===10&&(A=13),32<=A||A===13?A:0}function Vi(){return!0}function Qd(){return!1}function gt(A){function e(t,n,o,c,g){this._reactName=t,this._targetInst=o,this.type=n,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var x in A)A.hasOwnProperty(x)&&(t=A[x],this[x]=t?t(c):c[x]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Vi:Qd,this.isPropagationStopped=Qd,this}return b(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),e}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(A){return A.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xi=gt($n),Cr=b({},$n,{view:0,detail:0}),w0=gt(Cr),ao,ro,yr,Yi=b({},Cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lo,button:0,buttons:0,relatedTarget:function(A){return A.relatedTarget===void 0?A.fromElement===A.srcElement?A.toElement:A.fromElement:A.relatedTarget},movementX:function(A){return"movementX"in A?A.movementX:(A!==yr&&(yr&&A.type==="mousemove"?(ao=A.screenX-yr.screenX,ro=A.screenY-yr.screenY):ro=ao=0,yr=A),ao)},movementY:function(A){return"movementY"in A?A.movementY:ro}}),Ud=gt(Yi),b0=b({},Yi,{dataTransfer:0}),C0=gt(b0),y0=b({},Cr,{relatedTarget:0}),io=gt(y0),v0=b({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),Q0=gt(v0),U0=b({},$n,{clipboardData:function(A){return"clipboardData"in A?A.clipboardData:window.clipboardData}}),F0=gt(U0),E0=b({},$n,{data:0}),Fd=gt(E0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T0(A){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(A):(A=D0[A])?!!e[A]:!1}function lo(){return T0}var j0=b({},Cr,{key:function(A){if(A.key){var e=H0[A.key]||A.key;if(e!=="Unidentified")return e}return A.type==="keypress"?(A=_i(A),A===13?"Enter":String.fromCharCode(A)):A.type==="keydown"||A.type==="keyup"?S0[A.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lo,charCode:function(A){return A.type==="keypress"?_i(A):0},keyCode:function(A){return A.type==="keydown"||A.type==="keyup"?A.keyCode:0},which:function(A){return A.type==="keypress"?_i(A):A.type==="keydown"||A.type==="keyup"?A.keyCode:0}}),N0=gt(j0),M0=b({},Yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ed=gt(M0),I0=b({},Cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lo}),L0=gt(I0),k0=b({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),K0=gt(k0),O0=b({},Yi,{deltaX:function(A){return"deltaX"in A?A.deltaX:"wheelDeltaX"in A?-A.wheelDeltaX:0},deltaY:function(A){return"deltaY"in A?A.deltaY:"wheelDeltaY"in A?-A.wheelDeltaY:"wheelDelta"in A?-A.wheelDelta:0},deltaZ:0,deltaMode:0}),R0=gt(O0),z0=b({},$n,{newState:0,oldState:0}),G0=gt(z0),_0=[9,13,27,32],so=tn&&"CompositionEvent"in window,vr=null;tn&&"documentMode"in document&&(vr=document.documentMode);var V0=tn&&"TextEvent"in window&&!vr,Hd=tn&&(!so||vr&&8<vr&&11>=vr),Sd=" ",Dd=!1;function Td(A,e){switch(A){case"keyup":return _0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jd(A){return A=A.detail,typeof A=="object"&&"data"in A?A.data:null}var Sa=!1;function X0(A,e){switch(A){case"compositionend":return jd(e);case"keypress":return e.which!==32?null:(Dd=!0,Sd);case"textInput":return A=e.data,A===Sd&&Dd?null:A;default:return null}}function Y0(A,e){if(Sa)return A==="compositionend"||!so&&Td(A,e)?(A=vd(),Gi=no=bn=null,Sa=!1,A):null;switch(A){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hd&&e.locale!=="ko"?null:e.data;default:return null}}var J0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e==="input"?!!J0[A.type]:e==="textarea"}function Md(A,e,t,n){Ea?Ha?Ha.push(n):Ha=[n]:Ea=n,e=jl(e,"onChange"),0<e.length&&(t=new Xi("onChange","change",null,t,n),A.push({event:t,listeners:e}))}var Qr=null,Ur=null;function Z0(A){Bh(A,0)}function Ji(A){var e=mr(A);if(Bd(e))return A}function Id(A,e){if(A==="change")return e}var Ld=!1;if(tn){var oo;if(tn){var co="oninput"in document;if(!co){var kd=document.createElement("div");kd.setAttribute("oninput","return;"),co=typeof kd.oninput=="function"}oo=co}else oo=!1;Ld=oo&&(!document.documentMode||9<document.documentMode)}function Kd(){Qr&&(Qr.detachEvent("onpropertychange",Od),Ur=Qr=null)}function Od(A){if(A.propertyName==="value"&&Ji(Ur)){var e=[];Md(e,Ur,A,Ao(A)),yd(Z0,e)}}function q0(A,e,t){A==="focusin"?(Kd(),Qr=e,Ur=t,Qr.attachEvent("onpropertychange",Od)):A==="focusout"&&Kd()}function W0(A){if(A==="selectionchange"||A==="keyup"||A==="keydown")return Ji(Ur)}function P0(A,e){if(A==="click")return Ji(e)}function $0(A,e){if(A==="input"||A==="change")return Ji(e)}function Ax(A,e){return A===e&&(A!==0||1/A===1/e)||A!==A&&e!==e}var mt=typeof Object.is=="function"?Object.is:Ax;function Fr(A,e){if(mt(A,e))return!0;if(typeof A!="object"||A===null||typeof e!="object"||e===null)return!1;var t=Object.keys(A),n=Object.keys(e);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var o=t[n];if(!Ae.call(e,o)||!mt(A[o],e[o]))return!1}return!0}function Rd(A){for(;A&&A.firstChild;)A=A.firstChild;return A}function zd(A,e){var t=Rd(A);A=0;for(var n;t;){if(t.nodeType===3){if(n=A+t.textContent.length,A<=e&&n>=e)return{node:t,offset:e-A};A=n}A:{for(;t;){if(t.nextSibling){t=t.nextSibling;break A}t=t.parentNode}t=void 0}t=Rd(t)}}function Gd(A,e){return A&&e?A===e?!0:A&&A.nodeType===3?!1:e&&e.nodeType===3?Gd(A,e.parentNode):"contains"in A?A.contains(e):A.compareDocumentPosition?!!(A.compareDocumentPosition(e)&16):!1:!1}function _d(A){A=A!=null&&A.ownerDocument!=null&&A.ownerDocument.defaultView!=null?A.ownerDocument.defaultView:window;for(var e=Ri(A.document);e instanceof A.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)A=e.contentWindow;else break;e=Ri(A.document)}return e}function uo(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e&&(e==="input"&&(A.type==="text"||A.type==="search"||A.type==="tel"||A.type==="url"||A.type==="password")||e==="textarea"||A.contentEditable==="true")}var ex=tn&&"documentMode"in document&&11>=document.documentMode,Da=null,fo=null,Er=null,go=!1;function Vd(A,e,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;go||Da==null||Da!==Ri(n)||(n=Da,"selectionStart"in n&&uo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Er&&Fr(Er,n)||(Er=n,n=jl(fo,"onSelect"),0<n.length&&(e=new Xi("onSelect","select",null,e,t),A.push({event:e,listeners:n}),e.target=Da)))}function Aa(A,e){var t={};return t[A.toLowerCase()]=e.toLowerCase(),t["Webkit"+A]="webkit"+e,t["Moz"+A]="moz"+e,t}var Ta={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionrun:Aa("Transition","TransitionRun"),transitionstart:Aa("Transition","TransitionStart"),transitioncancel:Aa("Transition","TransitionCancel"),transitionend:Aa("Transition","TransitionEnd")},ho={},Xd={};tn&&(Xd=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function ea(A){if(ho[A])return ho[A];if(!Ta[A])return A;var e=Ta[A],t;for(t in e)if(e.hasOwnProperty(t)&&t in Xd)return ho[A]=e[t];return A}var Yd=ea("animationend"),Jd=ea("animationiteration"),Zd=ea("animationstart"),tx=ea("transitionrun"),nx=ea("transitionstart"),ax=ea("transitioncancel"),qd=ea("transitionend"),Wd=new Map,Bo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bo.push("scrollEnd");function Rt(A,e){Wd.set(A,e),Pn(e,[A])}var Pd=new WeakMap;function St(A,e){if(typeof A=="object"&&A!==null){var t=Pd.get(A);return t!==void 0?t:(e={value:A,source:e,stack:gd(e)},Pd.set(A,e),e)}return{value:A,source:e,stack:gd(e)}}var Dt=[],ja=0,po=0;function Zi(){for(var A=ja,e=po=ja=0;e<A;){var t=Dt[e];Dt[e++]=null;var n=Dt[e];Dt[e++]=null;var o=Dt[e];Dt[e++]=null;var c=Dt[e];if(Dt[e++]=null,n!==null&&o!==null){var g=n.pending;g===null?o.next=o:(o.next=g.next,g.next=o),n.pending=o}c!==0&&$d(t,o,c)}}function qi(A,e,t,n){Dt[ja++]=A,Dt[ja++]=e,Dt[ja++]=t,Dt[ja++]=n,po|=n,A.lanes|=n,A=A.alternate,A!==null&&(A.lanes|=n)}function xo(A,e,t,n){return qi(A,e,t,n),Wi(A)}function Na(A,e){return qi(A,null,null,e),Wi(A)}function $d(A,e,t){A.lanes|=t;var n=A.alternate;n!==null&&(n.lanes|=t);for(var o=!1,c=A.return;c!==null;)c.childLanes|=t,n=c.alternate,n!==null&&(n.childLanes|=t),c.tag===22&&(A=c.stateNode,A===null||A._visibility&1||(o=!0)),A=c,c=c.return;return A.tag===3?(c=A.stateNode,o&&e!==null&&(o=31-D(t),A=c.hiddenUpdates,n=A[o],n===null?A[o]=[e]:n.push(e),e.lane=t|536870912),c):null}function Wi(A){if(50<$r)throw $r=0,vc=null,Error(i(185));for(var e=A.return;e!==null;)A=e,e=A.return;return A.tag===3?A.stateNode:null}var Ma={};function rx(A,e,t,n){this.tag=A,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(A,e,t,n){return new rx(A,e,t,n)}function mo(A){return A=A.prototype,!(!A||!A.isReactComponent)}function nn(A,e){var t=A.alternate;return t===null?(t=wt(A.tag,e,A.key,A.mode),t.elementType=A.elementType,t.type=A.type,t.stateNode=A.stateNode,t.alternate=A,A.alternate=t):(t.pendingProps=e,t.type=A.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=A.flags&65011712,t.childLanes=A.childLanes,t.lanes=A.lanes,t.child=A.child,t.memoizedProps=A.memoizedProps,t.memoizedState=A.memoizedState,t.updateQueue=A.updateQueue,e=A.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=A.sibling,t.index=A.index,t.ref=A.ref,t.refCleanup=A.refCleanup,t}function Af(A,e){A.flags&=65011714;var t=A.alternate;return t===null?(A.childLanes=0,A.lanes=e,A.child=null,A.subtreeFlags=0,A.memoizedProps=null,A.memoizedState=null,A.updateQueue=null,A.dependencies=null,A.stateNode=null):(A.childLanes=t.childLanes,A.lanes=t.lanes,A.child=t.child,A.subtreeFlags=0,A.deletions=null,A.memoizedProps=t.memoizedProps,A.memoizedState=t.memoizedState,A.updateQueue=t.updateQueue,A.type=t.type,e=t.dependencies,A.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),A}function Pi(A,e,t,n,o,c){var g=0;if(n=A,typeof A=="function")mo(A)&&(g=1);else if(typeof A=="string")g=lm(A,t,Y.current)?26:A==="html"||A==="head"||A==="body"?27:5;else A:switch(A){case z:return A=wt(31,t,e,o),A.elementType=z,A.lanes=c,A;case Z:return ta(t.children,o,c,e);case nA:g=8,o|=24;break;case hA:return A=wt(12,t,e,o|2),A.elementType=hA,A.lanes=c,A;case eA:return A=wt(13,t,e,o),A.elementType=eA,A.lanes=c,A;case P:return A=wt(19,t,e,o),A.elementType=P,A.lanes=c,A;default:if(typeof A=="object"&&A!==null)switch(A.$$typeof){case oA:case CA:g=10;break A;case lA:g=9;break A;case BA:g=11;break A;case yA:g=14;break A;case L:g=16,n=null;break A}g=29,t=Error(i(130,A===null?"null":typeof A,"")),n=null}return e=wt(g,t,e,o),e.elementType=A,e.type=n,e.lanes=c,e}function ta(A,e,t,n){return A=wt(7,A,n,e),A.lanes=t,A}function wo(A,e,t){return A=wt(6,A,null,e),A.lanes=t,A}function bo(A,e,t){return e=wt(4,A.children!==null?A.children:[],A.key,e),e.lanes=t,e.stateNode={containerInfo:A.containerInfo,pendingChildren:null,implementation:A.implementation},e}var Ia=[],La=0,$i=null,Al=0,Tt=[],jt=0,na=null,an=1,rn="";function aa(A,e){Ia[La++]=Al,Ia[La++]=$i,$i=A,Al=e}function ef(A,e,t){Tt[jt++]=an,Tt[jt++]=rn,Tt[jt++]=na,na=A;var n=an;A=rn;var o=32-D(n)-1;n&=~(1<<o),t+=1;var c=32-D(e)+o;if(30<c){var g=o-o%5;c=(n&(1<<g)-1).toString(32),n>>=g,o-=g,an=1<<32-D(e)+o|t<<o|n,rn=c+A}else an=1<<c|t<<o|n,rn=A}function Co(A){A.return!==null&&(aa(A,1),ef(A,1,0))}function yo(A){for(;A===$i;)$i=Ia[--La],Ia[La]=null,Al=Ia[--La],Ia[La]=null;for(;A===na;)na=Tt[--jt],Tt[jt]=null,rn=Tt[--jt],Tt[jt]=null,an=Tt[--jt],Tt[jt]=null}var st=null,De=null,ce=!1,ra=null,Yt=!1,vo=Error(i(519));function ia(A){var e=Error(i(418,""));throw Dr(St(e,A)),vo}function tf(A){var e=A.stateNode,t=A.type,n=A.memoizedProps;switch(e[EA]=A,e[vA]=n,t){case"dialog":ne("cancel",e),ne("close",e);break;case"iframe":case"object":case"embed":ne("load",e);break;case"video":case"audio":for(t=0;t<ei.length;t++)ne(ei[t],e);break;case"source":ne("error",e);break;case"img":case"image":case"link":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"input":ne("invalid",e),pd(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Oi(e);break;case"select":ne("invalid",e);break;case"textarea":ne("invalid",e),md(e,n.value,n.defaultValue,n.children),Oi(e)}t=n.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||n.suppressHydrationWarning===!0||wh(e.textContent,t)?(n.popover!=null&&(ne("beforetoggle",e),ne("toggle",e)),n.onScroll!=null&&ne("scroll",e),n.onScrollEnd!=null&&ne("scrollend",e),n.onClick!=null&&(e.onclick=Nl),e=!0):e=!1,e||ia(A)}function nf(A){for(st=A.return;st;)switch(st.tag){case 5:case 13:Yt=!1;return;case 27:case 3:Yt=!0;return;default:st=st.return}}function Hr(A){if(A!==st)return!1;if(!ce)return nf(A),ce=!0,!1;var e=A.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=A.type,t=!(t!=="form"&&t!=="button")||Oc(A.type,A.memoizedProps)),t=!t),t&&De&&ia(A),nf(A),e===13){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(i(317));A:{for(A=A.nextSibling,e=0;A;){if(A.nodeType===8)if(t=A.data,t==="/$"){if(e===0){De=Gt(A.nextSibling);break A}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++;A=A.nextSibling}De=null}}else e===27?(e=De,Ln(A.type)?(A=_c,_c=null,De=A):De=e):De=st?Gt(A.stateNode.nextSibling):null;return!0}function Sr(){De=st=null,ce=!1}function af(){var A=ra;return A!==null&&(pt===null?pt=A:pt.push.apply(pt,A),ra=null),A}function Dr(A){ra===null?ra=[A]:ra.push(A)}var Qo=v(null),la=null,ln=null;function Cn(A,e,t){E(Qo,e._currentValue),e._currentValue=t}function sn(A){A._currentValue=Qo.current,K(Qo)}function Uo(A,e,t){for(;A!==null;){var n=A.alternate;if((A.childLanes&e)!==e?(A.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),A===t)break;A=A.return}}function Fo(A,e,t,n){var o=A.child;for(o!==null&&(o.return=A);o!==null;){var c=o.dependencies;if(c!==null){var g=o.child;c=c.firstContext;A:for(;c!==null;){var x=c;c=o;for(var U=0;U<e.length;U++)if(x.context===e[U]){c.lanes|=t,x=c.alternate,x!==null&&(x.lanes|=t),Uo(c.return,t,A),n||(g=null);break A}c=x.next}}else if(o.tag===18){if(g=o.return,g===null)throw Error(i(341));g.lanes|=t,c=g.alternate,c!==null&&(c.lanes|=t),Uo(g,t,A),g=null}else g=o.child;if(g!==null)g.return=o;else for(g=o;g!==null;){if(g===A){g=null;break}if(o=g.sibling,o!==null){o.return=g.return,g=o;break}g=g.return}o=g}}function Tr(A,e,t,n){A=null;for(var o=e,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var g=o.alternate;if(g===null)throw Error(i(387));if(g=g.memoizedProps,g!==null){var x=o.type;mt(o.pendingProps.value,g.value)||(A!==null?A.push(x):A=[x])}}else if(o===uA.current){if(g=o.alternate,g===null)throw Error(i(387));g.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(A!==null?A.push(li):A=[li])}o=o.return}A!==null&&Fo(e,A,t,n),e.flags|=262144}function el(A){for(A=A.firstContext;A!==null;){if(!mt(A.context._currentValue,A.memoizedValue))return!0;A=A.next}return!1}function sa(A){la=A,ln=null,A=A.dependencies,A!==null&&(A.firstContext=null)}function nt(A){return rf(la,A)}function tl(A,e){return la===null&&sa(A),rf(A,e)}function rf(A,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},ln===null){if(A===null)throw Error(i(308));ln=e,A.dependencies={lanes:0,firstContext:e},A.flags|=524288}else ln=ln.next=e;return t}var ix=typeof AbortController<"u"?AbortController:function(){var A=[],e=this.signal={aborted:!1,addEventListener:function(t,n){A.push(n)}};this.abort=function(){e.aborted=!0,A.forEach(function(t){return t()})}},lx=r.unstable_scheduleCallback,sx=r.unstable_NormalPriority,Re={$$typeof:CA,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eo(){return{controller:new ix,data:new Map,refCount:0}}function jr(A){A.refCount--,A.refCount===0&&lx(sx,function(){A.controller.abort()})}var Nr=null,Ho=0,ka=0,Ka=null;function ox(A,e){if(Nr===null){var t=Nr=[];Ho=0,ka=Dc(),Ka={status:"pending",value:void 0,then:function(n){t.push(n)}}}return Ho++,e.then(lf,lf),e}function lf(){if(--Ho===0&&Nr!==null){Ka!==null&&(Ka.status="fulfilled");var A=Nr;Nr=null,ka=0,Ka=null;for(var e=0;e<A.length;e++)(0,A[e])()}}function cx(A,e){var t=[],n={status:"pending",value:null,reason:null,then:function(o){t.push(o)}};return A.then(function(){n.status="fulfilled",n.value=e;for(var o=0;o<t.length;o++)(0,t[o])(e)},function(o){for(n.status="rejected",n.reason=o,o=0;o<t.length;o++)(0,t[o])(void 0)}),n}var sf=M.S;M.S=function(A,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&ox(A,e),sf!==null&&sf(A,e)};var oa=v(null);function So(){var A=oa.current;return A!==null?A:be.pooledCache}function nl(A,e){e===null?E(oa,oa.current):E(oa,e.pool)}function of(){var A=So();return A===null?null:{parent:Re._currentValue,pool:A}}var Mr=Error(i(460)),cf=Error(i(474)),al=Error(i(542)),Do={then:function(){}};function uf(A){return A=A.status,A==="fulfilled"||A==="rejected"}function rl(){}function df(A,e,t){switch(t=A[t],t===void 0?A.push(e):t!==e&&(e.then(rl,rl),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw A=e.reason,gf(A),A;default:if(typeof e.status=="string")e.then(rl,rl);else{if(A=be,A!==null&&100<A.shellSuspendCounter)throw Error(i(482));A=e,A.status="pending",A.then(function(n){if(e.status==="pending"){var o=e;o.status="fulfilled",o.value=n}},function(n){if(e.status==="pending"){var o=e;o.status="rejected",o.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw A=e.reason,gf(A),A}throw Ir=e,Mr}}var Ir=null;function ff(){if(Ir===null)throw Error(i(459));var A=Ir;return Ir=null,A}function gf(A){if(A===Mr||A===al)throw Error(i(483))}var yn=!1;function To(A){A.updateQueue={baseState:A.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jo(A,e){A=A.updateQueue,e.updateQueue===A&&(e.updateQueue={baseState:A.baseState,firstBaseUpdate:A.firstBaseUpdate,lastBaseUpdate:A.lastBaseUpdate,shared:A.shared,callbacks:null})}function vn(A){return{lane:A,tag:0,payload:null,callback:null,next:null}}function Qn(A,e,t){var n=A.updateQueue;if(n===null)return null;if(n=n.shared,(fe&2)!==0){var o=n.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),n.pending=e,e=Wi(A),$d(A,null,t),e}return qi(A,n,e,t),Wi(A)}function Lr(A,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var n=e.lanes;n&=A.pendingLanes,t|=n,e.lanes=t,ue(A,t)}}function No(A,e){var t=A.updateQueue,n=A.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var o=null,c=null;if(t=t.firstBaseUpdate,t!==null){do{var g={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};c===null?o=c=g:c=c.next=g,t=t.next}while(t!==null);c===null?o=c=e:c=c.next=e}else o=c=e;t={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:n.shared,callbacks:n.callbacks},A.updateQueue=t;return}A=t.lastBaseUpdate,A===null?t.firstBaseUpdate=e:A.next=e,t.lastBaseUpdate=e}var Mo=!1;function kr(){if(Mo){var A=Ka;if(A!==null)throw A}}function Kr(A,e,t,n){Mo=!1;var o=A.updateQueue;yn=!1;var c=o.firstBaseUpdate,g=o.lastBaseUpdate,x=o.shared.pending;if(x!==null){o.shared.pending=null;var U=x,R=U.next;U.next=null,g===null?c=R:g.next=R,g=U;var $=A.alternate;$!==null&&($=$.updateQueue,x=$.lastBaseUpdate,x!==g&&(x===null?$.firstBaseUpdate=R:x.next=R,$.lastBaseUpdate=U))}if(c!==null){var aA=o.baseState;g=0,$=R=U=null,x=c;do{var _=x.lane&-536870913,X=_!==x.lane;if(X?(se&_)===_:(n&_)===_){_!==0&&_===ka&&(Mo=!0),$!==null&&($=$.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});A:{var VA=A,RA=x;_=e;var pe=t;switch(RA.tag){case 1:if(VA=RA.payload,typeof VA=="function"){aA=VA.call(pe,aA,_);break A}aA=VA;break A;case 3:VA.flags=VA.flags&-65537|128;case 0:if(VA=RA.payload,_=typeof VA=="function"?VA.call(pe,aA,_):VA,_==null)break A;aA=b({},aA,_);break A;case 2:yn=!0}}_=x.callback,_!==null&&(A.flags|=64,X&&(A.flags|=8192),X=o.callbacks,X===null?o.callbacks=[_]:X.push(_))}else X={lane:_,tag:x.tag,payload:x.payload,callback:x.callback,next:null},$===null?(R=$=X,U=aA):$=$.next=X,g|=_;if(x=x.next,x===null){if(x=o.shared.pending,x===null)break;X=x,x=X.next,X.next=null,o.lastBaseUpdate=X,o.shared.pending=null}}while(!0);$===null&&(U=aA),o.baseState=U,o.firstBaseUpdate=R,o.lastBaseUpdate=$,c===null&&(o.shared.lanes=0),jn|=g,A.lanes=g,A.memoizedState=aA}}function hf(A,e){if(typeof A!="function")throw Error(i(191,A));A.call(e)}function Bf(A,e){var t=A.callbacks;if(t!==null)for(A.callbacks=null,A=0;A<t.length;A++)hf(t[A],e)}var Oa=v(null),il=v(0);function pf(A,e){A=hn,E(il,A),E(Oa,e),hn=A|e.baseLanes}function Io(){E(il,hn),E(Oa,Oa.current)}function Lo(){hn=il.current,K(Oa),K(il)}var Un=0,WA=null,he=null,Le=null,ll=!1,Ra=!1,ca=!1,sl=0,Or=0,za=null,ux=0;function je(){throw Error(i(321))}function ko(A,e){if(e===null)return!1;for(var t=0;t<e.length&&t<A.length;t++)if(!mt(A[t],e[t]))return!1;return!0}function Ko(A,e,t,n,o,c){return Un=c,WA=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,M.H=A===null||A.memoizedState===null?Ag:eg,ca=!1,c=t(n,o),ca=!1,Ra&&(c=mf(e,t,n,o)),xf(A),c}function xf(A){M.H=gl;var e=he!==null&&he.next!==null;if(Un=0,Le=he=WA=null,ll=!1,Or=0,za=null,e)throw Error(i(300));A===null||Xe||(A=A.dependencies,A!==null&&el(A)&&(Xe=!0))}function mf(A,e,t,n){WA=A;var o=0;do{if(Ra&&(za=null),Or=0,Ra=!1,25<=o)throw Error(i(301));if(o+=1,Le=he=null,A.updateQueue!=null){var c=A.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}M.H=xx,c=e(t,n)}while(Ra);return c}function dx(){var A=M.H,e=A.useState()[0];return e=typeof e.then=="function"?Rr(e):e,A=A.useState()[0],(he!==null?he.memoizedState:null)!==A&&(WA.flags|=1024),e}function Oo(){var A=sl!==0;return sl=0,A}function Ro(A,e,t){e.updateQueue=A.updateQueue,e.flags&=-2053,A.lanes&=~t}function zo(A){if(ll){for(A=A.memoizedState;A!==null;){var e=A.queue;e!==null&&(e.pending=null),A=A.next}ll=!1}Un=0,Le=he=WA=null,Ra=!1,Or=sl=0,za=null}function ht(){var A={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?WA.memoizedState=Le=A:Le=Le.next=A,Le}function ke(){if(he===null){var A=WA.alternate;A=A!==null?A.memoizedState:null}else A=he.next;var e=Le===null?WA.memoizedState:Le.next;if(e!==null)Le=e,he=A;else{if(A===null)throw WA.alternate===null?Error(i(467)):Error(i(310));he=A,A={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},Le===null?WA.memoizedState=Le=A:Le=Le.next=A}return Le}function Go(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Rr(A){var e=Or;return Or+=1,za===null&&(za=[]),A=df(za,A,e),e=WA,(Le===null?e.memoizedState:Le.next)===null&&(e=e.alternate,M.H=e===null||e.memoizedState===null?Ag:eg),A}function ol(A){if(A!==null&&typeof A=="object"){if(typeof A.then=="function")return Rr(A);if(A.$$typeof===CA)return nt(A)}throw Error(i(438,String(A)))}function _o(A){var e=null,t=WA.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var n=WA.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(o){return o.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=Go(),WA.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(A),n=0;n<A;n++)t[n]=wA;return e.index++,t}function on(A,e){return typeof e=="function"?e(A):e}function cl(A){var e=ke();return Vo(e,he,A)}function Vo(A,e,t){var n=A.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=t;var o=A.baseQueue,c=n.pending;if(c!==null){if(o!==null){var g=o.next;o.next=c.next,c.next=g}e.baseQueue=o=c,n.pending=null}if(c=A.baseState,o===null)A.memoizedState=c;else{e=o.next;var x=g=null,U=null,R=e,$=!1;do{var aA=R.lane&-536870913;if(aA!==R.lane?(se&aA)===aA:(Un&aA)===aA){var _=R.revertLane;if(_===0)U!==null&&(U=U.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),aA===ka&&($=!0);else if((Un&_)===_){R=R.next,_===ka&&($=!0);continue}else aA={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},U===null?(x=U=aA,g=c):U=U.next=aA,WA.lanes|=_,jn|=_;aA=R.action,ca&&t(c,aA),c=R.hasEagerState?R.eagerState:t(c,aA)}else _={lane:aA,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},U===null?(x=U=_,g=c):U=U.next=_,WA.lanes|=aA,jn|=aA;R=R.next}while(R!==null&&R!==e);if(U===null?g=c:U.next=x,!mt(c,A.memoizedState)&&(Xe=!0,$&&(t=Ka,t!==null)))throw t;A.memoizedState=c,A.baseState=g,A.baseQueue=U,n.lastRenderedState=c}return o===null&&(n.lanes=0),[A.memoizedState,n.dispatch]}function Xo(A){var e=ke(),t=e.queue;if(t===null)throw Error(i(311));t.lastRenderedReducer=A;var n=t.dispatch,o=t.pending,c=e.memoizedState;if(o!==null){t.pending=null;var g=o=o.next;do c=A(c,g.action),g=g.next;while(g!==o);mt(c,e.memoizedState)||(Xe=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),t.lastRenderedState=c}return[c,n]}function wf(A,e,t){var n=WA,o=ke(),c=ce;if(c){if(t===void 0)throw Error(i(407));t=t()}else t=e();var g=!mt((he||o).memoizedState,t);g&&(o.memoizedState=t,Xe=!0),o=o.queue;var x=yf.bind(null,n,o,A);if(zr(2048,8,x,[A]),o.getSnapshot!==e||g||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Ga(9,ul(),Cf.bind(null,n,o,t,e),null),be===null)throw Error(i(349));c||(Un&124)!==0||bf(n,e,t)}return t}function bf(A,e,t){A.flags|=16384,A={getSnapshot:e,value:t},e=WA.updateQueue,e===null?(e=Go(),WA.updateQueue=e,e.stores=[A]):(t=e.stores,t===null?e.stores=[A]:t.push(A))}function Cf(A,e,t,n){e.value=t,e.getSnapshot=n,vf(e)&&Qf(A)}function yf(A,e,t){return t(function(){vf(e)&&Qf(A)})}function vf(A){var e=A.getSnapshot;A=A.value;try{var t=e();return!mt(A,t)}catch{return!0}}function Qf(A){var e=Na(A,2);e!==null&&Qt(e,A,2)}function Yo(A){var e=ht();if(typeof A=="function"){var t=A;if(A=t(),ca){F(!0);try{t()}finally{F(!1)}}}return e.memoizedState=e.baseState=A,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:A},e}function Uf(A,e,t,n){return A.baseState=t,Vo(A,he,typeof n=="function"?n:on)}function fx(A,e,t,n,o){if(fl(A))throw Error(i(485));if(A=e.action,A!==null){var c={payload:o,action:A,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};M.T!==null?t(!0):c.isTransition=!1,n(c),t=e.pending,t===null?(c.next=e.pending=c,Ff(e,c)):(c.next=t.next,e.pending=t.next=c)}}function Ff(A,e){var t=e.action,n=e.payload,o=A.state;if(e.isTransition){var c=M.T,g={};M.T=g;try{var x=t(o,n),U=M.S;U!==null&&U(g,x),Ef(A,e,x)}catch(R){Jo(A,e,R)}finally{M.T=c}}else try{c=t(o,n),Ef(A,e,c)}catch(R){Jo(A,e,R)}}function Ef(A,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(n){Hf(A,e,n)},function(n){return Jo(A,e,n)}):Hf(A,e,t)}function Hf(A,e,t){e.status="fulfilled",e.value=t,Sf(e),A.state=t,e=A.pending,e!==null&&(t=e.next,t===e?A.pending=null:(t=t.next,e.next=t,Ff(A,t)))}function Jo(A,e,t){var n=A.pending;if(A.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=t,Sf(e),e=e.next;while(e!==n)}A.action=null}function Sf(A){A=A.listeners;for(var e=0;e<A.length;e++)(0,A[e])()}function Df(A,e){return e}function Tf(A,e){if(ce){var t=be.formState;if(t!==null){A:{var n=WA;if(ce){if(De){e:{for(var o=De,c=Yt;o.nodeType!==8;){if(!c){o=null;break e}if(o=Gt(o.nextSibling),o===null){o=null;break e}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){De=Gt(o.nextSibling),n=o.data==="F!";break A}}ia(n)}n=!1}n&&(e=t[0])}}return t=ht(),t.memoizedState=t.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Df,lastRenderedState:e},t.queue=n,t=Wf.bind(null,WA,n),n.dispatch=t,n=Yo(!1),c=$o.bind(null,WA,!1,n.queue),n=ht(),o={state:e,dispatch:null,action:A,pending:null},n.queue=o,t=fx.bind(null,WA,o,c,t),o.dispatch=t,n.memoizedState=A,[e,t,!1]}function jf(A){var e=ke();return Nf(e,he,A)}function Nf(A,e,t){if(e=Vo(A,e,Df)[0],A=cl(on)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=Rr(e)}catch(g){throw g===Mr?al:g}else n=e;e=ke();var o=e.queue,c=o.dispatch;return t!==e.memoizedState&&(WA.flags|=2048,Ga(9,ul(),gx.bind(null,o,t),null)),[n,c,A]}function gx(A,e){A.action=e}function Mf(A){var e=ke(),t=he;if(t!==null)return Nf(e,t,A);ke(),e=e.memoizedState,t=ke();var n=t.queue.dispatch;return t.memoizedState=A,[e,n,!1]}function Ga(A,e,t,n){return A={tag:A,create:t,deps:n,inst:e,next:null},e=WA.updateQueue,e===null&&(e=Go(),WA.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=A.next=A:(n=t.next,t.next=A,A.next=n,e.lastEffect=A),A}function ul(){return{destroy:void 0,resource:void 0}}function If(){return ke().memoizedState}function dl(A,e,t,n){var o=ht();n=n===void 0?null:n,WA.flags|=A,o.memoizedState=Ga(1|e,ul(),t,n)}function zr(A,e,t,n){var o=ke();n=n===void 0?null:n;var c=o.memoizedState.inst;he!==null&&n!==null&&ko(n,he.memoizedState.deps)?o.memoizedState=Ga(e,c,t,n):(WA.flags|=A,o.memoizedState=Ga(1|e,c,t,n))}function Lf(A,e){dl(8390656,8,A,e)}function kf(A,e){zr(2048,8,A,e)}function Kf(A,e){return zr(4,2,A,e)}function Of(A,e){return zr(4,4,A,e)}function Rf(A,e){if(typeof e=="function"){A=A();var t=e(A);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return A=A(),e.current=A,function(){e.current=null}}function zf(A,e,t){t=t!=null?t.concat([A]):null,zr(4,4,Rf.bind(null,e,A),t)}function Zo(){}function Gf(A,e){var t=ke();e=e===void 0?null:e;var n=t.memoizedState;return e!==null&&ko(e,n[1])?n[0]:(t.memoizedState=[A,e],A)}function _f(A,e){var t=ke();e=e===void 0?null:e;var n=t.memoizedState;if(e!==null&&ko(e,n[1]))return n[0];if(n=A(),ca){F(!0);try{A()}finally{F(!1)}}return t.memoizedState=[n,e],n}function qo(A,e,t){return t===void 0||(Un&1073741824)!==0?A.memoizedState=e:(A.memoizedState=t,A=Yg(),WA.lanes|=A,jn|=A,t)}function Vf(A,e,t,n){return mt(t,e)?t:Oa.current!==null?(A=qo(A,t,n),mt(A,e)||(Xe=!0),A):(Un&42)===0?(Xe=!0,A.memoizedState=t):(A=Yg(),WA.lanes|=A,jn|=A,e)}function Xf(A,e,t,n,o){var c=J.p;J.p=c!==0&&8>c?c:8;var g=M.T,x={};M.T=x,$o(A,!1,e,t);try{var U=o(),R=M.S;if(R!==null&&R(x,U),U!==null&&typeof U=="object"&&typeof U.then=="function"){var $=cx(U,n);Gr(A,e,$,vt(A))}else Gr(A,e,n,vt(A))}catch(aA){Gr(A,e,{then:function(){},status:"rejected",reason:aA},vt())}finally{J.p=c,M.T=g}}function hx(){}function Wo(A,e,t,n){if(A.tag!==5)throw Error(i(476));var o=Yf(A).queue;Xf(A,o,e,pA,t===null?hx:function(){return Jf(A),t(n)})}function Yf(A){var e=A.memoizedState;if(e!==null)return e;e={memoizedState:pA,baseState:pA,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:pA},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:t},next:null},A.memoizedState=e,A=A.alternate,A!==null&&(A.memoizedState=e),e}function Jf(A){var e=Yf(A).next.queue;Gr(A,e,{},vt())}function Po(){return nt(li)}function Zf(){return ke().memoizedState}function qf(){return ke().memoizedState}function Bx(A){for(var e=A.return;e!==null;){switch(e.tag){case 24:case 3:var t=vt();A=vn(t);var n=Qn(e,A,t);n!==null&&(Qt(n,e,t),Lr(n,e,t)),e={cache:Eo()},A.payload=e;return}e=e.return}}function px(A,e,t){var n=vt();t={lane:n,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},fl(A)?Pf(e,t):(t=xo(A,e,t,n),t!==null&&(Qt(t,A,n),$f(t,e,n)))}function Wf(A,e,t){var n=vt();Gr(A,e,t,n)}function Gr(A,e,t,n){var o={lane:n,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(fl(A))Pf(e,o);else{var c=A.alternate;if(A.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var g=e.lastRenderedState,x=c(g,t);if(o.hasEagerState=!0,o.eagerState=x,mt(x,g))return qi(A,e,o,0),be===null&&Zi(),!1}catch{}finally{}if(t=xo(A,e,o,n),t!==null)return Qt(t,A,n),$f(t,e,n),!0}return!1}function $o(A,e,t,n){if(n={lane:2,revertLane:Dc(),action:n,hasEagerState:!1,eagerState:null,next:null},fl(A)){if(e)throw Error(i(479))}else e=xo(A,t,n,2),e!==null&&Qt(e,A,2)}function fl(A){var e=A.alternate;return A===WA||e!==null&&e===WA}function Pf(A,e){Ra=ll=!0;var t=A.pending;t===null?e.next=e:(e.next=t.next,t.next=e),A.pending=e}function $f(A,e,t){if((t&4194048)!==0){var n=e.lanes;n&=A.pendingLanes,t|=n,e.lanes=t,ue(A,t)}}var gl={readContext:nt,use:ol,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je},Ag={readContext:nt,use:ol,useCallback:function(A,e){return ht().memoizedState=[A,e===void 0?null:e],A},useContext:nt,useEffect:Lf,useImperativeHandle:function(A,e,t){t=t!=null?t.concat([A]):null,dl(4194308,4,Rf.bind(null,e,A),t)},useLayoutEffect:function(A,e){return dl(4194308,4,A,e)},useInsertionEffect:function(A,e){dl(4,2,A,e)},useMemo:function(A,e){var t=ht();e=e===void 0?null:e;var n=A();if(ca){F(!0);try{A()}finally{F(!1)}}return t.memoizedState=[n,e],n},useReducer:function(A,e,t){var n=ht();if(t!==void 0){var o=t(e);if(ca){F(!0);try{t(e)}finally{F(!1)}}}else o=e;return n.memoizedState=n.baseState=o,A={pending:null,lanes:0,dispatch:null,lastRenderedReducer:A,lastRenderedState:o},n.queue=A,A=A.dispatch=px.bind(null,WA,A),[n.memoizedState,A]},useRef:function(A){var e=ht();return A={current:A},e.memoizedState=A},useState:function(A){A=Yo(A);var e=A.queue,t=Wf.bind(null,WA,e);return e.dispatch=t,[A.memoizedState,t]},useDebugValue:Zo,useDeferredValue:function(A,e){var t=ht();return qo(t,A,e)},useTransition:function(){var A=Yo(!1);return A=Xf.bind(null,WA,A.queue,!0,!1),ht().memoizedState=A,[!1,A]},useSyncExternalStore:function(A,e,t){var n=WA,o=ht();if(ce){if(t===void 0)throw Error(i(407));t=t()}else{if(t=e(),be===null)throw Error(i(349));(se&124)!==0||bf(n,e,t)}o.memoizedState=t;var c={value:t,getSnapshot:e};return o.queue=c,Lf(yf.bind(null,n,c,A),[A]),n.flags|=2048,Ga(9,ul(),Cf.bind(null,n,c,t,e),null),t},useId:function(){var A=ht(),e=be.identifierPrefix;if(ce){var t=rn,n=an;t=(n&~(1<<32-D(n)-1)).toString(32)+t,e="«"+e+"R"+t,t=sl++,0<t&&(e+="H"+t.toString(32)),e+="»"}else t=ux++,e="«"+e+"r"+t.toString(32)+"»";return A.memoizedState=e},useHostTransitionStatus:Po,useFormState:Tf,useActionState:Tf,useOptimistic:function(A){var e=ht();e.memoizedState=e.baseState=A;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=$o.bind(null,WA,!0,t),t.dispatch=e,[A,e]},useMemoCache:_o,useCacheRefresh:function(){return ht().memoizedState=Bx.bind(null,WA)}},eg={readContext:nt,use:ol,useCallback:Gf,useContext:nt,useEffect:kf,useImperativeHandle:zf,useInsertionEffect:Kf,useLayoutEffect:Of,useMemo:_f,useReducer:cl,useRef:If,useState:function(){return cl(on)},useDebugValue:Zo,useDeferredValue:function(A,e){var t=ke();return Vf(t,he.memoizedState,A,e)},useTransition:function(){var A=cl(on)[0],e=ke().memoizedState;return[typeof A=="boolean"?A:Rr(A),e]},useSyncExternalStore:wf,useId:Zf,useHostTransitionStatus:Po,useFormState:jf,useActionState:jf,useOptimistic:function(A,e){var t=ke();return Uf(t,he,A,e)},useMemoCache:_o,useCacheRefresh:qf},xx={readContext:nt,use:ol,useCallback:Gf,useContext:nt,useEffect:kf,useImperativeHandle:zf,useInsertionEffect:Kf,useLayoutEffect:Of,useMemo:_f,useReducer:Xo,useRef:If,useState:function(){return Xo(on)},useDebugValue:Zo,useDeferredValue:function(A,e){var t=ke();return he===null?qo(t,A,e):Vf(t,he.memoizedState,A,e)},useTransition:function(){var A=Xo(on)[0],e=ke().memoizedState;return[typeof A=="boolean"?A:Rr(A),e]},useSyncExternalStore:wf,useId:Zf,useHostTransitionStatus:Po,useFormState:Mf,useActionState:Mf,useOptimistic:function(A,e){var t=ke();return he!==null?Uf(t,he,A,e):(t.baseState=A,[A,t.queue.dispatch])},useMemoCache:_o,useCacheRefresh:qf},_a=null,_r=0;function hl(A){var e=_r;return _r+=1,_a===null&&(_a=[]),df(_a,A,e)}function Vr(A,e){e=e.props.ref,A.ref=e!==void 0?e:null}function Bl(A,e){throw e.$$typeof===y?Error(i(525)):(A=Object.prototype.toString.call(e),Error(i(31,A==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":A)))}function tg(A){var e=A._init;return e(A._payload)}function ng(A){function e(I,N){if(A){var O=I.deletions;O===null?(I.deletions=[N],I.flags|=16):O.push(N)}}function t(I,N){if(!A)return null;for(;N!==null;)e(I,N),N=N.sibling;return null}function n(I){for(var N=new Map;I!==null;)I.key!==null?N.set(I.key,I):N.set(I.index,I),I=I.sibling;return N}function o(I,N){return I=nn(I,N),I.index=0,I.sibling=null,I}function c(I,N,O){return I.index=O,A?(O=I.alternate,O!==null?(O=O.index,O<N?(I.flags|=67108866,N):O):(I.flags|=67108866,N)):(I.flags|=1048576,N)}function g(I){return A&&I.alternate===null&&(I.flags|=67108866),I}function x(I,N,O,tA){return N===null||N.tag!==6?(N=wo(O,I.mode,tA),N.return=I,N):(N=o(N,O),N.return=I,N)}function U(I,N,O,tA){var IA=O.type;return IA===Z?$(I,N,O.props.children,tA,O.key):N!==null&&(N.elementType===IA||typeof IA=="object"&&IA!==null&&IA.$$typeof===L&&tg(IA)===N.type)?(N=o(N,O.props),Vr(N,O),N.return=I,N):(N=Pi(O.type,O.key,O.props,null,I.mode,tA),Vr(N,O),N.return=I,N)}function R(I,N,O,tA){return N===null||N.tag!==4||N.stateNode.containerInfo!==O.containerInfo||N.stateNode.implementation!==O.implementation?(N=bo(O,I.mode,tA),N.return=I,N):(N=o(N,O.children||[]),N.return=I,N)}function $(I,N,O,tA,IA){return N===null||N.tag!==7?(N=ta(O,I.mode,tA,IA),N.return=I,N):(N=o(N,O),N.return=I,N)}function aA(I,N,O){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=wo(""+N,I.mode,O),N.return=I,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case T:return O=Pi(N.type,N.key,N.props,null,I.mode,O),Vr(O,N),O.return=I,O;case W:return N=bo(N,I.mode,O),N.return=I,N;case L:var tA=N._init;return N=tA(N._payload),aA(I,N,O)}if(SA(N)||dA(N))return N=ta(N,I.mode,O,null),N.return=I,N;if(typeof N.then=="function")return aA(I,hl(N),O);if(N.$$typeof===CA)return aA(I,tl(I,N),O);Bl(I,N)}return null}function _(I,N,O,tA){var IA=N!==null?N.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return IA!==null?null:x(I,N,""+O,tA);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case T:return O.key===IA?U(I,N,O,tA):null;case W:return O.key===IA?R(I,N,O,tA):null;case L:return IA=O._init,O=IA(O._payload),_(I,N,O,tA)}if(SA(O)||dA(O))return IA!==null?null:$(I,N,O,tA,null);if(typeof O.then=="function")return _(I,N,hl(O),tA);if(O.$$typeof===CA)return _(I,N,tl(I,O),tA);Bl(I,O)}return null}function X(I,N,O,tA,IA){if(typeof tA=="string"&&tA!==""||typeof tA=="number"||typeof tA=="bigint")return I=I.get(O)||null,x(N,I,""+tA,IA);if(typeof tA=="object"&&tA!==null){switch(tA.$$typeof){case T:return I=I.get(tA.key===null?O:tA.key)||null,U(N,I,tA,IA);case W:return I=I.get(tA.key===null?O:tA.key)||null,R(N,I,tA,IA);case L:var $A=tA._init;return tA=$A(tA._payload),X(I,N,O,tA,IA)}if(SA(tA)||dA(tA))return I=I.get(O)||null,$(N,I,tA,IA,null);if(typeof tA.then=="function")return X(I,N,O,hl(tA),IA);if(tA.$$typeof===CA)return X(I,N,O,tl(N,tA),IA);Bl(N,tA)}return null}function VA(I,N,O,tA){for(var IA=null,$A=null,kA=N,zA=N=0,Je=null;kA!==null&&zA<O.length;zA++){kA.index>zA?(Je=kA,kA=null):Je=kA.sibling;var oe=_(I,kA,O[zA],tA);if(oe===null){kA===null&&(kA=Je);break}A&&kA&&oe.alternate===null&&e(I,kA),N=c(oe,N,zA),$A===null?IA=oe:$A.sibling=oe,$A=oe,kA=Je}if(zA===O.length)return t(I,kA),ce&&aa(I,zA),IA;if(kA===null){for(;zA<O.length;zA++)kA=aA(I,O[zA],tA),kA!==null&&(N=c(kA,N,zA),$A===null?IA=kA:$A.sibling=kA,$A=kA);return ce&&aa(I,zA),IA}for(kA=n(kA);zA<O.length;zA++)Je=X(kA,I,zA,O[zA],tA),Je!==null&&(A&&Je.alternate!==null&&kA.delete(Je.key===null?zA:Je.key),N=c(Je,N,zA),$A===null?IA=Je:$A.sibling=Je,$A=Je);return A&&kA.forEach(function(zn){return e(I,zn)}),ce&&aa(I,zA),IA}function RA(I,N,O,tA){if(O==null)throw Error(i(151));for(var IA=null,$A=null,kA=N,zA=N=0,Je=null,oe=O.next();kA!==null&&!oe.done;zA++,oe=O.next()){kA.index>zA?(Je=kA,kA=null):Je=kA.sibling;var zn=_(I,kA,oe.value,tA);if(zn===null){kA===null&&(kA=Je);break}A&&kA&&zn.alternate===null&&e(I,kA),N=c(zn,N,zA),$A===null?IA=zn:$A.sibling=zn,$A=zn,kA=Je}if(oe.done)return t(I,kA),ce&&aa(I,zA),IA;if(kA===null){for(;!oe.done;zA++,oe=O.next())oe=aA(I,oe.value,tA),oe!==null&&(N=c(oe,N,zA),$A===null?IA=oe:$A.sibling=oe,$A=oe);return ce&&aa(I,zA),IA}for(kA=n(kA);!oe.done;zA++,oe=O.next())oe=X(kA,I,zA,oe.value,tA),oe!==null&&(A&&oe.alternate!==null&&kA.delete(oe.key===null?zA:oe.key),N=c(oe,N,zA),$A===null?IA=oe:$A.sibling=oe,$A=oe);return A&&kA.forEach(function(mm){return e(I,mm)}),ce&&aa(I,zA),IA}function pe(I,N,O,tA){if(typeof O=="object"&&O!==null&&O.type===Z&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case T:A:{for(var IA=O.key;N!==null;){if(N.key===IA){if(IA=O.type,IA===Z){if(N.tag===7){t(I,N.sibling),tA=o(N,O.props.children),tA.return=I,I=tA;break A}}else if(N.elementType===IA||typeof IA=="object"&&IA!==null&&IA.$$typeof===L&&tg(IA)===N.type){t(I,N.sibling),tA=o(N,O.props),Vr(tA,O),tA.return=I,I=tA;break A}t(I,N);break}else e(I,N);N=N.sibling}O.type===Z?(tA=ta(O.props.children,I.mode,tA,O.key),tA.return=I,I=tA):(tA=Pi(O.type,O.key,O.props,null,I.mode,tA),Vr(tA,O),tA.return=I,I=tA)}return g(I);case W:A:{for(IA=O.key;N!==null;){if(N.key===IA)if(N.tag===4&&N.stateNode.containerInfo===O.containerInfo&&N.stateNode.implementation===O.implementation){t(I,N.sibling),tA=o(N,O.children||[]),tA.return=I,I=tA;break A}else{t(I,N);break}else e(I,N);N=N.sibling}tA=bo(O,I.mode,tA),tA.return=I,I=tA}return g(I);case L:return IA=O._init,O=IA(O._payload),pe(I,N,O,tA)}if(SA(O))return VA(I,N,O,tA);if(dA(O)){if(IA=dA(O),typeof IA!="function")throw Error(i(150));return O=IA.call(O),RA(I,N,O,tA)}if(typeof O.then=="function")return pe(I,N,hl(O),tA);if(O.$$typeof===CA)return pe(I,N,tl(I,O),tA);Bl(I,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,N!==null&&N.tag===6?(t(I,N.sibling),tA=o(N,O),tA.return=I,I=tA):(t(I,N),tA=wo(O,I.mode,tA),tA.return=I,I=tA),g(I)):t(I,N)}return function(I,N,O,tA){try{_r=0;var IA=pe(I,N,O,tA);return _a=null,IA}catch(kA){if(kA===Mr||kA===al)throw kA;var $A=wt(29,kA,null,I.mode);return $A.lanes=tA,$A.return=I,$A}finally{}}}var Va=ng(!0),ag=ng(!1),Nt=v(null),Jt=null;function Fn(A){var e=A.alternate;E(ze,ze.current&1),E(Nt,A),Jt===null&&(e===null||Oa.current!==null||e.memoizedState!==null)&&(Jt=A)}function rg(A){if(A.tag===22){if(E(ze,ze.current),E(Nt,A),Jt===null){var e=A.alternate;e!==null&&e.memoizedState!==null&&(Jt=A)}}else En()}function En(){E(ze,ze.current),E(Nt,Nt.current)}function cn(A){K(Nt),Jt===A&&(Jt=null),K(ze)}var ze=v(0);function pl(A){for(var e=A;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||Gc(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Ac(A,e,t,n){e=A.memoizedState,t=t(n,e),t=t==null?e:b({},e,t),A.memoizedState=t,A.lanes===0&&(A.updateQueue.baseState=t)}var ec={enqueueSetState:function(A,e,t){A=A._reactInternals;var n=vt(),o=vn(n);o.payload=e,t!=null&&(o.callback=t),e=Qn(A,o,n),e!==null&&(Qt(e,A,n),Lr(e,A,n))},enqueueReplaceState:function(A,e,t){A=A._reactInternals;var n=vt(),o=vn(n);o.tag=1,o.payload=e,t!=null&&(o.callback=t),e=Qn(A,o,n),e!==null&&(Qt(e,A,n),Lr(e,A,n))},enqueueForceUpdate:function(A,e){A=A._reactInternals;var t=vt(),n=vn(t);n.tag=2,e!=null&&(n.callback=e),e=Qn(A,n,t),e!==null&&(Qt(e,A,t),Lr(e,A,t))}};function ig(A,e,t,n,o,c,g){return A=A.stateNode,typeof A.shouldComponentUpdate=="function"?A.shouldComponentUpdate(n,c,g):e.prototype&&e.prototype.isPureReactComponent?!Fr(t,n)||!Fr(o,c):!0}function lg(A,e,t,n){A=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,n),e.state!==A&&ec.enqueueReplaceState(e,e.state,null)}function ua(A,e){var t=e;if("ref"in e){t={};for(var n in e)n!=="ref"&&(t[n]=e[n])}if(A=A.defaultProps){t===e&&(t=b({},t));for(var o in A)t[o]===void 0&&(t[o]=A[o])}return t}var xl=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function sg(A){xl(A)}function og(A){console.error(A)}function cg(A){xl(A)}function ml(A,e){try{var t=A.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function ug(A,e,t){try{var n=A.onCaughtError;n(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function tc(A,e,t){return t=vn(t),t.tag=3,t.payload={element:null},t.callback=function(){ml(A,e)},t}function dg(A){return A=vn(A),A.tag=3,A}function fg(A,e,t,n){var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var c=n.value;A.payload=function(){return o(c)},A.callback=function(){ug(e,t,n)}}var g=t.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(A.callback=function(){ug(e,t,n),typeof o!="function"&&(Nn===null?Nn=new Set([this]):Nn.add(this));var x=n.stack;this.componentDidCatch(n.value,{componentStack:x!==null?x:""})})}function mx(A,e,t,n,o){if(t.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=t.alternate,e!==null&&Tr(e,t,o,!0),t=Nt.current,t!==null){switch(t.tag){case 13:return Jt===null?Uc():t.alternate===null&&Te===0&&(Te=3),t.flags&=-257,t.flags|=65536,t.lanes=o,n===Do?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([n]):e.add(n),Ec(A,n,o)),!1;case 22:return t.flags|=65536,n===Do?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([n]):t.add(n)),Ec(A,n,o)),!1}throw Error(i(435,t.tag))}return Ec(A,n,o),Uc(),!1}if(ce)return e=Nt.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=o,n!==vo&&(A=Error(i(422),{cause:n}),Dr(St(A,t)))):(n!==vo&&(e=Error(i(423),{cause:n}),Dr(St(e,t))),A=A.current.alternate,A.flags|=65536,o&=-o,A.lanes|=o,n=St(n,t),o=tc(A.stateNode,n,o),No(A,o),Te!==4&&(Te=2)),!1;var c=Error(i(520),{cause:n});if(c=St(c,t),Pr===null?Pr=[c]:Pr.push(c),Te!==4&&(Te=2),e===null)return!0;n=St(n,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,A=o&-o,t.lanes|=A,A=tc(t.stateNode,n,A),No(t,A),!1;case 1:if(e=t.type,c=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Nn===null||!Nn.has(c))))return t.flags|=65536,o&=-o,t.lanes|=o,o=dg(o),fg(o,A,t,n),No(t,o),!1}t=t.return}while(t!==null);return!1}var gg=Error(i(461)),Xe=!1;function qe(A,e,t,n){e.child=A===null?ag(e,null,t,n):Va(e,A.child,t,n)}function hg(A,e,t,n,o){t=t.render;var c=e.ref;if("ref"in n){var g={};for(var x in n)x!=="ref"&&(g[x]=n[x])}else g=n;return sa(e),n=Ko(A,e,t,g,c,o),x=Oo(),A!==null&&!Xe?(Ro(A,e,o),un(A,e,o)):(ce&&x&&Co(e),e.flags|=1,qe(A,e,n,o),e.child)}function Bg(A,e,t,n,o){if(A===null){var c=t.type;return typeof c=="function"&&!mo(c)&&c.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=c,pg(A,e,c,n,o)):(A=Pi(t.type,null,n,e,e.mode,o),A.ref=e.ref,A.return=e,e.child=A)}if(c=A.child,!cc(A,o)){var g=c.memoizedProps;if(t=t.compare,t=t!==null?t:Fr,t(g,n)&&A.ref===e.ref)return un(A,e,o)}return e.flags|=1,A=nn(c,n),A.ref=e.ref,A.return=e,e.child=A}function pg(A,e,t,n,o){if(A!==null){var c=A.memoizedProps;if(Fr(c,n)&&A.ref===e.ref)if(Xe=!1,e.pendingProps=n=c,cc(A,o))(A.flags&131072)!==0&&(Xe=!0);else return e.lanes=A.lanes,un(A,e,o)}return nc(A,e,t,n,o)}function xg(A,e,t){var n=e.pendingProps,o=n.children,c=A!==null?A.memoizedState:null;if(n.mode==="hidden"){if((e.flags&128)!==0){if(n=c!==null?c.baseLanes|t:t,A!==null){for(o=e.child=A.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;e.childLanes=c&~n}else e.childLanes=0,e.child=null;return mg(A,e,n,t)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},A!==null&&nl(e,c!==null?c.cachePool:null),c!==null?pf(e,c):Io(),rg(e);else return e.lanes=e.childLanes=536870912,mg(A,e,c!==null?c.baseLanes|t:t,t)}else c!==null?(nl(e,c.cachePool),pf(e,c),En(),e.memoizedState=null):(A!==null&&nl(e,null),Io(),En());return qe(A,e,o,t),e.child}function mg(A,e,t,n){var o=So();return o=o===null?null:{parent:Re._currentValue,pool:o},e.memoizedState={baseLanes:t,cachePool:o},A!==null&&nl(e,null),Io(),rg(e),A!==null&&Tr(A,e,n,!0),null}function wl(A,e){var t=e.ref;if(t===null)A!==null&&A.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(i(284));(A===null||A.ref!==t)&&(e.flags|=4194816)}}function nc(A,e,t,n,o){return sa(e),t=Ko(A,e,t,n,void 0,o),n=Oo(),A!==null&&!Xe?(Ro(A,e,o),un(A,e,o)):(ce&&n&&Co(e),e.flags|=1,qe(A,e,t,o),e.child)}function wg(A,e,t,n,o,c){return sa(e),e.updateQueue=null,t=mf(e,n,t,o),xf(A),n=Oo(),A!==null&&!Xe?(Ro(A,e,c),un(A,e,c)):(ce&&n&&Co(e),e.flags|=1,qe(A,e,t,c),e.child)}function bg(A,e,t,n,o){if(sa(e),e.stateNode===null){var c=Ma,g=t.contextType;typeof g=="object"&&g!==null&&(c=nt(g)),c=new t(n,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=ec,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=n,c.state=e.memoizedState,c.refs={},To(e),g=t.contextType,c.context=typeof g=="object"&&g!==null?nt(g):Ma,c.state=e.memoizedState,g=t.getDerivedStateFromProps,typeof g=="function"&&(Ac(e,t,g,n),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&ec.enqueueReplaceState(c,c.state,null),Kr(e,n,c,o),kr(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(A===null){c=e.stateNode;var x=e.memoizedProps,U=ua(t,x);c.props=U;var R=c.context,$=t.contextType;g=Ma,typeof $=="object"&&$!==null&&(g=nt($));var aA=t.getDerivedStateFromProps;$=typeof aA=="function"||typeof c.getSnapshotBeforeUpdate=="function",x=e.pendingProps!==x,$||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(x||R!==g)&&lg(e,c,n,g),yn=!1;var _=e.memoizedState;c.state=_,Kr(e,n,c,o),kr(),R=e.memoizedState,x||_!==R||yn?(typeof aA=="function"&&(Ac(e,t,aA,n),R=e.memoizedState),(U=yn||ig(e,t,U,n,_,R,g))?($||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=R),c.props=n,c.state=R,c.context=g,n=U):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{c=e.stateNode,jo(A,e),g=e.memoizedProps,$=ua(t,g),c.props=$,aA=e.pendingProps,_=c.context,R=t.contextType,U=Ma,typeof R=="object"&&R!==null&&(U=nt(R)),x=t.getDerivedStateFromProps,(R=typeof x=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==aA||_!==U)&&lg(e,c,n,U),yn=!1,_=e.memoizedState,c.state=_,Kr(e,n,c,o),kr();var X=e.memoizedState;g!==aA||_!==X||yn||A!==null&&A.dependencies!==null&&el(A.dependencies)?(typeof x=="function"&&(Ac(e,t,x,n),X=e.memoizedState),($=yn||ig(e,t,$,n,_,X,U)||A!==null&&A.dependencies!==null&&el(A.dependencies))?(R||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(n,X,U),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(n,X,U)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===A.memoizedProps&&_===A.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===A.memoizedProps&&_===A.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=X),c.props=n,c.state=X,c.context=U,n=$):(typeof c.componentDidUpdate!="function"||g===A.memoizedProps&&_===A.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===A.memoizedProps&&_===A.memoizedState||(e.flags|=1024),n=!1)}return c=n,wl(A,e),n=(e.flags&128)!==0,c||n?(c=e.stateNode,t=n&&typeof t.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,A!==null&&n?(e.child=Va(e,A.child,null,o),e.child=Va(e,null,t,o)):qe(A,e,t,o),e.memoizedState=c.state,A=e.child):A=un(A,e,o),A}function Cg(A,e,t,n){return Sr(),e.flags|=256,qe(A,e,t,n),e.child}var ac={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rc(A){return{baseLanes:A,cachePool:of()}}function ic(A,e,t){return A=A!==null?A.childLanes&~t:0,e&&(A|=Mt),A}function yg(A,e,t){var n=e.pendingProps,o=!1,c=(e.flags&128)!==0,g;if((g=c)||(g=A!==null&&A.memoizedState===null?!1:(ze.current&2)!==0),g&&(o=!0,e.flags&=-129),g=(e.flags&32)!==0,e.flags&=-33,A===null){if(ce){if(o?Fn(e):En(),ce){var x=De,U;if(U=x){A:{for(U=x,x=Yt;U.nodeType!==8;){if(!x){x=null;break A}if(U=Gt(U.nextSibling),U===null){x=null;break A}}x=U}x!==null?(e.memoizedState={dehydrated:x,treeContext:na!==null?{id:an,overflow:rn}:null,retryLane:536870912,hydrationErrors:null},U=wt(18,null,null,0),U.stateNode=x,U.return=e,e.child=U,st=e,De=null,U=!0):U=!1}U||ia(e)}if(x=e.memoizedState,x!==null&&(x=x.dehydrated,x!==null))return Gc(x)?e.lanes=32:e.lanes=536870912,null;cn(e)}return x=n.children,n=n.fallback,o?(En(),o=e.mode,x=bl({mode:"hidden",children:x},o),n=ta(n,o,t,null),x.return=e,n.return=e,x.sibling=n,e.child=x,o=e.child,o.memoizedState=rc(t),o.childLanes=ic(A,g,t),e.memoizedState=ac,n):(Fn(e),lc(e,x))}if(U=A.memoizedState,U!==null&&(x=U.dehydrated,x!==null)){if(c)e.flags&256?(Fn(e),e.flags&=-257,e=sc(A,e,t)):e.memoizedState!==null?(En(),e.child=A.child,e.flags|=128,e=null):(En(),o=n.fallback,x=e.mode,n=bl({mode:"visible",children:n.children},x),o=ta(o,x,t,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,Va(e,A.child,null,t),n=e.child,n.memoizedState=rc(t),n.childLanes=ic(A,g,t),e.memoizedState=ac,e=o);else if(Fn(e),Gc(x)){if(g=x.nextSibling&&x.nextSibling.dataset,g)var R=g.dgst;g=R,n=Error(i(419)),n.stack="",n.digest=g,Dr({value:n,source:null,stack:null}),e=sc(A,e,t)}else if(Xe||Tr(A,e,t,!1),g=(t&A.childLanes)!==0,Xe||g){if(g=be,g!==null&&(n=t&-t,n=(n&42)!==0?1:le(n),n=(n&(g.suspendedLanes|t))!==0?0:n,n!==0&&n!==U.retryLane))throw U.retryLane=n,Na(A,n),Qt(g,A,n),gg;x.data==="$?"||Uc(),e=sc(A,e,t)}else x.data==="$?"?(e.flags|=192,e.child=A.child,e=null):(A=U.treeContext,De=Gt(x.nextSibling),st=e,ce=!0,ra=null,Yt=!1,A!==null&&(Tt[jt++]=an,Tt[jt++]=rn,Tt[jt++]=na,an=A.id,rn=A.overflow,na=e),e=lc(e,n.children),e.flags|=4096);return e}return o?(En(),o=n.fallback,x=e.mode,U=A.child,R=U.sibling,n=nn(U,{mode:"hidden",children:n.children}),n.subtreeFlags=U.subtreeFlags&65011712,R!==null?o=nn(R,o):(o=ta(o,x,t,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,n=o,o=e.child,x=A.child.memoizedState,x===null?x=rc(t):(U=x.cachePool,U!==null?(R=Re._currentValue,U=U.parent!==R?{parent:R,pool:R}:U):U=of(),x={baseLanes:x.baseLanes|t,cachePool:U}),o.memoizedState=x,o.childLanes=ic(A,g,t),e.memoizedState=ac,n):(Fn(e),t=A.child,A=t.sibling,t=nn(t,{mode:"visible",children:n.children}),t.return=e,t.sibling=null,A!==null&&(g=e.deletions,g===null?(e.deletions=[A],e.flags|=16):g.push(A)),e.child=t,e.memoizedState=null,t)}function lc(A,e){return e=bl({mode:"visible",children:e},A.mode),e.return=A,A.child=e}function bl(A,e){return A=wt(22,A,null,e),A.lanes=0,A.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},A}function sc(A,e,t){return Va(e,A.child,null,t),A=lc(e,e.pendingProps.children),A.flags|=2,e.memoizedState=null,A}function vg(A,e,t){A.lanes|=e;var n=A.alternate;n!==null&&(n.lanes|=e),Uo(A.return,e,t)}function oc(A,e,t,n,o){var c=A.memoizedState;c===null?A.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:o}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=n,c.tail=t,c.tailMode=o)}function Qg(A,e,t){var n=e.pendingProps,o=n.revealOrder,c=n.tail;if(qe(A,e,n.children,t),n=ze.current,(n&2)!==0)n=n&1|2,e.flags|=128;else{if(A!==null&&(A.flags&128)!==0)A:for(A=e.child;A!==null;){if(A.tag===13)A.memoizedState!==null&&vg(A,t,e);else if(A.tag===19)vg(A,t,e);else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break A;for(;A.sibling===null;){if(A.return===null||A.return===e)break A;A=A.return}A.sibling.return=A.return,A=A.sibling}n&=1}switch(E(ze,n),o){case"forwards":for(t=e.child,o=null;t!==null;)A=t.alternate,A!==null&&pl(A)===null&&(o=t),t=t.sibling;t=o,t===null?(o=e.child,e.child=null):(o=t.sibling,t.sibling=null),oc(e,!1,o,t,c);break;case"backwards":for(t=null,o=e.child,e.child=null;o!==null;){if(A=o.alternate,A!==null&&pl(A)===null){e.child=o;break}A=o.sibling,o.sibling=t,t=o,o=A}oc(e,!0,t,null,c);break;case"together":oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function un(A,e,t){if(A!==null&&(e.dependencies=A.dependencies),jn|=e.lanes,(t&e.childLanes)===0)if(A!==null){if(Tr(A,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(A!==null&&e.child!==A.child)throw Error(i(153));if(e.child!==null){for(A=e.child,t=nn(A,A.pendingProps),e.child=t,t.return=e;A.sibling!==null;)A=A.sibling,t=t.sibling=nn(A,A.pendingProps),t.return=e;t.sibling=null}return e.child}function cc(A,e){return(A.lanes&e)!==0?!0:(A=A.dependencies,!!(A!==null&&el(A)))}function wx(A,e,t){switch(e.tag){case 3:mA(e,e.stateNode.containerInfo),Cn(e,Re,A.memoizedState.cache),Sr();break;case 27:case 5:FA(e);break;case 4:mA(e,e.stateNode.containerInfo);break;case 10:Cn(e,e.type,e.memoizedProps.value);break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Fn(e),e.flags|=128,null):(t&e.child.childLanes)!==0?yg(A,e,t):(Fn(e),A=un(A,e,t),A!==null?A.sibling:null);Fn(e);break;case 19:var o=(A.flags&128)!==0;if(n=(t&e.childLanes)!==0,n||(Tr(A,e,t,!1),n=(t&e.childLanes)!==0),o){if(n)return Qg(A,e,t);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),E(ze,ze.current),n)break;return null;case 22:case 23:return e.lanes=0,xg(A,e,t);case 24:Cn(e,Re,A.memoizedState.cache)}return un(A,e,t)}function Ug(A,e,t){if(A!==null)if(A.memoizedProps!==e.pendingProps)Xe=!0;else{if(!cc(A,t)&&(e.flags&128)===0)return Xe=!1,wx(A,e,t);Xe=(A.flags&131072)!==0}else Xe=!1,ce&&(e.flags&1048576)!==0&&ef(e,Al,e.index);switch(e.lanes=0,e.tag){case 16:A:{A=e.pendingProps;var n=e.elementType,o=n._init;if(n=o(n._payload),e.type=n,typeof n=="function")mo(n)?(A=ua(n,A),e.tag=1,e=bg(null,e,n,A,t)):(e.tag=0,e=nc(null,e,n,A,t));else{if(n!=null){if(o=n.$$typeof,o===BA){e.tag=11,e=hg(null,e,n,A,t);break A}else if(o===yA){e.tag=14,e=Bg(null,e,n,A,t);break A}}throw e=jA(n)||n,Error(i(306,e,""))}}return e;case 0:return nc(A,e,e.type,e.pendingProps,t);case 1:return n=e.type,o=ua(n,e.pendingProps),bg(A,e,n,o,t);case 3:A:{if(mA(e,e.stateNode.containerInfo),A===null)throw Error(i(387));n=e.pendingProps;var c=e.memoizedState;o=c.element,jo(A,e),Kr(e,n,null,t);var g=e.memoizedState;if(n=g.cache,Cn(e,Re,n),n!==c.cache&&Fo(e,[Re],t,!0),kr(),n=g.element,c.isDehydrated)if(c={element:n,isDehydrated:!1,cache:g.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=Cg(A,e,n,t);break A}else if(n!==o){o=St(Error(i(424)),e),Dr(o),e=Cg(A,e,n,t);break A}else{switch(A=e.stateNode.containerInfo,A.nodeType){case 9:A=A.body;break;default:A=A.nodeName==="HTML"?A.ownerDocument.body:A}for(De=Gt(A.firstChild),st=e,ce=!0,ra=null,Yt=!0,t=ag(e,null,n,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Sr(),n===o){e=un(A,e,t);break A}qe(A,e,n,t)}e=e.child}return e;case 26:return wl(A,e),A===null?(t=Sh(e.type,null,e.pendingProps,null))?e.memoizedState=t:ce||(t=e.type,A=e.pendingProps,n=Ml(H.current).createElement(t),n[EA]=e,n[vA]=A,Pe(n,t,A),Ve(n),e.stateNode=n):e.memoizedState=Sh(e.type,A.memoizedProps,e.pendingProps,A.memoizedState),null;case 27:return FA(e),A===null&&ce&&(n=e.stateNode=Fh(e.type,e.pendingProps,H.current),st=e,Yt=!0,o=De,Ln(e.type)?(_c=o,De=Gt(n.firstChild)):De=o),qe(A,e,e.pendingProps.children,t),wl(A,e),A===null&&(e.flags|=4194304),e.child;case 5:return A===null&&ce&&((o=n=De)&&(n=Jx(n,e.type,e.pendingProps,Yt),n!==null?(e.stateNode=n,st=e,De=Gt(n.firstChild),Yt=!1,o=!0):o=!1),o||ia(e)),FA(e),o=e.type,c=e.pendingProps,g=A!==null?A.memoizedProps:null,n=c.children,Oc(o,c)?n=null:g!==null&&Oc(o,g)&&(e.flags|=32),e.memoizedState!==null&&(o=Ko(A,e,dx,null,null,t),li._currentValue=o),wl(A,e),qe(A,e,n,t),e.child;case 6:return A===null&&ce&&((A=t=De)&&(t=Zx(t,e.pendingProps,Yt),t!==null?(e.stateNode=t,st=e,De=null,A=!0):A=!1),A||ia(e)),null;case 13:return yg(A,e,t);case 4:return mA(e,e.stateNode.containerInfo),n=e.pendingProps,A===null?e.child=Va(e,null,n,t):qe(A,e,n,t),e.child;case 11:return hg(A,e,e.type,e.pendingProps,t);case 7:return qe(A,e,e.pendingProps,t),e.child;case 8:return qe(A,e,e.pendingProps.children,t),e.child;case 12:return qe(A,e,e.pendingProps.children,t),e.child;case 10:return n=e.pendingProps,Cn(e,e.type,n.value),qe(A,e,n.children,t),e.child;case 9:return o=e.type._context,n=e.pendingProps.children,sa(e),o=nt(o),n=n(o),e.flags|=1,qe(A,e,n,t),e.child;case 14:return Bg(A,e,e.type,e.pendingProps,t);case 15:return pg(A,e,e.type,e.pendingProps,t);case 19:return Qg(A,e,t);case 31:return n=e.pendingProps,t=e.mode,n={mode:n.mode,children:n.children},A===null?(t=bl(n,t),t.ref=e.ref,e.child=t,t.return=e,e=t):(t=nn(A.child,n),t.ref=e.ref,e.child=t,t.return=e,e=t),e;case 22:return xg(A,e,t);case 24:return sa(e),n=nt(Re),A===null?(o=So(),o===null&&(o=be,c=Eo(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=t),o=c),e.memoizedState={parent:n,cache:o},To(e),Cn(e,Re,o)):((A.lanes&t)!==0&&(jo(A,e),Kr(e,null,null,t),kr()),o=A.memoizedState,c=e.memoizedState,o.parent!==n?(o={parent:n,cache:n},e.memoizedState=o,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=o),Cn(e,Re,n)):(n=c.cache,Cn(e,Re,n),n!==o.cache&&Fo(e,[Re],t,!0))),qe(A,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(i(156,e.tag))}function dn(A){A.flags|=4}function Fg(A,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)A.flags&=-16777217;else if(A.flags|=16777216,!Mh(e)){if(e=Nt.current,e!==null&&((se&4194048)===se?Jt!==null:(se&62914560)!==se&&(se&536870912)===0||e!==Jt))throw Ir=Do,cf;A.flags|=8192}}function Cl(A,e){e!==null&&(A.flags|=4),A.flags&16384&&(e=A.tag!==22?TA():536870912,A.lanes|=e,Za|=e)}function Xr(A,e){if(!ce)switch(A.tailMode){case"hidden":e=A.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?A.tail=null:t.sibling=null;break;case"collapsed":t=A.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e||A.tail===null?A.tail=null:A.tail.sibling=null:n.sibling=null}}function Se(A){var e=A.alternate!==null&&A.alternate.child===A.child,t=0,n=0;if(e)for(var o=A.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags&65011712,n|=o.flags&65011712,o.return=A,o=o.sibling;else for(o=A.child;o!==null;)t|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=A,o=o.sibling;return A.subtreeFlags|=n,A.childLanes=t,e}function bx(A,e,t){var n=e.pendingProps;switch(yo(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(e),null;case 1:return Se(e),null;case 3:return t=e.stateNode,n=null,A!==null&&(n=A.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),sn(Re),LA(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(A===null||A.child===null)&&(Hr(e)?dn(e):A===null||A.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,af())),Se(e),null;case 26:return t=e.memoizedState,A===null?(dn(e),t!==null?(Se(e),Fg(e,t)):(Se(e),e.flags&=-16777217)):t?t!==A.memoizedState?(dn(e),Se(e),Fg(e,t)):(Se(e),e.flags&=-16777217):(A.memoizedProps!==n&&dn(e),Se(e),e.flags&=-16777217),null;case 27:OA(e),t=H.current;var o=e.type;if(A!==null&&e.stateNode!=null)A.memoizedProps!==n&&dn(e);else{if(!n){if(e.stateNode===null)throw Error(i(166));return Se(e),null}A=Y.current,Hr(e)?tf(e):(A=Fh(o,n,t),e.stateNode=A,dn(e))}return Se(e),null;case 5:if(OA(e),t=e.type,A!==null&&e.stateNode!=null)A.memoizedProps!==n&&dn(e);else{if(!n){if(e.stateNode===null)throw Error(i(166));return Se(e),null}if(A=Y.current,Hr(e))tf(e);else{switch(o=Ml(H.current),A){case 1:A=o.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:A=o.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":A=o.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":A=o.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":A=o.createElement("div"),A.innerHTML="<script><\/script>",A=A.removeChild(A.firstChild);break;case"select":A=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?A.multiple=!0:n.size&&(A.size=n.size);break;default:A=typeof n.is=="string"?o.createElement(t,{is:n.is}):o.createElement(t)}}A[EA]=e,A[vA]=n;A:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)A.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break A;for(;o.sibling===null;){if(o.return===null||o.return===e)break A;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=A;A:switch(Pe(A,t,n),t){case"button":case"input":case"select":case"textarea":A=!!n.autoFocus;break A;case"img":A=!0;break A;default:A=!1}A&&dn(e)}}return Se(e),e.flags&=-16777217,null;case 6:if(A&&e.stateNode!=null)A.memoizedProps!==n&&dn(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(i(166));if(A=H.current,Hr(e)){if(A=e.stateNode,t=e.memoizedProps,n=null,o=st,o!==null)switch(o.tag){case 27:case 5:n=o.memoizedProps}A[EA]=e,A=!!(A.nodeValue===t||n!==null&&n.suppressHydrationWarning===!0||wh(A.nodeValue,t)),A||ia(e)}else A=Ml(A).createTextNode(n),A[EA]=e,e.stateNode=A}return Se(e),null;case 13:if(n=e.memoizedState,A===null||A.memoizedState!==null&&A.memoizedState.dehydrated!==null){if(o=Hr(e),n!==null&&n.dehydrated!==null){if(A===null){if(!o)throw Error(i(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(i(317));o[EA]=e}else Sr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Se(e),o=!1}else o=af(),A!==null&&A.memoizedState!==null&&(A.memoizedState.hydrationErrors=o),o=!0;if(!o)return e.flags&256?(cn(e),e):(cn(e),null)}if(cn(e),(e.flags&128)!==0)return e.lanes=t,e;if(t=n!==null,A=A!==null&&A.memoizedState!==null,t){n=e.child,o=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(o=n.alternate.memoizedState.cachePool.pool);var c=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(c=n.memoizedState.cachePool.pool),c!==o&&(n.flags|=2048)}return t!==A&&t&&(e.child.flags|=8192),Cl(e,e.updateQueue),Se(e),null;case 4:return LA(),A===null&&Mc(e.stateNode.containerInfo),Se(e),null;case 10:return sn(e.type),Se(e),null;case 19:if(K(ze),o=e.memoizedState,o===null)return Se(e),null;if(n=(e.flags&128)!==0,c=o.rendering,c===null)if(n)Xr(o,!1);else{if(Te!==0||A!==null&&(A.flags&128)!==0)for(A=e.child;A!==null;){if(c=pl(A),c!==null){for(e.flags|=128,Xr(o,!1),A=c.updateQueue,e.updateQueue=A,Cl(e,A),e.subtreeFlags=0,A=t,t=e.child;t!==null;)Af(t,A),t=t.sibling;return E(ze,ze.current&1|2),e.child}A=A.sibling}o.tail!==null&&GA()>Ql&&(e.flags|=128,n=!0,Xr(o,!1),e.lanes=4194304)}else{if(!n)if(A=pl(c),A!==null){if(e.flags|=128,n=!0,A=A.updateQueue,e.updateQueue=A,Cl(e,A),Xr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!ce)return Se(e),null}else 2*GA()-o.renderingStartTime>Ql&&t!==536870912&&(e.flags|=128,n=!0,Xr(o,!1),e.lanes=4194304);o.isBackwards?(c.sibling=e.child,e.child=c):(A=o.last,A!==null?A.sibling=c:e.child=c,o.last=c)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=GA(),e.sibling=null,A=ze.current,E(ze,n?A&1|2:A&1),e):(Se(e),null);case 22:case 23:return cn(e),Lo(),n=e.memoizedState!==null,A!==null?A.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(t&536870912)!==0&&(e.flags&128)===0&&(Se(e),e.subtreeFlags&6&&(e.flags|=8192)):Se(e),t=e.updateQueue,t!==null&&Cl(e,t.retryQueue),t=null,A!==null&&A.memoizedState!==null&&A.memoizedState.cachePool!==null&&(t=A.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(e.flags|=2048),A!==null&&K(oa),null;case 24:return t=null,A!==null&&(t=A.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),sn(Re),Se(e),null;case 25:return null;case 30:return null}throw Error(i(156,e.tag))}function Cx(A,e){switch(yo(e),e.tag){case 1:return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 3:return sn(Re),LA(),A=e.flags,(A&65536)!==0&&(A&128)===0?(e.flags=A&-65537|128,e):null;case 26:case 27:case 5:return OA(e),null;case 13:if(cn(e),A=e.memoizedState,A!==null&&A.dehydrated!==null){if(e.alternate===null)throw Error(i(340));Sr()}return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 19:return K(ze),null;case 4:return LA(),null;case 10:return sn(e.type),null;case 22:case 23:return cn(e),Lo(),A!==null&&K(oa),A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 24:return sn(Re),null;case 25:return null;default:return null}}function Eg(A,e){switch(yo(e),e.tag){case 3:sn(Re),LA();break;case 26:case 27:case 5:OA(e);break;case 4:LA();break;case 13:cn(e);break;case 19:K(ze);break;case 10:sn(e.type);break;case 22:case 23:cn(e),Lo(),A!==null&&K(oa);break;case 24:sn(Re)}}function Yr(A,e){try{var t=e.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var o=n.next;t=o;do{if((t.tag&A)===A){n=void 0;var c=t.create,g=t.inst;n=c(),g.destroy=n}t=t.next}while(t!==o)}}catch(x){we(e,e.return,x)}}function Hn(A,e,t){try{var n=e.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var c=o.next;n=c;do{if((n.tag&A)===A){var g=n.inst,x=g.destroy;if(x!==void 0){g.destroy=void 0,o=e;var U=t,R=x;try{R()}catch($){we(o,U,$)}}}n=n.next}while(n!==c)}}catch($){we(e,e.return,$)}}function Hg(A){var e=A.updateQueue;if(e!==null){var t=A.stateNode;try{Bf(e,t)}catch(n){we(A,A.return,n)}}}function Sg(A,e,t){t.props=ua(A.type,A.memoizedProps),t.state=A.memoizedState;try{t.componentWillUnmount()}catch(n){we(A,e,n)}}function Jr(A,e){try{var t=A.ref;if(t!==null){switch(A.tag){case 26:case 27:case 5:var n=A.stateNode;break;case 30:n=A.stateNode;break;default:n=A.stateNode}typeof t=="function"?A.refCleanup=t(n):t.current=n}}catch(o){we(A,e,o)}}function Zt(A,e){var t=A.ref,n=A.refCleanup;if(t!==null)if(typeof n=="function")try{n()}catch(o){we(A,e,o)}finally{A.refCleanup=null,A=A.alternate,A!=null&&(A.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(o){we(A,e,o)}else t.current=null}function Dg(A){var e=A.type,t=A.memoizedProps,n=A.stateNode;try{A:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&n.focus();break A;case"img":t.src?n.src=t.src:t.srcSet&&(n.srcset=t.srcSet)}}catch(o){we(A,A.return,o)}}function uc(A,e,t){try{var n=A.stateNode;Gx(n,A.type,t,e),n[vA]=e}catch(o){we(A,A.return,o)}}function Tg(A){return A.tag===5||A.tag===3||A.tag===26||A.tag===27&&Ln(A.type)||A.tag===4}function dc(A){A:for(;;){for(;A.sibling===null;){if(A.return===null||Tg(A.return))return null;A=A.return}for(A.sibling.return=A.return,A=A.sibling;A.tag!==5&&A.tag!==6&&A.tag!==18;){if(A.tag===27&&Ln(A.type)||A.flags&2||A.child===null||A.tag===4)continue A;A.child.return=A,A=A.child}if(!(A.flags&2))return A.stateNode}}function fc(A,e,t){var n=A.tag;if(n===5||n===6)A=A.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(A,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(A),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Nl));else if(n!==4&&(n===27&&Ln(A.type)&&(t=A.stateNode,e=null),A=A.child,A!==null))for(fc(A,e,t),A=A.sibling;A!==null;)fc(A,e,t),A=A.sibling}function yl(A,e,t){var n=A.tag;if(n===5||n===6)A=A.stateNode,e?t.insertBefore(A,e):t.appendChild(A);else if(n!==4&&(n===27&&Ln(A.type)&&(t=A.stateNode),A=A.child,A!==null))for(yl(A,e,t),A=A.sibling;A!==null;)yl(A,e,t),A=A.sibling}function jg(A){var e=A.stateNode,t=A.memoizedProps;try{for(var n=A.type,o=e.attributes;o.length;)e.removeAttributeNode(o[0]);Pe(e,n,t),e[EA]=A,e[vA]=t}catch(c){we(A,A.return,c)}}var fn=!1,Ne=!1,gc=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function yx(A,e){if(A=A.containerInfo,kc=Rl,A=_d(A),uo(A)){if("selectionStart"in A)var t={start:A.selectionStart,end:A.selectionEnd};else A:{t=(t=A.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var o=n.anchorOffset,c=n.focusNode;n=n.focusOffset;try{t.nodeType,c.nodeType}catch{t=null;break A}var g=0,x=-1,U=-1,R=0,$=0,aA=A,_=null;e:for(;;){for(var X;aA!==t||o!==0&&aA.nodeType!==3||(x=g+o),aA!==c||n!==0&&aA.nodeType!==3||(U=g+n),aA.nodeType===3&&(g+=aA.nodeValue.length),(X=aA.firstChild)!==null;)_=aA,aA=X;for(;;){if(aA===A)break e;if(_===t&&++R===o&&(x=g),_===c&&++$===n&&(U=g),(X=aA.nextSibling)!==null)break;aA=_,_=aA.parentNode}aA=X}t=x===-1||U===-1?null:{start:x,end:U}}else t=null}t=t||{start:0,end:0}}else t=null;for(Kc={focusedElem:A,selectionRange:t},Rl=!1,Ye=e;Ye!==null;)if(e=Ye,A=e.child,(e.subtreeFlags&1024)!==0&&A!==null)A.return=e,Ye=A;else for(;Ye!==null;){switch(e=Ye,c=e.alternate,A=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((A&1024)!==0&&c!==null){A=void 0,t=e,o=c.memoizedProps,c=c.memoizedState,n=t.stateNode;try{var VA=ua(t.type,o,t.elementType===t.type);A=n.getSnapshotBeforeUpdate(VA,c),n.__reactInternalSnapshotBeforeUpdate=A}catch(RA){we(t,t.return,RA)}}break;case 3:if((A&1024)!==0){if(A=e.stateNode.containerInfo,t=A.nodeType,t===9)zc(A);else if(t===1)switch(A.nodeName){case"HEAD":case"HTML":case"BODY":zc(A);break;default:A.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((A&1024)!==0)throw Error(i(163))}if(A=e.sibling,A!==null){A.return=e.return,Ye=A;break}Ye=e.return}}function Mg(A,e,t){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Sn(A,t),n&4&&Yr(5,t);break;case 1:if(Sn(A,t),n&4)if(A=t.stateNode,e===null)try{A.componentDidMount()}catch(g){we(t,t.return,g)}else{var o=ua(t.type,e.memoizedProps);e=e.memoizedState;try{A.componentDidUpdate(o,e,A.__reactInternalSnapshotBeforeUpdate)}catch(g){we(t,t.return,g)}}n&64&&Hg(t),n&512&&Jr(t,t.return);break;case 3:if(Sn(A,t),n&64&&(A=t.updateQueue,A!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{Bf(A,e)}catch(g){we(t,t.return,g)}}break;case 27:e===null&&n&4&&jg(t);case 26:case 5:Sn(A,t),e===null&&n&4&&Dg(t),n&512&&Jr(t,t.return);break;case 12:Sn(A,t);break;case 13:Sn(A,t),n&4&&kg(A,t),n&64&&(A=t.memoizedState,A!==null&&(A=A.dehydrated,A!==null&&(t=Tx.bind(null,t),qx(A,t))));break;case 22:if(n=t.memoizedState!==null||fn,!n){e=e!==null&&e.memoizedState!==null||Ne,o=fn;var c=Ne;fn=n,(Ne=e)&&!c?Dn(A,t,(t.subtreeFlags&8772)!==0):Sn(A,t),fn=o,Ne=c}break;case 30:break;default:Sn(A,t)}}function Ig(A){var e=A.alternate;e!==null&&(A.alternate=null,Ig(e)),A.child=null,A.deletions=null,A.sibling=null,A.tag===5&&(e=A.stateNode,e!==null&&ft(e)),A.stateNode=null,A.return=null,A.dependencies=null,A.memoizedProps=null,A.memoizedState=null,A.pendingProps=null,A.stateNode=null,A.updateQueue=null}var Fe=null,Bt=!1;function gn(A,e,t){for(t=t.child;t!==null;)Lg(A,e,t),t=t.sibling}function Lg(A,e,t){if(DA&&typeof DA.onCommitFiberUnmount=="function")try{DA.onCommitFiberUnmount(fA,t)}catch{}switch(t.tag){case 26:Ne||Zt(t,e),gn(A,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Ne||Zt(t,e);var n=Fe,o=Bt;Ln(t.type)&&(Fe=t.stateNode,Bt=!1),gn(A,e,t),ni(t.stateNode),Fe=n,Bt=o;break;case 5:Ne||Zt(t,e);case 6:if(n=Fe,o=Bt,Fe=null,gn(A,e,t),Fe=n,Bt=o,Fe!==null)if(Bt)try{(Fe.nodeType===9?Fe.body:Fe.nodeName==="HTML"?Fe.ownerDocument.body:Fe).removeChild(t.stateNode)}catch(c){we(t,e,c)}else try{Fe.removeChild(t.stateNode)}catch(c){we(t,e,c)}break;case 18:Fe!==null&&(Bt?(A=Fe,Qh(A.nodeType===9?A.body:A.nodeName==="HTML"?A.ownerDocument.body:A,t.stateNode),ui(A)):Qh(Fe,t.stateNode));break;case 4:n=Fe,o=Bt,Fe=t.stateNode.containerInfo,Bt=!0,gn(A,e,t),Fe=n,Bt=o;break;case 0:case 11:case 14:case 15:Ne||Hn(2,t,e),Ne||Hn(4,t,e),gn(A,e,t);break;case 1:Ne||(Zt(t,e),n=t.stateNode,typeof n.componentWillUnmount=="function"&&Sg(t,e,n)),gn(A,e,t);break;case 21:gn(A,e,t);break;case 22:Ne=(n=Ne)||t.memoizedState!==null,gn(A,e,t),Ne=n;break;default:gn(A,e,t)}}function kg(A,e){if(e.memoizedState===null&&(A=e.alternate,A!==null&&(A=A.memoizedState,A!==null&&(A=A.dehydrated,A!==null))))try{ui(A)}catch(t){we(e,e.return,t)}}function vx(A){switch(A.tag){case 13:case 19:var e=A.stateNode;return e===null&&(e=A.stateNode=new Ng),e;case 22:return A=A.stateNode,e=A._retryCache,e===null&&(e=A._retryCache=new Ng),e;default:throw Error(i(435,A.tag))}}function hc(A,e){var t=vx(A);e.forEach(function(n){var o=jx.bind(null,A,n);t.has(n)||(t.add(n),n.then(o,o))})}function bt(A,e){var t=e.deletions;if(t!==null)for(var n=0;n<t.length;n++){var o=t[n],c=A,g=e,x=g;A:for(;x!==null;){switch(x.tag){case 27:if(Ln(x.type)){Fe=x.stateNode,Bt=!1;break A}break;case 5:Fe=x.stateNode,Bt=!1;break A;case 3:case 4:Fe=x.stateNode.containerInfo,Bt=!0;break A}x=x.return}if(Fe===null)throw Error(i(160));Lg(c,g,o),Fe=null,Bt=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Kg(e,A),e=e.sibling}var zt=null;function Kg(A,e){var t=A.alternate,n=A.flags;switch(A.tag){case 0:case 11:case 14:case 15:bt(e,A),Ct(A),n&4&&(Hn(3,A,A.return),Yr(3,A),Hn(5,A,A.return));break;case 1:bt(e,A),Ct(A),n&512&&(Ne||t===null||Zt(t,t.return)),n&64&&fn&&(A=A.updateQueue,A!==null&&(n=A.callbacks,n!==null&&(t=A.shared.hiddenCallbacks,A.shared.hiddenCallbacks=t===null?n:t.concat(n))));break;case 26:var o=zt;if(bt(e,A),Ct(A),n&512&&(Ne||t===null||Zt(t,t.return)),n&4){var c=t!==null?t.memoizedState:null;if(n=A.memoizedState,t===null)if(n===null)if(A.stateNode===null){A:{n=A.type,t=A.memoizedProps,o=o.ownerDocument||o;e:switch(n){case"title":c=o.getElementsByTagName("title")[0],(!c||c[dt]||c[EA]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(n),o.head.insertBefore(c,o.querySelector("head > title"))),Pe(c,n,t),c[EA]=A,Ve(c),n=c;break A;case"link":var g=jh("link","href",o).get(n+(t.href||""));if(g){for(var x=0;x<g.length;x++)if(c=g[x],c.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&c.getAttribute("rel")===(t.rel==null?null:t.rel)&&c.getAttribute("title")===(t.title==null?null:t.title)&&c.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){g.splice(x,1);break e}}c=o.createElement(n),Pe(c,n,t),o.head.appendChild(c);break;case"meta":if(g=jh("meta","content",o).get(n+(t.content||""))){for(x=0;x<g.length;x++)if(c=g[x],c.getAttribute("content")===(t.content==null?null:""+t.content)&&c.getAttribute("name")===(t.name==null?null:t.name)&&c.getAttribute("property")===(t.property==null?null:t.property)&&c.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&c.getAttribute("charset")===(t.charSet==null?null:t.charSet)){g.splice(x,1);break e}}c=o.createElement(n),Pe(c,n,t),o.head.appendChild(c);break;default:throw Error(i(468,n))}c[EA]=A,Ve(c),n=c}A.stateNode=n}else Nh(o,A.type,A.stateNode);else A.stateNode=Th(o,n,A.memoizedProps);else c!==n?(c===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):c.count--,n===null?Nh(o,A.type,A.stateNode):Th(o,n,A.memoizedProps)):n===null&&A.stateNode!==null&&uc(A,A.memoizedProps,t.memoizedProps)}break;case 27:bt(e,A),Ct(A),n&512&&(Ne||t===null||Zt(t,t.return)),t!==null&&n&4&&uc(A,A.memoizedProps,t.memoizedProps);break;case 5:if(bt(e,A),Ct(A),n&512&&(Ne||t===null||Zt(t,t.return)),A.flags&32){o=A.stateNode;try{Fa(o,"")}catch(X){we(A,A.return,X)}}n&4&&A.stateNode!=null&&(o=A.memoizedProps,uc(A,o,t!==null?t.memoizedProps:o)),n&1024&&(gc=!0);break;case 6:if(bt(e,A),Ct(A),n&4){if(A.stateNode===null)throw Error(i(162));n=A.memoizedProps,t=A.stateNode;try{t.nodeValue=n}catch(X){we(A,A.return,X)}}break;case 3:if(kl=null,o=zt,zt=Il(e.containerInfo),bt(e,A),zt=o,Ct(A),n&4&&t!==null&&t.memoizedState.isDehydrated)try{ui(e.containerInfo)}catch(X){we(A,A.return,X)}gc&&(gc=!1,Og(A));break;case 4:n=zt,zt=Il(A.stateNode.containerInfo),bt(e,A),Ct(A),zt=n;break;case 12:bt(e,A),Ct(A);break;case 13:bt(e,A),Ct(A),A.child.flags&8192&&A.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(bc=GA()),n&4&&(n=A.updateQueue,n!==null&&(A.updateQueue=null,hc(A,n)));break;case 22:o=A.memoizedState!==null;var U=t!==null&&t.memoizedState!==null,R=fn,$=Ne;if(fn=R||o,Ne=$||U,bt(e,A),Ne=$,fn=R,Ct(A),n&8192)A:for(e=A.stateNode,e._visibility=o?e._visibility&-2:e._visibility|1,o&&(t===null||U||fn||Ne||da(A)),t=null,e=A;;){if(e.tag===5||e.tag===26){if(t===null){U=t=e;try{if(c=U.stateNode,o)g=c.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{x=U.stateNode;var aA=U.memoizedProps.style,_=aA!=null&&aA.hasOwnProperty("display")?aA.display:null;x.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(X){we(U,U.return,X)}}}else if(e.tag===6){if(t===null){U=e;try{U.stateNode.nodeValue=o?"":U.memoizedProps}catch(X){we(U,U.return,X)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===A)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break A;for(;e.sibling===null;){if(e.return===null||e.return===A)break A;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=A.updateQueue,n!==null&&(t=n.retryQueue,t!==null&&(n.retryQueue=null,hc(A,t))));break;case 19:bt(e,A),Ct(A),n&4&&(n=A.updateQueue,n!==null&&(A.updateQueue=null,hc(A,n)));break;case 30:break;case 21:break;default:bt(e,A),Ct(A)}}function Ct(A){var e=A.flags;if(e&2){try{for(var t,n=A.return;n!==null;){if(Tg(n)){t=n;break}n=n.return}if(t==null)throw Error(i(160));switch(t.tag){case 27:var o=t.stateNode,c=dc(A);yl(A,c,o);break;case 5:var g=t.stateNode;t.flags&32&&(Fa(g,""),t.flags&=-33);var x=dc(A);yl(A,x,g);break;case 3:case 4:var U=t.stateNode.containerInfo,R=dc(A);fc(A,R,U);break;default:throw Error(i(161))}}catch($){we(A,A.return,$)}A.flags&=-3}e&4096&&(A.flags&=-4097)}function Og(A){if(A.subtreeFlags&1024)for(A=A.child;A!==null;){var e=A;Og(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),A=A.sibling}}function Sn(A,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Mg(A,e.alternate,e),e=e.sibling}function da(A){for(A=A.child;A!==null;){var e=A;switch(e.tag){case 0:case 11:case 14:case 15:Hn(4,e,e.return),da(e);break;case 1:Zt(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&Sg(e,e.return,t),da(e);break;case 27:ni(e.stateNode);case 26:case 5:Zt(e,e.return),da(e);break;case 22:e.memoizedState===null&&da(e);break;case 30:da(e);break;default:da(e)}A=A.sibling}}function Dn(A,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,o=A,c=e,g=c.flags;switch(c.tag){case 0:case 11:case 15:Dn(o,c,t),Yr(4,c);break;case 1:if(Dn(o,c,t),n=c,o=n.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(R){we(n,n.return,R)}if(n=c,o=n.updateQueue,o!==null){var x=n.stateNode;try{var U=o.shared.hiddenCallbacks;if(U!==null)for(o.shared.hiddenCallbacks=null,o=0;o<U.length;o++)hf(U[o],x)}catch(R){we(n,n.return,R)}}t&&g&64&&Hg(c),Jr(c,c.return);break;case 27:jg(c);case 26:case 5:Dn(o,c,t),t&&n===null&&g&4&&Dg(c),Jr(c,c.return);break;case 12:Dn(o,c,t);break;case 13:Dn(o,c,t),t&&g&4&&kg(o,c);break;case 22:c.memoizedState===null&&Dn(o,c,t),Jr(c,c.return);break;case 30:break;default:Dn(o,c,t)}e=e.sibling}}function Bc(A,e){var t=null;A!==null&&A.memoizedState!==null&&A.memoizedState.cachePool!==null&&(t=A.memoizedState.cachePool.pool),A=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(A=e.memoizedState.cachePool.pool),A!==t&&(A!=null&&A.refCount++,t!=null&&jr(t))}function pc(A,e){A=null,e.alternate!==null&&(A=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==A&&(e.refCount++,A!=null&&jr(A))}function qt(A,e,t,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rg(A,e,t,n),e=e.sibling}function Rg(A,e,t,n){var o=e.flags;switch(e.tag){case 0:case 11:case 15:qt(A,e,t,n),o&2048&&Yr(9,e);break;case 1:qt(A,e,t,n);break;case 3:qt(A,e,t,n),o&2048&&(A=null,e.alternate!==null&&(A=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==A&&(e.refCount++,A!=null&&jr(A)));break;case 12:if(o&2048){qt(A,e,t,n),A=e.stateNode;try{var c=e.memoizedProps,g=c.id,x=c.onPostCommit;typeof x=="function"&&x(g,e.alternate===null?"mount":"update",A.passiveEffectDuration,-0)}catch(U){we(e,e.return,U)}}else qt(A,e,t,n);break;case 13:qt(A,e,t,n);break;case 23:break;case 22:c=e.stateNode,g=e.alternate,e.memoizedState!==null?c._visibility&2?qt(A,e,t,n):Zr(A,e):c._visibility&2?qt(A,e,t,n):(c._visibility|=2,Xa(A,e,t,n,(e.subtreeFlags&10256)!==0)),o&2048&&Bc(g,e);break;case 24:qt(A,e,t,n),o&2048&&pc(e.alternate,e);break;default:qt(A,e,t,n)}}function Xa(A,e,t,n,o){for(o=o&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var c=A,g=e,x=t,U=n,R=g.flags;switch(g.tag){case 0:case 11:case 15:Xa(c,g,x,U,o),Yr(8,g);break;case 23:break;case 22:var $=g.stateNode;g.memoizedState!==null?$._visibility&2?Xa(c,g,x,U,o):Zr(c,g):($._visibility|=2,Xa(c,g,x,U,o)),o&&R&2048&&Bc(g.alternate,g);break;case 24:Xa(c,g,x,U,o),o&&R&2048&&pc(g.alternate,g);break;default:Xa(c,g,x,U,o)}e=e.sibling}}function Zr(A,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=A,n=e,o=n.flags;switch(n.tag){case 22:Zr(t,n),o&2048&&Bc(n.alternate,n);break;case 24:Zr(t,n),o&2048&&pc(n.alternate,n);break;default:Zr(t,n)}e=e.sibling}}var qr=8192;function Ya(A){if(A.subtreeFlags&qr)for(A=A.child;A!==null;)zg(A),A=A.sibling}function zg(A){switch(A.tag){case 26:Ya(A),A.flags&qr&&A.memoizedState!==null&&om(zt,A.memoizedState,A.memoizedProps);break;case 5:Ya(A);break;case 3:case 4:var e=zt;zt=Il(A.stateNode.containerInfo),Ya(A),zt=e;break;case 22:A.memoizedState===null&&(e=A.alternate,e!==null&&e.memoizedState!==null?(e=qr,qr=16777216,Ya(A),qr=e):Ya(A));break;default:Ya(A)}}function Gg(A){var e=A.alternate;if(e!==null&&(A=e.child,A!==null)){e.child=null;do e=A.sibling,A.sibling=null,A=e;while(A!==null)}}function Wr(A){var e=A.deletions;if((A.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var n=e[t];Ye=n,Vg(n,A)}Gg(A)}if(A.subtreeFlags&10256)for(A=A.child;A!==null;)_g(A),A=A.sibling}function _g(A){switch(A.tag){case 0:case 11:case 15:Wr(A),A.flags&2048&&Hn(9,A,A.return);break;case 3:Wr(A);break;case 12:Wr(A);break;case 22:var e=A.stateNode;A.memoizedState!==null&&e._visibility&2&&(A.return===null||A.return.tag!==13)?(e._visibility&=-3,vl(A)):Wr(A);break;default:Wr(A)}}function vl(A){var e=A.deletions;if((A.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var n=e[t];Ye=n,Vg(n,A)}Gg(A)}for(A=A.child;A!==null;){switch(e=A,e.tag){case 0:case 11:case 15:Hn(8,e,e.return),vl(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,vl(e));break;default:vl(e)}A=A.sibling}}function Vg(A,e){for(;Ye!==null;){var t=Ye;switch(t.tag){case 0:case 11:case 15:Hn(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var n=t.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:jr(t.memoizedState.cache)}if(n=t.child,n!==null)n.return=t,Ye=n;else A:for(t=A;Ye!==null;){n=Ye;var o=n.sibling,c=n.return;if(Ig(n),n===t){Ye=null;break A}if(o!==null){o.return=c,Ye=o;break A}Ye=c}}}var Qx={getCacheForType:function(A){var e=nt(Re),t=e.data.get(A);return t===void 0&&(t=A(),e.data.set(A,t)),t}},Ux=typeof WeakMap=="function"?WeakMap:Map,fe=0,be=null,te=null,se=0,ge=0,yt=null,Tn=!1,Ja=!1,xc=!1,hn=0,Te=0,jn=0,fa=0,mc=0,Mt=0,Za=0,Pr=null,pt=null,wc=!1,bc=0,Ql=1/0,Ul=null,Nn=null,We=0,Mn=null,qa=null,Wa=0,Cc=0,yc=null,Xg=null,$r=0,vc=null;function vt(){if((fe&2)!==0&&se!==0)return se&-se;if(M.T!==null){var A=ka;return A!==0?A:Dc()}return S()}function Yg(){Mt===0&&(Mt=(se&536870912)===0||ce?rA():536870912);var A=Nt.current;return A!==null&&(A.flags|=32),Mt}function Qt(A,e,t){(A===be&&(ge===2||ge===9)||A.cancelPendingCommit!==null)&&(Pa(A,0),In(A,se,Mt,!1)),XA(A,t),((fe&2)===0||A!==be)&&(A===be&&((fe&2)===0&&(fa|=t),Te===4&&In(A,se,Mt,!1)),Wt(A))}function Jg(A,e,t){if((fe&6)!==0)throw Error(i(327));var n=!t&&(e&124)===0&&(e&A.expiredLanes)===0||k(A,e),o=n?Hx(A,e):Fc(A,e,!0),c=n;do{if(o===0){Ja&&!n&&In(A,e,0,!1);break}else{if(t=A.current.alternate,c&&!Fx(t)){o=Fc(A,e,!1),c=!1;continue}if(o===2){if(c=e,A.errorRecoveryDisabledLanes&c)var g=0;else g=A.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){e=g;A:{var x=A;o=Pr;var U=x.current.memoizedState.isDehydrated;if(U&&(Pa(x,g).flags|=256),g=Fc(x,g,!1),g!==2){if(xc&&!U){x.errorRecoveryDisabledLanes|=c,fa|=c,o=4;break A}c=pt,pt=o,c!==null&&(pt===null?pt=c:pt.push.apply(pt,c))}o=g}if(c=!1,o!==2)continue}}if(o===1){Pa(A,0),In(A,e,0,!0);break}A:{switch(n=A,c=o,c){case 0:case 1:throw Error(i(345));case 4:if((e&4194048)!==e)break;case 6:In(n,e,Mt,!Tn);break A;case 2:pt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((e&62914560)===e&&(o=bc+300-GA(),10<o)){if(In(n,e,Mt,!Tn),j(n,0,!0)!==0)break A;n.timeoutHandle=yh(Zg.bind(null,n,t,pt,Ul,wc,e,Mt,fa,Za,Tn,c,2,-0,0),o);break A}Zg(n,t,pt,Ul,wc,e,Mt,fa,Za,Tn,c,0,-0,0)}}break}while(!0);Wt(A)}function Zg(A,e,t,n,o,c,g,x,U,R,$,aA,_,X){if(A.timeoutHandle=-1,aA=e.subtreeFlags,(aA&8192||(aA&16785408)===16785408)&&(ii={stylesheets:null,count:0,unsuspend:sm},zg(e),aA=cm(),aA!==null)){A.cancelPendingCommit=aA(th.bind(null,A,e,c,t,n,o,g,x,U,$,1,_,X)),In(A,c,g,!R);return}th(A,e,c,t,n,o,g,x,U)}function Fx(A){for(var e=A;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var n=0;n<t.length;n++){var o=t[n],c=o.getSnapshot;o=o.value;try{if(!mt(c(),o))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function In(A,e,t,n){e&=~mc,e&=~fa,A.suspendedLanes|=e,A.pingedLanes&=~e,n&&(A.warmLanes|=e),n=A.expirationTimes;for(var o=e;0<o;){var c=31-D(o),g=1<<c;n[c]=-1,o&=~g}t!==0&&Ue(A,t,e)}function Fl(){return(fe&6)===0?(Ai(0),!1):!0}function Qc(){if(te!==null){if(ge===0)var A=te.return;else A=te,ln=la=null,zo(A),_a=null,_r=0,A=te;for(;A!==null;)Eg(A.alternate,A),A=A.return;te=null}}function Pa(A,e){var t=A.timeoutHandle;t!==-1&&(A.timeoutHandle=-1,Vx(t)),t=A.cancelPendingCommit,t!==null&&(A.cancelPendingCommit=null,t()),Qc(),be=A,te=t=nn(A.current,null),se=e,ge=0,yt=null,Tn=!1,Ja=k(A,e),xc=!1,Za=Mt=mc=fa=jn=Te=0,pt=Pr=null,wc=!1,(e&8)!==0&&(e|=e&32);var n=A.entangledLanes;if(n!==0)for(A=A.entanglements,n&=e;0<n;){var o=31-D(n),c=1<<o;e|=A[o],n&=~c}return hn=e,Zi(),t}function qg(A,e){WA=null,M.H=gl,e===Mr||e===al?(e=ff(),ge=3):e===cf?(e=ff(),ge=4):ge=e===gg?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,yt=e,te===null&&(Te=1,ml(A,St(e,A.current)))}function Wg(){var A=M.H;return M.H=gl,A===null?gl:A}function Pg(){var A=M.A;return M.A=Qx,A}function Uc(){Te=4,Tn||(se&4194048)!==se&&Nt.current!==null||(Ja=!0),(jn&134217727)===0&&(fa&134217727)===0||be===null||In(be,se,Mt,!1)}function Fc(A,e,t){var n=fe;fe|=2;var o=Wg(),c=Pg();(be!==A||se!==e)&&(Ul=null,Pa(A,e)),e=!1;var g=Te;A:do try{if(ge!==0&&te!==null){var x=te,U=yt;switch(ge){case 8:Qc(),g=6;break A;case 3:case 2:case 9:case 6:Nt.current===null&&(e=!0);var R=ge;if(ge=0,yt=null,$a(A,x,U,R),t&&Ja){g=0;break A}break;default:R=ge,ge=0,yt=null,$a(A,x,U,R)}}Ex(),g=Te;break}catch($){qg(A,$)}while(!0);return e&&A.shellSuspendCounter++,ln=la=null,fe=n,M.H=o,M.A=c,te===null&&(be=null,se=0,Zi()),g}function Ex(){for(;te!==null;)$g(te)}function Hx(A,e){var t=fe;fe|=2;var n=Wg(),o=Pg();be!==A||se!==e?(Ul=null,Ql=GA()+500,Pa(A,e)):Ja=k(A,e);A:do try{if(ge!==0&&te!==null){e=te;var c=yt;e:switch(ge){case 1:ge=0,yt=null,$a(A,e,c,1);break;case 2:case 9:if(uf(c)){ge=0,yt=null,Ah(e);break}e=function(){ge!==2&&ge!==9||be!==A||(ge=7),Wt(A)},c.then(e,e);break A;case 3:ge=7;break A;case 4:ge=5;break A;case 7:uf(c)?(ge=0,yt=null,Ah(e)):(ge=0,yt=null,$a(A,e,c,7));break;case 5:var g=null;switch(te.tag){case 26:g=te.memoizedState;case 5:case 27:var x=te;if(!g||Mh(g)){ge=0,yt=null;var U=x.sibling;if(U!==null)te=U;else{var R=x.return;R!==null?(te=R,El(R)):te=null}break e}}ge=0,yt=null,$a(A,e,c,5);break;case 6:ge=0,yt=null,$a(A,e,c,6);break;case 8:Qc(),Te=6;break A;default:throw Error(i(462))}}Sx();break}catch($){qg(A,$)}while(!0);return ln=la=null,M.H=n,M.A=o,fe=t,te!==null?0:(be=null,se=0,Zi(),Te)}function Sx(){for(;te!==null&&!ye();)$g(te)}function $g(A){var e=Ug(A.alternate,A,hn);A.memoizedProps=A.pendingProps,e===null?El(A):te=e}function Ah(A){var e=A,t=e.alternate;switch(e.tag){case 15:case 0:e=wg(t,e,e.pendingProps,e.type,void 0,se);break;case 11:e=wg(t,e,e.pendingProps,e.type.render,e.ref,se);break;case 5:zo(e);default:Eg(t,e),e=te=Af(e,hn),e=Ug(t,e,hn)}A.memoizedProps=A.pendingProps,e===null?El(A):te=e}function $a(A,e,t,n){ln=la=null,zo(e),_a=null,_r=0;var o=e.return;try{if(mx(A,o,e,t,se)){Te=1,ml(A,St(t,A.current)),te=null;return}}catch(c){if(o!==null)throw te=o,c;Te=1,ml(A,St(t,A.current)),te=null;return}e.flags&32768?(ce||n===1?A=!0:Ja||(se&536870912)!==0?A=!1:(Tn=A=!0,(n===2||n===9||n===3||n===6)&&(n=Nt.current,n!==null&&n.tag===13&&(n.flags|=16384))),eh(e,A)):El(e)}function El(A){var e=A;do{if((e.flags&32768)!==0){eh(e,Tn);return}A=e.return;var t=bx(e.alternate,e,hn);if(t!==null){te=t;return}if(e=e.sibling,e!==null){te=e;return}te=e=A}while(e!==null);Te===0&&(Te=5)}function eh(A,e){do{var t=Cx(A.alternate,A);if(t!==null){t.flags&=32767,te=t;return}if(t=A.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(A=A.sibling,A!==null)){te=A;return}te=A=t}while(A!==null);Te=6,te=null}function th(A,e,t,n,o,c,g,x,U){A.cancelPendingCommit=null;do Hl();while(We!==0);if((fe&6)!==0)throw Error(i(327));if(e!==null){if(e===A.current)throw Error(i(177));if(c=e.lanes|e.childLanes,c|=po,ae(A,t,c,g,x,U),A===be&&(te=be=null,se=0),qa=e,Mn=A,Wa=t,Cc=c,yc=o,Xg=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(A.callbackNode=null,A.callbackPriority=0,Nx(_e,function(){return lh(),null})):(A.callbackNode=null,A.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=M.T,M.T=null,o=J.p,J.p=2,g=fe,fe|=4;try{yx(A,e,t)}finally{fe=g,J.p=o,M.T=n}}We=1,nh(),ah(),rh()}}function nh(){if(We===1){We=0;var A=Mn,e=qa,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=M.T,M.T=null;var n=J.p;J.p=2;var o=fe;fe|=4;try{Kg(e,A);var c=Kc,g=_d(A.containerInfo),x=c.focusedElem,U=c.selectionRange;if(g!==x&&x&&x.ownerDocument&&Gd(x.ownerDocument.documentElement,x)){if(U!==null&&uo(x)){var R=U.start,$=U.end;if($===void 0&&($=R),"selectionStart"in x)x.selectionStart=R,x.selectionEnd=Math.min($,x.value.length);else{var aA=x.ownerDocument||document,_=aA&&aA.defaultView||window;if(_.getSelection){var X=_.getSelection(),VA=x.textContent.length,RA=Math.min(U.start,VA),pe=U.end===void 0?RA:Math.min(U.end,VA);!X.extend&&RA>pe&&(g=pe,pe=RA,RA=g);var I=zd(x,RA),N=zd(x,pe);if(I&&N&&(X.rangeCount!==1||X.anchorNode!==I.node||X.anchorOffset!==I.offset||X.focusNode!==N.node||X.focusOffset!==N.offset)){var O=aA.createRange();O.setStart(I.node,I.offset),X.removeAllRanges(),RA>pe?(X.addRange(O),X.extend(N.node,N.offset)):(O.setEnd(N.node,N.offset),X.addRange(O))}}}}for(aA=[],X=x;X=X.parentNode;)X.nodeType===1&&aA.push({element:X,left:X.scrollLeft,top:X.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<aA.length;x++){var tA=aA[x];tA.element.scrollLeft=tA.left,tA.element.scrollTop=tA.top}}Rl=!!kc,Kc=kc=null}finally{fe=o,J.p=n,M.T=t}}A.current=e,We=2}}function ah(){if(We===2){We=0;var A=Mn,e=qa,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=M.T,M.T=null;var n=J.p;J.p=2;var o=fe;fe|=4;try{Mg(A,e.alternate,e)}finally{fe=o,J.p=n,M.T=t}}We=3}}function rh(){if(We===4||We===3){We=0,YA();var A=Mn,e=qa,t=Wa,n=Xg;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?We=5:(We=0,qa=Mn=null,ih(A,A.pendingLanes));var o=A.pendingLanes;if(o===0&&(Nn=null),tt(t),e=e.stateNode,DA&&typeof DA.onCommitFiberRoot=="function")try{DA.onCommitFiberRoot(fA,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=M.T,o=J.p,J.p=2,M.T=null;try{for(var c=A.onRecoverableError,g=0;g<n.length;g++){var x=n[g];c(x.value,{componentStack:x.stack})}}finally{M.T=e,J.p=o}}(Wa&3)!==0&&Hl(),Wt(A),o=A.pendingLanes,(t&4194090)!==0&&(o&42)!==0?A===vc?$r++:($r=0,vc=A):$r=0,Ai(0)}}function ih(A,e){(A.pooledCacheLanes&=e)===0&&(e=A.pooledCache,e!=null&&(A.pooledCache=null,jr(e)))}function Hl(A){return nh(),ah(),rh(),lh()}function lh(){if(We!==5)return!1;var A=Mn,e=Cc;Cc=0;var t=tt(Wa),n=M.T,o=J.p;try{J.p=32>t?32:t,M.T=null,t=yc,yc=null;var c=Mn,g=Wa;if(We=0,qa=Mn=null,Wa=0,(fe&6)!==0)throw Error(i(331));var x=fe;if(fe|=4,_g(c.current),Rg(c,c.current,g,t),fe=x,Ai(0,!1),DA&&typeof DA.onPostCommitFiberRoot=="function")try{DA.onPostCommitFiberRoot(fA,c)}catch{}return!0}finally{J.p=o,M.T=n,ih(A,e)}}function sh(A,e,t){e=St(t,e),e=tc(A.stateNode,e,2),A=Qn(A,e,2),A!==null&&(XA(A,2),Wt(A))}function we(A,e,t){if(A.tag===3)sh(A,A,t);else for(;e!==null;){if(e.tag===3){sh(e,A,t);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Nn===null||!Nn.has(n))){A=St(t,A),t=dg(2),n=Qn(e,t,2),n!==null&&(fg(t,n,e,A),XA(n,2),Wt(n));break}}e=e.return}}function Ec(A,e,t){var n=A.pingCache;if(n===null){n=A.pingCache=new Ux;var o=new Set;n.set(e,o)}else o=n.get(e),o===void 0&&(o=new Set,n.set(e,o));o.has(t)||(xc=!0,o.add(t),A=Dx.bind(null,A,e,t),e.then(A,A))}function Dx(A,e,t){var n=A.pingCache;n!==null&&n.delete(e),A.pingedLanes|=A.suspendedLanes&t,A.warmLanes&=~t,be===A&&(se&t)===t&&(Te===4||Te===3&&(se&62914560)===se&&300>GA()-bc?(fe&2)===0&&Pa(A,0):mc|=t,Za===se&&(Za=0)),Wt(A)}function oh(A,e){e===0&&(e=TA()),A=Na(A,e),A!==null&&(XA(A,e),Wt(A))}function Tx(A){var e=A.memoizedState,t=0;e!==null&&(t=e.retryLane),oh(A,t)}function jx(A,e){var t=0;switch(A.tag){case 13:var n=A.stateNode,o=A.memoizedState;o!==null&&(t=o.retryLane);break;case 19:n=A.stateNode;break;case 22:n=A.stateNode._retryCache;break;default:throw Error(i(314))}n!==null&&n.delete(e),oh(A,t)}function Nx(A,e){return Oe(A,e)}var Sl=null,Ar=null,Hc=!1,Dl=!1,Sc=!1,ga=0;function Wt(A){A!==Ar&&A.next===null&&(Ar===null?Sl=Ar=A:Ar=Ar.next=A),Dl=!0,Hc||(Hc=!0,Ix())}function Ai(A,e){if(!Sc&&Dl){Sc=!0;do for(var t=!1,n=Sl;n!==null;){if(A!==0){var o=n.pendingLanes;if(o===0)var c=0;else{var g=n.suspendedLanes,x=n.pingedLanes;c=(1<<31-D(42|A)+1)-1,c&=o&~(g&~x),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(t=!0,fh(n,c))}else c=se,c=j(n,n===be?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(c&3)===0||k(n,c)||(t=!0,fh(n,c));n=n.next}while(t);Sc=!1}}function Mx(){ch()}function ch(){Dl=Hc=!1;var A=0;ga!==0&&(_x()&&(A=ga),ga=0);for(var e=GA(),t=null,n=Sl;n!==null;){var o=n.next,c=uh(n,e);c===0?(n.next=null,t===null?Sl=o:t.next=o,o===null&&(Ar=t)):(t=n,(A!==0||(c&3)!==0)&&(Dl=!0)),n=o}Ai(A)}function uh(A,e){for(var t=A.suspendedLanes,n=A.pingedLanes,o=A.expirationTimes,c=A.pendingLanes&-62914561;0<c;){var g=31-D(c),x=1<<g,U=o[g];U===-1?((x&t)===0||(x&n)!==0)&&(o[g]=G(x,e)):U<=e&&(A.expiredLanes|=x),c&=~x}if(e=be,t=se,t=j(A,A===e?t:0,A.cancelPendingCommit!==null||A.timeoutHandle!==-1),n=A.callbackNode,t===0||A===e&&(ge===2||ge===9)||A.cancelPendingCommit!==null)return n!==null&&n!==null&&ZA(n),A.callbackNode=null,A.callbackPriority=0;if((t&3)===0||k(A,t)){if(e=t&-t,e===A.callbackPriority)return e;switch(n!==null&&ZA(n),tt(t)){case 2:case 8:t=ct;break;case 32:t=_e;break;case 268435456:t=ut;break;default:t=_e}return n=dh.bind(null,A),t=Oe(t,n),A.callbackPriority=e,A.callbackNode=t,e}return n!==null&&n!==null&&ZA(n),A.callbackPriority=2,A.callbackNode=null,2}function dh(A,e){if(We!==0&&We!==5)return A.callbackNode=null,A.callbackPriority=0,null;var t=A.callbackNode;if(Hl()&&A.callbackNode!==t)return null;var n=se;return n=j(A,A===be?n:0,A.cancelPendingCommit!==null||A.timeoutHandle!==-1),n===0?null:(Jg(A,n,e),uh(A,GA()),A.callbackNode!=null&&A.callbackNode===t?dh.bind(null,A):null)}function fh(A,e){if(Hl())return null;Jg(A,e,!0)}function Ix(){Xx(function(){(fe&6)!==0?Oe(Qe,Mx):ch()})}function Dc(){return ga===0&&(ga=rA()),ga}function gh(A){return A==null||typeof A=="symbol"||typeof A=="boolean"?null:typeof A=="function"?A:zi(""+A)}function hh(A,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,A.id&&t.setAttribute("form",A.id),e.parentNode.insertBefore(t,e),A=new FormData(A),t.parentNode.removeChild(t),A}function Lx(A,e,t,n,o){if(e==="submit"&&t&&t.stateNode===o){var c=gh((o[vA]||null).action),g=n.submitter;g&&(e=(e=g[vA]||null)?gh(e.formAction):g.getAttribute("formAction"),e!==null&&(c=e,g=null));var x=new Xi("action","action",null,n,o);A.push({event:x,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ga!==0){var U=g?hh(o,g):new FormData(o);Wo(t,{pending:!0,data:U,method:o.method,action:c},null,U)}}else typeof c=="function"&&(x.preventDefault(),U=g?hh(o,g):new FormData(o),Wo(t,{pending:!0,data:U,method:o.method,action:c},c,U))},currentTarget:o}]})}}for(var Tc=0;Tc<Bo.length;Tc++){var jc=Bo[Tc],kx=jc.toLowerCase(),Kx=jc[0].toUpperCase()+jc.slice(1);Rt(kx,"on"+Kx)}Rt(Yd,"onAnimationEnd"),Rt(Jd,"onAnimationIteration"),Rt(Zd,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(tx,"onTransitionRun"),Rt(nx,"onTransitionStart"),Rt(ax,"onTransitionCancel"),Rt(qd,"onTransitionEnd"),va("onMouseEnter",["mouseout","mouseover"]),va("onMouseLeave",["mouseout","mouseover"]),va("onPointerEnter",["pointerout","pointerover"]),va("onPointerLeave",["pointerout","pointerover"]),Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ox=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ei));function Bh(A,e){e=(e&4)!==0;for(var t=0;t<A.length;t++){var n=A[t],o=n.event;n=n.listeners;A:{var c=void 0;if(e)for(var g=n.length-1;0<=g;g--){var x=n[g],U=x.instance,R=x.currentTarget;if(x=x.listener,U!==c&&o.isPropagationStopped())break A;c=x,o.currentTarget=R;try{c(o)}catch($){xl($)}o.currentTarget=null,c=U}else for(g=0;g<n.length;g++){if(x=n[g],U=x.instance,R=x.currentTarget,x=x.listener,U!==c&&o.isPropagationStopped())break A;c=x,o.currentTarget=R;try{c(o)}catch($){xl($)}o.currentTarget=null,c=U}}}}function ne(A,e){var t=e[ee];t===void 0&&(t=e[ee]=new Set);var n=A+"__bubble";t.has(n)||(ph(e,A,2,!1),t.add(n))}function Nc(A,e,t){var n=0;e&&(n|=4),ph(t,A,n,e)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function Mc(A){if(!A[Tl]){A[Tl]=!0,od.forEach(function(t){t!=="selectionchange"&&(Ox.has(t)||Nc(t,!1,A),Nc(t,!0,A))});var e=A.nodeType===9?A:A.ownerDocument;e===null||e[Tl]||(e[Tl]=!0,Nc("selectionchange",!1,e))}}function ph(A,e,t,n){switch(Rh(e)){case 2:var o=fm;break;case 8:o=gm;break;default:o=Zc}t=o.bind(null,e,t,A),o=void 0,!to||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),n?o!==void 0?A.addEventListener(e,t,{capture:!0,passive:o}):A.addEventListener(e,t,!0):o!==void 0?A.addEventListener(e,t,{passive:o}):A.addEventListener(e,t,!1)}function Ic(A,e,t,n,o){var c=n;if((e&1)===0&&(e&2)===0&&n!==null)A:for(;;){if(n===null)return;var g=n.tag;if(g===3||g===4){var x=n.stateNode.containerInfo;if(x===o)break;if(g===4)for(g=n.return;g!==null;){var U=g.tag;if((U===3||U===4)&&g.stateNode.containerInfo===o)return;g=g.return}for(;x!==null;){if(g=Xt(x),g===null)return;if(U=g.tag,U===5||U===6||U===26||U===27){n=c=g;continue A}x=x.parentNode}}n=n.return}yd(function(){var R=c,$=Ao(t),aA=[];A:{var _=Wd.get(A);if(_!==void 0){var X=Xi,VA=A;switch(A){case"keypress":if(_i(t)===0)break A;case"keydown":case"keyup":X=N0;break;case"focusin":VA="focus",X=io;break;case"focusout":VA="blur",X=io;break;case"beforeblur":case"afterblur":X=io;break;case"click":if(t.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=C0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=L0;break;case Yd:case Jd:case Zd:X=Q0;break;case qd:X=K0;break;case"scroll":case"scrollend":X=w0;break;case"wheel":X=R0;break;case"copy":case"cut":case"paste":X=F0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Ed;break;case"toggle":case"beforetoggle":X=G0}var RA=(e&4)!==0,pe=!RA&&(A==="scroll"||A==="scrollend"),I=RA?_!==null?_+"Capture":null:_;RA=[];for(var N=R,O;N!==null;){var tA=N;if(O=tA.stateNode,tA=tA.tag,tA!==5&&tA!==26&&tA!==27||O===null||I===null||(tA=wr(N,I),tA!=null&&RA.push(ti(N,tA,O))),pe)break;N=N.return}0<RA.length&&(_=new X(_,VA,null,t,$),aA.push({event:_,listeners:RA}))}}if((e&7)===0){A:{if(_=A==="mouseover"||A==="pointerover",X=A==="mouseout"||A==="pointerout",_&&t!==$s&&(VA=t.relatedTarget||t.fromElement)&&(Xt(VA)||VA[qA]))break A;if((X||_)&&(_=$.window===$?$:(_=$.ownerDocument)?_.defaultView||_.parentWindow:window,X?(VA=t.relatedTarget||t.toElement,X=R,VA=VA?Xt(VA):null,VA!==null&&(pe=d(VA),RA=VA.tag,VA!==pe||RA!==5&&RA!==27&&RA!==6)&&(VA=null)):(X=null,VA=R),X!==VA)){if(RA=Ud,tA="onMouseLeave",I="onMouseEnter",N="mouse",(A==="pointerout"||A==="pointerover")&&(RA=Ed,tA="onPointerLeave",I="onPointerEnter",N="pointer"),pe=X==null?_:mr(X),O=VA==null?_:mr(VA),_=new RA(tA,N+"leave",X,t,$),_.target=pe,_.relatedTarget=O,tA=null,Xt($)===R&&(RA=new RA(I,N+"enter",VA,t,$),RA.target=O,RA.relatedTarget=pe,tA=RA),pe=tA,X&&VA)e:{for(RA=X,I=VA,N=0,O=RA;O;O=er(O))N++;for(O=0,tA=I;tA;tA=er(tA))O++;for(;0<N-O;)RA=er(RA),N--;for(;0<O-N;)I=er(I),O--;for(;N--;){if(RA===I||I!==null&&RA===I.alternate)break e;RA=er(RA),I=er(I)}RA=null}else RA=null;X!==null&&xh(aA,_,X,RA,!1),VA!==null&&pe!==null&&xh(aA,pe,VA,RA,!0)}}A:{if(_=R?mr(R):window,X=_.nodeName&&_.nodeName.toLowerCase(),X==="select"||X==="input"&&_.type==="file")var IA=Id;else if(Nd(_))if(Ld)IA=$0;else{IA=W0;var $A=q0}else X=_.nodeName,!X||X.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?R&&Ps(R.elementType)&&(IA=Id):IA=P0;if(IA&&(IA=IA(A,R))){Md(aA,IA,t,$);break A}$A&&$A(A,_,R),A==="focusout"&&R&&_.type==="number"&&R.memoizedProps.value!=null&&Ws(_,"number",_.value)}switch($A=R?mr(R):window,A){case"focusin":(Nd($A)||$A.contentEditable==="true")&&(Da=$A,fo=R,Er=null);break;case"focusout":Er=fo=Da=null;break;case"mousedown":go=!0;break;case"contextmenu":case"mouseup":case"dragend":go=!1,Vd(aA,t,$);break;case"selectionchange":if(ex)break;case"keydown":case"keyup":Vd(aA,t,$)}var kA;if(so)A:{switch(A){case"compositionstart":var zA="onCompositionStart";break A;case"compositionend":zA="onCompositionEnd";break A;case"compositionupdate":zA="onCompositionUpdate";break A}zA=void 0}else Sa?Td(A,t)&&(zA="onCompositionEnd"):A==="keydown"&&t.keyCode===229&&(zA="onCompositionStart");zA&&(Hd&&t.locale!=="ko"&&(Sa||zA!=="onCompositionStart"?zA==="onCompositionEnd"&&Sa&&(kA=vd()):(bn=$,no="value"in bn?bn.value:bn.textContent,Sa=!0)),$A=jl(R,zA),0<$A.length&&(zA=new Fd(zA,A,null,t,$),aA.push({event:zA,listeners:$A}),kA?zA.data=kA:(kA=jd(t),kA!==null&&(zA.data=kA)))),(kA=V0?X0(A,t):Y0(A,t))&&(zA=jl(R,"onBeforeInput"),0<zA.length&&($A=new Fd("onBeforeInput","beforeinput",null,t,$),aA.push({event:$A,listeners:zA}),$A.data=kA)),Lx(aA,A,R,t,$)}Bh(aA,e)})}function ti(A,e,t){return{instance:A,listener:e,currentTarget:t}}function jl(A,e){for(var t=e+"Capture",n=[];A!==null;){var o=A,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=wr(A,t),o!=null&&n.unshift(ti(A,o,c)),o=wr(A,e),o!=null&&n.push(ti(A,o,c))),A.tag===3)return n;A=A.return}return[]}function er(A){if(A===null)return null;do A=A.return;while(A&&A.tag!==5&&A.tag!==27);return A||null}function xh(A,e,t,n,o){for(var c=e._reactName,g=[];t!==null&&t!==n;){var x=t,U=x.alternate,R=x.stateNode;if(x=x.tag,U!==null&&U===n)break;x!==5&&x!==26&&x!==27||R===null||(U=R,o?(R=wr(t,c),R!=null&&g.unshift(ti(t,R,U))):o||(R=wr(t,c),R!=null&&g.push(ti(t,R,U)))),t=t.return}g.length!==0&&A.push({event:e,listeners:g})}var Rx=/\r\n?/g,zx=/\u0000|\uFFFD/g;function mh(A){return(typeof A=="string"?A:""+A).replace(Rx,`
`).replace(zx,"")}function wh(A,e){return e=mh(e),mh(A)===e}function Nl(){}function Be(A,e,t,n,o,c){switch(t){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||Fa(A,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&Fa(A,""+n);break;case"className":Ki(A,"class",n);break;case"tabIndex":Ki(A,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ki(A,t,n);break;case"style":bd(A,n,c);break;case"data":if(e!=="object"){Ki(A,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||t!=="href")){A.removeAttribute(t);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){A.removeAttribute(t);break}n=zi(""+n),A.setAttribute(t,n);break;case"action":case"formAction":if(typeof n=="function"){A.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(t==="formAction"?(e!=="input"&&Be(A,e,"name",o.name,o,null),Be(A,e,"formEncType",o.formEncType,o,null),Be(A,e,"formMethod",o.formMethod,o,null),Be(A,e,"formTarget",o.formTarget,o,null)):(Be(A,e,"encType",o.encType,o,null),Be(A,e,"method",o.method,o,null),Be(A,e,"target",o.target,o,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){A.removeAttribute(t);break}n=zi(""+n),A.setAttribute(t,n);break;case"onClick":n!=null&&(A.onclick=Nl);break;case"onScroll":n!=null&&ne("scroll",A);break;case"onScrollEnd":n!=null&&ne("scrollend",A);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(i(61));if(t=n.__html,t!=null){if(o.children!=null)throw Error(i(60));A.innerHTML=t}}break;case"multiple":A.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":A.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){A.removeAttribute("xlink:href");break}t=zi(""+n),A.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?A.setAttribute(t,""+n):A.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?A.setAttribute(t,""):A.removeAttribute(t);break;case"capture":case"download":n===!0?A.setAttribute(t,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?A.setAttribute(t,n):A.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?A.setAttribute(t,n):A.removeAttribute(t);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?A.removeAttribute(t):A.setAttribute(t,n);break;case"popover":ne("beforetoggle",A),ne("toggle",A),ki(A,"popover",n);break;case"xlinkActuate":en(A,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":en(A,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":en(A,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":en(A,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":en(A,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":en(A,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":en(A,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":en(A,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":en(A,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ki(A,"is",n);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=x0.get(t)||t,ki(A,t,n))}}function Lc(A,e,t,n,o,c){switch(t){case"style":bd(A,n,c);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(i(61));if(t=n.__html,t!=null){if(o.children!=null)throw Error(i(60));A.innerHTML=t}}break;case"children":typeof n=="string"?Fa(A,n):(typeof n=="number"||typeof n=="bigint")&&Fa(A,""+n);break;case"onScroll":n!=null&&ne("scroll",A);break;case"onScrollEnd":n!=null&&ne("scrollend",A);break;case"onClick":n!=null&&(A.onclick=Nl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cd.hasOwnProperty(t))A:{if(t[0]==="o"&&t[1]==="n"&&(o=t.endsWith("Capture"),e=t.slice(2,o?t.length-7:void 0),c=A[vA]||null,c=c!=null?c[t]:null,typeof c=="function"&&A.removeEventListener(e,c,o),typeof n=="function")){typeof c!="function"&&c!==null&&(t in A?A[t]=null:A.hasAttribute(t)&&A.removeAttribute(t)),A.addEventListener(e,n,o);break A}t in A?A[t]=n:n===!0?A.setAttribute(t,""):ki(A,t,n)}}}function Pe(A,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",A),ne("load",A);var n=!1,o=!1,c;for(c in t)if(t.hasOwnProperty(c)){var g=t[c];if(g!=null)switch(c){case"src":n=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,e));default:Be(A,e,c,g,t,null)}}o&&Be(A,e,"srcSet",t.srcSet,t,null),n&&Be(A,e,"src",t.src,t,null);return;case"input":ne("invalid",A);var x=c=g=o=null,U=null,R=null;for(n in t)if(t.hasOwnProperty(n)){var $=t[n];if($!=null)switch(n){case"name":o=$;break;case"type":g=$;break;case"checked":U=$;break;case"defaultChecked":R=$;break;case"value":c=$;break;case"defaultValue":x=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(i(137,e));break;default:Be(A,e,n,$,t,null)}}pd(A,c,x,U,R,g,o,!1),Oi(A);return;case"select":ne("invalid",A),n=g=c=null;for(o in t)if(t.hasOwnProperty(o)&&(x=t[o],x!=null))switch(o){case"value":c=x;break;case"defaultValue":g=x;break;case"multiple":n=x;default:Be(A,e,o,x,t,null)}e=c,t=g,A.multiple=!!n,e!=null?Ua(A,!!n,e,!1):t!=null&&Ua(A,!!n,t,!0);return;case"textarea":ne("invalid",A),c=o=n=null;for(g in t)if(t.hasOwnProperty(g)&&(x=t[g],x!=null))switch(g){case"value":n=x;break;case"defaultValue":o=x;break;case"children":c=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(i(91));break;default:Be(A,e,g,x,t,null)}md(A,n,o,c),Oi(A);return;case"option":for(U in t)if(t.hasOwnProperty(U)&&(n=t[U],n!=null))switch(U){case"selected":A.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Be(A,e,U,n,t,null)}return;case"dialog":ne("beforetoggle",A),ne("toggle",A),ne("cancel",A),ne("close",A);break;case"iframe":case"object":ne("load",A);break;case"video":case"audio":for(n=0;n<ei.length;n++)ne(ei[n],A);break;case"image":ne("error",A),ne("load",A);break;case"details":ne("toggle",A);break;case"embed":case"source":case"link":ne("error",A),ne("load",A);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in t)if(t.hasOwnProperty(R)&&(n=t[R],n!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,e));default:Be(A,e,R,n,t,null)}return;default:if(Ps(e)){for($ in t)t.hasOwnProperty($)&&(n=t[$],n!==void 0&&Lc(A,e,$,n,t,void 0));return}}for(x in t)t.hasOwnProperty(x)&&(n=t[x],n!=null&&Be(A,e,x,n,t,null))}function Gx(A,e,t,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,g=null,x=null,U=null,R=null,$=null;for(X in t){var aA=t[X];if(t.hasOwnProperty(X)&&aA!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":U=aA;default:n.hasOwnProperty(X)||Be(A,e,X,null,n,aA)}}for(var _ in n){var X=n[_];if(aA=t[_],n.hasOwnProperty(_)&&(X!=null||aA!=null))switch(_){case"type":c=X;break;case"name":o=X;break;case"checked":R=X;break;case"defaultChecked":$=X;break;case"value":g=X;break;case"defaultValue":x=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(i(137,e));break;default:X!==aA&&Be(A,e,_,X,n,aA)}}qs(A,g,x,U,R,$,c,o);return;case"select":X=g=x=_=null;for(c in t)if(U=t[c],t.hasOwnProperty(c)&&U!=null)switch(c){case"value":break;case"multiple":X=U;default:n.hasOwnProperty(c)||Be(A,e,c,null,n,U)}for(o in n)if(c=n[o],U=t[o],n.hasOwnProperty(o)&&(c!=null||U!=null))switch(o){case"value":_=c;break;case"defaultValue":x=c;break;case"multiple":g=c;default:c!==U&&Be(A,e,o,c,n,U)}e=x,t=g,n=X,_!=null?Ua(A,!!t,_,!1):!!n!=!!t&&(e!=null?Ua(A,!!t,e,!0):Ua(A,!!t,t?[]:"",!1));return;case"textarea":X=_=null;for(x in t)if(o=t[x],t.hasOwnProperty(x)&&o!=null&&!n.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:Be(A,e,x,null,n,o)}for(g in n)if(o=n[g],c=t[g],n.hasOwnProperty(g)&&(o!=null||c!=null))switch(g){case"value":_=o;break;case"defaultValue":X=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(i(91));break;default:o!==c&&Be(A,e,g,o,n,c)}xd(A,_,X);return;case"option":for(var VA in t)if(_=t[VA],t.hasOwnProperty(VA)&&_!=null&&!n.hasOwnProperty(VA))switch(VA){case"selected":A.selected=!1;break;default:Be(A,e,VA,null,n,_)}for(U in n)if(_=n[U],X=t[U],n.hasOwnProperty(U)&&_!==X&&(_!=null||X!=null))switch(U){case"selected":A.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:Be(A,e,U,_,n,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var RA in t)_=t[RA],t.hasOwnProperty(RA)&&_!=null&&!n.hasOwnProperty(RA)&&Be(A,e,RA,null,n,_);for(R in n)if(_=n[R],X=t[R],n.hasOwnProperty(R)&&_!==X&&(_!=null||X!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(i(137,e));break;default:Be(A,e,R,_,n,X)}return;default:if(Ps(e)){for(var pe in t)_=t[pe],t.hasOwnProperty(pe)&&_!==void 0&&!n.hasOwnProperty(pe)&&Lc(A,e,pe,void 0,n,_);for($ in n)_=n[$],X=t[$],!n.hasOwnProperty($)||_===X||_===void 0&&X===void 0||Lc(A,e,$,_,n,X);return}}for(var I in t)_=t[I],t.hasOwnProperty(I)&&_!=null&&!n.hasOwnProperty(I)&&Be(A,e,I,null,n,_);for(aA in n)_=n[aA],X=t[aA],!n.hasOwnProperty(aA)||_===X||_==null&&X==null||Be(A,e,aA,_,n,X)}var kc=null,Kc=null;function Ml(A){return A.nodeType===9?A:A.ownerDocument}function bh(A){switch(A){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ch(A,e){if(A===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return A===1&&e==="foreignObject"?0:A}function Oc(A,e){return A==="textarea"||A==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rc=null;function _x(){var A=window.event;return A&&A.type==="popstate"?A===Rc?!1:(Rc=A,!0):(Rc=null,!1)}var yh=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,vh=typeof Promise=="function"?Promise:void 0,Xx=typeof queueMicrotask=="function"?queueMicrotask:typeof vh<"u"?function(A){return vh.resolve(null).then(A).catch(Yx)}:yh;function Yx(A){setTimeout(function(){throw A})}function Ln(A){return A==="head"}function Qh(A,e){var t=e,n=0,o=0;do{var c=t.nextSibling;if(A.removeChild(t),c&&c.nodeType===8)if(t=c.data,t==="/$"){if(0<n&&8>n){t=n;var g=A.ownerDocument;if(t&1&&ni(g.documentElement),t&2&&ni(g.body),t&4)for(t=g.head,ni(t),g=t.firstChild;g;){var x=g.nextSibling,U=g.nodeName;g[dt]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&g.rel.toLowerCase()==="stylesheet"||t.removeChild(g),g=x}}if(o===0){A.removeChild(c),ui(e);return}o--}else t==="$"||t==="$?"||t==="$!"?o++:n=t.charCodeAt(0)-48;else n=0;t=c}while(t);ui(e)}function zc(A){var e=A.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":zc(t),ft(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}A.removeChild(t)}}function Jx(A,e,t,n){for(;A.nodeType===1;){var o=t;if(A.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(A.nodeName!=="INPUT"||A.type!=="hidden"))break}else if(n){if(!A[dt])switch(e){case"meta":if(!A.hasAttribute("itemprop"))break;return A;case"link":if(c=A.getAttribute("rel"),c==="stylesheet"&&A.hasAttribute("data-precedence"))break;if(c!==o.rel||A.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||A.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||A.getAttribute("title")!==(o.title==null?null:o.title))break;return A;case"style":if(A.hasAttribute("data-precedence"))break;return A;case"script":if(c=A.getAttribute("src"),(c!==(o.src==null?null:o.src)||A.getAttribute("type")!==(o.type==null?null:o.type)||A.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&A.hasAttribute("async")&&!A.hasAttribute("itemprop"))break;return A;default:return A}}else if(e==="input"&&A.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&A.getAttribute("name")===c)return A}else return A;if(A=Gt(A.nextSibling),A===null)break}return null}function Zx(A,e,t){if(e==="")return null;for(;A.nodeType!==3;)if((A.nodeType!==1||A.nodeName!=="INPUT"||A.type!=="hidden")&&!t||(A=Gt(A.nextSibling),A===null))return null;return A}function Gc(A){return A.data==="$!"||A.data==="$?"&&A.ownerDocument.readyState==="complete"}function qx(A,e){var t=A.ownerDocument;if(A.data!=="$?"||t.readyState==="complete")e();else{var n=function(){e(),t.removeEventListener("DOMContentLoaded",n)};t.addEventListener("DOMContentLoaded",n),A._reactRetry=n}}function Gt(A){for(;A!=null;A=A.nextSibling){var e=A.nodeType;if(e===1||e===3)break;if(e===8){if(e=A.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return A}var _c=null;function Uh(A){A=A.previousSibling;for(var e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return A;e--}else t==="/$"&&e++}A=A.previousSibling}return null}function Fh(A,e,t){switch(e=Ml(t),A){case"html":if(A=e.documentElement,!A)throw Error(i(452));return A;case"head":if(A=e.head,!A)throw Error(i(453));return A;case"body":if(A=e.body,!A)throw Error(i(454));return A;default:throw Error(i(451))}}function ni(A){for(var e=A.attributes;e.length;)A.removeAttributeNode(e[0]);ft(A)}var It=new Map,Eh=new Set;function Il(A){return typeof A.getRootNode=="function"?A.getRootNode():A.nodeType===9?A:A.ownerDocument}var Bn=J.d;J.d={f:Wx,r:Px,D:$x,C:Am,L:em,m:tm,X:am,S:nm,M:rm};function Wx(){var A=Bn.f(),e=Fl();return A||e}function Px(A){var e=Ca(A);e!==null&&e.tag===5&&e.type==="form"?Jf(e):Bn.r(A)}var tr=typeof document>"u"?null:document;function Hh(A,e,t){var n=tr;if(n&&typeof e=="string"&&e){var o=Ht(e);o='link[rel="'+A+'"][href="'+o+'"]',typeof t=="string"&&(o+='[crossorigin="'+t+'"]'),Eh.has(o)||(Eh.add(o),A={rel:A,crossOrigin:t,href:e},n.querySelector(o)===null&&(e=n.createElement("link"),Pe(e,"link",A),Ve(e),n.head.appendChild(e)))}}function $x(A){Bn.D(A),Hh("dns-prefetch",A,null)}function Am(A,e){Bn.C(A,e),Hh("preconnect",A,e)}function em(A,e,t){Bn.L(A,e,t);var n=tr;if(n&&A&&e){var o='link[rel="preload"][as="'+Ht(e)+'"]';e==="image"&&t&&t.imageSrcSet?(o+='[imagesrcset="'+Ht(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(o+='[imagesizes="'+Ht(t.imageSizes)+'"]')):o+='[href="'+Ht(A)+'"]';var c=o;switch(e){case"style":c=nr(A);break;case"script":c=ar(A)}It.has(c)||(A=b({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:A,as:e},t),It.set(c,A),n.querySelector(o)!==null||e==="style"&&n.querySelector(ai(c))||e==="script"&&n.querySelector(ri(c))||(e=n.createElement("link"),Pe(e,"link",A),Ve(e),n.head.appendChild(e)))}}function tm(A,e){Bn.m(A,e);var t=tr;if(t&&A){var n=e&&typeof e.as=="string"?e.as:"script",o='link[rel="modulepreload"][as="'+Ht(n)+'"][href="'+Ht(A)+'"]',c=o;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ar(A)}if(!It.has(c)&&(A=b({rel:"modulepreload",href:A},e),It.set(c,A),t.querySelector(o)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(ri(c)))return}n=t.createElement("link"),Pe(n,"link",A),Ve(n),t.head.appendChild(n)}}}function nm(A,e,t){Bn.S(A,e,t);var n=tr;if(n&&A){var o=ya(n).hoistableStyles,c=nr(A);e=e||"default";var g=o.get(c);if(!g){var x={loading:0,preload:null};if(g=n.querySelector(ai(c)))x.loading=5;else{A=b({rel:"stylesheet",href:A,"data-precedence":e},t),(t=It.get(c))&&Vc(A,t);var U=g=n.createElement("link");Ve(U),Pe(U,"link",A),U._p=new Promise(function(R,$){U.onload=R,U.onerror=$}),U.addEventListener("load",function(){x.loading|=1}),U.addEventListener("error",function(){x.loading|=2}),x.loading|=4,Ll(g,e,n)}g={type:"stylesheet",instance:g,count:1,state:x},o.set(c,g)}}}function am(A,e){Bn.X(A,e);var t=tr;if(t&&A){var n=ya(t).hoistableScripts,o=ar(A),c=n.get(o);c||(c=t.querySelector(ri(o)),c||(A=b({src:A,async:!0},e),(e=It.get(o))&&Xc(A,e),c=t.createElement("script"),Ve(c),Pe(c,"link",A),t.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},n.set(o,c))}}function rm(A,e){Bn.M(A,e);var t=tr;if(t&&A){var n=ya(t).hoistableScripts,o=ar(A),c=n.get(o);c||(c=t.querySelector(ri(o)),c||(A=b({src:A,async:!0,type:"module"},e),(e=It.get(o))&&Xc(A,e),c=t.createElement("script"),Ve(c),Pe(c,"link",A),t.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},n.set(o,c))}}function Sh(A,e,t,n){var o=(o=H.current)?Il(o):null;if(!o)throw Error(i(446));switch(A){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=nr(t.href),t=ya(o).hoistableStyles,n=t.get(e),n||(n={type:"style",instance:null,count:0,state:null},t.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){A=nr(t.href);var c=ya(o).hoistableStyles,g=c.get(A);if(g||(o=o.ownerDocument||o,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(A,g),(c=o.querySelector(ai(A)))&&!c._p&&(g.instance=c,g.state.loading=5),It.has(A)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},It.set(A,t),c||im(o,A,t,g.state))),e&&n===null)throw Error(i(528,""));return g}if(e&&n!==null)throw Error(i(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ar(t),t=ya(o).hoistableScripts,n=t.get(e),n||(n={type:"script",instance:null,count:0,state:null},t.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,A))}}function nr(A){return'href="'+Ht(A)+'"'}function ai(A){return'link[rel="stylesheet"]['+A+"]"}function Dh(A){return b({},A,{"data-precedence":A.precedence,precedence:null})}function im(A,e,t,n){A.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=A.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),Pe(e,"link",t),Ve(e),A.head.appendChild(e))}function ar(A){return'[src="'+Ht(A)+'"]'}function ri(A){return"script[async]"+A}function Th(A,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var n=A.querySelector('style[data-href~="'+Ht(t.href)+'"]');if(n)return e.instance=n,Ve(n),n;var o=b({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return n=(A.ownerDocument||A).createElement("style"),Ve(n),Pe(n,"style",o),Ll(n,t.precedence,A),e.instance=n;case"stylesheet":o=nr(t.href);var c=A.querySelector(ai(o));if(c)return e.state.loading|=4,e.instance=c,Ve(c),c;n=Dh(t),(o=It.get(o))&&Vc(n,o),c=(A.ownerDocument||A).createElement("link"),Ve(c);var g=c;return g._p=new Promise(function(x,U){g.onload=x,g.onerror=U}),Pe(c,"link",n),e.state.loading|=4,Ll(c,t.precedence,A),e.instance=c;case"script":return c=ar(t.src),(o=A.querySelector(ri(c)))?(e.instance=o,Ve(o),o):(n=t,(o=It.get(c))&&(n=b({},t),Xc(n,o)),A=A.ownerDocument||A,o=A.createElement("script"),Ve(o),Pe(o,"link",n),A.head.appendChild(o),e.instance=o);case"void":return null;default:throw Error(i(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,Ll(n,t.precedence,A));return e.instance}function Ll(A,e,t){for(var n=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=n.length?n[n.length-1]:null,c=o,g=0;g<n.length;g++){var x=n[g];if(x.dataset.precedence===e)c=x;else if(c!==o)break}c?c.parentNode.insertBefore(A,c.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(A,e.firstChild))}function Vc(A,e){A.crossOrigin==null&&(A.crossOrigin=e.crossOrigin),A.referrerPolicy==null&&(A.referrerPolicy=e.referrerPolicy),A.title==null&&(A.title=e.title)}function Xc(A,e){A.crossOrigin==null&&(A.crossOrigin=e.crossOrigin),A.referrerPolicy==null&&(A.referrerPolicy=e.referrerPolicy),A.integrity==null&&(A.integrity=e.integrity)}var kl=null;function jh(A,e,t){if(kl===null){var n=new Map,o=kl=new Map;o.set(t,n)}else o=kl,n=o.get(t),n||(n=new Map,o.set(t,n));if(n.has(A))return n;for(n.set(A,null),t=t.getElementsByTagName(A),o=0;o<t.length;o++){var c=t[o];if(!(c[dt]||c[EA]||A==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(e)||"";g=A+g;var x=n.get(g);x?x.push(c):n.set(g,[c])}}return n}function Nh(A,e,t){A=A.ownerDocument||A,A.head.insertBefore(t,e==="title"?A.querySelector("head > title"):null)}function lm(A,e,t){if(t===1||e.itemProp!=null)return!1;switch(A){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return A=e.disabled,typeof e.precedence=="string"&&A==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Mh(A){return!(A.type==="stylesheet"&&(A.state.loading&3)===0)}var ii=null;function sm(){}function om(A,e,t){if(ii===null)throw Error(i(475));var n=ii;if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var o=nr(t.href),c=A.querySelector(ai(o));if(c){A=c._p,A!==null&&typeof A=="object"&&typeof A.then=="function"&&(n.count++,n=Kl.bind(n),A.then(n,n)),e.state.loading|=4,e.instance=c,Ve(c);return}c=A.ownerDocument||A,t=Dh(t),(o=It.get(o))&&Vc(t,o),c=c.createElement("link"),Ve(c);var g=c;g._p=new Promise(function(x,U){g.onload=x,g.onerror=U}),Pe(c,"link",t),e.instance=c}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,A),(A=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=Kl.bind(n),A.addEventListener("load",e),A.addEventListener("error",e))}}function cm(){if(ii===null)throw Error(i(475));var A=ii;return A.stylesheets&&A.count===0&&Yc(A,A.stylesheets),0<A.count?function(e){var t=setTimeout(function(){if(A.stylesheets&&Yc(A,A.stylesheets),A.unsuspend){var n=A.unsuspend;A.unsuspend=null,n()}},6e4);return A.unsuspend=e,function(){A.unsuspend=null,clearTimeout(t)}}:null}function Kl(){if(this.count--,this.count===0){if(this.stylesheets)Yc(this,this.stylesheets);else if(this.unsuspend){var A=this.unsuspend;this.unsuspend=null,A()}}}var Ol=null;function Yc(A,e){A.stylesheets=null,A.unsuspend!==null&&(A.count++,Ol=new Map,e.forEach(um,A),Ol=null,Kl.call(A))}function um(A,e){if(!(e.state.loading&4)){var t=Ol.get(A);if(t)var n=t.get(null);else{t=new Map,Ol.set(A,t);for(var o=A.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var g=o[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(t.set(g.dataset.precedence,g),n=g)}n&&t.set(null,n)}o=e.instance,g=o.getAttribute("data-precedence"),c=t.get(g)||n,c===n&&t.set(null,o),t.set(g,o),this.count++,n=Kl.bind(this),o.addEventListener("load",n),o.addEventListener("error",n),c?c.parentNode.insertBefore(o,c.nextSibling):(A=A.nodeType===9?A.head:A,A.insertBefore(o,A.firstChild)),e.state.loading|=4}}var li={$$typeof:CA,Provider:null,Consumer:null,_currentValue:pA,_currentValue2:pA,_threadCount:0};function dm(A,e,t,n,o,c,g,x){this.tag=1,this.containerInfo=A,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=KA(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=KA(0),this.hiddenUpdates=KA(null),this.identifierPrefix=n,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.incompleteTransitions=new Map}function Ih(A,e,t,n,o,c,g,x,U,R,$,aA){return A=new dm(A,e,t,g,x,U,R,aA),e=1,c===!0&&(e|=24),c=wt(3,null,null,e),A.current=c,c.stateNode=A,e=Eo(),e.refCount++,A.pooledCache=e,e.refCount++,c.memoizedState={element:n,isDehydrated:t,cache:e},To(c),A}function Lh(A){return A?(A=Ma,A):Ma}function kh(A,e,t,n,o,c){o=Lh(o),n.context===null?n.context=o:n.pendingContext=o,n=vn(e),n.payload={element:t},c=c===void 0?null:c,c!==null&&(n.callback=c),t=Qn(A,n,e),t!==null&&(Qt(t,A,e),Lr(t,A,e))}function Kh(A,e){if(A=A.memoizedState,A!==null&&A.dehydrated!==null){var t=A.retryLane;A.retryLane=t!==0&&t<e?t:e}}function Jc(A,e){Kh(A,e),(A=A.alternate)&&Kh(A,e)}function Oh(A){if(A.tag===13){var e=Na(A,67108864);e!==null&&Qt(e,A,67108864),Jc(A,67108864)}}var Rl=!0;function fm(A,e,t,n){var o=M.T;M.T=null;var c=J.p;try{J.p=2,Zc(A,e,t,n)}finally{J.p=c,M.T=o}}function gm(A,e,t,n){var o=M.T;M.T=null;var c=J.p;try{J.p=8,Zc(A,e,t,n)}finally{J.p=c,M.T=o}}function Zc(A,e,t,n){if(Rl){var o=qc(n);if(o===null)Ic(A,e,n,zl,t),zh(A,n);else if(Bm(o,A,e,t,n))n.stopPropagation();else if(zh(A,n),e&4&&-1<hm.indexOf(A)){for(;o!==null;){var c=Ca(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=Q(c.pendingLanes);if(g!==0){var x=c;for(x.pendingLanes|=2,x.entangledLanes|=2;g;){var U=1<<31-D(g);x.entanglements[1]|=U,g&=~U}Wt(c),(fe&6)===0&&(Ql=GA()+500,Ai(0))}}break;case 13:x=Na(c,2),x!==null&&Qt(x,c,2),Fl(),Jc(c,2)}if(c=qc(n),c===null&&Ic(A,e,n,zl,t),c===o)break;o=c}o!==null&&n.stopPropagation()}else Ic(A,e,n,null,t)}}function qc(A){return A=Ao(A),Wc(A)}var zl=null;function Wc(A){if(zl=null,A=Xt(A),A!==null){var e=d(A);if(e===null)A=null;else{var t=e.tag;if(t===13){if(A=f(e),A!==null)return A;A=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;A=null}else e!==A&&(A=null)}}return zl=A,null}function Rh(A){switch(A){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ie()){case Qe:return 2;case ct:return 8;case _e:case lt:return 32;case ut:return 268435456;default:return 32}default:return 32}}var Pc=!1,kn=null,Kn=null,On=null,si=new Map,oi=new Map,Rn=[],hm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zh(A,e){switch(A){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":si.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(e.pointerId)}}function ci(A,e,t,n,o,c){return A===null||A.nativeEvent!==c?(A={blockedOn:e,domEventName:t,eventSystemFlags:n,nativeEvent:c,targetContainers:[o]},e!==null&&(e=Ca(e),e!==null&&Oh(e)),A):(A.eventSystemFlags|=n,e=A.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),A)}function Bm(A,e,t,n,o){switch(e){case"focusin":return kn=ci(kn,A,e,t,n,o),!0;case"dragenter":return Kn=ci(Kn,A,e,t,n,o),!0;case"mouseover":return On=ci(On,A,e,t,n,o),!0;case"pointerover":var c=o.pointerId;return si.set(c,ci(si.get(c)||null,A,e,t,n,o)),!0;case"gotpointercapture":return c=o.pointerId,oi.set(c,ci(oi.get(c)||null,A,e,t,n,o)),!0}return!1}function Gh(A){var e=Xt(A.target);if(e!==null){var t=d(e);if(t!==null){if(e=t.tag,e===13){if(e=f(t),e!==null){A.blockedOn=e,cA(A.priority,function(){if(t.tag===13){var n=vt();n=le(n);var o=Na(t,n);o!==null&&Qt(o,t,n),Jc(t,n)}});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){A.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}A.blockedOn=null}function Gl(A){if(A.blockedOn!==null)return!1;for(var e=A.targetContainers;0<e.length;){var t=qc(A.nativeEvent);if(t===null){t=A.nativeEvent;var n=new t.constructor(t.type,t);$s=n,t.target.dispatchEvent(n),$s=null}else return e=Ca(t),e!==null&&Oh(e),A.blockedOn=t,!1;e.shift()}return!0}function _h(A,e,t){Gl(A)&&t.delete(e)}function pm(){Pc=!1,kn!==null&&Gl(kn)&&(kn=null),Kn!==null&&Gl(Kn)&&(Kn=null),On!==null&&Gl(On)&&(On=null),si.forEach(_h),oi.forEach(_h)}function _l(A,e){A.blockedOn===e&&(A.blockedOn=null,Pc||(Pc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,pm)))}var Vl=null;function Vh(A){Vl!==A&&(Vl=A,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Vl===A&&(Vl=null);for(var e=0;e<A.length;e+=3){var t=A[e],n=A[e+1],o=A[e+2];if(typeof n!="function"){if(Wc(n||t)===null)continue;break}var c=Ca(t);c!==null&&(A.splice(e,3),e-=3,Wo(c,{pending:!0,data:o,method:t.method,action:n},n,o))}}))}function ui(A){function e(U){return _l(U,A)}kn!==null&&_l(kn,A),Kn!==null&&_l(Kn,A),On!==null&&_l(On,A),si.forEach(e),oi.forEach(e);for(var t=0;t<Rn.length;t++){var n=Rn[t];n.blockedOn===A&&(n.blockedOn=null)}for(;0<Rn.length&&(t=Rn[0],t.blockedOn===null);)Gh(t),t.blockedOn===null&&Rn.shift();if(t=(A.ownerDocument||A).$$reactFormReplay,t!=null)for(n=0;n<t.length;n+=3){var o=t[n],c=t[n+1],g=o[vA]||null;if(typeof c=="function")g||Vh(t);else if(g){var x=null;if(c&&c.hasAttribute("formAction")){if(o=c,g=c[vA]||null)x=g.formAction;else if(Wc(o)!==null)continue}else x=g.action;typeof x=="function"?t[n+1]=x:(t.splice(n,3),n-=3),Vh(t)}}}function $c(A){this._internalRoot=A}Xl.prototype.render=$c.prototype.render=function(A){var e=this._internalRoot;if(e===null)throw Error(i(409));var t=e.current,n=vt();kh(t,n,A,e,null,null)},Xl.prototype.unmount=$c.prototype.unmount=function(){var A=this._internalRoot;if(A!==null){this._internalRoot=null;var e=A.containerInfo;kh(A.current,2,null,A,null,null),Fl(),e[qA]=null}};function Xl(A){this._internalRoot=A}Xl.prototype.unstable_scheduleHydration=function(A){if(A){var e=S();A={blockedOn:null,target:A,priority:e};for(var t=0;t<Rn.length&&e!==0&&e<Rn[t].priority;t++);Rn.splice(t,0,A),t===0&&Gh(A)}};var Xh=a.version;if(Xh!=="19.1.0")throw Error(i(527,Xh,"19.1.0"));J.findDOMNode=function(A){var e=A._reactInternals;if(e===void 0)throw typeof A.render=="function"?Error(i(188)):(A=Object.keys(A).join(","),Error(i(268,A)));return A=h(e),A=A!==null?m(A):null,A=A===null?null:A.stateNode,A};var xm={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{fA=Yl.inject(xm),DA=Yl}catch{}}return fi.createRoot=function(A,e){if(!u(A))throw Error(i(299));var t=!1,n="",o=sg,c=og,g=cg,x=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(o=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(g=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(x=e.unstable_transitionCallbacks)),e=Ih(A,1,!1,null,null,t,n,o,c,g,x,null),A[qA]=e.current,Mc(A),new $c(e)},fi.hydrateRoot=function(A,e,t){if(!u(A))throw Error(i(299));var n=!1,o="",c=sg,g=og,x=cg,U=null,R=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(g=t.onCaughtError),t.onRecoverableError!==void 0&&(x=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(U=t.unstable_transitionCallbacks),t.formState!==void 0&&(R=t.formState)),e=Ih(A,1,!0,e,t??null,n,o,c,g,x,U,R),e.context=Lh(null),t=e.current,n=vt(),n=le(n),o=vn(n),o.callback=null,Qn(t,o,n),t=n,e.current.lanes=t,XA(e,t),Wt(e),A[qA]=e.current,Mc(A),new Xl(e)},fi.version="19.1.0",fi}var tB;function Sm(){if(tB)return tu.exports;tB=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(a){console.error(a)}}return r(),tu.exports=Hm(),tu.exports}var Dm=Sm();/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jm=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,l,i)=>i?i.toUpperCase():l.toLowerCase()),nB=r=>{const a=jm(r);return a.charAt(0).toUpperCase()+a.slice(1)},ap=(...r)=>r.filter((a,l,i)=>!!a&&a.trim()!==""&&i.indexOf(a)===l).join(" ").trim(),Nm=r=>{for(const a in r)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Mm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=V.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:u="",children:d,iconNode:f,...B},h)=>V.createElement("svg",{ref:h,...Mm,width:a,height:a,stroke:r,strokeWidth:i?Number(l)*24/Number(a):l,className:ap("lucide",u),...!d&&!Nm(B)&&{"aria-hidden":"true"},...B},[...f.map(([m,b])=>V.createElement(m,b)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=(r,a)=>{const l=V.forwardRef(({className:i,...u},d)=>V.createElement(Im,{ref:d,iconNode:a,className:ap(`lucide-${Tm(nB(r))}`,`lucide-${r}`,i),...u}));return l.displayName=nB(r),l};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]],km=PA("app-window",Lm);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Mi=PA("arrow-left",Km);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],wa=PA("arrow-right",Om);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],zm=PA("book-open",Rm);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],rp=PA("box",Gm);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Vm=PA("calendar",_m);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]],Ym=PA("chart-no-axes-gantt",Xm);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],Zm=PA("cloud",Jm);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Ts=PA("copy",qm);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Pm=PA("cpu",Wm);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Aw=PA("database",$m);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],pr=PA("download",ew);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],js=PA("git-merge",tw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],aw=PA("globe",nw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],iw=PA("grid-3x3",rw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],sw=PA("hard-drive",lw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],hr=PA("image",ow);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],ip=PA("layers",cw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],dw=PA("maximize-2",uw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],gw=PA("message-square",fw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"M5 12h14",key:"1ays0h"}]],lp=PA("minus",hw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],pw=PA("move",Bw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],mw=PA("network",xw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],bw=PA("pen",ww);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],et=PA("plus",Cw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],vw=PA("rotate-ccw",yw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]],Uw=PA("router",Qw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Ns=PA("save",Fw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],Hw=PA("server",Ew);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Dw=PA("shield",Sw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],jw=PA("smartphone",Tw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],ve=PA("trash-2",Nw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],ba=PA("upload",Mw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Lw=PA("user",Iw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],$u=PA("users",kw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Eu=PA("x",Kw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Rw=PA("zap",Ow);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Ad=PA("zoom-in",zw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],ed=PA("zoom-out",Gw),_w=({projects:r,onCreateProject:a,onLoadProject:l,onDeleteProject:i})=>{const[u,d]=V.useState(!1);return s.jsxs("div",{className:"evolution-chart-main",children:[s.jsxs("div",{className:"welcome-screen",children:[s.jsx("div",{className:"welcome-icon",children:"🌿"}),s.jsx("h2",{children:"Evolution Chart Maker"}),s.jsx("p",{children:"Visualize evolutionary relationships and timelines"}),s.jsxs("button",{onClick:()=>d(!0),className:"primary-btn",children:[s.jsx(et,{size:16})," New Project"]}),r.length>0&&s.jsxs("div",{className:"project-list",children:[s.jsx("h3",{children:"Your Projects"}),r.map(f=>s.jsxs("div",{className:"project-card",onClick:()=>l(f),children:[s.jsxs("div",{className:"project-card-content",children:[s.jsx("div",{className:"project-card-name",children:f.name}),s.jsxs("div",{className:"project-card-meta",children:[s.jsx("span",{children:new Date(f.createdAt).toLocaleDateString()}),s.jsxs("span",{children:[f.nodes?.length||0," nodes • ",f.connections?.length||0," connections"]})]})]}),s.jsxs("div",{className:"project-card-actions",children:[s.jsx("button",{onClick:B=>{B.stopPropagation(),l(f)},className:"open-btn",children:s.jsx(wa,{size:16})}),s.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this project?")&&i(f.id)},className:"delete-btn",children:s.jsx(ve,{size:16})})]})]},f.id))]})]}),u&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-content",children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{children:"Create New Project"}),s.jsx("button",{onClick:()=>d(!1),className:"close-btn",children:"×"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Project Name"}),s.jsx("input",{type:"text",placeholder:"e.g., Mammalian Evolution",id:"projectName",autoFocus:!0})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Timeline Start"}),s.jsx("input",{type:"number",defaultValue:"500",id:"timelineStart"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Timeline End"}),s.jsx("input",{type:"number",defaultValue:"0",id:"timelineEnd"})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Time Unit"}),s.jsxs("select",{id:"timeUnit",defaultValue:"mya",children:[s.jsx("option",{value:"bya",children:"Billion Years Ago (BYA)"}),s.jsx("option",{value:"mya",children:"Million Years Ago (MYA)"}),s.jsx("option",{value:"kya",children:"Thousand Years Ago (KYA)"}),s.jsx("option",{value:"ya",children:"Years Ago (YA)"})]})]}),s.jsxs("div",{className:"modal-footer",children:[s.jsx("button",{onClick:()=>d(!1),className:"cancel-btn",children:"Cancel"}),s.jsx("button",{onClick:()=>{const f=document.getElementById("projectName").value,B=parseFloat(document.getElementById("timelineStart").value),h=parseFloat(document.getElementById("timelineEnd").value),m=document.getElementById("timeUnit").value;f.trim()&&B>h&&(a(f,B,h,m),d(!1))},className:"create-btn",children:"Create Project"})]})]})}),s.jsx("style",{jsx:!0,children:`
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
      `})]})},Jl=[{value:"bya",label:"Billion Years Ago (BYA)",multiplier:1e9},{value:"mya",label:"Million Years Ago (MYA)",multiplier:1e6},{value:"kya",label:"Thousand Years Ago (KYA)",multiplier:1e3},{value:"ya",label:"Years Ago (YA)",multiplier:1}],Vw=({project:r,nodes:a,connections:l,onUpdateProject:i,onBack:u})=>{const h="#ffffff",m="#ffeb3b",b=V.useRef(null),y=V.useRef(null);V.useRef(null);const T=V.useRef(0),W=V.useRef({x:0,y:0}),Z=V.useRef({x:0,y:0}),nA=V.useRef(0),hA=V.useRef(!1),[oA,lA]=V.useState(a||[]),[CA,BA]=V.useState(l||[]),[eA,P]=V.useState(null),[yA,L]=V.useState(null),[z,wA]=V.useState(r?.zoom||1),[sA,dA]=V.useState(r?.pan||{x:0,y:0}),[UA,jA]=V.useState(r?.pan||{x:0,y:0}),[SA,M]=V.useState(!1),[J,pA]=V.useState(null),[QA,C]=V.useState(!1),[v,K]=V.useState(null);V.useEffect(()=>{if(r){const AA=setTimeout(()=>{i({...r,nodes:oA,connections:CA,zoom:z,pan:sA})},500);return()=>clearTimeout(AA)}},[oA,CA,z,sA,r,i]),V.useEffect(()=>{let AA;const fA=()=>{const DA=Date.now(),F=Math.min(DA-T.current,100)/1e3;if(T.current=DA,F>0&&!hA.current){const D=(UA.x-sA.x)*.2,q=(UA.y-sA.y)*.2;Math.abs(D)>.1||Math.abs(q)>.1?(dA(xA=>({x:xA.x+D,y:xA.y+q})),AA=requestAnimationFrame(fA)):dA(UA)}else AA=requestAnimationFrame(fA)};return AA=requestAnimationFrame(fA),()=>cancelAnimationFrame(AA)},[sA,UA]);const E=V.useCallback(AA=>{if(!r)return 0;const fA=Y(AA.value,AA.unit),DA=Y(r.timelineStart,r.timeUnit),F=Y(r.timelineEnd,r.timeUnit),D=DA-F,q=(DA-fA)/D,xA=b.current?.offsetWidth||800;return q*xA},[r]),Y=(AA,fA)=>{const DA=Jl.find(F=>F.value===fA)||Jl[0];return AA*DA.multiplier},iA=(AA,fA)=>fA==="bya"?`${AA} BYA`:fA==="mya"?`${AA} MYA`:fA==="kya"?`${AA} KYA`:`${AA} YA`,H=V.useCallback(AA=>{if(!r)return 0;const fA=b.current?.offsetWidth||800,DA=Y(r.timelineStart,r.timeUnit),F=Y(r.timelineEnd,r.timeUnit),D=DA-F,q=AA/fA;return DA-q*D},[r]),uA=V.useCallback(()=>{if(!r)return[];const AA=b.current?.offsetWidth||800,fA=Y(r.timelineStart,r.timeUnit),DA=Y(r.timelineEnd,r.timeUnit),F=fA-DA,D=F/z;let q;D>2e9?q=1e9:D>1e9?q=5e8:D>5e8?q=1e8:D>2e8?q=5e7:D>1e8?q=25e6:D>5e7?q=1e7:D>2e7?q=5e6:D>1e7?q=25e5:D>5e6?q=1e6:D>2e6?q=5e5:D>1e6?q=25e4:D>5e5?q=1e5:D>2e5?q=5e4:D>1e5?q=25e3:D>5e4?q=1e4:D>2e4?q=5e3:D>1e4?q=2500:D>5e3?q=1e3:D>2e3?q=500:D>1e3?q=250:D>500?q=100:D>200?q=50:D>100?q=25:D>50?q=10:D>20?q=5:q=1;const xA=[],gA=H(-sA.x/z),w=H((AA-sA.x)/z),p=Math.ceil(Math.min(gA,w)/q)*q,Q=Math.floor(Math.max(gA,w)/q)*q;for(let j=p;j<=Q;j+=q)if(j>=DA&&j<=fA){let k=j,G="ya";j>=1e9?(k=j/1e9,G="bya"):j>=1e6?(k=j/1e6,G="mya"):j>=1e3&&(k=j/1e3,G="kya"),xA.push({value:k,unit:G,position:(fA-j)/F})}return xA},[r,z,sA,H]),mA=(AA,fA)=>{if(!r)return;const DA=b.current.getBoundingClientRect(),F=AA-DA.left,D=fA-DA.top-60,xA=H((F-sA.x)/z)/(Jl.find(w=>w.value===r.timeUnit)?.multiplier||1),gA={id:Date.now(),x:(F-sA.x)/z,y:Math.max(20,(D-sA.y)/z),title:"New Species",description:"Description here...",imageSrc:"",timeline:{value:parseFloat(xA.toFixed(4)),unit:r.timeUnit}};lA([...oA,gA]),pA(gA),M(!0)},LA=AA=>{lA(oA.map(fA=>fA.id===AA.id?AA:fA)),pA(null),M(!1)},FA=AA=>{lA(oA.filter(fA=>fA.id!==AA)),BA(CA.filter(fA=>fA.from!==AA&&fA.to!==AA)),P(null)},OA=(AA,fA)=>{const DA={id:Date.now(),from:AA,to:fA};BA([...CA,DA])},Ae=AA=>{BA(CA.filter(fA=>fA.id!==AA)),L(null)},Oe=(AA,fA)=>{QA||(AA.stopPropagation(),hA.current=!0,P(fA),L(null),b.current.getBoundingClientRect(),W.current={x:AA.clientX,y:AA.clientY},nA.current=performance.now())},ZA=V.useCallback(AA=>{if(!hA.current||!eA)return;const fA=performance.now(),DA=(fA-nA.current)/1e3;nA.current=fA;const F=b.current.getBoundingClientRect();AA.clientX-F.left,AA.clientY-F.top;const D=AA.clientX-W.current.x,q=AA.clientY-W.current.y;W.current={x:AA.clientX,y:AA.clientY},Z.current={x:D/(DA||.016),y:q/(DA||.016)};const xA=q/z,gA=Math.max(20,eA.y+xA),w={...eA,y:gA};lA(p=>p.map(Q=>Q.id===eA.id?w:Q)),P(w)},[eA,z]),ye=V.useCallback(()=>{if(hA.current){if(hA.current=!1,Math.abs(Z.current.y)>50){const fA=Z.current.y*.9;jA(DA=>({x:DA.x,y:DA.y-fA}))}Z.current={x:0,y:0}}},[]),YA=(AA,fA)=>{AA.stopPropagation(),QA?v?v!==fA.id&&(CA.find(F=>F.from===v&&F.to===fA.id||F.from===fA.id&&F.to===v)||OA(v,fA.id),C(!1),K(null)):K(fA.id):hA.current||(P(fA),L(null))},GA=(AA,fA)=>{if(!AA||!fA)return"";const DA=E(AA.timeline)+120/2,F=AA.y+100/2,D=E(fA.timeline)+120/2,q=fA.y+100/2,xA=Math.abs(F-q)*.3;return`M ${DA} ${F}
            C ${DA} ${F+xA},
              ${D} ${q-xA},
              ${D} ${q}`},ie=(AA,fA)=>{const DA=E(AA.timeline)+60,F=AA.y+100/2,D=E(fA.timeline)+120/2,q=fA.y+100/2;return{x:(DA+D)/2,y:(F+q)/2}},Qe=()=>{if(!r)return;const fA=JSON.stringify({project:r,nodes:oA,connections:CA,zoom:z,pan:sA},null,2),DA=new Blob([fA],{type:"application/json"}),F=URL.createObjectURL(DA),D=document.createElement("a");D.href=F,D.download=`${r.name.replace(/\s+/g,"-")}-evolution-chart.json`,D.click(),URL.revokeObjectURL(F)},ct=AA=>{const fA=AA.target.files[0];if(!fA)return;const DA=new FileReader;DA.onload=F=>{try{const D=JSON.parse(F.target.result);D.project&&D.nodes&&(i({...D.project,nodes:D.nodes,connections:D.connections,zoom:D.zoom,pan:D.pan}),lA(D.nodes),BA(D.connections),wA(D.zoom||1),dA(D.pan||{x:0,y:0}),jA(D.pan||{x:0,y:0}))}catch{alert("Error parsing the file. Please check the file format.")}},DA.readAsText(fA)},_e=AA=>{AA.ctrlKey||AA.metaKey?mA(AA.clientX,AA.clientY):(P(null),L(null),QA&&(C(!1),K(null)))},lt=AA=>{pA(AA),M(!0)},ut=(AA,fA=null,DA=null)=>{const F=Math.max(.1,Math.min(5,z+AA));if(fA!==null&&DA!==null){const D=b.current.getBoundingClientRect(),q=fA-D.left,xA=DA-D.top-60,gA={x:q-(q-sA.x)*(F/z),y:xA-(xA-sA.y)*(F/z)};dA(gA),jA(gA)}wA(F)},Ft=AA=>{AA.preventDefault();const fA=.5;AA.shiftKey?jA(DA=>({x:DA.x-AA.deltaY*fA,y:DA.y})):jA(DA=>({x:DA.x-AA.deltaX*fA,y:DA.y-AA.deltaY*fA}))};return V.useEffect(()=>{const AA=()=>ye();return document.addEventListener("mousemove",ZA),document.addEventListener("mouseup",AA),()=>{document.removeEventListener("mousemove",ZA),document.removeEventListener("mouseup",AA)}},[ZA,ye]),s.jsxs("div",{className:"evolution-chart-maker",children:[s.jsxs("div",{className:"header",children:[s.jsxs("div",{className:"header-left",children:[s.jsx("h1",{children:"🧬 Evolution Chart Maker"}),s.jsx("span",{className:"project-name",children:r.name})]}),s.jsxs("div",{className:"toolbar",children:[s.jsx("button",{onClick:u,className:"toolbar-btn primary",children:"← Back to Projects"}),s.jsx("button",{onClick:()=>{C(!QA),K(null)},className:`toolbar-btn ${QA?"danger":"warning"}`,children:QA?"Cancel":"Connect"}),s.jsxs("button",{onClick:()=>y.current?.click(),className:"toolbar-btn warning",children:[s.jsx(ba,{size:16})," Import"]}),s.jsxs("button",{onClick:Qe,className:"toolbar-btn info",children:[s.jsx(pr,{size:16})," Export"]}),s.jsxs("div",{className:"zoom-controls",children:[s.jsx("button",{onClick:()=>ut(.1),className:"zoom-btn",children:s.jsx(Ad,{size:16})}),s.jsx("button",{onClick:()=>ut(-.1),className:"zoom-btn",children:s.jsx(ed,{size:16})})]})]})]}),s.jsx("div",{className:"timeline",children:uA().map((AA,fA)=>s.jsxs("div",{className:"timeline-marker",style:{left:`${AA.position*(b.current?.offsetWidth||800)*z+sA.x}px`},children:[s.jsx("div",{className:"timeline-line"}),s.jsx("span",{className:"timeline-label",children:iA(AA.value,AA.unit)})]},fA))}),s.jsxs("div",{ref:b,onClick:_e,onWheel:Ft,className:"canvas",style:{cursor:QA?"crosshair":hA.current?"grabbing":"default"},children:[s.jsx("svg",{className:"connections-svg",children:CA.map(AA=>{const fA=oA.find(q=>q.id===AA.from),DA=oA.find(q=>q.id===AA.to);if(!fA||!DA)return null;const F=ie(fA,DA),D=yA===AA.id||eA&&(eA.id===fA.id||eA.id===DA.id);return s.jsxs("g",{children:[s.jsx("path",{d:GA(fA,DA),stroke:D?m:h,strokeWidth:D?"3":"2",fill:"none",opacity:"0.8",transform:`translate(${sA.x}, ${sA.y+60}) scale(${z})`}),D&&s.jsx("circle",{cx:F.x*z+sA.x,cy:F.y*z+sA.y+60,r:8*z,fill:"#e53e3e",onClick:q=>{q.stopPropagation(),Ae(AA.id)},style:{cursor:"pointer",pointerEvents:"auto"}})]},AA.id)})}),oA.map(AA=>s.jsxs("div",{className:`node ${eA?.id===AA.id?"selected":""}`,style:{left:`${E(AA.timeline)*z+sA.x}px`,top:`${AA.y*z+sA.y+60}px`,width:`${120*z}px`,height:`${100*z}px`,transform:eA?.id===AA.id&&hA.current?"scale(1.02)":"scale(1)",transition:"transform 0.1s ease"},onMouseDown:fA=>Oe(fA,AA),onClick:fA=>YA(fA,AA),onDoubleClick:()=>lt(AA),children:[s.jsxs("div",{style:{display:"flex"},children:[AA.imageSrc&&s.jsx("img",{src:AA.imageSrc,alt:AA.title,className:"node-image",style:{width:`${40*z}px`,height:`${40*z}px`}}),s.jsxs("div",{children:[s.jsx("div",{className:"node-title",style:{fontSize:`${11*z}px`},children:AA.title}),s.jsx("div",{className:"node-timeline",style:{fontSize:`${9*z}px`},children:iA(AA.timeline.value,AA.timeline.unit)})]})]}),eA?.id===AA.id&&s.jsx("button",{onClick:fA=>{fA.stopPropagation(),FA(AA.id)},className:"delete-node-btn",style:{width:`${24*z}px`,height:`${24*z}px`},children:s.jsx(ve,{size:12*z})})]},AA.id)),QA&&s.jsx("div",{className:"connection-mode-indicator",children:v?"Select child node":"Select parent node"}),s.jsxs("div",{className:"instructions-panel",children:[s.jsxs("div",{children:["💡 ",s.jsx("strong",{children:"Ctrl+Click:"})," Create new node"]}),s.jsxs("div",{children:["🔗 ",s.jsx("strong",{children:"Connect Mode:"})," Click two nodes to link them"]}),s.jsxs("div",{children:["❌ ",s.jsx("strong",{children:"Click connection midpoint:"})," Delete connection"]}),s.jsxs("div",{children:["📍 ",s.jsx("strong",{children:"Drag:"})," Move nodes vertically"]}),s.jsxs("div",{children:["✏️ ",s.jsx("strong",{children:"Double-click:"})," Edit node details"]}),s.jsxs("div",{children:["🔍 ",s.jsx("strong",{children:"Scroll:"})," Pan | ",s.jsx("strong",{children:"Shift+Scroll:"})," Horizontal Pan | ",s.jsx("strong",{children:"Ctrl+Scroll:"})," Zoom"]})]})]}),SA&&J&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-content",children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{children:"Edit Node"}),s.jsx("button",{onClick:()=>M(!1),className:"close-btn",children:s.jsx(Eu,{size:20})})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Title"}),s.jsx("input",{type:"text",defaultValue:J.title,placeholder:"Species name",id:"nodeTitle"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Image URL"}),s.jsx("input",{type:"text",defaultValue:J.imageSrc,placeholder:"https://example.com/image.jpg",id:"nodeImage"})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Timeline Value"}),s.jsx("input",{type:"number",defaultValue:J.timeline.value,id:"nodeTimelineValue"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Time Unit"}),s.jsx("select",{id:"nodeTimelineUnit",defaultValue:J.timeline.unit,children:Jl.map(AA=>s.jsx("option",{value:AA.value,children:AA.value.toUpperCase()},AA.value))})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{defaultValue:J.description,placeholder:"Brief description of the species...",rows:4,id:"nodeDescription"})]}),s.jsxs("div",{className:"form-actions",children:[s.jsx("button",{onClick:()=>M(!1),className:"cancel-btn",children:"Cancel"}),s.jsx("button",{onClick:()=>{const AA={...J,title:document.getElementById("nodeTitle").value,imageSrc:document.getElementById("nodeImage").value,timeline:{value:parseFloat(document.getElementById("nodeTimelineValue").value),unit:document.getElementById("nodeTimelineUnit").value},description:document.getElementById("nodeDescription").value};LA(AA)},className:"save-btn",children:"Save Changes"})]})]})}),s.jsx("input",{ref:y,type:"file",accept:".json",onChange:ct,style:{display:"none"}}),s.jsx("style",{jsx:!0,children:`
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
      `})]})},Xw=({flowcharts:r,onCreateFlowchart:a,onLoadFlowchart:l,onDeleteFlowchart:i,onImportFlowchart:u})=>{const[d,f]=V.useState(!1),[B,h]=V.useState(!1),[m,b]=V.useState("");return s.jsxs("div",{className:"flowchart-main",children:[s.jsxs("div",{className:"welcome-screen",children:[s.jsx("div",{className:"welcome-icon",children:"📊"}),s.jsx("h2",{children:"Flowchart Designer"}),s.jsx("p",{children:"Create and visualize complex processes with intuitive flowcharts"}),s.jsxs("div",{className:"action-buttons",children:[s.jsxs("button",{onClick:()=>f(!0),className:"primary-btn",children:[s.jsx(et,{size:16})," New Flowchart"]}),s.jsxs("button",{onClick:()=>h(!0),className:"secondary-btn",children:[s.jsx(ba,{size:16})," Import"]})]}),r.length>0&&s.jsxs("div",{className:"flowchart-list",children:[s.jsx("h3",{children:"Your Flowcharts"}),r.map(y=>s.jsxs("div",{className:"flowchart-card",onClick:()=>l(y),children:[s.jsxs("div",{className:"flowchart-card-content",children:[s.jsx("div",{className:"flowchart-card-name",children:y.name}),s.jsxs("div",{className:"flowchart-card-meta",children:[s.jsx("span",{children:new Date(y.createdAt).toLocaleDateString()}),s.jsxs("span",{children:[y.nodes?.length||0," nodes • ",y.edges?.length||0," edges"]})]})]}),s.jsxs("div",{className:"flowchart-card-actions",children:[s.jsx("button",{onClick:T=>{T.stopPropagation(),l(y)},className:"open-btn",children:s.jsx(wa,{size:16})}),s.jsx("button",{onClick:T=>{T.stopPropagation(),confirm("Delete this flowchart?")&&i(y.id)},className:"delete-btn",children:s.jsx(ve,{size:16})})]})]},y.id))]})]}),d&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-content",children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{children:"Create New Flowchart"}),s.jsx("button",{onClick:()=>f(!1),className:"close-btn",children:"×"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Flowchart Name"}),s.jsx("input",{type:"text",placeholder:"e.g., User Registration Flow",id:"flowchartName",autoFocus:!0})]}),s.jsxs("div",{className:"modal-footer",children:[s.jsx("button",{onClick:()=>f(!1),className:"cancel-btn",children:"Cancel"}),s.jsx("button",{onClick:()=>{const y=document.getElementById("flowchartName").value;y.trim()&&(a(y),f(!1))},className:"create-btn",children:"Create Flowchart"})]})]})}),B&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-content",children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{children:"Import Flowchart"}),s.jsx("button",{onClick:()=>h(!1),className:"close-btn",children:"×"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Paste JSON Data"}),s.jsx("textarea",{value:m,onChange:y=>b(y.target.value),placeholder:"Paste your flowchart JSON here...",rows:8})]}),s.jsxs("div",{className:"modal-footer",children:[s.jsx("button",{onClick:()=>h(!1),className:"cancel-btn",children:"Cancel"}),s.jsx("button",{onClick:()=>{try{u(m),h(!1),b("")}catch(y){alert("Invalid JSON: "+y.message)}},className:"create-btn",children:"Import"})]})]})}),s.jsx("style",{jsx:!0,children:`
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
      `})]})},Yw=({flowchart:r,nodes:a,edges:l,jsonInput:i,onJsonInputChange:u,onImportJson:d,onUpdateFlowchart:f,onBack:B})=>{const[h,m]=V.useState("editor"),[b,y]=V.useState(null),[T,W]=V.useState(null),[Z,nA]=V.useState(null),[hA,oA]=V.useState(null),[lA,CA]=V.useState(null),[BA,eA]=V.useState(null),[P,yA]=V.useState(""),[L,z]=V.useState(!1),[wA,sA]=V.useState(null),[dA,UA]=V.useState(!1),[jA,SA]=V.useState(""),[M,J]=V.useState(null),[pA,QA]=V.useState("dark"),C=V.useRef(null),v=V.useRef(null),E={dark:{background:"#1a1a1a",panel:"#242424",border:"#444",text:"rgba(255, 255, 255, 0.87)",nodeFill:"#646cff",nodeStroke:"#a855f7",edgeStroke:"#646cff",highlight:"#a855f7",secondaryText:"#64748b",buttonHover:"#333"},light:{background:"#f5f5f5",panel:"#ffffff",border:"#ddd",text:"#333",nodeFill:"#4f46e5",nodeStroke:"#7c3aed",edgeStroke:"#4f46e5",highlight:"#7c3aed",secondaryText:"#666",buttonHover:"#eee"},blue:{background:"#0f172a",panel:"#1e293b",border:"#334155",text:"#f8fafc",nodeFill:"#3b82f6",nodeStroke:"#6366f1",edgeStroke:"#3b82f6",highlight:"#6366f1",secondaryText:"#94a3b8",buttonHover:"#1e293b"}}[pA];V.useEffect(()=>{const F=D=>{D.key==="Delete"&&(T?ie():Z&&Qe())};return document.addEventListener("keydown",F),()=>{document.removeEventListener("keydown",F)}},[T,Z]);const Y=()=>JSON.stringify({nodes:a,edges:l},null,2),iA=()=>{const F=new Blob([Y()],{type:"application/json"}),D=URL.createObjectURL(F),q=document.createElement("a");q.href=D,q.download=`${r?.name||"use-case-diagram"}.json`,document.body.appendChild(q),q.click(),document.body.removeChild(q),URL.revokeObjectURL(D),m("json")},H=F=>{const D=F.target.files[0];if(!D)return;const q=new FileReader;q.onload=xA=>{try{const gA=JSON.parse(xA.target.result);u(JSON.stringify(gA,null,2)),m("json")}catch{alert("Invalid JSON file")}},q.readAsText(D),F.target.value=""},uA=()=>{try{const F=JSON.parse(i);f({...r,nodes:F.nodes||[],edges:F.edges||[]})}catch(F){alert("Invalid JSON: "+F.message)}},mA=(F,D,q)=>{const xA=F.x+F.width/2,gA=F.y+F.height/2;if(F.type==="circle"){const w=F.width/2,p=Math.atan2(q-gA,D-xA);return{x:xA+w*Math.cos(p),y:gA+w*Math.sin(p)}}else if(F.type==="oval"){const w=F.width/2,p=F.height/2,Q=Math.atan2(q-gA,D-xA),j=Math.cos(Q),k=Math.sin(Q),G=Math.sqrt(1/(Math.pow(j/w,2)+Math.pow(k/p,2)));return{x:xA+G*j,y:gA+G*k}}else if(F.type==="diamond"){const w=D-xA,p=q-gA,Q=F.width/2,j=F.height/2,k=j/Q;if(Math.abs(p)<=k*Math.abs(w)){const G=w>0?F.x+F.width:F.x,rA=gA+p/Math.abs(w)*Q*k;return{x:G,y:Math.max(F.y,Math.min(F.y+F.height,rA))}}else{const G=p>0?F.y+F.height:F.y,rA=xA+w/Math.abs(p)*j/k;return{x:Math.max(F.x,Math.min(F.x+F.width,rA)),y:G}}}else if(F.type==="rhombus"){const w=D-xA,p=q-gA,Q=F.width/2,j=F.height/2,k=j*.3;if(Math.abs(w)>Math.abs(p)){const G=w>0?F.x+F.width:F.x,rA=p>0?F.y+j+j*(w>0?-k:k)/Q:F.y+j-j*(w>0?-k:k)/Q;return{x:G,y:Math.max(F.y,Math.min(F.y+F.height,rA))}}else{const G=p>0?F.y+F.height:F.y,rA=xA+w*.7;return{x:Math.max(F.x-k,Math.min(F.x+F.width+k,rA)),y:G}}}else{const w=D-xA,p=q-gA,Q=F.width/2,j=F.height/2;if(Math.abs(w)*j>Math.abs(p)*Q){const k=w>0?F.x+F.width:F.x,G=gA+p/Math.abs(w)*Q;return{x:k,y:Math.max(F.y,Math.min(F.y+F.height,G))}}else{const k=p>0?F.y+F.height:F.y,G=xA+w/Math.abs(p)*j;return{x:Math.max(F.x,Math.min(F.x+F.width,G)),y:k}}}},LA=(F,D)=>{const q={x:F.x+F.width/2,y:F.y+F.height/2},xA={x:D.x+D.width/2,y:D.y+D.height/2},gA=mA(F,xA.x,xA.y),w=mA(D,q.x,q.y),p=w.x-gA.x,Q=w.y-gA.y,j=Math.sqrt(p*p+Q*Q),k=30,G=Math.abs(q.y-xA.y)<k,rA=Math.abs(q.x-xA.x)<k;if(j<80||G||rA)return[gA,w];const TA=Math.abs(p),KA=Math.abs(Q),XA=100;if(TA<XA&&KA<XA)return[gA,w];if(TA>KA*1.5){const ae=gA.x+p*.7;return[gA,{x:ae,y:gA.y},{x:ae,y:w.y},w]}else if(KA>TA*1.5){const ae=gA.y+Q*.7;return[gA,{x:gA.x,y:ae},{x:w.x,y:ae},w]}else if(Math.abs(p)>Math.abs(Q)){const ae=gA.x+p*.6;return[gA,{x:ae,y:gA.y},{x:ae,y:w.y},w]}else{const ae=gA.y+Q*.6;return[gA,{x:gA.x,y:ae},{x:w.x,y:ae},w]}},FA=F=>{if(F.length<=2)return{x:(F[0].x+F[F.length-1].x)/2,y:(F[0].y+F[F.length-1].y)/2};let D=0,q=0;for(let xA=0;xA<F.length-1;xA++){const gA=Math.sqrt(Math.pow(F[xA+1].x-F[xA].x,2)+Math.pow(F[xA+1].y-F[xA].y,2));gA>D&&(D=gA,q=xA)}return{x:(F[q].x+F[q+1].x)/2,y:(F[q].y+F[q+1].y)/2}},OA=(F,D,q,xA=8)=>{const gA=F.x-D.x,w=F.y-D.y,p=q.x-D.x,Q=q.y-D.y,j=gA*p+w*Q,k=p*p+Q*Q;if(k===0)return!1;const G=j/k;if(G<0||G>1)return!1;const rA=D.x+G*p,TA=D.y+G*Q,KA=F.x-rA,XA=F.y-TA;return Math.sqrt(KA*KA+XA*XA)<=xA},Ae=(F,D)=>{for(const q of l){const xA=a.find(p=>p.id===q.from),gA=a.find(p=>p.id===q.to);if(!xA||!gA)continue;const w=LA(xA,gA);for(let p=0;p<w.length-1;p++)if(OA({x:F,y:D},w[p],w[p+1]))return q}return null},Oe=F=>{if(lA||BA)return;const q=F.currentTarget.getBoundingClientRect(),xA=(F.clientX-q.left-r.pan.x)/r.zoom,gA=(F.clientY-q.top-r.pan.y)/r.zoom,w=a.find(Q=>{if(Q.type==="circle"){const j=Q.x+Q.width/2,k=Q.y+Q.height/2;return Math.sqrt(Math.pow(xA-j,2)+Math.pow(gA-k,2))<=Q.width/2}else if(Q.type==="oval"){const j=Q.x+Q.width/2,k=Q.y+Q.height/2,G=(xA-j)/(Q.width/2),rA=(gA-k)/(Q.height/2);return Math.pow(G,2)+Math.pow(rA,2)<=1}else if(Q.type==="diamond"){const j=Q.x+Q.width/2,k=Q.y+Q.height/2,G=Math.abs(xA-j),rA=Math.abs(gA-k);return G/(Q.width/2)+rA/(Q.height/2)<=1}else if(Q.type==="rhombus"){const j=xA-Q.x,k=gA-Q.y,G=Q.height*.3;if(k<0||k>Q.height)return!1;const rA=-G+k/Q.height*G*2,TA=Q.width+G-k/Q.height*G*2;return j>=rA&&j<=TA}else return xA>=Q.x&&xA<=Q.x+Q.width&&gA>=Q.y&&gA<=Q.y+Q.height}),p=w?null:Ae(xA,gA);if(L&&w){if(!wA)sA(w);else if(w.id!==wA.id)if(wA.type==="diamond"||wA.type==="rhombus")J({id:Date.now(),from:wA.id,to:w.id}),UA(!0);else{const Q={id:Date.now(),from:wA.id,to:w.id,label:""};f({...r,edges:[...l,Q]}),sA(null),z(!1),y(null)}return}if(w){W(w),nA(null);return}if(p){nA(p),W(null);return}if(b&&b!=="arrow"){const Q={id:Date.now(),type:b,x:xA-(b==="circle"||b==="oval"?30:60),y:gA-30,width:b==="circle"?60:b==="oval"?100:120,height:60,text:ZA(b)};f({...r,nodes:[...a,Q]}),y(null)}W(null),nA(null)},ZA=F=>{switch(F){case"oval":return"Start/End";case"diamond":return"Decision";case"rhombus":return"Decision";case"rectangle":return"Process";case"circle":return"Connector";default:return F.charAt(0).toUpperCase()+F.slice(1)}},ye=F=>{CA(F.id),yA(F.text)},YA=F=>{eA(F.id),yA(F.label||"")},GA=()=>{if(lA){const F=a.map(D=>D.id===lA?{...D,text:P}:D);f({...r,nodes:F}),CA(null)}else if(BA){const F=l.map(D=>D.id===BA?{...D,label:P}:D);f({...r,edges:F}),eA(null)}yA("")},ie=()=>{if(!T)return;const F=a.filter(q=>q.id!==T.id),D=l.filter(q=>q.from!==T.id&&q.to!==T.id);f({...r,nodes:F,edges:D}),W(null)},Qe=()=>{if(!Z)return;const F=l.filter(D=>D.id!==Z.id);f({...r,edges:F}),nA(null)},ct=(F,D)=>{if(lA||BA)return;const xA=C.current.getBoundingClientRect(),gA=F.clientX-xA.left,w=F.clientY-xA.top;oA({nodeId:D.id,startX:gA,startY:w,originalX:D.x,originalY:D.y})},_e=V.useCallback(F=>{if(!hA)return;const q=C.current.getBoundingClientRect(),xA=F.clientX-q.left,gA=F.clientY-q.top,w=(xA-hA.startX)/r.zoom,p=(gA-hA.startY)/r.zoom,Q=a.map(j=>j.id===hA.nodeId?{...j,x:hA.originalX+w,y:hA.originalY+p}:j);f({...r,nodes:Q})},[hA,a,r,f]),lt=V.useCallback(()=>{oA(null)},[]);V.useEffect(()=>{if(hA)return document.addEventListener("mousemove",_e),document.addEventListener("mouseup",lt),()=>{document.removeEventListener("mousemove",_e),document.removeEventListener("mouseup",lt)}},[hA,_e,lt]);const ut=()=>{y("arrow"),z(!0),sA(null)},Ft=()=>{if(!M)return;const F={...M,label:jA};f({...r,edges:[...l,F]}),sA(null),z(!1),y(null),UA(!1),J(null),SA("")},AA=()=>{const F=document.createElement("canvas"),D=F.getContext("2d");let q=1/0,xA=1/0,gA=-1/0,w=-1/0;a.forEach(G=>{q=Math.min(q,G.x),xA=Math.min(xA,G.y),gA=Math.max(gA,G.x+G.width),w=Math.max(w,G.y+G.height)});const p=40;q-=p,xA-=p,gA+=p,w+=p;const Q=gA-q,j=w-xA;F.width=Q,F.height=j,D.fillStyle=E.background,D.fillRect(0,0,Q,j),l.forEach(G=>{const rA=a.find(KA=>KA.id===G.from),TA=a.find(KA=>KA.id===G.to);if(rA&&TA){const XA=LA(rA,TA).map(le=>({x:le.x-q,y:le.y-xA}));D.strokeStyle=E.edgeStroke,D.lineWidth=2,D.beginPath(),D.moveTo(XA[0].x,XA[0].y);for(let le=1;le<XA.length;le++)D.lineTo(XA[le].x,XA[le].y);D.stroke();const ae=XA[XA.length-1],Ue=XA[XA.length-2],ue=Math.atan2(ae.y-Ue.y,ae.x-Ue.x);if(D.fillStyle=E.edgeStroke,D.beginPath(),D.moveTo(ae.x,ae.y),D.lineTo(ae.x-12*Math.cos(ue-Math.PI/6),ae.y-12*Math.sin(ue-Math.PI/6)),D.lineTo(ae.x-12*Math.cos(ue+Math.PI/6),ae.y-12*Math.sin(ue+Math.PI/6)),D.closePath(),D.fill(),G.label){const le=FA(XA);D.fillStyle=E.text,D.font="12px Arial",D.textAlign="center",D.fillText(G.label,le.x,le.y-5)}}}),a.forEach(G=>{const rA=G.x-q,TA=G.y-xA;if(D.fillStyle=E.nodeFill,D.strokeStyle=E.nodeStroke,D.lineWidth=2,G.type==="rectangle")D.beginPath(),D.roundRect(rA,TA,G.width,G.height,4),D.fill(),D.stroke();else if(G.type==="circle")D.beginPath(),D.arc(rA+G.width/2,TA+G.height/2,G.width/2,0,2*Math.PI),D.fill(),D.stroke();else if(G.type==="diamond")D.beginPath(),D.moveTo(rA+G.width/2,TA),D.lineTo(rA+G.width,TA+G.height/2),D.lineTo(rA+G.width/2,TA+G.height),D.lineTo(rA,TA+G.height/2),D.closePath(),D.fill(),D.stroke();else if(G.type==="rhombus"){const KA=G.height*.3;D.beginPath(),D.moveTo(rA-KA,TA),D.lineTo(rA+G.width-KA,TA),D.lineTo(rA+G.width+KA,TA+G.height),D.lineTo(rA+KA,TA+G.height),D.closePath(),D.fill(),D.stroke()}else G.type==="oval"&&(D.beginPath(),D.ellipse(rA+G.width/2,TA+G.height/2,G.width/2,G.height/2,0,0,2*Math.PI),D.fill(),D.stroke());D.fillStyle=E.text,D.font="12px Arial",D.textAlign="center",D.textBaseline="middle",D.fillText(G.text,rA+G.width/2,TA+G.height/2)});const k=document.createElement("a");k.download=`${r.name||"flowchart"}.png`,k.href=F.toDataURL("image/png"),k.click()},fA=F=>{const D=T?.id===F.id,q=lA===F.id,xA=L&&wA?.id===F.id;let gA={position:"absolute",left:`${F.x}px`,top:`${F.y}px`,width:`${F.width}px`,height:`${F.height}px`,backgroundColor:D?E.highlight:E.nodeFill,display:"flex",justifyContent:"center",alignItems:"center",color:E.text,cursor:"move",fontSize:"12px",fontWeight:"500",textAlign:"center",wordBreak:"break-word",padding:"8px",boxSizing:"border-box",border:D?`2px solid ${E.nodeStroke}`:xA?"2px solid #f59e0b":"1px solid rgba(255,255,255,0.2)",userSelect:"none",transition:"all 0.2s ease",zIndex:D?1e3:1};return F.type==="circle"||F.type==="oval"?gA.borderRadius="50%":F.type==="diamond"?(gA.clipPath="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",gA.borderRadius="0"):F.type==="rhombus"?(gA.clipPath="polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",gA.borderRadius="0"):gA.borderRadius="8px",s.jsx("div",{style:gA,onMouseDown:w=>ct(w,F),onDoubleClick:()=>ye(F),children:q?s.jsx("input",{type:"text",value:P,onChange:w=>yA(w.target.value),onBlur:GA,onKeyPress:w=>w.key==="Enter"&&GA(),style:{background:"rgba(255,255,255,0.2)",border:"none",color:E.text,textAlign:"center",fontSize:"12px",fontWeight:"500",width:"100%",outline:"none",borderRadius:"4px",padding:"2px"},autoFocus:!0}):F.text},F.id)},DA=F=>{const D=a.find(p=>p.id===F.from),q=a.find(p=>p.id===F.to);if(!D||!q)return null;const xA=LA(D,q),gA=Z?.id===F.id,w=BA===F.id;return s.jsxs("div",{children:[xA.map((p,Q)=>{if(Q===xA.length-1)return null;const j=xA[Q+1],k=Math.sqrt(Math.pow(j.x-p.x,2)+Math.pow(j.y-p.y,2)),G=Math.atan2(j.y-p.y,j.x-p.x)*180/Math.PI;return s.jsx("div",{style:{position:"absolute",left:`${p.x}px`,top:`${p.y-(gA?1.5:1)}px`,width:`${k}px`,height:gA?"3px":"2px",backgroundColor:gA?E.highlight:E.edgeStroke,transformOrigin:"0 50%",transform:`rotate(${G}deg)`,cursor:"pointer",zIndex:gA?10:2,borderRadius:"1px"},onClick:rA=>{rA.stopPropagation(),nA(F),W(null)},onDoubleClick:rA=>{rA.stopPropagation(),YA(F)}},`segment-${Q}`)}),(()=>{const p=xA[xA.length-1],Q=xA[xA.length-2],j=Math.atan2(p.y-Q.y,p.x-Q.x),k=8,G=Math.PI/6,rA={x:p.x-k*Math.cos(j-G),y:p.y-k*Math.sin(j-G)},TA={x:p.x-k*Math.cos(j+G),y:p.y-k*Math.sin(j+G)};return s.jsx("svg",{style:{position:"absolute",left:`${Math.min(p.x,rA.x,TA.x)-2}px`,top:`${Math.min(p.y,rA.y,TA.y)-2}px`,width:`${Math.max(p.x,rA.x,TA.x)-Math.min(p.x,rA.x,TA.x)+4}px`,height:`${Math.max(p.y,rA.y,TA.y)-Math.min(p.y,rA.y,TA.y)+4}px`,pointerEvents:"none",zIndex:gA?11:3},children:s.jsx("polygon",{points:`${p.x-Math.min(p.x,rA.x,TA.x)+2},${p.y-Math.min(p.y,rA.y,TA.y)+2} ${rA.x-Math.min(p.x,rA.x,TA.x)+2},${rA.y-Math.min(p.y,rA.y,TA.y)+2} ${TA.x-Math.min(p.x,rA.x,TA.x)+2},${TA.y-Math.min(p.y,rA.y,TA.y)+2}`,fill:gA?E.highlight:E.edgeStroke})})})(),(F.label||w)&&s.jsx("div",{style:{position:"absolute",left:`${FA(xA).x}px`,top:`${FA(xA).y-12}px`,color:E.text,fontSize:"11px",fontWeight:"600",backgroundColor:E.panel,padding:"4px 8px",borderRadius:"12px",border:`1px solid ${E.border}`,transform:"translate(-50%, -50%)",cursor:"pointer",zIndex:gA?12:4,minWidth:w?"80px":"auto",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},onClick:p=>{p.stopPropagation(),nA(F),W(null)},onDoubleClick:p=>{p.stopPropagation(),YA(F)},children:w?s.jsx("input",{type:"text",value:P,onChange:p=>yA(p.target.value),onBlur:GA,onKeyPress:p=>p.key==="Enter"&&GA(),style:{background:"transparent",border:"none",color:E.text,textAlign:"center",fontSize:"11px",fontWeight:"600",width:"100%",outline:"none"},autoFocus:!0}):F.label})]},F.id)};return s.jsx("div",{style:{minHeight:"100vh",backgroundColor:E.background,color:E.text,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},children:s.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",padding:"24px"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px",padding:"20px",backgroundColor:E.panel,borderRadius:"12px",border:`1px solid ${E.border}`,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[s.jsx("h1",{style:{margin:"0",fontSize:"2rem",fontWeight:"700",background:"linear-gradient(135deg, #646cff, #a855f7)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:r.name}),s.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[s.jsx("div",{style:{display:"flex",gap:"4px",padding:"4px",backgroundColor:E.background,borderRadius:"8px",border:`1px solid ${E.border}`},children:[{key:"dark",label:"🌙",title:"Dark Theme"},{key:"light",label:"☀️",title:"Light Theme"},{key:"blue",label:"🌊",title:"Blue Theme"}].map(({key:F,label:D,title:q})=>s.jsx("button",{onClick:()=>QA(F),title:q,style:{padding:"8px 12px",backgroundColor:pA===F?E.nodeFill:"transparent",color:pA===F?"white":E.text,border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"16px",transition:"all 0.2s",minWidth:"40px"},children:D},F))}),s.jsx("button",{onClick:B,style:{padding:"12px 20px",backgroundColor:E.panel,color:E.text,border:`1px solid ${E.nodeFill}`,borderRadius:"8px",cursor:"pointer",fontSize:"14px",fontWeight:"500",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"8px"},children:"← Back to List"})]})]}),s.jsxs("div",{style:{display:"flex",marginBottom:"24px",backgroundColor:E.panel,borderRadius:"12px",padding:"4px",border:`1px solid ${E.border}`,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[s.jsx("button",{onClick:()=>m("editor"),style:{padding:"12px 24px",border:"none",backgroundColor:h==="editor"?E.nodeFill:"transparent",color:h==="editor"?"white":E.text,cursor:"pointer",fontSize:"14px",fontWeight:"600",borderRadius:"8px",transition:"all 0.2s",flex:1,textAlign:"center"},children:"🎨 Flowchart Editor"}),s.jsx("button",{onClick:()=>{m("json"),u(Y())},style:{padding:"12px 24px",border:"none",backgroundColor:h==="json"?E.nodeFill:"transparent",color:h==="json"?"white":E.text,cursor:"pointer",fontSize:"14px",fontWeight:"600",borderRadius:"8px",transition:"all 0.2s",flex:1,textAlign:"center"},children:"📝 JSON Editor"})]}),h==="editor"?s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px",backgroundColor:E.panel,borderRadius:"12px",border:`1px solid ${E.border}`,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"},children:[s.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[[{tool:"rectangle",icon:"⬜",label:"Process"},{tool:"diamond",icon:"◆",label:"Diamond"},{tool:"rhombus",icon:"🔷",label:"Slanted"},{tool:"circle",icon:"●",label:"Circle"},{tool:"oval",icon:"⬭",label:"Oval"}].map(({tool:F,icon:D,label:q})=>s.jsxs("button",{onClick:()=>y(F),style:{padding:"10px 16px",backgroundColor:b===F?E.nodeFill:E.background,color:b===F?"white":E.text,border:`1px solid ${E.border}`,borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"6px"},children:[s.jsx("span",{style:{fontSize:"16px"},children:D}),q]},F)),s.jsxs("button",{onClick:ut,style:{padding:"10px 16px",backgroundColor:L?E.nodeFill:E.background,color:L?"white":E.text,border:`1px solid ${E.border}`,borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"6px"},children:[s.jsx("span",{style:{fontSize:"16px"},children:"→"}),L?wA?"Select Target":"Select Source":"Connect"]})]}),s.jsxs("div",{style:{display:"flex",gap:"8px"},children:[T&&s.jsx("button",{onClick:ie,style:{padding:"8px 12px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"🗑 Delete Node"}),Z&&s.jsx("button",{onClick:Qe,style:{padding:"8px 12px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"🗑 Delete Edge"})]})]}),s.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center",flexWrap:"wrap"},children:[s.jsx("button",{onClick:AA,style:{padding:"8px 16px",backgroundColor:"#f59e0b",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"📸 Export PNG"}),s.jsx("button",{onClick:()=>navigator.clipboard.writeText(Y()),style:{padding:"8px 16px",backgroundColor:"#a855f7",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"📋 Copy JSON"}),s.jsx("button",{onClick:iA,style:{padding:"8px 16px",backgroundColor:"#10b981",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"📥 Export JSON"})]})]}),(b||L)&&s.jsx("div",{style:{padding:"16px",backgroundColor:"rgba(100, 108, 255, 0.1)",border:`1px solid ${E.nodeFill}`,borderRadius:"8px",color:E.nodeFill,textAlign:"center",fontSize:"14px",fontWeight:"500"},children:L?wA?`🎯 Click on target node to connect from "${wA.text}"`:"🎯 Click on a node to start connection":`🎨 Click on canvas to place a ${b}`}),s.jsxs("div",{ref:C,onClick:Oe,style:{height:"700px",border:`2px dashed ${E.border}`,borderRadius:"12px",backgroundColor:E.background,display:"flex",justifyContent:"center",alignItems:"center",position:"relative",overflow:"hidden",cursor:b?"crosshair":"default",boxShadow:"inset 0 2px 4px rgba(0, 0, 0, 0.1)"},children:[a.length===0&&!b&&s.jsxs("div",{style:{textAlign:"center",color:E.secondaryText,pointerEvents:"none"},children:[s.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎨"}),s.jsx("h3",{style:{margin:"0 0 8px 0",fontWeight:"600"},children:"Start Building Your Flowchart"}),s.jsx("p",{style:{margin:"0",fontSize:"14px"},children:"Select a tool from the toolbar above to begin"})]}),s.jsxs("div",{style:{position:"absolute",transform:`scale(${r.zoom}) translate(${r.pan.x}px, ${r.pan.y}px)`,transformOrigin:"0 0",width:"100%",height:"100%"},children:[l.map(DA),a.map(fA)]})]}),s.jsxs("div",{style:{padding:"16px",backgroundColor:E.panel,borderRadius:"8px",border:`1px solid ${E.border}`,fontSize:"13px",color:E.secondaryText,textAlign:"center",lineHeight:"1.6"},children:["💡 ",s.jsx("strong",{children:"Pro Tips:"})," Single click to select • Double click to edit text • Drag nodes to move • Use Connect tool for arrows • Press Delete to remove selected items • Lines connect to shape edges and avoid bending for aligned nodes"]})]}):s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[s.jsxs("div",{style:{border:`1px solid ${E.border}`,borderRadius:"12px",padding:"20px",backgroundColor:E.panel,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[s.jsx("h3",{style:{marginTop:"0",marginBottom:"16px",color:E.text,fontSize:"1.2rem",fontWeight:"600"},children:"📥 Import JSON"}),s.jsx("textarea",{value:i,onChange:F=>u(F.target.value),placeholder:"Paste your flowchart JSON here...",style:{width:"100%",minHeight:"400px",padding:"16px",border:`1px solid ${E.border}`,borderRadius:"8px",fontFamily:'"Fira Code", "Cascadia Code", "SF Mono", Monaco, "Inconsolata", "Roboto Mono", monospace',fontSize:"13px",lineHeight:"1.5",marginBottom:"16px",backgroundColor:E.background,color:E.text,resize:"vertical",outline:"none",transition:"border-color 0.2s"}}),s.jsxs("div",{style:{display:"flex",gap:"12px"},children:[s.jsx("button",{onClick:uA,style:{padding:"12px 20px",backgroundColor:"#10b981",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",flex:1,fontSize:"14px",fontWeight:"600",transition:"all 0.2s"},children:"📥 Import JSON"}),s.jsx("button",{onClick:()=>v.current.click(),style:{padding:"12px 20px",backgroundColor:E.nodeFill,color:"white",border:"none",borderRadius:"8px",cursor:"pointer",flex:1,fontSize:"14px",fontWeight:"600",transition:"all 0.2s"},children:"📁 Load File"}),s.jsx("input",{type:"file",ref:v,onChange:H,accept:".json",style:{display:"none"}})]})]}),s.jsxs("div",{style:{border:`1px solid ${E.border}`,borderRadius:"12px",padding:"20px",backgroundColor:E.panel,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[s.jsx("h3",{style:{marginTop:"0",marginBottom:"16px",color:E.text,fontSize:"1.2rem",fontWeight:"600"},children:"📤 Current Flowchart JSON"}),s.jsx("pre",{style:{backgroundColor:E.background,padding:"16px",border:`1px solid ${E.border}`,borderRadius:"8px",overflow:"auto",maxHeight:"450px",fontFamily:'"Fira Code", "Cascadia Code", "SF Mono", Monaco, "Inconsolata", "Roboto Mono", monospace',fontSize:"12px",lineHeight:"1.5",color:E.text,whiteSpace:"pre-wrap",wordWrap:"break-word",margin:0},children:Y()})]})]}),dA&&s.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.6)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e4,backdropFilter:"blur(4px)"},children:s.jsxs("div",{style:{backgroundColor:E.panel,padding:"24px",borderRadius:"12px",width:"400px",border:`1px solid ${E.nodeFill}`,boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.3)"},children:[s.jsx("h3",{style:{marginTop:0,marginBottom:"8px",color:E.text,fontSize:"1.3rem",fontWeight:"600"},children:"🏷️ Add Connection Label"}),s.jsx("p",{style:{color:E.secondaryText,marginBottom:"20px",fontSize:"14px",lineHeight:"1.5"},children:'Decision nodes should have labeled connections. Enter a label like "Yes", "No", or a condition:'}),s.jsx("input",{type:"text",value:jA,onChange:F=>SA(F.target.value),placeholder:"e.g., Yes, No, True, False...",style:{width:"100%",padding:"12px",marginBottom:"20px",backgroundColor:E.background,border:`1px solid ${E.border}`,color:E.text,borderRadius:"8px",fontSize:"14px",outline:"none",transition:"border-color 0.2s"},autoFocus:!0,onKeyPress:F=>F.key==="Enter"&&Ft()}),s.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[s.jsx("button",{onClick:()=>{UA(!1),SA(""),sA(null),z(!1),y(null)},style:{padding:"10px 16px",backgroundColor:E.background,color:E.text,border:`1px solid ${E.border}`,borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500",transition:"all 0.2s"},children:"Cancel"}),s.jsx("button",{onClick:Ft,style:{padding:"10px 16px",backgroundColor:E.nodeFill,color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"600",transition:"all 0.2s"},children:"Add Label"})]})]})})]})})},Jw=({ganttCharts:r,onCreateGanttChart:a,onLoadGanttChart:l,onDeleteGanttChart:i})=>{const[u,d]=V.useState(!1);return s.jsxs("div",{className:"gantt-main",children:[s.jsxs("div",{className:"welcome-screen",children:[s.jsx("div",{className:"welcome-icon",children:s.jsx(Ym,{size:48})}),s.jsx("h2",{children:"Gantt Chart Planner"}),s.jsx("p",{children:"Plan and visualize project timelines with interactive Gantt charts"}),s.jsx("div",{className:"action-buttons",children:s.jsxs("button",{onClick:()=>d(!0),className:"primary-btn",children:[s.jsx(et,{size:16})," New Gantt Chart"]})}),r.length>0&&s.jsxs("div",{className:"gantt-list",children:[s.jsx("h3",{children:"Your Gantt Charts"}),r.map(f=>s.jsxs("div",{className:"gantt-card",onClick:()=>l(f),children:[s.jsxs("div",{className:"gantt-card-content",children:[s.jsx("div",{className:"gantt-card-name",children:f.name}),s.jsxs("div",{className:"gantt-card-meta",children:[s.jsxs("span",{children:[s.jsx(Vm,{size:14})," ",new Date(f.createdAt).toLocaleDateString()]}),s.jsxs("span",{children:[f.tasks?.length||0," tasks"]})]})]}),s.jsxs("div",{className:"gantt-card-actions",children:[s.jsx("button",{onClick:B=>{B.stopPropagation(),l(f)},className:"open-btn",children:s.jsx(wa,{size:16})}),s.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this Gantt chart?")&&i(f.id)},className:"delete-btn",children:s.jsx(ve,{size:16})})]})]},f.id))]})]}),u&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-content",children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{children:"Create New Gantt Chart"}),s.jsx("button",{onClick:()=>d(!1),className:"close-btn",children:"×"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Project Name"}),s.jsx("input",{type:"text",placeholder:"e.g., Website Redesign Project",id:"ganttName",autoFocus:!0})]}),s.jsxs("div",{className:"modal-footer",children:[s.jsx("button",{onClick:()=>d(!1),className:"cancel-btn",children:"Cancel"}),s.jsx("button",{onClick:()=>{const f=document.getElementById("ganttName").value;f.trim()&&(a(f),d(!1))},className:"create-btn",children:"Create Gantt Chart"})]})]})}),s.jsx("style",{jsx:!0,children:`
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
***************************************************************************** */var Hu=function(r,a){return Hu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,i){l.__proto__=i}||function(l,i){for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(l[u]=i[u])},Hu(r,a)};function Vt(r,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");Hu(r,a);function l(){this.constructor=r}r.prototype=a===null?Object.create(a):(l.prototype=a.prototype,new l)}var Su=function(){return Su=Object.assign||function(a){for(var l,i=1,u=arguments.length;i<u;i++){l=arguments[i];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(a[d]=l[d])}return a},Su.apply(this,arguments)};function ot(r,a,l,i){function u(d){return d instanceof l?d:new l(function(f){f(d)})}return new(l||(l=Promise))(function(d,f){function B(b){try{m(i.next(b))}catch(y){f(y)}}function h(b){try{m(i.throw(b))}catch(y){f(y)}}function m(b){b.done?d(b.value):u(b.value).then(B,h)}m((i=i.apply(r,[])).next())})}function rt(r,a){var l={label:0,sent:function(){if(d[0]&1)throw d[1];return d[1]},trys:[],ops:[]},i,u,d,f;return f={next:B(0),throw:B(1),return:B(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function B(m){return function(b){return h([m,b])}}function h(m){if(i)throw new TypeError("Generator is already executing.");for(;l;)try{if(i=1,u&&(d=m[0]&2?u.return:m[0]?u.throw||((d=u.return)&&d.call(u),0):u.next)&&!(d=d.call(u,m[1])).done)return d;switch(u=0,d&&(m=[m[0]&2,d.value]),m[0]){case 0:case 1:d=m;break;case 4:return l.label++,{value:m[1],done:!1};case 5:l.label++,u=m[1],m=[0];continue;case 7:m=l.ops.pop(),l.trys.pop();continue;default:if(d=l.trys,!(d=d.length>0&&d[d.length-1])&&(m[0]===6||m[0]===2)){l=0;continue}if(m[0]===3&&(!d||m[1]>d[0]&&m[1]<d[3])){l.label=m[1];break}if(m[0]===6&&l.label<d[1]){l.label=d[1],d=m;break}if(d&&l.label<d[2]){l.label=d[2],l.ops.push(m);break}d[2]&&l.ops.pop(),l.trys.pop();continue}m=a.call(r,l)}catch(b){m=[6,b],u=0}finally{i=d=0}if(m[0]&5)throw m[1];return{value:m[0]?m[1]:void 0,done:!0}}}function Zl(r,a,l){if(arguments.length===2)for(var i=0,u=a.length,d;i<u;i++)(d||!(i in a))&&(d||(d=Array.prototype.slice.call(a,0,i)),d[i]=a[i]);return r.concat(d||a)}var wn=function(){function r(a,l,i,u){this.left=a,this.top=l,this.width=i,this.height=u}return r.prototype.add=function(a,l,i,u){return new r(this.left+a,this.top+l,this.width+i,this.height+u)},r.fromClientRect=function(a,l){return new r(l.left+a.windowBounds.left,l.top+a.windowBounds.top,l.width,l.height)},r.fromDOMRectList=function(a,l){var i=Array.from(l).find(function(u){return u.width!==0});return i?new r(i.left+a.windowBounds.left,i.top+a.windowBounds.top,i.width,i.height):r.EMPTY},r.EMPTY=new r(0,0,0,0),r}(),Ms=function(r,a){return wn.fromClientRect(r,a.getBoundingClientRect())},Zw=function(r){var a=r.body,l=r.documentElement;if(!a||!l)throw new Error("Unable to get document size");var i=Math.max(Math.max(a.scrollWidth,l.scrollWidth),Math.max(a.offsetWidth,l.offsetWidth),Math.max(a.clientWidth,l.clientWidth)),u=Math.max(Math.max(a.scrollHeight,l.scrollHeight),Math.max(a.offsetHeight,l.offsetHeight),Math.max(a.clientHeight,l.clientHeight));return new wn(0,0,i,u)},Is=function(r){for(var a=[],l=0,i=r.length;l<i;){var u=r.charCodeAt(l++);if(u>=55296&&u<=56319&&l<i){var d=r.charCodeAt(l++);(d&64512)===56320?a.push(((u&1023)<<10)+(d&1023)+65536):(a.push(u),l--)}else a.push(u)}return a},Ie=function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];if(String.fromCodePoint)return String.fromCodePoint.apply(String,r);var l=r.length;if(!l)return"";for(var i=[],u=-1,d="";++u<l;){var f=r[u];f<=65535?i.push(f):(f-=65536,i.push((f>>10)+55296,f%1024+56320)),(u+1===l||i.length>16384)&&(d+=String.fromCharCode.apply(String,i),i.length=0)}return d},aB="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",qw=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ql=0;ql<aB.length;ql++)qw[aB.charCodeAt(ql)]=ql;var rB="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",wi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Wl=0;Wl<rB.length;Wl++)wi[rB.charCodeAt(Wl)]=Wl;var Ww=function(r){var a=r.length*.75,l=r.length,i,u=0,d,f,B,h;r[r.length-1]==="="&&(a--,r[r.length-2]==="="&&a--);var m=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(a):new Array(a),b=Array.isArray(m)?m:new Uint8Array(m);for(i=0;i<l;i+=4)d=wi[r.charCodeAt(i)],f=wi[r.charCodeAt(i+1)],B=wi[r.charCodeAt(i+2)],h=wi[r.charCodeAt(i+3)],b[u++]=d<<2|f>>4,b[u++]=(f&15)<<4|B>>2,b[u++]=(B&3)<<6|h&63;return m},Pw=function(r){for(var a=r.length,l=[],i=0;i<a;i+=2)l.push(r[i+1]<<8|r[i]);return l},$w=function(r){for(var a=r.length,l=[],i=0;i<a;i+=4)l.push(r[i+3]<<24|r[i+2]<<16|r[i+1]<<8|r[i]);return l},xa=5,td=11,iu=2,Ab=td-xa,sp=65536>>xa,eb=1<<xa,lu=eb-1,tb=1024>>xa,nb=sp+tb,ab=nb,rb=32,ib=ab+rb,lb=65536>>td,sb=1<<Ab,ob=sb-1,iB=function(r,a,l){return r.slice?r.slice(a,l):new Uint16Array(Array.prototype.slice.call(r,a,l))},cb=function(r,a,l){return r.slice?r.slice(a,l):new Uint32Array(Array.prototype.slice.call(r,a,l))},ub=function(r,a){var l=Ww(r),i=Array.isArray(l)?$w(l):new Uint32Array(l),u=Array.isArray(l)?Pw(l):new Uint16Array(l),d=24,f=iB(u,d/2,i[4]/2),B=i[5]===2?iB(u,(d+i[4])/2):cb(i,Math.ceil((d+i[4])/4));return new db(i[0],i[1],i[2],i[3],f,B)},db=function(){function r(a,l,i,u,d,f){this.initialValue=a,this.errorValue=l,this.highStart=i,this.highValueIndex=u,this.index=d,this.data=f}return r.prototype.get=function(a){var l;if(a>=0){if(a<55296||a>56319&&a<=65535)return l=this.index[a>>xa],l=(l<<iu)+(a&lu),this.data[l];if(a<=65535)return l=this.index[sp+(a-55296>>xa)],l=(l<<iu)+(a&lu),this.data[l];if(a<this.highStart)return l=ib-lb+(a>>td),l=this.index[l],l+=a>>xa&ob,l=this.index[l],l=(l<<iu)+(a&lu),this.data[l];if(a<=1114111)return this.data[this.highValueIndex]}return this.errorValue},r}(),lB="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fb=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Pl=0;Pl<lB.length;Pl++)fb[lB.charCodeAt(Pl)]=Pl;var gb="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",sB=50,hb=1,op=2,cp=3,Bb=4,pb=5,oB=7,up=8,cB=9,Xn=10,Du=11,uB=12,Tu=13,xb=14,bi=15,ju=16,$l=17,gi=18,mb=19,dB=20,Nu=21,hi=22,su=23,rr=24,Ut=25,Ci=26,yi=27,ir=28,wb=29,Ba=30,bb=31,As=32,es=33,Mu=34,Iu=35,Lu=36,Ti=37,ku=38,xs=39,ms=40,ou=41,dp=42,Cb=43,yb=[9001,65288],fp="!",re="×",ts="÷",Ku=ub(gb),pn=[Ba,Lu],Ou=[hb,op,cp,pb],gp=[Xn,up],fB=[yi,Ci],vb=Ou.concat(gp),gB=[ku,xs,ms,Mu,Iu],Qb=[bi,Tu],Ub=function(r,a){a===void 0&&(a="strict");var l=[],i=[],u=[];return r.forEach(function(d,f){var B=Ku.get(d);if(B>sB?(u.push(!0),B-=sB):u.push(!1),["normal","auto","loose"].indexOf(a)!==-1&&[8208,8211,12316,12448].indexOf(d)!==-1)return i.push(f),l.push(ju);if(B===Bb||B===Du){if(f===0)return i.push(f),l.push(Ba);var h=l[f-1];return vb.indexOf(h)===-1?(i.push(i[f-1]),l.push(h)):(i.push(f),l.push(Ba))}if(i.push(f),B===bb)return l.push(a==="strict"?Nu:Ti);if(B===dp||B===wb)return l.push(Ba);if(B===Cb)return d>=131072&&d<=196605||d>=196608&&d<=262141?l.push(Ti):l.push(Ba);l.push(B)}),[i,l,u]},cu=function(r,a,l,i){var u=i[l];if(Array.isArray(r)?r.indexOf(u)!==-1:r===u)for(var d=l;d<=i.length;){d++;var f=i[d];if(f===a)return!0;if(f!==Xn)break}if(u===Xn)for(var d=l;d>0;){d--;var B=i[d];if(Array.isArray(r)?r.indexOf(B)!==-1:r===B)for(var h=l;h<=i.length;){h++;var f=i[h];if(f===a)return!0;if(f!==Xn)break}if(B!==Xn)break}return!1},hB=function(r,a){for(var l=r;l>=0;){var i=a[l];if(i===Xn)l--;else return i}return 0},Fb=function(r,a,l,i,u){if(l[i]===0)return re;var d=i-1;if(Array.isArray(u)&&u[d]===!0)return re;var f=d-1,B=d+1,h=a[d],m=f>=0?a[f]:0,b=a[B];if(h===op&&b===cp)return re;if(Ou.indexOf(h)!==-1)return fp;if(Ou.indexOf(b)!==-1||gp.indexOf(b)!==-1)return re;if(hB(d,a)===up)return ts;if(Ku.get(r[d])===Du||(h===As||h===es)&&Ku.get(r[B])===Du||h===oB||b===oB||h===cB||[Xn,Tu,bi].indexOf(h)===-1&&b===cB||[$l,gi,mb,rr,ir].indexOf(b)!==-1||hB(d,a)===hi||cu(su,hi,d,a)||cu([$l,gi],Nu,d,a)||cu(uB,uB,d,a))return re;if(h===Xn)return ts;if(h===su||b===su)return re;if(b===ju||h===ju)return ts;if([Tu,bi,Nu].indexOf(b)!==-1||h===xb||m===Lu&&Qb.indexOf(h)!==-1||h===ir&&b===Lu||b===dB||pn.indexOf(b)!==-1&&h===Ut||pn.indexOf(h)!==-1&&b===Ut||h===yi&&[Ti,As,es].indexOf(b)!==-1||[Ti,As,es].indexOf(h)!==-1&&b===Ci||pn.indexOf(h)!==-1&&fB.indexOf(b)!==-1||fB.indexOf(h)!==-1&&pn.indexOf(b)!==-1||[yi,Ci].indexOf(h)!==-1&&(b===Ut||[hi,bi].indexOf(b)!==-1&&a[B+1]===Ut)||[hi,bi].indexOf(h)!==-1&&b===Ut||h===Ut&&[Ut,ir,rr].indexOf(b)!==-1)return re;if([Ut,ir,rr,$l,gi].indexOf(b)!==-1)for(var y=d;y>=0;){var T=a[y];if(T===Ut)return re;if([ir,rr].indexOf(T)!==-1)y--;else break}if([yi,Ci].indexOf(b)!==-1)for(var y=[$l,gi].indexOf(h)!==-1?f:d;y>=0;){var T=a[y];if(T===Ut)return re;if([ir,rr].indexOf(T)!==-1)y--;else break}if(ku===h&&[ku,xs,Mu,Iu].indexOf(b)!==-1||[xs,Mu].indexOf(h)!==-1&&[xs,ms].indexOf(b)!==-1||[ms,Iu].indexOf(h)!==-1&&b===ms||gB.indexOf(h)!==-1&&[dB,Ci].indexOf(b)!==-1||gB.indexOf(b)!==-1&&h===yi||pn.indexOf(h)!==-1&&pn.indexOf(b)!==-1||h===rr&&pn.indexOf(b)!==-1||pn.concat(Ut).indexOf(h)!==-1&&b===hi&&yb.indexOf(r[B])===-1||pn.concat(Ut).indexOf(b)!==-1&&h===gi)return re;if(h===ou&&b===ou){for(var W=l[d],Z=1;W>0&&(W--,a[W]===ou);)Z++;if(Z%2!==0)return re}return h===As&&b===es?re:ts},Eb=function(r,a){a||(a={lineBreak:"normal",wordBreak:"normal"});var l=Ub(r,a.lineBreak),i=l[0],u=l[1],d=l[2];(a.wordBreak==="break-all"||a.wordBreak==="break-word")&&(u=u.map(function(B){return[Ut,Ba,dp].indexOf(B)!==-1?Ti:B}));var f=a.wordBreak==="keep-all"?d.map(function(B,h){return B&&r[h]>=19968&&r[h]<=40959}):void 0;return[i,u,f]},Hb=function(){function r(a,l,i,u){this.codePoints=a,this.required=l===fp,this.start=i,this.end=u}return r.prototype.slice=function(){return Ie.apply(void 0,this.codePoints.slice(this.start,this.end))},r}(),Sb=function(r,a){var l=Is(r),i=Eb(l,a),u=i[0],d=i[1],f=i[2],B=l.length,h=0,m=0;return{next:function(){if(m>=B)return{done:!0,value:null};for(var b=re;m<B&&(b=Fb(l,d,u,++m,f))===re;);if(b!==re||m===B){var y=new Hb(l,b,h,m);return h=m,{value:y,done:!1}}return{done:!0,value:null}}}},Db=1,Tb=2,Ii=4,BB=8,Cs=10,pB=47,Fi=92,jb=9,Nb=32,ns=34,Bi=61,Mb=35,Ib=36,Lb=37,as=39,rs=40,pi=41,kb=95,xt=45,Kb=33,Ob=60,Rb=62,zb=64,Gb=91,_b=93,Vb=61,Xb=123,is=63,Yb=125,xB=124,Jb=126,Zb=128,mB=65533,uu=42,pa=43,qb=44,Wb=58,Pb=59,ji=46,$b=0,AC=8,eC=11,tC=14,nC=31,aC=127,Pt=-1,hp=48,Bp=97,pp=101,rC=102,iC=117,lC=122,xp=65,mp=69,wp=70,sC=85,oC=90,it=function(r){return r>=hp&&r<=57},cC=function(r){return r>=55296&&r<=57343},lr=function(r){return it(r)||r>=xp&&r<=wp||r>=Bp&&r<=rC},uC=function(r){return r>=Bp&&r<=lC},dC=function(r){return r>=xp&&r<=oC},fC=function(r){return uC(r)||dC(r)},gC=function(r){return r>=Zb},ls=function(r){return r===Cs||r===jb||r===Nb},ys=function(r){return fC(r)||gC(r)||r===kb},wB=function(r){return ys(r)||it(r)||r===xt},hC=function(r){return r>=$b&&r<=AC||r===eC||r>=tC&&r<=nC||r===aC},Vn=function(r,a){return r!==Fi?!1:a!==Cs},ss=function(r,a,l){return r===xt?ys(a)||Vn(a,l):ys(r)?!0:!!(r===Fi&&Vn(r,a))},du=function(r,a,l){return r===pa||r===xt?it(a)?!0:a===ji&&it(l):it(r===ji?a:r)},BC=function(r){var a=0,l=1;(r[a]===pa||r[a]===xt)&&(r[a]===xt&&(l=-1),a++);for(var i=[];it(r[a]);)i.push(r[a++]);var u=i.length?parseInt(Ie.apply(void 0,i),10):0;r[a]===ji&&a++;for(var d=[];it(r[a]);)d.push(r[a++]);var f=d.length,B=f?parseInt(Ie.apply(void 0,d),10):0;(r[a]===mp||r[a]===pp)&&a++;var h=1;(r[a]===pa||r[a]===xt)&&(r[a]===xt&&(h=-1),a++);for(var m=[];it(r[a]);)m.push(r[a++]);var b=m.length?parseInt(Ie.apply(void 0,m),10):0;return l*(u+B*Math.pow(10,-f))*Math.pow(10,h*b)},pC={type:2},xC={type:3},mC={type:4},wC={type:13},bC={type:8},CC={type:21},yC={type:9},vC={type:10},QC={type:11},UC={type:12},FC={type:14},os={type:23},EC={type:1},HC={type:25},SC={type:24},DC={type:26},TC={type:27},jC={type:28},NC={type:29},MC={type:31},Ru={type:32},bp=function(){function r(){this._value=[]}return r.prototype.write=function(a){this._value=this._value.concat(Is(a))},r.prototype.read=function(){for(var a=[],l=this.consumeToken();l!==Ru;)a.push(l),l=this.consumeToken();return a},r.prototype.consumeToken=function(){var a=this.consumeCodePoint();switch(a){case ns:return this.consumeStringToken(ns);case Mb:var l=this.peekCodePoint(0),i=this.peekCodePoint(1),u=this.peekCodePoint(2);if(wB(l)||Vn(i,u)){var d=ss(l,i,u)?Tb:Db,f=this.consumeName();return{type:5,value:f,flags:d}}break;case Ib:if(this.peekCodePoint(0)===Bi)return this.consumeCodePoint(),wC;break;case as:return this.consumeStringToken(as);case rs:return pC;case pi:return xC;case uu:if(this.peekCodePoint(0)===Bi)return this.consumeCodePoint(),FC;break;case pa:if(du(a,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(a),this.consumeNumericToken();break;case qb:return mC;case xt:var B=a,h=this.peekCodePoint(0),m=this.peekCodePoint(1);if(du(B,h,m))return this.reconsumeCodePoint(a),this.consumeNumericToken();if(ss(B,h,m))return this.reconsumeCodePoint(a),this.consumeIdentLikeToken();if(h===xt&&m===Rb)return this.consumeCodePoint(),this.consumeCodePoint(),SC;break;case ji:if(du(a,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(a),this.consumeNumericToken();break;case pB:if(this.peekCodePoint(0)===uu)for(this.consumeCodePoint();;){var b=this.consumeCodePoint();if(b===uu&&(b=this.consumeCodePoint(),b===pB))return this.consumeToken();if(b===Pt)return this.consumeToken()}break;case Wb:return DC;case Pb:return TC;case Ob:if(this.peekCodePoint(0)===Kb&&this.peekCodePoint(1)===xt&&this.peekCodePoint(2)===xt)return this.consumeCodePoint(),this.consumeCodePoint(),HC;break;case zb:var y=this.peekCodePoint(0),T=this.peekCodePoint(1),W=this.peekCodePoint(2);if(ss(y,T,W)){var f=this.consumeName();return{type:7,value:f}}break;case Gb:return jC;case Fi:if(Vn(a,this.peekCodePoint(0)))return this.reconsumeCodePoint(a),this.consumeIdentLikeToken();break;case _b:return NC;case Vb:if(this.peekCodePoint(0)===Bi)return this.consumeCodePoint(),bC;break;case Xb:return QC;case Yb:return UC;case iC:case sC:var Z=this.peekCodePoint(0),nA=this.peekCodePoint(1);return Z===pa&&(lr(nA)||nA===is)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(a),this.consumeIdentLikeToken();case xB:if(this.peekCodePoint(0)===Bi)return this.consumeCodePoint(),yC;if(this.peekCodePoint(0)===xB)return this.consumeCodePoint(),CC;break;case Jb:if(this.peekCodePoint(0)===Bi)return this.consumeCodePoint(),vC;break;case Pt:return Ru}return ls(a)?(this.consumeWhiteSpace(),MC):it(a)?(this.reconsumeCodePoint(a),this.consumeNumericToken()):ys(a)?(this.reconsumeCodePoint(a),this.consumeIdentLikeToken()):{type:6,value:Ie(a)}},r.prototype.consumeCodePoint=function(){var a=this._value.shift();return typeof a>"u"?-1:a},r.prototype.reconsumeCodePoint=function(a){this._value.unshift(a)},r.prototype.peekCodePoint=function(a){return a>=this._value.length?-1:this._value[a]},r.prototype.consumeUnicodeRangeToken=function(){for(var a=[],l=this.consumeCodePoint();lr(l)&&a.length<6;)a.push(l),l=this.consumeCodePoint();for(var i=!1;l===is&&a.length<6;)a.push(l),l=this.consumeCodePoint(),i=!0;if(i){var u=parseInt(Ie.apply(void 0,a.map(function(h){return h===is?hp:h})),16),d=parseInt(Ie.apply(void 0,a.map(function(h){return h===is?wp:h})),16);return{type:30,start:u,end:d}}var f=parseInt(Ie.apply(void 0,a),16);if(this.peekCodePoint(0)===xt&&lr(this.peekCodePoint(1))){this.consumeCodePoint(),l=this.consumeCodePoint();for(var B=[];lr(l)&&B.length<6;)B.push(l),l=this.consumeCodePoint();var d=parseInt(Ie.apply(void 0,B),16);return{type:30,start:f,end:d}}else return{type:30,start:f,end:f}},r.prototype.consumeIdentLikeToken=function(){var a=this.consumeName();return a.toLowerCase()==="url"&&this.peekCodePoint(0)===rs?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===rs?(this.consumeCodePoint(),{type:19,value:a}):{type:20,value:a}},r.prototype.consumeUrlToken=function(){var a=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===Pt)return{type:22,value:""};var l=this.peekCodePoint(0);if(l===as||l===ns){var i=this.consumeStringToken(this.consumeCodePoint());return i.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===Pt||this.peekCodePoint(0)===pi)?(this.consumeCodePoint(),{type:22,value:i.value}):(this.consumeBadUrlRemnants(),os)}for(;;){var u=this.consumeCodePoint();if(u===Pt||u===pi)return{type:22,value:Ie.apply(void 0,a)};if(ls(u))return this.consumeWhiteSpace(),this.peekCodePoint(0)===Pt||this.peekCodePoint(0)===pi?(this.consumeCodePoint(),{type:22,value:Ie.apply(void 0,a)}):(this.consumeBadUrlRemnants(),os);if(u===ns||u===as||u===rs||hC(u))return this.consumeBadUrlRemnants(),os;if(u===Fi)if(Vn(u,this.peekCodePoint(0)))a.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),os;else a.push(u)}},r.prototype.consumeWhiteSpace=function(){for(;ls(this.peekCodePoint(0));)this.consumeCodePoint()},r.prototype.consumeBadUrlRemnants=function(){for(;;){var a=this.consumeCodePoint();if(a===pi||a===Pt)return;Vn(a,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},r.prototype.consumeStringSlice=function(a){for(var l=5e4,i="";a>0;){var u=Math.min(l,a);i+=Ie.apply(void 0,this._value.splice(0,u)),a-=u}return this._value.shift(),i},r.prototype.consumeStringToken=function(a){var l="",i=0;do{var u=this._value[i];if(u===Pt||u===void 0||u===a)return l+=this.consumeStringSlice(i),{type:0,value:l};if(u===Cs)return this._value.splice(0,i),EC;if(u===Fi){var d=this._value[i+1];d!==Pt&&d!==void 0&&(d===Cs?(l+=this.consumeStringSlice(i),i=-1,this._value.shift()):Vn(u,d)&&(l+=this.consumeStringSlice(i),l+=Ie(this.consumeEscapedCodePoint()),i=-1))}i++}while(!0)},r.prototype.consumeNumber=function(){var a=[],l=Ii,i=this.peekCodePoint(0);for((i===pa||i===xt)&&a.push(this.consumeCodePoint());it(this.peekCodePoint(0));)a.push(this.consumeCodePoint());i=this.peekCodePoint(0);var u=this.peekCodePoint(1);if(i===ji&&it(u))for(a.push(this.consumeCodePoint(),this.consumeCodePoint()),l=BB;it(this.peekCodePoint(0));)a.push(this.consumeCodePoint());i=this.peekCodePoint(0),u=this.peekCodePoint(1);var d=this.peekCodePoint(2);if((i===mp||i===pp)&&((u===pa||u===xt)&&it(d)||it(u)))for(a.push(this.consumeCodePoint(),this.consumeCodePoint()),l=BB;it(this.peekCodePoint(0));)a.push(this.consumeCodePoint());return[BC(a),l]},r.prototype.consumeNumericToken=function(){var a=this.consumeNumber(),l=a[0],i=a[1],u=this.peekCodePoint(0),d=this.peekCodePoint(1),f=this.peekCodePoint(2);if(ss(u,d,f)){var B=this.consumeName();return{type:15,number:l,flags:i,unit:B}}return u===Lb?(this.consumeCodePoint(),{type:16,number:l,flags:i}):{type:17,number:l,flags:i}},r.prototype.consumeEscapedCodePoint=function(){var a=this.consumeCodePoint();if(lr(a)){for(var l=Ie(a);lr(this.peekCodePoint(0))&&l.length<6;)l+=Ie(this.consumeCodePoint());ls(this.peekCodePoint(0))&&this.consumeCodePoint();var i=parseInt(l,16);return i===0||cC(i)||i>1114111?mB:i}return a===Pt?mB:a},r.prototype.consumeName=function(){for(var a="";;){var l=this.consumeCodePoint();if(wB(l))a+=Ie(l);else if(Vn(l,this.peekCodePoint(0)))a+=Ie(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(l),a}},r}(),Cp=function(){function r(a){this._tokens=a}return r.create=function(a){var l=new bp;return l.write(a),new r(l.read())},r.parseValue=function(a){return r.create(a).parseComponentValue()},r.parseValues=function(a){return r.create(a).parseComponentValues()},r.prototype.parseComponentValue=function(){for(var a=this.consumeToken();a.type===31;)a=this.consumeToken();if(a.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(a);var l=this.consumeComponentValue();do a=this.consumeToken();while(a.type===31);if(a.type===32)return l;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},r.prototype.parseComponentValues=function(){for(var a=[];;){var l=this.consumeComponentValue();if(l.type===32)return a;a.push(l),a.push()}},r.prototype.consumeComponentValue=function(){var a=this.consumeToken();switch(a.type){case 11:case 28:case 2:return this.consumeSimpleBlock(a.type);case 19:return this.consumeFunction(a)}return a},r.prototype.consumeSimpleBlock=function(a){for(var l={type:a,values:[]},i=this.consumeToken();;){if(i.type===32||LC(i,a))return l;this.reconsumeToken(i),l.values.push(this.consumeComponentValue()),i=this.consumeToken()}},r.prototype.consumeFunction=function(a){for(var l={name:a.value,values:[],type:18};;){var i=this.consumeToken();if(i.type===32||i.type===3)return l;this.reconsumeToken(i),l.values.push(this.consumeComponentValue())}},r.prototype.consumeToken=function(){var a=this._tokens.shift();return typeof a>"u"?Ru:a},r.prototype.reconsumeToken=function(a){this._tokens.unshift(a)},r}(),Li=function(r){return r.type===15},xr=function(r){return r.type===17},xe=function(r){return r.type===20},IC=function(r){return r.type===0},zu=function(r,a){return xe(r)&&r.value===a},yp=function(r){return r.type!==31},Br=function(r){return r.type!==31&&r.type!==4},$t=function(r){var a=[],l=[];return r.forEach(function(i){if(i.type===4){if(l.length===0)throw new Error("Error parsing function args, zero tokens for arg");a.push(l),l=[];return}i.type!==31&&l.push(i)}),l.length&&a.push(l),a},LC=function(r,a){return a===11&&r.type===12||a===28&&r.type===29?!0:a===2&&r.type===3},Wn=function(r){return r.type===17||r.type===15},Ke=function(r){return r.type===16||Wn(r)},vp=function(r){return r.length>1?[r[0],r[1]]:[r[0]]},At={type:17,number:0,flags:Ii},nd={type:16,number:50,flags:Ii},Yn={type:16,number:100,flags:Ii},vi=function(r,a,l){var i=r[0],u=r[1];return[Ce(i,a),Ce(typeof u<"u"?u:i,l)]},Ce=function(r,a){if(r.type===16)return r.number/100*a;if(Li(r))switch(r.unit){case"rem":case"em":return 16*r.number;case"px":default:return r.number}return r.number},Qp="deg",Up="grad",Fp="rad",Ep="turn",Ls={name:"angle",parse:function(r,a){if(a.type===15)switch(a.unit){case Qp:return Math.PI*a.number/180;case Up:return Math.PI/200*a.number;case Fp:return a.number;case Ep:return Math.PI*2*a.number}throw new Error("Unsupported angle type")}},Hp=function(r){return r.type===15&&(r.unit===Qp||r.unit===Up||r.unit===Fp||r.unit===Ep)},Sp=function(r){var a=r.filter(xe).map(function(l){return l.value}).join(" ");switch(a){case"to bottom right":case"to right bottom":case"left top":case"top left":return[At,At];case"to top":case"bottom":return Kt(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[At,Yn];case"to right":case"left":return Kt(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[Yn,Yn];case"to bottom":case"top":return Kt(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[Yn,At];case"to left":case"right":return Kt(270)}return 0},Kt=function(r){return Math.PI*r/180},Zn={name:"color",parse:function(r,a){if(a.type===18){var l=kC[a.name];if(typeof l>"u")throw new Error('Attempting to parse an unsupported color function "'+a.name+'"');return l(r,a.values)}if(a.type===5){if(a.value.length===3){var i=a.value.substring(0,1),u=a.value.substring(1,2),d=a.value.substring(2,3);return Jn(parseInt(i+i,16),parseInt(u+u,16),parseInt(d+d,16),1)}if(a.value.length===4){var i=a.value.substring(0,1),u=a.value.substring(1,2),d=a.value.substring(2,3),f=a.value.substring(3,4);return Jn(parseInt(i+i,16),parseInt(u+u,16),parseInt(d+d,16),parseInt(f+f,16)/255)}if(a.value.length===6){var i=a.value.substring(0,2),u=a.value.substring(2,4),d=a.value.substring(4,6);return Jn(parseInt(i,16),parseInt(u,16),parseInt(d,16),1)}if(a.value.length===8){var i=a.value.substring(0,2),u=a.value.substring(2,4),d=a.value.substring(4,6),f=a.value.substring(6,8);return Jn(parseInt(i,16),parseInt(u,16),parseInt(d,16),parseInt(f,16)/255)}}if(a.type===20){var B=mn[a.value.toUpperCase()];if(typeof B<"u")return B}return mn.TRANSPARENT}},qn=function(r){return(255&r)===0},Ze=function(r){var a=255&r,l=255&r>>8,i=255&r>>16,u=255&r>>24;return a<255?"rgba("+u+","+i+","+l+","+a/255+")":"rgb("+u+","+i+","+l+")"},Jn=function(r,a,l,i){return(r<<24|a<<16|l<<8|Math.round(i*255)<<0)>>>0},bB=function(r,a){if(r.type===17)return r.number;if(r.type===16){var l=a===3?1:255;return a===3?r.number/100*l:Math.round(r.number/100*l)}return 0},CB=function(r,a){var l=a.filter(Br);if(l.length===3){var i=l.map(bB),u=i[0],d=i[1],f=i[2];return Jn(u,d,f,1)}if(l.length===4){var B=l.map(bB),u=B[0],d=B[1],f=B[2],h=B[3];return Jn(u,d,f,h)}return 0};function fu(r,a,l){return l<0&&(l+=1),l>=1&&(l-=1),l<1/6?(a-r)*l*6+r:l<1/2?a:l<2/3?(a-r)*6*(2/3-l)+r:r}var yB=function(r,a){var l=a.filter(Br),i=l[0],u=l[1],d=l[2],f=l[3],B=(i.type===17?Kt(i.number):Ls.parse(r,i))/(Math.PI*2),h=Ke(u)?u.number/100:0,m=Ke(d)?d.number/100:0,b=typeof f<"u"&&Ke(f)?Ce(f,1):1;if(h===0)return Jn(m*255,m*255,m*255,1);var y=m<=.5?m*(h+1):m+h-m*h,T=m*2-y,W=fu(T,y,B+1/3),Z=fu(T,y,B),nA=fu(T,y,B-1/3);return Jn(W*255,Z*255,nA*255,b)},kC={hsl:yB,hsla:yB,rgb:CB,rgba:CB},Ei=function(r,a){return Zn.parse(r,Cp.create(a).parseComponentValue())},mn={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},KC={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(r,a){return a.map(function(l){if(xe(l))switch(l.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},OC={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},ks=function(r,a){var l=Zn.parse(r,a[0]),i=a[1];return i&&Ke(i)?{color:l,stop:i}:{color:l,stop:null}},vB=function(r,a){var l=r[0],i=r[r.length-1];l.stop===null&&(l.stop=At),i.stop===null&&(i.stop=Yn);for(var u=[],d=0,f=0;f<r.length;f++){var B=r[f].stop;if(B!==null){var h=Ce(B,a);h>d?u.push(h):u.push(d),d=h}else u.push(null)}for(var m=null,f=0;f<u.length;f++){var b=u[f];if(b===null)m===null&&(m=f);else if(m!==null){for(var y=f-m,T=u[m-1],W=(b-T)/(y+1),Z=1;Z<=y;Z++)u[m+Z-1]=W*Z;m=null}}return r.map(function(nA,hA){var oA=nA.color;return{color:oA,stop:Math.max(Math.min(1,u[hA]/a),0)}})},RC=function(r,a,l){var i=a/2,u=l/2,d=Ce(r[0],a)-i,f=u-Ce(r[1],l);return(Math.atan2(f,d)+Math.PI*2)%(Math.PI*2)},zC=function(r,a,l){var i=typeof r=="number"?r:RC(r,a,l),u=Math.abs(a*Math.sin(i))+Math.abs(l*Math.cos(i)),d=a/2,f=l/2,B=u/2,h=Math.sin(i-Math.PI/2)*B,m=Math.cos(i-Math.PI/2)*B;return[u,d-m,d+m,f-h,f+h]},_t=function(r,a){return Math.sqrt(r*r+a*a)},QB=function(r,a,l,i,u){var d=[[0,0],[0,a],[r,0],[r,a]];return d.reduce(function(f,B){var h=B[0],m=B[1],b=_t(l-h,i-m);return(u?b<f.optimumDistance:b>f.optimumDistance)?{optimumCorner:B,optimumDistance:b}:f},{optimumDistance:u?1/0:-1/0,optimumCorner:null}).optimumCorner},GC=function(r,a,l,i,u){var d=0,f=0;switch(r.size){case 0:r.shape===0?d=f=Math.min(Math.abs(a),Math.abs(a-i),Math.abs(l),Math.abs(l-u)):r.shape===1&&(d=Math.min(Math.abs(a),Math.abs(a-i)),f=Math.min(Math.abs(l),Math.abs(l-u)));break;case 2:if(r.shape===0)d=f=Math.min(_t(a,l),_t(a,l-u),_t(a-i,l),_t(a-i,l-u));else if(r.shape===1){var B=Math.min(Math.abs(l),Math.abs(l-u))/Math.min(Math.abs(a),Math.abs(a-i)),h=QB(i,u,a,l,!0),m=h[0],b=h[1];d=_t(m-a,(b-l)/B),f=B*d}break;case 1:r.shape===0?d=f=Math.max(Math.abs(a),Math.abs(a-i),Math.abs(l),Math.abs(l-u)):r.shape===1&&(d=Math.max(Math.abs(a),Math.abs(a-i)),f=Math.max(Math.abs(l),Math.abs(l-u)));break;case 3:if(r.shape===0)d=f=Math.max(_t(a,l),_t(a,l-u),_t(a-i,l),_t(a-i,l-u));else if(r.shape===1){var B=Math.max(Math.abs(l),Math.abs(l-u))/Math.max(Math.abs(a),Math.abs(a-i)),y=QB(i,u,a,l,!1),m=y[0],b=y[1];d=_t(m-a,(b-l)/B),f=B*d}break}return Array.isArray(r.size)&&(d=Ce(r.size[0],i),f=r.size.length===2?Ce(r.size[1],u):d),[d,f]},_C=function(r,a){var l=Kt(180),i=[];return $t(a).forEach(function(u,d){if(d===0){var f=u[0];if(f.type===20&&f.value==="to"){l=Sp(u);return}else if(Hp(f)){l=Ls.parse(r,f);return}}var B=ks(r,u);i.push(B)}),{angle:l,stops:i,type:1}},cs=function(r,a){var l=Kt(180),i=[];return $t(a).forEach(function(u,d){if(d===0){var f=u[0];if(f.type===20&&["top","left","right","bottom"].indexOf(f.value)!==-1){l=Sp(u);return}else if(Hp(f)){l=(Ls.parse(r,f)+Kt(270))%Kt(360);return}}var B=ks(r,u);i.push(B)}),{angle:l,stops:i,type:1}},VC=function(r,a){var l=Kt(180),i=[],u=1,d=0,f=3,B=[];return $t(a).forEach(function(h,m){var b=h[0];if(m===0){if(xe(b)&&b.value==="linear"){u=1;return}else if(xe(b)&&b.value==="radial"){u=2;return}}if(b.type===18){if(b.name==="from"){var y=Zn.parse(r,b.values[0]);i.push({stop:At,color:y})}else if(b.name==="to"){var y=Zn.parse(r,b.values[0]);i.push({stop:Yn,color:y})}else if(b.name==="color-stop"){var T=b.values.filter(Br);if(T.length===2){var y=Zn.parse(r,T[1]),W=T[0];xr(W)&&i.push({stop:{type:16,number:W.number*100,flags:W.flags},color:y})}}}}),u===1?{angle:(l+Kt(180))%Kt(360),stops:i,type:u}:{size:f,shape:d,stops:i,position:B,type:u}},Dp="closest-side",Tp="farthest-side",jp="closest-corner",Np="farthest-corner",Mp="circle",Ip="ellipse",Lp="cover",kp="contain",XC=function(r,a){var l=0,i=3,u=[],d=[];return $t(a).forEach(function(f,B){var h=!0;if(B===0){var m=!1;h=f.reduce(function(y,T){if(m)if(xe(T))switch(T.value){case"center":return d.push(nd),y;case"top":case"left":return d.push(At),y;case"right":case"bottom":return d.push(Yn),y}else(Ke(T)||Wn(T))&&d.push(T);else if(xe(T))switch(T.value){case Mp:return l=0,!1;case Ip:return l=1,!1;case"at":return m=!0,!1;case Dp:return i=0,!1;case Lp:case Tp:return i=1,!1;case kp:case jp:return i=2,!1;case Np:return i=3,!1}else if(Wn(T)||Ke(T))return Array.isArray(i)||(i=[]),i.push(T),!1;return y},h)}if(h){var b=ks(r,f);u.push(b)}}),{size:i,shape:l,stops:u,position:d,type:2}},us=function(r,a){var l=0,i=3,u=[],d=[];return $t(a).forEach(function(f,B){var h=!0;if(B===0?h=f.reduce(function(b,y){if(xe(y))switch(y.value){case"center":return d.push(nd),!1;case"top":case"left":return d.push(At),!1;case"right":case"bottom":return d.push(Yn),!1}else if(Ke(y)||Wn(y))return d.push(y),!1;return b},h):B===1&&(h=f.reduce(function(b,y){if(xe(y))switch(y.value){case Mp:return l=0,!1;case Ip:return l=1,!1;case kp:case Dp:return i=0,!1;case Tp:return i=1,!1;case jp:return i=2,!1;case Lp:case Np:return i=3,!1}else if(Wn(y)||Ke(y))return Array.isArray(i)||(i=[]),i.push(y),!1;return b},h)),h){var m=ks(r,f);u.push(m)}}),{size:i,shape:l,stops:u,position:d,type:2}},YC=function(r){return r.type===1},JC=function(r){return r.type===2},ad={name:"image",parse:function(r,a){if(a.type===22){var l={url:a.value,type:0};return r.cache.addImage(a.value),l}if(a.type===18){var i=Kp[a.name];if(typeof i>"u")throw new Error('Attempting to parse an unsupported image function "'+a.name+'"');return i(r,a.values)}throw new Error("Unsupported image type "+a.type)}};function ZC(r){return!(r.type===20&&r.value==="none")&&(r.type!==18||!!Kp[r.name])}var Kp={"linear-gradient":_C,"-moz-linear-gradient":cs,"-ms-linear-gradient":cs,"-o-linear-gradient":cs,"-webkit-linear-gradient":cs,"radial-gradient":XC,"-moz-radial-gradient":us,"-ms-radial-gradient":us,"-o-radial-gradient":us,"-webkit-radial-gradient":us,"-webkit-gradient":VC},qC={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(r,a){if(a.length===0)return[];var l=a[0];return l.type===20&&l.value==="none"?[]:a.filter(function(i){return Br(i)&&ZC(i)}).map(function(i){return ad.parse(r,i)})}},WC={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(r,a){return a.map(function(l){if(xe(l))switch(l.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},PC={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(r,a){return $t(a).map(function(l){return l.filter(Ke)}).map(vp)}},$C={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(r,a){return $t(a).map(function(l){return l.filter(xe).map(function(i){return i.value}).join(" ")}).map(Ay)}},Ay=function(r){switch(r){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},gr;(function(r){r.AUTO="auto",r.CONTAIN="contain",r.COVER="cover"})(gr||(gr={}));var ey={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(r,a){return $t(a).map(function(l){return l.filter(ty)})}},ty=function(r){return xe(r)||Ke(r)},Ks=function(r){return{name:"border-"+r+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},ny=Ks("top"),ay=Ks("right"),ry=Ks("bottom"),iy=Ks("left"),Os=function(r){return{name:"border-radius-"+r,initialValue:"0 0",prefix:!1,type:1,parse:function(a,l){return vp(l.filter(Ke))}}},ly=Os("top-left"),sy=Os("top-right"),oy=Os("bottom-right"),cy=Os("bottom-left"),Rs=function(r){return{name:"border-"+r+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(a,l){switch(l){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},uy=Rs("top"),dy=Rs("right"),fy=Rs("bottom"),gy=Rs("left"),zs=function(r){return{name:"border-"+r+"-width",initialValue:"0",type:0,prefix:!1,parse:function(a,l){return Li(l)?l.number:0}}},hy=zs("top"),By=zs("right"),py=zs("bottom"),xy=zs("left"),my={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},wy={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(r,a){switch(a){case"rtl":return 1;case"ltr":default:return 0}}},by={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(r,a){return a.filter(xe).reduce(function(l,i){return l|Cy(i.value)},0)}},Cy=function(r){switch(r){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},yy={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(r,a){switch(a){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},vy={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(r,a){return a.type===20&&a.value==="normal"?0:a.type===17||a.type===15?a.number:0}},vs;(function(r){r.NORMAL="normal",r.STRICT="strict"})(vs||(vs={}));var Qy={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(r,a){switch(a){case"strict":return vs.STRICT;case"normal":default:return vs.NORMAL}}},Uy={name:"line-height",initialValue:"normal",prefix:!1,type:4},UB=function(r,a){return xe(r)&&r.value==="normal"?1.2*a:r.type===17?a*r.number:Ke(r)?Ce(r,a):a},Fy={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(r,a){return a.type===20&&a.value==="none"?null:ad.parse(r,a)}},Ey={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(r,a){switch(a){case"inside":return 0;case"outside":default:return 1}}},Gu={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(r,a){switch(a){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},Gs=function(r){return{name:"margin-"+r,initialValue:"0",prefix:!1,type:4}},Hy=Gs("top"),Sy=Gs("right"),Dy=Gs("bottom"),Ty=Gs("left"),jy={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(r,a){return a.filter(xe).map(function(l){switch(l.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},Ny={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(r,a){switch(a){case"break-word":return"break-word";case"normal":default:return"normal"}}},_s=function(r){return{name:"padding-"+r,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},My=_s("top"),Iy=_s("right"),Ly=_s("bottom"),ky=_s("left"),Ky={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(r,a){switch(a){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},Oy={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(r,a){switch(a){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},Ry={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(r,a){return a.length===1&&zu(a[0],"none")?[]:$t(a).map(function(l){for(var i={color:mn.TRANSPARENT,offsetX:At,offsetY:At,blur:At},u=0,d=0;d<l.length;d++){var f=l[d];Wn(f)?(u===0?i.offsetX=f:u===1?i.offsetY=f:i.blur=f,u++):i.color=Zn.parse(r,f)}return i})}},zy={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(r,a){switch(a){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},Gy={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(r,a){if(a.type===20&&a.value==="none")return null;if(a.type===18){var l=Xy[a.name];if(typeof l>"u")throw new Error('Attempting to parse an unsupported transform function "'+a.name+'"');return l(a.values)}return null}},_y=function(r){var a=r.filter(function(l){return l.type===17}).map(function(l){return l.number});return a.length===6?a:null},Vy=function(r){var a=r.filter(function(h){return h.type===17}).map(function(h){return h.number}),l=a[0],i=a[1];a[2],a[3];var u=a[4],d=a[5];a[6],a[7],a[8],a[9],a[10],a[11];var f=a[12],B=a[13];return a[14],a[15],a.length===16?[l,i,u,d,f,B]:null},Xy={matrix:_y,matrix3d:Vy},FB={type:16,number:50,flags:Ii},Yy=[FB,FB],Jy={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(r,a){var l=a.filter(Ke);return l.length!==2?Yy:[l[0],l[1]]}},Zy={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(r,a){switch(a){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Hi;(function(r){r.NORMAL="normal",r.BREAK_ALL="break-all",r.KEEP_ALL="keep-all"})(Hi||(Hi={}));var qy={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(r,a){switch(a){case"break-all":return Hi.BREAK_ALL;case"keep-all":return Hi.KEEP_ALL;case"normal":default:return Hi.NORMAL}}},Wy={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(r,a){if(a.type===20)return{auto:!0,order:0};if(xr(a))return{auto:!1,order:a.number};throw new Error("Invalid z-index number parsed")}},Op={name:"time",parse:function(r,a){if(a.type===15)switch(a.unit.toLowerCase()){case"s":return 1e3*a.number;case"ms":return a.number}throw new Error("Unsupported time type")}},Py={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(r,a){return xr(a)?a.number:1}},$y={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Av={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(r,a){return a.filter(xe).map(function(l){switch(l.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(l){return l!==0})}},ev={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(r,a){var l=[],i=[];return a.forEach(function(u){switch(u.type){case 20:case 0:l.push(u.value);break;case 17:l.push(u.number.toString());break;case 4:i.push(l.join(" ")),l.length=0;break}}),l.length&&i.push(l.join(" ")),i.map(function(u){return u.indexOf(" ")===-1?u:"'"+u+"'"})}},tv={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},nv={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(r,a){if(xr(a))return a.number;if(xe(a))switch(a.value){case"bold":return 700;case"normal":default:return 400}return 400}},av={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(r,a){return a.filter(xe).map(function(l){return l.value})}},rv={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(r,a){switch(a){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},Ge=function(r,a){return(r&a)!==0},iv={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(r,a){if(a.length===0)return[];var l=a[0];return l.type===20&&l.value==="none"?[]:a}},lv={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(r,a){if(a.length===0)return null;var l=a[0];if(l.type===20&&l.value==="none")return null;for(var i=[],u=a.filter(yp),d=0;d<u.length;d++){var f=u[d],B=u[d+1];if(f.type===20){var h=B&&xr(B)?B.number:1;i.push({counter:f.value,increment:h})}}return i}},sv={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(r,a){if(a.length===0)return[];for(var l=[],i=a.filter(yp),u=0;u<i.length;u++){var d=i[u],f=i[u+1];if(xe(d)&&d.value!=="none"){var B=f&&xr(f)?f.number:0;l.push({counter:d.value,reset:B})}}return l}},ov={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(r,a){return a.filter(Li).map(function(l){return Op.parse(r,l)})}},cv={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(r,a){if(a.length===0)return null;var l=a[0];if(l.type===20&&l.value==="none")return null;var i=[],u=a.filter(IC);if(u.length%2!==0)return null;for(var d=0;d<u.length;d+=2){var f=u[d].value,B=u[d+1].value;i.push({open:f,close:B})}return i}},EB=function(r,a,l){if(!r)return"";var i=r[Math.min(a,r.length-1)];return i?l?i.open:i.close:""},uv={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(r,a){return a.length===1&&zu(a[0],"none")?[]:$t(a).map(function(l){for(var i={color:255,offsetX:At,offsetY:At,blur:At,spread:At,inset:!1},u=0,d=0;d<l.length;d++){var f=l[d];zu(f,"inset")?i.inset=!0:Wn(f)?(u===0?i.offsetX=f:u===1?i.offsetY=f:u===2?i.blur=f:i.spread=f,u++):i.color=Zn.parse(r,f)}return i})}},dv={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(r,a){var l=[0,1,2],i=[];return a.filter(xe).forEach(function(u){switch(u.value){case"stroke":i.push(1);break;case"fill":i.push(0);break;case"markers":i.push(2);break}}),l.forEach(function(u){i.indexOf(u)===-1&&i.push(u)}),i}},fv={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},gv={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(r,a){return Li(a)?a.number:0}},hv=function(){function r(a,l){var i,u;this.animationDuration=NA(a,ov,l.animationDuration),this.backgroundClip=NA(a,KC,l.backgroundClip),this.backgroundColor=NA(a,OC,l.backgroundColor),this.backgroundImage=NA(a,qC,l.backgroundImage),this.backgroundOrigin=NA(a,WC,l.backgroundOrigin),this.backgroundPosition=NA(a,PC,l.backgroundPosition),this.backgroundRepeat=NA(a,$C,l.backgroundRepeat),this.backgroundSize=NA(a,ey,l.backgroundSize),this.borderTopColor=NA(a,ny,l.borderTopColor),this.borderRightColor=NA(a,ay,l.borderRightColor),this.borderBottomColor=NA(a,ry,l.borderBottomColor),this.borderLeftColor=NA(a,iy,l.borderLeftColor),this.borderTopLeftRadius=NA(a,ly,l.borderTopLeftRadius),this.borderTopRightRadius=NA(a,sy,l.borderTopRightRadius),this.borderBottomRightRadius=NA(a,oy,l.borderBottomRightRadius),this.borderBottomLeftRadius=NA(a,cy,l.borderBottomLeftRadius),this.borderTopStyle=NA(a,uy,l.borderTopStyle),this.borderRightStyle=NA(a,dy,l.borderRightStyle),this.borderBottomStyle=NA(a,fy,l.borderBottomStyle),this.borderLeftStyle=NA(a,gy,l.borderLeftStyle),this.borderTopWidth=NA(a,hy,l.borderTopWidth),this.borderRightWidth=NA(a,By,l.borderRightWidth),this.borderBottomWidth=NA(a,py,l.borderBottomWidth),this.borderLeftWidth=NA(a,xy,l.borderLeftWidth),this.boxShadow=NA(a,uv,l.boxShadow),this.color=NA(a,my,l.color),this.direction=NA(a,wy,l.direction),this.display=NA(a,by,l.display),this.float=NA(a,yy,l.cssFloat),this.fontFamily=NA(a,ev,l.fontFamily),this.fontSize=NA(a,tv,l.fontSize),this.fontStyle=NA(a,rv,l.fontStyle),this.fontVariant=NA(a,av,l.fontVariant),this.fontWeight=NA(a,nv,l.fontWeight),this.letterSpacing=NA(a,vy,l.letterSpacing),this.lineBreak=NA(a,Qy,l.lineBreak),this.lineHeight=NA(a,Uy,l.lineHeight),this.listStyleImage=NA(a,Fy,l.listStyleImage),this.listStylePosition=NA(a,Ey,l.listStylePosition),this.listStyleType=NA(a,Gu,l.listStyleType),this.marginTop=NA(a,Hy,l.marginTop),this.marginRight=NA(a,Sy,l.marginRight),this.marginBottom=NA(a,Dy,l.marginBottom),this.marginLeft=NA(a,Ty,l.marginLeft),this.opacity=NA(a,Py,l.opacity);var d=NA(a,jy,l.overflow);this.overflowX=d[0],this.overflowY=d[d.length>1?1:0],this.overflowWrap=NA(a,Ny,l.overflowWrap),this.paddingTop=NA(a,My,l.paddingTop),this.paddingRight=NA(a,Iy,l.paddingRight),this.paddingBottom=NA(a,Ly,l.paddingBottom),this.paddingLeft=NA(a,ky,l.paddingLeft),this.paintOrder=NA(a,dv,l.paintOrder),this.position=NA(a,Oy,l.position),this.textAlign=NA(a,Ky,l.textAlign),this.textDecorationColor=NA(a,$y,(i=l.textDecorationColor)!==null&&i!==void 0?i:l.color),this.textDecorationLine=NA(a,Av,(u=l.textDecorationLine)!==null&&u!==void 0?u:l.textDecoration),this.textShadow=NA(a,Ry,l.textShadow),this.textTransform=NA(a,zy,l.textTransform),this.transform=NA(a,Gy,l.transform),this.transformOrigin=NA(a,Jy,l.transformOrigin),this.visibility=NA(a,Zy,l.visibility),this.webkitTextStrokeColor=NA(a,fv,l.webkitTextStrokeColor),this.webkitTextStrokeWidth=NA(a,gv,l.webkitTextStrokeWidth),this.wordBreak=NA(a,qy,l.wordBreak),this.zIndex=NA(a,Wy,l.zIndex)}return r.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},r.prototype.isTransparent=function(){return qn(this.backgroundColor)},r.prototype.isTransformed=function(){return this.transform!==null},r.prototype.isPositioned=function(){return this.position!==0},r.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},r.prototype.isFloating=function(){return this.float!==0},r.prototype.isInlineLevel=function(){return Ge(this.display,4)||Ge(this.display,33554432)||Ge(this.display,268435456)||Ge(this.display,536870912)||Ge(this.display,67108864)||Ge(this.display,134217728)},r}(),Bv=function(){function r(a,l){this.content=NA(a,iv,l.content),this.quotes=NA(a,cv,l.quotes)}return r}(),HB=function(){function r(a,l){this.counterIncrement=NA(a,lv,l.counterIncrement),this.counterReset=NA(a,sv,l.counterReset)}return r}(),NA=function(r,a,l){var i=new bp,u=l!==null&&typeof l<"u"?l.toString():a.initialValue;i.write(u);var d=new Cp(i.read());switch(a.type){case 2:var f=d.parseComponentValue();return a.parse(r,xe(f)?f.value:a.initialValue);case 0:return a.parse(r,d.parseComponentValue());case 1:return a.parse(r,d.parseComponentValues());case 4:return d.parseComponentValue();case 3:switch(a.format){case"angle":return Ls.parse(r,d.parseComponentValue());case"color":return Zn.parse(r,d.parseComponentValue());case"image":return ad.parse(r,d.parseComponentValue());case"length":var B=d.parseComponentValue();return Wn(B)?B:At;case"length-percentage":var h=d.parseComponentValue();return Ke(h)?h:At;case"time":return Op.parse(r,d.parseComponentValue())}break}},pv="data-html2canvas-debug",xv=function(r){var a=r.getAttribute(pv);switch(a){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},_u=function(r,a){var l=xv(r);return l===1||a===l},An=function(){function r(a,l){if(this.context=a,this.textNodes=[],this.elements=[],this.flags=0,_u(l,3))debugger;this.styles=new hv(a,window.getComputedStyle(l,null)),Yu(l)&&(this.styles.animationDuration.some(function(i){return i>0})&&(l.style.animationDuration="0s"),this.styles.transform!==null&&(l.style.transform="none")),this.bounds=Ms(this.context,l),_u(l,4)&&(this.flags|=16)}return r}(),mv="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",SB="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Qi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ds=0;ds<SB.length;ds++)Qi[SB.charCodeAt(ds)]=ds;var wv=function(r){var a=r.length*.75,l=r.length,i,u=0,d,f,B,h;r[r.length-1]==="="&&(a--,r[r.length-2]==="="&&a--);var m=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(a):new Array(a),b=Array.isArray(m)?m:new Uint8Array(m);for(i=0;i<l;i+=4)d=Qi[r.charCodeAt(i)],f=Qi[r.charCodeAt(i+1)],B=Qi[r.charCodeAt(i+2)],h=Qi[r.charCodeAt(i+3)],b[u++]=d<<2|f>>4,b[u++]=(f&15)<<4|B>>2,b[u++]=(B&3)<<6|h&63;return m},bv=function(r){for(var a=r.length,l=[],i=0;i<a;i+=2)l.push(r[i+1]<<8|r[i]);return l},Cv=function(r){for(var a=r.length,l=[],i=0;i<a;i+=4)l.push(r[i+3]<<24|r[i+2]<<16|r[i+1]<<8|r[i]);return l},ma=5,rd=11,gu=2,yv=rd-ma,Rp=65536>>ma,vv=1<<ma,hu=vv-1,Qv=1024>>ma,Uv=Rp+Qv,Fv=Uv,Ev=32,Hv=Fv+Ev,Sv=65536>>rd,Dv=1<<yv,Tv=Dv-1,DB=function(r,a,l){return r.slice?r.slice(a,l):new Uint16Array(Array.prototype.slice.call(r,a,l))},jv=function(r,a,l){return r.slice?r.slice(a,l):new Uint32Array(Array.prototype.slice.call(r,a,l))},Nv=function(r,a){var l=wv(r),i=Array.isArray(l)?Cv(l):new Uint32Array(l),u=Array.isArray(l)?bv(l):new Uint16Array(l),d=24,f=DB(u,d/2,i[4]/2),B=i[5]===2?DB(u,(d+i[4])/2):jv(i,Math.ceil((d+i[4])/4));return new Mv(i[0],i[1],i[2],i[3],f,B)},Mv=function(){function r(a,l,i,u,d,f){this.initialValue=a,this.errorValue=l,this.highStart=i,this.highValueIndex=u,this.index=d,this.data=f}return r.prototype.get=function(a){var l;if(a>=0){if(a<55296||a>56319&&a<=65535)return l=this.index[a>>ma],l=(l<<gu)+(a&hu),this.data[l];if(a<=65535)return l=this.index[Rp+(a-55296>>ma)],l=(l<<gu)+(a&hu),this.data[l];if(a<this.highStart)return l=Hv-Sv+(a>>rd),l=this.index[l],l+=a>>ma&Tv,l=this.index[l],l=(l<<gu)+(a&hu),this.data[l];if(a<=1114111)return this.data[this.highValueIndex]}return this.errorValue},r}(),TB="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Iv=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var fs=0;fs<TB.length;fs++)Iv[TB.charCodeAt(fs)]=fs;var Lv=1,Bu=2,pu=3,jB=4,NB=5,kv=7,MB=8,xu=9,mu=10,IB=11,LB=12,kB=13,KB=14,wu=15,Kv=function(r){for(var a=[],l=0,i=r.length;l<i;){var u=r.charCodeAt(l++);if(u>=55296&&u<=56319&&l<i){var d=r.charCodeAt(l++);(d&64512)===56320?a.push(((u&1023)<<10)+(d&1023)+65536):(a.push(u),l--)}else a.push(u)}return a},Ov=function(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];if(String.fromCodePoint)return String.fromCodePoint.apply(String,r);var l=r.length;if(!l)return"";for(var i=[],u=-1,d="";++u<l;){var f=r[u];f<=65535?i.push(f):(f-=65536,i.push((f>>10)+55296,f%1024+56320)),(u+1===l||i.length>16384)&&(d+=String.fromCharCode.apply(String,i),i.length=0)}return d},Rv=Nv(mv),Lt="×",bu="÷",zv=function(r){return Rv.get(r)},Gv=function(r,a,l){var i=l-2,u=a[i],d=a[l-1],f=a[l];if(d===Bu&&f===pu)return Lt;if(d===Bu||d===pu||d===jB||f===Bu||f===pu||f===jB)return bu;if(d===MB&&[MB,xu,IB,LB].indexOf(f)!==-1||(d===IB||d===xu)&&(f===xu||f===mu)||(d===LB||d===mu)&&f===mu||f===kB||f===NB||f===kv||d===Lv)return Lt;if(d===kB&&f===KB){for(;u===NB;)u=a[--i];if(u===KB)return Lt}if(d===wu&&f===wu){for(var B=0;u===wu;)B++,u=a[--i];if(B%2===0)return Lt}return bu},_v=function(r){var a=Kv(r),l=a.length,i=0,u=0,d=a.map(zv);return{next:function(){if(i>=l)return{done:!0,value:null};for(var f=Lt;i<l&&(f=Gv(a,d,++i))===Lt;);if(f!==Lt||i===l){var B=Ov.apply(null,a.slice(u,i));return u=i,{value:B,done:!1}}return{done:!0,value:null}}}},Vv=function(r){for(var a=_v(r),l=[],i;!(i=a.next()).done;)i.value&&l.push(i.value.slice());return l},Xv=function(r){var a=123;if(r.createRange){var l=r.createRange();if(l.getBoundingClientRect){var i=r.createElement("boundtest");i.style.height=a+"px",i.style.display="block",r.body.appendChild(i),l.selectNode(i);var u=l.getBoundingClientRect(),d=Math.round(u.height);if(r.body.removeChild(i),d===a)return!0}}return!1},Yv=function(r){var a=r.createElement("boundtest");a.style.width="50px",a.style.display="block",a.style.fontSize="12px",a.style.letterSpacing="0px",a.style.wordSpacing="0px",r.body.appendChild(a);var l=r.createRange();a.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var i=a.firstChild,u=Is(i.data).map(function(h){return Ie(h)}),d=0,f={},B=u.every(function(h,m){l.setStart(i,d),l.setEnd(i,d+h.length);var b=l.getBoundingClientRect();d+=h.length;var y=b.x>f.x||b.y>f.y;return f=b,m===0?!0:y});return r.body.removeChild(a),B},Jv=function(){return typeof new Image().crossOrigin<"u"},Zv=function(){return typeof new XMLHttpRequest().responseType=="string"},qv=function(r){var a=new Image,l=r.createElement("canvas"),i=l.getContext("2d");if(!i)return!1;a.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{i.drawImage(a,0,0),l.toDataURL()}catch{return!1}return!0},OB=function(r){return r[0]===0&&r[1]===255&&r[2]===0&&r[3]===255},Wv=function(r){var a=r.createElement("canvas"),l=100;a.width=l,a.height=l;var i=a.getContext("2d");if(!i)return Promise.reject(!1);i.fillStyle="rgb(0, 255, 0)",i.fillRect(0,0,l,l);var u=new Image,d=a.toDataURL();u.src=d;var f=Vu(l,l,0,0,u);return i.fillStyle="red",i.fillRect(0,0,l,l),RB(f).then(function(B){i.drawImage(B,0,0);var h=i.getImageData(0,0,l,l).data;i.fillStyle="red",i.fillRect(0,0,l,l);var m=r.createElement("div");return m.style.backgroundImage="url("+d+")",m.style.height=l+"px",OB(h)?RB(Vu(l,l,0,0,m)):Promise.reject(!1)}).then(function(B){return i.drawImage(B,0,0),OB(i.getImageData(0,0,l,l).data)}).catch(function(){return!1})},Vu=function(r,a,l,i,u){var d="http://www.w3.org/2000/svg",f=document.createElementNS(d,"svg"),B=document.createElementNS(d,"foreignObject");return f.setAttributeNS(null,"width",r.toString()),f.setAttributeNS(null,"height",a.toString()),B.setAttributeNS(null,"width","100%"),B.setAttributeNS(null,"height","100%"),B.setAttributeNS(null,"x",l.toString()),B.setAttributeNS(null,"y",i.toString()),B.setAttributeNS(null,"externalResourcesRequired","true"),f.appendChild(B),B.appendChild(u),f},RB=function(r){return new Promise(function(a,l){var i=new Image;i.onload=function(){return a(i)},i.onerror=l,i.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(r))})},$e={get SUPPORT_RANGE_BOUNDS(){var r=Xv(document);return Object.defineProperty($e,"SUPPORT_RANGE_BOUNDS",{value:r}),r},get SUPPORT_WORD_BREAKING(){var r=$e.SUPPORT_RANGE_BOUNDS&&Yv(document);return Object.defineProperty($e,"SUPPORT_WORD_BREAKING",{value:r}),r},get SUPPORT_SVG_DRAWING(){var r=qv(document);return Object.defineProperty($e,"SUPPORT_SVG_DRAWING",{value:r}),r},get SUPPORT_FOREIGNOBJECT_DRAWING(){var r=typeof Array.from=="function"&&typeof window.fetch=="function"?Wv(document):Promise.resolve(!1);return Object.defineProperty($e,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:r}),r},get SUPPORT_CORS_IMAGES(){var r=Jv();return Object.defineProperty($e,"SUPPORT_CORS_IMAGES",{value:r}),r},get SUPPORT_RESPONSE_TYPE(){var r=Zv();return Object.defineProperty($e,"SUPPORT_RESPONSE_TYPE",{value:r}),r},get SUPPORT_CORS_XHR(){var r="withCredentials"in new XMLHttpRequest;return Object.defineProperty($e,"SUPPORT_CORS_XHR",{value:r}),r},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var r=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty($e,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:r}),r}},Si=function(){function r(a,l){this.text=a,this.bounds=l}return r}(),Pv=function(r,a,l,i){var u=eQ(a,l),d=[],f=0;return u.forEach(function(B){if(l.textDecorationLine.length||B.trim().length>0)if($e.SUPPORT_RANGE_BOUNDS){var h=zB(i,f,B.length).getClientRects();if(h.length>1){var m=id(B),b=0;m.forEach(function(T){d.push(new Si(T,wn.fromDOMRectList(r,zB(i,b+f,T.length).getClientRects()))),b+=T.length})}else d.push(new Si(B,wn.fromDOMRectList(r,h)))}else{var y=i.splitText(B.length);d.push(new Si(B,$v(r,i))),i=y}else $e.SUPPORT_RANGE_BOUNDS||(i=i.splitText(B.length));f+=B.length}),d},$v=function(r,a){var l=a.ownerDocument;if(l){var i=l.createElement("html2canvaswrapper");i.appendChild(a.cloneNode(!0));var u=a.parentNode;if(u){u.replaceChild(i,a);var d=Ms(r,i);return i.firstChild&&u.replaceChild(i.firstChild,i),d}}return wn.EMPTY},zB=function(r,a,l){var i=r.ownerDocument;if(!i)throw new Error("Node has no owner document");var u=i.createRange();return u.setStart(r,a),u.setEnd(r,a+l),u},id=function(r){if($e.SUPPORT_NATIVE_TEXT_SEGMENTATION){var a=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(a.segment(r)).map(function(l){return l.segment})}return Vv(r)},AQ=function(r,a){if($e.SUPPORT_NATIVE_TEXT_SEGMENTATION){var l=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(l.segment(r)).map(function(i){return i.segment})}return nQ(r,a)},eQ=function(r,a){return a.letterSpacing!==0?id(r):AQ(r,a)},tQ=[32,160,4961,65792,65793,4153,4241],nQ=function(r,a){for(var l=Sb(r,{lineBreak:a.lineBreak,wordBreak:a.overflowWrap==="break-word"?"break-word":a.wordBreak}),i=[],u,d=function(){if(u.value){var f=u.value.slice(),B=Is(f),h="";B.forEach(function(m){tQ.indexOf(m)===-1?h+=Ie(m):(h.length&&i.push(h),i.push(Ie(m)),h="")}),h.length&&i.push(h)}};!(u=l.next()).done;)d();return i},aQ=function(){function r(a,l,i){this.text=rQ(l.data,i.textTransform),this.textBounds=Pv(a,this.text,i,l)}return r}(),rQ=function(r,a){switch(a){case 1:return r.toLowerCase();case 3:return r.replace(iQ,lQ);case 2:return r.toUpperCase();default:return r}},iQ=/(^|\s|:|-|\(|\))([a-z])/g,lQ=function(r,a,l){return r.length>0?a+l.toUpperCase():r},zp=function(r){Vt(a,r);function a(l,i){var u=r.call(this,l,i)||this;return u.src=i.currentSrc||i.src,u.intrinsicWidth=i.naturalWidth,u.intrinsicHeight=i.naturalHeight,u.context.cache.addImage(u.src),u}return a}(An),Gp=function(r){Vt(a,r);function a(l,i){var u=r.call(this,l,i)||this;return u.canvas=i,u.intrinsicWidth=i.width,u.intrinsicHeight=i.height,u}return a}(An),_p=function(r){Vt(a,r);function a(l,i){var u=r.call(this,l,i)||this,d=new XMLSerializer,f=Ms(l,i);return i.setAttribute("width",f.width+"px"),i.setAttribute("height",f.height+"px"),u.svg="data:image/svg+xml,"+encodeURIComponent(d.serializeToString(i)),u.intrinsicWidth=i.width.baseVal.value,u.intrinsicHeight=i.height.baseVal.value,u.context.cache.addImage(u.svg),u}return a}(An),Vp=function(r){Vt(a,r);function a(l,i){var u=r.call(this,l,i)||this;return u.value=i.value,u}return a}(An),Xu=function(r){Vt(a,r);function a(l,i){var u=r.call(this,l,i)||this;return u.start=i.start,u.reversed=typeof i.reversed=="boolean"&&i.reversed===!0,u}return a}(An),sQ=[{type:15,flags:0,unit:"px",number:3}],oQ=[{type:16,flags:0,number:50}],cQ=function(r){return r.width>r.height?new wn(r.left+(r.width-r.height)/2,r.top,r.height,r.height):r.width<r.height?new wn(r.left,r.top+(r.height-r.width)/2,r.width,r.width):r},uQ=function(r){var a=r.type===dQ?new Array(r.value.length+1).join("•"):r.value;return a.length===0?r.placeholder||"":a},Qs="checkbox",Us="radio",dQ="password",GB=707406591,ld=function(r){Vt(a,r);function a(l,i){var u=r.call(this,l,i)||this;switch(u.type=i.type.toLowerCase(),u.checked=i.checked,u.value=uQ(i),(u.type===Qs||u.type===Us)&&(u.styles.backgroundColor=3739148031,u.styles.borderTopColor=u.styles.borderRightColor=u.styles.borderBottomColor=u.styles.borderLeftColor=2779096575,u.styles.borderTopWidth=u.styles.borderRightWidth=u.styles.borderBottomWidth=u.styles.borderLeftWidth=1,u.styles.borderTopStyle=u.styles.borderRightStyle=u.styles.borderBottomStyle=u.styles.borderLeftStyle=1,u.styles.backgroundClip=[0],u.styles.backgroundOrigin=[0],u.bounds=cQ(u.bounds)),u.type){case Qs:u.styles.borderTopRightRadius=u.styles.borderTopLeftRadius=u.styles.borderBottomRightRadius=u.styles.borderBottomLeftRadius=sQ;break;case Us:u.styles.borderTopRightRadius=u.styles.borderTopLeftRadius=u.styles.borderBottomRightRadius=u.styles.borderBottomLeftRadius=oQ;break}return u}return a}(An),Xp=function(r){Vt(a,r);function a(l,i){var u=r.call(this,l,i)||this,d=i.options[i.selectedIndex||0];return u.value=d&&d.text||"",u}return a}(An),Yp=function(r){Vt(a,r);function a(l,i){var u=r.call(this,l,i)||this;return u.value=i.value,u}return a}(An),Jp=function(r){Vt(a,r);function a(l,i){var u=r.call(this,l,i)||this;u.src=i.src,u.width=parseInt(i.width,10)||0,u.height=parseInt(i.height,10)||0,u.backgroundColor=u.styles.backgroundColor;try{if(i.contentWindow&&i.contentWindow.document&&i.contentWindow.document.documentElement){u.tree=qp(l,i.contentWindow.document.documentElement);var d=i.contentWindow.document.documentElement?Ei(l,getComputedStyle(i.contentWindow.document.documentElement).backgroundColor):mn.TRANSPARENT,f=i.contentWindow.document.body?Ei(l,getComputedStyle(i.contentWindow.document.body).backgroundColor):mn.TRANSPARENT;u.backgroundColor=qn(d)?qn(f)?u.styles.backgroundColor:f:d}}catch{}return u}return a}(An),fQ=["OL","UL","MENU"],ws=function(r,a,l,i){for(var u=a.firstChild,d=void 0;u;u=d)if(d=u.nextSibling,Wp(u)&&u.data.trim().length>0)l.textNodes.push(new aQ(r,u,l.styles));else if(fr(u))if(e0(u)&&u.assignedNodes)u.assignedNodes().forEach(function(B){return ws(r,B,l,i)});else{var f=Zp(r,u);f.styles.isVisible()&&(gQ(u,f,i)?f.flags|=4:hQ(f.styles)&&(f.flags|=2),fQ.indexOf(u.tagName)!==-1&&(f.flags|=8),l.elements.push(f),u.slot,u.shadowRoot?ws(r,u.shadowRoot,f,i):!Fs(u)&&!Pp(u)&&!Es(u)&&ws(r,u,f,i))}},Zp=function(r,a){return Ju(a)?new zp(r,a):$p(a)?new Gp(r,a):Pp(a)?new _p(r,a):BQ(a)?new Vp(r,a):pQ(a)?new Xu(r,a):xQ(a)?new ld(r,a):Es(a)?new Xp(r,a):Fs(a)?new Yp(r,a):A0(a)?new Jp(r,a):new An(r,a)},qp=function(r,a){var l=Zp(r,a);return l.flags|=4,ws(r,a,l,l),l},gQ=function(r,a,l){return a.styles.isPositionedWithZIndex()||a.styles.opacity<1||a.styles.isTransformed()||sd(r)&&l.styles.isTransparent()},hQ=function(r){return r.isPositioned()||r.isFloating()},Wp=function(r){return r.nodeType===Node.TEXT_NODE},fr=function(r){return r.nodeType===Node.ELEMENT_NODE},Yu=function(r){return fr(r)&&typeof r.style<"u"&&!bs(r)},bs=function(r){return typeof r.className=="object"},BQ=function(r){return r.tagName==="LI"},pQ=function(r){return r.tagName==="OL"},xQ=function(r){return r.tagName==="INPUT"},mQ=function(r){return r.tagName==="HTML"},Pp=function(r){return r.tagName==="svg"},sd=function(r){return r.tagName==="BODY"},$p=function(r){return r.tagName==="CANVAS"},_B=function(r){return r.tagName==="VIDEO"},Ju=function(r){return r.tagName==="IMG"},A0=function(r){return r.tagName==="IFRAME"},VB=function(r){return r.tagName==="STYLE"},wQ=function(r){return r.tagName==="SCRIPT"},Fs=function(r){return r.tagName==="TEXTAREA"},Es=function(r){return r.tagName==="SELECT"},e0=function(r){return r.tagName==="SLOT"},XB=function(r){return r.tagName.indexOf("-")>0},bQ=function(){function r(){this.counters={}}return r.prototype.getCounterValue=function(a){var l=this.counters[a];return l&&l.length?l[l.length-1]:1},r.prototype.getCounterValues=function(a){var l=this.counters[a];return l||[]},r.prototype.pop=function(a){var l=this;a.forEach(function(i){return l.counters[i].pop()})},r.prototype.parse=function(a){var l=this,i=a.counterIncrement,u=a.counterReset,d=!0;i!==null&&i.forEach(function(B){var h=l.counters[B.counter];h&&B.increment!==0&&(d=!1,h.length||h.push(1),h[Math.max(0,h.length-1)]+=B.increment)});var f=[];return d&&u.forEach(function(B){var h=l.counters[B.counter];f.push(B.counter),h||(h=l.counters[B.counter]=[]),h.push(B.reset)}),f},r}(),YB={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},JB={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},CQ={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},yQ={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},sr=function(r,a,l,i,u,d){return r<a||r>l?Ni(r,u,d.length>0):i.integers.reduce(function(f,B,h){for(;r>=B;)r-=B,f+=i.values[h];return f},"")+d},t0=function(r,a,l,i){var u="";do l||r--,u=i(r)+u,r/=a;while(r*a>=a);return u},Me=function(r,a,l,i,u){var d=l-a+1;return(r<0?"-":"")+(t0(Math.abs(r),d,i,function(f){return Ie(Math.floor(f%d)+a)})+u)},ha=function(r,a,l){l===void 0&&(l=". ");var i=a.length;return t0(Math.abs(r),i,!1,function(u){return a[Math.floor(u%i)]})+l},ur=1,Gn=2,_n=4,Ui=8,xn=function(r,a,l,i,u,d){if(r<-9999||r>9999)return Ni(r,4,u.length>0);var f=Math.abs(r),B=u;if(f===0)return a[0]+B;for(var h=0;f>0&&h<=4;h++){var m=f%10;m===0&&Ge(d,ur)&&B!==""?B=a[m]+B:m>1||m===1&&h===0||m===1&&h===1&&Ge(d,Gn)||m===1&&h===1&&Ge(d,_n)&&r>100||m===1&&h>1&&Ge(d,Ui)?B=a[m]+(h>0?l[h-1]:"")+B:m===1&&h>0&&(B=l[h-1]+B),f=Math.floor(f/10)}return(r<0?i:"")+B},ZB="十百千萬",qB="拾佰仟萬",WB="マイナス",Cu="마이너스",Ni=function(r,a,l){var i=l?". ":"",u=l?"、":"",d=l?", ":"",f=l?" ":"";switch(a){case 0:return"•"+f;case 1:return"◦"+f;case 2:return"◾"+f;case 5:var B=Me(r,48,57,!0,i);return B.length<4?"0"+B:B;case 4:return ha(r,"〇一二三四五六七八九",u);case 6:return sr(r,1,3999,YB,3,i).toLowerCase();case 7:return sr(r,1,3999,YB,3,i);case 8:return Me(r,945,969,!1,i);case 9:return Me(r,97,122,!1,i);case 10:return Me(r,65,90,!1,i);case 11:return Me(r,1632,1641,!0,i);case 12:case 49:return sr(r,1,9999,JB,3,i);case 35:return sr(r,1,9999,JB,3,i).toLowerCase();case 13:return Me(r,2534,2543,!0,i);case 14:case 30:return Me(r,6112,6121,!0,i);case 15:return ha(r,"子丑寅卯辰巳午未申酉戌亥",u);case 16:return ha(r,"甲乙丙丁戊己庚辛壬癸",u);case 17:case 48:return xn(r,"零一二三四五六七八九",ZB,"負",u,Gn|_n|Ui);case 47:return xn(r,"零壹貳參肆伍陸柒捌玖",qB,"負",u,ur|Gn|_n|Ui);case 42:return xn(r,"零一二三四五六七八九",ZB,"负",u,Gn|_n|Ui);case 41:return xn(r,"零壹贰叁肆伍陆柒捌玖",qB,"负",u,ur|Gn|_n|Ui);case 26:return xn(r,"〇一二三四五六七八九","十百千万",WB,u,0);case 25:return xn(r,"零壱弐参四伍六七八九","拾百千万",WB,u,ur|Gn|_n);case 31:return xn(r,"영일이삼사오육칠팔구","십백천만",Cu,d,ur|Gn|_n);case 33:return xn(r,"零一二三四五六七八九","十百千萬",Cu,d,0);case 32:return xn(r,"零壹貳參四五六七八九","拾百千",Cu,d,ur|Gn|_n);case 18:return Me(r,2406,2415,!0,i);case 20:return sr(r,1,19999,yQ,3,i);case 21:return Me(r,2790,2799,!0,i);case 22:return Me(r,2662,2671,!0,i);case 22:return sr(r,1,10999,CQ,3,i);case 23:return ha(r,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return ha(r,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return Me(r,3302,3311,!0,i);case 28:return ha(r,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",u);case 29:return ha(r,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",u);case 34:return Me(r,3792,3801,!0,i);case 37:return Me(r,6160,6169,!0,i);case 38:return Me(r,4160,4169,!0,i);case 39:return Me(r,2918,2927,!0,i);case 40:return Me(r,1776,1785,!0,i);case 43:return Me(r,3046,3055,!0,i);case 44:return Me(r,3174,3183,!0,i);case 45:return Me(r,3664,3673,!0,i);case 46:return Me(r,3872,3881,!0,i);case 3:default:return Me(r,48,57,!0,i)}},n0="data-html2canvas-ignore",PB=function(){function r(a,l,i){if(this.context=a,this.options=i,this.scrolledElements=[],this.referenceElement=l,this.counters=new bQ,this.quoteDepth=0,!l.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(l.ownerDocument.documentElement,!1)}return r.prototype.toIFrame=function(a,l){var i=this,u=vQ(a,l);if(!u.contentWindow)return Promise.reject("Unable to find iframe window");var d=a.defaultView.pageXOffset,f=a.defaultView.pageYOffset,B=u.contentWindow,h=B.document,m=FQ(u).then(function(){return ot(i,void 0,void 0,function(){var b,y;return rt(this,function(T){switch(T.label){case 0:return this.scrolledElements.forEach(DQ),B&&(B.scrollTo(l.left,l.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(B.scrollY!==l.top||B.scrollX!==l.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(B.scrollX-l.left,B.scrollY-l.top,0,0))),b=this.options.onclone,y=this.clonedReferenceElement,typeof y>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:h.fonts&&h.fonts.ready?[4,h.fonts.ready]:[3,2];case 1:T.sent(),T.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,UQ(h)]:[3,4];case 3:T.sent(),T.label=4;case 4:return typeof b=="function"?[2,Promise.resolve().then(function(){return b(h,y)}).then(function(){return u})]:[2,u]}})})});return h.open(),h.write(HQ(document.doctype)+"<html></html>"),SQ(this.referenceElement.ownerDocument,d,f),h.replaceChild(h.adoptNode(this.documentElement),h.documentElement),h.close(),m},r.prototype.createElementClone=function(a){if(_u(a,2))debugger;if($p(a))return this.createCanvasClone(a);if(_B(a))return this.createVideoClone(a);if(VB(a))return this.createStyleClone(a);var l=a.cloneNode(!1);return Ju(l)&&(Ju(a)&&a.currentSrc&&a.currentSrc!==a.src&&(l.src=a.currentSrc,l.srcset=""),l.loading==="lazy"&&(l.loading="eager")),XB(l)?this.createCustomElementClone(l):l},r.prototype.createCustomElementClone=function(a){var l=document.createElement("html2canvascustomelement");return yu(a.style,l),l},r.prototype.createStyleClone=function(a){try{var l=a.sheet;if(l&&l.cssRules){var i=[].slice.call(l.cssRules,0).reduce(function(d,f){return f&&typeof f.cssText=="string"?d+f.cssText:d},""),u=a.cloneNode(!1);return u.textContent=i,u}}catch(d){if(this.context.logger.error("Unable to access cssRules property",d),d.name!=="SecurityError")throw d}return a.cloneNode(!1)},r.prototype.createCanvasClone=function(a){var l;if(this.options.inlineImages&&a.ownerDocument){var i=a.ownerDocument.createElement("img");try{return i.src=a.toDataURL(),i}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",a)}}var u=a.cloneNode(!1);try{u.width=a.width,u.height=a.height;var d=a.getContext("2d"),f=u.getContext("2d");if(f)if(!this.options.allowTaint&&d)f.putImageData(d.getImageData(0,0,a.width,a.height),0,0);else{var B=(l=a.getContext("webgl2"))!==null&&l!==void 0?l:a.getContext("webgl");if(B){var h=B.getContextAttributes();h?.preserveDrawingBuffer===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",a)}f.drawImage(a,0,0)}return u}catch{this.context.logger.info("Unable to clone canvas as it is tainted",a)}return u},r.prototype.createVideoClone=function(a){var l=a.ownerDocument.createElement("canvas");l.width=a.offsetWidth,l.height=a.offsetHeight;var i=l.getContext("2d");try{return i&&(i.drawImage(a,0,0,l.width,l.height),this.options.allowTaint||i.getImageData(0,0,l.width,l.height)),l}catch{this.context.logger.info("Unable to clone video as it is tainted",a)}var u=a.ownerDocument.createElement("canvas");return u.width=a.offsetWidth,u.height=a.offsetHeight,u},r.prototype.appendChildNode=function(a,l,i){(!fr(l)||!wQ(l)&&!l.hasAttribute(n0)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(l)))&&(!this.options.copyStyles||!fr(l)||!VB(l))&&a.appendChild(this.cloneNode(l,i))},r.prototype.cloneChildNodes=function(a,l,i){for(var u=this,d=a.shadowRoot?a.shadowRoot.firstChild:a.firstChild;d;d=d.nextSibling)if(fr(d)&&e0(d)&&typeof d.assignedNodes=="function"){var f=d.assignedNodes();f.length&&f.forEach(function(B){return u.appendChildNode(l,B,i)})}else this.appendChildNode(l,d,i)},r.prototype.cloneNode=function(a,l){if(Wp(a))return document.createTextNode(a.data);if(!a.ownerDocument)return a.cloneNode(!1);var i=a.ownerDocument.defaultView;if(i&&fr(a)&&(Yu(a)||bs(a))){var u=this.createElementClone(a);u.style.transitionProperty="none";var d=i.getComputedStyle(a),f=i.getComputedStyle(a,":before"),B=i.getComputedStyle(a,":after");this.referenceElement===a&&Yu(u)&&(this.clonedReferenceElement=u),sd(u)&&NQ(u);var h=this.counters.parse(new HB(this.context,d)),m=this.resolvePseudoContent(a,u,f,Di.BEFORE);XB(a)&&(l=!0),_B(a)||this.cloneChildNodes(a,u,l),m&&u.insertBefore(m,u.firstChild);var b=this.resolvePseudoContent(a,u,B,Di.AFTER);return b&&u.appendChild(b),this.counters.pop(h),(d&&(this.options.copyStyles||bs(a))&&!A0(a)||l)&&yu(d,u),(a.scrollTop!==0||a.scrollLeft!==0)&&this.scrolledElements.push([u,a.scrollLeft,a.scrollTop]),(Fs(a)||Es(a))&&(Fs(u)||Es(u))&&(u.value=a.value),u}return a.cloneNode(!1)},r.prototype.resolvePseudoContent=function(a,l,i,u){var d=this;if(i){var f=i.content,B=l.ownerDocument;if(!(!B||!f||f==="none"||f==="-moz-alt-content"||i.display==="none")){this.counters.parse(new HB(this.context,i));var h=new Bv(this.context,i),m=B.createElement("html2canvaspseudoelement");yu(i,m),h.content.forEach(function(y){if(y.type===0)m.appendChild(B.createTextNode(y.value));else if(y.type===22){var T=B.createElement("img");T.src=y.value,T.style.opacity="1",m.appendChild(T)}else if(y.type===18){if(y.name==="attr"){var W=y.values.filter(xe);W.length&&m.appendChild(B.createTextNode(a.getAttribute(W[0].value)||""))}else if(y.name==="counter"){var Z=y.values.filter(Br),nA=Z[0],hA=Z[1];if(nA&&xe(nA)){var oA=d.counters.getCounterValue(nA.value),lA=hA&&xe(hA)?Gu.parse(d.context,hA.value):3;m.appendChild(B.createTextNode(Ni(oA,lA,!1)))}}else if(y.name==="counters"){var CA=y.values.filter(Br),nA=CA[0],BA=CA[1],hA=CA[2];if(nA&&xe(nA)){var eA=d.counters.getCounterValues(nA.value),P=hA&&xe(hA)?Gu.parse(d.context,hA.value):3,yA=BA&&BA.type===0?BA.value:"",L=eA.map(function(sA){return Ni(sA,P,!1)}).join(yA);m.appendChild(B.createTextNode(L))}}}else if(y.type===20)switch(y.value){case"open-quote":m.appendChild(B.createTextNode(EB(h.quotes,d.quoteDepth++,!0)));break;case"close-quote":m.appendChild(B.createTextNode(EB(h.quotes,--d.quoteDepth,!1)));break;default:m.appendChild(B.createTextNode(y.value))}}),m.className=Zu+" "+qu;var b=u===Di.BEFORE?" "+Zu:" "+qu;return bs(l)?l.className.baseValue+=b:l.className+=b,m}}},r.destroy=function(a){return a.parentNode?(a.parentNode.removeChild(a),!0):!1},r}(),Di;(function(r){r[r.BEFORE=0]="BEFORE",r[r.AFTER=1]="AFTER"})(Di||(Di={}));var vQ=function(r,a){var l=r.createElement("iframe");return l.className="html2canvas-container",l.style.visibility="hidden",l.style.position="fixed",l.style.left="-10000px",l.style.top="0px",l.style.border="0",l.width=a.width.toString(),l.height=a.height.toString(),l.scrolling="no",l.setAttribute(n0,"true"),r.body.appendChild(l),l},QQ=function(r){return new Promise(function(a){if(r.complete){a();return}if(!r.src){a();return}r.onload=a,r.onerror=a})},UQ=function(r){return Promise.all([].slice.call(r.images,0).map(QQ))},FQ=function(r){return new Promise(function(a,l){var i=r.contentWindow;if(!i)return l("No window assigned for iframe");var u=i.document;i.onload=r.onload=function(){i.onload=r.onload=null;var d=setInterval(function(){u.body.childNodes.length>0&&u.readyState==="complete"&&(clearInterval(d),a(r))},50)}})},EQ=["all","d","content"],yu=function(r,a){for(var l=r.length-1;l>=0;l--){var i=r.item(l);EQ.indexOf(i)===-1&&a.style.setProperty(i,r.getPropertyValue(i))}return a},HQ=function(r){var a="";return r&&(a+="<!DOCTYPE ",r.name&&(a+=r.name),r.internalSubset&&(a+=r.internalSubset),r.publicId&&(a+='"'+r.publicId+'"'),r.systemId&&(a+='"'+r.systemId+'"'),a+=">"),a},SQ=function(r,a,l){r&&r.defaultView&&(a!==r.defaultView.pageXOffset||l!==r.defaultView.pageYOffset)&&r.defaultView.scrollTo(a,l)},DQ=function(r){var a=r[0],l=r[1],i=r[2];a.scrollLeft=l,a.scrollTop=i},TQ=":before",jQ=":after",Zu="___html2canvas___pseudoelement_before",qu="___html2canvas___pseudoelement_after",$B=`{
    content: "" !important;
    display: none !important;
}`,NQ=function(r){MQ(r,"."+Zu+TQ+$B+`
         .`+qu+jQ+$B)},MQ=function(r,a){var l=r.ownerDocument;if(l){var i=l.createElement("style");i.textContent=a,r.appendChild(i)}},a0=function(){function r(){}return r.getOrigin=function(a){var l=r._link;return l?(l.href=a,l.href=l.href,l.protocol+l.hostname+l.port):"about:blank"},r.isSameOrigin=function(a){return r.getOrigin(a)===r._origin},r.setContext=function(a){r._link=a.document.createElement("a"),r._origin=r.getOrigin(a.location.href)},r._origin="about:blank",r}(),IQ=function(){function r(a,l){this.context=a,this._options=l,this._cache={}}return r.prototype.addImage=function(a){var l=Promise.resolve();return this.has(a)||(Qu(a)||OQ(a))&&(this._cache[a]=this.loadImage(a)).catch(function(){}),l},r.prototype.match=function(a){return this._cache[a]},r.prototype.loadImage=function(a){return ot(this,void 0,void 0,function(){var l,i,u,d,f=this;return rt(this,function(B){switch(B.label){case 0:return l=a0.isSameOrigin(a),i=!vu(a)&&this._options.useCORS===!0&&$e.SUPPORT_CORS_IMAGES&&!l,u=!vu(a)&&!l&&!Qu(a)&&typeof this._options.proxy=="string"&&$e.SUPPORT_CORS_XHR&&!i,!l&&this._options.allowTaint===!1&&!vu(a)&&!Qu(a)&&!u&&!i?[2]:(d=a,u?[4,this.proxy(d)]:[3,2]);case 1:d=B.sent(),B.label=2;case 2:return this.context.logger.debug("Added image "+a.substring(0,256)),[4,new Promise(function(h,m){var b=new Image;b.onload=function(){return h(b)},b.onerror=m,(RQ(d)||i)&&(b.crossOrigin="anonymous"),b.src=d,b.complete===!0&&setTimeout(function(){return h(b)},500),f._options.imageTimeout>0&&setTimeout(function(){return m("Timed out ("+f._options.imageTimeout+"ms) loading image")},f._options.imageTimeout)})];case 3:return[2,B.sent()]}})})},r.prototype.has=function(a){return typeof this._cache[a]<"u"},r.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},r.prototype.proxy=function(a){var l=this,i=this._options.proxy;if(!i)throw new Error("No proxy defined");var u=a.substring(0,256);return new Promise(function(d,f){var B=$e.SUPPORT_RESPONSE_TYPE?"blob":"text",h=new XMLHttpRequest;h.onload=function(){if(h.status===200)if(B==="text")d(h.response);else{var y=new FileReader;y.addEventListener("load",function(){return d(y.result)},!1),y.addEventListener("error",function(T){return f(T)},!1),y.readAsDataURL(h.response)}else f("Failed to proxy resource "+u+" with status code "+h.status)},h.onerror=f;var m=i.indexOf("?")>-1?"&":"?";if(h.open("GET",""+i+m+"url="+encodeURIComponent(a)+"&responseType="+B),B!=="text"&&h instanceof XMLHttpRequest&&(h.responseType=B),l._options.imageTimeout){var b=l._options.imageTimeout;h.timeout=b,h.ontimeout=function(){return f("Timed out ("+b+"ms) proxying "+u)}}h.send()})},r}(),LQ=/^data:image\/svg\+xml/i,kQ=/^data:image\/.*;base64,/i,KQ=/^data:image\/.*/i,OQ=function(r){return $e.SUPPORT_SVG_DRAWING||!zQ(r)},vu=function(r){return KQ.test(r)},RQ=function(r){return kQ.test(r)},Qu=function(r){return r.substr(0,4)==="blob"},zQ=function(r){return r.substr(-3).toLowerCase()==="svg"||LQ.test(r)},HA=function(){function r(a,l){this.type=0,this.x=a,this.y=l}return r.prototype.add=function(a,l){return new r(this.x+a,this.y+l)},r}(),or=function(r,a,l){return new HA(r.x+(a.x-r.x)*l,r.y+(a.y-r.y)*l)},gs=function(){function r(a,l,i,u){this.type=1,this.start=a,this.startControl=l,this.endControl=i,this.end=u}return r.prototype.subdivide=function(a,l){var i=or(this.start,this.startControl,a),u=or(this.startControl,this.endControl,a),d=or(this.endControl,this.end,a),f=or(i,u,a),B=or(u,d,a),h=or(f,B,a);return l?new r(this.start,i,f,h):new r(h,B,d,this.end)},r.prototype.add=function(a,l){return new r(this.start.add(a,l),this.startControl.add(a,l),this.endControl.add(a,l),this.end.add(a,l))},r.prototype.reverse=function(){return new r(this.end,this.endControl,this.startControl,this.start)},r}(),kt=function(r){return r.type===1},GQ=function(){function r(a){var l=a.styles,i=a.bounds,u=vi(l.borderTopLeftRadius,i.width,i.height),d=u[0],f=u[1],B=vi(l.borderTopRightRadius,i.width,i.height),h=B[0],m=B[1],b=vi(l.borderBottomRightRadius,i.width,i.height),y=b[0],T=b[1],W=vi(l.borderBottomLeftRadius,i.width,i.height),Z=W[0],nA=W[1],hA=[];hA.push((d+h)/i.width),hA.push((Z+y)/i.width),hA.push((f+nA)/i.height),hA.push((m+T)/i.height);var oA=Math.max.apply(Math,hA);oA>1&&(d/=oA,f/=oA,h/=oA,m/=oA,y/=oA,T/=oA,Z/=oA,nA/=oA);var lA=i.width-h,CA=i.height-T,BA=i.width-y,eA=i.height-nA,P=l.borderTopWidth,yA=l.borderRightWidth,L=l.borderBottomWidth,z=l.borderLeftWidth,wA=Ce(l.paddingTop,a.bounds.width),sA=Ce(l.paddingRight,a.bounds.width),dA=Ce(l.paddingBottom,a.bounds.width),UA=Ce(l.paddingLeft,a.bounds.width);this.topLeftBorderDoubleOuterBox=d>0||f>0?Ee(i.left+z/3,i.top+P/3,d-z/3,f-P/3,de.TOP_LEFT):new HA(i.left+z/3,i.top+P/3),this.topRightBorderDoubleOuterBox=d>0||f>0?Ee(i.left+lA,i.top+P/3,h-yA/3,m-P/3,de.TOP_RIGHT):new HA(i.left+i.width-yA/3,i.top+P/3),this.bottomRightBorderDoubleOuterBox=y>0||T>0?Ee(i.left+BA,i.top+CA,y-yA/3,T-L/3,de.BOTTOM_RIGHT):new HA(i.left+i.width-yA/3,i.top+i.height-L/3),this.bottomLeftBorderDoubleOuterBox=Z>0||nA>0?Ee(i.left+z/3,i.top+eA,Z-z/3,nA-L/3,de.BOTTOM_LEFT):new HA(i.left+z/3,i.top+i.height-L/3),this.topLeftBorderDoubleInnerBox=d>0||f>0?Ee(i.left+z*2/3,i.top+P*2/3,d-z*2/3,f-P*2/3,de.TOP_LEFT):new HA(i.left+z*2/3,i.top+P*2/3),this.topRightBorderDoubleInnerBox=d>0||f>0?Ee(i.left+lA,i.top+P*2/3,h-yA*2/3,m-P*2/3,de.TOP_RIGHT):new HA(i.left+i.width-yA*2/3,i.top+P*2/3),this.bottomRightBorderDoubleInnerBox=y>0||T>0?Ee(i.left+BA,i.top+CA,y-yA*2/3,T-L*2/3,de.BOTTOM_RIGHT):new HA(i.left+i.width-yA*2/3,i.top+i.height-L*2/3),this.bottomLeftBorderDoubleInnerBox=Z>0||nA>0?Ee(i.left+z*2/3,i.top+eA,Z-z*2/3,nA-L*2/3,de.BOTTOM_LEFT):new HA(i.left+z*2/3,i.top+i.height-L*2/3),this.topLeftBorderStroke=d>0||f>0?Ee(i.left+z/2,i.top+P/2,d-z/2,f-P/2,de.TOP_LEFT):new HA(i.left+z/2,i.top+P/2),this.topRightBorderStroke=d>0||f>0?Ee(i.left+lA,i.top+P/2,h-yA/2,m-P/2,de.TOP_RIGHT):new HA(i.left+i.width-yA/2,i.top+P/2),this.bottomRightBorderStroke=y>0||T>0?Ee(i.left+BA,i.top+CA,y-yA/2,T-L/2,de.BOTTOM_RIGHT):new HA(i.left+i.width-yA/2,i.top+i.height-L/2),this.bottomLeftBorderStroke=Z>0||nA>0?Ee(i.left+z/2,i.top+eA,Z-z/2,nA-L/2,de.BOTTOM_LEFT):new HA(i.left+z/2,i.top+i.height-L/2),this.topLeftBorderBox=d>0||f>0?Ee(i.left,i.top,d,f,de.TOP_LEFT):new HA(i.left,i.top),this.topRightBorderBox=h>0||m>0?Ee(i.left+lA,i.top,h,m,de.TOP_RIGHT):new HA(i.left+i.width,i.top),this.bottomRightBorderBox=y>0||T>0?Ee(i.left+BA,i.top+CA,y,T,de.BOTTOM_RIGHT):new HA(i.left+i.width,i.top+i.height),this.bottomLeftBorderBox=Z>0||nA>0?Ee(i.left,i.top+eA,Z,nA,de.BOTTOM_LEFT):new HA(i.left,i.top+i.height),this.topLeftPaddingBox=d>0||f>0?Ee(i.left+z,i.top+P,Math.max(0,d-z),Math.max(0,f-P),de.TOP_LEFT):new HA(i.left+z,i.top+P),this.topRightPaddingBox=h>0||m>0?Ee(i.left+Math.min(lA,i.width-yA),i.top+P,lA>i.width+yA?0:Math.max(0,h-yA),Math.max(0,m-P),de.TOP_RIGHT):new HA(i.left+i.width-yA,i.top+P),this.bottomRightPaddingBox=y>0||T>0?Ee(i.left+Math.min(BA,i.width-z),i.top+Math.min(CA,i.height-L),Math.max(0,y-yA),Math.max(0,T-L),de.BOTTOM_RIGHT):new HA(i.left+i.width-yA,i.top+i.height-L),this.bottomLeftPaddingBox=Z>0||nA>0?Ee(i.left+z,i.top+Math.min(eA,i.height-L),Math.max(0,Z-z),Math.max(0,nA-L),de.BOTTOM_LEFT):new HA(i.left+z,i.top+i.height-L),this.topLeftContentBox=d>0||f>0?Ee(i.left+z+UA,i.top+P+wA,Math.max(0,d-(z+UA)),Math.max(0,f-(P+wA)),de.TOP_LEFT):new HA(i.left+z+UA,i.top+P+wA),this.topRightContentBox=h>0||m>0?Ee(i.left+Math.min(lA,i.width+z+UA),i.top+P+wA,lA>i.width+z+UA?0:h-z+UA,m-(P+wA),de.TOP_RIGHT):new HA(i.left+i.width-(yA+sA),i.top+P+wA),this.bottomRightContentBox=y>0||T>0?Ee(i.left+Math.min(BA,i.width-(z+UA)),i.top+Math.min(CA,i.height+P+wA),Math.max(0,y-(yA+sA)),T-(L+dA),de.BOTTOM_RIGHT):new HA(i.left+i.width-(yA+sA),i.top+i.height-(L+dA)),this.bottomLeftContentBox=Z>0||nA>0?Ee(i.left+z+UA,i.top+eA,Math.max(0,Z-(z+UA)),nA-(L+dA),de.BOTTOM_LEFT):new HA(i.left+z+UA,i.top+i.height-(L+dA))}return r}(),de;(function(r){r[r.TOP_LEFT=0]="TOP_LEFT",r[r.TOP_RIGHT=1]="TOP_RIGHT",r[r.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",r[r.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(de||(de={}));var Ee=function(r,a,l,i,u){var d=4*((Math.sqrt(2)-1)/3),f=l*d,B=i*d,h=r+l,m=a+i;switch(u){case de.TOP_LEFT:return new gs(new HA(r,m),new HA(r,m-B),new HA(h-f,a),new HA(h,a));case de.TOP_RIGHT:return new gs(new HA(r,a),new HA(r+f,a),new HA(h,m-B),new HA(h,m));case de.BOTTOM_RIGHT:return new gs(new HA(h,a),new HA(h,a+B),new HA(r+f,m),new HA(r,m));case de.BOTTOM_LEFT:default:return new gs(new HA(h,m),new HA(h-f,m),new HA(r,a+B),new HA(r,a))}},Hs=function(r){return[r.topLeftBorderBox,r.topRightBorderBox,r.bottomRightBorderBox,r.bottomLeftBorderBox]},_Q=function(r){return[r.topLeftContentBox,r.topRightContentBox,r.bottomRightContentBox,r.bottomLeftContentBox]},Ss=function(r){return[r.topLeftPaddingBox,r.topRightPaddingBox,r.bottomRightPaddingBox,r.bottomLeftPaddingBox]},VQ=function(){function r(a,l,i){this.offsetX=a,this.offsetY=l,this.matrix=i,this.type=0,this.target=6}return r}(),hs=function(){function r(a,l){this.path=a,this.target=l,this.type=1}return r}(),XQ=function(){function r(a){this.opacity=a,this.type=2,this.target=6}return r}(),YQ=function(r){return r.type===0},r0=function(r){return r.type===1},JQ=function(r){return r.type===2},Ap=function(r,a){return r.length===a.length?r.some(function(l,i){return l===a[i]}):!1},ZQ=function(r,a,l,i,u){return r.map(function(d,f){switch(f){case 0:return d.add(a,l);case 1:return d.add(a+i,l);case 2:return d.add(a+i,l+u);case 3:return d.add(a,l+u)}return d})},i0=function(){function r(a){this.element=a,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return r}(),l0=function(){function r(a,l){if(this.container=a,this.parent=l,this.effects=[],this.curves=new GQ(this.container),this.container.styles.opacity<1&&this.effects.push(new XQ(this.container.styles.opacity)),this.container.styles.transform!==null){var i=this.container.bounds.left+this.container.styles.transformOrigin[0].number,u=this.container.bounds.top+this.container.styles.transformOrigin[1].number,d=this.container.styles.transform;this.effects.push(new VQ(i,u,d))}if(this.container.styles.overflowX!==0){var f=Hs(this.curves),B=Ss(this.curves);Ap(f,B)?this.effects.push(new hs(f,6)):(this.effects.push(new hs(f,2)),this.effects.push(new hs(B,4)))}}return r.prototype.getEffects=function(a){for(var l=[2,3].indexOf(this.container.styles.position)===-1,i=this.parent,u=this.effects.slice(0);i;){var d=i.effects.filter(function(h){return!r0(h)});if(l||i.container.styles.position!==0||!i.parent){if(u.unshift.apply(u,d),l=[2,3].indexOf(i.container.styles.position)===-1,i.container.styles.overflowX!==0){var f=Hs(i.curves),B=Ss(i.curves);Ap(f,B)||u.unshift(new hs(B,6))}}else u.unshift.apply(u,d);i=i.parent}return u.filter(function(h){return Ge(h.target,a)})},r}(),Wu=function(r,a,l,i){r.container.elements.forEach(function(u){var d=Ge(u.flags,4),f=Ge(u.flags,2),B=new l0(u,r);Ge(u.styles.display,2048)&&i.push(B);var h=Ge(u.flags,8)?[]:i;if(d||f){var m=d||u.styles.isPositioned()?l:a,b=new i0(B);if(u.styles.isPositioned()||u.styles.opacity<1||u.styles.isTransformed()){var y=u.styles.zIndex.order;if(y<0){var T=0;m.negativeZIndex.some(function(Z,nA){return y>Z.element.container.styles.zIndex.order?(T=nA,!1):T>0}),m.negativeZIndex.splice(T,0,b)}else if(y>0){var W=0;m.positiveZIndex.some(function(Z,nA){return y>=Z.element.container.styles.zIndex.order?(W=nA+1,!1):W>0}),m.positiveZIndex.splice(W,0,b)}else m.zeroOrAutoZIndexOrTransformedOrOpacity.push(b)}else u.styles.isFloating()?m.nonPositionedFloats.push(b):m.nonPositionedInlineLevel.push(b);Wu(B,b,d?b:l,h)}else u.styles.isInlineLevel()?a.inlineLevel.push(B):a.nonInlineLevel.push(B),Wu(B,a,l,h);Ge(u.flags,8)&&s0(u,h)})},s0=function(r,a){for(var l=r instanceof Xu?r.start:1,i=r instanceof Xu?r.reversed:!1,u=0;u<a.length;u++){var d=a[u];d.container instanceof Vp&&typeof d.container.value=="number"&&d.container.value!==0&&(l=d.container.value),d.listValue=Ni(l,d.container.styles.listStyleType,!0),l+=i?-1:1}},qQ=function(r){var a=new l0(r,null),l=new i0(a),i=[];return Wu(a,l,l,i),s0(a.container,i),l},ep=function(r,a){switch(a){case 0:return Ot(r.topLeftBorderBox,r.topLeftPaddingBox,r.topRightBorderBox,r.topRightPaddingBox);case 1:return Ot(r.topRightBorderBox,r.topRightPaddingBox,r.bottomRightBorderBox,r.bottomRightPaddingBox);case 2:return Ot(r.bottomRightBorderBox,r.bottomRightPaddingBox,r.bottomLeftBorderBox,r.bottomLeftPaddingBox);case 3:default:return Ot(r.bottomLeftBorderBox,r.bottomLeftPaddingBox,r.topLeftBorderBox,r.topLeftPaddingBox)}},WQ=function(r,a){switch(a){case 0:return Ot(r.topLeftBorderBox,r.topLeftBorderDoubleOuterBox,r.topRightBorderBox,r.topRightBorderDoubleOuterBox);case 1:return Ot(r.topRightBorderBox,r.topRightBorderDoubleOuterBox,r.bottomRightBorderBox,r.bottomRightBorderDoubleOuterBox);case 2:return Ot(r.bottomRightBorderBox,r.bottomRightBorderDoubleOuterBox,r.bottomLeftBorderBox,r.bottomLeftBorderDoubleOuterBox);case 3:default:return Ot(r.bottomLeftBorderBox,r.bottomLeftBorderDoubleOuterBox,r.topLeftBorderBox,r.topLeftBorderDoubleOuterBox)}},PQ=function(r,a){switch(a){case 0:return Ot(r.topLeftBorderDoubleInnerBox,r.topLeftPaddingBox,r.topRightBorderDoubleInnerBox,r.topRightPaddingBox);case 1:return Ot(r.topRightBorderDoubleInnerBox,r.topRightPaddingBox,r.bottomRightBorderDoubleInnerBox,r.bottomRightPaddingBox);case 2:return Ot(r.bottomRightBorderDoubleInnerBox,r.bottomRightPaddingBox,r.bottomLeftBorderDoubleInnerBox,r.bottomLeftPaddingBox);case 3:default:return Ot(r.bottomLeftBorderDoubleInnerBox,r.bottomLeftPaddingBox,r.topLeftBorderDoubleInnerBox,r.topLeftPaddingBox)}},$Q=function(r,a){switch(a){case 0:return Bs(r.topLeftBorderStroke,r.topRightBorderStroke);case 1:return Bs(r.topRightBorderStroke,r.bottomRightBorderStroke);case 2:return Bs(r.bottomRightBorderStroke,r.bottomLeftBorderStroke);case 3:default:return Bs(r.bottomLeftBorderStroke,r.topLeftBorderStroke)}},Bs=function(r,a){var l=[];return kt(r)?l.push(r.subdivide(.5,!1)):l.push(r),kt(a)?l.push(a.subdivide(.5,!0)):l.push(a),l},Ot=function(r,a,l,i){var u=[];return kt(r)?u.push(r.subdivide(.5,!1)):u.push(r),kt(l)?u.push(l.subdivide(.5,!0)):u.push(l),kt(i)?u.push(i.subdivide(.5,!0).reverse()):u.push(i),kt(a)?u.push(a.subdivide(.5,!1).reverse()):u.push(a),u},o0=function(r){var a=r.bounds,l=r.styles;return a.add(l.borderLeftWidth,l.borderTopWidth,-(l.borderRightWidth+l.borderLeftWidth),-(l.borderTopWidth+l.borderBottomWidth))},Ds=function(r){var a=r.styles,l=r.bounds,i=Ce(a.paddingLeft,l.width),u=Ce(a.paddingRight,l.width),d=Ce(a.paddingTop,l.width),f=Ce(a.paddingBottom,l.width);return l.add(i+a.borderLeftWidth,d+a.borderTopWidth,-(a.borderRightWidth+a.borderLeftWidth+i+u),-(a.borderTopWidth+a.borderBottomWidth+d+f))},A1=function(r,a){return r===0?a.bounds:r===2?Ds(a):o0(a)},e1=function(r,a){return r===0?a.bounds:r===2?Ds(a):o0(a)},Uu=function(r,a,l){var i=A1(dr(r.styles.backgroundOrigin,a),r),u=e1(dr(r.styles.backgroundClip,a),r),d=t1(dr(r.styles.backgroundSize,a),l,i),f=d[0],B=d[1],h=vi(dr(r.styles.backgroundPosition,a),i.width-f,i.height-B),m=n1(dr(r.styles.backgroundRepeat,a),h,d,i,u),b=Math.round(i.left+h[0]),y=Math.round(i.top+h[1]);return[m,b,y,f,B]},cr=function(r){return xe(r)&&r.value===gr.AUTO},ps=function(r){return typeof r=="number"},t1=function(r,a,l){var i=a[0],u=a[1],d=a[2],f=r[0],B=r[1];if(!f)return[0,0];if(Ke(f)&&B&&Ke(B))return[Ce(f,l.width),Ce(B,l.height)];var h=ps(d);if(xe(f)&&(f.value===gr.CONTAIN||f.value===gr.COVER)){if(ps(d)){var m=l.width/l.height;return m<d!=(f.value===gr.COVER)?[l.width,l.width/d]:[l.height*d,l.height]}return[l.width,l.height]}var b=ps(i),y=ps(u),T=b||y;if(cr(f)&&(!B||cr(B))){if(b&&y)return[i,u];if(!h&&!T)return[l.width,l.height];if(T&&h){var W=b?i:u*d,Z=y?u:i/d;return[W,Z]}var nA=b?i:l.width,hA=y?u:l.height;return[nA,hA]}if(h){var oA=0,lA=0;return Ke(f)?oA=Ce(f,l.width):Ke(B)&&(lA=Ce(B,l.height)),cr(f)?oA=lA*d:(!B||cr(B))&&(lA=oA/d),[oA,lA]}var CA=null,BA=null;if(Ke(f)?CA=Ce(f,l.width):B&&Ke(B)&&(BA=Ce(B,l.height)),CA!==null&&(!B||cr(B))&&(BA=b&&y?CA/i*u:l.height),BA!==null&&cr(f)&&(CA=b&&y?BA/u*i:l.width),CA!==null&&BA!==null)return[CA,BA];throw new Error("Unable to calculate background-size for element")},dr=function(r,a){var l=r[a];return typeof l>"u"?r[0]:l},n1=function(r,a,l,i,u){var d=a[0],f=a[1],B=l[0],h=l[1];switch(r){case 2:return[new HA(Math.round(i.left),Math.round(i.top+f)),new HA(Math.round(i.left+i.width),Math.round(i.top+f)),new HA(Math.round(i.left+i.width),Math.round(h+i.top+f)),new HA(Math.round(i.left),Math.round(h+i.top+f))];case 3:return[new HA(Math.round(i.left+d),Math.round(i.top)),new HA(Math.round(i.left+d+B),Math.round(i.top)),new HA(Math.round(i.left+d+B),Math.round(i.height+i.top)),new HA(Math.round(i.left+d),Math.round(i.height+i.top))];case 1:return[new HA(Math.round(i.left+d),Math.round(i.top+f)),new HA(Math.round(i.left+d+B),Math.round(i.top+f)),new HA(Math.round(i.left+d+B),Math.round(i.top+f+h)),new HA(Math.round(i.left+d),Math.round(i.top+f+h))];default:return[new HA(Math.round(u.left),Math.round(u.top)),new HA(Math.round(u.left+u.width),Math.round(u.top)),new HA(Math.round(u.left+u.width),Math.round(u.height+u.top)),new HA(Math.round(u.left),Math.round(u.height+u.top))]}},a1="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",tp="Hidden Text",r1=function(){function r(a){this._data={},this._document=a}return r.prototype.parseMetrics=function(a,l){var i=this._document.createElement("div"),u=this._document.createElement("img"),d=this._document.createElement("span"),f=this._document.body;i.style.visibility="hidden",i.style.fontFamily=a,i.style.fontSize=l,i.style.margin="0",i.style.padding="0",i.style.whiteSpace="nowrap",f.appendChild(i),u.src=a1,u.width=1,u.height=1,u.style.margin="0",u.style.padding="0",u.style.verticalAlign="baseline",d.style.fontFamily=a,d.style.fontSize=l,d.style.margin="0",d.style.padding="0",d.appendChild(this._document.createTextNode(tp)),i.appendChild(d),i.appendChild(u);var B=u.offsetTop-d.offsetTop+2;i.removeChild(d),i.appendChild(this._document.createTextNode(tp)),i.style.lineHeight="normal",u.style.verticalAlign="super";var h=u.offsetTop-i.offsetTop+2;return f.removeChild(i),{baseline:B,middle:h}},r.prototype.getMetrics=function(a,l){var i=a+" "+l;return typeof this._data[i]>"u"&&(this._data[i]=this.parseMetrics(a,l)),this._data[i]},r}(),c0=function(){function r(a,l){this.context=a,this.options=l}return r}(),i1=1e4,l1=function(r){Vt(a,r);function a(l,i){var u=r.call(this,l,i)||this;return u._activeEffects=[],u.canvas=i.canvas?i.canvas:document.createElement("canvas"),u.ctx=u.canvas.getContext("2d"),i.canvas||(u.canvas.width=Math.floor(i.width*i.scale),u.canvas.height=Math.floor(i.height*i.scale),u.canvas.style.width=i.width+"px",u.canvas.style.height=i.height+"px"),u.fontMetrics=new r1(document),u.ctx.scale(u.options.scale,u.options.scale),u.ctx.translate(-i.x,-i.y),u.ctx.textBaseline="bottom",u._activeEffects=[],u.context.logger.debug("Canvas renderer initialized ("+i.width+"x"+i.height+") with scale "+i.scale),u}return a.prototype.applyEffects=function(l){for(var i=this;this._activeEffects.length;)this.popEffect();l.forEach(function(u){return i.applyEffect(u)})},a.prototype.applyEffect=function(l){this.ctx.save(),JQ(l)&&(this.ctx.globalAlpha=l.opacity),YQ(l)&&(this.ctx.translate(l.offsetX,l.offsetY),this.ctx.transform(l.matrix[0],l.matrix[1],l.matrix[2],l.matrix[3],l.matrix[4],l.matrix[5]),this.ctx.translate(-l.offsetX,-l.offsetY)),r0(l)&&(this.path(l.path),this.ctx.clip()),this._activeEffects.push(l)},a.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},a.prototype.renderStack=function(l){return ot(this,void 0,void 0,function(){var i;return rt(this,function(u){switch(u.label){case 0:return i=l.element.container.styles,i.isVisible()?[4,this.renderStackContent(l)]:[3,2];case 1:u.sent(),u.label=2;case 2:return[2]}})})},a.prototype.renderNode=function(l){return ot(this,void 0,void 0,function(){return rt(this,function(i){switch(i.label){case 0:if(Ge(l.container.flags,16))debugger;return l.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(l)]:[3,3];case 1:return i.sent(),[4,this.renderNodeContent(l)];case 2:i.sent(),i.label=3;case 3:return[2]}})})},a.prototype.renderTextWithLetterSpacing=function(l,i,u){var d=this;if(i===0)this.ctx.fillText(l.text,l.bounds.left,l.bounds.top+u);else{var f=id(l.text);f.reduce(function(B,h){return d.ctx.fillText(h,B,l.bounds.top+u),B+d.ctx.measureText(h).width},l.bounds.left)}},a.prototype.createFontStyle=function(l){var i=l.fontVariant.filter(function(f){return f==="normal"||f==="small-caps"}).join(""),u=d1(l.fontFamily).join(", "),d=Li(l.fontSize)?""+l.fontSize.number+l.fontSize.unit:l.fontSize.number+"px";return[[l.fontStyle,i,l.fontWeight,d,u].join(" "),u,d]},a.prototype.renderTextNode=function(l,i){return ot(this,void 0,void 0,function(){var u,d,f,B,h,m,b,y,T=this;return rt(this,function(W){return u=this.createFontStyle(i),d=u[0],f=u[1],B=u[2],this.ctx.font=d,this.ctx.direction=i.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",h=this.fontMetrics.getMetrics(f,B),m=h.baseline,b=h.middle,y=i.paintOrder,l.textBounds.forEach(function(Z){y.forEach(function(nA){switch(nA){case 0:T.ctx.fillStyle=Ze(i.color),T.renderTextWithLetterSpacing(Z,i.letterSpacing,m);var hA=i.textShadow;hA.length&&Z.text.trim().length&&(hA.slice(0).reverse().forEach(function(oA){T.ctx.shadowColor=Ze(oA.color),T.ctx.shadowOffsetX=oA.offsetX.number*T.options.scale,T.ctx.shadowOffsetY=oA.offsetY.number*T.options.scale,T.ctx.shadowBlur=oA.blur.number,T.renderTextWithLetterSpacing(Z,i.letterSpacing,m)}),T.ctx.shadowColor="",T.ctx.shadowOffsetX=0,T.ctx.shadowOffsetY=0,T.ctx.shadowBlur=0),i.textDecorationLine.length&&(T.ctx.fillStyle=Ze(i.textDecorationColor||i.color),i.textDecorationLine.forEach(function(oA){switch(oA){case 1:T.ctx.fillRect(Z.bounds.left,Math.round(Z.bounds.top+m),Z.bounds.width,1);break;case 2:T.ctx.fillRect(Z.bounds.left,Math.round(Z.bounds.top),Z.bounds.width,1);break;case 3:T.ctx.fillRect(Z.bounds.left,Math.ceil(Z.bounds.top+b),Z.bounds.width,1);break}}));break;case 1:i.webkitTextStrokeWidth&&Z.text.trim().length&&(T.ctx.strokeStyle=Ze(i.webkitTextStrokeColor),T.ctx.lineWidth=i.webkitTextStrokeWidth,T.ctx.lineJoin=window.chrome?"miter":"round",T.ctx.strokeText(Z.text,Z.bounds.left,Z.bounds.top+m)),T.ctx.strokeStyle="",T.ctx.lineWidth=0,T.ctx.lineJoin="miter";break}})}),[2]})})},a.prototype.renderReplacedElement=function(l,i,u){if(u&&l.intrinsicWidth>0&&l.intrinsicHeight>0){var d=Ds(l),f=Ss(i);this.path(f),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(u,0,0,l.intrinsicWidth,l.intrinsicHeight,d.left,d.top,d.width,d.height),this.ctx.restore()}},a.prototype.renderNodeContent=function(l){return ot(this,void 0,void 0,function(){var i,u,d,f,B,h,lA,lA,m,b,y,T,BA,W,Z,eA,nA,hA,oA,lA,CA,BA,eA;return rt(this,function(P){switch(P.label){case 0:this.applyEffects(l.getEffects(4)),i=l.container,u=l.curves,d=i.styles,f=0,B=i.textNodes,P.label=1;case 1:return f<B.length?(h=B[f],[4,this.renderTextNode(h,d)]):[3,4];case 2:P.sent(),P.label=3;case 3:return f++,[3,1];case 4:if(!(i instanceof zp))return[3,8];P.label=5;case 5:return P.trys.push([5,7,,8]),[4,this.context.cache.match(i.src)];case 6:return lA=P.sent(),this.renderReplacedElement(i,u,lA),[3,8];case 7:return P.sent(),this.context.logger.error("Error loading image "+i.src),[3,8];case 8:if(i instanceof Gp&&this.renderReplacedElement(i,u,i.canvas),!(i instanceof _p))return[3,12];P.label=9;case 9:return P.trys.push([9,11,,12]),[4,this.context.cache.match(i.svg)];case 10:return lA=P.sent(),this.renderReplacedElement(i,u,lA),[3,12];case 11:return P.sent(),this.context.logger.error("Error loading svg "+i.svg.substring(0,255)),[3,12];case 12:return i instanceof Jp&&i.tree?(m=new a(this.context,{scale:this.options.scale,backgroundColor:i.backgroundColor,x:0,y:0,width:i.width,height:i.height}),[4,m.render(i.tree)]):[3,14];case 13:b=P.sent(),i.width&&i.height&&this.ctx.drawImage(b,0,0,i.width,i.height,i.bounds.left,i.bounds.top,i.bounds.width,i.bounds.height),P.label=14;case 14:if(i instanceof ld&&(y=Math.min(i.bounds.width,i.bounds.height),i.type===Qs?i.checked&&(this.ctx.save(),this.path([new HA(i.bounds.left+y*.39363,i.bounds.top+y*.79),new HA(i.bounds.left+y*.16,i.bounds.top+y*.5549),new HA(i.bounds.left+y*.27347,i.bounds.top+y*.44071),new HA(i.bounds.left+y*.39694,i.bounds.top+y*.5649),new HA(i.bounds.left+y*.72983,i.bounds.top+y*.23),new HA(i.bounds.left+y*.84,i.bounds.top+y*.34085),new HA(i.bounds.left+y*.39363,i.bounds.top+y*.79)]),this.ctx.fillStyle=Ze(GB),this.ctx.fill(),this.ctx.restore()):i.type===Us&&i.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(i.bounds.left+y/2,i.bounds.top+y/2,y/4,0,Math.PI*2,!0),this.ctx.fillStyle=Ze(GB),this.ctx.fill(),this.ctx.restore())),s1(i)&&i.value.length){switch(T=this.createFontStyle(d),BA=T[0],W=T[1],Z=this.fontMetrics.getMetrics(BA,W).baseline,this.ctx.font=BA,this.ctx.fillStyle=Ze(d.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=c1(i.styles.textAlign),eA=Ds(i),nA=0,i.styles.textAlign){case 1:nA+=eA.width/2;break;case 2:nA+=eA.width;break}hA=eA.add(nA,0,0,-eA.height/2+1),this.ctx.save(),this.path([new HA(eA.left,eA.top),new HA(eA.left+eA.width,eA.top),new HA(eA.left+eA.width,eA.top+eA.height),new HA(eA.left,eA.top+eA.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Si(i.value,hA),d.letterSpacing,Z),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!Ge(i.styles.display,2048))return[3,20];if(i.styles.listStyleImage===null)return[3,19];if(oA=i.styles.listStyleImage,oA.type!==0)return[3,18];lA=void 0,CA=oA.url,P.label=15;case 15:return P.trys.push([15,17,,18]),[4,this.context.cache.match(CA)];case 16:return lA=P.sent(),this.ctx.drawImage(lA,i.bounds.left-(lA.width+10),i.bounds.top),[3,18];case 17:return P.sent(),this.context.logger.error("Error loading list-style-image "+CA),[3,18];case 18:return[3,20];case 19:l.listValue&&i.styles.listStyleType!==-1&&(BA=this.createFontStyle(d)[0],this.ctx.font=BA,this.ctx.fillStyle=Ze(d.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",eA=new wn(i.bounds.left,i.bounds.top+Ce(i.styles.paddingTop,i.bounds.width),i.bounds.width,UB(d.lineHeight,d.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Si(l.listValue,eA),d.letterSpacing,UB(d.lineHeight,d.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),P.label=20;case 20:return[2]}})})},a.prototype.renderStackContent=function(l){return ot(this,void 0,void 0,function(){var i,u,oA,d,f,oA,B,h,oA,m,b,oA,y,T,oA,W,Z,oA,nA,hA,oA;return rt(this,function(lA){switch(lA.label){case 0:if(Ge(l.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(l.element)];case 1:lA.sent(),i=0,u=l.negativeZIndex,lA.label=2;case 2:return i<u.length?(oA=u[i],[4,this.renderStack(oA)]):[3,5];case 3:lA.sent(),lA.label=4;case 4:return i++,[3,2];case 5:return[4,this.renderNodeContent(l.element)];case 6:lA.sent(),d=0,f=l.nonInlineLevel,lA.label=7;case 7:return d<f.length?(oA=f[d],[4,this.renderNode(oA)]):[3,10];case 8:lA.sent(),lA.label=9;case 9:return d++,[3,7];case 10:B=0,h=l.nonPositionedFloats,lA.label=11;case 11:return B<h.length?(oA=h[B],[4,this.renderStack(oA)]):[3,14];case 12:lA.sent(),lA.label=13;case 13:return B++,[3,11];case 14:m=0,b=l.nonPositionedInlineLevel,lA.label=15;case 15:return m<b.length?(oA=b[m],[4,this.renderStack(oA)]):[3,18];case 16:lA.sent(),lA.label=17;case 17:return m++,[3,15];case 18:y=0,T=l.inlineLevel,lA.label=19;case 19:return y<T.length?(oA=T[y],[4,this.renderNode(oA)]):[3,22];case 20:lA.sent(),lA.label=21;case 21:return y++,[3,19];case 22:W=0,Z=l.zeroOrAutoZIndexOrTransformedOrOpacity,lA.label=23;case 23:return W<Z.length?(oA=Z[W],[4,this.renderStack(oA)]):[3,26];case 24:lA.sent(),lA.label=25;case 25:return W++,[3,23];case 26:nA=0,hA=l.positiveZIndex,lA.label=27;case 27:return nA<hA.length?(oA=hA[nA],[4,this.renderStack(oA)]):[3,30];case 28:lA.sent(),lA.label=29;case 29:return nA++,[3,27];case 30:return[2]}})})},a.prototype.mask=function(l){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(l.slice(0).reverse()),this.ctx.closePath()},a.prototype.path=function(l){this.ctx.beginPath(),this.formatPath(l),this.ctx.closePath()},a.prototype.formatPath=function(l){var i=this;l.forEach(function(u,d){var f=kt(u)?u.start:u;d===0?i.ctx.moveTo(f.x,f.y):i.ctx.lineTo(f.x,f.y),kt(u)&&i.ctx.bezierCurveTo(u.startControl.x,u.startControl.y,u.endControl.x,u.endControl.y,u.end.x,u.end.y)})},a.prototype.renderRepeat=function(l,i,u,d){this.path(l),this.ctx.fillStyle=i,this.ctx.translate(u,d),this.ctx.fill(),this.ctx.translate(-u,-d)},a.prototype.resizeImage=function(l,i,u){var d;if(l.width===i&&l.height===u)return l;var f=(d=this.canvas.ownerDocument)!==null&&d!==void 0?d:document,B=f.createElement("canvas");B.width=Math.max(1,i),B.height=Math.max(1,u);var h=B.getContext("2d");return h.drawImage(l,0,0,l.width,l.height,0,0,i,u),B},a.prototype.renderBackgroundImage=function(l){return ot(this,void 0,void 0,function(){var i,u,d,f,B,h;return rt(this,function(m){switch(m.label){case 0:i=l.styles.backgroundImage.length-1,u=function(b){var y,T,W,wA,M,J,UA,jA,L,Z,wA,M,J,UA,jA,nA,hA,oA,lA,CA,BA,eA,P,yA,L,z,wA,sA,dA,UA,jA,SA,M,J,pA,QA,C,v,K,E,Y,iA;return rt(this,function(H){switch(H.label){case 0:if(b.type!==0)return[3,5];y=void 0,T=b.url,H.label=1;case 1:return H.trys.push([1,3,,4]),[4,d.context.cache.match(T)];case 2:return y=H.sent(),[3,4];case 3:return H.sent(),d.context.logger.error("Error loading background-image "+T),[3,4];case 4:return y&&(W=Uu(l,i,[y.width,y.height,y.width/y.height]),wA=W[0],M=W[1],J=W[2],UA=W[3],jA=W[4],L=d.ctx.createPattern(d.resizeImage(y,UA,jA),"repeat"),d.renderRepeat(wA,L,M,J)),[3,6];case 5:YC(b)?(Z=Uu(l,i,[null,null,null]),wA=Z[0],M=Z[1],J=Z[2],UA=Z[3],jA=Z[4],nA=zC(b.angle,UA,jA),hA=nA[0],oA=nA[1],lA=nA[2],CA=nA[3],BA=nA[4],eA=document.createElement("canvas"),eA.width=UA,eA.height=jA,P=eA.getContext("2d"),yA=P.createLinearGradient(oA,CA,lA,BA),vB(b.stops,hA).forEach(function(uA){return yA.addColorStop(uA.stop,Ze(uA.color))}),P.fillStyle=yA,P.fillRect(0,0,UA,jA),UA>0&&jA>0&&(L=d.ctx.createPattern(eA,"repeat"),d.renderRepeat(wA,L,M,J))):JC(b)&&(z=Uu(l,i,[null,null,null]),wA=z[0],sA=z[1],dA=z[2],UA=z[3],jA=z[4],SA=b.position.length===0?[nd]:b.position,M=Ce(SA[0],UA),J=Ce(SA[SA.length-1],jA),pA=GC(b,M,J,UA,jA),QA=pA[0],C=pA[1],QA>0&&C>0&&(v=d.ctx.createRadialGradient(sA+M,dA+J,0,sA+M,dA+J,QA),vB(b.stops,QA*2).forEach(function(uA){return v.addColorStop(uA.stop,Ze(uA.color))}),d.path(wA),d.ctx.fillStyle=v,QA!==C?(K=l.bounds.left+.5*l.bounds.width,E=l.bounds.top+.5*l.bounds.height,Y=C/QA,iA=1/Y,d.ctx.save(),d.ctx.translate(K,E),d.ctx.transform(1,0,0,Y,0,0),d.ctx.translate(-K,-E),d.ctx.fillRect(sA,iA*(dA-E)+E,UA,jA*iA),d.ctx.restore()):d.ctx.fill())),H.label=6;case 6:return i--,[2]}})},d=this,f=0,B=l.styles.backgroundImage.slice(0).reverse(),m.label=1;case 1:return f<B.length?(h=B[f],[5,u(h)]):[3,4];case 2:m.sent(),m.label=3;case 3:return f++,[3,1];case 4:return[2]}})})},a.prototype.renderSolidBorder=function(l,i,u){return ot(this,void 0,void 0,function(){return rt(this,function(d){return this.path(ep(u,i)),this.ctx.fillStyle=Ze(l),this.ctx.fill(),[2]})})},a.prototype.renderDoubleBorder=function(l,i,u,d){return ot(this,void 0,void 0,function(){var f,B;return rt(this,function(h){switch(h.label){case 0:return i<3?[4,this.renderSolidBorder(l,u,d)]:[3,2];case 1:return h.sent(),[2];case 2:return f=WQ(d,u),this.path(f),this.ctx.fillStyle=Ze(l),this.ctx.fill(),B=PQ(d,u),this.path(B),this.ctx.fill(),[2]}})})},a.prototype.renderNodeBackgroundAndBorders=function(l){return ot(this,void 0,void 0,function(){var i,u,d,f,B,h,m,b,y=this;return rt(this,function(T){switch(T.label){case 0:return this.applyEffects(l.getEffects(2)),i=l.container.styles,u=!qn(i.backgroundColor)||i.backgroundImage.length,d=[{style:i.borderTopStyle,color:i.borderTopColor,width:i.borderTopWidth},{style:i.borderRightStyle,color:i.borderRightColor,width:i.borderRightWidth},{style:i.borderBottomStyle,color:i.borderBottomColor,width:i.borderBottomWidth},{style:i.borderLeftStyle,color:i.borderLeftColor,width:i.borderLeftWidth}],f=o1(dr(i.backgroundClip,0),l.curves),u||i.boxShadow.length?(this.ctx.save(),this.path(f),this.ctx.clip(),qn(i.backgroundColor)||(this.ctx.fillStyle=Ze(i.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(l.container)]):[3,2];case 1:T.sent(),this.ctx.restore(),i.boxShadow.slice(0).reverse().forEach(function(W){y.ctx.save();var Z=Hs(l.curves),nA=W.inset?0:i1,hA=ZQ(Z,-nA+(W.inset?1:-1)*W.spread.number,(W.inset?1:-1)*W.spread.number,W.spread.number*(W.inset?-2:2),W.spread.number*(W.inset?-2:2));W.inset?(y.path(Z),y.ctx.clip(),y.mask(hA)):(y.mask(Z),y.ctx.clip(),y.path(hA)),y.ctx.shadowOffsetX=W.offsetX.number+nA,y.ctx.shadowOffsetY=W.offsetY.number,y.ctx.shadowColor=Ze(W.color),y.ctx.shadowBlur=W.blur.number,y.ctx.fillStyle=W.inset?Ze(W.color):"rgba(0,0,0,1)",y.ctx.fill(),y.ctx.restore()}),T.label=2;case 2:B=0,h=0,m=d,T.label=3;case 3:return h<m.length?(b=m[h],b.style!==0&&!qn(b.color)&&b.width>0?b.style!==2?[3,5]:[4,this.renderDashedDottedBorder(b.color,b.width,B,l.curves,2)]:[3,11]):[3,13];case 4:return T.sent(),[3,11];case 5:return b.style!==3?[3,7]:[4,this.renderDashedDottedBorder(b.color,b.width,B,l.curves,3)];case 6:return T.sent(),[3,11];case 7:return b.style!==4?[3,9]:[4,this.renderDoubleBorder(b.color,b.width,B,l.curves)];case 8:return T.sent(),[3,11];case 9:return[4,this.renderSolidBorder(b.color,B,l.curves)];case 10:T.sent(),T.label=11;case 11:B++,T.label=12;case 12:return h++,[3,3];case 13:return[2]}})})},a.prototype.renderDashedDottedBorder=function(l,i,u,d,f){return ot(this,void 0,void 0,function(){var B,h,m,b,y,T,W,Z,nA,hA,oA,lA,CA,BA,eA,P,eA,P;return rt(this,function(yA){return this.ctx.save(),B=$Q(d,u),h=ep(d,u),f===2&&(this.path(h),this.ctx.clip()),kt(h[0])?(m=h[0].start.x,b=h[0].start.y):(m=h[0].x,b=h[0].y),kt(h[1])?(y=h[1].end.x,T=h[1].end.y):(y=h[1].x,T=h[1].y),u===0||u===2?W=Math.abs(m-y):W=Math.abs(b-T),this.ctx.beginPath(),f===3?this.formatPath(B):this.formatPath(h.slice(0,2)),Z=i<3?i*3:i*2,nA=i<3?i*2:i,f===3&&(Z=i,nA=i),hA=!0,W<=Z*2?hA=!1:W<=Z*2+nA?(oA=W/(2*Z+nA),Z*=oA,nA*=oA):(lA=Math.floor((W+nA)/(Z+nA)),CA=(W-lA*Z)/(lA-1),BA=(W-(lA+1)*Z)/lA,nA=BA<=0||Math.abs(nA-CA)<Math.abs(nA-BA)?CA:BA),hA&&(f===3?this.ctx.setLineDash([0,Z+nA]):this.ctx.setLineDash([Z,nA])),f===3?(this.ctx.lineCap="round",this.ctx.lineWidth=i):this.ctx.lineWidth=i*2+1.1,this.ctx.strokeStyle=Ze(l),this.ctx.stroke(),this.ctx.setLineDash([]),f===2&&(kt(h[0])&&(eA=h[3],P=h[0],this.ctx.beginPath(),this.formatPath([new HA(eA.end.x,eA.end.y),new HA(P.start.x,P.start.y)]),this.ctx.stroke()),kt(h[1])&&(eA=h[1],P=h[2],this.ctx.beginPath(),this.formatPath([new HA(eA.end.x,eA.end.y),new HA(P.start.x,P.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},a.prototype.render=function(l){return ot(this,void 0,void 0,function(){var i;return rt(this,function(u){switch(u.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=Ze(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),i=qQ(l),[4,this.renderStack(i)];case 1:return u.sent(),this.applyEffects([]),[2,this.canvas]}})})},a}(c0),s1=function(r){return r instanceof Yp||r instanceof Xp?!0:r instanceof ld&&r.type!==Us&&r.type!==Qs},o1=function(r,a){switch(r){case 0:return Hs(a);case 2:return _Q(a);case 1:default:return Ss(a)}},c1=function(r){switch(r){case 1:return"center";case 2:return"right";case 0:default:return"left"}},u1=["-apple-system","system-ui"],d1=function(r){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?r.filter(function(a){return u1.indexOf(a)===-1}):r},f1=function(r){Vt(a,r);function a(l,i){var u=r.call(this,l,i)||this;return u.canvas=i.canvas?i.canvas:document.createElement("canvas"),u.ctx=u.canvas.getContext("2d"),u.options=i,u.canvas.width=Math.floor(i.width*i.scale),u.canvas.height=Math.floor(i.height*i.scale),u.canvas.style.width=i.width+"px",u.canvas.style.height=i.height+"px",u.ctx.scale(u.options.scale,u.options.scale),u.ctx.translate(-i.x,-i.y),u.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+i.width+"x"+i.height+" at "+i.x+","+i.y+") with scale "+i.scale),u}return a.prototype.render=function(l){return ot(this,void 0,void 0,function(){var i,u;return rt(this,function(d){switch(d.label){case 0:return i=Vu(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,l),[4,g1(i)];case 1:return u=d.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=Ze(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(u,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},a}(c0),g1=function(r){return new Promise(function(a,l){var i=new Image;i.onload=function(){a(i)},i.onerror=l,i.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(r))})},h1=function(){function r(a){var l=a.id,i=a.enabled;this.id=l,this.enabled=i,this.start=Date.now()}return r.prototype.debug=function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,Zl([this.id,this.getTime()+"ms"],a)):this.info.apply(this,a))},r.prototype.getTime=function(){return Date.now()-this.start},r.prototype.info=function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,Zl([this.id,this.getTime()+"ms"],a))},r.prototype.warn=function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,Zl([this.id,this.getTime()+"ms"],a)):this.info.apply(this,a))},r.prototype.error=function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,Zl([this.id,this.getTime()+"ms"],a)):this.info.apply(this,a))},r.instances={},r}(),B1=function(){function r(a,l){var i;this.windowBounds=l,this.instanceName="#"+r.instanceCount++,this.logger=new h1({id:this.instanceName,enabled:a.logging}),this.cache=(i=a.cache)!==null&&i!==void 0?i:new IQ(this,a)}return r.instanceCount=1,r}(),u0=function(r,a){return a===void 0&&(a={}),p1(r,a)};typeof window<"u"&&a0.setContext(window);var p1=function(r,a){return ot(void 0,void 0,void 0,function(){var l,i,u,d,f,B,h,m,b,y,T,W,Z,nA,hA,oA,lA,CA,BA,eA,yA,P,yA,L,z,wA,sA,dA,UA,jA,SA,M,J,pA,QA,C,v,K,E,Y;return rt(this,function(iA){switch(iA.label){case 0:if(!r||typeof r!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(l=r.ownerDocument,!l)throw new Error("Element is not attached to a Document");if(i=l.defaultView,!i)throw new Error("Document is not attached to a Window");return u={allowTaint:(L=a.allowTaint)!==null&&L!==void 0?L:!1,imageTimeout:(z=a.imageTimeout)!==null&&z!==void 0?z:15e3,proxy:a.proxy,useCORS:(wA=a.useCORS)!==null&&wA!==void 0?wA:!1},d=Su({logging:(sA=a.logging)!==null&&sA!==void 0?sA:!0,cache:a.cache},u),f={windowWidth:(dA=a.windowWidth)!==null&&dA!==void 0?dA:i.innerWidth,windowHeight:(UA=a.windowHeight)!==null&&UA!==void 0?UA:i.innerHeight,scrollX:(jA=a.scrollX)!==null&&jA!==void 0?jA:i.pageXOffset,scrollY:(SA=a.scrollY)!==null&&SA!==void 0?SA:i.pageYOffset},B=new wn(f.scrollX,f.scrollY,f.windowWidth,f.windowHeight),h=new B1(d,B),m=(M=a.foreignObjectRendering)!==null&&M!==void 0?M:!1,b={allowTaint:(J=a.allowTaint)!==null&&J!==void 0?J:!1,onclone:a.onclone,ignoreElements:a.ignoreElements,inlineImages:m,copyStyles:m},h.logger.debug("Starting document clone with size "+B.width+"x"+B.height+" scrolled to "+-B.left+","+-B.top),y=new PB(h,r,b),T=y.clonedReferenceElement,T?[4,y.toIFrame(l,B)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return W=iA.sent(),Z=sd(T)||mQ(T)?Zw(T.ownerDocument):Ms(h,T),nA=Z.width,hA=Z.height,oA=Z.left,lA=Z.top,CA=x1(h,T,a.backgroundColor),BA={canvas:a.canvas,backgroundColor:CA,scale:(QA=(pA=a.scale)!==null&&pA!==void 0?pA:i.devicePixelRatio)!==null&&QA!==void 0?QA:1,x:((C=a.x)!==null&&C!==void 0?C:0)+oA,y:((v=a.y)!==null&&v!==void 0?v:0)+lA,width:(K=a.width)!==null&&K!==void 0?K:Math.ceil(nA),height:(E=a.height)!==null&&E!==void 0?E:Math.ceil(hA)},m?(h.logger.debug("Document cloned, using foreign object rendering"),yA=new f1(h,BA),[4,yA.render(T)]):[3,3];case 2:return eA=iA.sent(),[3,5];case 3:return h.logger.debug("Document cloned, element located at "+oA+","+lA+" with size "+nA+"x"+hA+" using computed rendering"),h.logger.debug("Starting DOM parsing"),P=qp(h,T),CA===P.styles.backgroundColor&&(P.styles.backgroundColor=mn.TRANSPARENT),h.logger.debug("Starting renderer for element at "+BA.x+","+BA.y+" with size "+BA.width+"x"+BA.height),yA=new l1(h,BA),[4,yA.render(P)];case 4:eA=iA.sent(),iA.label=5;case 5:return(!((Y=a.removeContainer)!==null&&Y!==void 0)||Y)&&(PB.destroy(W)||h.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),h.logger.debug("Finished rendering"),[2,eA]}})})},x1=function(r,a,l){var i=a.ownerDocument,u=i.documentElement?Ei(r,getComputedStyle(i.documentElement).backgroundColor):mn.TRANSPARENT,d=i.body?Ei(r,getComputedStyle(i.body).backgroundColor):mn.TRANSPARENT,f=typeof l=="string"?Ei(r,l):l===null?mn.TRANSPARENT:4294967295;return a===i.documentElement?qn(u)?qn(d)?f:d:u:f};const Vs=Object.freeze(Object.defineProperty({__proto__:null,default:u0},Symbol.toStringTag,{value:"Module"})),m1=({ganttChart:r,tasks:a,onUpdateGanttChart:l,onBack:i})=>{const[u,d]=V.useState({name:"",startDate:new Date().toISOString().split("T")[0],endDate:new Date(Date.now()+6048e5).toISOString().split("T")[0],progress:0,dependencies:[],color:m()}),[f,B]=V.useState(null),h=V.useRef(null);function m(){const L=["#3b82f6","#ef4444","#10b981","#f59e0b","#6366f1","#ec4899","#14b8a6","#f97316","#8b5cf6","#d946ef"];return L[Math.floor(Math.random()*L.length)]}const b=V.useMemo(()=>{if(a.length===0){const SA=new Date,M=new Date(SA.getTime()+30*24*60*60*1e3);return{startDate:SA,endDate:M,totalDays:30}}const L=a.flatMap(SA=>[new Date(SA.startDate),new Date(SA.endDate)]),z=new Date(Math.min(...L)),wA=new Date(Math.max(...L)),sA=7,dA=new Date(z.getTime()-sA*24*60*60*1e3),UA=new Date(wA.getTime()+sA*24*60*60*1e3),jA=Math.ceil((UA-dA)/(24*60*60*1e3));return{startDate:dA,endDate:UA,totalDays:jA}},[a]),y=V.useMemo(()=>{const L=[],{startDate:z,totalDays:wA}=b;for(let sA=0;sA<=wA;sA+=7){const dA=new Date(z.getTime()+sA*24*60*60*1e3);L.push({date:dA,position:sA/wA*100,label:dA.toLocaleDateString("en-US",{month:"short",day:"numeric"})})}return L},[b]),T=L=>{const z=new Date(L),{startDate:wA,totalDays:sA}=b,dA=Math.max(0,(z-wA)/(24*60*60*1e3));return Math.min(100,dA/sA*100)},W=(L,z)=>{const wA=new Date(L),sA=new Date(z),{totalDays:dA}=b,UA=Math.max(1,(sA-wA)/(24*60*60*1e3));return Math.min(100,UA/dA*100)},Z=()=>{if(!u.name.trim())return;const L=[...a,{id:Date.now(),...u,progress:Math.min(100,Math.max(0,parseInt(u.progress)||0))}];l({...r,tasks:L}),d({name:"",startDate:new Date().toISOString().split("T")[0],endDate:new Date(Date.now()+7*24*60*60*1e3).toISOString().split("T")[0],progress:0,dependencies:[],color:m()})},nA=L=>{const wA=a.filter(sA=>sA.id!==L).map(sA=>({...sA,dependencies:sA.dependencies.filter(dA=>dA!==L)}));l({...r,tasks:wA})},hA=(L,z)=>{const wA=a.map(sA=>sA.id===L?{...sA,...z}:sA);l({...r,tasks:wA})},oA=L=>{B({...L})},lA=()=>{f&&(hA(f.id,f),B(null))},CA=()=>{B(null)},BA=()=>{const L={...r,tasks:a},z=JSON.stringify(L,null,2),wA=new Blob([z],{type:"application/json"}),sA=URL.createObjectURL(wA),dA=document.createElement("a");dA.href=sA,dA.download=`${r.name.replace(/\s+/g,"_")}_gantt.json`,document.body.appendChild(dA),dA.click(),document.body.removeChild(dA),URL.revokeObjectURL(sA)},eA=L=>{const z=L.target.files[0];if(!z)return;const wA=new FileReader;wA.onload=sA=>{try{const dA=JSON.parse(sA.target.result);dA.name&&Array.isArray(dA.tasks)?l(dA):alert("Invalid Gantt chart file format")}catch{alert("Error parsing JSON file")}},wA.readAsText(z)},P=()=>{h.current&&u0(h.current,{scrollX:-window.scrollX,scrollY:-window.scrollY,windowWidth:h.current.scrollWidth,windowHeight:h.current.scrollHeight,scale:2}).then(L=>{const z=document.createElement("a");z.download=`${r.name.replace(/\s+/g,"_")}_gantt.png`,z.href=L.toDataURL("image/png"),z.click()})},yA=L=>a.find(z=>z.id===L);return s.jsxs("div",{className:"gantt-maker",children:[s.jsxs("div",{className:"toolbar",children:[s.jsxs("button",{onClick:i,className:"back-btn",children:[s.jsx(Mi,{size:16})," Back"]}),s.jsx("h2",{children:r.name}),s.jsx("div",{className:"spacer"}),s.jsxs("div",{className:"export-actions",children:[s.jsxs("button",{onClick:BA,className:"export-btn",title:"Export as JSON",children:[s.jsx(pr,{size:16})," JSON"]}),s.jsxs("label",{className:"import-btn",title:"Import from JSON",children:[s.jsx(ba,{size:16})," JSON",s.jsx("input",{type:"file",accept:".json",onChange:eA,style:{display:"none"}})]}),s.jsxs("button",{onClick:P,className:"export-btn",title:"Export as Image",children:[s.jsx(hr,{size:16})," Image"]})]})]}),s.jsxs("div",{className:"gantt-container",children:[s.jsxs("div",{className:"gantt-sidebar",children:[s.jsxs("div",{className:"sidebar-header",children:["Tasks (",a.length,")"]}),s.jsx("div",{className:"task-list",children:a.map(L=>s.jsxs("div",{className:"task-item",children:[s.jsxs("div",{className:"task-info",children:[s.jsx("div",{className:"task-name",children:L.name}),s.jsxs("div",{className:"task-dates",children:[new Date(L.startDate).toLocaleDateString()," - ",new Date(L.endDate).toLocaleDateString()]}),s.jsxs("div",{className:"task-progress-text",children:[L.progress,"% complete"]}),L.dependencies.length>0&&s.jsxs("div",{className:"task-dependencies",children:["Dependencies: ",L.dependencies.map(z=>yA(z)?.name).filter(Boolean).join(", ")]})]}),s.jsxs("div",{className:"task-actions",children:[s.jsx("button",{onClick:()=>oA(L),className:"edit-btn",title:"Edit task",children:s.jsx(bw,{size:14})}),s.jsx("button",{onClick:()=>nA(L.id),className:"delete-btn",title:"Delete task",children:s.jsx(ve,{size:14})})]})]},L.id))}),s.jsxs("div",{className:"add-task-form",children:[s.jsx("h3",{children:"Add New Task"}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Task Name"}),s.jsx("input",{type:"text",value:u.name,onChange:L=>d({...u,name:L.target.value}),placeholder:"Task description"})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Start Date"}),s.jsx("input",{type:"date",value:u.startDate,onChange:L=>d({...u,startDate:L.target.value})})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"End Date"}),s.jsx("input",{type:"date",value:u.endDate,onChange:L=>d({...u,endDate:L.target.value})})]})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Progress (%)"}),s.jsx("input",{type:"number",min:"0",max:"100",value:u.progress,onChange:L=>d({...u,progress:L.target.value})})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Color"}),s.jsxs("div",{className:"color-picker",children:[s.jsx("input",{type:"color",value:u.color,onChange:L=>d({...u,color:L.target.value})}),s.jsx("button",{onClick:()=>d({...u,color:m()}),className:"random-color-btn",title:"Random color",children:"Random"})]})]})]}),s.jsxs("button",{onClick:Z,className:"add-btn",children:[s.jsx(et,{size:16})," Add Task"]})]})]}),s.jsxs("div",{className:"gantt-timeline",ref:h,children:[s.jsxs("div",{className:"timeline-header",children:[s.jsx("div",{className:"timeline-title",children:"Timeline"}),s.jsx("div",{className:"timeline-scale",children:y.map((L,z)=>s.jsxs("div",{className:"scale-point",style:{left:`${L.position}%`},children:[s.jsx("div",{className:"scale-line"}),s.jsx("div",{className:"scale-label",children:L.label})]},z))})]}),s.jsxs("div",{className:"timeline-content",children:[a.map((L,z)=>{const wA=T(L.startDate),sA=W(L.startDate,L.endDate),dA=`${L.color}33`;return s.jsx("div",{className:"timeline-row",children:s.jsxs("div",{className:"timeline-task",children:[s.jsxs("div",{className:"task-bar",style:{left:`${wA}%`,width:`${sA}%`,background:`linear-gradient(to right, ${L.color} ${L.progress}%, ${dA} ${L.progress}%)`,borderColor:L.color},title:`${L.name}: ${L.progress}% complete`,children:[s.jsxs("div",{className:"task-progress",children:[L.progress,"%"]}),s.jsx("div",{className:"task-label",children:L.name})]}),L.dependencies.map(UA=>{const jA=yA(UA);if(!jA)return null;const SA=a.findIndex(pA=>pA.id===UA),M=T(jA.endDate),J=W(jA.startDate,jA.endDate);return s.jsxs("svg",{className:"dependency-arrow",style:{position:"absolute",left:`${M+J}%`,top:`${(SA-z)*44-12}px`,width:`${Math.abs(wA-(M+J))}%`,height:`${Math.abs((z-SA)*44)+24}px`,pointerEvents:"none",zIndex:1},children:[s.jsx("defs",{children:s.jsx("marker",{id:`arrowhead-${L.id}-${UA}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:s.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})})}),s.jsx("path",{d:`M 0 ${SA<z?0:Math.abs((z-SA)*44)} 
                                L ${Math.abs(wA-(M+J))*.5} ${SA<z?0:Math.abs((z-SA)*44)} 
                                L ${Math.abs(wA-(M+J))*.5} ${SA<z?Math.abs((z-SA)*44):0} 
                                L ${Math.abs(wA-(M+J))} ${SA<z?Math.abs((z-SA)*44):0}`,stroke:"#64748b",strokeWidth:"2",fill:"none",markerEnd:`url(#arrowhead-${L.id}-${UA})`})]},`dep-${UA}`)})]})},L.id)}),s.jsx("div",{className:"today-line",style:{left:`${T(new Date().toISOString().split("T")[0])}%`},children:s.jsx("div",{className:"today-label",children:"Today"})})]})]})]}),f&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal",children:[s.jsx("h3",{children:"Edit Task"}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Task Name"}),s.jsx("input",{type:"text",value:f.name,onChange:L=>B({...f,name:L.target.value})})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Start Date"}),s.jsx("input",{type:"date",value:f.startDate,onChange:L=>B({...f,startDate:L.target.value})})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"End Date"}),s.jsx("input",{type:"date",value:f.endDate,onChange:L=>B({...f,endDate:L.target.value})})]})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Progress (%)"}),s.jsx("input",{type:"number",min:"0",max:"100",value:f.progress,onChange:L=>B({...f,progress:L.target.value})})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Color"}),s.jsx("input",{type:"color",value:f.color,onChange:L=>B({...f,color:L.target.value})})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Dependencies"}),s.jsx("div",{className:"dependency-list",children:a.filter(L=>L.id!==f.id).map(L=>s.jsxs("label",{className:"dependency-item",children:[s.jsx("input",{type:"checkbox",checked:f.dependencies.includes(L.id),onChange:z=>{z.target.checked?B({...f,dependencies:[...f.dependencies,L.id]}):B({...f,dependencies:f.dependencies.filter(wA=>wA!==L.id)})}}),L.name]},L.id))})]}),s.jsxs("div",{className:"modal-actions",children:[s.jsx("button",{onClick:CA,className:"cancel-btn",children:"Cancel"}),s.jsx("button",{onClick:lA,className:"save-btn",children:"Save Changes"})]})]})}),s.jsx("style",{jsx:!0,children:`
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
      `})]})},w1=({useCaseDiagrams:r,onCreateUseCaseDiagram:a,onLoadUseCaseDiagram:l,onDeleteUseCaseDiagram:i})=>{const[u,d]=V.useState(!1);return s.jsxs("div",{className:"use-case-main",children:[s.jsxs("div",{className:"welcome-screen",children:[s.jsx("div",{className:"welcome-icon",children:s.jsx($u,{size:48})}),s.jsx("h2",{children:"Use Case Diagram Designer"}),s.jsx("p",{children:"Model system functionality with actors and use cases"}),s.jsx("div",{className:"action-buttons",children:s.jsxs("button",{onClick:()=>d(!0),className:"primary-btn",children:[s.jsx(et,{size:16})," New Diagram"]})}),r.length>0&&s.jsxs("div",{className:"diagram-list",children:[s.jsx("h3",{children:"Your Use Case Diagrams"}),r.map(f=>s.jsxs("div",{className:"diagram-card",onClick:()=>l(f),children:[s.jsxs("div",{className:"diagram-card-content",children:[s.jsx("div",{className:"diagram-card-name",children:f.name}),s.jsxs("div",{className:"diagram-card-meta",children:[s.jsx("span",{children:new Date(f.createdAt).toLocaleDateString()}),s.jsxs("span",{children:[f.actors?.length||0," actors • ",f.useCases?.length||0," use cases"]})]})]}),s.jsxs("div",{className:"diagram-card-actions",children:[s.jsx("button",{onClick:B=>{B.stopPropagation(),l(f)},className:"open-btn",children:s.jsx(wa,{size:16})}),s.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this diagram?")&&i(f.id)},className:"delete-btn",children:s.jsx(ve,{size:16})})]})]},f.id))]})]}),u&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-content",children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{children:"Create New Use Case Diagram"}),s.jsx("button",{onClick:()=>d(!1),className:"close-btn",children:"×"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Diagram Name"}),s.jsx("input",{type:"text",placeholder:"e.g., Online Shopping System",id:"diagramName",autoFocus:!0})]}),s.jsxs("div",{className:"modal-footer",children:[s.jsx("button",{onClick:()=>d(!1),className:"cancel-btn",children:"Cancel"}),s.jsx("button",{onClick:()=>{const f=document.getElementById("diagramName").value;f.trim()&&(a(f),d(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),s.jsx("style",{jsx:!0,children:`
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
      `})]})},b1="modulepreload",C1=function(r){return"/Rootrie/"+r},np={},Xs=function(a,l,i){let u=Promise.resolve();if(l&&l.length>0){let m=function(b){return Promise.all(b.map(y=>Promise.resolve(y).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};var f=m;document.getElementsByTagName("link");const B=document.querySelector("meta[property=csp-nonce]"),h=B?.nonce||B?.getAttribute("nonce");u=m(l.map(b=>{if(b=C1(b),b in np)return;np[b]=!0;const y=b.endsWith(".css"),T=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${b}"]${T}`))return;const W=document.createElement("link");if(W.rel=y?"stylesheet":b1,y||(W.as="script"),W.crossOrigin="",W.href=b,h&&W.setAttribute("nonce",h),document.head.appendChild(W),y)return new Promise((Z,nA)=>{W.addEventListener("load",Z),W.addEventListener("error",()=>nA(new Error(`Unable to preload CSS for ${b}`)))})}))}function d(B){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=B,window.dispatchEvent(h),!h.defaultPrevented)throw B}return u.then(B=>{for(const h of B||[])h.status==="rejected"&&d(h.reason);return a().catch(d)})},y1=({useCaseDiagram:r,actors:a=[],useCases:l=[],relationships:i=[],onUpdateUseCaseDiagram:u,onBack:d})=>{const[f,B]=V.useState(""),[h,m]=V.useState(""),[b,y]=V.useState(null),[T,W]=V.useState(null),[Z,nA]=V.useState("association"),[hA,oA]=V.useState("editor"),[lA,CA]=V.useState(""),[BA,eA]=V.useState(null),[P,yA]=V.useState({x:0,y:0}),[L,z]=V.useState(!1),[wA,sA]=V.useState(!1),[dA,UA]=V.useState(1),[jA,SA]=V.useState({x:0,y:0}),[M,J]=V.useState(!1),[pA,QA]=V.useState({x:0,y:0}),C=V.useRef(null),v=V.useRef(null),K=20,E=60,Y=80,iA=150,H=40;V.useEffect(()=>{CA(JSON.stringify({actors:a,useCases:l,relationships:i},null,2))},[a,l,i]);const uA=p=>wA?Math.round(p/K)*K:p,mA=()=>{if(!f.trim())return;const p=[...a,{id:Date.now(),name:f,x:uA(100+Math.random()*200),y:uA(100+Math.random()*200)}];u({...r,actors:p}),B("")},LA=()=>{if(!h.trim())return;const p=[...l,{id:Date.now(),name:h,x:uA(300+Math.random()*300),y:uA(150+Math.random()*200)}];u({...r,useCases:p}),m("")},FA=p=>{const Q=a.filter(k=>k.id!==p),j=i.filter(k=>!(k.source===p||k.target===p));u({...r,actors:Q,relationships:j})},OA=p=>{const Q=l.filter(k=>k.id!==p),j=i.filter(k=>!(k.source===p||k.target===p));u({...r,useCases:Q,relationships:j})},Ae=()=>{if(!b||!T)return;const p=a.some(rA=>rA.id===b),Q=a.some(rA=>rA.id===T),j=l.some(rA=>rA.id===b),k=l.some(rA=>rA.id===T);if(Z==="include"||Z==="extend"){if(!j||!k){alert("Include and extend relationships must be between use cases");return}}else if(Z==="generalization"){if(p&&!Q||j&&!k){alert("Generalization must be between two actors or two use cases");return}}else if(Z==="association"&&!(p&&k)&&!(j&&Q)){alert("Association must be between an actor and a use case");return}const G={id:Date.now(),source:b,target:T,type:Z};u({...r,relationships:[...i,G]}),y(null),W(null)},Oe=p=>{const Q=i.filter(j=>j.id!==p);u({...r,relationships:Q})},ZA=(p,Q)=>Q?{x:p.x+E/2,y:p.y+Y/2}:{x:p.x+iA/2,y:p.y+H/2},ye=(p,Q,j)=>{const k=ZA(p,Q);if(Q)return{x:k.x+25*Math.cos(j),y:k.y+25*Math.sin(j)};{const G=iA/2,rA=H/2,TA=Math.cos(j),KA=Math.sin(j),XA=G*rA/Math.sqrt(rA*rA*TA*TA+G*G*KA*KA);return{x:k.x+XA*TA,y:k.y+XA*KA}}},YA=(p,Q,j,k)=>{const G=v.current;if(!G)return{x:p,y:Q};const rA=G.getBoundingClientRect(),TA=Math.max(0,-jA.x),KA=Math.max(0,-jA.y),XA=Math.min(rA.width/dA-j,rA.width/dA-jA.x-j),ae=Math.min(rA.height/dA-k,rA.height/dA-jA.y-k);return{x:Math.max(TA,Math.min(XA,p)),y:Math.max(KA,Math.min(ae,Q))}},GA=(p,Q,j)=>{p.preventDefault(),p.stopPropagation();const k=C.current.getBoundingClientRect(),G=(p.clientX-k.left-jA.x)/dA,rA=(p.clientY-k.top-jA.y)/dA;eA({...Q,type:j}),yA({x:G-Q.x,y:rA-Q.y})},ie=p=>{if(!(!BA&&!M)){if(M){const Q=p.clientX-pA.x,j=p.clientY-pA.y;SA(k=>({x:k.x+Q,y:k.y+j})),QA({x:p.clientX,y:p.clientY});return}if(BA){const Q=C.current.getBoundingClientRect();let j=(p.clientX-Q.left-jA.x)/dA-P.x,k=(p.clientY-Q.top-jA.y)/dA-P.y;j=uA(j),k=uA(k);const G=BA.type==="actor"?E:iA,rA=BA.type==="actor"?Y:H,TA=YA(j,k,G,rA);if(BA.type==="actor"){const KA=a.map(XA=>XA.id===BA.id?{...XA,x:TA.x,y:TA.y}:XA);u({...r,actors:KA})}else if(BA.type==="useCase"){const KA=l.map(XA=>XA.id===BA.id?{...XA,x:TA.x,y:TA.y}:XA);u({...r,useCases:KA})}}}},Qe=()=>{eA(null),J(!1)},ct=p=>{p.target===C.current&&(J(!0),QA({x:p.clientX,y:p.clientY}))},_e=()=>{UA(p=>Math.min(p*1.2,3))},lt=()=>{UA(p=>Math.max(p/1.2,.3))},ut=()=>{UA(1),SA({x:0,y:0})},Ft=()=>{const p=a.map((j,k)=>({...j,x:50,y:100+k*120})),Q=l.map((j,k)=>({...j,x:400,y:100+k*80}));u({...r,actors:p,useCases:Q})};V.useEffect(()=>{const p=j=>ie(j),Q=()=>Qe();if(BA||M)return document.addEventListener("mousemove",p),document.addEventListener("mouseup",Q),()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",Q)}},[BA,M,P,jA,dA,a,l,u,r,pA,wA]);const AA=()=>JSON.stringify({actors:a,useCases:l,relationships:i},null,2),fA=()=>{navigator.clipboard.writeText(AA())},DA=()=>{try{const p=JSON.parse(lA);Array.isArray(p.actors)&&Array.isArray(p.useCases)&&Array.isArray(p.relationships)?u({...r,actors:p.actors,useCases:p.useCases,relationships:p.relationships}):alert("Invalid JSON format. Expected actors, useCases, and relationships arrays.")}catch(p){alert("Error parsing JSON: "+p.message)}},F=p=>{const Q=p.target.files[0];if(!Q)return;const j=new FileReader;j.onload=k=>{CA(k.target.result)},j.readAsText(Q)},D=()=>{if(!C.current)return;const p=C.current.style.transform;C.current.style.transform="scale(1) translate(0px, 0px)",Xs(()=>Promise.resolve().then(()=>Vs),void 0).then(Q=>{Q.default(C.current,{backgroundColor:"#f8fafc",scale:2,useCORS:!0}).then(j=>{const k=document.createElement("a");k.download=`${r.name||"use-case-diagram"}.png`,k.href=j.toDataURL("image/png"),k.click(),C.current.style.transform=p})})},q=()=>{if(!L)return null;const p=v.current;if(!p)return null;const Q=p.getBoundingClientRect(),j=Q.width/dA,k=Q.height/dA,G=Math.floor(-jA.x/dA/K)*K,rA=Math.floor(-jA.y/dA/K)*K,TA=[];for(let KA=G;KA<j-jA.x/dA;KA+=K)TA.push(s.jsx("line",{x1:KA,y1:0,x2:KA,y2:k,stroke:"#e2e8f0",strokeWidth:"1"},`v-${KA}`));for(let KA=rA;KA<k-jA.y/dA;KA+=K)TA.push(s.jsx("line",{x1:0,y1:KA,x2:j,y2:KA,stroke:"#e2e8f0",strokeWidth:"1"},`h-${KA}`));return s.jsx("svg",{className:"grid-overlay",children:TA})},xA=p=>s.jsxs("div",{className:"actor",style:{left:`${p.x}px`,top:`${p.y}px`,width:`${E}px`,height:`${Y}px`,cursor:BA?.id===p.id?"grabbing":"grab"},onMouseDown:Q=>GA(Q,p,"actor"),children:[s.jsx("div",{className:"actor-icon",children:s.jsx($u,{size:20})}),s.jsx("div",{className:"actor-name",children:p.name})]},p.id),gA=p=>s.jsx("div",{className:"use-case",style:{left:`${p.x}px`,top:`${p.y}px`,width:`${iA}px`,height:`${H}px`,cursor:BA?.id===p.id?"grabbing":"grab"},onMouseDown:Q=>GA(Q,p,"useCase"),children:s.jsx("div",{className:"use-case-name",children:p.name})},p.id),w=p=>{let Q,j,k=!1,G=!1;if(Q=a.find(vA=>vA.id===p.source),Q?k=!0:Q=l.find(vA=>vA.id===p.source),j=a.find(vA=>vA.id===p.target),j?G=!0:j=l.find(vA=>vA.id===p.target),!Q||!j)return null;const rA=ZA(Q,k),TA=ZA(j,G),KA=TA.x-rA.x,XA=TA.y-rA.y,ae=Math.atan2(XA,KA),Ue=ye(Q,k,ae),ue=ye(j,G,ae+Math.PI);let le={},tt={};p.type==="include"?(le={strokeDasharray:"5,5",stroke:"#3b82f6"},tt={fill:"#3b82f6"}):p.type==="extend"?(le={strokeDasharray:"8,3",stroke:"#10b981"},tt={fill:"#10b981"}):p.type==="generalization"?(le={stroke:"#8b5cf6"},tt={fill:"none",stroke:"#8b5cf6",strokeWidth:"2"}):(le={stroke:"#64748b"},tt={fill:"#64748b"});const S=8,cA=Math.atan2(ue.y-Ue.y,ue.x-Ue.x),bA={x:ue.x-S*Math.cos(cA-Math.PI/6),y:ue.y-S*Math.sin(cA-Math.PI/6)},EA={x:ue.x-S*Math.cos(cA+Math.PI/6),y:ue.y-S*Math.sin(cA+Math.PI/6)};return p.type==="generalization"?s.jsxs("svg",{className:"relationship",children:[s.jsx("line",{x1:Ue.x,y1:Ue.y,x2:ue.x,y2:ue.y,strokeWidth:"2",...le}),s.jsx("polygon",{points:`
              ${ue.x},${ue.y}
              ${bA.x},${bA.y}
              ${EA.x},${EA.y}
            `,...tt}),s.jsx("text",{x:(Ue.x+ue.x)/2,y:(Ue.y+ue.y)/2-8,textAnchor:"middle",fontSize:"11",fill:le.stroke||"#64748b",className:"relationship-label",children:`<<${p.type}>>`})]},p.id):p.type==="association"?s.jsx("svg",{className:"relationship",children:s.jsx("line",{x1:Ue.x,y1:Ue.y,x2:ue.x,y2:ue.y,strokeWidth:"2",...le})},p.id):s.jsxs("svg",{className:"relationship",children:[s.jsx("defs",{children:s.jsx("marker",{id:`arrowhead-${p.id}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:s.jsx("polygon",{points:"0 0, 10 3.5, 0 7",...tt})})}),s.jsx("line",{x1:Ue.x,y1:Ue.y,x2:ue.x,y2:ue.y,strokeWidth:"2",markerEnd:`url(#arrowhead-${p.id})`,...le}),p.type!=="association"&&s.jsx("text",{x:(Ue.x+ue.x)/2,y:(Ue.y+ue.y)/2-8,textAnchor:"middle",fontSize:"11",fill:le.stroke||"#64748b",className:"relationship-label",children:`<<${p.type}>>`})]},p.id)};return s.jsxs("div",{className:"use-case-maker",children:[s.jsxs("div",{className:"toolbar",children:[s.jsxs("button",{onClick:d,className:"back-btn",children:[s.jsx(Mi,{size:16})," Back"]}),s.jsx("h2",{children:r.name}),s.jsx("div",{className:"spacer"}),s.jsxs("div",{className:"toolbar-controls",children:[s.jsx("button",{onClick:()=>z(!L),className:`tool-btn ${L?"active":""}`,children:s.jsx(iw,{size:16})}),s.jsx("button",{onClick:()=>sA(!wA),className:`tool-btn ${wA?"active":""}`,children:s.jsx(pw,{size:16})}),s.jsx("button",{onClick:lt,className:"tool-btn",children:s.jsx(ed,{size:16})}),s.jsxs("span",{className:"zoom-level",children:[Math.round(dA*100),"%"]}),s.jsx("button",{onClick:_e,className:"tool-btn",children:s.jsx(Ad,{size:16})}),s.jsx("button",{onClick:ut,className:"tool-btn",children:s.jsx(vw,{size:16})}),s.jsx("button",{onClick:Ft,className:"tool-btn",children:"Auto"})]}),s.jsxs("div",{className:"export-buttons",children:[s.jsxs("button",{onClick:D,className:"export-btn",children:[s.jsx(hr,{size:16})," Export Image"]}),s.jsxs("button",{onClick:fA,className:"export-btn",children:[s.jsx(Ts,{size:16})," Copy JSON"]}),s.jsxs("button",{onClick:()=>{const p=new Blob([AA()],{type:"application/json"}),Q=URL.createObjectURL(p),j=document.createElement("a");j.href=Q,j.download=`${r.name||"use-case-diagram"}.json`,document.body.appendChild(j),j.click(),document.body.removeChild(j),URL.revokeObjectURL(Q)},className:"export-btn",children:[s.jsx(pr,{size:16})," Export JSON"]})]})]}),s.jsxs("div",{className:"tabs",children:[s.jsx("button",{className:`tab ${hA==="editor"?"active":""}`,onClick:()=>oA("editor"),children:"Diagram Editor"}),s.jsx("button",{className:`tab ${hA==="json"?"active":""}`,onClick:()=>oA("json"),children:"JSON Editor"})]}),hA==="editor"?s.jsxs("div",{className:"diagram-container",children:[s.jsxs("div",{className:"diagram-sidebar",children:[s.jsxs("div",{className:"sidebar-section",children:[s.jsx("h3",{children:"Actors"}),s.jsxs("div",{className:"form-group",children:[s.jsx("input",{type:"text",value:f,onChange:p=>B(p.target.value),placeholder:"New actor name",onKeyPress:p=>p.key==="Enter"&&mA()}),s.jsxs("button",{onClick:mA,className:"add-btn",children:[s.jsx(et,{size:16})," Add Actor"]})]}),s.jsx("div",{className:"actor-list",children:a.map(p=>s.jsxs("div",{className:"list-item",children:[s.jsx("div",{className:"item-name",children:p.name}),s.jsx("button",{onClick:()=>FA(p.id),className:"delete-btn",children:s.jsx(ve,{size:14})})]},p.id))})]}),s.jsxs("div",{className:"sidebar-section",children:[s.jsx("h3",{children:"Use Cases"}),s.jsxs("div",{className:"form-group",children:[s.jsx("input",{type:"text",value:h,onChange:p=>m(p.target.value),placeholder:"New use case name",onKeyPress:p=>p.key==="Enter"&&LA()}),s.jsxs("button",{onClick:LA,className:"add-btn",children:[s.jsx(et,{size:16})," Add Use Case"]})]}),s.jsx("div",{className:"use-case-list",children:l.map(p=>s.jsxs("div",{className:"list-item",children:[s.jsx("div",{className:"item-name",children:p.name}),s.jsx("button",{onClick:()=>OA(p.id),className:"delete-btn",children:s.jsx(ve,{size:14})})]},p.id))})]}),s.jsxs("div",{className:"sidebar-section",children:[s.jsx("h3",{children:"Relationships"}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Source"}),s.jsxs("select",{value:b||"",onChange:p=>y(p.target.value?parseInt(p.target.value):null),children:[s.jsx("option",{value:"",children:"Select source"}),s.jsx("optgroup",{label:"Actors",children:a.map(p=>s.jsx("option",{value:p.id,children:p.name},p.id))}),s.jsx("optgroup",{label:"Use Cases",children:l.map(p=>s.jsx("option",{value:p.id,children:p.name},p.id))})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Target"}),s.jsxs("select",{value:T||"",onChange:p=>W(p.target.value?parseInt(p.target.value):null),children:[s.jsx("option",{value:"",children:"Select target"}),s.jsx("optgroup",{label:"Actors",children:a.map(p=>s.jsx("option",{value:p.id,children:p.name},p.id))}),s.jsx("optgroup",{label:"Use Cases",children:l.map(p=>s.jsx("option",{value:p.id,children:p.name},p.id))})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Relationship Type"}),s.jsxs("select",{value:Z,onChange:p=>nA(p.target.value),children:[s.jsx("option",{value:"association",children:"Association"}),s.jsx("option",{value:"include",children:"Include"}),s.jsx("option",{value:"extend",children:"Extend"}),s.jsx("option",{value:"generalization",children:"Generalization"})]})]}),s.jsxs("button",{onClick:Ae,disabled:!b||!T,className:"add-btn",children:[s.jsx(js,{size:16})," Add Relationship"]})]}),s.jsxs("div",{className:"sidebar-section",children:[s.jsx("h3",{children:"Current Relationships"}),s.jsx("div",{className:"relationship-list",children:i.map(p=>{let Q,j,k="",G="";return Q=a.find(rA=>rA.id===p.source),Q?k=Q.name:(Q=l.find(rA=>rA.id===p.source),Q&&(k=Q.name)),j=a.find(rA=>rA.id===p.target),j?G=j.name:(j=l.find(rA=>rA.id===p.target),j&&(G=j.name)),!Q||!j?null:s.jsxs("div",{className:"list-item",children:[s.jsxs("div",{className:"item-name",children:[k," → ",G," (",p.type,")"]}),s.jsx("button",{onClick:()=>Oe(p.id),className:"delete-btn",children:s.jsx(ve,{size:14})})]},p.id)})})]})]}),s.jsx("div",{className:"diagram-canvas-container",ref:v,onMouseDown:ct,children:s.jsxs("div",{className:"diagram-canvas",ref:C,style:{transform:`scale(${dA}) translate(${jA.x/dA}px, ${jA.y/dA}px)`,transformOrigin:"0 0"},children:[q(),i.map(w),a.map(xA),l.map(gA)]})})]}):s.jsxs("div",{className:"json-editor",children:[s.jsx("div",{className:"json-actions",children:s.jsxs("button",{onClick:()=>{const p=document.createElement("input");p.type="file",p.accept=".json",p.onchange=F,p.click()},className:"import-btn",children:[s.jsx(ba,{size:16})," Import JSON File"]})}),s.jsx("textarea",{value:lA,onChange:p=>CA(p.target.value),className:"json-textarea"}),s.jsxs("button",{onClick:DA,className:"import-btn",children:[s.jsx(Ns,{size:16})," Apply JSON"]})]}),s.jsx("style",{jsx:!0,children:`
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
      `})]})},v1=({sequenceDiagrams:r,onCreateSequenceDiagram:a,onLoadSequenceDiagram:l,onDeleteSequenceDiagram:i})=>{const[u,d]=V.useState(!1);return s.jsxs("div",{className:"sequence-main",children:[s.jsxs("div",{className:"welcome-screen",children:[s.jsx("div",{className:"welcome-icon",children:s.jsx(gw,{size:48})}),s.jsx("h2",{children:"Sequence Diagram Designer"}),s.jsx("p",{children:"Model interactions between objects in sequential order"}),s.jsx("div",{className:"action-buttons",children:s.jsxs("button",{onClick:()=>d(!0),className:"primary-btn",children:[s.jsx(et,{size:16})," New Diagram"]})}),r.length>0&&s.jsxs("div",{className:"diagram-list",children:[s.jsx("h3",{children:"Your Sequence Diagrams"}),r.map(f=>s.jsxs("div",{className:"diagram-card",onClick:()=>l(f),children:[s.jsxs("div",{className:"diagram-card-content",children:[s.jsx("div",{className:"diagram-card-name",children:f.name}),s.jsxs("div",{className:"diagram-card-meta",children:[s.jsx("span",{children:new Date(f.createdAt).toLocaleDateString()}),s.jsxs("span",{children:[f.participants?.length||0," participants • ",f.messages?.length||0," messages"]})]})]}),s.jsxs("div",{className:"diagram-card-actions",children:[s.jsx("button",{onClick:B=>{B.stopPropagation(),l(f)},className:"open-btn",children:s.jsx(wa,{size:16})}),s.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this diagram?")&&i(f.id)},className:"delete-btn",children:s.jsx(ve,{size:16})})]})]},f.id))]})]}),u&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-content",children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{children:"Create New Sequence Diagram"}),s.jsx("button",{onClick:()=>d(!1),className:"close-btn",children:"×"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Diagram Name"}),s.jsx("input",{type:"text",placeholder:"e.g., User Login Process",id:"diagramName",autoFocus:!0})]}),s.jsxs("div",{className:"modal-footer",children:[s.jsx("button",{onClick:()=>d(!1),className:"cancel-btn",children:"Cancel"}),s.jsx("button",{onClick:()=>{const f=document.getElementById("diagramName").value;f.trim()&&(a(f),d(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),s.jsx("style",{jsx:!0,children:`
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
      `})]})},Q1=({sequenceDiagram:r,participants:a=[],messages:l=[],onUpdateSequenceDiagram:i,onBack:u})=>{const[d,f]=V.useState(""),[B,h]=V.useState(""),[m,b]=V.useState(""),[y,T]=V.useState(""),[W,Z]=V.useState("sync"),[nA,hA]=V.useState("actor"),[oA,lA]=V.useState("editor"),[CA,BA]=V.useState(""),[eA,P]=V.useState(1),[yA,L]=V.useState(150),z=V.useRef(null);V.useEffect(()=>{BA(JSON.stringify({participants:a,messages:l},null,2))},[a,l]);const wA=()=>{if(!d.trim())return;const H=[...a,{id:Date.now(),name:d,type:nA}];i({...r,participants:H}),f("")},sA=()=>{if(!B.trim()||!m||!y)return;const H=a.find(LA=>LA.id===parseInt(m)),uA=a.find(LA=>LA.id===parseInt(y));if(!H||!uA)return;const mA=[...l,{id:Date.now(),text:B,from:H.id,to:uA.id,type:W,order:l.length+1,activationStart:W==="sync"||W==="create",activationEnd:!1}];i({...r,messages:mA}),h(""),b(""),T("")},dA=H=>{const uA=a.filter(FA=>FA.id!==H),LA=l.filter(FA=>!(FA.from===H||FA.to===H)).map((FA,OA)=>({...FA,order:OA+1}));i({...r,participants:uA,messages:LA})},UA=H=>{const mA=l.filter(LA=>LA.id!==H).map((LA,FA)=>({...LA,order:FA+1}));i({...r,messages:mA})},jA=H=>{const uA=l.findIndex(LA=>LA.id===H);if(uA<=0)return;const mA=[...l];[mA[uA-1],mA[uA]]=[mA[uA],mA[uA-1]],mA.forEach((LA,FA)=>{LA.order=FA+1}),i({...r,messages:mA})},SA=H=>{const uA=l.findIndex(LA=>LA.id===H);if(uA>=l.length-1)return;const mA=[...l];[mA[uA],mA[uA+1]]=[mA[uA+1],mA[uA]],mA.forEach((LA,FA)=>{LA.order=FA+1}),i({...r,messages:mA})},M=()=>JSON.stringify({participants:a,messages:l},null,2),J=()=>{navigator.clipboard.writeText(M())},pA=()=>{try{const H=JSON.parse(CA);Array.isArray(H.participants)&&Array.isArray(H.messages)?i({...r,participants:H.participants,messages:H.messages}):alert("Invalid JSON format. Expected participants and messages arrays.")}catch(H){alert("Error parsing JSON: "+H.message)}},QA=H=>{const uA=H.target.files[0];if(!uA)return;const mA=new FileReader;mA.onload=LA=>{BA(LA.target.result)},mA.readAsText(uA)},C=()=>{if(!z.current)return;const H=z.current.style.transform;z.current.style.transform="scale(1) translate(0px, 0px)";const uA=document.createElement("canvas"),mA=z.current.getBoundingClientRect();uA.width=mA.width*2,uA.height=mA.height*2,Xs(()=>Promise.resolve().then(()=>Vs),void 0).then(LA=>{LA.default(z.current,{backgroundColor:"#ffffff",scale:2,useCORS:!0,logging:!0,allowTaint:!0}).then(FA=>{const OA=document.createElement("a");OA.download=`${r.name||"sequence-diagram"}.png`,OA.href=FA.toDataURL("image/png"),OA.click(),z.current.style.transform=H}).catch(FA=>{console.error("Error generating image:",FA),z.current.style.transform=H})})},v=H=>60+H*yA,K=(H,uA)=>{const mA=v(uA);return s.jsx("div",{className:"participant-header",style:{left:`${mA-60}px`,top:"40px",width:"120px",height:"60px"},children:H.type==="actor"?s.jsxs("div",{className:"participant-actor",children:[s.jsx("div",{className:"actor-circle",children:s.jsx(Lw,{size:16})}),s.jsx("div",{className:"actor-name",children:H.name})]}):s.jsx("div",{className:`participant-box ${H.type||"service"}`,children:s.jsx("span",{className:"participant-name",children:H.name})})},`header-${H.id}`)},E=(H,uA)=>{const mA=v(uA),LA=110,FA=Math.max(220+l.length*50,420);return s.jsx("div",{className:"lifeline",style:{left:`${mA-1}px`,top:`${LA}px`,width:"2px",height:`${FA-LA}px`}},`lifeline-${H.id}`)},Y=(H,uA)=>{const mA=v(uA),LA=[],FA=[];if(l.sort((OA,Ae)=>OA.order-Ae.order).forEach((OA,Ae)=>{const Oe=150+Ae*50;if((OA.to===H&&(OA.type==="sync"||OA.type==="create")||OA.from===H&&OA.type==="self")&&FA.push({start:Oe,messageId:OA.id}),OA.from===H&&OA.type==="return"){const ZA=FA.pop();ZA&&LA.push({...ZA,end:Oe+20,height:Oe+20-ZA.start})}}),FA.length>0){const OA=150+l.length*50;FA.forEach(Ae=>{LA.push({...Ae,end:OA,height:OA-Ae.start})})}return LA.map((OA,Ae)=>s.jsx("div",{className:"activation-box",style:{left:`${mA-8}px`,top:`${OA.start}px`,width:"16px",height:`${OA.height-23}px`}},`activation-${H}-${Ae}`))},iA=(H,uA)=>{const mA=a.findIndex(Qe=>Qe.id===H.from),LA=a.findIndex(Qe=>Qe.id===H.to);if(mA===-1||LA===-1)return null;const FA=150+uA*50,OA=v(mA),Ae=v(LA),Oe=H.from===H.to,ye=(Qe=>{switch(Qe){case"async":return{stroke:"#3b82f6",strokeDasharray:"5,5",arrowType:"open"};case"return":return{stroke:"#10b981",strokeDasharray:"8,4",arrowType:"open"};case"create":return{stroke:"#f59e0b",strokeDasharray:"none",arrowType:"filled"};case"destroy":return{stroke:"#ef4444",strokeDasharray:"none",arrowType:"filled"};case"self":return{stroke:"#8b5cf6",strokeDasharray:"none",arrowType:"filled"};default:return{stroke:"#64748b",strokeDasharray:"none",arrowType:"filled"}}})(H.type);if(Oe){const Qe=Math.max(40,yA*.3);return s.jsx("div",{className:"message-container",children:s.jsxs("svg",{className:"message-svg",style:{overflow:"visible"},children:[s.jsx("path",{d:`M ${OA} ${FA} L ${OA+Qe} ${FA} L ${OA+Qe} ${FA+20} L ${OA} ${FA+20}`,fill:"none",stroke:ye.stroke,strokeWidth:"2",strokeDasharray:ye.strokeDasharray}),s.jsx("polygon",{points:`${OA-8},${FA+10} ${OA},${FA+20} ${OA-8},${FA+30}`,fill:ye.stroke}),s.jsx("text",{x:OA+Qe+10,y:FA+15,fontSize:"12",fill:ye.stroke,className:"message-text",children:H.text})]})},H.id)}const YA=OA<Ae?1:-1,GA=YA>0?Ae-8:Ae+8,ie=(OA+Ae)/2;return s.jsx("div",{className:"message-container",children:s.jsxs("svg",{className:"message-svg",style:{overflow:"visible"},children:[s.jsx("line",{x1:OA,y1:FA,x2:Ae,y2:FA,stroke:ye.stroke,strokeWidth:"2",strokeDasharray:ye.strokeDasharray}),ye.arrowType==="filled"?s.jsx("polygon",{points:YA>0?`${GA},${FA-6} ${Ae},${FA} ${GA},${FA+6}`:`${GA},${FA-6} ${Ae},${FA} ${GA},${FA+6}`,fill:ye.stroke}):s.jsx("path",{d:YA>0?`M ${GA},${FA-6} L ${Ae},${FA} L ${GA},${FA+6}`:`M ${GA},${FA-6} L ${Ae},${FA} L ${GA},${FA+6}`,fill:"none",stroke:ye.stroke,strokeWidth:"2"}),s.jsx("text",{x:ie,y:FA-8,textAnchor:"middle",fontSize:"12",fill:ye.stroke,className:"message-text",children:H.text}),s.jsx("text",{x:OA+(YA>0?-15:15),y:FA-8,textAnchor:"middle",fontSize:"10",fill:"#64748b",className:"message-order",children:H.order})]})},H.id)};return s.jsxs("div",{className:"sequence-maker",children:[s.jsxs("div",{className:"toolbar",children:[s.jsxs("button",{onClick:u,className:"back-btn",children:[s.jsx(Mi,{size:16})," Back"]}),s.jsx("h2",{children:r.name}),s.jsx("div",{className:"spacer"}),s.jsxs("div",{className:"spacing-controls",children:[s.jsx("label",{children:"Spacing:"}),s.jsx("button",{onClick:()=>L(Math.max(100,yA-25)),disabled:yA<=100,className:"spacing-btn",children:s.jsx(lp,{size:14})}),s.jsxs("span",{className:"spacing-value",children:[yA,"px"]}),s.jsx("button",{onClick:()=>L(Math.min(300,yA+25)),disabled:yA>=300,className:"spacing-btn",children:s.jsx(et,{size:14})})]}),s.jsxs("div",{className:"zoom-controls",children:[s.jsx("button",{onClick:()=>P(Math.max(.5,eA-.1)),disabled:eA<=.5,className:"zoom-btn",children:"-"}),s.jsxs("span",{className:"zoom-level",children:[Math.round(eA*100),"%"]}),s.jsx("button",{onClick:()=>P(Math.min(2,eA+.1)),disabled:eA>=2,className:"zoom-btn",children:"+"})]}),s.jsxs("div",{className:"export-buttons",children:[s.jsxs("button",{onClick:C,className:"export-btn",children:[s.jsx(hr,{size:16})," Export Image"]}),s.jsxs("button",{onClick:J,className:"export-btn",children:[s.jsx(Ts,{size:16})," Copy JSON"]}),s.jsxs("button",{onClick:()=>{const H=new Blob([M()],{type:"application/json"}),uA=URL.createObjectURL(H),mA=document.createElement("a");mA.href=uA,mA.download=`${r.name||"sequence-diagram"}.json`,document.body.appendChild(mA),mA.click(),document.body.removeChild(mA),URL.revokeObjectURL(uA)},className:"export-btn",children:[s.jsx(pr,{size:16})," Export JSON"]})]})]}),s.jsxs("div",{className:"tabs",children:[s.jsx("button",{className:`tab ${oA==="editor"?"active":""}`,onClick:()=>lA("editor"),children:"Diagram Editor"}),s.jsx("button",{className:`tab ${oA==="json"?"active":""}`,onClick:()=>lA("json"),children:"JSON Editor"})]}),oA==="editor"?s.jsxs("div",{className:"diagram-container",children:[s.jsxs("div",{className:"diagram-sidebar",children:[s.jsxs("div",{className:"sidebar-section",children:[s.jsx("h3",{children:"Participants"}),s.jsx("div",{className:"form-group",children:s.jsx("input",{type:"text",value:d,onChange:H=>f(H.target.value),placeholder:"New participant name",onKeyPress:H=>H.key==="Enter"&&wA()})}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Type"}),s.jsxs("select",{value:nA,onChange:H=>hA(H.target.value),children:[s.jsx("option",{value:"actor",children:"Actor (User)"}),s.jsx("option",{value:"service",children:"Service"}),s.jsx("option",{value:"database",children:"Database"}),s.jsx("option",{value:"external",children:"External System"})]})]}),s.jsxs("button",{onClick:wA,className:"add-btn",children:[s.jsx(et,{size:16})," Add Participant"]}),s.jsx("div",{className:"participant-list",children:a.map(H=>s.jsxs("div",{className:"list-item",children:[s.jsxs("div",{className:"item-info",children:[s.jsx("div",{className:"item-name",children:H.name}),s.jsx("div",{className:"item-type",children:H.type})]}),s.jsx("button",{onClick:()=>dA(H.id),className:"delete-btn",children:s.jsx(ve,{size:14})})]},H.id))})]}),s.jsxs("div",{className:"sidebar-section",children:[s.jsx("h3",{children:"Messages"}),s.jsx("div",{className:"form-group",children:s.jsx("input",{type:"text",value:B,onChange:H=>h(H.target.value),placeholder:"Message text",onKeyPress:H=>H.key==="Enter"&&sA()})}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"From"}),s.jsxs("select",{value:m||"",onChange:H=>b(H.target.value),children:[s.jsx("option",{value:"",children:"Select participant"}),a.map(H=>s.jsx("option",{value:H.id,children:H.name},H.id))]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"To"}),s.jsxs("select",{value:y||"",onChange:H=>T(H.target.value),children:[s.jsx("option",{value:"",children:"Select participant"}),a.map(H=>s.jsx("option",{value:H.id,children:H.name},H.id))]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Message Type"}),s.jsxs("select",{value:W,onChange:H=>Z(H.target.value),children:[s.jsx("option",{value:"sync",children:"Synchronous Call"}),s.jsx("option",{value:"async",children:"Asynchronous Call"}),s.jsx("option",{value:"return",children:"Return Message"}),s.jsx("option",{value:"create",children:"Create Message"}),s.jsx("option",{value:"destroy",children:"Destroy Message"}),s.jsx("option",{value:"self",children:"Self Call"})]})]}),s.jsxs("button",{onClick:sA,disabled:!B.trim()||!m||!y,className:"add-btn",children:[s.jsx(js,{size:16})," Add Message"]})]}),s.jsxs("div",{className:"sidebar-section",children:[s.jsx("h3",{children:"Message Sequence"}),s.jsx("div",{className:"message-list",children:l.sort((H,uA)=>H.order-uA.order).map(H=>{const uA=a.find(LA=>LA.id===H.from),mA=a.find(LA=>LA.id===H.to);return!uA||!mA?null:s.jsxs("div",{className:"message-item",children:[s.jsxs("div",{className:"message-info",children:[s.jsxs("div",{className:"message-order",children:[H.order,"."]}),s.jsxs("div",{className:"message-text",children:[uA.name," → ",mA.name,": ",H.text]}),s.jsx("div",{className:`message-type ${H.type}`,children:H.type})]}),s.jsxs("div",{className:"message-actions",children:[s.jsx("button",{onClick:()=>jA(H.id),disabled:H.order===1,className:"move-btn",children:"↑"}),s.jsx("button",{onClick:()=>SA(H.id),disabled:H.order===l.length,className:"move-btn",children:"↓"}),s.jsx("button",{onClick:()=>UA(H.id),className:"delete-btn",children:s.jsx(ve,{size:14})})]})]},H.id)})})]})]}),s.jsx("div",{className:"diagram-canvas-wrapper",children:s.jsxs("div",{className:"diagram-canvas",ref:z,style:{transform:`scale(${eA})`,transformOrigin:"top left"},children:[a.map((H,uA)=>K(H,uA)),a.map((H,uA)=>E(H,uA)),a.map((H,uA)=>Y(H.id,uA)),l.sort((H,uA)=>H.order-uA.order).map((H,uA)=>iA(H,uA))]})})]}):s.jsxs("div",{className:"json-editor",children:[s.jsx("div",{className:"json-actions",children:s.jsxs("button",{onClick:()=>{const H=document.createElement("input");H.type="file",H.accept=".json",H.onchange=QA,H.click()},className:"import-btn",children:[s.jsx(ba,{size:16})," Import JSON File"]})}),s.jsx("textarea",{value:CA,onChange:H=>BA(H.target.value),className:"json-textarea"}),s.jsxs("button",{onClick:pA,className:"import-btn",children:[s.jsx(Ns,{size:16})," Apply JSON"]})]}),s.jsx("style",{jsx:!0,children:`
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
          padding: 12px 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          gap: 12px;
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 18px;
          color: #1e293b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 200px;
        }
        
        .spacer {
          flex: 1;
        }
        
        .spacing-controls {
          display: flex;
          align-items: center;
          background: #f1f5f9;
          border-radius: 6px;
          padding: 2px;
          gap: 4px;
        }
        
        .spacing-controls label {
          font-size: 12px;
          font-weight: 500;
          color: #475569;
          padding: 0 8px;
        }
        
        .spacing-btn {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: white;
          border-radius: 4px;
          cursor: pointer;
          color: #475569;
          transition: all 0.2s;
        }
        
        .spacing-btn:hover:not(:disabled) {
          background: #e2e8f0;
        }
        
        .spacing-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .spacing-value {
          font-size: 11px;
          font-weight: 500;
          padding: 0 4px;
          color: #475569;
          min-width: 40px;
          text-align: center;
        }
        
        .zoom-controls {
          display: flex;
          align-items: center;
          background: #f1f5f9;
          border-radius: 6px;
          padding: 2px;
        }
        
        .zoom-btn {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 600;
          color: #475569;
        }
        
        .zoom-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .zoom-level {
          font-size: 12px;
          font-weight: 500;
          padding: 0 8px;
          color: #475569;
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
          font-size: 14px;
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
          font-size: 14px;
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
          width: 320px;
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
          box-shadow: 0 0 0 1px #3b82f6;
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
          font-size: 14px;
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
          color: #1e293b;
        }
        
        .list-item {
          display: flex;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .item-name {
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .item-type {
          font-size: 12px;
          color: #64748b;
          text-transform: capitalize;
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
        
        .diagram-canvas-wrapper {
          flex: 1;
          background: white;
          overflow: auto;
        }
        
        .diagram-canvas {
          position: relative;
          min-height: 600px;
          min-width: 800px;
          transform-origin: top left;
        }
        
        .participant-header {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .participant-actor {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        
        .actor-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #3b82f6;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .actor-name {
          font-size: 12px;
          font-weight: 600;
          color: #1e293b;
          text-align: center;
          max-width: 100px;
          word-wrap: break-word;
        }
        
        .participant-box {
          padding: 8px 16px;
          border: 2px solid #64748b;
          border-radius: 8px;
          background: white;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          max-width: 120px;
        }
        
        .participant-box.service {
          border-color: #10b981;
          background: #ecfdf5;
        }
        
        .participant-box.database {
          border-color: #f59e0b;
          background: #fffbeb;
        }
        
        .participant-box.external {
          border-color: #8b5cf6;
          background: #f3e8ff;
        }
        
        .participant-name {
          font-weight: 600;
          font-size: 12px;
          color: #1e293b;
          word-wrap: break-word;
          line-height: 1.2;
        }
        
        .lifeline {
          position: absolute;
          background: #94a3b8;
          background-image: repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 8px,
            #94a3b8 8px,
            #94a3b8 12px
          );
        }
        
        .activation-box {
          position: absolute;
          background: #fbbf24;
          border: 1px solid #f59e0b;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }
        
        .message-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .message-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .message-text {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-weight: 500;
        }
        
        .message-order {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-weight: 600;
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
          padding: 2px 6px;
          border-radius: 4px;
          margin-left: 8px;
          font-weight: 500;
          text-transform: uppercase;
        }
        
        .message-type.sync {
          background: #e2e8f0;
          color: #475569;
        }
        
        .message-type.async {
          background: #dbeafe;
          color: #1e40af;
        }
        
        .message-type.return {
          background: #d1fae5;
          color: #065f46;
        }
        
        .message-type.create {
          background: #fef3c7;
          color: #92400e;
        }
        
        .message-type.destroy {
          background: #fecaca;
          color: #991b1b;
        }
        
        .message-type.self {
          background: #e9d5ff;
          color: #6b21a8;
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
          font-size: 14px;
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
          box-shadow: 0 0 0 1px #3b82f6;
        }
      `})]})},U1=({architectureDiagrams:r,onCreateArchitectureDiagram:a,onLoadArchitectureDiagram:l,onDeleteArchitectureDiagram:i})=>{const[u,d]=V.useState(!1);return s.jsxs("div",{className:"architecture-main",children:[s.jsxs("div",{className:"welcome-screen",children:[s.jsx("div",{className:"welcome-icon",children:s.jsx(ip,{size:48})}),s.jsx("h2",{children:"Architecture Diagram Designer"}),s.jsx("p",{children:"Model system components and their relationships"}),s.jsx("div",{className:"action-buttons",children:s.jsxs("button",{onClick:()=>d(!0),className:"primary-btn",children:[s.jsx(et,{size:16})," New Diagram"]})}),r.length>0&&s.jsxs("div",{className:"diagram-list",children:[s.jsx("h3",{children:"Your Architecture Diagrams"}),r.map(f=>s.jsxs("div",{className:"diagram-card",onClick:()=>l(f),children:[s.jsxs("div",{className:"diagram-card-content",children:[s.jsx("div",{className:"diagram-card-name",children:f.name}),s.jsxs("div",{className:"diagram-card-meta",children:[s.jsx("span",{children:new Date(f.createdAt).toLocaleDateString()}),s.jsxs("span",{children:[f.components?.length||0," components • ",f.connections?.length||0," connections"]})]})]}),s.jsxs("div",{className:"diagram-card-actions",children:[s.jsx("button",{onClick:B=>{B.stopPropagation(),l(f)},className:"open-btn",children:s.jsx(wa,{size:16})}),s.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this diagram?")&&i(f.id)},className:"delete-btn",children:s.jsx(ve,{size:16})})]})]},f.id))]})]}),u&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-content",children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{children:"Create New Architecture Diagram"}),s.jsx("button",{onClick:()=>d(!1),className:"close-btn",children:"×"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Diagram Name"}),s.jsx("input",{type:"text",placeholder:"e.g., System Architecture",id:"diagramName",autoFocus:!0})]}),s.jsxs("div",{className:"modal-footer",children:[s.jsx("button",{onClick:()=>d(!1),className:"cancel-btn",children:"Cancel"}),s.jsx("button",{onClick:()=>{const f=document.getElementById("diagramName").value;f.trim()&&(a(f),d(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),s.jsx("style",{jsx:!0,children:`
        .architecture-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
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
          color: #8b5cf6;
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
          border-color: #8b5cf6;
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
          background: #8b5cf6;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #7c3aed;
        }
      `})]})},xi=[{id:"service",name:"Service",icon:s.jsx(Hw,{size:20}),color:"#6366f1"},{id:"database",name:"Database",icon:s.jsx(Aw,{size:20}),color:"#10b981"},{id:"compute",name:"Compute",icon:s.jsx(Pm,{size:20}),color:"#f59e0b"},{id:"storage",name:"Storage",icon:s.jsx(sw,{size:20}),color:"#8b5cf6"},{id:"network",name:"Network",icon:s.jsx(mw,{size:20}),color:"#3b82f6"},{id:"cloud",name:"Cloud",icon:s.jsx(Zm,{size:20}),color:"#ec4899"},{id:"router",name:"Router",icon:s.jsx(Uw,{size:20}),color:"#14b8a6"},{id:"user",name:"User",icon:s.jsx($u,{size:20}),color:"#84cc16"},{id:"device",name:"Device",icon:s.jsx(jw,{size:20}),color:"#f97316"},{id:"internet",name:"Internet",icon:s.jsx(aw,{size:20}),color:"#06b6d4"},{id:"security",name:"Security",icon:s.jsx(Dw,{size:20}),color:"#ef4444"},{id:"module",name:"Module",icon:s.jsx(rp,{size:20}),color:"#0ea5e9"},{id:"application",name:"Application",icon:s.jsx(km,{size:20}),color:"#9333ea"},{id:"layer",name:"Layer",icon:s.jsx(ip,{size:20}),color:"#facc15"},{id:"gateway",name:"Gateway",icon:s.jsx(Rw,{size:20}),color:"#22d3ee"},{id:"custom",name:"Custom",icon:s.jsx(et,{size:20}),color:"#64748b"}],F1=({architectureDiagram:r={name:"Architecture Diagram",components:[],connections:[],groups:[]},components:a=[],connections:l=[],groups:i=[],onUpdateArchitectureDiagram:u=()=>{},onBack:d=()=>{}})=>{const[f,B]=V.useState(""),[h,m]=V.useState(""),[b,y]=V.useState(""),[T,W]=V.useState(""),[Z,nA]=V.useState("solid"),[hA,oA]=V.useState("directed"),[lA,CA]=V.useState("editor"),[BA,eA]=V.useState(""),[P,yA]=V.useState(null),[L,z]=V.useState({x:0,y:0}),[wA,sA]=V.useState({}),[dA,UA]=V.useState("service"),[jA,SA]=V.useState(!1),[M,J]=V.useState(""),[pA,QA]=V.useState("file"),[C,v]=V.useState(null),[K,E]=V.useState(""),[Y,iA]=V.useState(""),[H,uA]=V.useState([]),[mA,LA]=V.useState([]),[FA,OA]=V.useState(1),[Ae,Oe]=V.useState({width:2e3,height:2e3}),ZA=V.useRef(null),ye=V.useRef(null),YA=a.length>0?a:r.components||[],GA=l.length>0?l:r.connections||[],ie=i.length>0?i:r.groups||[];V.useEffect(()=>{eA(JSON.stringify({components:YA,connections:GA,groups:ie},null,2))},[YA,GA,ie]),V.useEffect(()=>{if(YA.length===0&&ie.length===0)return;let S=1/0,cA=-1/0,bA=1/0,EA=-1/0;YA.forEach(_A=>{S=Math.min(S,_A.x),cA=Math.max(cA,_A.x+_A.width),bA=Math.min(bA,_A.y),EA=Math.max(EA,_A.y+_A.height)}),ie.forEach(_A=>{S=Math.min(S,_A.x),cA=Math.max(cA,_A.x+_A.width),bA=Math.min(bA,_A.y),EA=Math.max(EA,_A.y+_A.height)});const vA=200,qA=Math.max(2e3,cA-S+vA*2),ee=Math.max(2e3,EA-bA+vA*2);Oe({width:qA,height:ee})},[YA,ie]);const Qe=(S,cA=new Set)=>{if(cA.has(S))return 0;cA.add(S);let bA=0;return ie.forEach(EA=>{EA.groupIds&&EA.groupIds.includes(S)&&(bA=Math.max(bA,Qe(EA.id,cA)+1))}),bA},ct=()=>{if(!f.trim())return;const S=xi.find(bA=>bA.id===dA)||xi[0],cA=[...YA,{id:Date.now(),name:f,type:dA,x:50+Math.random()*200,y:50+Math.random()*200,width:120,height:120,color:S.color,imageUrl:M}];u({...r,components:cA,connections:GA,groups:ie}),B(""),J(""),SA(!1)},_e=()=>{if(!Y.trim())return;if(H.length===0&&mA.length===0){alert("Please select at least one component or group to create a group.");return}let S=1/0,cA=-1/0,bA=1/0,EA=-1/0;H.forEach(_A=>{S=Math.min(S,_A.x),cA=Math.max(cA,_A.x+_A.width),bA=Math.min(bA,_A.y),EA=Math.max(EA,_A.y+_A.height)}),mA.forEach(_A=>{S=Math.min(S,_A.x),cA=Math.max(cA,_A.x+_A.width),bA=Math.min(bA,_A.y),EA=Math.max(EA,_A.y+_A.height)}),S===1/0&&(S=100,cA=300,bA=100,EA=200);const vA=40,qA={id:Date.now(),name:Y,componentIds:H.map(_A=>_A.id),groupIds:mA.map(_A=>_A.id),x:S-vA,y:bA-vA,width:Math.max(200,cA-S+vA*2),height:Math.max(150,EA-bA+vA*2),color:"#e2e8f0"},ee=[...ie,qA];u({...r,components:YA,connections:GA,groups:ee}),iA(""),uA([]),LA([])},lt=()=>{if(!b||!T)return;const S=YA.find(EA=>EA.id===parseInt(b)),cA=YA.find(EA=>EA.id===parseInt(T));if(!S||!cA)return;const bA=[...GA,{id:Date.now(),from:S.id,to:cA.id,type:Z,direction:hA,label:h||"",color:"#64748b"}];u({...r,components:YA,connections:bA,groups:ie}),m(""),y(""),W("")},ut=S=>{const cA=YA.filter(vA=>vA.id!==S),bA=GA.filter(vA=>!(vA.from===S||vA.to===S)),EA=ie.map(vA=>({...vA,componentIds:vA.componentIds.filter(qA=>qA!==S)})).filter(vA=>vA.componentIds.length>0||vA.groupIds&&vA.groupIds.length>0);u({...r,components:cA,connections:bA,groups:EA})},Ft=S=>{const cA=GA.filter(bA=>bA.id!==S);u({...r,components:YA,connections:cA,groups:ie})},AA=S=>{const cA=ie.filter(bA=>bA.id!==S);u({...r,components:YA,connections:GA,groups:cA})},fA=(S,cA,bA=!1)=>{S.preventDefault(),S.stopPropagation();const EA=ZA.current.getBoundingClientRect(),vA=(S.clientX-EA.left)/FA,qA=(S.clientY-EA.top)/FA;if(yA({...cA,isGroup:bA}),z({x:vA-cA.x,y:qA-cA.y}),bA){const ee={};cA.componentIds&&cA.componentIds.forEach(_A=>{const me=YA.find(He=>He.id===_A);me&&(ee[`component_${_A}`]={x:me.x,y:me.y})}),cA.groupIds&&cA.groupIds.forEach(_A=>{const me=ie.find(He=>He.id===_A);me&&(ee[`group_${_A}`]={x:me.x,y:me.y})}),sA(ee)}},DA=(S,cA)=>{S.stopPropagation(),S.shiftKey?uA(bA=>bA.some(vA=>vA.id===cA.id)?bA.filter(vA=>vA.id!==cA.id):[...bA,cA]):(uA([cA]),LA([]))},F=(S,cA)=>{S.stopPropagation(),S.shiftKey?LA(bA=>bA.some(vA=>vA.id===cA.id)?bA.filter(vA=>vA.id!==cA.id):[...bA,cA]):(LA([cA]),uA([]))},D=V.useCallback(S=>{if(!P)return;const cA=ZA.current.getBoundingClientRect(),bA=Math.max(0,(S.clientX-cA.left)/FA-L.x),EA=Math.max(0,(S.clientY-cA.top)/FA-L.y);if(P.isGroup){const vA=bA-P.x,qA=EA-P.y,ee=YA.map(me=>{if(P.componentIds&&P.componentIds.includes(me.id)){const He=wA[`component_${me.id}`];if(He)return{...me,x:Math.max(0,He.x+vA),y:Math.max(0,He.y+qA)}}return me}),_A=ie.map(me=>{if(me.id===P.id)return{...me,x:Math.max(0,bA),y:Math.max(0,EA)};if(P.groupIds&&P.groupIds.includes(me.id)){const He=wA[`group_${me.id}`];if(He)return{...me,x:Math.max(0,He.x+vA),y:Math.max(0,He.y+qA)}}return me});u({...r,components:ee,connections:GA,groups:_A})}else{const vA=YA.map(qA=>qA.id===P.id?{...qA,x:Math.max(0,bA),y:Math.max(0,EA)}:qA);u({...r,components:vA,connections:GA,groups:ie})}},[P,L,wA,YA,GA,ie,r,u,FA]),q=V.useCallback(()=>{yA(null),sA({})},[]);V.useEffect(()=>{if(P)return document.addEventListener("mousemove",D),document.addEventListener("mouseup",q),()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",q)}},[P,D,q]);const xA=S=>{v(S.id),E(S.name)},gA=()=>{if(!C||!K.trim())return;const S=YA.map(cA=>cA.id===C?{...cA,name:K}:cA);u({...r,components:S,connections:GA,groups:ie}),v(null),E("")},w=S=>{S.target===ZA.current&&(uA([]),LA([]))},p=()=>JSON.stringify({components:YA,connections:GA,groups:ie},null,2),Q=()=>{navigator.clipboard.writeText(p())},j=()=>{try{const S=JSON.parse(BA);Array.isArray(S.components)&&Array.isArray(S.connections)?u({...r,components:S.components||[],connections:S.connections||[],groups:S.groups||[]}):alert("Invalid JSON format. Expected components and connections arrays.")}catch(S){alert("Error parsing JSON: "+S.message)}},k=S=>{const cA=S.target.files[0];if(!cA)return;const bA=new FileReader;bA.onload=EA=>{eA(EA.target.result)},bA.readAsText(cA)},G=S=>{const cA=S.target.files[0];if(!cA)return;const bA=new FileReader;bA.onload=EA=>{J(EA.target.result)},bA.readAsDataURL(cA)},rA=S=>{J(S.target.value)},TA=()=>{OA(S=>Math.min(2,S+.1))},KA=()=>{OA(S=>Math.max(.5,S-.1))},XA=()=>{OA(1)},ae=()=>{if(!ZA.current)return;const S=ZA.current.style.transform,cA=ZA.current.style.width,bA=ZA.current.style.height;ZA.current.style.width=`${Ae.width}px`,ZA.current.style.height=`${Ae.height}px`,Xs(()=>Promise.resolve().then(()=>Vs),void 0).then(EA=>{EA.default(ZA.current,{backgroundColor:"#f8fafc",scale:2,useCORS:!0,width:Ae.width,height:Ae.height}).then(vA=>{const qA=document.createElement("a");qA.download=`${r.name||"architecture-diagram"}.png`,qA.href=vA.toDataURL("image/png"),qA.click(),ZA.current.style.transform=S,ZA.current.style.width=cA,ZA.current.style.height=bA})})},Ue=(S,cA)=>{const bA=S.x+S.width/2,EA=S.y+S.height/2,vA=cA.x+cA.width/2,qA=cA.y+cA.height/2,ee=vA-bA,_A=qA-EA;let me,He;Math.abs(ee)>Math.abs(_A)?(me=ee>0?S.x+S.width:S.x,He=EA):(me=bA,He=_A>0?S.y+S.height:S.y);let dt,ft;return Math.abs(ee)>Math.abs(_A)?(dt=ee>0?cA.x:cA.x+cA.width,ft=qA):(dt=vA,ft=_A>0?cA.y:cA.y+cA.height),{fromX:me,fromY:He,toX:dt,toY:ft}},ue=S=>{const cA=xi.find(vA=>vA.id===S.type)||xi[0],bA=H.some(vA=>vA.id===S.id),EA=C===S.id;return s.jsxs("div",{className:"component",style:{position:"absolute",left:`${S.x}px`,top:`${S.y}px`,width:`${S.width}px`,height:`${S.height}px`,cursor:P?.id===S.id?"grabbing":"grab",outline:bA?"3px dashed #3b82f6":"none",outlineOffset:"2px",zIndex:50,display:"flex",flexDirection:"column",background:"white",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",border:"2px solid #e2e8f0",overflow:"hidden",textAlign:"center",fontSize:"12px"},onMouseDown:vA=>fA(vA,S),onClick:vA=>DA(vA,S),onDoubleClick:()=>xA(S),children:[s.jsx("div",{style:{width:"100%",height:"70%",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"#f8fafc",borderRadius:"10px 10px 0 0"},children:S.imageUrl?s.jsx("img",{src:S.imageUrl,alt:S.name,style:{maxWidth:"90%",maxHeight:"90%",objectFit:"contain",borderRadius:"6px"}}):s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:S.color||cA.color},children:vm.cloneElement(cA.icon,{size:48})})}),s.jsx("div",{style:{width:"100%",height:"30%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"6px 0px",color:"white",fontWeight:"600",borderRadius:"0 0 10px 10px",backgroundColor:S.color||cA.color},children:EA?s.jsx("input",{type:"text",value:K,onChange:vA=>E(vA.target.value),onBlur:gA,onKeyPress:vA=>vA.key==="Enter"&&gA(),autoFocus:!0,style:{width:"100%",border:"none",background:"rgba(255, 255, 255, 0.2)",color:"white",textAlign:"center",fontWeight:"600",outline:"none",fontSize:"11px"}}):s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{fontSize:"11px",fontWeight:"600",lineHeight:"1.2",marginBottom:"2px",wordBreak:"break-word",maxWidth:"100%"},children:S.name}),s.jsx("div",{style:{fontSize:"9px",opacity:"0.9",fontWeight:"500"},children:cA.name})]})})]},S.id)},le=S=>{if(!S.componentIds&&!S.groupIds)return null;const cA=YA.filter(ee=>S.componentIds&&S.componentIds.includes(ee.id)),bA=ie.filter(ee=>S.groupIds&&S.groupIds.includes(ee.id)),EA=mA.some(ee=>ee.id===S.id),qA=10+Qe(S.id)*5;return s.jsxs("div",{className:"group",style:{position:"absolute",left:`${S.x}px`,top:`${S.y}px`,width:`${S.width}px`,height:`${S.height}px`,backgroundColor:"rgba(226, 232, 240, 0.3)",border:"2px dashed #94a3b8",borderRadius:"12px",cursor:P?.id===S.id?"grabbing":"grab",outline:EA?"3px dashed #8b5cf6":"none",outlineOffset:"2px",zIndex:qA,paddingTop:"40px",boxSizing:"border-box",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)",pointerEvents:"auto"},onMouseDown:ee=>fA(ee,S,!0),onClick:ee=>F(ee,S),children:[s.jsxs("div",{style:{position:"absolute",top:"8px",left:"12px",right:"12px",fontWeight:"700",fontSize:"14px",color:"#1e293b",display:"flex",justifyContent:"space-between",alignItems:"center",pointerEvents:"auto",zIndex:qA+1},children:[s.jsx("span",{style:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:S.name}),s.jsx("button",{onClick:ee=>{ee.stopPropagation(),AA(S.id)},style:{background:"rgba(239, 68, 68, 0.1)",border:"1px solid rgba(239, 68, 68, 0.3)",color:"#ef4444",cursor:"pointer",padding:"4px",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:qA+2},children:s.jsx(ve,{size:14})})]}),s.jsxs("div",{style:{position:"absolute",bottom:"8px",left:"12px",fontSize:"11px",color:"#64748b",fontStyle:"italic",pointerEvents:"none"},children:[cA.length," component",cA.length!==1?"s":"",bA.length>0&&`, ${bA.length} group${bA.length!==1?"s":""}`]})]},S.id)},tt=S=>{const cA=YA.find(Xt=>Xt.id===S.from),bA=YA.find(Xt=>Xt.id===S.to);if(!cA||!bA)return null;const{fromX:EA,fromY:vA,toX:qA,toY:ee}=Ue(cA,bA),_A=qA-EA,me=ee-vA,He=Math.atan2(me,_A),dt=10;let ft={};return S.type==="dashed"?ft={strokeDasharray:"5,5",stroke:S.color||"#64748b"}:S.type==="dotted"?ft={strokeDasharray:"2,2",stroke:S.color||"#64748b"}:ft={stroke:S.color||"#64748b"},s.jsxs("svg",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:49},children:[s.jsx("line",{x1:EA,y1:vA,x2:qA,y2:ee,strokeWidth:"2",...ft}),S.direction==="directed"&&s.jsx("polygon",{points:`
              ${qA-dt*Math.cos(He-Math.PI/6)},${ee-dt*Math.sin(He-Math.PI/6)}
              ${qA},${ee}
              ${qA-dt*Math.cos(He+Math.PI/6)},${ee-dt*Math.sin(He+Math.PI/6)}
            `,fill:ft.stroke||"#64748b"}),S.label&&s.jsx("text",{x:(EA+qA)/2,y:(vA+ee)/2-10,textAnchor:"middle",fontSize:"12",fill:ft.stroke||"#475569",children:S.label})]},S.id)};return s.jsxs("div",{style:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",background:"#f8fafc",fontFamily:"Inter, system-ui, -apple-system, sans-serif"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"16px",background:"white",borderBottom:"1px solid #e2e8f0",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[s.jsxs("button",{onClick:d,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#f1f5f9",color:"#64748b",border:"1px solid #e2e8f0"},children:[s.jsx(Mi,{size:16})," Back"]}),s.jsx("h2",{style:{margin:"0 16px",fontSize:"20px",color:"#1e293b"},children:r.name}),s.jsx("div",{style:{flex:1}}),s.jsxs("div",{style:{display:"flex",gap:"8px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",marginRight:"16px",background:"#f1f5f9",borderRadius:"6px",padding:"4px"},children:[s.jsx("button",{onClick:KA,style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",borderRadius:"4px",cursor:"pointer",color:"#64748b"},title:"Zoom Out",children:s.jsx(ed,{size:16})}),s.jsxs("div",{style:{minWidth:"60px",textAlign:"center",fontSize:"14px",fontWeight:"500"},children:[Math.round(FA*100),"%"]}),s.jsx("button",{onClick:TA,style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",borderRadius:"4px",cursor:"pointer",color:"#64748b"},title:"Zoom In",children:s.jsx(Ad,{size:16})}),s.jsx("button",{onClick:XA,style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",borderRadius:"4px",cursor:"pointer",color:"#64748b",marginLeft:"4px"},title:"Reset Zoom",children:s.jsx(dw,{size:16})})]}),s.jsxs("button",{onClick:ae,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#8b5cf6",color:"white",border:"1px solid #8b5cf6"},children:[s.jsx(hr,{size:16})," Export Image"]}),s.jsxs("button",{onClick:Q,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#8b5cf6",color:"white",border:"1px solid #8b5cf6"},children:[s.jsx(Ts,{size:16})," Copy JSON"]}),s.jsxs("button",{onClick:()=>{const S=new Blob([p()],{type:"application/json"}),cA=URL.createObjectURL(S),bA=document.createElement("a");bA.href=cA,bA.download=`${r.name||"architecture-diagram"}.json`,document.body.appendChild(bA),bA.click(),document.body.removeChild(bA),URL.revokeObjectURL(cA)},style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#8b5cf6",color:"white",border:"1px solid #8b5cf6"},children:[s.jsx(pr,{size:16})," Export JSON"]})]})]}),s.jsxs("div",{style:{display:"flex",borderBottom:"1px solid #e2e8f0",background:"white"},children:[s.jsx("button",{style:{padding:"12px 24px",border:"none",background:"none",cursor:"pointer",fontWeight:"500",color:lA==="editor"?"#8b5cf6":"#64748b",borderBottom:lA==="editor"?"2px solid #8b5cf6":"2px solid transparent"},onClick:()=>CA("editor"),children:"Diagram Editor"}),s.jsx("button",{style:{padding:"12px 24px",border:"none",background:"none",cursor:"pointer",fontWeight:"500",color:lA==="json"?"#8b5cf6":"#64748b",borderBottom:lA==="json"?"2px solid #8b5cf6":"2px solid transparent"},onClick:()=>CA("json"),children:"JSON Editor"})]}),lA==="editor"?s.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[s.jsxs("div",{style:{width:"320px",background:"white",borderRight:"1px solid #e2e8f0",display:"flex",flexDirection:"column",overflow:"auto"},children:[s.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid #f1f5f9"},children:[s.jsx("h3",{style:{marginTop:"0",marginBottom:"12px",fontSize:"16px",color:"#1e293b"},children:"Components"}),s.jsx("div",{style:{marginBottom:"12px"},children:s.jsx("input",{type:"text",value:f,onChange:S=>B(S.target.value),placeholder:"Component name",onKeyPress:S=>S.key==="Enter"&&ct(),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"}})}),s.jsxs("div",{style:{marginBottom:"12px"},children:[s.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"Component Type"}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"8px",marginTop:"8px"},children:xi.map(S=>s.jsx("button",{onClick:()=>UA(S.id),title:S.name,style:{width:"100%",aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",border:"none",borderRadius:"6px",cursor:"pointer",color:"white",transition:"all 0.2s",backgroundColor:S.color,outline:dA===S.id?"2px solid #1e293b":"none",outlineOffset:"2px"},children:S.icon},S.id))})]}),s.jsxs("div",{style:{marginBottom:"12px"},children:[s.jsxs("button",{onClick:()=>SA(!jA),style:{width:"100%",padding:"8px",background:"#e2e8f0",border:"none",borderRadius:"6px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"14px"},children:[s.jsx(hr,{size:16})," ",M?"Change Image":"Add Image (Optional)"]}),jA&&s.jsxs("div",{style:{marginTop:"8px"},children:[s.jsxs("div",{style:{display:"flex",marginBottom:"8px",borderBottom:"1px solid #e2e8f0"},children:[s.jsx("button",{onClick:()=>QA("file"),style:{flex:1,padding:"6px",border:"none",background:"none",cursor:"pointer",fontSize:"12px",color:pA==="file"?"#8b5cf6":"#64748b",borderBottom:pA==="file"?"2px solid #8b5cf6":"2px solid transparent"},children:"Upload File"}),s.jsx("button",{onClick:()=>QA("url"),style:{flex:1,padding:"6px",border:"none",background:"none",cursor:"pointer",fontSize:"12px",color:pA==="url"?"#8b5cf6":"#64748b",borderBottom:pA==="url"?"2px solid #8b5cf6":"2px solid transparent"},children:"URL"})]}),pA==="file"?s.jsx("input",{type:"file",accept:"image/*",onChange:G,style:{width:"100%",marginBottom:"8px"}}):s.jsx("input",{type:"text",value:M,onChange:rA,placeholder:"Enter image URL",style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px",marginBottom:"8px"}}),M&&s.jsxs("div",{style:{position:"relative",marginTop:"8px",display:"flex",justifyContent:"center"},children:[s.jsx("img",{src:M,alt:"Preview",style:{maxWidth:"100%",maxHeight:"60px",borderRadius:"4px"}}),s.jsx("button",{onClick:()=>J(""),style:{position:"absolute",top:"-8px",right:"-8px",width:"20px",height:"20px",borderRadius:"50%",background:"#fee2e2",color:"#ef4444",border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:s.jsx(ve,{size:12})})]})]})]}),s.jsxs("button",{onClick:ct,disabled:!f.trim(),style:{width:"100%",padding:"8px 16px",background:f.trim()?"#8b5cf6":"#ddd6fe",color:"white",border:"none",borderRadius:"6px",fontWeight:"500",cursor:f.trim()?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginTop:"8px"},children:[s.jsx(et,{size:16})," Add Component"]}),s.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"12px"},children:YA.map(S=>s.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f1f5f9"},children:[s.jsx("div",{style:{flex:1},children:s.jsx("div",{style:{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:S.name})}),s.jsx("button",{onClick:()=>ut(S.id),style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fee2e2",color:"#ef4444",border:"none",cursor:"pointer",marginLeft:"8px"},children:s.jsx(ve,{size:14})})]},S.id))})]}),s.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid #f1f5f9"},children:[s.jsx("h3",{style:{marginTop:"0",marginBottom:"12px",fontSize:"16px",color:"#1e293b"},children:"Groups"}),s.jsx("div",{style:{marginBottom:"12px"},children:s.jsx("input",{type:"text",value:Y,onChange:S=>iA(S.target.value),placeholder:"Group name",onKeyPress:S=>S.key==="Enter"&&_e(),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"}})}),s.jsxs("button",{onClick:_e,disabled:!Y.trim()||H.length===0&&mA.length===0,style:{width:"100%",padding:"8px 16px",background:!Y.trim()||H.length===0&&mA.length===0?"#ddd6fe":"#8b5cf6",color:"white",border:"none",borderRadius:"6px",fontWeight:"500",cursor:!Y.trim()||H.length===0&&mA.length===0?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[s.jsx(rp,{size:16})," Create Group"]}),s.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"#f1f5f9",borderRadius:"6px",fontSize:"12px"},children:[H.length>0||mA.length>0?s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{marginBottom:"8px",fontWeight:"500"},children:[H.length," component(s), ",mA.length," group(s) selected"]}),s.jsxs("button",{onClick:()=>{uA([]),LA([])},style:{display:"flex",alignItems:"center",gap:"4px",background:"none",border:"none",color:"#64748b",cursor:"pointer",fontSize:"12px",padding:"4px 8px",borderRadius:"4px"},children:[s.jsx(lp,{size:14})," Clear Selection"]})]}):s.jsx("div",{children:"No items selected"}),s.jsx("div",{style:{marginTop:"8px",color:"#64748b",fontStyle:"italic"},children:"Hold Shift + Click to select multiple items"})]}),s.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"12px"},children:ie.map(S=>s.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f1f5f9"},children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{style:{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:S.name}),s.jsxs("div",{style:{fontSize:"12px",color:"#64748b",marginTop:"2px"},children:[S.componentIds?S.componentIds.length:0," components",S.groupIds&&S.groupIds.length>0&&`, ${S.groupIds.length} groups`]})]}),s.jsx("button",{onClick:()=>AA(S.id),style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fee2e2",color:"#ef4444",border:"none",cursor:"pointer",marginLeft:"8px"},children:s.jsx(ve,{size:14})})]},S.id))})]}),s.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid #f1f5f9"},children:[s.jsx("h3",{style:{marginTop:"0",marginBottom:"12px",fontSize:"16px",color:"#1e293b"},children:"Connections"}),s.jsx("div",{style:{marginBottom:"12px"},children:s.jsx("input",{type:"text",value:h,onChange:S=>m(S.target.value),placeholder:"Connection label (optional)",onKeyPress:S=>S.key==="Enter"&&lt(),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"}})}),s.jsxs("div",{style:{marginBottom:"12px"},children:[s.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"From Component"}),s.jsxs("select",{value:b||"",onChange:S=>y(S.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[s.jsx("option",{value:"",children:"Select component"}),YA.map(S=>s.jsx("option",{value:S.id,children:S.name},S.id))]})]}),s.jsxs("div",{style:{marginBottom:"12px"},children:[s.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"To Component"}),s.jsxs("select",{value:T||"",onChange:S=>W(S.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[s.jsx("option",{value:"",children:"Select component"}),YA.map(S=>s.jsx("option",{value:S.id,children:S.name},S.id))]})]}),s.jsxs("div",{style:{marginBottom:"12px"},children:[s.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"Connection Type"}),s.jsxs("select",{value:Z,onChange:S=>nA(S.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[s.jsx("option",{value:"solid",children:"Solid Line"}),s.jsx("option",{value:"dashed",children:"Dashed Line"}),s.jsx("option",{value:"dotted",children:"Dotted Line"})]})]}),s.jsxs("div",{style:{marginBottom:"12px"},children:[s.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"Direction"}),s.jsxs("select",{value:hA,onChange:S=>oA(S.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[s.jsx("option",{value:"directed",children:"Directed (with arrow)"}),s.jsx("option",{value:"undirected",children:"Undirected"})]})]}),s.jsxs("button",{onClick:lt,disabled:!b||!T,style:{width:"100%",padding:"8px 16px",background:!b||!T?"#ddd6fe":"#8b5cf6",color:"white",border:"none",borderRadius:"6px",fontWeight:"500",cursor:!b||!T?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[s.jsx(js,{size:16})," Add Connection"]}),s.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"12px"},children:GA.map(S=>{const cA=YA.find(EA=>EA.id===S.from),bA=YA.find(EA=>EA.id===S.to);return!cA||!bA?null:s.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f1f5f9"},children:[s.jsxs("div",{style:{flex:1},children:[s.jsxs("div",{style:{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[cA.name," → ",bA.name]}),s.jsx("div",{style:{fontSize:"12px",color:"#64748b",marginTop:"2px"},children:S.type}),S.label&&s.jsx("div",{style:{fontSize:"12px",color:"#64748b",marginTop:"2px"},children:S.label})]}),s.jsx("button",{onClick:()=>Ft(S.id),style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fee2e2",color:"#ef4444",border:"none",cursor:"pointer",marginLeft:"8px"},children:s.jsx(ve,{size:14})})]},S.id)})})]})]}),s.jsx("div",{ref:ye,style:{flex:1,overflow:"auto",position:"relative",background:"#f8fafc"},children:s.jsxs("div",{ref:ZA,onClick:w,style:{position:"absolute",width:`${Ae.width}px`,height:`${Ae.height}px`,background:"white",backgroundImage:"linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",backgroundSize:"20px 20px",transform:`scale(${FA})`,transformOrigin:"0 0"},children:[ie.map(le),GA.map(tt),YA.map(ue)]})})]}):s.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,padding:"16px",background:"white"},children:[s.jsx("div",{style:{display:"flex",gap:"8px",marginBottom:"12px"},children:s.jsxs("button",{onClick:()=>{const S=document.createElement("input");S.type="file",S.accept=".json",S.onchange=k,S.click()},style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",border:"none",background:"#8b5cf6",color:"white"},children:[s.jsx(ba,{size:16})," Import JSON File"]})}),s.jsx("textarea",{value:BA,onChange:S=>eA(S.target.value),style:{flex:1,padding:"12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontFamily:"monospace",fontSize:"14px",resize:"none",marginBottom:"12px"}}),s.jsxs("button",{onClick:j,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",border:"none",background:"#8b5cf6",color:"white",alignSelf:"flex-start"},children:[s.jsx(Ns,{size:16})," Apply JSON"]})]})]})},E1=({classDiagrams:r,onCreateClassDiagram:a,onLoadClassDiagram:l,onDeleteClassDiagram:i})=>{const[u,d]=V.useState(!1);return s.jsxs("div",{className:"class-diagram-main",children:[s.jsxs("div",{className:"welcome-screen",children:[s.jsx("div",{className:"welcome-icon",children:s.jsx(zm,{size:48})}),s.jsx("h2",{children:"Class Diagram Designer"}),s.jsx("p",{children:"Model classes and their relationships in object-oriented design"}),s.jsx("div",{className:"action-buttons",children:s.jsxs("button",{onClick:()=>d(!0),className:"primary-btn",children:[s.jsx(et,{size:16})," New Diagram"]})}),r.length>0&&s.jsxs("div",{className:"diagram-list",children:[s.jsx("h3",{children:"Your Class Diagrams"}),r.map(f=>s.jsxs("div",{className:"diagram-card",onClick:()=>l(f),children:[s.jsxs("div",{className:"diagram-card-content",children:[s.jsx("div",{className:"diagram-card-name",children:f.name}),s.jsxs("div",{className:"diagram-card-meta",children:[s.jsx("span",{children:new Date(f.createdAt).toLocaleDateString()}),s.jsxs("span",{children:[f.classes?.length||0," classes • ",f.relationships?.length||0," relationships"]})]})]}),s.jsxs("div",{className:"diagram-card-actions",children:[s.jsx("button",{onClick:B=>{B.stopPropagation(),l(f)},className:"open-btn",children:s.jsx(wa,{size:16})}),s.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this diagram?")&&i(f.id)},className:"delete-btn",children:s.jsx(ve,{size:16})})]})]},f.id))]})]}),u&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-content",children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{children:"Create New Class Diagram"}),s.jsx("button",{onClick:()=>d(!1),className:"close-btn",children:"×"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Diagram Name"}),s.jsx("input",{type:"text",placeholder:"e.g., Banking System Classes",id:"diagramName",autoFocus:!0})]}),s.jsxs("div",{className:"modal-footer",children:[s.jsx("button",{onClick:()=>d(!1),className:"cancel-btn",children:"Cancel"}),s.jsx("button",{onClick:()=>{const f=document.getElementById("diagramName").value;f.trim()&&(a(f),d(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),s.jsx("style",{jsx:!0,children:`
        .class-diagram-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
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
          color: #ec4899;
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
          border-color: #ec4899;
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
          background: #ec4899;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #db2777;
        }
      `})]})},H1=({classDiagram:r,classes:a=[],relationships:l=[],onUpdateClassDiagram:i,onBack:u})=>{const[d,f]=V.useState(""),[B,h]=V.useState(""),[m,b]=V.useState(""),[y,T]=V.useState(""),[W,Z]=V.useState("association"),[nA,hA]=V.useState("editor"),[oA,lA]=V.useState(""),[CA,BA]=V.useState(null),[eA,P]=V.useState({x:0,y:0}),[yA,L]=V.useState(null),[z,wA]=V.useState({x:0,y:0}),[sA,dA]=V.useState(null),[UA,jA]=V.useState(""),[SA,M]=V.useState(-1),[J,pA]=V.useState({visibility:"+",name:"",type:"String"}),[QA,C]=V.useState({visibility:"+",name:"",returnType:"void"}),v=V.useRef(null),K=[{header:"#EC4899",border:"#BE185D",background:"#FDF2F8"},{header:"#DB2777",border:"#9D174D",background:"#FCE7F3"},{header:"#F472B6",border:"#EC4899",background:"#FDF2F8"},{header:"#F43F5E",border:"#E11D48",background:"#FFF1F2"},{header:"#F97316",border:"#EA580C",background:"#FFEDD5"},{header:"#8B5CF6",border:"#7C3AED",background:"#F5F3FF"},{header:"#3B82F6",border:"#2563EB",background:"#EFF6FF"},{header:"#10B981",border:"#059669",background:"#ECFDF5"}],E=["String","int","float","double","boolean","void","char","long","short","byte"],Y=[{value:"+",label:"Public (+)"},{value:"-",label:"Private (-)"},{value:"#",label:"Protected (#)"},{value:"~",label:"Package (~)"}];V.useEffect(()=>{lA(JSON.stringify({classes:a,relationships:l},null,2))},[a,l]);const iA=()=>K[Math.floor(Math.random()*K.length)],H=(w,p="12px",Q="'SF Mono', monospace")=>{const k=document.createElement("canvas").getContext("2d");return k.font=`${p} ${Q}`,k.measureText(w).width},uA=w=>{const j=H(w.name,"16px","'Inter', sans-serif")+32;let k=0;w.attributes.forEach(le=>{const tt=`${le.visibility} ${le.name} : ${le.type}`,S=H(tt)+32;S>k&&(k=S)});let G=0;w.methods.forEach(le=>{const tt=`${le.visibility} ${le.name} : ${le.returnType}`,S=H(tt)+32;S>G&&(G=S)});const rA=Math.max(180,j,k,G),TA=40,KA=22,XA=4,ae=w.attributes.length>0?w.attributes.length*KA+XA:0,Ue=w.methods.length>0?w.methods.length*KA+XA:0,ue=TA+ae+Ue+(w.attributes.length>0&&w.methods.length>0?2:0);return{width:Math.min(rA,400),height:Math.max(ue,80)}},mA=()=>{if(!d.trim())return;const w=iA(),p=uA({name:d,attributes:[],methods:[]}),Q=[...a,{id:Date.now(),name:d,attributes:[],methods:[],x:50+Math.random()*200,y:50+Math.random()*200,width:p.width,height:p.height,colorScheme:w}];i({...r,classes:Q}),f("")},LA=w=>{const p=a.find(Q=>Q.id===w);p&&dA(p)},FA=(w,p=-1)=>{const Q=a.find(j=>j.id===w);Q&&(jA("attribute"),M(p),p>=0?pA({...Q.attributes[p]}):pA({visibility:"+",name:"",type:"String"}))},OA=(w,p=-1)=>{const Q=a.find(j=>j.id===w);Q&&(jA("method"),M(p),p>=0?C({...Q.methods[p]}):C({visibility:"+",name:"",returnType:"void"}))},Ae=()=>{if(!J.name.trim())return;const w=a.map(p=>{if(p.id===sA.id){const Q=[...p.attributes];SA>=0?Q[SA]={...J}:Q.push({...J});const j={...p,attributes:Q},k=uA(j);return{...j,width:k.width,height:k.height}}return p});i({...r,classes:w}),ZA()},Oe=()=>{if(!QA.name.trim())return;let w=QA.name;w.includes("(")||(w+="()");const p=a.map(Q=>{if(Q.id===sA.id){const j=[...Q.methods];SA>=0?j[SA]={...QA,name:w}:j.push({...QA,name:w});const k={...Q,methods:j},G=uA(k);return{...k,width:G.width,height:G.height}}return Q});i({...r,classes:p}),ZA()},ZA=()=>{dA(null),jA(""),M(-1)},ye=()=>{if(!m||!y)return;const w=a.find(j=>j.id===parseInt(m)),p=a.find(j=>j.id===parseInt(y));if(!w||!p)return;const Q=[...l,{id:Date.now(),from:w.id,to:p.id,type:W,label:B||""}];i({...r,relationships:Q}),h(""),b(""),T("")},YA=w=>{const p=a.filter(j=>j.id!==w),Q=l.filter(j=>!(j.from===w||j.to===w));i({...r,classes:p,relationships:Q})},GA=(w,p)=>{const Q=a.map(j=>{if(j.id===w){const k=j.attributes.filter((TA,KA)=>KA!==p),G={...j,attributes:k},rA=uA(G);return{...G,width:rA.width,height:rA.height}}return j});i({...r,classes:Q})},ie=(w,p)=>{const Q=a.map(j=>{if(j.id===w){const k=j.methods.filter((TA,KA)=>KA!==p),G={...j,methods:k},rA=uA(G);return{...G,width:rA.width,height:rA.height}}return j});i({...r,classes:Q})},Qe=w=>{const p=l.filter(Q=>Q.id!==w);i({...r,relationships:p})},ct=(w,p,Q=!1)=>{w.stopPropagation();const j=v.current?.getBoundingClientRect();j&&(Q?(L(p),wA({x:w.clientX,y:w.clientY})):(BA(p),P({x:w.clientX-j.left-p.x,y:w.clientY-j.top-p.y})))},_e=w=>{if(CA){const p=v.current?.getBoundingClientRect();if(!p)return;const Q=Math.max(0,w.clientX-p.left-eA.x),j=Math.max(0,w.clientY-p.top-eA.y),k=a.map(G=>G.id===CA.id?{...G,x:Q,y:j}:G);i({...r,classes:k})}else if(yA){const p=w.clientX-z.x,Q=w.clientY-z.y,j=a.map(k=>{if(k.id===yA.id){const G=Math.max(180,k.width+p),rA=Math.max(80,k.height+Q);return{...k,width:G,height:rA}}return k});i({...r,classes:j}),wA({x:w.clientX,y:w.clientY})}},lt=()=>{BA(null),L(null)};V.useEffect(()=>{if(CA||yA)return document.addEventListener("mousemove",_e),document.addEventListener("mouseup",lt),()=>{document.removeEventListener("mousemove",_e),document.removeEventListener("mouseup",lt)}},[CA,yA,eA,z]);const ut=()=>JSON.stringify({classes:a,relationships:l},null,2),Ft=()=>{navigator.clipboard.writeText(ut())},AA=()=>{try{const w=JSON.parse(oA);Array.isArray(w.classes)&&Array.isArray(w.relationships)?i({...r,classes:w.classes,relationships:w.relationships}):alert("Invalid JSON format. Expected classes and relationships arrays.")}catch(w){alert("Error parsing JSON: "+w.message)}},fA=w=>{const p=w.target.files[0];if(!p)return;const Q=new FileReader;Q.onload=j=>{lA(j.target.result)},Q.readAsText(p)},DA=()=>{if(!v.current)return;const w=v.current.style.transform;v.current.style.transform="scale(1) translate(0px, 0px)",Xs(()=>Promise.resolve().then(()=>Vs),void 0).then(p=>{p.default(v.current,{backgroundColor:"#f8fafc",scale:2,useCORS:!0}).then(Q=>{const j=document.createElement("a");j.download=`${r.name||"class-diagram"}.png`,j.href=Q.toDataURL("image/png"),j.click(),v.current.style.transform=w})})},F=(w,p)=>{const Q={x:w.x+w.width/2,y:w.y+w.height/2},j={x:p.x+p.width/2,y:p.y+p.height/2},k=j.x-Q.x,G=j.y-Q.y;Q.x+(k>0?w.width/2:-w.width/2),Q.y+(Math.abs(k)*w.height/w.width>Math.abs(G)?G>0?w.height/2:-w.height/2:(G>0?w.height/2:-w.height/2)*(w.width/w.height)),j.x+(k<0?p.width/2:-p.width/2),j.y+(Math.abs(k)*p.height/p.width>Math.abs(G)?G<0?p.height/2:-p.height/2:(G<0?p.height/2:-p.height/2)*(p.width/p.height));const rA={x:Math.max(w.x,Math.min(w.x+w.width,Math.abs(k)>Math.abs(G)*(w.width/w.height)?Q.x+(k>0?w.width/2:-w.width/2):Q.x)),y:Math.max(w.y,Math.min(w.y+w.height,Math.abs(G)>Math.abs(k)*(w.height/w.width)?Q.y+(G>0?w.height/2:-w.height/2):Q.y))},TA={x:Math.max(p.x,Math.min(p.x+p.width,Math.abs(k)>Math.abs(G)*(p.width/p.height)?j.x+(k<0?p.width/2:-p.width/2):j.x)),y:Math.max(p.y,Math.min(p.y+p.height,Math.abs(G)>Math.abs(k)*(p.height/p.width)?j.y+(G<0?p.height/2:-p.height/2):j.y))};return{fromPoint:rA,toPoint:TA}},D=(w,p)=>{if(Math.sqrt(Math.pow(p.x-w.x,2)+Math.pow(p.y-w.y,2))<300)return`M${w.x},${w.y} L${p.x},${p.y}`;const j=w.x+(p.x-w.x)*.5,k=w.y+(p.y-w.y)*.5;return Math.abs(p.x-w.x)>Math.abs(p.y-w.y)?`M${w.x},${w.y} L${j},${w.y} L${j},${p.y} L${p.x},${p.y}`:`M${w.x},${w.y} L${w.x},${k} L${p.x},${k} L${p.x},${p.y}`},q=w=>{const p=w.colorScheme||K[0];return s.jsxs("div",{className:"class-box",style:{left:`${w.x}px`,top:`${w.y}px`,width:`${w.width}px`,height:`${w.height}px`,cursor:CA?.id===w.id?"grabbing":"grab",borderColor:p.border,backgroundColor:"white"},onMouseDown:Q=>ct(Q,w),onDoubleClick:()=>LA(w.id),children:[s.jsx("div",{className:"class-header",style:{backgroundColor:p.header,color:"white"},children:s.jsx("div",{className:"class-name",children:w.name})}),s.jsxs("div",{className:"class-content",children:[w.attributes.length>0&&s.jsx("div",{className:"attributes-section",children:w.attributes.map((Q,j)=>s.jsxs("div",{className:"class-item",onDoubleClick:k=>{k.stopPropagation(),FA(w.id,j)},children:[s.jsxs("span",{className:"item-text",children:[Q.visibility," ",Q.name," : ",Q.type]}),s.jsx("button",{onClick:k=>{k.stopPropagation(),GA(w.id,j)},className:"item-delete-btn",children:s.jsx(ve,{size:10})})]},j))}),w.attributes.length>0&&w.methods.length>0&&s.jsx("div",{className:"section-divider",style:{backgroundColor:p.border}}),w.methods.length>0&&s.jsx("div",{className:"methods-section",children:w.methods.map((Q,j)=>s.jsxs("div",{className:"class-item",onDoubleClick:k=>{k.stopPropagation(),OA(w.id,j)},children:[s.jsxs("span",{className:"item-text",children:[Q.visibility," ",Q.name," : ",Q.returnType]}),s.jsx("button",{onClick:k=>{k.stopPropagation(),ie(w.id,j)},className:"item-delete-btn",children:s.jsx(ve,{size:10})})]},j))})]}),s.jsx("div",{className:"resize-handle",style:{backgroundColor:p.header},onMouseDown:Q=>ct(Q,w,!0)})]},w.id)},xA=w=>{const p=a.find(ae=>ae.id===w.from),Q=a.find(ae=>ae.id===w.to);if(!p||!Q)return null;const j={x:p.x,y:p.y,width:p.width,height:p.height},k={x:Q.x,y:Q.y,width:Q.width,height:Q.height},{fromPoint:G,toPoint:rA}=F(j,k),TA=D(G,rA),KA=(G.x+rA.x)/2,XA=(G.y+rA.y)/2;return s.jsxs("svg",{className:"relationship-svg",style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:[s.jsxs("defs",{children:[s.jsx("marker",{id:`arrowhead-${w.id}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:s.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#475569"})}),s.jsx("marker",{id:`inheritance-${w.id}`,markerWidth:"12",markerHeight:"10",refX:"11",refY:"5",orient:"auto",children:s.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"white",stroke:"#475569",strokeWidth:"1"})}),s.jsx("marker",{id:`diamond-${w.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:s.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"#475569"})}),s.jsx("marker",{id:`diamond-empty-${w.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:s.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"white",stroke:"#475569",strokeWidth:"1"})})]}),(()=>{const Ue=(()=>{switch(w.type){case"inheritance":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#inheritance-${w.id})`};case"realization":return{stroke:"#475569",strokeWidth:2,strokeDasharray:"5,5",markerEnd:`url(#inheritance-${w.id})`};case"dependency":return{stroke:"#475569",strokeWidth:1,strokeDasharray:"8,4",markerEnd:`url(#arrowhead-${w.id})`};case"aggregation":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-empty-${w.id})`};case"composition":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-${w.id})`};case"navigable":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#arrowhead-${w.id})`};default:return{stroke:"#475569",strokeWidth:2}}})();return s.jsxs(s.Fragment,{children:[s.jsx("path",{d:TA,fill:"none",...Ue}),w.label&&s.jsxs("g",{children:[s.jsx("rect",{x:KA-w.label.length*4,y:XA-8,width:w.label.length*8,height:16,fill:"white",stroke:"#e2e8f0",rx:"2"}),s.jsx("text",{x:KA,y:XA+4,textAnchor:"middle",fontSize:"11",fill:"#475569",fontWeight:"500",children:w.label})]})]})})()]},w.id)},gA=w=>{if(w.target===v.current){const p=v.current.getBoundingClientRect(),Q=w.clientX-p.left,j=w.clientY-p.top,k=prompt("Enter class name:");if(k&&k.trim()){const G=iA(),rA=uA({name:k.trim(),attributes:[],methods:[]}),TA=[...a,{id:Date.now(),name:k.trim(),attributes:[],methods:[],x:Q-rA.width/2,y:j-40,width:rA.width,height:rA.height,colorScheme:G}];i({...r,classes:TA})}}};return s.jsxs("div",{className:"class-diagram-maker",children:[s.jsxs("div",{className:"toolbar",children:[s.jsxs("button",{onClick:u,className:"back-btn",children:[s.jsx(Mi,{size:16})," Back"]}),s.jsx("h2",{children:r.name}),s.jsx("div",{className:"spacer"}),s.jsxs("div",{className:"export-buttons",children:[s.jsxs("button",{onClick:DA,className:"export-btn",children:[s.jsx(hr,{size:16})," Export Image"]}),s.jsxs("button",{onClick:Ft,className:"export-btn",children:[s.jsx(Ts,{size:16})," Copy JSON"]}),s.jsxs("button",{onClick:()=>{const w=new Blob([ut()],{type:"application/json"}),p=URL.createObjectURL(w),Q=document.createElement("a");Q.href=p,Q.download=`${r.name||"class-diagram"}.json`,document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),URL.revokeObjectURL(p)},className:"export-btn",children:[s.jsx(pr,{size:16})," Export JSON"]})]})]}),s.jsxs("div",{className:"tabs",children:[s.jsx("button",{className:`tab ${nA==="editor"?"active":""}`,onClick:()=>hA("editor"),children:"Diagram Editor"}),s.jsx("button",{className:`tab ${nA==="json"?"active":""}`,onClick:()=>hA("json"),children:"JSON Editor"})]}),nA==="editor"?s.jsxs("div",{className:"diagram-container",children:[s.jsxs("div",{className:"diagram-sidebar",children:[s.jsxs("div",{className:"sidebar-section",children:[s.jsx("h3",{children:"Classes"}),s.jsxs("div",{className:"form-group",children:[s.jsx("input",{type:"text",value:d,onChange:w=>f(w.target.value),placeholder:"New class name",onKeyPress:w=>w.key==="Enter"&&mA()}),s.jsxs("button",{onClick:mA,className:"add-btn",children:[s.jsx(et,{size:16})," Add Class"]})]}),s.jsx("div",{className:"class-list",children:a.map(w=>s.jsxs("div",{className:"list-item",children:[s.jsx("div",{className:"item-name",children:w.name}),s.jsx("button",{onClick:()=>YA(w.id),className:"delete-btn",children:s.jsx(ve,{size:14})})]},w.id))})]}),s.jsxs("div",{className:"sidebar-section",children:[s.jsx("h3",{children:"Relationships"}),s.jsx("div",{className:"form-group",children:s.jsx("input",{type:"text",value:B,onChange:w=>h(w.target.value),placeholder:"Relationship label (optional)",onKeyPress:w=>w.key==="Enter"&&ye()})}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"From Class"}),s.jsxs("select",{value:m||"",onChange:w=>b(w.target.value),children:[s.jsx("option",{value:"",children:"Select class"}),a.map(w=>s.jsx("option",{value:w.id,children:w.name},w.id))]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"To Class"}),s.jsxs("select",{value:y||"",onChange:w=>T(w.target.value),children:[s.jsx("option",{value:"",children:"Select class"}),a.map(w=>s.jsx("option",{value:w.id,children:w.name},w.id))]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Relationship Type"}),s.jsxs("select",{value:W,onChange:w=>Z(w.target.value),children:[s.jsx("option",{value:"association",children:"Association"}),s.jsx("option",{value:"navigable",children:"Navigable Association"}),s.jsx("option",{value:"inheritance",children:"Inheritance"}),s.jsx("option",{value:"realization",children:"Realization/Implementation"}),s.jsx("option",{value:"dependency",children:"Dependency"}),s.jsx("option",{value:"aggregation",children:"Aggregation"}),s.jsx("option",{value:"composition",children:"Composition"})]})]}),s.jsxs("button",{onClick:ye,disabled:!m||!y,className:"add-btn",children:[s.jsx(js,{size:16})," Add Relationship"]})]}),s.jsxs("div",{className:"sidebar-section",children:[s.jsx("h3",{children:"Current Relationships"}),s.jsx("div",{className:"relationship-list",children:l.map(w=>{const p=a.find(j=>j.id===w.from),Q=a.find(j=>j.id===w.to);return!p||!Q?null:s.jsxs("div",{className:"list-item",children:[s.jsxs("div",{className:"item-name",children:[p.name," → ",Q.name,s.jsxs("div",{className:"item-type",children:["(",w.type,")"]})]}),w.label&&s.jsx("div",{className:"item-label",children:w.label}),s.jsx("button",{onClick:()=>Qe(w.id),className:"delete-btn",children:s.jsx(ve,{size:14})})]},w.id)})})]}),s.jsxs("div",{className:"sidebar-section",children:[s.jsx("h3",{children:"UML Notation Guide"}),s.jsxs("div",{className:"notation-guide",children:[s.jsxs("div",{className:"guide-item",children:[s.jsx("strong",{children:"Visibility:"}),s.jsx("div",{children:"+ Public"}),s.jsx("div",{children:"- Private"}),s.jsx("div",{children:"# Protected"}),s.jsx("div",{children:"~ Package"})]}),s.jsxs("div",{className:"guide-item",children:[s.jsx("strong",{children:"Attributes:"}),s.jsx("div",{children:"+name : String"}),s.jsx("div",{children:"-age : int"})]}),s.jsxs("div",{className:"guide-item",children:[s.jsx("strong",{children:"Methods:"}),s.jsx("div",{children:"+getName() : String"}),s.jsx("div",{children:"-calculate() : void"})]}),s.jsxs("div",{className:"guide-item",children:[s.jsx("strong",{children:"Quick Tips:"}),s.jsx("div",{children:"• Double-click canvas to add class"}),s.jsx("div",{children:"• Double-click class to edit"}),s.jsx("div",{children:"• Drag to move classes"}),s.jsx("div",{children:"• Drag resize handle to resize"})]})]})]})]}),s.jsxs("div",{className:"diagram-canvas",ref:v,onDoubleClick:gA,children:[l.map(xA),a.map(q)]})]}):s.jsxs("div",{className:"json-editor",children:[s.jsx("div",{className:"json-actions",children:s.jsxs("button",{onClick:()=>{const w=document.createElement("input");w.type="file",w.accept=".json",w.onchange=fA,w.click()},className:"import-btn",children:[s.jsx(ba,{size:16})," Import JSON File"]})}),s.jsx("textarea",{value:oA,onChange:w=>lA(w.target.value),className:"json-textarea"}),s.jsxs("button",{onClick:AA,className:"import-btn",children:[s.jsx(Ns,{size:16})," Apply JSON"]})]}),sA&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-content",children:[s.jsxs("div",{className:"modal-header",children:[s.jsxs("h3",{children:["Edit Class: ",sA.name]}),s.jsx("button",{onClick:ZA,className:"modal-close-btn",children:s.jsx(Eu,{size:20})})]}),s.jsx("div",{className:"modal-body",children:s.jsxs("div",{className:"edit-sections-container",children:[s.jsxs("div",{className:"edit-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h4",{children:"Attributes"}),s.jsxs("button",{onClick:()=>FA(sA.id),className:"add-item-btn",children:[s.jsx(et,{size:12})," Add Attribute"]})]}),s.jsxs("div",{className:"items-list",children:[sA.attributes.map((w,p)=>s.jsxs("div",{className:"item-row",onClick:()=>FA(sA.id,p),children:[s.jsxs("div",{className:"item-text",children:[w.visibility," ",w.name," : ",w.type]}),s.jsx("div",{className:"item-actions",children:s.jsx("button",{onClick:Q=>{Q.stopPropagation(),GA(sA.id,p)},className:"delete-btn",children:s.jsx(ve,{size:12})})})]},p)),sA.attributes.length===0&&s.jsx("div",{className:"empty-message",children:"No attributes defined"})]})]}),s.jsxs("div",{className:"edit-section",children:[s.jsxs("div",{className:"section-header",children:[s.jsx("h4",{children:"Methods"}),s.jsxs("button",{onClick:()=>OA(sA.id),className:"add-item-btn",children:[s.jsx(et,{size:12})," Add Method"]})]}),s.jsxs("div",{className:"items-list",children:[sA.methods.map((w,p)=>s.jsxs("div",{className:"item-row",onClick:()=>OA(sA.id,p),children:[s.jsxs("div",{className:"item-text",children:[w.visibility," ",w.name," : ",w.returnType]}),s.jsx("div",{className:"item-actions",children:s.jsx("button",{onClick:Q=>{Q.stopPropagation(),ie(sA.id,p)},className:"delete-btn",children:s.jsx(ve,{size:12})})})]},p)),sA.methods.length===0&&s.jsx("div",{className:"empty-message",children:"No methods defined"})]})]})]})}),s.jsx("div",{className:"modal-footer",children:s.jsx("button",{onClick:ZA,className:"modal-cancel-btn",children:"Close"})})]})}),sA&&UA&&s.jsx("div",{className:"modal-overlay",children:s.jsxs("div",{className:"modal-content",children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:UA==="attribute"?SA>=0?"Edit Attribute":"Add Attribute":SA>=0?"Edit Method":"Add Method"}),s.jsx("button",{onClick:ZA,className:"modal-close-btn",children:s.jsx(Eu,{size:20})})]}),s.jsx("div",{className:"modal-body",children:UA==="attribute"?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Visibility"}),s.jsx("select",{value:J.visibility,onChange:w=>pA({...J,visibility:w.target.value}),children:Y.map(w=>s.jsx("option",{value:w.value,children:w.label},w.value))})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Name"}),s.jsx("input",{type:"text",value:J.name,onChange:w=>pA({...J,name:w.target.value}),placeholder:"Attribute name"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Type"}),s.jsxs("div",{className:"type-select",children:[s.jsx("select",{value:J.type,onChange:w=>pA({...J,type:w.target.value}),children:E.map(w=>s.jsx("option",{value:w,children:w},w))}),s.jsx("input",{type:"text",value:E.includes(J.type)?"":J.type,onChange:w=>pA({...J,type:w.target.value}),placeholder:"Or enter custom type",style:{display:E.includes(J.type)?"none":"block",marginTop:"8px"}})]})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Visibility"}),s.jsx("select",{value:QA.visibility,onChange:w=>C({...QA,visibility:w.target.value}),children:Y.map(w=>s.jsx("option",{value:w.value,children:w.label},w.value))})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Name"}),s.jsx("input",{type:"text",value:QA.name,onChange:w=>C({...QA,name:w.target.value}),placeholder:"Method name (include parentheses)"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Return Type"}),s.jsxs("div",{className:"type-select",children:[s.jsx("select",{value:QA.returnType,onChange:w=>C({...QA,returnType:w.target.value}),children:E.map(w=>s.jsx("option",{value:w,children:w},w))}),s.jsx("input",{type:"text",value:E.includes(QA.returnType)?"":QA.returnType,onChange:w=>C({...QA,returnType:w.target.value}),placeholder:"Or enter custom type",style:{display:E.includes(QA.returnType)?"none":"block",marginTop:"8px"}})]})]})]})}),s.jsxs("div",{className:"modal-footer",children:[s.jsx("button",{onClick:ZA,className:"modal-cancel-btn",children:"Cancel"}),s.jsx("button",{onClick:UA==="attribute"?Ae:Oe,disabled:UA==="attribute"?!J.name:!QA.name,className:"modal-save-btn",children:"Save"})]})]})}),s.jsx("style",{jsx:!0,children:`
        .class-diagram-maker {
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
          background: #EC4899;
          color: white;
          border: 1px solid #EC4899;
        }
        
        .export-btn:hover {
          background: #DB2777;
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
          color: #EC4899;
          border-bottom-color: #EC4899;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .diagram-sidebar {
          width: 320px;
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
          border-color: #EC4899;
          box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 16px;
          background: #EC4899;
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
          transition: background-color 0.2s;
        }
        
        .add-btn:hover {
          background: #DB2777;
        }
        
        .add-btn:disabled {
          background: #cbd5e1;
          cursor: not-allowed;
        }
        
        .notation-guide {
          font-size: 12px;
          color: #64748b;
        }
        
        .guide-item {
          margin-bottom: 12px;
        }
        
        .guide-item strong {
          display: block;
          color: #374151;
          margin-bottom: 4px;
        }
        
        .guide-item div {
          font-family: 'Fira Code', monospace;
          margin-left: 8px;
          margin-bottom: 2px;
        }
        
        .class-list,
        .relationship-list {
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
        }
        
        .item-type {
          font-size: 12px;
          color: #64748b;
          margin-top: 2px;
        }
        
        .item-label {
          font-size: 12px;
          color: #64748b;
          margin-top: 2px;
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
          margin-left: 8px;
          transition: background-color 0.2s;
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .diagram-canvas {
          flex: 1;
          background: linear-gradient(45deg, #f1f5f9 25%, transparent 25%), 
                      linear-gradient(-45deg, #f1f5f9 25%, transparent 25%), 
                      linear-gradient(45deg, transparent 75%, #f1f5f9 75%), 
                      linear-gradient(-45deg, transparent 75%, #f1f5f9 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
          position: relative;
          overflow: auto;
          cursor: crosshair;
        }
        
        .class-box {
          position: absolute;
          background: white;
          border: 2px solid;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          font-size: 13px;
          box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          z-index: 2;
          user-select: none;
          transition: box-shadow 0.2s;
        }
        
        .class-box:hover {
          box-shadow: 0 12px 35px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.06);
        }
        
        .class-header {
          padding: 12px 16px;
          text-align: center;
          font-weight: 700;
          position: relative;
          border-radius: 6px 6px 0 0;
        }
        
        .class-name {
          font-size: 16px;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .class-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 8px 0;
        }
        
        .attributes-section, .methods-section {
          display: flex;
          flex-direction: column;
        }
        
        .section-divider {
          height: 1px;
          margin: 4px 16px;
        }
        
        .class-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4px 16px;
          margin-bottom: 2px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.15s;
          min-height: 22px;
        }
        
        .class-item:hover {
          background: rgba(236, 72, 153, 0.1);
        }
        
        .item-text {
          flex: 1;
          font-family: 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
          font-size: 12px;
          color: #374151;
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .item-delete-btn {
          background: none;
          border: none;
          color: #ef4444;
          cursor: pointer;
          opacity: 0;
          padding: 4px;
          border-radius: 3px;
          margin-left: 8px;
          transition: all 0.15s;
        }
        
        .class-item:hover .item-delete-btn {
          opacity: 0.7;
        }
        
        .item-delete-btn:hover {
          opacity: 1 !important;
          background: #fee2e2;
        }
        
        .resize-handle {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 14px;
          height: 14px;
          cursor: nwse-resize;
          border-radius: 0 0 6px 0;
          opacity: 0.6;
          transition: opacity 0.2s;
        }
        
        .class-box:hover .resize-handle {
          opacity: 1;
        }
        
        .resize-handle::before {
          content: '';
          position: absolute;
          right: 2px;
          bottom: 2px;
          width: 3px;
          height: 3px;
          background: currentColor;
          border-radius: 50%;
        }
        
        .resize-handle::after {
          content: '';
          position: absolute;
          right: 6px;
          bottom: 6px;
          width: 6px;
          height: 1px;
          background: currentColor;
          transform: rotate(45deg);
        }
        
        .relationship-svg {
          pointer-events: none;
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
          background: #EC4899;
          color: white;
          transition: background-color 0.2s;
        }
        
        .import-btn:hover {
          background: #DB2777;
        }
        
        .json-textarea {
          flex: 1;
          padding: 16px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-family: 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
          font-size: 14px;
          resize: none;
          margin-bottom: 12px;
          line-height: 1.5;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #EC4899;
          box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
        }
        
        /* Modal styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(4px);
        }
        
        .modal-content {
          background: white;
          border-radius: 12px;
          width: 600px;
          max-width: 90%;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow: hidden;
          transform: scale(1);
          animation: modalAppear 0.2s ease-out;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }
        
        @keyframes modalAppear {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .modal-header {
          padding: 20px 24px 16px;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .modal-header h3 {
          margin: 0;
          color: #1e293b;
          font-size: 18px;
          font-weight: 600;
        }
        
        .modal-close-btn {
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          transition: all 0.15s;
        }
        
        .modal-close-btn:hover {
          background: #e2e8f0;
          color: #1e293b;
        }
        
        .modal-body {
          padding: 24px;
          overflow-y: auto;
          flex: 1;
        }
        
        .edit-sections-container {
          display: flex;
          gap: 24px;
        }
        
        .edit-sections-container > .edit-section {
          flex: 1;
        }
        
        .modal-footer {
          padding: 16px 24px 24px;
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          border-top: 1px solid #e2e8f0;
        }
        
        .modal-cancel-btn {
          padding: 10px 20px;
          background: #f1f5f9;
          color: #64748b;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        
        .modal-cancel-btn:hover {
          background: #e2e8f0;
        }
        
        .modal-save-btn {
          padding: 10px 20px;
          background: #EC4899;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        
        .modal-save-btn:hover {
          background: #DB2777;
        }
        
        .modal-save-btn:disabled {
          background: #cbd5e1;
          cursor: not-allowed;
        }
        
        .type-select {
          position: relative;
        }
        
        /* Class Editor Modal Styles */
        .edit-section {
          margin-top: 0;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .section-header h4 {
          margin: 0;
          font-size: 16px;
          color: #1e293b;
        }
        
        .add-item-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: #EC4899;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .add-item-btn:hover {
          background: #DB2777;
        }
        
        .items-list {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
          max-height: 300px;
          overflow-y: auto;
        }
        
        .item-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          border-bottom: 1px solid #f1f5f9;
          cursor: pointer;
        }
        
        .item-row:hover {
          background: #f8fafc;
        }
        
        .item-row:last-child {
          border-bottom: none;
        }
        
        .item-actions {
          display: flex;
          gap: 8px;
        }
        
        .empty-message {
          padding: 16px;
          text-align: center;
          color: #9ca3af;
          font-style: italic;
        }
      `})]})},MA={PROJECT:"projects",FLOWCHART:"flowcharts",GANTT:"gantt",USE_CASE:"usecase",SEQUENCE:"sequence",ARCHITECTURE:"architecture",CLASS:"class"},Fu=()=>({projects:[],currentProject:null,flowcharts:[],currentFlowchart:null,ganttCharts:[],currentGanttChart:null,useCaseDiagrams:[],currentUseCaseDiagram:null,sequenceDiagrams:[],currentSequenceDiagram:null,architectureDiagrams:[],currentArchitectureDiagram:null,classDiagrams:[],currentClassDiagram:null}),S1=()=>{const r=localStorage.getItem("evolutionChartData");if(!r)return Fu();try{const a=JSON.parse(r);return{...Fu(),...a}}catch(a){return console.error("Failed to parse localStorage data:",a),Fu()}},mi=r=>{localStorage.setItem("evolutionChartData",JSON.stringify(r))},D1=()=>{const[,r]=V.useReducer(v=>v+1,0),[a,l]=V.useState(MA.PROJECT),[i,u]=V.useState(""),d=()=>S1(),f=(v,K,E={})=>{const Y=d(),iA={id:Date.now(),name:K,createdAt:new Date().toISOString(),...E},H={...Y};switch(H.currentProject=null,H.currentFlowchart=null,H.currentGanttChart=null,H.currentUseCaseDiagram=null,H.currentSequenceDiagram=null,H.currentArchitectureDiagram=null,H.currentClassDiagram=null,v){case MA.PROJECT:H.projects=[...Y.projects,iA],H.currentProject=iA;break;case MA.FLOWCHART:H.flowcharts=[...Y.flowcharts,iA],H.currentFlowchart=iA;break;case MA.GANTT:H.ganttCharts=[...Y.ganttCharts,iA],H.currentGanttChart=iA;break;case MA.USE_CASE:H.useCaseDiagrams=[...Y.useCaseDiagrams,iA],H.currentUseCaseDiagram=iA;break;case MA.SEQUENCE:H.sequenceDiagrams=[...Y.sequenceDiagrams,iA],H.currentSequenceDiagram=iA;break;case MA.ARCHITECTURE:H.architectureDiagrams=[...Y.architectureDiagrams,iA],H.currentArchitectureDiagram=iA;break;case MA.CLASS:H.classDiagrams=[...Y.classDiagrams,iA],H.currentClassDiagram=iA;break}mi(H),r()},B=(v,K)=>{const E=d(),Y={...E};switch(v){case MA.PROJECT:Y.projects=E.projects.filter(iA=>iA.id!==K),E.currentProject?.id===K&&(Y.currentProject=null);break;case MA.FLOWCHART:Y.flowcharts=E.flowcharts.filter(iA=>iA.id!==K),E.currentFlowchart?.id===K&&(Y.currentFlowchart=null);break;case MA.GANTT:Y.ganttCharts=E.ganttCharts.filter(iA=>iA.id!==K),E.currentGanttChart?.id===K&&(Y.currentGanttChart=null);break;case MA.USE_CASE:Y.useCaseDiagrams=E.useCaseDiagrams.filter(iA=>iA.id!==K),E.currentUseCaseDiagram?.id===K&&(Y.currentUseCaseDiagram=null);break;case MA.SEQUENCE:Y.sequenceDiagrams=E.sequenceDiagrams.filter(iA=>iA.id!==K),E.currentSequenceDiagram?.id===K&&(Y.currentSequenceDiagram=null);break;case MA.ARCHITECTURE:Y.architectureDiagrams=E.architectureDiagrams.filter(iA=>iA.id!==K),E.currentArchitectureDiagram?.id===K&&(Y.currentArchitectureDiagram=null);break;case MA.CLASS:Y.classDiagrams=E.classDiagrams.filter(iA=>iA.id!==K),E.currentClassDiagram?.id===K&&(Y.currentClassDiagram=null);break}mi(Y),r()},h=(v,K)=>{const E=d(),Y={...E};switch(v){case MA.PROJECT:Y.projects=E.projects.map(iA=>iA.id===K.id?K:iA),Y.currentProject=K;break;case MA.FLOWCHART:Y.flowcharts=E.flowcharts.map(iA=>iA.id===K.id?K:iA),Y.currentFlowchart=K;break;case MA.GANTT:Y.ganttCharts=E.ganttCharts.map(iA=>iA.id===K.id?K:iA),Y.currentGanttChart=K;break;case MA.USE_CASE:Y.useCaseDiagrams=E.useCaseDiagrams.map(iA=>iA.id===K.id?K:iA),Y.currentUseCaseDiagram=K;break;case MA.SEQUENCE:Y.sequenceDiagrams=E.sequenceDiagrams.map(iA=>iA.id===K.id?K:iA),Y.currentSequenceDiagram=K;break;case MA.ARCHITECTURE:Y.architectureDiagrams=E.architectureDiagrams.map(iA=>iA.id===K.id?K:iA),Y.currentArchitectureDiagram=K;break;case MA.CLASS:Y.classDiagrams=E.classDiagrams.map(iA=>iA.id===K.id?K:iA),Y.currentClassDiagram=K;break}mi(Y),r()},m=(v,K,E,Y)=>{f(MA.PROJECT,v,{timelineStart:K,timelineEnd:E,timeUnit:Y,nodes:[],connections:[],zoom:1,pan:{x:0,y:0}})},b=v=>{f(MA.FLOWCHART,v,{nodes:[],edges:[],zoom:1,pan:{x:0,y:0}})},y=v=>{f(MA.GANTT,v,{tasks:[],startDate:new Date().toISOString(),endDate:new Date(Date.now()+30*24*60*60*1e3).toISOString()})},T=v=>{f(MA.USE_CASE,v,{actors:[],useCases:[],relationships:[],zoom:1,pan:{x:0,y:0}})},W=v=>{f(MA.SEQUENCE,v,{participants:[],messages:[],zoom:1,pan:{x:0,y:0}})},Z=v=>{f(MA.ARCHITECTURE,v,{components:[],connections:[],zoom:1,pan:{x:0,y:0}})},nA=v=>{f(MA.CLASS,v,{classes:[],relationships:[],zoom:1,pan:{x:0,y:0}})},hA=v=>B(MA.PROJECT,v),oA=v=>B(MA.FLOWCHART,v),lA=v=>B(MA.GANTT,v),CA=v=>B(MA.USE_CASE,v),BA=v=>B(MA.SEQUENCE,v),eA=v=>B(MA.ARCHITECTURE,v),P=v=>B(MA.CLASS,v),yA=v=>h(MA.PROJECT,v),L=v=>h(MA.FLOWCHART,v),z=v=>h(MA.GANTT,v),wA=v=>h(MA.USE_CASE,v),sA=v=>h(MA.SEQUENCE,v),dA=v=>h(MA.ARCHITECTURE,v),UA=v=>h(MA.CLASS,v),jA=v=>{try{const K=JSON.parse(v);return f(MA.FLOWCHART,`Imported Flowchart ${new Date().toLocaleString()}`,{nodes:K.nodes||[],edges:K.edges||[],zoom:1,pan:{x:0,y:0}}),!0}catch(K){return console.error("Invalid JSON:",K),!1}},SA=()=>{const K={...d(),currentProject:null,currentFlowchart:null,currentGanttChart:null,currentUseCaseDiagram:null,currentSequenceDiagram:null,currentArchitectureDiagram:null,currentClassDiagram:null};mi(K),r()},M=(v,K)=>{const Y={...d(),currentProject:null,currentFlowchart:null,currentGanttChart:null,currentUseCaseDiagram:null,currentSequenceDiagram:null,currentArchitectureDiagram:null,currentClassDiagram:null};switch(v){case MA.PROJECT:Y.currentProject=K;break;case MA.FLOWCHART:Y.currentFlowchart=K;break;case MA.GANTT:Y.currentGanttChart=K;break;case MA.USE_CASE:Y.currentUseCaseDiagram=K;break;case MA.SEQUENCE:Y.currentSequenceDiagram=K;break;case MA.ARCHITECTURE:Y.currentArchitectureDiagram=K;break;case MA.CLASS:Y.currentClassDiagram=K;break}mi(Y),r()},J={appContainer:{minHeight:"100vh",width:"97.3%",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",padding:"20px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},mainCard:{maxWidth:"1400px",margin:"0 auto",background:"rgba(255, 255, 255, 0.98)",backdropFilter:"blur(20px)",borderRadius:"24px",boxShadow:"0 25px 50px rgba(0, 0, 0, 0.15)",overflow:"hidden",minHeight:"85vh"},header:{background:"linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)",color:"white",padding:"40px 30px",textAlign:"center",position:"relative"},headerTitle:{fontSize:"36px",fontWeight:"800",margin:"0 0 12px 0",textShadow:"0 4px 8px rgba(0, 0, 0, 0.3)",letterSpacing:"-0.5px"},headerSubtitle:{fontSize:"18px",opacity:"0.95",margin:"0",fontWeight:"400"},modeSelector:{display:"flex",justifyContent:"center",padding:"30px 30px 0 30px",gap:"16px",marginBottom:"25px",flexWrap:"wrap"},tabButton:{padding:"16px 32px",border:"2px solid transparent",borderRadius:"50px",background:"rgba(0, 0, 0, 0.05)",color:"#64748b",fontSize:"16px",fontWeight:"600",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",outline:"none",position:"relative",backdropFilter:"blur(10px)",marginBottom:"10px"},tabButtonActive:v=>({background:`linear-gradient(135deg, ${v} 0%, ${v} 100%)`,color:"white",borderColor:"rgba(255, 255, 255, 0.2)",boxShadow:`0 8px 25px rgba(${pA(v)}, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)`,transform:"translateY(-2px)"}),tabButtonHover:v=>({background:`rgba(${pA(v)}, 0.1)`,color:v})},pA=v=>{const K=parseInt(v.slice(1,3),16),E=parseInt(v.slice(3,5),16),Y=parseInt(v.slice(5,7),16);return`${K}, ${E}, ${Y}`},QA=()=>[{type:MA.PROJECT,label:"📊 Evolution Charts",color:"#4f46e5",component:s.jsx(_w,{projects:d().projects,onCreateProject:m,onLoadProject:v=>M(MA.PROJECT,v),onDeleteProject:hA})},{type:MA.FLOWCHART,label:"🔄 Flowcharts",color:"#7c3aed",component:s.jsx(Xw,{flowcharts:d().flowcharts,onCreateFlowchart:b,onLoadFlowchart:v=>M(MA.FLOWCHART,v),onDeleteFlowchart:oA,onImportFlowchart:jA})},{type:MA.GANTT,label:"📅 Gantt Charts",color:"#3b82f6",component:s.jsx(Jw,{ganttCharts:d().ganttCharts,onCreateGanttChart:y,onLoadGanttChart:v=>M(MA.GANTT,v),onDeleteGanttChart:lA})},{type:MA.USE_CASE,label:"👥 Use Case",color:"#10b981",component:s.jsx(w1,{useCaseDiagrams:d().useCaseDiagrams,onCreateUseCaseDiagram:T,onLoadUseCaseDiagram:v=>M(MA.USE_CASE,v),onDeleteUseCaseDiagram:CA})},{type:MA.SEQUENCE,label:"↔️ Sequence",color:"#06b6d4",component:s.jsx(v1,{sequenceDiagrams:d().sequenceDiagrams,onCreateSequenceDiagram:W,onLoadSequenceDiagram:v=>M(MA.SEQUENCE,v),onDeleteSequenceDiagram:BA})},{type:MA.ARCHITECTURE,label:"🏛️ Architecture",color:"#8b5cf6",component:s.jsx(U1,{architectureDiagrams:d().architectureDiagrams,onCreateArchitectureDiagram:Z,onLoadArchitectureDiagram:v=>M(MA.ARCHITECTURE,v),onDeleteArchitectureDiagram:eA})},{type:MA.CLASS,label:"📐 Class Diagram",color:"#ec4899",component:s.jsx(E1,{classDiagrams:d().classDiagrams,onCreateClassDiagram:nA,onLoadClassDiagram:v=>M(MA.CLASS,v),onDeleteClassDiagram:P})}],C=d();return s.jsx("div",{style:J.appContainer,children:s.jsx("div",{style:J.mainCard,children:C.currentProject?s.jsx(Vw,{project:C.currentProject,nodes:C.currentProject.nodes||[],connections:C.currentProject.connections||[],onUpdateProject:yA,onBack:SA}):C.currentFlowchart?s.jsx(Yw,{flowchart:C.currentFlowchart,nodes:C.currentFlowchart.nodes||[],edges:C.currentFlowchart.edges||[],jsonInput:i,onJsonInputChange:u,onImportJson:jA,onUpdateFlowchart:L,onBack:SA}):C.currentGanttChart?s.jsx(m1,{ganttChart:C.currentGanttChart,tasks:C.currentGanttChart.tasks||[],onUpdateGanttChart:z,onBack:SA}):C.currentUseCaseDiagram?s.jsx(y1,{useCaseDiagram:C.currentUseCaseDiagram,actors:C.currentUseCaseDiagram.actors||[],useCases:C.currentUseCaseDiagram.useCases||[],relationships:C.currentUseCaseDiagram.relationships||[],onUpdateUseCaseDiagram:wA,onBack:SA}):C.currentSequenceDiagram?s.jsx(Q1,{sequenceDiagram:C.currentSequenceDiagram,participants:C.currentSequenceDiagram.participants||[],messages:C.currentSequenceDiagram.messages||[],onUpdateSequenceDiagram:sA,onBack:SA}):C.currentArchitectureDiagram?s.jsx(F1,{architectureDiagram:C.currentArchitectureDiagram,components:C.currentArchitectureDiagram.components||[],connections:C.currentArchitectureDiagram.connections||[],onUpdateArchitectureDiagram:dA,onBack:SA}):C.currentClassDiagram?s.jsx(H1,{classDiagram:C.currentClassDiagram,classes:C.currentClassDiagram.classes||[],relationships:C.currentClassDiagram.relationships||[],onUpdateClassDiagram:UA,onBack:SA}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:J.header,children:[s.jsx("h1",{style:J.headerTitle,children:"Visual Designer Suite"}),s.jsx("p",{style:J.headerSubtitle,children:"Create stunning diagrams and charts"})]}),s.jsx("div",{style:J.modeSelector,children:QA().map(v=>s.jsx("button",{onClick:()=>l(v.type),style:{...J.tabButton,...a===v.type?J.tabButtonActive(v.color):{}},onMouseEnter:K=>{a!==v.type&&(K.target.style.background=J.tabButtonHover(v.color).background,K.target.style.color=J.tabButtonHover(v.color).color)},onMouseLeave:K=>{a!==v.type&&(K.target.style.background=J.tabButton.background,K.target.style.color=J.tabButton.color)},children:v.label},v.type))}),QA().find(v=>v.type===a)?.component]})})})};Dm.createRoot(document.getElementById("root")).render(s.jsx(V.StrictMode,{children:s.jsx(D1,{})}));
