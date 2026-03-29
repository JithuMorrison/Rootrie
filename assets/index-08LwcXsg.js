(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function s(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(d){if(d.ep)return;d.ep=!0;const f=s(d);fetch(d.href,f)}})();function Eb(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var gd={exports:{}},Ti={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function Fb(){if(qg)return Ti;qg=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(o,d,f){var h=null;if(f!==void 0&&(h=""+f),d.key!==void 0&&(h=""+d.key),"key"in d){f={};for(var m in d)m!=="key"&&(f[m]=d[m])}else f=d;return d=f.ref,{$$typeof:i,type:o,key:h,ref:d!==void 0?d:null,props:f}}return Ti.Fragment=r,Ti.jsx=s,Ti.jsxs=s,Ti}var Pg;function jb(){return Pg||(Pg=1,gd.exports=Fb()),gd.exports}var n=jb(),pd={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function Sb(){if(Ap)return ge;Ap=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),B=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),F=Symbol.iterator;function T(U){return U===null||typeof U!="object"?null:(U=F&&U[F]||U["@@iterator"],typeof U=="function"?U:null)}var oA={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eA=Object.assign,uA={};function MA(U,J,$){this.props=U,this.context=J,this.refs=uA,this.updater=$||oA}MA.prototype.isReactComponent={},MA.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},MA.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function NA(){}NA.prototype=MA.prototype;function gA(U,J,$){this.props=U,this.context=J,this.refs=uA,this.updater=$||oA}var XA=gA.prototype=new NA;XA.constructor=gA,eA(XA,MA.prototype),XA.isPureReactComponent=!0;var xA=Array.isArray,mA={H:null,A:null,T:null,S:null,V:null},Y=Object.prototype.hasOwnProperty;function IA(U,J,$,lA,QA,RA){return $=RA.ref,{$$typeof:i,type:U,key:J,ref:$!==void 0?$:null,props:RA}}function V(U,J){return IA(U.type,J,void 0,void 0,void 0,U.props)}function sA(U){return typeof U=="object"&&U!==null&&U.$$typeof===i}function KA(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function($){return J[$]})}var GA=/\/+/g;function CA(U,J){return typeof U=="object"&&U!==null&&U.key!=null?KA(""+U.key):J.toString(36)}function LA(){}function $A(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(LA,LA):(U.status="pending",U.then(function(J){U.status==="pending"&&(U.status="fulfilled",U.value=J)},function(J){U.status==="pending"&&(U.status="rejected",U.reason=J)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function JA(U,J,$,lA,QA){var RA=typeof U;(RA==="undefined"||RA==="boolean")&&(U=null);var K=!1;if(U===null)K=!0;else switch(RA){case"bigint":case"string":case"number":K=!0;break;case"object":switch(U.$$typeof){case i:case r:K=!0;break;case C:return K=U._init,JA(K(U._payload),J,$,lA,QA)}}if(K)return QA=QA(U),K=lA===""?"."+CA(U,0):lA,xA(QA)?($="",K!=null&&($=K.replace(GA,"$&/")+"/"),JA(QA,J,$,"",function(bA){return bA})):QA!=null&&(sA(QA)&&(QA=V(QA,$+(QA.key==null||U&&U.key===QA.key?"":(""+QA.key).replace(GA,"$&/")+"/")+K)),J.push(QA)),1;K=0;var OA=lA===""?".":lA+":";if(xA(U))for(var HA=0;HA<U.length;HA++)lA=U[HA],RA=OA+CA(lA,HA),K+=JA(lA,J,$,RA,QA);else if(HA=T(U),typeof HA=="function")for(U=HA.call(U),HA=0;!(lA=U.next()).done;)lA=lA.value,RA=OA+CA(lA,HA++),K+=JA(lA,J,$,RA,QA);else if(RA==="object"){if(typeof U.then=="function")return JA($A(U),J,$,lA,QA);throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return K}function G(U,J,$){if(U==null)return U;var lA=[],QA=0;return JA(U,lA,"","",function(RA){return J.call($,RA,QA++)}),lA}function pA(U){if(U._status===-1){var J=U._result;J=J(),J.then(function($){(U._status===0||U._status===-1)&&(U._status=1,U._result=$)},function($){(U._status===0||U._status===-1)&&(U._status=2,U._result=$)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var FA=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function WA(){}return ge.Children={map:G,forEach:function(U,J,$){G(U,function(){J.apply(this,arguments)},$)},count:function(U){var J=0;return G(U,function(){J++}),J},toArray:function(U){return G(U,function(J){return J})||[]},only:function(U){if(!sA(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ge.Component=MA,ge.Fragment=s,ge.Profiler=d,ge.PureComponent=gA,ge.StrictMode=o,ge.Suspense=x,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mA,ge.__COMPILER_RUNTIME={__proto__:null,c:function(U){return mA.H.useMemoCache(U)}},ge.cache=function(U){return function(){return U.apply(null,arguments)}},ge.cloneElement=function(U,J,$){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var lA=eA({},U.props),QA=U.key,RA=void 0;if(J!=null)for(K in J.ref!==void 0&&(RA=void 0),J.key!==void 0&&(QA=""+J.key),J)!Y.call(J,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&J.ref===void 0||(lA[K]=J[K]);var K=arguments.length-2;if(K===1)lA.children=$;else if(1<K){for(var OA=Array(K),HA=0;HA<K;HA++)OA[HA]=arguments[HA+2];lA.children=OA}return IA(U.type,QA,void 0,void 0,RA,lA)},ge.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:f,_context:U},U},ge.createElement=function(U,J,$){var lA,QA={},RA=null;if(J!=null)for(lA in J.key!==void 0&&(RA=""+J.key),J)Y.call(J,lA)&&lA!=="key"&&lA!=="__self"&&lA!=="__source"&&(QA[lA]=J[lA]);var K=arguments.length-2;if(K===1)QA.children=$;else if(1<K){for(var OA=Array(K),HA=0;HA<K;HA++)OA[HA]=arguments[HA+2];QA.children=OA}if(U&&U.defaultProps)for(lA in K=U.defaultProps,K)QA[lA]===void 0&&(QA[lA]=K[lA]);return IA(U,RA,void 0,void 0,null,QA)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(U){return{$$typeof:m,render:U}},ge.isValidElement=sA,ge.lazy=function(U){return{$$typeof:C,_payload:{_status:-1,_result:U},_init:pA}},ge.memo=function(U,J){return{$$typeof:B,type:U,compare:J===void 0?null:J}},ge.startTransition=function(U){var J=mA.T,$={};mA.T=$;try{var lA=U(),QA=mA.S;QA!==null&&QA($,lA),typeof lA=="object"&&lA!==null&&typeof lA.then=="function"&&lA.then(WA,FA)}catch(RA){FA(RA)}finally{mA.T=J}},ge.unstable_useCacheRefresh=function(){return mA.H.useCacheRefresh()},ge.use=function(U){return mA.H.use(U)},ge.useActionState=function(U,J,$){return mA.H.useActionState(U,J,$)},ge.useCallback=function(U,J){return mA.H.useCallback(U,J)},ge.useContext=function(U){return mA.H.useContext(U)},ge.useDebugValue=function(){},ge.useDeferredValue=function(U,J){return mA.H.useDeferredValue(U,J)},ge.useEffect=function(U,J,$){var lA=mA.H;if(typeof $=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return lA.useEffect(U,J)},ge.useId=function(){return mA.H.useId()},ge.useImperativeHandle=function(U,J,$){return mA.H.useImperativeHandle(U,J,$)},ge.useInsertionEffect=function(U,J){return mA.H.useInsertionEffect(U,J)},ge.useLayoutEffect=function(U,J){return mA.H.useLayoutEffect(U,J)},ge.useMemo=function(U,J){return mA.H.useMemo(U,J)},ge.useOptimistic=function(U,J){return mA.H.useOptimistic(U,J)},ge.useReducer=function(U,J,$){return mA.H.useReducer(U,J,$)},ge.useRef=function(U){return mA.H.useRef(U)},ge.useState=function(U){return mA.H.useState(U)},ge.useSyncExternalStore=function(U,J,$){return mA.H.useSyncExternalStore(U,J,$)},ge.useTransition=function(){return mA.H.useTransition()},ge.version="19.1.0",ge}var ep;function uu(){return ep||(ep=1,pd.exports=Sb()),pd.exports}var j=uu();const kb=Eb(j);var xd={exports:{}},Ii={},md={exports:{}},bd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function Hb(){return tp||(tp=1,function(i){function r(G,pA){var FA=G.length;G.push(pA);A:for(;0<FA;){var WA=FA-1>>>1,U=G[WA];if(0<d(U,pA))G[WA]=pA,G[FA]=U,FA=WA;else break A}}function s(G){return G.length===0?null:G[0]}function o(G){if(G.length===0)return null;var pA=G[0],FA=G.pop();if(FA!==pA){G[0]=FA;A:for(var WA=0,U=G.length,J=U>>>1;WA<J;){var $=2*(WA+1)-1,lA=G[$],QA=$+1,RA=G[QA];if(0>d(lA,FA))QA<U&&0>d(RA,lA)?(G[WA]=RA,G[QA]=FA,WA=QA):(G[WA]=lA,G[$]=FA,WA=$);else if(QA<U&&0>d(RA,FA))G[WA]=RA,G[QA]=FA,WA=QA;else break A}}return pA}function d(G,pA){var FA=G.sortIndex-pA.sortIndex;return FA!==0?FA:G.id-pA.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var x=[],B=[],C=1,F=null,T=3,oA=!1,eA=!1,uA=!1,MA=!1,NA=typeof setTimeout=="function"?setTimeout:null,gA=typeof clearTimeout=="function"?clearTimeout:null,XA=typeof setImmediate<"u"?setImmediate:null;function xA(G){for(var pA=s(B);pA!==null;){if(pA.callback===null)o(B);else if(pA.startTime<=G)o(B),pA.sortIndex=pA.expirationTime,r(x,pA);else break;pA=s(B)}}function mA(G){if(uA=!1,xA(G),!eA)if(s(x)!==null)eA=!0,Y||(Y=!0,CA());else{var pA=s(B);pA!==null&&JA(mA,pA.startTime-G)}}var Y=!1,IA=-1,V=5,sA=-1;function KA(){return MA?!0:!(i.unstable_now()-sA<V)}function GA(){if(MA=!1,Y){var G=i.unstable_now();sA=G;var pA=!0;try{A:{eA=!1,uA&&(uA=!1,gA(IA),IA=-1),oA=!0;var FA=T;try{e:{for(xA(G),F=s(x);F!==null&&!(F.expirationTime>G&&KA());){var WA=F.callback;if(typeof WA=="function"){F.callback=null,T=F.priorityLevel;var U=WA(F.expirationTime<=G);if(G=i.unstable_now(),typeof U=="function"){F.callback=U,xA(G),pA=!0;break e}F===s(x)&&o(x),xA(G)}else o(x);F=s(x)}if(F!==null)pA=!0;else{var J=s(B);J!==null&&JA(mA,J.startTime-G),pA=!1}}break A}finally{F=null,T=FA,oA=!1}pA=void 0}}finally{pA?CA():Y=!1}}}var CA;if(typeof XA=="function")CA=function(){XA(GA)};else if(typeof MessageChannel<"u"){var LA=new MessageChannel,$A=LA.port2;LA.port1.onmessage=GA,CA=function(){$A.postMessage(null)}}else CA=function(){NA(GA,0)};function JA(G,pA){IA=NA(function(){G(i.unstable_now())},pA)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(G){G.callback=null},i.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<G?Math.floor(1e3/G):5},i.unstable_getCurrentPriorityLevel=function(){return T},i.unstable_next=function(G){switch(T){case 1:case 2:case 3:var pA=3;break;default:pA=T}var FA=T;T=pA;try{return G()}finally{T=FA}},i.unstable_requestPaint=function(){MA=!0},i.unstable_runWithPriority=function(G,pA){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var FA=T;T=G;try{return pA()}finally{T=FA}},i.unstable_scheduleCallback=function(G,pA,FA){var WA=i.unstable_now();switch(typeof FA=="object"&&FA!==null?(FA=FA.delay,FA=typeof FA=="number"&&0<FA?WA+FA:WA):FA=WA,G){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=FA+U,G={id:C++,callback:pA,priorityLevel:G,startTime:FA,expirationTime:U,sortIndex:-1},FA>WA?(G.sortIndex=FA,r(B,G),s(x)===null&&G===s(B)&&(uA?(gA(IA),IA=-1):uA=!0,JA(mA,FA-WA))):(G.sortIndex=U,r(x,G),eA||oA||(eA=!0,Y||(Y=!0,CA()))),G},i.unstable_shouldYield=KA,i.unstable_wrapCallback=function(G){var pA=T;return function(){var FA=T;T=pA;try{return G.apply(this,arguments)}finally{T=FA}}}}(bd)),bd}var np;function Nb(){return np||(np=1,md.exports=Hb()),md.exports}var Bd={exports:{}},kt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function Mb(){if(ap)return kt;ap=1;var i=uu();function r(x){var B="https://react.dev/errors/"+x;if(1<arguments.length){B+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)B+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+x+"; visit "+B+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(x,B,C){var F=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:F==null?null:""+F,children:x,containerInfo:B,implementation:C}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(x,B){if(x==="font")return"";if(typeof B=="string")return B==="use-credentials"?B:""}return kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,kt.createPortal=function(x,B){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!B||B.nodeType!==1&&B.nodeType!==9&&B.nodeType!==11)throw Error(r(299));return f(x,B,null,C)},kt.flushSync=function(x){var B=h.T,C=o.p;try{if(h.T=null,o.p=2,x)return x()}finally{h.T=B,o.p=C,o.d.f()}},kt.preconnect=function(x,B){typeof x=="string"&&(B?(B=B.crossOrigin,B=typeof B=="string"?B==="use-credentials"?B:"":void 0):B=null,o.d.C(x,B))},kt.prefetchDNS=function(x){typeof x=="string"&&o.d.D(x)},kt.preinit=function(x,B){if(typeof x=="string"&&B&&typeof B.as=="string"){var C=B.as,F=m(C,B.crossOrigin),T=typeof B.integrity=="string"?B.integrity:void 0,oA=typeof B.fetchPriority=="string"?B.fetchPriority:void 0;C==="style"?o.d.S(x,typeof B.precedence=="string"?B.precedence:void 0,{crossOrigin:F,integrity:T,fetchPriority:oA}):C==="script"&&o.d.X(x,{crossOrigin:F,integrity:T,fetchPriority:oA,nonce:typeof B.nonce=="string"?B.nonce:void 0})}},kt.preinitModule=function(x,B){if(typeof x=="string")if(typeof B=="object"&&B!==null){if(B.as==null||B.as==="script"){var C=m(B.as,B.crossOrigin);o.d.M(x,{crossOrigin:C,integrity:typeof B.integrity=="string"?B.integrity:void 0,nonce:typeof B.nonce=="string"?B.nonce:void 0})}}else B==null&&o.d.M(x)},kt.preload=function(x,B){if(typeof x=="string"&&typeof B=="object"&&B!==null&&typeof B.as=="string"){var C=B.as,F=m(C,B.crossOrigin);o.d.L(x,C,{crossOrigin:F,integrity:typeof B.integrity=="string"?B.integrity:void 0,nonce:typeof B.nonce=="string"?B.nonce:void 0,type:typeof B.type=="string"?B.type:void 0,fetchPriority:typeof B.fetchPriority=="string"?B.fetchPriority:void 0,referrerPolicy:typeof B.referrerPolicy=="string"?B.referrerPolicy:void 0,imageSrcSet:typeof B.imageSrcSet=="string"?B.imageSrcSet:void 0,imageSizes:typeof B.imageSizes=="string"?B.imageSizes:void 0,media:typeof B.media=="string"?B.media:void 0})}},kt.preloadModule=function(x,B){if(typeof x=="string")if(B){var C=m(B.as,B.crossOrigin);o.d.m(x,{as:typeof B.as=="string"&&B.as!=="script"?B.as:void 0,crossOrigin:C,integrity:typeof B.integrity=="string"?B.integrity:void 0})}else o.d.m(x)},kt.requestFormReset=function(x){o.d.r(x)},kt.unstable_batchedUpdates=function(x,B){return x(B)},kt.useFormState=function(x,B,C){return h.H.useFormState(x,B,C)},kt.useFormStatus=function(){return h.H.useHostTransitionStatus()},kt.version="19.1.0",kt}var rp;function Db(){if(rp)return Bd.exports;rp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),Bd.exports=Mb(),Bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function Tb(){if(ip)return Ii;ip=1;var i=Nb(),r=uu(),s=Db();function o(A){var e="https://react.dev/errors/"+A;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+A+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)}function f(A){var e=A,t=A;if(A.alternate)for(;e.return;)e=e.return;else{A=e;do e=A,(e.flags&4098)!==0&&(t=e.return),A=e.return;while(A)}return e.tag===3?t:null}function h(A){if(A.tag===13){var e=A.memoizedState;if(e===null&&(A=A.alternate,A!==null&&(e=A.memoizedState)),e!==null)return e.dehydrated}return null}function m(A){if(f(A)!==A)throw Error(o(188))}function x(A){var e=A.alternate;if(!e){if(e=f(A),e===null)throw Error(o(188));return e!==A?null:A}for(var t=A,a=e;;){var l=t.return;if(l===null)break;var c=l.alternate;if(c===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===t)return m(l),A;if(c===a)return m(l),e;c=c.sibling}throw Error(o(188))}if(t.return!==a.return)t=l,a=c;else{for(var p=!1,y=l.child;y;){if(y===t){p=!0,t=l,a=c;break}if(y===a){p=!0,a=l,t=c;break}y=y.sibling}if(!p){for(y=c.child;y;){if(y===t){p=!0,t=c,a=l;break}if(y===a){p=!0,a=c,t=l;break}y=y.sibling}if(!p)throw Error(o(189))}}if(t.alternate!==a)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?A:e}function B(A){var e=A.tag;if(e===5||e===26||e===27||e===6)return A;for(A=A.child;A!==null;){if(e=B(A),e!==null)return e;A=A.sibling}return null}var C=Object.assign,F=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),oA=Symbol.for("react.portal"),eA=Symbol.for("react.fragment"),uA=Symbol.for("react.strict_mode"),MA=Symbol.for("react.profiler"),NA=Symbol.for("react.provider"),gA=Symbol.for("react.consumer"),XA=Symbol.for("react.context"),xA=Symbol.for("react.forward_ref"),mA=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),IA=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),sA=Symbol.for("react.activity"),KA=Symbol.for("react.memo_cache_sentinel"),GA=Symbol.iterator;function CA(A){return A===null||typeof A!="object"?null:(A=GA&&A[GA]||A["@@iterator"],typeof A=="function"?A:null)}var LA=Symbol.for("react.client.reference");function $A(A){if(A==null)return null;if(typeof A=="function")return A.$$typeof===LA?null:A.displayName||A.name||null;if(typeof A=="string")return A;switch(A){case eA:return"Fragment";case MA:return"Profiler";case uA:return"StrictMode";case mA:return"Suspense";case Y:return"SuspenseList";case sA:return"Activity"}if(typeof A=="object")switch(A.$$typeof){case oA:return"Portal";case XA:return(A.displayName||"Context")+".Provider";case gA:return(A._context.displayName||"Context")+".Consumer";case xA:var e=A.render;return A=A.displayName,A||(A=e.displayName||e.name||"",A=A!==""?"ForwardRef("+A+")":"ForwardRef"),A;case IA:return e=A.displayName||null,e!==null?e:$A(A.type)||"Memo";case V:e=A._payload,A=A._init;try{return $A(A(e))}catch{}}return null}var JA=Array.isArray,G=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pA=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,FA={pending:!1,data:null,method:null,action:null},WA=[],U=-1;function J(A){return{current:A}}function $(A){0>U||(A.current=WA[U],WA[U]=null,U--)}function lA(A,e){U++,WA[U]=A.current,A.current=e}var QA=J(null),RA=J(null),K=J(null),OA=J(null);function HA(A,e){switch(lA(K,e),lA(RA,A),lA(QA,null),e.nodeType){case 9:case 11:A=(A=e.documentElement)&&(A=A.namespaceURI)?Ug(A):0;break;default:if(A=e.tagName,e=e.namespaceURI)e=Ug(e),A=Eg(e,A);else switch(A){case"svg":A=1;break;case"math":A=2;break;default:A=0}}$(QA),lA(QA,A)}function bA(){$(QA),$(RA),$(K)}function L(A){A.memoizedState!==null&&lA(OA,A);var e=QA.current,t=Eg(e,A.type);e!==t&&(lA(RA,A),lA(QA,t))}function X(A){RA.current===A&&($(QA),$(RA)),OA.current===A&&($(OA),ki._currentValue=FA)}var zA=Object.prototype.hasOwnProperty,wA=i.unstable_scheduleCallback,EA=i.unstable_cancelCallback,nA=i.unstable_shouldYield,ye=i.unstable_requestPaint,pe=i.unstable_now,te=i.unstable_getCurrentPriorityLevel,fe=i.unstable_ImmediatePriority,ne=i.unstable_UserBlockingPriority,me=i.unstable_NormalPriority,De=i.unstable_LowPriority,Je=i.unstable_IdlePriority,Te=i.log,ie=i.unstable_setDisableYieldValue,Fe=null,be=null;function Se(A){if(typeof Te=="function"&&ie(A),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(Fe,A)}catch{}}var O=Math.clz32?Math.clz32:q,yA=Math.log,H=Math.LN2;function q(A){return A>>>=0,A===0?32:31-(yA(A)/H|0)|0}var jA=256,rA=4194304;function hA(A){var e=A&42;if(e!==0)return e;switch(A&-A){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return A&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return A}}function oe(A,e,t){var a=A.pendingLanes;if(a===0)return 0;var l=0,c=A.suspendedLanes,p=A.pingedLanes;A=A.warmLanes;var y=a&134217727;return y!==0?(a=y&~c,a!==0?l=hA(a):(p&=y,p!==0?l=hA(p):t||(t=y&~A,t!==0&&(l=hA(t))))):(y=a&~c,y!==0?l=hA(y):p!==0?l=hA(p):t||(t=a&~A,t!==0&&(l=hA(t)))),l===0?0:e!==0&&e!==l&&(e&c)===0&&(c=l&-l,t=e&-e,c>=t||c===32&&(t&4194048)!==0)?e:l}function xe(A,e){return(A.pendingLanes&~(A.suspendedLanes&~A.pingedLanes)&e)===0}function ce(A,e){switch(A){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function he(){var A=jA;return jA<<=1,(jA&4194048)===0&&(jA=256),A}function ke(){var A=rA;return rA<<=1,(rA&62914560)===0&&(rA=4194304),A}function Ue(A){for(var e=[],t=0;31>t;t++)e.push(A);return e}function _e(A,e){A.pendingLanes|=e,e!==268435456&&(A.suspendedLanes=0,A.pingedLanes=0,A.warmLanes=0)}function We(A,e,t,a,l,c){var p=A.pendingLanes;A.pendingLanes=t,A.suspendedLanes=0,A.pingedLanes=0,A.warmLanes=0,A.expiredLanes&=t,A.entangledLanes&=t,A.errorRecoveryDisabledLanes&=t,A.shellSuspendCounter=0;var y=A.entanglements,M=A.expirationTimes,tA=A.hiddenUpdates;for(t=p&~t;0<t;){var BA=31-O(t),kA=1<<BA;y[BA]=0,M[BA]=-1;var aA=tA[BA];if(aA!==null)for(tA[BA]=null,BA=0;BA<aA.length;BA++){var iA=aA[BA];iA!==null&&(iA.lane&=-536870913)}t&=~kA}a!==0&&Ze(A,a,0),c!==0&&l===0&&A.tag!==0&&(A.suspendedLanes|=c&~(p&~e))}function Ze(A,e,t){A.pendingLanes|=e,A.suspendedLanes&=~e;var a=31-O(e);A.entangledLanes|=e,A.entanglements[a]=A.entanglements[a]|1073741824|t&4194090}function Ie(A,e){var t=A.entangledLanes|=e;for(A=A.entanglements;t;){var a=31-O(t),l=1<<a;l&e|A[a]&e&&(A[a]|=e),t&=~l}}function Le(A){switch(A){case 2:A=1;break;case 8:A=4;break;case 32:A=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:A=128;break;case 268435456:A=134217728;break;default:A=0}return A}function N(A){return A&=-A,2<A?8<A?(A&134217727)!==0?32:268435456:8:2}function SA(){var A=pA.p;return A!==0?A:(A=window.event,A===void 0?32:Xg(A.type))}function TA(A,e){var t=pA.p;try{return pA.p=A,e()}finally{pA.p=t}}var g=Math.random().toString(36).slice(2),E="__reactFiber$"+g,D="__reactProps$"+g,b="__reactContainer$"+g,v="__reactEvents$"+g,k="__reactListeners$"+g,S="__reactHandles$"+g,I="__reactResources$"+g,_="__reactMarker$"+g;function z(A){delete A[E],delete A[D],delete A[v],delete A[k],delete A[S]}function fA(A){var e=A[E];if(e)return e;for(var t=A.parentNode;t;){if(e=t[b]||t[E]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(A=kg(A);A!==null;){if(t=A[E])return t;A=kg(A)}return e}A=t,t=A.parentNode}return null}function cA(A){if(A=A[E]||A[b]){var e=A.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return A}return null}function ZA(A){var e=A.tag;if(e===5||e===26||e===27||e===6)return A.stateNode;throw Error(o(33))}function dA(A){var e=A[I];return e||(e=A[I]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function u(A){A[_]=!0}var w=new Set,Q={};function W(A,e){P(A,e),P(A+"Capture",e)}function P(A,e){for(Q[A]=e,A=0;A<e.length;A++)w.add(e[A])}var vA=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_A={},DA={};function ee(A){return zA.call(DA,A)?!0:zA.call(_A,A)?!1:vA.test(A)?DA[A]=!0:(_A[A]=!0,!1)}function VA(A,e,t){if(ee(e))if(t===null)A.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":A.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){A.removeAttribute(e);return}}A.setAttribute(e,""+t)}}function ue(A,e,t){if(t===null)A.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":A.removeAttribute(e);return}A.setAttribute(e,""+t)}}function ve(A,e,t,a){if(a===null)A.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":A.removeAttribute(t);return}A.setAttributeNS(e,t,""+a)}}var At,ut;function Ne(A){if(At===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);At=e&&e[1]||"",ut=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+At+A+ut}var nt=!1;function pt(A,e){if(!A||nt)return"";nt=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var kA=function(){throw Error()};if(Object.defineProperty(kA.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(kA,[])}catch(iA){var aA=iA}Reflect.construct(A,[],kA)}else{try{kA.call()}catch(iA){aA=iA}A.call(kA.prototype)}}else{try{throw Error()}catch(iA){aA=iA}(kA=A())&&typeof kA.catch=="function"&&kA.catch(function(){})}}catch(iA){if(iA&&aA&&typeof iA.stack=="string")return[iA.stack,aA.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),p=c[0],y=c[1];if(p&&y){var M=p.split(`
`),tA=y.split(`
`);for(l=a=0;a<M.length&&!M[a].includes("DetermineComponentFrameRoot");)a++;for(;l<tA.length&&!tA[l].includes("DetermineComponentFrameRoot");)l++;if(a===M.length||l===tA.length)for(a=M.length-1,l=tA.length-1;1<=a&&0<=l&&M[a]!==tA[l];)l--;for(;1<=a&&0<=l;a--,l--)if(M[a]!==tA[l]){if(a!==1||l!==1)do if(a--,l--,0>l||M[a]!==tA[l]){var BA=`
`+M[a].replace(" at new "," at ");return A.displayName&&BA.includes("<anonymous>")&&(BA=BA.replace("<anonymous>",A.displayName)),BA}while(1<=a&&0<=l);break}}}finally{nt=!1,Error.prepareStackTrace=t}return(t=A?A.displayName||A.name:"")?Ne(t):""}function Ca(A){switch(A.tag){case 26:case 27:case 5:return Ne(A.type);case 16:return Ne("Lazy");case 13:return Ne("Suspense");case 19:return Ne("SuspenseList");case 0:case 15:return pt(A.type,!1);case 11:return pt(A.type.render,!1);case 1:return pt(A.type,!0);case 31:return Ne("Activity");default:return""}}function sn(A){try{var e="";do e+=Ca(A),A=A.return;while(A);return e}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function Bt(A){switch(typeof A){case"bigint":case"boolean":case"number":case"string":case"undefined":return A;case"object":return A;default:return""}}function Va(A){var e=A.type;return(A=A.nodeName)&&A.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function so(A){var e=Va(A)?"checked":"value",t=Object.getOwnPropertyDescriptor(A.constructor.prototype,e),a=""+A[e];if(!A.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,c=t.set;return Object.defineProperty(A,e,{configurable:!0,get:function(){return l.call(this)},set:function(p){a=""+p,c.call(this,p)}}),Object.defineProperty(A,e,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){A._valueTracker=null,delete A[e]}}}}function Ja(A){A._valueTracker||(A._valueTracker=so(A))}function lo(A){if(!A)return!1;var e=A._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return A&&(a=Va(A)?A.checked?"true":"false":A.value),A=a,A!==t?(e.setValue(A),!0):!1}function co(A){if(A=A||(typeof document<"u"?document:void 0),typeof A>"u")return null;try{return A.activeElement||A.body}catch{return A.body}}var v0=/[\n"\\]/g;function Zt(A){return A.replace(v0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ul(A,e,t,a,l,c,p,y){A.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?A.type=p:A.removeAttribute("type"),e!=null?p==="number"?(e===0&&A.value===""||A.value!=e)&&(A.value=""+Bt(e)):A.value!==""+Bt(e)&&(A.value=""+Bt(e)):p!=="submit"&&p!=="reset"||A.removeAttribute("value"),e!=null?fl(A,p,Bt(e)):t!=null?fl(A,p,Bt(t)):a!=null&&A.removeAttribute("value"),l==null&&c!=null&&(A.defaultChecked=!!c),l!=null&&(A.checked=l&&typeof l!="function"&&typeof l!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?A.name=""+Bt(y):A.removeAttribute("name")}function yu(A,e,t,a,l,c,p,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(A.type=c),e!=null||t!=null){if(!(c!=="submit"&&c!=="reset"||e!=null))return;t=t!=null?""+Bt(t):"",e=e!=null?""+Bt(e):t,y||e===A.value||(A.value=e),A.defaultValue=e}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,A.checked=y?A.checked:!!a,A.defaultChecked=!!a,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(A.name=p)}function fl(A,e,t){e==="number"&&co(A.ownerDocument)===A||A.defaultValue===""+t||(A.defaultValue=""+t)}function Za(A,e,t,a){if(A=A.options,e){e={};for(var l=0;l<t.length;l++)e["$"+t[l]]=!0;for(t=0;t<A.length;t++)l=e.hasOwnProperty("$"+A[t].value),A[t].selected!==l&&(A[t].selected=l),l&&a&&(A[t].defaultSelected=!0)}else{for(t=""+Bt(t),e=null,l=0;l<A.length;l++){if(A[l].value===t){A[l].selected=!0,a&&(A[l].defaultSelected=!0);return}e!==null||A[l].disabled||(e=A[l])}e!==null&&(e.selected=!0)}}function vu(A,e,t){if(e!=null&&(e=""+Bt(e),e!==A.value&&(A.value=e),t==null)){A.defaultValue!==e&&(A.defaultValue=e);return}A.defaultValue=t!=null?""+Bt(t):""}function Cu(A,e,t,a){if(e==null){if(a!=null){if(t!=null)throw Error(o(92));if(JA(a)){if(1<a.length)throw Error(o(93));a=a[0]}t=a}t==null&&(t=""),e=t}t=Bt(e),A.defaultValue=t,a=A.textContent,a===t&&a!==""&&a!==null&&(A.value=a)}function $a(A,e){if(e){var t=A.firstChild;if(t&&t===A.lastChild&&t.nodeType===3){t.nodeValue=e;return}}A.textContent=e}var C0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qu(A,e,t){var a=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?A.setProperty(e,""):e==="float"?A.cssFloat="":A[e]="":a?A.setProperty(e,t):typeof t!="number"||t===0||C0.has(e)?e==="float"?A.cssFloat=t:A[e]=(""+t).trim():A[e]=t+"px"}function Uu(A,e,t){if(e!=null&&typeof e!="object")throw Error(o(62));if(A=A.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?A.setProperty(a,""):a==="float"?A.cssFloat="":A[a]="");for(var l in e)a=e[l],e.hasOwnProperty(l)&&t[l]!==a&&Qu(A,l,a)}else for(var c in e)e.hasOwnProperty(c)&&Qu(A,c,e[c])}function hl(A){if(A.indexOf("-")===-1)return!1;switch(A){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Q0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),U0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function uo(A){return U0.test(""+A)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":A}var gl=null;function pl(A){return A=A.target||A.srcElement||window,A.correspondingUseElement&&(A=A.correspondingUseElement),A.nodeType===3?A.parentNode:A}var Wa=null,qa=null;function Eu(A){var e=cA(A);if(e&&(A=e.stateNode)){var t=A[D]||null;A:switch(A=e.stateNode,e.type){case"input":if(ul(A,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=A;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Zt(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==A&&a.form===A.form){var l=a[D]||null;if(!l)throw Error(o(90));ul(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<t.length;e++)a=t[e],a.form===A.form&&lo(a)}break A;case"textarea":vu(A,t.value,t.defaultValue);break A;case"select":e=t.value,e!=null&&Za(A,!!t.multiple,e,!1)}}}var xl=!1;function Fu(A,e,t){if(xl)return A(e,t);xl=!0;try{var a=A(e);return a}finally{if(xl=!1,(Wa!==null||qa!==null)&&(Wo(),Wa&&(e=Wa,A=qa,qa=Wa=null,Eu(e),A)))for(e=0;e<A.length;e++)Eu(A[e])}}function Gr(A,e){var t=A.stateNode;if(t===null)return null;var a=t[D]||null;if(a===null)return null;t=a[e];A:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(A=A.type,a=!(A==="button"||A==="input"||A==="select"||A==="textarea")),A=!a;break A;default:A=!1}if(A)return null;if(t&&typeof t!="function")throw Error(o(231,e,typeof t));return t}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ml=!1;if(Qn)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){ml=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{ml=!1}var Yn=null,bl=null,fo=null;function ju(){if(fo)return fo;var A,e=bl,t=e.length,a,l="value"in Yn?Yn.value:Yn.textContent,c=l.length;for(A=0;A<t&&e[A]===l[A];A++);var p=t-A;for(a=1;a<=p&&e[t-a]===l[c-a];a++);return fo=l.slice(A,1<a?1-a:void 0)}function ho(A){var e=A.keyCode;return"charCode"in A?(A=A.charCode,A===0&&e===13&&(A=13)):A=e,A===10&&(A=13),32<=A||A===13?A:0}function go(){return!0}function Su(){return!1}function Tt(A){function e(t,a,l,c,p){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var y in A)A.hasOwnProperty(y)&&(t=A[y],this[y]=t?t(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?go:Su,this.isPropagationStopped=Su,this}return C(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),e}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(A){return A.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},po=Tt(Qa),Xr=C({},Qa,{view:0,detail:0}),E0=Tt(Xr),Bl,wl,Vr,xo=C({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vl,button:0,buttons:0,relatedTarget:function(A){return A.relatedTarget===void 0?A.fromElement===A.srcElement?A.toElement:A.fromElement:A.relatedTarget},movementX:function(A){return"movementX"in A?A.movementX:(A!==Vr&&(Vr&&A.type==="mousemove"?(Bl=A.screenX-Vr.screenX,wl=A.screenY-Vr.screenY):wl=Bl=0,Vr=A),Bl)},movementY:function(A){return"movementY"in A?A.movementY:wl}}),ku=Tt(xo),F0=C({},xo,{dataTransfer:0}),j0=Tt(F0),S0=C({},Xr,{relatedTarget:0}),yl=Tt(S0),k0=C({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),H0=Tt(k0),N0=C({},Qa,{clipboardData:function(A){return"clipboardData"in A?A.clipboardData:window.clipboardData}}),M0=Tt(N0),D0=C({},Qa,{data:0}),Hu=Tt(D0),T0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O0(A){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(A):(A=L0[A])?!!e[A]:!1}function vl(){return O0}var K0=C({},Xr,{key:function(A){if(A.key){var e=T0[A.key]||A.key;if(e!=="Unidentified")return e}return A.type==="keypress"?(A=ho(A),A===13?"Enter":String.fromCharCode(A)):A.type==="keydown"||A.type==="keyup"?I0[A.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vl,charCode:function(A){return A.type==="keypress"?ho(A):0},keyCode:function(A){return A.type==="keydown"||A.type==="keyup"?A.keyCode:0},which:function(A){return A.type==="keypress"?ho(A):A.type==="keydown"||A.type==="keyup"?A.keyCode:0}}),z0=Tt(K0),R0=C({},xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nu=Tt(R0),_0=C({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vl}),G0=Tt(_0),Y0=C({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),X0=Tt(Y0),V0=C({},xo,{deltaX:function(A){return"deltaX"in A?A.deltaX:"wheelDeltaX"in A?-A.wheelDeltaX:0},deltaY:function(A){return"deltaY"in A?A.deltaY:"wheelDeltaY"in A?-A.wheelDeltaY:"wheelDelta"in A?-A.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=Tt(V0),Z0=C({},Qa,{newState:0,oldState:0}),$0=Tt(Z0),W0=[9,13,27,32],Cl=Qn&&"CompositionEvent"in window,Jr=null;Qn&&"documentMode"in document&&(Jr=document.documentMode);var q0=Qn&&"TextEvent"in window&&!Jr,Mu=Qn&&(!Cl||Jr&&8<Jr&&11>=Jr),Du=" ",Tu=!1;function Iu(A,e){switch(A){case"keyup":return W0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lu(A){return A=A.detail,typeof A=="object"&&"data"in A?A.data:null}var Pa=!1;function P0(A,e){switch(A){case"compositionend":return Lu(e);case"keypress":return e.which!==32?null:(Tu=!0,Du);case"textInput":return A=e.data,A===Du&&Tu?null:A;default:return null}}function Am(A,e){if(Pa)return A==="compositionend"||!Cl&&Iu(A,e)?(A=ju(),fo=bl=Yn=null,Pa=!1,A):null;switch(A){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mu&&e.locale!=="ko"?null:e.data;default:return null}}var em={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ou(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e==="input"?!!em[A.type]:e==="textarea"}function Ku(A,e,t,a){Wa?qa?qa.push(a):qa=[a]:Wa=a,e=ns(e,"onChange"),0<e.length&&(t=new po("onChange","change",null,t,a),A.push({event:t,listeners:e}))}var Zr=null,$r=null;function tm(A){wg(A,0)}function mo(A){var e=ZA(A);if(lo(e))return A}function zu(A,e){if(A==="change")return e}var Ru=!1;if(Qn){var Ql;if(Qn){var Ul="oninput"in document;if(!Ul){var _u=document.createElement("div");_u.setAttribute("oninput","return;"),Ul=typeof _u.oninput=="function"}Ql=Ul}else Ql=!1;Ru=Ql&&(!document.documentMode||9<document.documentMode)}function Gu(){Zr&&(Zr.detachEvent("onpropertychange",Yu),$r=Zr=null)}function Yu(A){if(A.propertyName==="value"&&mo($r)){var e=[];Ku(e,$r,A,pl(A)),Fu(tm,e)}}function nm(A,e,t){A==="focusin"?(Gu(),Zr=e,$r=t,Zr.attachEvent("onpropertychange",Yu)):A==="focusout"&&Gu()}function am(A){if(A==="selectionchange"||A==="keyup"||A==="keydown")return mo($r)}function rm(A,e){if(A==="click")return mo(e)}function im(A,e){if(A==="input"||A==="change")return mo(e)}function om(A,e){return A===e&&(A!==0||1/A===1/e)||A!==A&&e!==e}var zt=typeof Object.is=="function"?Object.is:om;function Wr(A,e){if(zt(A,e))return!0;if(typeof A!="object"||A===null||typeof e!="object"||e===null)return!1;var t=Object.keys(A),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!zA.call(e,l)||!zt(A[l],e[l]))return!1}return!0}function Xu(A){for(;A&&A.firstChild;)A=A.firstChild;return A}function Vu(A,e){var t=Xu(A);A=0;for(var a;t;){if(t.nodeType===3){if(a=A+t.textContent.length,A<=e&&a>=e)return{node:t,offset:e-A};A=a}A:{for(;t;){if(t.nextSibling){t=t.nextSibling;break A}t=t.parentNode}t=void 0}t=Xu(t)}}function Ju(A,e){return A&&e?A===e?!0:A&&A.nodeType===3?!1:e&&e.nodeType===3?Ju(A,e.parentNode):"contains"in A?A.contains(e):A.compareDocumentPosition?!!(A.compareDocumentPosition(e)&16):!1:!1}function Zu(A){A=A!=null&&A.ownerDocument!=null&&A.ownerDocument.defaultView!=null?A.ownerDocument.defaultView:window;for(var e=co(A.document);e instanceof A.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)A=e.contentWindow;else break;e=co(A.document)}return e}function El(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e&&(e==="input"&&(A.type==="text"||A.type==="search"||A.type==="tel"||A.type==="url"||A.type==="password")||e==="textarea"||A.contentEditable==="true")}var sm=Qn&&"documentMode"in document&&11>=document.documentMode,Ar=null,Fl=null,qr=null,jl=!1;function $u(A,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;jl||Ar==null||Ar!==co(a)||(a=Ar,"selectionStart"in a&&El(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),qr&&Wr(qr,a)||(qr=a,a=ns(Fl,"onSelect"),0<a.length&&(e=new po("onSelect","select",null,e,t),A.push({event:e,listeners:a}),e.target=Ar)))}function Ua(A,e){var t={};return t[A.toLowerCase()]=e.toLowerCase(),t["Webkit"+A]="webkit"+e,t["Moz"+A]="moz"+e,t}var er={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},Sl={},Wu={};Qn&&(Wu=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function Ea(A){if(Sl[A])return Sl[A];if(!er[A])return A;var e=er[A],t;for(t in e)if(e.hasOwnProperty(t)&&t in Wu)return Sl[A]=e[t];return A}var qu=Ea("animationend"),Pu=Ea("animationiteration"),Af=Ea("animationstart"),lm=Ea("transitionrun"),cm=Ea("transitionstart"),dm=Ea("transitioncancel"),ef=Ea("transitionend"),tf=new Map,kl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kl.push("scrollEnd");function ln(A,e){tf.set(A,e),W(e,[A])}var nf=new WeakMap;function $t(A,e){if(typeof A=="object"&&A!==null){var t=nf.get(A);return t!==void 0?t:(e={value:A,source:e,stack:sn(e)},nf.set(A,e),e)}return{value:A,source:e,stack:sn(e)}}var Wt=[],tr=0,Hl=0;function bo(){for(var A=tr,e=Hl=tr=0;e<A;){var t=Wt[e];Wt[e++]=null;var a=Wt[e];Wt[e++]=null;var l=Wt[e];Wt[e++]=null;var c=Wt[e];if(Wt[e++]=null,a!==null&&l!==null){var p=a.pending;p===null?l.next=l:(l.next=p.next,p.next=l),a.pending=l}c!==0&&af(t,l,c)}}function Bo(A,e,t,a){Wt[tr++]=A,Wt[tr++]=e,Wt[tr++]=t,Wt[tr++]=a,Hl|=a,A.lanes|=a,A=A.alternate,A!==null&&(A.lanes|=a)}function Nl(A,e,t,a){return Bo(A,e,t,a),wo(A)}function nr(A,e){return Bo(A,null,null,e),wo(A)}function af(A,e,t){A.lanes|=t;var a=A.alternate;a!==null&&(a.lanes|=t);for(var l=!1,c=A.return;c!==null;)c.childLanes|=t,a=c.alternate,a!==null&&(a.childLanes|=t),c.tag===22&&(A=c.stateNode,A===null||A._visibility&1||(l=!0)),A=c,c=c.return;return A.tag===3?(c=A.stateNode,l&&e!==null&&(l=31-O(t),A=c.hiddenUpdates,a=A[l],a===null?A[l]=[e]:a.push(e),e.lane=t|536870912),c):null}function wo(A){if(50<vi)throw vi=0,Oc=null,Error(o(185));for(var e=A.return;e!==null;)A=e,e=A.return;return A.tag===3?A.stateNode:null}var ar={};function um(A,e,t,a){this.tag=A,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(A,e,t,a){return new um(A,e,t,a)}function Ml(A){return A=A.prototype,!(!A||!A.isReactComponent)}function Un(A,e){var t=A.alternate;return t===null?(t=Rt(A.tag,e,A.key,A.mode),t.elementType=A.elementType,t.type=A.type,t.stateNode=A.stateNode,t.alternate=A,A.alternate=t):(t.pendingProps=e,t.type=A.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=A.flags&65011712,t.childLanes=A.childLanes,t.lanes=A.lanes,t.child=A.child,t.memoizedProps=A.memoizedProps,t.memoizedState=A.memoizedState,t.updateQueue=A.updateQueue,e=A.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=A.sibling,t.index=A.index,t.ref=A.ref,t.refCleanup=A.refCleanup,t}function rf(A,e){A.flags&=65011714;var t=A.alternate;return t===null?(A.childLanes=0,A.lanes=e,A.child=null,A.subtreeFlags=0,A.memoizedProps=null,A.memoizedState=null,A.updateQueue=null,A.dependencies=null,A.stateNode=null):(A.childLanes=t.childLanes,A.lanes=t.lanes,A.child=t.child,A.subtreeFlags=0,A.deletions=null,A.memoizedProps=t.memoizedProps,A.memoizedState=t.memoizedState,A.updateQueue=t.updateQueue,A.type=t.type,e=t.dependencies,A.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),A}function yo(A,e,t,a,l,c){var p=0;if(a=A,typeof A=="function")Ml(A)&&(p=1);else if(typeof A=="string")p=hb(A,t,QA.current)?26:A==="html"||A==="head"||A==="body"?27:5;else A:switch(A){case sA:return A=Rt(31,t,e,l),A.elementType=sA,A.lanes=c,A;case eA:return Fa(t.children,l,c,e);case uA:p=8,l|=24;break;case MA:return A=Rt(12,t,e,l|2),A.elementType=MA,A.lanes=c,A;case mA:return A=Rt(13,t,e,l),A.elementType=mA,A.lanes=c,A;case Y:return A=Rt(19,t,e,l),A.elementType=Y,A.lanes=c,A;default:if(typeof A=="object"&&A!==null)switch(A.$$typeof){case NA:case XA:p=10;break A;case gA:p=9;break A;case xA:p=11;break A;case IA:p=14;break A;case V:p=16,a=null;break A}p=29,t=Error(o(130,A===null?"null":typeof A,"")),a=null}return e=Rt(p,t,e,l),e.elementType=A,e.type=a,e.lanes=c,e}function Fa(A,e,t,a){return A=Rt(7,A,a,e),A.lanes=t,A}function Dl(A,e,t){return A=Rt(6,A,null,e),A.lanes=t,A}function Tl(A,e,t){return e=Rt(4,A.children!==null?A.children:[],A.key,e),e.lanes=t,e.stateNode={containerInfo:A.containerInfo,pendingChildren:null,implementation:A.implementation},e}var rr=[],ir=0,vo=null,Co=0,qt=[],Pt=0,ja=null,En=1,Fn="";function Sa(A,e){rr[ir++]=Co,rr[ir++]=vo,vo=A,Co=e}function of(A,e,t){qt[Pt++]=En,qt[Pt++]=Fn,qt[Pt++]=ja,ja=A;var a=En;A=Fn;var l=32-O(a)-1;a&=~(1<<l),t+=1;var c=32-O(e)+l;if(30<c){var p=l-l%5;c=(a&(1<<p)-1).toString(32),a>>=p,l-=p,En=1<<32-O(e)+l|t<<l|a,Fn=c+A}else En=1<<c|t<<l|a,Fn=A}function Il(A){A.return!==null&&(Sa(A,1),of(A,1,0))}function Ll(A){for(;A===vo;)vo=rr[--ir],rr[ir]=null,Co=rr[--ir],rr[ir]=null;for(;A===ja;)ja=qt[--Pt],qt[Pt]=null,Fn=qt[--Pt],qt[Pt]=null,En=qt[--Pt],qt[Pt]=null}var Mt=null,it=null,Oe=!1,ka=null,hn=!1,Ol=Error(o(519));function Ha(A){var e=Error(o(418,""));throw ei($t(e,A)),Ol}function sf(A){var e=A.stateNode,t=A.type,a=A.memoizedProps;switch(e[E]=A,e[D]=a,t){case"dialog":Qe("cancel",e),Qe("close",e);break;case"iframe":case"object":case"embed":Qe("load",e);break;case"video":case"audio":for(t=0;t<Qi.length;t++)Qe(Qi[t],e);break;case"source":Qe("error",e);break;case"img":case"image":case"link":Qe("error",e),Qe("load",e);break;case"details":Qe("toggle",e);break;case"input":Qe("invalid",e),yu(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Ja(e);break;case"select":Qe("invalid",e);break;case"textarea":Qe("invalid",e),Cu(e,a.value,a.defaultValue,a.children),Ja(e)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||a.suppressHydrationWarning===!0||Qg(e.textContent,t)?(a.popover!=null&&(Qe("beforetoggle",e),Qe("toggle",e)),a.onScroll!=null&&Qe("scroll",e),a.onScrollEnd!=null&&Qe("scrollend",e),a.onClick!=null&&(e.onclick=as),e=!0):e=!1,e||Ha(A)}function lf(A){for(Mt=A.return;Mt;)switch(Mt.tag){case 5:case 13:hn=!1;return;case 27:case 3:hn=!0;return;default:Mt=Mt.return}}function Pr(A){if(A!==Mt)return!1;if(!Oe)return lf(A),Oe=!0,!1;var e=A.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=A.type,t=!(t!=="form"&&t!=="button")||ed(A.type,A.memoizedProps)),t=!t),t&&it&&Ha(A),lf(A),e===13){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(o(317));A:{for(A=A.nextSibling,e=0;A;){if(A.nodeType===8)if(t=A.data,t==="/$"){if(e===0){it=dn(A.nextSibling);break A}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++;A=A.nextSibling}it=null}}else e===27?(e=it,oa(A.type)?(A=rd,rd=null,it=A):it=e):it=Mt?dn(A.stateNode.nextSibling):null;return!0}function Ai(){it=Mt=null,Oe=!1}function cf(){var A=ka;return A!==null&&(Ot===null?Ot=A:Ot.push.apply(Ot,A),ka=null),A}function ei(A){ka===null?ka=[A]:ka.push(A)}var Kl=J(null),Na=null,jn=null;function Xn(A,e,t){lA(Kl,e._currentValue),e._currentValue=t}function Sn(A){A._currentValue=Kl.current,$(Kl)}function zl(A,e,t){for(;A!==null;){var a=A.alternate;if((A.childLanes&e)!==e?(A.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),A===t)break;A=A.return}}function Rl(A,e,t,a){var l=A.child;for(l!==null&&(l.return=A);l!==null;){var c=l.dependencies;if(c!==null){var p=l.child;c=c.firstContext;A:for(;c!==null;){var y=c;c=l;for(var M=0;M<e.length;M++)if(y.context===e[M]){c.lanes|=t,y=c.alternate,y!==null&&(y.lanes|=t),zl(c.return,t,A),a||(p=null);break A}c=y.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(o(341));p.lanes|=t,c=p.alternate,c!==null&&(c.lanes|=t),zl(p,t,A),p=null}else p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===A){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function ti(A,e,t,a){A=null;for(var l=e,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(o(387));if(p=p.memoizedProps,p!==null){var y=l.type;zt(l.pendingProps.value,p.value)||(A!==null?A.push(y):A=[y])}}else if(l===OA.current){if(p=l.alternate,p===null)throw Error(o(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(A!==null?A.push(ki):A=[ki])}l=l.return}A!==null&&Rl(e,A,t,a),e.flags|=262144}function Qo(A){for(A=A.firstContext;A!==null;){if(!zt(A.context._currentValue,A.memoizedValue))return!0;A=A.next}return!1}function Ma(A){Na=A,jn=null,A=A.dependencies,A!==null&&(A.firstContext=null)}function St(A){return df(Na,A)}function Uo(A,e){return Na===null&&Ma(A),df(A,e)}function df(A,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},jn===null){if(A===null)throw Error(o(308));jn=e,A.dependencies={lanes:0,firstContext:e},A.flags|=524288}else jn=jn.next=e;return t}var fm=typeof AbortController<"u"?AbortController:function(){var A=[],e=this.signal={aborted:!1,addEventListener:function(t,a){A.push(a)}};this.abort=function(){e.aborted=!0,A.forEach(function(t){return t()})}},hm=i.unstable_scheduleCallback,gm=i.unstable_NormalPriority,xt={$$typeof:XA,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _l(){return{controller:new fm,data:new Map,refCount:0}}function ni(A){A.refCount--,A.refCount===0&&hm(gm,function(){A.controller.abort()})}var ai=null,Gl=0,or=0,sr=null;function pm(A,e){if(ai===null){var t=ai=[];Gl=0,or=Xc(),sr={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Gl++,e.then(uf,uf),e}function uf(){if(--Gl===0&&ai!==null){sr!==null&&(sr.status="fulfilled");var A=ai;ai=null,or=0,sr=null;for(var e=0;e<A.length;e++)(0,A[e])()}}function xm(A,e){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return A.then(function(){a.status="fulfilled",a.value=e;for(var l=0;l<t.length;l++)(0,t[l])(e)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var ff=G.S;G.S=function(A,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&pm(A,e),ff!==null&&ff(A,e)};var Da=J(null);function Yl(){var A=Da.current;return A!==null?A:qe.pooledCache}function Eo(A,e){e===null?lA(Da,Da.current):lA(Da,e.pool)}function hf(){var A=Yl();return A===null?null:{parent:xt._currentValue,pool:A}}var ri=Error(o(460)),gf=Error(o(474)),Fo=Error(o(542)),Xl={then:function(){}};function pf(A){return A=A.status,A==="fulfilled"||A==="rejected"}function jo(){}function xf(A,e,t){switch(t=A[t],t===void 0?A.push(e):t!==e&&(e.then(jo,jo),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw A=e.reason,bf(A),A;default:if(typeof e.status=="string")e.then(jo,jo);else{if(A=qe,A!==null&&100<A.shellSuspendCounter)throw Error(o(482));A=e,A.status="pending",A.then(function(a){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=a}},function(a){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw A=e.reason,bf(A),A}throw ii=e,ri}}var ii=null;function mf(){if(ii===null)throw Error(o(459));var A=ii;return ii=null,A}function bf(A){if(A===ri||A===Fo)throw Error(o(483))}var Vn=!1;function Vl(A){A.updateQueue={baseState:A.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jl(A,e){A=A.updateQueue,e.updateQueue===A&&(e.updateQueue={baseState:A.baseState,firstBaseUpdate:A.firstBaseUpdate,lastBaseUpdate:A.lastBaseUpdate,shared:A.shared,callbacks:null})}function Jn(A){return{lane:A,tag:0,payload:null,callback:null,next:null}}function Zn(A,e,t){var a=A.updateQueue;if(a===null)return null;if(a=a.shared,(ze&2)!==0){var l=a.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e,e=wo(A),af(A,null,t),e}return Bo(A,a,e,t),wo(A)}function oi(A,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var a=e.lanes;a&=A.pendingLanes,t|=a,e.lanes=t,Ie(A,t)}}function Zl(A,e){var t=A.updateQueue,a=A.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,c=null;if(t=t.firstBaseUpdate,t!==null){do{var p={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};c===null?l=c=p:c=c.next=p,t=t.next}while(t!==null);c===null?l=c=e:c=c.next=e}else l=c=e;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},A.updateQueue=t;return}A=t.lastBaseUpdate,A===null?t.firstBaseUpdate=e:A.next=e,t.lastBaseUpdate=e}var $l=!1;function si(){if($l){var A=sr;if(A!==null)throw A}}function li(A,e,t,a){$l=!1;var l=A.updateQueue;Vn=!1;var c=l.firstBaseUpdate,p=l.lastBaseUpdate,y=l.shared.pending;if(y!==null){l.shared.pending=null;var M=y,tA=M.next;M.next=null,p===null?c=tA:p.next=tA,p=M;var BA=A.alternate;BA!==null&&(BA=BA.updateQueue,y=BA.lastBaseUpdate,y!==p&&(y===null?BA.firstBaseUpdate=tA:y.next=tA,BA.lastBaseUpdate=M))}if(c!==null){var kA=l.baseState;p=0,BA=tA=M=null,y=c;do{var aA=y.lane&-536870913,iA=aA!==y.lane;if(iA?(He&aA)===aA:(a&aA)===aA){aA!==0&&aA===or&&($l=!0),BA!==null&&(BA=BA.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});A:{var de=A,se=y;aA=e;var Xe=t;switch(se.tag){case 1:if(de=se.payload,typeof de=="function"){kA=de.call(Xe,kA,aA);break A}kA=de;break A;case 3:de.flags=de.flags&-65537|128;case 0:if(de=se.payload,aA=typeof de=="function"?de.call(Xe,kA,aA):de,aA==null)break A;kA=C({},kA,aA);break A;case 2:Vn=!0}}aA=y.callback,aA!==null&&(A.flags|=64,iA&&(A.flags|=8192),iA=l.callbacks,iA===null?l.callbacks=[aA]:iA.push(aA))}else iA={lane:aA,tag:y.tag,payload:y.payload,callback:y.callback,next:null},BA===null?(tA=BA=iA,M=kA):BA=BA.next=iA,p|=aA;if(y=y.next,y===null){if(y=l.shared.pending,y===null)break;iA=y,y=iA.next,iA.next=null,l.lastBaseUpdate=iA,l.shared.pending=null}}while(!0);BA===null&&(M=kA),l.baseState=M,l.firstBaseUpdate=tA,l.lastBaseUpdate=BA,c===null&&(l.shared.lanes=0),na|=p,A.lanes=p,A.memoizedState=kA}}function Bf(A,e){if(typeof A!="function")throw Error(o(191,A));A.call(e)}function wf(A,e){var t=A.callbacks;if(t!==null)for(A.callbacks=null,A=0;A<t.length;A++)Bf(t[A],e)}var lr=J(null),So=J(0);function yf(A,e){A=In,lA(So,A),lA(lr,e),In=A|e.baseLanes}function Wl(){lA(So,In),lA(lr,lr.current)}function ql(){In=So.current,$(lr),$(So)}var $n=0,Be=null,Ge=null,ft=null,ko=!1,cr=!1,Ta=!1,Ho=0,ci=0,dr=null,mm=0;function st(){throw Error(o(321))}function Pl(A,e){if(e===null)return!1;for(var t=0;t<e.length&&t<A.length;t++)if(!zt(A[t],e[t]))return!1;return!0}function Ac(A,e,t,a,l,c){return $n=c,Be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,G.H=A===null||A.memoizedState===null?rh:ih,Ta=!1,c=t(a,l),Ta=!1,cr&&(c=Cf(e,t,a,l)),vf(A),c}function vf(A){G.H=Lo;var e=Ge!==null&&Ge.next!==null;if($n=0,ft=Ge=Be=null,ko=!1,ci=0,dr=null,e)throw Error(o(300));A===null||wt||(A=A.dependencies,A!==null&&Qo(A)&&(wt=!0))}function Cf(A,e,t,a){Be=A;var l=0;do{if(cr&&(dr=null),ci=0,cr=!1,25<=l)throw Error(o(301));if(l+=1,ft=Ge=null,A.updateQueue!=null){var c=A.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}G.H=Qm,c=e(t,a)}while(cr);return c}function bm(){var A=G.H,e=A.useState()[0];return e=typeof e.then=="function"?di(e):e,A=A.useState()[0],(Ge!==null?Ge.memoizedState:null)!==A&&(Be.flags|=1024),e}function ec(){var A=Ho!==0;return Ho=0,A}function tc(A,e,t){e.updateQueue=A.updateQueue,e.flags&=-2053,A.lanes&=~t}function nc(A){if(ko){for(A=A.memoizedState;A!==null;){var e=A.queue;e!==null&&(e.pending=null),A=A.next}ko=!1}$n=0,ft=Ge=Be=null,cr=!1,ci=Ho=0,dr=null}function It(){var A={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Be.memoizedState=ft=A:ft=ft.next=A,ft}function ht(){if(Ge===null){var A=Be.alternate;A=A!==null?A.memoizedState:null}else A=Ge.next;var e=ft===null?Be.memoizedState:ft.next;if(e!==null)ft=e,Ge=A;else{if(A===null)throw Be.alternate===null?Error(o(467)):Error(o(310));Ge=A,A={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},ft===null?Be.memoizedState=ft=A:ft=ft.next=A}return ft}function ac(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function di(A){var e=ci;return ci+=1,dr===null&&(dr=[]),A=xf(dr,A,e),e=Be,(ft===null?e.memoizedState:ft.next)===null&&(e=e.alternate,G.H=e===null||e.memoizedState===null?rh:ih),A}function No(A){if(A!==null&&typeof A=="object"){if(typeof A.then=="function")return di(A);if(A.$$typeof===XA)return St(A)}throw Error(o(438,String(A)))}function rc(A){var e=null,t=Be.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var a=Be.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=ac(),Be.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(A),a=0;a<A;a++)t[a]=KA;return e.index++,t}function kn(A,e){return typeof e=="function"?e(A):e}function Mo(A){var e=ht();return ic(e,Ge,A)}function ic(A,e,t){var a=A.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var l=A.baseQueue,c=a.pending;if(c!==null){if(l!==null){var p=l.next;l.next=c.next,c.next=p}e.baseQueue=l=c,a.pending=null}if(c=A.baseState,l===null)A.memoizedState=c;else{e=l.next;var y=p=null,M=null,tA=e,BA=!1;do{var kA=tA.lane&-536870913;if(kA!==tA.lane?(He&kA)===kA:($n&kA)===kA){var aA=tA.revertLane;if(aA===0)M!==null&&(M=M.next={lane:0,revertLane:0,action:tA.action,hasEagerState:tA.hasEagerState,eagerState:tA.eagerState,next:null}),kA===or&&(BA=!0);else if(($n&aA)===aA){tA=tA.next,aA===or&&(BA=!0);continue}else kA={lane:0,revertLane:tA.revertLane,action:tA.action,hasEagerState:tA.hasEagerState,eagerState:tA.eagerState,next:null},M===null?(y=M=kA,p=c):M=M.next=kA,Be.lanes|=aA,na|=aA;kA=tA.action,Ta&&t(c,kA),c=tA.hasEagerState?tA.eagerState:t(c,kA)}else aA={lane:kA,revertLane:tA.revertLane,action:tA.action,hasEagerState:tA.hasEagerState,eagerState:tA.eagerState,next:null},M===null?(y=M=aA,p=c):M=M.next=aA,Be.lanes|=kA,na|=kA;tA=tA.next}while(tA!==null&&tA!==e);if(M===null?p=c:M.next=y,!zt(c,A.memoizedState)&&(wt=!0,BA&&(t=sr,t!==null)))throw t;A.memoizedState=c,A.baseState=p,A.baseQueue=M,a.lastRenderedState=c}return l===null&&(a.lanes=0),[A.memoizedState,a.dispatch]}function oc(A){var e=ht(),t=e.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=A;var a=t.dispatch,l=t.pending,c=e.memoizedState;if(l!==null){t.pending=null;var p=l=l.next;do c=A(c,p.action),p=p.next;while(p!==l);zt(c,e.memoizedState)||(wt=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),t.lastRenderedState=c}return[c,a]}function Qf(A,e,t){var a=Be,l=ht(),c=Oe;if(c){if(t===void 0)throw Error(o(407));t=t()}else t=e();var p=!zt((Ge||l).memoizedState,t);p&&(l.memoizedState=t,wt=!0),l=l.queue;var y=Ff.bind(null,a,l,A);if(ui(2048,8,y,[A]),l.getSnapshot!==e||p||ft!==null&&ft.memoizedState.tag&1){if(a.flags|=2048,ur(9,Do(),Ef.bind(null,a,l,t,e),null),qe===null)throw Error(o(349));c||($n&124)!==0||Uf(a,e,t)}return t}function Uf(A,e,t){A.flags|=16384,A={getSnapshot:e,value:t},e=Be.updateQueue,e===null?(e=ac(),Be.updateQueue=e,e.stores=[A]):(t=e.stores,t===null?e.stores=[A]:t.push(A))}function Ef(A,e,t,a){e.value=t,e.getSnapshot=a,jf(e)&&Sf(A)}function Ff(A,e,t){return t(function(){jf(e)&&Sf(A)})}function jf(A){var e=A.getSnapshot;A=A.value;try{var t=e();return!zt(A,t)}catch{return!0}}function Sf(A){var e=nr(A,2);e!==null&&Vt(e,A,2)}function sc(A){var e=It();if(typeof A=="function"){var t=A;if(A=t(),Ta){Se(!0);try{t()}finally{Se(!1)}}}return e.memoizedState=e.baseState=A,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:A},e}function kf(A,e,t,a){return A.baseState=t,ic(A,Ge,typeof a=="function"?a:kn)}function Bm(A,e,t,a,l){if(Io(A))throw Error(o(485));if(A=e.action,A!==null){var c={payload:l,action:A,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};G.T!==null?t(!0):c.isTransition=!1,a(c),t=e.pending,t===null?(c.next=e.pending=c,Hf(e,c)):(c.next=t.next,e.pending=t.next=c)}}function Hf(A,e){var t=e.action,a=e.payload,l=A.state;if(e.isTransition){var c=G.T,p={};G.T=p;try{var y=t(l,a),M=G.S;M!==null&&M(p,y),Nf(A,e,y)}catch(tA){lc(A,e,tA)}finally{G.T=c}}else try{c=t(l,a),Nf(A,e,c)}catch(tA){lc(A,e,tA)}}function Nf(A,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Mf(A,e,a)},function(a){return lc(A,e,a)}):Mf(A,e,t)}function Mf(A,e,t){e.status="fulfilled",e.value=t,Df(e),A.state=t,e=A.pending,e!==null&&(t=e.next,t===e?A.pending=null:(t=t.next,e.next=t,Hf(A,t)))}function lc(A,e,t){var a=A.pending;if(A.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=t,Df(e),e=e.next;while(e!==a)}A.action=null}function Df(A){A=A.listeners;for(var e=0;e<A.length;e++)(0,A[e])()}function Tf(A,e){return e}function If(A,e){if(Oe){var t=qe.formState;if(t!==null){A:{var a=Be;if(Oe){if(it){e:{for(var l=it,c=hn;l.nodeType!==8;){if(!c){l=null;break e}if(l=dn(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){it=dn(l.nextSibling),a=l.data==="F!";break A}}Ha(a)}a=!1}a&&(e=t[0])}}return t=It(),t.memoizedState=t.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tf,lastRenderedState:e},t.queue=a,t=th.bind(null,Be,a),a.dispatch=t,a=sc(!1),c=hc.bind(null,Be,!1,a.queue),a=It(),l={state:e,dispatch:null,action:A,pending:null},a.queue=l,t=Bm.bind(null,Be,l,c,t),l.dispatch=t,a.memoizedState=A,[e,t,!1]}function Lf(A){var e=ht();return Of(e,Ge,A)}function Of(A,e,t){if(e=ic(A,e,Tf)[0],A=Mo(kn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=di(e)}catch(p){throw p===ri?Fo:p}else a=e;e=ht();var l=e.queue,c=l.dispatch;return t!==e.memoizedState&&(Be.flags|=2048,ur(9,Do(),wm.bind(null,l,t),null)),[a,c,A]}function wm(A,e){A.action=e}function Kf(A){var e=ht(),t=Ge;if(t!==null)return Of(e,t,A);ht(),e=e.memoizedState,t=ht();var a=t.queue.dispatch;return t.memoizedState=A,[e,a,!1]}function ur(A,e,t,a){return A={tag:A,create:t,deps:a,inst:e,next:null},e=Be.updateQueue,e===null&&(e=ac(),Be.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=A.next=A:(a=t.next,t.next=A,A.next=a,e.lastEffect=A),A}function Do(){return{destroy:void 0,resource:void 0}}function zf(){return ht().memoizedState}function To(A,e,t,a){var l=It();a=a===void 0?null:a,Be.flags|=A,l.memoizedState=ur(1|e,Do(),t,a)}function ui(A,e,t,a){var l=ht();a=a===void 0?null:a;var c=l.memoizedState.inst;Ge!==null&&a!==null&&Pl(a,Ge.memoizedState.deps)?l.memoizedState=ur(e,c,t,a):(Be.flags|=A,l.memoizedState=ur(1|e,c,t,a))}function Rf(A,e){To(8390656,8,A,e)}function _f(A,e){ui(2048,8,A,e)}function Gf(A,e){return ui(4,2,A,e)}function Yf(A,e){return ui(4,4,A,e)}function Xf(A,e){if(typeof e=="function"){A=A();var t=e(A);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return A=A(),e.current=A,function(){e.current=null}}function Vf(A,e,t){t=t!=null?t.concat([A]):null,ui(4,4,Xf.bind(null,e,A),t)}function cc(){}function Jf(A,e){var t=ht();e=e===void 0?null:e;var a=t.memoizedState;return e!==null&&Pl(e,a[1])?a[0]:(t.memoizedState=[A,e],A)}function Zf(A,e){var t=ht();e=e===void 0?null:e;var a=t.memoizedState;if(e!==null&&Pl(e,a[1]))return a[0];if(a=A(),Ta){Se(!0);try{A()}finally{Se(!1)}}return t.memoizedState=[a,e],a}function dc(A,e,t){return t===void 0||($n&1073741824)!==0?A.memoizedState=e:(A.memoizedState=t,A=qh(),Be.lanes|=A,na|=A,t)}function $f(A,e,t,a){return zt(t,e)?t:lr.current!==null?(A=dc(A,t,a),zt(A,e)||(wt=!0),A):($n&42)===0?(wt=!0,A.memoizedState=t):(A=qh(),Be.lanes|=A,na|=A,e)}function Wf(A,e,t,a,l){var c=pA.p;pA.p=c!==0&&8>c?c:8;var p=G.T,y={};G.T=y,hc(A,!1,e,t);try{var M=l(),tA=G.S;if(tA!==null&&tA(y,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var BA=xm(M,a);fi(A,e,BA,Xt(A))}else fi(A,e,a,Xt(A))}catch(kA){fi(A,e,{then:function(){},status:"rejected",reason:kA},Xt())}finally{pA.p=c,G.T=p}}function ym(){}function uc(A,e,t,a){if(A.tag!==5)throw Error(o(476));var l=qf(A).queue;Wf(A,l,e,FA,t===null?ym:function(){return Pf(A),t(a)})}function qf(A){var e=A.memoizedState;if(e!==null)return e;e={memoizedState:FA,baseState:FA,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:FA},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:t},next:null},A.memoizedState=e,A=A.alternate,A!==null&&(A.memoizedState=e),e}function Pf(A){var e=qf(A).next.queue;fi(A,e,{},Xt())}function fc(){return St(ki)}function Ah(){return ht().memoizedState}function eh(){return ht().memoizedState}function vm(A){for(var e=A.return;e!==null;){switch(e.tag){case 24:case 3:var t=Xt();A=Jn(t);var a=Zn(e,A,t);a!==null&&(Vt(a,e,t),oi(a,e,t)),e={cache:_l()},A.payload=e;return}e=e.return}}function Cm(A,e,t){var a=Xt();t={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Io(A)?nh(e,t):(t=Nl(A,e,t,a),t!==null&&(Vt(t,A,a),ah(t,e,a)))}function th(A,e,t){var a=Xt();fi(A,e,t,a)}function fi(A,e,t,a){var l={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Io(A))nh(e,l);else{var c=A.alternate;if(A.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var p=e.lastRenderedState,y=c(p,t);if(l.hasEagerState=!0,l.eagerState=y,zt(y,p))return Bo(A,e,l,0),qe===null&&bo(),!1}catch{}finally{}if(t=Nl(A,e,l,a),t!==null)return Vt(t,A,a),ah(t,e,a),!0}return!1}function hc(A,e,t,a){if(a={lane:2,revertLane:Xc(),action:a,hasEagerState:!1,eagerState:null,next:null},Io(A)){if(e)throw Error(o(479))}else e=Nl(A,t,a,2),e!==null&&Vt(e,A,2)}function Io(A){var e=A.alternate;return A===Be||e!==null&&e===Be}function nh(A,e){cr=ko=!0;var t=A.pending;t===null?e.next=e:(e.next=t.next,t.next=e),A.pending=e}function ah(A,e,t){if((t&4194048)!==0){var a=e.lanes;a&=A.pendingLanes,t|=a,e.lanes=t,Ie(A,t)}}var Lo={readContext:St,use:No,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useLayoutEffect:st,useInsertionEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useSyncExternalStore:st,useId:st,useHostTransitionStatus:st,useFormState:st,useActionState:st,useOptimistic:st,useMemoCache:st,useCacheRefresh:st},rh={readContext:St,use:No,useCallback:function(A,e){return It().memoizedState=[A,e===void 0?null:e],A},useContext:St,useEffect:Rf,useImperativeHandle:function(A,e,t){t=t!=null?t.concat([A]):null,To(4194308,4,Xf.bind(null,e,A),t)},useLayoutEffect:function(A,e){return To(4194308,4,A,e)},useInsertionEffect:function(A,e){To(4,2,A,e)},useMemo:function(A,e){var t=It();e=e===void 0?null:e;var a=A();if(Ta){Se(!0);try{A()}finally{Se(!1)}}return t.memoizedState=[a,e],a},useReducer:function(A,e,t){var a=It();if(t!==void 0){var l=t(e);if(Ta){Se(!0);try{t(e)}finally{Se(!1)}}}else l=e;return a.memoizedState=a.baseState=l,A={pending:null,lanes:0,dispatch:null,lastRenderedReducer:A,lastRenderedState:l},a.queue=A,A=A.dispatch=Cm.bind(null,Be,A),[a.memoizedState,A]},useRef:function(A){var e=It();return A={current:A},e.memoizedState=A},useState:function(A){A=sc(A);var e=A.queue,t=th.bind(null,Be,e);return e.dispatch=t,[A.memoizedState,t]},useDebugValue:cc,useDeferredValue:function(A,e){var t=It();return dc(t,A,e)},useTransition:function(){var A=sc(!1);return A=Wf.bind(null,Be,A.queue,!0,!1),It().memoizedState=A,[!1,A]},useSyncExternalStore:function(A,e,t){var a=Be,l=It();if(Oe){if(t===void 0)throw Error(o(407));t=t()}else{if(t=e(),qe===null)throw Error(o(349));(He&124)!==0||Uf(a,e,t)}l.memoizedState=t;var c={value:t,getSnapshot:e};return l.queue=c,Rf(Ff.bind(null,a,c,A),[A]),a.flags|=2048,ur(9,Do(),Ef.bind(null,a,c,t,e),null),t},useId:function(){var A=It(),e=qe.identifierPrefix;if(Oe){var t=Fn,a=En;t=(a&~(1<<32-O(a)-1)).toString(32)+t,e="«"+e+"R"+t,t=Ho++,0<t&&(e+="H"+t.toString(32)),e+="»"}else t=mm++,e="«"+e+"r"+t.toString(32)+"»";return A.memoizedState=e},useHostTransitionStatus:fc,useFormState:If,useActionState:If,useOptimistic:function(A){var e=It();e.memoizedState=e.baseState=A;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=hc.bind(null,Be,!0,t),t.dispatch=e,[A,e]},useMemoCache:rc,useCacheRefresh:function(){return It().memoizedState=vm.bind(null,Be)}},ih={readContext:St,use:No,useCallback:Jf,useContext:St,useEffect:_f,useImperativeHandle:Vf,useInsertionEffect:Gf,useLayoutEffect:Yf,useMemo:Zf,useReducer:Mo,useRef:zf,useState:function(){return Mo(kn)},useDebugValue:cc,useDeferredValue:function(A,e){var t=ht();return $f(t,Ge.memoizedState,A,e)},useTransition:function(){var A=Mo(kn)[0],e=ht().memoizedState;return[typeof A=="boolean"?A:di(A),e]},useSyncExternalStore:Qf,useId:Ah,useHostTransitionStatus:fc,useFormState:Lf,useActionState:Lf,useOptimistic:function(A,e){var t=ht();return kf(t,Ge,A,e)},useMemoCache:rc,useCacheRefresh:eh},Qm={readContext:St,use:No,useCallback:Jf,useContext:St,useEffect:_f,useImperativeHandle:Vf,useInsertionEffect:Gf,useLayoutEffect:Yf,useMemo:Zf,useReducer:oc,useRef:zf,useState:function(){return oc(kn)},useDebugValue:cc,useDeferredValue:function(A,e){var t=ht();return Ge===null?dc(t,A,e):$f(t,Ge.memoizedState,A,e)},useTransition:function(){var A=oc(kn)[0],e=ht().memoizedState;return[typeof A=="boolean"?A:di(A),e]},useSyncExternalStore:Qf,useId:Ah,useHostTransitionStatus:fc,useFormState:Kf,useActionState:Kf,useOptimistic:function(A,e){var t=ht();return Ge!==null?kf(t,Ge,A,e):(t.baseState=A,[A,t.queue.dispatch])},useMemoCache:rc,useCacheRefresh:eh},fr=null,hi=0;function Oo(A){var e=hi;return hi+=1,fr===null&&(fr=[]),xf(fr,A,e)}function gi(A,e){e=e.props.ref,A.ref=e!==void 0?e:null}function Ko(A,e){throw e.$$typeof===F?Error(o(525)):(A=Object.prototype.toString.call(e),Error(o(31,A==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":A)))}function oh(A){var e=A._init;return e(A._payload)}function sh(A){function e(Z,R){if(A){var AA=Z.deletions;AA===null?(Z.deletions=[R],Z.flags|=16):AA.push(R)}}function t(Z,R){if(!A)return null;for(;R!==null;)e(Z,R),R=R.sibling;return null}function a(Z){for(var R=new Map;Z!==null;)Z.key!==null?R.set(Z.key,Z):R.set(Z.index,Z),Z=Z.sibling;return R}function l(Z,R){return Z=Un(Z,R),Z.index=0,Z.sibling=null,Z}function c(Z,R,AA){return Z.index=AA,A?(AA=Z.alternate,AA!==null?(AA=AA.index,AA<R?(Z.flags|=67108866,R):AA):(Z.flags|=67108866,R)):(Z.flags|=1048576,R)}function p(Z){return A&&Z.alternate===null&&(Z.flags|=67108866),Z}function y(Z,R,AA,UA){return R===null||R.tag!==6?(R=Dl(AA,Z.mode,UA),R.return=Z,R):(R=l(R,AA),R.return=Z,R)}function M(Z,R,AA,UA){var Ae=AA.type;return Ae===eA?BA(Z,R,AA.props.children,UA,AA.key):R!==null&&(R.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===V&&oh(Ae)===R.type)?(R=l(R,AA.props),gi(R,AA),R.return=Z,R):(R=yo(AA.type,AA.key,AA.props,null,Z.mode,UA),gi(R,AA),R.return=Z,R)}function tA(Z,R,AA,UA){return R===null||R.tag!==4||R.stateNode.containerInfo!==AA.containerInfo||R.stateNode.implementation!==AA.implementation?(R=Tl(AA,Z.mode,UA),R.return=Z,R):(R=l(R,AA.children||[]),R.return=Z,R)}function BA(Z,R,AA,UA,Ae){return R===null||R.tag!==7?(R=Fa(AA,Z.mode,UA,Ae),R.return=Z,R):(R=l(R,AA),R.return=Z,R)}function kA(Z,R,AA){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=Dl(""+R,Z.mode,AA),R.return=Z,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case T:return AA=yo(R.type,R.key,R.props,null,Z.mode,AA),gi(AA,R),AA.return=Z,AA;case oA:return R=Tl(R,Z.mode,AA),R.return=Z,R;case V:var UA=R._init;return R=UA(R._payload),kA(Z,R,AA)}if(JA(R)||CA(R))return R=Fa(R,Z.mode,AA,null),R.return=Z,R;if(typeof R.then=="function")return kA(Z,Oo(R),AA);if(R.$$typeof===XA)return kA(Z,Uo(Z,R),AA);Ko(Z,R)}return null}function aA(Z,R,AA,UA){var Ae=R!==null?R.key:null;if(typeof AA=="string"&&AA!==""||typeof AA=="number"||typeof AA=="bigint")return Ae!==null?null:y(Z,R,""+AA,UA);if(typeof AA=="object"&&AA!==null){switch(AA.$$typeof){case T:return AA.key===Ae?M(Z,R,AA,UA):null;case oA:return AA.key===Ae?tA(Z,R,AA,UA):null;case V:return Ae=AA._init,AA=Ae(AA._payload),aA(Z,R,AA,UA)}if(JA(AA)||CA(AA))return Ae!==null?null:BA(Z,R,AA,UA,null);if(typeof AA.then=="function")return aA(Z,R,Oo(AA),UA);if(AA.$$typeof===XA)return aA(Z,R,Uo(Z,AA),UA);Ko(Z,AA)}return null}function iA(Z,R,AA,UA,Ae){if(typeof UA=="string"&&UA!==""||typeof UA=="number"||typeof UA=="bigint")return Z=Z.get(AA)||null,y(R,Z,""+UA,Ae);if(typeof UA=="object"&&UA!==null){switch(UA.$$typeof){case T:return Z=Z.get(UA.key===null?AA:UA.key)||null,M(R,Z,UA,Ae);case oA:return Z=Z.get(UA.key===null?AA:UA.key)||null,tA(R,Z,UA,Ae);case V:var we=UA._init;return UA=we(UA._payload),iA(Z,R,AA,UA,Ae)}if(JA(UA)||CA(UA))return Z=Z.get(AA)||null,BA(R,Z,UA,Ae,null);if(typeof UA.then=="function")return iA(Z,R,AA,Oo(UA),Ae);if(UA.$$typeof===XA)return iA(Z,R,AA,Uo(R,UA),Ae);Ko(R,UA)}return null}function de(Z,R,AA,UA){for(var Ae=null,we=null,ae=R,le=R=0,vt=null;ae!==null&&le<AA.length;le++){ae.index>le?(vt=ae,ae=null):vt=ae.sibling;var Me=aA(Z,ae,AA[le],UA);if(Me===null){ae===null&&(ae=vt);break}A&&ae&&Me.alternate===null&&e(Z,ae),R=c(Me,R,le),we===null?Ae=Me:we.sibling=Me,we=Me,ae=vt}if(le===AA.length)return t(Z,ae),Oe&&Sa(Z,le),Ae;if(ae===null){for(;le<AA.length;le++)ae=kA(Z,AA[le],UA),ae!==null&&(R=c(ae,R,le),we===null?Ae=ae:we.sibling=ae,we=ae);return Oe&&Sa(Z,le),Ae}for(ae=a(ae);le<AA.length;le++)vt=iA(ae,Z,le,AA[le],UA),vt!==null&&(A&&vt.alternate!==null&&ae.delete(vt.key===null?le:vt.key),R=c(vt,R,le),we===null?Ae=vt:we.sibling=vt,we=vt);return A&&ae.forEach(function(ua){return e(Z,ua)}),Oe&&Sa(Z,le),Ae}function se(Z,R,AA,UA){if(AA==null)throw Error(o(151));for(var Ae=null,we=null,ae=R,le=R=0,vt=null,Me=AA.next();ae!==null&&!Me.done;le++,Me=AA.next()){ae.index>le?(vt=ae,ae=null):vt=ae.sibling;var ua=aA(Z,ae,Me.value,UA);if(ua===null){ae===null&&(ae=vt);break}A&&ae&&ua.alternate===null&&e(Z,ae),R=c(ua,R,le),we===null?Ae=ua:we.sibling=ua,we=ua,ae=vt}if(Me.done)return t(Z,ae),Oe&&Sa(Z,le),Ae;if(ae===null){for(;!Me.done;le++,Me=AA.next())Me=kA(Z,Me.value,UA),Me!==null&&(R=c(Me,R,le),we===null?Ae=Me:we.sibling=Me,we=Me);return Oe&&Sa(Z,le),Ae}for(ae=a(ae);!Me.done;le++,Me=AA.next())Me=iA(ae,Z,le,Me.value,UA),Me!==null&&(A&&Me.alternate!==null&&ae.delete(Me.key===null?le:Me.key),R=c(Me,R,le),we===null?Ae=Me:we.sibling=Me,we=Me);return A&&ae.forEach(function(Ub){return e(Z,Ub)}),Oe&&Sa(Z,le),Ae}function Xe(Z,R,AA,UA){if(typeof AA=="object"&&AA!==null&&AA.type===eA&&AA.key===null&&(AA=AA.props.children),typeof AA=="object"&&AA!==null){switch(AA.$$typeof){case T:A:{for(var Ae=AA.key;R!==null;){if(R.key===Ae){if(Ae=AA.type,Ae===eA){if(R.tag===7){t(Z,R.sibling),UA=l(R,AA.props.children),UA.return=Z,Z=UA;break A}}else if(R.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===V&&oh(Ae)===R.type){t(Z,R.sibling),UA=l(R,AA.props),gi(UA,AA),UA.return=Z,Z=UA;break A}t(Z,R);break}else e(Z,R);R=R.sibling}AA.type===eA?(UA=Fa(AA.props.children,Z.mode,UA,AA.key),UA.return=Z,Z=UA):(UA=yo(AA.type,AA.key,AA.props,null,Z.mode,UA),gi(UA,AA),UA.return=Z,Z=UA)}return p(Z);case oA:A:{for(Ae=AA.key;R!==null;){if(R.key===Ae)if(R.tag===4&&R.stateNode.containerInfo===AA.containerInfo&&R.stateNode.implementation===AA.implementation){t(Z,R.sibling),UA=l(R,AA.children||[]),UA.return=Z,Z=UA;break A}else{t(Z,R);break}else e(Z,R);R=R.sibling}UA=Tl(AA,Z.mode,UA),UA.return=Z,Z=UA}return p(Z);case V:return Ae=AA._init,AA=Ae(AA._payload),Xe(Z,R,AA,UA)}if(JA(AA))return de(Z,R,AA,UA);if(CA(AA)){if(Ae=CA(AA),typeof Ae!="function")throw Error(o(150));return AA=Ae.call(AA),se(Z,R,AA,UA)}if(typeof AA.then=="function")return Xe(Z,R,Oo(AA),UA);if(AA.$$typeof===XA)return Xe(Z,R,Uo(Z,AA),UA);Ko(Z,AA)}return typeof AA=="string"&&AA!==""||typeof AA=="number"||typeof AA=="bigint"?(AA=""+AA,R!==null&&R.tag===6?(t(Z,R.sibling),UA=l(R,AA),UA.return=Z,Z=UA):(t(Z,R),UA=Dl(AA,Z.mode,UA),UA.return=Z,Z=UA),p(Z)):t(Z,R)}return function(Z,R,AA,UA){try{hi=0;var Ae=Xe(Z,R,AA,UA);return fr=null,Ae}catch(ae){if(ae===ri||ae===Fo)throw ae;var we=Rt(29,ae,null,Z.mode);return we.lanes=UA,we.return=Z,we}finally{}}}var hr=sh(!0),lh=sh(!1),An=J(null),gn=null;function Wn(A){var e=A.alternate;lA(mt,mt.current&1),lA(An,A),gn===null&&(e===null||lr.current!==null||e.memoizedState!==null)&&(gn=A)}function ch(A){if(A.tag===22){if(lA(mt,mt.current),lA(An,A),gn===null){var e=A.alternate;e!==null&&e.memoizedState!==null&&(gn=A)}}else qn()}function qn(){lA(mt,mt.current),lA(An,An.current)}function Hn(A){$(An),gn===A&&(gn=null),$(mt)}var mt=J(0);function zo(A){for(var e=A;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||ad(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function gc(A,e,t,a){e=A.memoizedState,t=t(a,e),t=t==null?e:C({},e,t),A.memoizedState=t,A.lanes===0&&(A.updateQueue.baseState=t)}var pc={enqueueSetState:function(A,e,t){A=A._reactInternals;var a=Xt(),l=Jn(a);l.payload=e,t!=null&&(l.callback=t),e=Zn(A,l,a),e!==null&&(Vt(e,A,a),oi(e,A,a))},enqueueReplaceState:function(A,e,t){A=A._reactInternals;var a=Xt(),l=Jn(a);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=Zn(A,l,a),e!==null&&(Vt(e,A,a),oi(e,A,a))},enqueueForceUpdate:function(A,e){A=A._reactInternals;var t=Xt(),a=Jn(t);a.tag=2,e!=null&&(a.callback=e),e=Zn(A,a,t),e!==null&&(Vt(e,A,t),oi(e,A,t))}};function dh(A,e,t,a,l,c,p){return A=A.stateNode,typeof A.shouldComponentUpdate=="function"?A.shouldComponentUpdate(a,c,p):e.prototype&&e.prototype.isPureReactComponent?!Wr(t,a)||!Wr(l,c):!0}function uh(A,e,t,a){A=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==A&&pc.enqueueReplaceState(e,e.state,null)}function Ia(A,e){var t=e;if("ref"in e){t={};for(var a in e)a!=="ref"&&(t[a]=e[a])}if(A=A.defaultProps){t===e&&(t=C({},t));for(var l in A)t[l]===void 0&&(t[l]=A[l])}return t}var Ro=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function fh(A){Ro(A)}function hh(A){console.error(A)}function gh(A){Ro(A)}function _o(A,e){try{var t=A.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function ph(A,e,t){try{var a=A.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function xc(A,e,t){return t=Jn(t),t.tag=3,t.payload={element:null},t.callback=function(){_o(A,e)},t}function xh(A){return A=Jn(A),A.tag=3,A}function mh(A,e,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=a.value;A.payload=function(){return l(c)},A.callback=function(){ph(e,t,a)}}var p=t.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(A.callback=function(){ph(e,t,a),typeof l!="function"&&(aa===null?aa=new Set([this]):aa.add(this));var y=a.stack;this.componentDidCatch(a.value,{componentStack:y!==null?y:""})})}function Um(A,e,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=t.alternate,e!==null&&ti(e,t,l,!0),t=An.current,t!==null){switch(t.tag){case 13:return gn===null?zc():t.alternate===null&&ot===0&&(ot=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===Xl?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([a]):e.add(a),_c(A,a,l)),!1;case 22:return t.flags|=65536,a===Xl?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([a]):t.add(a)),_c(A,a,l)),!1}throw Error(o(435,t.tag))}return _c(A,a,l),zc(),!1}if(Oe)return e=An.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,a!==Ol&&(A=Error(o(422),{cause:a}),ei($t(A,t)))):(a!==Ol&&(e=Error(o(423),{cause:a}),ei($t(e,t))),A=A.current.alternate,A.flags|=65536,l&=-l,A.lanes|=l,a=$t(a,t),l=xc(A.stateNode,a,l),Zl(A,l),ot!==4&&(ot=2)),!1;var c=Error(o(520),{cause:a});if(c=$t(c,t),yi===null?yi=[c]:yi.push(c),ot!==4&&(ot=2),e===null)return!0;a=$t(a,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,A=l&-l,t.lanes|=A,A=xc(t.stateNode,a,A),Zl(t,A),!1;case 1:if(e=t.type,c=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(aa===null||!aa.has(c))))return t.flags|=65536,l&=-l,t.lanes|=l,l=xh(l),mh(l,A,t,a),Zl(t,l),!1}t=t.return}while(t!==null);return!1}var bh=Error(o(461)),wt=!1;function Qt(A,e,t,a){e.child=A===null?lh(e,null,t,a):hr(e,A.child,t,a)}function Bh(A,e,t,a,l){t=t.render;var c=e.ref;if("ref"in a){var p={};for(var y in a)y!=="ref"&&(p[y]=a[y])}else p=a;return Ma(e),a=Ac(A,e,t,p,c,l),y=ec(),A!==null&&!wt?(tc(A,e,l),Nn(A,e,l)):(Oe&&y&&Il(e),e.flags|=1,Qt(A,e,a,l),e.child)}function wh(A,e,t,a,l){if(A===null){var c=t.type;return typeof c=="function"&&!Ml(c)&&c.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=c,yh(A,e,c,a,l)):(A=yo(t.type,null,a,e,e.mode,l),A.ref=e.ref,A.return=e,e.child=A)}if(c=A.child,!Qc(A,l)){var p=c.memoizedProps;if(t=t.compare,t=t!==null?t:Wr,t(p,a)&&A.ref===e.ref)return Nn(A,e,l)}return e.flags|=1,A=Un(c,a),A.ref=e.ref,A.return=e,e.child=A}function yh(A,e,t,a,l){if(A!==null){var c=A.memoizedProps;if(Wr(c,a)&&A.ref===e.ref)if(wt=!1,e.pendingProps=a=c,Qc(A,l))(A.flags&131072)!==0&&(wt=!0);else return e.lanes=A.lanes,Nn(A,e,l)}return mc(A,e,t,a,l)}function vh(A,e,t){var a=e.pendingProps,l=a.children,c=A!==null?A.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=c!==null?c.baseLanes|t:t,A!==null){for(l=e.child=A.child,c=0;l!==null;)c=c|l.lanes|l.childLanes,l=l.sibling;e.childLanes=c&~a}else e.childLanes=0,e.child=null;return Ch(A,e,a,t)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},A!==null&&Eo(e,c!==null?c.cachePool:null),c!==null?yf(e,c):Wl(),ch(e);else return e.lanes=e.childLanes=536870912,Ch(A,e,c!==null?c.baseLanes|t:t,t)}else c!==null?(Eo(e,c.cachePool),yf(e,c),qn(),e.memoizedState=null):(A!==null&&Eo(e,null),Wl(),qn());return Qt(A,e,l,t),e.child}function Ch(A,e,t,a){var l=Yl();return l=l===null?null:{parent:xt._currentValue,pool:l},e.memoizedState={baseLanes:t,cachePool:l},A!==null&&Eo(e,null),Wl(),ch(e),A!==null&&ti(A,e,a,!0),null}function Go(A,e){var t=e.ref;if(t===null)A!==null&&A.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(o(284));(A===null||A.ref!==t)&&(e.flags|=4194816)}}function mc(A,e,t,a,l){return Ma(e),t=Ac(A,e,t,a,void 0,l),a=ec(),A!==null&&!wt?(tc(A,e,l),Nn(A,e,l)):(Oe&&a&&Il(e),e.flags|=1,Qt(A,e,t,l),e.child)}function Qh(A,e,t,a,l,c){return Ma(e),e.updateQueue=null,t=Cf(e,a,t,l),vf(A),a=ec(),A!==null&&!wt?(tc(A,e,c),Nn(A,e,c)):(Oe&&a&&Il(e),e.flags|=1,Qt(A,e,t,c),e.child)}function Uh(A,e,t,a,l){if(Ma(e),e.stateNode===null){var c=ar,p=t.contextType;typeof p=="object"&&p!==null&&(c=St(p)),c=new t(a,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=pc,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=a,c.state=e.memoizedState,c.refs={},Vl(e),p=t.contextType,c.context=typeof p=="object"&&p!==null?St(p):ar,c.state=e.memoizedState,p=t.getDerivedStateFromProps,typeof p=="function"&&(gc(e,t,p,a),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&pc.enqueueReplaceState(c,c.state,null),li(e,a,c,l),si(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(A===null){c=e.stateNode;var y=e.memoizedProps,M=Ia(t,y);c.props=M;var tA=c.context,BA=t.contextType;p=ar,typeof BA=="object"&&BA!==null&&(p=St(BA));var kA=t.getDerivedStateFromProps;BA=typeof kA=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=e.pendingProps!==y,BA||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||tA!==p)&&uh(e,c,a,p),Vn=!1;var aA=e.memoizedState;c.state=aA,li(e,a,c,l),si(),tA=e.memoizedState,y||aA!==tA||Vn?(typeof kA=="function"&&(gc(e,t,kA,a),tA=e.memoizedState),(M=Vn||dh(e,t,M,a,aA,tA,p))?(BA||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=tA),c.props=a,c.state=tA,c.context=p,a=M):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{c=e.stateNode,Jl(A,e),p=e.memoizedProps,BA=Ia(t,p),c.props=BA,kA=e.pendingProps,aA=c.context,tA=t.contextType,M=ar,typeof tA=="object"&&tA!==null&&(M=St(tA)),y=t.getDerivedStateFromProps,(tA=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==kA||aA!==M)&&uh(e,c,a,M),Vn=!1,aA=e.memoizedState,c.state=aA,li(e,a,c,l),si();var iA=e.memoizedState;p!==kA||aA!==iA||Vn||A!==null&&A.dependencies!==null&&Qo(A.dependencies)?(typeof y=="function"&&(gc(e,t,y,a),iA=e.memoizedState),(BA=Vn||dh(e,t,BA,a,aA,iA,M)||A!==null&&A.dependencies!==null&&Qo(A.dependencies))?(tA||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,iA,M),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,iA,M)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===A.memoizedProps&&aA===A.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===A.memoizedProps&&aA===A.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=iA),c.props=a,c.state=iA,c.context=M,a=BA):(typeof c.componentDidUpdate!="function"||p===A.memoizedProps&&aA===A.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===A.memoizedProps&&aA===A.memoizedState||(e.flags|=1024),a=!1)}return c=a,Go(A,e),a=(e.flags&128)!==0,c||a?(c=e.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,A!==null&&a?(e.child=hr(e,A.child,null,l),e.child=hr(e,null,t,l)):Qt(A,e,t,l),e.memoizedState=c.state,A=e.child):A=Nn(A,e,l),A}function Eh(A,e,t,a){return Ai(),e.flags|=256,Qt(A,e,t,a),e.child}var bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bc(A){return{baseLanes:A,cachePool:hf()}}function wc(A,e,t){return A=A!==null?A.childLanes&~t:0,e&&(A|=en),A}function Fh(A,e,t){var a=e.pendingProps,l=!1,c=(e.flags&128)!==0,p;if((p=c)||(p=A!==null&&A.memoizedState===null?!1:(mt.current&2)!==0),p&&(l=!0,e.flags&=-129),p=(e.flags&32)!==0,e.flags&=-33,A===null){if(Oe){if(l?Wn(e):qn(),Oe){var y=it,M;if(M=y){A:{for(M=y,y=hn;M.nodeType!==8;){if(!y){y=null;break A}if(M=dn(M.nextSibling),M===null){y=null;break A}}y=M}y!==null?(e.memoizedState={dehydrated:y,treeContext:ja!==null?{id:En,overflow:Fn}:null,retryLane:536870912,hydrationErrors:null},M=Rt(18,null,null,0),M.stateNode=y,M.return=e,e.child=M,Mt=e,it=null,M=!0):M=!1}M||Ha(e)}if(y=e.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return ad(y)?e.lanes=32:e.lanes=536870912,null;Hn(e)}return y=a.children,a=a.fallback,l?(qn(),l=e.mode,y=Yo({mode:"hidden",children:y},l),a=Fa(a,l,t,null),y.return=e,a.return=e,y.sibling=a,e.child=y,l=e.child,l.memoizedState=Bc(t),l.childLanes=wc(A,p,t),e.memoizedState=bc,a):(Wn(e),yc(e,y))}if(M=A.memoizedState,M!==null&&(y=M.dehydrated,y!==null)){if(c)e.flags&256?(Wn(e),e.flags&=-257,e=vc(A,e,t)):e.memoizedState!==null?(qn(),e.child=A.child,e.flags|=128,e=null):(qn(),l=a.fallback,y=e.mode,a=Yo({mode:"visible",children:a.children},y),l=Fa(l,y,t,null),l.flags|=2,a.return=e,l.return=e,a.sibling=l,e.child=a,hr(e,A.child,null,t),a=e.child,a.memoizedState=Bc(t),a.childLanes=wc(A,p,t),e.memoizedState=bc,e=l);else if(Wn(e),ad(y)){if(p=y.nextSibling&&y.nextSibling.dataset,p)var tA=p.dgst;p=tA,a=Error(o(419)),a.stack="",a.digest=p,ei({value:a,source:null,stack:null}),e=vc(A,e,t)}else if(wt||ti(A,e,t,!1),p=(t&A.childLanes)!==0,wt||p){if(p=qe,p!==null&&(a=t&-t,a=(a&42)!==0?1:Le(a),a=(a&(p.suspendedLanes|t))!==0?0:a,a!==0&&a!==M.retryLane))throw M.retryLane=a,nr(A,a),Vt(p,A,a),bh;y.data==="$?"||zc(),e=vc(A,e,t)}else y.data==="$?"?(e.flags|=192,e.child=A.child,e=null):(A=M.treeContext,it=dn(y.nextSibling),Mt=e,Oe=!0,ka=null,hn=!1,A!==null&&(qt[Pt++]=En,qt[Pt++]=Fn,qt[Pt++]=ja,En=A.id,Fn=A.overflow,ja=e),e=yc(e,a.children),e.flags|=4096);return e}return l?(qn(),l=a.fallback,y=e.mode,M=A.child,tA=M.sibling,a=Un(M,{mode:"hidden",children:a.children}),a.subtreeFlags=M.subtreeFlags&65011712,tA!==null?l=Un(tA,l):(l=Fa(l,y,t,null),l.flags|=2),l.return=e,a.return=e,a.sibling=l,e.child=a,a=l,l=e.child,y=A.child.memoizedState,y===null?y=Bc(t):(M=y.cachePool,M!==null?(tA=xt._currentValue,M=M.parent!==tA?{parent:tA,pool:tA}:M):M=hf(),y={baseLanes:y.baseLanes|t,cachePool:M}),l.memoizedState=y,l.childLanes=wc(A,p,t),e.memoizedState=bc,a):(Wn(e),t=A.child,A=t.sibling,t=Un(t,{mode:"visible",children:a.children}),t.return=e,t.sibling=null,A!==null&&(p=e.deletions,p===null?(e.deletions=[A],e.flags|=16):p.push(A)),e.child=t,e.memoizedState=null,t)}function yc(A,e){return e=Yo({mode:"visible",children:e},A.mode),e.return=A,A.child=e}function Yo(A,e){return A=Rt(22,A,null,e),A.lanes=0,A.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},A}function vc(A,e,t){return hr(e,A.child,null,t),A=yc(e,e.pendingProps.children),A.flags|=2,e.memoizedState=null,A}function jh(A,e,t){A.lanes|=e;var a=A.alternate;a!==null&&(a.lanes|=e),zl(A.return,e,t)}function Cc(A,e,t,a,l){var c=A.memoizedState;c===null?A.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=t,c.tailMode=l)}function Sh(A,e,t){var a=e.pendingProps,l=a.revealOrder,c=a.tail;if(Qt(A,e,a.children,t),a=mt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(A!==null&&(A.flags&128)!==0)A:for(A=e.child;A!==null;){if(A.tag===13)A.memoizedState!==null&&jh(A,t,e);else if(A.tag===19)jh(A,t,e);else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break A;for(;A.sibling===null;){if(A.return===null||A.return===e)break A;A=A.return}A.sibling.return=A.return,A=A.sibling}a&=1}switch(lA(mt,a),l){case"forwards":for(t=e.child,l=null;t!==null;)A=t.alternate,A!==null&&zo(A)===null&&(l=t),t=t.sibling;t=l,t===null?(l=e.child,e.child=null):(l=t.sibling,t.sibling=null),Cc(e,!1,l,t,c);break;case"backwards":for(t=null,l=e.child,e.child=null;l!==null;){if(A=l.alternate,A!==null&&zo(A)===null){e.child=l;break}A=l.sibling,l.sibling=t,t=l,l=A}Cc(e,!0,t,null,c);break;case"together":Cc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nn(A,e,t){if(A!==null&&(e.dependencies=A.dependencies),na|=e.lanes,(t&e.childLanes)===0)if(A!==null){if(ti(A,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(A!==null&&e.child!==A.child)throw Error(o(153));if(e.child!==null){for(A=e.child,t=Un(A,A.pendingProps),e.child=t,t.return=e;A.sibling!==null;)A=A.sibling,t=t.sibling=Un(A,A.pendingProps),t.return=e;t.sibling=null}return e.child}function Qc(A,e){return(A.lanes&e)!==0?!0:(A=A.dependencies,!!(A!==null&&Qo(A)))}function Em(A,e,t){switch(e.tag){case 3:HA(e,e.stateNode.containerInfo),Xn(e,xt,A.memoizedState.cache),Ai();break;case 27:case 5:L(e);break;case 4:HA(e,e.stateNode.containerInfo);break;case 10:Xn(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Wn(e),e.flags|=128,null):(t&e.child.childLanes)!==0?Fh(A,e,t):(Wn(e),A=Nn(A,e,t),A!==null?A.sibling:null);Wn(e);break;case 19:var l=(A.flags&128)!==0;if(a=(t&e.childLanes)!==0,a||(ti(A,e,t,!1),a=(t&e.childLanes)!==0),l){if(a)return Sh(A,e,t);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),lA(mt,mt.current),a)break;return null;case 22:case 23:return e.lanes=0,vh(A,e,t);case 24:Xn(e,xt,A.memoizedState.cache)}return Nn(A,e,t)}function kh(A,e,t){if(A!==null)if(A.memoizedProps!==e.pendingProps)wt=!0;else{if(!Qc(A,t)&&(e.flags&128)===0)return wt=!1,Em(A,e,t);wt=(A.flags&131072)!==0}else wt=!1,Oe&&(e.flags&1048576)!==0&&of(e,Co,e.index);switch(e.lanes=0,e.tag){case 16:A:{A=e.pendingProps;var a=e.elementType,l=a._init;if(a=l(a._payload),e.type=a,typeof a=="function")Ml(a)?(A=Ia(a,A),e.tag=1,e=Uh(null,e,a,A,t)):(e.tag=0,e=mc(null,e,a,A,t));else{if(a!=null){if(l=a.$$typeof,l===xA){e.tag=11,e=Bh(null,e,a,A,t);break A}else if(l===IA){e.tag=14,e=wh(null,e,a,A,t);break A}}throw e=$A(a)||a,Error(o(306,e,""))}}return e;case 0:return mc(A,e,e.type,e.pendingProps,t);case 1:return a=e.type,l=Ia(a,e.pendingProps),Uh(A,e,a,l,t);case 3:A:{if(HA(e,e.stateNode.containerInfo),A===null)throw Error(o(387));a=e.pendingProps;var c=e.memoizedState;l=c.element,Jl(A,e),li(e,a,null,t);var p=e.memoizedState;if(a=p.cache,Xn(e,xt,a),a!==c.cache&&Rl(e,[xt],t,!0),si(),a=p.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:p.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=Eh(A,e,a,t);break A}else if(a!==l){l=$t(Error(o(424)),e),ei(l),e=Eh(A,e,a,t);break A}else{switch(A=e.stateNode.containerInfo,A.nodeType){case 9:A=A.body;break;default:A=A.nodeName==="HTML"?A.ownerDocument.body:A}for(it=dn(A.firstChild),Mt=e,Oe=!0,ka=null,hn=!0,t=lh(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Ai(),a===l){e=Nn(A,e,t);break A}Qt(A,e,a,t)}e=e.child}return e;case 26:return Go(A,e),A===null?(t=Dg(e.type,null,e.pendingProps,null))?e.memoizedState=t:Oe||(t=e.type,A=e.pendingProps,a=rs(K.current).createElement(t),a[E]=e,a[D]=A,Et(a,t,A),u(a),e.stateNode=a):e.memoizedState=Dg(e.type,A.memoizedProps,e.pendingProps,A.memoizedState),null;case 27:return L(e),A===null&&Oe&&(a=e.stateNode=Hg(e.type,e.pendingProps,K.current),Mt=e,hn=!0,l=it,oa(e.type)?(rd=l,it=dn(a.firstChild)):it=l),Qt(A,e,e.pendingProps.children,t),Go(A,e),A===null&&(e.flags|=4194304),e.child;case 5:return A===null&&Oe&&((l=a=it)&&(a=eb(a,e.type,e.pendingProps,hn),a!==null?(e.stateNode=a,Mt=e,it=dn(a.firstChild),hn=!1,l=!0):l=!1),l||Ha(e)),L(e),l=e.type,c=e.pendingProps,p=A!==null?A.memoizedProps:null,a=c.children,ed(l,c)?a=null:p!==null&&ed(l,p)&&(e.flags|=32),e.memoizedState!==null&&(l=Ac(A,e,bm,null,null,t),ki._currentValue=l),Go(A,e),Qt(A,e,a,t),e.child;case 6:return A===null&&Oe&&((A=t=it)&&(t=tb(t,e.pendingProps,hn),t!==null?(e.stateNode=t,Mt=e,it=null,A=!0):A=!1),A||Ha(e)),null;case 13:return Fh(A,e,t);case 4:return HA(e,e.stateNode.containerInfo),a=e.pendingProps,A===null?e.child=hr(e,null,a,t):Qt(A,e,a,t),e.child;case 11:return Bh(A,e,e.type,e.pendingProps,t);case 7:return Qt(A,e,e.pendingProps,t),e.child;case 8:return Qt(A,e,e.pendingProps.children,t),e.child;case 12:return Qt(A,e,e.pendingProps.children,t),e.child;case 10:return a=e.pendingProps,Xn(e,e.type,a.value),Qt(A,e,a.children,t),e.child;case 9:return l=e.type._context,a=e.pendingProps.children,Ma(e),l=St(l),a=a(l),e.flags|=1,Qt(A,e,a,t),e.child;case 14:return wh(A,e,e.type,e.pendingProps,t);case 15:return yh(A,e,e.type,e.pendingProps,t);case 19:return Sh(A,e,t);case 31:return a=e.pendingProps,t=e.mode,a={mode:a.mode,children:a.children},A===null?(t=Yo(a,t),t.ref=e.ref,e.child=t,t.return=e,e=t):(t=Un(A.child,a),t.ref=e.ref,e.child=t,t.return=e,e=t),e;case 22:return vh(A,e,t);case 24:return Ma(e),a=St(xt),A===null?(l=Yl(),l===null&&(l=qe,c=_l(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=t),l=c),e.memoizedState={parent:a,cache:l},Vl(e),Xn(e,xt,l)):((A.lanes&t)!==0&&(Jl(A,e),li(e,null,null,t),si()),l=A.memoizedState,c=e.memoizedState,l.parent!==a?(l={parent:a,cache:a},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Xn(e,xt,a)):(a=c.cache,Xn(e,xt,a),a!==l.cache&&Rl(e,[xt],t,!0))),Qt(A,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Mn(A){A.flags|=4}function Hh(A,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)A.flags&=-16777217;else if(A.flags|=16777216,!Kg(e)){if(e=An.current,e!==null&&((He&4194048)===He?gn!==null:(He&62914560)!==He&&(He&536870912)===0||e!==gn))throw ii=Xl,gf;A.flags|=8192}}function Xo(A,e){e!==null&&(A.flags|=4),A.flags&16384&&(e=A.tag!==22?ke():536870912,A.lanes|=e,mr|=e)}function pi(A,e){if(!Oe)switch(A.tailMode){case"hidden":e=A.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?A.tail=null:t.sibling=null;break;case"collapsed":t=A.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||A.tail===null?A.tail=null:A.tail.sibling=null:a.sibling=null}}function at(A){var e=A.alternate!==null&&A.alternate.child===A.child,t=0,a=0;if(e)for(var l=A.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=A,l=l.sibling;else for(l=A.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=A,l=l.sibling;return A.subtreeFlags|=a,A.childLanes=t,e}function Fm(A,e,t){var a=e.pendingProps;switch(Ll(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return at(e),null;case 3:return t=e.stateNode,a=null,A!==null&&(a=A.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Sn(xt),bA(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(A===null||A.child===null)&&(Pr(e)?Mn(e):A===null||A.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,cf())),at(e),null;case 26:return t=e.memoizedState,A===null?(Mn(e),t!==null?(at(e),Hh(e,t)):(at(e),e.flags&=-16777217)):t?t!==A.memoizedState?(Mn(e),at(e),Hh(e,t)):(at(e),e.flags&=-16777217):(A.memoizedProps!==a&&Mn(e),at(e),e.flags&=-16777217),null;case 27:X(e),t=K.current;var l=e.type;if(A!==null&&e.stateNode!=null)A.memoizedProps!==a&&Mn(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return at(e),null}A=QA.current,Pr(e)?sf(e):(A=Hg(l,a,t),e.stateNode=A,Mn(e))}return at(e),null;case 5:if(X(e),t=e.type,A!==null&&e.stateNode!=null)A.memoizedProps!==a&&Mn(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return at(e),null}if(A=QA.current,Pr(e))sf(e);else{switch(l=rs(K.current),A){case 1:A=l.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:A=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":A=l.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":A=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":A=l.createElement("div"),A.innerHTML="<script><\/script>",A=A.removeChild(A.firstChild);break;case"select":A=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?A.multiple=!0:a.size&&(A.size=a.size);break;default:A=typeof a.is=="string"?l.createElement(t,{is:a.is}):l.createElement(t)}}A[E]=e,A[D]=a;A:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)A.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break A;for(;l.sibling===null;){if(l.return===null||l.return===e)break A;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=A;A:switch(Et(A,t,a),t){case"button":case"input":case"select":case"textarea":A=!!a.autoFocus;break A;case"img":A=!0;break A;default:A=!1}A&&Mn(e)}}return at(e),e.flags&=-16777217,null;case 6:if(A&&e.stateNode!=null)A.memoizedProps!==a&&Mn(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(o(166));if(A=K.current,Pr(e)){if(A=e.stateNode,t=e.memoizedProps,a=null,l=Mt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}A[E]=e,A=!!(A.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||Qg(A.nodeValue,t)),A||Ha(e)}else A=rs(A).createTextNode(a),A[E]=e,e.stateNode=A}return at(e),null;case 13:if(a=e.memoizedState,A===null||A.memoizedState!==null&&A.memoizedState.dehydrated!==null){if(l=Pr(e),a!==null&&a.dehydrated!==null){if(A===null){if(!l)throw Error(o(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[E]=e}else Ai(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;at(e),l=!1}else l=cf(),A!==null&&A.memoizedState!==null&&(A.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Hn(e),e):(Hn(e),null)}if(Hn(e),(e.flags&128)!==0)return e.lanes=t,e;if(t=a!==null,A=A!==null&&A.memoizedState!==null,t){a=e.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var c=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==l&&(a.flags|=2048)}return t!==A&&t&&(e.child.flags|=8192),Xo(e,e.updateQueue),at(e),null;case 4:return bA(),A===null&&$c(e.stateNode.containerInfo),at(e),null;case 10:return Sn(e.type),at(e),null;case 19:if($(mt),l=e.memoizedState,l===null)return at(e),null;if(a=(e.flags&128)!==0,c=l.rendering,c===null)if(a)pi(l,!1);else{if(ot!==0||A!==null&&(A.flags&128)!==0)for(A=e.child;A!==null;){if(c=zo(A),c!==null){for(e.flags|=128,pi(l,!1),A=c.updateQueue,e.updateQueue=A,Xo(e,A),e.subtreeFlags=0,A=t,t=e.child;t!==null;)rf(t,A),t=t.sibling;return lA(mt,mt.current&1|2),e.child}A=A.sibling}l.tail!==null&&pe()>Zo&&(e.flags|=128,a=!0,pi(l,!1),e.lanes=4194304)}else{if(!a)if(A=zo(c),A!==null){if(e.flags|=128,a=!0,A=A.updateQueue,e.updateQueue=A,Xo(e,A),pi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!Oe)return at(e),null}else 2*pe()-l.renderingStartTime>Zo&&t!==536870912&&(e.flags|=128,a=!0,pi(l,!1),e.lanes=4194304);l.isBackwards?(c.sibling=e.child,e.child=c):(A=l.last,A!==null?A.sibling=c:e.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=pe(),e.sibling=null,A=mt.current,lA(mt,a?A&1|2:A&1),e):(at(e),null);case 22:case 23:return Hn(e),ql(),a=e.memoizedState!==null,A!==null?A.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(t&536870912)!==0&&(e.flags&128)===0&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),t=e.updateQueue,t!==null&&Xo(e,t.retryQueue),t=null,A!==null&&A.memoizedState!==null&&A.memoizedState.cachePool!==null&&(t=A.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(e.flags|=2048),A!==null&&$(Da),null;case 24:return t=null,A!==null&&(t=A.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Sn(xt),at(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function jm(A,e){switch(Ll(e),e.tag){case 1:return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 3:return Sn(xt),bA(),A=e.flags,(A&65536)!==0&&(A&128)===0?(e.flags=A&-65537|128,e):null;case 26:case 27:case 5:return X(e),null;case 13:if(Hn(e),A=e.memoizedState,A!==null&&A.dehydrated!==null){if(e.alternate===null)throw Error(o(340));Ai()}return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 19:return $(mt),null;case 4:return bA(),null;case 10:return Sn(e.type),null;case 22:case 23:return Hn(e),ql(),A!==null&&$(Da),A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 24:return Sn(xt),null;case 25:return null;default:return null}}function Nh(A,e){switch(Ll(e),e.tag){case 3:Sn(xt),bA();break;case 26:case 27:case 5:X(e);break;case 4:bA();break;case 13:Hn(e);break;case 19:$(mt);break;case 10:Sn(e.type);break;case 22:case 23:Hn(e),ql(),A!==null&&$(Da);break;case 24:Sn(xt)}}function xi(A,e){try{var t=e.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&A)===A){a=void 0;var c=t.create,p=t.inst;a=c(),p.destroy=a}t=t.next}while(t!==l)}}catch(y){$e(e,e.return,y)}}function Pn(A,e,t){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var c=l.next;a=c;do{if((a.tag&A)===A){var p=a.inst,y=p.destroy;if(y!==void 0){p.destroy=void 0,l=e;var M=t,tA=y;try{tA()}catch(BA){$e(l,M,BA)}}}a=a.next}while(a!==c)}}catch(BA){$e(e,e.return,BA)}}function Mh(A){var e=A.updateQueue;if(e!==null){var t=A.stateNode;try{wf(e,t)}catch(a){$e(A,A.return,a)}}}function Dh(A,e,t){t.props=Ia(A.type,A.memoizedProps),t.state=A.memoizedState;try{t.componentWillUnmount()}catch(a){$e(A,e,a)}}function mi(A,e){try{var t=A.ref;if(t!==null){switch(A.tag){case 26:case 27:case 5:var a=A.stateNode;break;case 30:a=A.stateNode;break;default:a=A.stateNode}typeof t=="function"?A.refCleanup=t(a):t.current=a}}catch(l){$e(A,e,l)}}function pn(A,e){var t=A.ref,a=A.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){$e(A,e,l)}finally{A.refCleanup=null,A=A.alternate,A!=null&&(A.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){$e(A,e,l)}else t.current=null}function Th(A){var e=A.type,t=A.memoizedProps,a=A.stateNode;try{A:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break A;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){$e(A,A.return,l)}}function Uc(A,e,t){try{var a=A.stateNode;$m(a,A.type,t,e),a[D]=e}catch(l){$e(A,A.return,l)}}function Ih(A){return A.tag===5||A.tag===3||A.tag===26||A.tag===27&&oa(A.type)||A.tag===4}function Ec(A){A:for(;;){for(;A.sibling===null;){if(A.return===null||Ih(A.return))return null;A=A.return}for(A.sibling.return=A.return,A=A.sibling;A.tag!==5&&A.tag!==6&&A.tag!==18;){if(A.tag===27&&oa(A.type)||A.flags&2||A.child===null||A.tag===4)continue A;A.child.return=A,A=A.child}if(!(A.flags&2))return A.stateNode}}function Fc(A,e,t){var a=A.tag;if(a===5||a===6)A=A.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(A,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(A),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=as));else if(a!==4&&(a===27&&oa(A.type)&&(t=A.stateNode,e=null),A=A.child,A!==null))for(Fc(A,e,t),A=A.sibling;A!==null;)Fc(A,e,t),A=A.sibling}function Vo(A,e,t){var a=A.tag;if(a===5||a===6)A=A.stateNode,e?t.insertBefore(A,e):t.appendChild(A);else if(a!==4&&(a===27&&oa(A.type)&&(t=A.stateNode),A=A.child,A!==null))for(Vo(A,e,t),A=A.sibling;A!==null;)Vo(A,e,t),A=A.sibling}function Lh(A){var e=A.stateNode,t=A.memoizedProps;try{for(var a=A.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Et(e,a,t),e[E]=A,e[D]=t}catch(c){$e(A,A.return,c)}}var Dn=!1,lt=!1,jc=!1,Oh=typeof WeakSet=="function"?WeakSet:Set,yt=null;function Sm(A,e){if(A=A.containerInfo,Pc=ds,A=Zu(A),El(A)){if("selectionStart"in A)var t={start:A.selectionStart,end:A.selectionEnd};else A:{t=(t=A.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{t.nodeType,c.nodeType}catch{t=null;break A}var p=0,y=-1,M=-1,tA=0,BA=0,kA=A,aA=null;e:for(;;){for(var iA;kA!==t||l!==0&&kA.nodeType!==3||(y=p+l),kA!==c||a!==0&&kA.nodeType!==3||(M=p+a),kA.nodeType===3&&(p+=kA.nodeValue.length),(iA=kA.firstChild)!==null;)aA=kA,kA=iA;for(;;){if(kA===A)break e;if(aA===t&&++tA===l&&(y=p),aA===c&&++BA===a&&(M=p),(iA=kA.nextSibling)!==null)break;kA=aA,aA=kA.parentNode}kA=iA}t=y===-1||M===-1?null:{start:y,end:M}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ad={focusedElem:A,selectionRange:t},ds=!1,yt=e;yt!==null;)if(e=yt,A=e.child,(e.subtreeFlags&1024)!==0&&A!==null)A.return=e,yt=A;else for(;yt!==null;){switch(e=yt,c=e.alternate,A=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((A&1024)!==0&&c!==null){A=void 0,t=e,l=c.memoizedProps,c=c.memoizedState,a=t.stateNode;try{var de=Ia(t.type,l,t.elementType===t.type);A=a.getSnapshotBeforeUpdate(de,c),a.__reactInternalSnapshotBeforeUpdate=A}catch(se){$e(t,t.return,se)}}break;case 3:if((A&1024)!==0){if(A=e.stateNode.containerInfo,t=A.nodeType,t===9)nd(A);else if(t===1)switch(A.nodeName){case"HEAD":case"HTML":case"BODY":nd(A);break;default:A.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((A&1024)!==0)throw Error(o(163))}if(A=e.sibling,A!==null){A.return=e.return,yt=A;break}yt=e.return}}function Kh(A,e,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Aa(A,t),a&4&&xi(5,t);break;case 1:if(Aa(A,t),a&4)if(A=t.stateNode,e===null)try{A.componentDidMount()}catch(p){$e(t,t.return,p)}else{var l=Ia(t.type,e.memoizedProps);e=e.memoizedState;try{A.componentDidUpdate(l,e,A.__reactInternalSnapshotBeforeUpdate)}catch(p){$e(t,t.return,p)}}a&64&&Mh(t),a&512&&mi(t,t.return);break;case 3:if(Aa(A,t),a&64&&(A=t.updateQueue,A!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{wf(A,e)}catch(p){$e(t,t.return,p)}}break;case 27:e===null&&a&4&&Lh(t);case 26:case 5:Aa(A,t),e===null&&a&4&&Th(t),a&512&&mi(t,t.return);break;case 12:Aa(A,t);break;case 13:Aa(A,t),a&4&&_h(A,t),a&64&&(A=t.memoizedState,A!==null&&(A=A.dehydrated,A!==null&&(t=Om.bind(null,t),nb(A,t))));break;case 22:if(a=t.memoizedState!==null||Dn,!a){e=e!==null&&e.memoizedState!==null||lt,l=Dn;var c=lt;Dn=a,(lt=e)&&!c?ea(A,t,(t.subtreeFlags&8772)!==0):Aa(A,t),Dn=l,lt=c}break;case 30:break;default:Aa(A,t)}}function zh(A){var e=A.alternate;e!==null&&(A.alternate=null,zh(e)),A.child=null,A.deletions=null,A.sibling=null,A.tag===5&&(e=A.stateNode,e!==null&&z(e)),A.stateNode=null,A.return=null,A.dependencies=null,A.memoizedProps=null,A.memoizedState=null,A.pendingProps=null,A.stateNode=null,A.updateQueue=null}var et=null,Lt=!1;function Tn(A,e,t){for(t=t.child;t!==null;)Rh(A,e,t),t=t.sibling}function Rh(A,e,t){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(Fe,t)}catch{}switch(t.tag){case 26:lt||pn(t,e),Tn(A,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:lt||pn(t,e);var a=et,l=Lt;oa(t.type)&&(et=t.stateNode,Lt=!1),Tn(A,e,t),Ei(t.stateNode),et=a,Lt=l;break;case 5:lt||pn(t,e);case 6:if(a=et,l=Lt,et=null,Tn(A,e,t),et=a,Lt=l,et!==null)if(Lt)try{(et.nodeType===9?et.body:et.nodeName==="HTML"?et.ownerDocument.body:et).removeChild(t.stateNode)}catch(c){$e(t,e,c)}else try{et.removeChild(t.stateNode)}catch(c){$e(t,e,c)}break;case 18:et!==null&&(Lt?(A=et,Sg(A.nodeType===9?A.body:A.nodeName==="HTML"?A.ownerDocument.body:A,t.stateNode),Di(A)):Sg(et,t.stateNode));break;case 4:a=et,l=Lt,et=t.stateNode.containerInfo,Lt=!0,Tn(A,e,t),et=a,Lt=l;break;case 0:case 11:case 14:case 15:lt||Pn(2,t,e),lt||Pn(4,t,e),Tn(A,e,t);break;case 1:lt||(pn(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Dh(t,e,a)),Tn(A,e,t);break;case 21:Tn(A,e,t);break;case 22:lt=(a=lt)||t.memoizedState!==null,Tn(A,e,t),lt=a;break;default:Tn(A,e,t)}}function _h(A,e){if(e.memoizedState===null&&(A=e.alternate,A!==null&&(A=A.memoizedState,A!==null&&(A=A.dehydrated,A!==null))))try{Di(A)}catch(t){$e(e,e.return,t)}}function km(A){switch(A.tag){case 13:case 19:var e=A.stateNode;return e===null&&(e=A.stateNode=new Oh),e;case 22:return A=A.stateNode,e=A._retryCache,e===null&&(e=A._retryCache=new Oh),e;default:throw Error(o(435,A.tag))}}function Sc(A,e){var t=km(A);e.forEach(function(a){var l=Km.bind(null,A,a);t.has(a)||(t.add(a),a.then(l,l))})}function _t(A,e){var t=e.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],c=A,p=e,y=p;A:for(;y!==null;){switch(y.tag){case 27:if(oa(y.type)){et=y.stateNode,Lt=!1;break A}break;case 5:et=y.stateNode,Lt=!1;break A;case 3:case 4:et=y.stateNode.containerInfo,Lt=!0;break A}y=y.return}if(et===null)throw Error(o(160));Rh(c,p,l),et=null,Lt=!1,c=l.alternate,c!==null&&(c.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Gh(e,A),e=e.sibling}var cn=null;function Gh(A,e){var t=A.alternate,a=A.flags;switch(A.tag){case 0:case 11:case 14:case 15:_t(e,A),Gt(A),a&4&&(Pn(3,A,A.return),xi(3,A),Pn(5,A,A.return));break;case 1:_t(e,A),Gt(A),a&512&&(lt||t===null||pn(t,t.return)),a&64&&Dn&&(A=A.updateQueue,A!==null&&(a=A.callbacks,a!==null&&(t=A.shared.hiddenCallbacks,A.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=cn;if(_t(e,A),Gt(A),a&512&&(lt||t===null||pn(t,t.return)),a&4){var c=t!==null?t.memoizedState:null;if(a=A.memoizedState,t===null)if(a===null)if(A.stateNode===null){A:{a=A.type,t=A.memoizedProps,l=l.ownerDocument||l;e:switch(a){case"title":c=l.getElementsByTagName("title")[0],(!c||c[_]||c[E]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=l.createElement(a),l.head.insertBefore(c,l.querySelector("head > title"))),Et(c,a,t),c[E]=A,u(c),a=c;break A;case"link":var p=Lg("link","href",l).get(a+(t.href||""));if(p){for(var y=0;y<p.length;y++)if(c=p[y],c.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&c.getAttribute("rel")===(t.rel==null?null:t.rel)&&c.getAttribute("title")===(t.title==null?null:t.title)&&c.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){p.splice(y,1);break e}}c=l.createElement(a),Et(c,a,t),l.head.appendChild(c);break;case"meta":if(p=Lg("meta","content",l).get(a+(t.content||""))){for(y=0;y<p.length;y++)if(c=p[y],c.getAttribute("content")===(t.content==null?null:""+t.content)&&c.getAttribute("name")===(t.name==null?null:t.name)&&c.getAttribute("property")===(t.property==null?null:t.property)&&c.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&c.getAttribute("charset")===(t.charSet==null?null:t.charSet)){p.splice(y,1);break e}}c=l.createElement(a),Et(c,a,t),l.head.appendChild(c);break;default:throw Error(o(468,a))}c[E]=A,u(c),a=c}A.stateNode=a}else Og(l,A.type,A.stateNode);else A.stateNode=Ig(l,a,A.memoizedProps);else c!==a?(c===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):c.count--,a===null?Og(l,A.type,A.stateNode):Ig(l,a,A.memoizedProps)):a===null&&A.stateNode!==null&&Uc(A,A.memoizedProps,t.memoizedProps)}break;case 27:_t(e,A),Gt(A),a&512&&(lt||t===null||pn(t,t.return)),t!==null&&a&4&&Uc(A,A.memoizedProps,t.memoizedProps);break;case 5:if(_t(e,A),Gt(A),a&512&&(lt||t===null||pn(t,t.return)),A.flags&32){l=A.stateNode;try{$a(l,"")}catch(iA){$e(A,A.return,iA)}}a&4&&A.stateNode!=null&&(l=A.memoizedProps,Uc(A,l,t!==null?t.memoizedProps:l)),a&1024&&(jc=!0);break;case 6:if(_t(e,A),Gt(A),a&4){if(A.stateNode===null)throw Error(o(162));a=A.memoizedProps,t=A.stateNode;try{t.nodeValue=a}catch(iA){$e(A,A.return,iA)}}break;case 3:if(ss=null,l=cn,cn=is(e.containerInfo),_t(e,A),cn=l,Gt(A),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Di(e.containerInfo)}catch(iA){$e(A,A.return,iA)}jc&&(jc=!1,Yh(A));break;case 4:a=cn,cn=is(A.stateNode.containerInfo),_t(e,A),Gt(A),cn=a;break;case 12:_t(e,A),Gt(A);break;case 13:_t(e,A),Gt(A),A.child.flags&8192&&A.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Tc=pe()),a&4&&(a=A.updateQueue,a!==null&&(A.updateQueue=null,Sc(A,a)));break;case 22:l=A.memoizedState!==null;var M=t!==null&&t.memoizedState!==null,tA=Dn,BA=lt;if(Dn=tA||l,lt=BA||M,_t(e,A),lt=BA,Dn=tA,Gt(A),a&8192)A:for(e=A.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(t===null||M||Dn||lt||La(A)),t=null,e=A;;){if(e.tag===5||e.tag===26){if(t===null){M=t=e;try{if(c=M.stateNode,l)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{y=M.stateNode;var kA=M.memoizedProps.style,aA=kA!=null&&kA.hasOwnProperty("display")?kA.display:null;y.style.display=aA==null||typeof aA=="boolean"?"":(""+aA).trim()}}catch(iA){$e(M,M.return,iA)}}}else if(e.tag===6){if(t===null){M=e;try{M.stateNode.nodeValue=l?"":M.memoizedProps}catch(iA){$e(M,M.return,iA)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===A)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break A;for(;e.sibling===null;){if(e.return===null||e.return===A)break A;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=A.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Sc(A,t))));break;case 19:_t(e,A),Gt(A),a&4&&(a=A.updateQueue,a!==null&&(A.updateQueue=null,Sc(A,a)));break;case 30:break;case 21:break;default:_t(e,A),Gt(A)}}function Gt(A){var e=A.flags;if(e&2){try{for(var t,a=A.return;a!==null;){if(Ih(a)){t=a;break}a=a.return}if(t==null)throw Error(o(160));switch(t.tag){case 27:var l=t.stateNode,c=Ec(A);Vo(A,c,l);break;case 5:var p=t.stateNode;t.flags&32&&($a(p,""),t.flags&=-33);var y=Ec(A);Vo(A,y,p);break;case 3:case 4:var M=t.stateNode.containerInfo,tA=Ec(A);Fc(A,tA,M);break;default:throw Error(o(161))}}catch(BA){$e(A,A.return,BA)}A.flags&=-3}e&4096&&(A.flags&=-4097)}function Yh(A){if(A.subtreeFlags&1024)for(A=A.child;A!==null;){var e=A;Yh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),A=A.sibling}}function Aa(A,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Kh(A,e.alternate,e),e=e.sibling}function La(A){for(A=A.child;A!==null;){var e=A;switch(e.tag){case 0:case 11:case 14:case 15:Pn(4,e,e.return),La(e);break;case 1:pn(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&Dh(e,e.return,t),La(e);break;case 27:Ei(e.stateNode);case 26:case 5:pn(e,e.return),La(e);break;case 22:e.memoizedState===null&&La(e);break;case 30:La(e);break;default:La(e)}A=A.sibling}}function ea(A,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,l=A,c=e,p=c.flags;switch(c.tag){case 0:case 11:case 15:ea(l,c,t),xi(4,c);break;case 1:if(ea(l,c,t),a=c,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(tA){$e(a,a.return,tA)}if(a=c,l=a.updateQueue,l!==null){var y=a.stateNode;try{var M=l.shared.hiddenCallbacks;if(M!==null)for(l.shared.hiddenCallbacks=null,l=0;l<M.length;l++)Bf(M[l],y)}catch(tA){$e(a,a.return,tA)}}t&&p&64&&Mh(c),mi(c,c.return);break;case 27:Lh(c);case 26:case 5:ea(l,c,t),t&&a===null&&p&4&&Th(c),mi(c,c.return);break;case 12:ea(l,c,t);break;case 13:ea(l,c,t),t&&p&4&&_h(l,c);break;case 22:c.memoizedState===null&&ea(l,c,t),mi(c,c.return);break;case 30:break;default:ea(l,c,t)}e=e.sibling}}function kc(A,e){var t=null;A!==null&&A.memoizedState!==null&&A.memoizedState.cachePool!==null&&(t=A.memoizedState.cachePool.pool),A=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(A=e.memoizedState.cachePool.pool),A!==t&&(A!=null&&A.refCount++,t!=null&&ni(t))}function Hc(A,e){A=null,e.alternate!==null&&(A=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==A&&(e.refCount++,A!=null&&ni(A))}function xn(A,e,t,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xh(A,e,t,a),e=e.sibling}function Xh(A,e,t,a){var l=e.flags;switch(e.tag){case 0:case 11:case 15:xn(A,e,t,a),l&2048&&xi(9,e);break;case 1:xn(A,e,t,a);break;case 3:xn(A,e,t,a),l&2048&&(A=null,e.alternate!==null&&(A=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==A&&(e.refCount++,A!=null&&ni(A)));break;case 12:if(l&2048){xn(A,e,t,a),A=e.stateNode;try{var c=e.memoizedProps,p=c.id,y=c.onPostCommit;typeof y=="function"&&y(p,e.alternate===null?"mount":"update",A.passiveEffectDuration,-0)}catch(M){$e(e,e.return,M)}}else xn(A,e,t,a);break;case 13:xn(A,e,t,a);break;case 23:break;case 22:c=e.stateNode,p=e.alternate,e.memoizedState!==null?c._visibility&2?xn(A,e,t,a):bi(A,e):c._visibility&2?xn(A,e,t,a):(c._visibility|=2,gr(A,e,t,a,(e.subtreeFlags&10256)!==0)),l&2048&&kc(p,e);break;case 24:xn(A,e,t,a),l&2048&&Hc(e.alternate,e);break;default:xn(A,e,t,a)}}function gr(A,e,t,a,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var c=A,p=e,y=t,M=a,tA=p.flags;switch(p.tag){case 0:case 11:case 15:gr(c,p,y,M,l),xi(8,p);break;case 23:break;case 22:var BA=p.stateNode;p.memoizedState!==null?BA._visibility&2?gr(c,p,y,M,l):bi(c,p):(BA._visibility|=2,gr(c,p,y,M,l)),l&&tA&2048&&kc(p.alternate,p);break;case 24:gr(c,p,y,M,l),l&&tA&2048&&Hc(p.alternate,p);break;default:gr(c,p,y,M,l)}e=e.sibling}}function bi(A,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=A,a=e,l=a.flags;switch(a.tag){case 22:bi(t,a),l&2048&&kc(a.alternate,a);break;case 24:bi(t,a),l&2048&&Hc(a.alternate,a);break;default:bi(t,a)}e=e.sibling}}var Bi=8192;function pr(A){if(A.subtreeFlags&Bi)for(A=A.child;A!==null;)Vh(A),A=A.sibling}function Vh(A){switch(A.tag){case 26:pr(A),A.flags&Bi&&A.memoizedState!==null&&pb(cn,A.memoizedState,A.memoizedProps);break;case 5:pr(A);break;case 3:case 4:var e=cn;cn=is(A.stateNode.containerInfo),pr(A),cn=e;break;case 22:A.memoizedState===null&&(e=A.alternate,e!==null&&e.memoizedState!==null?(e=Bi,Bi=16777216,pr(A),Bi=e):pr(A));break;default:pr(A)}}function Jh(A){var e=A.alternate;if(e!==null&&(A=e.child,A!==null)){e.child=null;do e=A.sibling,A.sibling=null,A=e;while(A!==null)}}function wi(A){var e=A.deletions;if((A.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];yt=a,$h(a,A)}Jh(A)}if(A.subtreeFlags&10256)for(A=A.child;A!==null;)Zh(A),A=A.sibling}function Zh(A){switch(A.tag){case 0:case 11:case 15:wi(A),A.flags&2048&&Pn(9,A,A.return);break;case 3:wi(A);break;case 12:wi(A);break;case 22:var e=A.stateNode;A.memoizedState!==null&&e._visibility&2&&(A.return===null||A.return.tag!==13)?(e._visibility&=-3,Jo(A)):wi(A);break;default:wi(A)}}function Jo(A){var e=A.deletions;if((A.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];yt=a,$h(a,A)}Jh(A)}for(A=A.child;A!==null;){switch(e=A,e.tag){case 0:case 11:case 15:Pn(8,e,e.return),Jo(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,Jo(e));break;default:Jo(e)}A=A.sibling}}function $h(A,e){for(;yt!==null;){var t=yt;switch(t.tag){case 0:case 11:case 15:Pn(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ni(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,yt=a;else A:for(t=A;yt!==null;){a=yt;var l=a.sibling,c=a.return;if(zh(a),a===t){yt=null;break A}if(l!==null){l.return=c,yt=l;break A}yt=c}}}var Hm={getCacheForType:function(A){var e=St(xt),t=e.data.get(A);return t===void 0&&(t=A(),e.data.set(A,t)),t}},Nm=typeof WeakMap=="function"?WeakMap:Map,ze=0,qe=null,Ce=null,He=0,Re=0,Yt=null,ta=!1,xr=!1,Nc=!1,In=0,ot=0,na=0,Oa=0,Mc=0,en=0,mr=0,yi=null,Ot=null,Dc=!1,Tc=0,Zo=1/0,$o=null,aa=null,Ut=0,ra=null,br=null,Br=0,Ic=0,Lc=null,Wh=null,vi=0,Oc=null;function Xt(){if((ze&2)!==0&&He!==0)return He&-He;if(G.T!==null){var A=or;return A!==0?A:Xc()}return SA()}function qh(){en===0&&(en=(He&536870912)===0||Oe?he():536870912);var A=An.current;return A!==null&&(A.flags|=32),en}function Vt(A,e,t){(A===qe&&(Re===2||Re===9)||A.cancelPendingCommit!==null)&&(wr(A,0),ia(A,He,en,!1)),_e(A,t),((ze&2)===0||A!==qe)&&(A===qe&&((ze&2)===0&&(Oa|=t),ot===4&&ia(A,He,en,!1)),mn(A))}function Ph(A,e,t){if((ze&6)!==0)throw Error(o(327));var a=!t&&(e&124)===0&&(e&A.expiredLanes)===0||xe(A,e),l=a?Tm(A,e):Rc(A,e,!0),c=a;do{if(l===0){xr&&!a&&ia(A,e,0,!1);break}else{if(t=A.current.alternate,c&&!Mm(t)){l=Rc(A,e,!1),c=!1;continue}if(l===2){if(c=e,A.errorRecoveryDisabledLanes&c)var p=0;else p=A.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){e=p;A:{var y=A;l=yi;var M=y.current.memoizedState.isDehydrated;if(M&&(wr(y,p).flags|=256),p=Rc(y,p,!1),p!==2){if(Nc&&!M){y.errorRecoveryDisabledLanes|=c,Oa|=c,l=4;break A}c=Ot,Ot=l,c!==null&&(Ot===null?Ot=c:Ot.push.apply(Ot,c))}l=p}if(c=!1,l!==2)continue}}if(l===1){wr(A,0),ia(A,e,0,!0);break}A:{switch(a=A,c=l,c){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:ia(a,e,en,!ta);break A;case 2:Ot=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(l=Tc+300-pe(),10<l)){if(ia(a,e,en,!ta),oe(a,0,!0)!==0)break A;a.timeoutHandle=Fg(Ag.bind(null,a,t,Ot,$o,Dc,e,en,Oa,mr,ta,c,2,-0,0),l);break A}Ag(a,t,Ot,$o,Dc,e,en,Oa,mr,ta,c,0,-0,0)}}break}while(!0);mn(A)}function Ag(A,e,t,a,l,c,p,y,M,tA,BA,kA,aA,iA){if(A.timeoutHandle=-1,kA=e.subtreeFlags,(kA&8192||(kA&16785408)===16785408)&&(Si={stylesheets:null,count:0,unsuspend:gb},Vh(e),kA=xb(),kA!==null)){A.cancelPendingCommit=kA(og.bind(null,A,e,c,t,a,l,p,y,M,BA,1,aA,iA)),ia(A,c,p,!tA);return}og(A,e,c,t,a,l,p,y,M)}function Mm(A){for(var e=A;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],c=l.getSnapshot;l=l.value;try{if(!zt(c(),l))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ia(A,e,t,a){e&=~Mc,e&=~Oa,A.suspendedLanes|=e,A.pingedLanes&=~e,a&&(A.warmLanes|=e),a=A.expirationTimes;for(var l=e;0<l;){var c=31-O(l),p=1<<c;a[c]=-1,l&=~p}t!==0&&Ze(A,t,e)}function Wo(){return(ze&6)===0?(Ci(0),!1):!0}function Kc(){if(Ce!==null){if(Re===0)var A=Ce.return;else A=Ce,jn=Na=null,nc(A),fr=null,hi=0,A=Ce;for(;A!==null;)Nh(A.alternate,A),A=A.return;Ce=null}}function wr(A,e){var t=A.timeoutHandle;t!==-1&&(A.timeoutHandle=-1,qm(t)),t=A.cancelPendingCommit,t!==null&&(A.cancelPendingCommit=null,t()),Kc(),qe=A,Ce=t=Un(A.current,null),He=e,Re=0,Yt=null,ta=!1,xr=xe(A,e),Nc=!1,mr=en=Mc=Oa=na=ot=0,Ot=yi=null,Dc=!1,(e&8)!==0&&(e|=e&32);var a=A.entangledLanes;if(a!==0)for(A=A.entanglements,a&=e;0<a;){var l=31-O(a),c=1<<l;e|=A[l],a&=~c}return In=e,bo(),t}function eg(A,e){Be=null,G.H=Lo,e===ri||e===Fo?(e=mf(),Re=3):e===gf?(e=mf(),Re=4):Re=e===bh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Yt=e,Ce===null&&(ot=1,_o(A,$t(e,A.current)))}function tg(){var A=G.H;return G.H=Lo,A===null?Lo:A}function ng(){var A=G.A;return G.A=Hm,A}function zc(){ot=4,ta||(He&4194048)!==He&&An.current!==null||(xr=!0),(na&134217727)===0&&(Oa&134217727)===0||qe===null||ia(qe,He,en,!1)}function Rc(A,e,t){var a=ze;ze|=2;var l=tg(),c=ng();(qe!==A||He!==e)&&($o=null,wr(A,e)),e=!1;var p=ot;A:do try{if(Re!==0&&Ce!==null){var y=Ce,M=Yt;switch(Re){case 8:Kc(),p=6;break A;case 3:case 2:case 9:case 6:An.current===null&&(e=!0);var tA=Re;if(Re=0,Yt=null,yr(A,y,M,tA),t&&xr){p=0;break A}break;default:tA=Re,Re=0,Yt=null,yr(A,y,M,tA)}}Dm(),p=ot;break}catch(BA){eg(A,BA)}while(!0);return e&&A.shellSuspendCounter++,jn=Na=null,ze=a,G.H=l,G.A=c,Ce===null&&(qe=null,He=0,bo()),p}function Dm(){for(;Ce!==null;)ag(Ce)}function Tm(A,e){var t=ze;ze|=2;var a=tg(),l=ng();qe!==A||He!==e?($o=null,Zo=pe()+500,wr(A,e)):xr=xe(A,e);A:do try{if(Re!==0&&Ce!==null){e=Ce;var c=Yt;e:switch(Re){case 1:Re=0,Yt=null,yr(A,e,c,1);break;case 2:case 9:if(pf(c)){Re=0,Yt=null,rg(e);break}e=function(){Re!==2&&Re!==9||qe!==A||(Re=7),mn(A)},c.then(e,e);break A;case 3:Re=7;break A;case 4:Re=5;break A;case 7:pf(c)?(Re=0,Yt=null,rg(e)):(Re=0,Yt=null,yr(A,e,c,7));break;case 5:var p=null;switch(Ce.tag){case 26:p=Ce.memoizedState;case 5:case 27:var y=Ce;if(!p||Kg(p)){Re=0,Yt=null;var M=y.sibling;if(M!==null)Ce=M;else{var tA=y.return;tA!==null?(Ce=tA,qo(tA)):Ce=null}break e}}Re=0,Yt=null,yr(A,e,c,5);break;case 6:Re=0,Yt=null,yr(A,e,c,6);break;case 8:Kc(),ot=6;break A;default:throw Error(o(462))}}Im();break}catch(BA){eg(A,BA)}while(!0);return jn=Na=null,G.H=a,G.A=l,ze=t,Ce!==null?0:(qe=null,He=0,bo(),ot)}function Im(){for(;Ce!==null&&!nA();)ag(Ce)}function ag(A){var e=kh(A.alternate,A,In);A.memoizedProps=A.pendingProps,e===null?qo(A):Ce=e}function rg(A){var e=A,t=e.alternate;switch(e.tag){case 15:case 0:e=Qh(t,e,e.pendingProps,e.type,void 0,He);break;case 11:e=Qh(t,e,e.pendingProps,e.type.render,e.ref,He);break;case 5:nc(e);default:Nh(t,e),e=Ce=rf(e,In),e=kh(t,e,In)}A.memoizedProps=A.pendingProps,e===null?qo(A):Ce=e}function yr(A,e,t,a){jn=Na=null,nc(e),fr=null,hi=0;var l=e.return;try{if(Um(A,l,e,t,He)){ot=1,_o(A,$t(t,A.current)),Ce=null;return}}catch(c){if(l!==null)throw Ce=l,c;ot=1,_o(A,$t(t,A.current)),Ce=null;return}e.flags&32768?(Oe||a===1?A=!0:xr||(He&536870912)!==0?A=!1:(ta=A=!0,(a===2||a===9||a===3||a===6)&&(a=An.current,a!==null&&a.tag===13&&(a.flags|=16384))),ig(e,A)):qo(e)}function qo(A){var e=A;do{if((e.flags&32768)!==0){ig(e,ta);return}A=e.return;var t=Fm(e.alternate,e,In);if(t!==null){Ce=t;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=A}while(e!==null);ot===0&&(ot=5)}function ig(A,e){do{var t=jm(A.alternate,A);if(t!==null){t.flags&=32767,Ce=t;return}if(t=A.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(A=A.sibling,A!==null)){Ce=A;return}Ce=A=t}while(A!==null);ot=6,Ce=null}function og(A,e,t,a,l,c,p,y,M){A.cancelPendingCommit=null;do Po();while(Ut!==0);if((ze&6)!==0)throw Error(o(327));if(e!==null){if(e===A.current)throw Error(o(177));if(c=e.lanes|e.childLanes,c|=Hl,We(A,t,c,p,y,M),A===qe&&(Ce=qe=null,He=0),br=e,ra=A,Br=t,Ic=c,Lc=l,Wh=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(A.callbackNode=null,A.callbackPriority=0,zm(me,function(){return ug(),null})):(A.callbackNode=null,A.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=G.T,G.T=null,l=pA.p,pA.p=2,p=ze,ze|=4;try{Sm(A,e,t)}finally{ze=p,pA.p=l,G.T=a}}Ut=1,sg(),lg(),cg()}}function sg(){if(Ut===1){Ut=0;var A=ra,e=br,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=G.T,G.T=null;var a=pA.p;pA.p=2;var l=ze;ze|=4;try{Gh(e,A);var c=Ad,p=Zu(A.containerInfo),y=c.focusedElem,M=c.selectionRange;if(p!==y&&y&&y.ownerDocument&&Ju(y.ownerDocument.documentElement,y)){if(M!==null&&El(y)){var tA=M.start,BA=M.end;if(BA===void 0&&(BA=tA),"selectionStart"in y)y.selectionStart=tA,y.selectionEnd=Math.min(BA,y.value.length);else{var kA=y.ownerDocument||document,aA=kA&&kA.defaultView||window;if(aA.getSelection){var iA=aA.getSelection(),de=y.textContent.length,se=Math.min(M.start,de),Xe=M.end===void 0?se:Math.min(M.end,de);!iA.extend&&se>Xe&&(p=Xe,Xe=se,se=p);var Z=Vu(y,se),R=Vu(y,Xe);if(Z&&R&&(iA.rangeCount!==1||iA.anchorNode!==Z.node||iA.anchorOffset!==Z.offset||iA.focusNode!==R.node||iA.focusOffset!==R.offset)){var AA=kA.createRange();AA.setStart(Z.node,Z.offset),iA.removeAllRanges(),se>Xe?(iA.addRange(AA),iA.extend(R.node,R.offset)):(AA.setEnd(R.node,R.offset),iA.addRange(AA))}}}}for(kA=[],iA=y;iA=iA.parentNode;)iA.nodeType===1&&kA.push({element:iA,left:iA.scrollLeft,top:iA.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<kA.length;y++){var UA=kA[y];UA.element.scrollLeft=UA.left,UA.element.scrollTop=UA.top}}ds=!!Pc,Ad=Pc=null}finally{ze=l,pA.p=a,G.T=t}}A.current=e,Ut=2}}function lg(){if(Ut===2){Ut=0;var A=ra,e=br,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=G.T,G.T=null;var a=pA.p;pA.p=2;var l=ze;ze|=4;try{Kh(A,e.alternate,e)}finally{ze=l,pA.p=a,G.T=t}}Ut=3}}function cg(){if(Ut===4||Ut===3){Ut=0,ye();var A=ra,e=br,t=Br,a=Wh;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ut=5:(Ut=0,br=ra=null,dg(A,A.pendingLanes));var l=A.pendingLanes;if(l===0&&(aa=null),N(t),e=e.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(Fe,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=G.T,l=pA.p,pA.p=2,G.T=null;try{for(var c=A.onRecoverableError,p=0;p<a.length;p++){var y=a[p];c(y.value,{componentStack:y.stack})}}finally{G.T=e,pA.p=l}}(Br&3)!==0&&Po(),mn(A),l=A.pendingLanes,(t&4194090)!==0&&(l&42)!==0?A===Oc?vi++:(vi=0,Oc=A):vi=0,Ci(0)}}function dg(A,e){(A.pooledCacheLanes&=e)===0&&(e=A.pooledCache,e!=null&&(A.pooledCache=null,ni(e)))}function Po(A){return sg(),lg(),cg(),ug()}function ug(){if(Ut!==5)return!1;var A=ra,e=Ic;Ic=0;var t=N(Br),a=G.T,l=pA.p;try{pA.p=32>t?32:t,G.T=null,t=Lc,Lc=null;var c=ra,p=Br;if(Ut=0,br=ra=null,Br=0,(ze&6)!==0)throw Error(o(331));var y=ze;if(ze|=4,Zh(c.current),Xh(c,c.current,p,t),ze=y,Ci(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(Fe,c)}catch{}return!0}finally{pA.p=l,G.T=a,dg(A,e)}}function fg(A,e,t){e=$t(t,e),e=xc(A.stateNode,e,2),A=Zn(A,e,2),A!==null&&(_e(A,2),mn(A))}function $e(A,e,t){if(A.tag===3)fg(A,A,t);else for(;e!==null;){if(e.tag===3){fg(e,A,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(aa===null||!aa.has(a))){A=$t(t,A),t=xh(2),a=Zn(e,t,2),a!==null&&(mh(t,a,e,A),_e(a,2),mn(a));break}}e=e.return}}function _c(A,e,t){var a=A.pingCache;if(a===null){a=A.pingCache=new Nm;var l=new Set;a.set(e,l)}else l=a.get(e),l===void 0&&(l=new Set,a.set(e,l));l.has(t)||(Nc=!0,l.add(t),A=Lm.bind(null,A,e,t),e.then(A,A))}function Lm(A,e,t){var a=A.pingCache;a!==null&&a.delete(e),A.pingedLanes|=A.suspendedLanes&t,A.warmLanes&=~t,qe===A&&(He&t)===t&&(ot===4||ot===3&&(He&62914560)===He&&300>pe()-Tc?(ze&2)===0&&wr(A,0):Mc|=t,mr===He&&(mr=0)),mn(A)}function hg(A,e){e===0&&(e=ke()),A=nr(A,e),A!==null&&(_e(A,e),mn(A))}function Om(A){var e=A.memoizedState,t=0;e!==null&&(t=e.retryLane),hg(A,t)}function Km(A,e){var t=0;switch(A.tag){case 13:var a=A.stateNode,l=A.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=A.stateNode;break;case 22:a=A.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(e),hg(A,t)}function zm(A,e){return wA(A,e)}var As=null,vr=null,Gc=!1,es=!1,Yc=!1,Ka=0;function mn(A){A!==vr&&A.next===null&&(vr===null?As=vr=A:vr=vr.next=A),es=!0,Gc||(Gc=!0,_m())}function Ci(A,e){if(!Yc&&es){Yc=!0;do for(var t=!1,a=As;a!==null;){if(A!==0){var l=a.pendingLanes;if(l===0)var c=0;else{var p=a.suspendedLanes,y=a.pingedLanes;c=(1<<31-O(42|A)+1)-1,c&=l&~(p&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(t=!0,mg(a,c))}else c=He,c=oe(a,a===qe?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||xe(a,c)||(t=!0,mg(a,c));a=a.next}while(t);Yc=!1}}function Rm(){gg()}function gg(){es=Gc=!1;var A=0;Ka!==0&&(Wm()&&(A=Ka),Ka=0);for(var e=pe(),t=null,a=As;a!==null;){var l=a.next,c=pg(a,e);c===0?(a.next=null,t===null?As=l:t.next=l,l===null&&(vr=t)):(t=a,(A!==0||(c&3)!==0)&&(es=!0)),a=l}Ci(A)}function pg(A,e){for(var t=A.suspendedLanes,a=A.pingedLanes,l=A.expirationTimes,c=A.pendingLanes&-62914561;0<c;){var p=31-O(c),y=1<<p,M=l[p];M===-1?((y&t)===0||(y&a)!==0)&&(l[p]=ce(y,e)):M<=e&&(A.expiredLanes|=y),c&=~y}if(e=qe,t=He,t=oe(A,A===e?t:0,A.cancelPendingCommit!==null||A.timeoutHandle!==-1),a=A.callbackNode,t===0||A===e&&(Re===2||Re===9)||A.cancelPendingCommit!==null)return a!==null&&a!==null&&EA(a),A.callbackNode=null,A.callbackPriority=0;if((t&3)===0||xe(A,t)){if(e=t&-t,e===A.callbackPriority)return e;switch(a!==null&&EA(a),N(t)){case 2:case 8:t=ne;break;case 32:t=me;break;case 268435456:t=Je;break;default:t=me}return a=xg.bind(null,A),t=wA(t,a),A.callbackPriority=e,A.callbackNode=t,e}return a!==null&&a!==null&&EA(a),A.callbackPriority=2,A.callbackNode=null,2}function xg(A,e){if(Ut!==0&&Ut!==5)return A.callbackNode=null,A.callbackPriority=0,null;var t=A.callbackNode;if(Po()&&A.callbackNode!==t)return null;var a=He;return a=oe(A,A===qe?a:0,A.cancelPendingCommit!==null||A.timeoutHandle!==-1),a===0?null:(Ph(A,a,e),pg(A,pe()),A.callbackNode!=null&&A.callbackNode===t?xg.bind(null,A):null)}function mg(A,e){if(Po())return null;Ph(A,e,!0)}function _m(){Pm(function(){(ze&6)!==0?wA(fe,Rm):gg()})}function Xc(){return Ka===0&&(Ka=he()),Ka}function bg(A){return A==null||typeof A=="symbol"||typeof A=="boolean"?null:typeof A=="function"?A:uo(""+A)}function Bg(A,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,A.id&&t.setAttribute("form",A.id),e.parentNode.insertBefore(t,e),A=new FormData(A),t.parentNode.removeChild(t),A}function Gm(A,e,t,a,l){if(e==="submit"&&t&&t.stateNode===l){var c=bg((l[D]||null).action),p=a.submitter;p&&(e=(e=p[D]||null)?bg(e.formAction):p.getAttribute("formAction"),e!==null&&(c=e,p=null));var y=new po("action","action",null,a,l);A.push({event:y,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ka!==0){var M=p?Bg(l,p):new FormData(l);uc(t,{pending:!0,data:M,method:l.method,action:c},null,M)}}else typeof c=="function"&&(y.preventDefault(),M=p?Bg(l,p):new FormData(l),uc(t,{pending:!0,data:M,method:l.method,action:c},c,M))},currentTarget:l}]})}}for(var Vc=0;Vc<kl.length;Vc++){var Jc=kl[Vc],Ym=Jc.toLowerCase(),Xm=Jc[0].toUpperCase()+Jc.slice(1);ln(Ym,"on"+Xm)}ln(qu,"onAnimationEnd"),ln(Pu,"onAnimationIteration"),ln(Af,"onAnimationStart"),ln("dblclick","onDoubleClick"),ln("focusin","onFocus"),ln("focusout","onBlur"),ln(lm,"onTransitionRun"),ln(cm,"onTransitionStart"),ln(dm,"onTransitionCancel"),ln(ef,"onTransitionEnd"),P("onMouseEnter",["mouseout","mouseover"]),P("onMouseLeave",["mouseout","mouseover"]),P("onPointerEnter",["pointerout","pointerover"]),P("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qi));function wg(A,e){e=(e&4)!==0;for(var t=0;t<A.length;t++){var a=A[t],l=a.event;a=a.listeners;A:{var c=void 0;if(e)for(var p=a.length-1;0<=p;p--){var y=a[p],M=y.instance,tA=y.currentTarget;if(y=y.listener,M!==c&&l.isPropagationStopped())break A;c=y,l.currentTarget=tA;try{c(l)}catch(BA){Ro(BA)}l.currentTarget=null,c=M}else for(p=0;p<a.length;p++){if(y=a[p],M=y.instance,tA=y.currentTarget,y=y.listener,M!==c&&l.isPropagationStopped())break A;c=y,l.currentTarget=tA;try{c(l)}catch(BA){Ro(BA)}l.currentTarget=null,c=M}}}}function Qe(A,e){var t=e[v];t===void 0&&(t=e[v]=new Set);var a=A+"__bubble";t.has(a)||(yg(e,A,2,!1),t.add(a))}function Zc(A,e,t){var a=0;e&&(a|=4),yg(t,A,a,e)}var ts="_reactListening"+Math.random().toString(36).slice(2);function $c(A){if(!A[ts]){A[ts]=!0,w.forEach(function(t){t!=="selectionchange"&&(Vm.has(t)||Zc(t,!1,A),Zc(t,!0,A))});var e=A.nodeType===9?A:A.ownerDocument;e===null||e[ts]||(e[ts]=!0,Zc("selectionchange",!1,e))}}function yg(A,e,t,a){switch(Xg(e)){case 2:var l=Bb;break;case 8:l=wb;break;default:l=cd}t=l.bind(null,e,t,A),l=void 0,!ml||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),a?l!==void 0?A.addEventListener(e,t,{capture:!0,passive:l}):A.addEventListener(e,t,!0):l!==void 0?A.addEventListener(e,t,{passive:l}):A.addEventListener(e,t,!1)}function Wc(A,e,t,a,l){var c=a;if((e&1)===0&&(e&2)===0&&a!==null)A:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var y=a.stateNode.containerInfo;if(y===l)break;if(p===4)for(p=a.return;p!==null;){var M=p.tag;if((M===3||M===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;y!==null;){if(p=fA(y),p===null)return;if(M=p.tag,M===5||M===6||M===26||M===27){a=c=p;continue A}y=y.parentNode}}a=a.return}Fu(function(){var tA=c,BA=pl(t),kA=[];A:{var aA=tf.get(A);if(aA!==void 0){var iA=po,de=A;switch(A){case"keypress":if(ho(t)===0)break A;case"keydown":case"keyup":iA=z0;break;case"focusin":de="focus",iA=yl;break;case"focusout":de="blur",iA=yl;break;case"beforeblur":case"afterblur":iA=yl;break;case"click":if(t.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":iA=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":iA=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":iA=G0;break;case qu:case Pu:case Af:iA=H0;break;case ef:iA=X0;break;case"scroll":case"scrollend":iA=E0;break;case"wheel":iA=J0;break;case"copy":case"cut":case"paste":iA=M0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":iA=Nu;break;case"toggle":case"beforetoggle":iA=$0}var se=(e&4)!==0,Xe=!se&&(A==="scroll"||A==="scrollend"),Z=se?aA!==null?aA+"Capture":null:aA;se=[];for(var R=tA,AA;R!==null;){var UA=R;if(AA=UA.stateNode,UA=UA.tag,UA!==5&&UA!==26&&UA!==27||AA===null||Z===null||(UA=Gr(R,Z),UA!=null&&se.push(Ui(R,UA,AA))),Xe)break;R=R.return}0<se.length&&(aA=new iA(aA,de,null,t,BA),kA.push({event:aA,listeners:se}))}}if((e&7)===0){A:{if(aA=A==="mouseover"||A==="pointerover",iA=A==="mouseout"||A==="pointerout",aA&&t!==gl&&(de=t.relatedTarget||t.fromElement)&&(fA(de)||de[b]))break A;if((iA||aA)&&(aA=BA.window===BA?BA:(aA=BA.ownerDocument)?aA.defaultView||aA.parentWindow:window,iA?(de=t.relatedTarget||t.toElement,iA=tA,de=de?fA(de):null,de!==null&&(Xe=f(de),se=de.tag,de!==Xe||se!==5&&se!==27&&se!==6)&&(de=null)):(iA=null,de=tA),iA!==de)){if(se=ku,UA="onMouseLeave",Z="onMouseEnter",R="mouse",(A==="pointerout"||A==="pointerover")&&(se=Nu,UA="onPointerLeave",Z="onPointerEnter",R="pointer"),Xe=iA==null?aA:ZA(iA),AA=de==null?aA:ZA(de),aA=new se(UA,R+"leave",iA,t,BA),aA.target=Xe,aA.relatedTarget=AA,UA=null,fA(BA)===tA&&(se=new se(Z,R+"enter",de,t,BA),se.target=AA,se.relatedTarget=Xe,UA=se),Xe=UA,iA&&de)e:{for(se=iA,Z=de,R=0,AA=se;AA;AA=Cr(AA))R++;for(AA=0,UA=Z;UA;UA=Cr(UA))AA++;for(;0<R-AA;)se=Cr(se),R--;for(;0<AA-R;)Z=Cr(Z),AA--;for(;R--;){if(se===Z||Z!==null&&se===Z.alternate)break e;se=Cr(se),Z=Cr(Z)}se=null}else se=null;iA!==null&&vg(kA,aA,iA,se,!1),de!==null&&Xe!==null&&vg(kA,Xe,de,se,!0)}}A:{if(aA=tA?ZA(tA):window,iA=aA.nodeName&&aA.nodeName.toLowerCase(),iA==="select"||iA==="input"&&aA.type==="file")var Ae=zu;else if(Ou(aA))if(Ru)Ae=im;else{Ae=am;var we=nm}else iA=aA.nodeName,!iA||iA.toLowerCase()!=="input"||aA.type!=="checkbox"&&aA.type!=="radio"?tA&&hl(tA.elementType)&&(Ae=zu):Ae=rm;if(Ae&&(Ae=Ae(A,tA))){Ku(kA,Ae,t,BA);break A}we&&we(A,aA,tA),A==="focusout"&&tA&&aA.type==="number"&&tA.memoizedProps.value!=null&&fl(aA,"number",aA.value)}switch(we=tA?ZA(tA):window,A){case"focusin":(Ou(we)||we.contentEditable==="true")&&(Ar=we,Fl=tA,qr=null);break;case"focusout":qr=Fl=Ar=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,$u(kA,t,BA);break;case"selectionchange":if(sm)break;case"keydown":case"keyup":$u(kA,t,BA)}var ae;if(Cl)A:{switch(A){case"compositionstart":var le="onCompositionStart";break A;case"compositionend":le="onCompositionEnd";break A;case"compositionupdate":le="onCompositionUpdate";break A}le=void 0}else Pa?Iu(A,t)&&(le="onCompositionEnd"):A==="keydown"&&t.keyCode===229&&(le="onCompositionStart");le&&(Mu&&t.locale!=="ko"&&(Pa||le!=="onCompositionStart"?le==="onCompositionEnd"&&Pa&&(ae=ju()):(Yn=BA,bl="value"in Yn?Yn.value:Yn.textContent,Pa=!0)),we=ns(tA,le),0<we.length&&(le=new Hu(le,A,null,t,BA),kA.push({event:le,listeners:we}),ae?le.data=ae:(ae=Lu(t),ae!==null&&(le.data=ae)))),(ae=q0?P0(A,t):Am(A,t))&&(le=ns(tA,"onBeforeInput"),0<le.length&&(we=new Hu("onBeforeInput","beforeinput",null,t,BA),kA.push({event:we,listeners:le}),we.data=ae)),Gm(kA,A,tA,t,BA)}wg(kA,e)})}function Ui(A,e,t){return{instance:A,listener:e,currentTarget:t}}function ns(A,e){for(var t=e+"Capture",a=[];A!==null;){var l=A,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=Gr(A,t),l!=null&&a.unshift(Ui(A,l,c)),l=Gr(A,e),l!=null&&a.push(Ui(A,l,c))),A.tag===3)return a;A=A.return}return[]}function Cr(A){if(A===null)return null;do A=A.return;while(A&&A.tag!==5&&A.tag!==27);return A||null}function vg(A,e,t,a,l){for(var c=e._reactName,p=[];t!==null&&t!==a;){var y=t,M=y.alternate,tA=y.stateNode;if(y=y.tag,M!==null&&M===a)break;y!==5&&y!==26&&y!==27||tA===null||(M=tA,l?(tA=Gr(t,c),tA!=null&&p.unshift(Ui(t,tA,M))):l||(tA=Gr(t,c),tA!=null&&p.push(Ui(t,tA,M)))),t=t.return}p.length!==0&&A.push({event:e,listeners:p})}var Jm=/\r\n?/g,Zm=/\u0000|\uFFFD/g;function Cg(A){return(typeof A=="string"?A:""+A).replace(Jm,`
`).replace(Zm,"")}function Qg(A,e){return e=Cg(e),Cg(A)===e}function as(){}function Ye(A,e,t,a,l,c){switch(t){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||$a(A,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&$a(A,""+a);break;case"className":ue(A,"class",a);break;case"tabIndex":ue(A,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ue(A,t,a);break;case"style":Uu(A,a,c);break;case"data":if(e!=="object"){ue(A,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||t!=="href")){A.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){A.removeAttribute(t);break}a=uo(""+a),A.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){A.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(t==="formAction"?(e!=="input"&&Ye(A,e,"name",l.name,l,null),Ye(A,e,"formEncType",l.formEncType,l,null),Ye(A,e,"formMethod",l.formMethod,l,null),Ye(A,e,"formTarget",l.formTarget,l,null)):(Ye(A,e,"encType",l.encType,l,null),Ye(A,e,"method",l.method,l,null),Ye(A,e,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){A.removeAttribute(t);break}a=uo(""+a),A.setAttribute(t,a);break;case"onClick":a!=null&&(A.onclick=as);break;case"onScroll":a!=null&&Qe("scroll",A);break;case"onScrollEnd":a!=null&&Qe("scrollend",A);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(o(60));A.innerHTML=t}}break;case"multiple":A.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":A.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){A.removeAttribute("xlink:href");break}t=uo(""+a),A.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?A.setAttribute(t,""+a):A.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?A.setAttribute(t,""):A.removeAttribute(t);break;case"capture":case"download":a===!0?A.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?A.setAttribute(t,a):A.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?A.setAttribute(t,a):A.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?A.removeAttribute(t):A.setAttribute(t,a);break;case"popover":Qe("beforetoggle",A),Qe("toggle",A),VA(A,"popover",a);break;case"xlinkActuate":ve(A,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ve(A,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ve(A,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ve(A,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ve(A,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ve(A,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ve(A,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ve(A,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ve(A,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":VA(A,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Q0.get(t)||t,VA(A,t,a))}}function qc(A,e,t,a,l,c){switch(t){case"style":Uu(A,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(o(60));A.innerHTML=t}}break;case"children":typeof a=="string"?$a(A,a):(typeof a=="number"||typeof a=="bigint")&&$a(A,""+a);break;case"onScroll":a!=null&&Qe("scroll",A);break;case"onScrollEnd":a!=null&&Qe("scrollend",A);break;case"onClick":a!=null&&(A.onclick=as);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Q.hasOwnProperty(t))A:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),e=t.slice(2,l?t.length-7:void 0),c=A[D]||null,c=c!=null?c[t]:null,typeof c=="function"&&A.removeEventListener(e,c,l),typeof a=="function")){typeof c!="function"&&c!==null&&(t in A?A[t]=null:A.hasAttribute(t)&&A.removeAttribute(t)),A.addEventListener(e,a,l);break A}t in A?A[t]=a:a===!0?A.setAttribute(t,""):VA(A,t,a)}}}function Et(A,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qe("error",A),Qe("load",A);var a=!1,l=!1,c;for(c in t)if(t.hasOwnProperty(c)){var p=t[c];if(p!=null)switch(c){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Ye(A,e,c,p,t,null)}}l&&Ye(A,e,"srcSet",t.srcSet,t,null),a&&Ye(A,e,"src",t.src,t,null);return;case"input":Qe("invalid",A);var y=c=p=l=null,M=null,tA=null;for(a in t)if(t.hasOwnProperty(a)){var BA=t[a];if(BA!=null)switch(a){case"name":l=BA;break;case"type":p=BA;break;case"checked":M=BA;break;case"defaultChecked":tA=BA;break;case"value":c=BA;break;case"defaultValue":y=BA;break;case"children":case"dangerouslySetInnerHTML":if(BA!=null)throw Error(o(137,e));break;default:Ye(A,e,a,BA,t,null)}}yu(A,c,y,M,tA,p,l,!1),Ja(A);return;case"select":Qe("invalid",A),a=p=c=null;for(l in t)if(t.hasOwnProperty(l)&&(y=t[l],y!=null))switch(l){case"value":c=y;break;case"defaultValue":p=y;break;case"multiple":a=y;default:Ye(A,e,l,y,t,null)}e=c,t=p,A.multiple=!!a,e!=null?Za(A,!!a,e,!1):t!=null&&Za(A,!!a,t,!0);return;case"textarea":Qe("invalid",A),c=l=a=null;for(p in t)if(t.hasOwnProperty(p)&&(y=t[p],y!=null))switch(p){case"value":a=y;break;case"defaultValue":l=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(91));break;default:Ye(A,e,p,y,t,null)}Cu(A,a,l,c),Ja(A);return;case"option":for(M in t)if(t.hasOwnProperty(M)&&(a=t[M],a!=null))switch(M){case"selected":A.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ye(A,e,M,a,t,null)}return;case"dialog":Qe("beforetoggle",A),Qe("toggle",A),Qe("cancel",A),Qe("close",A);break;case"iframe":case"object":Qe("load",A);break;case"video":case"audio":for(a=0;a<Qi.length;a++)Qe(Qi[a],A);break;case"image":Qe("error",A),Qe("load",A);break;case"details":Qe("toggle",A);break;case"embed":case"source":case"link":Qe("error",A),Qe("load",A);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tA in t)if(t.hasOwnProperty(tA)&&(a=t[tA],a!=null))switch(tA){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Ye(A,e,tA,a,t,null)}return;default:if(hl(e)){for(BA in t)t.hasOwnProperty(BA)&&(a=t[BA],a!==void 0&&qc(A,e,BA,a,t,void 0));return}}for(y in t)t.hasOwnProperty(y)&&(a=t[y],a!=null&&Ye(A,e,y,a,t,null))}function $m(A,e,t,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,p=null,y=null,M=null,tA=null,BA=null;for(iA in t){var kA=t[iA];if(t.hasOwnProperty(iA)&&kA!=null)switch(iA){case"checked":break;case"value":break;case"defaultValue":M=kA;default:a.hasOwnProperty(iA)||Ye(A,e,iA,null,a,kA)}}for(var aA in a){var iA=a[aA];if(kA=t[aA],a.hasOwnProperty(aA)&&(iA!=null||kA!=null))switch(aA){case"type":c=iA;break;case"name":l=iA;break;case"checked":tA=iA;break;case"defaultChecked":BA=iA;break;case"value":p=iA;break;case"defaultValue":y=iA;break;case"children":case"dangerouslySetInnerHTML":if(iA!=null)throw Error(o(137,e));break;default:iA!==kA&&Ye(A,e,aA,iA,a,kA)}}ul(A,p,y,M,tA,BA,c,l);return;case"select":iA=p=y=aA=null;for(c in t)if(M=t[c],t.hasOwnProperty(c)&&M!=null)switch(c){case"value":break;case"multiple":iA=M;default:a.hasOwnProperty(c)||Ye(A,e,c,null,a,M)}for(l in a)if(c=a[l],M=t[l],a.hasOwnProperty(l)&&(c!=null||M!=null))switch(l){case"value":aA=c;break;case"defaultValue":y=c;break;case"multiple":p=c;default:c!==M&&Ye(A,e,l,c,a,M)}e=y,t=p,a=iA,aA!=null?Za(A,!!t,aA,!1):!!a!=!!t&&(e!=null?Za(A,!!t,e,!0):Za(A,!!t,t?[]:"",!1));return;case"textarea":iA=aA=null;for(y in t)if(l=t[y],t.hasOwnProperty(y)&&l!=null&&!a.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Ye(A,e,y,null,a,l)}for(p in a)if(l=a[p],c=t[p],a.hasOwnProperty(p)&&(l!=null||c!=null))switch(p){case"value":aA=l;break;case"defaultValue":iA=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==c&&Ye(A,e,p,l,a,c)}vu(A,aA,iA);return;case"option":for(var de in t)if(aA=t[de],t.hasOwnProperty(de)&&aA!=null&&!a.hasOwnProperty(de))switch(de){case"selected":A.selected=!1;break;default:Ye(A,e,de,null,a,aA)}for(M in a)if(aA=a[M],iA=t[M],a.hasOwnProperty(M)&&aA!==iA&&(aA!=null||iA!=null))switch(M){case"selected":A.selected=aA&&typeof aA!="function"&&typeof aA!="symbol";break;default:Ye(A,e,M,aA,a,iA)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in t)aA=t[se],t.hasOwnProperty(se)&&aA!=null&&!a.hasOwnProperty(se)&&Ye(A,e,se,null,a,aA);for(tA in a)if(aA=a[tA],iA=t[tA],a.hasOwnProperty(tA)&&aA!==iA&&(aA!=null||iA!=null))switch(tA){case"children":case"dangerouslySetInnerHTML":if(aA!=null)throw Error(o(137,e));break;default:Ye(A,e,tA,aA,a,iA)}return;default:if(hl(e)){for(var Xe in t)aA=t[Xe],t.hasOwnProperty(Xe)&&aA!==void 0&&!a.hasOwnProperty(Xe)&&qc(A,e,Xe,void 0,a,aA);for(BA in a)aA=a[BA],iA=t[BA],!a.hasOwnProperty(BA)||aA===iA||aA===void 0&&iA===void 0||qc(A,e,BA,aA,a,iA);return}}for(var Z in t)aA=t[Z],t.hasOwnProperty(Z)&&aA!=null&&!a.hasOwnProperty(Z)&&Ye(A,e,Z,null,a,aA);for(kA in a)aA=a[kA],iA=t[kA],!a.hasOwnProperty(kA)||aA===iA||aA==null&&iA==null||Ye(A,e,kA,aA,a,iA)}var Pc=null,Ad=null;function rs(A){return A.nodeType===9?A:A.ownerDocument}function Ug(A){switch(A){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Eg(A,e){if(A===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return A===1&&e==="foreignObject"?0:A}function ed(A,e){return A==="textarea"||A==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var td=null;function Wm(){var A=window.event;return A&&A.type==="popstate"?A===td?!1:(td=A,!0):(td=null,!1)}var Fg=typeof setTimeout=="function"?setTimeout:void 0,qm=typeof clearTimeout=="function"?clearTimeout:void 0,jg=typeof Promise=="function"?Promise:void 0,Pm=typeof queueMicrotask=="function"?queueMicrotask:typeof jg<"u"?function(A){return jg.resolve(null).then(A).catch(Ab)}:Fg;function Ab(A){setTimeout(function(){throw A})}function oa(A){return A==="head"}function Sg(A,e){var t=e,a=0,l=0;do{var c=t.nextSibling;if(A.removeChild(t),c&&c.nodeType===8)if(t=c.data,t==="/$"){if(0<a&&8>a){t=a;var p=A.ownerDocument;if(t&1&&Ei(p.documentElement),t&2&&Ei(p.body),t&4)for(t=p.head,Ei(t),p=t.firstChild;p;){var y=p.nextSibling,M=p.nodeName;p[_]||M==="SCRIPT"||M==="STYLE"||M==="LINK"&&p.rel.toLowerCase()==="stylesheet"||t.removeChild(p),p=y}}if(l===0){A.removeChild(c),Di(e);return}l--}else t==="$"||t==="$?"||t==="$!"?l++:a=t.charCodeAt(0)-48;else a=0;t=c}while(t);Di(e)}function nd(A){var e=A.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":nd(t),z(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}A.removeChild(t)}}function eb(A,e,t,a){for(;A.nodeType===1;){var l=t;if(A.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(A.nodeName!=="INPUT"||A.type!=="hidden"))break}else if(a){if(!A[_])switch(e){case"meta":if(!A.hasAttribute("itemprop"))break;return A;case"link":if(c=A.getAttribute("rel"),c==="stylesheet"&&A.hasAttribute("data-precedence"))break;if(c!==l.rel||A.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||A.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||A.getAttribute("title")!==(l.title==null?null:l.title))break;return A;case"style":if(A.hasAttribute("data-precedence"))break;return A;case"script":if(c=A.getAttribute("src"),(c!==(l.src==null?null:l.src)||A.getAttribute("type")!==(l.type==null?null:l.type)||A.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&A.hasAttribute("async")&&!A.hasAttribute("itemprop"))break;return A;default:return A}}else if(e==="input"&&A.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&A.getAttribute("name")===c)return A}else return A;if(A=dn(A.nextSibling),A===null)break}return null}function tb(A,e,t){if(e==="")return null;for(;A.nodeType!==3;)if((A.nodeType!==1||A.nodeName!=="INPUT"||A.type!=="hidden")&&!t||(A=dn(A.nextSibling),A===null))return null;return A}function ad(A){return A.data==="$!"||A.data==="$?"&&A.ownerDocument.readyState==="complete"}function nb(A,e){var t=A.ownerDocument;if(A.data!=="$?"||t.readyState==="complete")e();else{var a=function(){e(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),A._reactRetry=a}}function dn(A){for(;A!=null;A=A.nextSibling){var e=A.nodeType;if(e===1||e===3)break;if(e===8){if(e=A.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return A}var rd=null;function kg(A){A=A.previousSibling;for(var e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return A;e--}else t==="/$"&&e++}A=A.previousSibling}return null}function Hg(A,e,t){switch(e=rs(t),A){case"html":if(A=e.documentElement,!A)throw Error(o(452));return A;case"head":if(A=e.head,!A)throw Error(o(453));return A;case"body":if(A=e.body,!A)throw Error(o(454));return A;default:throw Error(o(451))}}function Ei(A){for(var e=A.attributes;e.length;)A.removeAttributeNode(e[0]);z(A)}var tn=new Map,Ng=new Set;function is(A){return typeof A.getRootNode=="function"?A.getRootNode():A.nodeType===9?A:A.ownerDocument}var Ln=pA.d;pA.d={f:ab,r:rb,D:ib,C:ob,L:sb,m:lb,X:db,S:cb,M:ub};function ab(){var A=Ln.f(),e=Wo();return A||e}function rb(A){var e=cA(A);e!==null&&e.tag===5&&e.type==="form"?Pf(e):Ln.r(A)}var Qr=typeof document>"u"?null:document;function Mg(A,e,t){var a=Qr;if(a&&typeof e=="string"&&e){var l=Zt(e);l='link[rel="'+A+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Ng.has(l)||(Ng.add(l),A={rel:A,crossOrigin:t,href:e},a.querySelector(l)===null&&(e=a.createElement("link"),Et(e,"link",A),u(e),a.head.appendChild(e)))}}function ib(A){Ln.D(A),Mg("dns-prefetch",A,null)}function ob(A,e){Ln.C(A,e),Mg("preconnect",A,e)}function sb(A,e,t){Ln.L(A,e,t);var a=Qr;if(a&&A&&e){var l='link[rel="preload"][as="'+Zt(e)+'"]';e==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Zt(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Zt(t.imageSizes)+'"]')):l+='[href="'+Zt(A)+'"]';var c=l;switch(e){case"style":c=Ur(A);break;case"script":c=Er(A)}tn.has(c)||(A=C({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:A,as:e},t),tn.set(c,A),a.querySelector(l)!==null||e==="style"&&a.querySelector(Fi(c))||e==="script"&&a.querySelector(ji(c))||(e=a.createElement("link"),Et(e,"link",A),u(e),a.head.appendChild(e)))}}function lb(A,e){Ln.m(A,e);var t=Qr;if(t&&A){var a=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+Zt(a)+'"][href="'+Zt(A)+'"]',c=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Er(A)}if(!tn.has(c)&&(A=C({rel:"modulepreload",href:A},e),tn.set(c,A),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(ji(c)))return}a=t.createElement("link"),Et(a,"link",A),u(a),t.head.appendChild(a)}}}function cb(A,e,t){Ln.S(A,e,t);var a=Qr;if(a&&A){var l=dA(a).hoistableStyles,c=Ur(A);e=e||"default";var p=l.get(c);if(!p){var y={loading:0,preload:null};if(p=a.querySelector(Fi(c)))y.loading=5;else{A=C({rel:"stylesheet",href:A,"data-precedence":e},t),(t=tn.get(c))&&id(A,t);var M=p=a.createElement("link");u(M),Et(M,"link",A),M._p=new Promise(function(tA,BA){M.onload=tA,M.onerror=BA}),M.addEventListener("load",function(){y.loading|=1}),M.addEventListener("error",function(){y.loading|=2}),y.loading|=4,os(p,e,a)}p={type:"stylesheet",instance:p,count:1,state:y},l.set(c,p)}}}function db(A,e){Ln.X(A,e);var t=Qr;if(t&&A){var a=dA(t).hoistableScripts,l=Er(A),c=a.get(l);c||(c=t.querySelector(ji(l)),c||(A=C({src:A,async:!0},e),(e=tn.get(l))&&od(A,e),c=t.createElement("script"),u(c),Et(c,"link",A),t.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(l,c))}}function ub(A,e){Ln.M(A,e);var t=Qr;if(t&&A){var a=dA(t).hoistableScripts,l=Er(A),c=a.get(l);c||(c=t.querySelector(ji(l)),c||(A=C({src:A,async:!0,type:"module"},e),(e=tn.get(l))&&od(A,e),c=t.createElement("script"),u(c),Et(c,"link",A),t.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(l,c))}}function Dg(A,e,t,a){var l=(l=K.current)?is(l):null;if(!l)throw Error(o(446));switch(A){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=Ur(t.href),t=dA(l).hoistableStyles,a=t.get(e),a||(a={type:"style",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){A=Ur(t.href);var c=dA(l).hoistableStyles,p=c.get(A);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(A,p),(c=l.querySelector(Fi(A)))&&!c._p&&(p.instance=c,p.state.loading=5),tn.has(A)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},tn.set(A,t),c||fb(l,A,t,p.state))),e&&a===null)throw Error(o(528,""));return p}if(e&&a!==null)throw Error(o(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Er(t),t=dA(l).hoistableScripts,a=t.get(e),a||(a={type:"script",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,A))}}function Ur(A){return'href="'+Zt(A)+'"'}function Fi(A){return'link[rel="stylesheet"]['+A+"]"}function Tg(A){return C({},A,{"data-precedence":A.precedence,precedence:null})}function fb(A,e,t,a){A.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=A.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Et(e,"link",t),u(e),A.head.appendChild(e))}function Er(A){return'[src="'+Zt(A)+'"]'}function ji(A){return"script[async]"+A}function Ig(A,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var a=A.querySelector('style[data-href~="'+Zt(t.href)+'"]');if(a)return e.instance=a,u(a),a;var l=C({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(A.ownerDocument||A).createElement("style"),u(a),Et(a,"style",l),os(a,t.precedence,A),e.instance=a;case"stylesheet":l=Ur(t.href);var c=A.querySelector(Fi(l));if(c)return e.state.loading|=4,e.instance=c,u(c),c;a=Tg(t),(l=tn.get(l))&&id(a,l),c=(A.ownerDocument||A).createElement("link"),u(c);var p=c;return p._p=new Promise(function(y,M){p.onload=y,p.onerror=M}),Et(c,"link",a),e.state.loading|=4,os(c,t.precedence,A),e.instance=c;case"script":return c=Er(t.src),(l=A.querySelector(ji(c)))?(e.instance=l,u(l),l):(a=t,(l=tn.get(c))&&(a=C({},t),od(a,l)),A=A.ownerDocument||A,l=A.createElement("script"),u(l),Et(l,"link",a),A.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,os(a,t.precedence,A));return e.instance}function os(A,e,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,c=l,p=0;p<a.length;p++){var y=a[p];if(y.dataset.precedence===e)c=y;else if(c!==l)break}c?c.parentNode.insertBefore(A,c.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(A,e.firstChild))}function id(A,e){A.crossOrigin==null&&(A.crossOrigin=e.crossOrigin),A.referrerPolicy==null&&(A.referrerPolicy=e.referrerPolicy),A.title==null&&(A.title=e.title)}function od(A,e){A.crossOrigin==null&&(A.crossOrigin=e.crossOrigin),A.referrerPolicy==null&&(A.referrerPolicy=e.referrerPolicy),A.integrity==null&&(A.integrity=e.integrity)}var ss=null;function Lg(A,e,t){if(ss===null){var a=new Map,l=ss=new Map;l.set(t,a)}else l=ss,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(A))return a;for(a.set(A,null),t=t.getElementsByTagName(A),l=0;l<t.length;l++){var c=t[l];if(!(c[_]||c[E]||A==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(e)||"";p=A+p;var y=a.get(p);y?y.push(c):a.set(p,[c])}}return a}function Og(A,e,t){A=A.ownerDocument||A,A.head.insertBefore(t,e==="title"?A.querySelector("head > title"):null)}function hb(A,e,t){if(t===1||e.itemProp!=null)return!1;switch(A){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return A=e.disabled,typeof e.precedence=="string"&&A==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Kg(A){return!(A.type==="stylesheet"&&(A.state.loading&3)===0)}var Si=null;function gb(){}function pb(A,e,t){if(Si===null)throw Error(o(475));var a=Si;if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=Ur(t.href),c=A.querySelector(Fi(l));if(c){A=c._p,A!==null&&typeof A=="object"&&typeof A.then=="function"&&(a.count++,a=ls.bind(a),A.then(a,a)),e.state.loading|=4,e.instance=c,u(c);return}c=A.ownerDocument||A,t=Tg(t),(l=tn.get(l))&&id(t,l),c=c.createElement("link"),u(c);var p=c;p._p=new Promise(function(y,M){p.onload=y,p.onerror=M}),Et(c,"link",t),e.instance=c}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,A),(A=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=ls.bind(a),A.addEventListener("load",e),A.addEventListener("error",e))}}function xb(){if(Si===null)throw Error(o(475));var A=Si;return A.stylesheets&&A.count===0&&sd(A,A.stylesheets),0<A.count?function(e){var t=setTimeout(function(){if(A.stylesheets&&sd(A,A.stylesheets),A.unsuspend){var a=A.unsuspend;A.unsuspend=null,a()}},6e4);return A.unsuspend=e,function(){A.unsuspend=null,clearTimeout(t)}}:null}function ls(){if(this.count--,this.count===0){if(this.stylesheets)sd(this,this.stylesheets);else if(this.unsuspend){var A=this.unsuspend;this.unsuspend=null,A()}}}var cs=null;function sd(A,e){A.stylesheets=null,A.unsuspend!==null&&(A.count++,cs=new Map,e.forEach(mb,A),cs=null,ls.call(A))}function mb(A,e){if(!(e.state.loading&4)){var t=cs.get(A);if(t)var a=t.get(null);else{t=new Map,cs.set(A,t);for(var l=A.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var p=l[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(t.set(p.dataset.precedence,p),a=p)}a&&t.set(null,a)}l=e.instance,p=l.getAttribute("data-precedence"),c=t.get(p)||a,c===a&&t.set(null,l),t.set(p,l),this.count++,a=ls.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),c?c.parentNode.insertBefore(l,c.nextSibling):(A=A.nodeType===9?A.head:A,A.insertBefore(l,A.firstChild)),e.state.loading|=4}}var ki={$$typeof:XA,Provider:null,Consumer:null,_currentValue:FA,_currentValue2:FA,_threadCount:0};function bb(A,e,t,a,l,c,p,y){this.tag=1,this.containerInfo=A,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ue(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ue(0),this.hiddenUpdates=Ue(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function zg(A,e,t,a,l,c,p,y,M,tA,BA,kA){return A=new bb(A,e,t,p,y,M,tA,kA),e=1,c===!0&&(e|=24),c=Rt(3,null,null,e),A.current=c,c.stateNode=A,e=_l(),e.refCount++,A.pooledCache=e,e.refCount++,c.memoizedState={element:a,isDehydrated:t,cache:e},Vl(c),A}function Rg(A){return A?(A=ar,A):ar}function _g(A,e,t,a,l,c){l=Rg(l),a.context===null?a.context=l:a.pendingContext=l,a=Jn(e),a.payload={element:t},c=c===void 0?null:c,c!==null&&(a.callback=c),t=Zn(A,a,e),t!==null&&(Vt(t,A,e),oi(t,A,e))}function Gg(A,e){if(A=A.memoizedState,A!==null&&A.dehydrated!==null){var t=A.retryLane;A.retryLane=t!==0&&t<e?t:e}}function ld(A,e){Gg(A,e),(A=A.alternate)&&Gg(A,e)}function Yg(A){if(A.tag===13){var e=nr(A,67108864);e!==null&&Vt(e,A,67108864),ld(A,67108864)}}var ds=!0;function Bb(A,e,t,a){var l=G.T;G.T=null;var c=pA.p;try{pA.p=2,cd(A,e,t,a)}finally{pA.p=c,G.T=l}}function wb(A,e,t,a){var l=G.T;G.T=null;var c=pA.p;try{pA.p=8,cd(A,e,t,a)}finally{pA.p=c,G.T=l}}function cd(A,e,t,a){if(ds){var l=dd(a);if(l===null)Wc(A,e,a,us,t),Vg(A,a);else if(vb(l,A,e,t,a))a.stopPropagation();else if(Vg(A,a),e&4&&-1<yb.indexOf(A)){for(;l!==null;){var c=cA(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=hA(c.pendingLanes);if(p!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;p;){var M=1<<31-O(p);y.entanglements[1]|=M,p&=~M}mn(c),(ze&6)===0&&(Zo=pe()+500,Ci(0))}}break;case 13:y=nr(c,2),y!==null&&Vt(y,c,2),Wo(),ld(c,2)}if(c=dd(a),c===null&&Wc(A,e,a,us,t),c===l)break;l=c}l!==null&&a.stopPropagation()}else Wc(A,e,a,null,t)}}function dd(A){return A=pl(A),ud(A)}var us=null;function ud(A){if(us=null,A=fA(A),A!==null){var e=f(A);if(e===null)A=null;else{var t=e.tag;if(t===13){if(A=h(e),A!==null)return A;A=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;A=null}else e!==A&&(A=null)}}return us=A,null}function Xg(A){switch(A){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(te()){case fe:return 2;case ne:return 8;case me:case De:return 32;case Je:return 268435456;default:return 32}default:return 32}}var fd=!1,sa=null,la=null,ca=null,Hi=new Map,Ni=new Map,da=[],yb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vg(A,e){switch(A){case"focusin":case"focusout":sa=null;break;case"dragenter":case"dragleave":la=null;break;case"mouseover":case"mouseout":ca=null;break;case"pointerover":case"pointerout":Hi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ni.delete(e.pointerId)}}function Mi(A,e,t,a,l,c){return A===null||A.nativeEvent!==c?(A={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:c,targetContainers:[l]},e!==null&&(e=cA(e),e!==null&&Yg(e)),A):(A.eventSystemFlags|=a,e=A.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),A)}function vb(A,e,t,a,l){switch(e){case"focusin":return sa=Mi(sa,A,e,t,a,l),!0;case"dragenter":return la=Mi(la,A,e,t,a,l),!0;case"mouseover":return ca=Mi(ca,A,e,t,a,l),!0;case"pointerover":var c=l.pointerId;return Hi.set(c,Mi(Hi.get(c)||null,A,e,t,a,l)),!0;case"gotpointercapture":return c=l.pointerId,Ni.set(c,Mi(Ni.get(c)||null,A,e,t,a,l)),!0}return!1}function Jg(A){var e=fA(A.target);if(e!==null){var t=f(e);if(t!==null){if(e=t.tag,e===13){if(e=h(t),e!==null){A.blockedOn=e,TA(A.priority,function(){if(t.tag===13){var a=Xt();a=Le(a);var l=nr(t,a);l!==null&&Vt(l,t,a),ld(t,a)}});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){A.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}A.blockedOn=null}function fs(A){if(A.blockedOn!==null)return!1;for(var e=A.targetContainers;0<e.length;){var t=dd(A.nativeEvent);if(t===null){t=A.nativeEvent;var a=new t.constructor(t.type,t);gl=a,t.target.dispatchEvent(a),gl=null}else return e=cA(t),e!==null&&Yg(e),A.blockedOn=t,!1;e.shift()}return!0}function Zg(A,e,t){fs(A)&&t.delete(e)}function Cb(){fd=!1,sa!==null&&fs(sa)&&(sa=null),la!==null&&fs(la)&&(la=null),ca!==null&&fs(ca)&&(ca=null),Hi.forEach(Zg),Ni.forEach(Zg)}function hs(A,e){A.blockedOn===e&&(A.blockedOn=null,fd||(fd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Cb)))}var gs=null;function $g(A){gs!==A&&(gs=A,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){gs===A&&(gs=null);for(var e=0;e<A.length;e+=3){var t=A[e],a=A[e+1],l=A[e+2];if(typeof a!="function"){if(ud(a||t)===null)continue;break}var c=cA(t);c!==null&&(A.splice(e,3),e-=3,uc(c,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function Di(A){function e(M){return hs(M,A)}sa!==null&&hs(sa,A),la!==null&&hs(la,A),ca!==null&&hs(ca,A),Hi.forEach(e),Ni.forEach(e);for(var t=0;t<da.length;t++){var a=da[t];a.blockedOn===A&&(a.blockedOn=null)}for(;0<da.length&&(t=da[0],t.blockedOn===null);)Jg(t),t.blockedOn===null&&da.shift();if(t=(A.ownerDocument||A).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],c=t[a+1],p=l[D]||null;if(typeof c=="function")p||$g(t);else if(p){var y=null;if(c&&c.hasAttribute("formAction")){if(l=c,p=c[D]||null)y=p.formAction;else if(ud(l)!==null)continue}else y=p.action;typeof y=="function"?t[a+1]=y:(t.splice(a,3),a-=3),$g(t)}}}function hd(A){this._internalRoot=A}ps.prototype.render=hd.prototype.render=function(A){var e=this._internalRoot;if(e===null)throw Error(o(409));var t=e.current,a=Xt();_g(t,a,A,e,null,null)},ps.prototype.unmount=hd.prototype.unmount=function(){var A=this._internalRoot;if(A!==null){this._internalRoot=null;var e=A.containerInfo;_g(A.current,2,null,A,null,null),Wo(),e[b]=null}};function ps(A){this._internalRoot=A}ps.prototype.unstable_scheduleHydration=function(A){if(A){var e=SA();A={blockedOn:null,target:A,priority:e};for(var t=0;t<da.length&&e!==0&&e<da[t].priority;t++);da.splice(t,0,A),t===0&&Jg(A)}};var Wg=r.version;if(Wg!=="19.1.0")throw Error(o(527,Wg,"19.1.0"));pA.findDOMNode=function(A){var e=A._reactInternals;if(e===void 0)throw typeof A.render=="function"?Error(o(188)):(A=Object.keys(A).join(","),Error(o(268,A)));return A=x(e),A=A!==null?B(A):null,A=A===null?null:A.stateNode,A};var Qb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xs.isDisabled&&xs.supportsFiber)try{Fe=xs.inject(Qb),be=xs}catch{}}return Ii.createRoot=function(A,e){if(!d(A))throw Error(o(299));var t=!1,a="",l=fh,c=hh,p=gh,y=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(p=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(y=e.unstable_transitionCallbacks)),e=zg(A,1,!1,null,null,t,a,l,c,p,y,null),A[b]=e.current,$c(A),new hd(e)},Ii.hydrateRoot=function(A,e,t){if(!d(A))throw Error(o(299));var a=!1,l="",c=fh,p=hh,y=gh,M=null,tA=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(p=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(M=t.unstable_transitionCallbacks),t.formState!==void 0&&(tA=t.formState)),e=zg(A,1,!0,e,t??null,a,l,c,p,y,M,tA),e.context=Rg(null),t=e.current,a=Xt(),a=Le(a),l=Jn(a),l.callback=null,Zn(t,l,a),t=a,e.current.lanes=t,_e(e,t),mn(e),A[b]=e.current,$c(A),new ps(e)},Ii.version="19.1.0",Ii}var op;function Ib(){if(op)return xd.exports;op=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),xd.exports=Tb(),xd.exports}var Lb=Ib();/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kb=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,o)=>o?o.toUpperCase():s.toLowerCase()),sp=i=>{const r=Kb(i);return r.charAt(0).toUpperCase()+r.slice(1)},lx=(...i)=>i.filter((r,s,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===s).join(" ").trim(),zb=i=>{for(const r in i)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Rb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=j.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:d="",children:f,iconNode:h,...m},x)=>j.createElement("svg",{ref:x,...Rb,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:lx("lucide",d),...!f&&!zb(m)&&{"aria-hidden":"true"},...m},[...h.map(([B,C])=>j.createElement(B,C)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=(i,r)=>{const s=j.forwardRef(({className:o,...d},f)=>j.createElement(_b,{ref:f,iconNode:r,className:lx(`lucide-${Ob(sp(i))}`,`lucide-${i}`,o),...d}));return s.displayName=sp(i),s};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Yb=re("activity",Gb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]],Vb=re("app-window",Xb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],_n=re("arrow-left",Jb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Gn=re("arrow-right",Zb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],cx=re("book-open",$b);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],dx=re("box",Wb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Pb=re("calendar",qb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AB=[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]],eB=re("chart-no-axes-gantt",AB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tB=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],nB=re("circle",tB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aB=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],rB=re("cloud",aB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iB=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],oB=re("code",iB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sB=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],wa=re("copy",sB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lB=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],cB=re("cpu",lB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dB=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],uB=re("database",dB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fB=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]],hB=re("diamond",fB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gB=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],wn=re("download",gB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pB=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],xB=re("file-text",pB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mB=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],ux=re("git-branch",mB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bB=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],ro=re("git-merge",bB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BB=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],wB=re("globe",BB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yB=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],vB=re("grid-3x3",yB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CB=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],QB=re("hard-drive",CB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UB=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Bn=re("image",UB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EB=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],fx=re("layers",EB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FB=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],jB=re("list",FB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SB=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],kB=re("maximize-2",SB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HB=[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]],NB=re("merge",HB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MB=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],DB=re("message-square",MB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TB=[["path",{d:"M5 12h14",key:"1ays0h"}]],fu=re("minus",TB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IB=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],hx=re("moon",IB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LB=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],OB=re("mouse-pointer",LB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KB=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],gx=re("move",KB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zB=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],RB=re("network",zB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _B=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],px=re("palette",_B);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GB=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],YB=re("pen-line",GB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XB=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],VB=re("pen",XB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JB=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],ZB=re("play",JB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $B=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],rt=re("plus",$B);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WB=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],qB=re("refresh-ccw",WB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PB=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Aw=re("refresh-cw",PB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],xx=re("rotate-ccw",ew);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]],nw=re("router",tw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],ya=re("save",aw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],iw=re("server",rw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],sw=re("shield",ow);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],cw=re("smartphone",lw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],uw=re("square",dw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],mx=re("sun",fw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],je=re("trash-2",hw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],yn=re("upload",gw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],xw=re("user",pw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],hu=re("users",mw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Xa=re("x",bw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ww=re("zap",Bw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Or=re("zoom-in",yw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Kr=re("zoom-out",vw),Cw=({projects:i,onCreateProject:r,onLoadProject:s,onDeleteProject:o})=>{const[d,f]=j.useState(!1);return n.jsxs("div",{className:"evolution-chart-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:"🌿"}),n.jsx("h2",{children:"Evolution Chart Maker"}),n.jsx("p",{children:"Visualize evolutionary relationships and timelines"}),n.jsxs("button",{onClick:()=>f(!0),className:"primary-btn",children:[n.jsx(rt,{size:16})," New Project"]}),i.length>0&&n.jsxs("div",{className:"project-list",children:[n.jsx("h3",{children:"Your Projects"}),i.map(h=>n.jsxs("div",{className:"project-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"project-card-content",children:[n.jsx("div",{className:"project-card-name",children:h.name}),n.jsxs("div",{className:"project-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.nodes?.length||0," nodes • ",h.connections?.length||0," connections"]})]})]}),n.jsxs("div",{className:"project-card-actions",children:[n.jsx("button",{onClick:m=>{m.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Gn,{size:16})}),n.jsx("button",{onClick:m=>{m.stopPropagation(),confirm("Delete this project?")&&o(h.id)},className:"delete-btn",children:n.jsx(je,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Project"}),n.jsx("button",{onClick:()=>f(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Project Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Mammalian Evolution",id:"projectName",autoFocus:!0})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Timeline Start"}),n.jsx("input",{type:"number",defaultValue:"500",id:"timelineStart"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Timeline End"}),n.jsx("input",{type:"number",defaultValue:"0",id:"timelineEnd"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Time Unit"}),n.jsxs("select",{id:"timeUnit",defaultValue:"mya",children:[n.jsx("option",{value:"bya",children:"Billion Years Ago (BYA)"}),n.jsx("option",{value:"mya",children:"Million Years Ago (MYA)"}),n.jsx("option",{value:"kya",children:"Thousand Years Ago (KYA)"}),n.jsx("option",{value:"ya",children:"Years Ago (YA)"})]})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>f(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("projectName").value,m=parseFloat(document.getElementById("timelineStart").value),x=parseFloat(document.getElementById("timelineEnd").value),B=document.getElementById("timeUnit").value;h.trim()&&m>x&&(r(h,m,x,B),f(!1))},className:"create-btn",children:"Create Project"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .evolution-chart-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          border-radius: 20px;
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
      `})]})},ms=[{value:"bya",label:"Billion Years Ago (BYA)",multiplier:1e9},{value:"mya",label:"Million Years Ago (MYA)",multiplier:1e6},{value:"kya",label:"Thousand Years Ago (KYA)",multiplier:1e3},{value:"ya",label:"Years Ago (YA)",multiplier:1}],Qw=({project:i,nodes:r,connections:s,onUpdateProject:o,onBack:d})=>{const x=j.useRef(null),B=j.useRef(null),C=j.useRef(null),F=j.useRef(!1),T=j.useRef({x:0,y:0}),oA=j.useRef(null),[eA,uA]=j.useState(r||[]),[MA,NA]=j.useState(s||[]),[gA,XA]=j.useState(null),[xA,mA]=j.useState(null),[Y,IA]=j.useState(i?.zoom||1),[V,sA]=j.useState(i?.pan||{x:0,y:0}),[KA,GA]=j.useState(!1),[CA,LA]=j.useState(null),[$A,JA]=j.useState(!1),[G,pA]=j.useState(null),[FA,WA]=j.useState({}),[U,J]=j.useState(!1),[$,lA]=j.useState(0);j.useEffect(()=>{const H=()=>{B.current&&lA(B.current.scrollLeft)},q=B.current;if(q)return q.addEventListener("scroll",H),()=>q.removeEventListener("scroll",H)},[]),j.useEffect(()=>{if(i){const H=setTimeout(()=>{o({...i,nodes:eA,connections:MA,zoom:Y,pan:V})},500);return()=>clearTimeout(H)}},[eA,MA,Y,V,i,o]),j.useEffect(()=>{const H=setInterval(()=>{WA(q=>{const jA={};return MA.forEach(rA=>{jA[rA.id]=((q[rA.id]||0)+2)%100}),jA})},50);return()=>clearInterval(H)},[MA]);const QA=(H,q)=>{const jA=ms.find(rA=>rA.value===q)||ms[0];return H*jA.multiplier},RA=j.useCallback(H=>{if(!i)return 0;const q=QA(H.value,H.unit),jA=QA(i.timelineStart,i.timeUnit),rA=QA(i.timelineEnd,i.timeUnit),hA=jA-rA;return(jA-q)/hA*3e3},[i]),K=j.useCallback(H=>{if(!i)return 0;const q=3e3,jA=QA(i.timelineStart,i.timeUnit),rA=QA(i.timelineEnd,i.timeUnit),hA=jA-rA,oe=H/q;return jA-oe*hA},[i]),OA=(H,q)=>{const jA=H%1===0?H.toFixed(0):H.toFixed(2);return q==="bya"?`${jA} BYA`:q==="mya"?`${jA} MYA`:q==="kya"?`${jA} KYA`:`${jA} YA`},HA=j.useCallback(()=>{if(!i)return[];const H=QA(i.timelineStart,i.timeUnit),q=QA(i.timelineEnd,i.timeUnit),jA=H-q,rA=jA/Y;let hA;i.timeUnit==="bya"?rA>5e11?hA=1e11:rA>1e11?hA=25e9:rA>5e10?hA=1e10:rA>2e10?hA=5e9:rA>1e10?hA=25e8:rA>5e9?hA=1e9:hA=5e7:i.timeUnit==="mya"?rA>5e8?hA=1e8:rA>1e8?hA=25e6:rA>5e7?hA=1e7:rA>2e7?hA=5e6:rA>1e7?hA=25e5:rA>5e6?hA=1e6:hA=5e5:i.timeUnit==="kya"?rA>5e5?hA=1e5:rA>1e5?hA=25e3:rA>5e4?hA=1e4:rA>2e4?hA=5e3:rA>1e4?hA=2500:rA>5e3?hA=1e3:hA=500:rA>5e3?hA=1e3:rA>2e3?hA=500:rA>1e3?hA=250:rA>500?hA=100:rA>200?hA=50:rA>100?hA=25:rA>50?hA=10:hA=5;const oe=[],xe=Math.floor(q/hA)*hA,ce=Math.ceil(H/hA)*hA;for(let he=xe;he<=ce;he+=hA)if(he>=q&&he<=H){let ke=he,Ue="ya";he>=1e9?(ke=he/1e9,Ue="bya"):he>=1e6?(ke=he/1e6,Ue="mya"):he>=1e3&&(ke=he/1e3,Ue="kya"),oe.push({value:ke,unit:Ue,position:(H-he)/jA})}return oe},[i,Y]),bA=()=>{const H={};eA.forEach(rA=>{H[rA.id]=0}),MA.forEach(rA=>{H[rA.from]=(H[rA.from]||0)+1,H[rA.to]=(H[rA.to]||0)+1});let q=null,jA=0;return Object.entries(H).forEach(([rA,hA])=>{hA>jA&&(jA=hA,q=rA)}),q?eA.find(rA=>rA.id===parseInt(q)):null},L=(H,q)=>{if(!i||!B.current)return;const jA=B.current.getBoundingClientRect(),rA=B.current.scrollLeft,hA=B.current.scrollTop,oe=H-jA.left+rA,xe=q-jA.top+hA-80,he=K(oe/Y)/(ms.find(Ue=>Ue.value===i.timeUnit)?.multiplier||1),ke={id:Date.now(),x:oe/Y,y:Math.max(20,xe/Y),title:"New Species",description:"Description here...",imageSrc:"",timeline:{value:parseFloat(he.toFixed(4)),unit:i.timeUnit}};uA([...eA,ke]),LA(ke),GA(!0)},X=H=>{uA(eA.map(q=>q.id===H.id?H:q)),LA(null),GA(!1)},zA=H=>{uA(eA.filter(q=>q.id!==H)),NA(MA.filter(q=>q.from!==H&&q.to!==H)),XA(null)},wA=(H,q)=>{const jA={id:Date.now(),from:H,to:q};NA([...MA,jA])},EA=H=>{NA(MA.filter(q=>q.id!==H)),mA(null)},nA=(H,q)=>{$A||(H.stopPropagation(),F.current=!0,XA(q),mA(null),T.current={x:H.clientX,y:H.clientY})},ye=j.useCallback(H=>{!F.current||!gA||(oA.current&&cancelAnimationFrame(oA.current),oA.current=requestAnimationFrame(()=>{const q=H.clientX-T.current.x,jA=H.clientY-T.current.y;T.current={x:H.clientX,y:H.clientY};const rA=gA.x+q/Y,hA=Math.max(20,gA.y+jA/Y),oe={...gA,x:rA,y:hA};uA(xe=>xe.map(ce=>ce.id===gA.id?oe:ce)),XA(oe)}))},[gA,Y]),pe=j.useCallback(()=>{F.current=!1,oA.current&&cancelAnimationFrame(oA.current)},[]),te=(H,q)=>{H.stopPropagation(),$A?G?G!==q.id&&(MA.find(rA=>rA.from===G&&rA.to===q.id||rA.from===q.id&&rA.to===G)||wA(G,q.id),JA(!1),pA(null)):pA(q.id):F.current||(XA(q),mA(null))},fe=(H,q)=>{const jA=RA(H.timeline)*Y,rA=H.y*Y+80,hA=Y<=1?140*Y:140,oe=Y<=1?25*Y:25,xe=jA+hA/2,ce=rA+oe/2,he=RA(q.timeline)*Y,ke=q.y*Y+80,Ue=he+hA/2,_e=ke+oe/2,We=Ue-xe,Ze=_e-ce,Ie=Math.atan2(Ze,We);let Le,N;const SA=Math.atan2(oe/2,hA/2);return Math.abs(Ie)<=SA?(Le=jA+hA,N=ce+Math.tan(Ie)*(hA/2)):Math.abs(Ie)>=Math.PI-SA?(Le=jA,N=ce-Math.tan(Ie)*(hA/2)):Ie>0?(N=rA+oe,Le=xe+oe/2/Math.tan(Ie)):(N=rA,Le=xe-oe/2/Math.tan(Ie)),{x:Le,y:N}},ne=(H,q)=>{if(!H||!q)return"";const jA=fe(H,q),rA=fe(q,H),hA=rA.x-jA.x,oe=rA.y-jA.y,xe=Math.sqrt(hA*hA+oe*oe),ce=Math.min(xe*.4,150),he=jA.x+ce,ke=jA.y,Ue=rA.x-ce,_e=rA.y;return`M ${jA.x} ${jA.y} C ${he} ${ke}, ${Ue} ${_e}, ${rA.x} ${rA.y}`},me=(H,q,jA)=>{if(!H||!q)return{x:0,y:0,angle:0};const rA=fe(H,q),hA=fe(q,H),oe=hA.x-rA.x,xe=hA.y-rA.y,ce=Math.sqrt(oe*oe+xe*xe),he=Math.min(ce*.4,150),ke=rA.x+he,Ue=rA.y,_e=hA.x-he,We=hA.y,Ze=jA/100,Ie=1-Ze,Le=Ie*Ie,N=Ze*Ze,SA=Le*Ie*rA.x+3*Le*Ze*ke+3*Ie*N*_e+N*Ze*hA.x,TA=Le*Ie*rA.y+3*Le*Ze*Ue+3*Ie*N*We+N*Ze*hA.y,g=3*Le*(ke-rA.x)+6*Ie*Ze*(_e-ke)+3*N*(hA.x-_e),E=3*Le*(Ue-rA.y)+6*Ie*Ze*(We-Ue)+3*N*(hA.y-We),D=Math.atan2(E,g)*180/Math.PI;return{x:SA,y:TA,angle:D}},De=(H,q)=>{const jA=fe(H,q),rA=fe(q,H);return{x:(jA.x+rA.x)/2,y:(jA.y+rA.y)/2}},Je=()=>{if(!i)return;const q=JSON.stringify({project:i,nodes:eA,connections:MA,zoom:Y,pan:V},null,2),jA=new Blob([q],{type:"application/json"}),rA=URL.createObjectURL(jA),hA=document.createElement("a");hA.href=rA,hA.download=`${i.name.replace(/\s+/g,"-")}-evolution-chart.json`,hA.click(),URL.revokeObjectURL(rA)},Te=H=>{const q=H.target.files[0];if(!q)return;const jA=new FileReader;jA.onload=rA=>{try{const hA=JSON.parse(rA.target.result);hA.project&&hA.nodes&&(o({...hA.project,nodes:hA.nodes,connections:hA.connections,zoom:hA.zoom,pan:hA.pan}),uA(hA.nodes),NA(hA.connections),IA(hA.zoom||1),sA(hA.pan||{x:0,y:0}))}catch{alert("Error parsing the file. Please check the file format.")}},jA.readAsText(q)},ie=H=>{H.ctrlKey||H.metaKey?L(H.clientX,H.clientY):(XA(null),mA(null),$A&&(JA(!1),pA(null)))},Fe=H=>{LA(H),GA(!0)},be=H=>{IA(q=>Math.max(.4,Math.min(100,q+H)))},Se=H=>{if(H.ctrlKey||H.metaKey){H.preventDefault();const q=B.current.getBoundingClientRect();H.clientX-q.left,H.clientY-q.top;const jA=-H.deltaY*.001,rA=Math.max(.4,Math.min(100,Y+jA));IA(rA)}},O=j.useCallback(H=>{if(H.target.tagName==="INPUT"||H.target.tagName==="TEXTAREA")return;const q=20;switch(H.key){case"ArrowUp":H.preventDefault(),B.current&&(B.current.scrollTop-=q);break;case"ArrowDown":H.preventDefault(),B.current&&(B.current.scrollTop+=q);break;case"ArrowLeft":H.preventDefault(),B.current&&(B.current.scrollLeft-=q);break;case"ArrowRight":H.preventDefault(),B.current&&(B.current.scrollLeft+=q);break}},[]);j.useEffect(()=>(document.addEventListener("keydown",O),()=>{document.removeEventListener("keydown",O)}),[O]),j.useEffect(()=>(document.addEventListener("mousemove",ye),document.addEventListener("mouseup",pe),()=>{document.removeEventListener("mousemove",ye),document.removeEventListener("mouseup",pe),oA.current&&cancelAnimationFrame(oA.current)}),[ye,pe]);const yA=bA();return n.jsxs("div",{className:`evolution-chart ${U?"dark":""}`,children:[n.jsxs("div",{className:"header",children:[n.jsxs("div",{className:"header-left",children:[n.jsx("h1",{children:"🧬 Evolution Chart Maker"}),n.jsx("span",{className:"project-name",children:i?.name})]}),n.jsxs("div",{className:"toolbar",children:[n.jsx("button",{onClick:d,className:"btn btn-primary",children:"← Back to Projects"}),n.jsx("button",{onClick:()=>{JA(!$A),pA(null)},className:`btn ${$A?"btn-danger":"btn-warning"}`,children:$A?"Cancel Connection":"🔗 Connect Nodes"}),n.jsxs("button",{onClick:()=>C.current?.click(),className:"btn btn-info",children:[n.jsx(yn,{size:16})," Import"]}),n.jsxs("button",{onClick:Je,className:"btn btn-success",children:[n.jsx(wn,{size:16})," Export"]}),n.jsxs("button",{onClick:()=>J(!U),className:"btn btn-secondary",children:[U?n.jsx(mx,{size:16}):n.jsx(hx,{size:16}),U?" Light":" Dark"]}),n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:()=>be(-.2),className:"zoom-btn",children:n.jsx(Kr,{size:16})}),n.jsxs("div",{className:"zoom-input-container",children:[n.jsx("input",{type:"number",min:"40",max:"10000",step:"10",value:Math.round(Y*100),onChange:H=>{const q=Math.max(.4,Math.min(100,parseInt(H.target.value)/100));IA(q)},className:"zoom-input"}),n.jsx("span",{className:"zoom-percent",children:"%"})]}),n.jsx("button",{onClick:()=>be(.2),className:"zoom-btn",children:n.jsx(Or,{size:16})})]})]})]}),n.jsx("div",{className:"timeline",children:HA().map((H,q)=>n.jsxs("div",{className:"timeline-marker",style:{left:`${H.position*3e3*Y-$}px`},children:[n.jsx("div",{className:"timeline-tick"}),n.jsx("span",{className:"timeline-label",children:OA(H.value,H.unit)})]},q))}),n.jsx("div",{ref:B,className:"scroll-container",onWheel:Se,children:n.jsxs("div",{ref:x,onClick:ie,className:"canvas",style:{cursor:$A?"crosshair":"default",width:`${3300*Y}px`,height:`${2e3*Y}px`,minHeight:"100%"},children:[n.jsxs("svg",{className:"connections-layer",style:{width:"100%",height:"100%"},children:[n.jsxs("defs",{children:[n.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"10",refX:"9",refY:"3",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3, 0 6",className:"arrowhead"})}),n.jsx("marker",{id:"arrowhead-selected",markerWidth:"10",markerHeight:"10",refX:"9",refY:"3",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3, 0 6",className:"arrowhead-selected"})}),n.jsx("marker",{id:"arrowhead-central",markerWidth:"10",markerHeight:"10",refX:"9",refY:"3",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3, 0 6",className:"arrowhead-central"})})]}),MA.map(H=>{const q=eA.find(ce=>ce.id===H.from),jA=eA.find(ce=>ce.id===H.to);if(!q||!jA)return null;const rA=De(q,jA),hA=xA===H.id||gA&&(gA.id===q.id||gA.id===jA.id),oe=yA&&(q.id===yA.id||jA.id===yA.id),xe=me(q,jA,FA[H.id]||0);return n.jsxs("g",{children:[n.jsx("path",{d:ne(q,jA),className:`connection-path ${hA?"selected":""} ${oe?"central":""}`,strokeWidth:oe?"3":"2",fill:"none",markerEnd:`url(#${hA?"arrowhead-selected":oe?"arrowhead-central":"arrowhead"})`}),n.jsx("polygon",{points:"0,-4 8,0 0,4",className:`arrow ${hA?"selected":""} ${oe?"central":""}`,transform:`translate(${xe.x}, ${xe.y}) rotate(${xe.angle})`}),hA&&n.jsx("circle",{cx:rA.x,cy:rA.y,r:10,className:"delete-connection",onClick:ce=>{ce.stopPropagation(),EA(H.id)},style:{cursor:"pointer",pointerEvents:"all"}})]},H.id)})]}),eA.map(H=>{const q=yA&&yA.id===H.id,jA=gA?.id===H.id;return n.jsxs("div",{className:`node ${jA?"selected":""} ${q?"central":""}`,style:{left:`${RA(H.timeline)*Y}px`,top:`${H.y*Y+80}px`,width:"140px",height:"25px",fontSize:"13px",transform:Y<=1?`scale(${Y})`:"",transformOrigin:"top left"},onMouseDown:rA=>nA(rA,H),onClick:rA=>te(rA,H),onDoubleClick:()=>Fe(H),children:[H.imageSrc&&n.jsx("img",{src:H.imageSrc,alt:H.title,className:"node-image",style:{width:"32px",height:"32px"}}),n.jsxs("div",{className:"node-content",children:[n.jsx("div",{className:"node-title",children:H.title}),n.jsx("div",{className:"node-time",children:OA(H.timeline.value,H.timeline.unit)})]}),jA&&n.jsx("button",{onClick:rA=>{rA.stopPropagation(),zA(H.id)},className:"delete-btn",style:{width:"24px",height:"24px",top:"-8px",right:"-8px"},children:n.jsx(je,{size:14})})]},H.id)}),$A&&n.jsx("div",{className:"connection-hint",children:G?"🎯 Select target node":"🎯 Select source node"}),n.jsxs("div",{className:"help-panel",children:[n.jsxs("div",{children:[n.jsx("strong",{children:"💡 Ctrl+Click:"})," Create node"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"🔗 Connect:"})," Link nodes"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"🖱️ Drag:"})," Move vertically"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"✏️ Double-click:"})," Edit"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"📜 Scrollbars:"})," Navigate canvas"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"⚡ Ctrl+Scroll:"})," Zoom"]}),n.jsxs("div",{children:[n.jsx("strong",{children:"⬆️⬇️⬅️➡️ Arrow keys:"})," Navigate"]})]})]})}),KA&&CA&&n.jsx("div",{className:"modal-overlay",onClick:()=>GA(!1),children:n.jsxs("div",{className:"modal",onClick:H=>H.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"✏️ Edit Node"}),n.jsx("button",{onClick:()=>GA(!1),className:"close-btn",children:n.jsx(Xa,{size:20})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Title"}),n.jsx("input",{type:"text",defaultValue:CA.title,placeholder:"Species name",id:"nodeTitle"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Image URL"}),n.jsx("input",{type:"text",defaultValue:CA.imageSrc,placeholder:"https://example.com/image.jpg",id:"nodeImage"})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Timeline Value"}),n.jsx("input",{type:"number",step:"any",defaultValue:CA.timeline.value,id:"nodeTimelineValue"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Time Unit"}),n.jsx("select",{id:"nodeTimelineUnit",defaultValue:CA.timeline.unit,children:ms.map(H=>n.jsx("option",{value:H.value,children:H.value.toUpperCase()},H.value))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Description"}),n.jsx("textarea",{defaultValue:CA.description,placeholder:"Brief description...",rows:4,id:"nodeDescription"})]}),n.jsxs("div",{className:"form-actions",children:[n.jsx("button",{onClick:()=>GA(!1),className:"btn btn-secondary",children:"Cancel"}),n.jsx("button",{onClick:()=>{const H={...CA,title:document.getElementById("nodeTitle").value,imageSrc:document.getElementById("nodeImage").value,timeline:{value:parseFloat(document.getElementById("nodeTimelineValue").value),unit:document.getElementById("nodeTimelineUnit").value},description:document.getElementById("nodeDescription").value};X(H)},className:"btn btn-primary",children:"💾 Save Changes"})]})]})}),n.jsx("input",{ref:C,type:"file",accept:".json",onChange:Te,style:{display:"none"}}),n.jsx("style",{jsx:!0,children:`
        .evolution-chart {
          width: 100vw;
          height: 100vh;
          background: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          overflow: hidden;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .evolution-chart.dark {
          background: #0f172a;
          color: #f8fafc;
        }
        
        .header {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          padding: 16px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          z-index: 1000;
          position: relative;
        }
        
        .dark .header {
          background: rgba(15, 23, 42, 0.98);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        
        .header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .project-name {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }
        
        .toolbar {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-right: 120px;
        }
        
        .btn {
          border: none;
          padding: 10px 18px;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.2s;
          color: white;
        }
        
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .btn-secondary {
          background: #94a3b8;
        }
        
        .dark .btn-secondary {
          background: #475569;
        }
        
        .btn-success {
          background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
        }
        
        .btn-warning {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
        }
        
        .btn-danger {
          background: linear-gradient(135deg, #f87171 0%, #ef4444 100%);
        }
        
        .btn-info {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
        }
        
        .zoom-controls {
          display: flex;
          gap: 8px;
          align-items: center;
          background: #f1f5f9;
          padding: 4px;
          border-radius: 10px;
        }
        
        .dark .zoom-controls {
          background: #1e293b;
        }
        
        .zoom-btn {
          padding: 8px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          background: white;
          display: flex;
          align-items: center;
          transition: all 0.2s;
        }
        
        .dark .zoom-btn {
          background: #334155;
          color: #f8fafc;
        }
        
        .zoom-btn:hover {
          background: #e2e8f0;
        }
        
        .dark .zoom-btn:hover {
          background: #475569;
        }
        
        .zoom-input-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .zoom-input {
          width: 60px;
          padding: 6px 8px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          text-align: center;
          background: white;
          color: #475569;
        }

        .dark .zoom-input {
          background: #334155;
          border: 1px solid #475569;
          color: #f8fafc;
        }

        .zoom-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
        }

        .zoom-percent {
          position: absolute;
          right: 8px;
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          pointer-events: none;
        }

        .dark .zoom-percent {
          color: #94a3b8;
        }
        
        .timeline {
          position: absolute;
          top: 70px;
          left: 0;
          right: 0;
          height: 80px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 3px solid rgba(102, 126, 234, 0.3);
          z-index: 100;
          overflow: hidden;
        }
        
        .dark .timeline {
          background: rgba(15, 23, 42, 0.95);
          border-bottom: 3px solid rgba(102, 126, 234, 0.5);
        }
        
        .timeline-marker {
          position: absolute;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        
        .timeline-tick {
          width: 2px;
          height: 30px;
          background: linear-gradient(to bottom, #667eea, transparent);
          margin-bottom: 8px;
        }
        
        .timeline-label {
          font-size: 13px;
          font-weight: 700;
          color: #475569;
          white-space: nowrap;
          background: rgba(255,255,255,0.9);
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid rgba(102, 126, 234, 0.2);
        }
        
        .dark .timeline-label {
          color: #cbd5e1;
          background: rgba(30, 41, 59, 0.9);
          border: 1px solid rgba(102, 126, 234, 0.4);
        }
        
        .scroll-container {
          position: absolute;
          top: 150px;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: auto;
          background: #f8fafc;
        }
        
        .dark .scroll-container {
          background: #0f172a;
        }
        
        .scroll-container::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }
        
        .scroll-container::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
        }
        
        .dark .scroll-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        
        .scroll-container::-webkit-scrollbar-thumb {
          background: rgba(102, 126, 234, 0.3);
          border-radius: 6px;
        }
        
        .scroll-container::-webkit-scrollbar-thumb:hover {
          background: rgba(102, 126, 234, 0.5);
        }
        
        .dark .scroll-container::-webkit-scrollbar-thumb {
          background: rgba(102, 126, 234, 0.5);
        }
        
        .dark .scroll-container::-webkit-scrollbar-thumb:hover {
          background: rgba(102, 126, 234, 0.7);
        }
        
        .canvas {
          position: relative;
          background: #f8fafc;
          transition: background 0.3s ease;
        }
        
        .dark .canvas {
          background: #0f172a;
        }
        
        .connections-layer {
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 1;
        }
        
        .connection-path {
          stroke: rgba(102, 126, 234, 0.6);
          transition: all 0.3s ease;
        }
        
        .dark .connection-path {
          stroke: rgba(102, 126, 234, 0.8);
        }
        
        .connection-path.selected {
          stroke: #fbbf24;
          stroke-width: 3;
        }
        
        .connection-path.central {
          stroke: #60a5fa;
          stroke-width: 3;
        }
        
        .arrowhead {
          fill: rgba(102, 126, 234, 0.6);
        }
        
        .dark .arrowhead {
          fill: rgba(102, 126, 234, 0.8);
        }
        
        .arrowhead-selected {
          fill: #fbbf24;
        }
        
        .arrowhead-central {
          fill: #60a5fa;
        }
        
        .arrow {
          fill: rgba(102, 126, 234, 0.6);
        }
        
        .dark .arrow {
          fill: rgba(102, 126, 234, 0.8);
        }
        
        .arrow.selected {
          fill: #fbbf24;
        }
        
        .arrow.central {
          fill: #60a5fa;
        }
        
        .delete-connection {
          fill: #ef4444;
          stroke: white;
          stroke-width: 2;
          transition: all 0.2s;
        }
        
        .delete-connection:hover {
          fill: #dc2626;
          transform: scale(1.1);
        }
        
        .node {
          position: absolute;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 10px;
          cursor: grab;
          z-index: 10;
          border: 2px solid rgba(148, 145, 145, 0.5);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .dark .node {
          background: rgba(30, 41, 59, 0.95);
          border: 2px solid rgba(255,255,255,0.1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        
        .node:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .dark .node:hover {
          box-shadow: 0 8px 25px rgba(0,0,0,0.4);
        }
        
        .node.selected {
          border: 2px solid #fbbf24;
          box-shadow: 0 8px 25px rgba(251, 191, 36, 0.3);
          z-index: 100;
        }
        
        .node.central {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
          border: 2px solid #60a5fa;
          box-shadow: 0 8px 25px rgba(96, 165, 250, 0.3);
        }
        
        .dark .node.central {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.25), rgba(118, 75, 162, 0.25));
        }
        
        .node.central.selected {
          border: 2px solid #fbbf24;
          box-shadow: 0 8px 25px rgba(251, 191, 36, 0.4);
        }
        
        .node:active {
          cursor: grabbing;
        }
        
        .node-image {
          object-fit: cover;
          border-radius: 50%;
          flex-shrink: 0;
          border: 2px solid rgba(102, 126, 234, 0.2);
        }
        
        .node-content {
          flex: 1;
          min-width: 0;
        }
        
        .node-title {
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 2px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .dark .node-title {
          color: #f8fafc;
        }
        
        .node-time {
          font-size: 0.85em;
          font-weight: 600;
          color: #64748b;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .dark .node-time {
          color: #94a3b8;
        }
        
        .delete-btn {
          position: absolute;
          background: #ef4444;
          color: white;
          border: 2px solid white;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
          transition: all 0.2s;
        }
        
        .dark .delete-btn {
          border: 2px solid #0f172a;
        }
        
        .delete-btn:hover {
          background: #dc2626;
          transform: scale(1.1);
        }
        
        .connection-hint {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 12px 24px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 600;
          color: #475569;
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
          z-index: 1000;
          animation: pulse 2s infinite;
        }
        
        .dark .connection-hint {
          background: rgba(30, 41, 59, 0.95);
          color: #cbd5e1;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        
        @keyframes pulse {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.05); }
        }
        
        .help-panel {
          position: fixed;
          bottom: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 16px;
          border-radius: 12px;
          font-size: 12px;
          color: #475569;
          z-index: 100;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }
        
        .dark .help-panel {
          background: rgba(30, 41, 59, 0.95);
          color: #cbd5e1;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        
        .help-panel div {
          margin-bottom: 6px;
          line-height: 1.5;
        }
        
        .help-panel div:last-child {
          margin-bottom: 0;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          animation: fadeIn 0.2s;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .modal {
          background: white;
          border-radius: 20px;
          padding: 28px;
          width: 480px;
          max-height: 85vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .dark .modal {
          background: #1e293b;
          color: #f8fafc;
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        
        .modal-header h2 {
          margin: 0;
          font-size: 22px;
          font-weight: 700;
          color: #1e293b;
        }
        
        .dark .modal-header h2 {
          color: #f8fafc;
        }
        
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          color: #64748b;
          transition: color 0.2s;
        }
        
        .dark .close-btn {
          color: #94a3b8;
        }
        
        .close-btn:hover {
          color: #1e293b;
        }
        
        .dark .close-btn:hover {
          color: #f8fafc;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #475569;
          font-size: 14px;
        }
        
        .dark .form-group label {
          color: #cbd5e1;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-size: 14px;
          font-family: inherit;
          transition: all 0.2s;
          background: white;
          color: #1e293b;
        }
        
        .dark .form-group input,
        .dark .form-group textarea,
        .dark .form-group select {
          background: #334155;
          border: 2px solid #475569;
          color: #f8fafc;
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .dark .form-group input:focus,
        .dark .form-group textarea:focus,
        .dark .form-group select:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }
        
        .form-row {
          display: flex;
          gap: 16px;
        }
        
        .form-row .form-group {
          flex: 1;
        }
        
        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }
        
        .form-actions .btn {
          flex: 1;
          justify-content: center;
        }
        
        select {
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
          padding-right: 40px;
        }
        
        .dark select {
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23cbd5e1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        }
      `})]})},Uw=({flowcharts:i,onCreateFlowchart:r,onLoadFlowchart:s,onDeleteFlowchart:o,onImportFlowchart:d})=>{const[f,h]=j.useState(!1),[m,x]=j.useState(!1),[B,C]=j.useState("");return n.jsxs("div",{className:"flowchart-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:"📊"}),n.jsx("h2",{children:"Flowchart Designer"}),n.jsx("p",{children:"Create and visualize complex processes with intuitive flowcharts"}),n.jsxs("div",{className:"action-buttons",children:[n.jsxs("button",{onClick:()=>h(!0),className:"primary-btn",children:[n.jsx(rt,{size:16})," New Flowchart"]}),n.jsxs("button",{onClick:()=>x(!0),className:"secondary-btn",children:[n.jsx(yn,{size:16})," Import"]})]}),i.length>0&&n.jsxs("div",{className:"flowchart-list",children:[n.jsx("h3",{children:"Your Flowcharts"}),i.map(F=>n.jsxs("div",{className:"flowchart-card",onClick:()=>s(F),children:[n.jsxs("div",{className:"flowchart-card-content",children:[n.jsx("div",{className:"flowchart-card-name",children:F.name}),n.jsxs("div",{className:"flowchart-card-meta",children:[n.jsx("span",{children:new Date(F.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[F.nodes?.length||0," nodes • ",F.edges?.length||0," edges"]})]})]}),n.jsxs("div",{className:"flowchart-card-actions",children:[n.jsx("button",{onClick:T=>{T.stopPropagation(),s(F)},className:"open-btn",children:n.jsx(Gn,{size:16})}),n.jsx("button",{onClick:T=>{T.stopPropagation(),confirm("Delete this flowchart?")&&o(F.id)},className:"delete-btn",children:n.jsx(je,{size:16})})]})]},F.id))]})]}),f&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Flowchart"}),n.jsx("button",{onClick:()=>h(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Flowchart Name"}),n.jsx("input",{type:"text",placeholder:"e.g., User Registration Flow",id:"flowchartName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>h(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const F=document.getElementById("flowchartName").value;F.trim()&&(r(F),h(!1))},className:"create-btn",children:"Create Flowchart"})]})]})}),m&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Import Flowchart"}),n.jsx("button",{onClick:()=>x(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Paste JSON Data"}),n.jsx("textarea",{value:B,onChange:F=>C(F.target.value),placeholder:"Paste your flowchart JSON here...",rows:8})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>x(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{try{d(B),x(!1),C("")}catch(F){alert("Invalid JSON: "+F.message)}},className:"create-btn",children:"Import"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},Ew=({flowchart:i,nodes:r,edges:s,jsonInput:o,onJsonInputChange:d,onImportJson:f,onUpdateFlowchart:h,onBack:m})=>{const[x,B]=j.useState("editor"),[C,F]=j.useState(null),[T,oA]=j.useState(null),[eA,uA]=j.useState(null),[MA,NA]=j.useState(null),[gA,XA]=j.useState(null),[xA,mA]=j.useState(null),[Y,IA]=j.useState(""),[V,sA]=j.useState(!1),[KA,GA]=j.useState(null),[CA,LA]=j.useState(!1),[$A,JA]=j.useState(""),[G,pA]=j.useState(null),[FA,WA]=j.useState("dark"),[U,J]=j.useState(null),[$,lA]=j.useState(null),[QA,RA]=j.useState(!1),[K,OA]=j.useState(!1),[HA,bA]=j.useState(null),[L,X]=j.useState(null),zA=j.useRef(null),wA=j.useRef(null),nA={dark:{background:"#1a1a1a",panel:"#242424",border:"#444",text:"rgba(255, 255, 255, 0.87)",nodeFill:"#646cff",nodeStroke:"#444dfcff",edgeStroke:"#646cff",highlight:"#a855f7",secondaryText:"#64748b",buttonHover:"#333",nodeText:"#ffffff"},light:{background:"#f5f5f5",panel:"#ffffff",border:"#ddd",text:"#1a1a1a",nodeFill:"#56acf3ff",nodeStroke:"#3ca0f3ff",edgeStroke:"#5e94e1ff",highlight:"#7c3aed",secondaryText:"#666",buttonHover:"#eee",nodeText:"#ffffff"},blue:{background:"#0f172a",panel:"#1e293b",border:"#334155",text:"#f8fafc",nodeFill:"#3b82f6",nodeStroke:"#6366f1",edgeStroke:"#3b82f6",highlight:"#6366f1",secondaryText:"#94a3b8",buttonHover:"#1e293b",nodeText:"#ffffff"}}[FA];j.useEffect(()=>{const b=k=>{if(k.key==="Control"||k.key==="Meta")RA(!0);else if(k.key==="Shift")OA(!0);else if(k.key==="Delete")T?Ue():eA?_e():U&&We();else if(T&&!k.ctrlKey&&!k.metaKey){let S=0,I=0;const _=k.shiftKey?10:2;switch(k.key){case"ArrowUp":I=-_;break;case"ArrowDown":I=_;break;case"ArrowLeft":S=-_;break;case"ArrowRight":S=_;break;default:return}k.preventDefault(),ye(T.id,S,I)}else if(U&&!k.ctrlKey&&!k.metaKey){let S=0,I=0;const _=k.shiftKey?10:2;switch(k.key){case"ArrowUp":I=-_;break;case"ArrowDown":I=_;break;case"ArrowLeft":S=-_;break;case"ArrowRight":S=_;break;default:return}k.preventDefault(),pe(U.edgeId,U.pointIndex,S,I)}},v=k=>{k.key==="Control"||k.key==="Meta"?RA(!1):k.key==="Shift"&&OA(!1)};return document.addEventListener("keydown",b),document.addEventListener("keyup",v),()=>{document.removeEventListener("keydown",b),document.removeEventListener("keyup",v)}},[T,eA,U]);const ye=(b,v,k)=>{const S=r.map(I=>I.id===b?{...I,x:I.x+v,y:I.y+k}:I);h({...i,nodes:S})},pe=(b,v,k,S)=>{const I=s.map(_=>{if(_.id===b){const fA=[..._.controlPoints||[]];return fA[v]&&(fA[v]={x:fA[v].x+k,y:fA[v].y+S}),{..._,controlPoints:fA}}return _});h({...i,edges:I})},te=()=>JSON.stringify({nodes:r,edges:s},null,2),fe=()=>{const b=new Blob([te()],{type:"application/json"}),v=URL.createObjectURL(b),k=document.createElement("a");k.href=v,k.download=`${i?.name||"use-case-diagram"}.json`,document.body.appendChild(k),k.click(),document.body.removeChild(k),URL.revokeObjectURL(v),B("json")},ne=b=>{const v=b.target.files[0];if(!v)return;const k=new FileReader;k.onload=S=>{try{const I=JSON.parse(S.target.result);d(JSON.stringify(I,null,2)),B("json")}catch{alert("Invalid JSON file")}},k.readAsText(v),b.target.value=""},me=()=>{try{const b=JSON.parse(o);h({...i,nodes:b.nodes||[],edges:b.edges||[]})}catch(b){alert("Invalid JSON: "+b.message)}},De=(b,v,k)=>{const S=k.x+k.width/2,I=k.y+k.height/2,_=Math.abs(b-S),z=Math.abs(v-I);return _/(k.width/2)+z/(k.height/2)<=1},Je=(b,v,k)=>{const S=b-k.x,I=v-k.y,_=k.height*.3;if(I<0||I>k.height)return!1;const z=I/k.height,fA=-_+z*_*2,cA=k.width+_-z*_*2;return S>=fA&&S<=cA},Te=b=>{const v=b.x+b.width/2,k=b.y+b.height/2;return b.type==="circle"||b.type==="oval"?(b.width/2,b.height/2,[{x:v,y:b.y,label:"top"},{x:b.x+b.width,y:k,label:"right"},{x:v,y:b.y+b.height,label:"bottom"},{x:b.x,y:k,label:"left"}]):b.type==="rhombus"?[{x:v,y:b.y,label:"top"},{x:v,y:b.y+b.height,label:"bottom"}]:b.type==="diamond"?[{x:v,y:b.y,label:"top"},{x:b.x+b.width,y:k,label:"right"},{x:v,y:b.y+b.height,label:"bottom"},{x:b.x,y:k,label:"left"}]:[{x:v,y:b.y,label:"top"},{x:b.x+b.width,y:k,label:"right"},{x:v,y:b.y+b.height,label:"bottom"},{x:b.x,y:k,label:"left"}]},ie=(b,v,k)=>{const S=Te(b);let I=S[0],_=1/0;for(const z of S){const fA=Math.sqrt(Math.pow(z.x-v,2)+Math.pow(z.y-k,2));fA<_&&(_=fA,I=z)}return I},Fe=(b,v,k,S=null)=>{const I=Te(b);if(S){const _=I.find(z=>z.label===S);if(_)return _}return ie(b,v,k)},be=(b,v,k=null)=>r.some(S=>{if(S.id===k)return!1;if(S.type==="circle"){const I=S.x+S.width/2,_=S.y+S.height/2;return Math.sqrt(Math.pow(b-I,2)+Math.pow(v-_,2))<=S.width/2+5}else if(S.type==="oval"){const I=S.x+S.width/2,_=S.y+S.height/2,z=(b-I)/(S.width/2+5),fA=(v-_)/(S.height/2+5);return Math.pow(z,2)+Math.pow(fA,2)<=1}else return S.type==="diamond"?De(b,v,{...S,width:S.width+10,height:S.height+10,x:S.x-5,y:S.y-5}):S.type==="rhombus"?Je(b,v,{...S,width:S.width+10,height:S.height+10,x:S.x-5,y:S.y-5}):b>=S.x-5&&b<=S.x+S.width+5&&v>=S.y-5&&v<=S.y+S.height+5}),Se=(b,v,k)=>{const S=k.controlPoints||[],I=Fe(b,v.x+v.width/2,v.y+v.height/2,k.fromAttachment),_=Fe(v,b.x+b.width/2,b.y+b.height/2,k.toAttachment);if(S&&S.length>0)return[I,...S,_];const z=_.x-I.x,fA=_.y-I.y,cA=Math.sqrt(z*z+fA*fA),ZA=!O(I,_,[b.id,v.id]);if(cA<80||ZA)return[I,_];const dA=yA(I,_,b,v);if(dA.length>2){const u=dA.slice(1,-1);(!k.controlPoints||k.controlPoints.length===0)&&setTimeout(()=>{const w=s.map(Q=>Q.id===k.id?{...Q,controlPoints:u}:Q);h({...i,edges:w})},0)}return dA},O=(b,v,k=[])=>{const S=Math.ceil(Math.sqrt(Math.pow(v.x-b.x,2)+Math.pow(v.y-b.y,2))/10);for(let I=0;I<=S;I++){const _=I/S,z=b.x+(v.x-b.x)*_,fA=b.y+(v.y-b.y)*_;if(be(z,fA,...k))return!0}return!1},yA=(b,v,k,S)=>{const I=v.x-b.x,_=v.y-b.y,z=[()=>{const fA=b.x+I*.7,cA=[b,{x:fA,y:b.y},{x:fA,y:v.y},v];return O(cA[1],cA[2],[k.id,S.id])?null:cA},()=>{const fA=b.y+_*.7,cA=[b,{x:b.x,y:fA},{x:v.x,y:fA},v];return O(cA[1],cA[2],[k.id,S.id])?null:cA},()=>{const fA=Math.abs(_)>Math.abs(I)?100:50,cA=b.x+I*.5+(I>0?fA:-fA);return[b,{x:cA,y:b.y},{x:cA,y:v.y},v]},()=>{const fA=Math.abs(I)>Math.abs(_)?100:50,cA=b.y+_*.5+(_>0?fA:-fA);return[b,{x:b.x,y:cA},{x:v.x,y:cA},v]}];for(const fA of z){const cA=fA();if(cA)return cA}return[b,v]},H=b=>{if(b.length<=2)return{x:(b[0].x+b[b.length-1].x)/2,y:(b[0].y+b[b.length-1].y)/2};let v=0,k=0;for(let S=0;S<b.length-1;S++){const I=Math.sqrt(Math.pow(b[S+1].x-b[S].x,2)+Math.pow(b[S+1].y-b[S].y,2));I>v&&(v=I,k=S)}return{x:(b[k].x+b[k+1].x)/2,y:(b[k].y+b[k+1].y)/2}},q=(b,v,k,S=8)=>{const I=b.x-v.x,_=b.y-v.y,z=k.x-v.x,fA=k.y-v.y,cA=I*z+_*fA,ZA=z*z+fA*fA;if(ZA===0)return!1;const dA=cA/ZA;if(dA<0||dA>1)return!1;const u=v.x+dA*z,w=v.y+dA*fA,Q=b.x-u,W=b.y-w;return Math.sqrt(Q*Q+W*W)<=S},jA=(b,v)=>{for(const k of s){const S=r.find(z=>z.id===k.from),I=r.find(z=>z.id===k.to);if(!S||!I)continue;const _=Se(S,I,k);for(let z=0;z<_.length-1;z++)if(q({x:b,y:v},_[z],_[z+1]))return k}return null},rA=(b,v)=>{for(const k of s)if(k.controlPoints)for(let S=0;S<k.controlPoints.length;S++){const I=k.controlPoints[S];if(Math.sqrt(Math.pow(b-I.x,2)+Math.pow(v-I.y,2))<=8)return{edgeId:k.id,pointIndex:S,point:I}}return null},hA=b=>{if(gA||xA)return;const k=b.currentTarget.getBoundingClientRect(),S=(b.clientX-k.left-i.pan.x)/i.zoom,I=(b.clientY-k.top-i.pan.y)/i.zoom,_=rA(S,I);if(_){J(_),oA(null),uA(null);return}const z=r.find(cA=>{if(cA.type==="circle"){const ZA=cA.x+cA.width/2,dA=cA.y+cA.height/2;return Math.sqrt(Math.pow(S-ZA,2)+Math.pow(I-dA,2))<=cA.width/2}else if(cA.type==="oval"){const ZA=cA.x+cA.width/2,dA=cA.y+cA.height/2,u=(S-ZA)/(cA.width/2),w=(I-dA)/(cA.height/2);return Math.pow(u,2)+Math.pow(w,2)<=1}else return cA.type==="diamond"?De(S,I,cA):cA.type==="rhombus"?Je(S,I,cA):S>=cA.x&&S<=cA.x+cA.width&&I>=cA.y&&I<=cA.y+cA.height}),fA=z?null:jA(S,I);if(K&&eA&&fA&&fA.id===eA.id){oe(eA.id,S,I);return}if(QA&&z){bA({x:S,y:I,node:z}),GA(z),sA(!0);return}if(V&&z){if(!KA)GA(z);else if(z.id!==KA.id)if(KA.type==="diamond"||KA.type==="rhombus")pA({id:Date.now(),from:KA.id,to:z.id}),LA(!0);else{const cA={id:Date.now(),from:KA.id,to:z.id,label:"",controlPoints:[]};h({...i,edges:[...s,cA]}),GA(null),sA(!1),F(null),bA(null)}return}if(z){oA(z),uA(null),J(null);return}if(fA){uA(fA),oA(null),J(null);return}if(C&&C!=="arrow"){const cA={id:Date.now(),type:C,x:S-(C==="circle"||C==="oval"?30:60),y:I-30,width:C==="circle"?60:C==="oval"?100:120,height:60,text:xe(C)};h({...i,nodes:[...r,cA]}),F(null)}oA(null),uA(null),J(null)},oe=(b,v,k)=>{const S=s.map(I=>{if(I.id===b){const _=I.controlPoints||[];return{...I,controlPoints:[..._,{x:v,y:k}]}}return I});h({...i,edges:S})},xe=b=>{switch(b){case"oval":return"Start/End";case"diamond":return"Decision";case"rhombus":return"Decision";case"rectangle":return"Process";case"circle":return"Connector";default:return b.charAt(0).toUpperCase()+b.slice(1)}},ce=b=>{XA(b.id),IA(b.text)},he=b=>{mA(b.id),IA(b.label||"")},ke=()=>{if(gA){const b=r.map(v=>v.id===gA?{...v,text:Y}:v);h({...i,nodes:b}),XA(null)}else if(xA){const b=s.map(v=>v.id===xA?{...v,label:Y}:v);h({...i,edges:b}),mA(null)}IA("")},Ue=()=>{if(!T)return;const b=r.filter(k=>k.id!==T.id),v=s.filter(k=>k.from!==T.id&&k.to!==T.id);h({...i,nodes:b,edges:v}),oA(null)},_e=()=>{if(!eA)return;const b=s.filter(v=>v.id!==eA.id);h({...i,edges:b}),uA(null)},We=()=>{if(!U)return;const b=s.map(v=>{if(v.id===U.edgeId){const S=(v.controlPoints||[]).filter((I,_)=>_!==U.pointIndex);return{...v,controlPoints:S}}return v});h({...i,edges:b}),J(null)},Ze=(b,v)=>{if(gA||xA)return;const S=zA.current.getBoundingClientRect(),I=b.clientX-S.left,_=b.clientY-S.top;NA({nodeId:v.id,startX:I,startY:_,originalX:v.x,originalY:v.y})},Ie=(b,v,k)=>{if(gA||xA)return;b.stopPropagation();const I=zA.current.getBoundingClientRect(),_=b.clientX-I.left,z=b.clientY-I.top,cA=s.find(ZA=>ZA.id===v)?.controlPoints?.[k];cA&&lA({edgeId:v,pointIndex:k,startX:_,startY:z,originalX:cA.x,originalY:cA.y})},Le=j.useCallback(b=>{if(MA){const k=zA.current.getBoundingClientRect(),S=b.clientX-k.left,I=b.clientY-k.top,_=(S-MA.startX)/i.zoom,z=(I-MA.startY)/i.zoom,fA=r.map(cA=>cA.id===MA.nodeId?{...cA,x:MA.originalX+_,y:MA.originalY+z}:cA);h({...i,nodes:fA})}else if($){const k=zA.current.getBoundingClientRect(),S=b.clientX-k.left,I=b.clientY-k.top,_=(S-$.startX)/i.zoom,z=(I-$.startY)/i.zoom,fA=s.map(cA=>{if(cA.id===$.edgeId){const dA=[...cA.controlPoints||[]];return dA[$.pointIndex]={x:$.originalX+_,y:$.originalY+z},{...cA,controlPoints:dA}}return cA});h({...i,edges:fA})}else if(L){const k=zA.current.getBoundingClientRect(),S=(b.clientX-k.left-i.pan.x)/i.zoom,I=(b.clientY-k.top-i.pan.y)/i.zoom,_=L.edge,z=L.type,fA=z==="from"?r.find(dA=>dA.id===_.from):r.find(dA=>dA.id===_.to);if(!fA)return;const cA=ie(fA,S,I),ZA=s.map(dA=>dA.id===_.id?z==="from"?{...dA,fromAttachment:cA.label}:{...dA,toAttachment:cA.label}:dA);h({...i,edges:ZA})}},[MA,$,L,r,s,i,h]),N=j.useCallback(()=>{NA(null),lA(null),X(null)},[]);j.useEffect(()=>{if(MA||$||L)return document.addEventListener("mousemove",Le),document.addEventListener("mouseup",N),()=>{document.removeEventListener("mousemove",Le),document.removeEventListener("mouseup",N)}},[MA,$,L,Le,N]);const SA=()=>{F("arrow"),sA(!0),GA(null),bA(null)},TA=()=>{if(!G)return;const b={...G,label:$A,controlPoints:[]};h({...i,edges:[...s,b]}),GA(null),sA(!1),F(null),LA(!1),pA(null),JA(""),bA(null)},g=()=>{const b=document.createElement("canvas"),v=b.getContext("2d");let k=1/0,S=1/0,I=-1/0,_=-1/0;r.forEach(dA=>{k=Math.min(k,dA.x),S=Math.min(S,dA.y),I=Math.max(I,dA.x+dA.width),_=Math.max(_,dA.y+dA.height)}),s.forEach(dA=>{const u=r.find(Q=>Q.id===dA.from),w=r.find(Q=>Q.id===dA.to);u&&w&&Se(u,w,dA).forEach(W=>{k=Math.min(k,W.x),S=Math.min(S,W.y),I=Math.max(I,W.x),_=Math.max(_,W.y)})});const z=40;k-=z,S-=z,I+=z,_+=z;const fA=I-k,cA=_-S;b.width=fA,b.height=cA,v.fillStyle=nA.background,v.fillRect(0,0,fA,cA),s.forEach(dA=>{const u=r.find(Q=>Q.id===dA.from),w=r.find(Q=>Q.id===dA.to);if(u&&w){const W=Se(u,w,dA).map(DA=>({x:DA.x-k,y:DA.y-S}));v.strokeStyle=nA.edgeStroke,v.lineWidth=2,v.beginPath(),v.moveTo(W[0].x,W[0].y);for(let DA=1;DA<W.length;DA++)v.lineTo(W[DA].x,W[DA].y);v.stroke();const P=W[W.length-1],vA=W[W.length-2],_A=Math.atan2(P.y-vA.y,P.x-vA.x);if(v.fillStyle=nA.edgeStroke,v.beginPath(),v.moveTo(P.x,P.y),v.lineTo(P.x-12*Math.cos(_A-Math.PI/6),P.y-12*Math.sin(_A-Math.PI/6)),v.lineTo(P.x-12*Math.cos(_A+Math.PI/6),P.y-12*Math.sin(_A+Math.PI/6)),v.closePath(),v.fill(),dA.label){const DA=H(W);v.fillStyle=nA.text,v.font="12px Arial",v.textAlign="center",v.fillText(dA.label,DA.x,DA.y-5)}}}),r.forEach(dA=>{const u=dA.x-k,w=dA.y-S;if(v.fillStyle=nA.nodeFill,v.strokeStyle=nA.nodeStroke,v.lineWidth=2,dA.type==="rectangle")v.beginPath(),v.roundRect(u,w,dA.width,dA.height,4),v.fill(),v.stroke();else if(dA.type==="circle")v.beginPath(),v.arc(u+dA.width/2,w+dA.height/2,dA.width/2,0,2*Math.PI),v.fill(),v.stroke();else if(dA.type==="diamond")v.beginPath(),v.moveTo(u+dA.width/2,w),v.lineTo(u+dA.width,w+dA.height/2),v.lineTo(u+dA.width/2,w+dA.height),v.lineTo(u,w+dA.height/2),v.closePath(),v.fill(),v.stroke();else if(dA.type==="rhombus"){const Q=dA.height*.3;v.beginPath(),v.moveTo(u-Q,w),v.lineTo(u+dA.width-Q,w),v.lineTo(u+dA.width+Q,w+dA.height),v.lineTo(u+Q,w+dA.height),v.closePath(),v.fill(),v.stroke()}else dA.type==="oval"&&(v.beginPath(),v.ellipse(u+dA.width/2,w+dA.height/2,dA.width/2,dA.height/2,0,0,2*Math.PI),v.fill(),v.stroke());v.fillStyle=nA.nodeText,v.font="12px Arial",v.textAlign="center",v.textBaseline="middle",v.fillText(dA.text,u+dA.width/2,w+dA.height/2)});const ZA=document.createElement("a");ZA.download=`${i.name||"flowchart"}.png`,ZA.href=b.toDataURL("image/png"),ZA.click()},E=b=>{const v=T?.id===b.id,k=gA===b.id,S=V&&KA?.id===b.id;let I={position:"absolute",left:`${b.x}px`,top:`${b.y}px`,width:`${b.width}px`,height:`${b.height}px`,backgroundColor:v?nA.highlight:nA.nodeFill,display:"flex",justifyContent:"center",alignItems:"center",color:nA.nodeText,cursor:"move",fontSize:"12px",fontWeight:"500",textAlign:"center",wordBreak:"break-word",padding:"8px",boxSizing:"border-box",border:v?`2px solid ${nA.nodeStroke}`:S?"2px solid #f59e0b":"1px solid rgba(255,255,255,0.2)",userSelect:"none",zIndex:v?1e3:1};return b.type==="circle"||b.type==="oval"?I.borderRadius="50%":b.type==="diamond"?(I.clipPath="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",I.borderRadius="0"):b.type==="rhombus"?(I.clipPath="polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",I.borderRadius="0"):I.borderRadius="8px",n.jsx("div",{style:I,onMouseDown:_=>Ze(_,b),onDoubleClick:()=>ce(b),children:k?n.jsx("input",{type:"text",value:Y,onChange:_=>IA(_.target.value),onBlur:ke,onKeyPress:_=>_.key==="Enter"&&ke(),style:{background:"rgba(255,255,255,0.2)",border:"none",color:nA.nodeText,textAlign:"center",fontSize:"12px",fontWeight:"500",width:"100%",outline:"none",borderRadius:"4px",padding:"2px"},autoFocus:!0}):b.text},b.id)},D=b=>{const v=r.find(z=>z.id===b.from),k=r.find(z=>z.id===b.to);if(!v||!k)return null;const S=Se(v,k,b),I=eA?.id===b.id,_=xA===b.id;return n.jsxs("div",{children:[S.map((z,fA)=>{if(fA===S.length-1)return null;const cA=S[fA+1],ZA=Math.sqrt(Math.pow(cA.x-z.x,2)+Math.pow(cA.y-z.y,2)),dA=Math.atan2(cA.y-z.y,cA.x-z.x)*180/Math.PI;return n.jsx("div",{style:{position:"absolute",left:`${z.x}px`,top:`${z.y-(I?1.5:1)}px`,width:`${ZA}px`,height:I?"3px":"2px",backgroundColor:I?nA.highlight:nA.edgeStroke,transformOrigin:"0 50%",transform:`rotate(${dA}deg)`,cursor:"pointer",zIndex:I?10:2,borderRadius:"1px"},onClick:u=>{u.stopPropagation(),uA(b),oA(null),J(null)},onDoubleClick:u=>{u.stopPropagation(),he(b)}},`segment-${fA}`)}),I&&n.jsxs(n.Fragment,{children:[n.jsx("div",{onMouseDown:z=>{z.stopPropagation();const cA=zA.current.getBoundingClientRect();(z.clientX-cA.left-i.pan.x)/i.zoom,(z.clientY-cA.top-i.pan.y)/i.zoom,X({edge:b,type:"from",point:S[0]})},style:{position:"absolute",left:`${S[0].x-5}px`,top:`${S[0].y-5}px`,width:"10px",height:"10px",backgroundColor:"#f59e0b",border:"2px solid white",borderRadius:"50%",cursor:"move",zIndex:20,boxShadow:"0 2px 4px rgba(0,0,0,0.3)"},title:"Drag to change start attachment point"}),n.jsx("div",{onMouseDown:z=>{z.stopPropagation();const cA=zA.current.getBoundingClientRect();(z.clientX-cA.left-i.pan.x)/i.zoom,(z.clientY-cA.top-i.pan.y)/i.zoom,X({edge:b,type:"to",point:S[S.length-1]})},style:{position:"absolute",left:`${S[S.length-1].x-5}px`,top:`${S[S.length-1].y-5}px`,width:"10px",height:"10px",backgroundColor:"#10b981",border:"2px solid white",borderRadius:"50%",cursor:"move",zIndex:20,boxShadow:"0 2px 4px rgba(0,0,0,0.3)"},title:"Drag to change end attachment point"})]}),b.controlPoints&&b.controlPoints.map((z,fA)=>n.jsx("div",{style:{position:"absolute",left:`${z.x-6}px`,top:`${z.y-6}px`,width:"12px",height:"12px",backgroundColor:U?.edgeId===b.id&&U?.pointIndex===fA?nA.highlight:nA.nodeStroke,border:"2px solid white",borderRadius:"50%",cursor:"move",zIndex:15,boxShadow:"0 2px 4px rgba(0,0,0,0.2)"},onMouseDown:cA=>Ie(cA,b.id,fA),onClick:cA=>{cA.stopPropagation(),J({edgeId:b.id,pointIndex:fA,point:z})}},`control-${fA}`)),(()=>{const z=S[S.length-1],fA=S[S.length-2],cA=Math.atan2(z.y-fA.y,z.x-fA.x),ZA=8,dA=Math.PI/6,u={x:z.x-ZA*Math.cos(cA-dA),y:z.y-ZA*Math.sin(cA-dA)},w={x:z.x-ZA*Math.cos(cA+dA),y:z.y-ZA*Math.sin(cA+dA)};return n.jsx("svg",{style:{position:"absolute",left:`${Math.min(z.x,u.x,w.x)-2}px`,top:`${Math.min(z.y,u.y,w.y)-2}px`,width:`${Math.max(z.x,u.x,w.x)-Math.min(z.x,u.x,w.x)+4}px`,height:`${Math.max(z.y,u.y,w.y)-Math.min(z.y,u.y,w.y)+4}px`,pointerEvents:"none",zIndex:I?11:3},children:n.jsx("polygon",{points:`${z.x-Math.min(z.x,u.x,w.x)+2},${z.y-Math.min(z.y,u.y,w.y)+2} ${u.x-Math.min(z.x,u.x,w.x)+2},${u.y-Math.min(z.y,u.y,w.y)+2} ${w.x-Math.min(z.x,u.x,w.x)+2},${w.y-Math.min(z.y,u.y,w.y)+2}`,fill:I?nA.highlight:nA.edgeStroke})})})(),(b.label||_)&&n.jsx("div",{style:{position:"absolute",left:`${H(S).x}px`,top:`${H(S).y-12}px`,color:nA.text,fontSize:"11px",fontWeight:"600",backgroundColor:nA.panel,padding:"4px 8px",borderRadius:"12px",border:`1px solid ${nA.border}`,transform:"translate(-50%, -50%)",cursor:"pointer",zIndex:I?12:4,minWidth:_?"80px":"auto",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},onClick:z=>{z.stopPropagation(),uA(b),oA(null),J(null)},onDoubleClick:z=>{z.stopPropagation(),he(b)},children:_?n.jsx("input",{type:"text",value:Y,onChange:z=>IA(z.target.value),onBlur:ke,onKeyPress:z=>z.key==="Enter"&&ke(),style:{background:"transparent",border:"none",color:nA.text,textAlign:"center",fontSize:"11px",fontWeight:"600",width:"100%",outline:"none"},autoFocus:!0}):b.label})]},b.id)};return n.jsx("div",{style:{minHeight:"100vh",backgroundColor:nA.background,color:nA.text,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},children:n.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",padding:"24px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px",padding:"20px",backgroundColor:nA.panel,borderRadius:"12px",border:`1px solid ${nA.border}`,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("h1",{style:{margin:"0",fontSize:"2rem",fontWeight:"700",background:"linear-gradient(135deg, #646cff, #a855f7)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:i.name}),n.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[n.jsx("div",{style:{display:"flex",gap:"4px",padding:"4px",backgroundColor:nA.background,borderRadius:"8px",border:`1px solid ${nA.border}`},children:[{key:"dark",label:"🌙",title:"Dark Theme"},{key:"light",label:"☀️",title:"Light Theme"},{key:"blue",label:"🌊",title:"Blue Theme"}].map(({key:b,label:v,title:k})=>n.jsx("button",{onClick:()=>WA(b),title:k,style:{padding:"8px 12px",backgroundColor:FA===b?nA.nodeFill:"transparent",color:FA===b?"white":nA.text,border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"16px",transition:"all 0.2s",minWidth:"40px"},children:v},b))}),n.jsx("button",{onClick:m,style:{padding:"12px 20px",backgroundColor:nA.panel,color:nA.text,border:`1px solid ${nA.nodeFill}`,borderRadius:"8px",cursor:"pointer",fontSize:"14px",fontWeight:"500",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"8px"},children:"← Back to List"})]})]}),n.jsxs("div",{style:{display:"flex",marginBottom:"24px",backgroundColor:nA.panel,borderRadius:"12px",padding:"4px",border:`1px solid ${nA.border}`,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("button",{onClick:()=>B("editor"),style:{padding:"12px 24px",border:"none",backgroundColor:x==="editor"?nA.nodeFill:"transparent",color:x==="editor"?"white":nA.text,cursor:"pointer",fontSize:"14px",fontWeight:"600",borderRadius:"8px",transition:"all 0.2s",flex:1,textAlign:"center"},children:"🎨 Flowchart Editor"}),n.jsx("button",{onClick:()=>{B("json"),d(te())},style:{padding:"12px 24px",border:"none",backgroundColor:x==="json"?nA.nodeFill:"transparent",color:x==="json"?"white":nA.text,cursor:"pointer",fontSize:"14px",fontWeight:"600",borderRadius:"8px",transition:"all 0.2s",flex:1,textAlign:"center"},children:"📝 JSON Editor"})]}),x==="editor"?n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px",backgroundColor:nA.panel,borderRadius:"12px",border:`1px solid ${nA.border}`,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"},children:[n.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[[{tool:"rectangle",icon:"▭",label:"Process"},{tool:"diamond",icon:"◆",label:"Diamond"},{tool:"rhombus",icon:"◇",label:"Slanted"},{tool:"circle",icon:"●",label:"Circle"},{tool:"oval",icon:"⬭",label:"Oval"}].map(({tool:b,icon:v,label:k})=>n.jsxs("button",{onClick:()=>F(b),style:{padding:"10px 16px",backgroundColor:C===b?nA.nodeFill:nA.background,color:C===b?"white":nA.text,border:`1px solid ${nA.border}`,borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"6px"},children:[n.jsx("span",{style:{fontSize:"16px"},children:v}),k]},b)),n.jsxs("button",{onClick:SA,style:{padding:"10px 16px",backgroundColor:V?nA.nodeFill:nA.background,color:V?"white":nA.text,border:`1px solid ${nA.border}`,borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"6px"},children:[n.jsx("span",{style:{fontSize:"16px"},children:"→"}),V?KA?"Select Target":"Select Source":"Connect"]})]}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[T&&n.jsx("button",{onClick:Ue,style:{padding:"8px 12px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"🗑 Delete Node"}),eA&&n.jsx("button",{onClick:_e,style:{padding:"8px 12px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"🗑 Delete Edge"}),U&&n.jsx("button",{onClick:We,style:{padding:"8px 12px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"🗑 Delete Control Point"})]}),n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center",flexWrap:"wrap"},children:[n.jsx("button",{onClick:g,style:{padding:"8px 16px",backgroundColor:"#f59e0b",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"📸 Export PNG"}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(te()),style:{padding:"8px 16px",backgroundColor:"#a855f7",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"📋 Copy JSON"}),n.jsx("button",{onClick:fe,style:{padding:"8px 16px",backgroundColor:"#10b981",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"📥 Export JSON"})]})]})}),(C||V||eA)&&n.jsxs("div",{style:{padding:"16px",backgroundColor:"rgba(100, 108, 255, 0.1)",border:`1px solid ${nA.nodeFill}`,borderRadius:"8px",color:nA.nodeFill,textAlign:"center",fontSize:"14px",fontWeight:"500"},children:[V?KA?`🎯 Click on target node to connect from "${KA.text}"`:"🎯 Click on a node to start connection":eA?"🔶 Edge selected: Drag orange (start) or green (end) circles to change attachment points":`🎨 Click on canvas to place a ${C}`,n.jsx("br",{}),QA&&"🔧 Ctrl pressed: Click on node edge to start connection from specific point",K&&eA&&"➕ Shift pressed: Click on edge to add control point",T&&"🎯 Node selected: Use arrow keys to move (Shift for larger steps)"]}),n.jsxs("div",{ref:zA,onClick:hA,style:{height:"700px",border:`2px dashed ${nA.border}`,borderRadius:"12px",backgroundColor:nA.background,display:"flex",justifyContent:"center",alignItems:"center",position:"relative",overflow:"hidden",cursor:C?"crosshair":"default",boxShadow:"inset 0 2px 4px rgba(0, 0, 0, 0.1)"},children:[r.length===0&&!C&&n.jsxs("div",{style:{textAlign:"center",color:nA.secondaryText,pointerEvents:"none"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎨"}),n.jsx("h3",{style:{margin:"0 0 8px 0",fontWeight:"600"},children:"Start Building Your Flowchart"}),n.jsx("p",{style:{margin:"0",fontSize:"14px"},children:"Select a tool from the toolbar above to begin"})]}),n.jsxs("div",{style:{position:"absolute",transform:`scale(${i.zoom}) translate(${i.pan.x}px, ${i.pan.y}px)`,transformOrigin:"0 0",width:"100%",height:"100%"},children:[s.map(D),r.map(E)]})]}),n.jsxs("div",{style:{padding:"16px",backgroundColor:nA.panel,borderRadius:"8px",border:`1px solid ${nA.border}`,fontSize:"13px",color:nA.secondaryText,textAlign:"center",lineHeight:"1.6"},children:["💡 ",n.jsx("strong",{children:"Pro Tips:"})," Single click to select • Double click to edit text • Drag nodes to move • Use Connect tool for arrows • Select edge and drag colored circles to change attachment points • Shift+Click on edge to add control point • Press Delete to remove selected items • Use arrow keys to move selected nodes and control points (Shift for larger steps)"]})]}):n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[n.jsxs("div",{style:{border:`1px solid ${nA.border}`,borderRadius:"12px",padding:"20px",backgroundColor:nA.panel,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"16px",color:nA.text,fontSize:"1.2rem",fontWeight:"600"},children:"📥 Import JSON"}),n.jsx("textarea",{value:o,onChange:b=>d(b.target.value),placeholder:"Paste your flowchart JSON here...",style:{width:"100%",minHeight:"400px",padding:"16px",border:`1px solid ${nA.border}`,borderRadius:"8px",fontFamily:'"Fira Code", "Cascadia Code", "SF Mono", Monaco, "Inconsolata", "Roboto Mono", monospace',fontSize:"13px",lineHeight:"1.5",marginBottom:"16px",backgroundColor:nA.background,color:nA.text,resize:"vertical",outline:"none",transition:"border-color 0.2s"}}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("button",{onClick:me,style:{padding:"12px 20px",backgroundColor:"#10b981",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",flex:1,fontSize:"14px",fontWeight:"600",transition:"all 0.2s"},children:"📥 Import JSON"}),n.jsx("button",{onClick:()=>wA.current.click(),style:{padding:"12px 20px",backgroundColor:nA.nodeFill,color:"white",border:"none",borderRadius:"8px",cursor:"pointer",flex:1,fontSize:"14px",fontWeight:"600",transition:"all 0.2s"},children:"📁 Load File"}),n.jsx("input",{type:"file",ref:wA,onChange:ne,accept:".json",style:{display:"none"}})]})]}),n.jsxs("div",{style:{border:`1px solid ${nA.border}`,borderRadius:"12px",padding:"20px",backgroundColor:nA.panel,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"16px",color:nA.text,fontSize:"1.2rem",fontWeight:"600"},children:"📤 Current Flowchart JSON"}),n.jsx("pre",{style:{backgroundColor:nA.background,padding:"16px",border:`1px solid ${nA.border}`,borderRadius:"8px",overflow:"auto",maxHeight:"450px",fontFamily:'"Fira Code", "Cascadia Code", "SF Mono", Monaco, "Inconsolata", "Roboto Mono", monospace',fontSize:"12px",lineHeight:"1.5",color:nA.text,whiteSpace:"pre-wrap",wordWrap:"break-word",margin:0},children:te()})]})]}),CA&&n.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.6)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e4,backdropFilter:"blur(4px)"},children:n.jsxs("div",{style:{backgroundColor:nA.panel,padding:"24px",borderRadius:"12px",width:"400px",border:`1px solid ${nA.nodeFill}`,boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.3)"},children:[n.jsx("h3",{style:{marginTop:0,marginBottom:"8px",color:nA.text,fontSize:"1.3rem",fontWeight:"600"},children:"🏷️ Add Connection Label"}),n.jsx("p",{style:{color:nA.secondaryText,marginBottom:"20px",fontSize:"14px",lineHeight:"1.5"},children:'Decision nodes should have labeled connections. Enter a label like "Yes", "No", or a condition:'}),n.jsx("input",{type:"text",value:$A,onChange:b=>JA(b.target.value),placeholder:"e.g., Yes, No, True, False...",style:{width:"100%",padding:"12px",marginBottom:"20px",backgroundColor:nA.background,border:`1px solid ${nA.border}`,color:nA.text,borderRadius:"8px",fontSize:"14px",outline:"none",transition:"border-color 0.2s"},autoFocus:!0,onKeyPress:b=>b.key==="Enter"&&TA()}),n.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[n.jsx("button",{onClick:()=>{LA(!1),JA(""),GA(null),sA(!1),F(null)},style:{padding:"10px 16px",backgroundColor:nA.background,color:nA.text,border:`1px solid ${nA.border}`,borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500",transition:"all 0.2s"},children:"Cancel"}),n.jsx("button",{onClick:TA,style:{padding:"10px 16px",backgroundColor:nA.nodeFill,color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"600",transition:"all 0.2s"},children:"Add Label"})]})]})})]})})},Fw=({ganttCharts:i,onCreateGanttChart:r,onLoadGanttChart:s,onDeleteGanttChart:o})=>{const[d,f]=j.useState(!1);return n.jsxs("div",{className:"gantt-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(eB,{size:48})}),n.jsx("h2",{children:"Gantt Chart Planner"}),n.jsx("p",{children:"Plan and visualize project timelines with interactive Gantt charts"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>f(!0),className:"primary-btn",children:[n.jsx(rt,{size:16})," New Gantt Chart"]})}),i.length>0&&n.jsxs("div",{className:"gantt-list",children:[n.jsx("h3",{children:"Your Gantt Charts"}),i.map(h=>n.jsxs("div",{className:"gantt-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"gantt-card-content",children:[n.jsx("div",{className:"gantt-card-name",children:h.name}),n.jsxs("div",{className:"gantt-card-meta",children:[n.jsxs("span",{children:[n.jsx(Pb,{size:14})," ",new Date(h.createdAt).toLocaleDateString()]}),n.jsxs("span",{children:[h.tasks?.length||0," tasks"]})]})]}),n.jsxs("div",{className:"gantt-card-actions",children:[n.jsx("button",{onClick:m=>{m.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Gn,{size:16})}),n.jsx("button",{onClick:m=>{m.stopPropagation(),confirm("Delete this Gantt chart?")&&o(h.id)},className:"delete-btn",children:n.jsx(je,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Gantt Chart"}),n.jsx("button",{onClick:()=>f(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Project Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Website Redesign Project",id:"ganttName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>f(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("ganttName").value;h.trim()&&(r(h),f(!1))},className:"create-btn",children:"Create Gantt Chart"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
***************************************************************************** */var _d=function(i,r){return _d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,o){s.__proto__=o}||function(s,o){for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])},_d(i,r)};function fn(i,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");_d(i,r);function s(){this.constructor=i}i.prototype=r===null?Object.create(r):(s.prototype=r.prototype,new s)}var Gd=function(){return Gd=Object.assign||function(r){for(var s,o=1,d=arguments.length;o<d;o++){s=arguments[o];for(var f in s)Object.prototype.hasOwnProperty.call(s,f)&&(r[f]=s[f])}return r},Gd.apply(this,arguments)};function Dt(i,r,s,o){function d(f){return f instanceof s?f:new s(function(h){h(f)})}return new(s||(s=Promise))(function(f,h){function m(C){try{B(o.next(C))}catch(F){h(F)}}function x(C){try{B(o.throw(C))}catch(F){h(F)}}function B(C){C.done?f(C.value):d(C.value).then(m,x)}B((o=o.apply(i,[])).next())})}function Ht(i,r){var s={label:0,sent:function(){if(f[0]&1)throw f[1];return f[1]},trys:[],ops:[]},o,d,f,h;return h={next:m(0),throw:m(1),return:m(2)},typeof Symbol=="function"&&(h[Symbol.iterator]=function(){return this}),h;function m(B){return function(C){return x([B,C])}}function x(B){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,d&&(f=B[0]&2?d.return:B[0]?d.throw||((f=d.return)&&f.call(d),0):d.next)&&!(f=f.call(d,B[1])).done)return f;switch(d=0,f&&(B=[B[0]&2,f.value]),B[0]){case 0:case 1:f=B;break;case 4:return s.label++,{value:B[1],done:!1};case 5:s.label++,d=B[1],B=[0];continue;case 7:B=s.ops.pop(),s.trys.pop();continue;default:if(f=s.trys,!(f=f.length>0&&f[f.length-1])&&(B[0]===6||B[0]===2)){s=0;continue}if(B[0]===3&&(!f||B[1]>f[0]&&B[1]<f[3])){s.label=B[1];break}if(B[0]===6&&s.label<f[1]){s.label=f[1],f=B;break}if(f&&s.label<f[2]){s.label=f[2],s.ops.push(B);break}f[2]&&s.ops.pop(),s.trys.pop();continue}B=r.call(i,s)}catch(C){B=[6,C],d=0}finally{o=f=0}if(B[0]&5)throw B[1];return{value:B[0]?B[1]:void 0,done:!0}}}function bs(i,r,s){if(arguments.length===2)for(var o=0,d=r.length,f;o<d;o++)(f||!(o in r))&&(f||(f=Array.prototype.slice.call(r,0,o)),f[o]=r[o]);return i.concat(f||r)}var Rn=function(){function i(r,s,o,d){this.left=r,this.top=s,this.width=o,this.height=d}return i.prototype.add=function(r,s,o,d){return new i(this.left+r,this.top+s,this.width+o,this.height+d)},i.fromClientRect=function(r,s){return new i(s.left+r.windowBounds.left,s.top+r.windowBounds.top,s.width,s.height)},i.fromDOMRectList=function(r,s){var o=Array.from(s).find(function(d){return d.width!==0});return o?new i(o.left+r.windowBounds.left,o.top+r.windowBounds.top,o.width,o.height):i.EMPTY},i.EMPTY=new i(0,0,0,0),i}(),tl=function(i,r){return Rn.fromClientRect(i,r.getBoundingClientRect())},jw=function(i){var r=i.body,s=i.documentElement;if(!r||!s)throw new Error("Unable to get document size");var o=Math.max(Math.max(r.scrollWidth,s.scrollWidth),Math.max(r.offsetWidth,s.offsetWidth),Math.max(r.clientWidth,s.clientWidth)),d=Math.max(Math.max(r.scrollHeight,s.scrollHeight),Math.max(r.offsetHeight,s.offsetHeight),Math.max(r.clientHeight,s.clientHeight));return new Rn(0,0,o,d)},nl=function(i){for(var r=[],s=0,o=i.length;s<o;){var d=i.charCodeAt(s++);if(d>=55296&&d<=56319&&s<o){var f=i.charCodeAt(s++);(f&64512)===56320?r.push(((d&1023)<<10)+(f&1023)+65536):(r.push(d),s--)}else r.push(d)}return r},dt=function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];if(String.fromCodePoint)return String.fromCodePoint.apply(String,i);var s=i.length;if(!s)return"";for(var o=[],d=-1,f="";++d<s;){var h=i[d];h<=65535?o.push(h):(h-=65536,o.push((h>>10)+55296,h%1024+56320)),(d+1===s||o.length>16384)&&(f+=String.fromCharCode.apply(String,o),o.length=0)}return f},lp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Sw=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Bs=0;Bs<lp.length;Bs++)Sw[lp.charCodeAt(Bs)]=Bs;var cp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Gi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ws=0;ws<cp.length;ws++)Gi[cp.charCodeAt(ws)]=ws;var kw=function(i){var r=i.length*.75,s=i.length,o,d=0,f,h,m,x;i[i.length-1]==="="&&(r--,i[i.length-2]==="="&&r--);var B=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(r):new Array(r),C=Array.isArray(B)?B:new Uint8Array(B);for(o=0;o<s;o+=4)f=Gi[i.charCodeAt(o)],h=Gi[i.charCodeAt(o+1)],m=Gi[i.charCodeAt(o+2)],x=Gi[i.charCodeAt(o+3)],C[d++]=f<<2|h>>4,C[d++]=(h&15)<<4|m>>2,C[d++]=(m&3)<<6|x&63;return B},Hw=function(i){for(var r=i.length,s=[],o=0;o<r;o+=2)s.push(i[o+1]<<8|i[o]);return s},Nw=function(i){for(var r=i.length,s=[],o=0;o<r;o+=4)s.push(i[o+3]<<24|i[o+2]<<16|i[o+1]<<8|i[o]);return s},Ga=5,gu=11,wd=2,Mw=gu-Ga,bx=65536>>Ga,Dw=1<<Ga,yd=Dw-1,Tw=1024>>Ga,Iw=bx+Tw,Lw=Iw,Ow=32,Kw=Lw+Ow,zw=65536>>gu,Rw=1<<Mw,_w=Rw-1,dp=function(i,r,s){return i.slice?i.slice(r,s):new Uint16Array(Array.prototype.slice.call(i,r,s))},Gw=function(i,r,s){return i.slice?i.slice(r,s):new Uint32Array(Array.prototype.slice.call(i,r,s))},Yw=function(i,r){var s=kw(i),o=Array.isArray(s)?Nw(s):new Uint32Array(s),d=Array.isArray(s)?Hw(s):new Uint16Array(s),f=24,h=dp(d,f/2,o[4]/2),m=o[5]===2?dp(d,(f+o[4])/2):Gw(o,Math.ceil((f+o[4])/4));return new Xw(o[0],o[1],o[2],o[3],h,m)},Xw=function(){function i(r,s,o,d,f,h){this.initialValue=r,this.errorValue=s,this.highStart=o,this.highValueIndex=d,this.index=f,this.data=h}return i.prototype.get=function(r){var s;if(r>=0){if(r<55296||r>56319&&r<=65535)return s=this.index[r>>Ga],s=(s<<wd)+(r&yd),this.data[s];if(r<=65535)return s=this.index[bx+(r-55296>>Ga)],s=(s<<wd)+(r&yd),this.data[s];if(r<this.highStart)return s=Kw-zw+(r>>gu),s=this.index[s],s+=r>>Ga&_w,s=this.index[s],s=(s<<wd)+(r&yd),this.data[s];if(r<=1114111)return this.data[this.highValueIndex]}return this.errorValue},i}(),up="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Vw=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ys=0;ys<up.length;ys++)Vw[up.charCodeAt(ys)]=ys;var Jw="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",fp=50,Zw=1,Bx=2,wx=3,$w=4,Ww=5,hp=7,yx=8,gp=9,pa=10,Yd=11,pp=12,Xd=13,qw=14,Yi=15,Vd=16,vs=17,Li=18,Pw=19,xp=20,Jd=21,Oi=22,vd=23,Fr=24,Jt=25,Xi=26,Vi=27,jr=28,Ay=29,Ra=30,ey=31,Cs=32,Qs=33,Zd=34,$d=35,Wd=36,to=37,qd=38,Rs=39,_s=40,Cd=41,vx=42,ty=43,ny=[9001,65288],Cx="!",Ee="×",Us="÷",Pd=Yw(Jw),On=[Ra,Wd],Au=[Zw,Bx,wx,Ww],Qx=[pa,yx],mp=[Vi,Xi],ay=Au.concat(Qx),bp=[qd,Rs,_s,Zd,$d],ry=[Yi,Xd],iy=function(i,r){r===void 0&&(r="strict");var s=[],o=[],d=[];return i.forEach(function(f,h){var m=Pd.get(f);if(m>fp?(d.push(!0),m-=fp):d.push(!1),["normal","auto","loose"].indexOf(r)!==-1&&[8208,8211,12316,12448].indexOf(f)!==-1)return o.push(h),s.push(Vd);if(m===$w||m===Yd){if(h===0)return o.push(h),s.push(Ra);var x=s[h-1];return ay.indexOf(x)===-1?(o.push(o[h-1]),s.push(x)):(o.push(h),s.push(Ra))}if(o.push(h),m===ey)return s.push(r==="strict"?Jd:to);if(m===vx||m===Ay)return s.push(Ra);if(m===ty)return f>=131072&&f<=196605||f>=196608&&f<=262141?s.push(to):s.push(Ra);s.push(m)}),[o,s,d]},Qd=function(i,r,s,o){var d=o[s];if(Array.isArray(i)?i.indexOf(d)!==-1:i===d)for(var f=s;f<=o.length;){f++;var h=o[f];if(h===r)return!0;if(h!==pa)break}if(d===pa)for(var f=s;f>0;){f--;var m=o[f];if(Array.isArray(i)?i.indexOf(m)!==-1:i===m)for(var x=s;x<=o.length;){x++;var h=o[x];if(h===r)return!0;if(h!==pa)break}if(m!==pa)break}return!1},Bp=function(i,r){for(var s=i;s>=0;){var o=r[s];if(o===pa)s--;else return o}return 0},oy=function(i,r,s,o,d){if(s[o]===0)return Ee;var f=o-1;if(Array.isArray(d)&&d[f]===!0)return Ee;var h=f-1,m=f+1,x=r[f],B=h>=0?r[h]:0,C=r[m];if(x===Bx&&C===wx)return Ee;if(Au.indexOf(x)!==-1)return Cx;if(Au.indexOf(C)!==-1||Qx.indexOf(C)!==-1)return Ee;if(Bp(f,r)===yx)return Us;if(Pd.get(i[f])===Yd||(x===Cs||x===Qs)&&Pd.get(i[m])===Yd||x===hp||C===hp||x===gp||[pa,Xd,Yi].indexOf(x)===-1&&C===gp||[vs,Li,Pw,Fr,jr].indexOf(C)!==-1||Bp(f,r)===Oi||Qd(vd,Oi,f,r)||Qd([vs,Li],Jd,f,r)||Qd(pp,pp,f,r))return Ee;if(x===pa)return Us;if(x===vd||C===vd)return Ee;if(C===Vd||x===Vd)return Us;if([Xd,Yi,Jd].indexOf(C)!==-1||x===qw||B===Wd&&ry.indexOf(x)!==-1||x===jr&&C===Wd||C===xp||On.indexOf(C)!==-1&&x===Jt||On.indexOf(x)!==-1&&C===Jt||x===Vi&&[to,Cs,Qs].indexOf(C)!==-1||[to,Cs,Qs].indexOf(x)!==-1&&C===Xi||On.indexOf(x)!==-1&&mp.indexOf(C)!==-1||mp.indexOf(x)!==-1&&On.indexOf(C)!==-1||[Vi,Xi].indexOf(x)!==-1&&(C===Jt||[Oi,Yi].indexOf(C)!==-1&&r[m+1]===Jt)||[Oi,Yi].indexOf(x)!==-1&&C===Jt||x===Jt&&[Jt,jr,Fr].indexOf(C)!==-1)return Ee;if([Jt,jr,Fr,vs,Li].indexOf(C)!==-1)for(var F=f;F>=0;){var T=r[F];if(T===Jt)return Ee;if([jr,Fr].indexOf(T)!==-1)F--;else break}if([Vi,Xi].indexOf(C)!==-1)for(var F=[vs,Li].indexOf(x)!==-1?h:f;F>=0;){var T=r[F];if(T===Jt)return Ee;if([jr,Fr].indexOf(T)!==-1)F--;else break}if(qd===x&&[qd,Rs,Zd,$d].indexOf(C)!==-1||[Rs,Zd].indexOf(x)!==-1&&[Rs,_s].indexOf(C)!==-1||[_s,$d].indexOf(x)!==-1&&C===_s||bp.indexOf(x)!==-1&&[xp,Xi].indexOf(C)!==-1||bp.indexOf(C)!==-1&&x===Vi||On.indexOf(x)!==-1&&On.indexOf(C)!==-1||x===Fr&&On.indexOf(C)!==-1||On.concat(Jt).indexOf(x)!==-1&&C===Oi&&ny.indexOf(i[m])===-1||On.concat(Jt).indexOf(C)!==-1&&x===Li)return Ee;if(x===Cd&&C===Cd){for(var oA=s[f],eA=1;oA>0&&(oA--,r[oA]===Cd);)eA++;if(eA%2!==0)return Ee}return x===Cs&&C===Qs?Ee:Us},sy=function(i,r){r||(r={lineBreak:"normal",wordBreak:"normal"});var s=iy(i,r.lineBreak),o=s[0],d=s[1],f=s[2];(r.wordBreak==="break-all"||r.wordBreak==="break-word")&&(d=d.map(function(m){return[Jt,Ra,vx].indexOf(m)!==-1?to:m}));var h=r.wordBreak==="keep-all"?f.map(function(m,x){return m&&i[x]>=19968&&i[x]<=40959}):void 0;return[o,d,h]},ly=function(){function i(r,s,o,d){this.codePoints=r,this.required=s===Cx,this.start=o,this.end=d}return i.prototype.slice=function(){return dt.apply(void 0,this.codePoints.slice(this.start,this.end))},i}(),cy=function(i,r){var s=nl(i),o=sy(s,r),d=o[0],f=o[1],h=o[2],m=s.length,x=0,B=0;return{next:function(){if(B>=m)return{done:!0,value:null};for(var C=Ee;B<m&&(C=oy(s,f,d,++B,h))===Ee;);if(C!==Ee||B===m){var F=new ly(s,C,x,B);return x=B,{value:F,done:!1}}return{done:!0,value:null}}}},dy=1,uy=2,io=4,wp=8,Xs=10,yp=47,Wi=92,fy=9,hy=32,Es=34,Ki=61,gy=35,py=36,xy=37,Fs=39,js=40,zi=41,my=95,Kt=45,by=33,By=60,wy=62,yy=64,vy=91,Cy=93,Qy=61,Uy=123,Ss=63,Ey=125,vp=124,Fy=126,jy=128,Cp=65533,Ud=42,_a=43,Sy=44,ky=58,Hy=59,no=46,Ny=0,My=8,Dy=11,Ty=14,Iy=31,Ly=127,bn=-1,Ux=48,Ex=97,Fx=101,Oy=102,Ky=117,zy=122,jx=65,Sx=69,kx=70,Ry=85,_y=90,Nt=function(i){return i>=Ux&&i<=57},Gy=function(i){return i>=55296&&i<=57343},Sr=function(i){return Nt(i)||i>=jx&&i<=kx||i>=Ex&&i<=Oy},Yy=function(i){return i>=Ex&&i<=zy},Xy=function(i){return i>=jx&&i<=_y},Vy=function(i){return Yy(i)||Xy(i)},Jy=function(i){return i>=jy},ks=function(i){return i===Xs||i===fy||i===hy},Vs=function(i){return Vy(i)||Jy(i)||i===my},Qp=function(i){return Vs(i)||Nt(i)||i===Kt},Zy=function(i){return i>=Ny&&i<=My||i===Dy||i>=Ty&&i<=Iy||i===Ly},ga=function(i,r){return i!==Wi?!1:r!==Xs},Hs=function(i,r,s){return i===Kt?Vs(r)||ga(r,s):Vs(i)?!0:!!(i===Wi&&ga(i,r))},Ed=function(i,r,s){return i===_a||i===Kt?Nt(r)?!0:r===no&&Nt(s):Nt(i===no?r:i)},$y=function(i){var r=0,s=1;(i[r]===_a||i[r]===Kt)&&(i[r]===Kt&&(s=-1),r++);for(var o=[];Nt(i[r]);)o.push(i[r++]);var d=o.length?parseInt(dt.apply(void 0,o),10):0;i[r]===no&&r++;for(var f=[];Nt(i[r]);)f.push(i[r++]);var h=f.length,m=h?parseInt(dt.apply(void 0,f),10):0;(i[r]===Sx||i[r]===Fx)&&r++;var x=1;(i[r]===_a||i[r]===Kt)&&(i[r]===Kt&&(x=-1),r++);for(var B=[];Nt(i[r]);)B.push(i[r++]);var C=B.length?parseInt(dt.apply(void 0,B),10):0;return s*(d+m*Math.pow(10,-h))*Math.pow(10,x*C)},Wy={type:2},qy={type:3},Py={type:4},A1={type:13},e1={type:8},t1={type:21},n1={type:9},a1={type:10},r1={type:11},i1={type:12},o1={type:14},Ns={type:23},s1={type:1},l1={type:25},c1={type:24},d1={type:26},u1={type:27},f1={type:28},h1={type:29},g1={type:31},eu={type:32},Hx=function(){function i(){this._value=[]}return i.prototype.write=function(r){this._value=this._value.concat(nl(r))},i.prototype.read=function(){for(var r=[],s=this.consumeToken();s!==eu;)r.push(s),s=this.consumeToken();return r},i.prototype.consumeToken=function(){var r=this.consumeCodePoint();switch(r){case Es:return this.consumeStringToken(Es);case gy:var s=this.peekCodePoint(0),o=this.peekCodePoint(1),d=this.peekCodePoint(2);if(Qp(s)||ga(o,d)){var f=Hs(s,o,d)?uy:dy,h=this.consumeName();return{type:5,value:h,flags:f}}break;case py:if(this.peekCodePoint(0)===Ki)return this.consumeCodePoint(),A1;break;case Fs:return this.consumeStringToken(Fs);case js:return Wy;case zi:return qy;case Ud:if(this.peekCodePoint(0)===Ki)return this.consumeCodePoint(),o1;break;case _a:if(Ed(r,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(r),this.consumeNumericToken();break;case Sy:return Py;case Kt:var m=r,x=this.peekCodePoint(0),B=this.peekCodePoint(1);if(Ed(m,x,B))return this.reconsumeCodePoint(r),this.consumeNumericToken();if(Hs(m,x,B))return this.reconsumeCodePoint(r),this.consumeIdentLikeToken();if(x===Kt&&B===wy)return this.consumeCodePoint(),this.consumeCodePoint(),c1;break;case no:if(Ed(r,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(r),this.consumeNumericToken();break;case yp:if(this.peekCodePoint(0)===Ud)for(this.consumeCodePoint();;){var C=this.consumeCodePoint();if(C===Ud&&(C=this.consumeCodePoint(),C===yp))return this.consumeToken();if(C===bn)return this.consumeToken()}break;case ky:return d1;case Hy:return u1;case By:if(this.peekCodePoint(0)===by&&this.peekCodePoint(1)===Kt&&this.peekCodePoint(2)===Kt)return this.consumeCodePoint(),this.consumeCodePoint(),l1;break;case yy:var F=this.peekCodePoint(0),T=this.peekCodePoint(1),oA=this.peekCodePoint(2);if(Hs(F,T,oA)){var h=this.consumeName();return{type:7,value:h}}break;case vy:return f1;case Wi:if(ga(r,this.peekCodePoint(0)))return this.reconsumeCodePoint(r),this.consumeIdentLikeToken();break;case Cy:return h1;case Qy:if(this.peekCodePoint(0)===Ki)return this.consumeCodePoint(),e1;break;case Uy:return r1;case Ey:return i1;case Ky:case Ry:var eA=this.peekCodePoint(0),uA=this.peekCodePoint(1);return eA===_a&&(Sr(uA)||uA===Ss)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(r),this.consumeIdentLikeToken();case vp:if(this.peekCodePoint(0)===Ki)return this.consumeCodePoint(),n1;if(this.peekCodePoint(0)===vp)return this.consumeCodePoint(),t1;break;case Fy:if(this.peekCodePoint(0)===Ki)return this.consumeCodePoint(),a1;break;case bn:return eu}return ks(r)?(this.consumeWhiteSpace(),g1):Nt(r)?(this.reconsumeCodePoint(r),this.consumeNumericToken()):Vs(r)?(this.reconsumeCodePoint(r),this.consumeIdentLikeToken()):{type:6,value:dt(r)}},i.prototype.consumeCodePoint=function(){var r=this._value.shift();return typeof r>"u"?-1:r},i.prototype.reconsumeCodePoint=function(r){this._value.unshift(r)},i.prototype.peekCodePoint=function(r){return r>=this._value.length?-1:this._value[r]},i.prototype.consumeUnicodeRangeToken=function(){for(var r=[],s=this.consumeCodePoint();Sr(s)&&r.length<6;)r.push(s),s=this.consumeCodePoint();for(var o=!1;s===Ss&&r.length<6;)r.push(s),s=this.consumeCodePoint(),o=!0;if(o){var d=parseInt(dt.apply(void 0,r.map(function(x){return x===Ss?Ux:x})),16),f=parseInt(dt.apply(void 0,r.map(function(x){return x===Ss?kx:x})),16);return{type:30,start:d,end:f}}var h=parseInt(dt.apply(void 0,r),16);if(this.peekCodePoint(0)===Kt&&Sr(this.peekCodePoint(1))){this.consumeCodePoint(),s=this.consumeCodePoint();for(var m=[];Sr(s)&&m.length<6;)m.push(s),s=this.consumeCodePoint();var f=parseInt(dt.apply(void 0,m),16);return{type:30,start:h,end:f}}else return{type:30,start:h,end:h}},i.prototype.consumeIdentLikeToken=function(){var r=this.consumeName();return r.toLowerCase()==="url"&&this.peekCodePoint(0)===js?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===js?(this.consumeCodePoint(),{type:19,value:r}):{type:20,value:r}},i.prototype.consumeUrlToken=function(){var r=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===bn)return{type:22,value:""};var s=this.peekCodePoint(0);if(s===Fs||s===Es){var o=this.consumeStringToken(this.consumeCodePoint());return o.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===bn||this.peekCodePoint(0)===zi)?(this.consumeCodePoint(),{type:22,value:o.value}):(this.consumeBadUrlRemnants(),Ns)}for(;;){var d=this.consumeCodePoint();if(d===bn||d===zi)return{type:22,value:dt.apply(void 0,r)};if(ks(d))return this.consumeWhiteSpace(),this.peekCodePoint(0)===bn||this.peekCodePoint(0)===zi?(this.consumeCodePoint(),{type:22,value:dt.apply(void 0,r)}):(this.consumeBadUrlRemnants(),Ns);if(d===Es||d===Fs||d===js||Zy(d))return this.consumeBadUrlRemnants(),Ns;if(d===Wi)if(ga(d,this.peekCodePoint(0)))r.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),Ns;else r.push(d)}},i.prototype.consumeWhiteSpace=function(){for(;ks(this.peekCodePoint(0));)this.consumeCodePoint()},i.prototype.consumeBadUrlRemnants=function(){for(;;){var r=this.consumeCodePoint();if(r===zi||r===bn)return;ga(r,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},i.prototype.consumeStringSlice=function(r){for(var s=5e4,o="";r>0;){var d=Math.min(s,r);o+=dt.apply(void 0,this._value.splice(0,d)),r-=d}return this._value.shift(),o},i.prototype.consumeStringToken=function(r){var s="",o=0;do{var d=this._value[o];if(d===bn||d===void 0||d===r)return s+=this.consumeStringSlice(o),{type:0,value:s};if(d===Xs)return this._value.splice(0,o),s1;if(d===Wi){var f=this._value[o+1];f!==bn&&f!==void 0&&(f===Xs?(s+=this.consumeStringSlice(o),o=-1,this._value.shift()):ga(d,f)&&(s+=this.consumeStringSlice(o),s+=dt(this.consumeEscapedCodePoint()),o=-1))}o++}while(!0)},i.prototype.consumeNumber=function(){var r=[],s=io,o=this.peekCodePoint(0);for((o===_a||o===Kt)&&r.push(this.consumeCodePoint());Nt(this.peekCodePoint(0));)r.push(this.consumeCodePoint());o=this.peekCodePoint(0);var d=this.peekCodePoint(1);if(o===no&&Nt(d))for(r.push(this.consumeCodePoint(),this.consumeCodePoint()),s=wp;Nt(this.peekCodePoint(0));)r.push(this.consumeCodePoint());o=this.peekCodePoint(0),d=this.peekCodePoint(1);var f=this.peekCodePoint(2);if((o===Sx||o===Fx)&&((d===_a||d===Kt)&&Nt(f)||Nt(d)))for(r.push(this.consumeCodePoint(),this.consumeCodePoint()),s=wp;Nt(this.peekCodePoint(0));)r.push(this.consumeCodePoint());return[$y(r),s]},i.prototype.consumeNumericToken=function(){var r=this.consumeNumber(),s=r[0],o=r[1],d=this.peekCodePoint(0),f=this.peekCodePoint(1),h=this.peekCodePoint(2);if(Hs(d,f,h)){var m=this.consumeName();return{type:15,number:s,flags:o,unit:m}}return d===xy?(this.consumeCodePoint(),{type:16,number:s,flags:o}):{type:17,number:s,flags:o}},i.prototype.consumeEscapedCodePoint=function(){var r=this.consumeCodePoint();if(Sr(r)){for(var s=dt(r);Sr(this.peekCodePoint(0))&&s.length<6;)s+=dt(this.consumeCodePoint());ks(this.peekCodePoint(0))&&this.consumeCodePoint();var o=parseInt(s,16);return o===0||Gy(o)||o>1114111?Cp:o}return r===bn?Cp:r},i.prototype.consumeName=function(){for(var r="";;){var s=this.consumeCodePoint();if(Qp(s))r+=dt(s);else if(ga(s,this.peekCodePoint(0)))r+=dt(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(s),r}},i}(),Nx=function(){function i(r){this._tokens=r}return i.create=function(r){var s=new Hx;return s.write(r),new i(s.read())},i.parseValue=function(r){return i.create(r).parseComponentValue()},i.parseValues=function(r){return i.create(r).parseComponentValues()},i.prototype.parseComponentValue=function(){for(var r=this.consumeToken();r.type===31;)r=this.consumeToken();if(r.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(r);var s=this.consumeComponentValue();do r=this.consumeToken();while(r.type===31);if(r.type===32)return s;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},i.prototype.parseComponentValues=function(){for(var r=[];;){var s=this.consumeComponentValue();if(s.type===32)return r;r.push(s),r.push()}},i.prototype.consumeComponentValue=function(){var r=this.consumeToken();switch(r.type){case 11:case 28:case 2:return this.consumeSimpleBlock(r.type);case 19:return this.consumeFunction(r)}return r},i.prototype.consumeSimpleBlock=function(r){for(var s={type:r,values:[]},o=this.consumeToken();;){if(o.type===32||x1(o,r))return s;this.reconsumeToken(o),s.values.push(this.consumeComponentValue()),o=this.consumeToken()}},i.prototype.consumeFunction=function(r){for(var s={name:r.value,values:[],type:18};;){var o=this.consumeToken();if(o.type===32||o.type===3)return s;this.reconsumeToken(o),s.values.push(this.consumeComponentValue())}},i.prototype.consumeToken=function(){var r=this._tokens.shift();return typeof r>"u"?eu:r},i.prototype.reconsumeToken=function(r){this._tokens.unshift(r)},i}(),oo=function(i){return i.type===15},zr=function(i){return i.type===17},Ve=function(i){return i.type===20},p1=function(i){return i.type===0},tu=function(i,r){return Ve(i)&&i.value===r},Mx=function(i){return i.type!==31},Lr=function(i){return i.type!==31&&i.type!==4},vn=function(i){var r=[],s=[];return i.forEach(function(o){if(o.type===4){if(s.length===0)throw new Error("Error parsing function args, zero tokens for arg");r.push(s),s=[];return}o.type!==31&&s.push(o)}),s.length&&r.push(s),r},x1=function(i,r){return r===11&&i.type===12||r===28&&i.type===29?!0:r===2&&i.type===3},va=function(i){return i.type===17||i.type===15},gt=function(i){return i.type===16||va(i)},Dx=function(i){return i.length>1?[i[0],i[1]]:[i[0]]},jt={type:17,number:0,flags:io},pu={type:16,number:50,flags:io},xa={type:16,number:100,flags:io},Ji=function(i,r,s){var o=i[0],d=i[1];return[Pe(o,r),Pe(typeof d<"u"?d:o,s)]},Pe=function(i,r){if(i.type===16)return i.number/100*r;if(oo(i))switch(i.unit){case"rem":case"em":return 16*i.number;case"px":default:return i.number}return i.number},Tx="deg",Ix="grad",Lx="rad",Ox="turn",al={name:"angle",parse:function(i,r){if(r.type===15)switch(r.unit){case Tx:return Math.PI*r.number/180;case Ix:return Math.PI/200*r.number;case Lx:return r.number;case Ox:return Math.PI*2*r.number}throw new Error("Unsupported angle type")}},Kx=function(i){return i.type===15&&(i.unit===Tx||i.unit===Ix||i.unit===Lx||i.unit===Ox)},zx=function(i){var r=i.filter(Ve).map(function(s){return s.value}).join(" ");switch(r){case"to bottom right":case"to right bottom":case"left top":case"top left":return[jt,jt];case"to top":case"bottom":return rn(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[jt,xa];case"to right":case"left":return rn(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[xa,xa];case"to bottom":case"top":return rn(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[xa,jt];case"to left":case"right":return rn(270)}return 0},rn=function(i){return Math.PI*i/180},ba={name:"color",parse:function(i,r){if(r.type===18){var s=m1[r.name];if(typeof s>"u")throw new Error('Attempting to parse an unsupported color function "'+r.name+'"');return s(i,r.values)}if(r.type===5){if(r.value.length===3){var o=r.value.substring(0,1),d=r.value.substring(1,2),f=r.value.substring(2,3);return ma(parseInt(o+o,16),parseInt(d+d,16),parseInt(f+f,16),1)}if(r.value.length===4){var o=r.value.substring(0,1),d=r.value.substring(1,2),f=r.value.substring(2,3),h=r.value.substring(3,4);return ma(parseInt(o+o,16),parseInt(d+d,16),parseInt(f+f,16),parseInt(h+h,16)/255)}if(r.value.length===6){var o=r.value.substring(0,2),d=r.value.substring(2,4),f=r.value.substring(4,6);return ma(parseInt(o,16),parseInt(d,16),parseInt(f,16),1)}if(r.value.length===8){var o=r.value.substring(0,2),d=r.value.substring(2,4),f=r.value.substring(4,6),h=r.value.substring(6,8);return ma(parseInt(o,16),parseInt(d,16),parseInt(f,16),parseInt(h,16)/255)}}if(r.type===20){var m=zn[r.value.toUpperCase()];if(typeof m<"u")return m}return zn.TRANSPARENT}},Ba=function(i){return(255&i)===0},Ct=function(i){var r=255&i,s=255&i>>8,o=255&i>>16,d=255&i>>24;return r<255?"rgba("+d+","+o+","+s+","+r/255+")":"rgb("+d+","+o+","+s+")"},ma=function(i,r,s,o){return(i<<24|r<<16|s<<8|Math.round(o*255)<<0)>>>0},Up=function(i,r){if(i.type===17)return i.number;if(i.type===16){var s=r===3?1:255;return r===3?i.number/100*s:Math.round(i.number/100*s)}return 0},Ep=function(i,r){var s=r.filter(Lr);if(s.length===3){var o=s.map(Up),d=o[0],f=o[1],h=o[2];return ma(d,f,h,1)}if(s.length===4){var m=s.map(Up),d=m[0],f=m[1],h=m[2],x=m[3];return ma(d,f,h,x)}return 0};function Fd(i,r,s){return s<0&&(s+=1),s>=1&&(s-=1),s<1/6?(r-i)*s*6+i:s<1/2?r:s<2/3?(r-i)*6*(2/3-s)+i:i}var Fp=function(i,r){var s=r.filter(Lr),o=s[0],d=s[1],f=s[2],h=s[3],m=(o.type===17?rn(o.number):al.parse(i,o))/(Math.PI*2),x=gt(d)?d.number/100:0,B=gt(f)?f.number/100:0,C=typeof h<"u"&&gt(h)?Pe(h,1):1;if(x===0)return ma(B*255,B*255,B*255,1);var F=B<=.5?B*(x+1):B+x-B*x,T=B*2-F,oA=Fd(T,F,m+1/3),eA=Fd(T,F,m),uA=Fd(T,F,m-1/3);return ma(oA*255,eA*255,uA*255,C)},m1={hsl:Fp,hsla:Fp,rgb:Ep,rgba:Ep},qi=function(i,r){return ba.parse(i,Nx.create(r).parseComponentValue())},zn={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},b1={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(i,r){return r.map(function(s){if(Ve(s))switch(s.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},B1={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},rl=function(i,r){var s=ba.parse(i,r[0]),o=r[1];return o&&gt(o)?{color:s,stop:o}:{color:s,stop:null}},jp=function(i,r){var s=i[0],o=i[i.length-1];s.stop===null&&(s.stop=jt),o.stop===null&&(o.stop=xa);for(var d=[],f=0,h=0;h<i.length;h++){var m=i[h].stop;if(m!==null){var x=Pe(m,r);x>f?d.push(x):d.push(f),f=x}else d.push(null)}for(var B=null,h=0;h<d.length;h++){var C=d[h];if(C===null)B===null&&(B=h);else if(B!==null){for(var F=h-B,T=d[B-1],oA=(C-T)/(F+1),eA=1;eA<=F;eA++)d[B+eA-1]=oA*eA;B=null}}return i.map(function(uA,MA){var NA=uA.color;return{color:NA,stop:Math.max(Math.min(1,d[MA]/r),0)}})},w1=function(i,r,s){var o=r/2,d=s/2,f=Pe(i[0],r)-o,h=d-Pe(i[1],s);return(Math.atan2(h,f)+Math.PI*2)%(Math.PI*2)},y1=function(i,r,s){var o=typeof i=="number"?i:w1(i,r,s),d=Math.abs(r*Math.sin(o))+Math.abs(s*Math.cos(o)),f=r/2,h=s/2,m=d/2,x=Math.sin(o-Math.PI/2)*m,B=Math.cos(o-Math.PI/2)*m;return[d,f-B,f+B,h-x,h+x]},un=function(i,r){return Math.sqrt(i*i+r*r)},Sp=function(i,r,s,o,d){var f=[[0,0],[0,r],[i,0],[i,r]];return f.reduce(function(h,m){var x=m[0],B=m[1],C=un(s-x,o-B);return(d?C<h.optimumDistance:C>h.optimumDistance)?{optimumCorner:m,optimumDistance:C}:h},{optimumDistance:d?1/0:-1/0,optimumCorner:null}).optimumCorner},v1=function(i,r,s,o,d){var f=0,h=0;switch(i.size){case 0:i.shape===0?f=h=Math.min(Math.abs(r),Math.abs(r-o),Math.abs(s),Math.abs(s-d)):i.shape===1&&(f=Math.min(Math.abs(r),Math.abs(r-o)),h=Math.min(Math.abs(s),Math.abs(s-d)));break;case 2:if(i.shape===0)f=h=Math.min(un(r,s),un(r,s-d),un(r-o,s),un(r-o,s-d));else if(i.shape===1){var m=Math.min(Math.abs(s),Math.abs(s-d))/Math.min(Math.abs(r),Math.abs(r-o)),x=Sp(o,d,r,s,!0),B=x[0],C=x[1];f=un(B-r,(C-s)/m),h=m*f}break;case 1:i.shape===0?f=h=Math.max(Math.abs(r),Math.abs(r-o),Math.abs(s),Math.abs(s-d)):i.shape===1&&(f=Math.max(Math.abs(r),Math.abs(r-o)),h=Math.max(Math.abs(s),Math.abs(s-d)));break;case 3:if(i.shape===0)f=h=Math.max(un(r,s),un(r,s-d),un(r-o,s),un(r-o,s-d));else if(i.shape===1){var m=Math.max(Math.abs(s),Math.abs(s-d))/Math.max(Math.abs(r),Math.abs(r-o)),F=Sp(o,d,r,s,!1),B=F[0],C=F[1];f=un(B-r,(C-s)/m),h=m*f}break}return Array.isArray(i.size)&&(f=Pe(i.size[0],o),h=i.size.length===2?Pe(i.size[1],d):f),[f,h]},C1=function(i,r){var s=rn(180),o=[];return vn(r).forEach(function(d,f){if(f===0){var h=d[0];if(h.type===20&&h.value==="to"){s=zx(d);return}else if(Kx(h)){s=al.parse(i,h);return}}var m=rl(i,d);o.push(m)}),{angle:s,stops:o,type:1}},Ms=function(i,r){var s=rn(180),o=[];return vn(r).forEach(function(d,f){if(f===0){var h=d[0];if(h.type===20&&["top","left","right","bottom"].indexOf(h.value)!==-1){s=zx(d);return}else if(Kx(h)){s=(al.parse(i,h)+rn(270))%rn(360);return}}var m=rl(i,d);o.push(m)}),{angle:s,stops:o,type:1}},Q1=function(i,r){var s=rn(180),o=[],d=1,f=0,h=3,m=[];return vn(r).forEach(function(x,B){var C=x[0];if(B===0){if(Ve(C)&&C.value==="linear"){d=1;return}else if(Ve(C)&&C.value==="radial"){d=2;return}}if(C.type===18){if(C.name==="from"){var F=ba.parse(i,C.values[0]);o.push({stop:jt,color:F})}else if(C.name==="to"){var F=ba.parse(i,C.values[0]);o.push({stop:xa,color:F})}else if(C.name==="color-stop"){var T=C.values.filter(Lr);if(T.length===2){var F=ba.parse(i,T[1]),oA=T[0];zr(oA)&&o.push({stop:{type:16,number:oA.number*100,flags:oA.flags},color:F})}}}}),d===1?{angle:(s+rn(180))%rn(360),stops:o,type:d}:{size:h,shape:f,stops:o,position:m,type:d}},Rx="closest-side",_x="farthest-side",Gx="closest-corner",Yx="farthest-corner",Xx="circle",Vx="ellipse",Jx="cover",Zx="contain",U1=function(i,r){var s=0,o=3,d=[],f=[];return vn(r).forEach(function(h,m){var x=!0;if(m===0){var B=!1;x=h.reduce(function(F,T){if(B)if(Ve(T))switch(T.value){case"center":return f.push(pu),F;case"top":case"left":return f.push(jt),F;case"right":case"bottom":return f.push(xa),F}else(gt(T)||va(T))&&f.push(T);else if(Ve(T))switch(T.value){case Xx:return s=0,!1;case Vx:return s=1,!1;case"at":return B=!0,!1;case Rx:return o=0,!1;case Jx:case _x:return o=1,!1;case Zx:case Gx:return o=2,!1;case Yx:return o=3,!1}else if(va(T)||gt(T))return Array.isArray(o)||(o=[]),o.push(T),!1;return F},x)}if(x){var C=rl(i,h);d.push(C)}}),{size:o,shape:s,stops:d,position:f,type:2}},Ds=function(i,r){var s=0,o=3,d=[],f=[];return vn(r).forEach(function(h,m){var x=!0;if(m===0?x=h.reduce(function(C,F){if(Ve(F))switch(F.value){case"center":return f.push(pu),!1;case"top":case"left":return f.push(jt),!1;case"right":case"bottom":return f.push(xa),!1}else if(gt(F)||va(F))return f.push(F),!1;return C},x):m===1&&(x=h.reduce(function(C,F){if(Ve(F))switch(F.value){case Xx:return s=0,!1;case Vx:return s=1,!1;case Zx:case Rx:return o=0,!1;case _x:return o=1,!1;case Gx:return o=2,!1;case Jx:case Yx:return o=3,!1}else if(va(F)||gt(F))return Array.isArray(o)||(o=[]),o.push(F),!1;return C},x)),x){var B=rl(i,h);d.push(B)}}),{size:o,shape:s,stops:d,position:f,type:2}},E1=function(i){return i.type===1},F1=function(i){return i.type===2},xu={name:"image",parse:function(i,r){if(r.type===22){var s={url:r.value,type:0};return i.cache.addImage(r.value),s}if(r.type===18){var o=$x[r.name];if(typeof o>"u")throw new Error('Attempting to parse an unsupported image function "'+r.name+'"');return o(i,r.values)}throw new Error("Unsupported image type "+r.type)}};function j1(i){return!(i.type===20&&i.value==="none")&&(i.type!==18||!!$x[i.name])}var $x={"linear-gradient":C1,"-moz-linear-gradient":Ms,"-ms-linear-gradient":Ms,"-o-linear-gradient":Ms,"-webkit-linear-gradient":Ms,"radial-gradient":U1,"-moz-radial-gradient":Ds,"-ms-radial-gradient":Ds,"-o-radial-gradient":Ds,"-webkit-radial-gradient":Ds,"-webkit-gradient":Q1},S1={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(i,r){if(r.length===0)return[];var s=r[0];return s.type===20&&s.value==="none"?[]:r.filter(function(o){return Lr(o)&&j1(o)}).map(function(o){return xu.parse(i,o)})}},k1={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(i,r){return r.map(function(s){if(Ve(s))switch(s.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},H1={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(i,r){return vn(r).map(function(s){return s.filter(gt)}).map(Dx)}},N1={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(i,r){return vn(r).map(function(s){return s.filter(Ve).map(function(o){return o.value}).join(" ")}).map(M1)}},M1=function(i){switch(i){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},Ir;(function(i){i.AUTO="auto",i.CONTAIN="contain",i.COVER="cover"})(Ir||(Ir={}));var D1={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(i,r){return vn(r).map(function(s){return s.filter(T1)})}},T1=function(i){return Ve(i)||gt(i)},il=function(i){return{name:"border-"+i+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},I1=il("top"),L1=il("right"),O1=il("bottom"),K1=il("left"),ol=function(i){return{name:"border-radius-"+i,initialValue:"0 0",prefix:!1,type:1,parse:function(r,s){return Dx(s.filter(gt))}}},z1=ol("top-left"),R1=ol("top-right"),_1=ol("bottom-right"),G1=ol("bottom-left"),sl=function(i){return{name:"border-"+i+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(r,s){switch(s){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},Y1=sl("top"),X1=sl("right"),V1=sl("bottom"),J1=sl("left"),ll=function(i){return{name:"border-"+i+"-width",initialValue:"0",type:0,prefix:!1,parse:function(r,s){return oo(s)?s.number:0}}},Z1=ll("top"),$1=ll("right"),W1=ll("bottom"),q1=ll("left"),P1={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Av={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(i,r){switch(r){case"rtl":return 1;case"ltr":default:return 0}}},ev={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(i,r){return r.filter(Ve).reduce(function(s,o){return s|tv(o.value)},0)}},tv=function(i){switch(i){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},nv={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},av={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(i,r){return r.type===20&&r.value==="normal"?0:r.type===17||r.type===15?r.number:0}},Js;(function(i){i.NORMAL="normal",i.STRICT="strict"})(Js||(Js={}));var rv={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"strict":return Js.STRICT;case"normal":default:return Js.NORMAL}}},iv={name:"line-height",initialValue:"normal",prefix:!1,type:4},kp=function(i,r){return Ve(i)&&i.value==="normal"?1.2*r:i.type===17?r*i.number:gt(i)?Pe(i,r):r},ov={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(i,r){return r.type===20&&r.value==="none"?null:xu.parse(i,r)}},sv={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(i,r){switch(r){case"inside":return 0;case"outside":default:return 1}}},nu={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},cl=function(i){return{name:"margin-"+i,initialValue:"0",prefix:!1,type:4}},lv=cl("top"),cv=cl("right"),dv=cl("bottom"),uv=cl("left"),fv={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(i,r){return r.filter(Ve).map(function(s){switch(s.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},hv={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"break-word":return"break-word";case"normal":default:return"normal"}}},dl=function(i){return{name:"padding-"+i,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},gv=dl("top"),pv=dl("right"),xv=dl("bottom"),mv=dl("left"),bv={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(i,r){switch(r){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},Bv={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(i,r){switch(r){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},wv={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(i,r){return r.length===1&&tu(r[0],"none")?[]:vn(r).map(function(s){for(var o={color:zn.TRANSPARENT,offsetX:jt,offsetY:jt,blur:jt},d=0,f=0;f<s.length;f++){var h=s[f];va(h)?(d===0?o.offsetX=h:d===1?o.offsetY=h:o.blur=h,d++):o.color=ba.parse(i,h)}return o})}},yv={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},vv={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(i,r){if(r.type===20&&r.value==="none")return null;if(r.type===18){var s=Uv[r.name];if(typeof s>"u")throw new Error('Attempting to parse an unsupported transform function "'+r.name+'"');return s(r.values)}return null}},Cv=function(i){var r=i.filter(function(s){return s.type===17}).map(function(s){return s.number});return r.length===6?r:null},Qv=function(i){var r=i.filter(function(x){return x.type===17}).map(function(x){return x.number}),s=r[0],o=r[1];r[2],r[3];var d=r[4],f=r[5];r[6],r[7],r[8],r[9],r[10],r[11];var h=r[12],m=r[13];return r[14],r[15],r.length===16?[s,o,d,f,h,m]:null},Uv={matrix:Cv,matrix3d:Qv},Hp={type:16,number:50,flags:io},Ev=[Hp,Hp],Fv={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(i,r){var s=r.filter(gt);return s.length!==2?Ev:[s[0],s[1]]}},jv={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Pi;(function(i){i.NORMAL="normal",i.BREAK_ALL="break-all",i.KEEP_ALL="keep-all"})(Pi||(Pi={}));var Sv={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"break-all":return Pi.BREAK_ALL;case"keep-all":return Pi.KEEP_ALL;case"normal":default:return Pi.NORMAL}}},kv={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(i,r){if(r.type===20)return{auto:!0,order:0};if(zr(r))return{auto:!1,order:r.number};throw new Error("Invalid z-index number parsed")}},Wx={name:"time",parse:function(i,r){if(r.type===15)switch(r.unit.toLowerCase()){case"s":return 1e3*r.number;case"ms":return r.number}throw new Error("Unsupported time type")}},Hv={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(i,r){return zr(r)?r.number:1}},Nv={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Mv={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(i,r){return r.filter(Ve).map(function(s){switch(s.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(s){return s!==0})}},Dv={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(i,r){var s=[],o=[];return r.forEach(function(d){switch(d.type){case 20:case 0:s.push(d.value);break;case 17:s.push(d.number.toString());break;case 4:o.push(s.join(" ")),s.length=0;break}}),s.length&&o.push(s.join(" ")),o.map(function(d){return d.indexOf(" ")===-1?d:"'"+d+"'"})}},Tv={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},Iv={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(i,r){if(zr(r))return r.number;if(Ve(r))switch(r.value){case"bold":return 700;case"normal":default:return 400}return 400}},Lv={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(i,r){return r.filter(Ve).map(function(s){return s.value})}},Ov={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},bt=function(i,r){return(i&r)!==0},Kv={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(i,r){if(r.length===0)return[];var s=r[0];return s.type===20&&s.value==="none"?[]:r}},zv={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(i,r){if(r.length===0)return null;var s=r[0];if(s.type===20&&s.value==="none")return null;for(var o=[],d=r.filter(Mx),f=0;f<d.length;f++){var h=d[f],m=d[f+1];if(h.type===20){var x=m&&zr(m)?m.number:1;o.push({counter:h.value,increment:x})}}return o}},Rv={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(i,r){if(r.length===0)return[];for(var s=[],o=r.filter(Mx),d=0;d<o.length;d++){var f=o[d],h=o[d+1];if(Ve(f)&&f.value!=="none"){var m=h&&zr(h)?h.number:0;s.push({counter:f.value,reset:m})}}return s}},_v={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(i,r){return r.filter(oo).map(function(s){return Wx.parse(i,s)})}},Gv={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(i,r){if(r.length===0)return null;var s=r[0];if(s.type===20&&s.value==="none")return null;var o=[],d=r.filter(p1);if(d.length%2!==0)return null;for(var f=0;f<d.length;f+=2){var h=d[f].value,m=d[f+1].value;o.push({open:h,close:m})}return o}},Np=function(i,r,s){if(!i)return"";var o=i[Math.min(r,i.length-1)];return o?s?o.open:o.close:""},Yv={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(i,r){return r.length===1&&tu(r[0],"none")?[]:vn(r).map(function(s){for(var o={color:255,offsetX:jt,offsetY:jt,blur:jt,spread:jt,inset:!1},d=0,f=0;f<s.length;f++){var h=s[f];tu(h,"inset")?o.inset=!0:va(h)?(d===0?o.offsetX=h:d===1?o.offsetY=h:d===2?o.blur=h:o.spread=h,d++):o.color=ba.parse(i,h)}return o})}},Xv={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(i,r){var s=[0,1,2],o=[];return r.filter(Ve).forEach(function(d){switch(d.value){case"stroke":o.push(1);break;case"fill":o.push(0);break;case"markers":o.push(2);break}}),s.forEach(function(d){o.indexOf(d)===-1&&o.push(d)}),o}},Vv={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},Jv={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(i,r){return oo(r)?r.number:0}},Zv=function(){function i(r,s){var o,d;this.animationDuration=PA(r,_v,s.animationDuration),this.backgroundClip=PA(r,b1,s.backgroundClip),this.backgroundColor=PA(r,B1,s.backgroundColor),this.backgroundImage=PA(r,S1,s.backgroundImage),this.backgroundOrigin=PA(r,k1,s.backgroundOrigin),this.backgroundPosition=PA(r,H1,s.backgroundPosition),this.backgroundRepeat=PA(r,N1,s.backgroundRepeat),this.backgroundSize=PA(r,D1,s.backgroundSize),this.borderTopColor=PA(r,I1,s.borderTopColor),this.borderRightColor=PA(r,L1,s.borderRightColor),this.borderBottomColor=PA(r,O1,s.borderBottomColor),this.borderLeftColor=PA(r,K1,s.borderLeftColor),this.borderTopLeftRadius=PA(r,z1,s.borderTopLeftRadius),this.borderTopRightRadius=PA(r,R1,s.borderTopRightRadius),this.borderBottomRightRadius=PA(r,_1,s.borderBottomRightRadius),this.borderBottomLeftRadius=PA(r,G1,s.borderBottomLeftRadius),this.borderTopStyle=PA(r,Y1,s.borderTopStyle),this.borderRightStyle=PA(r,X1,s.borderRightStyle),this.borderBottomStyle=PA(r,V1,s.borderBottomStyle),this.borderLeftStyle=PA(r,J1,s.borderLeftStyle),this.borderTopWidth=PA(r,Z1,s.borderTopWidth),this.borderRightWidth=PA(r,$1,s.borderRightWidth),this.borderBottomWidth=PA(r,W1,s.borderBottomWidth),this.borderLeftWidth=PA(r,q1,s.borderLeftWidth),this.boxShadow=PA(r,Yv,s.boxShadow),this.color=PA(r,P1,s.color),this.direction=PA(r,Av,s.direction),this.display=PA(r,ev,s.display),this.float=PA(r,nv,s.cssFloat),this.fontFamily=PA(r,Dv,s.fontFamily),this.fontSize=PA(r,Tv,s.fontSize),this.fontStyle=PA(r,Ov,s.fontStyle),this.fontVariant=PA(r,Lv,s.fontVariant),this.fontWeight=PA(r,Iv,s.fontWeight),this.letterSpacing=PA(r,av,s.letterSpacing),this.lineBreak=PA(r,rv,s.lineBreak),this.lineHeight=PA(r,iv,s.lineHeight),this.listStyleImage=PA(r,ov,s.listStyleImage),this.listStylePosition=PA(r,sv,s.listStylePosition),this.listStyleType=PA(r,nu,s.listStyleType),this.marginTop=PA(r,lv,s.marginTop),this.marginRight=PA(r,cv,s.marginRight),this.marginBottom=PA(r,dv,s.marginBottom),this.marginLeft=PA(r,uv,s.marginLeft),this.opacity=PA(r,Hv,s.opacity);var f=PA(r,fv,s.overflow);this.overflowX=f[0],this.overflowY=f[f.length>1?1:0],this.overflowWrap=PA(r,hv,s.overflowWrap),this.paddingTop=PA(r,gv,s.paddingTop),this.paddingRight=PA(r,pv,s.paddingRight),this.paddingBottom=PA(r,xv,s.paddingBottom),this.paddingLeft=PA(r,mv,s.paddingLeft),this.paintOrder=PA(r,Xv,s.paintOrder),this.position=PA(r,Bv,s.position),this.textAlign=PA(r,bv,s.textAlign),this.textDecorationColor=PA(r,Nv,(o=s.textDecorationColor)!==null&&o!==void 0?o:s.color),this.textDecorationLine=PA(r,Mv,(d=s.textDecorationLine)!==null&&d!==void 0?d:s.textDecoration),this.textShadow=PA(r,wv,s.textShadow),this.textTransform=PA(r,yv,s.textTransform),this.transform=PA(r,vv,s.transform),this.transformOrigin=PA(r,Fv,s.transformOrigin),this.visibility=PA(r,jv,s.visibility),this.webkitTextStrokeColor=PA(r,Vv,s.webkitTextStrokeColor),this.webkitTextStrokeWidth=PA(r,Jv,s.webkitTextStrokeWidth),this.wordBreak=PA(r,Sv,s.wordBreak),this.zIndex=PA(r,kv,s.zIndex)}return i.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},i.prototype.isTransparent=function(){return Ba(this.backgroundColor)},i.prototype.isTransformed=function(){return this.transform!==null},i.prototype.isPositioned=function(){return this.position!==0},i.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},i.prototype.isFloating=function(){return this.float!==0},i.prototype.isInlineLevel=function(){return bt(this.display,4)||bt(this.display,33554432)||bt(this.display,268435456)||bt(this.display,536870912)||bt(this.display,67108864)||bt(this.display,134217728)},i}(),$v=function(){function i(r,s){this.content=PA(r,Kv,s.content),this.quotes=PA(r,Gv,s.quotes)}return i}(),Mp=function(){function i(r,s){this.counterIncrement=PA(r,zv,s.counterIncrement),this.counterReset=PA(r,Rv,s.counterReset)}return i}(),PA=function(i,r,s){var o=new Hx,d=s!==null&&typeof s<"u"?s.toString():r.initialValue;o.write(d);var f=new Nx(o.read());switch(r.type){case 2:var h=f.parseComponentValue();return r.parse(i,Ve(h)?h.value:r.initialValue);case 0:return r.parse(i,f.parseComponentValue());case 1:return r.parse(i,f.parseComponentValues());case 4:return f.parseComponentValue();case 3:switch(r.format){case"angle":return al.parse(i,f.parseComponentValue());case"color":return ba.parse(i,f.parseComponentValue());case"image":return xu.parse(i,f.parseComponentValue());case"length":var m=f.parseComponentValue();return va(m)?m:jt;case"length-percentage":var x=f.parseComponentValue();return gt(x)?x:jt;case"time":return Wx.parse(i,f.parseComponentValue())}break}},Wv="data-html2canvas-debug",qv=function(i){var r=i.getAttribute(Wv);switch(r){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},au=function(i,r){var s=qv(i);return s===1||r===s},Cn=function(){function i(r,s){if(this.context=r,this.textNodes=[],this.elements=[],this.flags=0,au(s,3))debugger;this.styles=new Zv(r,window.getComputedStyle(s,null)),ou(s)&&(this.styles.animationDuration.some(function(o){return o>0})&&(s.style.animationDuration="0s"),this.styles.transform!==null&&(s.style.transform="none")),this.bounds=tl(this.context,s),au(s,4)&&(this.flags|=16)}return i}(),Pv="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",Dp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Zi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Ts=0;Ts<Dp.length;Ts++)Zi[Dp.charCodeAt(Ts)]=Ts;var AC=function(i){var r=i.length*.75,s=i.length,o,d=0,f,h,m,x;i[i.length-1]==="="&&(r--,i[i.length-2]==="="&&r--);var B=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(r):new Array(r),C=Array.isArray(B)?B:new Uint8Array(B);for(o=0;o<s;o+=4)f=Zi[i.charCodeAt(o)],h=Zi[i.charCodeAt(o+1)],m=Zi[i.charCodeAt(o+2)],x=Zi[i.charCodeAt(o+3)],C[d++]=f<<2|h>>4,C[d++]=(h&15)<<4|m>>2,C[d++]=(m&3)<<6|x&63;return B},eC=function(i){for(var r=i.length,s=[],o=0;o<r;o+=2)s.push(i[o+1]<<8|i[o]);return s},tC=function(i){for(var r=i.length,s=[],o=0;o<r;o+=4)s.push(i[o+3]<<24|i[o+2]<<16|i[o+1]<<8|i[o]);return s},Ya=5,mu=11,jd=2,nC=mu-Ya,qx=65536>>Ya,aC=1<<Ya,Sd=aC-1,rC=1024>>Ya,iC=qx+rC,oC=iC,sC=32,lC=oC+sC,cC=65536>>mu,dC=1<<nC,uC=dC-1,Tp=function(i,r,s){return i.slice?i.slice(r,s):new Uint16Array(Array.prototype.slice.call(i,r,s))},fC=function(i,r,s){return i.slice?i.slice(r,s):new Uint32Array(Array.prototype.slice.call(i,r,s))},hC=function(i,r){var s=AC(i),o=Array.isArray(s)?tC(s):new Uint32Array(s),d=Array.isArray(s)?eC(s):new Uint16Array(s),f=24,h=Tp(d,f/2,o[4]/2),m=o[5]===2?Tp(d,(f+o[4])/2):fC(o,Math.ceil((f+o[4])/4));return new gC(o[0],o[1],o[2],o[3],h,m)},gC=function(){function i(r,s,o,d,f,h){this.initialValue=r,this.errorValue=s,this.highStart=o,this.highValueIndex=d,this.index=f,this.data=h}return i.prototype.get=function(r){var s;if(r>=0){if(r<55296||r>56319&&r<=65535)return s=this.index[r>>Ya],s=(s<<jd)+(r&Sd),this.data[s];if(r<=65535)return s=this.index[qx+(r-55296>>Ya)],s=(s<<jd)+(r&Sd),this.data[s];if(r<this.highStart)return s=lC-cC+(r>>mu),s=this.index[s],s+=r>>Ya&uC,s=this.index[s],s=(s<<jd)+(r&Sd),this.data[s];if(r<=1114111)return this.data[this.highValueIndex]}return this.errorValue},i}(),Ip="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",pC=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Is=0;Is<Ip.length;Is++)pC[Ip.charCodeAt(Is)]=Is;var xC=1,kd=2,Hd=3,Lp=4,Op=5,mC=7,Kp=8,Nd=9,Md=10,zp=11,Rp=12,_p=13,Gp=14,Dd=15,bC=function(i){for(var r=[],s=0,o=i.length;s<o;){var d=i.charCodeAt(s++);if(d>=55296&&d<=56319&&s<o){var f=i.charCodeAt(s++);(f&64512)===56320?r.push(((d&1023)<<10)+(f&1023)+65536):(r.push(d),s--)}else r.push(d)}return r},BC=function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];if(String.fromCodePoint)return String.fromCodePoint.apply(String,i);var s=i.length;if(!s)return"";for(var o=[],d=-1,f="";++d<s;){var h=i[d];h<=65535?o.push(h):(h-=65536,o.push((h>>10)+55296,h%1024+56320)),(d+1===s||o.length>16384)&&(f+=String.fromCharCode.apply(String,o),o.length=0)}return f},wC=hC(Pv),nn="×",Td="÷",yC=function(i){return wC.get(i)},vC=function(i,r,s){var o=s-2,d=r[o],f=r[s-1],h=r[s];if(f===kd&&h===Hd)return nn;if(f===kd||f===Hd||f===Lp||h===kd||h===Hd||h===Lp)return Td;if(f===Kp&&[Kp,Nd,zp,Rp].indexOf(h)!==-1||(f===zp||f===Nd)&&(h===Nd||h===Md)||(f===Rp||f===Md)&&h===Md||h===_p||h===Op||h===mC||f===xC)return nn;if(f===_p&&h===Gp){for(;d===Op;)d=r[--o];if(d===Gp)return nn}if(f===Dd&&h===Dd){for(var m=0;d===Dd;)m++,d=r[--o];if(m%2===0)return nn}return Td},CC=function(i){var r=bC(i),s=r.length,o=0,d=0,f=r.map(yC);return{next:function(){if(o>=s)return{done:!0,value:null};for(var h=nn;o<s&&(h=vC(r,f,++o))===nn;);if(h!==nn||o===s){var m=BC.apply(null,r.slice(d,o));return d=o,{value:m,done:!1}}return{done:!0,value:null}}}},QC=function(i){for(var r=CC(i),s=[],o;!(o=r.next()).done;)o.value&&s.push(o.value.slice());return s},UC=function(i){var r=123;if(i.createRange){var s=i.createRange();if(s.getBoundingClientRect){var o=i.createElement("boundtest");o.style.height=r+"px",o.style.display="block",i.body.appendChild(o),s.selectNode(o);var d=s.getBoundingClientRect(),f=Math.round(d.height);if(i.body.removeChild(o),f===r)return!0}}return!1},EC=function(i){var r=i.createElement("boundtest");r.style.width="50px",r.style.display="block",r.style.fontSize="12px",r.style.letterSpacing="0px",r.style.wordSpacing="0px",i.body.appendChild(r);var s=i.createRange();r.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var o=r.firstChild,d=nl(o.data).map(function(x){return dt(x)}),f=0,h={},m=d.every(function(x,B){s.setStart(o,f),s.setEnd(o,f+x.length);var C=s.getBoundingClientRect();f+=x.length;var F=C.x>h.x||C.y>h.y;return h=C,B===0?!0:F});return i.body.removeChild(r),m},FC=function(){return typeof new Image().crossOrigin<"u"},jC=function(){return typeof new XMLHttpRequest().responseType=="string"},SC=function(i){var r=new Image,s=i.createElement("canvas"),o=s.getContext("2d");if(!o)return!1;r.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{o.drawImage(r,0,0),s.toDataURL()}catch{return!1}return!0},Yp=function(i){return i[0]===0&&i[1]===255&&i[2]===0&&i[3]===255},kC=function(i){var r=i.createElement("canvas"),s=100;r.width=s,r.height=s;var o=r.getContext("2d");if(!o)return Promise.reject(!1);o.fillStyle="rgb(0, 255, 0)",o.fillRect(0,0,s,s);var d=new Image,f=r.toDataURL();d.src=f;var h=ru(s,s,0,0,d);return o.fillStyle="red",o.fillRect(0,0,s,s),Xp(h).then(function(m){o.drawImage(m,0,0);var x=o.getImageData(0,0,s,s).data;o.fillStyle="red",o.fillRect(0,0,s,s);var B=i.createElement("div");return B.style.backgroundImage="url("+f+")",B.style.height=s+"px",Yp(x)?Xp(ru(s,s,0,0,B)):Promise.reject(!1)}).then(function(m){return o.drawImage(m,0,0),Yp(o.getImageData(0,0,s,s).data)}).catch(function(){return!1})},ru=function(i,r,s,o,d){var f="http://www.w3.org/2000/svg",h=document.createElementNS(f,"svg"),m=document.createElementNS(f,"foreignObject");return h.setAttributeNS(null,"width",i.toString()),h.setAttributeNS(null,"height",r.toString()),m.setAttributeNS(null,"width","100%"),m.setAttributeNS(null,"height","100%"),m.setAttributeNS(null,"x",s.toString()),m.setAttributeNS(null,"y",o.toString()),m.setAttributeNS(null,"externalResourcesRequired","true"),h.appendChild(m),m.appendChild(d),h},Xp=function(i){return new Promise(function(r,s){var o=new Image;o.onload=function(){return r(o)},o.onerror=s,o.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(i))})},Ft={get SUPPORT_RANGE_BOUNDS(){var i=UC(document);return Object.defineProperty(Ft,"SUPPORT_RANGE_BOUNDS",{value:i}),i},get SUPPORT_WORD_BREAKING(){var i=Ft.SUPPORT_RANGE_BOUNDS&&EC(document);return Object.defineProperty(Ft,"SUPPORT_WORD_BREAKING",{value:i}),i},get SUPPORT_SVG_DRAWING(){var i=SC(document);return Object.defineProperty(Ft,"SUPPORT_SVG_DRAWING",{value:i}),i},get SUPPORT_FOREIGNOBJECT_DRAWING(){var i=typeof Array.from=="function"&&typeof window.fetch=="function"?kC(document):Promise.resolve(!1);return Object.defineProperty(Ft,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:i}),i},get SUPPORT_CORS_IMAGES(){var i=FC();return Object.defineProperty(Ft,"SUPPORT_CORS_IMAGES",{value:i}),i},get SUPPORT_RESPONSE_TYPE(){var i=jC();return Object.defineProperty(Ft,"SUPPORT_RESPONSE_TYPE",{value:i}),i},get SUPPORT_CORS_XHR(){var i="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Ft,"SUPPORT_CORS_XHR",{value:i}),i},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var i=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(Ft,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:i}),i}},Ao=function(){function i(r,s){this.text=r,this.bounds=s}return i}(),HC=function(i,r,s,o){var d=DC(r,s),f=[],h=0;return d.forEach(function(m){if(s.textDecorationLine.length||m.trim().length>0)if(Ft.SUPPORT_RANGE_BOUNDS){var x=Vp(o,h,m.length).getClientRects();if(x.length>1){var B=bu(m),C=0;B.forEach(function(T){f.push(new Ao(T,Rn.fromDOMRectList(i,Vp(o,C+h,T.length).getClientRects()))),C+=T.length})}else f.push(new Ao(m,Rn.fromDOMRectList(i,x)))}else{var F=o.splitText(m.length);f.push(new Ao(m,NC(i,o))),o=F}else Ft.SUPPORT_RANGE_BOUNDS||(o=o.splitText(m.length));h+=m.length}),f},NC=function(i,r){var s=r.ownerDocument;if(s){var o=s.createElement("html2canvaswrapper");o.appendChild(r.cloneNode(!0));var d=r.parentNode;if(d){d.replaceChild(o,r);var f=tl(i,o);return o.firstChild&&d.replaceChild(o.firstChild,o),f}}return Rn.EMPTY},Vp=function(i,r,s){var o=i.ownerDocument;if(!o)throw new Error("Node has no owner document");var d=o.createRange();return d.setStart(i,r),d.setEnd(i,r+s),d},bu=function(i){if(Ft.SUPPORT_NATIVE_TEXT_SEGMENTATION){var r=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(r.segment(i)).map(function(s){return s.segment})}return QC(i)},MC=function(i,r){if(Ft.SUPPORT_NATIVE_TEXT_SEGMENTATION){var s=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(s.segment(i)).map(function(o){return o.segment})}return IC(i,r)},DC=function(i,r){return r.letterSpacing!==0?bu(i):MC(i,r)},TC=[32,160,4961,65792,65793,4153,4241],IC=function(i,r){for(var s=cy(i,{lineBreak:r.lineBreak,wordBreak:r.overflowWrap==="break-word"?"break-word":r.wordBreak}),o=[],d,f=function(){if(d.value){var h=d.value.slice(),m=nl(h),x="";m.forEach(function(B){TC.indexOf(B)===-1?x+=dt(B):(x.length&&o.push(x),o.push(dt(B)),x="")}),x.length&&o.push(x)}};!(d=s.next()).done;)f();return o},LC=function(){function i(r,s,o){this.text=OC(s.data,o.textTransform),this.textBounds=HC(r,this.text,o,s)}return i}(),OC=function(i,r){switch(r){case 1:return i.toLowerCase();case 3:return i.replace(KC,zC);case 2:return i.toUpperCase();default:return i}},KC=/(^|\s|:|-|\(|\))([a-z])/g,zC=function(i,r,s){return i.length>0?r+s.toUpperCase():i},Px=function(i){fn(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.src=o.currentSrc||o.src,d.intrinsicWidth=o.naturalWidth,d.intrinsicHeight=o.naturalHeight,d.context.cache.addImage(d.src),d}return r}(Cn),A0=function(i){fn(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.canvas=o,d.intrinsicWidth=o.width,d.intrinsicHeight=o.height,d}return r}(Cn),e0=function(i){fn(r,i);function r(s,o){var d=i.call(this,s,o)||this,f=new XMLSerializer,h=tl(s,o);return o.setAttribute("width",h.width+"px"),o.setAttribute("height",h.height+"px"),d.svg="data:image/svg+xml,"+encodeURIComponent(f.serializeToString(o)),d.intrinsicWidth=o.width.baseVal.value,d.intrinsicHeight=o.height.baseVal.value,d.context.cache.addImage(d.svg),d}return r}(Cn),t0=function(i){fn(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.value=o.value,d}return r}(Cn),iu=function(i){fn(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.start=o.start,d.reversed=typeof o.reversed=="boolean"&&o.reversed===!0,d}return r}(Cn),RC=[{type:15,flags:0,unit:"px",number:3}],_C=[{type:16,flags:0,number:50}],GC=function(i){return i.width>i.height?new Rn(i.left+(i.width-i.height)/2,i.top,i.height,i.height):i.width<i.height?new Rn(i.left,i.top+(i.height-i.width)/2,i.width,i.width):i},YC=function(i){var r=i.type===XC?new Array(i.value.length+1).join("•"):i.value;return r.length===0?i.placeholder||"":r},Zs="checkbox",$s="radio",XC="password",Jp=707406591,Bu=function(i){fn(r,i);function r(s,o){var d=i.call(this,s,o)||this;switch(d.type=o.type.toLowerCase(),d.checked=o.checked,d.value=YC(o),(d.type===Zs||d.type===$s)&&(d.styles.backgroundColor=3739148031,d.styles.borderTopColor=d.styles.borderRightColor=d.styles.borderBottomColor=d.styles.borderLeftColor=2779096575,d.styles.borderTopWidth=d.styles.borderRightWidth=d.styles.borderBottomWidth=d.styles.borderLeftWidth=1,d.styles.borderTopStyle=d.styles.borderRightStyle=d.styles.borderBottomStyle=d.styles.borderLeftStyle=1,d.styles.backgroundClip=[0],d.styles.backgroundOrigin=[0],d.bounds=GC(d.bounds)),d.type){case Zs:d.styles.borderTopRightRadius=d.styles.borderTopLeftRadius=d.styles.borderBottomRightRadius=d.styles.borderBottomLeftRadius=RC;break;case $s:d.styles.borderTopRightRadius=d.styles.borderTopLeftRadius=d.styles.borderBottomRightRadius=d.styles.borderBottomLeftRadius=_C;break}return d}return r}(Cn),n0=function(i){fn(r,i);function r(s,o){var d=i.call(this,s,o)||this,f=o.options[o.selectedIndex||0];return d.value=f&&f.text||"",d}return r}(Cn),a0=function(i){fn(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.value=o.value,d}return r}(Cn),r0=function(i){fn(r,i);function r(s,o){var d=i.call(this,s,o)||this;d.src=o.src,d.width=parseInt(o.width,10)||0,d.height=parseInt(o.height,10)||0,d.backgroundColor=d.styles.backgroundColor;try{if(o.contentWindow&&o.contentWindow.document&&o.contentWindow.document.documentElement){d.tree=o0(s,o.contentWindow.document.documentElement);var f=o.contentWindow.document.documentElement?qi(s,getComputedStyle(o.contentWindow.document.documentElement).backgroundColor):zn.TRANSPARENT,h=o.contentWindow.document.body?qi(s,getComputedStyle(o.contentWindow.document.body).backgroundColor):zn.TRANSPARENT;d.backgroundColor=Ba(f)?Ba(h)?d.styles.backgroundColor:h:f}}catch{}return d}return r}(Cn),VC=["OL","UL","MENU"],Gs=function(i,r,s,o){for(var d=r.firstChild,f=void 0;d;d=f)if(f=d.nextSibling,s0(d)&&d.data.trim().length>0)s.textNodes.push(new LC(i,d,s.styles));else if(Tr(d))if(u0(d)&&d.assignedNodes)d.assignedNodes().forEach(function(m){return Gs(i,m,s,o)});else{var h=i0(i,d);h.styles.isVisible()&&(JC(d,h,o)?h.flags|=4:ZC(h.styles)&&(h.flags|=2),VC.indexOf(d.tagName)!==-1&&(h.flags|=8),s.elements.push(h),d.slot,d.shadowRoot?Gs(i,d.shadowRoot,h,o):!Ws(d)&&!l0(d)&&!qs(d)&&Gs(i,d,h,o))}},i0=function(i,r){return su(r)?new Px(i,r):c0(r)?new A0(i,r):l0(r)?new e0(i,r):$C(r)?new t0(i,r):WC(r)?new iu(i,r):qC(r)?new Bu(i,r):qs(r)?new n0(i,r):Ws(r)?new a0(i,r):d0(r)?new r0(i,r):new Cn(i,r)},o0=function(i,r){var s=i0(i,r);return s.flags|=4,Gs(i,r,s,s),s},JC=function(i,r,s){return r.styles.isPositionedWithZIndex()||r.styles.opacity<1||r.styles.isTransformed()||wu(i)&&s.styles.isTransparent()},ZC=function(i){return i.isPositioned()||i.isFloating()},s0=function(i){return i.nodeType===Node.TEXT_NODE},Tr=function(i){return i.nodeType===Node.ELEMENT_NODE},ou=function(i){return Tr(i)&&typeof i.style<"u"&&!Ys(i)},Ys=function(i){return typeof i.className=="object"},$C=function(i){return i.tagName==="LI"},WC=function(i){return i.tagName==="OL"},qC=function(i){return i.tagName==="INPUT"},PC=function(i){return i.tagName==="HTML"},l0=function(i){return i.tagName==="svg"},wu=function(i){return i.tagName==="BODY"},c0=function(i){return i.tagName==="CANVAS"},Zp=function(i){return i.tagName==="VIDEO"},su=function(i){return i.tagName==="IMG"},d0=function(i){return i.tagName==="IFRAME"},$p=function(i){return i.tagName==="STYLE"},A2=function(i){return i.tagName==="SCRIPT"},Ws=function(i){return i.tagName==="TEXTAREA"},qs=function(i){return i.tagName==="SELECT"},u0=function(i){return i.tagName==="SLOT"},Wp=function(i){return i.tagName.indexOf("-")>0},e2=function(){function i(){this.counters={}}return i.prototype.getCounterValue=function(r){var s=this.counters[r];return s&&s.length?s[s.length-1]:1},i.prototype.getCounterValues=function(r){var s=this.counters[r];return s||[]},i.prototype.pop=function(r){var s=this;r.forEach(function(o){return s.counters[o].pop()})},i.prototype.parse=function(r){var s=this,o=r.counterIncrement,d=r.counterReset,f=!0;o!==null&&o.forEach(function(m){var x=s.counters[m.counter];x&&m.increment!==0&&(f=!1,x.length||x.push(1),x[Math.max(0,x.length-1)]+=m.increment)});var h=[];return f&&d.forEach(function(m){var x=s.counters[m.counter];h.push(m.counter),x||(x=s.counters[m.counter]=[]),x.push(m.reset)}),h},i}(),qp={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Pp={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},t2={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},n2={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},kr=function(i,r,s,o,d,f){return i<r||i>s?ao(i,d,f.length>0):o.integers.reduce(function(h,m,x){for(;i>=m;)i-=m,h+=o.values[x];return h},"")+f},f0=function(i,r,s,o){var d="";do s||i--,d=o(i)+d,i/=r;while(i*r>=r);return d},ct=function(i,r,s,o,d){var f=s-r+1;return(i<0?"-":"")+(f0(Math.abs(i),f,o,function(h){return dt(Math.floor(h%f)+r)})+d)},za=function(i,r,s){s===void 0&&(s=". ");var o=r.length;return f0(Math.abs(i),o,!1,function(d){return r[Math.floor(d%o)]})+s},Mr=1,fa=2,ha=4,$i=8,Kn=function(i,r,s,o,d,f){if(i<-9999||i>9999)return ao(i,4,d.length>0);var h=Math.abs(i),m=d;if(h===0)return r[0]+m;for(var x=0;h>0&&x<=4;x++){var B=h%10;B===0&&bt(f,Mr)&&m!==""?m=r[B]+m:B>1||B===1&&x===0||B===1&&x===1&&bt(f,fa)||B===1&&x===1&&bt(f,ha)&&i>100||B===1&&x>1&&bt(f,$i)?m=r[B]+(x>0?s[x-1]:"")+m:B===1&&x>0&&(m=s[x-1]+m),h=Math.floor(h/10)}return(i<0?o:"")+m},Ax="十百千萬",ex="拾佰仟萬",tx="マイナス",Id="마이너스",ao=function(i,r,s){var o=s?". ":"",d=s?"、":"",f=s?", ":"",h=s?" ":"";switch(r){case 0:return"•"+h;case 1:return"◦"+h;case 2:return"◾"+h;case 5:var m=ct(i,48,57,!0,o);return m.length<4?"0"+m:m;case 4:return za(i,"〇一二三四五六七八九",d);case 6:return kr(i,1,3999,qp,3,o).toLowerCase();case 7:return kr(i,1,3999,qp,3,o);case 8:return ct(i,945,969,!1,o);case 9:return ct(i,97,122,!1,o);case 10:return ct(i,65,90,!1,o);case 11:return ct(i,1632,1641,!0,o);case 12:case 49:return kr(i,1,9999,Pp,3,o);case 35:return kr(i,1,9999,Pp,3,o).toLowerCase();case 13:return ct(i,2534,2543,!0,o);case 14:case 30:return ct(i,6112,6121,!0,o);case 15:return za(i,"子丑寅卯辰巳午未申酉戌亥",d);case 16:return za(i,"甲乙丙丁戊己庚辛壬癸",d);case 17:case 48:return Kn(i,"零一二三四五六七八九",Ax,"負",d,fa|ha|$i);case 47:return Kn(i,"零壹貳參肆伍陸柒捌玖",ex,"負",d,Mr|fa|ha|$i);case 42:return Kn(i,"零一二三四五六七八九",Ax,"负",d,fa|ha|$i);case 41:return Kn(i,"零壹贰叁肆伍陆柒捌玖",ex,"负",d,Mr|fa|ha|$i);case 26:return Kn(i,"〇一二三四五六七八九","十百千万",tx,d,0);case 25:return Kn(i,"零壱弐参四伍六七八九","拾百千万",tx,d,Mr|fa|ha);case 31:return Kn(i,"영일이삼사오육칠팔구","십백천만",Id,f,Mr|fa|ha);case 33:return Kn(i,"零一二三四五六七八九","十百千萬",Id,f,0);case 32:return Kn(i,"零壹貳參四五六七八九","拾百千",Id,f,Mr|fa|ha);case 18:return ct(i,2406,2415,!0,o);case 20:return kr(i,1,19999,n2,3,o);case 21:return ct(i,2790,2799,!0,o);case 22:return ct(i,2662,2671,!0,o);case 22:return kr(i,1,10999,t2,3,o);case 23:return za(i,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return za(i,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return ct(i,3302,3311,!0,o);case 28:return za(i,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",d);case 29:return za(i,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",d);case 34:return ct(i,3792,3801,!0,o);case 37:return ct(i,6160,6169,!0,o);case 38:return ct(i,4160,4169,!0,o);case 39:return ct(i,2918,2927,!0,o);case 40:return ct(i,1776,1785,!0,o);case 43:return ct(i,3046,3055,!0,o);case 44:return ct(i,3174,3183,!0,o);case 45:return ct(i,3664,3673,!0,o);case 46:return ct(i,3872,3881,!0,o);case 3:default:return ct(i,48,57,!0,o)}},h0="data-html2canvas-ignore",nx=function(){function i(r,s,o){if(this.context=r,this.options=o,this.scrolledElements=[],this.referenceElement=s,this.counters=new e2,this.quoteDepth=0,!s.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(s.ownerDocument.documentElement,!1)}return i.prototype.toIFrame=function(r,s){var o=this,d=a2(r,s);if(!d.contentWindow)return Promise.reject("Unable to find iframe window");var f=r.defaultView.pageXOffset,h=r.defaultView.pageYOffset,m=d.contentWindow,x=m.document,B=o2(d).then(function(){return Dt(o,void 0,void 0,function(){var C,F;return Ht(this,function(T){switch(T.label){case 0:return this.scrolledElements.forEach(d2),m&&(m.scrollTo(s.left,s.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(m.scrollY!==s.top||m.scrollX!==s.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(m.scrollX-s.left,m.scrollY-s.top,0,0))),C=this.options.onclone,F=this.clonedReferenceElement,typeof F>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:x.fonts&&x.fonts.ready?[4,x.fonts.ready]:[3,2];case 1:T.sent(),T.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,i2(x)]:[3,4];case 3:T.sent(),T.label=4;case 4:return typeof C=="function"?[2,Promise.resolve().then(function(){return C(x,F)}).then(function(){return d})]:[2,d]}})})});return x.open(),x.write(l2(document.doctype)+"<html></html>"),c2(this.referenceElement.ownerDocument,f,h),x.replaceChild(x.adoptNode(this.documentElement),x.documentElement),x.close(),B},i.prototype.createElementClone=function(r){if(au(r,2))debugger;if(c0(r))return this.createCanvasClone(r);if(Zp(r))return this.createVideoClone(r);if($p(r))return this.createStyleClone(r);var s=r.cloneNode(!1);return su(s)&&(su(r)&&r.currentSrc&&r.currentSrc!==r.src&&(s.src=r.currentSrc,s.srcset=""),s.loading==="lazy"&&(s.loading="eager")),Wp(s)?this.createCustomElementClone(s):s},i.prototype.createCustomElementClone=function(r){var s=document.createElement("html2canvascustomelement");return Ld(r.style,s),s},i.prototype.createStyleClone=function(r){try{var s=r.sheet;if(s&&s.cssRules){var o=[].slice.call(s.cssRules,0).reduce(function(f,h){return h&&typeof h.cssText=="string"?f+h.cssText:f},""),d=r.cloneNode(!1);return d.textContent=o,d}}catch(f){if(this.context.logger.error("Unable to access cssRules property",f),f.name!=="SecurityError")throw f}return r.cloneNode(!1)},i.prototype.createCanvasClone=function(r){var s;if(this.options.inlineImages&&r.ownerDocument){var o=r.ownerDocument.createElement("img");try{return o.src=r.toDataURL(),o}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",r)}}var d=r.cloneNode(!1);try{d.width=r.width,d.height=r.height;var f=r.getContext("2d"),h=d.getContext("2d");if(h)if(!this.options.allowTaint&&f)h.putImageData(f.getImageData(0,0,r.width,r.height),0,0);else{var m=(s=r.getContext("webgl2"))!==null&&s!==void 0?s:r.getContext("webgl");if(m){var x=m.getContextAttributes();x?.preserveDrawingBuffer===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",r)}h.drawImage(r,0,0)}return d}catch{this.context.logger.info("Unable to clone canvas as it is tainted",r)}return d},i.prototype.createVideoClone=function(r){var s=r.ownerDocument.createElement("canvas");s.width=r.offsetWidth,s.height=r.offsetHeight;var o=s.getContext("2d");try{return o&&(o.drawImage(r,0,0,s.width,s.height),this.options.allowTaint||o.getImageData(0,0,s.width,s.height)),s}catch{this.context.logger.info("Unable to clone video as it is tainted",r)}var d=r.ownerDocument.createElement("canvas");return d.width=r.offsetWidth,d.height=r.offsetHeight,d},i.prototype.appendChildNode=function(r,s,o){(!Tr(s)||!A2(s)&&!s.hasAttribute(h0)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(s)))&&(!this.options.copyStyles||!Tr(s)||!$p(s))&&r.appendChild(this.cloneNode(s,o))},i.prototype.cloneChildNodes=function(r,s,o){for(var d=this,f=r.shadowRoot?r.shadowRoot.firstChild:r.firstChild;f;f=f.nextSibling)if(Tr(f)&&u0(f)&&typeof f.assignedNodes=="function"){var h=f.assignedNodes();h.length&&h.forEach(function(m){return d.appendChildNode(s,m,o)})}else this.appendChildNode(s,f,o)},i.prototype.cloneNode=function(r,s){if(s0(r))return document.createTextNode(r.data);if(!r.ownerDocument)return r.cloneNode(!1);var o=r.ownerDocument.defaultView;if(o&&Tr(r)&&(ou(r)||Ys(r))){var d=this.createElementClone(r);d.style.transitionProperty="none";var f=o.getComputedStyle(r),h=o.getComputedStyle(r,":before"),m=o.getComputedStyle(r,":after");this.referenceElement===r&&ou(d)&&(this.clonedReferenceElement=d),wu(d)&&h2(d);var x=this.counters.parse(new Mp(this.context,f)),B=this.resolvePseudoContent(r,d,h,eo.BEFORE);Wp(r)&&(s=!0),Zp(r)||this.cloneChildNodes(r,d,s),B&&d.insertBefore(B,d.firstChild);var C=this.resolvePseudoContent(r,d,m,eo.AFTER);return C&&d.appendChild(C),this.counters.pop(x),(f&&(this.options.copyStyles||Ys(r))&&!d0(r)||s)&&Ld(f,d),(r.scrollTop!==0||r.scrollLeft!==0)&&this.scrolledElements.push([d,r.scrollLeft,r.scrollTop]),(Ws(r)||qs(r))&&(Ws(d)||qs(d))&&(d.value=r.value),d}return r.cloneNode(!1)},i.prototype.resolvePseudoContent=function(r,s,o,d){var f=this;if(o){var h=o.content,m=s.ownerDocument;if(!(!m||!h||h==="none"||h==="-moz-alt-content"||o.display==="none")){this.counters.parse(new Mp(this.context,o));var x=new $v(this.context,o),B=m.createElement("html2canvaspseudoelement");Ld(o,B),x.content.forEach(function(F){if(F.type===0)B.appendChild(m.createTextNode(F.value));else if(F.type===22){var T=m.createElement("img");T.src=F.value,T.style.opacity="1",B.appendChild(T)}else if(F.type===18){if(F.name==="attr"){var oA=F.values.filter(Ve);oA.length&&B.appendChild(m.createTextNode(r.getAttribute(oA[0].value)||""))}else if(F.name==="counter"){var eA=F.values.filter(Lr),uA=eA[0],MA=eA[1];if(uA&&Ve(uA)){var NA=f.counters.getCounterValue(uA.value),gA=MA&&Ve(MA)?nu.parse(f.context,MA.value):3;B.appendChild(m.createTextNode(ao(NA,gA,!1)))}}else if(F.name==="counters"){var XA=F.values.filter(Lr),uA=XA[0],xA=XA[1],MA=XA[2];if(uA&&Ve(uA)){var mA=f.counters.getCounterValues(uA.value),Y=MA&&Ve(MA)?nu.parse(f.context,MA.value):3,IA=xA&&xA.type===0?xA.value:"",V=mA.map(function(GA){return ao(GA,Y,!1)}).join(IA);B.appendChild(m.createTextNode(V))}}}else if(F.type===20)switch(F.value){case"open-quote":B.appendChild(m.createTextNode(Np(x.quotes,f.quoteDepth++,!0)));break;case"close-quote":B.appendChild(m.createTextNode(Np(x.quotes,--f.quoteDepth,!1)));break;default:B.appendChild(m.createTextNode(F.value))}}),B.className=lu+" "+cu;var C=d===eo.BEFORE?" "+lu:" "+cu;return Ys(s)?s.className.baseValue+=C:s.className+=C,B}}},i.destroy=function(r){return r.parentNode?(r.parentNode.removeChild(r),!0):!1},i}(),eo;(function(i){i[i.BEFORE=0]="BEFORE",i[i.AFTER=1]="AFTER"})(eo||(eo={}));var a2=function(i,r){var s=i.createElement("iframe");return s.className="html2canvas-container",s.style.visibility="hidden",s.style.position="fixed",s.style.left="-10000px",s.style.top="0px",s.style.border="0",s.width=r.width.toString(),s.height=r.height.toString(),s.scrolling="no",s.setAttribute(h0,"true"),i.body.appendChild(s),s},r2=function(i){return new Promise(function(r){if(i.complete){r();return}if(!i.src){r();return}i.onload=r,i.onerror=r})},i2=function(i){return Promise.all([].slice.call(i.images,0).map(r2))},o2=function(i){return new Promise(function(r,s){var o=i.contentWindow;if(!o)return s("No window assigned for iframe");var d=o.document;o.onload=i.onload=function(){o.onload=i.onload=null;var f=setInterval(function(){d.body.childNodes.length>0&&d.readyState==="complete"&&(clearInterval(f),r(i))},50)}})},s2=["all","d","content"],Ld=function(i,r){for(var s=i.length-1;s>=0;s--){var o=i.item(s);s2.indexOf(o)===-1&&r.style.setProperty(o,i.getPropertyValue(o))}return r},l2=function(i){var r="";return i&&(r+="<!DOCTYPE ",i.name&&(r+=i.name),i.internalSubset&&(r+=i.internalSubset),i.publicId&&(r+='"'+i.publicId+'"'),i.systemId&&(r+='"'+i.systemId+'"'),r+=">"),r},c2=function(i,r,s){i&&i.defaultView&&(r!==i.defaultView.pageXOffset||s!==i.defaultView.pageYOffset)&&i.defaultView.scrollTo(r,s)},d2=function(i){var r=i[0],s=i[1],o=i[2];r.scrollLeft=s,r.scrollTop=o},u2=":before",f2=":after",lu="___html2canvas___pseudoelement_before",cu="___html2canvas___pseudoelement_after",ax=`{
    content: "" !important;
    display: none !important;
}`,h2=function(i){g2(i,"."+lu+u2+ax+`
         .`+cu+f2+ax)},g2=function(i,r){var s=i.ownerDocument;if(s){var o=s.createElement("style");o.textContent=r,i.appendChild(o)}},g0=function(){function i(){}return i.getOrigin=function(r){var s=i._link;return s?(s.href=r,s.href=s.href,s.protocol+s.hostname+s.port):"about:blank"},i.isSameOrigin=function(r){return i.getOrigin(r)===i._origin},i.setContext=function(r){i._link=r.document.createElement("a"),i._origin=i.getOrigin(r.location.href)},i._origin="about:blank",i}(),p2=function(){function i(r,s){this.context=r,this._options=s,this._cache={}}return i.prototype.addImage=function(r){var s=Promise.resolve();return this.has(r)||(Kd(r)||B2(r))&&(this._cache[r]=this.loadImage(r)).catch(function(){}),s},i.prototype.match=function(r){return this._cache[r]},i.prototype.loadImage=function(r){return Dt(this,void 0,void 0,function(){var s,o,d,f,h=this;return Ht(this,function(m){switch(m.label){case 0:return s=g0.isSameOrigin(r),o=!Od(r)&&this._options.useCORS===!0&&Ft.SUPPORT_CORS_IMAGES&&!s,d=!Od(r)&&!s&&!Kd(r)&&typeof this._options.proxy=="string"&&Ft.SUPPORT_CORS_XHR&&!o,!s&&this._options.allowTaint===!1&&!Od(r)&&!Kd(r)&&!d&&!o?[2]:(f=r,d?[4,this.proxy(f)]:[3,2]);case 1:f=m.sent(),m.label=2;case 2:return this.context.logger.debug("Added image "+r.substring(0,256)),[4,new Promise(function(x,B){var C=new Image;C.onload=function(){return x(C)},C.onerror=B,(w2(f)||o)&&(C.crossOrigin="anonymous"),C.src=f,C.complete===!0&&setTimeout(function(){return x(C)},500),h._options.imageTimeout>0&&setTimeout(function(){return B("Timed out ("+h._options.imageTimeout+"ms) loading image")},h._options.imageTimeout)})];case 3:return[2,m.sent()]}})})},i.prototype.has=function(r){return typeof this._cache[r]<"u"},i.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},i.prototype.proxy=function(r){var s=this,o=this._options.proxy;if(!o)throw new Error("No proxy defined");var d=r.substring(0,256);return new Promise(function(f,h){var m=Ft.SUPPORT_RESPONSE_TYPE?"blob":"text",x=new XMLHttpRequest;x.onload=function(){if(x.status===200)if(m==="text")f(x.response);else{var F=new FileReader;F.addEventListener("load",function(){return f(F.result)},!1),F.addEventListener("error",function(T){return h(T)},!1),F.readAsDataURL(x.response)}else h("Failed to proxy resource "+d+" with status code "+x.status)},x.onerror=h;var B=o.indexOf("?")>-1?"&":"?";if(x.open("GET",""+o+B+"url="+encodeURIComponent(r)+"&responseType="+m),m!=="text"&&x instanceof XMLHttpRequest&&(x.responseType=m),s._options.imageTimeout){var C=s._options.imageTimeout;x.timeout=C,x.ontimeout=function(){return h("Timed out ("+C+"ms) proxying "+d)}}x.send()})},i}(),x2=/^data:image\/svg\+xml/i,m2=/^data:image\/.*;base64,/i,b2=/^data:image\/.*/i,B2=function(i){return Ft.SUPPORT_SVG_DRAWING||!y2(i)},Od=function(i){return b2.test(i)},w2=function(i){return m2.test(i)},Kd=function(i){return i.substr(0,4)==="blob"},y2=function(i){return i.substr(-3).toLowerCase()==="svg"||x2.test(i)},qA=function(){function i(r,s){this.type=0,this.x=r,this.y=s}return i.prototype.add=function(r,s){return new i(this.x+r,this.y+s)},i}(),Hr=function(i,r,s){return new qA(i.x+(r.x-i.x)*s,i.y+(r.y-i.y)*s)},Ls=function(){function i(r,s,o,d){this.type=1,this.start=r,this.startControl=s,this.endControl=o,this.end=d}return i.prototype.subdivide=function(r,s){var o=Hr(this.start,this.startControl,r),d=Hr(this.startControl,this.endControl,r),f=Hr(this.endControl,this.end,r),h=Hr(o,d,r),m=Hr(d,f,r),x=Hr(h,m,r);return s?new i(this.start,o,h,x):new i(x,m,f,this.end)},i.prototype.add=function(r,s){return new i(this.start.add(r,s),this.startControl.add(r,s),this.endControl.add(r,s),this.end.add(r,s))},i.prototype.reverse=function(){return new i(this.end,this.endControl,this.startControl,this.start)},i}(),an=function(i){return i.type===1},v2=function(){function i(r){var s=r.styles,o=r.bounds,d=Ji(s.borderTopLeftRadius,o.width,o.height),f=d[0],h=d[1],m=Ji(s.borderTopRightRadius,o.width,o.height),x=m[0],B=m[1],C=Ji(s.borderBottomRightRadius,o.width,o.height),F=C[0],T=C[1],oA=Ji(s.borderBottomLeftRadius,o.width,o.height),eA=oA[0],uA=oA[1],MA=[];MA.push((f+x)/o.width),MA.push((eA+F)/o.width),MA.push((h+uA)/o.height),MA.push((B+T)/o.height);var NA=Math.max.apply(Math,MA);NA>1&&(f/=NA,h/=NA,x/=NA,B/=NA,F/=NA,T/=NA,eA/=NA,uA/=NA);var gA=o.width-x,XA=o.height-T,xA=o.width-F,mA=o.height-uA,Y=s.borderTopWidth,IA=s.borderRightWidth,V=s.borderBottomWidth,sA=s.borderLeftWidth,KA=Pe(s.paddingTop,r.bounds.width),GA=Pe(s.paddingRight,r.bounds.width),CA=Pe(s.paddingBottom,r.bounds.width),LA=Pe(s.paddingLeft,r.bounds.width);this.topLeftBorderDoubleOuterBox=f>0||h>0?tt(o.left+sA/3,o.top+Y/3,f-sA/3,h-Y/3,Ke.TOP_LEFT):new qA(o.left+sA/3,o.top+Y/3),this.topRightBorderDoubleOuterBox=f>0||h>0?tt(o.left+gA,o.top+Y/3,x-IA/3,B-Y/3,Ke.TOP_RIGHT):new qA(o.left+o.width-IA/3,o.top+Y/3),this.bottomRightBorderDoubleOuterBox=F>0||T>0?tt(o.left+xA,o.top+XA,F-IA/3,T-V/3,Ke.BOTTOM_RIGHT):new qA(o.left+o.width-IA/3,o.top+o.height-V/3),this.bottomLeftBorderDoubleOuterBox=eA>0||uA>0?tt(o.left+sA/3,o.top+mA,eA-sA/3,uA-V/3,Ke.BOTTOM_LEFT):new qA(o.left+sA/3,o.top+o.height-V/3),this.topLeftBorderDoubleInnerBox=f>0||h>0?tt(o.left+sA*2/3,o.top+Y*2/3,f-sA*2/3,h-Y*2/3,Ke.TOP_LEFT):new qA(o.left+sA*2/3,o.top+Y*2/3),this.topRightBorderDoubleInnerBox=f>0||h>0?tt(o.left+gA,o.top+Y*2/3,x-IA*2/3,B-Y*2/3,Ke.TOP_RIGHT):new qA(o.left+o.width-IA*2/3,o.top+Y*2/3),this.bottomRightBorderDoubleInnerBox=F>0||T>0?tt(o.left+xA,o.top+XA,F-IA*2/3,T-V*2/3,Ke.BOTTOM_RIGHT):new qA(o.left+o.width-IA*2/3,o.top+o.height-V*2/3),this.bottomLeftBorderDoubleInnerBox=eA>0||uA>0?tt(o.left+sA*2/3,o.top+mA,eA-sA*2/3,uA-V*2/3,Ke.BOTTOM_LEFT):new qA(o.left+sA*2/3,o.top+o.height-V*2/3),this.topLeftBorderStroke=f>0||h>0?tt(o.left+sA/2,o.top+Y/2,f-sA/2,h-Y/2,Ke.TOP_LEFT):new qA(o.left+sA/2,o.top+Y/2),this.topRightBorderStroke=f>0||h>0?tt(o.left+gA,o.top+Y/2,x-IA/2,B-Y/2,Ke.TOP_RIGHT):new qA(o.left+o.width-IA/2,o.top+Y/2),this.bottomRightBorderStroke=F>0||T>0?tt(o.left+xA,o.top+XA,F-IA/2,T-V/2,Ke.BOTTOM_RIGHT):new qA(o.left+o.width-IA/2,o.top+o.height-V/2),this.bottomLeftBorderStroke=eA>0||uA>0?tt(o.left+sA/2,o.top+mA,eA-sA/2,uA-V/2,Ke.BOTTOM_LEFT):new qA(o.left+sA/2,o.top+o.height-V/2),this.topLeftBorderBox=f>0||h>0?tt(o.left,o.top,f,h,Ke.TOP_LEFT):new qA(o.left,o.top),this.topRightBorderBox=x>0||B>0?tt(o.left+gA,o.top,x,B,Ke.TOP_RIGHT):new qA(o.left+o.width,o.top),this.bottomRightBorderBox=F>0||T>0?tt(o.left+xA,o.top+XA,F,T,Ke.BOTTOM_RIGHT):new qA(o.left+o.width,o.top+o.height),this.bottomLeftBorderBox=eA>0||uA>0?tt(o.left,o.top+mA,eA,uA,Ke.BOTTOM_LEFT):new qA(o.left,o.top+o.height),this.topLeftPaddingBox=f>0||h>0?tt(o.left+sA,o.top+Y,Math.max(0,f-sA),Math.max(0,h-Y),Ke.TOP_LEFT):new qA(o.left+sA,o.top+Y),this.topRightPaddingBox=x>0||B>0?tt(o.left+Math.min(gA,o.width-IA),o.top+Y,gA>o.width+IA?0:Math.max(0,x-IA),Math.max(0,B-Y),Ke.TOP_RIGHT):new qA(o.left+o.width-IA,o.top+Y),this.bottomRightPaddingBox=F>0||T>0?tt(o.left+Math.min(xA,o.width-sA),o.top+Math.min(XA,o.height-V),Math.max(0,F-IA),Math.max(0,T-V),Ke.BOTTOM_RIGHT):new qA(o.left+o.width-IA,o.top+o.height-V),this.bottomLeftPaddingBox=eA>0||uA>0?tt(o.left+sA,o.top+Math.min(mA,o.height-V),Math.max(0,eA-sA),Math.max(0,uA-V),Ke.BOTTOM_LEFT):new qA(o.left+sA,o.top+o.height-V),this.topLeftContentBox=f>0||h>0?tt(o.left+sA+LA,o.top+Y+KA,Math.max(0,f-(sA+LA)),Math.max(0,h-(Y+KA)),Ke.TOP_LEFT):new qA(o.left+sA+LA,o.top+Y+KA),this.topRightContentBox=x>0||B>0?tt(o.left+Math.min(gA,o.width+sA+LA),o.top+Y+KA,gA>o.width+sA+LA?0:x-sA+LA,B-(Y+KA),Ke.TOP_RIGHT):new qA(o.left+o.width-(IA+GA),o.top+Y+KA),this.bottomRightContentBox=F>0||T>0?tt(o.left+Math.min(xA,o.width-(sA+LA)),o.top+Math.min(XA,o.height+Y+KA),Math.max(0,F-(IA+GA)),T-(V+CA),Ke.BOTTOM_RIGHT):new qA(o.left+o.width-(IA+GA),o.top+o.height-(V+CA)),this.bottomLeftContentBox=eA>0||uA>0?tt(o.left+sA+LA,o.top+mA,Math.max(0,eA-(sA+LA)),uA-(V+CA),Ke.BOTTOM_LEFT):new qA(o.left+sA+LA,o.top+o.height-(V+CA))}return i}(),Ke;(function(i){i[i.TOP_LEFT=0]="TOP_LEFT",i[i.TOP_RIGHT=1]="TOP_RIGHT",i[i.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",i[i.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(Ke||(Ke={}));var tt=function(i,r,s,o,d){var f=4*((Math.sqrt(2)-1)/3),h=s*f,m=o*f,x=i+s,B=r+o;switch(d){case Ke.TOP_LEFT:return new Ls(new qA(i,B),new qA(i,B-m),new qA(x-h,r),new qA(x,r));case Ke.TOP_RIGHT:return new Ls(new qA(i,r),new qA(i+h,r),new qA(x,B-m),new qA(x,B));case Ke.BOTTOM_RIGHT:return new Ls(new qA(x,r),new qA(x,r+m),new qA(i+h,B),new qA(i,B));case Ke.BOTTOM_LEFT:default:return new Ls(new qA(x,B),new qA(x-h,B),new qA(i,r+m),new qA(i,r))}},Ps=function(i){return[i.topLeftBorderBox,i.topRightBorderBox,i.bottomRightBorderBox,i.bottomLeftBorderBox]},C2=function(i){return[i.topLeftContentBox,i.topRightContentBox,i.bottomRightContentBox,i.bottomLeftContentBox]},Al=function(i){return[i.topLeftPaddingBox,i.topRightPaddingBox,i.bottomRightPaddingBox,i.bottomLeftPaddingBox]},Q2=function(){function i(r,s,o){this.offsetX=r,this.offsetY=s,this.matrix=o,this.type=0,this.target=6}return i}(),Os=function(){function i(r,s){this.path=r,this.target=s,this.type=1}return i}(),U2=function(){function i(r){this.opacity=r,this.type=2,this.target=6}return i}(),E2=function(i){return i.type===0},p0=function(i){return i.type===1},F2=function(i){return i.type===2},rx=function(i,r){return i.length===r.length?i.some(function(s,o){return s===r[o]}):!1},j2=function(i,r,s,o,d){return i.map(function(f,h){switch(h){case 0:return f.add(r,s);case 1:return f.add(r+o,s);case 2:return f.add(r+o,s+d);case 3:return f.add(r,s+d)}return f})},x0=function(){function i(r){this.element=r,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return i}(),m0=function(){function i(r,s){if(this.container=r,this.parent=s,this.effects=[],this.curves=new v2(this.container),this.container.styles.opacity<1&&this.effects.push(new U2(this.container.styles.opacity)),this.container.styles.transform!==null){var o=this.container.bounds.left+this.container.styles.transformOrigin[0].number,d=this.container.bounds.top+this.container.styles.transformOrigin[1].number,f=this.container.styles.transform;this.effects.push(new Q2(o,d,f))}if(this.container.styles.overflowX!==0){var h=Ps(this.curves),m=Al(this.curves);rx(h,m)?this.effects.push(new Os(h,6)):(this.effects.push(new Os(h,2)),this.effects.push(new Os(m,4)))}}return i.prototype.getEffects=function(r){for(var s=[2,3].indexOf(this.container.styles.position)===-1,o=this.parent,d=this.effects.slice(0);o;){var f=o.effects.filter(function(x){return!p0(x)});if(s||o.container.styles.position!==0||!o.parent){if(d.unshift.apply(d,f),s=[2,3].indexOf(o.container.styles.position)===-1,o.container.styles.overflowX!==0){var h=Ps(o.curves),m=Al(o.curves);rx(h,m)||d.unshift(new Os(m,6))}}else d.unshift.apply(d,f);o=o.parent}return d.filter(function(x){return bt(x.target,r)})},i}(),du=function(i,r,s,o){i.container.elements.forEach(function(d){var f=bt(d.flags,4),h=bt(d.flags,2),m=new m0(d,i);bt(d.styles.display,2048)&&o.push(m);var x=bt(d.flags,8)?[]:o;if(f||h){var B=f||d.styles.isPositioned()?s:r,C=new x0(m);if(d.styles.isPositioned()||d.styles.opacity<1||d.styles.isTransformed()){var F=d.styles.zIndex.order;if(F<0){var T=0;B.negativeZIndex.some(function(eA,uA){return F>eA.element.container.styles.zIndex.order?(T=uA,!1):T>0}),B.negativeZIndex.splice(T,0,C)}else if(F>0){var oA=0;B.positiveZIndex.some(function(eA,uA){return F>=eA.element.container.styles.zIndex.order?(oA=uA+1,!1):oA>0}),B.positiveZIndex.splice(oA,0,C)}else B.zeroOrAutoZIndexOrTransformedOrOpacity.push(C)}else d.styles.isFloating()?B.nonPositionedFloats.push(C):B.nonPositionedInlineLevel.push(C);du(m,C,f?C:s,x)}else d.styles.isInlineLevel()?r.inlineLevel.push(m):r.nonInlineLevel.push(m),du(m,r,s,x);bt(d.flags,8)&&b0(d,x)})},b0=function(i,r){for(var s=i instanceof iu?i.start:1,o=i instanceof iu?i.reversed:!1,d=0;d<r.length;d++){var f=r[d];f.container instanceof t0&&typeof f.container.value=="number"&&f.container.value!==0&&(s=f.container.value),f.listValue=ao(s,f.container.styles.listStyleType,!0),s+=o?-1:1}},S2=function(i){var r=new m0(i,null),s=new x0(r),o=[];return du(r,s,s,o),b0(r.container,o),s},ix=function(i,r){switch(r){case 0:return on(i.topLeftBorderBox,i.topLeftPaddingBox,i.topRightBorderBox,i.topRightPaddingBox);case 1:return on(i.topRightBorderBox,i.topRightPaddingBox,i.bottomRightBorderBox,i.bottomRightPaddingBox);case 2:return on(i.bottomRightBorderBox,i.bottomRightPaddingBox,i.bottomLeftBorderBox,i.bottomLeftPaddingBox);case 3:default:return on(i.bottomLeftBorderBox,i.bottomLeftPaddingBox,i.topLeftBorderBox,i.topLeftPaddingBox)}},k2=function(i,r){switch(r){case 0:return on(i.topLeftBorderBox,i.topLeftBorderDoubleOuterBox,i.topRightBorderBox,i.topRightBorderDoubleOuterBox);case 1:return on(i.topRightBorderBox,i.topRightBorderDoubleOuterBox,i.bottomRightBorderBox,i.bottomRightBorderDoubleOuterBox);case 2:return on(i.bottomRightBorderBox,i.bottomRightBorderDoubleOuterBox,i.bottomLeftBorderBox,i.bottomLeftBorderDoubleOuterBox);case 3:default:return on(i.bottomLeftBorderBox,i.bottomLeftBorderDoubleOuterBox,i.topLeftBorderBox,i.topLeftBorderDoubleOuterBox)}},H2=function(i,r){switch(r){case 0:return on(i.topLeftBorderDoubleInnerBox,i.topLeftPaddingBox,i.topRightBorderDoubleInnerBox,i.topRightPaddingBox);case 1:return on(i.topRightBorderDoubleInnerBox,i.topRightPaddingBox,i.bottomRightBorderDoubleInnerBox,i.bottomRightPaddingBox);case 2:return on(i.bottomRightBorderDoubleInnerBox,i.bottomRightPaddingBox,i.bottomLeftBorderDoubleInnerBox,i.bottomLeftPaddingBox);case 3:default:return on(i.bottomLeftBorderDoubleInnerBox,i.bottomLeftPaddingBox,i.topLeftBorderDoubleInnerBox,i.topLeftPaddingBox)}},N2=function(i,r){switch(r){case 0:return Ks(i.topLeftBorderStroke,i.topRightBorderStroke);case 1:return Ks(i.topRightBorderStroke,i.bottomRightBorderStroke);case 2:return Ks(i.bottomRightBorderStroke,i.bottomLeftBorderStroke);case 3:default:return Ks(i.bottomLeftBorderStroke,i.topLeftBorderStroke)}},Ks=function(i,r){var s=[];return an(i)?s.push(i.subdivide(.5,!1)):s.push(i),an(r)?s.push(r.subdivide(.5,!0)):s.push(r),s},on=function(i,r,s,o){var d=[];return an(i)?d.push(i.subdivide(.5,!1)):d.push(i),an(s)?d.push(s.subdivide(.5,!0)):d.push(s),an(o)?d.push(o.subdivide(.5,!0).reverse()):d.push(o),an(r)?d.push(r.subdivide(.5,!1).reverse()):d.push(r),d},B0=function(i){var r=i.bounds,s=i.styles;return r.add(s.borderLeftWidth,s.borderTopWidth,-(s.borderRightWidth+s.borderLeftWidth),-(s.borderTopWidth+s.borderBottomWidth))},el=function(i){var r=i.styles,s=i.bounds,o=Pe(r.paddingLeft,s.width),d=Pe(r.paddingRight,s.width),f=Pe(r.paddingTop,s.width),h=Pe(r.paddingBottom,s.width);return s.add(o+r.borderLeftWidth,f+r.borderTopWidth,-(r.borderRightWidth+r.borderLeftWidth+o+d),-(r.borderTopWidth+r.borderBottomWidth+f+h))},M2=function(i,r){return i===0?r.bounds:i===2?el(r):B0(r)},D2=function(i,r){return i===0?r.bounds:i===2?el(r):B0(r)},zd=function(i,r,s){var o=M2(Dr(i.styles.backgroundOrigin,r),i),d=D2(Dr(i.styles.backgroundClip,r),i),f=T2(Dr(i.styles.backgroundSize,r),s,o),h=f[0],m=f[1],x=Ji(Dr(i.styles.backgroundPosition,r),o.width-h,o.height-m),B=I2(Dr(i.styles.backgroundRepeat,r),x,f,o,d),C=Math.round(o.left+x[0]),F=Math.round(o.top+x[1]);return[B,C,F,h,m]},Nr=function(i){return Ve(i)&&i.value===Ir.AUTO},zs=function(i){return typeof i=="number"},T2=function(i,r,s){var o=r[0],d=r[1],f=r[2],h=i[0],m=i[1];if(!h)return[0,0];if(gt(h)&&m&&gt(m))return[Pe(h,s.width),Pe(m,s.height)];var x=zs(f);if(Ve(h)&&(h.value===Ir.CONTAIN||h.value===Ir.COVER)){if(zs(f)){var B=s.width/s.height;return B<f!=(h.value===Ir.COVER)?[s.width,s.width/f]:[s.height*f,s.height]}return[s.width,s.height]}var C=zs(o),F=zs(d),T=C||F;if(Nr(h)&&(!m||Nr(m))){if(C&&F)return[o,d];if(!x&&!T)return[s.width,s.height];if(T&&x){var oA=C?o:d*f,eA=F?d:o/f;return[oA,eA]}var uA=C?o:s.width,MA=F?d:s.height;return[uA,MA]}if(x){var NA=0,gA=0;return gt(h)?NA=Pe(h,s.width):gt(m)&&(gA=Pe(m,s.height)),Nr(h)?NA=gA*f:(!m||Nr(m))&&(gA=NA/f),[NA,gA]}var XA=null,xA=null;if(gt(h)?XA=Pe(h,s.width):m&&gt(m)&&(xA=Pe(m,s.height)),XA!==null&&(!m||Nr(m))&&(xA=C&&F?XA/o*d:s.height),xA!==null&&Nr(h)&&(XA=C&&F?xA/d*o:s.width),XA!==null&&xA!==null)return[XA,xA];throw new Error("Unable to calculate background-size for element")},Dr=function(i,r){var s=i[r];return typeof s>"u"?i[0]:s},I2=function(i,r,s,o,d){var f=r[0],h=r[1],m=s[0],x=s[1];switch(i){case 2:return[new qA(Math.round(o.left),Math.round(o.top+h)),new qA(Math.round(o.left+o.width),Math.round(o.top+h)),new qA(Math.round(o.left+o.width),Math.round(x+o.top+h)),new qA(Math.round(o.left),Math.round(x+o.top+h))];case 3:return[new qA(Math.round(o.left+f),Math.round(o.top)),new qA(Math.round(o.left+f+m),Math.round(o.top)),new qA(Math.round(o.left+f+m),Math.round(o.height+o.top)),new qA(Math.round(o.left+f),Math.round(o.height+o.top))];case 1:return[new qA(Math.round(o.left+f),Math.round(o.top+h)),new qA(Math.round(o.left+f+m),Math.round(o.top+h)),new qA(Math.round(o.left+f+m),Math.round(o.top+h+x)),new qA(Math.round(o.left+f),Math.round(o.top+h+x))];default:return[new qA(Math.round(d.left),Math.round(d.top)),new qA(Math.round(d.left+d.width),Math.round(d.top)),new qA(Math.round(d.left+d.width),Math.round(d.height+d.top)),new qA(Math.round(d.left),Math.round(d.height+d.top))]}},L2="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",ox="Hidden Text",O2=function(){function i(r){this._data={},this._document=r}return i.prototype.parseMetrics=function(r,s){var o=this._document.createElement("div"),d=this._document.createElement("img"),f=this._document.createElement("span"),h=this._document.body;o.style.visibility="hidden",o.style.fontFamily=r,o.style.fontSize=s,o.style.margin="0",o.style.padding="0",o.style.whiteSpace="nowrap",h.appendChild(o),d.src=L2,d.width=1,d.height=1,d.style.margin="0",d.style.padding="0",d.style.verticalAlign="baseline",f.style.fontFamily=r,f.style.fontSize=s,f.style.margin="0",f.style.padding="0",f.appendChild(this._document.createTextNode(ox)),o.appendChild(f),o.appendChild(d);var m=d.offsetTop-f.offsetTop+2;o.removeChild(f),o.appendChild(this._document.createTextNode(ox)),o.style.lineHeight="normal",d.style.verticalAlign="super";var x=d.offsetTop-o.offsetTop+2;return h.removeChild(o),{baseline:m,middle:x}},i.prototype.getMetrics=function(r,s){var o=r+" "+s;return typeof this._data[o]>"u"&&(this._data[o]=this.parseMetrics(r,s)),this._data[o]},i}(),w0=function(){function i(r,s){this.context=r,this.options=s}return i}(),K2=1e4,z2=function(i){fn(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d._activeEffects=[],d.canvas=o.canvas?o.canvas:document.createElement("canvas"),d.ctx=d.canvas.getContext("2d"),o.canvas||(d.canvas.width=Math.floor(o.width*o.scale),d.canvas.height=Math.floor(o.height*o.scale),d.canvas.style.width=o.width+"px",d.canvas.style.height=o.height+"px"),d.fontMetrics=new O2(document),d.ctx.scale(d.options.scale,d.options.scale),d.ctx.translate(-o.x,-o.y),d.ctx.textBaseline="bottom",d._activeEffects=[],d.context.logger.debug("Canvas renderer initialized ("+o.width+"x"+o.height+") with scale "+o.scale),d}return r.prototype.applyEffects=function(s){for(var o=this;this._activeEffects.length;)this.popEffect();s.forEach(function(d){return o.applyEffect(d)})},r.prototype.applyEffect=function(s){this.ctx.save(),F2(s)&&(this.ctx.globalAlpha=s.opacity),E2(s)&&(this.ctx.translate(s.offsetX,s.offsetY),this.ctx.transform(s.matrix[0],s.matrix[1],s.matrix[2],s.matrix[3],s.matrix[4],s.matrix[5]),this.ctx.translate(-s.offsetX,-s.offsetY)),p0(s)&&(this.path(s.path),this.ctx.clip()),this._activeEffects.push(s)},r.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},r.prototype.renderStack=function(s){return Dt(this,void 0,void 0,function(){var o;return Ht(this,function(d){switch(d.label){case 0:return o=s.element.container.styles,o.isVisible()?[4,this.renderStackContent(s)]:[3,2];case 1:d.sent(),d.label=2;case 2:return[2]}})})},r.prototype.renderNode=function(s){return Dt(this,void 0,void 0,function(){return Ht(this,function(o){switch(o.label){case 0:if(bt(s.container.flags,16))debugger;return s.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(s)]:[3,3];case 1:return o.sent(),[4,this.renderNodeContent(s)];case 2:o.sent(),o.label=3;case 3:return[2]}})})},r.prototype.renderTextWithLetterSpacing=function(s,o,d){var f=this;if(o===0)this.ctx.fillText(s.text,s.bounds.left,s.bounds.top+d);else{var h=bu(s.text);h.reduce(function(m,x){return f.ctx.fillText(x,m,s.bounds.top+d),m+f.ctx.measureText(x).width},s.bounds.left)}},r.prototype.createFontStyle=function(s){var o=s.fontVariant.filter(function(h){return h==="normal"||h==="small-caps"}).join(""),d=X2(s.fontFamily).join(", "),f=oo(s.fontSize)?""+s.fontSize.number+s.fontSize.unit:s.fontSize.number+"px";return[[s.fontStyle,o,s.fontWeight,f,d].join(" "),d,f]},r.prototype.renderTextNode=function(s,o){return Dt(this,void 0,void 0,function(){var d,f,h,m,x,B,C,F,T=this;return Ht(this,function(oA){return d=this.createFontStyle(o),f=d[0],h=d[1],m=d[2],this.ctx.font=f,this.ctx.direction=o.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",x=this.fontMetrics.getMetrics(h,m),B=x.baseline,C=x.middle,F=o.paintOrder,s.textBounds.forEach(function(eA){F.forEach(function(uA){switch(uA){case 0:T.ctx.fillStyle=Ct(o.color),T.renderTextWithLetterSpacing(eA,o.letterSpacing,B);var MA=o.textShadow;MA.length&&eA.text.trim().length&&(MA.slice(0).reverse().forEach(function(NA){T.ctx.shadowColor=Ct(NA.color),T.ctx.shadowOffsetX=NA.offsetX.number*T.options.scale,T.ctx.shadowOffsetY=NA.offsetY.number*T.options.scale,T.ctx.shadowBlur=NA.blur.number,T.renderTextWithLetterSpacing(eA,o.letterSpacing,B)}),T.ctx.shadowColor="",T.ctx.shadowOffsetX=0,T.ctx.shadowOffsetY=0,T.ctx.shadowBlur=0),o.textDecorationLine.length&&(T.ctx.fillStyle=Ct(o.textDecorationColor||o.color),o.textDecorationLine.forEach(function(NA){switch(NA){case 1:T.ctx.fillRect(eA.bounds.left,Math.round(eA.bounds.top+B),eA.bounds.width,1);break;case 2:T.ctx.fillRect(eA.bounds.left,Math.round(eA.bounds.top),eA.bounds.width,1);break;case 3:T.ctx.fillRect(eA.bounds.left,Math.ceil(eA.bounds.top+C),eA.bounds.width,1);break}}));break;case 1:o.webkitTextStrokeWidth&&eA.text.trim().length&&(T.ctx.strokeStyle=Ct(o.webkitTextStrokeColor),T.ctx.lineWidth=o.webkitTextStrokeWidth,T.ctx.lineJoin=window.chrome?"miter":"round",T.ctx.strokeText(eA.text,eA.bounds.left,eA.bounds.top+B)),T.ctx.strokeStyle="",T.ctx.lineWidth=0,T.ctx.lineJoin="miter";break}})}),[2]})})},r.prototype.renderReplacedElement=function(s,o,d){if(d&&s.intrinsicWidth>0&&s.intrinsicHeight>0){var f=el(s),h=Al(o);this.path(h),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(d,0,0,s.intrinsicWidth,s.intrinsicHeight,f.left,f.top,f.width,f.height),this.ctx.restore()}},r.prototype.renderNodeContent=function(s){return Dt(this,void 0,void 0,function(){var o,d,f,h,m,x,gA,gA,B,C,F,T,xA,oA,eA,mA,uA,MA,NA,gA,XA,xA,mA;return Ht(this,function(Y){switch(Y.label){case 0:this.applyEffects(s.getEffects(4)),o=s.container,d=s.curves,f=o.styles,h=0,m=o.textNodes,Y.label=1;case 1:return h<m.length?(x=m[h],[4,this.renderTextNode(x,f)]):[3,4];case 2:Y.sent(),Y.label=3;case 3:return h++,[3,1];case 4:if(!(o instanceof Px))return[3,8];Y.label=5;case 5:return Y.trys.push([5,7,,8]),[4,this.context.cache.match(o.src)];case 6:return gA=Y.sent(),this.renderReplacedElement(o,d,gA),[3,8];case 7:return Y.sent(),this.context.logger.error("Error loading image "+o.src),[3,8];case 8:if(o instanceof A0&&this.renderReplacedElement(o,d,o.canvas),!(o instanceof e0))return[3,12];Y.label=9;case 9:return Y.trys.push([9,11,,12]),[4,this.context.cache.match(o.svg)];case 10:return gA=Y.sent(),this.renderReplacedElement(o,d,gA),[3,12];case 11:return Y.sent(),this.context.logger.error("Error loading svg "+o.svg.substring(0,255)),[3,12];case 12:return o instanceof r0&&o.tree?(B=new r(this.context,{scale:this.options.scale,backgroundColor:o.backgroundColor,x:0,y:0,width:o.width,height:o.height}),[4,B.render(o.tree)]):[3,14];case 13:C=Y.sent(),o.width&&o.height&&this.ctx.drawImage(C,0,0,o.width,o.height,o.bounds.left,o.bounds.top,o.bounds.width,o.bounds.height),Y.label=14;case 14:if(o instanceof Bu&&(F=Math.min(o.bounds.width,o.bounds.height),o.type===Zs?o.checked&&(this.ctx.save(),this.path([new qA(o.bounds.left+F*.39363,o.bounds.top+F*.79),new qA(o.bounds.left+F*.16,o.bounds.top+F*.5549),new qA(o.bounds.left+F*.27347,o.bounds.top+F*.44071),new qA(o.bounds.left+F*.39694,o.bounds.top+F*.5649),new qA(o.bounds.left+F*.72983,o.bounds.top+F*.23),new qA(o.bounds.left+F*.84,o.bounds.top+F*.34085),new qA(o.bounds.left+F*.39363,o.bounds.top+F*.79)]),this.ctx.fillStyle=Ct(Jp),this.ctx.fill(),this.ctx.restore()):o.type===$s&&o.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(o.bounds.left+F/2,o.bounds.top+F/2,F/4,0,Math.PI*2,!0),this.ctx.fillStyle=Ct(Jp),this.ctx.fill(),this.ctx.restore())),R2(o)&&o.value.length){switch(T=this.createFontStyle(f),xA=T[0],oA=T[1],eA=this.fontMetrics.getMetrics(xA,oA).baseline,this.ctx.font=xA,this.ctx.fillStyle=Ct(f.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=G2(o.styles.textAlign),mA=el(o),uA=0,o.styles.textAlign){case 1:uA+=mA.width/2;break;case 2:uA+=mA.width;break}MA=mA.add(uA,0,0,-mA.height/2+1),this.ctx.save(),this.path([new qA(mA.left,mA.top),new qA(mA.left+mA.width,mA.top),new qA(mA.left+mA.width,mA.top+mA.height),new qA(mA.left,mA.top+mA.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Ao(o.value,MA),f.letterSpacing,eA),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!bt(o.styles.display,2048))return[3,20];if(o.styles.listStyleImage===null)return[3,19];if(NA=o.styles.listStyleImage,NA.type!==0)return[3,18];gA=void 0,XA=NA.url,Y.label=15;case 15:return Y.trys.push([15,17,,18]),[4,this.context.cache.match(XA)];case 16:return gA=Y.sent(),this.ctx.drawImage(gA,o.bounds.left-(gA.width+10),o.bounds.top),[3,18];case 17:return Y.sent(),this.context.logger.error("Error loading list-style-image "+XA),[3,18];case 18:return[3,20];case 19:s.listValue&&o.styles.listStyleType!==-1&&(xA=this.createFontStyle(f)[0],this.ctx.font=xA,this.ctx.fillStyle=Ct(f.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",mA=new Rn(o.bounds.left,o.bounds.top+Pe(o.styles.paddingTop,o.bounds.width),o.bounds.width,kp(f.lineHeight,f.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Ao(s.listValue,mA),f.letterSpacing,kp(f.lineHeight,f.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),Y.label=20;case 20:return[2]}})})},r.prototype.renderStackContent=function(s){return Dt(this,void 0,void 0,function(){var o,d,NA,f,h,NA,m,x,NA,B,C,NA,F,T,NA,oA,eA,NA,uA,MA,NA;return Ht(this,function(gA){switch(gA.label){case 0:if(bt(s.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(s.element)];case 1:gA.sent(),o=0,d=s.negativeZIndex,gA.label=2;case 2:return o<d.length?(NA=d[o],[4,this.renderStack(NA)]):[3,5];case 3:gA.sent(),gA.label=4;case 4:return o++,[3,2];case 5:return[4,this.renderNodeContent(s.element)];case 6:gA.sent(),f=0,h=s.nonInlineLevel,gA.label=7;case 7:return f<h.length?(NA=h[f],[4,this.renderNode(NA)]):[3,10];case 8:gA.sent(),gA.label=9;case 9:return f++,[3,7];case 10:m=0,x=s.nonPositionedFloats,gA.label=11;case 11:return m<x.length?(NA=x[m],[4,this.renderStack(NA)]):[3,14];case 12:gA.sent(),gA.label=13;case 13:return m++,[3,11];case 14:B=0,C=s.nonPositionedInlineLevel,gA.label=15;case 15:return B<C.length?(NA=C[B],[4,this.renderStack(NA)]):[3,18];case 16:gA.sent(),gA.label=17;case 17:return B++,[3,15];case 18:F=0,T=s.inlineLevel,gA.label=19;case 19:return F<T.length?(NA=T[F],[4,this.renderNode(NA)]):[3,22];case 20:gA.sent(),gA.label=21;case 21:return F++,[3,19];case 22:oA=0,eA=s.zeroOrAutoZIndexOrTransformedOrOpacity,gA.label=23;case 23:return oA<eA.length?(NA=eA[oA],[4,this.renderStack(NA)]):[3,26];case 24:gA.sent(),gA.label=25;case 25:return oA++,[3,23];case 26:uA=0,MA=s.positiveZIndex,gA.label=27;case 27:return uA<MA.length?(NA=MA[uA],[4,this.renderStack(NA)]):[3,30];case 28:gA.sent(),gA.label=29;case 29:return uA++,[3,27];case 30:return[2]}})})},r.prototype.mask=function(s){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(s.slice(0).reverse()),this.ctx.closePath()},r.prototype.path=function(s){this.ctx.beginPath(),this.formatPath(s),this.ctx.closePath()},r.prototype.formatPath=function(s){var o=this;s.forEach(function(d,f){var h=an(d)?d.start:d;f===0?o.ctx.moveTo(h.x,h.y):o.ctx.lineTo(h.x,h.y),an(d)&&o.ctx.bezierCurveTo(d.startControl.x,d.startControl.y,d.endControl.x,d.endControl.y,d.end.x,d.end.y)})},r.prototype.renderRepeat=function(s,o,d,f){this.path(s),this.ctx.fillStyle=o,this.ctx.translate(d,f),this.ctx.fill(),this.ctx.translate(-d,-f)},r.prototype.resizeImage=function(s,o,d){var f;if(s.width===o&&s.height===d)return s;var h=(f=this.canvas.ownerDocument)!==null&&f!==void 0?f:document,m=h.createElement("canvas");m.width=Math.max(1,o),m.height=Math.max(1,d);var x=m.getContext("2d");return x.drawImage(s,0,0,s.width,s.height,0,0,o,d),m},r.prototype.renderBackgroundImage=function(s){return Dt(this,void 0,void 0,function(){var o,d,f,h,m,x;return Ht(this,function(B){switch(B.label){case 0:o=s.styles.backgroundImage.length-1,d=function(C){var F,T,oA,KA,G,pA,LA,$A,V,eA,KA,G,pA,LA,$A,uA,MA,NA,gA,XA,xA,mA,Y,IA,V,sA,KA,GA,CA,LA,$A,JA,G,pA,FA,WA,U,J,$,lA,QA,RA;return Ht(this,function(K){switch(K.label){case 0:if(C.type!==0)return[3,5];F=void 0,T=C.url,K.label=1;case 1:return K.trys.push([1,3,,4]),[4,f.context.cache.match(T)];case 2:return F=K.sent(),[3,4];case 3:return K.sent(),f.context.logger.error("Error loading background-image "+T),[3,4];case 4:return F&&(oA=zd(s,o,[F.width,F.height,F.width/F.height]),KA=oA[0],G=oA[1],pA=oA[2],LA=oA[3],$A=oA[4],V=f.ctx.createPattern(f.resizeImage(F,LA,$A),"repeat"),f.renderRepeat(KA,V,G,pA)),[3,6];case 5:E1(C)?(eA=zd(s,o,[null,null,null]),KA=eA[0],G=eA[1],pA=eA[2],LA=eA[3],$A=eA[4],uA=y1(C.angle,LA,$A),MA=uA[0],NA=uA[1],gA=uA[2],XA=uA[3],xA=uA[4],mA=document.createElement("canvas"),mA.width=LA,mA.height=$A,Y=mA.getContext("2d"),IA=Y.createLinearGradient(NA,XA,gA,xA),jp(C.stops,MA).forEach(function(OA){return IA.addColorStop(OA.stop,Ct(OA.color))}),Y.fillStyle=IA,Y.fillRect(0,0,LA,$A),LA>0&&$A>0&&(V=f.ctx.createPattern(mA,"repeat"),f.renderRepeat(KA,V,G,pA))):F1(C)&&(sA=zd(s,o,[null,null,null]),KA=sA[0],GA=sA[1],CA=sA[2],LA=sA[3],$A=sA[4],JA=C.position.length===0?[pu]:C.position,G=Pe(JA[0],LA),pA=Pe(JA[JA.length-1],$A),FA=v1(C,G,pA,LA,$A),WA=FA[0],U=FA[1],WA>0&&U>0&&(J=f.ctx.createRadialGradient(GA+G,CA+pA,0,GA+G,CA+pA,WA),jp(C.stops,WA*2).forEach(function(OA){return J.addColorStop(OA.stop,Ct(OA.color))}),f.path(KA),f.ctx.fillStyle=J,WA!==U?($=s.bounds.left+.5*s.bounds.width,lA=s.bounds.top+.5*s.bounds.height,QA=U/WA,RA=1/QA,f.ctx.save(),f.ctx.translate($,lA),f.ctx.transform(1,0,0,QA,0,0),f.ctx.translate(-$,-lA),f.ctx.fillRect(GA,RA*(CA-lA)+lA,LA,$A*RA),f.ctx.restore()):f.ctx.fill())),K.label=6;case 6:return o--,[2]}})},f=this,h=0,m=s.styles.backgroundImage.slice(0).reverse(),B.label=1;case 1:return h<m.length?(x=m[h],[5,d(x)]):[3,4];case 2:B.sent(),B.label=3;case 3:return h++,[3,1];case 4:return[2]}})})},r.prototype.renderSolidBorder=function(s,o,d){return Dt(this,void 0,void 0,function(){return Ht(this,function(f){return this.path(ix(d,o)),this.ctx.fillStyle=Ct(s),this.ctx.fill(),[2]})})},r.prototype.renderDoubleBorder=function(s,o,d,f){return Dt(this,void 0,void 0,function(){var h,m;return Ht(this,function(x){switch(x.label){case 0:return o<3?[4,this.renderSolidBorder(s,d,f)]:[3,2];case 1:return x.sent(),[2];case 2:return h=k2(f,d),this.path(h),this.ctx.fillStyle=Ct(s),this.ctx.fill(),m=H2(f,d),this.path(m),this.ctx.fill(),[2]}})})},r.prototype.renderNodeBackgroundAndBorders=function(s){return Dt(this,void 0,void 0,function(){var o,d,f,h,m,x,B,C,F=this;return Ht(this,function(T){switch(T.label){case 0:return this.applyEffects(s.getEffects(2)),o=s.container.styles,d=!Ba(o.backgroundColor)||o.backgroundImage.length,f=[{style:o.borderTopStyle,color:o.borderTopColor,width:o.borderTopWidth},{style:o.borderRightStyle,color:o.borderRightColor,width:o.borderRightWidth},{style:o.borderBottomStyle,color:o.borderBottomColor,width:o.borderBottomWidth},{style:o.borderLeftStyle,color:o.borderLeftColor,width:o.borderLeftWidth}],h=_2(Dr(o.backgroundClip,0),s.curves),d||o.boxShadow.length?(this.ctx.save(),this.path(h),this.ctx.clip(),Ba(o.backgroundColor)||(this.ctx.fillStyle=Ct(o.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(s.container)]):[3,2];case 1:T.sent(),this.ctx.restore(),o.boxShadow.slice(0).reverse().forEach(function(oA){F.ctx.save();var eA=Ps(s.curves),uA=oA.inset?0:K2,MA=j2(eA,-uA+(oA.inset?1:-1)*oA.spread.number,(oA.inset?1:-1)*oA.spread.number,oA.spread.number*(oA.inset?-2:2),oA.spread.number*(oA.inset?-2:2));oA.inset?(F.path(eA),F.ctx.clip(),F.mask(MA)):(F.mask(eA),F.ctx.clip(),F.path(MA)),F.ctx.shadowOffsetX=oA.offsetX.number+uA,F.ctx.shadowOffsetY=oA.offsetY.number,F.ctx.shadowColor=Ct(oA.color),F.ctx.shadowBlur=oA.blur.number,F.ctx.fillStyle=oA.inset?Ct(oA.color):"rgba(0,0,0,1)",F.ctx.fill(),F.ctx.restore()}),T.label=2;case 2:m=0,x=0,B=f,T.label=3;case 3:return x<B.length?(C=B[x],C.style!==0&&!Ba(C.color)&&C.width>0?C.style!==2?[3,5]:[4,this.renderDashedDottedBorder(C.color,C.width,m,s.curves,2)]:[3,11]):[3,13];case 4:return T.sent(),[3,11];case 5:return C.style!==3?[3,7]:[4,this.renderDashedDottedBorder(C.color,C.width,m,s.curves,3)];case 6:return T.sent(),[3,11];case 7:return C.style!==4?[3,9]:[4,this.renderDoubleBorder(C.color,C.width,m,s.curves)];case 8:return T.sent(),[3,11];case 9:return[4,this.renderSolidBorder(C.color,m,s.curves)];case 10:T.sent(),T.label=11;case 11:m++,T.label=12;case 12:return x++,[3,3];case 13:return[2]}})})},r.prototype.renderDashedDottedBorder=function(s,o,d,f,h){return Dt(this,void 0,void 0,function(){var m,x,B,C,F,T,oA,eA,uA,MA,NA,gA,XA,xA,mA,Y,mA,Y;return Ht(this,function(IA){return this.ctx.save(),m=N2(f,d),x=ix(f,d),h===2&&(this.path(x),this.ctx.clip()),an(x[0])?(B=x[0].start.x,C=x[0].start.y):(B=x[0].x,C=x[0].y),an(x[1])?(F=x[1].end.x,T=x[1].end.y):(F=x[1].x,T=x[1].y),d===0||d===2?oA=Math.abs(B-F):oA=Math.abs(C-T),this.ctx.beginPath(),h===3?this.formatPath(m):this.formatPath(x.slice(0,2)),eA=o<3?o*3:o*2,uA=o<3?o*2:o,h===3&&(eA=o,uA=o),MA=!0,oA<=eA*2?MA=!1:oA<=eA*2+uA?(NA=oA/(2*eA+uA),eA*=NA,uA*=NA):(gA=Math.floor((oA+uA)/(eA+uA)),XA=(oA-gA*eA)/(gA-1),xA=(oA-(gA+1)*eA)/gA,uA=xA<=0||Math.abs(uA-XA)<Math.abs(uA-xA)?XA:xA),MA&&(h===3?this.ctx.setLineDash([0,eA+uA]):this.ctx.setLineDash([eA,uA])),h===3?(this.ctx.lineCap="round",this.ctx.lineWidth=o):this.ctx.lineWidth=o*2+1.1,this.ctx.strokeStyle=Ct(s),this.ctx.stroke(),this.ctx.setLineDash([]),h===2&&(an(x[0])&&(mA=x[3],Y=x[0],this.ctx.beginPath(),this.formatPath([new qA(mA.end.x,mA.end.y),new qA(Y.start.x,Y.start.y)]),this.ctx.stroke()),an(x[1])&&(mA=x[1],Y=x[2],this.ctx.beginPath(),this.formatPath([new qA(mA.end.x,mA.end.y),new qA(Y.start.x,Y.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},r.prototype.render=function(s){return Dt(this,void 0,void 0,function(){var o;return Ht(this,function(d){switch(d.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=Ct(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),o=S2(s),[4,this.renderStack(o)];case 1:return d.sent(),this.applyEffects([]),[2,this.canvas]}})})},r}(w0),R2=function(i){return i instanceof a0||i instanceof n0?!0:i instanceof Bu&&i.type!==$s&&i.type!==Zs},_2=function(i,r){switch(i){case 0:return Ps(r);case 2:return C2(r);case 1:default:return Al(r)}},G2=function(i){switch(i){case 1:return"center";case 2:return"right";case 0:default:return"left"}},Y2=["-apple-system","system-ui"],X2=function(i){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?i.filter(function(r){return Y2.indexOf(r)===-1}):i},V2=function(i){fn(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.canvas=o.canvas?o.canvas:document.createElement("canvas"),d.ctx=d.canvas.getContext("2d"),d.options=o,d.canvas.width=Math.floor(o.width*o.scale),d.canvas.height=Math.floor(o.height*o.scale),d.canvas.style.width=o.width+"px",d.canvas.style.height=o.height+"px",d.ctx.scale(d.options.scale,d.options.scale),d.ctx.translate(-o.x,-o.y),d.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+o.width+"x"+o.height+" at "+o.x+","+o.y+") with scale "+o.scale),d}return r.prototype.render=function(s){return Dt(this,void 0,void 0,function(){var o,d;return Ht(this,function(f){switch(f.label){case 0:return o=ru(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,s),[4,J2(o)];case 1:return d=f.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=Ct(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(d,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},r}(w0),J2=function(i){return new Promise(function(r,s){var o=new Image;o.onload=function(){r(o)},o.onerror=s,o.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(i))})},Z2=function(){function i(r){var s=r.id,o=r.enabled;this.id=s,this.enabled=o,this.start=Date.now()}return i.prototype.debug=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,bs([this.id,this.getTime()+"ms"],r)):this.info.apply(this,r))},i.prototype.getTime=function(){return Date.now()-this.start},i.prototype.info=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,bs([this.id,this.getTime()+"ms"],r))},i.prototype.warn=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,bs([this.id,this.getTime()+"ms"],r)):this.info.apply(this,r))},i.prototype.error=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,bs([this.id,this.getTime()+"ms"],r)):this.info.apply(this,r))},i.instances={},i}(),$2=function(){function i(r,s){var o;this.windowBounds=s,this.instanceName="#"+i.instanceCount++,this.logger=new Z2({id:this.instanceName,enabled:r.logging}),this.cache=(o=r.cache)!==null&&o!==void 0?o:new p2(this,r)}return i.instanceCount=1,i}(),y0=function(i,r){return r===void 0&&(r={}),W2(i,r)};typeof window<"u"&&g0.setContext(window);var W2=function(i,r){return Dt(void 0,void 0,void 0,function(){var s,o,d,f,h,m,x,B,C,F,T,oA,eA,uA,MA,NA,gA,XA,xA,mA,IA,Y,IA,V,sA,KA,GA,CA,LA,$A,JA,G,pA,FA,WA,U,J,$,lA,QA;return Ht(this,function(RA){switch(RA.label){case 0:if(!i||typeof i!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(s=i.ownerDocument,!s)throw new Error("Element is not attached to a Document");if(o=s.defaultView,!o)throw new Error("Document is not attached to a Window");return d={allowTaint:(V=r.allowTaint)!==null&&V!==void 0?V:!1,imageTimeout:(sA=r.imageTimeout)!==null&&sA!==void 0?sA:15e3,proxy:r.proxy,useCORS:(KA=r.useCORS)!==null&&KA!==void 0?KA:!1},f=Gd({logging:(GA=r.logging)!==null&&GA!==void 0?GA:!0,cache:r.cache},d),h={windowWidth:(CA=r.windowWidth)!==null&&CA!==void 0?CA:o.innerWidth,windowHeight:(LA=r.windowHeight)!==null&&LA!==void 0?LA:o.innerHeight,scrollX:($A=r.scrollX)!==null&&$A!==void 0?$A:o.pageXOffset,scrollY:(JA=r.scrollY)!==null&&JA!==void 0?JA:o.pageYOffset},m=new Rn(h.scrollX,h.scrollY,h.windowWidth,h.windowHeight),x=new $2(f,m),B=(G=r.foreignObjectRendering)!==null&&G!==void 0?G:!1,C={allowTaint:(pA=r.allowTaint)!==null&&pA!==void 0?pA:!1,onclone:r.onclone,ignoreElements:r.ignoreElements,inlineImages:B,copyStyles:B},x.logger.debug("Starting document clone with size "+m.width+"x"+m.height+" scrolled to "+-m.left+","+-m.top),F=new nx(x,i,C),T=F.clonedReferenceElement,T?[4,F.toIFrame(s,m)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return oA=RA.sent(),eA=wu(T)||PC(T)?jw(T.ownerDocument):tl(x,T),uA=eA.width,MA=eA.height,NA=eA.left,gA=eA.top,XA=q2(x,T,r.backgroundColor),xA={canvas:r.canvas,backgroundColor:XA,scale:(WA=(FA=r.scale)!==null&&FA!==void 0?FA:o.devicePixelRatio)!==null&&WA!==void 0?WA:1,x:((U=r.x)!==null&&U!==void 0?U:0)+NA,y:((J=r.y)!==null&&J!==void 0?J:0)+gA,width:($=r.width)!==null&&$!==void 0?$:Math.ceil(uA),height:(lA=r.height)!==null&&lA!==void 0?lA:Math.ceil(MA)},B?(x.logger.debug("Document cloned, using foreign object rendering"),IA=new V2(x,xA),[4,IA.render(T)]):[3,3];case 2:return mA=RA.sent(),[3,5];case 3:return x.logger.debug("Document cloned, element located at "+NA+","+gA+" with size "+uA+"x"+MA+" using computed rendering"),x.logger.debug("Starting DOM parsing"),Y=o0(x,T),XA===Y.styles.backgroundColor&&(Y.styles.backgroundColor=zn.TRANSPARENT),x.logger.debug("Starting renderer for element at "+xA.x+","+xA.y+" with size "+xA.width+"x"+xA.height),IA=new z2(x,xA),[4,IA.render(Y)];case 4:mA=RA.sent(),RA.label=5;case 5:return(!((QA=r.removeContainer)!==null&&QA!==void 0)||QA)&&(nx.destroy(oA)||x.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),x.logger.debug("Finished rendering"),[2,mA]}})})},q2=function(i,r,s){var o=r.ownerDocument,d=o.documentElement?qi(i,getComputedStyle(o.documentElement).backgroundColor):zn.TRANSPARENT,f=o.body?qi(i,getComputedStyle(o.body).backgroundColor):zn.TRANSPARENT,h=typeof s=="string"?qi(i,s):s===null?zn.TRANSPARENT:4294967295;return r===o.documentElement?Ba(d)?Ba(f)?h:f:d:h};const Rr=Object.freeze(Object.defineProperty({__proto__:null,default:y0},Symbol.toStringTag,{value:"Module"})),P2=({ganttChart:i,tasks:r,onUpdateGanttChart:s,onBack:o})=>{const[d,f]=j.useState({name:"",startDate:new Date().toISOString().split("T")[0],endDate:new Date(Date.now()+6048e5).toISOString().split("T")[0],progress:0,dependencies:[],color:B()}),[h,m]=j.useState(null),x=j.useRef(null);function B(){const V=["#3b82f6","#ef4444","#10b981","#f59e0b","#6366f1","#ec4899","#14b8a6","#f97316","#8b5cf6","#d946ef"];return V[Math.floor(Math.random()*V.length)]}const C=j.useMemo(()=>{if(r.length===0){const JA=new Date,G=new Date(JA.getTime()+30*24*60*60*1e3);return{startDate:JA,endDate:G,totalDays:30}}const V=r.flatMap(JA=>[new Date(JA.startDate),new Date(JA.endDate)]),sA=new Date(Math.min(...V)),KA=new Date(Math.max(...V)),GA=7,CA=new Date(sA.getTime()-GA*24*60*60*1e3),LA=new Date(KA.getTime()+GA*24*60*60*1e3),$A=Math.ceil((LA-CA)/(24*60*60*1e3));return{startDate:CA,endDate:LA,totalDays:$A}},[r]),F=j.useMemo(()=>{const V=[],{startDate:sA,totalDays:KA}=C;for(let GA=0;GA<=KA;GA+=7){const CA=new Date(sA.getTime()+GA*24*60*60*1e3);V.push({date:CA,position:GA/KA*100,label:CA.toLocaleDateString("en-US",{month:"short",day:"numeric"})})}return V},[C]),T=V=>{const sA=new Date(V),{startDate:KA,totalDays:GA}=C,CA=Math.max(0,(sA-KA)/(24*60*60*1e3));return Math.min(100,CA/GA*100)},oA=(V,sA)=>{const KA=new Date(V),GA=new Date(sA),{totalDays:CA}=C,LA=Math.max(1,(GA-KA)/(24*60*60*1e3));return Math.min(100,LA/CA*100)},eA=()=>{if(!d.name.trim())return;const V=[...r,{id:Date.now(),...d,progress:Math.min(100,Math.max(0,parseInt(d.progress)||0))}];s({...i,tasks:V}),f({name:"",startDate:new Date().toISOString().split("T")[0],endDate:new Date(Date.now()+7*24*60*60*1e3).toISOString().split("T")[0],progress:0,dependencies:[],color:B()})},uA=V=>{const KA=r.filter(GA=>GA.id!==V).map(GA=>({...GA,dependencies:GA.dependencies.filter(CA=>CA!==V)}));s({...i,tasks:KA})},MA=(V,sA)=>{const KA=r.map(GA=>GA.id===V?{...GA,...sA}:GA);s({...i,tasks:KA})},NA=V=>{m({...V})},gA=()=>{h&&(MA(h.id,h),m(null))},XA=()=>{m(null)},xA=()=>{const V={...i,tasks:r},sA=JSON.stringify(V,null,2),KA=new Blob([sA],{type:"application/json"}),GA=URL.createObjectURL(KA),CA=document.createElement("a");CA.href=GA,CA.download=`${i.name.replace(/\s+/g,"_")}_gantt.json`,document.body.appendChild(CA),CA.click(),document.body.removeChild(CA),URL.revokeObjectURL(GA)},mA=V=>{const sA=V.target.files[0];if(!sA)return;const KA=new FileReader;KA.onload=GA=>{try{const CA=JSON.parse(GA.target.result);CA.name&&Array.isArray(CA.tasks)?s(CA):alert("Invalid Gantt chart file format")}catch{alert("Error parsing JSON file")}},KA.readAsText(sA)},Y=()=>{x.current&&y0(x.current,{scrollX:-window.scrollX,scrollY:-window.scrollY,windowWidth:x.current.scrollWidth,windowHeight:x.current.scrollHeight,scale:2}).then(V=>{const sA=document.createElement("a");sA.download=`${i.name.replace(/\s+/g,"_")}_gantt.png`,sA.href=V.toDataURL("image/png"),sA.click()})},IA=V=>r.find(sA=>sA.id===V);return n.jsxs("div",{className:"gantt-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:o,className:"back-btn",children:[n.jsx(_n,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"export-actions",children:[n.jsxs("button",{onClick:xA,className:"export-btn",title:"Export as JSON",children:[n.jsx(wn,{size:16})," JSON"]}),n.jsxs("label",{className:"import-btn",title:"Import from JSON",children:[n.jsx(yn,{size:16})," JSON",n.jsx("input",{type:"file",accept:".json",onChange:mA,style:{display:"none"}})]}),n.jsxs("button",{onClick:Y,className:"export-btn",title:"Export as Image",children:[n.jsx(Bn,{size:16})," Image"]})]})]}),n.jsxs("div",{className:"gantt-container",children:[n.jsxs("div",{className:"gantt-sidebar",children:[n.jsxs("div",{className:"sidebar-header",children:["Tasks (",r.length,")"]}),n.jsx("div",{className:"task-list",children:r.map(V=>n.jsxs("div",{className:"task-item",children:[n.jsxs("div",{className:"task-info",children:[n.jsx("div",{className:"task-name",children:V.name}),n.jsxs("div",{className:"task-dates",children:[new Date(V.startDate).toLocaleDateString()," - ",new Date(V.endDate).toLocaleDateString()]}),n.jsxs("div",{className:"task-progress-text",children:[V.progress,"% complete"]}),V.dependencies.length>0&&n.jsxs("div",{className:"task-dependencies",children:["Dependencies: ",V.dependencies.map(sA=>IA(sA)?.name).filter(Boolean).join(", ")]})]}),n.jsxs("div",{className:"task-actions",children:[n.jsx("button",{onClick:()=>NA(V),className:"edit-btn",title:"Edit task",children:n.jsx(VB,{size:14})}),n.jsx("button",{onClick:()=>uA(V.id),className:"delete-btn",title:"Delete task",children:n.jsx(je,{size:14})})]})]},V.id))}),n.jsxs("div",{className:"add-task-form",children:[n.jsx("h3",{children:"Add New Task"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Task Name"}),n.jsx("input",{type:"text",value:d.name,onChange:V=>f({...d,name:V.target.value}),placeholder:"Task description"})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Start Date"}),n.jsx("input",{type:"date",value:d.startDate,onChange:V=>f({...d,startDate:V.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"End Date"}),n.jsx("input",{type:"date",value:d.endDate,onChange:V=>f({...d,endDate:V.target.value})})]})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Progress (%)"}),n.jsx("input",{type:"number",min:"0",max:"100",value:d.progress,onChange:V=>f({...d,progress:V.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Color"}),n.jsxs("div",{className:"color-picker",children:[n.jsx("input",{type:"color",value:d.color,onChange:V=>f({...d,color:V.target.value})}),n.jsx("button",{onClick:()=>f({...d,color:B()}),className:"random-color-btn",title:"Random color",children:"Random"})]})]})]}),n.jsxs("button",{onClick:eA,className:"add-btn",children:[n.jsx(rt,{size:16})," Add Task"]})]})]}),n.jsxs("div",{className:"gantt-timeline",ref:x,children:[n.jsxs("div",{className:"timeline-header",children:[n.jsx("div",{className:"timeline-title",children:"Timeline"}),n.jsx("div",{className:"timeline-scale",children:F.map((V,sA)=>n.jsxs("div",{className:"scale-point",style:{left:`${V.position}%`},children:[n.jsx("div",{className:"scale-line"}),n.jsx("div",{className:"scale-label",children:V.label})]},sA))})]}),n.jsxs("div",{className:"timeline-content",children:[r.map((V,sA)=>{const KA=T(V.startDate),GA=oA(V.startDate,V.endDate),CA=`${V.color}33`;return n.jsx("div",{className:"timeline-row",children:n.jsxs("div",{className:"timeline-task",children:[n.jsxs("div",{className:"task-bar",style:{left:`${KA}%`,width:`${GA}%`,background:`linear-gradient(to right, ${V.color} ${V.progress}%, ${CA} ${V.progress}%)`,borderColor:V.color},title:`${V.name}: ${V.progress}% complete`,children:[n.jsxs("div",{className:"task-progress",children:[V.progress,"%"]}),n.jsx("div",{className:"task-label",children:V.name})]}),V.dependencies.map(LA=>{const $A=IA(LA);if(!$A)return null;const JA=r.findIndex(FA=>FA.id===LA),G=T($A.endDate),pA=oA($A.startDate,$A.endDate);return n.jsxs("svg",{className:"dependency-arrow",style:{position:"absolute",left:`${G+pA}%`,top:`${(JA-sA)*44-12}px`,width:`${Math.abs(KA-(G+pA))}%`,height:`${Math.abs((sA-JA)*44)+24}px`,pointerEvents:"none",zIndex:1},children:[n.jsx("defs",{children:n.jsx("marker",{id:`arrowhead-${V.id}-${LA}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})})}),n.jsx("path",{d:`M 0 ${JA<sA?0:Math.abs((sA-JA)*44)} 
                                L ${Math.abs(KA-(G+pA))*.5} ${JA<sA?0:Math.abs((sA-JA)*44)} 
                                L ${Math.abs(KA-(G+pA))*.5} ${JA<sA?Math.abs((sA-JA)*44):0} 
                                L ${Math.abs(KA-(G+pA))} ${JA<sA?Math.abs((sA-JA)*44):0}`,stroke:"#64748b",strokeWidth:"2",fill:"none",markerEnd:`url(#arrowhead-${V.id}-${LA})`})]},`dep-${LA}`)})]})},V.id)}),n.jsx("div",{className:"today-line",style:{left:`${T(new Date().toISOString().split("T")[0])}%`},children:n.jsx("div",{className:"today-label",children:"Today"})})]})]})]}),h&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("h3",{children:"Edit Task"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Task Name"}),n.jsx("input",{type:"text",value:h.name,onChange:V=>m({...h,name:V.target.value})})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Start Date"}),n.jsx("input",{type:"date",value:h.startDate,onChange:V=>m({...h,startDate:V.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"End Date"}),n.jsx("input",{type:"date",value:h.endDate,onChange:V=>m({...h,endDate:V.target.value})})]})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Progress (%)"}),n.jsx("input",{type:"number",min:"0",max:"100",value:h.progress,onChange:V=>m({...h,progress:V.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Color"}),n.jsx("input",{type:"color",value:h.color,onChange:V=>m({...h,color:V.target.value})})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Dependencies"}),n.jsx("div",{className:"dependency-list",children:r.filter(V=>V.id!==h.id).map(V=>n.jsxs("label",{className:"dependency-item",children:[n.jsx("input",{type:"checkbox",checked:h.dependencies.includes(V.id),onChange:sA=>{sA.target.checked?m({...h,dependencies:[...h.dependencies,V.id]}):m({...h,dependencies:h.dependencies.filter(KA=>KA!==V.id)})}}),V.name]},V.id))})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{onClick:XA,className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:gA,className:"save-btn",children:"Save Changes"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
          color: #1e293b;
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
      `})]})},AQ=({useCaseDiagrams:i,onCreateUseCaseDiagram:r,onLoadUseCaseDiagram:s,onDeleteUseCaseDiagram:o})=>{const[d,f]=j.useState(!1);return n.jsxs("div",{className:"use-case-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(hu,{size:48})}),n.jsx("h2",{children:"Use Case Diagram Designer"}),n.jsx("p",{children:"Model system functionality with actors and use cases"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>f(!0),className:"primary-btn",children:[n.jsx(rt,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Use Case Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.actors?.length||0," actors • ",h.useCases?.length||0," use cases"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:m=>{m.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Gn,{size:16})}),n.jsx("button",{onClick:m=>{m.stopPropagation(),confirm("Delete this diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(je,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Use Case Diagram"}),n.jsx("button",{onClick:()=>f(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Online Shopping System",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>f(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),f(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},eQ="modulepreload",tQ=function(i){return"/Rootrie/"+i},sx={},_r=function(r,s,o){let d=Promise.resolve();if(s&&s.length>0){let B=function(C){return Promise.all(C.map(F=>Promise.resolve(F).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};var h=B;document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),x=m?.nonce||m?.getAttribute("nonce");d=B(s.map(C=>{if(C=tQ(C),C in sx)return;sx[C]=!0;const F=C.endsWith(".css"),T=F?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${C}"]${T}`))return;const oA=document.createElement("link");if(oA.rel=F?"stylesheet":eQ,F||(oA.as="script"),oA.crossOrigin="",oA.href=C,x&&oA.setAttribute("nonce",x),document.head.appendChild(oA),F)return new Promise((eA,uA)=>{oA.addEventListener("load",eA),oA.addEventListener("error",()=>uA(new Error(`Unable to preload CSS for ${C}`)))})}))}function f(m){const x=new Event("vite:preloadError",{cancelable:!0});if(x.payload=m,window.dispatchEvent(x),!x.defaultPrevented)throw m}return d.then(m=>{for(const x of m||[])x.status==="rejected"&&f(x.reason);return r().catch(f)})},nQ=({useCaseDiagram:i,actors:r=[],useCases:s=[],relationships:o=[],onUpdateUseCaseDiagram:d,onBack:f})=>{const[h,m]=j.useState(""),[x,B]=j.useState(""),[C,F]=j.useState(null),[T,oA]=j.useState(null),[eA,uA]=j.useState("association"),[MA,NA]=j.useState("editor"),[gA,XA]=j.useState(""),[xA,mA]=j.useState(null),[Y,IA]=j.useState({x:0,y:0}),[V,sA]=j.useState(!1),[KA,GA]=j.useState(!1),[CA,LA]=j.useState(1),[$A,JA]=j.useState({x:0,y:0}),[G,pA]=j.useState(!1),[FA,WA]=j.useState({x:0,y:0}),[U,J]=j.useState(null),[$,lA]=j.useState(i.systemBoundary||{x:200,y:100,width:600,height:400,visible:!0}),[QA,RA]=j.useState({width:1600,height:1200}),[K,OA]=j.useState(20),HA=j.useRef(null),bA=j.useRef(null),L=20,X=60,zA=80,wA=150,EA=40;j.useEffect(()=>{XA(JSON.stringify({actors:r,useCases:s,relationships:o,systemBoundary:$},null,2))},[r,s,o,$]);const nA=N=>KA?Math.round(N/L)*L:N,ye=()=>{if(!h.trim())return;const N=[...r,{id:Date.now(),name:h,x:nA(100+Math.random()*200),y:nA(100+Math.random()*200)}];d({...i,actors:N}),m("")},pe=()=>{if(!x.trim())return;const N=[...s,{id:Date.now(),name:x,x:nA(300+Math.random()*300),y:nA(150+Math.random()*200)}];d({...i,useCases:N}),B("")},te=N=>{const SA=r.filter(g=>g.id!==N),TA=o.filter(g=>!(g.source===N||g.target===N));d({...i,actors:SA,relationships:TA})},fe=N=>{const SA=s.filter(g=>g.id!==N),TA=o.filter(g=>!(g.source===N||g.target===N));d({...i,useCases:SA,relationships:TA})},ne=()=>{if(!C||!T)return;const N=r.some(D=>D.id===C),SA=r.some(D=>D.id===T),TA=s.some(D=>D.id===C),g=s.some(D=>D.id===T);if(eA==="include"||eA==="extend"){if(!TA||!g){alert("Include and extend relationships must be between use cases");return}}else if(eA==="generalization"){if(N&&!SA||TA&&!g){alert("Generalization must be between two actors or two use cases");return}}else if(eA==="association"&&!(N&&g)&&!(TA&&SA)){alert("Association must be between an actor and a use case");return}const E={id:Date.now(),source:C,target:T,type:eA};d({...i,relationships:[...o,E]}),F(null),oA(null)},me=N=>{const SA=o.filter(TA=>TA.id!==N);d({...i,relationships:SA})},De=(N,SA)=>SA?{x:N.x+X/2,y:N.y+zA/2}:{x:N.x+wA/2,y:N.y+EA/2},Je=(N,SA,TA)=>{const g=De(N,SA);if(SA)return{x:g.x+25*Math.cos(TA),y:g.y+25*Math.sin(TA)};{const E=wA/2,D=EA/2,b=Math.cos(TA),v=Math.sin(TA),k=E*D/Math.sqrt(D*D*b*b+E*E*v*v);return{x:g.x+k*b,y:g.y+k*v}}},Te=(N,SA,TA,g)=>{const b=Math.max(QA.width-TA,0),v=Math.max(QA.height-g,0);return{x:Math.max(0,Math.min(b,N)),y:Math.max(0,Math.min(v,SA))}},ie=(N,SA,TA)=>{N.preventDefault(),N.stopPropagation();const g=HA.current.getBoundingClientRect(),E=(N.clientX-g.left-$A.x)/CA,D=(N.clientY-g.top-$A.y)/CA;mA({...SA,type:TA}),IA({x:E-SA.x,y:D-SA.y})},Fe=N=>{if(!(!xA&&!G)){if(G){const SA=N.clientX-FA.x,TA=N.clientY-FA.y;JA(g=>({x:g.x+SA,y:g.y+TA})),WA({x:N.clientX,y:N.clientY});return}if(xA){const SA=HA.current.getBoundingClientRect();let TA=(N.clientX-SA.left-$A.x)/CA-Y.x,g=(N.clientY-SA.top-$A.y)/CA-Y.y;TA=nA(TA),g=nA(g);const E=xA.type==="actor"?X:wA,D=xA.type==="actor"?zA:EA,b=Te(TA,g,E,D);if(xA.type==="systemBoundary"){const v=Te(TA,g,$.width,$.height);Ue({x:v.x,y:v.y})}else if(xA.type==="actor"){const v=r.map(k=>k.id===xA.id?{...k,x:b.x,y:b.y}:k);d({...i,actors:v})}else if(xA.type==="useCase"){const v=s.map(k=>k.id===xA.id?{...k,x:b.x,y:b.y}:k);d({...i,useCases:v})}}}},be=()=>{mA(null),pA(!1)},Se=N=>{N.target===HA.current&&(pA(!0),WA({x:N.clientX,y:N.clientY}))},O=()=>{LA(N=>Math.min(N*1.2,3))},yA=()=>{LA(N=>Math.max(N/1.2,.3))},H=()=>{LA(1),JA({x:0,y:0})},q=()=>{J({actors:r,useCases:s,systemBoundary:$});const E=$||{x:300,y:50,width:600,height:400},D=Math.max(1,Math.floor(E.height/80)),b=($.height-35)/D;if(35+200*Math.ceil(s.length/D)>E.width&&!confirm(`Usecases exceeds align limit! Still need to align?
Select OK to align, Cancel to cancel.`))return;const v=r.map((S,I)=>({...S,x:E.x-100,y:E.y+10+I*120})),k=s.map((S,I)=>({...S,x:E.x+35+Math.floor(I/D)*200,y:E.y+35+I%D*Math.round(b)}));d({...i,actors:v,useCases:k})},jA=()=>{U&&(d({...i,actors:U.actors,useCases:U.useCases,systemBoundary:U.systemBoundary}),lA(U.systemBoundary))};j.useEffect(()=>{const N=TA=>Fe(TA),SA=()=>be();if(xA||G)return document.addEventListener("mousemove",N),document.addEventListener("mouseup",SA),()=>{document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",SA)}},[xA,G,Y,$A,CA,r,s,d,i,FA,KA]);const rA=()=>JSON.stringify({actors:r,useCases:s,relationships:o,systemBoundary:$},null,2),hA=()=>{navigator.clipboard.writeText(rA())},oe=()=>{try{const N=JSON.parse(gA);Array.isArray(N.actors)&&Array.isArray(N.useCases)&&Array.isArray(N.relationships)?(d({...i,actors:N.actors,useCases:N.useCases,relationships:N.relationships,systemBoundary:N.systemBoundary||$}),N.systemBoundary&&lA(N.systemBoundary)):alert("Invalid JSON format. Expected actors, useCases, and relationships arrays.")}catch(N){alert("Error parsing JSON: "+N.message)}},xe=N=>{const SA=N.target.files[0];if(!SA)return;const TA=new FileReader;TA.onload=g=>{XA(g.target.result)},TA.readAsText(SA)},ce=()=>{if(!HA.current)return;let N=1/0,SA=-1/0,TA=1/0,g=-1/0;if(r.forEach(_=>{N=Math.min(N,_.x),SA=Math.max(SA,_.x+X),TA=Math.min(TA,_.y),g=Math.max(g,_.y+zA)}),s.forEach(_=>{N=Math.min(N,_.x),SA=Math.max(SA,_.x+wA),TA=Math.min(TA,_.y),g=Math.max(g,_.y+EA)}),$.visible&&(N=Math.min(N,$.x),SA=Math.max(SA,$.x+$.width),TA=Math.min(TA,$.y),g=Math.max(g,$.y+$.height)),o.forEach(_=>{let z,fA,cA=!1,ZA=!1;if(z=r.find(dA=>dA.id===_.source),z?cA=!0:z=s.find(dA=>dA.id===_.source),fA=r.find(dA=>dA.id===_.target),fA?ZA=!0:fA=s.find(dA=>dA.id===_.target),z&&fA){const dA=De(z,cA),u=De(fA,ZA);N=Math.min(N,dA.x,u.x),SA=Math.max(SA,dA.x,u.x),TA=Math.min(TA,dA.y,u.y),g=Math.max(g,dA.y,u.y)}}),N===1/0||r.length===0&&s.length===0){alert("No diagram content to export");return}const E=10,D=Math.max(0,N-E),b=Math.max(0,TA-E),v=SA-N+E*2,k=g-TA+E*2,S=document.createElement("div");S.style.width=`${v}px`,S.style.height=`${k}px`,S.style.position="fixed",S.style.top="0",S.style.left="0",S.style.background="#f8fafc",S.style.zIndex="-9999",S.style.overflow="hidden";const I=HA.current.cloneNode(!0);I.style.position="absolute",I.style.left=`-${D}px`,I.style.top=`-${b}px`,I.style.transform="none",I.style.width=`${QA.width}px`,I.style.height=`${QA.height}px`,I.style.background="#f8fafc",S.appendChild(I),document.body.appendChild(S),_r(()=>Promise.resolve().then(()=>Rr),void 0).then(_=>{_.default(S,{backgroundColor:"#f8fafc",scale:2,useCORS:!0,width:v,height:k,scrollX:0,scrollY:0}).then(z=>{const fA=document.createElement("a");fA.download=`${i.name||"use-case-diagram"}.png`,fA.href=z.toDataURL("image/png"),fA.click(),document.body.removeChild(S)}).catch(z=>{console.error("Error capturing image:",z),document.body.removeChild(S)})})},he=()=>{if(!V)return null;const N=bA.current;if(!N)return null;const SA=N.getBoundingClientRect(),TA=SA.width/CA,g=SA.height/CA,E=Math.floor(-$A.x/CA/L)*L,D=Math.floor(-$A.y/CA/L)*L,b=[];for(let v=E;v<TA-$A.x/CA;v+=L)b.push(n.jsx("line",{x1:v,y1:0,x2:v,y2:g,stroke:"#e2e8f0",strokeWidth:"1"},`v-${v}`));for(let v=D;v<g-$A.y/CA;v+=L)b.push(n.jsx("line",{x1:0,y1:v,x2:TA,y2:v,stroke:"#e2e8f0",strokeWidth:"1"},`h-${v}`));return n.jsx("svg",{className:"grid-overlay",children:b})},ke=N=>n.jsxs("div",{className:"actor",style:{left:`${N.x}px`,top:`${N.y}px`,width:`${X}px`,height:`${zA}px`,cursor:xA?.id===N.id?"grabbing":"grab"},onMouseDown:SA=>ie(SA,N,"actor"),children:[n.jsx("div",{className:"actor-icon",children:n.jsx(hu,{size:20})}),n.jsx("div",{className:"actor-name",children:N.name})]},N.id),Ue=N=>{const SA={...$,...N};lA(SA),d({...i,systemBoundary:SA})},_e=N=>{N.preventDefault(),N.stopPropagation();const SA=HA.current.getBoundingClientRect(),TA=(N.clientX-SA.left-$A.x)/CA,g=(N.clientY-SA.top-$A.y)/CA;mA({id:"system-boundary",type:"systemBoundary",x:$.x,y:$.y}),IA({x:TA-$.x,y:g-$.y})},We=N=>{let SA=0,TA=0;switch(N){case"up":TA=-K;break;case"down":TA=K;break;case"left":SA=-K;break;case"right":SA=K;break;default:return}const g=r.map(k=>{const S=k.x+SA,I=k.y+TA,_=Te(S,I,X,zA);return{...k,x:_.x,y:_.y}}),E=s.map(k=>{const S=k.x+SA,I=k.y+TA,_=Te(S,I,wA,EA);return{...k,x:_.x,y:_.y}}),D=$.x+SA,b=$.y+TA,v=Te(D,b,$.width,$.height);d({...i,actors:g,useCases:E,systemBoundary:{...$,x:v.x,y:v.y}}),lA({...$,x:v.x,y:v.y})},Ze=()=>{let N=1/0,SA=-1/0,TA=1/0,g=-1/0;if(J({actors:r,useCases:s,systemBoundary:$}),r.forEach(ZA=>{N=Math.min(N,ZA.x),SA=Math.max(SA,ZA.x+X),TA=Math.min(TA,ZA.y),g=Math.max(g,ZA.y+zA)}),s.forEach(ZA=>{N=Math.min(N,ZA.x),SA=Math.max(SA,ZA.x+wA),TA=Math.min(TA,ZA.y),g=Math.max(g,ZA.y+EA)}),$.visible&&(N=Math.min(N,$.x),SA=Math.max(SA,$.x+$.width),TA=Math.min(TA,$.y),g=Math.max(g,$.y+$.height)),N===1/0)return;const E=SA-N,D=g-TA,b=(QA.width-E)/2,v=(QA.height-D)/2,k=b-N,S=v-TA,I=r.map(ZA=>{const dA=ZA.x+k,u=ZA.y+S,w=Te(dA,u,X,zA);return{...ZA,x:w.x,y:w.y}}),_=s.map(ZA=>{const dA=ZA.x+k,u=ZA.y+S,w=Te(dA,u,wA,EA);return{...ZA,x:w.x,y:w.y}}),z=$.x+k,fA=$.y+S,cA=Te(z,fA,$.width,$.height);d({...i,actors:I,useCases:_,systemBoundary:{...$,x:cA.x,y:cA.y}}),lA({...$,x:cA.x,y:cA.y})};j.useEffect(()=>{const N=SA=>{if(SA.ctrlKey)switch(SA.key){case"ArrowUp":SA.preventDefault(),We("up");break;case"ArrowDown":SA.preventDefault(),We("down");break;case"ArrowLeft":SA.preventDefault(),We("left");break;case"ArrowRight":SA.preventDefault(),We("right");break}};return document.addEventListener("keydown",N),()=>{document.removeEventListener("keydown",N)}},[r,s,$,K]);const Ie=N=>n.jsx("div",{className:"use-case",style:{left:`${N.x}px`,top:`${N.y}px`,width:`${wA}px`,height:`${EA}px`,cursor:xA?.id===N.id?"grabbing":"grab"},onMouseDown:SA=>ie(SA,N,"useCase"),children:n.jsx("div",{className:"use-case-name",children:N.name})},N.id),Le=N=>{let SA,TA,g=!1,E=!1;if(SA=r.find(w=>w.id===N.source),SA?g=!0:SA=s.find(w=>w.id===N.source),TA=r.find(w=>w.id===N.target),TA?E=!0:TA=s.find(w=>w.id===N.target),!SA||!TA)return null;const D=De(SA,g),b=De(TA,E),v=b.x-D.x,k=b.y-D.y,S=Math.atan2(k,v),I=Je(SA,g,S),_=Je(TA,E,S+Math.PI);let z={},fA={};N.type==="include"?(z={strokeDasharray:"5,5",stroke:"#3b82f6"},fA={fill:"#3b82f6"}):N.type==="extend"?(z={strokeDasharray:"8,3",stroke:"#10b981"},fA={fill:"#10b981"}):N.type==="generalization"?(z={stroke:"#8b5cf6"},fA={fill:"none",stroke:"#8b5cf6",strokeWidth:"2"}):(z={stroke:"#64748b"},fA={fill:"#64748b"});const cA=8,ZA=Math.atan2(_.y-I.y,_.x-I.x),dA={x:_.x-cA*Math.cos(ZA-Math.PI/6),y:_.y-cA*Math.sin(ZA-Math.PI/6)},u={x:_.x-cA*Math.cos(ZA+Math.PI/6),y:_.y-cA*Math.sin(ZA+Math.PI/6)};return N.type==="generalization"?n.jsxs("svg",{className:"relationship",children:[n.jsx("line",{x1:I.x,y1:I.y,x2:_.x,y2:_.y,strokeWidth:"2",...z}),n.jsx("polygon",{points:`
              ${_.x},${_.y}
              ${dA.x},${dA.y}
              ${u.x},${u.y}
            `,...fA}),n.jsx("text",{x:(I.x+_.x)/2,y:(I.y+_.y)/2-8,textAnchor:"middle",fontSize:"11",fill:z.stroke||"#64748b",className:"relationship-label",children:`<<${N.type}>>`})]},N.id):N.type==="association"?n.jsx("svg",{className:"relationship",children:n.jsx("line",{x1:I.x,y1:I.y,x2:_.x,y2:_.y,strokeWidth:"2",...z})},N.id):n.jsxs("svg",{className:"relationship",children:[n.jsx("defs",{children:n.jsx("marker",{id:`arrowhead-${N.id}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",...fA})})}),n.jsx("line",{x1:I.x,y1:I.y,x2:_.x,y2:_.y,strokeWidth:"2",markerEnd:`url(#arrowhead-${N.id})`,...z}),N.type!=="association"&&n.jsx("text",{x:(I.x+_.x)/2,y:(I.y+_.y)/2-8,textAnchor:"middle",fontSize:"11",fill:z.stroke||"#64748b",className:"relationship-label",children:`<<${N.type}>>`})]},N.id)};return n.jsxs("div",{className:"use-case-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:f,className:"back-btn",children:[n.jsx(_n,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"toolbar-controls",children:[n.jsx("button",{onClick:()=>sA(!V),className:`tool-btn ${V?"active":""}`,children:n.jsx(vB,{size:16})}),n.jsx("button",{onClick:()=>GA(!KA),className:`tool-btn ${KA?"active":""}`,children:n.jsx(gx,{size:16})}),n.jsx("button",{onClick:yA,className:"tool-btn",children:n.jsx(Kr,{size:16})}),n.jsxs("span",{className:"zoom-level",children:[Math.round(CA*100),"%"]}),n.jsx("button",{onClick:O,className:"tool-btn",children:n.jsx(Or,{size:16})}),n.jsx("button",{onClick:H,className:"tool-btn",children:n.jsx(xx,{size:16})}),n.jsx("button",{onClick:q,className:"tool-btn",children:"Auto"}),n.jsx("button",{onClick:jA,className:"tool-btn",children:"Undo"})]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:ce,className:"export-btn",children:[n.jsx(Bn,{size:16})," Export Image"]}),n.jsxs("button",{onClick:hA,className:"export-btn",children:[n.jsx(wa,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const N=new Blob([rA()],{type:"application/json"}),SA=URL.createObjectURL(N),TA=document.createElement("a");TA.href=SA,TA.download=`${i.name||"use-case-diagram"}.json`,document.body.appendChild(TA),TA.click(),document.body.removeChild(TA),URL.revokeObjectURL(SA)},className:"export-btn",children:[n.jsx(wn,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${MA==="editor"?"active":""}`,onClick:()=>NA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${MA==="json"?"active":""}`,onClick:()=>NA("json"),children:"JSON Editor"})]}),MA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("div",{style:{fontSize:"11px",color:"#64748b",marginBottom:"8px"},children:"Use Ctrl + Arrow keys for moving entire diagram"}),n.jsx("h3",{children:"Actors"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:h,onChange:N=>m(N.target.value),placeholder:"New actor name",onKeyPress:N=>N.key==="Enter"&&ye()}),n.jsxs("button",{onClick:ye,className:"add-btn",children:[n.jsx(rt,{size:16})," Add Actor"]})]}),n.jsx("div",{className:"actor-list",children:r.map(N=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-name",children:N.name}),n.jsx("button",{onClick:()=>te(N.id),className:"delete-btn",children:n.jsx(je,{size:14})})]},N.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Use Cases"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:x,onChange:N=>B(N.target.value),placeholder:"New use case name",onKeyPress:N=>N.key==="Enter"&&pe()}),n.jsxs("button",{onClick:pe,className:"add-btn",children:[n.jsx(rt,{size:16})," Add Use Case"]})]}),n.jsx("div",{className:"use-case-list",children:s.map(N=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-name",children:N.name}),n.jsx("button",{onClick:()=>fe(N.id),className:"delete-btn",children:n.jsx(je,{size:14})})]},N.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Relationships"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Source"}),n.jsxs("select",{value:C||"",onChange:N=>F(N.target.value?parseInt(N.target.value):null),children:[n.jsx("option",{value:"",children:"Select source"}),n.jsx("optgroup",{label:"Actors",children:r.map(N=>n.jsx("option",{value:N.id,children:N.name},N.id))}),n.jsx("optgroup",{label:"Use Cases",children:s.map(N=>n.jsx("option",{value:N.id,children:N.name},N.id))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Target"}),n.jsxs("select",{value:T||"",onChange:N=>oA(N.target.value?parseInt(N.target.value):null),children:[n.jsx("option",{value:"",children:"Select target"}),n.jsx("optgroup",{label:"Actors",children:r.map(N=>n.jsx("option",{value:N.id,children:N.name},N.id))}),n.jsx("optgroup",{label:"Use Cases",children:s.map(N=>n.jsx("option",{value:N.id,children:N.name},N.id))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Relationship Type"}),n.jsxs("select",{value:eA,onChange:N=>uA(N.target.value),children:[n.jsx("option",{value:"association",children:"Association"}),n.jsx("option",{value:"include",children:"Include"}),n.jsx("option",{value:"extend",children:"Extend"}),n.jsx("option",{value:"generalization",children:"Generalization"})]})]}),n.jsxs("button",{onClick:ne,disabled:!C||!T,className:"add-btn",children:[n.jsx(ro,{size:16})," Add Relationship"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Current Relationships"}),n.jsx("div",{className:"relationship-list",children:o.map(N=>{let SA,TA,g="",E="";return SA=r.find(D=>D.id===N.source),SA?g=SA.name:(SA=s.find(D=>D.id===N.source),SA&&(g=SA.name)),TA=r.find(D=>D.id===N.target),TA?E=TA.name:(TA=s.find(D=>D.id===N.target),TA&&(E=TA.name)),!SA||!TA?null:n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-name",children:[g," → ",E," (",N.type,")"]}),n.jsx("button",{onClick:()=>me(N.id),className:"delete-btn",children:n.jsx(je,{size:14})})]},N.id)})})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"System Boundary"}),n.jsxs("div",{className:"form-group",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.jsxs("label",{children:[n.jsx("input",{type:"checkbox",checked:$.visible,onChange:N=>Ue({visible:N.target.checked}),style:{width:"15px"}}),"Show System Boundary"]}),n.jsx("button",{onClick:Ze,className:"add-btn",style:{marginTop:"8px",width:"40%",height:"32px"},children:"Center All"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Width"}),n.jsx("input",{type:"number",value:$.width,onChange:N=>Ue({width:parseInt(N.target.value)||600})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Height"}),n.jsx("input",{type:"number",value:$.height,onChange:N=>Ue({height:parseInt(N.target.value)||400})})]}),n.jsx("button",{onClick:()=>{const N=Math.max(1,Math.floor($.width/200));if(J({actors:r,useCases:s,systemBoundary:$}),25+80*Math.ceil(s.length/N)>$.height&&!confirm(`Usecases exceeds align limit! Still align?
Select OK to align, Cancel to cancel.`))return;const SA=($.width+25)/N,TA=s.map((E,D)=>({...E,x:$.x+25+D%N*Math.round(SA),y:$.y+25+Math.floor(D/N)*80})),g=r.map((E,D)=>({...E,x:$.x-100,y:$.y+10+D*120}));d({...i,useCases:TA,actors:g})},className:"add-btn",children:"Auto Arrange"})]})]}),n.jsx("div",{className:"diagram-canvas-container",ref:bA,onMouseDown:Se,children:n.jsxs("div",{className:"diagram-canvas",ref:HA,style:{transform:`scale(${CA}) translate(${$A.x/CA}px, ${$A.y/CA}px)`,transformOrigin:"0 0",width:`${QA.width}px`,height:`${QA.height}px`,position:"relative"},children:[he(),$.visible&&n.jsx("div",{className:"system-boundary",style:{left:`${$.x}px`,top:`${$.y}px`,width:`${$.width}px`,height:`${$.height}px`},onMouseDown:N=>_e(N),children:n.jsx("div",{className:"system-boundary-label",children:"System"})}),o.map(Le),r.map(ke),s.map(Ie)]})})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const N=document.createElement("input");N.type="file",N.accept=".json",N.onchange=xe,N.click()},className:"import-btn",children:[n.jsx(yn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:gA,onChange:N=>XA(N.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:oe,className:"import-btn",children:[n.jsx(ya,{size:16})," Apply JSON"]})]}),n.jsx("style",{jsx:!0,children:`
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

        .system-boundary {
          position: absolute;
          border: 2px dashed #64748b;
          background: rgba(248, 250, 252, 0.8);
          cursor: move;
          z-index: 1;
        }

        .system-boundary:hover {
          border-color: #3b82f6;
          background: rgba(59, 130, 246, 0.05);
        }

        .system-boundary-label {
          position: absolute;
          top: -25px;
          left: 10px;
          background: white;
          padding: 2px 8px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
        }

        .diagram-canvas {
          /* Update existing style */
          min-width: ${QA.width}px;
          min-height: ${QA.height}px;
          background: #f8fafc;
          position: relative;
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
      `})]})},aQ=({sequenceDiagrams:i,onCreateSequenceDiagram:r,onLoadSequenceDiagram:s,onDeleteSequenceDiagram:o})=>{const[d,f]=j.useState(!1);return n.jsxs("div",{className:"sequence-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(DB,{size:48})}),n.jsx("h2",{children:"Sequence Diagram Designer"}),n.jsx("p",{children:"Model interactions between objects in sequential order"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>f(!0),className:"primary-btn",children:[n.jsx(rt,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Sequence Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.participants?.length||0," participants • ",h.messages?.length||0," messages"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:m=>{m.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Gn,{size:16})}),n.jsx("button",{onClick:m=>{m.stopPropagation(),confirm("Delete this diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(je,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Sequence Diagram"}),n.jsx("button",{onClick:()=>f(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., User Login Process",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>f(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),f(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},rQ=({sequenceDiagram:i,participants:r=[],messages:s=[],onUpdateSequenceDiagram:o,onBack:d})=>{const[f,h]=j.useState(""),[m,x]=j.useState(""),[B,C]=j.useState(""),[F,T]=j.useState(""),[oA,eA]=j.useState("sync"),[uA,MA]=j.useState("actor"),[NA,gA]=j.useState("editor"),[XA,xA]=j.useState(""),[mA,Y]=j.useState(1),[IA,V]=j.useState(150),sA=j.useRef(null);j.useEffect(()=>{xA(JSON.stringify({participants:r,messages:s},null,2))},[r,s]);const KA=()=>{if(!f.trim())return;const K=[...r,{id:Date.now(),name:f,type:uA}];o({...i,participants:K}),h("")},GA=()=>{if(!m.trim()||!B||!F)return;const K=r.find(bA=>bA.id===parseInt(B)),OA=r.find(bA=>bA.id===parseInt(F));if(!K||!OA)return;const HA=[...s,{id:Date.now(),text:m,from:K.id,to:OA.id,type:oA,order:s.length+1,activationStart:oA==="sync"||oA==="create"||oA==="self",activationEnd:!1}];o({...i,messages:HA}),x(""),C(""),T("")},CA=K=>{const OA=r.filter(L=>L.id!==K),bA=s.filter(L=>!(L.from===K||L.to===K)).map((L,X)=>({...L,order:X+1}));o({...i,participants:OA,messages:bA})},LA=K=>{const HA=s.filter(bA=>bA.id!==K).map((bA,L)=>({...bA,order:L+1}));o({...i,messages:HA})},$A=K=>{const OA=s.findIndex(bA=>bA.id===K);if(OA<=0)return;const HA=[...s];[HA[OA-1],HA[OA]]=[HA[OA],HA[OA-1]],HA.forEach((bA,L)=>{bA.order=L+1}),o({...i,messages:HA})},JA=K=>{const OA=s.findIndex(bA=>bA.id===K);if(OA>=s.length-1)return;const HA=[...s];[HA[OA],HA[OA+1]]=[HA[OA+1],HA[OA]],HA.forEach((bA,L)=>{bA.order=L+1}),o({...i,messages:HA})},G=()=>JSON.stringify({participants:r,messages:s},null,2),pA=()=>{navigator.clipboard.writeText(G())},FA=()=>{try{const K=JSON.parse(XA);Array.isArray(K.participants)&&Array.isArray(K.messages)?o({...i,participants:K.participants,messages:K.messages}):alert("Invalid JSON format. Expected participants and messages arrays.")}catch(K){alert("Error parsing JSON: "+K.message)}},WA=K=>{const OA=K.target.files[0];if(!OA)return;const HA=new FileReader;HA.onload=bA=>{xA(bA.target.result)},HA.readAsText(OA)},U=()=>{if(!sA.current)return;const K=sA.current.style.transform;sA.current.style.transform="scale(1) translate(0px, 0px)";const OA=document.createElement("canvas"),HA=sA.current.getBoundingClientRect();OA.width=HA.width*2,OA.height=HA.height*2,_r(()=>Promise.resolve().then(()=>Rr),void 0).then(bA=>{bA.default(sA.current,{backgroundColor:"#ffffff",scale:2,useCORS:!0,logging:!0,allowTaint:!0}).then(L=>{const X=document.createElement("a");X.download=`${i.name||"sequence-diagram"}.png`,X.href=L.toDataURL("image/png"),X.click(),sA.current.style.transform=K}).catch(L=>{console.error("Error generating image:",L),sA.current.style.transform=K})})},J=K=>60+K*IA,$=(K,OA)=>{const HA=J(OA);return n.jsx("div",{className:"participant-header",style:{left:`${HA-60}px`,top:"40px",width:"120px",height:"60px"},children:K.type==="actor"?n.jsxs("div",{className:"participant-actor",children:[n.jsx("div",{className:"actor-circle",children:n.jsx(xw,{size:16})}),n.jsx("div",{className:"actor-name",children:K.name})]}):n.jsx("div",{className:`participant-box ${K.type||"service"}`,children:n.jsx("span",{className:"participant-name",children:K.name})})},`header-${K.id}`)},lA=(K,OA)=>{const HA=J(OA),bA=110,L=Math.max(220+s.length*50,420);return n.jsx("div",{className:"lifeline",style:{left:`${HA-1}px`,top:`${bA}px`,width:"2px",height:`${L-bA}px`}},`lifeline-${K.id}`)},QA=(K,OA)=>{const HA=J(OA),bA=[],L=[];if(s.sort((X,zA)=>X.order-zA.order).forEach((X,zA)=>{const wA=150+zA*50;if((X.to===K||X.from===K)&&(X.type==="sync"||X.type==="create"))if(X.to===X.from){const EA=wA,nA=wA+40;bA.push({start:EA,end:nA,height:nA-EA,messageId:X.id})}else L.push({start:wA,messageId:X.id});if(X.from===K&&X.type==="self"){const EA=wA,nA=wA+40;bA.push({start:EA,end:nA,height:nA-EA,messageId:X.id})}if((X.to===K||X.from===K)&&X.type==="return"){const EA=L.pop();EA&&bA.push({...EA,end:wA+20,height:wA+20-EA.start})}}),L.length>0){const X=150+s.length*50;L.forEach(zA=>{bA.push({...zA,end:X,height:X-zA.start})})}return bA.map((X,zA)=>n.jsx("div",{className:"activation-box",style:{left:`${HA-8}px`,top:`${X.start}px`,width:"16px",height:`${X.height-23}px`}},`activation-${K}-${zA}`))},RA=(K,OA)=>{const HA=r.findIndex(ne=>ne.id===K.from),bA=r.findIndex(ne=>ne.id===K.to);if(HA===-1||bA===-1)return null;const L=150+OA*50,X=J(HA),zA=J(bA),wA=K.from===K.to,EA=ne=>{switch(ne){case"async":return{stroke:"#3b82f6",strokeDasharray:"5,5",arrowType:"open"};case"return":return{stroke:"#10b981",strokeDasharray:"8,4",arrowType:"open"};case"create":return{stroke:"#f59e0b",strokeDasharray:"none",arrowType:"filled"};case"destroy":return{stroke:"#ef4444",strokeDasharray:"none",arrowType:"filled"};case"self":return{stroke:"#8b5cf6",strokeDasharray:"none",arrowType:"filled"};default:return{stroke:"#64748b",strokeDasharray:"none",arrowType:"filled"}}},nA=EA(K.type);if(wA){const ne=Math.max(20,IA*.2),me=nA,De=EA("return"),Je=K.type==="sync"||K.type==="create";return n.jsx("div",{className:"message-container",children:n.jsxs("svg",{className:"message-svg",style:{overflow:"visible"},children:[n.jsx("path",{d:`M ${X} ${L} L ${X+ne} ${L}`,fill:"none",stroke:me.stroke,strokeWidth:"2",strokeDasharray:me.strokeDasharray}),n.jsx("path",{d:`M ${X+ne} ${L} L ${X+ne} ${L+20}`,fill:"none",stroke:me.stroke,strokeWidth:"2",strokeDasharray:me.strokeDasharray}),n.jsx("path",{d:`M ${X+ne} ${L+20} L ${X} ${L+20}`,fill:"none",stroke:Je?De.stroke:me.stroke,strokeWidth:"2",strokeDasharray:Je?De.strokeDasharray:me.strokeDasharray}),Je||K.type==="return"?n.jsx("path",{d:`M ${X+8},${L+14} L ${X},${L+20} L ${X+8},${L+26}`,fill:"none",stroke:De.stroke,strokeWidth:"2"}):n.jsx("polygon",{points:`${X+8},${L+14} ${X},${L+20} ${X+8},${L+26}`,fill:me.stroke}),n.jsx("rect",{x:X+ne+5,y:L+2,width:K.text.length*6+10,height:"16",fill:"white",stroke:"#e2e8f0",strokeWidth:"1",rx:"3"}),n.jsx("text",{x:X+ne+10,y:L+14,fontSize:"12",fill:me.stroke,className:"message-text",children:K.text})]})},K.id)}const ye=X<zA?1:-1,pe=ye>0?zA-8:zA+8,te=(X+zA)/2,fe=K.text.length*6+10;return n.jsx("div",{className:"message-container",children:n.jsxs("svg",{className:"message-svg",style:{overflow:"visible"},children:[n.jsx("line",{x1:X,y1:L,x2:zA,y2:L,stroke:nA.stroke,strokeWidth:"2",strokeDasharray:nA.strokeDasharray}),nA.arrowType==="filled"?n.jsx("polygon",{points:ye>0?`${pe},${L-6} ${zA},${L} ${pe},${L+6}`:`${pe},${L-6} ${zA},${L} ${pe},${L+6}`,fill:nA.stroke}):n.jsx("path",{d:ye>0?`M ${pe},${L-6} L ${zA},${L} L ${pe},${L+6}`:`M ${pe},${L-6} L ${zA},${L} L ${pe},${L+6}`,fill:"none",stroke:nA.stroke,strokeWidth:"2"}),n.jsx("rect",{x:te-fe/2,y:L-20,width:fe,height:"16",fill:"white",stroke:"#e2e8f0",strokeWidth:"1",rx:"3"}),n.jsx("text",{x:te,y:L-8,textAnchor:"middle",fontSize:"12",fill:nA.stroke,className:"message-text",children:K.text}),n.jsx("text",{x:X+(ye>0?-15:15),y:L-8,textAnchor:"middle",fontSize:"10",fill:"#64748b",className:"message-order",children:K.order})]})},K.id)};return n.jsxs("div",{className:"sequence-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(_n,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"spacing-controls",children:[n.jsx("label",{children:"Spacing:"}),n.jsx("button",{onClick:()=>V(Math.max(100,IA-25)),disabled:IA<=100,className:"spacing-btn",children:n.jsx(fu,{size:14})}),n.jsxs("span",{className:"spacing-value",children:[IA,"px"]}),n.jsx("button",{onClick:()=>V(Math.min(300,IA+25)),disabled:IA>=300,className:"spacing-btn",children:n.jsx(rt,{size:14})})]}),n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:()=>Y(Math.max(.5,mA-.1)),disabled:mA<=.5,className:"zoom-btn",children:"-"}),n.jsxs("span",{className:"zoom-level",children:[Math.round(mA*100),"%"]}),n.jsx("button",{onClick:()=>Y(Math.min(2,mA+.1)),disabled:mA>=2,className:"zoom-btn",children:"+"})]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:U,className:"export-btn",children:[n.jsx(Bn,{size:16})," Export Image"]}),n.jsxs("button",{onClick:pA,className:"export-btn",children:[n.jsx(wa,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const K=new Blob([G()],{type:"application/json"}),OA=URL.createObjectURL(K),HA=document.createElement("a");HA.href=OA,HA.download=`${i.name||"sequence-diagram"}.json`,document.body.appendChild(HA),HA.click(),document.body.removeChild(HA),URL.revokeObjectURL(OA)},className:"export-btn",children:[n.jsx(wn,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${NA==="editor"?"active":""}`,onClick:()=>gA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${NA==="json"?"active":""}`,onClick:()=>gA("json"),children:"JSON Editor"})]}),NA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Participants"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:f,onChange:K=>h(K.target.value),placeholder:"New participant name",onKeyPress:K=>K.key==="Enter"&&KA()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Type"}),n.jsxs("select",{value:uA,onChange:K=>MA(K.target.value),children:[n.jsx("option",{value:"actor",children:"Actor (User)"}),n.jsx("option",{value:"service",children:"Service"}),n.jsx("option",{value:"database",children:"Database"}),n.jsx("option",{value:"external",children:"External System"})]})]}),n.jsxs("button",{onClick:KA,className:"add-btn",children:[n.jsx(rt,{size:16})," Add Participant"]}),n.jsx("div",{className:"participant-list",children:r.map(K=>n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-info",children:[n.jsx("div",{className:"item-name",children:K.name}),n.jsx("div",{className:"item-type",children:K.type})]}),n.jsx("button",{onClick:()=>CA(K.id),className:"delete-btn",children:n.jsx(je,{size:14})})]},K.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Messages"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:m,onChange:K=>x(K.target.value),placeholder:"Message text",onKeyPress:K=>K.key==="Enter"&&GA()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"From"}),n.jsxs("select",{value:B||"",onChange:K=>C(K.target.value),children:[n.jsx("option",{value:"",children:"Select participant"}),r.map(K=>n.jsx("option",{value:K.id,children:K.name},K.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"To"}),n.jsxs("select",{value:F||"",onChange:K=>T(K.target.value),children:[n.jsx("option",{value:"",children:"Select participant"}),r.map(K=>n.jsx("option",{value:K.id,children:K.name},K.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Message Type"}),n.jsxs("select",{value:oA,onChange:K=>eA(K.target.value),children:[n.jsx("option",{value:"sync",children:"Synchronous Call"}),n.jsx("option",{value:"async",children:"Asynchronous Call"}),n.jsx("option",{value:"return",children:"Return Message"}),n.jsx("option",{value:"create",children:"Create Message"}),n.jsx("option",{value:"destroy",children:"Destroy Message"}),n.jsx("option",{value:"self",children:"Self Call"})]})]}),n.jsxs("button",{onClick:GA,disabled:!m.trim()||!B||!F,className:"add-btn",children:[n.jsx(ro,{size:16})," Add Message"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Message Sequence"}),n.jsx("div",{className:"message-list",children:s.sort((K,OA)=>K.order-OA.order).map(K=>{const OA=r.find(bA=>bA.id===K.from),HA=r.find(bA=>bA.id===K.to);return!OA||!HA?null:n.jsxs("div",{className:"message-item",children:[n.jsxs("div",{className:"message-info",children:[n.jsxs("div",{className:"message-order",children:[K.order,"."]}),n.jsxs("div",{className:"message-text",children:[OA.name," → ",HA.name,": ",K.text]}),n.jsx("div",{className:`message-type ${K.type}`,children:K.type})]}),n.jsxs("div",{className:"message-actions",children:[n.jsx("button",{onClick:()=>$A(K.id),disabled:K.order===1,className:"move-btn",children:"↑"}),n.jsx("button",{onClick:()=>JA(K.id),disabled:K.order===s.length,className:"move-btn",children:"↓"}),n.jsx("button",{onClick:()=>LA(K.id),className:"delete-btn",children:n.jsx(je,{size:14})})]})]},K.id)})})]})]}),n.jsx("div",{className:"diagram-canvas-wrapper",children:n.jsxs("div",{className:"diagram-canvas",ref:sA,style:{transform:`scale(${mA})`,transformOrigin:"top left"},children:[r.map((K,OA)=>$(K,OA)),r.map((K,OA)=>lA(K,OA)),r.map((K,OA)=>QA(K.id,OA)),s.sort((K,OA)=>K.order-OA.order).map((K,OA)=>RA(K,OA))]})})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const K=document.createElement("input");K.type="file",K.accept=".json",K.onchange=WA,K.click()},className:"import-btn",children:[n.jsx(yn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:XA,onChange:K=>xA(K.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:FA,className:"import-btn",children:[n.jsx(ya,{size:16})," Apply JSON"]})]}),n.jsx("style",{jsx:!0,children:`
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
          background: transparent;
          border-left: 2px dashed #94a3b8;
        }
        
        .activation-box {
          position: absolute;
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.5);
          border-radius: 2px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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
      `})]})},iQ=({architectureDiagrams:i,onCreateArchitectureDiagram:r,onLoadArchitectureDiagram:s,onDeleteArchitectureDiagram:o})=>{const[d,f]=j.useState(!1);return n.jsxs("div",{className:"architecture-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(fx,{size:48})}),n.jsx("h2",{children:"Architecture Diagram Designer"}),n.jsx("p",{children:"Model system components and their relationships"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>f(!0),className:"primary-btn",children:[n.jsx(rt,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Architecture Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.components?.length||0," components • ",h.connections?.length||0," connections"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:m=>{m.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Gn,{size:16})}),n.jsx("button",{onClick:m=>{m.stopPropagation(),confirm("Delete this diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(je,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Architecture Diagram"}),n.jsx("button",{onClick:()=>f(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., System Architecture",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>f(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),f(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},Ri=[{id:"service",name:"Service",icon:n.jsx(iw,{size:20}),color:"#6366f1"},{id:"database",name:"Database",icon:n.jsx(uB,{size:20}),color:"#10b981"},{id:"compute",name:"Compute",icon:n.jsx(cB,{size:20}),color:"#f59e0b"},{id:"storage",name:"Storage",icon:n.jsx(QB,{size:20}),color:"#8b5cf6"},{id:"network",name:"Network",icon:n.jsx(RB,{size:20}),color:"#3b82f6"},{id:"cloud",name:"Cloud",icon:n.jsx(rB,{size:20}),color:"#ec4899"},{id:"router",name:"Router",icon:n.jsx(nw,{size:20}),color:"#14b8a6"},{id:"user",name:"User",icon:n.jsx(hu,{size:20}),color:"#84cc16"},{id:"device",name:"Device",icon:n.jsx(cw,{size:20}),color:"#f97316"},{id:"internet",name:"Internet",icon:n.jsx(wB,{size:20}),color:"#06b6d4"},{id:"security",name:"Security",icon:n.jsx(sw,{size:20}),color:"#ef4444"},{id:"module",name:"Module",icon:n.jsx(dx,{size:20}),color:"#0ea5e9"},{id:"application",name:"Application",icon:n.jsx(Vb,{size:20}),color:"#9333ea"},{id:"layer",name:"Layer",icon:n.jsx(fx,{size:20}),color:"#facc15"},{id:"gateway",name:"Gateway",icon:n.jsx(ww,{size:20}),color:"#22d3ee"},{id:"custom",name:"Custom",icon:n.jsx(rt,{size:20}),color:"#64748b"}],oQ=({architectureDiagram:i={name:"Architecture Diagram",components:[],connections:[],groups:[]},components:r=[],connections:s=[],groups:o=[],onUpdateArchitectureDiagram:d=()=>{},onBack:f=()=>{}})=>{const[h,m]=j.useState(""),[x,B]=j.useState(""),[C,F]=j.useState(""),[T,oA]=j.useState(""),[eA,uA]=j.useState("solid"),[MA,NA]=j.useState("directed"),[gA,XA]=j.useState("editor"),[xA,mA]=j.useState(""),[Y,IA]=j.useState(null),[V,sA]=j.useState({x:0,y:0}),[KA,GA]=j.useState({}),[CA,LA]=j.useState("service"),[$A,JA]=j.useState(!1),[G,pA]=j.useState(""),[FA,WA]=j.useState("file"),[U,J]=j.useState(null),[$,lA]=j.useState(""),[QA,RA]=j.useState(""),[K,OA]=j.useState([]),[HA,bA]=j.useState([]),[L,X]=j.useState(1),[zA,wA]=j.useState({width:2e3,height:2e3}),[EA,nA]=j.useState(!1),ye=j.useRef(null),pe=j.useRef(null),te=r.length>0?r:i.components||[],fe=s.length>0?s:i.connections||[],ne=o.length>0?o:i.groups||[];j.useEffect(()=>{mA(JSON.stringify({components:te,connections:fe,groups:ne},null,2))},[te,fe,ne]),j.useEffect(()=>{if(te.length===0&&ne.length===0)return;let g=1/0,E=-1/0,D=1/0,b=-1/0;te.forEach(I=>{g=Math.min(g,I.x),E=Math.max(E,I.x+I.width),D=Math.min(D,I.y),b=Math.max(b,I.y+I.height)}),ne.forEach(I=>{g=Math.min(g,I.x),E=Math.max(E,I.x+I.width),D=Math.min(D,I.y),b=Math.max(b,I.y+I.height)});const v=200,k=Math.max(2e3,E-g+v*2),S=Math.max(2e3,b-D+v*2);wA({width:k,height:S})},[te,ne]);const me=(g,E=new Set)=>{if(E.has(g))return 0;E.add(g);let D=0;return ne.forEach(b=>{b.groupIds&&b.groupIds.includes(g)&&(D=Math.max(D,me(b.id,E)+1))}),D},De=()=>{if(!h.trim())return;const g=Ri.find(D=>D.id===CA)||Ri[0],E=[...te,{id:Date.now(),name:h,type:CA,x:50+Math.random()*200,y:50+Math.random()*200,width:120,height:120,color:g.color,imageUrl:G}];d({...i,components:E,connections:fe,groups:ne}),m(""),pA(""),JA(!1)},Je=()=>{if(!QA.trim())return;if(K.length===0&&HA.length===0){alert("Please select at least one component or group to create a group.");return}let g=1/0,E=-1/0,D=1/0,b=-1/0;K.forEach(I=>{g=Math.min(g,I.x),E=Math.max(E,I.x+I.width),D=Math.min(D,I.y),b=Math.max(b,I.y+I.height)}),HA.forEach(I=>{g=Math.min(g,I.x),E=Math.max(E,I.x+I.width),D=Math.min(D,I.y),b=Math.max(b,I.y+I.height)}),g===1/0&&(g=100,E=300,D=100,b=200);const v=40,k={id:Date.now(),name:QA,componentIds:K.map(I=>I.id),groupIds:HA.map(I=>I.id),x:g-v,y:D-v,width:Math.max(200,E-g+v*2),height:Math.max(150,b-D+v*2),color:"#e2e8f0"},S=[...ne,k];d({...i,components:te,connections:fe,groups:S}),RA(""),OA([]),bA([])},Te=()=>{if(!C||!T)return;const g=te.find(b=>b.id===parseInt(C)),E=te.find(b=>b.id===parseInt(T));if(!g||!E)return;const D=[...fe,{id:Date.now(),from:g.id,to:E.id,type:eA,direction:MA,label:x||"",color:"#64748b"}];d({...i,components:te,connections:D,groups:ne}),B(""),F(""),oA("")},ie=g=>{const E=te.filter(v=>v.id!==g),D=fe.filter(v=>!(v.from===g||v.to===g)),b=ne.map(v=>({...v,componentIds:v.componentIds.filter(k=>k!==g)})).filter(v=>v.componentIds.length>0||v.groupIds&&v.groupIds.length>0);d({...i,components:E,connections:D,groups:b})},Fe=g=>{const E=fe.filter(D=>D.id!==g);d({...i,components:te,connections:E,groups:ne})},be=g=>{const E=ne.filter(D=>D.id!==g);d({...i,components:te,connections:fe,groups:E})},Se=(g,E,D=!1)=>{g.preventDefault(),g.stopPropagation();const b=ye.current.getBoundingClientRect(),v=(g.clientX-b.left)/L,k=(g.clientY-b.top)/L;if(IA({...E,isGroup:D}),sA({x:v-E.x,y:k-E.y}),D){const S={};E.componentIds&&E.componentIds.forEach(I=>{const _=te.find(z=>z.id===I);_&&(S[`component_${I}`]={x:_.x,y:_.y})}),E.groupIds&&E.groupIds.forEach(I=>{const _=ne.find(z=>z.id===I);_&&(S[`group_${I}`]={x:_.x,y:_.y})}),GA(S)}},O=(g,E)=>{g.stopPropagation(),g.shiftKey?OA(D=>D.some(v=>v.id===E.id)?D.filter(v=>v.id!==E.id):[...D,E]):(OA([E]),bA([]))},yA=(g,E)=>{g.stopPropagation(),g.shiftKey?bA(D=>D.some(v=>v.id===E.id)?D.filter(v=>v.id!==E.id):[...D,E]):(bA([E]),OA([]))},H=j.useCallback(g=>{if(!Y)return;const E=ye.current.getBoundingClientRect(),D=Math.max(0,(g.clientX-E.left)/L-V.x),b=Math.max(0,(g.clientY-E.top)/L-V.y);if(Y.isGroup){const v=D-Y.x,k=b-Y.y,S=te.map(_=>{if(Y.componentIds&&Y.componentIds.includes(_.id)){const z=KA[`component_${_.id}`];if(z)return{..._,x:Math.max(0,z.x+v),y:Math.max(0,z.y+k)}}return _}),I=ne.map(_=>{if(_.id===Y.id)return{..._,x:Math.max(0,D),y:Math.max(0,b)};if(Y.groupIds&&Y.groupIds.includes(_.id)){const z=KA[`group_${_.id}`];if(z)return{..._,x:Math.max(0,z.x+v),y:Math.max(0,z.y+k)}}return _});d({...i,components:S,connections:fe,groups:I})}else{const v=te.map(k=>k.id===Y.id?{...k,x:Math.max(0,D),y:Math.max(0,b)}:k);d({...i,components:v,connections:fe,groups:ne})}},[Y,V,KA,te,fe,ne,i,d,L]),q=j.useCallback(()=>{IA(null),GA({})},[]);j.useEffect(()=>{if(Y)return document.addEventListener("mousemove",H),document.addEventListener("mouseup",q),()=>{document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",q)}},[Y,H,q]);const jA=g=>{J(g.id),lA(g.name)},rA=()=>{if(!U||!$.trim())return;const g=te.map(E=>E.id===U?{...E,name:$}:E);d({...i,components:g,connections:fe,groups:ne}),J(null),lA("")},hA=g=>{g.target===ye.current&&(OA([]),bA([]))},oe=()=>JSON.stringify({components:te,connections:fe,groups:ne},null,2),xe=()=>{navigator.clipboard.writeText(oe())},ce=()=>{try{const g=JSON.parse(xA);Array.isArray(g.components)&&Array.isArray(g.connections)?d({...i,components:g.components||[],connections:g.connections||[],groups:g.groups||[]}):alert("Invalid JSON format. Expected components and connections arrays.")}catch(g){alert("Error parsing JSON: "+g.message)}},he=g=>{const E=g.target.files[0];if(!E)return;const D=new FileReader;D.onload=b=>{mA(b.target.result)},D.readAsText(E)},ke=g=>{const E=g.target.files[0];if(!E)return;const D=new FileReader;D.onload=b=>{pA(b.target.result)},D.readAsDataURL(E)},Ue=g=>{pA(g.target.value)},_e=()=>{X(g=>Math.min(2,g+.1))},We=()=>{X(g=>Math.max(.5,g-.1))},Ze=()=>{X(1)},Ie=async()=>{if(ye.current){nA(!0);try{let g=1/0,E=-1/0,D=1/0,b=-1/0;if(te.forEach(u=>{g=Math.min(g,u.x),E=Math.max(E,u.x+u.width),D=Math.min(D,u.y),b=Math.max(b,u.y+u.height)}),ne.forEach(u=>{g=Math.min(g,u.x),E=Math.max(E,u.x+u.width),D=Math.min(D,u.y),b=Math.max(b,u.y+u.height)}),fe.forEach(u=>{const w=te.find(W=>W.id===u.from),Q=te.find(W=>W.id===u.to);if(w&&Q){const{fromX:W,fromY:P,toX:vA,toY:_A}=Le(w,Q);g=Math.min(g,W,vA),E=Math.max(E,W,vA),D=Math.min(D,P,_A),b=Math.max(b,P,_A)}}),g===1/0||te.length===0){alert("No diagram content to export"),nA(!1);return}const v=40,k=Math.max(0,g-v),S=Math.max(0,D-v),I=E-g+v*2,_=b-D+v*2,z=document.createElement("div");z.style.width=`${I}px`,z.style.height=`${_}px`,z.style.position="fixed",z.style.top="0",z.style.left="0",z.style.background="white",z.style.overflow="hidden",z.style.zIndex="-1";const fA=ye.current.cloneNode(!0);fA.style.position="absolute",fA.style.left=`-${k}px`,fA.style.top=`-${S}px`,fA.style.transform="none",fA.style.width=`${zA.width}px`,fA.style.height=`${zA.height}px`,z.appendChild(fA),document.body.appendChild(z);const ZA=await(await _r(()=>Promise.resolve().then(()=>Rr),void 0)).default(z,{backgroundColor:"#ffffff",scale:2,useCORS:!0,width:I,height:_,scrollX:0,scrollY:0}),dA=document.createElement("a");dA.download=`${i.name||"architecture-diagram"}.png`,dA.href=ZA.toDataURL("image/png",1),dA.click(),document.body.removeChild(z)}catch(g){console.error("Error exporting image:",g),alert("Error exporting image. Please try again.")}finally{nA(!1)}}},Le=(g,E)=>{const D=g.x+g.width/2,b=g.y+g.height/2,v=E.x+E.width/2,k=E.y+E.height/2,S=v-D,I=k-b;let _,z;Math.abs(S)>Math.abs(I)?(_=S>0?g.x+g.width:g.x,z=b):(_=D,z=I>0?g.y+g.height:g.y);let fA,cA;return Math.abs(S)>Math.abs(I)?(fA=S>0?E.x:E.x+E.width,cA=k):(fA=v,cA=I>0?E.y:E.y+E.height),{fromX:_,fromY:z,toX:fA,toY:cA}},N=g=>{const E=Ri.find(v=>v.id===g.type)||Ri[0],D=K.some(v=>v.id===g.id),b=U===g.id;return n.jsxs("div",{className:"component",style:{position:"absolute",left:`${g.x}px`,top:`${g.y}px`,width:`${g.width}px`,height:`${g.height}px`,cursor:Y?.id===g.id?"grabbing":"grab",outline:D?"3px dashed #3b82f6":"none",outlineOffset:"2px",zIndex:50,display:"flex",flexDirection:"column",background:"white",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",border:"2px solid #e2e8f0",overflow:"hidden",textAlign:"center",fontSize:"12px"},onMouseDown:v=>Se(v,g),onClick:v=>O(v,g),onDoubleClick:()=>jA(g),children:[n.jsx("div",{style:{width:"100%",height:"70%",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"#f8fafc",borderRadius:"10px 10px 0 0"},children:g.imageUrl?n.jsx("img",{src:g.imageUrl,alt:g.name,style:{maxWidth:"90%",maxHeight:"90%",objectFit:"contain",borderRadius:"6px"}}):n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:g.color||E.color},children:kb.cloneElement(E.icon,{size:48})})}),n.jsx("div",{style:{width:"100%",height:"30%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"6px 0px",color:"white",fontWeight:"600",borderRadius:"0 0 10px 10px",backgroundColor:g.color||E.color},children:b?n.jsx("input",{type:"text",value:$,onChange:v=>lA(v.target.value),onBlur:rA,onKeyPress:v=>v.key==="Enter"&&rA(),autoFocus:!0,style:{width:"100%",border:"none",background:"rgba(255, 255, 255, 0.2)",color:"white",textAlign:"center",fontWeight:"600",outline:"none",fontSize:"11px"}}):n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{fontSize:"11px",fontWeight:"600",lineHeight:"1.2",marginBottom:"2px",wordBreak:"break-word",maxWidth:"100%"},children:g.name}),n.jsx("div",{style:{fontSize:"9px",opacity:"0.9",fontWeight:"500"},children:E.name})]})})]},g.id)},SA=g=>{if(!g.componentIds&&!g.groupIds)return null;const E=te.filter(S=>g.componentIds&&g.componentIds.includes(S.id)),D=ne.filter(S=>g.groupIds&&g.groupIds.includes(S.id)),b=HA.some(S=>S.id===g.id),k=10+me(g.id)*5;return n.jsxs("div",{className:"group",style:{position:"absolute",left:`${g.x}px`,top:`${g.y}px`,width:`${g.width}px`,height:`${g.height}px`,backgroundColor:"rgba(226, 232, 240, 0.3)",border:"2px dashed #94a3b8",borderRadius:"12px",cursor:Y?.id===g.id?"grabbing":"grab",outline:b?"3px dashed #8b5cf6":"none",outlineOffset:"2px",zIndex:k,paddingTop:"40px",boxSizing:"border-box",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)",pointerEvents:"auto"},onMouseDown:S=>Se(S,g,!0),onClick:S=>yA(S,g),children:[n.jsxs("div",{style:{position:"absolute",top:"8px",left:"12px",right:"12px",fontWeight:"700",fontSize:"14px",color:"#1e293b",display:"flex",justifyContent:"space-between",alignItems:"center",pointerEvents:"auto",zIndex:k+1},children:[n.jsx("span",{style:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:g.name}),n.jsx("button",{onClick:S=>{S.stopPropagation(),be(g.id)},style:{background:"rgba(239, 68, 68, 0.1)",border:"1px solid rgba(239, 68, 68, 0.3)",color:"#ef4444",cursor:"pointer",padding:"4px",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:k+2},children:n.jsx(je,{size:14})})]}),n.jsxs("div",{style:{position:"absolute",bottom:"8px",left:"12px",fontSize:"11px",color:"#64748b",fontStyle:"italic",pointerEvents:"none"},children:[E.length," component",E.length!==1?"s":"",D.length>0&&`, ${D.length} group${D.length!==1?"s":""}`]})]},g.id)},TA=g=>{const E=te.find(ZA=>ZA.id===g.from),D=te.find(ZA=>ZA.id===g.to);if(!E||!D)return null;const{fromX:b,fromY:v,toX:k,toY:S}=Le(E,D),I=k-b,_=S-v,z=Math.atan2(_,I),fA=10;let cA={};return g.type==="dashed"?cA={strokeDasharray:"5,5",stroke:g.color||"#64748b"}:g.type==="dotted"?cA={strokeDasharray:"2,2",stroke:g.color||"#64748b"}:cA={stroke:g.color||"#64748b"},n.jsxs("svg",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:49},children:[n.jsx("line",{x1:b,y1:v,x2:k,y2:S,strokeWidth:"2",...cA}),g.direction==="directed"&&n.jsx("polygon",{points:`
              ${k-fA*Math.cos(z-Math.PI/6)},${S-fA*Math.sin(z-Math.PI/6)}
              ${k},${S}
              ${k-fA*Math.cos(z+Math.PI/6)},${S-fA*Math.sin(z+Math.PI/6)}
            `,fill:cA.stroke||"#64748b"}),g.label&&n.jsx("text",{x:(b+k)/2,y:(v+S)/2-10,textAnchor:"middle",fontSize:"12",fill:cA.stroke||"#475569",children:g.label})]},g.id)};return n.jsxs("div",{style:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",background:"#f8fafc",fontFamily:"Inter, system-ui, -apple-system, sans-serif"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"16px",background:"white",borderBottom:"1px solid #e2e8f0",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[n.jsxs("button",{onClick:f,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#f1f5f9",color:"#64748b",border:"1px solid #e2e8f0"},children:[n.jsx(_n,{size:16})," Back"]}),n.jsx("h2",{style:{margin:"0 16px",fontSize:"20px",color:"#1e293b"},children:i.name}),n.jsx("div",{style:{flex:1}}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",marginRight:"16px",background:"#f1f5f9",borderRadius:"6px",padding:"4px"},children:[n.jsx("button",{onClick:We,style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",borderRadius:"4px",cursor:"pointer",color:"#64748b"},title:"Zoom Out",children:n.jsx(Kr,{size:16})}),n.jsxs("div",{style:{minWidth:"60px",textAlign:"center",fontSize:"14px",fontWeight:"500"},children:[Math.round(L*100),"%"]}),n.jsx("button",{onClick:_e,style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",borderRadius:"4px",cursor:"pointer",color:"#64748b"},title:"Zoom In",children:n.jsx(Or,{size:16})}),n.jsx("button",{onClick:Ze,style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",borderRadius:"4px",cursor:"pointer",color:"#64748b",marginLeft:"4px"},title:"Reset Zoom",children:n.jsx(kB,{size:16})})]}),n.jsx("button",{onClick:Ie,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#8b5cf6",color:"white",border:"1px solid #8b5cf6"},children:EA?n.jsxs(n.Fragment,{children:[n.jsx(qB,{size:16}),"Exporting..."]}):n.jsxs(n.Fragment,{children:[n.jsx(Bn,{size:16})," Export Image"]})}),n.jsxs("button",{onClick:xe,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#8b5cf6",color:"white",border:"1px solid #8b5cf6"},children:[n.jsx(wa,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const g=new Blob([oe()],{type:"application/json"}),E=URL.createObjectURL(g),D=document.createElement("a");D.href=E,D.download=`${i.name||"architecture-diagram"}.json`,document.body.appendChild(D),D.click(),document.body.removeChild(D),URL.revokeObjectURL(E)},style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#8b5cf6",color:"white",border:"1px solid #8b5cf6"},children:[n.jsx(wn,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{style:{display:"flex",borderBottom:"1px solid #e2e8f0",background:"white"},children:[n.jsx("button",{style:{padding:"12px 24px",border:"none",background:"none",cursor:"pointer",fontWeight:"500",color:gA==="editor"?"#8b5cf6":"#64748b",borderBottom:gA==="editor"?"2px solid #8b5cf6":"2px solid transparent"},onClick:()=>XA("editor"),children:"Diagram Editor"}),n.jsx("button",{style:{padding:"12px 24px",border:"none",background:"none",cursor:"pointer",fontWeight:"500",color:gA==="json"?"#8b5cf6":"#64748b",borderBottom:gA==="json"?"2px solid #8b5cf6":"2px solid transparent"},onClick:()=>XA("json"),children:"JSON Editor"})]}),gA==="editor"?n.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[n.jsxs("div",{style:{width:"320px",background:"white",borderRight:"1px solid #e2e8f0",display:"flex",flexDirection:"column",overflow:"auto"},children:[n.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"12px",fontSize:"16px",color:"#1e293b"},children:"Components"}),n.jsx("div",{style:{marginBottom:"12px"},children:n.jsx("input",{type:"text",value:h,onChange:g=>m(g.target.value),placeholder:"Component name",onKeyPress:g=>g.key==="Enter"&&De(),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"}})}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"Component Type"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"8px",marginTop:"8px"},children:Ri.map(g=>n.jsx("button",{onClick:()=>LA(g.id),title:g.name,style:{width:"100%",aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",border:"none",borderRadius:"6px",cursor:"pointer",color:"white",transition:"all 0.2s",backgroundColor:g.color,outline:CA===g.id?"2px solid #1e293b":"none",outlineOffset:"2px"},children:g.icon},g.id))})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsxs("button",{onClick:()=>JA(!$A),style:{width:"100%",padding:"8px",background:"#e2e8f0",border:"none",borderRadius:"6px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"14px"},children:[n.jsx(Bn,{size:16})," ",G?"Change Image":"Add Image (Optional)"]}),$A&&n.jsxs("div",{style:{marginTop:"8px"},children:[n.jsxs("div",{style:{display:"flex",marginBottom:"8px",borderBottom:"1px solid #e2e8f0"},children:[n.jsx("button",{onClick:()=>WA("file"),style:{flex:1,padding:"6px",border:"none",background:"none",cursor:"pointer",fontSize:"12px",color:FA==="file"?"#8b5cf6":"#64748b",borderBottom:FA==="file"?"2px solid #8b5cf6":"2px solid transparent"},children:"Upload File"}),n.jsx("button",{onClick:()=>WA("url"),style:{flex:1,padding:"6px",border:"none",background:"none",cursor:"pointer",fontSize:"12px",color:FA==="url"?"#8b5cf6":"#64748b",borderBottom:FA==="url"?"2px solid #8b5cf6":"2px solid transparent"},children:"URL"})]}),FA==="file"?n.jsx("input",{type:"file",accept:"image/*",onChange:ke,style:{width:"100%",marginBottom:"8px"}}):n.jsx("input",{type:"text",value:G,onChange:Ue,placeholder:"Enter image URL",style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px",marginBottom:"8px"}}),G&&n.jsxs("div",{style:{position:"relative",marginTop:"8px",display:"flex",justifyContent:"center"},children:[n.jsx("img",{src:G,alt:"Preview",style:{maxWidth:"100%",maxHeight:"60px",borderRadius:"4px"}}),n.jsx("button",{onClick:()=>pA(""),style:{position:"absolute",top:"-8px",right:"-8px",width:"20px",height:"20px",borderRadius:"50%",background:"#fee2e2",color:"#ef4444",border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:n.jsx(je,{size:12})})]})]})]}),n.jsxs("button",{onClick:De,disabled:!h.trim(),style:{width:"100%",padding:"8px 16px",background:h.trim()?"#8b5cf6":"#ddd6fe",color:"white",border:"none",borderRadius:"6px",fontWeight:"500",cursor:h.trim()?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginTop:"8px"},children:[n.jsx(rt,{size:16})," Add Component"]}),n.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"12px"},children:te.map(g=>n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("div",{style:{flex:1},children:n.jsx("div",{style:{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:g.name})}),n.jsx("button",{onClick:()=>ie(g.id),style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fee2e2",color:"#ef4444",border:"none",cursor:"pointer",marginLeft:"8px"},children:n.jsx(je,{size:14})})]},g.id))})]}),n.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"12px",fontSize:"16px",color:"#1e293b"},children:"Groups"}),n.jsx("div",{style:{marginBottom:"12px"},children:n.jsx("input",{type:"text",value:QA,onChange:g=>RA(g.target.value),placeholder:"Group name",onKeyPress:g=>g.key==="Enter"&&Je(),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"}})}),n.jsxs("button",{onClick:Je,disabled:!QA.trim()||K.length===0&&HA.length===0,style:{width:"100%",padding:"8px 16px",background:!QA.trim()||K.length===0&&HA.length===0?"#ddd6fe":"#8b5cf6",color:"white",border:"none",borderRadius:"6px",fontWeight:"500",cursor:!QA.trim()||K.length===0&&HA.length===0?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[n.jsx(dx,{size:16})," Create Group"]}),n.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"#f1f5f9",borderRadius:"6px",fontSize:"12px"},children:[K.length>0||HA.length>0?n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{marginBottom:"8px",fontWeight:"500"},children:[K.length," component(s), ",HA.length," group(s) selected"]}),n.jsxs("button",{onClick:()=>{OA([]),bA([])},style:{display:"flex",alignItems:"center",gap:"4px",background:"none",border:"none",color:"#64748b",cursor:"pointer",fontSize:"12px",padding:"4px 8px",borderRadius:"4px"},children:[n.jsx(fu,{size:14})," Clear Selection"]})]}):n.jsx("div",{children:"No items selected"}),n.jsx("div",{style:{marginTop:"8px",color:"#64748b",fontStyle:"italic"},children:"Hold Shift + Click to select multiple items"})]}),n.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"12px"},children:ne.map(g=>n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f1f5f9"},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:g.name}),n.jsxs("div",{style:{fontSize:"12px",color:"#64748b",marginTop:"2px"},children:[g.componentIds?g.componentIds.length:0," components",g.groupIds&&g.groupIds.length>0&&`, ${g.groupIds.length} groups`]})]}),n.jsx("button",{onClick:()=>be(g.id),style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fee2e2",color:"#ef4444",border:"none",cursor:"pointer",marginLeft:"8px"},children:n.jsx(je,{size:14})})]},g.id))})]}),n.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"12px",fontSize:"16px",color:"#1e293b"},children:"Connections"}),n.jsx("div",{style:{marginBottom:"12px"},children:n.jsx("input",{type:"text",value:x,onChange:g=>B(g.target.value),placeholder:"Connection label (optional)",onKeyPress:g=>g.key==="Enter"&&Te(),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"}})}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"From Component"}),n.jsxs("select",{value:C||"",onChange:g=>F(g.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"",children:"Select component"}),te.map(g=>n.jsx("option",{value:g.id,children:g.name},g.id))]})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"To Component"}),n.jsxs("select",{value:T||"",onChange:g=>oA(g.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"",children:"Select component"}),te.map(g=>n.jsx("option",{value:g.id,children:g.name},g.id))]})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"Connection Type"}),n.jsxs("select",{value:eA,onChange:g=>uA(g.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"solid",children:"Solid Line"}),n.jsx("option",{value:"dashed",children:"Dashed Line"}),n.jsx("option",{value:"dotted",children:"Dotted Line"})]})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"Direction"}),n.jsxs("select",{value:MA,onChange:g=>NA(g.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"directed",children:"Directed (with arrow)"}),n.jsx("option",{value:"undirected",children:"Undirected"})]})]}),n.jsxs("button",{onClick:Te,disabled:!C||!T,style:{width:"100%",padding:"8px 16px",background:!C||!T?"#ddd6fe":"#8b5cf6",color:"white",border:"none",borderRadius:"6px",fontWeight:"500",cursor:!C||!T?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[n.jsx(ro,{size:16})," Add Connection"]}),n.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"12px"},children:fe.map(g=>{const E=te.find(b=>b.id===g.from),D=te.find(b=>b.id===g.to);return!E||!D?null:n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f1f5f9"},children:[n.jsxs("div",{style:{flex:1},children:[n.jsxs("div",{style:{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[E.name," → ",D.name]}),n.jsx("div",{style:{fontSize:"12px",color:"#64748b",marginTop:"2px"},children:g.type}),g.label&&n.jsx("div",{style:{fontSize:"12px",color:"#64748b",marginTop:"2px"},children:g.label})]}),n.jsx("button",{onClick:()=>Fe(g.id),style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fee2e2",color:"#ef4444",border:"none",cursor:"pointer",marginLeft:"8px"},children:n.jsx(je,{size:14})})]},g.id)})})]})]}),n.jsx("div",{ref:pe,style:{flex:1,overflow:"auto",position:"relative",background:"#f8fafc"},children:n.jsxs("div",{ref:ye,onClick:hA,style:{position:"absolute",width:`${zA.width}px`,height:`${zA.height}px`,background:"white",backgroundImage:"linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",backgroundSize:"20px 20px",transform:`scale(${L})`,transformOrigin:"0 0"},children:[ne.map(SA),fe.map(TA),te.map(N)]})})]}):n.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,padding:"16px",background:"white"},children:[n.jsx("div",{style:{display:"flex",gap:"8px",marginBottom:"12px"},children:n.jsxs("button",{onClick:()=>{const g=document.createElement("input");g.type="file",g.accept=".json",g.onchange=he,g.click()},style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",border:"none",background:"#8b5cf6",color:"white"},children:[n.jsx(yn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:xA,onChange:g=>mA(g.target.value),style:{flex:1,padding:"12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontFamily:"monospace",fontSize:"14px",resize:"none",marginBottom:"12px"}}),n.jsxs("button",{onClick:ce,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",border:"none",background:"#8b5cf6",color:"white",alignSelf:"flex-start"},children:[n.jsx(ya,{size:16})," Apply JSON"]})]})]})},sQ=({classDiagrams:i,onCreateClassDiagram:r,onLoadClassDiagram:s,onDeleteClassDiagram:o})=>{const[d,f]=j.useState(!1);return n.jsxs("div",{className:"class-diagram-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(cx,{size:48})}),n.jsx("h2",{children:"Class Diagram Designer"}),n.jsx("p",{children:"Model classes and their relationships in object-oriented design"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>f(!0),className:"primary-btn",children:[n.jsx(rt,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Class Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.classes?.length||0," classes • ",h.relationships?.length||0," relationships"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:m=>{m.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Gn,{size:16})}),n.jsx("button",{onClick:m=>{m.stopPropagation(),confirm("Delete this diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(je,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Class Diagram"}),n.jsx("button",{onClick:()=>f(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Banking System Classes",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>f(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),f(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},lQ=({classDiagram:i,classes:r=[],relationships:s=[],onUpdateClassDiagram:o,onBack:d})=>{const[f,h]=j.useState(""),[m,x]=j.useState(""),[B,C]=j.useState(""),[F,T]=j.useState(""),[oA,eA]=j.useState("association"),[uA,MA]=j.useState("class"),[NA,gA]=j.useState("editor"),[XA,xA]=j.useState(""),[mA,Y]=j.useState(null),[IA,V]=j.useState({x:0,y:0}),[sA,KA]=j.useState(null),[GA,CA]=j.useState({x:0,y:0}),[LA,$A]=j.useState(null),[JA,G]=j.useState(""),[pA,FA]=j.useState(-1),[WA,U]=j.useState({visibility:"+",name:"",type:"String",defaultValue:""}),[J,$]=j.useState({visibility:"+",name:"",returnType:"void",isAbstract:!1}),[lA,QA]=j.useState(1),[RA,K]=j.useState({x:0,y:0}),[OA,HA]=j.useState(!1),[bA,L]=j.useState({x:0,y:0}),[X,zA]=j.useState(""),wA=j.useRef(null),EA=j.useRef(null),[nA,ye]=j.useState(!1),pe=[{header:"#EC4899",border:"#BE185D",background:"#FDF2F8"},{header:"#DB2777",border:"#9D174D",background:"#FCE7F3"},{header:"#F472B6",border:"#EC4899",background:"#FDF2F8"},{header:"#F43F5E",border:"#E11D48",background:"#FFF1F2"},{header:"#F97316",border:"#EA580C",background:"#FFEDD5"},{header:"#8B5CF6",border:"#7C3AED",background:"#F5F3FF"},{header:"#3B82F6",border:"#2563EB",background:"#EFF6FF"},{header:"#10B981",border:"#059669",background:"#ECFDF5"},{header:"#EF4444",border:"#DC2626",background:"#FEF2F2"},{header:"#8B5A2B",border:"#A16207",background:"#FFFBEB"},{header:"#6B7280",border:"#4B5563",background:"#F9FAFB"},{header:"#14B8A6",border:"#0D9488",background:"#F0FDFA"}],te=["String","int","float","double","boolean","void","char","long","short","byte"],fe=[{value:"+",label:"Public (+)"},{value:"-",label:"Private (-)"},{value:"#",label:"Protected (#)"},{value:"~",label:"Package (~)"}],ne={String:"String",int:"int",float:"float",double:"double",boolean:"boolean",void:"void",char:"char",long:"long",short:"short",byte:"byte"};j.useEffect(()=>{xA(JSON.stringify({classes:r,relationships:s},null,2))},[r,s]);const me=()=>pe[Math.floor(Math.random()*pe.length)],De=()=>{const u=r.map(w=>({...w,colorScheme:me()}));o({...i,classes:u})},Je=()=>{QA(u=>Math.min(u*1.2,3))},Te=()=>{QA(u=>Math.max(u/1.2,.3))},ie=()=>{QA(1),K({x:0,y:0})},Fe=(u,w="12px",Q="'SF Mono', monospace")=>{const P=document.createElement("canvas").getContext("2d");return P.font=`${w} ${Q}`,P.measureText(u).width},be=u=>{const W=u.classType==="interface"?`<<int>> ${u.name}`:u.name,P=Fe(W,"16px","'Inter', sans-serif")+32;let vA=0;(u.attributes||[]).forEach(pt=>{const Ca=`${pt.visibility} ${pt.name} : ${pt.type}`,sn=Fe(Ca)+32;sn>vA&&(vA=sn)});let _A=0;(u.methods||[]).forEach(pt=>{const Ca=`${pt.visibility} ${pt.name} : ${pt.returnType}`,sn=Fe(Ca)+32;sn>_A&&(_A=sn)});const DA=Math.max(180,P,vA,_A),ee=u.classType==="interface"?50:40,VA=26,ue=6,ve=1,At=(u.attributes||[]).length>0?(u.attributes||[]).length*VA+ue*2:0,ut=(u.methods||[]).length>0?(u.methods||[]).length*VA+ue*2:0,Ne=(u.attributes||[]).length>0&&(u.methods||[]).length>0?ve:0,nt=ee+At+ut+Ne;return{width:Math.min(DA,400),height:Math.max(nt,60)}},Se=()=>{if(!f.trim())return;const u=me(),w={id:Date.now(),name:f,classType:uA,attributes:[],methods:[],x:50+Math.random()*200,y:50+Math.random()*200,colorScheme:u},Q=be(w),W=[...r,{...w,width:Q.width,height:Q.height}];o({...i,classes:W}),h(""),MA("class")},O=u=>{const w=r.find(Q=>Q.id===u);w&&$A(w)},yA=(u,w=-1)=>{const Q=r.find(W=>W.id===u);Q&&(G("attribute"),FA(w),w>=0?U({...Q.attributes[w]}):U({visibility:"+",name:"",type:"String"}))},H=(u,w=-1)=>{const Q=r.find(W=>W.id===u);Q&&(G("method"),FA(w),w>=0?$({...Q.methods[w]}):$({visibility:"+",name:"",returnType:"void",isAbstract:Q.classType==="abstract"||Q.classType==="interface"}))},q=()=>{if(!WA.name.trim())return;const u=r.map(Q=>{if(Q.id===LA.id){const W=[...Q.attributes];pA>=0?W[pA]={...WA}:W.push({...WA});const P={...Q,attributes:W},vA=be(P);return{...P,width:vA.width,height:vA.height}}return Q});o({...i,classes:u});const w=u.find(Q=>Q.id===LA.id);w&&$A(w),rA()},jA=()=>{if(!J.name.trim())return;let u=J.name;u.includes("(")||(u+="()");const w=r.map(W=>{if(W.id===LA.id){const P=[...W.methods];pA>=0?P[pA]={...J,name:u}:P.push({...J,name:u});const vA={...W,methods:P},_A=be(vA);return{...vA,width:_A.width,height:_A.height}}return W});o({...i,classes:w});const Q=w.find(W=>W.id===LA.id);Q&&$A(Q),rA()},rA=()=>{G(""),FA(-1)},hA=()=>{$A(null),G(""),FA(-1)},oe=()=>{if(!B||!F)return;const u=r.find(W=>W.id===parseInt(B)),w=r.find(W=>W.id===parseInt(F));if(!u||!w)return;const Q=[...s,{id:Date.now(),from:u.id,to:w.id,type:oA,label:m||""}];o({...i,relationships:Q}),x(""),C(""),T("")},xe=u=>{const w=r.filter(W=>W.id!==u),Q=s.filter(W=>!(W.from===u||W.to===u));o({...i,classes:w,relationships:Q})},ce=(u,w)=>{const Q=r.map(P=>{if(P.id===u){const vA=P.attributes.filter((ee,VA)=>VA!==w),_A={...P,attributes:vA},DA=be(_A);return{..._A,width:DA.width,height:DA.height}}return P});o({...i,classes:Q});const W=Q.find(P=>P.id===u);W&&$A(W)},he=(u,w)=>{const Q=r.map(P=>{if(P.id===u){const vA=P.methods.filter((ee,VA)=>VA!==w),_A={...P,methods:vA},DA=be(_A);return{..._A,width:DA.width,height:DA.height}}return P});o({...i,classes:Q});const W=Q.find(P=>P.id===u);W&&$A(W)},ke=u=>{const w=s.filter(Q=>Q.id!==u);o({...i,relationships:w})},Ue=(u,w=null,Q=!1)=>{u.stopPropagation();const W=wA.current?.getBoundingClientRect();W&&(w?Q?(KA(w),CA({x:u.clientX,y:u.clientY})):(Y(w),V({x:(u.clientX-W.left)/lA-RA.x-w.x,y:(u.clientY-W.top)/lA-RA.y-w.y})):(HA(!0),L({x:u.clientX-RA.x,y:u.clientY-RA.y})))},_e=u=>{if(mA){const w=wA.current?.getBoundingClientRect();if(!w)return;const Q=Math.max(0,(u.clientX-w.left)/lA-RA.x-IA.x),W=Math.max(0,(u.clientY-w.top)/lA-RA.y-IA.y),P=r.map(vA=>vA.id===mA.id?{...vA,x:Q,y:W}:vA);o({...i,classes:P})}else if(sA){const w=(u.clientX-GA.x)/lA,Q=(u.clientY-GA.y)/lA,W=r.map(P=>{if(P.id===sA.id){const vA=Math.max(180,P.width+w),_A=Math.max(90,P.height+Q);return{...P,width:vA,height:_A}}return P});o({...i,classes:W}),CA({x:u.clientX,y:u.clientY})}else OA&&K({x:u.clientX-bA.x,y:u.clientY-bA.y})},We=()=>{Y(null),KA(null),HA(!1)},Ze=u=>{if(u.ctrlKey||!nA){u.preventDefault();const w=u.deltaY>0?.9:1.1;QA(Q=>Math.max(.3,Math.min(3,Q*w)))}};j.useEffect(()=>{if(mA||sA||OA)return document.addEventListener("mousemove",_e),document.addEventListener("mouseup",We),()=>{document.removeEventListener("mousemove",_e),document.removeEventListener("mouseup",We)}},[mA,sA,OA,IA,GA,bA,lA,RA]);const Ie=()=>{if(r.length===0)return{minX:0,maxX:1e3,minY:0,maxY:1e3};let u=1/0,w=-1/0,Q=1/0,W=-1/0;r.forEach(vA=>{u=Math.min(u,vA.x),w=Math.max(w,vA.x+vA.width),Q=Math.min(Q,vA.y),W=Math.max(W,vA.y+vA.height)});const P=200;return{minX:Math.min(u,0)-P,maxX:Math.max(w,1e3)+P,minY:Math.min(Q,0)-P,maxY:Math.max(W,1e3)+P}},Le=()=>{let u=`// Generated Java Code from Class Diagram
// ${i.name||"Untitled Diagram"}

`;const w={};s.filter(Q=>Q.type==="inheritance"||Q.type==="realization").forEach(Q=>{w[Q.from]||(w[Q.from]=[]),w[Q.from].push(Q.to)}),r.forEach(Q=>{const W=w[Q.id]||[];let P=null,vA=[];if(W.forEach(DA=>{const ee=r.find(VA=>VA.id===DA);ee&&(ee.classType==="class"||ee.classType==="abstract"?P=ee:ee.classType==="interface"&&vA.push(ee.name))}),Q.classType==="interface"){u+=`public interface ${Q.name}`,vA.length>0&&(u+=` extends ${vA.join(", ")}`),u+=` {

`,Q.methods?.length>0&&Q.methods.forEach(DA=>{const ee=ne[DA.returnType]||DA.returnType,VA=DA.name.includes("(")?DA.name:`${DA.name}()`;u+=`    ${ee} ${VA};

`}),u+=`}

`;return}Q.classType==="abstract"?u+=`public abstract class ${Q.name}`:u+=`public class ${Q.name}`,P&&(u+=` extends ${P.name}`),vA.length>0&&(u+=` implements ${vA.join(", ")}`),u+=` {

`;const _A=[];if(Q.attributes?.length>0&&(Q.attributes.forEach(DA=>{const ee=ne[DA.type]||DA.type,VA=SA(DA.visibility),ue=DA.defaultValue?N(DA.defaultValue,ee):TA(ee);u+=`    ${VA} ${ee} ${DA.name}${DA.defaultValue?` = ${ue}`:""};
`,VA==="private"&&_A.push({name:DA.name,type:ee,defaultValue:ue})}),u+=`
`),u+=`    public ${Q.name}() {
`,(Q.attributes||[]).forEach(DA=>{if(DA.defaultValue){const ee=ne[DA.type]||DA.type,VA=N(DA.defaultValue,ee);u+=`        this.${DA.name} = ${VA};
`}}),u+=`    }

`,Q.attributes?.length>0){const DA=Q.attributes.map(ee=>`${ne[ee.type]||ee.type} ${ee.name}`).join(", ");u+=`    public ${Q.name}(${DA}) {
`,Q.attributes.forEach(ee=>{u+=`        this.${ee.name} = ${ee.name};
`}),u+=`    }

`}_A.length>0&&_A.forEach(DA=>{const ee=DA.name.charAt(0).toUpperCase()+DA.name.slice(1);u+=`    public ${DA.type} get${ee}() {
`,u+=`        return this.${DA.name};
`,u+=`    }

`,u+=`    public void set${ee}(${DA.type} ${DA.name}) {
`,u+=`        this.${DA.name} = ${DA.name};
`,u+=`    }

`}),Q.methods?.length>0&&Q.methods.forEach(DA=>{const ee=ne[DA.returnType]||DA.returnType,VA=SA(DA.visibility),ue=DA.name.includes("(")?DA.name:`${DA.name}()`;DA.isAbstract?u+=`    ${VA} abstract ${ee} ${ue};

`:(u+=`    ${VA} ${ee} ${ue} {
`,ee!=="void"&&(u+=`        return ${TA(ee)};
`),u+=`    }

`)}),u+=`}

`}),zA(u),gA("code")},N=(u,w)=>{if(u.trim()==="")return TA(w);if(w==="String"&&!u.startsWith('"')&&!u.endsWith('"'))return`"${u}"`;if(w==="char"&&u.length===1&&!u.startsWith("'"))return`'${u}'`;if(w==="boolean"){const Q=u.toLowerCase();if(Q==="true"||Q==="false")return Q}return u},SA=u=>{switch(u){case"+":return"public";case"-":return"private";case"#":return"protected";case"~":return"";default:return"public"}},TA=u=>{switch(u){case"int":case"long":case"short":case"byte":return"0";case"float":case"double":return"0.0";case"boolean":return"false";case"char":return"'\\0'";default:return"null"}},g=()=>{if(!X)return;const u=new Blob([X],{type:"text/x-java-source"}),w=URL.createObjectURL(u),Q=document.createElement("a");Q.href=w,Q.download=`${i.name||"GeneratedClasses"}.java`,document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),URL.revokeObjectURL(w)},E=()=>{X&&navigator.clipboard.writeText(X).then(()=>{alert("Java code copied to clipboard!")}).catch(u=>{console.error("Failed to copy code: ",u)})},D=u=>{if(!u)return'// Click "Generate Java Code" to generate code from your diagram';const w=["abstract","assert","boolean","break","byte","case","catch","char","class","const","continue","default","do","double","else","enum","extends","final","finally","float","for","goto","if","implements","import","instanceof","int","interface","long","native","new","package","private","protected","public","return","short","static","strictfp","super","switch","synchronized","this","throw","throws","transient","try","void","volatile","while"],Q=["String","int","float","double","boolean","void","char","long","short","byte"];let P=(vA=>{const _A=document.createElement("div");return _A.textContent=vA,_A.innerHTML})(u);return P=P.replace(/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g,'<span class="string">$1</span>'),P=P.replace(/(\/\/[^\n]*$)/gm,'<span class="comment">$1</span>'),P=P.replace(/(\/\*[\s\S]*?\*\/)/g,'<span class="comment">$1</span>'),P=P.replace(/(\b\d+\.?\d*|\.\d+)([fFlL]?)\b(?!([^<]*>)|([^<]*<\/span>))/g,'<span class="number">$1$2</span>'),P=P.replace(/\b(class|extends|interface)\s+(\w+)\b/g,'$1 <span class="class-name">$2</span>').replace(/\bimplements\s+([\w\s,]+)\b/g,vA=>`implements ${vA.replace(/^implements\s+/,"").split(",").map(DA=>DA.trim()).map(DA=>`<span class="class-name">${DA}</span>`).join(", ")}`),Q.forEach(vA=>{const _A=new RegExp(`\\b${vA}\\b(?!([^<]*>)|([^<]*<\\/span>))`,"g");P=P.replace(_A,`<span class="type">${vA}</span>`)}),w.forEach(vA=>{const _A=new RegExp(`\\b${vA}\\b(?!([^<]*>)|([^<]*<\\/span>))`,"g");P=P.replace(_A,`<span class="keyword">${vA}</span>`)}),P},b=()=>JSON.stringify({classes:r,relationships:s},null,2),v=()=>{navigator.clipboard.writeText(b())},k=()=>{try{const u=JSON.parse(XA);if(Array.isArray(u.classes)&&Array.isArray(u.relationships)){const w=u.classes.map(Q=>({...Q,...be(Q)}));o({...i,classes:w,relationships:u.relationships})}else alert("Invalid JSON format. Expected classes and relationships arrays.")}catch(u){alert("Error parsing JSON: "+u.message)}},S=u=>{const w=u.target.files[0];if(!w)return;const Q=new FileReader;Q.onload=W=>{xA(W.target.result)},Q.readAsText(w)},I=()=>{if(!wA.current)return;let u=1/0,w=-1/0,Q=1/0,W=-1/0;if(r.forEach(At=>{u=Math.min(u,At.x),w=Math.max(w,At.x+At.width),Q=Math.min(Q,At.y),W=Math.max(W,At.y+At.height)}),s.forEach(At=>{const ut=r.find(nt=>nt.id===At.from),Ne=r.find(nt=>nt.id===At.to);if(ut&&Ne){const nt={x:ut.x+ut.width/2,y:ut.y+ut.height/2},pt={x:Ne.x+Ne.width/2,y:Ne.y+Ne.height/2};u=Math.min(u,nt.x,pt.x),w=Math.max(w,nt.x,pt.x),Q=Math.min(Q,nt.y,pt.y),W=Math.max(W,nt.y,pt.y)}}),u===1/0||r.length===0){alert("No diagram content to export");return}const P=40,vA=Math.max(0,u-P),_A=Math.max(0,Q-P),DA=w-u+P*2,ee=W-Q+P*2;wA.current.style.transform,wA.current.parentElement.style.overflow;const VA=document.createElement("div");VA.style.width=`${DA}px`,VA.style.height=`${ee}px`,VA.style.position="fixed",VA.style.top="0",VA.style.left="0",VA.style.background="#f8fafc",VA.style.zIndex="-9999",VA.style.overflow="hidden";const ue=wA.current.cloneNode(!0),ve=ue.querySelector(".diagram-content");ve&&(ve.style.transform="none",ve.style.transformOrigin="0 0"),ue.style.position="absolute",ue.style.left=`-${vA}px`,ue.style.top=`-${_A}px`,ue.style.transform="none",ue.style.width=`${dA.maxX-dA.minX}px`,ue.style.height=`${dA.maxY-dA.minY}px`,ue.style.background="#f8fafc",ue.style.overflow="visible",VA.appendChild(ue),document.body.appendChild(VA),_r(()=>Promise.resolve().then(()=>Rr),void 0).then(At=>{At.default(VA,{backgroundColor:"#f8fafc",scale:2,useCORS:!0,width:DA,height:ee,scrollX:0,scrollY:0,logging:!1}).then(ut=>{const Ne=document.createElement("a");Ne.download=`${i.name||"class-diagram"}.png`,Ne.href=ut.toDataURL("image/png"),Ne.click(),document.body.removeChild(VA)}).catch(ut=>{console.error("Error capturing image:",ut),document.body.removeChild(VA)})})},_=(u,w)=>{const Q={x:u.x+u.width/2,y:u.y+u.height/2},W={x:w.x+w.width/2,y:w.y+w.height/2},P=W.x-Q.x,vA=W.y-Q.y;Q.x+(P>0?u.width/2:-u.width/2),Q.y+(Math.abs(P)*u.height/u.width>Math.abs(vA)?vA>0?u.height/2:-u.height/2:(vA>0?u.height/2:-u.height/2)*(u.width/u.height)),W.x+(P<0?w.width/2:-w.width/2),W.y+(Math.abs(P)*w.height/w.width>Math.abs(vA)?vA<0?w.height/2:-w.height/2:(vA<0?w.height/2:-w.height/2)*(w.width/w.height));const _A={x:Math.max(u.x,Math.min(u.x+u.width,Math.abs(P)>Math.abs(vA)*(u.width/u.height)?Q.x+(P>0?u.width/2:-u.width/2):Q.x)),y:Math.max(u.y,Math.min(u.y+u.height,Math.abs(vA)>Math.abs(P)*(u.height/u.width)?Q.y+(vA>0?u.height/2:-u.height/2):Q.y))},DA={x:Math.max(w.x,Math.min(w.x+w.width,Math.abs(P)>Math.abs(vA)*(w.width/w.height)?W.x+(P<0?w.width/2:-w.width/2):W.x)),y:Math.max(w.y,Math.min(w.y+w.height,Math.abs(vA)>Math.abs(P)*(w.height/w.width)?W.y+(vA<0?w.height/2:-w.height/2):W.y))};return{fromPoint:_A,toPoint:DA}},z=(u,w)=>{if(Math.sqrt(Math.pow(w.x-u.x,2)+Math.pow(w.y-u.y,2))<300)return`M${u.x},${u.y} L${w.x},${w.y}`;const W=u.x+(w.x-u.x)*.5,P=u.y+(w.y-u.y)*.5;return Math.abs(w.x-u.x)>Math.abs(w.y-u.y)?`M${u.x},${u.y} L${W},${u.y} L${W},${w.y} L${w.x},${w.y}`:`M${u.x},${u.y} L${u.x},${P} L${w.x},${P} L${w.x},${w.y}`},fA=u=>{const w=u.colorScheme||pe[0],Q=u.classType==="interface",W=u.classType==="abstract";return n.jsxs("div",{className:"class-box",style:{left:`${u.x}px`,top:`${u.y}px`,width:`${u.width}px`,height:`${u.height}px`,cursor:mA?.id===u.id?"grabbing":"grab",borderColor:w.border,backgroundColor:"white"},onMouseDown:P=>Ue(P,u),onDoubleClick:()=>O(u.id),children:[n.jsx("div",{className:"class-header",style:{backgroundColor:w.header,color:"white"},children:n.jsx("div",{className:`class-name ${W?"italic":""}`,children:Q?`<<int>> ${u.name}`:u.name})}),n.jsxs("div",{className:"class-content",children:[u.attributes&&u.attributes.length>0&&n.jsx("div",{className:"attributes-section",children:u.attributes.map((P,vA)=>n.jsxs("div",{className:"class-item",onDoubleClick:_A=>{_A.stopPropagation(),yA(u.id,vA)},children:[n.jsxs("span",{className:"item-text",children:[P.visibility," ",P.name," : ",P.type]}),n.jsx("button",{onClick:_A=>{_A.stopPropagation(),ce(u.id,vA)},className:"item-delete-btn",children:n.jsx(je,{size:10})})]},vA))}),u.attributes&&u.methods&&u.attributes.length>0&&u.methods.length>0&&n.jsx("div",{className:"section-divider",style:{backgroundColor:w.border}}),u.methods&&u.methods.length>0&&n.jsx("div",{className:"methods-section",children:u.methods.map((P,vA)=>n.jsxs("div",{className:"class-item",onDoubleClick:_A=>{_A.stopPropagation(),H(u.id,vA)},children:[n.jsxs("span",{className:`item-text ${P.isAbstract?"italic":""}`,children:[P.visibility," ",P.name," : ",P.returnType]}),n.jsx("button",{onClick:_A=>{_A.stopPropagation(),he(u.id,vA)},className:"item-delete-btn",children:n.jsx(je,{size:10})})]},vA))})]}),n.jsx("div",{className:"resize-handle",style:{backgroundColor:w.header},onMouseDown:P=>Ue(P,u,!0)})]},u.id)},cA=u=>{const w=r.find(ue=>ue.id===u.from),Q=r.find(ue=>ue.id===u.to);if(!w||!Q)return null;const W={x:w.x,y:w.y,width:w.width,height:w.height},P={x:Q.x,y:Q.y,width:Q.width,height:Q.height},{fromPoint:vA,toPoint:_A}=_(W,P),DA=z(vA,_A),ee=(vA.x+_A.x)/2,VA=(vA.y+_A.y)/2;return n.jsxs("svg",{className:"relationship-svg",style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:[n.jsxs("defs",{children:[n.jsx("marker",{id:`arrowhead-${u.id}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#475569"})}),n.jsx("marker",{id:`inheritance-${u.id}`,markerWidth:"12",markerHeight:"10",refX:"11",refY:"5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"white",stroke:"#475569",strokeWidth:"1"})}),n.jsx("marker",{id:`diamond-${u.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"#475569"})}),n.jsx("marker",{id:`diamond-empty-${u.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"white",stroke:"#475569",strokeWidth:"1"})})]}),(()=>{const ve=(()=>{switch(u.type){case"inheritance":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#inheritance-${u.id})`};case"realization":return{stroke:"#475569",strokeWidth:2,strokeDasharray:"5,5",markerEnd:`url(#inheritance-${u.id})`};case"dependency":return{stroke:"#475569",strokeWidth:1,strokeDasharray:"8,4",markerEnd:`url(#arrowhead-${u.id})`};case"aggregation":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-empty-${u.id})`};case"composition":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-${u.id})`};case"navigable":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#arrowhead-${u.id})`};default:return{stroke:"#475569",strokeWidth:2}}})();return n.jsxs(n.Fragment,{children:[n.jsx("path",{d:DA,fill:"none",...ve}),u.label&&n.jsxs("g",{children:[n.jsx("rect",{x:ee-u.label.length*4,y:VA-8,width:u.label.length*8,height:16,fill:"white",stroke:"#e2e8f0",rx:"2"}),n.jsx("text",{x:ee,y:VA+4,textAnchor:"middle",fontSize:"11",fill:"#475569",fontWeight:"500",children:u.label})]})]})})()]},u.id)},ZA=u=>{if(u.target===wA.current){const w=wA.current.getBoundingClientRect(),Q=(u.clientX-w.left)/lA-RA.x,W=(u.clientY-w.top)/lA-RA.y,P=prompt("Enter class name:");if(P&&P.trim()){const vA=me(),_A={id:Date.now(),name:P.trim(),classType:"class",attributes:[],methods:[],x:Q-90,y:W-40,colorScheme:vA},DA=be(_A),ee=[...r,{..._A,width:DA.width,height:DA.height}];o({...i,classes:ee})}}},dA=Ie();return n.jsxs("div",{className:"class-diagram-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(_n,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"toolbar-controls",children:[n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:Te,className:"zoom-btn",children:n.jsx(Kr,{size:16})}),n.jsxs("span",{className:"zoom-level",children:[Math.round(lA*100),"%"]}),n.jsx("button",{onClick:Je,className:"zoom-btn",children:n.jsx(Or,{size:16})}),n.jsx("button",{onClick:ie,className:"zoom-btn reset",children:"Reset"})]}),n.jsxs("button",{onClick:De,className:"color-btn",children:[n.jsx(px,{size:16})," Randomize Colors"]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:I,className:"export-btn",children:[n.jsx(Bn,{size:16})," Export Image"]}),n.jsxs("button",{onClick:v,className:"export-btn",children:[n.jsx(wa,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const u=new Blob([b()],{type:"application/json"}),w=URL.createObjectURL(u),Q=document.createElement("a");Q.href=w,Q.download=`${i.name||"class-diagram"}.json`,document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),URL.revokeObjectURL(w)},className:"export-btn",children:[n.jsx(wn,{size:16})," Export JSON"]})]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${NA==="editor"?"active":""}`,onClick:()=>gA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${NA==="json"?"active":""}`,onClick:()=>gA("json"),children:"JSON Editor"}),n.jsx("button",{className:`tab ${NA==="code"?"active":""}`,onClick:()=>gA("code"),children:"Java Code"})]}),NA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Classes"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:f,onChange:u=>h(u.target.value),placeholder:"New class name",onKeyPress:u=>u.key==="Enter"&&Se()}),n.jsxs("select",{value:uA,onChange:u=>MA(u.target.value),style:{marginTop:"8px"},children:[n.jsx("option",{value:"class",children:"Class"}),n.jsx("option",{value:"abstract",children:"Abstract Class"}),n.jsx("option",{value:"interface",children:"Interface"})]}),n.jsxs("button",{onClick:Se,className:"add-btn",children:[n.jsx(rt,{size:16})," Add ",uA==="interface"?"Interface":uA==="abstract"?"Abstract Class":"Class"]})]}),n.jsx("div",{className:"class-list",children:r.map(u=>n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-name",children:[u.name,u.classType==="interface"&&n.jsx("span",{className:"class-type-badge",children:"Interface"}),u.classType==="abstract"&&n.jsx("span",{className:"class-type-badge",children:"Abstract"})]}),n.jsx("button",{onClick:()=>xe(u.id),className:"delete-btn",children:n.jsx(je,{size:14})})]},u.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Relationships"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:m,onChange:u=>x(u.target.value),placeholder:"Relationship label (optional)",onKeyPress:u=>u.key==="Enter"&&oe()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"From Class"}),n.jsxs("select",{value:B||"",onChange:u=>C(u.target.value),children:[n.jsx("option",{value:"",children:"Select class"}),r.map(u=>n.jsx("option",{value:u.id,children:u.name},u.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"To Class"}),n.jsxs("select",{value:F||"",onChange:u=>T(u.target.value),children:[n.jsx("option",{value:"",children:"Select class"}),r.map(u=>n.jsx("option",{value:u.id,children:u.name},u.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Relationship Type"}),n.jsxs("select",{value:oA,onChange:u=>eA(u.target.value),children:[n.jsx("option",{value:"association",children:"Association"}),n.jsx("option",{value:"navigable",children:"Navigable Association"}),n.jsx("option",{value:"inheritance",children:"Inheritance"}),n.jsx("option",{value:"realization",children:"Realization/Implementation"}),n.jsx("option",{value:"dependency",children:"Dependency"}),n.jsx("option",{value:"aggregation",children:"Aggregation"}),n.jsx("option",{value:"composition",children:"Composition"})]})]}),n.jsxs("button",{onClick:oe,disabled:!B||!F,className:"add-btn",children:[n.jsx(ro,{size:16})," Add Relationship"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Current Relationships"}),n.jsx("div",{className:"relationship-list",children:s.map(u=>{const w=r.find(W=>W.id===u.from),Q=r.find(W=>W.id===u.to);return!w||!Q?null:n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-name",children:[w.name," → ",Q.name,n.jsxs("div",{className:"item-type",children:["(",u.type,")"]})]}),u.label&&n.jsx("div",{className:"item-label",children:u.label}),n.jsx("button",{onClick:()=>ke(u.id),className:"delete-btn",children:n.jsx(je,{size:14})})]},u.id)})})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"UML Notation Guide"}),n.jsxs("div",{className:"notation-guide",children:[n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Visibility:"}),n.jsx("div",{children:"+ Public"}),n.jsx("div",{children:"- Private"}),n.jsx("div",{children:"# Protected"}),n.jsx("div",{children:"~ Package"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Class Types:"}),n.jsx("div",{children:"Regular Class"}),n.jsxs("div",{children:[n.jsx("em",{children:"Abstract Class"})," (italic)"]}),n.jsx("div",{children:"<<interface>>"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Quick Tips:"}),n.jsx("div",{children:"• Double-click canvas to add class"}),n.jsx("div",{children:"• Double-click class to edit"}),n.jsx("div",{children:"• Drag to move classes"}),n.jsx("div",{children:"• Drag resize handle to resize"}),n.jsx("div",{children:"• Mouse wheel + Ctrl to zoom"}),n.jsx("div",{children:"• Drag empty space to pan"})]})]})]})]}),n.jsx("div",{className:"diagram-canvas-container",style:{position:"relative",flex:1,overflow:"auto",background:"linear-gradient(45deg, #f1f5f9 25%, transparent 25%), linear-gradient(-45deg, #f1f5f9 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f1f5f9 75%), linear-gradient(-45deg, transparent 75%, #f1f5f9 75%)",backgroundSize:"20px 20px",backgroundPosition:"0 0, 0 10px, 10px -10px, -10px 0px"},children:n.jsx("div",{className:"diagram-canvas",ref:wA,onMouseEnter:()=>ye(!0),onMouseLeave:()=>ye(!1),onDoubleClick:ZA,onMouseDown:u=>Ue(u),onWheel:Ze,style:{width:`${dA.maxX-dA.minX}px`,height:`${dA.maxY-dA.minY}px`,position:"relative",cursor:OA?"grabbing":"grab"},children:n.jsxs("div",{className:"diagram-content",style:{transform:`scale(${lA}) translate(${RA.x}px, ${RA.y}px)`,transformOrigin:"0 0",width:"100%",height:"100%",position:"relative"},children:[s.map(cA),r.map(fA)]})})})]},"editor-tab"):NA==="json"?n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const u=document.createElement("input");u.type="file",u.accept=".json",u.onchange=S,u.click()},className:"import-btn",children:[n.jsx(yn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:XA,onChange:u=>xA(u.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:k,className:"import-btn",children:[n.jsx(ya,{size:16})," Apply JSON"]})]}):n.jsxs("div",{className:"code-editor",children:[n.jsxs("div",{className:"code-actions",children:[n.jsxs("button",{onClick:Le,className:"generate-code-btn",children:[n.jsx(oB,{size:16})," Generate Java Code"]}),n.jsxs("button",{onClick:E,className:"copy-code-btn",children:[n.jsx(wa,{size:16})," Copy Code"]}),n.jsxs("button",{onClick:g,className:"download-code-btn",children:[n.jsx(wn,{size:16})," Download Java File"]})]}),n.jsx("div",{ref:EA,className:"code-display",children:n.jsx("pre",{children:n.jsx("code",{dangerouslySetInnerHTML:{__html:D(X)}})})})]},"code-tab"),LA&&!JA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsxs("h3",{children:["Edit ",LA.classType==="interface"?"Interface":LA.classType==="abstract"?"Abstract Class":"Class",": ",LA.name]}),n.jsx("button",{onClick:hA,className:"modal-close-btn",children:n.jsx(Xa,{size:20})})]}),n.jsx("div",{className:"modal-body",children:n.jsxs("div",{className:"edit-sections-container",children:[n.jsxs("div",{className:"edit-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h4",{children:"Attributes"}),n.jsxs("button",{onClick:()=>yA(LA.id),className:"add-item-btn",children:[n.jsx(rt,{size:12})," Add Attribute"]})]}),n.jsxs("div",{className:"items-list",children:[LA.attributes&&LA.attributes.map((u,w)=>n.jsxs("div",{className:"item-row",onClick:()=>yA(LA.id,w),children:[n.jsxs("div",{className:"item-text",children:[u.visibility," ",u.name," : ",u.type]}),n.jsx("div",{className:"item-actions",children:n.jsx("button",{onClick:Q=>{Q.stopPropagation(),ce(LA.id,w)},className:"delete-btn",children:n.jsx(je,{size:12})})})]},w)),(!LA.attributes||LA.attributes.length===0)&&n.jsx("div",{className:"empty-message",children:"No attributes defined"})]})]}),n.jsxs("div",{className:"edit-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h4",{children:"Methods"}),n.jsxs("button",{onClick:()=>H(LA.id),className:"add-item-btn",children:[n.jsx(rt,{size:12})," Add Method"]})]}),n.jsxs("div",{className:"items-list",children:[LA.methods&&LA.methods.map((u,w)=>n.jsxs("div",{className:"item-row",onClick:()=>H(LA.id,w),children:[n.jsxs("div",{className:`item-text ${u.isAbstract?"italic":""}`,children:[u.visibility," ",u.name," : ",u.returnType,u.isAbstract&&n.jsx("span",{className:"abstract-badge",children:"abstract"})]}),n.jsx("div",{className:"item-actions",children:n.jsx("button",{onClick:Q=>{Q.stopPropagation(),he(LA.id,w)},className:"delete-btn",children:n.jsx(je,{size:12})})})]},w)),(!LA.methods||LA.methods.length===0)&&n.jsx("div",{className:"empty-message",children:"No methods defined"})]})]})]})}),n.jsx("div",{className:"modal-footer",children:n.jsx("button",{onClick:hA,className:"modal-cancel-btn",children:"Close"})})]})}),LA&&JA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:JA==="attribute"?pA>=0?"Edit Attribute":"Add Attribute":pA>=0?"Edit Method":"Add Method"}),n.jsx("button",{onClick:rA,className:"modal-close-btn",children:n.jsx(Xa,{size:20})})]}),n.jsx("div",{className:"modal-body",children:JA==="attribute"?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Visibility"}),n.jsx("select",{value:WA.visibility,onChange:u=>U({...WA,visibility:u.target.value}),children:fe.map(u=>n.jsx("option",{value:u.value,children:u.label},u.value))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:WA.name,onChange:u=>U({...WA,name:u.target.value}),placeholder:"Attribute name"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Type"}),n.jsxs("div",{className:"type-select",children:[n.jsx("select",{value:WA.type,onChange:u=>U({...WA,type:u.target.value}),children:te.map(u=>n.jsx("option",{value:u,children:u},u))}),n.jsx("input",{type:"text",value:te.includes(WA.type)?"":WA.type,onChange:u=>U({...WA,type:u.target.value}),placeholder:"Or enter custom type",style:{display:te.includes(WA.type)?"none":"block",marginTop:"8px"}})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Default Value (for code generation)"}),n.jsx("input",{type:"text",value:WA.defaultValue||"",onChange:u=>U({...WA,defaultValue:u.target.value}),placeholder:"Optional default value (e.g., 0, null, 'default')"}),n.jsx("div",{className:"help-text",children:"This value will be used in code generation but won't be shown in the diagram"})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Visibility"}),n.jsx("select",{value:J.visibility,onChange:u=>$({...J,visibility:u.target.value}),children:fe.map(u=>n.jsx("option",{value:u.value,children:u.label},u.value))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:J.name,onChange:u=>$({...J,name:u.target.value}),placeholder:"Method name (include parentheses)"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Return Type"}),n.jsxs("div",{className:"type-select",children:[n.jsx("select",{value:J.returnType,onChange:u=>$({...J,returnType:u.target.value}),children:te.map(u=>n.jsx("option",{value:u,children:u},u))}),n.jsx("input",{type:"text",value:te.includes(J.returnType)?"":J.returnType,onChange:u=>$({...J,returnType:u.target.value}),placeholder:"Or enter custom type",style:{display:te.includes(J.returnType)?"none":"block",marginTop:"8px"}})]})]}),(LA.classType==="abstract"||LA.classType==="interface")&&n.jsx("div",{className:"form-group",children:n.jsxs("label",{className:"checkbox-label",children:[n.jsx("input",{type:"checkbox",checked:J.isAbstract||!1,onChange:u=>$({...J,isAbstract:u.target.checked})}),n.jsx("span",{children:"Abstract Method"})]})})]})}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:rA,className:"modal-cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:JA==="attribute"?q:jA,disabled:JA==="attribute"?!WA.name:!J.name,className:"modal-save-btn",children:"Save"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .class-diagram-maker {
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
          padding: 16px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
        }
        
        .toolbar h2 {
          margin: 0 16px;
          font-size: 20px;
          color: #1e293b;
        }
        
        .spacer {
          flex: 1;
        }
        
        .toolbar-controls {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .generate-code-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: #10B981;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .generate-code-btn:hover {
          background: #059669;
        }

        .code-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          background: white;
          min-height: 0;
          overflow: hidden;
        }
        
        .code-actions {
          display: flex;
          gap: 8px;
          padding: 16px;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
          flex-shrink: 0;
        }
        
        .copy-code-btn, .download-code-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          transition: background-color 0.2s;
        }
        
        .copy-code-btn {
          background: #3B82F6;
          color: white;
        }
        
        .copy-code-btn:hover {
          background: #2563EB;
        }
        
        .download-code-btn {
          background: #8B5CF6;
          color: white;
        }
        
        .download-code-btn:hover {
          background: #7C3AED;
        }
        
        .code-display {
          flex: 1;
          margin: 0;
          padding: 20px;
          background: #1e293b;
          color: #e2e8f0;
          overflow: auto;
          font-family: 'Fira Code', 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
          font-size: 14px;
          line-height: 1.5;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        
        .code-display pre {
          margin: 0;
          padding: 0;
          background: transparent;
          border: none;
        }
        
        .code-display code {
          font-family: inherit;
        }
        
        .code-display .comment {
          color: #94a3b8;
          font-style: italic;
        }
        
        .code-display .keyword {
          color: #f472b6;
          font-weight: bold;
        }
        
        .code-display .type {
          color: #60a5fa;
          font-weight: 500;
        }
        
        .code-display .string {
          color: #34d399;
        }
        
        .code-display .number {
          color: #fbbf24;
        }
        
        .code-display .class-name {
          color: #f59e0b;
          font-weight: bold;
        }
        
        .zoom-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px;
          background: #f1f5f9;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }
        
        .zoom-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: none;
          background: transparent;
          border-radius: 6px;
          cursor: pointer;
          color: #64748b;
          transition: all 0.2s;
        }
        
        .zoom-btn:hover {
          background: #e2e8f0;
          color: #1e293b;
        }
        
        .zoom-btn.reset {
          width: auto;
          padding: 0 12px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .zoom-level {
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
          min-width: 40px;
          text-align: center;
        }
        
        .color-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: #8B5CF6;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .color-btn:hover {
          background: #7C3AED;
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
          color: #EC4899;
          border-bottom-color: #EC4899;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
          min-height: 0;
        }
        
        .diagram-sidebar {
          width: 280px;
          background: white;
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          overflow-x: hidden;
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
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #EC4899;
          box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
        }
        
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }
        
        .checkbox-label input[type="checkbox"] {
          width: auto;
          cursor: pointer;
        }
        
        .checkbox-label span {
          font-size: 14px;
          color: #1e293b;
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
        
        .class-type-badge {
          display: inline-block;
          margin-left: 8px;
          padding: 2px 6px;
          background: #f1f5f9;
          color: #64748b;
          font-size: 10px;
          border-radius: 4px;
          font-weight: 500;
        }
        
        .abstract-badge {
          display: inline-block;
          margin-left: 8px;
          padding: 2px 6px;
          background: #fef3c7;
          color: #92400e;
          font-size: 10px;
          border-radius: 4px;
          font-weight: 500;
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
          flex-shrink: 0;
        }
        
        .delete-btn:hover {
          background: #fecaca;
        }
        
        .diagram-canvas-container {
          position: relative;
          flex: 1;
          overflow: auto;
          min-width: 0;
        }
        
        .diagram-canvas {
          position: relative;
          cursor: grab;
        }
        
        .diagram-canvas:active {
          cursor: grabbing;
        }
        
        .diagram-content {
          position: absolute;
          top: 0;
          left: 0;
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
        
        .stereotype {
          font-size: 11px;
          font-weight: 400;
          margin-bottom: 4px;
          opacity: 0.9;
        }
        
        .class-name {
          font-size: 16px;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .class-name.italic {
          font-style: italic;
        }
        
        .class-content {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        
        .attributes-section, .methods-section {
          display: flex;
          flex-direction: column;
          padding: 3px 0;
        }
        
        .section-divider {
          height: 1px;
          margin: 0 16px;
        }
        
        .class-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 16px;
          margin-bottom: 1px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.15s;
          min-height: 18px;
        }
        
        .class-item:hover {
          background: rgba(236, 72, 153, 0.1);
        }
        
        .item-text {
          flex: 1;
          font-family: 'SF Mono', 'Monaco', 'Cascadia Code', monospace;
          font-size: 12px;
          color: #374151;
          line-height: 1.2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .item-text.italic {
          font-style: italic;
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
          min-height: 0;
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
          overflow: auto;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #EC4899;
          box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
        }
        
        .help-text {
          font-size: 12px;
          color: #64748b;
          margin-top: 4px;
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
          flex-shrink: 0;
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
          min-height: 0;
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
          flex-shrink: 0;
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
      `})]})},cQ=({domainModels:i,onCreateDomainModel:r,onLoadDomainModel:s,onDeleteDomainModel:o})=>{const[d,f]=j.useState(!1);return n.jsxs("div",{className:"domain-model-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(cx,{size:48})}),n.jsx("h2",{children:"Domain Model Designer"}),n.jsx("p",{children:"Model business domain concepts and their relationships"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>f(!0),className:"primary-btn",children:[n.jsx(rt,{size:16})," New Domain Model"]})}),i.length>0&&n.jsxs("div",{className:"model-list",children:[n.jsx("h3",{children:"Your Domain Models"}),i.map(h=>n.jsxs("div",{className:"model-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"model-card-content",children:[n.jsx("div",{className:"model-card-name",children:h.name}),n.jsxs("div",{className:"model-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.entities?.length||0," entities • ",h.relationships?.length||0," relationships"]})]})]}),n.jsxs("div",{className:"model-card-actions",children:[n.jsx("button",{onClick:m=>{m.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(_n,{size:16})}),n.jsx("button",{onClick:m=>{m.stopPropagation(),confirm("Delete this domain model?")&&o(h.id)},className:"delete-btn",children:n.jsx(je,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Domain Model"}),n.jsx("button",{onClick:()=>f(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Model Name"}),n.jsx("input",{type:"text",placeholder:"e.g., E-Commerce Domain Model",id:"modelName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>f(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("modelName").value;h.trim()&&(r(h),f(!1))},className:"create-btn",children:"Create Model"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .domain-model-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
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
          color: #3B82F6;
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
        
        .model-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .model-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .model-card {
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
        
        .model-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .model-card-content {
          flex: 1;
        }
        
        .model-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .model-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .model-card-actions {
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
          border-color: #3B82F6;
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
          background: #3B82F6;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #2563EB;
        }
      `})]})},dQ=({domainModel:i={name:"Sample Domain Model"},entities:r=[],relationships:s=[],onUpdateDomainModel:o=()=>{},onBack:d=()=>{}})=>{const[f,h]=j.useState(""),[m,x]=j.useState(""),[B,C]=j.useState(""),[F,T]=j.useState(""),[oA,eA]=j.useState("association"),[uA,MA]=j.useState("1"),[NA,gA]=j.useState("1"),[XA,xA]=j.useState("editor"),[mA,Y]=j.useState(""),[IA,V]=j.useState(null),[sA,KA]=j.useState({x:0,y:0}),[GA,CA]=j.useState(null),[LA,$A]=j.useState({x:0,y:0}),[JA,G]=j.useState(null),[pA,FA]=j.useState(""),[WA,U]=j.useState(-1),[J,$]=j.useState({name:"",type:"String"}),[lA,QA]=j.useState(1),[RA,K]=j.useState({x:0,y:0}),[OA,HA]=j.useState(!1),[bA,L]=j.useState({x:0,y:0}),X=j.useRef(null),zA=[{header:"#3B82F6",border:"#2563EB",background:"#EFF6FF"},{header:"#6366F1",border:"#4F46E5",background:"#EEF2FF"},{header:"#8B5CF6",border:"#7C3AED",background:"#F5F3FF"},{header:"#06B6D4",border:"#0891B2",background:"#ECFEFF"},{header:"#10B981",border:"#059669",background:"#ECFDF5"},{header:"#F59E0B",border:"#D97706",background:"#FFFBEB"},{header:"#EC4899",border:"#DB2777",background:"#FDF2F8"},{header:"#64748B",border:"#475569",background:"#F8FAFC"},{header:"#EF4444",border:"#DC2626",background:"#FEF2F2"},{header:"#F97316",border:"#EA580C",background:"#FFF7ED"},{header:"#84CC16",border:"#65A30D",background:"#F7FEE7"},{header:"#14B8A6",border:"#0D9488",background:"#F0FDFA"}],wA=["String","Integer","Number","Boolean","Date","DateTime","Money","Text","ID"],EA=["1","*","0..1","1..*","0..*"];j.useEffect(()=>{Y(JSON.stringify({entities:r,relationships:s},null,2))},[r,s]);const nA=()=>zA[Math.floor(Math.random()*zA.length)],ye=()=>{const g=r.map(E=>({...E,colorScheme:nA()}));o({...i,entities:g})},pe=()=>{QA(g=>Math.min(g*1.2,3))},te=()=>{QA(g=>Math.max(g/1.2,.3))},fe=()=>{QA(1),K({x:0,y:0})},ne=(g,E="12px",D="'SF Mono', monospace")=>{const v=document.createElement("canvas").getContext("2d");return v.font=`${E} ${D}`,v.measureText(g).width},me=g=>{const b=ne(g.name,"16px","'Inter', sans-serif")+32;let v=0;g.attributes.forEach(cA=>{const ZA=`${cA.name} : ${cA.type}`,dA=ne(ZA)+32;dA>v&&(v=dA)});const k=Math.max(180,b,v),S=40,z=g.attributes.length>0?g.attributes.length*26+6:0,fA=S+z+4;return{width:Math.min(k,400),height:Math.max(fA,50)}},De=()=>{if(!f.trim())return;const g=nA(),E=me({name:f,attributes:[]}),D=[...r,{id:Date.now(),name:f,attributes:[],x:100+Math.random()*300,y:100+Math.random()*300,width:E.width,height:E.height,colorScheme:g}];o({...i,entities:D}),h("")},Je=g=>{const E=r.find(D=>D.id===g);E&&G(E)},Te=(g,E=-1)=>{const D=r.find(b=>b.id===g);D&&(FA("attribute"),U(E),E>=0?$({...D.attributes[E]}):$({name:"",type:"String"}))},ie=()=>{if(!J.name.trim())return;const g=r.map(D=>{if(D.id===JA.id){const b=[...D.attributes];WA>=0?b[WA]={...J}:b.push({...J});const v={...D,attributes:b},k=me(v);return{...v,width:k.width,height:k.height}}return D});o({...i,entities:g});const E=g.find(D=>D.id===JA.id);E&&G(E),Fe()},Fe=()=>{FA(""),U(-1)},be=()=>{G(null),FA(""),U(-1)},Se=()=>{if(!B||!F)return;const g=r.find(b=>b.id===parseInt(B)),E=r.find(b=>b.id===parseInt(F));if(!g||!E)return;const D=[...s,{id:Date.now(),from:g.id,to:E.id,type:oA,label:m||"",multiplicityFrom:uA,multiplicityTo:NA}];o({...i,relationships:D}),x(""),C(""),T(""),MA("1"),gA("1")},O=g=>{const E=r.filter(b=>b.id!==g),D=s.filter(b=>!(b.from===g||b.to===g));o({...i,entities:E,relationships:D})},yA=(g,E)=>{const D=r.map(v=>{if(v.id===g){const k=v.attributes.filter((_,z)=>z!==E),S={...v,attributes:k},I=me(S);return{...S,width:I.width,height:I.height}}return v});o({...i,entities:D});const b=D.find(v=>v.id===g);b&&G(b)},H=g=>{const E=s.filter(D=>D.id!==g);o({...i,relationships:E})},q=g=>{g.target===X.current&&g.button===0&&(HA(!0),L({x:g.clientX-RA.x,y:g.clientY-RA.y}),g.preventDefault())},jA=g=>{OA&&K({x:g.clientX-bA.x,y:g.clientY-bA.y})},rA=(g,E,D=!1)=>{g.stopPropagation();const b=X.current?.getBoundingClientRect();if(b)if(D)CA(E),$A({x:g.clientX,y:g.clientY});else{V(E);const v=(g.clientX-b.left-RA.x)/lA,k=(g.clientY-b.top-RA.y)/lA;KA({x:v-E.x,y:k-E.y})}},hA=g=>{if(IA){const E=X.current?.getBoundingClientRect();if(!E)return;const D=(g.clientX-E.left-RA.x)/lA,b=(g.clientY-E.top-RA.y)/lA,v=Math.max(0,D-sA.x),k=Math.max(0,b-sA.y),S=r.map(I=>I.id===IA.id?{...I,x:v,y:k}:I);o({...i,entities:S})}else if(GA){const E=g.clientX-LA.x,D=g.clientY-LA.y,b=r.map(v=>{if(v.id===GA.id){const k=Math.max(180,v.width+E/lA),S=Math.max(80,v.height+D/lA);return{...v,width:k,height:S}}return v});o({...i,entities:b}),$A({x:g.clientX,y:g.clientY})}},oe=()=>{V(null),CA(null),HA(!1)};j.useEffect(()=>{if(IA||GA||OA)return document.addEventListener("mousemove",IA||GA?hA:jA),document.addEventListener("mouseup",oe),()=>{document.removeEventListener("mousemove",IA||GA?hA:jA),document.removeEventListener("mouseup",oe)}},[IA,GA,OA,sA,LA,bA,RA,lA]);const ce=(()=>{if(r.length===0)return{minX:0,maxX:1e3,minY:0,maxY:1e3};let g=1/0,E=-1/0,D=1/0,b=-1/0;r.forEach(k=>{g=Math.min(g,k.x),E=Math.max(E,k.x+k.width),D=Math.min(D,k.y),b=Math.max(b,k.y+k.height)});const v=200;return{minX:Math.min(g,0)-v,maxX:Math.max(E,1e3)+v,minY:Math.min(D,0)-v,maxY:Math.max(b,1e3)+v}})(),he=()=>JSON.stringify({entities:r,relationships:s},null,2),ke=()=>{navigator.clipboard.writeText(he())},Ue=()=>{try{const g=JSON.parse(mA);if(Array.isArray(g.entities)&&Array.isArray(g.relationships)){const E=g.entities.map(D=>({...D,...me(D)}));o({...i,entities:E,relationships:g.relationships})}else alert("Invalid JSON format. Expected entities and relationships arrays.")}catch(g){alert("Error parsing JSON: "+g.message)}},_e=g=>{const E=g.target.files[0];if(!E)return;const D=new FileReader;D.onload=b=>{Y(b.target.result)},D.readAsText(E)},We=()=>{if(!X.current)return;let g=1/0,E=-1/0,D=1/0,b=-1/0;if(r.forEach(ZA=>{g=Math.min(g,ZA.x),E=Math.max(E,ZA.x+ZA.width),D=Math.min(D,ZA.y),b=Math.max(b,ZA.y+ZA.height)}),s.forEach(ZA=>{const dA=r.find(w=>w.id===ZA.from),u=r.find(w=>w.id===ZA.to);if(dA&&u){const w={x:dA.x+dA.width/2,y:dA.y+dA.height/2},Q={x:u.x+u.width/2,y:u.y+u.height/2};g=Math.min(g,w.x,Q.x),E=Math.max(E,w.x,Q.x),D=Math.min(D,w.y,Q.y),b=Math.max(b,w.y,Q.y)}}),g===1/0||r.length===0){alert("No diagram content to export");return}const v=40,k=Math.max(0,g-v),S=Math.max(0,D-v),I=E-g+v*2,_=b-D+v*2;X.current.style.transform;const z=document.createElement("div");z.style.width=`${I}px`,z.style.height=`${_}px`,z.style.position="fixed",z.style.top="0",z.style.left="0",z.style.background="#f8fafc",z.style.zIndex="-9999",z.style.overflow="hidden";const fA=X.current.cloneNode(!0),cA=fA.querySelector(".canvas-content");cA&&(cA.style.transform="none",cA.style.transformOrigin="0 0"),fA.style.position="absolute",fA.style.left=`-${k}px`,fA.style.top=`-${S}px`,fA.style.transform="none",fA.style.width=`${ce.maxX-ce.minX}px`,fA.style.height=`${ce.maxY-ce.minY}px`,fA.style.background="#f8fafc",fA.style.overflow="visible",z.appendChild(fA),document.body.appendChild(z),_r(()=>Promise.resolve().then(()=>Rr),void 0).then(ZA=>{ZA.default(z,{backgroundColor:"#f8fafc",scale:2,useCORS:!0,width:I,height:_,scrollX:0,scrollY:0,logging:!1}).then(dA=>{const u=document.createElement("a");u.download=`${i.name||"domain-model"}.png`,u.href=dA.toDataURL("image/png"),u.click(),document.body.removeChild(z)}).catch(dA=>{console.error("Error capturing image:",dA),document.body.removeChild(z)})})},Ze=(g,E)=>{const D={x:g.x+g.width/2,y:g.y+g.height/2},b={x:E.x+E.width/2,y:E.y+E.height/2},v=b.x-D.x,k=b.y-D.y;let S,I;if(Math.abs(v)/g.width>Math.abs(k)/g.height){const _=D.x+(v>0?g.width/2:-g.width/2),z=b.x+(v>0?-E.width/2:E.width/2);S={x:_,y:D.y},I={x:z,y:b.y}}else{const _=D.y+(k>0?g.height/2:-g.height/2),z=b.y+(k>0?-E.height/2:E.height/2);S={x:D.x,y:_},I={x:b.x,y:z}}return{fromPoint:S,toPoint:I}},Ie=(g,E)=>{if(Math.sqrt(Math.pow(E.x-g.x,2)+Math.pow(E.y-g.y,2))<300)return`M${g.x},${g.y} L${E.x},${E.y}`;const b=g.x+(E.x-g.x)*.5,v=g.y+(E.y-g.y)*.5;return Math.abs(E.x-g.x)>Math.abs(E.y-g.y)?`M${g.x},${g.y} L${b},${g.y} L${b},${E.y} L${E.x},${E.y}`:`M${g.x},${g.y} L${g.x},${v} L${E.x},${v} L${E.x},${E.y}`},Le=g=>{const E=g.colorScheme||zA[0];return n.jsxs("div",{className:"entity-box",style:{left:`${g.x}px`,top:`${g.y}px`,width:`${g.width}px`,height:`${g.height}px`,cursor:IA?.id===g.id?"grabbing":"grab",borderColor:E.border,backgroundColor:"white"},onMouseDown:D=>rA(D,g),onDoubleClick:()=>Je(g.id),children:[n.jsx("div",{className:"entity-header",style:{backgroundColor:E.header,color:"white"},children:n.jsx("div",{className:"entity-name",children:g.name})}),n.jsx("div",{className:"entity-content",children:g.attributes.length>0&&n.jsx("div",{className:"attributes-section",children:g.attributes.map((D,b)=>n.jsxs("div",{className:"entity-item",onDoubleClick:v=>{v.stopPropagation(),Te(g.id,b)},children:[n.jsxs("span",{className:"item-text",children:[D.name," : ",D.type]}),n.jsx("button",{onClick:v=>{v.stopPropagation(),yA(g.id,b)},className:"item-delete-btn",children:n.jsx(je,{size:10})})]},b))})}),n.jsx("div",{className:"resize-handle",style:{backgroundColor:E.header},onMouseDown:D=>rA(D,g,!0)})]},g.id)},N=g=>{const E=r.find(fA=>fA.id===g.from),D=r.find(fA=>fA.id===g.to);if(!E||!D)return null;const b={x:E.x,y:E.y,width:E.width,height:E.height},v={x:D.x,y:D.y,width:D.width,height:D.height},{fromPoint:k,toPoint:S}=Ze(b,v),I=Ie(k,S),_=(k.x+S.x)/2,z=(k.y+S.y)/2;return n.jsxs("svg",{className:"relationship-svg",style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:[n.jsxs("defs",{children:[n.jsx("marker",{id:`arrowhead-${g.id}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#475569"})}),n.jsx("marker",{id:`inheritance-${g.id}`,markerWidth:"12",markerHeight:"10",refX:"11",refY:"5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"white",stroke:"#475569",strokeWidth:"1"})}),n.jsx("marker",{id:`diamond-${g.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"#475569"})}),n.jsx("marker",{id:`diamond-empty-${g.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"white",stroke:"#475569",strokeWidth:"1"})})]}),(()=>{const cA=(()=>{switch(g.type){case"inheritance":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#inheritance-${g.id})`};case"realization":return{stroke:"#475569",strokeWidth:2,strokeDasharray:"5,5",markerEnd:`url(#inheritance-${g.id})`};case"dependency":return{stroke:"#475569",strokeWidth:1,strokeDasharray:"8,4",markerEnd:`url(#arrowhead-${g.id})`};case"aggregation":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-empty-${g.id})`};case"composition":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-${g.id})`};case"navigable":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#arrowhead-${g.id})`};default:return{stroke:"#475569",strokeWidth:2}}})();return n.jsxs(n.Fragment,{children:[n.jsx("path",{d:I,fill:"none",...cA}),g.label&&n.jsxs("g",{children:[n.jsx("rect",{x:_-g.label.length*4,y:z-8,width:g.label.length*8,height:16,fill:"white",stroke:"#e2e8f0",rx:"2"}),n.jsx("text",{x:_,y:z+4,textAnchor:"middle",fontSize:"11",fill:"#475569",fontWeight:"500",children:g.label})]}),n.jsxs("g",{children:[n.jsx("text",{x:k.x+(S.x-k.x)*.25,y:k.y+(S.y-k.y)*.25-5,textAnchor:"middle",fontSize:"10",fill:"#475569",fontWeight:"500",children:g.multiplicityFrom||"1"}),n.jsx("text",{x:k.x+(S.x-k.x)*.75,y:k.y+(S.y-k.y)*.75-5,textAnchor:"middle",fontSize:"10",fill:"#475569",fontWeight:"500",children:g.multiplicityTo||"1"})]})]})})()]},g.id)},SA=g=>{if(g.target===X.current){const E=X.current.getBoundingClientRect(),D=(g.clientX-E.left-RA.x)/lA,b=(g.clientY-E.top-RA.y)/lA,v=prompt("Enter entity name:");if(v&&v.trim()){const k=nA(),S=me({name:v.trim(),attributes:[]}),I=[...r,{id:Date.now(),name:v.trim(),attributes:[],x:D-S.width/2,y:b-40,width:S.width,height:S.height,colorScheme:k}];o({...i,entities:I})}}},TA=g=>{if(XA==="editor"&&g.ctrlKey){g.preventDefault();const E=g.deltaY>0?.9:1.1;QA(D=>Math.max(.3,Math.min(3,D*E)))}};return n.jsxs("div",{className:"domain-model-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(_n,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"canvas-controls",children:[n.jsx("button",{onClick:ye,className:"control-btn",title:"Randomize Colors",children:n.jsx(px,{size:16})}),n.jsx("button",{onClick:te,className:"control-btn",title:"Zoom Out",children:n.jsx(Kr,{size:16})}),n.jsxs("span",{className:"zoom-indicator",children:[Math.round(lA*100),"%"]}),n.jsx("button",{onClick:pe,className:"control-btn",title:"Zoom In",children:n.jsx(Or,{size:16})}),n.jsx("button",{onClick:fe,className:"control-btn",title:"Reset View",children:n.jsx(xx,{size:16})})]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:We,className:"export-btn",children:[n.jsx(Bn,{size:16})," Export Image"]}),n.jsxs("button",{onClick:ke,className:"export-btn",children:[n.jsx(wa,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const g=new Blob([he()],{type:"application/json"}),E=URL.createObjectURL(g),D=document.createElement("a");D.href=E,D.download=`${i.name||"domain-model"}.json`,document.body.appendChild(D),D.click(),document.body.removeChild(D),URL.revokeObjectURL(E)},className:"export-btn",children:[n.jsx(wn,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${XA==="editor"?"active":""}`,onClick:()=>xA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${XA==="json"?"active":""}`,onClick:()=>xA("json"),children:"JSON Editor"})]}),XA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Entities"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:f,onChange:g=>h(g.target.value),placeholder:"New entity name",onKeyPress:g=>g.key==="Enter"&&De()}),n.jsxs("button",{onClick:De,className:"add-btn",children:[n.jsx(rt,{size:16})," Add Entity"]})]}),n.jsx("div",{className:"entity-list",children:r.map(g=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-name",children:g.name}),n.jsx("button",{onClick:()=>O(g.id),className:"delete-btn",children:n.jsx(je,{size:14})})]},g.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Relationships"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:m,onChange:g=>x(g.target.value),placeholder:"Relationship label (optional)",onKeyPress:g=>g.key==="Enter"&&Se()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"From Entity"}),n.jsxs("select",{value:B||"",onChange:g=>C(g.target.value),children:[n.jsx("option",{value:"",children:"Select entity"}),r.map(g=>n.jsx("option",{value:g.id,children:g.name},g.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"To Entity"}),n.jsxs("select",{value:F||"",onChange:g=>T(g.target.value),children:[n.jsx("option",{value:"",children:"Select entity"}),r.map(g=>n.jsx("option",{value:g.id,children:g.name},g.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Relationship Type"}),n.jsxs("select",{value:oA,onChange:g=>eA(g.target.value),children:[n.jsx("option",{value:"association",children:"Association"}),n.jsx("option",{value:"navigable",children:"Navigable Association"}),n.jsx("option",{value:"inheritance",children:"Inheritance"}),n.jsx("option",{value:"realization",children:"Realization"}),n.jsx("option",{value:"dependency",children:"Dependency"}),n.jsx("option",{value:"aggregation",children:"Aggregation"}),n.jsx("option",{value:"composition",children:"Composition"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Multiplicity (From)"}),n.jsx("select",{value:uA,onChange:g=>MA(g.target.value),children:EA.map(g=>n.jsx("option",{value:g,children:g},g))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Multiplicity (To)"}),n.jsx("select",{value:NA,onChange:g=>gA(g.target.value),children:EA.map(g=>n.jsx("option",{value:g,children:g},g))})]}),n.jsxs("button",{onClick:Se,disabled:!B||!F,className:"add-btn",children:[n.jsx(ro,{size:16})," Add Relationship"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Current Relationships"}),n.jsx("div",{className:"relationship-list",children:s.map(g=>{const E=r.find(b=>b.id===g.from),D=r.find(b=>b.id===g.to);return!E||!D?null:n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-name",children:[E.name," → ",D.name,n.jsxs("div",{className:"item-type",children:["(",g.type,")"]}),(g.multiplicityFrom!=="1"||g.multiplicityTo!=="1")&&n.jsxs("div",{className:"item-multiplicity",children:[g.multiplicityFrom," to ",g.multiplicityTo]})]}),g.label&&n.jsx("div",{className:"item-label",children:g.label}),n.jsx("button",{onClick:()=>H(g.id),className:"delete-btn",children:n.jsx(je,{size:14})})]},g.id)})})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Domain Model Guide"}),n.jsxs("div",{className:"notation-guide",children:[n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Canvas Controls:"}),n.jsx("div",{children:"🎨 Randomize all colors"}),n.jsx("div",{children:"🔍 Zoom in/out"}),n.jsx("div",{children:"↺ Reset view"}),n.jsx("div",{children:"🖱️ Drag to pan canvas"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Relationship Types:"}),n.jsx("div",{children:"Association: Solid line"}),n.jsx("div",{children:"Navigable: Solid line with arrow"}),n.jsx("div",{children:"Inheritance: Solid line with triangle"}),n.jsx("div",{children:"Realization: Dashed line with triangle"}),n.jsx("div",{children:"Dependency: Dashed line with arrow"}),n.jsx("div",{children:"Aggregation: Line with empty diamond"}),n.jsx("div",{children:"Composition: Line with filled diamond"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Multiplicity:"}),n.jsx("div",{children:"1: Exactly one"}),n.jsx("div",{children:"*: Zero or more"}),n.jsx("div",{children:"0..1: Zero or one"}),n.jsx("div",{children:"1..*: One or more"}),n.jsx("div",{children:"0..*: Zero or more"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Quick Tips:"}),n.jsx("div",{children:"• Double-click canvas to add entity"}),n.jsx("div",{children:"• Double-click entity to edit"}),n.jsx("div",{children:"• Drag to move entities"}),n.jsx("div",{children:"• Drag resize handle to resize"}),n.jsx("div",{children:"• Use mouse wheel to zoom"})]})]})]})]}),n.jsx("div",{className:"diagram-canvas-container",style:{position:"relative",flex:1,overflow:"auto",background:"linear-gradient(45deg, #f1f5f9 25%, transparent 25%), linear-gradient(-45deg, #f1f5f9 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f1f5f9 75%), linear-gradient(-45deg, transparent 75%, #f1f5f9 75%)",backgroundSize:"20px 20px",backgroundPosition:"0 0, 0 10px, 10px -10px, -10px 0px"},children:n.jsx("div",{className:"diagram-canvas",ref:X,onDoubleClick:SA,onMouseDown:q,onWheel:TA,style:{width:`${ce.maxX-ce.minX}px`,height:`${ce.maxY-ce.minY}px`,position:"relative",cursor:OA?"grabbing":"grab"},children:n.jsxs("div",{className:"canvas-content",style:{transform:`scale(${lA}) translate(${RA.x}px, ${RA.y}px)`,transformOrigin:"0 0",width:"100%",height:"100%",position:"relative"},children:[s.map(N),r.map(Le)]})})})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const g=document.createElement("input");g.type="file",g.accept=".json",g.onchange=_e,g.click()},className:"import-btn",children:[n.jsx(yn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:mA,onChange:g=>Y(g.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:Ue,className:"import-btn",children:[n.jsx(ya,{size:16})," Apply JSON"]})]}),JA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsxs("h3",{children:["Edit Entity: ",JA.name]}),n.jsx("button",{onClick:be,className:"modal-close-btn",children:n.jsx(Xa,{size:20})})]}),n.jsx("div",{className:"modal-body",children:n.jsx("div",{className:"edit-sections-container",children:n.jsxs("div",{className:"edit-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h4",{children:"Attributes"}),n.jsxs("button",{onClick:()=>Te(JA.id),className:"add-item-btn",children:[n.jsx(rt,{size:12})," Add Attribute"]})]}),n.jsxs("div",{className:"items-list",children:[JA.attributes.map((g,E)=>n.jsxs("div",{className:"item-row",onClick:()=>Te(JA.id,E),children:[n.jsxs("div",{className:"item-text",children:[g.name," : ",g.type]}),n.jsx("div",{className:"item-actions",children:n.jsx("button",{onClick:D=>{D.stopPropagation(),yA(JA.id,E)},className:"delete-btn",children:n.jsx(je,{size:12})})})]},E)),JA.attributes.length===0&&n.jsx("div",{className:"empty-message",children:"No attributes defined"})]})]})})}),n.jsx("div",{className:"modal-footer",children:n.jsx("button",{onClick:be,className:"modal-cancel-btn",children:"Close"})})]})}),JA&&pA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:pA==="attribute"?WA>=0?"Edit Attribute":"Add Attribute":""}),n.jsx("button",{onClick:Fe,className:"modal-close-btn",children:n.jsx(Xa,{size:20})})]}),n.jsx("div",{className:"modal-body",children:pA==="attribute"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:J.name,onChange:g=>$({...J,name:g.target.value}),placeholder:"Attribute name"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Type"}),n.jsxs("div",{className:"type-select",children:[n.jsx("select",{value:J.type,onChange:g=>$({...J,type:g.target.value}),children:wA.map(g=>n.jsx("option",{value:g,children:g},g))}),n.jsx("input",{type:"text",value:wA.includes(J.type)?"":J.type,onChange:g=>$({...J,type:g.target.value}),placeholder:"Or enter custom type",style:{display:wA.includes(J.type)?"none":"block",marginTop:"8px"}})]})]})]})}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:Fe,className:"modal-cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:ie,disabled:!J.name,className:"modal-save-btn",children:"Save"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .domain-model-maker {
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
        
        .canvas-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-right: 16px;
          padding: 8px;
          background: #f1f5f9;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }
        
        .control-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
          background: white;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .control-btn:hover {
          background: #e2e8f0;
          color: #1e293b;
        }
        
        .zoom-indicator {
          font-size: 12px;
          font-weight: 500;
          color: #64748b;
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
          background: #3B82F6;
          color: white;
          border: 1px solid #3B82F6;
        }
        
        .export-btn:hover {
          background: #2563EB;
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
          color: #3B82F6;
          border-bottom-color: #3B82F6;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        .diagram-sidebar {
          width: 280px;
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
          border-color: #3B82F6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .add-btn {
          width: 100%;
          padding: 8px 16px;
          background: #3B82F6;
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
          background: #2563EB;
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
        
        .entity-list,
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
        
        .item-multiplicity {
          font-size: 11px;
          color: #9ca3af;
          margin-top: 1px;
          font-style: italic;
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
        
        .diagram-canvas-container {
          flex: 1;
          background: #f8fafc;
          position: relative;
          overflow: auto;
        }
        
        .diagram-canvas {
          position: relative;
          cursor: grab;
        }
        
        .diagram-canvas:active {
          cursor: grabbing;
        }
        
        .canvas-content {
          position: relative;
          background: 
            radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0);
          background-size: 20px 20px;
        }
        
        .entity-box {
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
        
        .entity-box:hover {
          box-shadow: 0 12px 35px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.06);
        }
        
        .entity-header {
          padding: 12px 16px;
          text-align: center;
          font-weight: 700;
          position: relative;
          border-radius: 6px 6px 0 0;
        }
        
        .entity-name {
          font-size: 16px;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .entity-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 0px 0;
        }
        
        .attributes-section {
          display: flex;
          flex-direction: column;
        }
        
        .entity-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 8px;
          padding-right: 0px;
          margin-bottom: 2px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.15s;
          min-height: 22px;
        }
        
        .entity-item:hover {
          background: rgba(59, 130, 246, 0.1);
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
          padding-left: 0;
          border-radius: 3px;
          margin-left: 8px;
          transition: all 0.15s;
        }
        
        .entity-item:hover .item-delete-btn {
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
        
        .entity-box:hover .resize-handle {
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
          background: #3B82F6;
          color: white;
          transition: background-color 0.2s;
        }
        
        .import-btn:hover {
          background: #2563EB;
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
          border-color: #3B82F6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
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
          background: #3B82F6;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        
        .modal-save-btn:hover {
          background: #2563EB;
        }
        
        .modal-save-btn:disabled {
          background: #cbd5e1;
          cursor: not-allowed;
        }
        
        .type-select {
          position: relative;
        }
        
        /* Entity Editor Modal Styles */
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
          background: #3B82F6;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .add-item-btn:hover {
          background: #2563EB;
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
      `})]})},uQ=({mindMaps:i,onCreateMindMap:r,onLoadMindMap:s,onDeleteMindMap:o})=>{const[d,f]=j.useState(!1);return n.jsxs("div",{className:"mindmap-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(ux,{size:48})}),n.jsx("h2",{children:"Mind Map Designer"}),n.jsx("p",{children:"Visualize your ideas and concepts in an intuitive hierarchical structure"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>f(!0),className:"primary-btn",children:[n.jsx(rt,{size:16})," New Mind Map"]})}),i.length>0&&n.jsxs("div",{className:"mindmap-list",children:[n.jsx("h3",{children:"Your Mind Maps"}),i.map(h=>n.jsxs("div",{className:"mindmap-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"mindmap-card-content",children:[n.jsx("div",{className:"mindmap-card-name",children:h.name}),n.jsxs("div",{className:"mindmap-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.nodes?.length||1," nodes"]})]})]}),n.jsxs("div",{className:"mindmap-card-actions",children:[n.jsx("button",{onClick:m=>{m.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Gn,{size:16})}),n.jsx("button",{onClick:m=>{m.stopPropagation(),confirm("Delete this mind map?")&&o(h.id)},className:"delete-btn",children:n.jsx(je,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Mind Map"}),n.jsx("button",{onClick:()=>f(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Mind Map Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Project Planning",id:"mindMapName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>f(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("mindMapName").value;h.trim()&&(r(h),f(!1))},className:"create-btn",children:"Create Mind Map"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .mindmap-main {
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
        
        .mindmap-list {
          width: 100%;
          max-width: 800px;
          margin-top: 20px;
        }
        
        .mindmap-list h3 {
          text-align: left;
          font-size: 20px;
          margin-bottom: 16px;
          font-weight: 600;
          opacity: 0.9;
        }
        
        .mindmap-card {
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
        
        .mindmap-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }
        
        .mindmap-card-content {
          flex: 1;
        }
        
        .mindmap-card-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        
        .mindmap-card-meta {
          font-size: 14px;
          opacity: 0.8;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .mindmap-card-actions {
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
      `})]})},fQ=({mindMap:i,nodes:r=[],connections:s=[],onUpdateMindMap:o,onBack:d})=>{const f=j.useRef(null),[h,m]=j.useState(!1),[x,B]=j.useState(null),[C,F]=j.useState(null),[T,oA]=j.useState(""),[eA,uA]=j.useState(""),[MA,NA]=j.useState(""),[gA,XA]=j.useState(""),[xA,mA]=j.useState(1),[Y,IA]=j.useState({x:0,y:0}),[V,sA]=j.useState(!1),[KA,GA]=j.useState({x:0,y:0}),[CA,LA]=j.useState(null),[$A,JA]=j.useState(!1),[G,pA]=j.useState(!0),[FA,WA]=j.useState(null),[U,J]=j.useState("editor"),[$,lA]=j.useState(""),[QA,RA]=j.useState(!0),[K,OA]=j.useState(null),[HA,bA]=j.useState("text"),[L,X]=j.useState(null),[zA,wA]=j.useState(null),[EA,nA]=j.useState([]),[ye,pe]=j.useState("normal"),[te,fe]=j.useState(null),ne=20,me=200,De=15,Je=25,Te=100,[ie,Fe]=j.useState(r.length>0?r:[{id:1,text:"Origin",subtext:"Click to edit subtext",description:"This is the central idea of your mind map. You can add descriptions to provide more details.",imageUrl:"",x:400,y:300,level:0,parentId:null,isRoot:!0,color:"#ff6b6b",width:160,height:80}]);j.useEffect(()=>{r.length>0&&Fe(r)},[r]),j.useEffect(()=>{lA(JSON.stringify({nodes:ie},null,2))},[ie]),j.useEffect(()=>{U==="batch"&&nA(ie.map(u=>({id:u.id,text:u.text,subtext:u.subtext||"",description:u.description||"",imageUrl:u.imageUrl||""})))},[U,ie]),j.useEffect(()=>{const u=w=>{U==="editor"&&(w.key==="ArrowLeft"?(w.preventDefault(),IA(Q=>({x:Q.x+Te,y:Q.y}))):w.key==="ArrowRight"?(w.preventDefault(),IA(Q=>({x:Q.x-Te,y:Q.y}))):w.key==="ArrowUp"?(w.preventDefault(),IA(Q=>({x:Q.x,y:Q.y+Te}))):w.key==="ArrowDown"&&(w.preventDefault(),IA(Q=>({x:Q.x,y:Q.y-Te}))))};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[U]);const be=u=>{const w=u.replace("#",""),Q=parseInt(w.substr(0,2),16),W=parseInt(w.substr(2,2),16),P=parseInt(w.substr(4,2),16);return(.299*Q+.587*W+.114*P)/255>.5?"#000000":"#ffffff"},Se=(u,w)=>u.length<=w?u:u.substring(0,w-3)+"...",O=(u,w="",Q=!1)=>{const vA=Se(u,De),_A=w?Se(w,Je):"",DA=vA.length*8,ee=_A?_A.length*8*.8:0,VA=Math.max(DA,ee);let ue=Math.max(160,VA+40),ve=25;return Q&&(ve+=20),w&&(ve+=20),{width:Math.min(ue,300),height:Math.min(ve,200)}},yA=u=>ie.filter(w=>w.parentId===u),H=u=>{const w=yA(u);let Q=[...w];return w.forEach(W=>{Q=[...Q,...H(W.id)]}),Q},q=(u,w,Q,W=!0)=>{Fe(P=>{const vA=[...P],_A=vA.find(ve=>ve.id===u);if(!_A)return P;const DA=P.find(ve=>ve.id===u),ee=w-DA.x,VA=Q-DA.y;_A.x=w,_A.y=Q;const ue=(ve,At,ut)=>{vA.filter(nt=>nt.parentId===ve).forEach(nt=>{nt.x+=At,nt.y+=ut,ue(nt.id,At,ut)})};return W&&ue(u,ee,VA),vA})},jA=()=>{Fe(u=>{const w=[...u],Q=w.find(vA=>vA.isRoot);if(!Q)return u;const W=vA=>{const _A=w.find(VA=>VA.id===vA),DA=w.filter(VA=>VA.parentId===vA);if(DA.length===0)return _A.height;let ee=0;return DA.forEach((VA,ue)=>{ee+=W(VA.id),ue<DA.length-1&&(ee+=ne)}),Math.max(ee,_A.height)},P=(vA,_A,DA,ee=null)=>{const VA=w.find(Ne=>Ne.id===vA);if(!VA)return;VA.x=_A,VA.y=DA;const ue=w.filter(Ne=>Ne.parentId===vA);if(ue.length===0)return;let ve=[],At=[];VA.isRoot?ue.forEach(Ne=>{Ne.x<VA.x?ve.push(Ne):At.push(Ne)}):ee==="right"?At=ue:ve=ue;const ut=(Ne,nt)=>{if(Ne.length===0)return;const pt=Ne.map(Bt=>W(Bt.id)),Ca=pt.reduce((Bt,Va)=>Bt+Va,0)+(Ne.length-1)*ne;let sn=DA-Ca/2;Ne.forEach((Bt,Va)=>{const so=pt[Va],Ja=sn+so/2,lo=nt==="left"?_A-me:_A+me;P(Bt.id,lo,Ja,nt),sn+=so+ne})};ut(ve,"left"),ut(At,"right")};return P(Q.id,Q.x,Q.y),w})},rA=(u,w)=>{if(!u||!w)return"";const Q=(u.x+u.width)*xA+Y.x,W=(u.y+u.height/2)*xA+Y.y,P=w.x*xA+Y.x,vA=(w.y+w.height/2)*xA+Y.y,_A=P-Q,ee=Math.abs(_A)*.5,VA=Q+ee,ue=W,ve=P-ee;return`M ${Q} ${W} C ${VA} ${ue}, ${ve} ${vA}, ${P} ${vA}`},hA=(u,w,Q)=>{for(const P of ie){if(P.id===u.id||H(u.id).some(ee=>ee.id===P.id))continue;const vA=P.x*xA+Y.x,_A=P.y*xA+Y.y;if(Math.sqrt(Math.pow(w-(vA+P.width*xA/2),2)+Math.pow(Q-(_A+P.height*xA/2),2))<80*xA)return P}return null},oe=(u,w)=>{if(u.stopPropagation(),u.detail===1){B(w.id),LA(w),sA(!0);const Q=f.current.getBoundingClientRect();GA({x:u.clientX-Q.left-Y.x-w.x*xA,y:u.clientY-Q.top-Y.y-w.y*xA})}},xe=u=>{u.target===f.current&&(B(null),JA(!0),GA({x:u.clientX-Y.x,y:u.clientY-Y.y}))},ce=j.useCallback(u=>{if(V&&CA){const w=f.current.getBoundingClientRect(),Q=(u.clientX-w.left-Y.x-KA.x)/xA,W=(u.clientY-w.top-Y.y-KA.y)/xA,P=hA(CA,u.clientX-w.left,u.clientY-w.top);WA(P),q(CA.id,Q,W,!0)}else $A&&IA({x:u.clientX-KA.x,y:u.clientY-KA.y})},[V,CA,KA,xA,Y,$A]),he=j.useCallback(()=>{V&&CA&&(FA&&Fe(u=>u.map(w=>w.id===CA.id?{...w,parentId:FA.id,level:FA.level+1,color:FA.level+1===1?"#4ecdc4":"#95e1d3"}:w)),setTimeout(()=>{jA()},50)),sA(!1),LA(null),JA(!1),WA(null)},[V,CA,FA]);j.useEffect(()=>(document.addEventListener("mousemove",ce),document.addEventListener("mouseup",he),()=>{document.removeEventListener("mousemove",ce),document.removeEventListener("mouseup",he)}),[ce,he]);const ke=(u,w="right")=>{const Q=ie.find(ve=>ve.id===u);if(!Q)return;const W=ie.find(ve=>ve.isRoot);let P;Q.isRoot?P=w==="right":(P=Q.x>W.x,w=P?"right":"left");const vA=O("New Node","Add subtext here"),_A=yA(u),DA=Q.x+(P?me:-me),ee=Q.y+_A.length*(vA.height+ne),VA={id:Date.now(),text:"New Node",subtext:"Add subtext here",description:"",imageUrl:"",x:DA,y:ee,level:Q.level+1,parentId:u,isRoot:!1,color:Q.level+1===1?"#4ecdc4":"#95e1d3",...vA},ue=[...ie,VA];Fe(ue),B(VA.id),o({...i,nodes:ue}),setTimeout(()=>{jA()},50)},Ue=u=>{const w=ie.find(_A=>_A.id===u);if(w?.isRoot)return;const Q=H(u),P=[w,...Q].map(_A=>_A.id),vA=ie.filter(_A=>!P.includes(_A.id));Fe(vA),B(null),o({...i,nodes:vA}),setTimeout(()=>{jA()},50)},_e=u=>{F(u.id),oA(u.text),uA(u.subtext||""),NA(u.description||""),XA(u.imageUrl||""),bA("text")},We=(u,w,Q=null,W=null,P=null)=>{if(!w.trim())return;const vA=ie.map(_A=>{if(_A.id===u){const DA={..._A,text:w,subtext:Q!==null?Q:_A.subtext,description:W!==null?W:_A.description,imageUrl:P!==null?P:_A.imageUrl};return{...DA,...O(w,DA.subtext,DA.isRoot)}}return _A});Fe(vA),F(null),oA(""),uA(""),NA(""),XA(""),o({...i,nodes:vA})},Ze=(u,w)=>{const Q=ie.map(W=>W.id===u?{...W,imageUrl:w}:W);Fe(Q),X(null),o({...i,nodes:Q})},Ie=(u,w)=>{w&&(w.stopPropagation(),w.preventDefault()),Ze(u,""),wA(null)},Le=()=>mA(u=>Math.min(u*1.2,3)),N=()=>mA(u=>Math.max(u/1.2,.3)),SA=()=>{mA(1),IA({x:0,y:0})},TA=()=>m(u=>!u),g=()=>RA(u=>!u),E=()=>JSON.stringify({nodes:ie},null,2),D=()=>{navigator.clipboard.writeText(E())},b=()=>{try{const u=JSON.parse($);if(Array.isArray(u.nodes)){const w=u.nodes;Fe(w),o({...i,nodes:w})}else alert("Invalid JSON format. Expected nodes array.")}catch(u){alert("Error parsing JSON: "+u.message)}},v=u=>{const w=u.target.files[0];if(!w)return;const Q=new FileReader;Q.onload=W=>{lA(W.target.result)},Q.readAsText(w)},k=()=>{f.current&&_r(()=>Promise.resolve().then(()=>Rr),void 0).then(u=>{u.default(f.current.parentElement,{backgroundColor:h?"#1f2937":"#ffffff",scale:2,useCORS:!0}).then(w=>{const Q=document.createElement("a");Q.download=`${i.name||"mindmap"}.png`,Q.href=w.toDataURL("image/png"),Q.click()})})},S=()=>h?"#64748b":"#475569",I=(u,w,Q)=>{nA(W=>W.map(P=>P.id===u?{...P,[w]:Q}:P))},_=()=>{const u=ie.map(w=>{const Q=EA.find(W=>W.id===w.id);if(Q){const W={...w,text:Q.text||w.text,subtext:Q.subtext,description:Q.description,imageUrl:Q.imageUrl};return{...W,...O(W.text,W.subtext,W.isRoot)}}return w});Fe(u),J("editor"),o({...i,nodes:u})},z=()=>{const u=ie.find(W=>W.isRoot);if(!u)return ie;const w=[],Q=(W,P=0)=>{const vA=ie.find(DA=>DA.id===W);if(!vA)return;w.push({...vA,hierarchyLevel:P}),ie.filter(DA=>DA.parentId===W).forEach(DA=>{Q(DA.id,P+1)})};return Q(u.id),w},fA=u=>{const w=[];let Q=ie.find(W=>W.id===u);for(;Q;)w.unshift(Q),Q.parentId?Q=ie.find(W=>W.id===Q.parentId):Q=null;return w},cA=()=>{switch(ye){case"hierarchy":return z();case"selected":return te?fA(te):[];default:return ie}},ZA=u=>{const w=[];let Q=20;u.isRoot&&(Q+=7);const W=be(u.color),P=Se(u.text,De);if(w.push(n.jsx("text",{x:u.width/2,y:Q,textAnchor:"middle",fill:W,fontSize:"14",fontWeight:"600",style:{pointerEvents:"none"},children:P},"main-text")),Q+=15,u.subtext){const vA=Se(u.subtext,Je);w.push(n.jsx("text",{x:u.width/2,y:Q,textAnchor:"middle",fill:W,fontSize:"11",fontStyle:"italic",opacity:"0.8",style:{pointerEvents:"none"},children:vA},"subtext")),Q+=15}return u.description&&w.push(n.jsxs("g",{children:[n.jsx("circle",{cx:u.width-12,cy:12,r:8,fill:"#f59e0b"}),n.jsx("text",{x:u.width-12,y:16,textAnchor:"middle",fill:"white",fontSize:"8",fontWeight:"bold",style:{pointerEvents:"none"},children:"i"})]},"desc-indicator")),w},dA=u=>{if(!u.imageUrl||!QA||zA!==u.id)return null;const w=80,Q=(u.x+u.width/2-w/2)*xA+Y.x,W=(u.y-w-15)*xA+Y.y;return n.jsxs("g",{children:[n.jsx("rect",{x:Q-5,y:W-5,width:w+10,height:w+10,rx:"10",fill:"white",stroke:"#e2e8f0",strokeWidth:"2",filter:"url(#shadow)"}),n.jsx("image",{href:u.imageUrl,x:Q,y:W,width:w,height:w,preserveAspectRatio:"xMidYMid slice",clipPath:`url(#imageClip-${u.id})`,onError:P=>{P.target.style.display="none"}}),n.jsx("circle",{cx:Q+w-5,cy:W+5,r:10,fill:"#ef4444",stroke:"white",strokeWidth:"2",style:{cursor:"pointer"},onMouseDown:P=>Ie(u.id,P)}),n.jsx("text",{x:Q+w-5,y:W+9,textAnchor:"middle",fill:"white",fontSize:"10",fontWeight:"bold",style:{pointerEvents:"none"},children:"×"}),n.jsx("defs",{children:n.jsx("clipPath",{id:`imageClip-${u.id}`,children:n.jsx("rect",{x:Q,y:W,width:w,height:w,rx:"8"})})})]},`image-hover-${u.id}`)};return n.jsxs("div",{className:`mindmap-maker ${h?"dark":"light"}`,children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(_n,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:k,className:"export-btn",children:[n.jsx(Bn,{size:16})," Export Image"]}),n.jsxs("button",{onClick:D,className:"export-btn",children:[n.jsx(wa,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const u=new Blob([E()],{type:"application/json"}),w=URL.createObjectURL(u),Q=document.createElement("a");Q.href=w,Q.download=`${i.name||"mindmap"}.json`,document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),URL.revokeObjectURL(w)},className:"export-btn",children:[n.jsx(wn,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${U==="editor"?"active":""}`,onClick:()=>J("editor"),children:"Mind Map Editor"}),n.jsx("button",{className:`tab ${U==="json"?"active":""}`,onClick:()=>J("json"),children:"JSON Editor"}),n.jsx("button",{className:`tab ${U==="batch"?"active":""}`,onClick:()=>J("batch"),children:"Batch Edit"})]}),U==="editor"?n.jsxs("div",{className:"mindmap-container",children:[G&&n.jsx("div",{className:"top-toolbar",children:n.jsxs("div",{className:"toolbar-section",children:[n.jsx("button",{className:"toolbar-btn",onClick:TA,title:h?"Light Mode":"Dark Mode",children:h?n.jsx(mx,{size:18}):n.jsx(hx,{size:18})}),n.jsx("button",{className:"toolbar-btn",title:"Auto Align",onClick:jA,children:n.jsx(Aw,{size:18})}),n.jsx("button",{className:`toolbar-btn ${QA?"active":""}`,onClick:g,title:QA?"Hide Images":"Show Images",children:n.jsx(Bn,{size:18})}),n.jsx("button",{className:"toolbar-btn",onClick:()=>J("batch"),title:"Batch Edit Mode",children:n.jsx(jB,{size:18})})]})}),n.jsxs("svg",{ref:f,className:"canvas",width:"100%",height:"100%",onMouseDown:xe,children:[n.jsxs("defs",{children:[n.jsxs("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"coloredBlur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),n.jsx("filter",{id:"shadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:n.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodOpacity:"0.3"})}),n.jsxs("filter",{id:"connectionGlow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{stdDeviation:"5",result:"coloredBlur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"coloredBlur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),ie.map(u=>{const w=ie.find(Q=>Q.id===u.parentId);return w?n.jsx("path",{d:rA(w,u),stroke:S(),strokeWidth:"2",fill:"none",opacity:"0.8",strokeLinecap:"round",className:"connection-line"},`connection-${u.id}`):null}),FA&&n.jsxs("g",{children:[n.jsxs("circle",{cx:(FA.x+FA.width/2)*xA+Y.x,cy:(FA.y+FA.height/2)*xA+Y.y,r:40,fill:"none",stroke:"#10b981",strokeWidth:"3",strokeDasharray:"5,5",opacity:"0.8",filter:"url(#connectionGlow)",children:[n.jsx("animate",{attributeName:"r",values:"35;45;35",dur:"1s",repeatCount:"indefinite"}),n.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"1s",repeatCount:"indefinite"})]}),n.jsx("text",{x:(FA.x+FA.width/2)*xA+Y.x,y:(FA.y+FA.height/2)*xA+Y.y-50,textAnchor:"middle",fill:"#10b981",fontSize:"12",fontWeight:"bold",children:"Connect as Child"})]}),ie.map(u=>n.jsxs("g",{children:[n.jsxs("g",{transform:`translate(${u.x*xA+Y.x}, ${u.y*xA+Y.y}) scale(${xA})`,className:`node-group ${V&&CA?.id===u.id?"dragging":""}`,onMouseEnter:()=>wA(u.id),onMouseLeave:()=>wA(null),children:[n.jsx("rect",{width:u.width,height:u.height,rx:12,fill:u.color,filter:x===u.id?"url(#glow)":"url(#shadow)",stroke:x===u.id?"#fff":"transparent",strokeWidth:x===u.id?"2":"0",style:{cursor:"grab"},onMouseDown:w=>oe(w,u),onDoubleClick:()=>_e(u)}),ZA(u)]}),x===u.id&&n.jsx(n.Fragment,{children:(()=>{const w=ie.find(P=>P.isRoot),Q=u.isRoot?!0:u.x>=w.x,W=u.isRoot?!0:u.x<w.x;return n.jsxs(n.Fragment,{children:[(u.isRoot||Q)&&n.jsxs("g",{transform:`translate(${(u.x+u.width+15)*xA+Y.x}, ${(u.y+u.height/2-12)*xA+Y.y})`,children:[n.jsx("circle",{cx:12,cy:12,r:12,fill:"#10b981",stroke:"white",strokeWidth:"2",style:{cursor:"pointer"},onClick:()=>ke(u.id,"right")}),n.jsx("text",{x:12,y:16,textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",style:{pointerEvents:"none"},children:"+"})]}),(u.isRoot||W)&&n.jsxs("g",{transform:`translate(${(u.x-35)*xA+Y.x}, ${(u.y+u.height/2-12)*xA+Y.y})`,children:[n.jsx("circle",{cx:12,cy:12,r:12,fill:"#10b981",stroke:"white",strokeWidth:"2",style:{cursor:"pointer"},onClick:()=>ke(u.id,"left")}),n.jsx("text",{x:12,y:16,textAnchor:"middle",fill:"white",fontSize:"12",fontWeight:"bold",style:{pointerEvents:"none"},children:"+"})]})]})})()})]},u.id)),ie.map(u=>dA(u))]}),x&&n.jsxs("div",{className:"floating-actions",children:[n.jsx("button",{className:"action-btn edit-btn",onClick:()=>{const u=ie.find(w=>w.id===x);_e(u)},title:"Edit Node",children:n.jsx(YB,{size:16})}),n.jsx("button",{className:"action-btn image-btn",onClick:()=>{const u=ie.find(w=>w.id===x);X(u)},title:"Add Image URL",children:n.jsx(Bn,{size:16})}),ie.find(u=>u.id===x)?.description&&n.jsx("button",{className:"action-btn desc-btn",onClick:()=>{const u=ie.find(w=>w.id===x);OA(u)},title:"View Description",children:n.jsx(xB,{size:16})}),!ie.find(u=>u.id===x)?.isRoot&&n.jsx("button",{className:"action-btn delete-btn",onClick:()=>Ue(x),title:"Delete Node",children:n.jsx(je,{size:16})})]}),C&&n.jsx("div",{className:"edit-overlay",children:n.jsxs("div",{className:"edit-box",children:[n.jsxs("div",{className:"edit-tabs",children:[n.jsx("button",{className:`edit-tab ${HA==="text"?"active":""}`,onClick:()=>bA("text"),children:"Main Text"}),n.jsx("button",{className:`edit-tab ${HA==="subtext"?"active":""}`,onClick:()=>bA("subtext"),children:"Subtext"}),n.jsx("button",{className:`edit-tab ${HA==="description"?"active":""}`,onClick:()=>bA("description"),children:"Description"}),n.jsx("button",{className:`edit-tab ${HA==="image"?"active":""}`,onClick:()=>bA("image"),children:"Image URL"})]}),n.jsxs("div",{className:"edit-content",children:[HA==="text"&&n.jsxs("div",{className:"input-with-counter",children:[n.jsx("input",{type:"text",value:T,onChange:u=>oA(u.target.value),onKeyDown:u=>{u.key==="Enter"&&We(C,T,eA,MA,gA),u.key==="Escape"&&(F(null),oA(""))},placeholder:"Enter main text...",autoFocus:!0,maxLength:50}),n.jsxs("div",{className:"char-counter",children:[T.length,"/",De]})]}),HA==="subtext"&&n.jsxs("div",{className:"input-with-counter",children:[n.jsx("input",{type:"text",value:eA,onChange:u=>uA(u.target.value),onKeyDown:u=>{u.key==="Enter"&&We(C,T,eA,MA,gA),u.key==="Escape"&&(F(null),uA(""))},placeholder:"Enter subtext...",autoFocus:!0,maxLength:60}),n.jsxs("div",{className:"char-counter",children:[eA.length,"/",Je]})]}),HA==="description"&&n.jsx("textarea",{value:MA,onChange:u=>NA(u.target.value),placeholder:"Enter description...",rows:"4",autoFocus:!0}),HA==="image"&&n.jsxs("div",{className:"image-url-input",children:[n.jsx("input",{type:"url",value:gA,onChange:u=>XA(u.target.value),placeholder:"Enter image URL...",autoFocus:!0}),gA&&n.jsxs("div",{className:"image-preview",children:[n.jsx("img",{src:gA,alt:"Preview",onError:u=>u.target.style.display="none"}),n.jsx("small",{children:"Image Preview"})]})]})]}),n.jsxs("div",{className:"edit-actions",children:[n.jsx("button",{onClick:()=>{F(null),oA(""),uA(""),NA(""),XA("")},className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>We(C,T,eA,MA,gA),className:"save-btn",children:"Save"})]})]})}),L&&n.jsx("div",{className:"dialog-overlay",children:n.jsxs("div",{className:"dialog",children:[n.jsxs("div",{className:"dialog-header",children:[n.jsx("h3",{children:"Add Image URL"}),n.jsx("button",{onClick:()=>X(null),className:"close-btn",children:n.jsx(Xa,{size:20})})]}),n.jsxs("div",{className:"dialog-content",children:[n.jsx("input",{type:"url",placeholder:"Enter image URL...",value:L.imageUrl||"",onChange:u=>{const w=ie.find(Q=>Q.id===L.id);w&&X({...w,imageUrl:u.target.value})},className:"url-input"}),L.imageUrl&&n.jsxs("div",{className:"image-preview",children:[n.jsx("img",{src:L.imageUrl,alt:"Preview",onError:u=>u.target.style.display="none"}),n.jsx("small",{children:"Image Preview"})]}),n.jsxs("div",{className:"dialog-actions",children:[n.jsx("button",{onClick:()=>X(null),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>Ze(L.id,L.imageUrl),className:"save-btn",children:"Save"})]})]})]})}),K&&n.jsx("div",{className:"dialog-overlay",children:n.jsxs("div",{className:"dialog",children:[n.jsxs("div",{className:"dialog-header",children:[n.jsx("h3",{children:K.text}),n.jsx("button",{onClick:()=>OA(null),className:"close-btn",children:n.jsx(Xa,{size:20})})]}),n.jsx("div",{className:"dialog-content",children:n.jsx("p",{children:K.description})})]})}),n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{className:"zoom-btn",onClick:N,title:"Zoom Out",children:"-"}),n.jsxs("span",{className:"zoom-level",children:[Math.round(xA*100),"%"]}),n.jsx("button",{className:"zoom-btn",onClick:Le,title:"Zoom In",children:"+"}),n.jsx("button",{className:"zoom-btn reset",onClick:SA,title:"Reset View",children:"⌂"})]}),n.jsx("div",{className:"scroll-hint",children:"Use arrow keys ← → ↑ ↓ to navigate"})]}):U==="json"?n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const u=document.createElement("input");u.type="file",u.accept=".json",u.onchange=v,u.click()},className:"import-btn",children:[n.jsx(yn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:$,onChange:u=>lA(u.target.value),className:"json-textarea",placeholder:"Paste your JSON data here..."}),n.jsxs("button",{onClick:b,className:"import-btn",children:[n.jsx(ya,{size:16})," Apply JSON"]})]}):n.jsxs("div",{className:"batch-edit-container",children:[n.jsxs("div",{className:"batch-edit-header",children:[n.jsx("h3",{children:"Batch Edit All Nodes"}),n.jsx("p",{children:'Edit multiple nodes at once. Changes are applied when you click "Apply Changes".'}),n.jsxs("div",{className:"batch-display-options",children:[n.jsx("label",{children:"Display Mode:"}),n.jsxs("select",{value:ye,onChange:u=>pe(u.target.value),className:"display-mode-select",children:[n.jsx("option",{value:"normal",children:"All Nodes (Normal)"}),n.jsx("option",{value:"hierarchy",children:"Hierarchical View"}),n.jsx("option",{value:"selected",children:"Selected Node & Parents"})]}),ye==="selected"&&n.jsxs("select",{value:te||"",onChange:u=>fe(u.target.value?parseInt(u.target.value):null),className:"node-select",children:[n.jsx("option",{value:"",children:"Select a node..."}),ie.map(u=>n.jsxs("option",{value:u.id,children:[u.text," (ID: ",u.id,")"]},u.id))]})]})]}),n.jsx("div",{className:"batch-edit-table",children:n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ID"}),n.jsx("th",{children:"Main Text"}),n.jsx("th",{children:"Subtext"}),n.jsx("th",{children:"Description"}),n.jsx("th",{children:"Image URL"})]})}),n.jsx("tbody",{children:cA().map((u,w,Q)=>{const W=w>0?Q[w-1]:null,P=W&&W.parentId===u.parentId,vA=Array.isArray(ie)?ie.find(VA=>VA.id===u.parentId):null;Q.find(VA=>VA.id===u.parentId);const _A=W&&W.id===u.parentId,ee=u.isRoot?0:_A?2:1;return n.jsxs("tr",{"data-node-id":u.id,className:`
                        ${ye==="hierarchy"?`parent-group-${ee}`:""}
                        ${ye==="hierarchy"&&!P?"parent-group-start":""}
                        ${_A?"parent-child-continuous":""}
                      `,children:[n.jsxs("td",{className:"id-cell",children:[u.id,ye==="hierarchy"&&!u.isRoot&&vA&&n.jsxs("div",{className:"parent-link",onClick:()=>{const VA=document.querySelector(`tr[data-node-id="${vA.id}"]`);VA&&(VA.scrollIntoView({behavior:"smooth",block:"center"}),VA.classList.add("highlight-parent"),setTimeout(()=>VA.classList.remove("highlight-parent"),2e3))},title:`Click to jump to parent: ${vA.text}`,children:["← ",vA.text.length>12?vA.text.substring(0,12)+"...":vA.text,_A&&" ✓"]})]}),n.jsxs("td",{children:[ye==="hierarchy"&&n.jsx("span",{className:"hierarchy-indent",style:{marginLeft:`${(u.hierarchyLevel||0)*20}px`},children:u.isRoot?"🌐":"↳"}),n.jsx("input",{type:"text",value:EA.find(VA=>VA.id===u.id)?.text||u.text,onChange:VA=>I(u.id,"text",VA.target.value),className:"batch-input",placeholder:"Main text..."})]}),n.jsx("td",{children:n.jsx("input",{type:"text",value:EA.find(VA=>VA.id===u.id)?.subtext||u.subtext,onChange:VA=>I(u.id,"subtext",VA.target.value),className:"batch-input",placeholder:"Subtext..."})}),n.jsx("td",{children:n.jsx("textarea",{value:EA.find(VA=>VA.id===u.id)?.description||u.description,onChange:VA=>I(u.id,"description",VA.target.value),className:"batch-textarea",placeholder:"Description...",rows:"2"})}),n.jsx("td",{children:n.jsx("input",{type:"url",value:EA.find(VA=>VA.id===u.id)?.imageUrl||u.imageUrl,onChange:VA=>I(u.id,"imageUrl",VA.target.value),className:"batch-input",placeholder:"Image URL..."})})]},u.id)})})]})}),n.jsxs("div",{className:"batch-edit-actions",children:[n.jsx("button",{onClick:()=>J("editor"),className:"cancel-btn",children:"Cancel"}),n.jsxs("button",{onClick:_,className:"save-btn",children:[n.jsx(ya,{size:16})," Apply Changes"]})]})]}),n.jsx("style",{jsx:!0,children:`
        .mindmap-maker {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }
        
        .mindmap-maker.dark {
          background: #1f2937;
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
        
        .dark .toolbar {
          background: #374151;
          border-bottom-color: #4b5563;
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
        
        .dark .toolbar h2 {
          color: #f9fafb;
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
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid;
        }
        
        .back-btn {
          background: #f1f5f9;
          color: #64748b;
          border-color: #e2e8f0;
        }
        
        .back-btn:hover {
          background: #e2e8f0;
        }
        
        .export-btn {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }
        
        .export-btn:hover {
          background: #2563eb;
        }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
          background: white;
        }
        
        .dark .tabs {
          background: #374151;
          border-bottom-color: #4b5563;
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
        
        .dark .tab {
          color: #9ca3af;
        }
        
        .tab.active {
          color: #3b82f6;
          border-bottom-color: #3b82f6;
        }
        
        .mindmap-container {
          flex: 1;
          position: relative;
          overflow: hidden;
          background: #f8fafc;
        }

        .dark .mindmap-container {
          background: #1f2937;
        }

        .top-toolbar {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 16px;
          border-radius: 25px;
          z-index: 1000;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid #e2e8f0;
        }

        .dark .top-toolbar {
          background: rgba(55, 65, 81, 0.95);
          border-color: #4b5563;
        }

        .toolbar-section {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .toolbar-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: none;
          background: transparent;
          border-radius: 18px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #64748b;
        }

        .dark .toolbar-btn {
          color: #9ca3af;
        }

        .toolbar-btn.active {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
        }

        .toolbar-btn:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .canvas {
          cursor: grab;
          width: 100%;
          height: 100%;
        }

        .canvas:active {
          cursor: grabbing;
        }

        .node-group {
          transition: transform 0.05s ease-out;
        }

        .node-group:hover rect {
          filter: url(#glow);
        }

        .node-group.dragging {
          opacity: 0.9;
        }

        .connection-line {
          transition: all 0.1s ease;
        }

        .connection-line:hover {
          stroke-width: 3;
          stroke: #3b82f6;
        }

        .floating-actions {
          position: absolute;
          top: 70px;
          right: 30px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 1001;
        }

        .action-btn {
          width: 48px;
          height: 48px;
          border: none;
          border-radius: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.2s ease;
          color: white;
          font-weight: bold;
        }

        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        .edit-btn {
          background: #3b82f6;
        }

        .image-btn {
          background: #8b5cf6;
        }

        .desc-btn {
          background: #f59e0b;
        }

        .delete-btn {
          background: #ef4444;
        }

        .edit-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }

        .edit-box {
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          min-width: 400px;
          max-width: 500px;
          overflow: hidden;
          background: white;
        }

        .dark .edit-box {
          background: #374151;
        }

        .edit-tabs {
          display: flex;
          border-bottom: 1px solid #e2e8f0;
        }

        .dark .edit-tabs {
          border-bottom-color: #4b5563;
        }

        .edit-tab {
          flex: 1;
          padding: 12px 16px;
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
          color: #64748b;
        }

        .dark .edit-tab {
          color: #9ca3af;
        }

        .edit-tab.active {
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.1);
        }

        .edit-content {
          padding: 20px;
        }

        .edit-box input,
        .edit-box textarea {
          width: 100%;
          font-size: 16px;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          outline: none;
          resize: none;
          box-sizing: border-box;
          background: white;
          color: #1f2937;
        }

        .dark .edit-box input,
        .dark .edit-box textarea {
          background: #4b5563;
          color: #e2e8f0;
          border-color: #6b7280;
        }

        .edit-box input:focus,
        .edit-box textarea:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }

        .input-with-counter {
          position: relative;
        }

        .char-counter {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 12px;
          color: #64748b;
          background: rgba(255, 255, 255, 0.9);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .dark .char-counter {
          color: #9ca3af;
          background: rgba(55, 65, 81, 0.9);
        }

        .image-url-input {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .image-preview {
          text-align: center;
          padding: 12px;
          border: 1px dashed #e2e8f0;
          border-radius: 6px;
        }

        .dark .image-preview {
          border-color: #4b5563;
        }

        .image-preview img {
          max-width: 100%;
          max-height: 150px;
          border-radius: 4px;
        }

        .image-preview small {
          display: block;
          margin-top: 8px;
          color: #64748b;
          font-size: 12px;
        }

        .dark .image-preview small {
          color: #9ca3af;
        }

        .edit-actions {
          display: flex;
          gap: 8px;
          padding: 16px;
          border-top: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .dark .edit-actions {
          border-top-color: #4b5563;
          background: #1f2937;
        }

        .cancel-btn, .save-btn {
          flex: 1;
          padding: 10px 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s;
          font-size: 14px;
        }

        .cancel-btn {
          background: #f1f5f9;
          color: #64748b;
        }

        .cancel-btn:hover {
          background: #e2e8f0;
        }

        .save-btn {
          background: #3b82f6;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .save-btn:hover {
          background: #2563eb;
        }

        .dialog-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2001;
        }

        .dialog {
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          min-width: 400px;
          max-width: 500px;
          max-height: 80vh;
          overflow: hidden;
          background: white;
        }

        .dark .dialog {
          background: #374151;
        }

        .dialog-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .dark .dialog-header {
          border-bottom-color: #4b5563;
          background: #1f2937;
        }

        .dialog-header h3 {
          margin: 0;
          flex: 1;
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .dark .dialog-header h3 {
          color: #e2e8f0;
        }

        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
        }

        .dark .close-btn {
          color: #9ca3af;
        }

        .close-btn:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        .dialog-content {
          padding: 20px;
          max-height: 400px;
          overflow-y: auto;
          color: #1f2937;
          line-height: 1.6;
        }

        .dark .dialog-content {
          color: #e2e8f0;
        }

        .url-input {
          width: 100%;
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 16px;
          margin-bottom: 16px;
          box-sizing: border-box;
        }

        .dark .url-input {
          background: #4b5563;
          color: #e2e8f0;
          border-color: #6b7280;
        }

        .dialog-actions {
          display: flex;
          gap: 8px;
          margin-top: 16px;
        }

        .zoom-controls {
          position: absolute;
          bottom: 30px;
          right: 30px;
          display: flex;
          align-items: center;
          border-radius: 25px;
          padding: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          gap: 4px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid #e2e8f0;
          z-index: 1000;
        }

        .dark .zoom-controls {
          background: rgba(55, 65, 81, 0.95);
          border-color: #4b5563;
        }

        .zoom-btn {
          width: 36px;
          height: 36px;
          border: none;
          background: transparent;
          border-radius: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: bold;
          transition: all 0.2s ease;
          color: #64748b;
        }

        .dark .zoom-btn {
          color: #9ca3af;
        }

        .zoom-btn:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .zoom-btn.reset {
          font-size: 16px;
        }

        .zoom-level {
          padding: 0 12px;
          font-size: 12px;
          font-weight: 500;
          min-width: 40px;
          text-align: center;
          color: #64748b;
        }

        .dark .zoom-level {
          color: #9ca3af;
        }

        .scroll-hint {
          position: absolute;
          bottom: 30px;
          left: 30px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          font-size: 12px;
          color: #64748b;
          backdrop-filter: blur(10px);
          z-index: 1000;
        }

        .dark .scroll-hint {
          background: rgba(55, 65, 81, 0.95);
          border-color: #4b5563;
          color: #9ca3af;
        }

        .json-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 16px;
          background: white;
        }
        
        .dark .json-editor {
          background: #374151;
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
          background: white;
          color: #1f2937;
        }
        
        .dark .json-textarea {
          background: #4b5563;
          color: #e2e8f0;
          border-color: #6b7280;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
        }

        .batch-edit-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: white;
          overflow: hidden;
        }

        .dark .batch-edit-container {
          background: #374151;
        }

        .batch-edit-header {
          padding: 20px;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .dark .batch-edit-header {
          background: #1f2937;
          border-bottom-color: #4b5563;
        }

        .batch-edit-header h3 {
          margin: 0 0 8px 0;
          color: #1f2937;
          font-size: 20px;
        }

        .dark .batch-edit-header h3 {
          color: #e2e8f0;
        }

        .batch-edit-header p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
        }

        .dark .batch-edit-header p {
          color: #9ca3af;
        }

        .batch-display-options {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 12px;
          flex-wrap: wrap;
        }

        .batch-display-options label {
          font-weight: 500;
          color: #374151;
          font-size: 14px;
        }

        .dark .batch-display-options label {
          color: #e2e8f0;
        }

        .display-mode-select,
        .node-select {
          padding: 6px 10px;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          background: white;
          color: #374151;
          font-size: 14px;
        }

        .dark .display-mode-select,
        .dark .node-select {
          background: #4b5563;
          color: #e2e8f0;
          border-color: #6b7280;
        }

        .hierarchy-indent {
          display: inline-block;
          margin-right: 8px;
          font-weight: bold;
        }

        .hierarchy-level-1 {
          background-color: rgba(59, 130, 246, 0.05);
        }

        .dark .hierarchy-level-1 {
          background-color: rgba(59, 130, 246, 0.1);
        }

        .hierarchy-level-2 {
          background-color: rgba(16, 185, 129, 0.05);
        }

        .dark .hierarchy-level-2 {
          background-color: rgba(16, 185, 129, 0.1);
        }

        .hierarchy-level-3 {
          background-color: rgba(245, 158, 11, 0.05);
        }

        .dark .hierarchy-level-3 {
          background-color: rgba(245, 158, 11, 0.1);
        }

        .batch-edit-table tr:hover {
          background: #f8fafc;
        }

        .dark .batch-edit-table tr:hover {
          background: #1f2937;
        }

        .batch-edit-table {
          flex: 1;
          overflow: auto;
          padding: 16px;
        }

        .batch-edit-table table {
          width: 100%;
          border-collapse: collapse;
          background: white;
        }

        .dark .batch-edit-table table {
          background: #374151;
        }

        .batch-edit-table th {
          position: sticky;
          top: 0;
          background: #f1f5f9;
          padding: 12px;
          text-align: left;
          font-weight: 600;
          color: #475569;
          border-bottom: 2px solid #e2e8f0;
          font-size: 14px;
          z-index: 10;
        }

        .dark .batch-edit-table th {
          background: #1f2937;
          color: #9ca3af;
          border-bottom-color: #4b5563;
        }

        .batch-edit-table td {
          padding: 12px;
          border-bottom: 1px solid #e2e8f0;
        }

        .dark .batch-edit-table td {
          border-bottom-color: #4b5563;
        }

        .id-cell {
          position: relative;
          font-weight: 600;
          color: #3b82f6;
          font-size: 13px;
          width: 80px;
          vertical-align: top;
          padding-top: 16px !important;
        }

        .parent-link {
          position: absolute;
          top: 40px;
          left: 12px;
          right: 12px;
          font-size: 10px;
          color: #6b7280;
          background: rgba(59, 130, 246, 0.1);
          padding: 2px 4px;
          border-radius: 3px;
          cursor: pointer;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: all 0.2s ease;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .dark .parent-link {
          color: #9ca3af;
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .parent-link:hover {
          background: rgba(59, 130, 246, 0.2);
          color: #1e40af;
          transform: translateY(-1px);
        }

        .dark .parent-link:hover {
          background: rgba(59, 130, 246, 0.3);
          color: #93c5fd;
        }

        .parent-group-1 {
          background-color: rgba(16, 185, 129, 0.08);
        }

        .dark .parent-group-1 {
          background-color: rgba(16, 185, 129, 0.15);
        }

        .parent-group-2 {
          background-color: rgba(139, 92, 246, 0.08);
        }

        .dark .parent-group-2 {
          background-color: rgba(139, 92, 246, 0.15);
        }

        /* Enhanced styling for parent-child continuity */
        .parent-child-continuous {
          border-left: 4px solid #10b981;
        }

        .dark .parent-child-continuous {
          border-left-color: #34d399;
        }

        /* Visual separator between different parent groups */
        .parent-group-start {
          border-top: 2px solid #e5e7eb;
        }

        .dark .parent-group-start {
          border-top-color: #4b5563;
        }

        /* Root node styling */
        .parent-group-0:first-child {
          background-color: rgba(239, 68, 68, 0.1);
          font-weight: 600;
          border-left: 4px solid #ef4444;
        }

        .dark .parent-group-0:first-child {
          background-color: rgba(239, 68, 68, 0.2);
          border-left-color: #f87171;
        }

        /* Highlight animation for parent navigation */
        @keyframes highlightParent {
          0% { background-color: rgba(207, 249, 235, 0.3); }
          50% { background-color: rgba(151, 237, 204, 0.6); }
          100% { background-color: inherit; }
        }

        .batch-edit-table tr {
          transition: background-color 0.3s ease;
        }

        .batch-edit-table tr:hover {
          background: #f8fafc;
        }

        .dark .batch-edit-table tr:hover {
          background: #1f2937;
        }

        .highlight-parent {
          animation: highlightParent 2s ease;
        }

        /* Visual indicators for immediate parent-child relationships */
        .hierarchy-indent {
          position: relative;
        }

        .parent-child-continuous .hierarchy-indent::before {
          content: '🔗';
          position: absolute;
          left: -15px;
          top: 5px;
          font-size: 10px;
        }

        .batch-input {
          width: 100%;
          padding: 8px 10px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          font-size: 14px;
          background: white;
          color: #1f2937;
          box-sizing: border-box;
        }

        .dark .batch-input {
          background: #4b5563;
          color: #e2e8f0;
          border-color: #6b7280;
        }

        .batch-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }

        .batch-textarea {
          width: 100%;
          padding: 8px 10px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          font-size: 14px;
          background: white;
          color: #1f2937;
          resize: vertical;
          min-height: 60px;
          font-family: inherit;
          box-sizing: border-box;
        }

        .dark .batch-textarea {
          background: #4b5563;
          color: #e2e8f0;
          border-color: #6b7280;
        }

        .batch-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }

        .batch-edit-actions {
          display: flex;
          gap: 12px;
          padding: 16px 20px;
          border-top: 1px solid #e2e8f0;
          background: #f8fafc;
          justify-content: flex-end;
        }

        .dark .batch-edit-actions {
          background: #1f2937;
          border-top-color: #4b5563;
        }

        .batch-edit-actions .cancel-btn,
        .batch-edit-actions .save-btn {
          flex: 0 0 auto;
          min-width: 120px;
        }
      `})]})},hQ=({activityDiagrams:i,onCreateActivityDiagram:r,onLoadActivityDiagram:s,onDeleteActivityDiagram:o})=>{const[d,f]=j.useState(!1);return n.jsxs("div",{className:"activity-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(Yb,{size:48})}),n.jsx("h2",{children:"Activity Diagram Designer"}),n.jsx("p",{children:"Model business workflows and processes with UML activity diagrams"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>f(!0),className:"primary-btn",children:[n.jsx(rt,{size:16})," New Activity Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Activity Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.nodes?.length||0," nodes • ",h.edges?.length||0," transitions"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:m=>{m.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Gn,{size:16})}),n.jsx("button",{onClick:m=>{m.stopPropagation(),confirm("Delete this activity diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(je,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Activity Diagram"}),n.jsx("button",{onClick:()=>f(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., User Registration Process",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>f(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),f(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
        .activity-main {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
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
          color: #f59e0b;
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
          border-color: #f59e0b;
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
          background: #f59e0b;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .create-btn:hover {
          background: #d97706;
        }
      `})]})},gQ=({activityDiagram:i,swimlanes:r=[],nodes:s=[],edges:o=[],onUpdateActivityDiagram:d,onBack:f})=>{const h=j.useRef(null),m=j.useRef(null),[x,B]=j.useState(null),[C,F]=j.useState(null),[T,oA]=j.useState(1),[eA,uA]=j.useState(null),[MA,NA]=j.useState(!1),[gA,XA]=j.useState({x:0,y:0}),[xA,mA]=j.useState("editor"),[Y,IA]=j.useState(""),[V,sA]=j.useState("select"),[KA,GA]=j.useState(!1),[CA,LA]=j.useState(null),[$A,JA]=j.useState({x:0,y:0}),[G,pA]=j.useState(""),[FA]=j.useState(220);j.useEffect(()=>{IA(JSON.stringify({name:i.name,swimlanes:r,nodes:s,edges:o},null,2))},[r,s,o,i.name]);const WA={initial:{width:40,height:40,color:"#10b981",shape:"circle"},activity:{width:120,height:60,color:"#60a5fa",shape:"rounded"},decision:{width:80,height:80,color:"#f59e0b",shape:"diamond"},final:{width:40,height:40,color:"#1e293b",shape:"doublecircle"},fork:{width:80,height:10,color:"#6b7280",shape:"rectangle"},join:{width:80,height:10,color:"#6b7280",shape:"rectangle"}},U=(O,yA)=>{const H=WA[O];if(O==="activity"){const q=Math.max(100,yA.length*8+40);return{...H,width:Math.min(q,180)}}return H},J=O=>{const yA=r.find(q=>q.id===O);if(!yA)return null;const H=r.findIndex(q=>q.id===O);return{...yA,x:H*FA,width:FA,centerX:H*FA+FA/2}},$=O=>{const yA=J(O.swimlaneId);if(!yA)return O;const H=yA.centerX-O.width/2;return{...O,x:H}},lA=(O,yA,H)=>{const q=J(O.swimlaneId);if(!q)return{x:yA,y:H};const jA=q.x+10,rA=q.x+q.width-O.width-10,hA=60,oe=Math.max(jA,Math.min(rA,yA)),xe=Math.max(hA,H);return{x:oe,y:xe}},QA=(O,yA)=>{const H=O+yA/2;for(let q=0;q<r.length;q++){const jA=q*FA;if(H>=jA&&H<jA+FA)return r[q].id}return r[0]?.id||null},RA=()=>{if(!G.trim())return;const O={id:Date.now(),name:G,order:r.length};d({...i,swimlanes:[...r,O]}),pA("")},K=O=>{if(r.length<=1){alert("Cannot delete the last swimlane");return}const yA=r.filter(q=>q.id!==O),H=s.filter(q=>q.swimlaneId!==O);d({...i,swimlanes:yA,nodes:H}),F(null)},OA=(O,yA)=>{if(O.stopPropagation(),B(yA.id),V==="select"){uA(yA),NA(!0);const H=m.current.getBoundingClientRect();XA({x:(O.clientX-H.left)/T-yA.x,y:(O.clientY-H.top)/T-yA.y})}else V==="connection"&&(LA(yA.id),GA(!0))},HA=j.useCallback(O=>{if(m.current){const yA=m.current.getBoundingClientRect(),H=(O.clientX-yA.left)/T,q=(O.clientY-yA.top)/T;if(KA&&JA({x:H,y:q}),MA&&eA){let jA=H-gA.x,rA=q-gA.y;const hA=lA(eA,jA,rA),oe=QA(hA.x,eA.width),xe=s.map(ce=>ce.id===eA.id?{...ce,x:hA.x,y:hA.y,swimlaneId:oe}:ce);d({...i,nodes:xe})}}},[MA,KA,eA,gA,T,s,i,d]),bA=j.useCallback(O=>{if(KA&&CA&&m.current){const yA=m.current.getBoundingClientRect(),H=(O.clientX-yA.left)/T,q=(O.clientY-yA.top)/T,jA=s.find(rA=>H>=rA.x&&H<=rA.x+rA.width&&q>=rA.y&&q<=rA.y+rA.height);if(jA&&jA.id!==CA&&!o.find(hA=>hA.source===CA&&hA.target===jA.id)){const hA={id:Date.now(),source:CA,target:jA.id,label:""};d({...i,edges:[...o,hA]})}}NA(!1),uA(null),GA(!1),LA(null)},[KA,CA,s,o,T,i,d]);j.useEffect(()=>(document.addEventListener("mousemove",HA),document.addEventListener("mouseup",bA),()=>{document.removeEventListener("mousemove",HA),document.removeEventListener("mouseup",bA)}),[HA,bA]);const L=(O,yA)=>{if(!yA&&r.length>0&&(yA=r[0].id),!J(yA))return;const q={id:Date.now(),type:O,text:O==="initial"?"Start":O==="final"?"End":O==="decision"?"Decision":O==="fork"||O==="join"?"":"New Activity",y:200,swimlaneId:yA,...U(O,"New Activity")},jA=$(q);d({...i,nodes:[...s,jA]}),B(jA.id)},X=O=>{const yA=s.filter(q=>q.id!==O),H=o.filter(q=>q.source!==O&&q.target!==O);d({...i,nodes:yA,edges:H}),B(null)},zA=O=>{d({...i,edges:o.filter(yA=>yA.id!==O)})},wA=(O,yA)=>{const H=s.map(q=>q.id===O?{...q,text:yA,...U(q.type,yA)}:q);d({...i,nodes:H})},EA=O=>{const yA=s.map(H=>H.id===O?$(H):H);d({...i,nodes:yA})},nA=()=>oA(O=>Math.min(O*1.2,3)),ye=()=>oA(O=>Math.max(O/1.2,.3)),pe=()=>oA(1),te=()=>{const O={name:i.name,swimlanes:r,nodes:s,edges:o};return JSON.stringify(O,null,2)},fe=()=>{navigator.clipboard.writeText(te()),alert("JSON copied to clipboard!")},ne=()=>{try{const O=JSON.parse(Y);O.swimlanes&&O.nodes&&O.edges?(d({...i,name:O.name||i.name,swimlanes:O.swimlanes,nodes:O.nodes,edges:O.edges}),alert("Diagram imported successfully!")):alert("Invalid JSON format. Expected swimlanes, nodes and edges arrays.")}catch(O){alert("Error parsing JSON: "+O.message)}},me=O=>{const yA=O.target.files[0];if(!yA)return;const H=new FileReader;H.onload=q=>{IA(q.target.result)},H.readAsText(yA)},De=(O,yA)=>{const H=O.x+O.width/2,q=O.y+O.height,jA=yA.x+yA.width/2,rA=yA.y;return{source:{x:H,y:q},target:{x:jA,y:rA}}},Je=(O,yA)=>{const{source:H,target:q}=De(O,yA),jA=q.x-H.x,rA=q.y-H.y;if(Math.abs(jA)<5)return`M ${H.x} ${H.y} L ${q.x} ${q.y}`;{const hA=H.y+Math.abs(rA)/2;return`M ${H.x} ${H.y} L ${H.x} ${hA} L ${q.x} ${hA} L ${q.x} ${q.y}`}},Te=(O,yA)=>{const H=yA*FA,q=Math.max(1e3,s.reduce((jA,rA)=>Math.max(jA,rA.y+rA.height+150),0));return n.jsxs("g",{children:[n.jsx("rect",{x:H,y:0,width:FA,height:q,fill:yA%2===0?"#ffffff":"#f9fafb",stroke:"#e5e7eb",strokeWidth:"2"}),n.jsx("text",{x:H+FA/2,y:30,textAnchor:"middle",fontSize:"15",fontWeight:"600",fill:"#1f2937",children:O.name}),n.jsx("line",{x1:H,y1:55,x2:H+FA,y2:55,stroke:"#d1d5db",strokeWidth:"2"})]},O.id)},ie=O=>{const yA=x===O.id,H=WA[O.type];return n.jsxs("g",{className:"node-group",onMouseDown:q=>OA(q,O),style:{cursor:V==="select"?"move":"crosshair",pointerEvents:"all"},children:[H.shape==="circle"&&n.jsx("circle",{cx:O.x+O.width/2,cy:O.y+O.height/2,r:O.width/2,fill:H.color,stroke:yA?"#3b82f6":"#fff",strokeWidth:yA?"3":"2",style:{filter:yA?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"none"}}),H.shape==="doublecircle"&&n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:O.x+O.width/2,cy:O.y+O.height/2,r:O.width/2,fill:"none",stroke:H.color,strokeWidth:"3",style:{filter:yA?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"none"}}),n.jsx("circle",{cx:O.x+O.width/2,cy:O.y+O.height/2,r:O.width/2-5,fill:H.color,stroke:yA?"#3b82f6":"none",strokeWidth:yA?"2":"0"})]}),H.shape==="rounded"&&n.jsx("rect",{x:O.x,y:O.y,width:O.width,height:O.height,rx:"12",fill:H.color,stroke:yA?"#3b82f6":"#fff",strokeWidth:yA?"3":"2",style:{filter:yA?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"drop-shadow(0 2px 4px rgba(0,0,0,0.1))"}}),H.shape==="diamond"&&n.jsx("polygon",{points:`
              ${O.x+O.width/2},${O.y} 
              ${O.x+O.width},${O.y+O.height/2} 
              ${O.x+O.width/2},${O.y+O.height} 
              ${O.x},${O.y+O.height/2}
            `,fill:H.color,stroke:yA?"#3b82f6":"#fff",strokeWidth:yA?"3":"2",style:{filter:yA?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"drop-shadow(0 2px 4px rgba(0,0,0,0.1))"}}),H.shape==="rectangle"&&n.jsx("rect",{x:O.x,y:O.y,width:O.width,height:O.height,fill:H.color,stroke:yA?"#3b82f6":"#6b7280",strokeWidth:yA?"3":"2",style:{filter:yA?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"none"}}),O.type!=="fork"&&O.type!=="join"&&O.type!=="initial"&&O.type!=="final"&&n.jsx("text",{x:O.x+O.width/2,y:O.y+O.height/2,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"12",fontWeight:"600",children:O.text.length>20?O.text.substring(0,20)+"...":O.text})]},O.id)},Fe=O=>{const yA=s.find(hA=>hA.id===O.source),H=s.find(hA=>hA.id===O.target);if(!yA||!H)return null;const q=Je(yA,H),{source:jA,target:rA}=De(yA,H);return n.jsxs("g",{className:"edge-group",children:[n.jsx("path",{d:q,stroke:"#6b7280",strokeWidth:"2",fill:"none",markerEnd:"url(#arrowhead)",style:{cursor:"pointer"},onClick:hA=>{hA.stopPropagation(),window.confirm("Delete this connection?")&&zA(O.id)}}),O.label&&n.jsx("text",{x:(jA.x+rA.x)/2,y:(jA.y+rA.y)/2-10,fill:"#374151",fontSize:"11",fontWeight:"500",style:{pointerEvents:"none"},children:O.label})]},O.id)},be=Math.max(1e3,s.reduce((O,yA)=>Math.max(O,yA.y+yA.height+150),0)),Se=r.length*FA;return n.jsxs("div",{className:"activity-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:f,className:"back-btn",children:[n.jsx(_n,{size:16})," Back"]}),n.jsx("div",{className:"toolbar-left",children:n.jsx("h2",{children:i.name})}),n.jsx("div",{className:"toolbar-center",children:n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:ye,className:"zoom-btn",title:"Zoom Out",children:n.jsx(Kr,{size:16})}),n.jsxs("span",{className:"zoom-level",children:[Math.round(T*100),"%"]}),n.jsx("button",{onClick:nA,className:"zoom-btn",title:"Zoom In",children:n.jsx(Or,{size:16})}),n.jsx("button",{onClick:pe,className:"zoom-btn",title:"Reset Zoom",children:"Reset"})]})}),n.jsxs("div",{className:"toolbar-right",children:[n.jsxs("button",{onClick:fe,className:"export-btn",title:"Copy JSON",children:[n.jsx(wa,{size:16})," Copy"]}),n.jsxs("button",{onClick:()=>{const O=new Blob([te()],{type:"application/json"}),yA=URL.createObjectURL(O),H=document.createElement("a");H.href=yA,H.download=`${i.name.replace(/\s+/g,"-").toLowerCase()}.json`,document.body.appendChild(H),H.click(),document.body.removeChild(H),URL.revokeObjectURL(yA)},className:"export-btn",title:"Download JSON",children:[n.jsx(wn,{size:16})," Export"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${xA==="editor"?"active":""}`,onClick:()=>mA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${xA==="json"?"active":""}`,onClick:()=>mA("json"),children:"JSON Editor"})]}),xA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Tools"}),n.jsxs("button",{className:`tool-btn ${V==="select"?"active":""}`,onClick:()=>sA("select"),children:[n.jsx(OB,{size:16})," Select & Move"]}),n.jsxs("button",{className:`tool-btn ${V==="connection"?"active":""}`,onClick:()=>sA("connection"),children:[n.jsx(ux,{size:16})," Create Connection"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Swimlanes"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:G,onChange:O=>pA(O.target.value),placeholder:"Swimlane name",onKeyPress:O=>O.key==="Enter"&&RA()})}),n.jsxs("button",{onClick:RA,className:"add-btn",children:[n.jsx(rt,{size:16})," Add Swimlane"]}),n.jsx("div",{className:"list",children:r.map(O=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-info",children:n.jsx("div",{className:"item-name",children:O.name})}),n.jsx("button",{onClick:()=>K(O.id),className:"delete-btn",title:"Delete swimlane",children:n.jsx(je,{size:14})})]},O.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Add Nodes"}),r.length>0&&n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Target Swimlane"}),n.jsx("select",{value:C||r[0]?.id||"",onChange:O=>F(parseInt(O.target.value)),children:r.map(O=>n.jsx("option",{value:O.id,children:O.name},O.id))})]}),n.jsxs("div",{className:"node-buttons",children:[n.jsxs("button",{onClick:()=>L("initial",C||r[0]?.id),title:"Start node",children:[n.jsx(ZB,{size:14})," Initial"]}),n.jsxs("button",{onClick:()=>L("activity",C||r[0]?.id),title:"Activity node",children:[n.jsx(uw,{size:14})," Activity"]}),n.jsxs("button",{onClick:()=>L("decision",C||r[0]?.id),title:"Decision node",children:[n.jsx(hB,{size:14})," Decision"]}),n.jsxs("button",{onClick:()=>L("fork",C||r[0]?.id),title:"Fork node",children:[n.jsx(fu,{size:14})," Fork"]}),n.jsxs("button",{onClick:()=>L("join",C||r[0]?.id),title:"Join node",children:[n.jsx(NB,{size:14})," Join"]}),n.jsxs("button",{onClick:()=>L("final",C||r[0]?.id),title:"End node",children:[n.jsx(nB,{size:14})," Final"]})]})]})]}),n.jsx("div",{className:"canvas-wrapper",children:n.jsx("div",{className:"canvas",ref:m,style:{transform:`scale(${T})`,transformOrigin:"top left",width:Se,height:be},children:n.jsxs("svg",{ref:h,width:Se,height:be,style:{background:"#fff"},children:[n.jsx("defs",{children:n.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),r.map((O,yA)=>Te(O,yA)),o.map(O=>Fe(O)),s.map(O=>ie(O)),KA&&CA&&n.jsx("line",{x1:s.find(O=>O.id===CA)?.x+s.find(O=>O.id===CA)?.width/2,y1:s.find(O=>O.id===CA)?.y+s.find(O=>O.id===CA)?.height/2,x2:$A.x,y2:$A.y,stroke:"#3b82f6",strokeWidth:"2",strokeDasharray:"5,5",style:{pointerEvents:"none"}})]})})}),x&&n.jsxs("div",{className:"properties-panel",children:[n.jsx("h3",{children:"Node Properties"}),(()=>{const O=s.find(yA=>yA.id===x);return O?n.jsxs("div",{className:"property-group",children:[n.jsx("label",{children:"Node ID"}),n.jsx("input",{type:"text",value:O.id,disabled:!0,className:"disabled-input"}),O.type!=="fork"&&O.type!=="join"&&n.jsxs(n.Fragment,{children:[n.jsx("label",{children:"Text Label"}),n.jsx("input",{type:"text",value:O.text,onChange:yA=>wA(O.id,yA.target.value),placeholder:"Enter text"})]}),n.jsx("label",{children:"Node Type"}),n.jsxs("select",{value:O.type,onChange:yA=>{const H=s.map(q=>q.id===x?{...q,type:yA.target.value,...U(yA.target.value,q.text)}:q);d({...i,nodes:H})},children:[n.jsx("option",{value:"initial",children:"Initial Node"}),n.jsx("option",{value:"activity",children:"Activity"}),n.jsx("option",{value:"decision",children:"Decision"}),n.jsx("option",{value:"fork",children:"Fork"}),n.jsx("option",{value:"join",children:"Join"}),n.jsx("option",{value:"final",children:"Final Node"})]}),n.jsx("label",{children:"Swimlane"}),n.jsx("select",{value:O.swimlaneId||"",onChange:yA=>{const H=parseInt(yA.target.value),q=s.map(jA=>{if(jA.id===x){const rA={...jA,swimlaneId:H};return $(rA)}return jA});d({...i,nodes:q})},children:r.map(yA=>n.jsx("option",{value:yA.id,children:yA.name},yA.id))}),n.jsx("label",{children:"Position"}),n.jsxs("div",{className:"position-group",children:[n.jsxs("div",{className:"position-item",children:[n.jsx("span",{children:"X:"}),n.jsx("input",{type:"number",value:Math.round(O.x),onChange:yA=>{const H=parseInt(yA.target.value)||0,q=lA(O,H,O.y),jA=s.map(rA=>rA.id===x?{...rA,x:q.x}:rA);d({...i,nodes:jA})}})]}),n.jsxs("div",{className:"position-item",children:[n.jsx("span",{children:"Y:"}),n.jsx("input",{type:"number",value:Math.round(O.y),onChange:yA=>{const H=parseInt(yA.target.value)||0,q=lA(O,O.x,H),jA=s.map(rA=>rA.id===x?{...rA,y:q.y}:rA);d({...i,nodes:jA})}})]})]}),n.jsxs("button",{onClick:()=>EA(x),className:"center-btn",children:[n.jsx(gx,{size:14})," Center in Swimlane"]}),n.jsxs("button",{onClick:()=>{window.confirm("Delete this node and all connected edges?")&&X(x)},className:"delete-node-btn",children:[n.jsx(je,{size:14})," Delete Node"]})]}):null})()]})]}):n.jsxs("div",{className:"json-editor",children:[n.jsxs("div",{className:"json-actions",children:[n.jsxs("button",{onClick:()=>{const O=document.createElement("input");O.type="file",O.accept=".json",O.onchange=me,O.click()},className:"import-btn",children:[n.jsx(yn,{size:16})," Import JSON File"]}),n.jsxs("button",{onClick:ne,className:"import-btn apply-btn",children:[n.jsx(ya,{size:16})," Apply Changes"]})]}),n.jsx("textarea",{value:Y,onChange:O=>IA(O.target.value),className:"json-textarea",placeholder:"Paste or edit JSON here..."})]}),n.jsx("style",{children:`
        * {
          box-sizing: border-box;
        }

        .activity-maker {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f8fafc;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          overflow: hidden;
        }
        
        .toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
          background: white;
          border-bottom: 2px solid #e2e8f0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          gap: 16px;
          flex-shrink: 0;
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 14px;
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

        .toolbar-left,
        .toolbar-center,
        .toolbar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .toolbar-left h2 {
          margin: 0;
          font-size: 18px;
          color: #1e293b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .toolbar-center {
          flex: 1;
          justify-content: center;
        }
        
        .zoom-controls {
          display: flex;
          align-items: center;
          background: #f1f5f9;
          border-radius: 8px;
          padding: 4px;
          gap: 4px;
        }
        
        .zoom-btn {
          padding: 8px 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: white;
          border-radius: 6px;
          cursor: pointer;
          color: #475569;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.2s;
          min-width: 36px;
        }
        
        .zoom-btn:hover {
          background: #e2e8f0;
          color: #1e293b;
        }
        
        .zoom-level {
          font-size: 13px;
          font-weight: 600;
          padding: 0 10px;
          color: #64748b;
          min-width: 50px;
          text-align: center;
        }
        
        .export-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          background: #3b82f6;
          color: white;
          border: none;
        }
        
        .export-btn:hover {
          background: #2563eb;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);
        }
        
        .tabs {
          display: flex;
          border-bottom: 2px solid #e2e8f0;
          background: white;
          flex-shrink: 0;
        }
        
        .tab {
          padding: 14px 28px;
          border: none;
          background: none;
          cursor: pointer;
          font-weight: 600;
          color: #64748b;
          border-bottom: 3px solid transparent;
          font-size: 14px;
          transition: all 0.2s;
        }

        .tab:hover {
          color: #3b82f6;
          background: #f8fafc;
        }
        
        .tab.active {
          color: #3b82f6;
          border-bottom-color: #3b82f6;
        }
        
        .diagram-container {
          display: flex;
          flex: 1;
          overflow: hidden;
          min-height: 0;
        }
        
        .sidebar {
          width: 300px;
          background: white;
          border-right: 2px solid #e2e8f0;
          overflow-y: auto;
          flex-shrink: 0;
        }
        
        .sidebar-section {
          padding: 20px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .sidebar-section h3 {
          margin: 0 0 16px 0;
          font-size: 15px;
          color: #1e293b;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .form-group {
          margin-bottom: 14px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 6px;
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
        }
        
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 10px 12px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.2s;
        }
        
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .add-btn {
          width: 100%;
          padding: 10px 14px;
          background: #10b981;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          transition: all 0.2s;
        }
        
        .add-btn:hover {
          background: #059669;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(16, 185, 129, 0.3);
        }
        
        .list {
          margin-top: 14px;
          max-height: 220px;
          overflow-y: auto;
        }
        
        .list-item {
          display: flex;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .item-info {
          flex: 1;
        }
        
        .item-name {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
        }
        
        .delete-btn {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fee2e2;
          color: #ef4444;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .delete-btn:hover {
          background: #fecaca;
          transform: scale(1.1);
        }
        
        .tool-btn {
          width: 100%;
          padding: 12px 14px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 10px;
          transition: all 0.2s;
        }
        
        .tool-btn:hover {
          border-color: #3b82f6;
          background: #f0f9ff;
          transform: translateX(2px);
        }
        
        .tool-btn.active {
          border-color: #3b82f6;
          background: #dbeafe;
          color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .node-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        
        .node-buttons button {
          padding: 10px 12px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s;
        }
        
        .node-buttons button:hover {
          border-color: #3b82f6;
          background: #f0f9ff;
          color: #3b82f6;
          transform: scale(1.05);
        }
        
        .canvas-wrapper {
          flex: 1;
          background: #f9fafb;
          overflow: auto;
          position: relative;
          min-width: 0;
        }
        
        .canvas {
          transform-origin: top left;
          transition: transform 0.1s ease-out;
        }
        
        .node-group {
          cursor: move;
          transition: filter 0.2s;
        }
        
        .properties-panel {
          width: 300px;
          background: white;
          border-left: 2px solid #e2e8f0;
          padding: 20px;
          overflow-y: auto;
          flex-shrink: 0;
        }
        
        .properties-panel h3 {
          margin: 0 0 20px 0;
          font-size: 15px;
          color: #1e293b;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .property-group {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        
        .property-group label {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          margin-bottom: -8px;
        }
        
        .property-group input,
        .property-group select {
          padding: 10px 12px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.2s;
        }

        .property-group input.disabled-input {
          background: #f1f5f9;
          color: #94a3b8;
          cursor: not-allowed;
        }
        
        .property-group input:focus,
        .property-group select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .position-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .position-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .position-item span {
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
        }

        .position-item input {
          padding: 8px 10px;
          border: 2px solid #e2e8f0;
          border-radius: 6px;
          font-size: 13px;
        }

        .center-btn {
          background: #8b5cf6;
          color: white;
          border: none;
          padding: 10px 14px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
        }

        .center-btn:hover {
          background: #7c3aed;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(139, 92, 246, 0.3);
        }
        
        .delete-node-btn {
          background: #fee2e2;
          color: #ef4444;
          border: 2px solid #fecaca;
          padding: 10px 14px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .delete-node-btn:hover {
          background: #fecaca;
          border-color: #ef4444;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(239, 68, 68, 0.3);
        }
        
        .json-editor {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 20px;
          background: white;
          overflow: hidden;
        }
        
        .json-actions {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
        }
        
        .import-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          background: #10b981;
          color: white;
          font-size: 14px;
          transition: all 0.2s;
        }
        
        .import-btn:hover {
          background: #059669;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px rgba(16, 185, 129, 0.3);
        }

        .import-btn.apply-btn {
          background: #3b82f6;
        }

        .import-btn.apply-btn:hover {
          background: #2563eb;
          box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);
        }
        
        .json-textarea {
          flex: 1;
          padding: 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
          font-size: 13px;
          resize: none;
          line-height: 1.6;
          background: #f8fafc;
          color: #1e293b;
        }
        
        .json-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          background: white;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .edge-group path {
          transition: stroke 0.2s;
        }

        .edge-group:hover path {
          stroke: #3b82f6;
          stroke-width: 3;
        }

        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `})]})},YA={PROJECT:"projects",FLOWCHART:"flowcharts",GANTT:"gantt",USE_CASE:"usecase",SEQUENCE:"sequence",ARCHITECTURE:"architecture",CLASS:"class",DOMAIN_MODEL:"domainmodel",MIND_MAP:"mindmap",ACTIVITY:"activity"},Rd=()=>({projects:[],currentProject:null,flowcharts:[],currentFlowchart:null,ganttCharts:[],currentGanttChart:null,useCaseDiagrams:[],currentUseCaseDiagram:null,sequenceDiagrams:[],currentSequenceDiagram:null,architectureDiagrams:[],currentArchitectureDiagram:null,classDiagrams:[],currentClassDiagram:null,domainModels:[],currentDomainModel:null,mindMaps:[],currentMindMap:null,activityDiagrams:[],currentActivityDiagram:null}),pQ=()=>{const i=localStorage.getItem("evolutionChartData");if(!i)return Rd();try{const r=JSON.parse(i);return{...Rd(),...r}}catch(r){return console.error("Failed to parse localStorage data:",r),Rd()}},_i=i=>{localStorage.setItem("evolutionChartData",JSON.stringify(i))},xQ=()=>{const[,i]=j.useReducer(L=>L+1,0),[r,s]=j.useState(YA.PROJECT),[o,d]=j.useState(""),f=()=>pQ(),h=(L,X,zA={})=>{const wA=f(),EA={id:Date.now(),name:X,createdAt:new Date().toISOString(),...zA},nA={...wA};switch(nA.currentProject=null,nA.currentFlowchart=null,nA.currentGanttChart=null,nA.currentUseCaseDiagram=null,nA.currentSequenceDiagram=null,nA.currentArchitectureDiagram=null,nA.currentClassDiagram=null,nA.currentDomainModel=null,nA.currentMindMap=null,nA.currentActivityDiagram=null,L){case YA.PROJECT:nA.projects=[...wA.projects,EA],nA.currentProject=EA;break;case YA.FLOWCHART:nA.flowcharts=[...wA.flowcharts,EA],nA.currentFlowchart=EA;break;case YA.GANTT:nA.ganttCharts=[...wA.ganttCharts,EA],nA.currentGanttChart=EA;break;case YA.USE_CASE:nA.useCaseDiagrams=[...wA.useCaseDiagrams,EA],nA.currentUseCaseDiagram=EA;break;case YA.SEQUENCE:nA.sequenceDiagrams=[...wA.sequenceDiagrams,EA],nA.currentSequenceDiagram=EA;break;case YA.ARCHITECTURE:nA.architectureDiagrams=[...wA.architectureDiagrams,EA],nA.currentArchitectureDiagram=EA;break;case YA.CLASS:nA.classDiagrams=[...wA.classDiagrams,EA],nA.currentClassDiagram=EA;break;case YA.DOMAIN_MODEL:nA.domainModels=[...wA.domainModels,EA],nA.currentDomainModel=EA;break;case YA.MIND_MAP:nA.mindMaps=[...wA.mindMaps,EA],nA.currentMindMap=EA;break;case YA.ACTIVITY:nA.activityDiagrams=[...wA.activityDiagrams,EA],nA.currentActivityDiagram=EA;break}_i(nA),i()},m=(L,X)=>{const zA=f(),wA={...zA};switch(L){case YA.PROJECT:wA.projects=zA.projects.filter(EA=>EA.id!==X),zA.currentProject?.id===X&&(wA.currentProject=null);break;case YA.FLOWCHART:wA.flowcharts=zA.flowcharts.filter(EA=>EA.id!==X),zA.currentFlowchart?.id===X&&(wA.currentFlowchart=null);break;case YA.GANTT:wA.ganttCharts=zA.ganttCharts.filter(EA=>EA.id!==X),zA.currentGanttChart?.id===X&&(wA.currentGanttChart=null);break;case YA.USE_CASE:wA.useCaseDiagrams=zA.useCaseDiagrams.filter(EA=>EA.id!==X),zA.currentUseCaseDiagram?.id===X&&(wA.currentUseCaseDiagram=null);break;case YA.SEQUENCE:wA.sequenceDiagrams=zA.sequenceDiagrams.filter(EA=>EA.id!==X),zA.currentSequenceDiagram?.id===X&&(wA.currentSequenceDiagram=null);break;case YA.ARCHITECTURE:wA.architectureDiagrams=zA.architectureDiagrams.filter(EA=>EA.id!==X),zA.currentArchitectureDiagram?.id===X&&(wA.currentArchitectureDiagram=null);break;case YA.CLASS:wA.classDiagrams=zA.classDiagrams.filter(EA=>EA.id!==X),zA.currentClassDiagram?.id===X&&(wA.currentClassDiagram=null);break;case YA.DOMAIN_MODEL:wA.domainModels=zA.domainModels.filter(EA=>EA.id!==X),zA.currentDomainModel?.id===X&&(wA.currentDomainModel=null);break;case YA.MIND_MAP:wA.mindMaps=zA.mindMaps.filter(EA=>EA.id!==X),zA.currentMindMap?.id===X&&(wA.currentMindMap=null);break;case YA.ACTIVITY:wA.activityDiagrams=zA.activityDiagrams.filter(EA=>EA.id!==X),zA.currentActivityDiagram?.id===X&&(wA.currentActivityDiagram=null);break}_i(wA),i()},x=(L,X)=>{const zA=f(),wA={...zA};switch(L){case YA.PROJECT:wA.projects=zA.projects.map(EA=>EA.id===X.id?X:EA),wA.currentProject=X;break;case YA.FLOWCHART:wA.flowcharts=zA.flowcharts.map(EA=>EA.id===X.id?X:EA),wA.currentFlowchart=X;break;case YA.GANTT:wA.ganttCharts=zA.ganttCharts.map(EA=>EA.id===X.id?X:EA),wA.currentGanttChart=X;break;case YA.USE_CASE:wA.useCaseDiagrams=zA.useCaseDiagrams.map(EA=>EA.id===X.id?X:EA),wA.currentUseCaseDiagram=X;break;case YA.SEQUENCE:wA.sequenceDiagrams=zA.sequenceDiagrams.map(EA=>EA.id===X.id?X:EA),wA.currentSequenceDiagram=X;break;case YA.ARCHITECTURE:wA.architectureDiagrams=zA.architectureDiagrams.map(EA=>EA.id===X.id?X:EA),wA.currentArchitectureDiagram=X;break;case YA.CLASS:wA.classDiagrams=zA.classDiagrams.map(EA=>EA.id===X.id?X:EA),wA.currentClassDiagram=X;break;case YA.DOMAIN_MODEL:wA.domainModels=zA.domainModels.map(EA=>EA.id===X.id?X:EA),wA.currentDomainModel=X;break;case YA.MIND_MAP:wA.mindMaps=zA.mindMaps.map(EA=>EA.id===X.id?X:EA),wA.currentMindMap=X;break;case YA.ACTIVITY:wA.activityDiagrams=zA.activityDiagrams.map(EA=>EA.id===X.id?X:EA),wA.currentActivityDiagram=X;break}_i(wA),i()},B=(L,X,zA,wA)=>{h(YA.PROJECT,L,{timelineStart:X,timelineEnd:zA,timeUnit:wA,nodes:[],connections:[],zoom:1,pan:{x:0,y:0}})},C=L=>{h(YA.FLOWCHART,L,{nodes:[],edges:[],zoom:1,pan:{x:0,y:0}})},F=L=>{h(YA.GANTT,L,{tasks:[],startDate:new Date().toISOString(),endDate:new Date(Date.now()+30*24*60*60*1e3).toISOString()})},T=L=>{h(YA.USE_CASE,L,{actors:[],useCases:[],relationships:[],zoom:1,pan:{x:0,y:0}})},oA=L=>{h(YA.SEQUENCE,L,{participants:[],messages:[],zoom:1,pan:{x:0,y:0}})},eA=L=>{h(YA.ARCHITECTURE,L,{components:[],connections:[],zoom:1,pan:{x:0,y:0}})},uA=L=>{h(YA.CLASS,L,{classes:[],relationships:[],zoom:1,pan:{x:0,y:0}})},MA=L=>{h(YA.DOMAIN_MODEL,L,{entities:[],relationships:[],zoom:1,pan:{x:0,y:0}})},NA=L=>{h(YA.MIND_MAP,L,{nodes:[{id:1,text:"Central Idea",x:400,y:300,level:0,parentId:null,isRoot:!0,color:"#ff6b6b",width:140,height:40}],zoom:1,pan:{x:0,y:0}})},gA=L=>{h(YA.ACTIVITY,L,{swimlanes:[{id:Date.now(),name:"Default Swimlane",order:0}],nodes:[],edges:[],zoom:1,pan:{x:0,y:0}})},XA=L=>m(YA.PROJECT,L),xA=L=>m(YA.FLOWCHART,L),mA=L=>m(YA.GANTT,L),Y=L=>m(YA.USE_CASE,L),IA=L=>m(YA.SEQUENCE,L),V=L=>m(YA.ARCHITECTURE,L),sA=L=>m(YA.CLASS,L),KA=L=>m(YA.DOMAIN_MODEL,L),GA=L=>m(YA.MIND_MAP,L),CA=L=>m(YA.ACTIVITY,L),LA=L=>x(YA.PROJECT,L),$A=L=>x(YA.FLOWCHART,L),JA=L=>x(YA.GANTT,L),G=L=>x(YA.USE_CASE,L),pA=L=>x(YA.SEQUENCE,L),FA=L=>x(YA.ARCHITECTURE,L),WA=L=>x(YA.CLASS,L),U=L=>x(YA.DOMAIN_MODEL,L),J=L=>x(YA.MIND_MAP,L),$=L=>x(YA.ACTIVITY,L),lA=L=>{try{const X=JSON.parse(L);return h(YA.FLOWCHART,`Imported Flowchart ${new Date().toLocaleString()}`,{nodes:X.nodes||[],edges:X.edges||[],zoom:1,pan:{x:0,y:0}}),!0}catch(X){return console.error("Invalid JSON:",X),!1}},QA=()=>{const X={...f(),currentProject:null,currentFlowchart:null,currentGanttChart:null,currentUseCaseDiagram:null,currentSequenceDiagram:null,currentArchitectureDiagram:null,currentClassDiagram:null,currentDomainModel:null,currentMindMap:null,currentActivityDiagram:null};_i(X),i()},RA=(L,X)=>{const wA={...f(),currentProject:null,currentFlowchart:null,currentGanttChart:null,currentUseCaseDiagram:null,currentSequenceDiagram:null,currentArchitectureDiagram:null,currentClassDiagram:null,currentDomainModel:null,currentMindMap:null,currentActivityDiagram:null};switch(L){case YA.PROJECT:wA.currentProject=X;break;case YA.FLOWCHART:wA.currentFlowchart=X;break;case YA.GANTT:wA.currentGanttChart=X;break;case YA.USE_CASE:wA.currentUseCaseDiagram=X;break;case YA.SEQUENCE:wA.currentSequenceDiagram=X;break;case YA.ARCHITECTURE:wA.currentArchitectureDiagram=X;break;case YA.CLASS:wA.currentClassDiagram=X;break;case YA.DOMAIN_MODEL:wA.currentDomainModel=X;break;case YA.MIND_MAP:wA.currentMindMap=X;break;case YA.ACTIVITY:wA.currentActivityDiagram=X;break}_i(wA),i()},K={appContainer:{minHeight:"100vh",width:"100%",background:"linear-gradient(135deg, #e9eef1ff 0%, #dee4ebff 100%)",padding:"30px",fontFamily:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',boxSizing:"border-box"},mainCard:{maxWidth:"1400px",margin:"0 auto",background:"#ffffff",borderRadius:"20px",boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.15)",overflow:"hidden",minHeight:"88vh",display:"flex",flexDirection:"column",border:"1px solid rgba(255, 255, 255, 0.5)"},header:{background:"linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",color:"#ffffff",padding:"40px 30px",textAlign:"center"},headerTitle:{fontSize:"32px",fontWeight:"800",margin:"0 0 10px 0",letterSpacing:"-0.5px",background:"linear-gradient(to right, #f8fafc, #94a3b8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},headerSubtitle:{fontSize:"16px",color:"#94a3b8",margin:"0",fontWeight:"400"},modeSelector:{display:"flex",justifyContent:"center",padding:"24px 30px",gap:"12px",background:"#ffffff",flexWrap:"wrap",borderBottom:"1px solid #f1f5f9"},tabButton:{padding:"12px 24px",border:"1px solid #e2e8f0",borderRadius:"12px",background:"#ffffff",color:"#64748b",fontSize:"15px",fontWeight:"600",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",outline:"none",position:"relative",whiteSpace:"nowrap"},tabButtonActive:L=>({background:L,color:"#ffffff",borderColor:L,boxShadow:`0 8px 16px -4px rgba(${OA(L)}, 0.4)`,transform:"translateY(-2px)"}),tabButtonHover:L=>({borderColor:L,color:L,background:`rgba(${OA(L)}, 0.04)`,transform:"translateY(-1px)"})},OA=L=>{let X=L;L.length===4&&(X="#"+L[1]+L[1]+L[2]+L[2]+L[3]+L[3]);const zA=parseInt(X.slice(1,3),16),wA=parseInt(X.slice(3,5),16),EA=parseInt(X.slice(5,7),16);return`${zA}, ${wA}, ${EA}`},HA=()=>[{type:YA.PROJECT,label:"📊 Evolution Charts",color:"#21b075ff",component:n.jsx(Cw,{projects:f().projects,onCreateProject:B,onLoadProject:L=>RA(YA.PROJECT,L),onDeleteProject:XA})},{type:YA.FLOWCHART,label:"🔄 Flowcharts",color:"#7c3aed",component:n.jsx(Uw,{flowcharts:f().flowcharts,onCreateFlowchart:C,onLoadFlowchart:L=>RA(YA.FLOWCHART,L),onDeleteFlowchart:xA,onImportFlowchart:lA})},{type:YA.GANTT,label:"📅 Gantt Charts",color:"#3b82f6",component:n.jsx(Fw,{ganttCharts:f().ganttCharts,onCreateGanttChart:F,onLoadGanttChart:L=>RA(YA.GANTT,L),onDeleteGanttChart:mA})},{type:YA.USE_CASE,label:"👥 Use Case",color:"#10b981",component:n.jsx(AQ,{useCaseDiagrams:f().useCaseDiagrams,onCreateUseCaseDiagram:T,onLoadUseCaseDiagram:L=>RA(YA.USE_CASE,L),onDeleteUseCaseDiagram:Y})},{type:YA.SEQUENCE,label:"↔️ Sequence",color:"#06b6d4",component:n.jsx(aQ,{sequenceDiagrams:f().sequenceDiagrams,onCreateSequenceDiagram:oA,onLoadSequenceDiagram:L=>RA(YA.SEQUENCE,L),onDeleteSequenceDiagram:IA})},{type:YA.ARCHITECTURE,label:"🏛️ Architecture",color:"#8b5cf6",component:n.jsx(iQ,{architectureDiagrams:f().architectureDiagrams,onCreateArchitectureDiagram:eA,onLoadArchitectureDiagram:L=>RA(YA.ARCHITECTURE,L),onDeleteArchitectureDiagram:V})},{type:YA.CLASS,label:"📐 Class Diagram",color:"#ec4899",component:n.jsx(sQ,{classDiagrams:f().classDiagrams,onCreateClassDiagram:uA,onLoadClassDiagram:L=>RA(YA.CLASS,L),onDeleteClassDiagram:sA})},{type:YA.DOMAIN_MODEL,label:"🏢 Domain Model",color:"#06b6d4",component:n.jsx(cQ,{domainModels:f().domainModels,onCreateDomainModel:MA,onLoadDomainModel:L=>RA(YA.DOMAIN_MODEL,L),onDeleteDomainModel:KA})},{type:YA.MIND_MAP,label:"🧠 Mind Maps",color:"#10b981",component:n.jsx(uQ,{mindMaps:f().mindMaps,onCreateMindMap:NA,onLoadMindMap:L=>RA(YA.MIND_MAP,L),onDeleteMindMap:GA})},{type:YA.ACTIVITY,label:"⚡ Activity Diagram",color:"#f59e0b",component:n.jsx(hQ,{activityDiagrams:f().activityDiagrams,onCreateActivityDiagram:gA,onLoadActivityDiagram:L=>RA(YA.ACTIVITY,L),onDeleteActivityDiagram:CA})}],bA=f();return n.jsx("div",{style:K.appContainer,children:n.jsx("div",{style:K.mainCard,children:bA.currentProject?n.jsx(Qw,{project:bA.currentProject,nodes:bA.currentProject.nodes||[],connections:bA.currentProject.connections||[],onUpdateProject:LA,onBack:QA}):bA.currentFlowchart?n.jsx(Ew,{flowchart:bA.currentFlowchart,nodes:bA.currentFlowchart.nodes||[],edges:bA.currentFlowchart.edges||[],jsonInput:o,onJsonInputChange:d,onImportJson:lA,onUpdateFlowchart:$A,onBack:QA}):bA.currentGanttChart?n.jsx(P2,{ganttChart:bA.currentGanttChart,tasks:bA.currentGanttChart.tasks||[],onUpdateGanttChart:JA,onBack:QA}):bA.currentUseCaseDiagram?n.jsx(nQ,{useCaseDiagram:bA.currentUseCaseDiagram,actors:bA.currentUseCaseDiagram.actors||[],useCases:bA.currentUseCaseDiagram.useCases||[],relationships:bA.currentUseCaseDiagram.relationships||[],onUpdateUseCaseDiagram:G,onBack:QA}):bA.currentSequenceDiagram?n.jsx(rQ,{sequenceDiagram:bA.currentSequenceDiagram,participants:bA.currentSequenceDiagram.participants||[],messages:bA.currentSequenceDiagram.messages||[],onUpdateSequenceDiagram:pA,onBack:QA}):bA.currentArchitectureDiagram?n.jsx(oQ,{architectureDiagram:bA.currentArchitectureDiagram,components:bA.currentArchitectureDiagram.components||[],connections:bA.currentArchitectureDiagram.connections||[],onUpdateArchitectureDiagram:FA,onBack:QA}):bA.currentClassDiagram?n.jsx(lQ,{classDiagram:bA.currentClassDiagram,classes:bA.currentClassDiagram.classes||[],relationships:bA.currentClassDiagram.relationships||[],onUpdateClassDiagram:WA,onBack:QA}):bA.currentDomainModel?n.jsx(dQ,{domainModel:bA.currentDomainModel,entities:bA.currentDomainModel.entities||[],relationships:bA.currentDomainModel.relationships||[],onUpdateDomainModel:U,onBack:QA}):bA.currentMindMap?n.jsx(fQ,{mindMap:bA.currentMindMap,nodes:bA.currentMindMap.nodes||[],onUpdateMindMap:J,onBack:QA}):bA.currentActivityDiagram?n.jsx(gQ,{activityDiagram:bA.currentActivityDiagram,swimlanes:bA.currentActivityDiagram.swimlanes||[],nodes:bA.currentActivityDiagram.nodes||[],edges:bA.currentActivityDiagram.edges||[],onUpdateActivityDiagram:$,onBack:QA}):n.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",flex:1},children:[n.jsxs("div",{style:K.header,children:[n.jsx("h1",{style:K.headerTitle,children:"Visual Designer Suite"}),n.jsx("p",{style:K.headerSubtitle,children:"Create stunning diagrams and charts"})]}),n.jsx("div",{style:K.modeSelector,children:HA().map(L=>n.jsx("button",{onClick:()=>s(L.type),style:{...K.tabButton,...r===L.type?K.tabButtonActive(L.color):{}},onMouseEnter:X=>{r!==L.type&&Object.assign(X.target.style,K.tabButtonHover(L.color))},onMouseLeave:X=>{r!==L.type&&(X.target.style.background=K.tabButton.background,X.target.style.color=K.tabButton.color,X.target.style.borderColor="#e2e8f0",X.target.style.transform="none")},children:L.label},L.type))}),n.jsx("div",{style:{flex:1,padding:"24px",backgroundColor:"#ffffff",overflowY:"auto"},children:HA().find(L=>L.type===r)?.component})]})})})};Lb.createRoot(document.getElementById("root")).render(n.jsx(j.StrictMode,{children:n.jsx(xQ,{})}));
