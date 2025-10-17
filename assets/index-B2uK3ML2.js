(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const u of d)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function s(d){const u={};return d.integrity&&(u.integrity=d.integrity),d.referrerPolicy&&(u.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?u.credentials="include":d.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(d){if(d.ep)return;d.ep=!0;const u=s(d);fetch(d.href,u)}})();function QB(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var rd={exports:{}},wi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function UB(){if(Jg)return wi;Jg=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(o,d,u){var h=null;if(u!==void 0&&(h=""+u),d.key!==void 0&&(h=""+d.key),"key"in d){u={};for(var B in d)B!=="key"&&(u[B]=d[B])}else u=d;return d=u.ref,{$$typeof:i,type:o,key:h,ref:d!==void 0?d:null,props:u}}return wi.Fragment=r,wi.jsx=s,wi.jsxs=s,wi}var Zg;function FB(){return Zg||(Zg=1,rd.exports=UB()),rd.exports}var n=FB(),id={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function EB(){if(qg)return ie;qg=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function M(Q){return Q===null||typeof Q!="object"?null:(Q=E&&Q[E]||Q["@@iterator"],typeof Q=="function"?Q:null)}var aA={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,lA={};function pA(Q,G,sA){this.props=Q,this.context=G,this.refs=lA,this.updater=sA||aA}pA.prototype.isReactComponent={},pA.prototype.setState=function(Q,G){if(typeof Q!="object"&&typeof Q!="function"&&Q!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,Q,G,"setState")},pA.prototype.forceUpdate=function(Q){this.updater.enqueueForceUpdate(this,Q,"forceUpdate")};function QA(){}QA.prototype=pA.prototype;function cA(Q,G,sA){this.props=Q,this.context=G,this.refs=lA,this.updater=sA||aA}var DA=cA.prototype=new QA;DA.constructor=cA,_(DA,pA.prototype),DA.isPureReactComponent=!0;var yA=Array.isArray,gA={H:null,A:null,T:null,S:null,V:null},AA=Object.prototype.hasOwnProperty;function SA(Q,G,sA,oA,UA,HA){return sA=HA.ref,{$$typeof:i,type:Q,key:G,ref:sA!==void 0?sA:null,props:HA}}function V(Q,G){return SA(Q.type,G,void 0,void 0,void 0,Q.props)}function iA(Q){return typeof Q=="object"&&Q!==null&&Q.$$typeof===i}function uA(Q){var G={"=":"=0",":":"=2"};return"$"+Q.replace(/[=:]/g,function(sA){return G[sA]})}var EA=/\/+/g;function tA(Q,G){return typeof Q=="object"&&Q!==null&&Q.key!=null?uA(""+Q.key):G.toString(36)}function IA(){}function KA(Q){switch(Q.status){case"fulfilled":return Q.value;case"rejected":throw Q.reason;default:switch(typeof Q.status=="string"?Q.then(IA,IA):(Q.status="pending",Q.then(function(G){Q.status==="pending"&&(Q.status="fulfilled",Q.value=G)},function(G){Q.status==="pending"&&(Q.status="rejected",Q.reason=G)})),Q.status){case"fulfilled":return Q.value;case"rejected":throw Q.reason}}throw Q}function TA(Q,G,sA,oA,UA){var HA=typeof Q;(HA==="undefined"||HA==="boolean")&&(Q=null);var D=!1;if(Q===null)D=!0;else switch(HA){case"bigint":case"string":case"number":D=!0;break;case"object":switch(Q.$$typeof){case i:case r:D=!0;break;case v:return D=Q._init,TA(D(Q._payload),G,sA,oA,UA)}}if(D)return UA=UA(Q),D=oA===""?"."+tA(Q,0):oA,yA(UA)?(sA="",D!=null&&(sA=D.replace(EA,"$&/")+"/"),TA(UA,G,sA,"",function(dA){return dA})):UA!=null&&(iA(UA)&&(UA=V(UA,sA+(UA.key==null||Q&&Q.key===UA.key?"":(""+UA.key).replace(EA,"$&/")+"/")+D)),G.push(UA)),1;D=0;var CA=oA===""?".":oA+":";if(yA(Q))for(var jA=0;jA<Q.length;jA++)oA=Q[jA],HA=CA+tA(oA,jA),D+=TA(oA,G,sA,HA,UA);else if(jA=M(Q),typeof jA=="function")for(Q=jA.call(Q),jA=0;!(oA=Q.next()).done;)oA=oA.value,HA=CA+tA(oA,jA++),D+=TA(oA,G,sA,HA,UA);else if(HA==="object"){if(typeof Q.then=="function")return TA(KA(Q),G,sA,oA,UA);throw G=String(Q),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(Q).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return D}function R(Q,G,sA){if(Q==null)return Q;var oA=[],UA=0;return TA(Q,oA,"","",function(HA){return G.call(sA,HA,UA++)}),oA}function nA(Q){if(Q._status===-1){var G=Q._result;G=G(),G.then(function(sA){(Q._status===0||Q._status===-1)&&(Q._status=1,Q._result=sA)},function(sA){(Q._status===0||Q._status===-1)&&(Q._status=2,Q._result=sA)}),Q._status===-1&&(Q._status=0,Q._result=G)}if(Q._status===1)return Q._result.default;throw Q._result}var vA=typeof reportError=="function"?reportError:function(Q){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof Q=="object"&&Q!==null&&typeof Q.message=="string"?String(Q.message):String(Q),error:Q});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",Q);return}console.error(Q)};function LA(){}return ie.Children={map:R,forEach:function(Q,G,sA){R(Q,function(){G.apply(this,arguments)},sA)},count:function(Q){var G=0;return R(Q,function(){G++}),G},toArray:function(Q){return R(Q,function(G){return G})||[]},only:function(Q){if(!iA(Q))throw Error("React.Children.only expected to receive a single React element child.");return Q}},ie.Component=pA,ie.Fragment=s,ie.Profiler=d,ie.PureComponent=cA,ie.StrictMode=o,ie.Suspense=m,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=gA,ie.__COMPILER_RUNTIME={__proto__:null,c:function(Q){return gA.H.useMemoCache(Q)}},ie.cache=function(Q){return function(){return Q.apply(null,arguments)}},ie.cloneElement=function(Q,G,sA){if(Q==null)throw Error("The argument must be a React element, but you passed "+Q+".");var oA=_({},Q.props),UA=Q.key,HA=void 0;if(G!=null)for(D in G.ref!==void 0&&(HA=void 0),G.key!==void 0&&(UA=""+G.key),G)!AA.call(G,D)||D==="key"||D==="__self"||D==="__source"||D==="ref"&&G.ref===void 0||(oA[D]=G[D]);var D=arguments.length-2;if(D===1)oA.children=sA;else if(1<D){for(var CA=Array(D),jA=0;jA<D;jA++)CA[jA]=arguments[jA+2];oA.children=CA}return SA(Q.type,UA,void 0,void 0,HA,oA)},ie.createContext=function(Q){return Q={$$typeof:h,_currentValue:Q,_currentValue2:Q,_threadCount:0,Provider:null,Consumer:null},Q.Provider=Q,Q.Consumer={$$typeof:u,_context:Q},Q},ie.createElement=function(Q,G,sA){var oA,UA={},HA=null;if(G!=null)for(oA in G.key!==void 0&&(HA=""+G.key),G)AA.call(G,oA)&&oA!=="key"&&oA!=="__self"&&oA!=="__source"&&(UA[oA]=G[oA]);var D=arguments.length-2;if(D===1)UA.children=sA;else if(1<D){for(var CA=Array(D),jA=0;jA<D;jA++)CA[jA]=arguments[jA+2];UA.children=CA}if(Q&&Q.defaultProps)for(oA in D=Q.defaultProps,D)UA[oA]===void 0&&(UA[oA]=D[oA]);return SA(Q,HA,void 0,void 0,null,UA)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(Q){return{$$typeof:B,render:Q}},ie.isValidElement=iA,ie.lazy=function(Q){return{$$typeof:v,_payload:{_status:-1,_result:Q},_init:nA}},ie.memo=function(Q,G){return{$$typeof:w,type:Q,compare:G===void 0?null:G}},ie.startTransition=function(Q){var G=gA.T,sA={};gA.T=sA;try{var oA=Q(),UA=gA.S;UA!==null&&UA(sA,oA),typeof oA=="object"&&oA!==null&&typeof oA.then=="function"&&oA.then(LA,vA)}catch(HA){vA(HA)}finally{gA.T=G}},ie.unstable_useCacheRefresh=function(){return gA.H.useCacheRefresh()},ie.use=function(Q){return gA.H.use(Q)},ie.useActionState=function(Q,G,sA){return gA.H.useActionState(Q,G,sA)},ie.useCallback=function(Q,G){return gA.H.useCallback(Q,G)},ie.useContext=function(Q){return gA.H.useContext(Q)},ie.useDebugValue=function(){},ie.useDeferredValue=function(Q,G){return gA.H.useDeferredValue(Q,G)},ie.useEffect=function(Q,G,sA){var oA=gA.H;if(typeof sA=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return oA.useEffect(Q,G)},ie.useId=function(){return gA.H.useId()},ie.useImperativeHandle=function(Q,G,sA){return gA.H.useImperativeHandle(Q,G,sA)},ie.useInsertionEffect=function(Q,G){return gA.H.useInsertionEffect(Q,G)},ie.useLayoutEffect=function(Q,G){return gA.H.useLayoutEffect(Q,G)},ie.useMemo=function(Q,G){return gA.H.useMemo(Q,G)},ie.useOptimistic=function(Q,G){return gA.H.useOptimistic(Q,G)},ie.useReducer=function(Q,G,sA){return gA.H.useReducer(Q,G,sA)},ie.useRef=function(Q){return gA.H.useRef(Q)},ie.useState=function(Q){return gA.H.useState(Q)},ie.useSyncExternalStore=function(Q,G,sA){return gA.H.useSyncExternalStore(Q,G,sA)},ie.useTransition=function(){return gA.H.useTransition()},ie.version="19.1.0",ie}var Wg;function tu(){return Wg||(Wg=1,id.exports=EB()),id.exports}var k=tu();const SB=QB(k);var od={exports:{}},yi={},sd={exports:{}},ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function jB(){return $g||($g=1,function(i){function r(R,nA){var vA=R.length;R.push(nA);A:for(;0<vA;){var LA=vA-1>>>1,Q=R[LA];if(0<d(Q,nA))R[LA]=nA,R[vA]=Q,vA=LA;else break A}}function s(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var nA=R[0],vA=R.pop();if(vA!==nA){R[0]=vA;A:for(var LA=0,Q=R.length,G=Q>>>1;LA<G;){var sA=2*(LA+1)-1,oA=R[sA],UA=sA+1,HA=R[UA];if(0>d(oA,vA))UA<Q&&0>d(HA,oA)?(R[LA]=HA,R[UA]=vA,LA=UA):(R[LA]=oA,R[sA]=vA,LA=sA);else if(UA<Q&&0>d(HA,vA))R[LA]=HA,R[UA]=vA,LA=UA;else break A}}return nA}function d(R,nA){var vA=R.sortIndex-nA.sortIndex;return vA!==0?vA:R.id-nA.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,B=h.now();i.unstable_now=function(){return h.now()-B}}var m=[],w=[],v=1,E=null,M=3,aA=!1,_=!1,lA=!1,pA=!1,QA=typeof setTimeout=="function"?setTimeout:null,cA=typeof clearTimeout=="function"?clearTimeout:null,DA=typeof setImmediate<"u"?setImmediate:null;function yA(R){for(var nA=s(w);nA!==null;){if(nA.callback===null)o(w);else if(nA.startTime<=R)o(w),nA.sortIndex=nA.expirationTime,r(m,nA);else break;nA=s(w)}}function gA(R){if(lA=!1,yA(R),!_)if(s(m)!==null)_=!0,AA||(AA=!0,tA());else{var nA=s(w);nA!==null&&TA(gA,nA.startTime-R)}}var AA=!1,SA=-1,V=5,iA=-1;function uA(){return pA?!0:!(i.unstable_now()-iA<V)}function EA(){if(pA=!1,AA){var R=i.unstable_now();iA=R;var nA=!0;try{A:{_=!1,lA&&(lA=!1,cA(SA),SA=-1),aA=!0;var vA=M;try{e:{for(yA(R),E=s(m);E!==null&&!(E.expirationTime>R&&uA());){var LA=E.callback;if(typeof LA=="function"){E.callback=null,M=E.priorityLevel;var Q=LA(E.expirationTime<=R);if(R=i.unstable_now(),typeof Q=="function"){E.callback=Q,yA(R),nA=!0;break e}E===s(m)&&o(m),yA(R)}else o(m);E=s(m)}if(E!==null)nA=!0;else{var G=s(w);G!==null&&TA(gA,G.startTime-R),nA=!1}}break A}finally{E=null,M=vA,aA=!1}nA=void 0}}finally{nA?tA():AA=!1}}}var tA;if(typeof DA=="function")tA=function(){DA(EA)};else if(typeof MessageChannel<"u"){var IA=new MessageChannel,KA=IA.port2;IA.port1.onmessage=EA,tA=function(){KA.postMessage(null)}}else tA=function(){QA(EA,0)};function TA(R,nA){SA=QA(function(){R(i.unstable_now())},nA)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(R){R.callback=null},i.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<R?Math.floor(1e3/R):5},i.unstable_getCurrentPriorityLevel=function(){return M},i.unstable_next=function(R){switch(M){case 1:case 2:case 3:var nA=3;break;default:nA=M}var vA=M;M=nA;try{return R()}finally{M=vA}},i.unstable_requestPaint=function(){pA=!0},i.unstable_runWithPriority=function(R,nA){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var vA=M;M=R;try{return nA()}finally{M=vA}},i.unstable_scheduleCallback=function(R,nA,vA){var LA=i.unstable_now();switch(typeof vA=="object"&&vA!==null?(vA=vA.delay,vA=typeof vA=="number"&&0<vA?LA+vA:LA):vA=LA,R){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=vA+Q,R={id:v++,callback:nA,priorityLevel:R,startTime:vA,expirationTime:Q,sortIndex:-1},vA>LA?(R.sortIndex=vA,r(w,R),s(m)===null&&R===s(w)&&(lA?(cA(SA),SA=-1):lA=!0,TA(gA,vA-LA))):(R.sortIndex=Q,r(m,R),_||aA||(_=!0,AA||(AA=!0,tA()))),R},i.unstable_shouldYield=uA,i.unstable_wrapCallback=function(R){var nA=M;return function(){var vA=M;M=nA;try{return R.apply(this,arguments)}finally{M=vA}}}}(ld)),ld}var Pg;function HB(){return Pg||(Pg=1,sd.exports=jB()),sd.exports}var cd={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function NB(){if(Ap)return ht;Ap=1;var i=tu();function r(m){var w="https://react.dev/errors/"+m;if(1<arguments.length){w+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)w+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+w+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function u(m,w,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:E==null?null:""+E,children:m,containerInfo:w,implementation:v}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function B(m,w){if(m==="font")return"";if(typeof w=="string")return w==="use-credentials"?w:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ht.createPortal=function(m,w){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!w||w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11)throw Error(r(299));return u(m,w,null,v)},ht.flushSync=function(m){var w=h.T,v=o.p;try{if(h.T=null,o.p=2,m)return m()}finally{h.T=w,o.p=v,o.d.f()}},ht.preconnect=function(m,w){typeof m=="string"&&(w?(w=w.crossOrigin,w=typeof w=="string"?w==="use-credentials"?w:"":void 0):w=null,o.d.C(m,w))},ht.prefetchDNS=function(m){typeof m=="string"&&o.d.D(m)},ht.preinit=function(m,w){if(typeof m=="string"&&w&&typeof w.as=="string"){var v=w.as,E=B(v,w.crossOrigin),M=typeof w.integrity=="string"?w.integrity:void 0,aA=typeof w.fetchPriority=="string"?w.fetchPriority:void 0;v==="style"?o.d.S(m,typeof w.precedence=="string"?w.precedence:void 0,{crossOrigin:E,integrity:M,fetchPriority:aA}):v==="script"&&o.d.X(m,{crossOrigin:E,integrity:M,fetchPriority:aA,nonce:typeof w.nonce=="string"?w.nonce:void 0})}},ht.preinitModule=function(m,w){if(typeof m=="string")if(typeof w=="object"&&w!==null){if(w.as==null||w.as==="script"){var v=B(w.as,w.crossOrigin);o.d.M(m,{crossOrigin:v,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0})}}else w==null&&o.d.M(m)},ht.preload=function(m,w){if(typeof m=="string"&&typeof w=="object"&&w!==null&&typeof w.as=="string"){var v=w.as,E=B(v,w.crossOrigin);o.d.L(m,v,{crossOrigin:E,integrity:typeof w.integrity=="string"?w.integrity:void 0,nonce:typeof w.nonce=="string"?w.nonce:void 0,type:typeof w.type=="string"?w.type:void 0,fetchPriority:typeof w.fetchPriority=="string"?w.fetchPriority:void 0,referrerPolicy:typeof w.referrerPolicy=="string"?w.referrerPolicy:void 0,imageSrcSet:typeof w.imageSrcSet=="string"?w.imageSrcSet:void 0,imageSizes:typeof w.imageSizes=="string"?w.imageSizes:void 0,media:typeof w.media=="string"?w.media:void 0})}},ht.preloadModule=function(m,w){if(typeof m=="string")if(w){var v=B(w.as,w.crossOrigin);o.d.m(m,{as:typeof w.as=="string"&&w.as!=="script"?w.as:void 0,crossOrigin:v,integrity:typeof w.integrity=="string"?w.integrity:void 0})}else o.d.m(m)},ht.requestFormReset=function(m){o.d.r(m)},ht.unstable_batchedUpdates=function(m,w){return m(w)},ht.useFormState=function(m,w,v){return h.H.useFormState(m,w,v)},ht.useFormStatus=function(){return h.H.useHostTransitionStatus()},ht.version="19.1.0",ht}var ep;function kB(){if(ep)return cd.exports;ep=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),cd.exports=NB(),cd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function MB(){if(tp)return yi;tp=1;var i=HB(),r=tu(),s=kB();function o(A){var e="https://react.dev/errors/"+A;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+A+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)}function u(A){var e=A,t=A;if(A.alternate)for(;e.return;)e=e.return;else{A=e;do e=A,(e.flags&4098)!==0&&(t=e.return),A=e.return;while(A)}return e.tag===3?t:null}function h(A){if(A.tag===13){var e=A.memoizedState;if(e===null&&(A=A.alternate,A!==null&&(e=A.memoizedState)),e!==null)return e.dehydrated}return null}function B(A){if(u(A)!==A)throw Error(o(188))}function m(A){var e=A.alternate;if(!e){if(e=u(A),e===null)throw Error(o(188));return e!==A?null:A}for(var t=A,a=e;;){var l=t.return;if(l===null)break;var c=l.alternate;if(c===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===t)return B(l),A;if(c===a)return B(l),e;c=c.sibling}throw Error(o(188))}if(t.return!==a.return)t=l,a=c;else{for(var p=!1,y=l.child;y;){if(y===t){p=!0,t=l,a=c;break}if(y===a){p=!0,a=l,t=c;break}y=y.sibling}if(!p){for(y=c.child;y;){if(y===t){p=!0,t=c,a=l;break}if(y===a){p=!0,a=c,t=l;break}y=y.sibling}if(!p)throw Error(o(189))}}if(t.alternate!==a)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?A:e}function w(A){var e=A.tag;if(e===5||e===26||e===27||e===6)return A;for(A=A.child;A!==null;){if(e=w(A),e!==null)return e;A=A.sibling}return null}var v=Object.assign,E=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),aA=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),lA=Symbol.for("react.strict_mode"),pA=Symbol.for("react.profiler"),QA=Symbol.for("react.provider"),cA=Symbol.for("react.consumer"),DA=Symbol.for("react.context"),yA=Symbol.for("react.forward_ref"),gA=Symbol.for("react.suspense"),AA=Symbol.for("react.suspense_list"),SA=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),iA=Symbol.for("react.activity"),uA=Symbol.for("react.memo_cache_sentinel"),EA=Symbol.iterator;function tA(A){return A===null||typeof A!="object"?null:(A=EA&&A[EA]||A["@@iterator"],typeof A=="function"?A:null)}var IA=Symbol.for("react.client.reference");function KA(A){if(A==null)return null;if(typeof A=="function")return A.$$typeof===IA?null:A.displayName||A.name||null;if(typeof A=="string")return A;switch(A){case _:return"Fragment";case pA:return"Profiler";case lA:return"StrictMode";case gA:return"Suspense";case AA:return"SuspenseList";case iA:return"Activity"}if(typeof A=="object")switch(A.$$typeof){case aA:return"Portal";case DA:return(A.displayName||"Context")+".Provider";case cA:return(A._context.displayName||"Context")+".Consumer";case yA:var e=A.render;return A=A.displayName,A||(A=e.displayName||e.name||"",A=A!==""?"ForwardRef("+A+")":"ForwardRef"),A;case SA:return e=A.displayName||null,e!==null?e:KA(A.type)||"Memo";case V:e=A._payload,A=A._init;try{return KA(A(e))}catch{}}return null}var TA=Array.isArray,R=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nA=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,vA={pending:!1,data:null,method:null,action:null},LA=[],Q=-1;function G(A){return{current:A}}function sA(A){0>Q||(A.current=LA[Q],LA[Q]=null,Q--)}function oA(A,e){Q++,LA[Q]=A.current,A.current=e}var UA=G(null),HA=G(null),D=G(null),CA=G(null);function jA(A,e){switch(oA(D,e),oA(HA,A),oA(UA,null),e.nodeType){case 9:case 11:A=(A=e.documentElement)&&(A=A.namespaceURI)?yg(A):0;break;default:if(A=e.tagName,e=e.namespaceURI)e=yg(e),A=vg(e,A);else switch(A){case"svg":A=1;break;case"math":A=2;break;default:A=0}}sA(UA),oA(UA,A)}function dA(){sA(UA),sA(HA),sA(D)}function I(A){A.memoizedState!==null&&oA(CA,A);var e=UA.current,t=vg(e,A.type);e!==t&&(oA(HA,A),oA(UA,t))}function q(A){HA.current===A&&(sA(UA),sA(HA)),CA.current===A&&(sA(CA),pi._currentValue=vA)}var MA=Object.prototype.hasOwnProperty,O=i.unstable_scheduleCallback,wA=i.unstable_cancelCallback,VA=i.unstable_shouldYield,WA=i.unstable_requestPaint,PA=i.unstable_now,ae=i.unstable_getCurrentPriorityLevel,de=i.unstable_ImmediatePriority,ze=i.unstable_UserBlockingPriority,Se=i.unstable_NormalPriority,Ve=i.unstable_LowPriority,Le=i.unstable_IdlePriority,Ye=i.log,We=i.unstable_setDisableYieldValue,xe=null,ue=null;function x(A){if(typeof Ye=="function"&&We(A),ue&&typeof ue.setStrictMode=="function")try{ue.setStrictMode(xe,A)}catch{}}var F=Math.clz32?Math.clz32:J,T=Math.log,W=Math.LN2;function J(A){return A>>>=0,A===0?32:31-(T(A)/W|0)|0}var hA=256,j=4194304;function xA(A){var e=A&42;if(e!==0)return e;switch(A&-A){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return A&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return A}}function BA(A,e,t){var a=A.pendingLanes;if(a===0)return 0;var l=0,c=A.suspendedLanes,p=A.pingedLanes;A=A.warmLanes;var y=a&134217727;return y!==0?(a=y&~c,a!==0?l=xA(a):(p&=y,p!==0?l=xA(p):t||(t=y&~A,t!==0&&(l=xA(t))))):(y=a&~c,y!==0?l=xA(y):p!==0?l=xA(p):t||(t=a&~A,t!==0&&(l=xA(t)))),l===0?0:e!==0&&e!==l&&(e&c)===0&&(c=l&-l,t=e&-e,c>=t||c===32&&(t&4194048)!==0)?e:l}function NA(A,e){return(A.pendingLanes&~(A.suspendedLanes&~A.pingedLanes)&e)===0}function JA(A,e){switch(A){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OA(){var A=hA;return hA<<=1,(hA&4194048)===0&&(hA=256),A}function te(){var A=j;return j<<=1,(j&62914560)===0&&(j=4194304),A}function $A(A){for(var e=[],t=0;31>t;t++)e.push(A);return e}function he(A,e){A.pendingLanes|=e,e!==268435456&&(A.suspendedLanes=0,A.pingedLanes=0,A.warmLanes=0)}function Me(A,e,t,a,l,c){var p=A.pendingLanes;A.pendingLanes=t,A.suspendedLanes=0,A.pingedLanes=0,A.warmLanes=0,A.expiredLanes&=t,A.entangledLanes&=t,A.errorRecoveryDisabledLanes&=t,A.shellSuspendCounter=0;var y=A.entanglements,N=A.expirationTimes,Z=A.hiddenUpdates;for(t=p&~t;0<t;){var fA=31-F(t),bA=1<<fA;y[fA]=0,N[fA]=-1;var $=Z[fA];if($!==null)for(Z[fA]=null,fA=0;fA<$.length;fA++){var P=$[fA];P!==null&&(P.lane&=-536870913)}t&=~bA}a!==0&&je(A,a,0),c!==0&&l===0&&A.tag!==0&&(A.suspendedLanes|=c&~(p&~e))}function je(A,e,t){A.pendingLanes|=e,A.suspendedLanes&=~e;var a=31-F(e);A.entangledLanes|=e,A.entanglements[a]=A.entanglements[a]|1073741824|t&4194090}function re(A,e){var t=A.entangledLanes|=e;for(A=A.entanglements;t;){var a=31-F(t),l=1<<a;l&e|A[a]&e&&(A[a]|=e),t&=~l}}function g(A){switch(A){case 2:A=1;break;case 8:A=4;break;case 32:A=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:A=128;break;case 268435456:A=134217728;break;default:A=0}return A}function S(A){return A&=-A,2<A?8<A?(A&134217727)!==0?32:268435456:8:2}function f(){var A=nA.p;return A!==0?A:(A=window.event,A===void 0?32:zg(A.type))}function b(A,e){var t=nA.p;try{return nA.p=A,e()}finally{nA.p=t}}var C=Math.random().toString(36).slice(2),U="__reactFiber$"+C,H="__reactProps$"+C,Y="__reactContainer$"+C,K="__reactEvents$"+C,eA="__reactListeners$"+C,rA="__reactHandles$"+C,_A="__reactResources$"+C,FA="__reactMarker$"+C;function RA(A){delete A[U],delete A[H],delete A[K],delete A[eA],delete A[rA]}function ZA(A){var e=A[U];if(e)return e;for(var t=A.parentNode;t;){if(e=t[Y]||t[U]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(A=Fg(A);A!==null;){if(t=A[U])return t;A=Fg(A)}return e}A=t,t=A.parentNode}return null}function ge(A){if(A=A[U]||A[Y]){var e=A.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return A}return null}function we(A){var e=A.tag;if(e===5||e===26||e===27||e===6)return A.stateNode;throw Error(o(33))}function Oe(A){var e=A[_A];return e||(e=A[_A]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function De(A){A[FA]=!0}var oa=new Set,Ct={};function sa(A,e){Na(A,e),Na(A+"Capture",e)}function Na(A,e){for(Ct[A]=e,A=0;A<e.length;A++)oa.add(e[A])}var xx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uu={},fu={};function mx(A){return MA.call(fu,A)?!0:MA.call(uu,A)?!1:xx.test(A)?fu[A]=!0:(uu[A]=!0,!1)}function Ji(A,e,t){if(mx(e))if(t===null)A.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":A.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){A.removeAttribute(e);return}}A.setAttribute(e,""+t)}}function Zi(A,e,t){if(t===null)A.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":A.removeAttribute(e);return}A.setAttribute(e,""+t)}}function on(A,e,t,a){if(a===null)A.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":A.removeAttribute(t);return}A.setAttributeNS(e,t,""+a)}}var Ps,hu;function ka(A){if(Ps===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ps=e&&e[1]||"",hu=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ps+A+hu}var Al=!1;function el(A,e){if(!A||Al)return"";Al=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var bA=function(){throw Error()};if(Object.defineProperty(bA.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bA,[])}catch(P){var $=P}Reflect.construct(A,[],bA)}else{try{bA.call()}catch(P){$=P}A.call(bA.prototype)}}else{try{throw Error()}catch(P){$=P}(bA=A())&&typeof bA.catch=="function"&&bA.catch(function(){})}}catch(P){if(P&&$&&typeof P.stack=="string")return[P.stack,$.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=a.DetermineComponentFrameRoot(),p=c[0],y=c[1];if(p&&y){var N=p.split(`
`),Z=y.split(`
`);for(l=a=0;a<N.length&&!N[a].includes("DetermineComponentFrameRoot");)a++;for(;l<Z.length&&!Z[l].includes("DetermineComponentFrameRoot");)l++;if(a===N.length||l===Z.length)for(a=N.length-1,l=Z.length-1;1<=a&&0<=l&&N[a]!==Z[l];)l--;for(;1<=a&&0<=l;a--,l--)if(N[a]!==Z[l]){if(a!==1||l!==1)do if(a--,l--,0>l||N[a]!==Z[l]){var fA=`
`+N[a].replace(" at new "," at ");return A.displayName&&fA.includes("<anonymous>")&&(fA=fA.replace("<anonymous>",A.displayName)),fA}while(1<=a&&0<=l);break}}}finally{Al=!1,Error.prepareStackTrace=t}return(t=A?A.displayName||A.name:"")?ka(t):""}function Bx(A){switch(A.tag){case 26:case 27:case 5:return ka(A.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 15:return el(A.type,!1);case 11:return el(A.type.render,!1);case 1:return el(A.type,!0);case 31:return ka("Activity");default:return""}}function gu(A){try{var e="";do e+=Bx(A),A=A.return;while(A);return e}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function kt(A){switch(typeof A){case"bigint":case"boolean":case"number":case"string":case"undefined":return A;case"object":return A;default:return""}}function pu(A){var e=A.type;return(A=A.nodeName)&&A.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bx(A){var e=pu(A)?"checked":"value",t=Object.getOwnPropertyDescriptor(A.constructor.prototype,e),a=""+A[e];if(!A.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,c=t.set;return Object.defineProperty(A,e,{configurable:!0,get:function(){return l.call(this)},set:function(p){a=""+p,c.call(this,p)}}),Object.defineProperty(A,e,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){A._valueTracker=null,delete A[e]}}}}function qi(A){A._valueTracker||(A._valueTracker=bx(A))}function xu(A){if(!A)return!1;var e=A._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return A&&(a=pu(A)?A.checked?"true":"false":A.value),A=a,A!==t?(e.setValue(A),!0):!1}function Wi(A){if(A=A||(typeof document<"u"?document:void 0),typeof A>"u")return null;try{return A.activeElement||A.body}catch{return A.body}}var wx=/[\n"\\]/g;function Mt(A){return A.replace(wx,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function tl(A,e,t,a,l,c,p,y){A.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?A.type=p:A.removeAttribute("type"),e!=null?p==="number"?(e===0&&A.value===""||A.value!=e)&&(A.value=""+kt(e)):A.value!==""+kt(e)&&(A.value=""+kt(e)):p!=="submit"&&p!=="reset"||A.removeAttribute("value"),e!=null?nl(A,p,kt(e)):t!=null?nl(A,p,kt(t)):a!=null&&A.removeAttribute("value"),l==null&&c!=null&&(A.defaultChecked=!!c),l!=null&&(A.checked=l&&typeof l!="function"&&typeof l!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?A.name=""+kt(y):A.removeAttribute("name")}function mu(A,e,t,a,l,c,p,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(A.type=c),e!=null||t!=null){if(!(c!=="submit"&&c!=="reset"||e!=null))return;t=t!=null?""+kt(t):"",e=e!=null?""+kt(e):t,y||e===A.value||(A.value=e),A.defaultValue=e}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,A.checked=y?A.checked:!!a,A.defaultChecked=!!a,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(A.name=p)}function nl(A,e,t){e==="number"&&Wi(A.ownerDocument)===A||A.defaultValue===""+t||(A.defaultValue=""+t)}function Ma(A,e,t,a){if(A=A.options,e){e={};for(var l=0;l<t.length;l++)e["$"+t[l]]=!0;for(t=0;t<A.length;t++)l=e.hasOwnProperty("$"+A[t].value),A[t].selected!==l&&(A[t].selected=l),l&&a&&(A[t].defaultSelected=!0)}else{for(t=""+kt(t),e=null,l=0;l<A.length;l++){if(A[l].value===t){A[l].selected=!0,a&&(A[l].defaultSelected=!0);return}e!==null||A[l].disabled||(e=A[l])}e!==null&&(e.selected=!0)}}function Bu(A,e,t){if(e!=null&&(e=""+kt(e),e!==A.value&&(A.value=e),t==null)){A.defaultValue!==e&&(A.defaultValue=e);return}A.defaultValue=t!=null?""+kt(t):""}function bu(A,e,t,a){if(e==null){if(a!=null){if(t!=null)throw Error(o(92));if(TA(a)){if(1<a.length)throw Error(o(93));a=a[0]}t=a}t==null&&(t=""),e=t}t=kt(e),A.defaultValue=t,a=A.textContent,a===t&&a!==""&&a!==null&&(A.value=a)}function Da(A,e){if(e){var t=A.firstChild;if(t&&t===A.lastChild&&t.nodeType===3){t.nodeValue=e;return}}A.textContent=e}var yx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wu(A,e,t){var a=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?A.setProperty(e,""):e==="float"?A.cssFloat="":A[e]="":a?A.setProperty(e,t):typeof t!="number"||t===0||yx.has(e)?e==="float"?A.cssFloat=t:A[e]=(""+t).trim():A[e]=t+"px"}function yu(A,e,t){if(e!=null&&typeof e!="object")throw Error(o(62));if(A=A.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?A.setProperty(a,""):a==="float"?A.cssFloat="":A[a]="");for(var l in e)a=e[l],e.hasOwnProperty(l)&&t[l]!==a&&wu(A,l,a)}else for(var c in e)e.hasOwnProperty(c)&&wu(A,c,e[c])}function al(A){if(A.indexOf("-")===-1)return!1;switch(A){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $i(A){return Cx.test(""+A)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":A}var rl=null;function il(A){return A=A.target||A.srcElement||window,A.correspondingUseElement&&(A=A.correspondingUseElement),A.nodeType===3?A.parentNode:A}var Ta=null,Ia=null;function vu(A){var e=ge(A);if(e&&(A=e.stateNode)){var t=A[H]||null;A:switch(A=e.stateNode,e.type){case"input":if(tl(A,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=A;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Mt(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==A&&a.form===A.form){var l=a[H]||null;if(!l)throw Error(o(90));tl(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<t.length;e++)a=t[e],a.form===A.form&&xu(a)}break A;case"textarea":Bu(A,t.value,t.defaultValue);break A;case"select":e=t.value,e!=null&&Ma(A,!!t.multiple,e,!1)}}}var ol=!1;function Cu(A,e,t){if(ol)return A(e,t);ol=!0;try{var a=A(e);return a}finally{if(ol=!1,(Ta!==null||Ia!==null)&&(Lo(),Ta&&(e=Ta,A=Ia,Ia=Ta=null,vu(e),A)))for(e=0;e<A.length;e++)vu(A[e])}}function Sr(A,e){var t=A.stateNode;if(t===null)return null;var a=t[H]||null;if(a===null)return null;t=a[e];A:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(A=A.type,a=!(A==="button"||A==="input"||A==="select"||A==="textarea")),A=!a;break A;default:A=!1}if(A)return null;if(t&&typeof t!="function")throw Error(o(231,e,typeof t));return t}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sl=!1;if(sn)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){sl=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{sl=!1}var Sn=null,ll=null,Pi=null;function Qu(){if(Pi)return Pi;var A,e=ll,t=e.length,a,l="value"in Sn?Sn.value:Sn.textContent,c=l.length;for(A=0;A<t&&e[A]===l[A];A++);var p=t-A;for(a=1;a<=p&&e[t-a]===l[c-a];a++);return Pi=l.slice(A,1<a?1-a:void 0)}function Ao(A){var e=A.keyCode;return"charCode"in A?(A=A.charCode,A===0&&e===13&&(A=13)):A=e,A===10&&(A=13),32<=A||A===13?A:0}function eo(){return!0}function Uu(){return!1}function Bt(A){function e(t,a,l,c,p){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var y in A)A.hasOwnProperty(y)&&(t=A[y],this[y]=t?t(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?eo:Uu,this.isPropagationStopped=Uu,this}return v(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),e}var la={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(A){return A.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},to=Bt(la),Hr=v({},la,{view:0,detail:0}),Qx=Bt(Hr),cl,dl,Nr,no=v({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fl,button:0,buttons:0,relatedTarget:function(A){return A.relatedTarget===void 0?A.fromElement===A.srcElement?A.toElement:A.fromElement:A.relatedTarget},movementX:function(A){return"movementX"in A?A.movementX:(A!==Nr&&(Nr&&A.type==="mousemove"?(cl=A.screenX-Nr.screenX,dl=A.screenY-Nr.screenY):dl=cl=0,Nr=A),cl)},movementY:function(A){return"movementY"in A?A.movementY:dl}}),Fu=Bt(no),Ux=v({},no,{dataTransfer:0}),Fx=Bt(Ux),Ex=v({},Hr,{relatedTarget:0}),ul=Bt(Ex),Sx=v({},la,{animationName:0,elapsedTime:0,pseudoElement:0}),jx=Bt(Sx),Hx=v({},la,{clipboardData:function(A){return"clipboardData"in A?A.clipboardData:window.clipboardData}}),Nx=Bt(Hx),kx=v({},la,{data:0}),Eu=Bt(kx),Mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ix(A){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(A):(A=Tx[A])?!!e[A]:!1}function fl(){return Ix}var Lx=v({},Hr,{key:function(A){if(A.key){var e=Mx[A.key]||A.key;if(e!=="Unidentified")return e}return A.type==="keypress"?(A=Ao(A),A===13?"Enter":String.fromCharCode(A)):A.type==="keydown"||A.type==="keyup"?Dx[A.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fl,charCode:function(A){return A.type==="keypress"?Ao(A):0},keyCode:function(A){return A.type==="keydown"||A.type==="keyup"?A.keyCode:0},which:function(A){return A.type==="keypress"?Ao(A):A.type==="keydown"||A.type==="keyup"?A.keyCode:0}}),Ox=Bt(Lx),Kx=v({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Su=Bt(Kx),Rx=v({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fl}),zx=Bt(Rx),_x=v({},la,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gx=Bt(_x),Vx=v({},no,{deltaX:function(A){return"deltaX"in A?A.deltaX:"wheelDeltaX"in A?-A.wheelDeltaX:0},deltaY:function(A){return"deltaY"in A?A.deltaY:"wheelDeltaY"in A?-A.wheelDeltaY:"wheelDelta"in A?-A.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=Bt(Vx),Xx=v({},la,{newState:0,oldState:0}),Jx=Bt(Xx),Zx=[9,13,27,32],hl=sn&&"CompositionEvent"in window,kr=null;sn&&"documentMode"in document&&(kr=document.documentMode);var qx=sn&&"TextEvent"in window&&!kr,ju=sn&&(!hl||kr&&8<kr&&11>=kr),Hu=" ",Nu=!1;function ku(A,e){switch(A){case"keyup":return Zx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mu(A){return A=A.detail,typeof A=="object"&&"data"in A?A.data:null}var La=!1;function Wx(A,e){switch(A){case"compositionend":return Mu(e);case"keypress":return e.which!==32?null:(Nu=!0,Hu);case"textInput":return A=e.data,A===Hu&&Nu?null:A;default:return null}}function $x(A,e){if(La)return A==="compositionend"||!hl&&ku(A,e)?(A=Qu(),Pi=ll=Sn=null,La=!1,A):null;switch(A){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ju&&e.locale!=="ko"?null:e.data;default:return null}}var Px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Du(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e==="input"?!!Px[A.type]:e==="textarea"}function Tu(A,e,t,a){Ta?Ia?Ia.push(a):Ia=[a]:Ta=a,e=Go(e,"onChange"),0<e.length&&(t=new to("onChange","change",null,t,a),A.push({event:t,listeners:e}))}var Mr=null,Dr=null;function Am(A){xg(A,0)}function ao(A){var e=we(A);if(xu(e))return A}function Iu(A,e){if(A==="change")return e}var Lu=!1;if(sn){var gl;if(sn){var pl="oninput"in document;if(!pl){var Ou=document.createElement("div");Ou.setAttribute("oninput","return;"),pl=typeof Ou.oninput=="function"}gl=pl}else gl=!1;Lu=gl&&(!document.documentMode||9<document.documentMode)}function Ku(){Mr&&(Mr.detachEvent("onpropertychange",Ru),Dr=Mr=null)}function Ru(A){if(A.propertyName==="value"&&ao(Dr)){var e=[];Tu(e,Dr,A,il(A)),Cu(Am,e)}}function em(A,e,t){A==="focusin"?(Ku(),Mr=e,Dr=t,Mr.attachEvent("onpropertychange",Ru)):A==="focusout"&&Ku()}function tm(A){if(A==="selectionchange"||A==="keyup"||A==="keydown")return ao(Dr)}function nm(A,e){if(A==="click")return ao(e)}function am(A,e){if(A==="input"||A==="change")return ao(e)}function rm(A,e){return A===e&&(A!==0||1/A===1/e)||A!==A&&e!==e}var Qt=typeof Object.is=="function"?Object.is:rm;function Tr(A,e){if(Qt(A,e))return!0;if(typeof A!="object"||A===null||typeof e!="object"||e===null)return!1;var t=Object.keys(A),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!MA.call(e,l)||!Qt(A[l],e[l]))return!1}return!0}function zu(A){for(;A&&A.firstChild;)A=A.firstChild;return A}function _u(A,e){var t=zu(A);A=0;for(var a;t;){if(t.nodeType===3){if(a=A+t.textContent.length,A<=e&&a>=e)return{node:t,offset:e-A};A=a}A:{for(;t;){if(t.nextSibling){t=t.nextSibling;break A}t=t.parentNode}t=void 0}t=zu(t)}}function Gu(A,e){return A&&e?A===e?!0:A&&A.nodeType===3?!1:e&&e.nodeType===3?Gu(A,e.parentNode):"contains"in A?A.contains(e):A.compareDocumentPosition?!!(A.compareDocumentPosition(e)&16):!1:!1}function Vu(A){A=A!=null&&A.ownerDocument!=null&&A.ownerDocument.defaultView!=null?A.ownerDocument.defaultView:window;for(var e=Wi(A.document);e instanceof A.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)A=e.contentWindow;else break;e=Wi(A.document)}return e}function xl(A){var e=A&&A.nodeName&&A.nodeName.toLowerCase();return e&&(e==="input"&&(A.type==="text"||A.type==="search"||A.type==="tel"||A.type==="url"||A.type==="password")||e==="textarea"||A.contentEditable==="true")}var im=sn&&"documentMode"in document&&11>=document.documentMode,Oa=null,ml=null,Ir=null,Bl=!1;function Yu(A,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Bl||Oa==null||Oa!==Wi(a)||(a=Oa,"selectionStart"in a&&xl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ir&&Tr(Ir,a)||(Ir=a,a=Go(ml,"onSelect"),0<a.length&&(e=new to("onSelect","select",null,e,t),A.push({event:e,listeners:a}),e.target=Oa)))}function ca(A,e){var t={};return t[A.toLowerCase()]=e.toLowerCase(),t["Webkit"+A]="webkit"+e,t["Moz"+A]="moz"+e,t}var Ka={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionrun:ca("Transition","TransitionRun"),transitionstart:ca("Transition","TransitionStart"),transitioncancel:ca("Transition","TransitionCancel"),transitionend:ca("Transition","TransitionEnd")},bl={},Xu={};sn&&(Xu=document.createElement("div").style,"AnimationEvent"in window||(delete Ka.animationend.animation,delete Ka.animationiteration.animation,delete Ka.animationstart.animation),"TransitionEvent"in window||delete Ka.transitionend.transition);function da(A){if(bl[A])return bl[A];if(!Ka[A])return A;var e=Ka[A],t;for(t in e)if(e.hasOwnProperty(t)&&t in Xu)return bl[A]=e[t];return A}var Ju=da("animationend"),Zu=da("animationiteration"),qu=da("animationstart"),om=da("transitionrun"),sm=da("transitionstart"),lm=da("transitioncancel"),Wu=da("transitionend"),$u=new Map,wl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wl.push("scrollEnd");function Yt(A,e){$u.set(A,e),sa(e,[A])}var Pu=new WeakMap;function Dt(A,e){if(typeof A=="object"&&A!==null){var t=Pu.get(A);return t!==void 0?t:(e={value:A,source:e,stack:gu(e)},Pu.set(A,e),e)}return{value:A,source:e,stack:gu(e)}}var Tt=[],Ra=0,yl=0;function ro(){for(var A=Ra,e=yl=Ra=0;e<A;){var t=Tt[e];Tt[e++]=null;var a=Tt[e];Tt[e++]=null;var l=Tt[e];Tt[e++]=null;var c=Tt[e];if(Tt[e++]=null,a!==null&&l!==null){var p=a.pending;p===null?l.next=l:(l.next=p.next,p.next=l),a.pending=l}c!==0&&Af(t,l,c)}}function io(A,e,t,a){Tt[Ra++]=A,Tt[Ra++]=e,Tt[Ra++]=t,Tt[Ra++]=a,yl|=a,A.lanes|=a,A=A.alternate,A!==null&&(A.lanes|=a)}function vl(A,e,t,a){return io(A,e,t,a),oo(A)}function za(A,e){return io(A,null,null,e),oo(A)}function Af(A,e,t){A.lanes|=t;var a=A.alternate;a!==null&&(a.lanes|=t);for(var l=!1,c=A.return;c!==null;)c.childLanes|=t,a=c.alternate,a!==null&&(a.childLanes|=t),c.tag===22&&(A=c.stateNode,A===null||A._visibility&1||(l=!0)),A=c,c=c.return;return A.tag===3?(c=A.stateNode,l&&e!==null&&(l=31-F(t),A=c.hiddenUpdates,a=A[l],a===null?A[l]=[e]:a.push(e),e.lane=t|536870912),c):null}function oo(A){if(50<si)throw si=0,Sc=null,Error(o(185));for(var e=A.return;e!==null;)A=e,e=A.return;return A.tag===3?A.stateNode:null}var _a={};function cm(A,e,t,a){this.tag=A,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(A,e,t,a){return new cm(A,e,t,a)}function Cl(A){return A=A.prototype,!(!A||!A.isReactComponent)}function ln(A,e){var t=A.alternate;return t===null?(t=Ut(A.tag,e,A.key,A.mode),t.elementType=A.elementType,t.type=A.type,t.stateNode=A.stateNode,t.alternate=A,A.alternate=t):(t.pendingProps=e,t.type=A.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=A.flags&65011712,t.childLanes=A.childLanes,t.lanes=A.lanes,t.child=A.child,t.memoizedProps=A.memoizedProps,t.memoizedState=A.memoizedState,t.updateQueue=A.updateQueue,e=A.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=A.sibling,t.index=A.index,t.ref=A.ref,t.refCleanup=A.refCleanup,t}function ef(A,e){A.flags&=65011714;var t=A.alternate;return t===null?(A.childLanes=0,A.lanes=e,A.child=null,A.subtreeFlags=0,A.memoizedProps=null,A.memoizedState=null,A.updateQueue=null,A.dependencies=null,A.stateNode=null):(A.childLanes=t.childLanes,A.lanes=t.lanes,A.child=t.child,A.subtreeFlags=0,A.deletions=null,A.memoizedProps=t.memoizedProps,A.memoizedState=t.memoizedState,A.updateQueue=t.updateQueue,A.type=t.type,e=t.dependencies,A.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),A}function so(A,e,t,a,l,c){var p=0;if(a=A,typeof A=="function")Cl(A)&&(p=1);else if(typeof A=="string")p=uB(A,t,UA.current)?26:A==="html"||A==="head"||A==="body"?27:5;else A:switch(A){case iA:return A=Ut(31,t,e,l),A.elementType=iA,A.lanes=c,A;case _:return ua(t.children,l,c,e);case lA:p=8,l|=24;break;case pA:return A=Ut(12,t,e,l|2),A.elementType=pA,A.lanes=c,A;case gA:return A=Ut(13,t,e,l),A.elementType=gA,A.lanes=c,A;case AA:return A=Ut(19,t,e,l),A.elementType=AA,A.lanes=c,A;default:if(typeof A=="object"&&A!==null)switch(A.$$typeof){case QA:case DA:p=10;break A;case cA:p=9;break A;case yA:p=11;break A;case SA:p=14;break A;case V:p=16,a=null;break A}p=29,t=Error(o(130,A===null?"null":typeof A,"")),a=null}return e=Ut(p,t,e,l),e.elementType=A,e.type=a,e.lanes=c,e}function ua(A,e,t,a){return A=Ut(7,A,a,e),A.lanes=t,A}function Ql(A,e,t){return A=Ut(6,A,null,e),A.lanes=t,A}function Ul(A,e,t){return e=Ut(4,A.children!==null?A.children:[],A.key,e),e.lanes=t,e.stateNode={containerInfo:A.containerInfo,pendingChildren:null,implementation:A.implementation},e}var Ga=[],Va=0,lo=null,co=0,It=[],Lt=0,fa=null,cn=1,dn="";function ha(A,e){Ga[Va++]=co,Ga[Va++]=lo,lo=A,co=e}function tf(A,e,t){It[Lt++]=cn,It[Lt++]=dn,It[Lt++]=fa,fa=A;var a=cn;A=dn;var l=32-F(a)-1;a&=~(1<<l),t+=1;var c=32-F(e)+l;if(30<c){var p=l-l%5;c=(a&(1<<p)-1).toString(32),a>>=p,l-=p,cn=1<<32-F(e)+l|t<<l|a,dn=c+A}else cn=1<<c|t<<l|a,dn=A}function Fl(A){A.return!==null&&(ha(A,1),tf(A,1,0))}function El(A){for(;A===lo;)lo=Ga[--Va],Ga[Va]=null,co=Ga[--Va],Ga[Va]=null;for(;A===fa;)fa=It[--Lt],It[Lt]=null,dn=It[--Lt],It[Lt]=null,cn=It[--Lt],It[Lt]=null}var xt=null,_e=null,be=!1,ga=null,Wt=!1,Sl=Error(o(519));function pa(A){var e=Error(o(418,""));throw Kr(Dt(e,A)),Sl}function nf(A){var e=A.stateNode,t=A.type,a=A.memoizedProps;switch(e[U]=A,e[H]=a,t){case"dialog":ce("cancel",e),ce("close",e);break;case"iframe":case"object":case"embed":ce("load",e);break;case"video":case"audio":for(t=0;t<ci.length;t++)ce(ci[t],e);break;case"source":ce("error",e);break;case"img":case"image":case"link":ce("error",e),ce("load",e);break;case"details":ce("toggle",e);break;case"input":ce("invalid",e),mu(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),qi(e);break;case"select":ce("invalid",e);break;case"textarea":ce("invalid",e),bu(e,a.value,a.defaultValue,a.children),qi(e)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||a.suppressHydrationWarning===!0||wg(e.textContent,t)?(a.popover!=null&&(ce("beforetoggle",e),ce("toggle",e)),a.onScroll!=null&&ce("scroll",e),a.onScrollEnd!=null&&ce("scrollend",e),a.onClick!=null&&(e.onclick=Vo),e=!0):e=!1,e||pa(A)}function af(A){for(xt=A.return;xt;)switch(xt.tag){case 5:case 13:Wt=!1;return;case 27:case 3:Wt=!0;return;default:xt=xt.return}}function Lr(A){if(A!==xt)return!1;if(!be)return af(A),be=!0,!1;var e=A.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=A.type,t=!(t!=="form"&&t!=="button")||Vc(A.type,A.memoizedProps)),t=!t),t&&_e&&pa(A),af(A),e===13){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(o(317));A:{for(A=A.nextSibling,e=0;A;){if(A.nodeType===8)if(t=A.data,t==="/$"){if(e===0){_e=Jt(A.nextSibling);break A}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++;A=A.nextSibling}_e=null}}else e===27?(e=_e,Vn(A.type)?(A=Zc,Zc=null,_e=A):_e=e):_e=xt?Jt(A.stateNode.nextSibling):null;return!0}function Or(){_e=xt=null,be=!1}function rf(){var A=ga;return A!==null&&(yt===null?yt=A:yt.push.apply(yt,A),ga=null),A}function Kr(A){ga===null?ga=[A]:ga.push(A)}var jl=G(null),xa=null,un=null;function jn(A,e,t){oA(jl,e._currentValue),e._currentValue=t}function fn(A){A._currentValue=jl.current,sA(jl)}function Hl(A,e,t){for(;A!==null;){var a=A.alternate;if((A.childLanes&e)!==e?(A.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),A===t)break;A=A.return}}function Nl(A,e,t,a){var l=A.child;for(l!==null&&(l.return=A);l!==null;){var c=l.dependencies;if(c!==null){var p=l.child;c=c.firstContext;A:for(;c!==null;){var y=c;c=l;for(var N=0;N<e.length;N++)if(y.context===e[N]){c.lanes|=t,y=c.alternate,y!==null&&(y.lanes|=t),Hl(c.return,t,A),a||(p=null);break A}c=y.next}}else if(l.tag===18){if(p=l.return,p===null)throw Error(o(341));p.lanes|=t,c=p.alternate,c!==null&&(c.lanes|=t),Hl(p,t,A),p=null}else p=l.child;if(p!==null)p.return=l;else for(p=l;p!==null;){if(p===A){p=null;break}if(l=p.sibling,l!==null){l.return=p.return,p=l;break}p=p.return}l=p}}function Rr(A,e,t,a){A=null;for(var l=e,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var p=l.alternate;if(p===null)throw Error(o(387));if(p=p.memoizedProps,p!==null){var y=l.type;Qt(l.pendingProps.value,p.value)||(A!==null?A.push(y):A=[y])}}else if(l===CA.current){if(p=l.alternate,p===null)throw Error(o(387));p.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(A!==null?A.push(pi):A=[pi])}l=l.return}A!==null&&Nl(e,A,t,a),e.flags|=262144}function uo(A){for(A=A.firstContext;A!==null;){if(!Qt(A.context._currentValue,A.memoizedValue))return!0;A=A.next}return!1}function ma(A){xa=A,un=null,A=A.dependencies,A!==null&&(A.firstContext=null)}function ft(A){return of(xa,A)}function fo(A,e){return xa===null&&ma(A),of(A,e)}function of(A,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},un===null){if(A===null)throw Error(o(308));un=e,A.dependencies={lanes:0,firstContext:e},A.flags|=524288}else un=un.next=e;return t}var dm=typeof AbortController<"u"?AbortController:function(){var A=[],e=this.signal={aborted:!1,addEventListener:function(t,a){A.push(a)}};this.abort=function(){e.aborted=!0,A.forEach(function(t){return t()})}},um=i.unstable_scheduleCallback,fm=i.unstable_NormalPriority,et={$$typeof:DA,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kl(){return{controller:new dm,data:new Map,refCount:0}}function zr(A){A.refCount--,A.refCount===0&&um(fm,function(){A.controller.abort()})}var _r=null,Ml=0,Ya=0,Xa=null;function hm(A,e){if(_r===null){var t=_r=[];Ml=0,Ya=Tc(),Xa={status:"pending",value:void 0,then:function(a){t.push(a)}}}return Ml++,e.then(sf,sf),e}function sf(){if(--Ml===0&&_r!==null){Xa!==null&&(Xa.status="fulfilled");var A=_r;_r=null,Ya=0,Xa=null;for(var e=0;e<A.length;e++)(0,A[e])()}}function gm(A,e){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return A.then(function(){a.status="fulfilled",a.value=e;for(var l=0;l<t.length;l++)(0,t[l])(e)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var lf=R.S;R.S=function(A,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&hm(A,e),lf!==null&&lf(A,e)};var Ba=G(null);function Dl(){var A=Ba.current;return A!==null?A:Ne.pooledCache}function ho(A,e){e===null?oA(Ba,Ba.current):oA(Ba,e.pool)}function cf(){var A=Dl();return A===null?null:{parent:et._currentValue,pool:A}}var Gr=Error(o(460)),df=Error(o(474)),go=Error(o(542)),Tl={then:function(){}};function uf(A){return A=A.status,A==="fulfilled"||A==="rejected"}function po(){}function ff(A,e,t){switch(t=A[t],t===void 0?A.push(e):t!==e&&(e.then(po,po),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw A=e.reason,gf(A),A;default:if(typeof e.status=="string")e.then(po,po);else{if(A=Ne,A!==null&&100<A.shellSuspendCounter)throw Error(o(482));A=e,A.status="pending",A.then(function(a){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=a}},function(a){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw A=e.reason,gf(A),A}throw Vr=e,Gr}}var Vr=null;function hf(){if(Vr===null)throw Error(o(459));var A=Vr;return Vr=null,A}function gf(A){if(A===Gr||A===go)throw Error(o(483))}var Hn=!1;function Il(A){A.updateQueue={baseState:A.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ll(A,e){A=A.updateQueue,e.updateQueue===A&&(e.updateQueue={baseState:A.baseState,firstBaseUpdate:A.firstBaseUpdate,lastBaseUpdate:A.lastBaseUpdate,shared:A.shared,callbacks:null})}function Nn(A){return{lane:A,tag:0,payload:null,callback:null,next:null}}function kn(A,e,t){var a=A.updateQueue;if(a===null)return null;if(a=a.shared,(ve&2)!==0){var l=a.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e,e=oo(A),Af(A,null,t),e}return io(A,a,e,t),oo(A)}function Yr(A,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var a=e.lanes;a&=A.pendingLanes,t|=a,e.lanes=t,re(A,t)}}function Ol(A,e){var t=A.updateQueue,a=A.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,c=null;if(t=t.firstBaseUpdate,t!==null){do{var p={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};c===null?l=c=p:c=c.next=p,t=t.next}while(t!==null);c===null?l=c=e:c=c.next=e}else l=c=e;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:a.shared,callbacks:a.callbacks},A.updateQueue=t;return}A=t.lastBaseUpdate,A===null?t.firstBaseUpdate=e:A.next=e,t.lastBaseUpdate=e}var Kl=!1;function Xr(){if(Kl){var A=Xa;if(A!==null)throw A}}function Jr(A,e,t,a){Kl=!1;var l=A.updateQueue;Hn=!1;var c=l.firstBaseUpdate,p=l.lastBaseUpdate,y=l.shared.pending;if(y!==null){l.shared.pending=null;var N=y,Z=N.next;N.next=null,p===null?c=Z:p.next=Z,p=N;var fA=A.alternate;fA!==null&&(fA=fA.updateQueue,y=fA.lastBaseUpdate,y!==p&&(y===null?fA.firstBaseUpdate=Z:y.next=Z,fA.lastBaseUpdate=N))}if(c!==null){var bA=l.baseState;p=0,fA=Z=N=null,y=c;do{var $=y.lane&-536870913,P=$!==y.lane;if(P?(me&$)===$:(a&$)===$){$!==0&&$===Ya&&(Kl=!0),fA!==null&&(fA=fA.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});A:{var ne=A,Ae=y;$=e;var Fe=t;switch(Ae.tag){case 1:if(ne=Ae.payload,typeof ne=="function"){bA=ne.call(Fe,bA,$);break A}bA=ne;break A;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=Ae.payload,$=typeof ne=="function"?ne.call(Fe,bA,$):ne,$==null)break A;bA=v({},bA,$);break A;case 2:Hn=!0}}$=y.callback,$!==null&&(A.flags|=64,P&&(A.flags|=8192),P=l.callbacks,P===null?l.callbacks=[$]:P.push($))}else P={lane:$,tag:y.tag,payload:y.payload,callback:y.callback,next:null},fA===null?(Z=fA=P,N=bA):fA=fA.next=P,p|=$;if(y=y.next,y===null){if(y=l.shared.pending,y===null)break;P=y,y=P.next,P.next=null,l.lastBaseUpdate=P,l.shared.pending=null}}while(!0);fA===null&&(N=bA),l.baseState=N,l.firstBaseUpdate=Z,l.lastBaseUpdate=fA,c===null&&(l.shared.lanes=0),Rn|=p,A.lanes=p,A.memoizedState=bA}}function pf(A,e){if(typeof A!="function")throw Error(o(191,A));A.call(e)}function xf(A,e){var t=A.callbacks;if(t!==null)for(A.callbacks=null,A=0;A<t.length;A++)pf(t[A],e)}var Ja=G(null),xo=G(0);function mf(A,e){A=bn,oA(xo,A),oA(Ja,e),bn=A|e.baseLanes}function Rl(){oA(xo,bn),oA(Ja,Ja.current)}function zl(){bn=xo.current,sA(Ja),sA(xo)}var Mn=0,oe=null,Qe=null,$e=null,mo=!1,Za=!1,ba=!1,Bo=0,Zr=0,qa=null,pm=0;function Xe(){throw Error(o(321))}function _l(A,e){if(e===null)return!1;for(var t=0;t<e.length&&t<A.length;t++)if(!Qt(A[t],e[t]))return!1;return!0}function Gl(A,e,t,a,l,c){return Mn=c,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,R.H=A===null||A.memoizedState===null?eh:th,ba=!1,c=t(a,l),ba=!1,Za&&(c=bf(e,t,a,l)),Bf(A),c}function Bf(A){R.H=Qo;var e=Qe!==null&&Qe.next!==null;if(Mn=0,$e=Qe=oe=null,mo=!1,Zr=0,qa=null,e)throw Error(o(300));A===null||at||(A=A.dependencies,A!==null&&uo(A)&&(at=!0))}function bf(A,e,t,a){oe=A;var l=0;do{if(Za&&(qa=null),Zr=0,Za=!1,25<=l)throw Error(o(301));if(l+=1,$e=Qe=null,A.updateQueue!=null){var c=A.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}R.H=vm,c=e(t,a)}while(Za);return c}function xm(){var A=R.H,e=A.useState()[0];return e=typeof e.then=="function"?qr(e):e,A=A.useState()[0],(Qe!==null?Qe.memoizedState:null)!==A&&(oe.flags|=1024),e}function Vl(){var A=Bo!==0;return Bo=0,A}function Yl(A,e,t){e.updateQueue=A.updateQueue,e.flags&=-2053,A.lanes&=~t}function Xl(A){if(mo){for(A=A.memoizedState;A!==null;){var e=A.queue;e!==null&&(e.pending=null),A=A.next}mo=!1}Mn=0,$e=Qe=oe=null,Za=!1,Zr=Bo=0,qa=null}function bt(){var A={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?oe.memoizedState=$e=A:$e=$e.next=A,$e}function Pe(){if(Qe===null){var A=oe.alternate;A=A!==null?A.memoizedState:null}else A=Qe.next;var e=$e===null?oe.memoizedState:$e.next;if(e!==null)$e=e,Qe=A;else{if(A===null)throw oe.alternate===null?Error(o(467)):Error(o(310));Qe=A,A={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},$e===null?oe.memoizedState=$e=A:$e=$e.next=A}return $e}function Jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qr(A){var e=Zr;return Zr+=1,qa===null&&(qa=[]),A=ff(qa,A,e),e=oe,($e===null?e.memoizedState:$e.next)===null&&(e=e.alternate,R.H=e===null||e.memoizedState===null?eh:th),A}function bo(A){if(A!==null&&typeof A=="object"){if(typeof A.then=="function")return qr(A);if(A.$$typeof===DA)return ft(A)}throw Error(o(438,String(A)))}function Zl(A){var e=null,t=oe.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var a=oe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=Jl(),oe.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(A),a=0;a<A;a++)t[a]=uA;return e.index++,t}function hn(A,e){return typeof e=="function"?e(A):e}function wo(A){var e=Pe();return ql(e,Qe,A)}function ql(A,e,t){var a=A.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var l=A.baseQueue,c=a.pending;if(c!==null){if(l!==null){var p=l.next;l.next=c.next,c.next=p}e.baseQueue=l=c,a.pending=null}if(c=A.baseState,l===null)A.memoizedState=c;else{e=l.next;var y=p=null,N=null,Z=e,fA=!1;do{var bA=Z.lane&-536870913;if(bA!==Z.lane?(me&bA)===bA:(Mn&bA)===bA){var $=Z.revertLane;if($===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),bA===Ya&&(fA=!0);else if((Mn&$)===$){Z=Z.next,$===Ya&&(fA=!0);continue}else bA={lane:0,revertLane:Z.revertLane,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},N===null?(y=N=bA,p=c):N=N.next=bA,oe.lanes|=$,Rn|=$;bA=Z.action,ba&&t(c,bA),c=Z.hasEagerState?Z.eagerState:t(c,bA)}else $={lane:bA,revertLane:Z.revertLane,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},N===null?(y=N=$,p=c):N=N.next=$,oe.lanes|=bA,Rn|=bA;Z=Z.next}while(Z!==null&&Z!==e);if(N===null?p=c:N.next=y,!Qt(c,A.memoizedState)&&(at=!0,fA&&(t=Xa,t!==null)))throw t;A.memoizedState=c,A.baseState=p,A.baseQueue=N,a.lastRenderedState=c}return l===null&&(a.lanes=0),[A.memoizedState,a.dispatch]}function Wl(A){var e=Pe(),t=e.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=A;var a=t.dispatch,l=t.pending,c=e.memoizedState;if(l!==null){t.pending=null;var p=l=l.next;do c=A(c,p.action),p=p.next;while(p!==l);Qt(c,e.memoizedState)||(at=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),t.lastRenderedState=c}return[c,a]}function wf(A,e,t){var a=oe,l=Pe(),c=be;if(c){if(t===void 0)throw Error(o(407));t=t()}else t=e();var p=!Qt((Qe||l).memoizedState,t);p&&(l.memoizedState=t,at=!0),l=l.queue;var y=Cf.bind(null,a,l,A);if(Wr(2048,8,y,[A]),l.getSnapshot!==e||p||$e!==null&&$e.memoizedState.tag&1){if(a.flags|=2048,Wa(9,yo(),vf.bind(null,a,l,t,e),null),Ne===null)throw Error(o(349));c||(Mn&124)!==0||yf(a,e,t)}return t}function yf(A,e,t){A.flags|=16384,A={getSnapshot:e,value:t},e=oe.updateQueue,e===null?(e=Jl(),oe.updateQueue=e,e.stores=[A]):(t=e.stores,t===null?e.stores=[A]:t.push(A))}function vf(A,e,t,a){e.value=t,e.getSnapshot=a,Qf(e)&&Uf(A)}function Cf(A,e,t){return t(function(){Qf(e)&&Uf(A)})}function Qf(A){var e=A.getSnapshot;A=A.value;try{var t=e();return!Qt(A,t)}catch{return!0}}function Uf(A){var e=za(A,2);e!==null&&Ht(e,A,2)}function $l(A){var e=bt();if(typeof A=="function"){var t=A;if(A=t(),ba){x(!0);try{t()}finally{x(!1)}}}return e.memoizedState=e.baseState=A,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hn,lastRenderedState:A},e}function Ff(A,e,t,a){return A.baseState=t,ql(A,Qe,typeof a=="function"?a:hn)}function mm(A,e,t,a,l){if(Co(A))throw Error(o(485));if(A=e.action,A!==null){var c={payload:l,action:A,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};R.T!==null?t(!0):c.isTransition=!1,a(c),t=e.pending,t===null?(c.next=e.pending=c,Ef(e,c)):(c.next=t.next,e.pending=t.next=c)}}function Ef(A,e){var t=e.action,a=e.payload,l=A.state;if(e.isTransition){var c=R.T,p={};R.T=p;try{var y=t(l,a),N=R.S;N!==null&&N(p,y),Sf(A,e,y)}catch(Z){Pl(A,e,Z)}finally{R.T=c}}else try{c=t(l,a),Sf(A,e,c)}catch(Z){Pl(A,e,Z)}}function Sf(A,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){jf(A,e,a)},function(a){return Pl(A,e,a)}):jf(A,e,t)}function jf(A,e,t){e.status="fulfilled",e.value=t,Hf(e),A.state=t,e=A.pending,e!==null&&(t=e.next,t===e?A.pending=null:(t=t.next,e.next=t,Ef(A,t)))}function Pl(A,e,t){var a=A.pending;if(A.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=t,Hf(e),e=e.next;while(e!==a)}A.action=null}function Hf(A){A=A.listeners;for(var e=0;e<A.length;e++)(0,A[e])()}function Nf(A,e){return e}function kf(A,e){if(be){var t=Ne.formState;if(t!==null){A:{var a=oe;if(be){if(_e){e:{for(var l=_e,c=Wt;l.nodeType!==8;){if(!c){l=null;break e}if(l=Jt(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){_e=Jt(l.nextSibling),a=l.data==="F!";break A}}pa(a)}a=!1}a&&(e=t[0])}}return t=bt(),t.memoizedState=t.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nf,lastRenderedState:e},t.queue=a,t=$f.bind(null,oe,a),a.dispatch=t,a=$l(!1),c=ac.bind(null,oe,!1,a.queue),a=bt(),l={state:e,dispatch:null,action:A,pending:null},a.queue=l,t=mm.bind(null,oe,l,c,t),l.dispatch=t,a.memoizedState=A,[e,t,!1]}function Mf(A){var e=Pe();return Df(e,Qe,A)}function Df(A,e,t){if(e=ql(A,e,Nf)[0],A=wo(hn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=qr(e)}catch(p){throw p===Gr?go:p}else a=e;e=Pe();var l=e.queue,c=l.dispatch;return t!==e.memoizedState&&(oe.flags|=2048,Wa(9,yo(),Bm.bind(null,l,t),null)),[a,c,A]}function Bm(A,e){A.action=e}function Tf(A){var e=Pe(),t=Qe;if(t!==null)return Df(e,t,A);Pe(),e=e.memoizedState,t=Pe();var a=t.queue.dispatch;return t.memoizedState=A,[e,a,!1]}function Wa(A,e,t,a){return A={tag:A,create:t,deps:a,inst:e,next:null},e=oe.updateQueue,e===null&&(e=Jl(),oe.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=A.next=A:(a=t.next,t.next=A,A.next=a,e.lastEffect=A),A}function yo(){return{destroy:void 0,resource:void 0}}function If(){return Pe().memoizedState}function vo(A,e,t,a){var l=bt();a=a===void 0?null:a,oe.flags|=A,l.memoizedState=Wa(1|e,yo(),t,a)}function Wr(A,e,t,a){var l=Pe();a=a===void 0?null:a;var c=l.memoizedState.inst;Qe!==null&&a!==null&&_l(a,Qe.memoizedState.deps)?l.memoizedState=Wa(e,c,t,a):(oe.flags|=A,l.memoizedState=Wa(1|e,c,t,a))}function Lf(A,e){vo(8390656,8,A,e)}function Of(A,e){Wr(2048,8,A,e)}function Kf(A,e){return Wr(4,2,A,e)}function Rf(A,e){return Wr(4,4,A,e)}function zf(A,e){if(typeof e=="function"){A=A();var t=e(A);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return A=A(),e.current=A,function(){e.current=null}}function _f(A,e,t){t=t!=null?t.concat([A]):null,Wr(4,4,zf.bind(null,e,A),t)}function Ac(){}function Gf(A,e){var t=Pe();e=e===void 0?null:e;var a=t.memoizedState;return e!==null&&_l(e,a[1])?a[0]:(t.memoizedState=[A,e],A)}function Vf(A,e){var t=Pe();e=e===void 0?null:e;var a=t.memoizedState;if(e!==null&&_l(e,a[1]))return a[0];if(a=A(),ba){x(!0);try{A()}finally{x(!1)}}return t.memoizedState=[a,e],a}function ec(A,e,t){return t===void 0||(Mn&1073741824)!==0?A.memoizedState=e:(A.memoizedState=t,A=Jh(),oe.lanes|=A,Rn|=A,t)}function Yf(A,e,t,a){return Qt(t,e)?t:Ja.current!==null?(A=ec(A,t,a),Qt(A,e)||(at=!0),A):(Mn&42)===0?(at=!0,A.memoizedState=t):(A=Jh(),oe.lanes|=A,Rn|=A,e)}function Xf(A,e,t,a,l){var c=nA.p;nA.p=c!==0&&8>c?c:8;var p=R.T,y={};R.T=y,ac(A,!1,e,t);try{var N=l(),Z=R.S;if(Z!==null&&Z(y,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var fA=gm(N,a);$r(A,e,fA,jt(A))}else $r(A,e,a,jt(A))}catch(bA){$r(A,e,{then:function(){},status:"rejected",reason:bA},jt())}finally{nA.p=c,R.T=p}}function bm(){}function tc(A,e,t,a){if(A.tag!==5)throw Error(o(476));var l=Jf(A).queue;Xf(A,l,e,vA,t===null?bm:function(){return Zf(A),t(a)})}function Jf(A){var e=A.memoizedState;if(e!==null)return e;e={memoizedState:vA,baseState:vA,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hn,lastRenderedState:vA},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hn,lastRenderedState:t},next:null},A.memoizedState=e,A=A.alternate,A!==null&&(A.memoizedState=e),e}function Zf(A){var e=Jf(A).next.queue;$r(A,e,{},jt())}function nc(){return ft(pi)}function qf(){return Pe().memoizedState}function Wf(){return Pe().memoizedState}function wm(A){for(var e=A.return;e!==null;){switch(e.tag){case 24:case 3:var t=jt();A=Nn(t);var a=kn(e,A,t);a!==null&&(Ht(a,e,t),Yr(a,e,t)),e={cache:kl()},A.payload=e;return}e=e.return}}function ym(A,e,t){var a=jt();t={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Co(A)?Pf(e,t):(t=vl(A,e,t,a),t!==null&&(Ht(t,A,a),Ah(t,e,a)))}function $f(A,e,t){var a=jt();$r(A,e,t,a)}function $r(A,e,t,a){var l={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Co(A))Pf(e,l);else{var c=A.alternate;if(A.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var p=e.lastRenderedState,y=c(p,t);if(l.hasEagerState=!0,l.eagerState=y,Qt(y,p))return io(A,e,l,0),Ne===null&&ro(),!1}catch{}finally{}if(t=vl(A,e,l,a),t!==null)return Ht(t,A,a),Ah(t,e,a),!0}return!1}function ac(A,e,t,a){if(a={lane:2,revertLane:Tc(),action:a,hasEagerState:!1,eagerState:null,next:null},Co(A)){if(e)throw Error(o(479))}else e=vl(A,t,a,2),e!==null&&Ht(e,A,2)}function Co(A){var e=A.alternate;return A===oe||e!==null&&e===oe}function Pf(A,e){Za=mo=!0;var t=A.pending;t===null?e.next=e:(e.next=t.next,t.next=e),A.pending=e}function Ah(A,e,t){if((t&4194048)!==0){var a=e.lanes;a&=A.pendingLanes,t|=a,e.lanes=t,re(A,t)}}var Qo={readContext:ft,use:bo,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe},eh={readContext:ft,use:bo,useCallback:function(A,e){return bt().memoizedState=[A,e===void 0?null:e],A},useContext:ft,useEffect:Lf,useImperativeHandle:function(A,e,t){t=t!=null?t.concat([A]):null,vo(4194308,4,zf.bind(null,e,A),t)},useLayoutEffect:function(A,e){return vo(4194308,4,A,e)},useInsertionEffect:function(A,e){vo(4,2,A,e)},useMemo:function(A,e){var t=bt();e=e===void 0?null:e;var a=A();if(ba){x(!0);try{A()}finally{x(!1)}}return t.memoizedState=[a,e],a},useReducer:function(A,e,t){var a=bt();if(t!==void 0){var l=t(e);if(ba){x(!0);try{t(e)}finally{x(!1)}}}else l=e;return a.memoizedState=a.baseState=l,A={pending:null,lanes:0,dispatch:null,lastRenderedReducer:A,lastRenderedState:l},a.queue=A,A=A.dispatch=ym.bind(null,oe,A),[a.memoizedState,A]},useRef:function(A){var e=bt();return A={current:A},e.memoizedState=A},useState:function(A){A=$l(A);var e=A.queue,t=$f.bind(null,oe,e);return e.dispatch=t,[A.memoizedState,t]},useDebugValue:Ac,useDeferredValue:function(A,e){var t=bt();return ec(t,A,e)},useTransition:function(){var A=$l(!1);return A=Xf.bind(null,oe,A.queue,!0,!1),bt().memoizedState=A,[!1,A]},useSyncExternalStore:function(A,e,t){var a=oe,l=bt();if(be){if(t===void 0)throw Error(o(407));t=t()}else{if(t=e(),Ne===null)throw Error(o(349));(me&124)!==0||yf(a,e,t)}l.memoizedState=t;var c={value:t,getSnapshot:e};return l.queue=c,Lf(Cf.bind(null,a,c,A),[A]),a.flags|=2048,Wa(9,yo(),vf.bind(null,a,c,t,e),null),t},useId:function(){var A=bt(),e=Ne.identifierPrefix;if(be){var t=dn,a=cn;t=(a&~(1<<32-F(a)-1)).toString(32)+t,e="«"+e+"R"+t,t=Bo++,0<t&&(e+="H"+t.toString(32)),e+="»"}else t=pm++,e="«"+e+"r"+t.toString(32)+"»";return A.memoizedState=e},useHostTransitionStatus:nc,useFormState:kf,useActionState:kf,useOptimistic:function(A){var e=bt();e.memoizedState=e.baseState=A;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=ac.bind(null,oe,!0,t),t.dispatch=e,[A,e]},useMemoCache:Zl,useCacheRefresh:function(){return bt().memoizedState=wm.bind(null,oe)}},th={readContext:ft,use:bo,useCallback:Gf,useContext:ft,useEffect:Of,useImperativeHandle:_f,useInsertionEffect:Kf,useLayoutEffect:Rf,useMemo:Vf,useReducer:wo,useRef:If,useState:function(){return wo(hn)},useDebugValue:Ac,useDeferredValue:function(A,e){var t=Pe();return Yf(t,Qe.memoizedState,A,e)},useTransition:function(){var A=wo(hn)[0],e=Pe().memoizedState;return[typeof A=="boolean"?A:qr(A),e]},useSyncExternalStore:wf,useId:qf,useHostTransitionStatus:nc,useFormState:Mf,useActionState:Mf,useOptimistic:function(A,e){var t=Pe();return Ff(t,Qe,A,e)},useMemoCache:Zl,useCacheRefresh:Wf},vm={readContext:ft,use:bo,useCallback:Gf,useContext:ft,useEffect:Of,useImperativeHandle:_f,useInsertionEffect:Kf,useLayoutEffect:Rf,useMemo:Vf,useReducer:Wl,useRef:If,useState:function(){return Wl(hn)},useDebugValue:Ac,useDeferredValue:function(A,e){var t=Pe();return Qe===null?ec(t,A,e):Yf(t,Qe.memoizedState,A,e)},useTransition:function(){var A=Wl(hn)[0],e=Pe().memoizedState;return[typeof A=="boolean"?A:qr(A),e]},useSyncExternalStore:wf,useId:qf,useHostTransitionStatus:nc,useFormState:Tf,useActionState:Tf,useOptimistic:function(A,e){var t=Pe();return Qe!==null?Ff(t,Qe,A,e):(t.baseState=A,[A,t.queue.dispatch])},useMemoCache:Zl,useCacheRefresh:Wf},$a=null,Pr=0;function Uo(A){var e=Pr;return Pr+=1,$a===null&&($a=[]),ff($a,A,e)}function Ai(A,e){e=e.props.ref,A.ref=e!==void 0?e:null}function Fo(A,e){throw e.$$typeof===E?Error(o(525)):(A=Object.prototype.toString.call(e),Error(o(31,A==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":A)))}function nh(A){var e=A._init;return e(A._payload)}function ah(A){function e(z,L){if(A){var X=z.deletions;X===null?(z.deletions=[L],z.flags|=16):X.push(L)}}function t(z,L){if(!A)return null;for(;L!==null;)e(z,L),L=L.sibling;return null}function a(z){for(var L=new Map;z!==null;)z.key!==null?L.set(z.key,z):L.set(z.index,z),z=z.sibling;return L}function l(z,L){return z=ln(z,L),z.index=0,z.sibling=null,z}function c(z,L,X){return z.index=X,A?(X=z.alternate,X!==null?(X=X.index,X<L?(z.flags|=67108866,L):X):(z.flags|=67108866,L)):(z.flags|=1048576,L)}function p(z){return A&&z.alternate===null&&(z.flags|=67108866),z}function y(z,L,X,mA){return L===null||L.tag!==6?(L=Ql(X,z.mode,mA),L.return=z,L):(L=l(L,X),L.return=z,L)}function N(z,L,X,mA){var YA=X.type;return YA===_?fA(z,L,X.props.children,mA,X.key):L!==null&&(L.elementType===YA||typeof YA=="object"&&YA!==null&&YA.$$typeof===V&&nh(YA)===L.type)?(L=l(L,X.props),Ai(L,X),L.return=z,L):(L=so(X.type,X.key,X.props,null,z.mode,mA),Ai(L,X),L.return=z,L)}function Z(z,L,X,mA){return L===null||L.tag!==4||L.stateNode.containerInfo!==X.containerInfo||L.stateNode.implementation!==X.implementation?(L=Ul(X,z.mode,mA),L.return=z,L):(L=l(L,X.children||[]),L.return=z,L)}function fA(z,L,X,mA,YA){return L===null||L.tag!==7?(L=ua(X,z.mode,mA,YA),L.return=z,L):(L=l(L,X),L.return=z,L)}function bA(z,L,X){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=Ql(""+L,z.mode,X),L.return=z,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case M:return X=so(L.type,L.key,L.props,null,z.mode,X),Ai(X,L),X.return=z,X;case aA:return L=Ul(L,z.mode,X),L.return=z,L;case V:var mA=L._init;return L=mA(L._payload),bA(z,L,X)}if(TA(L)||tA(L))return L=ua(L,z.mode,X,null),L.return=z,L;if(typeof L.then=="function")return bA(z,Uo(L),X);if(L.$$typeof===DA)return bA(z,fo(z,L),X);Fo(z,L)}return null}function $(z,L,X,mA){var YA=L!==null?L.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return YA!==null?null:y(z,L,""+X,mA);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return X.key===YA?N(z,L,X,mA):null;case aA:return X.key===YA?Z(z,L,X,mA):null;case V:return YA=X._init,X=YA(X._payload),$(z,L,X,mA)}if(TA(X)||tA(X))return YA!==null?null:fA(z,L,X,mA,null);if(typeof X.then=="function")return $(z,L,Uo(X),mA);if(X.$$typeof===DA)return $(z,L,fo(z,X),mA);Fo(z,X)}return null}function P(z,L,X,mA,YA){if(typeof mA=="string"&&mA!==""||typeof mA=="number"||typeof mA=="bigint")return z=z.get(X)||null,y(L,z,""+mA,YA);if(typeof mA=="object"&&mA!==null){switch(mA.$$typeof){case M:return z=z.get(mA.key===null?X:mA.key)||null,N(L,z,mA,YA);case aA:return z=z.get(mA.key===null?X:mA.key)||null,Z(L,z,mA,YA);case V:var se=mA._init;return mA=se(mA._payload),P(z,L,X,mA,YA)}if(TA(mA)||tA(mA))return z=z.get(X)||null,fA(L,z,mA,YA,null);if(typeof mA.then=="function")return P(z,L,X,Uo(mA),YA);if(mA.$$typeof===DA)return P(z,L,X,fo(L,mA),YA);Fo(L,mA)}return null}function ne(z,L,X,mA){for(var YA=null,se=null,XA=L,ee=L=0,it=null;XA!==null&&ee<X.length;ee++){XA.index>ee?(it=XA,XA=null):it=XA.sibling;var Be=$(z,XA,X[ee],mA);if(Be===null){XA===null&&(XA=it);break}A&&XA&&Be.alternate===null&&e(z,XA),L=c(Be,L,ee),se===null?YA=Be:se.sibling=Be,se=Be,XA=it}if(ee===X.length)return t(z,XA),be&&ha(z,ee),YA;if(XA===null){for(;ee<X.length;ee++)XA=bA(z,X[ee],mA),XA!==null&&(L=c(XA,L,ee),se===null?YA=XA:se.sibling=XA,se=XA);return be&&ha(z,ee),YA}for(XA=a(XA);ee<X.length;ee++)it=P(XA,z,ee,X[ee],mA),it!==null&&(A&&it.alternate!==null&&XA.delete(it.key===null?ee:it.key),L=c(it,L,ee),se===null?YA=it:se.sibling=it,se=it);return A&&XA.forEach(function(qn){return e(z,qn)}),be&&ha(z,ee),YA}function Ae(z,L,X,mA){if(X==null)throw Error(o(151));for(var YA=null,se=null,XA=L,ee=L=0,it=null,Be=X.next();XA!==null&&!Be.done;ee++,Be=X.next()){XA.index>ee?(it=XA,XA=null):it=XA.sibling;var qn=$(z,XA,Be.value,mA);if(qn===null){XA===null&&(XA=it);break}A&&XA&&qn.alternate===null&&e(z,XA),L=c(qn,L,ee),se===null?YA=qn:se.sibling=qn,se=qn,XA=it}if(Be.done)return t(z,XA),be&&ha(z,ee),YA;if(XA===null){for(;!Be.done;ee++,Be=X.next())Be=bA(z,Be.value,mA),Be!==null&&(L=c(Be,L,ee),se===null?YA=Be:se.sibling=Be,se=Be);return be&&ha(z,ee),YA}for(XA=a(XA);!Be.done;ee++,Be=X.next())Be=P(XA,z,ee,Be.value,mA),Be!==null&&(A&&Be.alternate!==null&&XA.delete(Be.key===null?ee:Be.key),L=c(Be,L,ee),se===null?YA=Be:se.sibling=Be,se=Be);return A&&XA.forEach(function(CB){return e(z,CB)}),be&&ha(z,ee),YA}function Fe(z,L,X,mA){if(typeof X=="object"&&X!==null&&X.type===_&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case M:A:{for(var YA=X.key;L!==null;){if(L.key===YA){if(YA=X.type,YA===_){if(L.tag===7){t(z,L.sibling),mA=l(L,X.props.children),mA.return=z,z=mA;break A}}else if(L.elementType===YA||typeof YA=="object"&&YA!==null&&YA.$$typeof===V&&nh(YA)===L.type){t(z,L.sibling),mA=l(L,X.props),Ai(mA,X),mA.return=z,z=mA;break A}t(z,L);break}else e(z,L);L=L.sibling}X.type===_?(mA=ua(X.props.children,z.mode,mA,X.key),mA.return=z,z=mA):(mA=so(X.type,X.key,X.props,null,z.mode,mA),Ai(mA,X),mA.return=z,z=mA)}return p(z);case aA:A:{for(YA=X.key;L!==null;){if(L.key===YA)if(L.tag===4&&L.stateNode.containerInfo===X.containerInfo&&L.stateNode.implementation===X.implementation){t(z,L.sibling),mA=l(L,X.children||[]),mA.return=z,z=mA;break A}else{t(z,L);break}else e(z,L);L=L.sibling}mA=Ul(X,z.mode,mA),mA.return=z,z=mA}return p(z);case V:return YA=X._init,X=YA(X._payload),Fe(z,L,X,mA)}if(TA(X))return ne(z,L,X,mA);if(tA(X)){if(YA=tA(X),typeof YA!="function")throw Error(o(150));return X=YA.call(X),Ae(z,L,X,mA)}if(typeof X.then=="function")return Fe(z,L,Uo(X),mA);if(X.$$typeof===DA)return Fe(z,L,fo(z,X),mA);Fo(z,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,L!==null&&L.tag===6?(t(z,L.sibling),mA=l(L,X),mA.return=z,z=mA):(t(z,L),mA=Ql(X,z.mode,mA),mA.return=z,z=mA),p(z)):t(z,L)}return function(z,L,X,mA){try{Pr=0;var YA=Fe(z,L,X,mA);return $a=null,YA}catch(XA){if(XA===Gr||XA===go)throw XA;var se=Ut(29,XA,null,z.mode);return se.lanes=mA,se.return=z,se}finally{}}}var Pa=ah(!0),rh=ah(!1),Ot=G(null),$t=null;function Dn(A){var e=A.alternate;oA(tt,tt.current&1),oA(Ot,A),$t===null&&(e===null||Ja.current!==null||e.memoizedState!==null)&&($t=A)}function ih(A){if(A.tag===22){if(oA(tt,tt.current),oA(Ot,A),$t===null){var e=A.alternate;e!==null&&e.memoizedState!==null&&($t=A)}}else Tn()}function Tn(){oA(tt,tt.current),oA(Ot,Ot.current)}function gn(A){sA(Ot),$t===A&&($t=null),sA(tt)}var tt=G(0);function Eo(A){for(var e=A;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||Jc(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function rc(A,e,t,a){e=A.memoizedState,t=t(a,e),t=t==null?e:v({},e,t),A.memoizedState=t,A.lanes===0&&(A.updateQueue.baseState=t)}var ic={enqueueSetState:function(A,e,t){A=A._reactInternals;var a=jt(),l=Nn(a);l.payload=e,t!=null&&(l.callback=t),e=kn(A,l,a),e!==null&&(Ht(e,A,a),Yr(e,A,a))},enqueueReplaceState:function(A,e,t){A=A._reactInternals;var a=jt(),l=Nn(a);l.tag=1,l.payload=e,t!=null&&(l.callback=t),e=kn(A,l,a),e!==null&&(Ht(e,A,a),Yr(e,A,a))},enqueueForceUpdate:function(A,e){A=A._reactInternals;var t=jt(),a=Nn(t);a.tag=2,e!=null&&(a.callback=e),e=kn(A,a,t),e!==null&&(Ht(e,A,t),Yr(e,A,t))}};function oh(A,e,t,a,l,c,p){return A=A.stateNode,typeof A.shouldComponentUpdate=="function"?A.shouldComponentUpdate(a,c,p):e.prototype&&e.prototype.isPureReactComponent?!Tr(t,a)||!Tr(l,c):!0}function sh(A,e,t,a){A=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==A&&ic.enqueueReplaceState(e,e.state,null)}function wa(A,e){var t=e;if("ref"in e){t={};for(var a in e)a!=="ref"&&(t[a]=e[a])}if(A=A.defaultProps){t===e&&(t=v({},t));for(var l in A)t[l]===void 0&&(t[l]=A[l])}return t}var So=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function lh(A){So(A)}function ch(A){console.error(A)}function dh(A){So(A)}function jo(A,e){try{var t=A.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function uh(A,e,t){try{var a=A.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function oc(A,e,t){return t=Nn(t),t.tag=3,t.payload={element:null},t.callback=function(){jo(A,e)},t}function fh(A){return A=Nn(A),A.tag=3,A}function hh(A,e,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=a.value;A.payload=function(){return l(c)},A.callback=function(){uh(e,t,a)}}var p=t.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(A.callback=function(){uh(e,t,a),typeof l!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var y=a.stack;this.componentDidCatch(a.value,{componentStack:y!==null?y:""})})}function Cm(A,e,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=t.alternate,e!==null&&Rr(e,t,l,!0),t=Ot.current,t!==null){switch(t.tag){case 13:return $t===null?Hc():t.alternate===null&&Ge===0&&(Ge=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===Tl?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([a]):e.add(a),kc(A,a,l)),!1;case 22:return t.flags|=65536,a===Tl?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([a]):t.add(a)),kc(A,a,l)),!1}throw Error(o(435,t.tag))}return kc(A,a,l),Hc(),!1}if(be)return e=Ot.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,a!==Sl&&(A=Error(o(422),{cause:a}),Kr(Dt(A,t)))):(a!==Sl&&(e=Error(o(423),{cause:a}),Kr(Dt(e,t))),A=A.current.alternate,A.flags|=65536,l&=-l,A.lanes|=l,a=Dt(a,t),l=oc(A.stateNode,a,l),Ol(A,l),Ge!==4&&(Ge=2)),!1;var c=Error(o(520),{cause:a});if(c=Dt(c,t),oi===null?oi=[c]:oi.push(c),Ge!==4&&(Ge=2),e===null)return!0;a=Dt(a,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,A=l&-l,t.lanes|=A,A=oc(t.stateNode,a,A),Ol(t,A),!1;case 1:if(e=t.type,c=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(zn===null||!zn.has(c))))return t.flags|=65536,l&=-l,t.lanes|=l,l=fh(l),hh(l,A,t,a),Ol(t,l),!1}t=t.return}while(t!==null);return!1}var gh=Error(o(461)),at=!1;function st(A,e,t,a){e.child=A===null?rh(e,null,t,a):Pa(e,A.child,t,a)}function ph(A,e,t,a,l){t=t.render;var c=e.ref;if("ref"in a){var p={};for(var y in a)y!=="ref"&&(p[y]=a[y])}else p=a;return ma(e),a=Gl(A,e,t,p,c,l),y=Vl(),A!==null&&!at?(Yl(A,e,l),pn(A,e,l)):(be&&y&&Fl(e),e.flags|=1,st(A,e,a,l),e.child)}function xh(A,e,t,a,l){if(A===null){var c=t.type;return typeof c=="function"&&!Cl(c)&&c.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=c,mh(A,e,c,a,l)):(A=so(t.type,null,a,e,e.mode,l),A.ref=e.ref,A.return=e,e.child=A)}if(c=A.child,!gc(A,l)){var p=c.memoizedProps;if(t=t.compare,t=t!==null?t:Tr,t(p,a)&&A.ref===e.ref)return pn(A,e,l)}return e.flags|=1,A=ln(c,a),A.ref=e.ref,A.return=e,e.child=A}function mh(A,e,t,a,l){if(A!==null){var c=A.memoizedProps;if(Tr(c,a)&&A.ref===e.ref)if(at=!1,e.pendingProps=a=c,gc(A,l))(A.flags&131072)!==0&&(at=!0);else return e.lanes=A.lanes,pn(A,e,l)}return sc(A,e,t,a,l)}function Bh(A,e,t){var a=e.pendingProps,l=a.children,c=A!==null?A.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=c!==null?c.baseLanes|t:t,A!==null){for(l=e.child=A.child,c=0;l!==null;)c=c|l.lanes|l.childLanes,l=l.sibling;e.childLanes=c&~a}else e.childLanes=0,e.child=null;return bh(A,e,a,t)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},A!==null&&ho(e,c!==null?c.cachePool:null),c!==null?mf(e,c):Rl(),ih(e);else return e.lanes=e.childLanes=536870912,bh(A,e,c!==null?c.baseLanes|t:t,t)}else c!==null?(ho(e,c.cachePool),mf(e,c),Tn(),e.memoizedState=null):(A!==null&&ho(e,null),Rl(),Tn());return st(A,e,l,t),e.child}function bh(A,e,t,a){var l=Dl();return l=l===null?null:{parent:et._currentValue,pool:l},e.memoizedState={baseLanes:t,cachePool:l},A!==null&&ho(e,null),Rl(),ih(e),A!==null&&Rr(A,e,a,!0),null}function Ho(A,e){var t=e.ref;if(t===null)A!==null&&A.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(o(284));(A===null||A.ref!==t)&&(e.flags|=4194816)}}function sc(A,e,t,a,l){return ma(e),t=Gl(A,e,t,a,void 0,l),a=Vl(),A!==null&&!at?(Yl(A,e,l),pn(A,e,l)):(be&&a&&Fl(e),e.flags|=1,st(A,e,t,l),e.child)}function wh(A,e,t,a,l,c){return ma(e),e.updateQueue=null,t=bf(e,a,t,l),Bf(A),a=Vl(),A!==null&&!at?(Yl(A,e,c),pn(A,e,c)):(be&&a&&Fl(e),e.flags|=1,st(A,e,t,c),e.child)}function yh(A,e,t,a,l){if(ma(e),e.stateNode===null){var c=_a,p=t.contextType;typeof p=="object"&&p!==null&&(c=ft(p)),c=new t(a,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=ic,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=a,c.state=e.memoizedState,c.refs={},Il(e),p=t.contextType,c.context=typeof p=="object"&&p!==null?ft(p):_a,c.state=e.memoizedState,p=t.getDerivedStateFromProps,typeof p=="function"&&(rc(e,t,p,a),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&ic.enqueueReplaceState(c,c.state,null),Jr(e,a,c,l),Xr(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(A===null){c=e.stateNode;var y=e.memoizedProps,N=wa(t,y);c.props=N;var Z=c.context,fA=t.contextType;p=_a,typeof fA=="object"&&fA!==null&&(p=ft(fA));var bA=t.getDerivedStateFromProps;fA=typeof bA=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=e.pendingProps!==y,fA||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||Z!==p)&&sh(e,c,a,p),Hn=!1;var $=e.memoizedState;c.state=$,Jr(e,a,c,l),Xr(),Z=e.memoizedState,y||$!==Z||Hn?(typeof bA=="function"&&(rc(e,t,bA,a),Z=e.memoizedState),(N=Hn||oh(e,t,N,a,$,Z,p))?(fA||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=Z),c.props=a,c.state=Z,c.context=p,a=N):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{c=e.stateNode,Ll(A,e),p=e.memoizedProps,fA=wa(t,p),c.props=fA,bA=e.pendingProps,$=c.context,Z=t.contextType,N=_a,typeof Z=="object"&&Z!==null&&(N=ft(Z)),y=t.getDerivedStateFromProps,(Z=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==bA||$!==N)&&sh(e,c,a,N),Hn=!1,$=e.memoizedState,c.state=$,Jr(e,a,c,l),Xr();var P=e.memoizedState;p!==bA||$!==P||Hn||A!==null&&A.dependencies!==null&&uo(A.dependencies)?(typeof y=="function"&&(rc(e,t,y,a),P=e.memoizedState),(fA=Hn||oh(e,t,fA,a,$,P,N)||A!==null&&A.dependencies!==null&&uo(A.dependencies))?(Z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(a,P,N),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(a,P,N)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===A.memoizedProps&&$===A.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===A.memoizedProps&&$===A.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=P),c.props=a,c.state=P,c.context=N,a=fA):(typeof c.componentDidUpdate!="function"||p===A.memoizedProps&&$===A.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===A.memoizedProps&&$===A.memoizedState||(e.flags|=1024),a=!1)}return c=a,Ho(A,e),a=(e.flags&128)!==0,c||a?(c=e.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,A!==null&&a?(e.child=Pa(e,A.child,null,l),e.child=Pa(e,null,t,l)):st(A,e,t,l),e.memoizedState=c.state,A=e.child):A=pn(A,e,l),A}function vh(A,e,t,a){return Or(),e.flags|=256,st(A,e,t,a),e.child}var lc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cc(A){return{baseLanes:A,cachePool:cf()}}function dc(A,e,t){return A=A!==null?A.childLanes&~t:0,e&&(A|=Kt),A}function Ch(A,e,t){var a=e.pendingProps,l=!1,c=(e.flags&128)!==0,p;if((p=c)||(p=A!==null&&A.memoizedState===null?!1:(tt.current&2)!==0),p&&(l=!0,e.flags&=-129),p=(e.flags&32)!==0,e.flags&=-33,A===null){if(be){if(l?Dn(e):Tn(),be){var y=_e,N;if(N=y){A:{for(N=y,y=Wt;N.nodeType!==8;){if(!y){y=null;break A}if(N=Jt(N.nextSibling),N===null){y=null;break A}}y=N}y!==null?(e.memoizedState={dehydrated:y,treeContext:fa!==null?{id:cn,overflow:dn}:null,retryLane:536870912,hydrationErrors:null},N=Ut(18,null,null,0),N.stateNode=y,N.return=e,e.child=N,xt=e,_e=null,N=!0):N=!1}N||pa(e)}if(y=e.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return Jc(y)?e.lanes=32:e.lanes=536870912,null;gn(e)}return y=a.children,a=a.fallback,l?(Tn(),l=e.mode,y=No({mode:"hidden",children:y},l),a=ua(a,l,t,null),y.return=e,a.return=e,y.sibling=a,e.child=y,l=e.child,l.memoizedState=cc(t),l.childLanes=dc(A,p,t),e.memoizedState=lc,a):(Dn(e),uc(e,y))}if(N=A.memoizedState,N!==null&&(y=N.dehydrated,y!==null)){if(c)e.flags&256?(Dn(e),e.flags&=-257,e=fc(A,e,t)):e.memoizedState!==null?(Tn(),e.child=A.child,e.flags|=128,e=null):(Tn(),l=a.fallback,y=e.mode,a=No({mode:"visible",children:a.children},y),l=ua(l,y,t,null),l.flags|=2,a.return=e,l.return=e,a.sibling=l,e.child=a,Pa(e,A.child,null,t),a=e.child,a.memoizedState=cc(t),a.childLanes=dc(A,p,t),e.memoizedState=lc,e=l);else if(Dn(e),Jc(y)){if(p=y.nextSibling&&y.nextSibling.dataset,p)var Z=p.dgst;p=Z,a=Error(o(419)),a.stack="",a.digest=p,Kr({value:a,source:null,stack:null}),e=fc(A,e,t)}else if(at||Rr(A,e,t,!1),p=(t&A.childLanes)!==0,at||p){if(p=Ne,p!==null&&(a=t&-t,a=(a&42)!==0?1:g(a),a=(a&(p.suspendedLanes|t))!==0?0:a,a!==0&&a!==N.retryLane))throw N.retryLane=a,za(A,a),Ht(p,A,a),gh;y.data==="$?"||Hc(),e=fc(A,e,t)}else y.data==="$?"?(e.flags|=192,e.child=A.child,e=null):(A=N.treeContext,_e=Jt(y.nextSibling),xt=e,be=!0,ga=null,Wt=!1,A!==null&&(It[Lt++]=cn,It[Lt++]=dn,It[Lt++]=fa,cn=A.id,dn=A.overflow,fa=e),e=uc(e,a.children),e.flags|=4096);return e}return l?(Tn(),l=a.fallback,y=e.mode,N=A.child,Z=N.sibling,a=ln(N,{mode:"hidden",children:a.children}),a.subtreeFlags=N.subtreeFlags&65011712,Z!==null?l=ln(Z,l):(l=ua(l,y,t,null),l.flags|=2),l.return=e,a.return=e,a.sibling=l,e.child=a,a=l,l=e.child,y=A.child.memoizedState,y===null?y=cc(t):(N=y.cachePool,N!==null?(Z=et._currentValue,N=N.parent!==Z?{parent:Z,pool:Z}:N):N=cf(),y={baseLanes:y.baseLanes|t,cachePool:N}),l.memoizedState=y,l.childLanes=dc(A,p,t),e.memoizedState=lc,a):(Dn(e),t=A.child,A=t.sibling,t=ln(t,{mode:"visible",children:a.children}),t.return=e,t.sibling=null,A!==null&&(p=e.deletions,p===null?(e.deletions=[A],e.flags|=16):p.push(A)),e.child=t,e.memoizedState=null,t)}function uc(A,e){return e=No({mode:"visible",children:e},A.mode),e.return=A,A.child=e}function No(A,e){return A=Ut(22,A,null,e),A.lanes=0,A.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},A}function fc(A,e,t){return Pa(e,A.child,null,t),A=uc(e,e.pendingProps.children),A.flags|=2,e.memoizedState=null,A}function Qh(A,e,t){A.lanes|=e;var a=A.alternate;a!==null&&(a.lanes|=e),Hl(A.return,e,t)}function hc(A,e,t,a,l){var c=A.memoizedState;c===null?A.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=t,c.tailMode=l)}function Uh(A,e,t){var a=e.pendingProps,l=a.revealOrder,c=a.tail;if(st(A,e,a.children,t),a=tt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(A!==null&&(A.flags&128)!==0)A:for(A=e.child;A!==null;){if(A.tag===13)A.memoizedState!==null&&Qh(A,t,e);else if(A.tag===19)Qh(A,t,e);else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break A;for(;A.sibling===null;){if(A.return===null||A.return===e)break A;A=A.return}A.sibling.return=A.return,A=A.sibling}a&=1}switch(oA(tt,a),l){case"forwards":for(t=e.child,l=null;t!==null;)A=t.alternate,A!==null&&Eo(A)===null&&(l=t),t=t.sibling;t=l,t===null?(l=e.child,e.child=null):(l=t.sibling,t.sibling=null),hc(e,!1,l,t,c);break;case"backwards":for(t=null,l=e.child,e.child=null;l!==null;){if(A=l.alternate,A!==null&&Eo(A)===null){e.child=l;break}A=l.sibling,l.sibling=t,t=l,l=A}hc(e,!0,t,null,c);break;case"together":hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pn(A,e,t){if(A!==null&&(e.dependencies=A.dependencies),Rn|=e.lanes,(t&e.childLanes)===0)if(A!==null){if(Rr(A,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(A!==null&&e.child!==A.child)throw Error(o(153));if(e.child!==null){for(A=e.child,t=ln(A,A.pendingProps),e.child=t,t.return=e;A.sibling!==null;)A=A.sibling,t=t.sibling=ln(A,A.pendingProps),t.return=e;t.sibling=null}return e.child}function gc(A,e){return(A.lanes&e)!==0?!0:(A=A.dependencies,!!(A!==null&&uo(A)))}function Qm(A,e,t){switch(e.tag){case 3:jA(e,e.stateNode.containerInfo),jn(e,et,A.memoizedState.cache),Or();break;case 27:case 5:I(e);break;case 4:jA(e,e.stateNode.containerInfo);break;case 10:jn(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Dn(e),e.flags|=128,null):(t&e.child.childLanes)!==0?Ch(A,e,t):(Dn(e),A=pn(A,e,t),A!==null?A.sibling:null);Dn(e);break;case 19:var l=(A.flags&128)!==0;if(a=(t&e.childLanes)!==0,a||(Rr(A,e,t,!1),a=(t&e.childLanes)!==0),l){if(a)return Uh(A,e,t);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),oA(tt,tt.current),a)break;return null;case 22:case 23:return e.lanes=0,Bh(A,e,t);case 24:jn(e,et,A.memoizedState.cache)}return pn(A,e,t)}function Fh(A,e,t){if(A!==null)if(A.memoizedProps!==e.pendingProps)at=!0;else{if(!gc(A,t)&&(e.flags&128)===0)return at=!1,Qm(A,e,t);at=(A.flags&131072)!==0}else at=!1,be&&(e.flags&1048576)!==0&&tf(e,co,e.index);switch(e.lanes=0,e.tag){case 16:A:{A=e.pendingProps;var a=e.elementType,l=a._init;if(a=l(a._payload),e.type=a,typeof a=="function")Cl(a)?(A=wa(a,A),e.tag=1,e=yh(null,e,a,A,t)):(e.tag=0,e=sc(null,e,a,A,t));else{if(a!=null){if(l=a.$$typeof,l===yA){e.tag=11,e=ph(null,e,a,A,t);break A}else if(l===SA){e.tag=14,e=xh(null,e,a,A,t);break A}}throw e=KA(a)||a,Error(o(306,e,""))}}return e;case 0:return sc(A,e,e.type,e.pendingProps,t);case 1:return a=e.type,l=wa(a,e.pendingProps),yh(A,e,a,l,t);case 3:A:{if(jA(e,e.stateNode.containerInfo),A===null)throw Error(o(387));a=e.pendingProps;var c=e.memoizedState;l=c.element,Ll(A,e),Jr(e,a,null,t);var p=e.memoizedState;if(a=p.cache,jn(e,et,a),a!==c.cache&&Nl(e,[et],t,!0),Xr(),a=p.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:p.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=vh(A,e,a,t);break A}else if(a!==l){l=Dt(Error(o(424)),e),Kr(l),e=vh(A,e,a,t);break A}else{switch(A=e.stateNode.containerInfo,A.nodeType){case 9:A=A.body;break;default:A=A.nodeName==="HTML"?A.ownerDocument.body:A}for(_e=Jt(A.firstChild),xt=e,be=!0,ga=null,Wt=!0,t=rh(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Or(),a===l){e=pn(A,e,t);break A}st(A,e,a,t)}e=e.child}return e;case 26:return Ho(A,e),A===null?(t=Hg(e.type,null,e.pendingProps,null))?e.memoizedState=t:be||(t=e.type,A=e.pendingProps,a=Yo(D.current).createElement(t),a[U]=e,a[H]=A,ct(a,t,A),De(a),e.stateNode=a):e.memoizedState=Hg(e.type,A.memoizedProps,e.pendingProps,A.memoizedState),null;case 27:return I(e),A===null&&be&&(a=e.stateNode=Eg(e.type,e.pendingProps,D.current),xt=e,Wt=!0,l=_e,Vn(e.type)?(Zc=l,_e=Jt(a.firstChild)):_e=l),st(A,e,e.pendingProps.children,t),Ho(A,e),A===null&&(e.flags|=4194304),e.child;case 5:return A===null&&be&&((l=a=_e)&&(a=Pm(a,e.type,e.pendingProps,Wt),a!==null?(e.stateNode=a,xt=e,_e=Jt(a.firstChild),Wt=!1,l=!0):l=!1),l||pa(e)),I(e),l=e.type,c=e.pendingProps,p=A!==null?A.memoizedProps:null,a=c.children,Vc(l,c)?a=null:p!==null&&Vc(l,p)&&(e.flags|=32),e.memoizedState!==null&&(l=Gl(A,e,xm,null,null,t),pi._currentValue=l),Ho(A,e),st(A,e,a,t),e.child;case 6:return A===null&&be&&((A=t=_e)&&(t=AB(t,e.pendingProps,Wt),t!==null?(e.stateNode=t,xt=e,_e=null,A=!0):A=!1),A||pa(e)),null;case 13:return Ch(A,e,t);case 4:return jA(e,e.stateNode.containerInfo),a=e.pendingProps,A===null?e.child=Pa(e,null,a,t):st(A,e,a,t),e.child;case 11:return ph(A,e,e.type,e.pendingProps,t);case 7:return st(A,e,e.pendingProps,t),e.child;case 8:return st(A,e,e.pendingProps.children,t),e.child;case 12:return st(A,e,e.pendingProps.children,t),e.child;case 10:return a=e.pendingProps,jn(e,e.type,a.value),st(A,e,a.children,t),e.child;case 9:return l=e.type._context,a=e.pendingProps.children,ma(e),l=ft(l),a=a(l),e.flags|=1,st(A,e,a,t),e.child;case 14:return xh(A,e,e.type,e.pendingProps,t);case 15:return mh(A,e,e.type,e.pendingProps,t);case 19:return Uh(A,e,t);case 31:return a=e.pendingProps,t=e.mode,a={mode:a.mode,children:a.children},A===null?(t=No(a,t),t.ref=e.ref,e.child=t,t.return=e,e=t):(t=ln(A.child,a),t.ref=e.ref,e.child=t,t.return=e,e=t),e;case 22:return Bh(A,e,t);case 24:return ma(e),a=ft(et),A===null?(l=Dl(),l===null&&(l=Ne,c=kl(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=t),l=c),e.memoizedState={parent:a,cache:l},Il(e),jn(e,et,l)):((A.lanes&t)!==0&&(Ll(A,e),Jr(e,null,null,t),Xr()),l=A.memoizedState,c=e.memoizedState,l.parent!==a?(l={parent:a,cache:a},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),jn(e,et,a)):(a=c.cache,jn(e,et,a),a!==l.cache&&Nl(e,[et],t,!0))),st(A,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function xn(A){A.flags|=4}function Eh(A,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)A.flags&=-16777217;else if(A.flags|=16777216,!Tg(e)){if(e=Ot.current,e!==null&&((me&4194048)===me?$t!==null:(me&62914560)!==me&&(me&536870912)===0||e!==$t))throw Vr=Tl,df;A.flags|=8192}}function ko(A,e){e!==null&&(A.flags|=4),A.flags&16384&&(e=A.tag!==22?te():536870912,A.lanes|=e,nr|=e)}function ei(A,e){if(!be)switch(A.tailMode){case"hidden":e=A.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?A.tail=null:t.sibling=null;break;case"collapsed":t=A.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||A.tail===null?A.tail=null:A.tail.sibling=null:a.sibling=null}}function Ke(A){var e=A.alternate!==null&&A.alternate.child===A.child,t=0,a=0;if(e)for(var l=A.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=A,l=l.sibling;else for(l=A.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=A,l=l.sibling;return A.subtreeFlags|=a,A.childLanes=t,e}function Um(A,e,t){var a=e.pendingProps;switch(El(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(e),null;case 1:return Ke(e),null;case 3:return t=e.stateNode,a=null,A!==null&&(a=A.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),fn(et),dA(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(A===null||A.child===null)&&(Lr(e)?xn(e):A===null||A.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,rf())),Ke(e),null;case 26:return t=e.memoizedState,A===null?(xn(e),t!==null?(Ke(e),Eh(e,t)):(Ke(e),e.flags&=-16777217)):t?t!==A.memoizedState?(xn(e),Ke(e),Eh(e,t)):(Ke(e),e.flags&=-16777217):(A.memoizedProps!==a&&xn(e),Ke(e),e.flags&=-16777217),null;case 27:q(e),t=D.current;var l=e.type;if(A!==null&&e.stateNode!=null)A.memoizedProps!==a&&xn(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Ke(e),null}A=UA.current,Lr(e)?nf(e):(A=Eg(l,a,t),e.stateNode=A,xn(e))}return Ke(e),null;case 5:if(q(e),t=e.type,A!==null&&e.stateNode!=null)A.memoizedProps!==a&&xn(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return Ke(e),null}if(A=UA.current,Lr(e))nf(e);else{switch(l=Yo(D.current),A){case 1:A=l.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:A=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":A=l.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":A=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":A=l.createElement("div"),A.innerHTML="<script><\/script>",A=A.removeChild(A.firstChild);break;case"select":A=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?A.multiple=!0:a.size&&(A.size=a.size);break;default:A=typeof a.is=="string"?l.createElement(t,{is:a.is}):l.createElement(t)}}A[U]=e,A[H]=a;A:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)A.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break A;for(;l.sibling===null;){if(l.return===null||l.return===e)break A;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=A;A:switch(ct(A,t,a),t){case"button":case"input":case"select":case"textarea":A=!!a.autoFocus;break A;case"img":A=!0;break A;default:A=!1}A&&xn(e)}}return Ke(e),e.flags&=-16777217,null;case 6:if(A&&e.stateNode!=null)A.memoizedProps!==a&&xn(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(o(166));if(A=D.current,Lr(e)){if(A=e.stateNode,t=e.memoizedProps,a=null,l=xt,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}A[U]=e,A=!!(A.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||wg(A.nodeValue,t)),A||pa(e)}else A=Yo(A).createTextNode(a),A[U]=e,e.stateNode=A}return Ke(e),null;case 13:if(a=e.memoizedState,A===null||A.memoizedState!==null&&A.memoizedState.dehydrated!==null){if(l=Lr(e),a!==null&&a.dehydrated!==null){if(A===null){if(!l)throw Error(o(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[U]=e}else Or(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ke(e),l=!1}else l=rf(),A!==null&&A.memoizedState!==null&&(A.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(gn(e),e):(gn(e),null)}if(gn(e),(e.flags&128)!==0)return e.lanes=t,e;if(t=a!==null,A=A!==null&&A.memoizedState!==null,t){a=e.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var c=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==l&&(a.flags|=2048)}return t!==A&&t&&(e.child.flags|=8192),ko(e,e.updateQueue),Ke(e),null;case 4:return dA(),A===null&&Kc(e.stateNode.containerInfo),Ke(e),null;case 10:return fn(e.type),Ke(e),null;case 19:if(sA(tt),l=e.memoizedState,l===null)return Ke(e),null;if(a=(e.flags&128)!==0,c=l.rendering,c===null)if(a)ei(l,!1);else{if(Ge!==0||A!==null&&(A.flags&128)!==0)for(A=e.child;A!==null;){if(c=Eo(A),c!==null){for(e.flags|=128,ei(l,!1),A=c.updateQueue,e.updateQueue=A,ko(e,A),e.subtreeFlags=0,A=t,t=e.child;t!==null;)ef(t,A),t=t.sibling;return oA(tt,tt.current&1|2),e.child}A=A.sibling}l.tail!==null&&PA()>To&&(e.flags|=128,a=!0,ei(l,!1),e.lanes=4194304)}else{if(!a)if(A=Eo(c),A!==null){if(e.flags|=128,a=!0,A=A.updateQueue,e.updateQueue=A,ko(e,A),ei(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!be)return Ke(e),null}else 2*PA()-l.renderingStartTime>To&&t!==536870912&&(e.flags|=128,a=!0,ei(l,!1),e.lanes=4194304);l.isBackwards?(c.sibling=e.child,e.child=c):(A=l.last,A!==null?A.sibling=c:e.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=PA(),e.sibling=null,A=tt.current,oA(tt,a?A&1|2:A&1),e):(Ke(e),null);case 22:case 23:return gn(e),zl(),a=e.memoizedState!==null,A!==null?A.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(t&536870912)!==0&&(e.flags&128)===0&&(Ke(e),e.subtreeFlags&6&&(e.flags|=8192)):Ke(e),t=e.updateQueue,t!==null&&ko(e,t.retryQueue),t=null,A!==null&&A.memoizedState!==null&&A.memoizedState.cachePool!==null&&(t=A.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(e.flags|=2048),A!==null&&sA(Ba),null;case 24:return t=null,A!==null&&(t=A.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),fn(et),Ke(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function Fm(A,e){switch(El(e),e.tag){case 1:return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 3:return fn(et),dA(),A=e.flags,(A&65536)!==0&&(A&128)===0?(e.flags=A&-65537|128,e):null;case 26:case 27:case 5:return q(e),null;case 13:if(gn(e),A=e.memoizedState,A!==null&&A.dehydrated!==null){if(e.alternate===null)throw Error(o(340));Or()}return A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 19:return sA(tt),null;case 4:return dA(),null;case 10:return fn(e.type),null;case 22:case 23:return gn(e),zl(),A!==null&&sA(Ba),A=e.flags,A&65536?(e.flags=A&-65537|128,e):null;case 24:return fn(et),null;case 25:return null;default:return null}}function Sh(A,e){switch(El(e),e.tag){case 3:fn(et),dA();break;case 26:case 27:case 5:q(e);break;case 4:dA();break;case 13:gn(e);break;case 19:sA(tt);break;case 10:fn(e.type);break;case 22:case 23:gn(e),zl(),A!==null&&sA(Ba);break;case 24:fn(et)}}function ti(A,e){try{var t=e.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&A)===A){a=void 0;var c=t.create,p=t.inst;a=c(),p.destroy=a}t=t.next}while(t!==l)}}catch(y){He(e,e.return,y)}}function In(A,e,t){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var c=l.next;a=c;do{if((a.tag&A)===A){var p=a.inst,y=p.destroy;if(y!==void 0){p.destroy=void 0,l=e;var N=t,Z=y;try{Z()}catch(fA){He(l,N,fA)}}}a=a.next}while(a!==c)}}catch(fA){He(e,e.return,fA)}}function jh(A){var e=A.updateQueue;if(e!==null){var t=A.stateNode;try{xf(e,t)}catch(a){He(A,A.return,a)}}}function Hh(A,e,t){t.props=wa(A.type,A.memoizedProps),t.state=A.memoizedState;try{t.componentWillUnmount()}catch(a){He(A,e,a)}}function ni(A,e){try{var t=A.ref;if(t!==null){switch(A.tag){case 26:case 27:case 5:var a=A.stateNode;break;case 30:a=A.stateNode;break;default:a=A.stateNode}typeof t=="function"?A.refCleanup=t(a):t.current=a}}catch(l){He(A,e,l)}}function Pt(A,e){var t=A.ref,a=A.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){He(A,e,l)}finally{A.refCleanup=null,A=A.alternate,A!=null&&(A.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){He(A,e,l)}else t.current=null}function Nh(A){var e=A.type,t=A.memoizedProps,a=A.stateNode;try{A:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break A;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){He(A,A.return,l)}}function pc(A,e,t){try{var a=A.stateNode;Jm(a,A.type,t,e),a[H]=e}catch(l){He(A,A.return,l)}}function kh(A){return A.tag===5||A.tag===3||A.tag===26||A.tag===27&&Vn(A.type)||A.tag===4}function xc(A){A:for(;;){for(;A.sibling===null;){if(A.return===null||kh(A.return))return null;A=A.return}for(A.sibling.return=A.return,A=A.sibling;A.tag!==5&&A.tag!==6&&A.tag!==18;){if(A.tag===27&&Vn(A.type)||A.flags&2||A.child===null||A.tag===4)continue A;A.child.return=A,A=A.child}if(!(A.flags&2))return A.stateNode}}function mc(A,e,t){var a=A.tag;if(a===5||a===6)A=A.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(A,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(A),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Vo));else if(a!==4&&(a===27&&Vn(A.type)&&(t=A.stateNode,e=null),A=A.child,A!==null))for(mc(A,e,t),A=A.sibling;A!==null;)mc(A,e,t),A=A.sibling}function Mo(A,e,t){var a=A.tag;if(a===5||a===6)A=A.stateNode,e?t.insertBefore(A,e):t.appendChild(A);else if(a!==4&&(a===27&&Vn(A.type)&&(t=A.stateNode),A=A.child,A!==null))for(Mo(A,e,t),A=A.sibling;A!==null;)Mo(A,e,t),A=A.sibling}function Mh(A){var e=A.stateNode,t=A.memoizedProps;try{for(var a=A.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);ct(e,a,t),e[U]=A,e[H]=t}catch(c){He(A,A.return,c)}}var mn=!1,Je=!1,Bc=!1,Dh=typeof WeakSet=="function"?WeakSet:Set,rt=null;function Em(A,e){if(A=A.containerInfo,_c=$o,A=Vu(A),xl(A)){if("selectionStart"in A)var t={start:A.selectionStart,end:A.selectionEnd};else A:{t=(t=A.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{t.nodeType,c.nodeType}catch{t=null;break A}var p=0,y=-1,N=-1,Z=0,fA=0,bA=A,$=null;e:for(;;){for(var P;bA!==t||l!==0&&bA.nodeType!==3||(y=p+l),bA!==c||a!==0&&bA.nodeType!==3||(N=p+a),bA.nodeType===3&&(p+=bA.nodeValue.length),(P=bA.firstChild)!==null;)$=bA,bA=P;for(;;){if(bA===A)break e;if($===t&&++Z===l&&(y=p),$===c&&++fA===a&&(N=p),(P=bA.nextSibling)!==null)break;bA=$,$=bA.parentNode}bA=P}t=y===-1||N===-1?null:{start:y,end:N}}else t=null}t=t||{start:0,end:0}}else t=null;for(Gc={focusedElem:A,selectionRange:t},$o=!1,rt=e;rt!==null;)if(e=rt,A=e.child,(e.subtreeFlags&1024)!==0&&A!==null)A.return=e,rt=A;else for(;rt!==null;){switch(e=rt,c=e.alternate,A=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((A&1024)!==0&&c!==null){A=void 0,t=e,l=c.memoizedProps,c=c.memoizedState,a=t.stateNode;try{var ne=wa(t.type,l,t.elementType===t.type);A=a.getSnapshotBeforeUpdate(ne,c),a.__reactInternalSnapshotBeforeUpdate=A}catch(Ae){He(t,t.return,Ae)}}break;case 3:if((A&1024)!==0){if(A=e.stateNode.containerInfo,t=A.nodeType,t===9)Xc(A);else if(t===1)switch(A.nodeName){case"HEAD":case"HTML":case"BODY":Xc(A);break;default:A.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((A&1024)!==0)throw Error(o(163))}if(A=e.sibling,A!==null){A.return=e.return,rt=A;break}rt=e.return}}function Th(A,e,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ln(A,t),a&4&&ti(5,t);break;case 1:if(Ln(A,t),a&4)if(A=t.stateNode,e===null)try{A.componentDidMount()}catch(p){He(t,t.return,p)}else{var l=wa(t.type,e.memoizedProps);e=e.memoizedState;try{A.componentDidUpdate(l,e,A.__reactInternalSnapshotBeforeUpdate)}catch(p){He(t,t.return,p)}}a&64&&jh(t),a&512&&ni(t,t.return);break;case 3:if(Ln(A,t),a&64&&(A=t.updateQueue,A!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{xf(A,e)}catch(p){He(t,t.return,p)}}break;case 27:e===null&&a&4&&Mh(t);case 26:case 5:Ln(A,t),e===null&&a&4&&Nh(t),a&512&&ni(t,t.return);break;case 12:Ln(A,t);break;case 13:Ln(A,t),a&4&&Oh(A,t),a&64&&(A=t.memoizedState,A!==null&&(A=A.dehydrated,A!==null&&(t=Im.bind(null,t),eB(A,t))));break;case 22:if(a=t.memoizedState!==null||mn,!a){e=e!==null&&e.memoizedState!==null||Je,l=mn;var c=Je;mn=a,(Je=e)&&!c?On(A,t,(t.subtreeFlags&8772)!==0):Ln(A,t),mn=l,Je=c}break;case 30:break;default:Ln(A,t)}}function Ih(A){var e=A.alternate;e!==null&&(A.alternate=null,Ih(e)),A.child=null,A.deletions=null,A.sibling=null,A.tag===5&&(e=A.stateNode,e!==null&&RA(e)),A.stateNode=null,A.return=null,A.dependencies=null,A.memoizedProps=null,A.memoizedState=null,A.pendingProps=null,A.stateNode=null,A.updateQueue=null}var Te=null,wt=!1;function Bn(A,e,t){for(t=t.child;t!==null;)Lh(A,e,t),t=t.sibling}function Lh(A,e,t){if(ue&&typeof ue.onCommitFiberUnmount=="function")try{ue.onCommitFiberUnmount(xe,t)}catch{}switch(t.tag){case 26:Je||Pt(t,e),Bn(A,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Je||Pt(t,e);var a=Te,l=wt;Vn(t.type)&&(Te=t.stateNode,wt=!1),Bn(A,e,t),ui(t.stateNode),Te=a,wt=l;break;case 5:Je||Pt(t,e);case 6:if(a=Te,l=wt,Te=null,Bn(A,e,t),Te=a,wt=l,Te!==null)if(wt)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(t.stateNode)}catch(c){He(t,e,c)}else try{Te.removeChild(t.stateNode)}catch(c){He(t,e,c)}break;case 18:Te!==null&&(wt?(A=Te,Ug(A.nodeType===9?A.body:A.nodeName==="HTML"?A.ownerDocument.body:A,t.stateNode),bi(A)):Ug(Te,t.stateNode));break;case 4:a=Te,l=wt,Te=t.stateNode.containerInfo,wt=!0,Bn(A,e,t),Te=a,wt=l;break;case 0:case 11:case 14:case 15:Je||In(2,t,e),Je||In(4,t,e),Bn(A,e,t);break;case 1:Je||(Pt(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Hh(t,e,a)),Bn(A,e,t);break;case 21:Bn(A,e,t);break;case 22:Je=(a=Je)||t.memoizedState!==null,Bn(A,e,t),Je=a;break;default:Bn(A,e,t)}}function Oh(A,e){if(e.memoizedState===null&&(A=e.alternate,A!==null&&(A=A.memoizedState,A!==null&&(A=A.dehydrated,A!==null))))try{bi(A)}catch(t){He(e,e.return,t)}}function Sm(A){switch(A.tag){case 13:case 19:var e=A.stateNode;return e===null&&(e=A.stateNode=new Dh),e;case 22:return A=A.stateNode,e=A._retryCache,e===null&&(e=A._retryCache=new Dh),e;default:throw Error(o(435,A.tag))}}function bc(A,e){var t=Sm(A);e.forEach(function(a){var l=Lm.bind(null,A,a);t.has(a)||(t.add(a),a.then(l,l))})}function Ft(A,e){var t=e.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],c=A,p=e,y=p;A:for(;y!==null;){switch(y.tag){case 27:if(Vn(y.type)){Te=y.stateNode,wt=!1;break A}break;case 5:Te=y.stateNode,wt=!1;break A;case 3:case 4:Te=y.stateNode.containerInfo,wt=!0;break A}y=y.return}if(Te===null)throw Error(o(160));Lh(c,p,l),Te=null,wt=!1,c=l.alternate,c!==null&&(c.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Kh(e,A),e=e.sibling}var Xt=null;function Kh(A,e){var t=A.alternate,a=A.flags;switch(A.tag){case 0:case 11:case 14:case 15:Ft(e,A),Et(A),a&4&&(In(3,A,A.return),ti(3,A),In(5,A,A.return));break;case 1:Ft(e,A),Et(A),a&512&&(Je||t===null||Pt(t,t.return)),a&64&&mn&&(A=A.updateQueue,A!==null&&(a=A.callbacks,a!==null&&(t=A.shared.hiddenCallbacks,A.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=Xt;if(Ft(e,A),Et(A),a&512&&(Je||t===null||Pt(t,t.return)),a&4){var c=t!==null?t.memoizedState:null;if(a=A.memoizedState,t===null)if(a===null)if(A.stateNode===null){A:{a=A.type,t=A.memoizedProps,l=l.ownerDocument||l;e:switch(a){case"title":c=l.getElementsByTagName("title")[0],(!c||c[FA]||c[U]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=l.createElement(a),l.head.insertBefore(c,l.querySelector("head > title"))),ct(c,a,t),c[U]=A,De(c),a=c;break A;case"link":var p=Mg("link","href",l).get(a+(t.href||""));if(p){for(var y=0;y<p.length;y++)if(c=p[y],c.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&c.getAttribute("rel")===(t.rel==null?null:t.rel)&&c.getAttribute("title")===(t.title==null?null:t.title)&&c.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){p.splice(y,1);break e}}c=l.createElement(a),ct(c,a,t),l.head.appendChild(c);break;case"meta":if(p=Mg("meta","content",l).get(a+(t.content||""))){for(y=0;y<p.length;y++)if(c=p[y],c.getAttribute("content")===(t.content==null?null:""+t.content)&&c.getAttribute("name")===(t.name==null?null:t.name)&&c.getAttribute("property")===(t.property==null?null:t.property)&&c.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&c.getAttribute("charset")===(t.charSet==null?null:t.charSet)){p.splice(y,1);break e}}c=l.createElement(a),ct(c,a,t),l.head.appendChild(c);break;default:throw Error(o(468,a))}c[U]=A,De(c),a=c}A.stateNode=a}else Dg(l,A.type,A.stateNode);else A.stateNode=kg(l,a,A.memoizedProps);else c!==a?(c===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):c.count--,a===null?Dg(l,A.type,A.stateNode):kg(l,a,A.memoizedProps)):a===null&&A.stateNode!==null&&pc(A,A.memoizedProps,t.memoizedProps)}break;case 27:Ft(e,A),Et(A),a&512&&(Je||t===null||Pt(t,t.return)),t!==null&&a&4&&pc(A,A.memoizedProps,t.memoizedProps);break;case 5:if(Ft(e,A),Et(A),a&512&&(Je||t===null||Pt(t,t.return)),A.flags&32){l=A.stateNode;try{Da(l,"")}catch(P){He(A,A.return,P)}}a&4&&A.stateNode!=null&&(l=A.memoizedProps,pc(A,l,t!==null?t.memoizedProps:l)),a&1024&&(Bc=!0);break;case 6:if(Ft(e,A),Et(A),a&4){if(A.stateNode===null)throw Error(o(162));a=A.memoizedProps,t=A.stateNode;try{t.nodeValue=a}catch(P){He(A,A.return,P)}}break;case 3:if(Zo=null,l=Xt,Xt=Xo(e.containerInfo),Ft(e,A),Xt=l,Et(A),a&4&&t!==null&&t.memoizedState.isDehydrated)try{bi(e.containerInfo)}catch(P){He(A,A.return,P)}Bc&&(Bc=!1,Rh(A));break;case 4:a=Xt,Xt=Xo(A.stateNode.containerInfo),Ft(e,A),Et(A),Xt=a;break;case 12:Ft(e,A),Et(A);break;case 13:Ft(e,A),Et(A),A.child.flags&8192&&A.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Uc=PA()),a&4&&(a=A.updateQueue,a!==null&&(A.updateQueue=null,bc(A,a)));break;case 22:l=A.memoizedState!==null;var N=t!==null&&t.memoizedState!==null,Z=mn,fA=Je;if(mn=Z||l,Je=fA||N,Ft(e,A),Je=fA,mn=Z,Et(A),a&8192)A:for(e=A.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(t===null||N||mn||Je||ya(A)),t=null,e=A;;){if(e.tag===5||e.tag===26){if(t===null){N=t=e;try{if(c=N.stateNode,l)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{y=N.stateNode;var bA=N.memoizedProps.style,$=bA!=null&&bA.hasOwnProperty("display")?bA.display:null;y.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(P){He(N,N.return,P)}}}else if(e.tag===6){if(t===null){N=e;try{N.stateNode.nodeValue=l?"":N.memoizedProps}catch(P){He(N,N.return,P)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===A)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===A)break A;for(;e.sibling===null;){if(e.return===null||e.return===A)break A;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=A.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,bc(A,t))));break;case 19:Ft(e,A),Et(A),a&4&&(a=A.updateQueue,a!==null&&(A.updateQueue=null,bc(A,a)));break;case 30:break;case 21:break;default:Ft(e,A),Et(A)}}function Et(A){var e=A.flags;if(e&2){try{for(var t,a=A.return;a!==null;){if(kh(a)){t=a;break}a=a.return}if(t==null)throw Error(o(160));switch(t.tag){case 27:var l=t.stateNode,c=xc(A);Mo(A,c,l);break;case 5:var p=t.stateNode;t.flags&32&&(Da(p,""),t.flags&=-33);var y=xc(A);Mo(A,y,p);break;case 3:case 4:var N=t.stateNode.containerInfo,Z=xc(A);mc(A,Z,N);break;default:throw Error(o(161))}}catch(fA){He(A,A.return,fA)}A.flags&=-3}e&4096&&(A.flags&=-4097)}function Rh(A){if(A.subtreeFlags&1024)for(A=A.child;A!==null;){var e=A;Rh(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),A=A.sibling}}function Ln(A,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Th(A,e.alternate,e),e=e.sibling}function ya(A){for(A=A.child;A!==null;){var e=A;switch(e.tag){case 0:case 11:case 14:case 15:In(4,e,e.return),ya(e);break;case 1:Pt(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&Hh(e,e.return,t),ya(e);break;case 27:ui(e.stateNode);case 26:case 5:Pt(e,e.return),ya(e);break;case 22:e.memoizedState===null&&ya(e);break;case 30:ya(e);break;default:ya(e)}A=A.sibling}}function On(A,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,l=A,c=e,p=c.flags;switch(c.tag){case 0:case 11:case 15:On(l,c,t),ti(4,c);break;case 1:if(On(l,c,t),a=c,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(Z){He(a,a.return,Z)}if(a=c,l=a.updateQueue,l!==null){var y=a.stateNode;try{var N=l.shared.hiddenCallbacks;if(N!==null)for(l.shared.hiddenCallbacks=null,l=0;l<N.length;l++)pf(N[l],y)}catch(Z){He(a,a.return,Z)}}t&&p&64&&jh(c),ni(c,c.return);break;case 27:Mh(c);case 26:case 5:On(l,c,t),t&&a===null&&p&4&&Nh(c),ni(c,c.return);break;case 12:On(l,c,t);break;case 13:On(l,c,t),t&&p&4&&Oh(l,c);break;case 22:c.memoizedState===null&&On(l,c,t),ni(c,c.return);break;case 30:break;default:On(l,c,t)}e=e.sibling}}function wc(A,e){var t=null;A!==null&&A.memoizedState!==null&&A.memoizedState.cachePool!==null&&(t=A.memoizedState.cachePool.pool),A=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(A=e.memoizedState.cachePool.pool),A!==t&&(A!=null&&A.refCount++,t!=null&&zr(t))}function yc(A,e){A=null,e.alternate!==null&&(A=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==A&&(e.refCount++,A!=null&&zr(A))}function An(A,e,t,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zh(A,e,t,a),e=e.sibling}function zh(A,e,t,a){var l=e.flags;switch(e.tag){case 0:case 11:case 15:An(A,e,t,a),l&2048&&ti(9,e);break;case 1:An(A,e,t,a);break;case 3:An(A,e,t,a),l&2048&&(A=null,e.alternate!==null&&(A=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==A&&(e.refCount++,A!=null&&zr(A)));break;case 12:if(l&2048){An(A,e,t,a),A=e.stateNode;try{var c=e.memoizedProps,p=c.id,y=c.onPostCommit;typeof y=="function"&&y(p,e.alternate===null?"mount":"update",A.passiveEffectDuration,-0)}catch(N){He(e,e.return,N)}}else An(A,e,t,a);break;case 13:An(A,e,t,a);break;case 23:break;case 22:c=e.stateNode,p=e.alternate,e.memoizedState!==null?c._visibility&2?An(A,e,t,a):ai(A,e):c._visibility&2?An(A,e,t,a):(c._visibility|=2,Ar(A,e,t,a,(e.subtreeFlags&10256)!==0)),l&2048&&wc(p,e);break;case 24:An(A,e,t,a),l&2048&&yc(e.alternate,e);break;default:An(A,e,t,a)}}function Ar(A,e,t,a,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var c=A,p=e,y=t,N=a,Z=p.flags;switch(p.tag){case 0:case 11:case 15:Ar(c,p,y,N,l),ti(8,p);break;case 23:break;case 22:var fA=p.stateNode;p.memoizedState!==null?fA._visibility&2?Ar(c,p,y,N,l):ai(c,p):(fA._visibility|=2,Ar(c,p,y,N,l)),l&&Z&2048&&wc(p.alternate,p);break;case 24:Ar(c,p,y,N,l),l&&Z&2048&&yc(p.alternate,p);break;default:Ar(c,p,y,N,l)}e=e.sibling}}function ai(A,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=A,a=e,l=a.flags;switch(a.tag){case 22:ai(t,a),l&2048&&wc(a.alternate,a);break;case 24:ai(t,a),l&2048&&yc(a.alternate,a);break;default:ai(t,a)}e=e.sibling}}var ri=8192;function er(A){if(A.subtreeFlags&ri)for(A=A.child;A!==null;)_h(A),A=A.sibling}function _h(A){switch(A.tag){case 26:er(A),A.flags&ri&&A.memoizedState!==null&&hB(Xt,A.memoizedState,A.memoizedProps);break;case 5:er(A);break;case 3:case 4:var e=Xt;Xt=Xo(A.stateNode.containerInfo),er(A),Xt=e;break;case 22:A.memoizedState===null&&(e=A.alternate,e!==null&&e.memoizedState!==null?(e=ri,ri=16777216,er(A),ri=e):er(A));break;default:er(A)}}function Gh(A){var e=A.alternate;if(e!==null&&(A=e.child,A!==null)){e.child=null;do e=A.sibling,A.sibling=null,A=e;while(A!==null)}}function ii(A){var e=A.deletions;if((A.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];rt=a,Yh(a,A)}Gh(A)}if(A.subtreeFlags&10256)for(A=A.child;A!==null;)Vh(A),A=A.sibling}function Vh(A){switch(A.tag){case 0:case 11:case 15:ii(A),A.flags&2048&&In(9,A,A.return);break;case 3:ii(A);break;case 12:ii(A);break;case 22:var e=A.stateNode;A.memoizedState!==null&&e._visibility&2&&(A.return===null||A.return.tag!==13)?(e._visibility&=-3,Do(A)):ii(A);break;default:ii(A)}}function Do(A){var e=A.deletions;if((A.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];rt=a,Yh(a,A)}Gh(A)}for(A=A.child;A!==null;){switch(e=A,e.tag){case 0:case 11:case 15:In(8,e,e.return),Do(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,Do(e));break;default:Do(e)}A=A.sibling}}function Yh(A,e){for(;rt!==null;){var t=rt;switch(t.tag){case 0:case 11:case 15:In(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:zr(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,rt=a;else A:for(t=A;rt!==null;){a=rt;var l=a.sibling,c=a.return;if(Ih(a),a===t){rt=null;break A}if(l!==null){l.return=c,rt=l;break A}rt=c}}}var jm={getCacheForType:function(A){var e=ft(et),t=e.data.get(A);return t===void 0&&(t=A(),e.data.set(A,t)),t}},Hm=typeof WeakMap=="function"?WeakMap:Map,ve=0,Ne=null,le=null,me=0,Ce=0,St=null,Kn=!1,tr=!1,vc=!1,bn=0,Ge=0,Rn=0,va=0,Cc=0,Kt=0,nr=0,oi=null,yt=null,Qc=!1,Uc=0,To=1/0,Io=null,zn=null,lt=0,_n=null,ar=null,rr=0,Fc=0,Ec=null,Xh=null,si=0,Sc=null;function jt(){if((ve&2)!==0&&me!==0)return me&-me;if(R.T!==null){var A=Ya;return A!==0?A:Tc()}return f()}function Jh(){Kt===0&&(Kt=(me&536870912)===0||be?OA():536870912);var A=Ot.current;return A!==null&&(A.flags|=32),Kt}function Ht(A,e,t){(A===Ne&&(Ce===2||Ce===9)||A.cancelPendingCommit!==null)&&(ir(A,0),Gn(A,me,Kt,!1)),he(A,t),((ve&2)===0||A!==Ne)&&(A===Ne&&((ve&2)===0&&(va|=t),Ge===4&&Gn(A,me,Kt,!1)),en(A))}function Zh(A,e,t){if((ve&6)!==0)throw Error(o(327));var a=!t&&(e&124)===0&&(e&A.expiredLanes)===0||NA(A,e),l=a?Mm(A,e):Nc(A,e,!0),c=a;do{if(l===0){tr&&!a&&Gn(A,e,0,!1);break}else{if(t=A.current.alternate,c&&!Nm(t)){l=Nc(A,e,!1),c=!1;continue}if(l===2){if(c=e,A.errorRecoveryDisabledLanes&c)var p=0;else p=A.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){e=p;A:{var y=A;l=oi;var N=y.current.memoizedState.isDehydrated;if(N&&(ir(y,p).flags|=256),p=Nc(y,p,!1),p!==2){if(vc&&!N){y.errorRecoveryDisabledLanes|=c,va|=c,l=4;break A}c=yt,yt=l,c!==null&&(yt===null?yt=c:yt.push.apply(yt,c))}l=p}if(c=!1,l!==2)continue}}if(l===1){ir(A,0),Gn(A,e,0,!0);break}A:{switch(a=A,c=l,c){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Gn(a,e,Kt,!Kn);break A;case 2:yt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(l=Uc+300-PA(),10<l)){if(Gn(a,e,Kt,!Kn),BA(a,0,!0)!==0)break A;a.timeoutHandle=Cg(qh.bind(null,a,t,yt,Io,Qc,e,Kt,va,nr,Kn,c,2,-0,0),l);break A}qh(a,t,yt,Io,Qc,e,Kt,va,nr,Kn,c,0,-0,0)}}break}while(!0);en(A)}function qh(A,e,t,a,l,c,p,y,N,Z,fA,bA,$,P){if(A.timeoutHandle=-1,bA=e.subtreeFlags,(bA&8192||(bA&16785408)===16785408)&&(gi={stylesheets:null,count:0,unsuspend:fB},_h(e),bA=gB(),bA!==null)){A.cancelPendingCommit=bA(ng.bind(null,A,e,c,t,a,l,p,y,N,fA,1,$,P)),Gn(A,c,p,!Z);return}ng(A,e,c,t,a,l,p,y,N)}function Nm(A){for(var e=A;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],c=l.getSnapshot;l=l.value;try{if(!Qt(c(),l))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===A)break;for(;e.sibling===null;){if(e.return===null||e.return===A)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gn(A,e,t,a){e&=~Cc,e&=~va,A.suspendedLanes|=e,A.pingedLanes&=~e,a&&(A.warmLanes|=e),a=A.expirationTimes;for(var l=e;0<l;){var c=31-F(l),p=1<<c;a[c]=-1,l&=~p}t!==0&&je(A,t,e)}function Lo(){return(ve&6)===0?(li(0),!1):!0}function jc(){if(le!==null){if(Ce===0)var A=le.return;else A=le,un=xa=null,Xl(A),$a=null,Pr=0,A=le;for(;A!==null;)Sh(A.alternate,A),A=A.return;le=null}}function ir(A,e){var t=A.timeoutHandle;t!==-1&&(A.timeoutHandle=-1,qm(t)),t=A.cancelPendingCommit,t!==null&&(A.cancelPendingCommit=null,t()),jc(),Ne=A,le=t=ln(A.current,null),me=e,Ce=0,St=null,Kn=!1,tr=NA(A,e),vc=!1,nr=Kt=Cc=va=Rn=Ge=0,yt=oi=null,Qc=!1,(e&8)!==0&&(e|=e&32);var a=A.entangledLanes;if(a!==0)for(A=A.entanglements,a&=e;0<a;){var l=31-F(a),c=1<<l;e|=A[l],a&=~c}return bn=e,ro(),t}function Wh(A,e){oe=null,R.H=Qo,e===Gr||e===go?(e=hf(),Ce=3):e===df?(e=hf(),Ce=4):Ce=e===gh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,St=e,le===null&&(Ge=1,jo(A,Dt(e,A.current)))}function $h(){var A=R.H;return R.H=Qo,A===null?Qo:A}function Ph(){var A=R.A;return R.A=jm,A}function Hc(){Ge=4,Kn||(me&4194048)!==me&&Ot.current!==null||(tr=!0),(Rn&134217727)===0&&(va&134217727)===0||Ne===null||Gn(Ne,me,Kt,!1)}function Nc(A,e,t){var a=ve;ve|=2;var l=$h(),c=Ph();(Ne!==A||me!==e)&&(Io=null,ir(A,e)),e=!1;var p=Ge;A:do try{if(Ce!==0&&le!==null){var y=le,N=St;switch(Ce){case 8:jc(),p=6;break A;case 3:case 2:case 9:case 6:Ot.current===null&&(e=!0);var Z=Ce;if(Ce=0,St=null,or(A,y,N,Z),t&&tr){p=0;break A}break;default:Z=Ce,Ce=0,St=null,or(A,y,N,Z)}}km(),p=Ge;break}catch(fA){Wh(A,fA)}while(!0);return e&&A.shellSuspendCounter++,un=xa=null,ve=a,R.H=l,R.A=c,le===null&&(Ne=null,me=0,ro()),p}function km(){for(;le!==null;)Ag(le)}function Mm(A,e){var t=ve;ve|=2;var a=$h(),l=Ph();Ne!==A||me!==e?(Io=null,To=PA()+500,ir(A,e)):tr=NA(A,e);A:do try{if(Ce!==0&&le!==null){e=le;var c=St;e:switch(Ce){case 1:Ce=0,St=null,or(A,e,c,1);break;case 2:case 9:if(uf(c)){Ce=0,St=null,eg(e);break}e=function(){Ce!==2&&Ce!==9||Ne!==A||(Ce=7),en(A)},c.then(e,e);break A;case 3:Ce=7;break A;case 4:Ce=5;break A;case 7:uf(c)?(Ce=0,St=null,eg(e)):(Ce=0,St=null,or(A,e,c,7));break;case 5:var p=null;switch(le.tag){case 26:p=le.memoizedState;case 5:case 27:var y=le;if(!p||Tg(p)){Ce=0,St=null;var N=y.sibling;if(N!==null)le=N;else{var Z=y.return;Z!==null?(le=Z,Oo(Z)):le=null}break e}}Ce=0,St=null,or(A,e,c,5);break;case 6:Ce=0,St=null,or(A,e,c,6);break;case 8:jc(),Ge=6;break A;default:throw Error(o(462))}}Dm();break}catch(fA){Wh(A,fA)}while(!0);return un=xa=null,R.H=a,R.A=l,ve=t,le!==null?0:(Ne=null,me=0,ro(),Ge)}function Dm(){for(;le!==null&&!VA();)Ag(le)}function Ag(A){var e=Fh(A.alternate,A,bn);A.memoizedProps=A.pendingProps,e===null?Oo(A):le=e}function eg(A){var e=A,t=e.alternate;switch(e.tag){case 15:case 0:e=wh(t,e,e.pendingProps,e.type,void 0,me);break;case 11:e=wh(t,e,e.pendingProps,e.type.render,e.ref,me);break;case 5:Xl(e);default:Sh(t,e),e=le=ef(e,bn),e=Fh(t,e,bn)}A.memoizedProps=A.pendingProps,e===null?Oo(A):le=e}function or(A,e,t,a){un=xa=null,Xl(e),$a=null,Pr=0;var l=e.return;try{if(Cm(A,l,e,t,me)){Ge=1,jo(A,Dt(t,A.current)),le=null;return}}catch(c){if(l!==null)throw le=l,c;Ge=1,jo(A,Dt(t,A.current)),le=null;return}e.flags&32768?(be||a===1?A=!0:tr||(me&536870912)!==0?A=!1:(Kn=A=!0,(a===2||a===9||a===3||a===6)&&(a=Ot.current,a!==null&&a.tag===13&&(a.flags|=16384))),tg(e,A)):Oo(e)}function Oo(A){var e=A;do{if((e.flags&32768)!==0){tg(e,Kn);return}A=e.return;var t=Um(e.alternate,e,bn);if(t!==null){le=t;return}if(e=e.sibling,e!==null){le=e;return}le=e=A}while(e!==null);Ge===0&&(Ge=5)}function tg(A,e){do{var t=Fm(A.alternate,A);if(t!==null){t.flags&=32767,le=t;return}if(t=A.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(A=A.sibling,A!==null)){le=A;return}le=A=t}while(A!==null);Ge=6,le=null}function ng(A,e,t,a,l,c,p,y,N){A.cancelPendingCommit=null;do Ko();while(lt!==0);if((ve&6)!==0)throw Error(o(327));if(e!==null){if(e===A.current)throw Error(o(177));if(c=e.lanes|e.childLanes,c|=yl,Me(A,t,c,p,y,N),A===Ne&&(le=Ne=null,me=0),ar=e,_n=A,rr=t,Fc=c,Ec=l,Xh=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(A.callbackNode=null,A.callbackPriority=0,Om(Se,function(){return sg(),null})):(A.callbackNode=null,A.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=R.T,R.T=null,l=nA.p,nA.p=2,p=ve,ve|=4;try{Em(A,e,t)}finally{ve=p,nA.p=l,R.T=a}}lt=1,ag(),rg(),ig()}}function ag(){if(lt===1){lt=0;var A=_n,e=ar,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=R.T,R.T=null;var a=nA.p;nA.p=2;var l=ve;ve|=4;try{Kh(e,A);var c=Gc,p=Vu(A.containerInfo),y=c.focusedElem,N=c.selectionRange;if(p!==y&&y&&y.ownerDocument&&Gu(y.ownerDocument.documentElement,y)){if(N!==null&&xl(y)){var Z=N.start,fA=N.end;if(fA===void 0&&(fA=Z),"selectionStart"in y)y.selectionStart=Z,y.selectionEnd=Math.min(fA,y.value.length);else{var bA=y.ownerDocument||document,$=bA&&bA.defaultView||window;if($.getSelection){var P=$.getSelection(),ne=y.textContent.length,Ae=Math.min(N.start,ne),Fe=N.end===void 0?Ae:Math.min(N.end,ne);!P.extend&&Ae>Fe&&(p=Fe,Fe=Ae,Ae=p);var z=_u(y,Ae),L=_u(y,Fe);if(z&&L&&(P.rangeCount!==1||P.anchorNode!==z.node||P.anchorOffset!==z.offset||P.focusNode!==L.node||P.focusOffset!==L.offset)){var X=bA.createRange();X.setStart(z.node,z.offset),P.removeAllRanges(),Ae>Fe?(P.addRange(X),P.extend(L.node,L.offset)):(X.setEnd(L.node,L.offset),P.addRange(X))}}}}for(bA=[],P=y;P=P.parentNode;)P.nodeType===1&&bA.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<bA.length;y++){var mA=bA[y];mA.element.scrollLeft=mA.left,mA.element.scrollTop=mA.top}}$o=!!_c,Gc=_c=null}finally{ve=l,nA.p=a,R.T=t}}A.current=e,lt=2}}function rg(){if(lt===2){lt=0;var A=_n,e=ar,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=R.T,R.T=null;var a=nA.p;nA.p=2;var l=ve;ve|=4;try{Th(A,e.alternate,e)}finally{ve=l,nA.p=a,R.T=t}}lt=3}}function ig(){if(lt===4||lt===3){lt=0,WA();var A=_n,e=ar,t=rr,a=Xh;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?lt=5:(lt=0,ar=_n=null,og(A,A.pendingLanes));var l=A.pendingLanes;if(l===0&&(zn=null),S(t),e=e.stateNode,ue&&typeof ue.onCommitFiberRoot=="function")try{ue.onCommitFiberRoot(xe,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=R.T,l=nA.p,nA.p=2,R.T=null;try{for(var c=A.onRecoverableError,p=0;p<a.length;p++){var y=a[p];c(y.value,{componentStack:y.stack})}}finally{R.T=e,nA.p=l}}(rr&3)!==0&&Ko(),en(A),l=A.pendingLanes,(t&4194090)!==0&&(l&42)!==0?A===Sc?si++:(si=0,Sc=A):si=0,li(0)}}function og(A,e){(A.pooledCacheLanes&=e)===0&&(e=A.pooledCache,e!=null&&(A.pooledCache=null,zr(e)))}function Ko(A){return ag(),rg(),ig(),sg()}function sg(){if(lt!==5)return!1;var A=_n,e=Fc;Fc=0;var t=S(rr),a=R.T,l=nA.p;try{nA.p=32>t?32:t,R.T=null,t=Ec,Ec=null;var c=_n,p=rr;if(lt=0,ar=_n=null,rr=0,(ve&6)!==0)throw Error(o(331));var y=ve;if(ve|=4,Vh(c.current),zh(c,c.current,p,t),ve=y,li(0,!1),ue&&typeof ue.onPostCommitFiberRoot=="function")try{ue.onPostCommitFiberRoot(xe,c)}catch{}return!0}finally{nA.p=l,R.T=a,og(A,e)}}function lg(A,e,t){e=Dt(t,e),e=oc(A.stateNode,e,2),A=kn(A,e,2),A!==null&&(he(A,2),en(A))}function He(A,e,t){if(A.tag===3)lg(A,A,t);else for(;e!==null;){if(e.tag===3){lg(e,A,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(zn===null||!zn.has(a))){A=Dt(t,A),t=fh(2),a=kn(e,t,2),a!==null&&(hh(t,a,e,A),he(a,2),en(a));break}}e=e.return}}function kc(A,e,t){var a=A.pingCache;if(a===null){a=A.pingCache=new Hm;var l=new Set;a.set(e,l)}else l=a.get(e),l===void 0&&(l=new Set,a.set(e,l));l.has(t)||(vc=!0,l.add(t),A=Tm.bind(null,A,e,t),e.then(A,A))}function Tm(A,e,t){var a=A.pingCache;a!==null&&a.delete(e),A.pingedLanes|=A.suspendedLanes&t,A.warmLanes&=~t,Ne===A&&(me&t)===t&&(Ge===4||Ge===3&&(me&62914560)===me&&300>PA()-Uc?(ve&2)===0&&ir(A,0):Cc|=t,nr===me&&(nr=0)),en(A)}function cg(A,e){e===0&&(e=te()),A=za(A,e),A!==null&&(he(A,e),en(A))}function Im(A){var e=A.memoizedState,t=0;e!==null&&(t=e.retryLane),cg(A,t)}function Lm(A,e){var t=0;switch(A.tag){case 13:var a=A.stateNode,l=A.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=A.stateNode;break;case 22:a=A.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(e),cg(A,t)}function Om(A,e){return O(A,e)}var Ro=null,sr=null,Mc=!1,zo=!1,Dc=!1,Ca=0;function en(A){A!==sr&&A.next===null&&(sr===null?Ro=sr=A:sr=sr.next=A),zo=!0,Mc||(Mc=!0,Rm())}function li(A,e){if(!Dc&&zo){Dc=!0;do for(var t=!1,a=Ro;a!==null;){if(A!==0){var l=a.pendingLanes;if(l===0)var c=0;else{var p=a.suspendedLanes,y=a.pingedLanes;c=(1<<31-F(42|A)+1)-1,c&=l&~(p&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(t=!0,hg(a,c))}else c=me,c=BA(a,a===Ne?c:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(c&3)===0||NA(a,c)||(t=!0,hg(a,c));a=a.next}while(t);Dc=!1}}function Km(){dg()}function dg(){zo=Mc=!1;var A=0;Ca!==0&&(Zm()&&(A=Ca),Ca=0);for(var e=PA(),t=null,a=Ro;a!==null;){var l=a.next,c=ug(a,e);c===0?(a.next=null,t===null?Ro=l:t.next=l,l===null&&(sr=t)):(t=a,(A!==0||(c&3)!==0)&&(zo=!0)),a=l}li(A)}function ug(A,e){for(var t=A.suspendedLanes,a=A.pingedLanes,l=A.expirationTimes,c=A.pendingLanes&-62914561;0<c;){var p=31-F(c),y=1<<p,N=l[p];N===-1?((y&t)===0||(y&a)!==0)&&(l[p]=JA(y,e)):N<=e&&(A.expiredLanes|=y),c&=~y}if(e=Ne,t=me,t=BA(A,A===e?t:0,A.cancelPendingCommit!==null||A.timeoutHandle!==-1),a=A.callbackNode,t===0||A===e&&(Ce===2||Ce===9)||A.cancelPendingCommit!==null)return a!==null&&a!==null&&wA(a),A.callbackNode=null,A.callbackPriority=0;if((t&3)===0||NA(A,t)){if(e=t&-t,e===A.callbackPriority)return e;switch(a!==null&&wA(a),S(t)){case 2:case 8:t=ze;break;case 32:t=Se;break;case 268435456:t=Le;break;default:t=Se}return a=fg.bind(null,A),t=O(t,a),A.callbackPriority=e,A.callbackNode=t,e}return a!==null&&a!==null&&wA(a),A.callbackPriority=2,A.callbackNode=null,2}function fg(A,e){if(lt!==0&&lt!==5)return A.callbackNode=null,A.callbackPriority=0,null;var t=A.callbackNode;if(Ko()&&A.callbackNode!==t)return null;var a=me;return a=BA(A,A===Ne?a:0,A.cancelPendingCommit!==null||A.timeoutHandle!==-1),a===0?null:(Zh(A,a,e),ug(A,PA()),A.callbackNode!=null&&A.callbackNode===t?fg.bind(null,A):null)}function hg(A,e){if(Ko())return null;Zh(A,e,!0)}function Rm(){Wm(function(){(ve&6)!==0?O(de,Km):dg()})}function Tc(){return Ca===0&&(Ca=OA()),Ca}function gg(A){return A==null||typeof A=="symbol"||typeof A=="boolean"?null:typeof A=="function"?A:$i(""+A)}function pg(A,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,A.id&&t.setAttribute("form",A.id),e.parentNode.insertBefore(t,e),A=new FormData(A),t.parentNode.removeChild(t),A}function zm(A,e,t,a,l){if(e==="submit"&&t&&t.stateNode===l){var c=gg((l[H]||null).action),p=a.submitter;p&&(e=(e=p[H]||null)?gg(e.formAction):p.getAttribute("formAction"),e!==null&&(c=e,p=null));var y=new to("action","action",null,a,l);A.push({event:y,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ca!==0){var N=p?pg(l,p):new FormData(l);tc(t,{pending:!0,data:N,method:l.method,action:c},null,N)}}else typeof c=="function"&&(y.preventDefault(),N=p?pg(l,p):new FormData(l),tc(t,{pending:!0,data:N,method:l.method,action:c},c,N))},currentTarget:l}]})}}for(var Ic=0;Ic<wl.length;Ic++){var Lc=wl[Ic],_m=Lc.toLowerCase(),Gm=Lc[0].toUpperCase()+Lc.slice(1);Yt(_m,"on"+Gm)}Yt(Ju,"onAnimationEnd"),Yt(Zu,"onAnimationIteration"),Yt(qu,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(om,"onTransitionRun"),Yt(sm,"onTransitionStart"),Yt(lm,"onTransitionCancel"),Yt(Wu,"onTransitionEnd"),Na("onMouseEnter",["mouseout","mouseover"]),Na("onMouseLeave",["mouseout","mouseover"]),Na("onPointerEnter",["pointerout","pointerover"]),Na("onPointerLeave",["pointerout","pointerover"]),sa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),sa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),sa("onBeforeInput",["compositionend","keypress","textInput","paste"]),sa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),sa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),sa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ci));function xg(A,e){e=(e&4)!==0;for(var t=0;t<A.length;t++){var a=A[t],l=a.event;a=a.listeners;A:{var c=void 0;if(e)for(var p=a.length-1;0<=p;p--){var y=a[p],N=y.instance,Z=y.currentTarget;if(y=y.listener,N!==c&&l.isPropagationStopped())break A;c=y,l.currentTarget=Z;try{c(l)}catch(fA){So(fA)}l.currentTarget=null,c=N}else for(p=0;p<a.length;p++){if(y=a[p],N=y.instance,Z=y.currentTarget,y=y.listener,N!==c&&l.isPropagationStopped())break A;c=y,l.currentTarget=Z;try{c(l)}catch(fA){So(fA)}l.currentTarget=null,c=N}}}}function ce(A,e){var t=e[K];t===void 0&&(t=e[K]=new Set);var a=A+"__bubble";t.has(a)||(mg(e,A,2,!1),t.add(a))}function Oc(A,e,t){var a=0;e&&(a|=4),mg(t,A,a,e)}var _o="_reactListening"+Math.random().toString(36).slice(2);function Kc(A){if(!A[_o]){A[_o]=!0,oa.forEach(function(t){t!=="selectionchange"&&(Vm.has(t)||Oc(t,!1,A),Oc(t,!0,A))});var e=A.nodeType===9?A:A.ownerDocument;e===null||e[_o]||(e[_o]=!0,Oc("selectionchange",!1,e))}}function mg(A,e,t,a){switch(zg(e)){case 2:var l=mB;break;case 8:l=BB;break;default:l=Ad}t=l.bind(null,e,t,A),l=void 0,!sl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),a?l!==void 0?A.addEventListener(e,t,{capture:!0,passive:l}):A.addEventListener(e,t,!0):l!==void 0?A.addEventListener(e,t,{passive:l}):A.addEventListener(e,t,!1)}function Rc(A,e,t,a,l){var c=a;if((e&1)===0&&(e&2)===0&&a!==null)A:for(;;){if(a===null)return;var p=a.tag;if(p===3||p===4){var y=a.stateNode.containerInfo;if(y===l)break;if(p===4)for(p=a.return;p!==null;){var N=p.tag;if((N===3||N===4)&&p.stateNode.containerInfo===l)return;p=p.return}for(;y!==null;){if(p=ZA(y),p===null)return;if(N=p.tag,N===5||N===6||N===26||N===27){a=c=p;continue A}y=y.parentNode}}a=a.return}Cu(function(){var Z=c,fA=il(t),bA=[];A:{var $=$u.get(A);if($!==void 0){var P=to,ne=A;switch(A){case"keypress":if(Ao(t)===0)break A;case"keydown":case"keyup":P=Ox;break;case"focusin":ne="focus",P=ul;break;case"focusout":ne="blur",P=ul;break;case"beforeblur":case"afterblur":P=ul;break;case"click":if(t.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Fu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=Fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=zx;break;case Ju:case Zu:case qu:P=jx;break;case Wu:P=Gx;break;case"scroll":case"scrollend":P=Qx;break;case"wheel":P=Yx;break;case"copy":case"cut":case"paste":P=Nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Su;break;case"toggle":case"beforetoggle":P=Jx}var Ae=(e&4)!==0,Fe=!Ae&&(A==="scroll"||A==="scrollend"),z=Ae?$!==null?$+"Capture":null:$;Ae=[];for(var L=Z,X;L!==null;){var mA=L;if(X=mA.stateNode,mA=mA.tag,mA!==5&&mA!==26&&mA!==27||X===null||z===null||(mA=Sr(L,z),mA!=null&&Ae.push(di(L,mA,X))),Fe)break;L=L.return}0<Ae.length&&($=new P($,ne,null,t,fA),bA.push({event:$,listeners:Ae}))}}if((e&7)===0){A:{if($=A==="mouseover"||A==="pointerover",P=A==="mouseout"||A==="pointerout",$&&t!==rl&&(ne=t.relatedTarget||t.fromElement)&&(ZA(ne)||ne[Y]))break A;if((P||$)&&($=fA.window===fA?fA:($=fA.ownerDocument)?$.defaultView||$.parentWindow:window,P?(ne=t.relatedTarget||t.toElement,P=Z,ne=ne?ZA(ne):null,ne!==null&&(Fe=u(ne),Ae=ne.tag,ne!==Fe||Ae!==5&&Ae!==27&&Ae!==6)&&(ne=null)):(P=null,ne=Z),P!==ne)){if(Ae=Fu,mA="onMouseLeave",z="onMouseEnter",L="mouse",(A==="pointerout"||A==="pointerover")&&(Ae=Su,mA="onPointerLeave",z="onPointerEnter",L="pointer"),Fe=P==null?$:we(P),X=ne==null?$:we(ne),$=new Ae(mA,L+"leave",P,t,fA),$.target=Fe,$.relatedTarget=X,mA=null,ZA(fA)===Z&&(Ae=new Ae(z,L+"enter",ne,t,fA),Ae.target=X,Ae.relatedTarget=Fe,mA=Ae),Fe=mA,P&&ne)e:{for(Ae=P,z=ne,L=0,X=Ae;X;X=lr(X))L++;for(X=0,mA=z;mA;mA=lr(mA))X++;for(;0<L-X;)Ae=lr(Ae),L--;for(;0<X-L;)z=lr(z),X--;for(;L--;){if(Ae===z||z!==null&&Ae===z.alternate)break e;Ae=lr(Ae),z=lr(z)}Ae=null}else Ae=null;P!==null&&Bg(bA,$,P,Ae,!1),ne!==null&&Fe!==null&&Bg(bA,Fe,ne,Ae,!0)}}A:{if($=Z?we(Z):window,P=$.nodeName&&$.nodeName.toLowerCase(),P==="select"||P==="input"&&$.type==="file")var YA=Iu;else if(Du($))if(Lu)YA=am;else{YA=tm;var se=em}else P=$.nodeName,!P||P.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Z&&al(Z.elementType)&&(YA=Iu):YA=nm;if(YA&&(YA=YA(A,Z))){Tu(bA,YA,t,fA);break A}se&&se(A,$,Z),A==="focusout"&&Z&&$.type==="number"&&Z.memoizedProps.value!=null&&nl($,"number",$.value)}switch(se=Z?we(Z):window,A){case"focusin":(Du(se)||se.contentEditable==="true")&&(Oa=se,ml=Z,Ir=null);break;case"focusout":Ir=ml=Oa=null;break;case"mousedown":Bl=!0;break;case"contextmenu":case"mouseup":case"dragend":Bl=!1,Yu(bA,t,fA);break;case"selectionchange":if(im)break;case"keydown":case"keyup":Yu(bA,t,fA)}var XA;if(hl)A:{switch(A){case"compositionstart":var ee="onCompositionStart";break A;case"compositionend":ee="onCompositionEnd";break A;case"compositionupdate":ee="onCompositionUpdate";break A}ee=void 0}else La?ku(A,t)&&(ee="onCompositionEnd"):A==="keydown"&&t.keyCode===229&&(ee="onCompositionStart");ee&&(ju&&t.locale!=="ko"&&(La||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&La&&(XA=Qu()):(Sn=fA,ll="value"in Sn?Sn.value:Sn.textContent,La=!0)),se=Go(Z,ee),0<se.length&&(ee=new Eu(ee,A,null,t,fA),bA.push({event:ee,listeners:se}),XA?ee.data=XA:(XA=Mu(t),XA!==null&&(ee.data=XA)))),(XA=qx?Wx(A,t):$x(A,t))&&(ee=Go(Z,"onBeforeInput"),0<ee.length&&(se=new Eu("onBeforeInput","beforeinput",null,t,fA),bA.push({event:se,listeners:ee}),se.data=XA)),zm(bA,A,Z,t,fA)}xg(bA,e)})}function di(A,e,t){return{instance:A,listener:e,currentTarget:t}}function Go(A,e){for(var t=e+"Capture",a=[];A!==null;){var l=A,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=Sr(A,t),l!=null&&a.unshift(di(A,l,c)),l=Sr(A,e),l!=null&&a.push(di(A,l,c))),A.tag===3)return a;A=A.return}return[]}function lr(A){if(A===null)return null;do A=A.return;while(A&&A.tag!==5&&A.tag!==27);return A||null}function Bg(A,e,t,a,l){for(var c=e._reactName,p=[];t!==null&&t!==a;){var y=t,N=y.alternate,Z=y.stateNode;if(y=y.tag,N!==null&&N===a)break;y!==5&&y!==26&&y!==27||Z===null||(N=Z,l?(Z=Sr(t,c),Z!=null&&p.unshift(di(t,Z,N))):l||(Z=Sr(t,c),Z!=null&&p.push(di(t,Z,N)))),t=t.return}p.length!==0&&A.push({event:e,listeners:p})}var Ym=/\r\n?/g,Xm=/\u0000|\uFFFD/g;function bg(A){return(typeof A=="string"?A:""+A).replace(Ym,`
`).replace(Xm,"")}function wg(A,e){return e=bg(e),bg(A)===e}function Vo(){}function Ue(A,e,t,a,l,c){switch(t){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Da(A,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Da(A,""+a);break;case"className":Zi(A,"class",a);break;case"tabIndex":Zi(A,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Zi(A,t,a);break;case"style":yu(A,a,c);break;case"data":if(e!=="object"){Zi(A,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||t!=="href")){A.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){A.removeAttribute(t);break}a=$i(""+a),A.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){A.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(t==="formAction"?(e!=="input"&&Ue(A,e,"name",l.name,l,null),Ue(A,e,"formEncType",l.formEncType,l,null),Ue(A,e,"formMethod",l.formMethod,l,null),Ue(A,e,"formTarget",l.formTarget,l,null)):(Ue(A,e,"encType",l.encType,l,null),Ue(A,e,"method",l.method,l,null),Ue(A,e,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){A.removeAttribute(t);break}a=$i(""+a),A.setAttribute(t,a);break;case"onClick":a!=null&&(A.onclick=Vo);break;case"onScroll":a!=null&&ce("scroll",A);break;case"onScrollEnd":a!=null&&ce("scrollend",A);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(o(60));A.innerHTML=t}}break;case"multiple":A.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":A.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){A.removeAttribute("xlink:href");break}t=$i(""+a),A.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?A.setAttribute(t,""+a):A.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?A.setAttribute(t,""):A.removeAttribute(t);break;case"capture":case"download":a===!0?A.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?A.setAttribute(t,a):A.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?A.setAttribute(t,a):A.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?A.removeAttribute(t):A.setAttribute(t,a);break;case"popover":ce("beforetoggle",A),ce("toggle",A),Ji(A,"popover",a);break;case"xlinkActuate":on(A,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":on(A,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":on(A,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":on(A,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":on(A,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":on(A,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":on(A,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":on(A,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":on(A,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ji(A,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=vx.get(t)||t,Ji(A,t,a))}}function zc(A,e,t,a,l,c){switch(t){case"style":yu(A,a,c);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(o(60));A.innerHTML=t}}break;case"children":typeof a=="string"?Da(A,a):(typeof a=="number"||typeof a=="bigint")&&Da(A,""+a);break;case"onScroll":a!=null&&ce("scroll",A);break;case"onScrollEnd":a!=null&&ce("scrollend",A);break;case"onClick":a!=null&&(A.onclick=Vo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ct.hasOwnProperty(t))A:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),e=t.slice(2,l?t.length-7:void 0),c=A[H]||null,c=c!=null?c[t]:null,typeof c=="function"&&A.removeEventListener(e,c,l),typeof a=="function")){typeof c!="function"&&c!==null&&(t in A?A[t]=null:A.hasAttribute(t)&&A.removeAttribute(t)),A.addEventListener(e,a,l);break A}t in A?A[t]=a:a===!0?A.setAttribute(t,""):Ji(A,t,a)}}}function ct(A,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ce("error",A),ce("load",A);var a=!1,l=!1,c;for(c in t)if(t.hasOwnProperty(c)){var p=t[c];if(p!=null)switch(c){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Ue(A,e,c,p,t,null)}}l&&Ue(A,e,"srcSet",t.srcSet,t,null),a&&Ue(A,e,"src",t.src,t,null);return;case"input":ce("invalid",A);var y=c=p=l=null,N=null,Z=null;for(a in t)if(t.hasOwnProperty(a)){var fA=t[a];if(fA!=null)switch(a){case"name":l=fA;break;case"type":p=fA;break;case"checked":N=fA;break;case"defaultChecked":Z=fA;break;case"value":c=fA;break;case"defaultValue":y=fA;break;case"children":case"dangerouslySetInnerHTML":if(fA!=null)throw Error(o(137,e));break;default:Ue(A,e,a,fA,t,null)}}mu(A,c,y,N,Z,p,l,!1),qi(A);return;case"select":ce("invalid",A),a=p=c=null;for(l in t)if(t.hasOwnProperty(l)&&(y=t[l],y!=null))switch(l){case"value":c=y;break;case"defaultValue":p=y;break;case"multiple":a=y;default:Ue(A,e,l,y,t,null)}e=c,t=p,A.multiple=!!a,e!=null?Ma(A,!!a,e,!1):t!=null&&Ma(A,!!a,t,!0);return;case"textarea":ce("invalid",A),c=l=a=null;for(p in t)if(t.hasOwnProperty(p)&&(y=t[p],y!=null))switch(p){case"value":a=y;break;case"defaultValue":l=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(91));break;default:Ue(A,e,p,y,t,null)}bu(A,a,l,c),qi(A);return;case"option":for(N in t)if(t.hasOwnProperty(N)&&(a=t[N],a!=null))switch(N){case"selected":A.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ue(A,e,N,a,t,null)}return;case"dialog":ce("beforetoggle",A),ce("toggle",A),ce("cancel",A),ce("close",A);break;case"iframe":case"object":ce("load",A);break;case"video":case"audio":for(a=0;a<ci.length;a++)ce(ci[a],A);break;case"image":ce("error",A),ce("load",A);break;case"details":ce("toggle",A);break;case"embed":case"source":case"link":ce("error",A),ce("load",A);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in t)if(t.hasOwnProperty(Z)&&(a=t[Z],a!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Ue(A,e,Z,a,t,null)}return;default:if(al(e)){for(fA in t)t.hasOwnProperty(fA)&&(a=t[fA],a!==void 0&&zc(A,e,fA,a,t,void 0));return}}for(y in t)t.hasOwnProperty(y)&&(a=t[y],a!=null&&Ue(A,e,y,a,t,null))}function Jm(A,e,t,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,p=null,y=null,N=null,Z=null,fA=null;for(P in t){var bA=t[P];if(t.hasOwnProperty(P)&&bA!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":N=bA;default:a.hasOwnProperty(P)||Ue(A,e,P,null,a,bA)}}for(var $ in a){var P=a[$];if(bA=t[$],a.hasOwnProperty($)&&(P!=null||bA!=null))switch($){case"type":c=P;break;case"name":l=P;break;case"checked":Z=P;break;case"defaultChecked":fA=P;break;case"value":p=P;break;case"defaultValue":y=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(o(137,e));break;default:P!==bA&&Ue(A,e,$,P,a,bA)}}tl(A,p,y,N,Z,fA,c,l);return;case"select":P=p=y=$=null;for(c in t)if(N=t[c],t.hasOwnProperty(c)&&N!=null)switch(c){case"value":break;case"multiple":P=N;default:a.hasOwnProperty(c)||Ue(A,e,c,null,a,N)}for(l in a)if(c=a[l],N=t[l],a.hasOwnProperty(l)&&(c!=null||N!=null))switch(l){case"value":$=c;break;case"defaultValue":y=c;break;case"multiple":p=c;default:c!==N&&Ue(A,e,l,c,a,N)}e=y,t=p,a=P,$!=null?Ma(A,!!t,$,!1):!!a!=!!t&&(e!=null?Ma(A,!!t,e,!0):Ma(A,!!t,t?[]:"",!1));return;case"textarea":P=$=null;for(y in t)if(l=t[y],t.hasOwnProperty(y)&&l!=null&&!a.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Ue(A,e,y,null,a,l)}for(p in a)if(l=a[p],c=t[p],a.hasOwnProperty(p)&&(l!=null||c!=null))switch(p){case"value":$=l;break;case"defaultValue":P=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==c&&Ue(A,e,p,l,a,c)}Bu(A,$,P);return;case"option":for(var ne in t)if($=t[ne],t.hasOwnProperty(ne)&&$!=null&&!a.hasOwnProperty(ne))switch(ne){case"selected":A.selected=!1;break;default:Ue(A,e,ne,null,a,$)}for(N in a)if($=a[N],P=t[N],a.hasOwnProperty(N)&&$!==P&&($!=null||P!=null))switch(N){case"selected":A.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Ue(A,e,N,$,a,P)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ae in t)$=t[Ae],t.hasOwnProperty(Ae)&&$!=null&&!a.hasOwnProperty(Ae)&&Ue(A,e,Ae,null,a,$);for(Z in a)if($=a[Z],P=t[Z],a.hasOwnProperty(Z)&&$!==P&&($!=null||P!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(o(137,e));break;default:Ue(A,e,Z,$,a,P)}return;default:if(al(e)){for(var Fe in t)$=t[Fe],t.hasOwnProperty(Fe)&&$!==void 0&&!a.hasOwnProperty(Fe)&&zc(A,e,Fe,void 0,a,$);for(fA in a)$=a[fA],P=t[fA],!a.hasOwnProperty(fA)||$===P||$===void 0&&P===void 0||zc(A,e,fA,$,a,P);return}}for(var z in t)$=t[z],t.hasOwnProperty(z)&&$!=null&&!a.hasOwnProperty(z)&&Ue(A,e,z,null,a,$);for(bA in a)$=a[bA],P=t[bA],!a.hasOwnProperty(bA)||$===P||$==null&&P==null||Ue(A,e,bA,$,a,P)}var _c=null,Gc=null;function Yo(A){return A.nodeType===9?A:A.ownerDocument}function yg(A){switch(A){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vg(A,e){if(A===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return A===1&&e==="foreignObject"?0:A}function Vc(A,e){return A==="textarea"||A==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yc=null;function Zm(){var A=window.event;return A&&A.type==="popstate"?A===Yc?!1:(Yc=A,!0):(Yc=null,!1)}var Cg=typeof setTimeout=="function"?setTimeout:void 0,qm=typeof clearTimeout=="function"?clearTimeout:void 0,Qg=typeof Promise=="function"?Promise:void 0,Wm=typeof queueMicrotask=="function"?queueMicrotask:typeof Qg<"u"?function(A){return Qg.resolve(null).then(A).catch($m)}:Cg;function $m(A){setTimeout(function(){throw A})}function Vn(A){return A==="head"}function Ug(A,e){var t=e,a=0,l=0;do{var c=t.nextSibling;if(A.removeChild(t),c&&c.nodeType===8)if(t=c.data,t==="/$"){if(0<a&&8>a){t=a;var p=A.ownerDocument;if(t&1&&ui(p.documentElement),t&2&&ui(p.body),t&4)for(t=p.head,ui(t),p=t.firstChild;p;){var y=p.nextSibling,N=p.nodeName;p[FA]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&p.rel.toLowerCase()==="stylesheet"||t.removeChild(p),p=y}}if(l===0){A.removeChild(c),bi(e);return}l--}else t==="$"||t==="$?"||t==="$!"?l++:a=t.charCodeAt(0)-48;else a=0;t=c}while(t);bi(e)}function Xc(A){var e=A.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Xc(t),RA(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}A.removeChild(t)}}function Pm(A,e,t,a){for(;A.nodeType===1;){var l=t;if(A.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(A.nodeName!=="INPUT"||A.type!=="hidden"))break}else if(a){if(!A[FA])switch(e){case"meta":if(!A.hasAttribute("itemprop"))break;return A;case"link":if(c=A.getAttribute("rel"),c==="stylesheet"&&A.hasAttribute("data-precedence"))break;if(c!==l.rel||A.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||A.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||A.getAttribute("title")!==(l.title==null?null:l.title))break;return A;case"style":if(A.hasAttribute("data-precedence"))break;return A;case"script":if(c=A.getAttribute("src"),(c!==(l.src==null?null:l.src)||A.getAttribute("type")!==(l.type==null?null:l.type)||A.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&A.hasAttribute("async")&&!A.hasAttribute("itemprop"))break;return A;default:return A}}else if(e==="input"&&A.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&A.getAttribute("name")===c)return A}else return A;if(A=Jt(A.nextSibling),A===null)break}return null}function AB(A,e,t){if(e==="")return null;for(;A.nodeType!==3;)if((A.nodeType!==1||A.nodeName!=="INPUT"||A.type!=="hidden")&&!t||(A=Jt(A.nextSibling),A===null))return null;return A}function Jc(A){return A.data==="$!"||A.data==="$?"&&A.ownerDocument.readyState==="complete"}function eB(A,e){var t=A.ownerDocument;if(A.data!=="$?"||t.readyState==="complete")e();else{var a=function(){e(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),A._reactRetry=a}}function Jt(A){for(;A!=null;A=A.nextSibling){var e=A.nodeType;if(e===1||e===3)break;if(e===8){if(e=A.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return A}var Zc=null;function Fg(A){A=A.previousSibling;for(var e=0;A;){if(A.nodeType===8){var t=A.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return A;e--}else t==="/$"&&e++}A=A.previousSibling}return null}function Eg(A,e,t){switch(e=Yo(t),A){case"html":if(A=e.documentElement,!A)throw Error(o(452));return A;case"head":if(A=e.head,!A)throw Error(o(453));return A;case"body":if(A=e.body,!A)throw Error(o(454));return A;default:throw Error(o(451))}}function ui(A){for(var e=A.attributes;e.length;)A.removeAttributeNode(e[0]);RA(A)}var Rt=new Map,Sg=new Set;function Xo(A){return typeof A.getRootNode=="function"?A.getRootNode():A.nodeType===9?A:A.ownerDocument}var wn=nA.d;nA.d={f:tB,r:nB,D:aB,C:rB,L:iB,m:oB,X:lB,S:sB,M:cB};function tB(){var A=wn.f(),e=Lo();return A||e}function nB(A){var e=ge(A);e!==null&&e.tag===5&&e.type==="form"?Zf(e):wn.r(A)}var cr=typeof document>"u"?null:document;function jg(A,e,t){var a=cr;if(a&&typeof e=="string"&&e){var l=Mt(e);l='link[rel="'+A+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Sg.has(l)||(Sg.add(l),A={rel:A,crossOrigin:t,href:e},a.querySelector(l)===null&&(e=a.createElement("link"),ct(e,"link",A),De(e),a.head.appendChild(e)))}}function aB(A){wn.D(A),jg("dns-prefetch",A,null)}function rB(A,e){wn.C(A,e),jg("preconnect",A,e)}function iB(A,e,t){wn.L(A,e,t);var a=cr;if(a&&A&&e){var l='link[rel="preload"][as="'+Mt(e)+'"]';e==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Mt(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Mt(t.imageSizes)+'"]')):l+='[href="'+Mt(A)+'"]';var c=l;switch(e){case"style":c=dr(A);break;case"script":c=ur(A)}Rt.has(c)||(A=v({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:A,as:e},t),Rt.set(c,A),a.querySelector(l)!==null||e==="style"&&a.querySelector(fi(c))||e==="script"&&a.querySelector(hi(c))||(e=a.createElement("link"),ct(e,"link",A),De(e),a.head.appendChild(e)))}}function oB(A,e){wn.m(A,e);var t=cr;if(t&&A){var a=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+Mt(a)+'"][href="'+Mt(A)+'"]',c=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ur(A)}if(!Rt.has(c)&&(A=v({rel:"modulepreload",href:A},e),Rt.set(c,A),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(hi(c)))return}a=t.createElement("link"),ct(a,"link",A),De(a),t.head.appendChild(a)}}}function sB(A,e,t){wn.S(A,e,t);var a=cr;if(a&&A){var l=Oe(a).hoistableStyles,c=dr(A);e=e||"default";var p=l.get(c);if(!p){var y={loading:0,preload:null};if(p=a.querySelector(fi(c)))y.loading=5;else{A=v({rel:"stylesheet",href:A,"data-precedence":e},t),(t=Rt.get(c))&&qc(A,t);var N=p=a.createElement("link");De(N),ct(N,"link",A),N._p=new Promise(function(Z,fA){N.onload=Z,N.onerror=fA}),N.addEventListener("load",function(){y.loading|=1}),N.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Jo(p,e,a)}p={type:"stylesheet",instance:p,count:1,state:y},l.set(c,p)}}}function lB(A,e){wn.X(A,e);var t=cr;if(t&&A){var a=Oe(t).hoistableScripts,l=ur(A),c=a.get(l);c||(c=t.querySelector(hi(l)),c||(A=v({src:A,async:!0},e),(e=Rt.get(l))&&Wc(A,e),c=t.createElement("script"),De(c),ct(c,"link",A),t.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(l,c))}}function cB(A,e){wn.M(A,e);var t=cr;if(t&&A){var a=Oe(t).hoistableScripts,l=ur(A),c=a.get(l);c||(c=t.querySelector(hi(l)),c||(A=v({src:A,async:!0,type:"module"},e),(e=Rt.get(l))&&Wc(A,e),c=t.createElement("script"),De(c),ct(c,"link",A),t.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},a.set(l,c))}}function Hg(A,e,t,a){var l=(l=D.current)?Xo(l):null;if(!l)throw Error(o(446));switch(A){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=dr(t.href),t=Oe(l).hoistableStyles,a=t.get(e),a||(a={type:"style",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){A=dr(t.href);var c=Oe(l).hoistableStyles,p=c.get(A);if(p||(l=l.ownerDocument||l,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(A,p),(c=l.querySelector(fi(A)))&&!c._p&&(p.instance=c,p.state.loading=5),Rt.has(A)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Rt.set(A,t),c||dB(l,A,t,p.state))),e&&a===null)throw Error(o(528,""));return p}if(e&&a!==null)throw Error(o(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ur(t),t=Oe(l).hoistableScripts,a=t.get(e),a||(a={type:"script",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,A))}}function dr(A){return'href="'+Mt(A)+'"'}function fi(A){return'link[rel="stylesheet"]['+A+"]"}function Ng(A){return v({},A,{"data-precedence":A.precedence,precedence:null})}function dB(A,e,t,a){A.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=A.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),ct(e,"link",t),De(e),A.head.appendChild(e))}function ur(A){return'[src="'+Mt(A)+'"]'}function hi(A){return"script[async]"+A}function kg(A,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var a=A.querySelector('style[data-href~="'+Mt(t.href)+'"]');if(a)return e.instance=a,De(a),a;var l=v({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(A.ownerDocument||A).createElement("style"),De(a),ct(a,"style",l),Jo(a,t.precedence,A),e.instance=a;case"stylesheet":l=dr(t.href);var c=A.querySelector(fi(l));if(c)return e.state.loading|=4,e.instance=c,De(c),c;a=Ng(t),(l=Rt.get(l))&&qc(a,l),c=(A.ownerDocument||A).createElement("link"),De(c);var p=c;return p._p=new Promise(function(y,N){p.onload=y,p.onerror=N}),ct(c,"link",a),e.state.loading|=4,Jo(c,t.precedence,A),e.instance=c;case"script":return c=ur(t.src),(l=A.querySelector(hi(c)))?(e.instance=l,De(l),l):(a=t,(l=Rt.get(c))&&(a=v({},t),Wc(a,l)),A=A.ownerDocument||A,l=A.createElement("script"),De(l),ct(l,"link",a),A.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Jo(a,t.precedence,A));return e.instance}function Jo(A,e,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,c=l,p=0;p<a.length;p++){var y=a[p];if(y.dataset.precedence===e)c=y;else if(c!==l)break}c?c.parentNode.insertBefore(A,c.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(A,e.firstChild))}function qc(A,e){A.crossOrigin==null&&(A.crossOrigin=e.crossOrigin),A.referrerPolicy==null&&(A.referrerPolicy=e.referrerPolicy),A.title==null&&(A.title=e.title)}function Wc(A,e){A.crossOrigin==null&&(A.crossOrigin=e.crossOrigin),A.referrerPolicy==null&&(A.referrerPolicy=e.referrerPolicy),A.integrity==null&&(A.integrity=e.integrity)}var Zo=null;function Mg(A,e,t){if(Zo===null){var a=new Map,l=Zo=new Map;l.set(t,a)}else l=Zo,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(A))return a;for(a.set(A,null),t=t.getElementsByTagName(A),l=0;l<t.length;l++){var c=t[l];if(!(c[FA]||c[U]||A==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(e)||"";p=A+p;var y=a.get(p);y?y.push(c):a.set(p,[c])}}return a}function Dg(A,e,t){A=A.ownerDocument||A,A.head.insertBefore(t,e==="title"?A.querySelector("head > title"):null)}function uB(A,e,t){if(t===1||e.itemProp!=null)return!1;switch(A){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return A=e.disabled,typeof e.precedence=="string"&&A==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Tg(A){return!(A.type==="stylesheet"&&(A.state.loading&3)===0)}var gi=null;function fB(){}function hB(A,e,t){if(gi===null)throw Error(o(475));var a=gi;if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=dr(t.href),c=A.querySelector(fi(l));if(c){A=c._p,A!==null&&typeof A=="object"&&typeof A.then=="function"&&(a.count++,a=qo.bind(a),A.then(a,a)),e.state.loading|=4,e.instance=c,De(c);return}c=A.ownerDocument||A,t=Ng(t),(l=Rt.get(l))&&qc(t,l),c=c.createElement("link"),De(c);var p=c;p._p=new Promise(function(y,N){p.onload=y,p.onerror=N}),ct(c,"link",t),e.instance=c}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,A),(A=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=qo.bind(a),A.addEventListener("load",e),A.addEventListener("error",e))}}function gB(){if(gi===null)throw Error(o(475));var A=gi;return A.stylesheets&&A.count===0&&$c(A,A.stylesheets),0<A.count?function(e){var t=setTimeout(function(){if(A.stylesheets&&$c(A,A.stylesheets),A.unsuspend){var a=A.unsuspend;A.unsuspend=null,a()}},6e4);return A.unsuspend=e,function(){A.unsuspend=null,clearTimeout(t)}}:null}function qo(){if(this.count--,this.count===0){if(this.stylesheets)$c(this,this.stylesheets);else if(this.unsuspend){var A=this.unsuspend;this.unsuspend=null,A()}}}var Wo=null;function $c(A,e){A.stylesheets=null,A.unsuspend!==null&&(A.count++,Wo=new Map,e.forEach(pB,A),Wo=null,qo.call(A))}function pB(A,e){if(!(e.state.loading&4)){var t=Wo.get(A);if(t)var a=t.get(null);else{t=new Map,Wo.set(A,t);for(var l=A.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var p=l[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(t.set(p.dataset.precedence,p),a=p)}a&&t.set(null,a)}l=e.instance,p=l.getAttribute("data-precedence"),c=t.get(p)||a,c===a&&t.set(null,l),t.set(p,l),this.count++,a=qo.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),c?c.parentNode.insertBefore(l,c.nextSibling):(A=A.nodeType===9?A.head:A,A.insertBefore(l,A.firstChild)),e.state.loading|=4}}var pi={$$typeof:DA,Provider:null,Consumer:null,_currentValue:vA,_currentValue2:vA,_threadCount:0};function xB(A,e,t,a,l,c,p,y){this.tag=1,this.containerInfo=A,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$A(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$A(0),this.hiddenUpdates=$A(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function Ig(A,e,t,a,l,c,p,y,N,Z,fA,bA){return A=new xB(A,e,t,p,y,N,Z,bA),e=1,c===!0&&(e|=24),c=Ut(3,null,null,e),A.current=c,c.stateNode=A,e=kl(),e.refCount++,A.pooledCache=e,e.refCount++,c.memoizedState={element:a,isDehydrated:t,cache:e},Il(c),A}function Lg(A){return A?(A=_a,A):_a}function Og(A,e,t,a,l,c){l=Lg(l),a.context===null?a.context=l:a.pendingContext=l,a=Nn(e),a.payload={element:t},c=c===void 0?null:c,c!==null&&(a.callback=c),t=kn(A,a,e),t!==null&&(Ht(t,A,e),Yr(t,A,e))}function Kg(A,e){if(A=A.memoizedState,A!==null&&A.dehydrated!==null){var t=A.retryLane;A.retryLane=t!==0&&t<e?t:e}}function Pc(A,e){Kg(A,e),(A=A.alternate)&&Kg(A,e)}function Rg(A){if(A.tag===13){var e=za(A,67108864);e!==null&&Ht(e,A,67108864),Pc(A,67108864)}}var $o=!0;function mB(A,e,t,a){var l=R.T;R.T=null;var c=nA.p;try{nA.p=2,Ad(A,e,t,a)}finally{nA.p=c,R.T=l}}function BB(A,e,t,a){var l=R.T;R.T=null;var c=nA.p;try{nA.p=8,Ad(A,e,t,a)}finally{nA.p=c,R.T=l}}function Ad(A,e,t,a){if($o){var l=ed(a);if(l===null)Rc(A,e,a,Po,t),_g(A,a);else if(wB(l,A,e,t,a))a.stopPropagation();else if(_g(A,a),e&4&&-1<bB.indexOf(A)){for(;l!==null;){var c=ge(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=xA(c.pendingLanes);if(p!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;p;){var N=1<<31-F(p);y.entanglements[1]|=N,p&=~N}en(c),(ve&6)===0&&(To=PA()+500,li(0))}}break;case 13:y=za(c,2),y!==null&&Ht(y,c,2),Lo(),Pc(c,2)}if(c=ed(a),c===null&&Rc(A,e,a,Po,t),c===l)break;l=c}l!==null&&a.stopPropagation()}else Rc(A,e,a,null,t)}}function ed(A){return A=il(A),td(A)}var Po=null;function td(A){if(Po=null,A=ZA(A),A!==null){var e=u(A);if(e===null)A=null;else{var t=e.tag;if(t===13){if(A=h(e),A!==null)return A;A=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;A=null}else e!==A&&(A=null)}}return Po=A,null}function zg(A){switch(A){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ae()){case de:return 2;case ze:return 8;case Se:case Ve:return 32;case Le:return 268435456;default:return 32}default:return 32}}var nd=!1,Yn=null,Xn=null,Jn=null,xi=new Map,mi=new Map,Zn=[],bB="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _g(A,e){switch(A){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":xi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(e.pointerId)}}function Bi(A,e,t,a,l,c){return A===null||A.nativeEvent!==c?(A={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:c,targetContainers:[l]},e!==null&&(e=ge(e),e!==null&&Rg(e)),A):(A.eventSystemFlags|=a,e=A.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),A)}function wB(A,e,t,a,l){switch(e){case"focusin":return Yn=Bi(Yn,A,e,t,a,l),!0;case"dragenter":return Xn=Bi(Xn,A,e,t,a,l),!0;case"mouseover":return Jn=Bi(Jn,A,e,t,a,l),!0;case"pointerover":var c=l.pointerId;return xi.set(c,Bi(xi.get(c)||null,A,e,t,a,l)),!0;case"gotpointercapture":return c=l.pointerId,mi.set(c,Bi(mi.get(c)||null,A,e,t,a,l)),!0}return!1}function Gg(A){var e=ZA(A.target);if(e!==null){var t=u(e);if(t!==null){if(e=t.tag,e===13){if(e=h(t),e!==null){A.blockedOn=e,b(A.priority,function(){if(t.tag===13){var a=jt();a=g(a);var l=za(t,a);l!==null&&Ht(l,t,a),Pc(t,a)}});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){A.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}A.blockedOn=null}function As(A){if(A.blockedOn!==null)return!1;for(var e=A.targetContainers;0<e.length;){var t=ed(A.nativeEvent);if(t===null){t=A.nativeEvent;var a=new t.constructor(t.type,t);rl=a,t.target.dispatchEvent(a),rl=null}else return e=ge(t),e!==null&&Rg(e),A.blockedOn=t,!1;e.shift()}return!0}function Vg(A,e,t){As(A)&&t.delete(e)}function yB(){nd=!1,Yn!==null&&As(Yn)&&(Yn=null),Xn!==null&&As(Xn)&&(Xn=null),Jn!==null&&As(Jn)&&(Jn=null),xi.forEach(Vg),mi.forEach(Vg)}function es(A,e){A.blockedOn===e&&(A.blockedOn=null,nd||(nd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,yB)))}var ts=null;function Yg(A){ts!==A&&(ts=A,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ts===A&&(ts=null);for(var e=0;e<A.length;e+=3){var t=A[e],a=A[e+1],l=A[e+2];if(typeof a!="function"){if(td(a||t)===null)continue;break}var c=ge(t);c!==null&&(A.splice(e,3),e-=3,tc(c,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function bi(A){function e(N){return es(N,A)}Yn!==null&&es(Yn,A),Xn!==null&&es(Xn,A),Jn!==null&&es(Jn,A),xi.forEach(e),mi.forEach(e);for(var t=0;t<Zn.length;t++){var a=Zn[t];a.blockedOn===A&&(a.blockedOn=null)}for(;0<Zn.length&&(t=Zn[0],t.blockedOn===null);)Gg(t),t.blockedOn===null&&Zn.shift();if(t=(A.ownerDocument||A).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],c=t[a+1],p=l[H]||null;if(typeof c=="function")p||Yg(t);else if(p){var y=null;if(c&&c.hasAttribute("formAction")){if(l=c,p=c[H]||null)y=p.formAction;else if(td(l)!==null)continue}else y=p.action;typeof y=="function"?t[a+1]=y:(t.splice(a,3),a-=3),Yg(t)}}}function ad(A){this._internalRoot=A}ns.prototype.render=ad.prototype.render=function(A){var e=this._internalRoot;if(e===null)throw Error(o(409));var t=e.current,a=jt();Og(t,a,A,e,null,null)},ns.prototype.unmount=ad.prototype.unmount=function(){var A=this._internalRoot;if(A!==null){this._internalRoot=null;var e=A.containerInfo;Og(A.current,2,null,A,null,null),Lo(),e[Y]=null}};function ns(A){this._internalRoot=A}ns.prototype.unstable_scheduleHydration=function(A){if(A){var e=f();A={blockedOn:null,target:A,priority:e};for(var t=0;t<Zn.length&&e!==0&&e<Zn[t].priority;t++);Zn.splice(t,0,A),t===0&&Gg(A)}};var Xg=r.version;if(Xg!=="19.1.0")throw Error(o(527,Xg,"19.1.0"));nA.findDOMNode=function(A){var e=A._reactInternals;if(e===void 0)throw typeof A.render=="function"?Error(o(188)):(A=Object.keys(A).join(","),Error(o(268,A)));return A=m(e),A=A!==null?w(A):null,A=A===null?null:A.stateNode,A};var vB={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var as=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!as.isDisabled&&as.supportsFiber)try{xe=as.inject(vB),ue=as}catch{}}return yi.createRoot=function(A,e){if(!d(A))throw Error(o(299));var t=!1,a="",l=lh,c=ch,p=dh,y=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(p=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(y=e.unstable_transitionCallbacks)),e=Ig(A,1,!1,null,null,t,a,l,c,p,y,null),A[Y]=e.current,Kc(A),new ad(e)},yi.hydrateRoot=function(A,e,t){if(!d(A))throw Error(o(299));var a=!1,l="",c=lh,p=ch,y=dh,N=null,Z=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(p=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(N=t.unstable_transitionCallbacks),t.formState!==void 0&&(Z=t.formState)),e=Ig(A,1,!0,e,t??null,a,l,c,p,y,N,Z),e.context=Lg(null),t=e.current,a=jt(),a=g(a),l=Nn(a),l.callback=null,kn(t,l,a),t=a,e.current.lanes=t,he(e,t),en(e),A[Y]=e.current,Kc(A),new ns(e)},yi.version="19.1.0",yi}var np;function DB(){if(np)return od.exports;np=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),od.exports=MB(),od.exports}var TB=DB();/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IB=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),LB=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,o)=>o?o.toUpperCase():s.toLowerCase()),ap=i=>{const r=LB(i);return r.charAt(0).toUpperCase()+r.slice(1)},r0=(...i)=>i.filter((r,s,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===s).join(" ").trim(),OB=i=>{for(const r in i)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var KB={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RB=k.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:d="",children:u,iconNode:h,...B},m)=>k.createElement("svg",{ref:m,...KB,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:r0("lucide",d),...!u&&!OB(B)&&{"aria-hidden":"true"},...B},[...h.map(([w,v])=>k.createElement(w,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qA=(i,r)=>{const s=k.forwardRef(({className:o,...d},u)=>k.createElement(RB,{ref:u,iconNode:r,className:r0(`lucide-${IB(ap(i))}`,`lucide-${i}`,o),...d}));return s.displayName=ap(i),s};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zB=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],_B=qA("activity",zB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GB=[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]],VB=qA("app-window",GB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YB=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Un=qA("arrow-left",YB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XB=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Fn=qA("arrow-right",XB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JB=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],i0=qA("book-open",JB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZB=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],o0=qA("box",ZB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qB=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],WB=qA("calendar",qB);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $B=[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]],PB=qA("chart-no-axes-gantt",$B);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],eb=qA("chevron-left",Ab);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],nb=qA("chevron-right",tb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],rb=qA("circle",ab);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],ob=qA("cloud",ib);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],ja=qA("copy",sb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],cb=qA("cpu",lb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ub=qA("database",db);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]],hb=qA("diamond",fb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],En=qA("download",gb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],xb=qA("ellipsis",pb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],s0=qA("git-branch",mb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]],Vi=qA("git-merge",Bb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],wb=qA("globe",bb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],vb=qA("grid-3x3",yb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],Qb=qA("hard-drive",Cb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],ra=qA("image",Ub);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],l0=qA("layers",Fb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Sb=qA("maximize-2",Eb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]],Hb=qA("merge",jb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],kb=qA("message-square",Nb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M5 12h14",key:"1ays0h"}]],nu=qA("minus",Mb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Tb=qA("moon",Db);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],Lb=qA("mouse-pointer",Ib);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],c0=qA("move",Ob);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Rb=qA("network",Kb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],d0=qA("palette",zb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],Gb=qA("pen-line",_b);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Yb=qA("pen",Vb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Jb=qA("play",Xb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Re=qA("plus",Zb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Wb=qA("refresh-cw",qb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],u0=qA("rotate-ccw",$b);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]],Aw=qA("router",Pb);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Ha=qA("save",ew);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],nw=qA("server",tw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],rw=qA("shield",aw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],ow=qA("smartphone",iw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],lw=qA("square",sw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],dw=qA("sun",cw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],pe=qA("trash-2",uw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],nn=qA("upload",fw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],gw=qA("user",hw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],au=qA("users",pw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ri=qA("x",xw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Bw=qA("zap",mw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Cr=qA("zoom-in",bw);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Qr=qA("zoom-out",ww),yw=({projects:i,onCreateProject:r,onLoadProject:s,onDeleteProject:o})=>{const[d,u]=k.useState(!1);return n.jsxs("div",{className:"evolution-chart-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:"🌿"}),n.jsx("h2",{children:"Evolution Chart Maker"}),n.jsx("p",{children:"Visualize evolutionary relationships and timelines"}),n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Project"]}),i.length>0&&n.jsxs("div",{className:"project-list",children:[n.jsx("h3",{children:"Your Projects"}),i.map(h=>n.jsxs("div",{className:"project-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"project-card-content",children:[n.jsx("div",{className:"project-card-name",children:h.name}),n.jsxs("div",{className:"project-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.nodes?.length||0," nodes • ",h.connections?.length||0," connections"]})]})]}),n.jsxs("div",{className:"project-card-actions",children:[n.jsx("button",{onClick:B=>{B.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Fn,{size:16})}),n.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this project?")&&o(h.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Project"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Project Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Mammalian Evolution",id:"projectName",autoFocus:!0})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Timeline Start"}),n.jsx("input",{type:"number",defaultValue:"500",id:"timelineStart"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Timeline End"}),n.jsx("input",{type:"number",defaultValue:"0",id:"timelineEnd"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Time Unit"}),n.jsxs("select",{id:"timeUnit",defaultValue:"mya",children:[n.jsx("option",{value:"bya",children:"Billion Years Ago (BYA)"}),n.jsx("option",{value:"mya",children:"Million Years Ago (MYA)"}),n.jsx("option",{value:"kya",children:"Thousand Years Ago (KYA)"}),n.jsx("option",{value:"ya",children:"Years Ago (YA)"})]})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("projectName").value,B=parseFloat(document.getElementById("timelineStart").value),m=parseFloat(document.getElementById("timelineEnd").value),w=document.getElementById("timeUnit").value;h.trim()&&B>m&&(r(h,B,m,w),u(!1))},className:"create-btn",children:"Create Project"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},rs=[{value:"bya",label:"Billion Years Ago (BYA)",multiplier:1e9},{value:"mya",label:"Million Years Ago (MYA)",multiplier:1e6},{value:"kya",label:"Thousand Years Ago (KYA)",multiplier:1e3},{value:"ya",label:"Years Ago (YA)",multiplier:1}],vw=({project:i,nodes:r,connections:s,onUpdateProject:o,onBack:d})=>{const m="#ffffff",w="#ffeb3b",v="#4fc3f7",E=k.useRef(null),M=k.useRef(null);k.useRef(null);const aA=k.useRef(0),_=k.useRef({x:0,y:0}),lA=k.useRef({x:0,y:0}),pA=k.useRef(0),QA=k.useRef(!1),[cA,DA]=k.useState(r||[]),[yA,gA]=k.useState(s||[]),[AA,SA]=k.useState(null),[V,iA]=k.useState(null),[uA,EA]=k.useState(i?.zoom||1),[tA,IA]=k.useState(i?.pan||{x:0,y:0}),[KA,TA]=k.useState(i?.pan||{x:0,y:0}),[R,nA]=k.useState(!1),[vA,LA]=k.useState(null),[Q,G]=k.useState(!1),[sA,oA]=k.useState(null);k.useEffect(()=>{if(i){const x=setTimeout(()=>{o({...i,nodes:cA,connections:yA,zoom:uA,pan:tA})},500);return()=>clearTimeout(x)}},[cA,yA,uA,tA,i,o]),k.useEffect(()=>{let x;const F=()=>{const T=Date.now(),W=Math.min(T-aA.current,100)/1e3;if(aA.current=T,W>0&&!QA.current){const J=(KA.x-tA.x)*.2,hA=(KA.y-tA.y)*.2;Math.abs(J)>.1||Math.abs(hA)>.1?(IA(j=>({x:j.x+J,y:j.y+hA})),x=requestAnimationFrame(F)):IA(KA)}else x=requestAnimationFrame(F)};return x=requestAnimationFrame(F),()=>cancelAnimationFrame(x)},[tA,KA]);const UA=k.useCallback(x=>{if(!i)return 0;const F=HA(x.value,x.unit),T=HA(i.timelineStart,i.timeUnit),W=HA(i.timelineEnd,i.timeUnit),J=T-W,hA=(T-F)/J,j=E.current?.offsetWidth||800;return hA*j},[i]),HA=(x,F)=>{const T=rs.find(W=>W.value===F)||rs[0];return x*T.multiplier},D=(x,F)=>F==="bya"?`${x} BYA`:F==="mya"?`${x} MYA`:F==="kya"?`${x} KYA`:`${x} YA`,CA=k.useCallback(x=>{if(!i)return 0;const F=E.current?.offsetWidth||800,T=HA(i.timelineStart,i.timeUnit),W=HA(i.timelineEnd,i.timeUnit),J=T-W,hA=x/F;return T-hA*J},[i]),jA=k.useCallback(()=>{if(!i)return[];const x=E.current?.offsetWidth||800,F=HA(i.timelineStart,i.timeUnit),T=HA(i.timelineEnd,i.timeUnit),W=F-T,J=W/uA;let hA;J>2e9?hA=1e9:J>1e9?hA=5e8:J>5e8?hA=1e8:J>2e8?hA=5e7:J>1e8?hA=25e6:J>5e7?hA=1e7:J>2e7?hA=5e6:J>1e7?hA=25e5:J>5e6?hA=1e6:J>2e6?hA=5e5:J>1e6?hA=25e4:J>5e5?hA=1e5:J>2e5?hA=5e4:J>1e5?hA=25e3:J>5e4?hA=1e4:J>2e4?hA=5e3:J>1e4?hA=2500:J>5e3?hA=1e3:J>2e3?hA=500:J>1e3?hA=250:J>500?hA=100:J>200?hA=50:J>100?hA=25:J>50?hA=10:J>20?hA=5:hA=1;const j=[],xA=CA(-tA.x/uA),BA=CA((x-tA.x)/uA),NA=Math.ceil(Math.min(xA,BA)/hA)*hA,JA=Math.floor(Math.max(xA,BA)/hA)*hA;for(let OA=NA;OA<=JA;OA+=hA)if(OA>=T&&OA<=F){let te=OA,$A="ya";OA>=1e9?(te=OA/1e9,$A="bya"):OA>=1e6?(te=OA/1e6,$A="mya"):OA>=1e3&&(te=OA/1e3,$A="kya"),j.push({value:te,unit:$A,position:(F-OA)/W})}return j},[i,uA,tA,CA]),dA=()=>{const x={};cA.forEach(W=>{x[W.id]=0}),yA.forEach(W=>{x[W.from]=(x[W.from]||0)+1,x[W.to]=(x[W.to]||0)+1});let F=null,T=0;return Object.entries(x).forEach(([W,J])=>{J>T&&(T=J,F=W)}),F?cA.find(W=>W.id===parseInt(F)):null},I=(x,F)=>{if(!i)return;const T=E.current.getBoundingClientRect(),W=x-T.left,J=F-T.top-60,j=CA((W-tA.x)/uA)/(rs.find(BA=>BA.value===i.timeUnit)?.multiplier||1),xA={id:Date.now(),x:(W-tA.x)/uA,y:Math.max(20,(J-tA.y)/uA),title:"New Species",description:"Description here...",imageSrc:"",timeline:{value:parseFloat(j.toFixed(4)),unit:i.timeUnit}};DA([...cA,xA]),LA(xA),nA(!0)},q=x=>{DA(cA.map(F=>F.id===x.id?x:F)),LA(null),nA(!1)},MA=x=>{DA(cA.filter(F=>F.id!==x)),gA(yA.filter(F=>F.from!==x&&F.to!==x)),SA(null)},O=(x,F)=>{const T={id:Date.now(),from:x,to:F};gA([...yA,T])},wA=x=>{gA(yA.filter(F=>F.id!==x)),iA(null)},VA=(x,F)=>{Q||(x.stopPropagation(),QA.current=!0,SA(F),iA(null),E.current.getBoundingClientRect(),_.current={x:x.clientX,y:x.clientY},pA.current=performance.now())},WA=k.useCallback(x=>{if(!QA.current||!AA)return;const F=performance.now(),T=(F-pA.current)/1e3;pA.current=F;const W=E.current.getBoundingClientRect();x.clientX-W.left,x.clientY-W.top;const J=x.clientX-_.current.x,hA=x.clientY-_.current.y;_.current={x:x.clientX,y:x.clientY},lA.current={x:J/(T||.016),y:hA/(T||.016)};const j=hA/uA,xA=Math.max(20,AA.y+j),BA={...AA,y:xA};DA(NA=>NA.map(JA=>JA.id===AA.id?BA:JA)),SA(BA)},[AA,uA]),PA=k.useCallback(()=>{if(QA.current){if(QA.current=!1,Math.abs(lA.current.y)>50){const F=lA.current.y*.9;TA(T=>({x:T.x,y:T.y-F}))}lA.current={x:0,y:0}}},[]),ae=(x,F)=>{x.stopPropagation(),Q?sA?sA!==F.id&&(yA.find(W=>W.from===sA&&W.to===F.id||W.from===F.id&&W.to===sA)||O(sA,F.id),G(!1),oA(null)):oA(F.id):QA.current||(SA(F),iA(null))},de=(x,F)=>{if(!x||!F)return"";const T=UA(x.timeline)+120/2,W=x.y+60/2,J=UA(F.timeline)+120/2,hA=F.y+60/2,j=dA();if(j&&(x.id===j.id||F.id===j.id)){const BA=J-T,NA=hA-W,JA=Math.sqrt(BA*BA+NA*NA),OA=Math.min(JA*.4,100),te=T+(BA>0?OA:-OA),$A=J+(BA>0?-OA:OA);return`M ${T} ${W}
              C ${te} ${W},
                ${$A} ${hA},
                ${J} ${hA}`}else{const BA=Math.abs(T-J)*.3+Math.abs(W-hA)*.2;return`M ${T} ${W}
              C ${T+BA} ${W},
                ${J-BA} ${hA},
                ${J} ${hA}`}},ze=(x,F)=>{const T=UA(x.timeline)+60,W=x.y+60/2,J=UA(F.timeline)+120/2,hA=F.y+60/2;return{x:(T+J)/2,y:(W+hA)/2}},Se=()=>{if(!i)return;const F=JSON.stringify({project:i,nodes:cA,connections:yA,zoom:uA,pan:tA},null,2),T=new Blob([F],{type:"application/json"}),W=URL.createObjectURL(T),J=document.createElement("a");J.href=W,J.download=`${i.name.replace(/\s+/g,"-")}-evolution-chart.json`,J.click(),URL.revokeObjectURL(W)},Ve=x=>{const F=x.target.files[0];if(!F)return;const T=new FileReader;T.onload=W=>{try{const J=JSON.parse(W.target.result);J.project&&J.nodes&&(o({...J.project,nodes:J.nodes,connections:J.connections,zoom:J.zoom,pan:J.pan}),DA(J.nodes),gA(J.connections),EA(J.zoom||1),IA(J.pan||{x:0,y:0}),TA(J.pan||{x:0,y:0}))}catch{alert("Error parsing the file. Please check the file format.")}},T.readAsText(F)},Le=x=>{x.ctrlKey||x.metaKey?I(x.clientX,x.clientY):(SA(null),iA(null),Q&&(G(!1),oA(null)))},Ye=x=>{LA(x),nA(!0)},We=(x,F=null,T=null)=>{const W=Math.max(.1,Math.min(5,uA+x));if(F!==null&&T!==null){const J=E.current.getBoundingClientRect(),hA=F-J.left,j=T-J.top-60,xA={x:hA-(hA-tA.x)*(W/uA),y:j-(j-tA.y)*(W/uA)};IA(xA),TA(xA)}EA(W)},xe=x=>{x.preventDefault();const F=.5;x.shiftKey?TA(T=>({x:T.x-x.deltaY*F,y:T.y})):TA(T=>({x:T.x-x.deltaX*F,y:T.y-x.deltaY*F}))};k.useEffect(()=>{const x=()=>PA();return document.addEventListener("mousemove",WA),document.addEventListener("mouseup",x),()=>{document.removeEventListener("mousemove",WA),document.removeEventListener("mouseup",x)}},[WA,PA]);const ue=dA();return n.jsxs("div",{className:"evolution-chart-maker",children:[n.jsxs("div",{className:"header",children:[n.jsxs("div",{className:"header-left",children:[n.jsx("h1",{children:"🧬 Evolution Chart Maker"}),n.jsx("span",{className:"project-name",children:i?.name})]}),n.jsxs("div",{className:"toolbar",children:[n.jsx("button",{onClick:d,className:"toolbar-btn primary",children:"← Back to Projects"}),n.jsx("button",{onClick:()=>{G(!Q),oA(null)},className:`toolbar-btn ${Q?"danger":"warning"}`,children:Q?"Cancel":"Connect"}),n.jsxs("button",{onClick:()=>M.current?.click(),className:"toolbar-btn warning",children:[n.jsx(nn,{size:16})," Import"]}),n.jsxs("button",{onClick:Se,className:"toolbar-btn info",children:[n.jsx(En,{size:16})," Export"]}),n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:()=>We(.1),className:"zoom-btn",children:n.jsx(Cr,{size:16})}),n.jsx("button",{onClick:()=>We(-.1),className:"zoom-btn",children:n.jsx(Qr,{size:16})})]})]})]}),n.jsx("div",{className:"timeline",children:jA().map((x,F)=>n.jsxs("div",{className:"timeline-marker",style:{left:`${x.position*(E.current?.offsetWidth||800)*uA+tA.x}px`},children:[n.jsx("div",{className:"timeline-line"}),n.jsx("span",{className:"timeline-label",children:D(x.value,x.unit)})]},F))}),n.jsxs("div",{ref:E,onClick:Le,onWheel:xe,className:"canvas",style:{cursor:Q?"crosshair":QA.current?"grabbing":"default"},children:[n.jsx("svg",{className:"connections-svg",children:yA.map(x=>{const F=cA.find(j=>j.id===x.from),T=cA.find(j=>j.id===x.to);if(!F||!T)return null;const W=ze(F,T),J=V===x.id||AA&&(AA.id===F.id||AA.id===T.id),hA=ue&&(F.id===ue.id||T.id===ue.id);return n.jsxs("g",{children:[n.jsx("path",{d:de(F,T),stroke:J?w:hA?v:m,strokeWidth:hA?J?"4":"3":J?"3":"2",fill:"none",opacity:hA?"0.9":"0.7",transform:`translate(${tA.x}, ${tA.y+60}) scale(${uA})`,strokeDasharray:hA?"none":"5,5"}),J&&n.jsx("circle",{cx:W.x*uA+tA.x,cy:W.y*uA+tA.y+60,r:8*uA,fill:"#e53e3e",onClick:j=>{j.stopPropagation(),wA(x.id)},style:{cursor:"pointer",pointerEvents:"auto"}})]},x.id)})}),cA.map(x=>{const F=ue&&ue.id===x.id;return n.jsxs("div",{className:`node ${AA?.id===x.id?"selected":""} ${F?"central":""}`,style:{left:`${UA(x.timeline)*uA+tA.x}px`,top:`${x.y*uA+tA.y+60}px`,width:`${120*uA}px`,height:`${60*uA}px`,transform:AA?.id===x.id&&QA.current?"scale(1.02)":"scale(1)",transition:"transform 0.1s ease"},onMouseDown:T=>VA(T,x),onClick:T=>ae(T,x),onDoubleClick:()=>Ye(x),children:[n.jsxs("div",{className:"node-content",children:[x.imageSrc&&n.jsx("img",{src:x.imageSrc,alt:x.title,className:"node-image",style:{width:`${28*uA}px`,height:`${28*uA}px`}}),n.jsxs("div",{className:"node-text",children:[n.jsx("div",{className:"node-title",style:{fontSize:`${10*uA}px`},children:x.title}),n.jsx("div",{className:"node-timeline",style:{fontSize:`${8*uA}px`},children:D(x.timeline.value,x.timeline.unit)})]})]}),AA?.id===x.id&&n.jsx("button",{onClick:T=>{T.stopPropagation(),MA(x.id)},className:"delete-node-btn",style:{width:`${20*uA}px`,height:`${20*uA}px`},children:n.jsx(pe,{size:10*uA})})]},x.id)}),Q&&n.jsx("div",{className:"connection-mode-indicator",children:sA?"Select child node":"Select parent node"}),n.jsxs("div",{className:"instructions-panel",children:[n.jsxs("div",{children:["💡 ",n.jsx("strong",{children:"Ctrl+Click:"})," Create new node"]}),n.jsxs("div",{children:["🔗 ",n.jsx("strong",{children:"Connect Mode:"})," Click two nodes to link them"]}),n.jsxs("div",{children:["❌ ",n.jsx("strong",{children:"Click connection midpoint:"})," Delete connection"]}),n.jsxs("div",{children:["📍 ",n.jsx("strong",{children:"Drag:"})," Move nodes vertically"]}),n.jsxs("div",{children:["✏️ ",n.jsx("strong",{children:"Double-click:"})," Edit node details"]}),n.jsxs("div",{children:["🔍 ",n.jsx("strong",{children:"Scroll:"})," Pan | ",n.jsx("strong",{children:"Shift+Scroll:"})," Horizontal Pan"]})]})]}),R&&vA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Edit Node"}),n.jsx("button",{onClick:()=>nA(!1),className:"close-btn",children:n.jsx(Ri,{size:20})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Title"}),n.jsx("input",{type:"text",defaultValue:vA.title,placeholder:"Species name",id:"nodeTitle"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Image URL"}),n.jsx("input",{type:"text",defaultValue:vA.imageSrc,placeholder:"https://example.com/image.jpg",id:"nodeImage"})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Timeline Value"}),n.jsx("input",{type:"number",defaultValue:vA.timeline.value,id:"nodeTimelineValue"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Time Unit"}),n.jsx("select",{id:"nodeTimelineUnit",defaultValue:vA.timeline.unit,children:rs.map(x=>n.jsx("option",{value:x.value,children:x.value.toUpperCase()},x.value))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Description"}),n.jsx("textarea",{defaultValue:vA.description,placeholder:"Brief description of the species...",rows:4,id:"nodeDescription"})]}),n.jsxs("div",{className:"form-actions",children:[n.jsx("button",{onClick:()=>nA(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const x={...vA,title:document.getElementById("nodeTitle").value,imageSrc:document.getElementById("nodeImage").value,timeline:{value:parseFloat(document.getElementById("nodeTimelineValue").value),unit:document.getElementById("nodeTimelineUnit").value},description:document.getElementById("nodeDescription").value};q(x)},className:"save-btn",children:"Save Changes"})]})]})}),n.jsx("input",{ref:M,type:"file",accept:".json",onChange:Ve,style:{display:"none"}}),n.jsx("style",{jsx:!0,children:`
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
          border-radius: 12px;
          padding: 6px 8px;
          cursor: grab;
          z-index: 10;
          border: 2px solid rgba(255,255,255,0.3);
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: all 0.2s ease;
        }
        
        .node.selected {
          background: #81c784;
          border: 2px solid #2e7d32;
          z-index: 100;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
        }
        
        .node.central {
          background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
          border: 3px solid #fff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        
        .node.central.selected {
          background: linear-gradient(135deg, #ff5252, #26a69a);
          border: 3px solid #ffeb3b;
          box-shadow: 0 6px 24px rgba(0,0,0,0.4);
        }
        
        .node-content {
          display: flex;
          align-items: center;
          gap: 6px;
          width: 100%;
        }
        
        .node-image {
          object-fit: cover;
          border-radius: 50%;
          flex-shrink: 0;
          pointer-events: none;
        }
        
        .node-text {
          flex: 1;
          min-width: 0;
        }
        
        .node-title {
          color: white;
          font-weight: 600;
          text-align: left;
          margin-bottom: 1px;
          line-height: 1.2;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .node-timeline {
          color: rgba(255,255,255,0.9);
          text-align: left;
          font-weight: 500;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .delete-node-btn {
          position: absolute;
          top: -6px;
          right: -6px;
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
          backdrop-filter: blur(10px);
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
      `})]})},Cw=({flowcharts:i,onCreateFlowchart:r,onLoadFlowchart:s,onDeleteFlowchart:o,onImportFlowchart:d})=>{const[u,h]=k.useState(!1),[B,m]=k.useState(!1),[w,v]=k.useState("");return n.jsxs("div",{className:"flowchart-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:"📊"}),n.jsx("h2",{children:"Flowchart Designer"}),n.jsx("p",{children:"Create and visualize complex processes with intuitive flowcharts"}),n.jsxs("div",{className:"action-buttons",children:[n.jsxs("button",{onClick:()=>h(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Flowchart"]}),n.jsxs("button",{onClick:()=>m(!0),className:"secondary-btn",children:[n.jsx(nn,{size:16})," Import"]})]}),i.length>0&&n.jsxs("div",{className:"flowchart-list",children:[n.jsx("h3",{children:"Your Flowcharts"}),i.map(E=>n.jsxs("div",{className:"flowchart-card",onClick:()=>s(E),children:[n.jsxs("div",{className:"flowchart-card-content",children:[n.jsx("div",{className:"flowchart-card-name",children:E.name}),n.jsxs("div",{className:"flowchart-card-meta",children:[n.jsx("span",{children:new Date(E.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[E.nodes?.length||0," nodes • ",E.edges?.length||0," edges"]})]})]}),n.jsxs("div",{className:"flowchart-card-actions",children:[n.jsx("button",{onClick:M=>{M.stopPropagation(),s(E)},className:"open-btn",children:n.jsx(Fn,{size:16})}),n.jsx("button",{onClick:M=>{M.stopPropagation(),confirm("Delete this flowchart?")&&o(E.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},E.id))]})]}),u&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Flowchart"}),n.jsx("button",{onClick:()=>h(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Flowchart Name"}),n.jsx("input",{type:"text",placeholder:"e.g., User Registration Flow",id:"flowchartName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>h(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const E=document.getElementById("flowchartName").value;E.trim()&&(r(E),h(!1))},className:"create-btn",children:"Create Flowchart"})]})]})}),B&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Import Flowchart"}),n.jsx("button",{onClick:()=>m(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Paste JSON Data"}),n.jsx("textarea",{value:w,onChange:E=>v(E.target.value),placeholder:"Paste your flowchart JSON here...",rows:8})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>m(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{try{d(w),m(!1),v("")}catch(E){alert("Invalid JSON: "+E.message)}},className:"create-btn",children:"Import"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},Qw=({flowchart:i,nodes:r,edges:s,jsonInput:o,onJsonInputChange:d,onImportJson:u,onUpdateFlowchart:h,onBack:B})=>{const[m,w]=k.useState("editor"),[v,E]=k.useState(null),[M,aA]=k.useState(null),[_,lA]=k.useState(null),[pA,QA]=k.useState(null),[cA,DA]=k.useState(null),[yA,gA]=k.useState(null),[AA,SA]=k.useState(""),[V,iA]=k.useState(!1),[uA,EA]=k.useState(null),[tA,IA]=k.useState(!1),[KA,TA]=k.useState(""),[R,nA]=k.useState(null),[vA,LA]=k.useState("dark"),[Q,G]=k.useState(null),[sA,oA]=k.useState(null),[UA,HA]=k.useState(!1),[D,CA]=k.useState(!1),[jA,dA]=k.useState(null),I=k.useRef(null),q=k.useRef(null),O={dark:{background:"#1a1a1a",panel:"#242424",border:"#444",text:"rgba(255, 255, 255, 0.87)",nodeFill:"#646cff",nodeStroke:"#a855f7",edgeStroke:"#646cff",highlight:"#a855f7",secondaryText:"#64748b",buttonHover:"#333"},light:{background:"#f5f5f5",panel:"#ffffff",border:"#ddd",text:"#333",nodeFill:"#4f46e5",nodeStroke:"#7c3aed",edgeStroke:"#4f46e5",highlight:"#7c3aed",secondaryText:"#666",buttonHover:"#eee"},blue:{background:"#0f172a",panel:"#1e293b",border:"#334155",text:"#f8fafc",nodeFill:"#3b82f6",nodeStroke:"#6366f1",edgeStroke:"#3b82f6",highlight:"#6366f1",secondaryText:"#94a3b8",buttonHover:"#1e293b"}}[vA];k.useEffect(()=>{const f=C=>{if(C.key==="Control"||C.key==="Meta")HA(!0);else if(C.key==="Shift")CA(!0);else if(C.key==="Delete")M?BA():_?NA():Q&&JA();else if(Q&&!C.ctrlKey&&!C.metaKey){let U=0,H=0;const Y=C.shiftKey?10:2;switch(C.key){case"ArrowUp":H=-Y;break;case"ArrowDown":H=Y;break;case"ArrowLeft":U=-Y;break;case"ArrowRight":U=Y;break;default:return}C.preventDefault(),wA(Q.edgeId,Q.pointIndex,U,H)}},b=C=>{C.key==="Control"||C.key==="Meta"?HA(!1):C.key==="Shift"&&CA(!1)};return document.addEventListener("keydown",f),document.addEventListener("keyup",b),()=>{document.removeEventListener("keydown",f),document.removeEventListener("keyup",b)}},[M,_,Q]);const wA=(f,b,C,U)=>{const H=s.map(Y=>{if(Y.id===f){const eA=[...Y.controlPoints||[]];return eA[b]&&(eA[b]={x:eA[b].x+C,y:eA[b].y+U}),{...Y,controlPoints:eA}}return Y});h({...i,edges:H})},VA=()=>JSON.stringify({nodes:r,edges:s},null,2),WA=()=>{const f=new Blob([VA()],{type:"application/json"}),b=URL.createObjectURL(f),C=document.createElement("a");C.href=b,C.download=`${i?.name||"use-case-diagram"}.json`,document.body.appendChild(C),C.click(),document.body.removeChild(C),URL.revokeObjectURL(b),w("json")},PA=f=>{const b=f.target.files[0];if(!b)return;const C=new FileReader;C.onload=U=>{try{const H=JSON.parse(U.target.result);d(JSON.stringify(H,null,2)),w("json")}catch{alert("Invalid JSON file")}},C.readAsText(b),f.target.value=""},ae=()=>{try{const f=JSON.parse(o);h({...i,nodes:f.nodes||[],edges:f.edges||[]})}catch(f){alert("Invalid JSON: "+f.message)}},de=(f,b,C)=>{const U=C.x+C.width/2,H=C.y+C.height/2,Y=Math.abs(f-U),K=Math.abs(b-H);return Y/(C.width/2)+K/(C.height/2)<=1},ze=(f,b,C)=>{const U=f-C.x,H=b-C.y,Y=C.height*.3;if(H<0||H>C.height)return!1;const K=H/C.height,eA=-Y+K*Y*2,rA=C.width+Y-K*Y*2;return U>=eA&&U<=rA},Se=(f,b,C)=>{const U=f.x+f.width/2,H=f.y+f.height/2;if(f.type==="circle"){const Y=f.width/2,K=Math.atan2(C-H,b-U);return{x:U+Y*Math.cos(K),y:H+Y*Math.sin(K)}}else if(f.type==="oval"){const Y=f.width/2,K=f.height/2,eA=Math.atan2(C-H,b-U),rA=Math.cos(eA),_A=Math.sin(eA),FA=Math.sqrt(1/(Math.pow(rA/Y,2)+Math.pow(_A/K,2)));return{x:U+FA*rA,y:H+FA*_A}}else if(f.type==="diamond"){const Y=b-U,K=C-H,eA=f.width/2,rA=f.height/2,_A=Math.abs(Y)>0?eA/Math.abs(Y):1/0,FA=Math.abs(K)>0?rA/Math.abs(K):1/0,RA=Math.min(_A,FA),ZA=U+Y/Math.abs(Y)*Math.min(Math.abs(Y),eA*RA),ge=H+K/Math.abs(K)*Math.min(Math.abs(K),rA*RA),we=Math.abs(ZA-U)/eA,Oe=Math.abs(ge-H)/rA,De=1/(we+Oe);return{x:U+(ZA-U)*De,y:H+(ge-H)*De}}else if(f.type==="rhombus"){const Y=b-U,K=C-H,eA=f.height*.3,rA=Math.max(0,Math.min(1,(C-f.y)/f.height));if(Math.abs(Y)>Math.abs(K)*.8){const _A=Y>0?f.x+f.width+eA-rA*eA*2:f.x-eA+rA*eA*2,FA=f.y+rA*f.height,RA=Y>0?f.x+f.width-eA:f.x+eA,ZA=Y>0?f.x+f.width+eA:f.x-eA;return Y>0,f.y,Y>0,f.y+f.height,{x:Math.max(Math.min(_A,Math.max(RA,ZA)),Math.min(RA,ZA)),y:Math.max(Math.min(FA,f.y+f.height),f.y)}}else{const _A=K>0?f.y+f.height:f.y,FA=U+Y*.7,RA=eA*(1-Math.abs(K)/f.height);return{x:Math.max(f.x-RA,Math.min(f.x+f.width+RA,FA)),y:_A}}}else{const Y=b-U,K=C-H,eA=f.width/2,rA=f.height/2;if(Math.abs(Y)*rA>Math.abs(K)*eA){const _A=Y>0?f.x+f.width:f.x,FA=H+K/Math.abs(Y)*eA;return{x:_A,y:Math.max(f.y,Math.min(f.y+f.height,FA))}}else{const _A=K>0?f.y+f.height:f.y,FA=U+Y/Math.abs(K)*rA;return{x:Math.max(f.x,Math.min(f.x+f.width,FA)),y:_A}}}},Ve=(f,b,C=null)=>r.some(U=>{if(U.id===C)return!1;if(U.type==="circle"){const H=U.x+U.width/2,Y=U.y+U.height/2;return Math.sqrt(Math.pow(f-H,2)+Math.pow(b-Y,2))<=U.width/2+5}else if(U.type==="oval"){const H=U.x+U.width/2,Y=U.y+U.height/2,K=(f-H)/(U.width/2+5),eA=(b-Y)/(U.height/2+5);return Math.pow(K,2)+Math.pow(eA,2)<=1}else return U.type==="diamond"?de(f,b,{...U,width:U.width+10,height:U.height+10,x:U.x-5,y:U.y-5}):U.type==="rhombus"?ze(f,b,{...U,width:U.width+10,height:U.height+10,x:U.x-5,y:U.y-5}):f>=U.x-5&&f<=U.x+U.width+5&&b>=U.y-5&&b<=U.y+U.height+5}),Le=(f,b,C=[])=>{const U={x:f.x+f.width/2,y:f.y+f.height/2},H={x:b.x+b.width/2,y:b.y+b.height/2},Y=Se(f,H.x,H.y),K=Se(b,U.x,U.y);if(C&&C.length>0)return[Y,...C,K];const eA=K.x-Y.x,rA=K.y-Y.y,_A=Math.sqrt(eA*eA+rA*rA),FA=!Ye(Y,K,[f.id,b.id]);return _A<80||FA?[Y,K]:We(Y,K,f,b)},Ye=(f,b,C=[])=>{const U=Math.ceil(Math.sqrt(Math.pow(b.x-f.x,2)+Math.pow(b.y-f.y,2))/10);for(let H=0;H<=U;H++){const Y=H/U,K=f.x+(b.x-f.x)*Y,eA=f.y+(b.y-f.y)*Y;if(Ve(K,eA,...C))return!0}return!1},We=(f,b,C,U)=>{const H=b.x-f.x,Y=b.y-f.y,K=[()=>{const eA=f.x+H*.7,rA=[f,{x:eA,y:f.y},{x:eA,y:b.y},b];return Ye(rA[1],rA[2],[C.id,U.id])?null:rA},()=>{const eA=f.y+Y*.7,rA=[f,{x:f.x,y:eA},{x:b.x,y:eA},b];return Ye(rA[1],rA[2],[C.id,U.id])?null:rA},()=>{const eA=Math.abs(Y)>Math.abs(H)?100:50,rA=f.x+H*.5+(H>0?eA:-eA);return[f,{x:rA,y:f.y},{x:rA,y:b.y},b]},()=>{const eA=Math.abs(H)>Math.abs(Y)?100:50,rA=f.y+Y*.5+(Y>0?eA:-eA);return[f,{x:f.x,y:rA},{x:b.x,y:rA},b]}];for(const eA of K){const rA=eA();if(rA)return rA}return[f,b]},xe=f=>{if(f.length<=2)return{x:(f[0].x+f[f.length-1].x)/2,y:(f[0].y+f[f.length-1].y)/2};let b=0,C=0;for(let U=0;U<f.length-1;U++){const H=Math.sqrt(Math.pow(f[U+1].x-f[U].x,2)+Math.pow(f[U+1].y-f[U].y,2));H>b&&(b=H,C=U)}return{x:(f[C].x+f[C+1].x)/2,y:(f[C].y+f[C+1].y)/2}},ue=(f,b,C,U=8)=>{const H=f.x-b.x,Y=f.y-b.y,K=C.x-b.x,eA=C.y-b.y,rA=H*K+Y*eA,_A=K*K+eA*eA;if(_A===0)return!1;const FA=rA/_A;if(FA<0||FA>1)return!1;const RA=b.x+FA*K,ZA=b.y+FA*eA,ge=f.x-RA,we=f.y-ZA;return Math.sqrt(ge*ge+we*we)<=U},x=(f,b)=>{for(const C of s){const U=r.find(K=>K.id===C.from),H=r.find(K=>K.id===C.to);if(!U||!H)continue;const Y=Le(U,H,C.controlPoints);for(let K=0;K<Y.length-1;K++)if(ue({x:f,y:b},Y[K],Y[K+1]))return C}return null},F=(f,b)=>{for(const C of s)if(C.controlPoints)for(let U=0;U<C.controlPoints.length;U++){const H=C.controlPoints[U];if(Math.sqrt(Math.pow(f-H.x,2)+Math.pow(b-H.y,2))<=8)return{edgeId:C.id,pointIndex:U,point:H}}return null},T=f=>{if(cA||yA)return;const C=f.currentTarget.getBoundingClientRect(),U=(f.clientX-C.left-i.pan.x)/i.zoom,H=(f.clientY-C.top-i.pan.y)/i.zoom,Y=F(U,H);if(Y){G(Y),aA(null),lA(null);return}const K=r.find(rA=>{if(rA.type==="circle"){const _A=rA.x+rA.width/2,FA=rA.y+rA.height/2;return Math.sqrt(Math.pow(U-_A,2)+Math.pow(H-FA,2))<=rA.width/2}else if(rA.type==="oval"){const _A=rA.x+rA.width/2,FA=rA.y+rA.height/2,RA=(U-_A)/(rA.width/2),ZA=(H-FA)/(rA.height/2);return Math.pow(RA,2)+Math.pow(ZA,2)<=1}else return rA.type==="diamond"?de(U,H,rA):rA.type==="rhombus"?ze(U,H,rA):U>=rA.x&&U<=rA.x+rA.width&&H>=rA.y&&H<=rA.y+rA.height}),eA=K?null:x(U,H);if(D&&_&&eA&&eA.id===_.id){W(_.id,U,H);return}if(UA&&K){dA({x:U,y:H,node:K}),EA(K),iA(!0);return}if(V&&K){if(!uA)EA(K);else if(K.id!==uA.id)if(uA.type==="diamond"||uA.type==="rhombus")nA({id:Date.now(),from:uA.id,to:K.id}),IA(!0);else{const rA={id:Date.now(),from:uA.id,to:K.id,label:"",controlPoints:[]};h({...i,edges:[...s,rA]}),EA(null),iA(!1),E(null),dA(null)}return}if(K){aA(K),lA(null),G(null);return}if(eA){lA(eA),aA(null),G(null);return}if(v&&v!=="arrow"){const rA={id:Date.now(),type:v,x:U-(v==="circle"||v==="oval"?30:60),y:H-30,width:v==="circle"?60:v==="oval"?100:120,height:60,text:J(v)};h({...i,nodes:[...r,rA]}),E(null)}aA(null),lA(null),G(null)},W=(f,b,C)=>{const U=s.map(H=>{if(H.id===f){const Y=H.controlPoints||[];return{...H,controlPoints:[...Y,{x:b,y:C}]}}return H});h({...i,edges:U})},J=f=>{switch(f){case"oval":return"Start/End";case"diamond":return"Decision";case"rhombus":return"Decision";case"rectangle":return"Process";case"circle":return"Connector";default:return f.charAt(0).toUpperCase()+f.slice(1)}},hA=f=>{DA(f.id),SA(f.text)},j=f=>{gA(f.id),SA(f.label||"")},xA=()=>{if(cA){const f=r.map(b=>b.id===cA?{...b,text:AA}:b);h({...i,nodes:f}),DA(null)}else if(yA){const f=s.map(b=>b.id===yA?{...b,label:AA}:b);h({...i,edges:f}),gA(null)}SA("")},BA=()=>{if(!M)return;const f=r.filter(C=>C.id!==M.id),b=s.filter(C=>C.from!==M.id&&C.to!==M.id);h({...i,nodes:f,edges:b}),aA(null)},NA=()=>{if(!_)return;const f=s.filter(b=>b.id!==_.id);h({...i,edges:f}),lA(null)},JA=()=>{if(!Q)return;const f=s.map(b=>{if(b.id===Q.edgeId){const U=(b.controlPoints||[]).filter((H,Y)=>Y!==Q.pointIndex);return{...b,controlPoints:U}}return b});h({...i,edges:f}),G(null)},OA=(f,b)=>{if(cA||yA)return;const U=I.current.getBoundingClientRect(),H=f.clientX-U.left,Y=f.clientY-U.top;QA({nodeId:b.id,startX:H,startY:Y,originalX:b.x,originalY:b.y})},te=(f,b,C)=>{if(cA||yA)return;f.stopPropagation();const H=I.current.getBoundingClientRect(),Y=f.clientX-H.left,K=f.clientY-H.top,rA=s.find(_A=>_A.id===b)?.controlPoints?.[C];rA&&oA({edgeId:b,pointIndex:C,startX:Y,startY:K,originalX:rA.x,originalY:rA.y})},$A=k.useCallback(f=>{if(pA){const C=I.current.getBoundingClientRect(),U=f.clientX-C.left,H=f.clientY-C.top,Y=(U-pA.startX)/i.zoom,K=(H-pA.startY)/i.zoom,eA=r.map(rA=>rA.id===pA.nodeId?{...rA,x:pA.originalX+Y,y:pA.originalY+K}:rA);h({...i,nodes:eA})}else if(sA){const C=I.current.getBoundingClientRect(),U=f.clientX-C.left,H=f.clientY-C.top,Y=(U-sA.startX)/i.zoom,K=(H-sA.startY)/i.zoom,eA=s.map(rA=>{if(rA.id===sA.edgeId){const FA=[...rA.controlPoints||[]];return FA[sA.pointIndex]={x:sA.originalX+Y,y:sA.originalY+K},{...rA,controlPoints:FA}}return rA});h({...i,edges:eA})}},[pA,sA,r,s,i,h]),he=k.useCallback(()=>{QA(null),oA(null)},[]);k.useEffect(()=>{if(pA||sA)return document.addEventListener("mousemove",$A),document.addEventListener("mouseup",he),()=>{document.removeEventListener("mousemove",$A),document.removeEventListener("mouseup",he)}},[pA,sA,$A,he]);const Me=()=>{E("arrow"),iA(!0),EA(null),dA(null)},je=()=>{if(!R)return;const f={...R,label:KA,controlPoints:[]};h({...i,edges:[...s,f]}),EA(null),iA(!1),E(null),IA(!1),nA(null),TA(""),dA(null)},re=()=>{const f=document.createElement("canvas"),b=f.getContext("2d");let C=1/0,U=1/0,H=-1/0,Y=-1/0;r.forEach(FA=>{C=Math.min(C,FA.x),U=Math.min(U,FA.y),H=Math.max(H,FA.x+FA.width),Y=Math.max(Y,FA.y+FA.height)}),s.forEach(FA=>{const RA=r.find(ge=>ge.id===FA.from),ZA=r.find(ge=>ge.id===FA.to);RA&&ZA&&Le(RA,ZA,FA.controlPoints).forEach(we=>{C=Math.min(C,we.x),U=Math.min(U,we.y),H=Math.max(H,we.x),Y=Math.max(Y,we.y)})});const K=40;C-=K,U-=K,H+=K,Y+=K;const eA=H-C,rA=Y-U;f.width=eA,f.height=rA,b.fillStyle=O.background,b.fillRect(0,0,eA,rA),s.forEach(FA=>{const RA=r.find(ge=>ge.id===FA.from),ZA=r.find(ge=>ge.id===FA.to);if(RA&&ZA){const we=Le(RA,ZA,FA.controlPoints).map(Ct=>({x:Ct.x-C,y:Ct.y-U}));b.strokeStyle=O.edgeStroke,b.lineWidth=2,b.beginPath(),b.moveTo(we[0].x,we[0].y);for(let Ct=1;Ct<we.length;Ct++)b.lineTo(we[Ct].x,we[Ct].y);b.stroke();const Oe=we[we.length-1],De=we[we.length-2],oa=Math.atan2(Oe.y-De.y,Oe.x-De.x);if(b.fillStyle=O.edgeStroke,b.beginPath(),b.moveTo(Oe.x,Oe.y),b.lineTo(Oe.x-12*Math.cos(oa-Math.PI/6),Oe.y-12*Math.sin(oa-Math.PI/6)),b.lineTo(Oe.x-12*Math.cos(oa+Math.PI/6),Oe.y-12*Math.sin(oa+Math.PI/6)),b.closePath(),b.fill(),FA.label){const Ct=xe(we);b.fillStyle=O.text,b.font="12px Arial",b.textAlign="center",b.fillText(FA.label,Ct.x,Ct.y-5)}}}),r.forEach(FA=>{const RA=FA.x-C,ZA=FA.y-U;if(b.fillStyle=O.nodeFill,b.strokeStyle=O.nodeStroke,b.lineWidth=2,FA.type==="rectangle")b.beginPath(),b.roundRect(RA,ZA,FA.width,FA.height,4),b.fill(),b.stroke();else if(FA.type==="circle")b.beginPath(),b.arc(RA+FA.width/2,ZA+FA.height/2,FA.width/2,0,2*Math.PI),b.fill(),b.stroke();else if(FA.type==="diamond")b.beginPath(),b.moveTo(RA+FA.width/2,ZA),b.lineTo(RA+FA.width,ZA+FA.height/2),b.lineTo(RA+FA.width/2,ZA+FA.height),b.lineTo(RA,ZA+FA.height/2),b.closePath(),b.fill(),b.stroke();else if(FA.type==="rhombus"){const ge=FA.height*.3;b.beginPath(),b.moveTo(RA-ge,ZA),b.lineTo(RA+FA.width-ge,ZA),b.lineTo(RA+FA.width+ge,ZA+FA.height),b.lineTo(RA+ge,ZA+FA.height),b.closePath(),b.fill(),b.stroke()}else FA.type==="oval"&&(b.beginPath(),b.ellipse(RA+FA.width/2,ZA+FA.height/2,FA.width/2,FA.height/2,0,0,2*Math.PI),b.fill(),b.stroke());b.fillStyle=O.text,b.font="12px Arial",b.textAlign="center",b.textBaseline="middle",b.fillText(FA.text,RA+FA.width/2,ZA+FA.height/2)});const _A=document.createElement("a");_A.download=`${i.name||"flowchart"}.png`,_A.href=f.toDataURL("image/png"),_A.click()},g=f=>{const b=M?.id===f.id,C=cA===f.id,U=V&&uA?.id===f.id;let H={position:"absolute",left:`${f.x}px`,top:`${f.y}px`,width:`${f.width}px`,height:`${f.height}px`,backgroundColor:b?O.highlight:O.nodeFill,display:"flex",justifyContent:"center",alignItems:"center",color:O.text,cursor:"move",fontSize:"12px",fontWeight:"500",textAlign:"center",wordBreak:"break-word",padding:"8px",boxSizing:"border-box",border:b?`2px solid ${O.nodeStroke}`:U?"2px solid #f59e0b":"1px solid rgba(255,255,255,0.2)",userSelect:"none",transition:"all 0.2s ease",zIndex:b?1e3:1};return f.type==="circle"||f.type==="oval"?H.borderRadius="50%":f.type==="diamond"?(H.clipPath="polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",H.borderRadius="0"):f.type==="rhombus"?(H.clipPath="polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",H.borderRadius="0"):H.borderRadius="8px",n.jsx("div",{style:H,onMouseDown:Y=>OA(Y,f),onDoubleClick:()=>hA(f),children:C?n.jsx("input",{type:"text",value:AA,onChange:Y=>SA(Y.target.value),onBlur:xA,onKeyPress:Y=>Y.key==="Enter"&&xA(),style:{background:"rgba(255,255,255,0.2)",border:"none",color:O.text,textAlign:"center",fontSize:"12px",fontWeight:"500",width:"100%",outline:"none",borderRadius:"4px",padding:"2px"},autoFocus:!0}):f.text},f.id)},S=f=>{const b=r.find(K=>K.id===f.from),C=r.find(K=>K.id===f.to);if(!b||!C)return null;const U=Le(b,C,f.controlPoints),H=_?.id===f.id,Y=yA===f.id;return n.jsxs("div",{children:[U.map((K,eA)=>{if(eA===U.length-1)return null;const rA=U[eA+1],_A=Math.sqrt(Math.pow(rA.x-K.x,2)+Math.pow(rA.y-K.y,2)),FA=Math.atan2(rA.y-K.y,rA.x-K.x)*180/Math.PI;return n.jsx("div",{style:{position:"absolute",left:`${K.x}px`,top:`${K.y-(H?1.5:1)}px`,width:`${_A}px`,height:H?"3px":"2px",backgroundColor:H?O.highlight:O.edgeStroke,transformOrigin:"0 50%",transform:`rotate(${FA}deg)`,cursor:"pointer",zIndex:H?10:2,borderRadius:"1px"},onClick:RA=>{RA.stopPropagation(),lA(f),aA(null),G(null)},onDoubleClick:RA=>{RA.stopPropagation(),j(f)}},`segment-${eA}`)}),f.controlPoints&&f.controlPoints.map((K,eA)=>n.jsx("div",{style:{position:"absolute",left:`${K.x-6}px`,top:`${K.y-6}px`,width:"12px",height:"12px",backgroundColor:Q?.edgeId===f.id&&Q?.pointIndex===eA?O.highlight:O.nodeStroke,border:"2px solid white",borderRadius:"50%",cursor:"move",zIndex:15,boxShadow:"0 2px 4px rgba(0,0,0,0.2)"},onMouseDown:rA=>te(rA,f.id,eA),onClick:rA=>{rA.stopPropagation(),G({edgeId:f.id,pointIndex:eA,point:K})}},`control-${eA}`)),(()=>{const K=U[U.length-1],eA=U[U.length-2],rA=Math.atan2(K.y-eA.y,K.x-eA.x),_A=8,FA=Math.PI/6,RA={x:K.x-_A*Math.cos(rA-FA),y:K.y-_A*Math.sin(rA-FA)},ZA={x:K.x-_A*Math.cos(rA+FA),y:K.y-_A*Math.sin(rA+FA)};return n.jsx("svg",{style:{position:"absolute",left:`${Math.min(K.x,RA.x,ZA.x)-2}px`,top:`${Math.min(K.y,RA.y,ZA.y)-2}px`,width:`${Math.max(K.x,RA.x,ZA.x)-Math.min(K.x,RA.x,ZA.x)+4}px`,height:`${Math.max(K.y,RA.y,ZA.y)-Math.min(K.y,RA.y,ZA.y)+4}px`,pointerEvents:"none",zIndex:H?11:3},children:n.jsx("polygon",{points:`${K.x-Math.min(K.x,RA.x,ZA.x)+2},${K.y-Math.min(K.y,RA.y,ZA.y)+2} ${RA.x-Math.min(K.x,RA.x,ZA.x)+2},${RA.y-Math.min(K.y,RA.y,ZA.y)+2} ${ZA.x-Math.min(K.x,RA.x,ZA.x)+2},${ZA.y-Math.min(K.y,RA.y,ZA.y)+2}`,fill:H?O.highlight:O.edgeStroke})})})(),(f.label||Y)&&n.jsx("div",{style:{position:"absolute",left:`${xe(U).x}px`,top:`${xe(U).y-12}px`,color:O.text,fontSize:"11px",fontWeight:"600",backgroundColor:O.panel,padding:"4px 8px",borderRadius:"12px",border:`1px solid ${O.border}`,transform:"translate(-50%, -50%)",cursor:"pointer",zIndex:H?12:4,minWidth:Y?"80px":"auto",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},onClick:K=>{K.stopPropagation(),lA(f),aA(null),G(null)},onDoubleClick:K=>{K.stopPropagation(),j(f)},children:Y?n.jsx("input",{type:"text",value:AA,onChange:K=>SA(K.target.value),onBlur:xA,onKeyPress:K=>K.key==="Enter"&&xA(),style:{background:"transparent",border:"none",color:O.text,textAlign:"center",fontSize:"11px",fontWeight:"600",width:"100%",outline:"none"},autoFocus:!0}):f.label})]},f.id)};return n.jsx("div",{style:{minHeight:"100vh",backgroundColor:O.background,color:O.text,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},children:n.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",padding:"24px"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px",padding:"20px",backgroundColor:O.panel,borderRadius:"12px",border:`1px solid ${O.border}`,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("h1",{style:{margin:"0",fontSize:"2rem",fontWeight:"700",background:"linear-gradient(135deg, #646cff, #a855f7)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:i.name}),n.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[n.jsx("div",{style:{display:"flex",gap:"4px",padding:"4px",backgroundColor:O.background,borderRadius:"8px",border:`1px solid ${O.border}`},children:[{key:"dark",label:"🌙",title:"Dark Theme"},{key:"light",label:"☀️",title:"Light Theme"},{key:"blue",label:"🌊",title:"Blue Theme"}].map(({key:f,label:b,title:C})=>n.jsx("button",{onClick:()=>LA(f),title:C,style:{padding:"8px 12px",backgroundColor:vA===f?O.nodeFill:"transparent",color:vA===f?"white":O.text,border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"16px",transition:"all 0.2s",minWidth:"40px"},children:b},f))}),n.jsx("button",{onClick:B,style:{padding:"12px 20px",backgroundColor:O.panel,color:O.text,border:`1px solid ${O.nodeFill}`,borderRadius:"8px",cursor:"pointer",fontSize:"14px",fontWeight:"500",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"8px"},children:"← Back to List"})]})]}),n.jsxs("div",{style:{display:"flex",marginBottom:"24px",backgroundColor:O.panel,borderRadius:"12px",padding:"4px",border:`1px solid ${O.border}`,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("button",{onClick:()=>w("editor"),style:{padding:"12px 24px",border:"none",backgroundColor:m==="editor"?O.nodeFill:"transparent",color:m==="editor"?"white":O.text,cursor:"pointer",fontSize:"14px",fontWeight:"600",borderRadius:"8px",transition:"all 0.2s",flex:1,textAlign:"center"},children:"🎨 Flowchart Editor"}),n.jsx("button",{onClick:()=>{w("json"),d(VA())},style:{padding:"12px 24px",border:"none",backgroundColor:m==="json"?O.nodeFill:"transparent",color:m==="json"?"white":O.text,cursor:"pointer",fontSize:"14px",fontWeight:"600",borderRadius:"8px",transition:"all 0.2s",flex:1,textAlign:"center"},children:"📝 JSON Editor"})]}),m==="editor"?n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px",backgroundColor:O.panel,borderRadius:"12px",border:`1px solid ${O.border}`,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"},children:[n.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[[{tool:"rectangle",icon:"⬜",label:"Process"},{tool:"diamond",icon:"◆",label:"Diamond"},{tool:"rhombus",icon:"🔷",label:"Slanted"},{tool:"circle",icon:"●",label:"Circle"},{tool:"oval",icon:"⬭",label:"Oval"}].map(({tool:f,icon:b,label:C})=>n.jsxs("button",{onClick:()=>E(f),style:{padding:"10px 16px",backgroundColor:v===f?O.nodeFill:O.background,color:v===f?"white":O.text,border:`1px solid ${O.border}`,borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"6px"},children:[n.jsx("span",{style:{fontSize:"16px"},children:b}),C]},f)),n.jsxs("button",{onClick:Me,style:{padding:"10px 16px",backgroundColor:V?O.nodeFill:O.background,color:V?"white":O.text,border:`1px solid ${O.border}`,borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"500",transition:"all 0.2s",display:"flex",alignItems:"center",gap:"6px"},children:[n.jsx("span",{style:{fontSize:"16px"},children:"→"}),V?uA?"Select Target":"Select Source":"Connect"]})]}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[M&&n.jsx("button",{onClick:BA,style:{padding:"8px 12px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"🗑 Delete Node"}),_&&n.jsx("button",{onClick:NA,style:{padding:"8px 12px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"🗑 Delete Edge"}),Q&&n.jsx("button",{onClick:JA,style:{padding:"8px 12px",backgroundColor:"#ef4444",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"🗑 Delete Control Point"})]})]}),n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center",flexWrap:"wrap"},children:[n.jsx("button",{onClick:re,style:{padding:"8px 16px",backgroundColor:"#f59e0b",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"📸 Export PNG"}),n.jsx("button",{onClick:()=>navigator.clipboard.writeText(VA()),style:{padding:"8px 16px",backgroundColor:"#a855f7",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"📋 Copy JSON"}),n.jsx("button",{onClick:WA,style:{padding:"8px 16px",backgroundColor:"#10b981",color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},children:"📥 Export JSON"})]})]}),(v||V)&&n.jsxs("div",{style:{padding:"16px",backgroundColor:"rgba(100, 108, 255, 0.1)",border:`1px solid ${O.nodeFill}`,borderRadius:"8px",color:O.nodeFill,textAlign:"center",fontSize:"14px",fontWeight:"500"},children:[V?uA?`🎯 Click on target node to connect from "${uA.text}"`:"🎯 Click on a node to start connection":`🎨 Click on canvas to place a ${v}`,n.jsx("br",{}),UA&&"🔧 Ctrl pressed: Click on node edge to start connection from specific point",D&&"➕ Shift pressed: Click on edge to add control point"]}),n.jsxs("div",{ref:I,onClick:T,style:{height:"700px",border:`2px dashed ${O.border}`,borderRadius:"12px",backgroundColor:O.background,display:"flex",justifyContent:"center",alignItems:"center",position:"relative",overflow:"hidden",cursor:v?"crosshair":"default",boxShadow:"inset 0 2px 4px rgba(0, 0, 0, 0.1)"},children:[r.length===0&&!v&&n.jsxs("div",{style:{textAlign:"center",color:O.secondaryText,pointerEvents:"none"},children:[n.jsx("div",{style:{fontSize:"48px",marginBottom:"16px"},children:"🎨"}),n.jsx("h3",{style:{margin:"0 0 8px 0",fontWeight:"600"},children:"Start Building Your Flowchart"}),n.jsx("p",{style:{margin:"0",fontSize:"14px"},children:"Select a tool from the toolbar above to begin"})]}),n.jsxs("div",{style:{position:"absolute",transform:`scale(${i.zoom}) translate(${i.pan.x}px, ${i.pan.y}px)`,transformOrigin:"0 0",width:"100%",height:"100%"},children:[s.map(S),r.map(g)]})]}),n.jsxs("div",{style:{padding:"16px",backgroundColor:O.panel,borderRadius:"8px",border:`1px solid ${O.border}`,fontSize:"13px",color:O.secondaryText,textAlign:"center",lineHeight:"1.6"},children:["💡 ",n.jsx("strong",{children:"Pro Tips:"})," Single click to select • Double click to edit text • Drag nodes to move • Use Connect tool for arrows • Ctrl+Click on node to start connection from specific point • Shift+Click on edge to add control point • Press Delete to remove selected items • Use arrow keys to move control points"]})]}):n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[n.jsxs("div",{style:{border:`1px solid ${O.border}`,borderRadius:"12px",padding:"20px",backgroundColor:O.panel,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"16px",color:O.text,fontSize:"1.2rem",fontWeight:"600"},children:"📥 Import JSON"}),n.jsx("textarea",{value:o,onChange:f=>d(f.target.value),placeholder:"Paste your flowchart JSON here...",style:{width:"100%",minHeight:"400px",padding:"16px",border:`1px solid ${O.border}`,borderRadius:"8px",fontFamily:'"Fira Code", "Cascadia Code", "SF Mono", Monaco, "Inconsolata", "Roboto Mono", monospace',fontSize:"13px",lineHeight:"1.5",marginBottom:"16px",backgroundColor:O.background,color:O.text,resize:"vertical",outline:"none",transition:"border-color 0.2s"}}),n.jsxs("div",{style:{display:"flex",gap:"12px"},children:[n.jsx("button",{onClick:ae,style:{padding:"12px 20px",backgroundColor:"#10b981",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",flex:1,fontSize:"14px",fontWeight:"600",transition:"all 0.2s"},children:"📥 Import JSON"}),n.jsx("button",{onClick:()=>q.current.click(),style:{padding:"12px 20px",backgroundColor:O.nodeFill,color:"white",border:"none",borderRadius:"8px",cursor:"pointer",flex:1,fontSize:"14px",fontWeight:"600",transition:"all 0.2s"},children:"📁 Load File"}),n.jsx("input",{type:"file",ref:q,onChange:PA,accept:".json",style:{display:"none"}})]})]}),n.jsxs("div",{style:{border:`1px solid ${O.border}`,borderRadius:"12px",padding:"20px",backgroundColor:O.panel,boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"16px",color:O.text,fontSize:"1.2rem",fontWeight:"600"},children:"📤 Current Flowchart JSON"}),n.jsx("pre",{style:{backgroundColor:O.background,padding:"16px",border:`1px solid ${O.border}`,borderRadius:"8px",overflow:"auto",maxHeight:"450px",fontFamily:'"Fira Code", "Cascadia Code", "SF Mono", Monaco, "Inconsolata", "Roboto Mono", monospace',fontSize:"12px",lineHeight:"1.5",color:O.text,whiteSpace:"pre-wrap",wordWrap:"break-word",margin:0},children:VA()})]})]}),tA&&n.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.6)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e4,backdropFilter:"blur(4px)"},children:n.jsxs("div",{style:{backgroundColor:O.panel,padding:"24px",borderRadius:"12px",width:"400px",border:`1px solid ${O.nodeFill}`,boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.3)"},children:[n.jsx("h3",{style:{marginTop:0,marginBottom:"8px",color:O.text,fontSize:"1.3rem",fontWeight:"600"},children:"🏷️ Add Connection Label"}),n.jsx("p",{style:{color:O.secondaryText,marginBottom:"20px",fontSize:"14px",lineHeight:"1.5"},children:'Decision nodes should have labeled connections. Enter a label like "Yes", "No", or a condition:'}),n.jsx("input",{type:"text",value:KA,onChange:f=>TA(f.target.value),placeholder:"e.g., Yes, No, True, False...",style:{width:"100%",padding:"12px",marginBottom:"20px",backgroundColor:O.background,border:`1px solid ${O.border}`,color:O.text,borderRadius:"8px",fontSize:"14px",outline:"none",transition:"border-color 0.2s"},autoFocus:!0,onKeyPress:f=>f.key==="Enter"&&je()}),n.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[n.jsx("button",{onClick:()=>{IA(!1),TA(""),EA(null),iA(!1),E(null)},style:{padding:"10px 16px",backgroundColor:O.background,color:O.text,border:`1px solid ${O.border}`,borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"500",transition:"all 0.2s"},children:"Cancel"}),n.jsx("button",{onClick:je,style:{padding:"10px 16px",backgroundColor:O.nodeFill,color:"white",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"14px",fontWeight:"600",transition:"all 0.2s"},children:"Add Label"})]})]})})]})})},Uw=({ganttCharts:i,onCreateGanttChart:r,onLoadGanttChart:s,onDeleteGanttChart:o})=>{const[d,u]=k.useState(!1);return n.jsxs("div",{className:"gantt-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(PB,{size:48})}),n.jsx("h2",{children:"Gantt Chart Planner"}),n.jsx("p",{children:"Plan and visualize project timelines with interactive Gantt charts"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Gantt Chart"]})}),i.length>0&&n.jsxs("div",{className:"gantt-list",children:[n.jsx("h3",{children:"Your Gantt Charts"}),i.map(h=>n.jsxs("div",{className:"gantt-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"gantt-card-content",children:[n.jsx("div",{className:"gantt-card-name",children:h.name}),n.jsxs("div",{className:"gantt-card-meta",children:[n.jsxs("span",{children:[n.jsx(WB,{size:14})," ",new Date(h.createdAt).toLocaleDateString()]}),n.jsxs("span",{children:[h.tasks?.length||0," tasks"]})]})]}),n.jsxs("div",{className:"gantt-card-actions",children:[n.jsx("button",{onClick:B=>{B.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Fn,{size:16})}),n.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this Gantt chart?")&&o(h.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Gantt Chart"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Project Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Website Redesign Project",id:"ganttName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("ganttName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Gantt Chart"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
***************************************************************************** */var kd=function(i,r){return kd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,o){s.__proto__=o}||function(s,o){for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])},kd(i,r)};function qt(i,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");kd(i,r);function s(){this.constructor=i}i.prototype=r===null?Object.create(r):(s.prototype=r.prototype,new s)}var Md=function(){return Md=Object.assign||function(r){for(var s,o=1,d=arguments.length;o<d;o++){s=arguments[o];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(r[u]=s[u])}return r},Md.apply(this,arguments)};function mt(i,r,s,o){function d(u){return u instanceof s?u:new s(function(h){h(u)})}return new(s||(s=Promise))(function(u,h){function B(v){try{w(o.next(v))}catch(E){h(E)}}function m(v){try{w(o.throw(v))}catch(E){h(E)}}function w(v){v.done?u(v.value):d(v.value).then(B,m)}w((o=o.apply(i,[])).next())})}function gt(i,r){var s={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},o,d,u,h;return h={next:B(0),throw:B(1),return:B(2)},typeof Symbol=="function"&&(h[Symbol.iterator]=function(){return this}),h;function B(w){return function(v){return m([w,v])}}function m(w){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,d&&(u=w[0]&2?d.return:w[0]?d.throw||((u=d.return)&&u.call(d),0):d.next)&&!(u=u.call(d,w[1])).done)return u;switch(d=0,u&&(w=[w[0]&2,u.value]),w[0]){case 0:case 1:u=w;break;case 4:return s.label++,{value:w[1],done:!1};case 5:s.label++,d=w[1],w=[0];continue;case 7:w=s.ops.pop(),s.trys.pop();continue;default:if(u=s.trys,!(u=u.length>0&&u[u.length-1])&&(w[0]===6||w[0]===2)){s=0;continue}if(w[0]===3&&(!u||w[1]>u[0]&&w[1]<u[3])){s.label=w[1];break}if(w[0]===6&&s.label<u[1]){s.label=u[1],u=w;break}if(u&&s.label<u[2]){s.label=u[2],s.ops.push(w);break}u[2]&&s.ops.pop(),s.trys.pop();continue}w=r.call(i,s)}catch(v){w=[6,v],d=0}finally{o=u=0}if(w[0]&5)throw w[1];return{value:w[0]?w[1]:void 0,done:!0}}}function is(i,r,s){if(arguments.length===2)for(var o=0,d=r.length,u;o<d;o++)(u||!(o in r))&&(u||(u=Array.prototype.slice.call(r,0,o)),u[o]=r[o]);return i.concat(u||r)}var Qn=function(){function i(r,s,o,d){this.left=r,this.top=s,this.width=o,this.height=d}return i.prototype.add=function(r,s,o,d){return new i(this.left+r,this.top+s,this.width+o,this.height+d)},i.fromClientRect=function(r,s){return new i(s.left+r.windowBounds.left,s.top+r.windowBounds.top,s.width,s.height)},i.fromDOMRectList=function(r,s){var o=Array.from(s).find(function(d){return d.width!==0});return o?new i(o.left+r.windowBounds.left,o.top+r.windowBounds.top,o.width,o.height):i.EMPTY},i.EMPTY=new i(0,0,0,0),i}(),_s=function(i,r){return Qn.fromClientRect(i,r.getBoundingClientRect())},Fw=function(i){var r=i.body,s=i.documentElement;if(!r||!s)throw new Error("Unable to get document size");var o=Math.max(Math.max(r.scrollWidth,s.scrollWidth),Math.max(r.offsetWidth,s.offsetWidth),Math.max(r.clientWidth,s.clientWidth)),d=Math.max(Math.max(r.scrollHeight,s.scrollHeight),Math.max(r.offsetHeight,s.offsetHeight),Math.max(r.clientHeight,s.clientHeight));return new Qn(0,0,o,d)},Gs=function(i){for(var r=[],s=0,o=i.length;s<o;){var d=i.charCodeAt(s++);if(d>=55296&&d<=56319&&s<o){var u=i.charCodeAt(s++);(u&64512)===56320?r.push(((d&1023)<<10)+(u&1023)+65536):(r.push(d),s--)}else r.push(d)}return r},qe=function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];if(String.fromCodePoint)return String.fromCodePoint.apply(String,i);var s=i.length;if(!s)return"";for(var o=[],d=-1,u="";++d<s;){var h=i[d];h<=65535?o.push(h):(h-=65536,o.push((h>>10)+55296,h%1024+56320)),(d+1===s||o.length>16384)&&(u+=String.fromCharCode.apply(String,o),o.length=0)}return u},rp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ew=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var os=0;os<rp.length;os++)Ew[rp.charCodeAt(os)]=os;var ip="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Si=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ss=0;ss<ip.length;ss++)Si[ip.charCodeAt(ss)]=ss;var Sw=function(i){var r=i.length*.75,s=i.length,o,d=0,u,h,B,m;i[i.length-1]==="="&&(r--,i[i.length-2]==="="&&r--);var w=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(r):new Array(r),v=Array.isArray(w)?w:new Uint8Array(w);for(o=0;o<s;o+=4)u=Si[i.charCodeAt(o)],h=Si[i.charCodeAt(o+1)],B=Si[i.charCodeAt(o+2)],m=Si[i.charCodeAt(o+3)],v[d++]=u<<2|h>>4,v[d++]=(h&15)<<4|B>>2,v[d++]=(B&3)<<6|m&63;return w},jw=function(i){for(var r=i.length,s=[],o=0;o<r;o+=2)s.push(i[o+1]<<8|i[o]);return s},Hw=function(i){for(var r=i.length,s=[],o=0;o<r;o+=4)s.push(i[o+3]<<24|i[o+2]<<16|i[o+1]<<8|i[o]);return s},Ea=5,ru=11,dd=2,Nw=ru-Ea,f0=65536>>Ea,kw=1<<Ea,ud=kw-1,Mw=1024>>Ea,Dw=f0+Mw,Tw=Dw,Iw=32,Lw=Tw+Iw,Ow=65536>>ru,Kw=1<<Nw,Rw=Kw-1,op=function(i,r,s){return i.slice?i.slice(r,s):new Uint16Array(Array.prototype.slice.call(i,r,s))},zw=function(i,r,s){return i.slice?i.slice(r,s):new Uint32Array(Array.prototype.slice.call(i,r,s))},_w=function(i,r){var s=Sw(i),o=Array.isArray(s)?Hw(s):new Uint32Array(s),d=Array.isArray(s)?jw(s):new Uint16Array(s),u=24,h=op(d,u/2,o[4]/2),B=o[5]===2?op(d,(u+o[4])/2):zw(o,Math.ceil((u+o[4])/4));return new Gw(o[0],o[1],o[2],o[3],h,B)},Gw=function(){function i(r,s,o,d,u,h){this.initialValue=r,this.errorValue=s,this.highStart=o,this.highValueIndex=d,this.index=u,this.data=h}return i.prototype.get=function(r){var s;if(r>=0){if(r<55296||r>56319&&r<=65535)return s=this.index[r>>Ea],s=(s<<dd)+(r&ud),this.data[s];if(r<=65535)return s=this.index[f0+(r-55296>>Ea)],s=(s<<dd)+(r&ud),this.data[s];if(r<this.highStart)return s=Lw-Ow+(r>>ru),s=this.index[s],s+=r>>Ea&Rw,s=this.index[s],s=(s<<dd)+(r&ud),this.data[s];if(r<=1114111)return this.data[this.highValueIndex]}return this.errorValue},i}(),sp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Vw=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var ls=0;ls<sp.length;ls++)Vw[sp.charCodeAt(ls)]=ls;var Yw="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",lp=50,Xw=1,h0=2,g0=3,Jw=4,Zw=5,cp=7,p0=8,dp=9,Aa=10,Dd=11,up=12,Td=13,qw=14,ji=15,Id=16,cs=17,vi=18,Ww=19,fp=20,Ld=21,Ci=22,fd=23,fr=24,Nt=25,Hi=26,Ni=27,hr=28,$w=29,Ua=30,Pw=31,ds=32,us=33,Od=34,Kd=35,Rd=36,zi=37,zd=38,Ss=39,js=40,hd=41,x0=42,Ay=43,ey=[9001,65288],m0="!",fe="×",fs="÷",_d=_w(Yw),yn=[Ua,Rd],Gd=[Xw,h0,g0,Zw],B0=[Aa,p0],hp=[Ni,Hi],ty=Gd.concat(B0),gp=[zd,Ss,js,Od,Kd],ny=[ji,Td],ay=function(i,r){r===void 0&&(r="strict");var s=[],o=[],d=[];return i.forEach(function(u,h){var B=_d.get(u);if(B>lp?(d.push(!0),B-=lp):d.push(!1),["normal","auto","loose"].indexOf(r)!==-1&&[8208,8211,12316,12448].indexOf(u)!==-1)return o.push(h),s.push(Id);if(B===Jw||B===Dd){if(h===0)return o.push(h),s.push(Ua);var m=s[h-1];return ty.indexOf(m)===-1?(o.push(o[h-1]),s.push(m)):(o.push(h),s.push(Ua))}if(o.push(h),B===Pw)return s.push(r==="strict"?Ld:zi);if(B===x0||B===$w)return s.push(Ua);if(B===Ay)return u>=131072&&u<=196605||u>=196608&&u<=262141?s.push(zi):s.push(Ua);s.push(B)}),[o,s,d]},gd=function(i,r,s,o){var d=o[s];if(Array.isArray(i)?i.indexOf(d)!==-1:i===d)for(var u=s;u<=o.length;){u++;var h=o[u];if(h===r)return!0;if(h!==Aa)break}if(d===Aa)for(var u=s;u>0;){u--;var B=o[u];if(Array.isArray(i)?i.indexOf(B)!==-1:i===B)for(var m=s;m<=o.length;){m++;var h=o[m];if(h===r)return!0;if(h!==Aa)break}if(B!==Aa)break}return!1},pp=function(i,r){for(var s=i;s>=0;){var o=r[s];if(o===Aa)s--;else return o}return 0},ry=function(i,r,s,o,d){if(s[o]===0)return fe;var u=o-1;if(Array.isArray(d)&&d[u]===!0)return fe;var h=u-1,B=u+1,m=r[u],w=h>=0?r[h]:0,v=r[B];if(m===h0&&v===g0)return fe;if(Gd.indexOf(m)!==-1)return m0;if(Gd.indexOf(v)!==-1||B0.indexOf(v)!==-1)return fe;if(pp(u,r)===p0)return fs;if(_d.get(i[u])===Dd||(m===ds||m===us)&&_d.get(i[B])===Dd||m===cp||v===cp||m===dp||[Aa,Td,ji].indexOf(m)===-1&&v===dp||[cs,vi,Ww,fr,hr].indexOf(v)!==-1||pp(u,r)===Ci||gd(fd,Ci,u,r)||gd([cs,vi],Ld,u,r)||gd(up,up,u,r))return fe;if(m===Aa)return fs;if(m===fd||v===fd)return fe;if(v===Id||m===Id)return fs;if([Td,ji,Ld].indexOf(v)!==-1||m===qw||w===Rd&&ny.indexOf(m)!==-1||m===hr&&v===Rd||v===fp||yn.indexOf(v)!==-1&&m===Nt||yn.indexOf(m)!==-1&&v===Nt||m===Ni&&[zi,ds,us].indexOf(v)!==-1||[zi,ds,us].indexOf(m)!==-1&&v===Hi||yn.indexOf(m)!==-1&&hp.indexOf(v)!==-1||hp.indexOf(m)!==-1&&yn.indexOf(v)!==-1||[Ni,Hi].indexOf(m)!==-1&&(v===Nt||[Ci,ji].indexOf(v)!==-1&&r[B+1]===Nt)||[Ci,ji].indexOf(m)!==-1&&v===Nt||m===Nt&&[Nt,hr,fr].indexOf(v)!==-1)return fe;if([Nt,hr,fr,cs,vi].indexOf(v)!==-1)for(var E=u;E>=0;){var M=r[E];if(M===Nt)return fe;if([hr,fr].indexOf(M)!==-1)E--;else break}if([Ni,Hi].indexOf(v)!==-1)for(var E=[cs,vi].indexOf(m)!==-1?h:u;E>=0;){var M=r[E];if(M===Nt)return fe;if([hr,fr].indexOf(M)!==-1)E--;else break}if(zd===m&&[zd,Ss,Od,Kd].indexOf(v)!==-1||[Ss,Od].indexOf(m)!==-1&&[Ss,js].indexOf(v)!==-1||[js,Kd].indexOf(m)!==-1&&v===js||gp.indexOf(m)!==-1&&[fp,Hi].indexOf(v)!==-1||gp.indexOf(v)!==-1&&m===Ni||yn.indexOf(m)!==-1&&yn.indexOf(v)!==-1||m===fr&&yn.indexOf(v)!==-1||yn.concat(Nt).indexOf(m)!==-1&&v===Ci&&ey.indexOf(i[B])===-1||yn.concat(Nt).indexOf(v)!==-1&&m===vi)return fe;if(m===hd&&v===hd){for(var aA=s[u],_=1;aA>0&&(aA--,r[aA]===hd);)_++;if(_%2!==0)return fe}return m===ds&&v===us?fe:fs},iy=function(i,r){r||(r={lineBreak:"normal",wordBreak:"normal"});var s=ay(i,r.lineBreak),o=s[0],d=s[1],u=s[2];(r.wordBreak==="break-all"||r.wordBreak==="break-word")&&(d=d.map(function(B){return[Nt,Ua,x0].indexOf(B)!==-1?zi:B}));var h=r.wordBreak==="keep-all"?u.map(function(B,m){return B&&i[m]>=19968&&i[m]<=40959}):void 0;return[o,d,h]},oy=function(){function i(r,s,o,d){this.codePoints=r,this.required=s===m0,this.start=o,this.end=d}return i.prototype.slice=function(){return qe.apply(void 0,this.codePoints.slice(this.start,this.end))},i}(),sy=function(i,r){var s=Gs(i),o=iy(s,r),d=o[0],u=o[1],h=o[2],B=s.length,m=0,w=0;return{next:function(){if(w>=B)return{done:!0,value:null};for(var v=fe;w<B&&(v=ry(s,u,d,++w,h))===fe;);if(v!==fe||w===B){var E=new oy(s,v,m,w);return m=w,{value:E,done:!1}}return{done:!0,value:null}}}},ly=1,cy=2,Yi=4,xp=8,ks=10,mp=47,Ti=92,dy=9,uy=32,hs=34,Qi=61,fy=35,hy=36,gy=37,gs=39,ps=40,Ui=41,py=95,vt=45,xy=33,my=60,By=62,by=64,wy=91,yy=93,vy=61,Cy=123,xs=63,Qy=125,Bp=124,Uy=126,Fy=128,bp=65533,pd=42,Fa=43,Ey=44,Sy=58,jy=59,_i=46,Hy=0,Ny=8,ky=11,My=14,Dy=31,Ty=127,tn=-1,b0=48,w0=97,y0=101,Iy=102,Ly=117,Oy=122,v0=65,C0=69,Q0=70,Ky=85,Ry=90,pt=function(i){return i>=b0&&i<=57},zy=function(i){return i>=55296&&i<=57343},gr=function(i){return pt(i)||i>=v0&&i<=Q0||i>=w0&&i<=Iy},_y=function(i){return i>=w0&&i<=Oy},Gy=function(i){return i>=v0&&i<=Ry},Vy=function(i){return _y(i)||Gy(i)},Yy=function(i){return i>=Fy},ms=function(i){return i===ks||i===dy||i===uy},Ms=function(i){return Vy(i)||Yy(i)||i===py},wp=function(i){return Ms(i)||pt(i)||i===vt},Xy=function(i){return i>=Hy&&i<=Ny||i===ky||i>=My&&i<=Dy||i===Ty},Pn=function(i,r){return i!==Ti?!1:r!==ks},Bs=function(i,r,s){return i===vt?Ms(r)||Pn(r,s):Ms(i)?!0:!!(i===Ti&&Pn(i,r))},xd=function(i,r,s){return i===Fa||i===vt?pt(r)?!0:r===_i&&pt(s):pt(i===_i?r:i)},Jy=function(i){var r=0,s=1;(i[r]===Fa||i[r]===vt)&&(i[r]===vt&&(s=-1),r++);for(var o=[];pt(i[r]);)o.push(i[r++]);var d=o.length?parseInt(qe.apply(void 0,o),10):0;i[r]===_i&&r++;for(var u=[];pt(i[r]);)u.push(i[r++]);var h=u.length,B=h?parseInt(qe.apply(void 0,u),10):0;(i[r]===C0||i[r]===y0)&&r++;var m=1;(i[r]===Fa||i[r]===vt)&&(i[r]===vt&&(m=-1),r++);for(var w=[];pt(i[r]);)w.push(i[r++]);var v=w.length?parseInt(qe.apply(void 0,w),10):0;return s*(d+B*Math.pow(10,-h))*Math.pow(10,m*v)},Zy={type:2},qy={type:3},Wy={type:4},$y={type:13},Py={type:8},A1={type:21},e1={type:9},t1={type:10},n1={type:11},a1={type:12},r1={type:14},bs={type:23},i1={type:1},o1={type:25},s1={type:24},l1={type:26},c1={type:27},d1={type:28},u1={type:29},f1={type:31},Vd={type:32},U0=function(){function i(){this._value=[]}return i.prototype.write=function(r){this._value=this._value.concat(Gs(r))},i.prototype.read=function(){for(var r=[],s=this.consumeToken();s!==Vd;)r.push(s),s=this.consumeToken();return r},i.prototype.consumeToken=function(){var r=this.consumeCodePoint();switch(r){case hs:return this.consumeStringToken(hs);case fy:var s=this.peekCodePoint(0),o=this.peekCodePoint(1),d=this.peekCodePoint(2);if(wp(s)||Pn(o,d)){var u=Bs(s,o,d)?cy:ly,h=this.consumeName();return{type:5,value:h,flags:u}}break;case hy:if(this.peekCodePoint(0)===Qi)return this.consumeCodePoint(),$y;break;case gs:return this.consumeStringToken(gs);case ps:return Zy;case Ui:return qy;case pd:if(this.peekCodePoint(0)===Qi)return this.consumeCodePoint(),r1;break;case Fa:if(xd(r,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(r),this.consumeNumericToken();break;case Ey:return Wy;case vt:var B=r,m=this.peekCodePoint(0),w=this.peekCodePoint(1);if(xd(B,m,w))return this.reconsumeCodePoint(r),this.consumeNumericToken();if(Bs(B,m,w))return this.reconsumeCodePoint(r),this.consumeIdentLikeToken();if(m===vt&&w===By)return this.consumeCodePoint(),this.consumeCodePoint(),s1;break;case _i:if(xd(r,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(r),this.consumeNumericToken();break;case mp:if(this.peekCodePoint(0)===pd)for(this.consumeCodePoint();;){var v=this.consumeCodePoint();if(v===pd&&(v=this.consumeCodePoint(),v===mp))return this.consumeToken();if(v===tn)return this.consumeToken()}break;case Sy:return l1;case jy:return c1;case my:if(this.peekCodePoint(0)===xy&&this.peekCodePoint(1)===vt&&this.peekCodePoint(2)===vt)return this.consumeCodePoint(),this.consumeCodePoint(),o1;break;case by:var E=this.peekCodePoint(0),M=this.peekCodePoint(1),aA=this.peekCodePoint(2);if(Bs(E,M,aA)){var h=this.consumeName();return{type:7,value:h}}break;case wy:return d1;case Ti:if(Pn(r,this.peekCodePoint(0)))return this.reconsumeCodePoint(r),this.consumeIdentLikeToken();break;case yy:return u1;case vy:if(this.peekCodePoint(0)===Qi)return this.consumeCodePoint(),Py;break;case Cy:return n1;case Qy:return a1;case Ly:case Ky:var _=this.peekCodePoint(0),lA=this.peekCodePoint(1);return _===Fa&&(gr(lA)||lA===xs)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(r),this.consumeIdentLikeToken();case Bp:if(this.peekCodePoint(0)===Qi)return this.consumeCodePoint(),e1;if(this.peekCodePoint(0)===Bp)return this.consumeCodePoint(),A1;break;case Uy:if(this.peekCodePoint(0)===Qi)return this.consumeCodePoint(),t1;break;case tn:return Vd}return ms(r)?(this.consumeWhiteSpace(),f1):pt(r)?(this.reconsumeCodePoint(r),this.consumeNumericToken()):Ms(r)?(this.reconsumeCodePoint(r),this.consumeIdentLikeToken()):{type:6,value:qe(r)}},i.prototype.consumeCodePoint=function(){var r=this._value.shift();return typeof r>"u"?-1:r},i.prototype.reconsumeCodePoint=function(r){this._value.unshift(r)},i.prototype.peekCodePoint=function(r){return r>=this._value.length?-1:this._value[r]},i.prototype.consumeUnicodeRangeToken=function(){for(var r=[],s=this.consumeCodePoint();gr(s)&&r.length<6;)r.push(s),s=this.consumeCodePoint();for(var o=!1;s===xs&&r.length<6;)r.push(s),s=this.consumeCodePoint(),o=!0;if(o){var d=parseInt(qe.apply(void 0,r.map(function(m){return m===xs?b0:m})),16),u=parseInt(qe.apply(void 0,r.map(function(m){return m===xs?Q0:m})),16);return{type:30,start:d,end:u}}var h=parseInt(qe.apply(void 0,r),16);if(this.peekCodePoint(0)===vt&&gr(this.peekCodePoint(1))){this.consumeCodePoint(),s=this.consumeCodePoint();for(var B=[];gr(s)&&B.length<6;)B.push(s),s=this.consumeCodePoint();var u=parseInt(qe.apply(void 0,B),16);return{type:30,start:h,end:u}}else return{type:30,start:h,end:h}},i.prototype.consumeIdentLikeToken=function(){var r=this.consumeName();return r.toLowerCase()==="url"&&this.peekCodePoint(0)===ps?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===ps?(this.consumeCodePoint(),{type:19,value:r}):{type:20,value:r}},i.prototype.consumeUrlToken=function(){var r=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===tn)return{type:22,value:""};var s=this.peekCodePoint(0);if(s===gs||s===hs){var o=this.consumeStringToken(this.consumeCodePoint());return o.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===tn||this.peekCodePoint(0)===Ui)?(this.consumeCodePoint(),{type:22,value:o.value}):(this.consumeBadUrlRemnants(),bs)}for(;;){var d=this.consumeCodePoint();if(d===tn||d===Ui)return{type:22,value:qe.apply(void 0,r)};if(ms(d))return this.consumeWhiteSpace(),this.peekCodePoint(0)===tn||this.peekCodePoint(0)===Ui?(this.consumeCodePoint(),{type:22,value:qe.apply(void 0,r)}):(this.consumeBadUrlRemnants(),bs);if(d===hs||d===gs||d===ps||Xy(d))return this.consumeBadUrlRemnants(),bs;if(d===Ti)if(Pn(d,this.peekCodePoint(0)))r.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),bs;else r.push(d)}},i.prototype.consumeWhiteSpace=function(){for(;ms(this.peekCodePoint(0));)this.consumeCodePoint()},i.prototype.consumeBadUrlRemnants=function(){for(;;){var r=this.consumeCodePoint();if(r===Ui||r===tn)return;Pn(r,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},i.prototype.consumeStringSlice=function(r){for(var s=5e4,o="";r>0;){var d=Math.min(s,r);o+=qe.apply(void 0,this._value.splice(0,d)),r-=d}return this._value.shift(),o},i.prototype.consumeStringToken=function(r){var s="",o=0;do{var d=this._value[o];if(d===tn||d===void 0||d===r)return s+=this.consumeStringSlice(o),{type:0,value:s};if(d===ks)return this._value.splice(0,o),i1;if(d===Ti){var u=this._value[o+1];u!==tn&&u!==void 0&&(u===ks?(s+=this.consumeStringSlice(o),o=-1,this._value.shift()):Pn(d,u)&&(s+=this.consumeStringSlice(o),s+=qe(this.consumeEscapedCodePoint()),o=-1))}o++}while(!0)},i.prototype.consumeNumber=function(){var r=[],s=Yi,o=this.peekCodePoint(0);for((o===Fa||o===vt)&&r.push(this.consumeCodePoint());pt(this.peekCodePoint(0));)r.push(this.consumeCodePoint());o=this.peekCodePoint(0);var d=this.peekCodePoint(1);if(o===_i&&pt(d))for(r.push(this.consumeCodePoint(),this.consumeCodePoint()),s=xp;pt(this.peekCodePoint(0));)r.push(this.consumeCodePoint());o=this.peekCodePoint(0),d=this.peekCodePoint(1);var u=this.peekCodePoint(2);if((o===C0||o===y0)&&((d===Fa||d===vt)&&pt(u)||pt(d)))for(r.push(this.consumeCodePoint(),this.consumeCodePoint()),s=xp;pt(this.peekCodePoint(0));)r.push(this.consumeCodePoint());return[Jy(r),s]},i.prototype.consumeNumericToken=function(){var r=this.consumeNumber(),s=r[0],o=r[1],d=this.peekCodePoint(0),u=this.peekCodePoint(1),h=this.peekCodePoint(2);if(Bs(d,u,h)){var B=this.consumeName();return{type:15,number:s,flags:o,unit:B}}return d===gy?(this.consumeCodePoint(),{type:16,number:s,flags:o}):{type:17,number:s,flags:o}},i.prototype.consumeEscapedCodePoint=function(){var r=this.consumeCodePoint();if(gr(r)){for(var s=qe(r);gr(this.peekCodePoint(0))&&s.length<6;)s+=qe(this.consumeCodePoint());ms(this.peekCodePoint(0))&&this.consumeCodePoint();var o=parseInt(s,16);return o===0||zy(o)||o>1114111?bp:o}return r===tn?bp:r},i.prototype.consumeName=function(){for(var r="";;){var s=this.consumeCodePoint();if(wp(s))r+=qe(s);else if(Pn(s,this.peekCodePoint(0)))r+=qe(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(s),r}},i}(),F0=function(){function i(r){this._tokens=r}return i.create=function(r){var s=new U0;return s.write(r),new i(s.read())},i.parseValue=function(r){return i.create(r).parseComponentValue()},i.parseValues=function(r){return i.create(r).parseComponentValues()},i.prototype.parseComponentValue=function(){for(var r=this.consumeToken();r.type===31;)r=this.consumeToken();if(r.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(r);var s=this.consumeComponentValue();do r=this.consumeToken();while(r.type===31);if(r.type===32)return s;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},i.prototype.parseComponentValues=function(){for(var r=[];;){var s=this.consumeComponentValue();if(s.type===32)return r;r.push(s),r.push()}},i.prototype.consumeComponentValue=function(){var r=this.consumeToken();switch(r.type){case 11:case 28:case 2:return this.consumeSimpleBlock(r.type);case 19:return this.consumeFunction(r)}return r},i.prototype.consumeSimpleBlock=function(r){for(var s={type:r,values:[]},o=this.consumeToken();;){if(o.type===32||g1(o,r))return s;this.reconsumeToken(o),s.values.push(this.consumeComponentValue()),o=this.consumeToken()}},i.prototype.consumeFunction=function(r){for(var s={name:r.value,values:[],type:18};;){var o=this.consumeToken();if(o.type===32||o.type===3)return s;this.reconsumeToken(o),s.values.push(this.consumeComponentValue())}},i.prototype.consumeToken=function(){var r=this._tokens.shift();return typeof r>"u"?Vd:r},i.prototype.reconsumeToken=function(r){this._tokens.unshift(r)},i}(),Xi=function(i){return i.type===15},Ur=function(i){return i.type===17},Ee=function(i){return i.type===20},h1=function(i){return i.type===0},Yd=function(i,r){return Ee(i)&&i.value===r},E0=function(i){return i.type!==31},vr=function(i){return i.type!==31&&i.type!==4},an=function(i){var r=[],s=[];return i.forEach(function(o){if(o.type===4){if(s.length===0)throw new Error("Error parsing function args, zero tokens for arg");r.push(s),s=[];return}o.type!==31&&s.push(o)}),s.length&&r.push(s),r},g1=function(i,r){return r===11&&i.type===12||r===28&&i.type===29?!0:r===2&&i.type===3},ia=function(i){return i.type===17||i.type===15},At=function(i){return i.type===16||ia(i)},S0=function(i){return i.length>1?[i[0],i[1]]:[i[0]]},ut={type:17,number:0,flags:Yi},iu={type:16,number:50,flags:Yi},ea={type:16,number:100,flags:Yi},ki=function(i,r,s){var o=i[0],d=i[1];return[ke(o,r),ke(typeof d<"u"?d:o,s)]},ke=function(i,r){if(i.type===16)return i.number/100*r;if(Xi(i))switch(i.unit){case"rem":case"em":return 16*i.number;case"px":default:return i.number}return i.number},j0="deg",H0="grad",N0="rad",k0="turn",Vs={name:"angle",parse:function(i,r){if(r.type===15)switch(r.unit){case j0:return Math.PI*r.number/180;case H0:return Math.PI/200*r.number;case N0:return r.number;case k0:return Math.PI*2*r.number}throw new Error("Unsupported angle type")}},M0=function(i){return i.type===15&&(i.unit===j0||i.unit===H0||i.unit===N0||i.unit===k0)},D0=function(i){var r=i.filter(Ee).map(function(s){return s.value}).join(" ");switch(r){case"to bottom right":case"to right bottom":case"left top":case"top left":return[ut,ut];case"to top":case"bottom":return Gt(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[ut,ea];case"to right":case"left":return Gt(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[ea,ea];case"to bottom":case"top":return Gt(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[ea,ut];case"to left":case"right":return Gt(270)}return 0},Gt=function(i){return Math.PI*i/180},na={name:"color",parse:function(i,r){if(r.type===18){var s=p1[r.name];if(typeof s>"u")throw new Error('Attempting to parse an unsupported color function "'+r.name+'"');return s(i,r.values)}if(r.type===5){if(r.value.length===3){var o=r.value.substring(0,1),d=r.value.substring(1,2),u=r.value.substring(2,3);return ta(parseInt(o+o,16),parseInt(d+d,16),parseInt(u+u,16),1)}if(r.value.length===4){var o=r.value.substring(0,1),d=r.value.substring(1,2),u=r.value.substring(2,3),h=r.value.substring(3,4);return ta(parseInt(o+o,16),parseInt(d+d,16),parseInt(u+u,16),parseInt(h+h,16)/255)}if(r.value.length===6){var o=r.value.substring(0,2),d=r.value.substring(2,4),u=r.value.substring(4,6);return ta(parseInt(o,16),parseInt(d,16),parseInt(u,16),1)}if(r.value.length===8){var o=r.value.substring(0,2),d=r.value.substring(2,4),u=r.value.substring(4,6),h=r.value.substring(6,8);return ta(parseInt(o,16),parseInt(d,16),parseInt(u,16),parseInt(h,16)/255)}}if(r.type===20){var B=Cn[r.value.toUpperCase()];if(typeof B<"u")return B}return Cn.TRANSPARENT}},aa=function(i){return(255&i)===0},ot=function(i){var r=255&i,s=255&i>>8,o=255&i>>16,d=255&i>>24;return r<255?"rgba("+d+","+o+","+s+","+r/255+")":"rgb("+d+","+o+","+s+")"},ta=function(i,r,s,o){return(i<<24|r<<16|s<<8|Math.round(o*255)<<0)>>>0},yp=function(i,r){if(i.type===17)return i.number;if(i.type===16){var s=r===3?1:255;return r===3?i.number/100*s:Math.round(i.number/100*s)}return 0},vp=function(i,r){var s=r.filter(vr);if(s.length===3){var o=s.map(yp),d=o[0],u=o[1],h=o[2];return ta(d,u,h,1)}if(s.length===4){var B=s.map(yp),d=B[0],u=B[1],h=B[2],m=B[3];return ta(d,u,h,m)}return 0};function md(i,r,s){return s<0&&(s+=1),s>=1&&(s-=1),s<1/6?(r-i)*s*6+i:s<1/2?r:s<2/3?(r-i)*6*(2/3-s)+i:i}var Cp=function(i,r){var s=r.filter(vr),o=s[0],d=s[1],u=s[2],h=s[3],B=(o.type===17?Gt(o.number):Vs.parse(i,o))/(Math.PI*2),m=At(d)?d.number/100:0,w=At(u)?u.number/100:0,v=typeof h<"u"&&At(h)?ke(h,1):1;if(m===0)return ta(w*255,w*255,w*255,1);var E=w<=.5?w*(m+1):w+m-w*m,M=w*2-E,aA=md(M,E,B+1/3),_=md(M,E,B),lA=md(M,E,B-1/3);return ta(aA*255,_*255,lA*255,v)},p1={hsl:Cp,hsla:Cp,rgb:vp,rgba:vp},Ii=function(i,r){return na.parse(i,F0.create(r).parseComponentValue())},Cn={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},x1={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(i,r){return r.map(function(s){if(Ee(s))switch(s.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},m1={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Ys=function(i,r){var s=na.parse(i,r[0]),o=r[1];return o&&At(o)?{color:s,stop:o}:{color:s,stop:null}},Qp=function(i,r){var s=i[0],o=i[i.length-1];s.stop===null&&(s.stop=ut),o.stop===null&&(o.stop=ea);for(var d=[],u=0,h=0;h<i.length;h++){var B=i[h].stop;if(B!==null){var m=ke(B,r);m>u?d.push(m):d.push(u),u=m}else d.push(null)}for(var w=null,h=0;h<d.length;h++){var v=d[h];if(v===null)w===null&&(w=h);else if(w!==null){for(var E=h-w,M=d[w-1],aA=(v-M)/(E+1),_=1;_<=E;_++)d[w+_-1]=aA*_;w=null}}return i.map(function(lA,pA){var QA=lA.color;return{color:QA,stop:Math.max(Math.min(1,d[pA]/r),0)}})},B1=function(i,r,s){var o=r/2,d=s/2,u=ke(i[0],r)-o,h=d-ke(i[1],s);return(Math.atan2(h,u)+Math.PI*2)%(Math.PI*2)},b1=function(i,r,s){var o=typeof i=="number"?i:B1(i,r,s),d=Math.abs(r*Math.sin(o))+Math.abs(s*Math.cos(o)),u=r/2,h=s/2,B=d/2,m=Math.sin(o-Math.PI/2)*B,w=Math.cos(o-Math.PI/2)*B;return[d,u-w,u+w,h-m,h+m]},Zt=function(i,r){return Math.sqrt(i*i+r*r)},Up=function(i,r,s,o,d){var u=[[0,0],[0,r],[i,0],[i,r]];return u.reduce(function(h,B){var m=B[0],w=B[1],v=Zt(s-m,o-w);return(d?v<h.optimumDistance:v>h.optimumDistance)?{optimumCorner:B,optimumDistance:v}:h},{optimumDistance:d?1/0:-1/0,optimumCorner:null}).optimumCorner},w1=function(i,r,s,o,d){var u=0,h=0;switch(i.size){case 0:i.shape===0?u=h=Math.min(Math.abs(r),Math.abs(r-o),Math.abs(s),Math.abs(s-d)):i.shape===1&&(u=Math.min(Math.abs(r),Math.abs(r-o)),h=Math.min(Math.abs(s),Math.abs(s-d)));break;case 2:if(i.shape===0)u=h=Math.min(Zt(r,s),Zt(r,s-d),Zt(r-o,s),Zt(r-o,s-d));else if(i.shape===1){var B=Math.min(Math.abs(s),Math.abs(s-d))/Math.min(Math.abs(r),Math.abs(r-o)),m=Up(o,d,r,s,!0),w=m[0],v=m[1];u=Zt(w-r,(v-s)/B),h=B*u}break;case 1:i.shape===0?u=h=Math.max(Math.abs(r),Math.abs(r-o),Math.abs(s),Math.abs(s-d)):i.shape===1&&(u=Math.max(Math.abs(r),Math.abs(r-o)),h=Math.max(Math.abs(s),Math.abs(s-d)));break;case 3:if(i.shape===0)u=h=Math.max(Zt(r,s),Zt(r,s-d),Zt(r-o,s),Zt(r-o,s-d));else if(i.shape===1){var B=Math.max(Math.abs(s),Math.abs(s-d))/Math.max(Math.abs(r),Math.abs(r-o)),E=Up(o,d,r,s,!1),w=E[0],v=E[1];u=Zt(w-r,(v-s)/B),h=B*u}break}return Array.isArray(i.size)&&(u=ke(i.size[0],o),h=i.size.length===2?ke(i.size[1],d):u),[u,h]},y1=function(i,r){var s=Gt(180),o=[];return an(r).forEach(function(d,u){if(u===0){var h=d[0];if(h.type===20&&h.value==="to"){s=D0(d);return}else if(M0(h)){s=Vs.parse(i,h);return}}var B=Ys(i,d);o.push(B)}),{angle:s,stops:o,type:1}},ws=function(i,r){var s=Gt(180),o=[];return an(r).forEach(function(d,u){if(u===0){var h=d[0];if(h.type===20&&["top","left","right","bottom"].indexOf(h.value)!==-1){s=D0(d);return}else if(M0(h)){s=(Vs.parse(i,h)+Gt(270))%Gt(360);return}}var B=Ys(i,d);o.push(B)}),{angle:s,stops:o,type:1}},v1=function(i,r){var s=Gt(180),o=[],d=1,u=0,h=3,B=[];return an(r).forEach(function(m,w){var v=m[0];if(w===0){if(Ee(v)&&v.value==="linear"){d=1;return}else if(Ee(v)&&v.value==="radial"){d=2;return}}if(v.type===18){if(v.name==="from"){var E=na.parse(i,v.values[0]);o.push({stop:ut,color:E})}else if(v.name==="to"){var E=na.parse(i,v.values[0]);o.push({stop:ea,color:E})}else if(v.name==="color-stop"){var M=v.values.filter(vr);if(M.length===2){var E=na.parse(i,M[1]),aA=M[0];Ur(aA)&&o.push({stop:{type:16,number:aA.number*100,flags:aA.flags},color:E})}}}}),d===1?{angle:(s+Gt(180))%Gt(360),stops:o,type:d}:{size:h,shape:u,stops:o,position:B,type:d}},T0="closest-side",I0="farthest-side",L0="closest-corner",O0="farthest-corner",K0="circle",R0="ellipse",z0="cover",_0="contain",C1=function(i,r){var s=0,o=3,d=[],u=[];return an(r).forEach(function(h,B){var m=!0;if(B===0){var w=!1;m=h.reduce(function(E,M){if(w)if(Ee(M))switch(M.value){case"center":return u.push(iu),E;case"top":case"left":return u.push(ut),E;case"right":case"bottom":return u.push(ea),E}else(At(M)||ia(M))&&u.push(M);else if(Ee(M))switch(M.value){case K0:return s=0,!1;case R0:return s=1,!1;case"at":return w=!0,!1;case T0:return o=0,!1;case z0:case I0:return o=1,!1;case _0:case L0:return o=2,!1;case O0:return o=3,!1}else if(ia(M)||At(M))return Array.isArray(o)||(o=[]),o.push(M),!1;return E},m)}if(m){var v=Ys(i,h);d.push(v)}}),{size:o,shape:s,stops:d,position:u,type:2}},ys=function(i,r){var s=0,o=3,d=[],u=[];return an(r).forEach(function(h,B){var m=!0;if(B===0?m=h.reduce(function(v,E){if(Ee(E))switch(E.value){case"center":return u.push(iu),!1;case"top":case"left":return u.push(ut),!1;case"right":case"bottom":return u.push(ea),!1}else if(At(E)||ia(E))return u.push(E),!1;return v},m):B===1&&(m=h.reduce(function(v,E){if(Ee(E))switch(E.value){case K0:return s=0,!1;case R0:return s=1,!1;case _0:case T0:return o=0,!1;case I0:return o=1,!1;case L0:return o=2,!1;case z0:case O0:return o=3,!1}else if(ia(E)||At(E))return Array.isArray(o)||(o=[]),o.push(E),!1;return v},m)),m){var w=Ys(i,h);d.push(w)}}),{size:o,shape:s,stops:d,position:u,type:2}},Q1=function(i){return i.type===1},U1=function(i){return i.type===2},ou={name:"image",parse:function(i,r){if(r.type===22){var s={url:r.value,type:0};return i.cache.addImage(r.value),s}if(r.type===18){var o=G0[r.name];if(typeof o>"u")throw new Error('Attempting to parse an unsupported image function "'+r.name+'"');return o(i,r.values)}throw new Error("Unsupported image type "+r.type)}};function F1(i){return!(i.type===20&&i.value==="none")&&(i.type!==18||!!G0[i.name])}var G0={"linear-gradient":y1,"-moz-linear-gradient":ws,"-ms-linear-gradient":ws,"-o-linear-gradient":ws,"-webkit-linear-gradient":ws,"radial-gradient":C1,"-moz-radial-gradient":ys,"-ms-radial-gradient":ys,"-o-radial-gradient":ys,"-webkit-radial-gradient":ys,"-webkit-gradient":v1},E1={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(i,r){if(r.length===0)return[];var s=r[0];return s.type===20&&s.value==="none"?[]:r.filter(function(o){return vr(o)&&F1(o)}).map(function(o){return ou.parse(i,o)})}},S1={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(i,r){return r.map(function(s){if(Ee(s))switch(s.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},j1={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(i,r){return an(r).map(function(s){return s.filter(At)}).map(S0)}},H1={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(i,r){return an(r).map(function(s){return s.filter(Ee).map(function(o){return o.value}).join(" ")}).map(N1)}},N1=function(i){switch(i){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},yr;(function(i){i.AUTO="auto",i.CONTAIN="contain",i.COVER="cover"})(yr||(yr={}));var k1={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(i,r){return an(r).map(function(s){return s.filter(M1)})}},M1=function(i){return Ee(i)||At(i)},Xs=function(i){return{name:"border-"+i+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},D1=Xs("top"),T1=Xs("right"),I1=Xs("bottom"),L1=Xs("left"),Js=function(i){return{name:"border-radius-"+i,initialValue:"0 0",prefix:!1,type:1,parse:function(r,s){return S0(s.filter(At))}}},O1=Js("top-left"),K1=Js("top-right"),R1=Js("bottom-right"),z1=Js("bottom-left"),Zs=function(i){return{name:"border-"+i+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(r,s){switch(s){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},_1=Zs("top"),G1=Zs("right"),V1=Zs("bottom"),Y1=Zs("left"),qs=function(i){return{name:"border-"+i+"-width",initialValue:"0",type:0,prefix:!1,parse:function(r,s){return Xi(s)?s.number:0}}},X1=qs("top"),J1=qs("right"),Z1=qs("bottom"),q1=qs("left"),W1={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},$1={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(i,r){switch(r){case"rtl":return 1;case"ltr":default:return 0}}},P1={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(i,r){return r.filter(Ee).reduce(function(s,o){return s|Av(o.value)},0)}},Av=function(i){switch(i){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},ev={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},tv={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(i,r){return r.type===20&&r.value==="normal"?0:r.type===17||r.type===15?r.number:0}},Ds;(function(i){i.NORMAL="normal",i.STRICT="strict"})(Ds||(Ds={}));var nv={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"strict":return Ds.STRICT;case"normal":default:return Ds.NORMAL}}},av={name:"line-height",initialValue:"normal",prefix:!1,type:4},Fp=function(i,r){return Ee(i)&&i.value==="normal"?1.2*r:i.type===17?r*i.number:At(i)?ke(i,r):r},rv={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(i,r){return r.type===20&&r.value==="none"?null:ou.parse(i,r)}},iv={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(i,r){switch(r){case"inside":return 0;case"outside":default:return 1}}},Xd={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},Ws=function(i){return{name:"margin-"+i,initialValue:"0",prefix:!1,type:4}},ov=Ws("top"),sv=Ws("right"),lv=Ws("bottom"),cv=Ws("left"),dv={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(i,r){return r.filter(Ee).map(function(s){switch(s.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},uv={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"break-word":return"break-word";case"normal":default:return"normal"}}},$s=function(i){return{name:"padding-"+i,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},fv=$s("top"),hv=$s("right"),gv=$s("bottom"),pv=$s("left"),xv={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(i,r){switch(r){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},mv={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(i,r){switch(r){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},Bv={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(i,r){return r.length===1&&Yd(r[0],"none")?[]:an(r).map(function(s){for(var o={color:Cn.TRANSPARENT,offsetX:ut,offsetY:ut,blur:ut},d=0,u=0;u<s.length;u++){var h=s[u];ia(h)?(d===0?o.offsetX=h:d===1?o.offsetY=h:o.blur=h,d++):o.color=na.parse(i,h)}return o})}},bv={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},wv={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(i,r){if(r.type===20&&r.value==="none")return null;if(r.type===18){var s=Cv[r.name];if(typeof s>"u")throw new Error('Attempting to parse an unsupported transform function "'+r.name+'"');return s(r.values)}return null}},yv=function(i){var r=i.filter(function(s){return s.type===17}).map(function(s){return s.number});return r.length===6?r:null},vv=function(i){var r=i.filter(function(m){return m.type===17}).map(function(m){return m.number}),s=r[0],o=r[1];r[2],r[3];var d=r[4],u=r[5];r[6],r[7],r[8],r[9],r[10],r[11];var h=r[12],B=r[13];return r[14],r[15],r.length===16?[s,o,d,u,h,B]:null},Cv={matrix:yv,matrix3d:vv},Ep={type:16,number:50,flags:Yi},Qv=[Ep,Ep],Uv={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(i,r){var s=r.filter(At);return s.length!==2?Qv:[s[0],s[1]]}},Fv={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(i,r){switch(r){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},Li;(function(i){i.NORMAL="normal",i.BREAK_ALL="break-all",i.KEEP_ALL="keep-all"})(Li||(Li={}));var Ev={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"break-all":return Li.BREAK_ALL;case"keep-all":return Li.KEEP_ALL;case"normal":default:return Li.NORMAL}}},Sv={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(i,r){if(r.type===20)return{auto:!0,order:0};if(Ur(r))return{auto:!1,order:r.number};throw new Error("Invalid z-index number parsed")}},V0={name:"time",parse:function(i,r){if(r.type===15)switch(r.unit.toLowerCase()){case"s":return 1e3*r.number;case"ms":return r.number}throw new Error("Unsupported time type")}},jv={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(i,r){return Ur(r)?r.number:1}},Hv={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},Nv={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(i,r){return r.filter(Ee).map(function(s){switch(s.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(s){return s!==0})}},kv={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(i,r){var s=[],o=[];return r.forEach(function(d){switch(d.type){case 20:case 0:s.push(d.value);break;case 17:s.push(d.number.toString());break;case 4:o.push(s.join(" ")),s.length=0;break}}),s.length&&o.push(s.join(" ")),o.map(function(d){return d.indexOf(" ")===-1?d:"'"+d+"'"})}},Mv={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},Dv={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(i,r){if(Ur(r))return r.number;if(Ee(r))switch(r.value){case"bold":return 700;case"normal":default:return 400}return 400}},Tv={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(i,r){return r.filter(Ee).map(function(s){return s.value})}},Iv={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(i,r){switch(r){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},nt=function(i,r){return(i&r)!==0},Lv={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(i,r){if(r.length===0)return[];var s=r[0];return s.type===20&&s.value==="none"?[]:r}},Ov={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(i,r){if(r.length===0)return null;var s=r[0];if(s.type===20&&s.value==="none")return null;for(var o=[],d=r.filter(E0),u=0;u<d.length;u++){var h=d[u],B=d[u+1];if(h.type===20){var m=B&&Ur(B)?B.number:1;o.push({counter:h.value,increment:m})}}return o}},Kv={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(i,r){if(r.length===0)return[];for(var s=[],o=r.filter(E0),d=0;d<o.length;d++){var u=o[d],h=o[d+1];if(Ee(u)&&u.value!=="none"){var B=h&&Ur(h)?h.number:0;s.push({counter:u.value,reset:B})}}return s}},Rv={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(i,r){return r.filter(Xi).map(function(s){return V0.parse(i,s)})}},zv={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(i,r){if(r.length===0)return null;var s=r[0];if(s.type===20&&s.value==="none")return null;var o=[],d=r.filter(h1);if(d.length%2!==0)return null;for(var u=0;u<d.length;u+=2){var h=d[u].value,B=d[u+1].value;o.push({open:h,close:B})}return o}},Sp=function(i,r,s){if(!i)return"";var o=i[Math.min(r,i.length-1)];return o?s?o.open:o.close:""},_v={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(i,r){return r.length===1&&Yd(r[0],"none")?[]:an(r).map(function(s){for(var o={color:255,offsetX:ut,offsetY:ut,blur:ut,spread:ut,inset:!1},d=0,u=0;u<s.length;u++){var h=s[u];Yd(h,"inset")?o.inset=!0:ia(h)?(d===0?o.offsetX=h:d===1?o.offsetY=h:d===2?o.blur=h:o.spread=h,d++):o.color=na.parse(i,h)}return o})}},Gv={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(i,r){var s=[0,1,2],o=[];return r.filter(Ee).forEach(function(d){switch(d.value){case"stroke":o.push(1);break;case"fill":o.push(0);break;case"markers":o.push(2);break}}),s.forEach(function(d){o.indexOf(d)===-1&&o.push(d)}),o}},Vv={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},Yv={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(i,r){return Xi(r)?r.number:0}},Xv=function(){function i(r,s){var o,d;this.animationDuration=GA(r,Rv,s.animationDuration),this.backgroundClip=GA(r,x1,s.backgroundClip),this.backgroundColor=GA(r,m1,s.backgroundColor),this.backgroundImage=GA(r,E1,s.backgroundImage),this.backgroundOrigin=GA(r,S1,s.backgroundOrigin),this.backgroundPosition=GA(r,j1,s.backgroundPosition),this.backgroundRepeat=GA(r,H1,s.backgroundRepeat),this.backgroundSize=GA(r,k1,s.backgroundSize),this.borderTopColor=GA(r,D1,s.borderTopColor),this.borderRightColor=GA(r,T1,s.borderRightColor),this.borderBottomColor=GA(r,I1,s.borderBottomColor),this.borderLeftColor=GA(r,L1,s.borderLeftColor),this.borderTopLeftRadius=GA(r,O1,s.borderTopLeftRadius),this.borderTopRightRadius=GA(r,K1,s.borderTopRightRadius),this.borderBottomRightRadius=GA(r,R1,s.borderBottomRightRadius),this.borderBottomLeftRadius=GA(r,z1,s.borderBottomLeftRadius),this.borderTopStyle=GA(r,_1,s.borderTopStyle),this.borderRightStyle=GA(r,G1,s.borderRightStyle),this.borderBottomStyle=GA(r,V1,s.borderBottomStyle),this.borderLeftStyle=GA(r,Y1,s.borderLeftStyle),this.borderTopWidth=GA(r,X1,s.borderTopWidth),this.borderRightWidth=GA(r,J1,s.borderRightWidth),this.borderBottomWidth=GA(r,Z1,s.borderBottomWidth),this.borderLeftWidth=GA(r,q1,s.borderLeftWidth),this.boxShadow=GA(r,_v,s.boxShadow),this.color=GA(r,W1,s.color),this.direction=GA(r,$1,s.direction),this.display=GA(r,P1,s.display),this.float=GA(r,ev,s.cssFloat),this.fontFamily=GA(r,kv,s.fontFamily),this.fontSize=GA(r,Mv,s.fontSize),this.fontStyle=GA(r,Iv,s.fontStyle),this.fontVariant=GA(r,Tv,s.fontVariant),this.fontWeight=GA(r,Dv,s.fontWeight),this.letterSpacing=GA(r,tv,s.letterSpacing),this.lineBreak=GA(r,nv,s.lineBreak),this.lineHeight=GA(r,av,s.lineHeight),this.listStyleImage=GA(r,rv,s.listStyleImage),this.listStylePosition=GA(r,iv,s.listStylePosition),this.listStyleType=GA(r,Xd,s.listStyleType),this.marginTop=GA(r,ov,s.marginTop),this.marginRight=GA(r,sv,s.marginRight),this.marginBottom=GA(r,lv,s.marginBottom),this.marginLeft=GA(r,cv,s.marginLeft),this.opacity=GA(r,jv,s.opacity);var u=GA(r,dv,s.overflow);this.overflowX=u[0],this.overflowY=u[u.length>1?1:0],this.overflowWrap=GA(r,uv,s.overflowWrap),this.paddingTop=GA(r,fv,s.paddingTop),this.paddingRight=GA(r,hv,s.paddingRight),this.paddingBottom=GA(r,gv,s.paddingBottom),this.paddingLeft=GA(r,pv,s.paddingLeft),this.paintOrder=GA(r,Gv,s.paintOrder),this.position=GA(r,mv,s.position),this.textAlign=GA(r,xv,s.textAlign),this.textDecorationColor=GA(r,Hv,(o=s.textDecorationColor)!==null&&o!==void 0?o:s.color),this.textDecorationLine=GA(r,Nv,(d=s.textDecorationLine)!==null&&d!==void 0?d:s.textDecoration),this.textShadow=GA(r,Bv,s.textShadow),this.textTransform=GA(r,bv,s.textTransform),this.transform=GA(r,wv,s.transform),this.transformOrigin=GA(r,Uv,s.transformOrigin),this.visibility=GA(r,Fv,s.visibility),this.webkitTextStrokeColor=GA(r,Vv,s.webkitTextStrokeColor),this.webkitTextStrokeWidth=GA(r,Yv,s.webkitTextStrokeWidth),this.wordBreak=GA(r,Ev,s.wordBreak),this.zIndex=GA(r,Sv,s.zIndex)}return i.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},i.prototype.isTransparent=function(){return aa(this.backgroundColor)},i.prototype.isTransformed=function(){return this.transform!==null},i.prototype.isPositioned=function(){return this.position!==0},i.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},i.prototype.isFloating=function(){return this.float!==0},i.prototype.isInlineLevel=function(){return nt(this.display,4)||nt(this.display,33554432)||nt(this.display,268435456)||nt(this.display,536870912)||nt(this.display,67108864)||nt(this.display,134217728)},i}(),Jv=function(){function i(r,s){this.content=GA(r,Lv,s.content),this.quotes=GA(r,zv,s.quotes)}return i}(),jp=function(){function i(r,s){this.counterIncrement=GA(r,Ov,s.counterIncrement),this.counterReset=GA(r,Kv,s.counterReset)}return i}(),GA=function(i,r,s){var o=new U0,d=s!==null&&typeof s<"u"?s.toString():r.initialValue;o.write(d);var u=new F0(o.read());switch(r.type){case 2:var h=u.parseComponentValue();return r.parse(i,Ee(h)?h.value:r.initialValue);case 0:return r.parse(i,u.parseComponentValue());case 1:return r.parse(i,u.parseComponentValues());case 4:return u.parseComponentValue();case 3:switch(r.format){case"angle":return Vs.parse(i,u.parseComponentValue());case"color":return na.parse(i,u.parseComponentValue());case"image":return ou.parse(i,u.parseComponentValue());case"length":var B=u.parseComponentValue();return ia(B)?B:ut;case"length-percentage":var m=u.parseComponentValue();return At(m)?m:ut;case"time":return V0.parse(i,u.parseComponentValue())}break}},Zv="data-html2canvas-debug",qv=function(i){var r=i.getAttribute(Zv);switch(r){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},Jd=function(i,r){var s=qv(i);return s===1||r===s},rn=function(){function i(r,s){if(this.context=r,this.textNodes=[],this.elements=[],this.flags=0,Jd(s,3))debugger;this.styles=new Xv(r,window.getComputedStyle(s,null)),Wd(s)&&(this.styles.animationDuration.some(function(o){return o>0})&&(s.style.animationDuration="0s"),this.styles.transform!==null&&(s.style.transform="none")),this.bounds=_s(this.context,s),Jd(s,4)&&(this.flags|=16)}return i}(),Wv="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",Hp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Mi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var vs=0;vs<Hp.length;vs++)Mi[Hp.charCodeAt(vs)]=vs;var $v=function(i){var r=i.length*.75,s=i.length,o,d=0,u,h,B,m;i[i.length-1]==="="&&(r--,i[i.length-2]==="="&&r--);var w=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(r):new Array(r),v=Array.isArray(w)?w:new Uint8Array(w);for(o=0;o<s;o+=4)u=Mi[i.charCodeAt(o)],h=Mi[i.charCodeAt(o+1)],B=Mi[i.charCodeAt(o+2)],m=Mi[i.charCodeAt(o+3)],v[d++]=u<<2|h>>4,v[d++]=(h&15)<<4|B>>2,v[d++]=(B&3)<<6|m&63;return w},Pv=function(i){for(var r=i.length,s=[],o=0;o<r;o+=2)s.push(i[o+1]<<8|i[o]);return s},AC=function(i){for(var r=i.length,s=[],o=0;o<r;o+=4)s.push(i[o+3]<<24|i[o+2]<<16|i[o+1]<<8|i[o]);return s},Sa=5,su=11,Bd=2,eC=su-Sa,Y0=65536>>Sa,tC=1<<Sa,bd=tC-1,nC=1024>>Sa,aC=Y0+nC,rC=aC,iC=32,oC=rC+iC,sC=65536>>su,lC=1<<eC,cC=lC-1,Np=function(i,r,s){return i.slice?i.slice(r,s):new Uint16Array(Array.prototype.slice.call(i,r,s))},dC=function(i,r,s){return i.slice?i.slice(r,s):new Uint32Array(Array.prototype.slice.call(i,r,s))},uC=function(i,r){var s=$v(i),o=Array.isArray(s)?AC(s):new Uint32Array(s),d=Array.isArray(s)?Pv(s):new Uint16Array(s),u=24,h=Np(d,u/2,o[4]/2),B=o[5]===2?Np(d,(u+o[4])/2):dC(o,Math.ceil((u+o[4])/4));return new fC(o[0],o[1],o[2],o[3],h,B)},fC=function(){function i(r,s,o,d,u,h){this.initialValue=r,this.errorValue=s,this.highStart=o,this.highValueIndex=d,this.index=u,this.data=h}return i.prototype.get=function(r){var s;if(r>=0){if(r<55296||r>56319&&r<=65535)return s=this.index[r>>Sa],s=(s<<Bd)+(r&bd),this.data[s];if(r<=65535)return s=this.index[Y0+(r-55296>>Sa)],s=(s<<Bd)+(r&bd),this.data[s];if(r<this.highStart)return s=oC-sC+(r>>su),s=this.index[s],s+=r>>Sa&cC,s=this.index[s],s=(s<<Bd)+(r&bd),this.data[s];if(r<=1114111)return this.data[this.highValueIndex]}return this.errorValue},i}(),kp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",hC=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Cs=0;Cs<kp.length;Cs++)hC[kp.charCodeAt(Cs)]=Cs;var gC=1,wd=2,yd=3,Mp=4,Dp=5,pC=7,Tp=8,vd=9,Cd=10,Ip=11,Lp=12,Op=13,Kp=14,Qd=15,xC=function(i){for(var r=[],s=0,o=i.length;s<o;){var d=i.charCodeAt(s++);if(d>=55296&&d<=56319&&s<o){var u=i.charCodeAt(s++);(u&64512)===56320?r.push(((d&1023)<<10)+(u&1023)+65536):(r.push(d),s--)}else r.push(d)}return r},mC=function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];if(String.fromCodePoint)return String.fromCodePoint.apply(String,i);var s=i.length;if(!s)return"";for(var o=[],d=-1,u="";++d<s;){var h=i[d];h<=65535?o.push(h):(h-=65536,o.push((h>>10)+55296,h%1024+56320)),(d+1===s||o.length>16384)&&(u+=String.fromCharCode.apply(String,o),o.length=0)}return u},BC=uC(Wv),zt="×",Ud="÷",bC=function(i){return BC.get(i)},wC=function(i,r,s){var o=s-2,d=r[o],u=r[s-1],h=r[s];if(u===wd&&h===yd)return zt;if(u===wd||u===yd||u===Mp||h===wd||h===yd||h===Mp)return Ud;if(u===Tp&&[Tp,vd,Ip,Lp].indexOf(h)!==-1||(u===Ip||u===vd)&&(h===vd||h===Cd)||(u===Lp||u===Cd)&&h===Cd||h===Op||h===Dp||h===pC||u===gC)return zt;if(u===Op&&h===Kp){for(;d===Dp;)d=r[--o];if(d===Kp)return zt}if(u===Qd&&h===Qd){for(var B=0;d===Qd;)B++,d=r[--o];if(B%2===0)return zt}return Ud},yC=function(i){var r=xC(i),s=r.length,o=0,d=0,u=r.map(bC);return{next:function(){if(o>=s)return{done:!0,value:null};for(var h=zt;o<s&&(h=wC(r,u,++o))===zt;);if(h!==zt||o===s){var B=mC.apply(null,r.slice(d,o));return d=o,{value:B,done:!1}}return{done:!0,value:null}}}},vC=function(i){for(var r=yC(i),s=[],o;!(o=r.next()).done;)o.value&&s.push(o.value.slice());return s},CC=function(i){var r=123;if(i.createRange){var s=i.createRange();if(s.getBoundingClientRect){var o=i.createElement("boundtest");o.style.height=r+"px",o.style.display="block",i.body.appendChild(o),s.selectNode(o);var d=s.getBoundingClientRect(),u=Math.round(d.height);if(i.body.removeChild(o),u===r)return!0}}return!1},QC=function(i){var r=i.createElement("boundtest");r.style.width="50px",r.style.display="block",r.style.fontSize="12px",r.style.letterSpacing="0px",r.style.wordSpacing="0px",i.body.appendChild(r);var s=i.createRange();r.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var o=r.firstChild,d=Gs(o.data).map(function(m){return qe(m)}),u=0,h={},B=d.every(function(m,w){s.setStart(o,u),s.setEnd(o,u+m.length);var v=s.getBoundingClientRect();u+=m.length;var E=v.x>h.x||v.y>h.y;return h=v,w===0?!0:E});return i.body.removeChild(r),B},UC=function(){return typeof new Image().crossOrigin<"u"},FC=function(){return typeof new XMLHttpRequest().responseType=="string"},EC=function(i){var r=new Image,s=i.createElement("canvas"),o=s.getContext("2d");if(!o)return!1;r.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{o.drawImage(r,0,0),s.toDataURL()}catch{return!1}return!0},Rp=function(i){return i[0]===0&&i[1]===255&&i[2]===0&&i[3]===255},SC=function(i){var r=i.createElement("canvas"),s=100;r.width=s,r.height=s;var o=r.getContext("2d");if(!o)return Promise.reject(!1);o.fillStyle="rgb(0, 255, 0)",o.fillRect(0,0,s,s);var d=new Image,u=r.toDataURL();d.src=u;var h=Zd(s,s,0,0,d);return o.fillStyle="red",o.fillRect(0,0,s,s),zp(h).then(function(B){o.drawImage(B,0,0);var m=o.getImageData(0,0,s,s).data;o.fillStyle="red",o.fillRect(0,0,s,s);var w=i.createElement("div");return w.style.backgroundImage="url("+u+")",w.style.height=s+"px",Rp(m)?zp(Zd(s,s,0,0,w)):Promise.reject(!1)}).then(function(B){return o.drawImage(B,0,0),Rp(o.getImageData(0,0,s,s).data)}).catch(function(){return!1})},Zd=function(i,r,s,o,d){var u="http://www.w3.org/2000/svg",h=document.createElementNS(u,"svg"),B=document.createElementNS(u,"foreignObject");return h.setAttributeNS(null,"width",i.toString()),h.setAttributeNS(null,"height",r.toString()),B.setAttributeNS(null,"width","100%"),B.setAttributeNS(null,"height","100%"),B.setAttributeNS(null,"x",s.toString()),B.setAttributeNS(null,"y",o.toString()),B.setAttributeNS(null,"externalResourcesRequired","true"),h.appendChild(B),B.appendChild(d),h},zp=function(i){return new Promise(function(r,s){var o=new Image;o.onload=function(){return r(o)},o.onerror=s,o.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(i))})},dt={get SUPPORT_RANGE_BOUNDS(){var i=CC(document);return Object.defineProperty(dt,"SUPPORT_RANGE_BOUNDS",{value:i}),i},get SUPPORT_WORD_BREAKING(){var i=dt.SUPPORT_RANGE_BOUNDS&&QC(document);return Object.defineProperty(dt,"SUPPORT_WORD_BREAKING",{value:i}),i},get SUPPORT_SVG_DRAWING(){var i=EC(document);return Object.defineProperty(dt,"SUPPORT_SVG_DRAWING",{value:i}),i},get SUPPORT_FOREIGNOBJECT_DRAWING(){var i=typeof Array.from=="function"&&typeof window.fetch=="function"?SC(document):Promise.resolve(!1);return Object.defineProperty(dt,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:i}),i},get SUPPORT_CORS_IMAGES(){var i=UC();return Object.defineProperty(dt,"SUPPORT_CORS_IMAGES",{value:i}),i},get SUPPORT_RESPONSE_TYPE(){var i=FC();return Object.defineProperty(dt,"SUPPORT_RESPONSE_TYPE",{value:i}),i},get SUPPORT_CORS_XHR(){var i="withCredentials"in new XMLHttpRequest;return Object.defineProperty(dt,"SUPPORT_CORS_XHR",{value:i}),i},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var i=!!(typeof Intl<"u"&&Intl.Segmenter);return Object.defineProperty(dt,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:i}),i}},Oi=function(){function i(r,s){this.text=r,this.bounds=s}return i}(),jC=function(i,r,s,o){var d=kC(r,s),u=[],h=0;return d.forEach(function(B){if(s.textDecorationLine.length||B.trim().length>0)if(dt.SUPPORT_RANGE_BOUNDS){var m=_p(o,h,B.length).getClientRects();if(m.length>1){var w=lu(B),v=0;w.forEach(function(M){u.push(new Oi(M,Qn.fromDOMRectList(i,_p(o,v+h,M.length).getClientRects()))),v+=M.length})}else u.push(new Oi(B,Qn.fromDOMRectList(i,m)))}else{var E=o.splitText(B.length);u.push(new Oi(B,HC(i,o))),o=E}else dt.SUPPORT_RANGE_BOUNDS||(o=o.splitText(B.length));h+=B.length}),u},HC=function(i,r){var s=r.ownerDocument;if(s){var o=s.createElement("html2canvaswrapper");o.appendChild(r.cloneNode(!0));var d=r.parentNode;if(d){d.replaceChild(o,r);var u=_s(i,o);return o.firstChild&&d.replaceChild(o.firstChild,o),u}}return Qn.EMPTY},_p=function(i,r,s){var o=i.ownerDocument;if(!o)throw new Error("Node has no owner document");var d=o.createRange();return d.setStart(i,r),d.setEnd(i,r+s),d},lu=function(i){if(dt.SUPPORT_NATIVE_TEXT_SEGMENTATION){var r=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(r.segment(i)).map(function(s){return s.segment})}return vC(i)},NC=function(i,r){if(dt.SUPPORT_NATIVE_TEXT_SEGMENTATION){var s=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(s.segment(i)).map(function(o){return o.segment})}return DC(i,r)},kC=function(i,r){return r.letterSpacing!==0?lu(i):NC(i,r)},MC=[32,160,4961,65792,65793,4153,4241],DC=function(i,r){for(var s=sy(i,{lineBreak:r.lineBreak,wordBreak:r.overflowWrap==="break-word"?"break-word":r.wordBreak}),o=[],d,u=function(){if(d.value){var h=d.value.slice(),B=Gs(h),m="";B.forEach(function(w){MC.indexOf(w)===-1?m+=qe(w):(m.length&&o.push(m),o.push(qe(w)),m="")}),m.length&&o.push(m)}};!(d=s.next()).done;)u();return o},TC=function(){function i(r,s,o){this.text=IC(s.data,o.textTransform),this.textBounds=jC(r,this.text,o,s)}return i}(),IC=function(i,r){switch(r){case 1:return i.toLowerCase();case 3:return i.replace(LC,OC);case 2:return i.toUpperCase();default:return i}},LC=/(^|\s|:|-|\(|\))([a-z])/g,OC=function(i,r,s){return i.length>0?r+s.toUpperCase():i},X0=function(i){qt(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.src=o.currentSrc||o.src,d.intrinsicWidth=o.naturalWidth,d.intrinsicHeight=o.naturalHeight,d.context.cache.addImage(d.src),d}return r}(rn),J0=function(i){qt(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.canvas=o,d.intrinsicWidth=o.width,d.intrinsicHeight=o.height,d}return r}(rn),Z0=function(i){qt(r,i);function r(s,o){var d=i.call(this,s,o)||this,u=new XMLSerializer,h=_s(s,o);return o.setAttribute("width",h.width+"px"),o.setAttribute("height",h.height+"px"),d.svg="data:image/svg+xml,"+encodeURIComponent(u.serializeToString(o)),d.intrinsicWidth=o.width.baseVal.value,d.intrinsicHeight=o.height.baseVal.value,d.context.cache.addImage(d.svg),d}return r}(rn),q0=function(i){qt(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.value=o.value,d}return r}(rn),qd=function(i){qt(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.start=o.start,d.reversed=typeof o.reversed=="boolean"&&o.reversed===!0,d}return r}(rn),KC=[{type:15,flags:0,unit:"px",number:3}],RC=[{type:16,flags:0,number:50}],zC=function(i){return i.width>i.height?new Qn(i.left+(i.width-i.height)/2,i.top,i.height,i.height):i.width<i.height?new Qn(i.left,i.top+(i.height-i.width)/2,i.width,i.width):i},_C=function(i){var r=i.type===GC?new Array(i.value.length+1).join("•"):i.value;return r.length===0?i.placeholder||"":r},Ts="checkbox",Is="radio",GC="password",Gp=707406591,cu=function(i){qt(r,i);function r(s,o){var d=i.call(this,s,o)||this;switch(d.type=o.type.toLowerCase(),d.checked=o.checked,d.value=_C(o),(d.type===Ts||d.type===Is)&&(d.styles.backgroundColor=3739148031,d.styles.borderTopColor=d.styles.borderRightColor=d.styles.borderBottomColor=d.styles.borderLeftColor=2779096575,d.styles.borderTopWidth=d.styles.borderRightWidth=d.styles.borderBottomWidth=d.styles.borderLeftWidth=1,d.styles.borderTopStyle=d.styles.borderRightStyle=d.styles.borderBottomStyle=d.styles.borderLeftStyle=1,d.styles.backgroundClip=[0],d.styles.backgroundOrigin=[0],d.bounds=zC(d.bounds)),d.type){case Ts:d.styles.borderTopRightRadius=d.styles.borderTopLeftRadius=d.styles.borderBottomRightRadius=d.styles.borderBottomLeftRadius=KC;break;case Is:d.styles.borderTopRightRadius=d.styles.borderTopLeftRadius=d.styles.borderBottomRightRadius=d.styles.borderBottomLeftRadius=RC;break}return d}return r}(rn),W0=function(i){qt(r,i);function r(s,o){var d=i.call(this,s,o)||this,u=o.options[o.selectedIndex||0];return d.value=u&&u.text||"",d}return r}(rn),$0=function(i){qt(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.value=o.value,d}return r}(rn),P0=function(i){qt(r,i);function r(s,o){var d=i.call(this,s,o)||this;d.src=o.src,d.width=parseInt(o.width,10)||0,d.height=parseInt(o.height,10)||0,d.backgroundColor=d.styles.backgroundColor;try{if(o.contentWindow&&o.contentWindow.document&&o.contentWindow.document.documentElement){d.tree=ex(s,o.contentWindow.document.documentElement);var u=o.contentWindow.document.documentElement?Ii(s,getComputedStyle(o.contentWindow.document.documentElement).backgroundColor):Cn.TRANSPARENT,h=o.contentWindow.document.body?Ii(s,getComputedStyle(o.contentWindow.document.body).backgroundColor):Cn.TRANSPARENT;d.backgroundColor=aa(u)?aa(h)?d.styles.backgroundColor:h:u}}catch{}return d}return r}(rn),VC=["OL","UL","MENU"],Hs=function(i,r,s,o){for(var d=r.firstChild,u=void 0;d;d=u)if(u=d.nextSibling,tx(d)&&d.data.trim().length>0)s.textNodes.push(new TC(i,d,s.styles));else if(wr(d))if(ix(d)&&d.assignedNodes)d.assignedNodes().forEach(function(B){return Hs(i,B,s,o)});else{var h=Ax(i,d);h.styles.isVisible()&&(YC(d,h,o)?h.flags|=4:XC(h.styles)&&(h.flags|=2),VC.indexOf(d.tagName)!==-1&&(h.flags|=8),s.elements.push(h),d.slot,d.shadowRoot?Hs(i,d.shadowRoot,h,o):!Ls(d)&&!nx(d)&&!Os(d)&&Hs(i,d,h,o))}},Ax=function(i,r){return $d(r)?new X0(i,r):ax(r)?new J0(i,r):nx(r)?new Z0(i,r):JC(r)?new q0(i,r):ZC(r)?new qd(i,r):qC(r)?new cu(i,r):Os(r)?new W0(i,r):Ls(r)?new $0(i,r):rx(r)?new P0(i,r):new rn(i,r)},ex=function(i,r){var s=Ax(i,r);return s.flags|=4,Hs(i,r,s,s),s},YC=function(i,r,s){return r.styles.isPositionedWithZIndex()||r.styles.opacity<1||r.styles.isTransformed()||du(i)&&s.styles.isTransparent()},XC=function(i){return i.isPositioned()||i.isFloating()},tx=function(i){return i.nodeType===Node.TEXT_NODE},wr=function(i){return i.nodeType===Node.ELEMENT_NODE},Wd=function(i){return wr(i)&&typeof i.style<"u"&&!Ns(i)},Ns=function(i){return typeof i.className=="object"},JC=function(i){return i.tagName==="LI"},ZC=function(i){return i.tagName==="OL"},qC=function(i){return i.tagName==="INPUT"},WC=function(i){return i.tagName==="HTML"},nx=function(i){return i.tagName==="svg"},du=function(i){return i.tagName==="BODY"},ax=function(i){return i.tagName==="CANVAS"},Vp=function(i){return i.tagName==="VIDEO"},$d=function(i){return i.tagName==="IMG"},rx=function(i){return i.tagName==="IFRAME"},Yp=function(i){return i.tagName==="STYLE"},$C=function(i){return i.tagName==="SCRIPT"},Ls=function(i){return i.tagName==="TEXTAREA"},Os=function(i){return i.tagName==="SELECT"},ix=function(i){return i.tagName==="SLOT"},Xp=function(i){return i.tagName.indexOf("-")>0},PC=function(){function i(){this.counters={}}return i.prototype.getCounterValue=function(r){var s=this.counters[r];return s&&s.length?s[s.length-1]:1},i.prototype.getCounterValues=function(r){var s=this.counters[r];return s||[]},i.prototype.pop=function(r){var s=this;r.forEach(function(o){return s.counters[o].pop()})},i.prototype.parse=function(r){var s=this,o=r.counterIncrement,d=r.counterReset,u=!0;o!==null&&o.forEach(function(B){var m=s.counters[B.counter];m&&B.increment!==0&&(u=!1,m.length||m.push(1),m[Math.max(0,m.length-1)]+=B.increment)});var h=[];return u&&d.forEach(function(B){var m=s.counters[B.counter];h.push(B.counter),m||(m=s.counters[B.counter]=[]),m.push(B.reset)}),h},i}(),Jp={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Zp={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},A2={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},e2={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},pr=function(i,r,s,o,d,u){return i<r||i>s?Gi(i,d,u.length>0):o.integers.reduce(function(h,B,m){for(;i>=B;)i-=B,h+=o.values[m];return h},"")+u},ox=function(i,r,s,o){var d="";do s||i--,d=o(i)+d,i/=r;while(i*r>=r);return d},Ze=function(i,r,s,o,d){var u=s-r+1;return(i<0?"-":"")+(ox(Math.abs(i),u,o,function(h){return qe(Math.floor(h%u)+r)})+d)},Qa=function(i,r,s){s===void 0&&(s=". ");var o=r.length;return ox(Math.abs(i),o,!1,function(d){return r[Math.floor(d%o)]})+s},Br=1,Wn=2,$n=4,Di=8,vn=function(i,r,s,o,d,u){if(i<-9999||i>9999)return Gi(i,4,d.length>0);var h=Math.abs(i),B=d;if(h===0)return r[0]+B;for(var m=0;h>0&&m<=4;m++){var w=h%10;w===0&&nt(u,Br)&&B!==""?B=r[w]+B:w>1||w===1&&m===0||w===1&&m===1&&nt(u,Wn)||w===1&&m===1&&nt(u,$n)&&i>100||w===1&&m>1&&nt(u,Di)?B=r[w]+(m>0?s[m-1]:"")+B:w===1&&m>0&&(B=s[m-1]+B),h=Math.floor(h/10)}return(i<0?o:"")+B},qp="十百千萬",Wp="拾佰仟萬",$p="マイナス",Fd="마이너스",Gi=function(i,r,s){var o=s?". ":"",d=s?"、":"",u=s?", ":"",h=s?" ":"";switch(r){case 0:return"•"+h;case 1:return"◦"+h;case 2:return"◾"+h;case 5:var B=Ze(i,48,57,!0,o);return B.length<4?"0"+B:B;case 4:return Qa(i,"〇一二三四五六七八九",d);case 6:return pr(i,1,3999,Jp,3,o).toLowerCase();case 7:return pr(i,1,3999,Jp,3,o);case 8:return Ze(i,945,969,!1,o);case 9:return Ze(i,97,122,!1,o);case 10:return Ze(i,65,90,!1,o);case 11:return Ze(i,1632,1641,!0,o);case 12:case 49:return pr(i,1,9999,Zp,3,o);case 35:return pr(i,1,9999,Zp,3,o).toLowerCase();case 13:return Ze(i,2534,2543,!0,o);case 14:case 30:return Ze(i,6112,6121,!0,o);case 15:return Qa(i,"子丑寅卯辰巳午未申酉戌亥",d);case 16:return Qa(i,"甲乙丙丁戊己庚辛壬癸",d);case 17:case 48:return vn(i,"零一二三四五六七八九",qp,"負",d,Wn|$n|Di);case 47:return vn(i,"零壹貳參肆伍陸柒捌玖",Wp,"負",d,Br|Wn|$n|Di);case 42:return vn(i,"零一二三四五六七八九",qp,"负",d,Wn|$n|Di);case 41:return vn(i,"零壹贰叁肆伍陆柒捌玖",Wp,"负",d,Br|Wn|$n|Di);case 26:return vn(i,"〇一二三四五六七八九","十百千万",$p,d,0);case 25:return vn(i,"零壱弐参四伍六七八九","拾百千万",$p,d,Br|Wn|$n);case 31:return vn(i,"영일이삼사오육칠팔구","십백천만",Fd,u,Br|Wn|$n);case 33:return vn(i,"零一二三四五六七八九","十百千萬",Fd,u,0);case 32:return vn(i,"零壹貳參四五六七八九","拾百千",Fd,u,Br|Wn|$n);case 18:return Ze(i,2406,2415,!0,o);case 20:return pr(i,1,19999,e2,3,o);case 21:return Ze(i,2790,2799,!0,o);case 22:return Ze(i,2662,2671,!0,o);case 22:return pr(i,1,10999,A2,3,o);case 23:return Qa(i,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return Qa(i,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return Ze(i,3302,3311,!0,o);case 28:return Qa(i,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",d);case 29:return Qa(i,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",d);case 34:return Ze(i,3792,3801,!0,o);case 37:return Ze(i,6160,6169,!0,o);case 38:return Ze(i,4160,4169,!0,o);case 39:return Ze(i,2918,2927,!0,o);case 40:return Ze(i,1776,1785,!0,o);case 43:return Ze(i,3046,3055,!0,o);case 44:return Ze(i,3174,3183,!0,o);case 45:return Ze(i,3664,3673,!0,o);case 46:return Ze(i,3872,3881,!0,o);case 3:default:return Ze(i,48,57,!0,o)}},sx="data-html2canvas-ignore",Pp=function(){function i(r,s,o){if(this.context=r,this.options=o,this.scrolledElements=[],this.referenceElement=s,this.counters=new PC,this.quoteDepth=0,!s.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(s.ownerDocument.documentElement,!1)}return i.prototype.toIFrame=function(r,s){var o=this,d=t2(r,s);if(!d.contentWindow)return Promise.reject("Unable to find iframe window");var u=r.defaultView.pageXOffset,h=r.defaultView.pageYOffset,B=d.contentWindow,m=B.document,w=r2(d).then(function(){return mt(o,void 0,void 0,function(){var v,E;return gt(this,function(M){switch(M.label){case 0:return this.scrolledElements.forEach(l2),B&&(B.scrollTo(s.left,s.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(B.scrollY!==s.top||B.scrollX!==s.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(B.scrollX-s.left,B.scrollY-s.top,0,0))),v=this.options.onclone,E=this.clonedReferenceElement,typeof E>"u"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:m.fonts&&m.fonts.ready?[4,m.fonts.ready]:[3,2];case 1:M.sent(),M.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,a2(m)]:[3,4];case 3:M.sent(),M.label=4;case 4:return typeof v=="function"?[2,Promise.resolve().then(function(){return v(m,E)}).then(function(){return d})]:[2,d]}})})});return m.open(),m.write(o2(document.doctype)+"<html></html>"),s2(this.referenceElement.ownerDocument,u,h),m.replaceChild(m.adoptNode(this.documentElement),m.documentElement),m.close(),w},i.prototype.createElementClone=function(r){if(Jd(r,2))debugger;if(ax(r))return this.createCanvasClone(r);if(Vp(r))return this.createVideoClone(r);if(Yp(r))return this.createStyleClone(r);var s=r.cloneNode(!1);return $d(s)&&($d(r)&&r.currentSrc&&r.currentSrc!==r.src&&(s.src=r.currentSrc,s.srcset=""),s.loading==="lazy"&&(s.loading="eager")),Xp(s)?this.createCustomElementClone(s):s},i.prototype.createCustomElementClone=function(r){var s=document.createElement("html2canvascustomelement");return Ed(r.style,s),s},i.prototype.createStyleClone=function(r){try{var s=r.sheet;if(s&&s.cssRules){var o=[].slice.call(s.cssRules,0).reduce(function(u,h){return h&&typeof h.cssText=="string"?u+h.cssText:u},""),d=r.cloneNode(!1);return d.textContent=o,d}}catch(u){if(this.context.logger.error("Unable to access cssRules property",u),u.name!=="SecurityError")throw u}return r.cloneNode(!1)},i.prototype.createCanvasClone=function(r){var s;if(this.options.inlineImages&&r.ownerDocument){var o=r.ownerDocument.createElement("img");try{return o.src=r.toDataURL(),o}catch{this.context.logger.info("Unable to inline canvas contents, canvas is tainted",r)}}var d=r.cloneNode(!1);try{d.width=r.width,d.height=r.height;var u=r.getContext("2d"),h=d.getContext("2d");if(h)if(!this.options.allowTaint&&u)h.putImageData(u.getImageData(0,0,r.width,r.height),0,0);else{var B=(s=r.getContext("webgl2"))!==null&&s!==void 0?s:r.getContext("webgl");if(B){var m=B.getContextAttributes();m?.preserveDrawingBuffer===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",r)}h.drawImage(r,0,0)}return d}catch{this.context.logger.info("Unable to clone canvas as it is tainted",r)}return d},i.prototype.createVideoClone=function(r){var s=r.ownerDocument.createElement("canvas");s.width=r.offsetWidth,s.height=r.offsetHeight;var o=s.getContext("2d");try{return o&&(o.drawImage(r,0,0,s.width,s.height),this.options.allowTaint||o.getImageData(0,0,s.width,s.height)),s}catch{this.context.logger.info("Unable to clone video as it is tainted",r)}var d=r.ownerDocument.createElement("canvas");return d.width=r.offsetWidth,d.height=r.offsetHeight,d},i.prototype.appendChildNode=function(r,s,o){(!wr(s)||!$C(s)&&!s.hasAttribute(sx)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(s)))&&(!this.options.copyStyles||!wr(s)||!Yp(s))&&r.appendChild(this.cloneNode(s,o))},i.prototype.cloneChildNodes=function(r,s,o){for(var d=this,u=r.shadowRoot?r.shadowRoot.firstChild:r.firstChild;u;u=u.nextSibling)if(wr(u)&&ix(u)&&typeof u.assignedNodes=="function"){var h=u.assignedNodes();h.length&&h.forEach(function(B){return d.appendChildNode(s,B,o)})}else this.appendChildNode(s,u,o)},i.prototype.cloneNode=function(r,s){if(tx(r))return document.createTextNode(r.data);if(!r.ownerDocument)return r.cloneNode(!1);var o=r.ownerDocument.defaultView;if(o&&wr(r)&&(Wd(r)||Ns(r))){var d=this.createElementClone(r);d.style.transitionProperty="none";var u=o.getComputedStyle(r),h=o.getComputedStyle(r,":before"),B=o.getComputedStyle(r,":after");this.referenceElement===r&&Wd(d)&&(this.clonedReferenceElement=d),du(d)&&u2(d);var m=this.counters.parse(new jp(this.context,u)),w=this.resolvePseudoContent(r,d,h,Ki.BEFORE);Xp(r)&&(s=!0),Vp(r)||this.cloneChildNodes(r,d,s),w&&d.insertBefore(w,d.firstChild);var v=this.resolvePseudoContent(r,d,B,Ki.AFTER);return v&&d.appendChild(v),this.counters.pop(m),(u&&(this.options.copyStyles||Ns(r))&&!rx(r)||s)&&Ed(u,d),(r.scrollTop!==0||r.scrollLeft!==0)&&this.scrolledElements.push([d,r.scrollLeft,r.scrollTop]),(Ls(r)||Os(r))&&(Ls(d)||Os(d))&&(d.value=r.value),d}return r.cloneNode(!1)},i.prototype.resolvePseudoContent=function(r,s,o,d){var u=this;if(o){var h=o.content,B=s.ownerDocument;if(!(!B||!h||h==="none"||h==="-moz-alt-content"||o.display==="none")){this.counters.parse(new jp(this.context,o));var m=new Jv(this.context,o),w=B.createElement("html2canvaspseudoelement");Ed(o,w),m.content.forEach(function(E){if(E.type===0)w.appendChild(B.createTextNode(E.value));else if(E.type===22){var M=B.createElement("img");M.src=E.value,M.style.opacity="1",w.appendChild(M)}else if(E.type===18){if(E.name==="attr"){var aA=E.values.filter(Ee);aA.length&&w.appendChild(B.createTextNode(r.getAttribute(aA[0].value)||""))}else if(E.name==="counter"){var _=E.values.filter(vr),lA=_[0],pA=_[1];if(lA&&Ee(lA)){var QA=u.counters.getCounterValue(lA.value),cA=pA&&Ee(pA)?Xd.parse(u.context,pA.value):3;w.appendChild(B.createTextNode(Gi(QA,cA,!1)))}}else if(E.name==="counters"){var DA=E.values.filter(vr),lA=DA[0],yA=DA[1],pA=DA[2];if(lA&&Ee(lA)){var gA=u.counters.getCounterValues(lA.value),AA=pA&&Ee(pA)?Xd.parse(u.context,pA.value):3,SA=yA&&yA.type===0?yA.value:"",V=gA.map(function(EA){return Gi(EA,AA,!1)}).join(SA);w.appendChild(B.createTextNode(V))}}}else if(E.type===20)switch(E.value){case"open-quote":w.appendChild(B.createTextNode(Sp(m.quotes,u.quoteDepth++,!0)));break;case"close-quote":w.appendChild(B.createTextNode(Sp(m.quotes,--u.quoteDepth,!1)));break;default:w.appendChild(B.createTextNode(E.value))}}),w.className=Pd+" "+Au;var v=d===Ki.BEFORE?" "+Pd:" "+Au;return Ns(s)?s.className.baseValue+=v:s.className+=v,w}}},i.destroy=function(r){return r.parentNode?(r.parentNode.removeChild(r),!0):!1},i}(),Ki;(function(i){i[i.BEFORE=0]="BEFORE",i[i.AFTER=1]="AFTER"})(Ki||(Ki={}));var t2=function(i,r){var s=i.createElement("iframe");return s.className="html2canvas-container",s.style.visibility="hidden",s.style.position="fixed",s.style.left="-10000px",s.style.top="0px",s.style.border="0",s.width=r.width.toString(),s.height=r.height.toString(),s.scrolling="no",s.setAttribute(sx,"true"),i.body.appendChild(s),s},n2=function(i){return new Promise(function(r){if(i.complete){r();return}if(!i.src){r();return}i.onload=r,i.onerror=r})},a2=function(i){return Promise.all([].slice.call(i.images,0).map(n2))},r2=function(i){return new Promise(function(r,s){var o=i.contentWindow;if(!o)return s("No window assigned for iframe");var d=o.document;o.onload=i.onload=function(){o.onload=i.onload=null;var u=setInterval(function(){d.body.childNodes.length>0&&d.readyState==="complete"&&(clearInterval(u),r(i))},50)}})},i2=["all","d","content"],Ed=function(i,r){for(var s=i.length-1;s>=0;s--){var o=i.item(s);i2.indexOf(o)===-1&&r.style.setProperty(o,i.getPropertyValue(o))}return r},o2=function(i){var r="";return i&&(r+="<!DOCTYPE ",i.name&&(r+=i.name),i.internalSubset&&(r+=i.internalSubset),i.publicId&&(r+='"'+i.publicId+'"'),i.systemId&&(r+='"'+i.systemId+'"'),r+=">"),r},s2=function(i,r,s){i&&i.defaultView&&(r!==i.defaultView.pageXOffset||s!==i.defaultView.pageYOffset)&&i.defaultView.scrollTo(r,s)},l2=function(i){var r=i[0],s=i[1],o=i[2];r.scrollLeft=s,r.scrollTop=o},c2=":before",d2=":after",Pd="___html2canvas___pseudoelement_before",Au="___html2canvas___pseudoelement_after",A0=`{
    content: "" !important;
    display: none !important;
}`,u2=function(i){f2(i,"."+Pd+c2+A0+`
         .`+Au+d2+A0)},f2=function(i,r){var s=i.ownerDocument;if(s){var o=s.createElement("style");o.textContent=r,i.appendChild(o)}},lx=function(){function i(){}return i.getOrigin=function(r){var s=i._link;return s?(s.href=r,s.href=s.href,s.protocol+s.hostname+s.port):"about:blank"},i.isSameOrigin=function(r){return i.getOrigin(r)===i._origin},i.setContext=function(r){i._link=r.document.createElement("a"),i._origin=i.getOrigin(r.location.href)},i._origin="about:blank",i}(),h2=function(){function i(r,s){this.context=r,this._options=s,this._cache={}}return i.prototype.addImage=function(r){var s=Promise.resolve();return this.has(r)||(jd(r)||m2(r))&&(this._cache[r]=this.loadImage(r)).catch(function(){}),s},i.prototype.match=function(r){return this._cache[r]},i.prototype.loadImage=function(r){return mt(this,void 0,void 0,function(){var s,o,d,u,h=this;return gt(this,function(B){switch(B.label){case 0:return s=lx.isSameOrigin(r),o=!Sd(r)&&this._options.useCORS===!0&&dt.SUPPORT_CORS_IMAGES&&!s,d=!Sd(r)&&!s&&!jd(r)&&typeof this._options.proxy=="string"&&dt.SUPPORT_CORS_XHR&&!o,!s&&this._options.allowTaint===!1&&!Sd(r)&&!jd(r)&&!d&&!o?[2]:(u=r,d?[4,this.proxy(u)]:[3,2]);case 1:u=B.sent(),B.label=2;case 2:return this.context.logger.debug("Added image "+r.substring(0,256)),[4,new Promise(function(m,w){var v=new Image;v.onload=function(){return m(v)},v.onerror=w,(B2(u)||o)&&(v.crossOrigin="anonymous"),v.src=u,v.complete===!0&&setTimeout(function(){return m(v)},500),h._options.imageTimeout>0&&setTimeout(function(){return w("Timed out ("+h._options.imageTimeout+"ms) loading image")},h._options.imageTimeout)})];case 3:return[2,B.sent()]}})})},i.prototype.has=function(r){return typeof this._cache[r]<"u"},i.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},i.prototype.proxy=function(r){var s=this,o=this._options.proxy;if(!o)throw new Error("No proxy defined");var d=r.substring(0,256);return new Promise(function(u,h){var B=dt.SUPPORT_RESPONSE_TYPE?"blob":"text",m=new XMLHttpRequest;m.onload=function(){if(m.status===200)if(B==="text")u(m.response);else{var E=new FileReader;E.addEventListener("load",function(){return u(E.result)},!1),E.addEventListener("error",function(M){return h(M)},!1),E.readAsDataURL(m.response)}else h("Failed to proxy resource "+d+" with status code "+m.status)},m.onerror=h;var w=o.indexOf("?")>-1?"&":"?";if(m.open("GET",""+o+w+"url="+encodeURIComponent(r)+"&responseType="+B),B!=="text"&&m instanceof XMLHttpRequest&&(m.responseType=B),s._options.imageTimeout){var v=s._options.imageTimeout;m.timeout=v,m.ontimeout=function(){return h("Timed out ("+v+"ms) proxying "+d)}}m.send()})},i}(),g2=/^data:image\/svg\+xml/i,p2=/^data:image\/.*;base64,/i,x2=/^data:image\/.*/i,m2=function(i){return dt.SUPPORT_SVG_DRAWING||!b2(i)},Sd=function(i){return x2.test(i)},B2=function(i){return p2.test(i)},jd=function(i){return i.substr(0,4)==="blob"},b2=function(i){return i.substr(-3).toLowerCase()==="svg"||g2.test(i)},zA=function(){function i(r,s){this.type=0,this.x=r,this.y=s}return i.prototype.add=function(r,s){return new i(this.x+r,this.y+s)},i}(),xr=function(i,r,s){return new zA(i.x+(r.x-i.x)*s,i.y+(r.y-i.y)*s)},Qs=function(){function i(r,s,o,d){this.type=1,this.start=r,this.startControl=s,this.endControl=o,this.end=d}return i.prototype.subdivide=function(r,s){var o=xr(this.start,this.startControl,r),d=xr(this.startControl,this.endControl,r),u=xr(this.endControl,this.end,r),h=xr(o,d,r),B=xr(d,u,r),m=xr(h,B,r);return s?new i(this.start,o,h,m):new i(m,B,u,this.end)},i.prototype.add=function(r,s){return new i(this.start.add(r,s),this.startControl.add(r,s),this.endControl.add(r,s),this.end.add(r,s))},i.prototype.reverse=function(){return new i(this.end,this.endControl,this.startControl,this.start)},i}(),_t=function(i){return i.type===1},w2=function(){function i(r){var s=r.styles,o=r.bounds,d=ki(s.borderTopLeftRadius,o.width,o.height),u=d[0],h=d[1],B=ki(s.borderTopRightRadius,o.width,o.height),m=B[0],w=B[1],v=ki(s.borderBottomRightRadius,o.width,o.height),E=v[0],M=v[1],aA=ki(s.borderBottomLeftRadius,o.width,o.height),_=aA[0],lA=aA[1],pA=[];pA.push((u+m)/o.width),pA.push((_+E)/o.width),pA.push((h+lA)/o.height),pA.push((w+M)/o.height);var QA=Math.max.apply(Math,pA);QA>1&&(u/=QA,h/=QA,m/=QA,w/=QA,E/=QA,M/=QA,_/=QA,lA/=QA);var cA=o.width-m,DA=o.height-M,yA=o.width-E,gA=o.height-lA,AA=s.borderTopWidth,SA=s.borderRightWidth,V=s.borderBottomWidth,iA=s.borderLeftWidth,uA=ke(s.paddingTop,r.bounds.width),EA=ke(s.paddingRight,r.bounds.width),tA=ke(s.paddingBottom,r.bounds.width),IA=ke(s.paddingLeft,r.bounds.width);this.topLeftBorderDoubleOuterBox=u>0||h>0?Ie(o.left+iA/3,o.top+AA/3,u-iA/3,h-AA/3,ye.TOP_LEFT):new zA(o.left+iA/3,o.top+AA/3),this.topRightBorderDoubleOuterBox=u>0||h>0?Ie(o.left+cA,o.top+AA/3,m-SA/3,w-AA/3,ye.TOP_RIGHT):new zA(o.left+o.width-SA/3,o.top+AA/3),this.bottomRightBorderDoubleOuterBox=E>0||M>0?Ie(o.left+yA,o.top+DA,E-SA/3,M-V/3,ye.BOTTOM_RIGHT):new zA(o.left+o.width-SA/3,o.top+o.height-V/3),this.bottomLeftBorderDoubleOuterBox=_>0||lA>0?Ie(o.left+iA/3,o.top+gA,_-iA/3,lA-V/3,ye.BOTTOM_LEFT):new zA(o.left+iA/3,o.top+o.height-V/3),this.topLeftBorderDoubleInnerBox=u>0||h>0?Ie(o.left+iA*2/3,o.top+AA*2/3,u-iA*2/3,h-AA*2/3,ye.TOP_LEFT):new zA(o.left+iA*2/3,o.top+AA*2/3),this.topRightBorderDoubleInnerBox=u>0||h>0?Ie(o.left+cA,o.top+AA*2/3,m-SA*2/3,w-AA*2/3,ye.TOP_RIGHT):new zA(o.left+o.width-SA*2/3,o.top+AA*2/3),this.bottomRightBorderDoubleInnerBox=E>0||M>0?Ie(o.left+yA,o.top+DA,E-SA*2/3,M-V*2/3,ye.BOTTOM_RIGHT):new zA(o.left+o.width-SA*2/3,o.top+o.height-V*2/3),this.bottomLeftBorderDoubleInnerBox=_>0||lA>0?Ie(o.left+iA*2/3,o.top+gA,_-iA*2/3,lA-V*2/3,ye.BOTTOM_LEFT):new zA(o.left+iA*2/3,o.top+o.height-V*2/3),this.topLeftBorderStroke=u>0||h>0?Ie(o.left+iA/2,o.top+AA/2,u-iA/2,h-AA/2,ye.TOP_LEFT):new zA(o.left+iA/2,o.top+AA/2),this.topRightBorderStroke=u>0||h>0?Ie(o.left+cA,o.top+AA/2,m-SA/2,w-AA/2,ye.TOP_RIGHT):new zA(o.left+o.width-SA/2,o.top+AA/2),this.bottomRightBorderStroke=E>0||M>0?Ie(o.left+yA,o.top+DA,E-SA/2,M-V/2,ye.BOTTOM_RIGHT):new zA(o.left+o.width-SA/2,o.top+o.height-V/2),this.bottomLeftBorderStroke=_>0||lA>0?Ie(o.left+iA/2,o.top+gA,_-iA/2,lA-V/2,ye.BOTTOM_LEFT):new zA(o.left+iA/2,o.top+o.height-V/2),this.topLeftBorderBox=u>0||h>0?Ie(o.left,o.top,u,h,ye.TOP_LEFT):new zA(o.left,o.top),this.topRightBorderBox=m>0||w>0?Ie(o.left+cA,o.top,m,w,ye.TOP_RIGHT):new zA(o.left+o.width,o.top),this.bottomRightBorderBox=E>0||M>0?Ie(o.left+yA,o.top+DA,E,M,ye.BOTTOM_RIGHT):new zA(o.left+o.width,o.top+o.height),this.bottomLeftBorderBox=_>0||lA>0?Ie(o.left,o.top+gA,_,lA,ye.BOTTOM_LEFT):new zA(o.left,o.top+o.height),this.topLeftPaddingBox=u>0||h>0?Ie(o.left+iA,o.top+AA,Math.max(0,u-iA),Math.max(0,h-AA),ye.TOP_LEFT):new zA(o.left+iA,o.top+AA),this.topRightPaddingBox=m>0||w>0?Ie(o.left+Math.min(cA,o.width-SA),o.top+AA,cA>o.width+SA?0:Math.max(0,m-SA),Math.max(0,w-AA),ye.TOP_RIGHT):new zA(o.left+o.width-SA,o.top+AA),this.bottomRightPaddingBox=E>0||M>0?Ie(o.left+Math.min(yA,o.width-iA),o.top+Math.min(DA,o.height-V),Math.max(0,E-SA),Math.max(0,M-V),ye.BOTTOM_RIGHT):new zA(o.left+o.width-SA,o.top+o.height-V),this.bottomLeftPaddingBox=_>0||lA>0?Ie(o.left+iA,o.top+Math.min(gA,o.height-V),Math.max(0,_-iA),Math.max(0,lA-V),ye.BOTTOM_LEFT):new zA(o.left+iA,o.top+o.height-V),this.topLeftContentBox=u>0||h>0?Ie(o.left+iA+IA,o.top+AA+uA,Math.max(0,u-(iA+IA)),Math.max(0,h-(AA+uA)),ye.TOP_LEFT):new zA(o.left+iA+IA,o.top+AA+uA),this.topRightContentBox=m>0||w>0?Ie(o.left+Math.min(cA,o.width+iA+IA),o.top+AA+uA,cA>o.width+iA+IA?0:m-iA+IA,w-(AA+uA),ye.TOP_RIGHT):new zA(o.left+o.width-(SA+EA),o.top+AA+uA),this.bottomRightContentBox=E>0||M>0?Ie(o.left+Math.min(yA,o.width-(iA+IA)),o.top+Math.min(DA,o.height+AA+uA),Math.max(0,E-(SA+EA)),M-(V+tA),ye.BOTTOM_RIGHT):new zA(o.left+o.width-(SA+EA),o.top+o.height-(V+tA)),this.bottomLeftContentBox=_>0||lA>0?Ie(o.left+iA+IA,o.top+gA,Math.max(0,_-(iA+IA)),lA-(V+tA),ye.BOTTOM_LEFT):new zA(o.left+iA+IA,o.top+o.height-(V+tA))}return i}(),ye;(function(i){i[i.TOP_LEFT=0]="TOP_LEFT",i[i.TOP_RIGHT=1]="TOP_RIGHT",i[i.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",i[i.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(ye||(ye={}));var Ie=function(i,r,s,o,d){var u=4*((Math.sqrt(2)-1)/3),h=s*u,B=o*u,m=i+s,w=r+o;switch(d){case ye.TOP_LEFT:return new Qs(new zA(i,w),new zA(i,w-B),new zA(m-h,r),new zA(m,r));case ye.TOP_RIGHT:return new Qs(new zA(i,r),new zA(i+h,r),new zA(m,w-B),new zA(m,w));case ye.BOTTOM_RIGHT:return new Qs(new zA(m,r),new zA(m,r+B),new zA(i+h,w),new zA(i,w));case ye.BOTTOM_LEFT:default:return new Qs(new zA(m,w),new zA(m-h,w),new zA(i,r+B),new zA(i,r))}},Ks=function(i){return[i.topLeftBorderBox,i.topRightBorderBox,i.bottomRightBorderBox,i.bottomLeftBorderBox]},y2=function(i){return[i.topLeftContentBox,i.topRightContentBox,i.bottomRightContentBox,i.bottomLeftContentBox]},Rs=function(i){return[i.topLeftPaddingBox,i.topRightPaddingBox,i.bottomRightPaddingBox,i.bottomLeftPaddingBox]},v2=function(){function i(r,s,o){this.offsetX=r,this.offsetY=s,this.matrix=o,this.type=0,this.target=6}return i}(),Us=function(){function i(r,s){this.path=r,this.target=s,this.type=1}return i}(),C2=function(){function i(r){this.opacity=r,this.type=2,this.target=6}return i}(),Q2=function(i){return i.type===0},cx=function(i){return i.type===1},U2=function(i){return i.type===2},e0=function(i,r){return i.length===r.length?i.some(function(s,o){return s===r[o]}):!1},F2=function(i,r,s,o,d){return i.map(function(u,h){switch(h){case 0:return u.add(r,s);case 1:return u.add(r+o,s);case 2:return u.add(r+o,s+d);case 3:return u.add(r,s+d)}return u})},dx=function(){function i(r){this.element=r,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return i}(),ux=function(){function i(r,s){if(this.container=r,this.parent=s,this.effects=[],this.curves=new w2(this.container),this.container.styles.opacity<1&&this.effects.push(new C2(this.container.styles.opacity)),this.container.styles.transform!==null){var o=this.container.bounds.left+this.container.styles.transformOrigin[0].number,d=this.container.bounds.top+this.container.styles.transformOrigin[1].number,u=this.container.styles.transform;this.effects.push(new v2(o,d,u))}if(this.container.styles.overflowX!==0){var h=Ks(this.curves),B=Rs(this.curves);e0(h,B)?this.effects.push(new Us(h,6)):(this.effects.push(new Us(h,2)),this.effects.push(new Us(B,4)))}}return i.prototype.getEffects=function(r){for(var s=[2,3].indexOf(this.container.styles.position)===-1,o=this.parent,d=this.effects.slice(0);o;){var u=o.effects.filter(function(m){return!cx(m)});if(s||o.container.styles.position!==0||!o.parent){if(d.unshift.apply(d,u),s=[2,3].indexOf(o.container.styles.position)===-1,o.container.styles.overflowX!==0){var h=Ks(o.curves),B=Rs(o.curves);e0(h,B)||d.unshift(new Us(B,6))}}else d.unshift.apply(d,u);o=o.parent}return d.filter(function(m){return nt(m.target,r)})},i}(),eu=function(i,r,s,o){i.container.elements.forEach(function(d){var u=nt(d.flags,4),h=nt(d.flags,2),B=new ux(d,i);nt(d.styles.display,2048)&&o.push(B);var m=nt(d.flags,8)?[]:o;if(u||h){var w=u||d.styles.isPositioned()?s:r,v=new dx(B);if(d.styles.isPositioned()||d.styles.opacity<1||d.styles.isTransformed()){var E=d.styles.zIndex.order;if(E<0){var M=0;w.negativeZIndex.some(function(_,lA){return E>_.element.container.styles.zIndex.order?(M=lA,!1):M>0}),w.negativeZIndex.splice(M,0,v)}else if(E>0){var aA=0;w.positiveZIndex.some(function(_,lA){return E>=_.element.container.styles.zIndex.order?(aA=lA+1,!1):aA>0}),w.positiveZIndex.splice(aA,0,v)}else w.zeroOrAutoZIndexOrTransformedOrOpacity.push(v)}else d.styles.isFloating()?w.nonPositionedFloats.push(v):w.nonPositionedInlineLevel.push(v);eu(B,v,u?v:s,m)}else d.styles.isInlineLevel()?r.inlineLevel.push(B):r.nonInlineLevel.push(B),eu(B,r,s,m);nt(d.flags,8)&&fx(d,m)})},fx=function(i,r){for(var s=i instanceof qd?i.start:1,o=i instanceof qd?i.reversed:!1,d=0;d<r.length;d++){var u=r[d];u.container instanceof q0&&typeof u.container.value=="number"&&u.container.value!==0&&(s=u.container.value),u.listValue=Gi(s,u.container.styles.listStyleType,!0),s+=o?-1:1}},E2=function(i){var r=new ux(i,null),s=new dx(r),o=[];return eu(r,s,s,o),fx(r.container,o),s},t0=function(i,r){switch(r){case 0:return Vt(i.topLeftBorderBox,i.topLeftPaddingBox,i.topRightBorderBox,i.topRightPaddingBox);case 1:return Vt(i.topRightBorderBox,i.topRightPaddingBox,i.bottomRightBorderBox,i.bottomRightPaddingBox);case 2:return Vt(i.bottomRightBorderBox,i.bottomRightPaddingBox,i.bottomLeftBorderBox,i.bottomLeftPaddingBox);case 3:default:return Vt(i.bottomLeftBorderBox,i.bottomLeftPaddingBox,i.topLeftBorderBox,i.topLeftPaddingBox)}},S2=function(i,r){switch(r){case 0:return Vt(i.topLeftBorderBox,i.topLeftBorderDoubleOuterBox,i.topRightBorderBox,i.topRightBorderDoubleOuterBox);case 1:return Vt(i.topRightBorderBox,i.topRightBorderDoubleOuterBox,i.bottomRightBorderBox,i.bottomRightBorderDoubleOuterBox);case 2:return Vt(i.bottomRightBorderBox,i.bottomRightBorderDoubleOuterBox,i.bottomLeftBorderBox,i.bottomLeftBorderDoubleOuterBox);case 3:default:return Vt(i.bottomLeftBorderBox,i.bottomLeftBorderDoubleOuterBox,i.topLeftBorderBox,i.topLeftBorderDoubleOuterBox)}},j2=function(i,r){switch(r){case 0:return Vt(i.topLeftBorderDoubleInnerBox,i.topLeftPaddingBox,i.topRightBorderDoubleInnerBox,i.topRightPaddingBox);case 1:return Vt(i.topRightBorderDoubleInnerBox,i.topRightPaddingBox,i.bottomRightBorderDoubleInnerBox,i.bottomRightPaddingBox);case 2:return Vt(i.bottomRightBorderDoubleInnerBox,i.bottomRightPaddingBox,i.bottomLeftBorderDoubleInnerBox,i.bottomLeftPaddingBox);case 3:default:return Vt(i.bottomLeftBorderDoubleInnerBox,i.bottomLeftPaddingBox,i.topLeftBorderDoubleInnerBox,i.topLeftPaddingBox)}},H2=function(i,r){switch(r){case 0:return Fs(i.topLeftBorderStroke,i.topRightBorderStroke);case 1:return Fs(i.topRightBorderStroke,i.bottomRightBorderStroke);case 2:return Fs(i.bottomRightBorderStroke,i.bottomLeftBorderStroke);case 3:default:return Fs(i.bottomLeftBorderStroke,i.topLeftBorderStroke)}},Fs=function(i,r){var s=[];return _t(i)?s.push(i.subdivide(.5,!1)):s.push(i),_t(r)?s.push(r.subdivide(.5,!0)):s.push(r),s},Vt=function(i,r,s,o){var d=[];return _t(i)?d.push(i.subdivide(.5,!1)):d.push(i),_t(s)?d.push(s.subdivide(.5,!0)):d.push(s),_t(o)?d.push(o.subdivide(.5,!0).reverse()):d.push(o),_t(r)?d.push(r.subdivide(.5,!1).reverse()):d.push(r),d},hx=function(i){var r=i.bounds,s=i.styles;return r.add(s.borderLeftWidth,s.borderTopWidth,-(s.borderRightWidth+s.borderLeftWidth),-(s.borderTopWidth+s.borderBottomWidth))},zs=function(i){var r=i.styles,s=i.bounds,o=ke(r.paddingLeft,s.width),d=ke(r.paddingRight,s.width),u=ke(r.paddingTop,s.width),h=ke(r.paddingBottom,s.width);return s.add(o+r.borderLeftWidth,u+r.borderTopWidth,-(r.borderRightWidth+r.borderLeftWidth+o+d),-(r.borderTopWidth+r.borderBottomWidth+u+h))},N2=function(i,r){return i===0?r.bounds:i===2?zs(r):hx(r)},k2=function(i,r){return i===0?r.bounds:i===2?zs(r):hx(r)},Hd=function(i,r,s){var o=N2(br(i.styles.backgroundOrigin,r),i),d=k2(br(i.styles.backgroundClip,r),i),u=M2(br(i.styles.backgroundSize,r),s,o),h=u[0],B=u[1],m=ki(br(i.styles.backgroundPosition,r),o.width-h,o.height-B),w=D2(br(i.styles.backgroundRepeat,r),m,u,o,d),v=Math.round(o.left+m[0]),E=Math.round(o.top+m[1]);return[w,v,E,h,B]},mr=function(i){return Ee(i)&&i.value===yr.AUTO},Es=function(i){return typeof i=="number"},M2=function(i,r,s){var o=r[0],d=r[1],u=r[2],h=i[0],B=i[1];if(!h)return[0,0];if(At(h)&&B&&At(B))return[ke(h,s.width),ke(B,s.height)];var m=Es(u);if(Ee(h)&&(h.value===yr.CONTAIN||h.value===yr.COVER)){if(Es(u)){var w=s.width/s.height;return w<u!=(h.value===yr.COVER)?[s.width,s.width/u]:[s.height*u,s.height]}return[s.width,s.height]}var v=Es(o),E=Es(d),M=v||E;if(mr(h)&&(!B||mr(B))){if(v&&E)return[o,d];if(!m&&!M)return[s.width,s.height];if(M&&m){var aA=v?o:d*u,_=E?d:o/u;return[aA,_]}var lA=v?o:s.width,pA=E?d:s.height;return[lA,pA]}if(m){var QA=0,cA=0;return At(h)?QA=ke(h,s.width):At(B)&&(cA=ke(B,s.height)),mr(h)?QA=cA*u:(!B||mr(B))&&(cA=QA/u),[QA,cA]}var DA=null,yA=null;if(At(h)?DA=ke(h,s.width):B&&At(B)&&(yA=ke(B,s.height)),DA!==null&&(!B||mr(B))&&(yA=v&&E?DA/o*d:s.height),yA!==null&&mr(h)&&(DA=v&&E?yA/d*o:s.width),DA!==null&&yA!==null)return[DA,yA];throw new Error("Unable to calculate background-size for element")},br=function(i,r){var s=i[r];return typeof s>"u"?i[0]:s},D2=function(i,r,s,o,d){var u=r[0],h=r[1],B=s[0],m=s[1];switch(i){case 2:return[new zA(Math.round(o.left),Math.round(o.top+h)),new zA(Math.round(o.left+o.width),Math.round(o.top+h)),new zA(Math.round(o.left+o.width),Math.round(m+o.top+h)),new zA(Math.round(o.left),Math.round(m+o.top+h))];case 3:return[new zA(Math.round(o.left+u),Math.round(o.top)),new zA(Math.round(o.left+u+B),Math.round(o.top)),new zA(Math.round(o.left+u+B),Math.round(o.height+o.top)),new zA(Math.round(o.left+u),Math.round(o.height+o.top))];case 1:return[new zA(Math.round(o.left+u),Math.round(o.top+h)),new zA(Math.round(o.left+u+B),Math.round(o.top+h)),new zA(Math.round(o.left+u+B),Math.round(o.top+h+m)),new zA(Math.round(o.left+u),Math.round(o.top+h+m))];default:return[new zA(Math.round(d.left),Math.round(d.top)),new zA(Math.round(d.left+d.width),Math.round(d.top)),new zA(Math.round(d.left+d.width),Math.round(d.height+d.top)),new zA(Math.round(d.left),Math.round(d.height+d.top))]}},T2="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",n0="Hidden Text",I2=function(){function i(r){this._data={},this._document=r}return i.prototype.parseMetrics=function(r,s){var o=this._document.createElement("div"),d=this._document.createElement("img"),u=this._document.createElement("span"),h=this._document.body;o.style.visibility="hidden",o.style.fontFamily=r,o.style.fontSize=s,o.style.margin="0",o.style.padding="0",o.style.whiteSpace="nowrap",h.appendChild(o),d.src=T2,d.width=1,d.height=1,d.style.margin="0",d.style.padding="0",d.style.verticalAlign="baseline",u.style.fontFamily=r,u.style.fontSize=s,u.style.margin="0",u.style.padding="0",u.appendChild(this._document.createTextNode(n0)),o.appendChild(u),o.appendChild(d);var B=d.offsetTop-u.offsetTop+2;o.removeChild(u),o.appendChild(this._document.createTextNode(n0)),o.style.lineHeight="normal",d.style.verticalAlign="super";var m=d.offsetTop-o.offsetTop+2;return h.removeChild(o),{baseline:B,middle:m}},i.prototype.getMetrics=function(r,s){var o=r+" "+s;return typeof this._data[o]>"u"&&(this._data[o]=this.parseMetrics(r,s)),this._data[o]},i}(),gx=function(){function i(r,s){this.context=r,this.options=s}return i}(),L2=1e4,O2=function(i){qt(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d._activeEffects=[],d.canvas=o.canvas?o.canvas:document.createElement("canvas"),d.ctx=d.canvas.getContext("2d"),o.canvas||(d.canvas.width=Math.floor(o.width*o.scale),d.canvas.height=Math.floor(o.height*o.scale),d.canvas.style.width=o.width+"px",d.canvas.style.height=o.height+"px"),d.fontMetrics=new I2(document),d.ctx.scale(d.options.scale,d.options.scale),d.ctx.translate(-o.x,-o.y),d.ctx.textBaseline="bottom",d._activeEffects=[],d.context.logger.debug("Canvas renderer initialized ("+o.width+"x"+o.height+") with scale "+o.scale),d}return r.prototype.applyEffects=function(s){for(var o=this;this._activeEffects.length;)this.popEffect();s.forEach(function(d){return o.applyEffect(d)})},r.prototype.applyEffect=function(s){this.ctx.save(),U2(s)&&(this.ctx.globalAlpha=s.opacity),Q2(s)&&(this.ctx.translate(s.offsetX,s.offsetY),this.ctx.transform(s.matrix[0],s.matrix[1],s.matrix[2],s.matrix[3],s.matrix[4],s.matrix[5]),this.ctx.translate(-s.offsetX,-s.offsetY)),cx(s)&&(this.path(s.path),this.ctx.clip()),this._activeEffects.push(s)},r.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},r.prototype.renderStack=function(s){return mt(this,void 0,void 0,function(){var o;return gt(this,function(d){switch(d.label){case 0:return o=s.element.container.styles,o.isVisible()?[4,this.renderStackContent(s)]:[3,2];case 1:d.sent(),d.label=2;case 2:return[2]}})})},r.prototype.renderNode=function(s){return mt(this,void 0,void 0,function(){return gt(this,function(o){switch(o.label){case 0:if(nt(s.container.flags,16))debugger;return s.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(s)]:[3,3];case 1:return o.sent(),[4,this.renderNodeContent(s)];case 2:o.sent(),o.label=3;case 3:return[2]}})})},r.prototype.renderTextWithLetterSpacing=function(s,o,d){var u=this;if(o===0)this.ctx.fillText(s.text,s.bounds.left,s.bounds.top+d);else{var h=lu(s.text);h.reduce(function(B,m){return u.ctx.fillText(m,B,s.bounds.top+d),B+u.ctx.measureText(m).width},s.bounds.left)}},r.prototype.createFontStyle=function(s){var o=s.fontVariant.filter(function(h){return h==="normal"||h==="small-caps"}).join(""),d=G2(s.fontFamily).join(", "),u=Xi(s.fontSize)?""+s.fontSize.number+s.fontSize.unit:s.fontSize.number+"px";return[[s.fontStyle,o,s.fontWeight,u,d].join(" "),d,u]},r.prototype.renderTextNode=function(s,o){return mt(this,void 0,void 0,function(){var d,u,h,B,m,w,v,E,M=this;return gt(this,function(aA){return d=this.createFontStyle(o),u=d[0],h=d[1],B=d[2],this.ctx.font=u,this.ctx.direction=o.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",m=this.fontMetrics.getMetrics(h,B),w=m.baseline,v=m.middle,E=o.paintOrder,s.textBounds.forEach(function(_){E.forEach(function(lA){switch(lA){case 0:M.ctx.fillStyle=ot(o.color),M.renderTextWithLetterSpacing(_,o.letterSpacing,w);var pA=o.textShadow;pA.length&&_.text.trim().length&&(pA.slice(0).reverse().forEach(function(QA){M.ctx.shadowColor=ot(QA.color),M.ctx.shadowOffsetX=QA.offsetX.number*M.options.scale,M.ctx.shadowOffsetY=QA.offsetY.number*M.options.scale,M.ctx.shadowBlur=QA.blur.number,M.renderTextWithLetterSpacing(_,o.letterSpacing,w)}),M.ctx.shadowColor="",M.ctx.shadowOffsetX=0,M.ctx.shadowOffsetY=0,M.ctx.shadowBlur=0),o.textDecorationLine.length&&(M.ctx.fillStyle=ot(o.textDecorationColor||o.color),o.textDecorationLine.forEach(function(QA){switch(QA){case 1:M.ctx.fillRect(_.bounds.left,Math.round(_.bounds.top+w),_.bounds.width,1);break;case 2:M.ctx.fillRect(_.bounds.left,Math.round(_.bounds.top),_.bounds.width,1);break;case 3:M.ctx.fillRect(_.bounds.left,Math.ceil(_.bounds.top+v),_.bounds.width,1);break}}));break;case 1:o.webkitTextStrokeWidth&&_.text.trim().length&&(M.ctx.strokeStyle=ot(o.webkitTextStrokeColor),M.ctx.lineWidth=o.webkitTextStrokeWidth,M.ctx.lineJoin=window.chrome?"miter":"round",M.ctx.strokeText(_.text,_.bounds.left,_.bounds.top+w)),M.ctx.strokeStyle="",M.ctx.lineWidth=0,M.ctx.lineJoin="miter";break}})}),[2]})})},r.prototype.renderReplacedElement=function(s,o,d){if(d&&s.intrinsicWidth>0&&s.intrinsicHeight>0){var u=zs(s),h=Rs(o);this.path(h),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(d,0,0,s.intrinsicWidth,s.intrinsicHeight,u.left,u.top,u.width,u.height),this.ctx.restore()}},r.prototype.renderNodeContent=function(s){return mt(this,void 0,void 0,function(){var o,d,u,h,B,m,cA,cA,w,v,E,M,yA,aA,_,gA,lA,pA,QA,cA,DA,yA,gA;return gt(this,function(AA){switch(AA.label){case 0:this.applyEffects(s.getEffects(4)),o=s.container,d=s.curves,u=o.styles,h=0,B=o.textNodes,AA.label=1;case 1:return h<B.length?(m=B[h],[4,this.renderTextNode(m,u)]):[3,4];case 2:AA.sent(),AA.label=3;case 3:return h++,[3,1];case 4:if(!(o instanceof X0))return[3,8];AA.label=5;case 5:return AA.trys.push([5,7,,8]),[4,this.context.cache.match(o.src)];case 6:return cA=AA.sent(),this.renderReplacedElement(o,d,cA),[3,8];case 7:return AA.sent(),this.context.logger.error("Error loading image "+o.src),[3,8];case 8:if(o instanceof J0&&this.renderReplacedElement(o,d,o.canvas),!(o instanceof Z0))return[3,12];AA.label=9;case 9:return AA.trys.push([9,11,,12]),[4,this.context.cache.match(o.svg)];case 10:return cA=AA.sent(),this.renderReplacedElement(o,d,cA),[3,12];case 11:return AA.sent(),this.context.logger.error("Error loading svg "+o.svg.substring(0,255)),[3,12];case 12:return o instanceof P0&&o.tree?(w=new r(this.context,{scale:this.options.scale,backgroundColor:o.backgroundColor,x:0,y:0,width:o.width,height:o.height}),[4,w.render(o.tree)]):[3,14];case 13:v=AA.sent(),o.width&&o.height&&this.ctx.drawImage(v,0,0,o.width,o.height,o.bounds.left,o.bounds.top,o.bounds.width,o.bounds.height),AA.label=14;case 14:if(o instanceof cu&&(E=Math.min(o.bounds.width,o.bounds.height),o.type===Ts?o.checked&&(this.ctx.save(),this.path([new zA(o.bounds.left+E*.39363,o.bounds.top+E*.79),new zA(o.bounds.left+E*.16,o.bounds.top+E*.5549),new zA(o.bounds.left+E*.27347,o.bounds.top+E*.44071),new zA(o.bounds.left+E*.39694,o.bounds.top+E*.5649),new zA(o.bounds.left+E*.72983,o.bounds.top+E*.23),new zA(o.bounds.left+E*.84,o.bounds.top+E*.34085),new zA(o.bounds.left+E*.39363,o.bounds.top+E*.79)]),this.ctx.fillStyle=ot(Gp),this.ctx.fill(),this.ctx.restore()):o.type===Is&&o.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(o.bounds.left+E/2,o.bounds.top+E/2,E/4,0,Math.PI*2,!0),this.ctx.fillStyle=ot(Gp),this.ctx.fill(),this.ctx.restore())),K2(o)&&o.value.length){switch(M=this.createFontStyle(u),yA=M[0],aA=M[1],_=this.fontMetrics.getMetrics(yA,aA).baseline,this.ctx.font=yA,this.ctx.fillStyle=ot(u.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=z2(o.styles.textAlign),gA=zs(o),lA=0,o.styles.textAlign){case 1:lA+=gA.width/2;break;case 2:lA+=gA.width;break}pA=gA.add(lA,0,0,-gA.height/2+1),this.ctx.save(),this.path([new zA(gA.left,gA.top),new zA(gA.left+gA.width,gA.top),new zA(gA.left+gA.width,gA.top+gA.height),new zA(gA.left,gA.top+gA.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Oi(o.value,pA),u.letterSpacing,_),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!nt(o.styles.display,2048))return[3,20];if(o.styles.listStyleImage===null)return[3,19];if(QA=o.styles.listStyleImage,QA.type!==0)return[3,18];cA=void 0,DA=QA.url,AA.label=15;case 15:return AA.trys.push([15,17,,18]),[4,this.context.cache.match(DA)];case 16:return cA=AA.sent(),this.ctx.drawImage(cA,o.bounds.left-(cA.width+10),o.bounds.top),[3,18];case 17:return AA.sent(),this.context.logger.error("Error loading list-style-image "+DA),[3,18];case 18:return[3,20];case 19:s.listValue&&o.styles.listStyleType!==-1&&(yA=this.createFontStyle(u)[0],this.ctx.font=yA,this.ctx.fillStyle=ot(u.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",gA=new Qn(o.bounds.left,o.bounds.top+ke(o.styles.paddingTop,o.bounds.width),o.bounds.width,Fp(u.lineHeight,u.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Oi(s.listValue,gA),u.letterSpacing,Fp(u.lineHeight,u.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),AA.label=20;case 20:return[2]}})})},r.prototype.renderStackContent=function(s){return mt(this,void 0,void 0,function(){var o,d,QA,u,h,QA,B,m,QA,w,v,QA,E,M,QA,aA,_,QA,lA,pA,QA;return gt(this,function(cA){switch(cA.label){case 0:if(nt(s.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(s.element)];case 1:cA.sent(),o=0,d=s.negativeZIndex,cA.label=2;case 2:return o<d.length?(QA=d[o],[4,this.renderStack(QA)]):[3,5];case 3:cA.sent(),cA.label=4;case 4:return o++,[3,2];case 5:return[4,this.renderNodeContent(s.element)];case 6:cA.sent(),u=0,h=s.nonInlineLevel,cA.label=7;case 7:return u<h.length?(QA=h[u],[4,this.renderNode(QA)]):[3,10];case 8:cA.sent(),cA.label=9;case 9:return u++,[3,7];case 10:B=0,m=s.nonPositionedFloats,cA.label=11;case 11:return B<m.length?(QA=m[B],[4,this.renderStack(QA)]):[3,14];case 12:cA.sent(),cA.label=13;case 13:return B++,[3,11];case 14:w=0,v=s.nonPositionedInlineLevel,cA.label=15;case 15:return w<v.length?(QA=v[w],[4,this.renderStack(QA)]):[3,18];case 16:cA.sent(),cA.label=17;case 17:return w++,[3,15];case 18:E=0,M=s.inlineLevel,cA.label=19;case 19:return E<M.length?(QA=M[E],[4,this.renderNode(QA)]):[3,22];case 20:cA.sent(),cA.label=21;case 21:return E++,[3,19];case 22:aA=0,_=s.zeroOrAutoZIndexOrTransformedOrOpacity,cA.label=23;case 23:return aA<_.length?(QA=_[aA],[4,this.renderStack(QA)]):[3,26];case 24:cA.sent(),cA.label=25;case 25:return aA++,[3,23];case 26:lA=0,pA=s.positiveZIndex,cA.label=27;case 27:return lA<pA.length?(QA=pA[lA],[4,this.renderStack(QA)]):[3,30];case 28:cA.sent(),cA.label=29;case 29:return lA++,[3,27];case 30:return[2]}})})},r.prototype.mask=function(s){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(s.slice(0).reverse()),this.ctx.closePath()},r.prototype.path=function(s){this.ctx.beginPath(),this.formatPath(s),this.ctx.closePath()},r.prototype.formatPath=function(s){var o=this;s.forEach(function(d,u){var h=_t(d)?d.start:d;u===0?o.ctx.moveTo(h.x,h.y):o.ctx.lineTo(h.x,h.y),_t(d)&&o.ctx.bezierCurveTo(d.startControl.x,d.startControl.y,d.endControl.x,d.endControl.y,d.end.x,d.end.y)})},r.prototype.renderRepeat=function(s,o,d,u){this.path(s),this.ctx.fillStyle=o,this.ctx.translate(d,u),this.ctx.fill(),this.ctx.translate(-d,-u)},r.prototype.resizeImage=function(s,o,d){var u;if(s.width===o&&s.height===d)return s;var h=(u=this.canvas.ownerDocument)!==null&&u!==void 0?u:document,B=h.createElement("canvas");B.width=Math.max(1,o),B.height=Math.max(1,d);var m=B.getContext("2d");return m.drawImage(s,0,0,s.width,s.height,0,0,o,d),B},r.prototype.renderBackgroundImage=function(s){return mt(this,void 0,void 0,function(){var o,d,u,h,B,m;return gt(this,function(w){switch(w.label){case 0:o=s.styles.backgroundImage.length-1,d=function(v){var E,M,aA,uA,R,nA,IA,KA,V,_,uA,R,nA,IA,KA,lA,pA,QA,cA,DA,yA,gA,AA,SA,V,iA,uA,EA,tA,IA,KA,TA,R,nA,vA,LA,Q,G,sA,oA,UA,HA;return gt(this,function(D){switch(D.label){case 0:if(v.type!==0)return[3,5];E=void 0,M=v.url,D.label=1;case 1:return D.trys.push([1,3,,4]),[4,u.context.cache.match(M)];case 2:return E=D.sent(),[3,4];case 3:return D.sent(),u.context.logger.error("Error loading background-image "+M),[3,4];case 4:return E&&(aA=Hd(s,o,[E.width,E.height,E.width/E.height]),uA=aA[0],R=aA[1],nA=aA[2],IA=aA[3],KA=aA[4],V=u.ctx.createPattern(u.resizeImage(E,IA,KA),"repeat"),u.renderRepeat(uA,V,R,nA)),[3,6];case 5:Q1(v)?(_=Hd(s,o,[null,null,null]),uA=_[0],R=_[1],nA=_[2],IA=_[3],KA=_[4],lA=b1(v.angle,IA,KA),pA=lA[0],QA=lA[1],cA=lA[2],DA=lA[3],yA=lA[4],gA=document.createElement("canvas"),gA.width=IA,gA.height=KA,AA=gA.getContext("2d"),SA=AA.createLinearGradient(QA,DA,cA,yA),Qp(v.stops,pA).forEach(function(CA){return SA.addColorStop(CA.stop,ot(CA.color))}),AA.fillStyle=SA,AA.fillRect(0,0,IA,KA),IA>0&&KA>0&&(V=u.ctx.createPattern(gA,"repeat"),u.renderRepeat(uA,V,R,nA))):U1(v)&&(iA=Hd(s,o,[null,null,null]),uA=iA[0],EA=iA[1],tA=iA[2],IA=iA[3],KA=iA[4],TA=v.position.length===0?[iu]:v.position,R=ke(TA[0],IA),nA=ke(TA[TA.length-1],KA),vA=w1(v,R,nA,IA,KA),LA=vA[0],Q=vA[1],LA>0&&Q>0&&(G=u.ctx.createRadialGradient(EA+R,tA+nA,0,EA+R,tA+nA,LA),Qp(v.stops,LA*2).forEach(function(CA){return G.addColorStop(CA.stop,ot(CA.color))}),u.path(uA),u.ctx.fillStyle=G,LA!==Q?(sA=s.bounds.left+.5*s.bounds.width,oA=s.bounds.top+.5*s.bounds.height,UA=Q/LA,HA=1/UA,u.ctx.save(),u.ctx.translate(sA,oA),u.ctx.transform(1,0,0,UA,0,0),u.ctx.translate(-sA,-oA),u.ctx.fillRect(EA,HA*(tA-oA)+oA,IA,KA*HA),u.ctx.restore()):u.ctx.fill())),D.label=6;case 6:return o--,[2]}})},u=this,h=0,B=s.styles.backgroundImage.slice(0).reverse(),w.label=1;case 1:return h<B.length?(m=B[h],[5,d(m)]):[3,4];case 2:w.sent(),w.label=3;case 3:return h++,[3,1];case 4:return[2]}})})},r.prototype.renderSolidBorder=function(s,o,d){return mt(this,void 0,void 0,function(){return gt(this,function(u){return this.path(t0(d,o)),this.ctx.fillStyle=ot(s),this.ctx.fill(),[2]})})},r.prototype.renderDoubleBorder=function(s,o,d,u){return mt(this,void 0,void 0,function(){var h,B;return gt(this,function(m){switch(m.label){case 0:return o<3?[4,this.renderSolidBorder(s,d,u)]:[3,2];case 1:return m.sent(),[2];case 2:return h=S2(u,d),this.path(h),this.ctx.fillStyle=ot(s),this.ctx.fill(),B=j2(u,d),this.path(B),this.ctx.fill(),[2]}})})},r.prototype.renderNodeBackgroundAndBorders=function(s){return mt(this,void 0,void 0,function(){var o,d,u,h,B,m,w,v,E=this;return gt(this,function(M){switch(M.label){case 0:return this.applyEffects(s.getEffects(2)),o=s.container.styles,d=!aa(o.backgroundColor)||o.backgroundImage.length,u=[{style:o.borderTopStyle,color:o.borderTopColor,width:o.borderTopWidth},{style:o.borderRightStyle,color:o.borderRightColor,width:o.borderRightWidth},{style:o.borderBottomStyle,color:o.borderBottomColor,width:o.borderBottomWidth},{style:o.borderLeftStyle,color:o.borderLeftColor,width:o.borderLeftWidth}],h=R2(br(o.backgroundClip,0),s.curves),d||o.boxShadow.length?(this.ctx.save(),this.path(h),this.ctx.clip(),aa(o.backgroundColor)||(this.ctx.fillStyle=ot(o.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(s.container)]):[3,2];case 1:M.sent(),this.ctx.restore(),o.boxShadow.slice(0).reverse().forEach(function(aA){E.ctx.save();var _=Ks(s.curves),lA=aA.inset?0:L2,pA=F2(_,-lA+(aA.inset?1:-1)*aA.spread.number,(aA.inset?1:-1)*aA.spread.number,aA.spread.number*(aA.inset?-2:2),aA.spread.number*(aA.inset?-2:2));aA.inset?(E.path(_),E.ctx.clip(),E.mask(pA)):(E.mask(_),E.ctx.clip(),E.path(pA)),E.ctx.shadowOffsetX=aA.offsetX.number+lA,E.ctx.shadowOffsetY=aA.offsetY.number,E.ctx.shadowColor=ot(aA.color),E.ctx.shadowBlur=aA.blur.number,E.ctx.fillStyle=aA.inset?ot(aA.color):"rgba(0,0,0,1)",E.ctx.fill(),E.ctx.restore()}),M.label=2;case 2:B=0,m=0,w=u,M.label=3;case 3:return m<w.length?(v=w[m],v.style!==0&&!aa(v.color)&&v.width>0?v.style!==2?[3,5]:[4,this.renderDashedDottedBorder(v.color,v.width,B,s.curves,2)]:[3,11]):[3,13];case 4:return M.sent(),[3,11];case 5:return v.style!==3?[3,7]:[4,this.renderDashedDottedBorder(v.color,v.width,B,s.curves,3)];case 6:return M.sent(),[3,11];case 7:return v.style!==4?[3,9]:[4,this.renderDoubleBorder(v.color,v.width,B,s.curves)];case 8:return M.sent(),[3,11];case 9:return[4,this.renderSolidBorder(v.color,B,s.curves)];case 10:M.sent(),M.label=11;case 11:B++,M.label=12;case 12:return m++,[3,3];case 13:return[2]}})})},r.prototype.renderDashedDottedBorder=function(s,o,d,u,h){return mt(this,void 0,void 0,function(){var B,m,w,v,E,M,aA,_,lA,pA,QA,cA,DA,yA,gA,AA,gA,AA;return gt(this,function(SA){return this.ctx.save(),B=H2(u,d),m=t0(u,d),h===2&&(this.path(m),this.ctx.clip()),_t(m[0])?(w=m[0].start.x,v=m[0].start.y):(w=m[0].x,v=m[0].y),_t(m[1])?(E=m[1].end.x,M=m[1].end.y):(E=m[1].x,M=m[1].y),d===0||d===2?aA=Math.abs(w-E):aA=Math.abs(v-M),this.ctx.beginPath(),h===3?this.formatPath(B):this.formatPath(m.slice(0,2)),_=o<3?o*3:o*2,lA=o<3?o*2:o,h===3&&(_=o,lA=o),pA=!0,aA<=_*2?pA=!1:aA<=_*2+lA?(QA=aA/(2*_+lA),_*=QA,lA*=QA):(cA=Math.floor((aA+lA)/(_+lA)),DA=(aA-cA*_)/(cA-1),yA=(aA-(cA+1)*_)/cA,lA=yA<=0||Math.abs(lA-DA)<Math.abs(lA-yA)?DA:yA),pA&&(h===3?this.ctx.setLineDash([0,_+lA]):this.ctx.setLineDash([_,lA])),h===3?(this.ctx.lineCap="round",this.ctx.lineWidth=o):this.ctx.lineWidth=o*2+1.1,this.ctx.strokeStyle=ot(s),this.ctx.stroke(),this.ctx.setLineDash([]),h===2&&(_t(m[0])&&(gA=m[3],AA=m[0],this.ctx.beginPath(),this.formatPath([new zA(gA.end.x,gA.end.y),new zA(AA.start.x,AA.start.y)]),this.ctx.stroke()),_t(m[1])&&(gA=m[1],AA=m[2],this.ctx.beginPath(),this.formatPath([new zA(gA.end.x,gA.end.y),new zA(AA.start.x,AA.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},r.prototype.render=function(s){return mt(this,void 0,void 0,function(){var o;return gt(this,function(d){switch(d.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=ot(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),o=E2(s),[4,this.renderStack(o)];case 1:return d.sent(),this.applyEffects([]),[2,this.canvas]}})})},r}(gx),K2=function(i){return i instanceof $0||i instanceof W0?!0:i instanceof cu&&i.type!==Is&&i.type!==Ts},R2=function(i,r){switch(i){case 0:return Ks(r);case 2:return y2(r);case 1:default:return Rs(r)}},z2=function(i){switch(i){case 1:return"center";case 2:return"right";case 0:default:return"left"}},_2=["-apple-system","system-ui"],G2=function(i){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?i.filter(function(r){return _2.indexOf(r)===-1}):i},V2=function(i){qt(r,i);function r(s,o){var d=i.call(this,s,o)||this;return d.canvas=o.canvas?o.canvas:document.createElement("canvas"),d.ctx=d.canvas.getContext("2d"),d.options=o,d.canvas.width=Math.floor(o.width*o.scale),d.canvas.height=Math.floor(o.height*o.scale),d.canvas.style.width=o.width+"px",d.canvas.style.height=o.height+"px",d.ctx.scale(d.options.scale,d.options.scale),d.ctx.translate(-o.x,-o.y),d.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+o.width+"x"+o.height+" at "+o.x+","+o.y+") with scale "+o.scale),d}return r.prototype.render=function(s){return mt(this,void 0,void 0,function(){var o,d;return gt(this,function(u){switch(u.label){case 0:return o=Zd(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,s),[4,Y2(o)];case 1:return d=u.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=ot(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(d,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},r}(gx),Y2=function(i){return new Promise(function(r,s){var o=new Image;o.onload=function(){r(o)},o.onerror=s,o.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(i))})},X2=function(){function i(r){var s=r.id,o=r.enabled;this.id=s,this.enabled=o,this.start=Date.now()}return i.prototype.debug=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&(typeof window<"u"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,is([this.id,this.getTime()+"ms"],r)):this.info.apply(this,r))},i.prototype.getTime=function(){return Date.now()-this.start},i.prototype.info=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&typeof window<"u"&&window.console&&typeof console.info=="function"&&console.info.apply(console,is([this.id,this.getTime()+"ms"],r))},i.prototype.warn=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&(typeof window<"u"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,is([this.id,this.getTime()+"ms"],r)):this.info.apply(this,r))},i.prototype.error=function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];this.enabled&&(typeof window<"u"&&window.console&&typeof console.error=="function"?console.error.apply(console,is([this.id,this.getTime()+"ms"],r)):this.info.apply(this,r))},i.instances={},i}(),J2=function(){function i(r,s){var o;this.windowBounds=s,this.instanceName="#"+i.instanceCount++,this.logger=new X2({id:this.instanceName,enabled:r.logging}),this.cache=(o=r.cache)!==null&&o!==void 0?o:new h2(this,r)}return i.instanceCount=1,i}(),px=function(i,r){return r===void 0&&(r={}),Z2(i,r)};typeof window<"u"&&lx.setContext(window);var Z2=function(i,r){return mt(void 0,void 0,void 0,function(){var s,o,d,u,h,B,m,w,v,E,M,aA,_,lA,pA,QA,cA,DA,yA,gA,SA,AA,SA,V,iA,uA,EA,tA,IA,KA,TA,R,nA,vA,LA,Q,G,sA,oA,UA;return gt(this,function(HA){switch(HA.label){case 0:if(!i||typeof i!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(s=i.ownerDocument,!s)throw new Error("Element is not attached to a Document");if(o=s.defaultView,!o)throw new Error("Document is not attached to a Window");return d={allowTaint:(V=r.allowTaint)!==null&&V!==void 0?V:!1,imageTimeout:(iA=r.imageTimeout)!==null&&iA!==void 0?iA:15e3,proxy:r.proxy,useCORS:(uA=r.useCORS)!==null&&uA!==void 0?uA:!1},u=Md({logging:(EA=r.logging)!==null&&EA!==void 0?EA:!0,cache:r.cache},d),h={windowWidth:(tA=r.windowWidth)!==null&&tA!==void 0?tA:o.innerWidth,windowHeight:(IA=r.windowHeight)!==null&&IA!==void 0?IA:o.innerHeight,scrollX:(KA=r.scrollX)!==null&&KA!==void 0?KA:o.pageXOffset,scrollY:(TA=r.scrollY)!==null&&TA!==void 0?TA:o.pageYOffset},B=new Qn(h.scrollX,h.scrollY,h.windowWidth,h.windowHeight),m=new J2(u,B),w=(R=r.foreignObjectRendering)!==null&&R!==void 0?R:!1,v={allowTaint:(nA=r.allowTaint)!==null&&nA!==void 0?nA:!1,onclone:r.onclone,ignoreElements:r.ignoreElements,inlineImages:w,copyStyles:w},m.logger.debug("Starting document clone with size "+B.width+"x"+B.height+" scrolled to "+-B.left+","+-B.top),E=new Pp(m,i,v),M=E.clonedReferenceElement,M?[4,E.toIFrame(s,B)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return aA=HA.sent(),_=du(M)||WC(M)?Fw(M.ownerDocument):_s(m,M),lA=_.width,pA=_.height,QA=_.left,cA=_.top,DA=q2(m,M,r.backgroundColor),yA={canvas:r.canvas,backgroundColor:DA,scale:(LA=(vA=r.scale)!==null&&vA!==void 0?vA:o.devicePixelRatio)!==null&&LA!==void 0?LA:1,x:((Q=r.x)!==null&&Q!==void 0?Q:0)+QA,y:((G=r.y)!==null&&G!==void 0?G:0)+cA,width:(sA=r.width)!==null&&sA!==void 0?sA:Math.ceil(lA),height:(oA=r.height)!==null&&oA!==void 0?oA:Math.ceil(pA)},w?(m.logger.debug("Document cloned, using foreign object rendering"),SA=new V2(m,yA),[4,SA.render(M)]):[3,3];case 2:return gA=HA.sent(),[3,5];case 3:return m.logger.debug("Document cloned, element located at "+QA+","+cA+" with size "+lA+"x"+pA+" using computed rendering"),m.logger.debug("Starting DOM parsing"),AA=ex(m,M),DA===AA.styles.backgroundColor&&(AA.styles.backgroundColor=Cn.TRANSPARENT),m.logger.debug("Starting renderer for element at "+yA.x+","+yA.y+" with size "+yA.width+"x"+yA.height),SA=new O2(m,yA),[4,SA.render(AA)];case 4:gA=HA.sent(),HA.label=5;case 5:return(!((UA=r.removeContainer)!==null&&UA!==void 0)||UA)&&(Pp.destroy(aA)||m.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),m.logger.debug("Finished rendering"),[2,gA]}})})},q2=function(i,r,s){var o=r.ownerDocument,d=o.documentElement?Ii(i,getComputedStyle(o.documentElement).backgroundColor):Cn.TRANSPARENT,u=o.body?Ii(i,getComputedStyle(o.body).backgroundColor):Cn.TRANSPARENT,h=typeof s=="string"?Ii(i,s):s===null?Cn.TRANSPARENT:4294967295;return r===o.documentElement?aa(d)?aa(u)?h:u:d:h};const Fr=Object.freeze(Object.defineProperty({__proto__:null,default:px},Symbol.toStringTag,{value:"Module"})),W2=({ganttChart:i,tasks:r,onUpdateGanttChart:s,onBack:o})=>{const[d,u]=k.useState({name:"",startDate:new Date().toISOString().split("T")[0],endDate:new Date(Date.now()+6048e5).toISOString().split("T")[0],progress:0,dependencies:[],color:w()}),[h,B]=k.useState(null),m=k.useRef(null);function w(){const V=["#3b82f6","#ef4444","#10b981","#f59e0b","#6366f1","#ec4899","#14b8a6","#f97316","#8b5cf6","#d946ef"];return V[Math.floor(Math.random()*V.length)]}const v=k.useMemo(()=>{if(r.length===0){const TA=new Date,R=new Date(TA.getTime()+30*24*60*60*1e3);return{startDate:TA,endDate:R,totalDays:30}}const V=r.flatMap(TA=>[new Date(TA.startDate),new Date(TA.endDate)]),iA=new Date(Math.min(...V)),uA=new Date(Math.max(...V)),EA=7,tA=new Date(iA.getTime()-EA*24*60*60*1e3),IA=new Date(uA.getTime()+EA*24*60*60*1e3),KA=Math.ceil((IA-tA)/(24*60*60*1e3));return{startDate:tA,endDate:IA,totalDays:KA}},[r]),E=k.useMemo(()=>{const V=[],{startDate:iA,totalDays:uA}=v;for(let EA=0;EA<=uA;EA+=7){const tA=new Date(iA.getTime()+EA*24*60*60*1e3);V.push({date:tA,position:EA/uA*100,label:tA.toLocaleDateString("en-US",{month:"short",day:"numeric"})})}return V},[v]),M=V=>{const iA=new Date(V),{startDate:uA,totalDays:EA}=v,tA=Math.max(0,(iA-uA)/(24*60*60*1e3));return Math.min(100,tA/EA*100)},aA=(V,iA)=>{const uA=new Date(V),EA=new Date(iA),{totalDays:tA}=v,IA=Math.max(1,(EA-uA)/(24*60*60*1e3));return Math.min(100,IA/tA*100)},_=()=>{if(!d.name.trim())return;const V=[...r,{id:Date.now(),...d,progress:Math.min(100,Math.max(0,parseInt(d.progress)||0))}];s({...i,tasks:V}),u({name:"",startDate:new Date().toISOString().split("T")[0],endDate:new Date(Date.now()+7*24*60*60*1e3).toISOString().split("T")[0],progress:0,dependencies:[],color:w()})},lA=V=>{const uA=r.filter(EA=>EA.id!==V).map(EA=>({...EA,dependencies:EA.dependencies.filter(tA=>tA!==V)}));s({...i,tasks:uA})},pA=(V,iA)=>{const uA=r.map(EA=>EA.id===V?{...EA,...iA}:EA);s({...i,tasks:uA})},QA=V=>{B({...V})},cA=()=>{h&&(pA(h.id,h),B(null))},DA=()=>{B(null)},yA=()=>{const V={...i,tasks:r},iA=JSON.stringify(V,null,2),uA=new Blob([iA],{type:"application/json"}),EA=URL.createObjectURL(uA),tA=document.createElement("a");tA.href=EA,tA.download=`${i.name.replace(/\s+/g,"_")}_gantt.json`,document.body.appendChild(tA),tA.click(),document.body.removeChild(tA),URL.revokeObjectURL(EA)},gA=V=>{const iA=V.target.files[0];if(!iA)return;const uA=new FileReader;uA.onload=EA=>{try{const tA=JSON.parse(EA.target.result);tA.name&&Array.isArray(tA.tasks)?s(tA):alert("Invalid Gantt chart file format")}catch{alert("Error parsing JSON file")}},uA.readAsText(iA)},AA=()=>{m.current&&px(m.current,{scrollX:-window.scrollX,scrollY:-window.scrollY,windowWidth:m.current.scrollWidth,windowHeight:m.current.scrollHeight,scale:2}).then(V=>{const iA=document.createElement("a");iA.download=`${i.name.replace(/\s+/g,"_")}_gantt.png`,iA.href=V.toDataURL("image/png"),iA.click()})},SA=V=>r.find(iA=>iA.id===V);return n.jsxs("div",{className:"gantt-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:o,className:"back-btn",children:[n.jsx(Un,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"export-actions",children:[n.jsxs("button",{onClick:yA,className:"export-btn",title:"Export as JSON",children:[n.jsx(En,{size:16})," JSON"]}),n.jsxs("label",{className:"import-btn",title:"Import from JSON",children:[n.jsx(nn,{size:16})," JSON",n.jsx("input",{type:"file",accept:".json",onChange:gA,style:{display:"none"}})]}),n.jsxs("button",{onClick:AA,className:"export-btn",title:"Export as Image",children:[n.jsx(ra,{size:16})," Image"]})]})]}),n.jsxs("div",{className:"gantt-container",children:[n.jsxs("div",{className:"gantt-sidebar",children:[n.jsxs("div",{className:"sidebar-header",children:["Tasks (",r.length,")"]}),n.jsx("div",{className:"task-list",children:r.map(V=>n.jsxs("div",{className:"task-item",children:[n.jsxs("div",{className:"task-info",children:[n.jsx("div",{className:"task-name",children:V.name}),n.jsxs("div",{className:"task-dates",children:[new Date(V.startDate).toLocaleDateString()," - ",new Date(V.endDate).toLocaleDateString()]}),n.jsxs("div",{className:"task-progress-text",children:[V.progress,"% complete"]}),V.dependencies.length>0&&n.jsxs("div",{className:"task-dependencies",children:["Dependencies: ",V.dependencies.map(iA=>SA(iA)?.name).filter(Boolean).join(", ")]})]}),n.jsxs("div",{className:"task-actions",children:[n.jsx("button",{onClick:()=>QA(V),className:"edit-btn",title:"Edit task",children:n.jsx(Yb,{size:14})}),n.jsx("button",{onClick:()=>lA(V.id),className:"delete-btn",title:"Delete task",children:n.jsx(pe,{size:14})})]})]},V.id))}),n.jsxs("div",{className:"add-task-form",children:[n.jsx("h3",{children:"Add New Task"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Task Name"}),n.jsx("input",{type:"text",value:d.name,onChange:V=>u({...d,name:V.target.value}),placeholder:"Task description"})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Start Date"}),n.jsx("input",{type:"date",value:d.startDate,onChange:V=>u({...d,startDate:V.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"End Date"}),n.jsx("input",{type:"date",value:d.endDate,onChange:V=>u({...d,endDate:V.target.value})})]})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Progress (%)"}),n.jsx("input",{type:"number",min:"0",max:"100",value:d.progress,onChange:V=>u({...d,progress:V.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Color"}),n.jsxs("div",{className:"color-picker",children:[n.jsx("input",{type:"color",value:d.color,onChange:V=>u({...d,color:V.target.value})}),n.jsx("button",{onClick:()=>u({...d,color:w()}),className:"random-color-btn",title:"Random color",children:"Random"})]})]})]}),n.jsxs("button",{onClick:_,className:"add-btn",children:[n.jsx(Re,{size:16})," Add Task"]})]})]}),n.jsxs("div",{className:"gantt-timeline",ref:m,children:[n.jsxs("div",{className:"timeline-header",children:[n.jsx("div",{className:"timeline-title",children:"Timeline"}),n.jsx("div",{className:"timeline-scale",children:E.map((V,iA)=>n.jsxs("div",{className:"scale-point",style:{left:`${V.position}%`},children:[n.jsx("div",{className:"scale-line"}),n.jsx("div",{className:"scale-label",children:V.label})]},iA))})]}),n.jsxs("div",{className:"timeline-content",children:[r.map((V,iA)=>{const uA=M(V.startDate),EA=aA(V.startDate,V.endDate),tA=`${V.color}33`;return n.jsx("div",{className:"timeline-row",children:n.jsxs("div",{className:"timeline-task",children:[n.jsxs("div",{className:"task-bar",style:{left:`${uA}%`,width:`${EA}%`,background:`linear-gradient(to right, ${V.color} ${V.progress}%, ${tA} ${V.progress}%)`,borderColor:V.color},title:`${V.name}: ${V.progress}% complete`,children:[n.jsxs("div",{className:"task-progress",children:[V.progress,"%"]}),n.jsx("div",{className:"task-label",children:V.name})]}),V.dependencies.map(IA=>{const KA=SA(IA);if(!KA)return null;const TA=r.findIndex(vA=>vA.id===IA),R=M(KA.endDate),nA=aA(KA.startDate,KA.endDate);return n.jsxs("svg",{className:"dependency-arrow",style:{position:"absolute",left:`${R+nA}%`,top:`${(TA-iA)*44-12}px`,width:`${Math.abs(uA-(R+nA))}%`,height:`${Math.abs((iA-TA)*44)+24}px`,pointerEvents:"none",zIndex:1},children:[n.jsx("defs",{children:n.jsx("marker",{id:`arrowhead-${V.id}-${IA}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#64748b"})})}),n.jsx("path",{d:`M 0 ${TA<iA?0:Math.abs((iA-TA)*44)} 
                                L ${Math.abs(uA-(R+nA))*.5} ${TA<iA?0:Math.abs((iA-TA)*44)} 
                                L ${Math.abs(uA-(R+nA))*.5} ${TA<iA?Math.abs((iA-TA)*44):0} 
                                L ${Math.abs(uA-(R+nA))} ${TA<iA?Math.abs((iA-TA)*44):0}`,stroke:"#64748b",strokeWidth:"2",fill:"none",markerEnd:`url(#arrowhead-${V.id}-${IA})`})]},`dep-${IA}`)})]})},V.id)}),n.jsx("div",{className:"today-line",style:{left:`${M(new Date().toISOString().split("T")[0])}%`},children:n.jsx("div",{className:"today-label",children:"Today"})})]})]})]}),h&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal",children:[n.jsx("h3",{children:"Edit Task"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Task Name"}),n.jsx("input",{type:"text",value:h.name,onChange:V=>B({...h,name:V.target.value})})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Start Date"}),n.jsx("input",{type:"date",value:h.startDate,onChange:V=>B({...h,startDate:V.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"End Date"}),n.jsx("input",{type:"date",value:h.endDate,onChange:V=>B({...h,endDate:V.target.value})})]})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Progress (%)"}),n.jsx("input",{type:"number",min:"0",max:"100",value:h.progress,onChange:V=>B({...h,progress:V.target.value})})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Color"}),n.jsx("input",{type:"color",value:h.color,onChange:V=>B({...h,color:V.target.value})})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Dependencies"}),n.jsx("div",{className:"dependency-list",children:r.filter(V=>V.id!==h.id).map(V=>n.jsxs("label",{className:"dependency-item",children:[n.jsx("input",{type:"checkbox",checked:h.dependencies.includes(V.id),onChange:iA=>{iA.target.checked?B({...h,dependencies:[...h.dependencies,V.id]}):B({...h,dependencies:h.dependencies.filter(uA=>uA!==V.id)})}}),V.name]},V.id))})]}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{onClick:DA,className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:cA,className:"save-btn",children:"Save Changes"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},$2=({useCaseDiagrams:i,onCreateUseCaseDiagram:r,onLoadUseCaseDiagram:s,onDeleteUseCaseDiagram:o})=>{const[d,u]=k.useState(!1);return n.jsxs("div",{className:"use-case-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(au,{size:48})}),n.jsx("h2",{children:"Use Case Diagram Designer"}),n.jsx("p",{children:"Model system functionality with actors and use cases"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Use Case Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.actors?.length||0," actors • ",h.useCases?.length||0," use cases"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:B=>{B.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Fn,{size:16})}),n.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Use Case Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Online Shopping System",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},P2="modulepreload",AQ=function(i){return"/Rootrie/"+i},a0={},Er=function(r,s,o){let d=Promise.resolve();if(s&&s.length>0){let w=function(v){return Promise.all(v.map(E=>Promise.resolve(E).then(M=>({status:"fulfilled",value:M}),M=>({status:"rejected",reason:M}))))};var h=w;document.getElementsByTagName("link");const B=document.querySelector("meta[property=csp-nonce]"),m=B?.nonce||B?.getAttribute("nonce");d=w(s.map(v=>{if(v=AQ(v),v in a0)return;a0[v]=!0;const E=v.endsWith(".css"),M=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${M}`))return;const aA=document.createElement("link");if(aA.rel=E?"stylesheet":P2,E||(aA.as="script"),aA.crossOrigin="",aA.href=v,m&&aA.setAttribute("nonce",m),document.head.appendChild(aA),E)return new Promise((_,lA)=>{aA.addEventListener("load",_),aA.addEventListener("error",()=>lA(new Error(`Unable to preload CSS for ${v}`)))})}))}function u(B){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=B,window.dispatchEvent(m),!m.defaultPrevented)throw B}return d.then(B=>{for(const m of B||[])m.status==="rejected"&&u(m.reason);return r().catch(u)})},eQ=({useCaseDiagram:i,actors:r=[],useCases:s=[],relationships:o=[],onUpdateUseCaseDiagram:d,onBack:u})=>{const[h,B]=k.useState(""),[m,w]=k.useState(""),[v,E]=k.useState(null),[M,aA]=k.useState(null),[_,lA]=k.useState("association"),[pA,QA]=k.useState("editor"),[cA,DA]=k.useState(""),[yA,gA]=k.useState(null),[AA,SA]=k.useState({x:0,y:0}),[V,iA]=k.useState(!1),[uA,EA]=k.useState(!1),[tA,IA]=k.useState(1),[KA,TA]=k.useState({x:0,y:0}),[R,nA]=k.useState(!1),[vA,LA]=k.useState({x:0,y:0}),Q=k.useRef(null),G=k.useRef(null),sA=20,oA=60,UA=80,HA=150,D=40;k.useEffect(()=>{DA(JSON.stringify({actors:r,useCases:s,relationships:o},null,2))},[r,s,o]);const CA=j=>uA?Math.round(j/sA)*sA:j,jA=()=>{if(!h.trim())return;const j=[...r,{id:Date.now(),name:h,x:CA(100+Math.random()*200),y:CA(100+Math.random()*200)}];d({...i,actors:j}),B("")},dA=()=>{if(!m.trim())return;const j=[...s,{id:Date.now(),name:m,x:CA(300+Math.random()*300),y:CA(150+Math.random()*200)}];d({...i,useCases:j}),w("")},I=j=>{const xA=r.filter(NA=>NA.id!==j),BA=o.filter(NA=>!(NA.source===j||NA.target===j));d({...i,actors:xA,relationships:BA})},q=j=>{const xA=s.filter(NA=>NA.id!==j),BA=o.filter(NA=>!(NA.source===j||NA.target===j));d({...i,useCases:xA,relationships:BA})},MA=()=>{if(!v||!M)return;const j=r.some(OA=>OA.id===v),xA=r.some(OA=>OA.id===M),BA=s.some(OA=>OA.id===v),NA=s.some(OA=>OA.id===M);if(_==="include"||_==="extend"){if(!BA||!NA){alert("Include and extend relationships must be between use cases");return}}else if(_==="generalization"){if(j&&!xA||BA&&!NA){alert("Generalization must be between two actors or two use cases");return}}else if(_==="association"&&!(j&&NA)&&!(BA&&xA)){alert("Association must be between an actor and a use case");return}const JA={id:Date.now(),source:v,target:M,type:_};d({...i,relationships:[...o,JA]}),E(null),aA(null)},O=j=>{const xA=o.filter(BA=>BA.id!==j);d({...i,relationships:xA})},wA=(j,xA)=>xA?{x:j.x+oA/2,y:j.y+UA/2}:{x:j.x+HA/2,y:j.y+D/2},VA=(j,xA,BA)=>{const NA=wA(j,xA);if(xA)return{x:NA.x+25*Math.cos(BA),y:NA.y+25*Math.sin(BA)};{const JA=HA/2,OA=D/2,te=Math.cos(BA),$A=Math.sin(BA),he=JA*OA/Math.sqrt(OA*OA*te*te+JA*JA*$A*$A);return{x:NA.x+he*te,y:NA.y+he*$A}}},WA=(j,xA,BA,NA)=>{const JA=G.current;if(!JA)return{x:j,y:xA};const OA=JA.getBoundingClientRect(),te=Math.max(0,-KA.x),$A=Math.max(0,-KA.y),he=Math.min(OA.width/tA-BA,OA.width/tA-KA.x-BA),Me=Math.min(OA.height/tA-NA,OA.height/tA-KA.y-NA);return{x:Math.max(te,Math.min(he,j)),y:Math.max($A,Math.min(Me,xA))}},PA=(j,xA,BA)=>{j.preventDefault(),j.stopPropagation();const NA=Q.current.getBoundingClientRect(),JA=(j.clientX-NA.left-KA.x)/tA,OA=(j.clientY-NA.top-KA.y)/tA;gA({...xA,type:BA}),SA({x:JA-xA.x,y:OA-xA.y})},ae=j=>{if(!(!yA&&!R)){if(R){const xA=j.clientX-vA.x,BA=j.clientY-vA.y;TA(NA=>({x:NA.x+xA,y:NA.y+BA})),LA({x:j.clientX,y:j.clientY});return}if(yA){const xA=Q.current.getBoundingClientRect();let BA=(j.clientX-xA.left-KA.x)/tA-AA.x,NA=(j.clientY-xA.top-KA.y)/tA-AA.y;BA=CA(BA),NA=CA(NA);const JA=yA.type==="actor"?oA:HA,OA=yA.type==="actor"?UA:D,te=WA(BA,NA,JA,OA);if(yA.type==="actor"){const $A=r.map(he=>he.id===yA.id?{...he,x:te.x,y:te.y}:he);d({...i,actors:$A})}else if(yA.type==="useCase"){const $A=s.map(he=>he.id===yA.id?{...he,x:te.x,y:te.y}:he);d({...i,useCases:$A})}}}},de=()=>{gA(null),nA(!1)},ze=j=>{j.target===Q.current&&(nA(!0),LA({x:j.clientX,y:j.clientY}))},Se=()=>{IA(j=>Math.min(j*1.2,3))},Ve=()=>{IA(j=>Math.max(j/1.2,.3))},Le=()=>{IA(1),TA({x:0,y:0})},Ye=()=>{const j=r.map((BA,NA)=>({...BA,x:50,y:100+NA*120})),xA=s.map((BA,NA)=>({...BA,x:400,y:100+NA*80}));d({...i,actors:j,useCases:xA})};k.useEffect(()=>{const j=BA=>ae(BA),xA=()=>de();if(yA||R)return document.addEventListener("mousemove",j),document.addEventListener("mouseup",xA),()=>{document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",xA)}},[yA,R,AA,KA,tA,r,s,d,i,vA,uA]);const We=()=>JSON.stringify({actors:r,useCases:s,relationships:o},null,2),xe=()=>{navigator.clipboard.writeText(We())},ue=()=>{try{const j=JSON.parse(cA);Array.isArray(j.actors)&&Array.isArray(j.useCases)&&Array.isArray(j.relationships)?d({...i,actors:j.actors,useCases:j.useCases,relationships:j.relationships}):alert("Invalid JSON format. Expected actors, useCases, and relationships arrays.")}catch(j){alert("Error parsing JSON: "+j.message)}},x=j=>{const xA=j.target.files[0];if(!xA)return;const BA=new FileReader;BA.onload=NA=>{DA(NA.target.result)},BA.readAsText(xA)},F=()=>{if(!Q.current)return;const j=Q.current.style.transform;Q.current.style.transform="scale(1) translate(0px, 0px)",Er(()=>Promise.resolve().then(()=>Fr),void 0).then(xA=>{xA.default(Q.current,{backgroundColor:"#f8fafc",scale:2,useCORS:!0}).then(BA=>{const NA=document.createElement("a");NA.download=`${i.name||"use-case-diagram"}.png`,NA.href=BA.toDataURL("image/png"),NA.click(),Q.current.style.transform=j})})},T=()=>{if(!V)return null;const j=G.current;if(!j)return null;const xA=j.getBoundingClientRect(),BA=xA.width/tA,NA=xA.height/tA,JA=Math.floor(-KA.x/tA/sA)*sA,OA=Math.floor(-KA.y/tA/sA)*sA,te=[];for(let $A=JA;$A<BA-KA.x/tA;$A+=sA)te.push(n.jsx("line",{x1:$A,y1:0,x2:$A,y2:NA,stroke:"#e2e8f0",strokeWidth:"1"},`v-${$A}`));for(let $A=OA;$A<NA-KA.y/tA;$A+=sA)te.push(n.jsx("line",{x1:0,y1:$A,x2:BA,y2:$A,stroke:"#e2e8f0",strokeWidth:"1"},`h-${$A}`));return n.jsx("svg",{className:"grid-overlay",children:te})},W=j=>n.jsxs("div",{className:"actor",style:{left:`${j.x}px`,top:`${j.y}px`,width:`${oA}px`,height:`${UA}px`,cursor:yA?.id===j.id?"grabbing":"grab"},onMouseDown:xA=>PA(xA,j,"actor"),children:[n.jsx("div",{className:"actor-icon",children:n.jsx(au,{size:20})}),n.jsx("div",{className:"actor-name",children:j.name})]},j.id),J=j=>n.jsx("div",{className:"use-case",style:{left:`${j.x}px`,top:`${j.y}px`,width:`${HA}px`,height:`${D}px`,cursor:yA?.id===j.id?"grabbing":"grab"},onMouseDown:xA=>PA(xA,j,"useCase"),children:n.jsx("div",{className:"use-case-name",children:j.name})},j.id),hA=j=>{let xA,BA,NA=!1,JA=!1;if(xA=r.find(H=>H.id===j.source),xA?NA=!0:xA=s.find(H=>H.id===j.source),BA=r.find(H=>H.id===j.target),BA?JA=!0:BA=s.find(H=>H.id===j.target),!xA||!BA)return null;const OA=wA(xA,NA),te=wA(BA,JA),$A=te.x-OA.x,he=te.y-OA.y,Me=Math.atan2(he,$A),je=VA(xA,NA,Me),re=VA(BA,JA,Me+Math.PI);let g={},S={};j.type==="include"?(g={strokeDasharray:"5,5",stroke:"#3b82f6"},S={fill:"#3b82f6"}):j.type==="extend"?(g={strokeDasharray:"8,3",stroke:"#10b981"},S={fill:"#10b981"}):j.type==="generalization"?(g={stroke:"#8b5cf6"},S={fill:"none",stroke:"#8b5cf6",strokeWidth:"2"}):(g={stroke:"#64748b"},S={fill:"#64748b"});const f=8,b=Math.atan2(re.y-je.y,re.x-je.x),C={x:re.x-f*Math.cos(b-Math.PI/6),y:re.y-f*Math.sin(b-Math.PI/6)},U={x:re.x-f*Math.cos(b+Math.PI/6),y:re.y-f*Math.sin(b+Math.PI/6)};return j.type==="generalization"?n.jsxs("svg",{className:"relationship",children:[n.jsx("line",{x1:je.x,y1:je.y,x2:re.x,y2:re.y,strokeWidth:"2",...g}),n.jsx("polygon",{points:`
              ${re.x},${re.y}
              ${C.x},${C.y}
              ${U.x},${U.y}
            `,...S}),n.jsx("text",{x:(je.x+re.x)/2,y:(je.y+re.y)/2-8,textAnchor:"middle",fontSize:"11",fill:g.stroke||"#64748b",className:"relationship-label",children:`<<${j.type}>>`})]},j.id):j.type==="association"?n.jsx("svg",{className:"relationship",children:n.jsx("line",{x1:je.x,y1:je.y,x2:re.x,y2:re.y,strokeWidth:"2",...g})},j.id):n.jsxs("svg",{className:"relationship",children:[n.jsx("defs",{children:n.jsx("marker",{id:`arrowhead-${j.id}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",...S})})}),n.jsx("line",{x1:je.x,y1:je.y,x2:re.x,y2:re.y,strokeWidth:"2",markerEnd:`url(#arrowhead-${j.id})`,...g}),j.type!=="association"&&n.jsx("text",{x:(je.x+re.x)/2,y:(je.y+re.y)/2-8,textAnchor:"middle",fontSize:"11",fill:g.stroke||"#64748b",className:"relationship-label",children:`<<${j.type}>>`})]},j.id)};return n.jsxs("div",{className:"use-case-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:u,className:"back-btn",children:[n.jsx(Un,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"toolbar-controls",children:[n.jsx("button",{onClick:()=>iA(!V),className:`tool-btn ${V?"active":""}`,children:n.jsx(vb,{size:16})}),n.jsx("button",{onClick:()=>EA(!uA),className:`tool-btn ${uA?"active":""}`,children:n.jsx(c0,{size:16})}),n.jsx("button",{onClick:Ve,className:"tool-btn",children:n.jsx(Qr,{size:16})}),n.jsxs("span",{className:"zoom-level",children:[Math.round(tA*100),"%"]}),n.jsx("button",{onClick:Se,className:"tool-btn",children:n.jsx(Cr,{size:16})}),n.jsx("button",{onClick:Le,className:"tool-btn",children:n.jsx(u0,{size:16})}),n.jsx("button",{onClick:Ye,className:"tool-btn",children:"Auto"})]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:F,className:"export-btn",children:[n.jsx(ra,{size:16})," Export Image"]}),n.jsxs("button",{onClick:xe,className:"export-btn",children:[n.jsx(ja,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const j=new Blob([We()],{type:"application/json"}),xA=URL.createObjectURL(j),BA=document.createElement("a");BA.href=xA,BA.download=`${i.name||"use-case-diagram"}.json`,document.body.appendChild(BA),BA.click(),document.body.removeChild(BA),URL.revokeObjectURL(xA)},className:"export-btn",children:[n.jsx(En,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${pA==="editor"?"active":""}`,onClick:()=>QA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${pA==="json"?"active":""}`,onClick:()=>QA("json"),children:"JSON Editor"})]}),pA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Actors"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:h,onChange:j=>B(j.target.value),placeholder:"New actor name",onKeyPress:j=>j.key==="Enter"&&jA()}),n.jsxs("button",{onClick:jA,className:"add-btn",children:[n.jsx(Re,{size:16})," Add Actor"]})]}),n.jsx("div",{className:"actor-list",children:r.map(j=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-name",children:j.name}),n.jsx("button",{onClick:()=>I(j.id),className:"delete-btn",children:n.jsx(pe,{size:14})})]},j.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Use Cases"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:m,onChange:j=>w(j.target.value),placeholder:"New use case name",onKeyPress:j=>j.key==="Enter"&&dA()}),n.jsxs("button",{onClick:dA,className:"add-btn",children:[n.jsx(Re,{size:16})," Add Use Case"]})]}),n.jsx("div",{className:"use-case-list",children:s.map(j=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-name",children:j.name}),n.jsx("button",{onClick:()=>q(j.id),className:"delete-btn",children:n.jsx(pe,{size:14})})]},j.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Relationships"}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Source"}),n.jsxs("select",{value:v||"",onChange:j=>E(j.target.value?parseInt(j.target.value):null),children:[n.jsx("option",{value:"",children:"Select source"}),n.jsx("optgroup",{label:"Actors",children:r.map(j=>n.jsx("option",{value:j.id,children:j.name},j.id))}),n.jsx("optgroup",{label:"Use Cases",children:s.map(j=>n.jsx("option",{value:j.id,children:j.name},j.id))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Target"}),n.jsxs("select",{value:M||"",onChange:j=>aA(j.target.value?parseInt(j.target.value):null),children:[n.jsx("option",{value:"",children:"Select target"}),n.jsx("optgroup",{label:"Actors",children:r.map(j=>n.jsx("option",{value:j.id,children:j.name},j.id))}),n.jsx("optgroup",{label:"Use Cases",children:s.map(j=>n.jsx("option",{value:j.id,children:j.name},j.id))})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Relationship Type"}),n.jsxs("select",{value:_,onChange:j=>lA(j.target.value),children:[n.jsx("option",{value:"association",children:"Association"}),n.jsx("option",{value:"include",children:"Include"}),n.jsx("option",{value:"extend",children:"Extend"}),n.jsx("option",{value:"generalization",children:"Generalization"})]})]}),n.jsxs("button",{onClick:MA,disabled:!v||!M,className:"add-btn",children:[n.jsx(Vi,{size:16})," Add Relationship"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Current Relationships"}),n.jsx("div",{className:"relationship-list",children:o.map(j=>{let xA,BA,NA="",JA="";return xA=r.find(OA=>OA.id===j.source),xA?NA=xA.name:(xA=s.find(OA=>OA.id===j.source),xA&&(NA=xA.name)),BA=r.find(OA=>OA.id===j.target),BA?JA=BA.name:(BA=s.find(OA=>OA.id===j.target),BA&&(JA=BA.name)),!xA||!BA?null:n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-name",children:[NA," → ",JA," (",j.type,")"]}),n.jsx("button",{onClick:()=>O(j.id),className:"delete-btn",children:n.jsx(pe,{size:14})})]},j.id)})})]})]}),n.jsx("div",{className:"diagram-canvas-container",ref:G,onMouseDown:ze,children:n.jsxs("div",{className:"diagram-canvas",ref:Q,style:{transform:`scale(${tA}) translate(${KA.x/tA}px, ${KA.y/tA}px)`,transformOrigin:"0 0"},children:[T(),o.map(hA),r.map(W),s.map(J)]})})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const j=document.createElement("input");j.type="file",j.accept=".json",j.onchange=x,j.click()},className:"import-btn",children:[n.jsx(nn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:cA,onChange:j=>DA(j.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:ue,className:"import-btn",children:[n.jsx(Ha,{size:16})," Apply JSON"]})]}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},tQ=({sequenceDiagrams:i,onCreateSequenceDiagram:r,onLoadSequenceDiagram:s,onDeleteSequenceDiagram:o})=>{const[d,u]=k.useState(!1);return n.jsxs("div",{className:"sequence-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(kb,{size:48})}),n.jsx("h2",{children:"Sequence Diagram Designer"}),n.jsx("p",{children:"Model interactions between objects in sequential order"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Sequence Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.participants?.length||0," participants • ",h.messages?.length||0," messages"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:B=>{B.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Fn,{size:16})}),n.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Sequence Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., User Login Process",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},nQ=({sequenceDiagram:i,participants:r=[],messages:s=[],onUpdateSequenceDiagram:o,onBack:d})=>{const[u,h]=k.useState(""),[B,m]=k.useState(""),[w,v]=k.useState(""),[E,M]=k.useState(""),[aA,_]=k.useState("sync"),[lA,pA]=k.useState("actor"),[QA,cA]=k.useState("editor"),[DA,yA]=k.useState(""),[gA,AA]=k.useState(1),[SA,V]=k.useState(150),iA=k.useRef(null);k.useEffect(()=>{yA(JSON.stringify({participants:r,messages:s},null,2))},[r,s]);const uA=()=>{if(!u.trim())return;const D=[...r,{id:Date.now(),name:u,type:lA}];o({...i,participants:D}),h("")},EA=()=>{if(!B.trim()||!w||!E)return;const D=r.find(dA=>dA.id===parseInt(w)),CA=r.find(dA=>dA.id===parseInt(E));if(!D||!CA)return;const jA=[...s,{id:Date.now(),text:B,from:D.id,to:CA.id,type:aA,order:s.length+1,activationStart:aA==="sync"||aA==="create",activationEnd:!1}];o({...i,messages:jA}),m(""),v(""),M("")},tA=D=>{const CA=r.filter(I=>I.id!==D),dA=s.filter(I=>!(I.from===D||I.to===D)).map((I,q)=>({...I,order:q+1}));o({...i,participants:CA,messages:dA})},IA=D=>{const jA=s.filter(dA=>dA.id!==D).map((dA,I)=>({...dA,order:I+1}));o({...i,messages:jA})},KA=D=>{const CA=s.findIndex(dA=>dA.id===D);if(CA<=0)return;const jA=[...s];[jA[CA-1],jA[CA]]=[jA[CA],jA[CA-1]],jA.forEach((dA,I)=>{dA.order=I+1}),o({...i,messages:jA})},TA=D=>{const CA=s.findIndex(dA=>dA.id===D);if(CA>=s.length-1)return;const jA=[...s];[jA[CA],jA[CA+1]]=[jA[CA+1],jA[CA]],jA.forEach((dA,I)=>{dA.order=I+1}),o({...i,messages:jA})},R=()=>JSON.stringify({participants:r,messages:s},null,2),nA=()=>{navigator.clipboard.writeText(R())},vA=()=>{try{const D=JSON.parse(DA);Array.isArray(D.participants)&&Array.isArray(D.messages)?o({...i,participants:D.participants,messages:D.messages}):alert("Invalid JSON format. Expected participants and messages arrays.")}catch(D){alert("Error parsing JSON: "+D.message)}},LA=D=>{const CA=D.target.files[0];if(!CA)return;const jA=new FileReader;jA.onload=dA=>{yA(dA.target.result)},jA.readAsText(CA)},Q=()=>{if(!iA.current)return;const D=iA.current.style.transform;iA.current.style.transform="scale(1) translate(0px, 0px)";const CA=document.createElement("canvas"),jA=iA.current.getBoundingClientRect();CA.width=jA.width*2,CA.height=jA.height*2,Er(()=>Promise.resolve().then(()=>Fr),void 0).then(dA=>{dA.default(iA.current,{backgroundColor:"#ffffff",scale:2,useCORS:!0,logging:!0,allowTaint:!0}).then(I=>{const q=document.createElement("a");q.download=`${i.name||"sequence-diagram"}.png`,q.href=I.toDataURL("image/png"),q.click(),iA.current.style.transform=D}).catch(I=>{console.error("Error generating image:",I),iA.current.style.transform=D})})},G=D=>60+D*SA,sA=(D,CA)=>{const jA=G(CA);return n.jsx("div",{className:"participant-header",style:{left:`${jA-60}px`,top:"40px",width:"120px",height:"60px"},children:D.type==="actor"?n.jsxs("div",{className:"participant-actor",children:[n.jsx("div",{className:"actor-circle",children:n.jsx(gw,{size:16})}),n.jsx("div",{className:"actor-name",children:D.name})]}):n.jsx("div",{className:`participant-box ${D.type||"service"}`,children:n.jsx("span",{className:"participant-name",children:D.name})})},`header-${D.id}`)},oA=(D,CA)=>{const jA=G(CA),dA=110,I=Math.max(220+s.length*50,420);return n.jsx("div",{className:"lifeline",style:{left:`${jA-1}px`,top:`${dA}px`,width:"2px",height:`${I-dA}px`}},`lifeline-${D.id}`)},UA=(D,CA)=>{const jA=G(CA),dA=[],I=[];if(s.sort((q,MA)=>q.order-MA.order).forEach((q,MA)=>{const O=150+MA*50;if((q.to===D&&(q.type==="sync"||q.type==="create")||q.from===D&&q.type==="self")&&I.push({start:O,messageId:q.id}),q.from===D&&q.type==="return"){const wA=I.pop();wA&&dA.push({...wA,end:O+20,height:O+20-wA.start})}}),I.length>0){const q=150+s.length*50;I.forEach(MA=>{dA.push({...MA,end:q,height:q-MA.start})})}return dA.map((q,MA)=>n.jsx("div",{className:"activation-box",style:{left:`${jA-8}px`,top:`${q.start}px`,width:"16px",height:`${q.height-23}px`}},`activation-${D}-${MA}`))},HA=(D,CA)=>{const jA=r.findIndex(de=>de.id===D.from),dA=r.findIndex(de=>de.id===D.to);if(jA===-1||dA===-1)return null;const I=150+CA*50,q=G(jA),MA=G(dA),O=D.from===D.to,VA=(de=>{switch(de){case"async":return{stroke:"#3b82f6",strokeDasharray:"5,5",arrowType:"open"};case"return":return{stroke:"#10b981",strokeDasharray:"8,4",arrowType:"open"};case"create":return{stroke:"#f59e0b",strokeDasharray:"none",arrowType:"filled"};case"destroy":return{stroke:"#ef4444",strokeDasharray:"none",arrowType:"filled"};case"self":return{stroke:"#8b5cf6",strokeDasharray:"none",arrowType:"filled"};default:return{stroke:"#64748b",strokeDasharray:"none",arrowType:"filled"}}})(D.type);if(O){const de=Math.max(40,SA*.3);return n.jsx("div",{className:"message-container",children:n.jsxs("svg",{className:"message-svg",style:{overflow:"visible"},children:[n.jsx("path",{d:`M ${q} ${I} L ${q+de} ${I} L ${q+de} ${I+20} L ${q} ${I+20}`,fill:"none",stroke:VA.stroke,strokeWidth:"2",strokeDasharray:VA.strokeDasharray}),n.jsx("polygon",{points:`${q-8},${I+10} ${q},${I+20} ${q-8},${I+30}`,fill:VA.stroke}),n.jsx("text",{x:q+de+10,y:I+15,fontSize:"12",fill:VA.stroke,className:"message-text",children:D.text})]})},D.id)}const WA=q<MA?1:-1,PA=WA>0?MA-8:MA+8,ae=(q+MA)/2;return n.jsx("div",{className:"message-container",children:n.jsxs("svg",{className:"message-svg",style:{overflow:"visible"},children:[n.jsx("line",{x1:q,y1:I,x2:MA,y2:I,stroke:VA.stroke,strokeWidth:"2",strokeDasharray:VA.strokeDasharray}),VA.arrowType==="filled"?n.jsx("polygon",{points:WA>0?`${PA},${I-6} ${MA},${I} ${PA},${I+6}`:`${PA},${I-6} ${MA},${I} ${PA},${I+6}`,fill:VA.stroke}):n.jsx("path",{d:WA>0?`M ${PA},${I-6} L ${MA},${I} L ${PA},${I+6}`:`M ${PA},${I-6} L ${MA},${I} L ${PA},${I+6}`,fill:"none",stroke:VA.stroke,strokeWidth:"2"}),n.jsx("text",{x:ae,y:I-8,textAnchor:"middle",fontSize:"12",fill:VA.stroke,className:"message-text",children:D.text}),n.jsx("text",{x:q+(WA>0?-15:15),y:I-8,textAnchor:"middle",fontSize:"10",fill:"#64748b",className:"message-order",children:D.order})]})},D.id)};return n.jsxs("div",{className:"sequence-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(Un,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"spacing-controls",children:[n.jsx("label",{children:"Spacing:"}),n.jsx("button",{onClick:()=>V(Math.max(100,SA-25)),disabled:SA<=100,className:"spacing-btn",children:n.jsx(nu,{size:14})}),n.jsxs("span",{className:"spacing-value",children:[SA,"px"]}),n.jsx("button",{onClick:()=>V(Math.min(300,SA+25)),disabled:SA>=300,className:"spacing-btn",children:n.jsx(Re,{size:14})})]}),n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:()=>AA(Math.max(.5,gA-.1)),disabled:gA<=.5,className:"zoom-btn",children:"-"}),n.jsxs("span",{className:"zoom-level",children:[Math.round(gA*100),"%"]}),n.jsx("button",{onClick:()=>AA(Math.min(2,gA+.1)),disabled:gA>=2,className:"zoom-btn",children:"+"})]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:Q,className:"export-btn",children:[n.jsx(ra,{size:16})," Export Image"]}),n.jsxs("button",{onClick:nA,className:"export-btn",children:[n.jsx(ja,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const D=new Blob([R()],{type:"application/json"}),CA=URL.createObjectURL(D),jA=document.createElement("a");jA.href=CA,jA.download=`${i.name||"sequence-diagram"}.json`,document.body.appendChild(jA),jA.click(),document.body.removeChild(jA),URL.revokeObjectURL(CA)},className:"export-btn",children:[n.jsx(En,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${QA==="editor"?"active":""}`,onClick:()=>cA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${QA==="json"?"active":""}`,onClick:()=>cA("json"),children:"JSON Editor"})]}),QA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Participants"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:u,onChange:D=>h(D.target.value),placeholder:"New participant name",onKeyPress:D=>D.key==="Enter"&&uA()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Type"}),n.jsxs("select",{value:lA,onChange:D=>pA(D.target.value),children:[n.jsx("option",{value:"actor",children:"Actor (User)"}),n.jsx("option",{value:"service",children:"Service"}),n.jsx("option",{value:"database",children:"Database"}),n.jsx("option",{value:"external",children:"External System"})]})]}),n.jsxs("button",{onClick:uA,className:"add-btn",children:[n.jsx(Re,{size:16})," Add Participant"]}),n.jsx("div",{className:"participant-list",children:r.map(D=>n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-info",children:[n.jsx("div",{className:"item-name",children:D.name}),n.jsx("div",{className:"item-type",children:D.type})]}),n.jsx("button",{onClick:()=>tA(D.id),className:"delete-btn",children:n.jsx(pe,{size:14})})]},D.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Messages"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:B,onChange:D=>m(D.target.value),placeholder:"Message text",onKeyPress:D=>D.key==="Enter"&&EA()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"From"}),n.jsxs("select",{value:w||"",onChange:D=>v(D.target.value),children:[n.jsx("option",{value:"",children:"Select participant"}),r.map(D=>n.jsx("option",{value:D.id,children:D.name},D.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"To"}),n.jsxs("select",{value:E||"",onChange:D=>M(D.target.value),children:[n.jsx("option",{value:"",children:"Select participant"}),r.map(D=>n.jsx("option",{value:D.id,children:D.name},D.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Message Type"}),n.jsxs("select",{value:aA,onChange:D=>_(D.target.value),children:[n.jsx("option",{value:"sync",children:"Synchronous Call"}),n.jsx("option",{value:"async",children:"Asynchronous Call"}),n.jsx("option",{value:"return",children:"Return Message"}),n.jsx("option",{value:"create",children:"Create Message"}),n.jsx("option",{value:"destroy",children:"Destroy Message"}),n.jsx("option",{value:"self",children:"Self Call"})]})]}),n.jsxs("button",{onClick:EA,disabled:!B.trim()||!w||!E,className:"add-btn",children:[n.jsx(Vi,{size:16})," Add Message"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Message Sequence"}),n.jsx("div",{className:"message-list",children:s.sort((D,CA)=>D.order-CA.order).map(D=>{const CA=r.find(dA=>dA.id===D.from),jA=r.find(dA=>dA.id===D.to);return!CA||!jA?null:n.jsxs("div",{className:"message-item",children:[n.jsxs("div",{className:"message-info",children:[n.jsxs("div",{className:"message-order",children:[D.order,"."]}),n.jsxs("div",{className:"message-text",children:[CA.name," → ",jA.name,": ",D.text]}),n.jsx("div",{className:`message-type ${D.type}`,children:D.type})]}),n.jsxs("div",{className:"message-actions",children:[n.jsx("button",{onClick:()=>KA(D.id),disabled:D.order===1,className:"move-btn",children:"↑"}),n.jsx("button",{onClick:()=>TA(D.id),disabled:D.order===s.length,className:"move-btn",children:"↓"}),n.jsx("button",{onClick:()=>IA(D.id),className:"delete-btn",children:n.jsx(pe,{size:14})})]})]},D.id)})})]})]}),n.jsx("div",{className:"diagram-canvas-wrapper",children:n.jsxs("div",{className:"diagram-canvas",ref:iA,style:{transform:`scale(${gA})`,transformOrigin:"top left"},children:[r.map((D,CA)=>sA(D,CA)),r.map((D,CA)=>oA(D,CA)),r.map((D,CA)=>UA(D.id,CA)),s.sort((D,CA)=>D.order-CA.order).map((D,CA)=>HA(D,CA))]})})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const D=document.createElement("input");D.type="file",D.accept=".json",D.onchange=LA,D.click()},className:"import-btn",children:[n.jsx(nn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:DA,onChange:D=>yA(D.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:vA,className:"import-btn",children:[n.jsx(Ha,{size:16})," Apply JSON"]})]}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},aQ=({architectureDiagrams:i,onCreateArchitectureDiagram:r,onLoadArchitectureDiagram:s,onDeleteArchitectureDiagram:o})=>{const[d,u]=k.useState(!1);return n.jsxs("div",{className:"architecture-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(l0,{size:48})}),n.jsx("h2",{children:"Architecture Diagram Designer"}),n.jsx("p",{children:"Model system components and their relationships"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Architecture Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.components?.length||0," components • ",h.connections?.length||0," connections"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:B=>{B.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Fn,{size:16})}),n.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Architecture Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., System Architecture",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},Fi=[{id:"service",name:"Service",icon:n.jsx(nw,{size:20}),color:"#6366f1"},{id:"database",name:"Database",icon:n.jsx(ub,{size:20}),color:"#10b981"},{id:"compute",name:"Compute",icon:n.jsx(cb,{size:20}),color:"#f59e0b"},{id:"storage",name:"Storage",icon:n.jsx(Qb,{size:20}),color:"#8b5cf6"},{id:"network",name:"Network",icon:n.jsx(Rb,{size:20}),color:"#3b82f6"},{id:"cloud",name:"Cloud",icon:n.jsx(ob,{size:20}),color:"#ec4899"},{id:"router",name:"Router",icon:n.jsx(Aw,{size:20}),color:"#14b8a6"},{id:"user",name:"User",icon:n.jsx(au,{size:20}),color:"#84cc16"},{id:"device",name:"Device",icon:n.jsx(ow,{size:20}),color:"#f97316"},{id:"internet",name:"Internet",icon:n.jsx(wb,{size:20}),color:"#06b6d4"},{id:"security",name:"Security",icon:n.jsx(rw,{size:20}),color:"#ef4444"},{id:"module",name:"Module",icon:n.jsx(o0,{size:20}),color:"#0ea5e9"},{id:"application",name:"Application",icon:n.jsx(VB,{size:20}),color:"#9333ea"},{id:"layer",name:"Layer",icon:n.jsx(l0,{size:20}),color:"#facc15"},{id:"gateway",name:"Gateway",icon:n.jsx(Bw,{size:20}),color:"#22d3ee"},{id:"custom",name:"Custom",icon:n.jsx(Re,{size:20}),color:"#64748b"}],rQ=({architectureDiagram:i={name:"Architecture Diagram",components:[],connections:[],groups:[]},components:r=[],connections:s=[],groups:o=[],onUpdateArchitectureDiagram:d=()=>{},onBack:u=()=>{}})=>{const[h,B]=k.useState(""),[m,w]=k.useState(""),[v,E]=k.useState(""),[M,aA]=k.useState(""),[_,lA]=k.useState("solid"),[pA,QA]=k.useState("directed"),[cA,DA]=k.useState("editor"),[yA,gA]=k.useState(""),[AA,SA]=k.useState(null),[V,iA]=k.useState({x:0,y:0}),[uA,EA]=k.useState({}),[tA,IA]=k.useState("service"),[KA,TA]=k.useState(!1),[R,nA]=k.useState(""),[vA,LA]=k.useState("file"),[Q,G]=k.useState(null),[sA,oA]=k.useState(""),[UA,HA]=k.useState(""),[D,CA]=k.useState([]),[jA,dA]=k.useState([]),[I,q]=k.useState(1),[MA,O]=k.useState({width:2e3,height:2e3}),wA=k.useRef(null),VA=k.useRef(null),WA=r.length>0?r:i.components||[],PA=s.length>0?s:i.connections||[],ae=o.length>0?o:i.groups||[];k.useEffect(()=>{gA(JSON.stringify({components:WA,connections:PA,groups:ae},null,2))},[WA,PA,ae]),k.useEffect(()=>{if(WA.length===0&&ae.length===0)return;let f=1/0,b=-1/0,C=1/0,U=-1/0;WA.forEach(eA=>{f=Math.min(f,eA.x),b=Math.max(b,eA.x+eA.width),C=Math.min(C,eA.y),U=Math.max(U,eA.y+eA.height)}),ae.forEach(eA=>{f=Math.min(f,eA.x),b=Math.max(b,eA.x+eA.width),C=Math.min(C,eA.y),U=Math.max(U,eA.y+eA.height)});const H=200,Y=Math.max(2e3,b-f+H*2),K=Math.max(2e3,U-C+H*2);O({width:Y,height:K})},[WA,ae]);const de=(f,b=new Set)=>{if(b.has(f))return 0;b.add(f);let C=0;return ae.forEach(U=>{U.groupIds&&U.groupIds.includes(f)&&(C=Math.max(C,de(U.id,b)+1))}),C},ze=()=>{if(!h.trim())return;const f=Fi.find(C=>C.id===tA)||Fi[0],b=[...WA,{id:Date.now(),name:h,type:tA,x:50+Math.random()*200,y:50+Math.random()*200,width:120,height:120,color:f.color,imageUrl:R}];d({...i,components:b,connections:PA,groups:ae}),B(""),nA(""),TA(!1)},Se=()=>{if(!UA.trim())return;if(D.length===0&&jA.length===0){alert("Please select at least one component or group to create a group.");return}let f=1/0,b=-1/0,C=1/0,U=-1/0;D.forEach(eA=>{f=Math.min(f,eA.x),b=Math.max(b,eA.x+eA.width),C=Math.min(C,eA.y),U=Math.max(U,eA.y+eA.height)}),jA.forEach(eA=>{f=Math.min(f,eA.x),b=Math.max(b,eA.x+eA.width),C=Math.min(C,eA.y),U=Math.max(U,eA.y+eA.height)}),f===1/0&&(f=100,b=300,C=100,U=200);const H=40,Y={id:Date.now(),name:UA,componentIds:D.map(eA=>eA.id),groupIds:jA.map(eA=>eA.id),x:f-H,y:C-H,width:Math.max(200,b-f+H*2),height:Math.max(150,U-C+H*2),color:"#e2e8f0"},K=[...ae,Y];d({...i,components:WA,connections:PA,groups:K}),HA(""),CA([]),dA([])},Ve=()=>{if(!v||!M)return;const f=WA.find(U=>U.id===parseInt(v)),b=WA.find(U=>U.id===parseInt(M));if(!f||!b)return;const C=[...PA,{id:Date.now(),from:f.id,to:b.id,type:_,direction:pA,label:m||"",color:"#64748b"}];d({...i,components:WA,connections:C,groups:ae}),w(""),E(""),aA("")},Le=f=>{const b=WA.filter(H=>H.id!==f),C=PA.filter(H=>!(H.from===f||H.to===f)),U=ae.map(H=>({...H,componentIds:H.componentIds.filter(Y=>Y!==f)})).filter(H=>H.componentIds.length>0||H.groupIds&&H.groupIds.length>0);d({...i,components:b,connections:C,groups:U})},Ye=f=>{const b=PA.filter(C=>C.id!==f);d({...i,components:WA,connections:b,groups:ae})},We=f=>{const b=ae.filter(C=>C.id!==f);d({...i,components:WA,connections:PA,groups:b})},xe=(f,b,C=!1)=>{f.preventDefault(),f.stopPropagation();const U=wA.current.getBoundingClientRect(),H=(f.clientX-U.left)/I,Y=(f.clientY-U.top)/I;if(SA({...b,isGroup:C}),iA({x:H-b.x,y:Y-b.y}),C){const K={};b.componentIds&&b.componentIds.forEach(eA=>{const rA=WA.find(_A=>_A.id===eA);rA&&(K[`component_${eA}`]={x:rA.x,y:rA.y})}),b.groupIds&&b.groupIds.forEach(eA=>{const rA=ae.find(_A=>_A.id===eA);rA&&(K[`group_${eA}`]={x:rA.x,y:rA.y})}),EA(K)}},ue=(f,b)=>{f.stopPropagation(),f.shiftKey?CA(C=>C.some(H=>H.id===b.id)?C.filter(H=>H.id!==b.id):[...C,b]):(CA([b]),dA([]))},x=(f,b)=>{f.stopPropagation(),f.shiftKey?dA(C=>C.some(H=>H.id===b.id)?C.filter(H=>H.id!==b.id):[...C,b]):(dA([b]),CA([]))},F=k.useCallback(f=>{if(!AA)return;const b=wA.current.getBoundingClientRect(),C=Math.max(0,(f.clientX-b.left)/I-V.x),U=Math.max(0,(f.clientY-b.top)/I-V.y);if(AA.isGroup){const H=C-AA.x,Y=U-AA.y,K=WA.map(rA=>{if(AA.componentIds&&AA.componentIds.includes(rA.id)){const _A=uA[`component_${rA.id}`];if(_A)return{...rA,x:Math.max(0,_A.x+H),y:Math.max(0,_A.y+Y)}}return rA}),eA=ae.map(rA=>{if(rA.id===AA.id)return{...rA,x:Math.max(0,C),y:Math.max(0,U)};if(AA.groupIds&&AA.groupIds.includes(rA.id)){const _A=uA[`group_${rA.id}`];if(_A)return{...rA,x:Math.max(0,_A.x+H),y:Math.max(0,_A.y+Y)}}return rA});d({...i,components:K,connections:PA,groups:eA})}else{const H=WA.map(Y=>Y.id===AA.id?{...Y,x:Math.max(0,C),y:Math.max(0,U)}:Y);d({...i,components:H,connections:PA,groups:ae})}},[AA,V,uA,WA,PA,ae,i,d,I]),T=k.useCallback(()=>{SA(null),EA({})},[]);k.useEffect(()=>{if(AA)return document.addEventListener("mousemove",F),document.addEventListener("mouseup",T),()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",T)}},[AA,F,T]);const W=f=>{G(f.id),oA(f.name)},J=()=>{if(!Q||!sA.trim())return;const f=WA.map(b=>b.id===Q?{...b,name:sA}:b);d({...i,components:f,connections:PA,groups:ae}),G(null),oA("")},hA=f=>{f.target===wA.current&&(CA([]),dA([]))},j=()=>JSON.stringify({components:WA,connections:PA,groups:ae},null,2),xA=()=>{navigator.clipboard.writeText(j())},BA=()=>{try{const f=JSON.parse(yA);Array.isArray(f.components)&&Array.isArray(f.connections)?d({...i,components:f.components||[],connections:f.connections||[],groups:f.groups||[]}):alert("Invalid JSON format. Expected components and connections arrays.")}catch(f){alert("Error parsing JSON: "+f.message)}},NA=f=>{const b=f.target.files[0];if(!b)return;const C=new FileReader;C.onload=U=>{gA(U.target.result)},C.readAsText(b)},JA=f=>{const b=f.target.files[0];if(!b)return;const C=new FileReader;C.onload=U=>{nA(U.target.result)},C.readAsDataURL(b)},OA=f=>{nA(f.target.value)},te=()=>{q(f=>Math.min(2,f+.1))},$A=()=>{q(f=>Math.max(.5,f-.1))},he=()=>{q(1)},Me=()=>{if(!wA.current)return;const f=wA.current.style.transform,b=wA.current.style.width,C=wA.current.style.height;wA.current.style.width=`${MA.width}px`,wA.current.style.height=`${MA.height}px`,Er(()=>Promise.resolve().then(()=>Fr),void 0).then(U=>{U.default(wA.current,{backgroundColor:"#f8fafc",scale:2,useCORS:!0,width:MA.width,height:MA.height}).then(H=>{const Y=document.createElement("a");Y.download=`${i.name||"architecture-diagram"}.png`,Y.href=H.toDataURL("image/png"),Y.click(),wA.current.style.transform=f,wA.current.style.width=b,wA.current.style.height=C})})},je=(f,b)=>{const C=f.x+f.width/2,U=f.y+f.height/2,H=b.x+b.width/2,Y=b.y+b.height/2,K=H-C,eA=Y-U;let rA,_A;Math.abs(K)>Math.abs(eA)?(rA=K>0?f.x+f.width:f.x,_A=U):(rA=C,_A=eA>0?f.y+f.height:f.y);let FA,RA;return Math.abs(K)>Math.abs(eA)?(FA=K>0?b.x:b.x+b.width,RA=Y):(FA=H,RA=eA>0?b.y:b.y+b.height),{fromX:rA,fromY:_A,toX:FA,toY:RA}},re=f=>{const b=Fi.find(H=>H.id===f.type)||Fi[0],C=D.some(H=>H.id===f.id),U=Q===f.id;return n.jsxs("div",{className:"component",style:{position:"absolute",left:`${f.x}px`,top:`${f.y}px`,width:`${f.width}px`,height:`${f.height}px`,cursor:AA?.id===f.id?"grabbing":"grab",outline:C?"3px dashed #3b82f6":"none",outlineOffset:"2px",zIndex:50,display:"flex",flexDirection:"column",background:"white",borderRadius:"12px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.15)",border:"2px solid #e2e8f0",overflow:"hidden",textAlign:"center",fontSize:"12px"},onMouseDown:H=>xe(H,f),onClick:H=>ue(H,f),onDoubleClick:()=>W(f),children:[n.jsx("div",{style:{width:"100%",height:"70%",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"#f8fafc",borderRadius:"10px 10px 0 0"},children:f.imageUrl?n.jsx("img",{src:f.imageUrl,alt:f.name,style:{maxWidth:"90%",maxHeight:"90%",objectFit:"contain",borderRadius:"6px"}}):n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",color:f.color||b.color},children:SB.cloneElement(b.icon,{size:48})})}),n.jsx("div",{style:{width:"100%",height:"30%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"6px 0px",color:"white",fontWeight:"600",borderRadius:"0 0 10px 10px",backgroundColor:f.color||b.color},children:U?n.jsx("input",{type:"text",value:sA,onChange:H=>oA(H.target.value),onBlur:J,onKeyPress:H=>H.key==="Enter"&&J(),autoFocus:!0,style:{width:"100%",border:"none",background:"rgba(255, 255, 255, 0.2)",color:"white",textAlign:"center",fontWeight:"600",outline:"none",fontSize:"11px"}}):n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{fontSize:"11px",fontWeight:"600",lineHeight:"1.2",marginBottom:"2px",wordBreak:"break-word",maxWidth:"100%"},children:f.name}),n.jsx("div",{style:{fontSize:"9px",opacity:"0.9",fontWeight:"500"},children:b.name})]})})]},f.id)},g=f=>{if(!f.componentIds&&!f.groupIds)return null;const b=WA.filter(K=>f.componentIds&&f.componentIds.includes(K.id)),C=ae.filter(K=>f.groupIds&&f.groupIds.includes(K.id)),U=jA.some(K=>K.id===f.id),Y=10+de(f.id)*5;return n.jsxs("div",{className:"group",style:{position:"absolute",left:`${f.x}px`,top:`${f.y}px`,width:`${f.width}px`,height:`${f.height}px`,backgroundColor:"rgba(226, 232, 240, 0.3)",border:"2px dashed #94a3b8",borderRadius:"12px",cursor:AA?.id===f.id?"grabbing":"grab",outline:U?"3px dashed #8b5cf6":"none",outlineOffset:"2px",zIndex:Y,paddingTop:"40px",boxSizing:"border-box",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)",pointerEvents:"auto"},onMouseDown:K=>xe(K,f,!0),onClick:K=>x(K,f),children:[n.jsxs("div",{style:{position:"absolute",top:"8px",left:"12px",right:"12px",fontWeight:"700",fontSize:"14px",color:"#1e293b",display:"flex",justifyContent:"space-between",alignItems:"center",pointerEvents:"auto",zIndex:Y+1},children:[n.jsx("span",{style:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:f.name}),n.jsx("button",{onClick:K=>{K.stopPropagation(),We(f.id)},style:{background:"rgba(239, 68, 68, 0.1)",border:"1px solid rgba(239, 68, 68, 0.3)",color:"#ef4444",cursor:"pointer",padding:"4px",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:Y+2},children:n.jsx(pe,{size:14})})]}),n.jsxs("div",{style:{position:"absolute",bottom:"8px",left:"12px",fontSize:"11px",color:"#64748b",fontStyle:"italic",pointerEvents:"none"},children:[b.length," component",b.length!==1?"s":"",C.length>0&&`, ${C.length} group${C.length!==1?"s":""}`]})]},f.id)},S=f=>{const b=WA.find(ZA=>ZA.id===f.from),C=WA.find(ZA=>ZA.id===f.to);if(!b||!C)return null;const{fromX:U,fromY:H,toX:Y,toY:K}=je(b,C),eA=Y-U,rA=K-H,_A=Math.atan2(rA,eA),FA=10;let RA={};return f.type==="dashed"?RA={strokeDasharray:"5,5",stroke:f.color||"#64748b"}:f.type==="dotted"?RA={strokeDasharray:"2,2",stroke:f.color||"#64748b"}:RA={stroke:f.color||"#64748b"},n.jsxs("svg",{style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:49},children:[n.jsx("line",{x1:U,y1:H,x2:Y,y2:K,strokeWidth:"2",...RA}),f.direction==="directed"&&n.jsx("polygon",{points:`
              ${Y-FA*Math.cos(_A-Math.PI/6)},${K-FA*Math.sin(_A-Math.PI/6)}
              ${Y},${K}
              ${Y-FA*Math.cos(_A+Math.PI/6)},${K-FA*Math.sin(_A+Math.PI/6)}
            `,fill:RA.stroke||"#64748b"}),f.label&&n.jsx("text",{x:(U+Y)/2,y:(H+K)/2-10,textAnchor:"middle",fontSize:"12",fill:RA.stroke||"#475569",children:f.label})]},f.id)};return n.jsxs("div",{style:{width:"100%",height:"100vh",display:"flex",flexDirection:"column",background:"#f8fafc",fontFamily:"Inter, system-ui, -apple-system, sans-serif"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"16px",background:"white",borderBottom:"1px solid #e2e8f0",boxShadow:"0 1px 3px rgba(0, 0, 0, 0.1)"},children:[n.jsxs("button",{onClick:u,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#f1f5f9",color:"#64748b",border:"1px solid #e2e8f0"},children:[n.jsx(Un,{size:16})," Back"]}),n.jsx("h2",{style:{margin:"0 16px",fontSize:"20px",color:"#1e293b"},children:i.name}),n.jsx("div",{style:{flex:1}}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",marginRight:"16px",background:"#f1f5f9",borderRadius:"6px",padding:"4px"},children:[n.jsx("button",{onClick:$A,style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",borderRadius:"4px",cursor:"pointer",color:"#64748b"},title:"Zoom Out",children:n.jsx(Qr,{size:16})}),n.jsxs("div",{style:{minWidth:"60px",textAlign:"center",fontSize:"14px",fontWeight:"500"},children:[Math.round(I*100),"%"]}),n.jsx("button",{onClick:te,style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",borderRadius:"4px",cursor:"pointer",color:"#64748b"},title:"Zoom In",children:n.jsx(Cr,{size:16})}),n.jsx("button",{onClick:he,style:{width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",background:"none",border:"none",borderRadius:"4px",cursor:"pointer",color:"#64748b",marginLeft:"4px"},title:"Reset Zoom",children:n.jsx(Sb,{size:16})})]}),n.jsxs("button",{onClick:Me,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#8b5cf6",color:"white",border:"1px solid #8b5cf6"},children:[n.jsx(ra,{size:16})," Export Image"]}),n.jsxs("button",{onClick:xA,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#8b5cf6",color:"white",border:"1px solid #8b5cf6"},children:[n.jsx(ja,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const f=new Blob([j()],{type:"application/json"}),b=URL.createObjectURL(f),C=document.createElement("a");C.href=b,C.download=`${i.name||"architecture-diagram"}.json`,document.body.appendChild(C),C.click(),document.body.removeChild(C),URL.revokeObjectURL(b)},style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s",background:"#8b5cf6",color:"white",border:"1px solid #8b5cf6"},children:[n.jsx(En,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{style:{display:"flex",borderBottom:"1px solid #e2e8f0",background:"white"},children:[n.jsx("button",{style:{padding:"12px 24px",border:"none",background:"none",cursor:"pointer",fontWeight:"500",color:cA==="editor"?"#8b5cf6":"#64748b",borderBottom:cA==="editor"?"2px solid #8b5cf6":"2px solid transparent"},onClick:()=>DA("editor"),children:"Diagram Editor"}),n.jsx("button",{style:{padding:"12px 24px",border:"none",background:"none",cursor:"pointer",fontWeight:"500",color:cA==="json"?"#8b5cf6":"#64748b",borderBottom:cA==="json"?"2px solid #8b5cf6":"2px solid transparent"},onClick:()=>DA("json"),children:"JSON Editor"})]}),cA==="editor"?n.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[n.jsxs("div",{style:{width:"320px",background:"white",borderRight:"1px solid #e2e8f0",display:"flex",flexDirection:"column",overflow:"auto"},children:[n.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"12px",fontSize:"16px",color:"#1e293b"},children:"Components"}),n.jsx("div",{style:{marginBottom:"12px"},children:n.jsx("input",{type:"text",value:h,onChange:f=>B(f.target.value),placeholder:"Component name",onKeyPress:f=>f.key==="Enter"&&ze(),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"}})}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"Component Type"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"8px",marginTop:"8px"},children:Fi.map(f=>n.jsx("button",{onClick:()=>IA(f.id),title:f.name,style:{width:"100%",aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",border:"none",borderRadius:"6px",cursor:"pointer",color:"white",transition:"all 0.2s",backgroundColor:f.color,outline:tA===f.id?"2px solid #1e293b":"none",outlineOffset:"2px"},children:f.icon},f.id))})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsxs("button",{onClick:()=>TA(!KA),style:{width:"100%",padding:"8px",background:"#e2e8f0",border:"none",borderRadius:"6px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",fontSize:"14px"},children:[n.jsx(ra,{size:16})," ",R?"Change Image":"Add Image (Optional)"]}),KA&&n.jsxs("div",{style:{marginTop:"8px"},children:[n.jsxs("div",{style:{display:"flex",marginBottom:"8px",borderBottom:"1px solid #e2e8f0"},children:[n.jsx("button",{onClick:()=>LA("file"),style:{flex:1,padding:"6px",border:"none",background:"none",cursor:"pointer",fontSize:"12px",color:vA==="file"?"#8b5cf6":"#64748b",borderBottom:vA==="file"?"2px solid #8b5cf6":"2px solid transparent"},children:"Upload File"}),n.jsx("button",{onClick:()=>LA("url"),style:{flex:1,padding:"6px",border:"none",background:"none",cursor:"pointer",fontSize:"12px",color:vA==="url"?"#8b5cf6":"#64748b",borderBottom:vA==="url"?"2px solid #8b5cf6":"2px solid transparent"},children:"URL"})]}),vA==="file"?n.jsx("input",{type:"file",accept:"image/*",onChange:JA,style:{width:"100%",marginBottom:"8px"}}):n.jsx("input",{type:"text",value:R,onChange:OA,placeholder:"Enter image URL",style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px",marginBottom:"8px"}}),R&&n.jsxs("div",{style:{position:"relative",marginTop:"8px",display:"flex",justifyContent:"center"},children:[n.jsx("img",{src:R,alt:"Preview",style:{maxWidth:"100%",maxHeight:"60px",borderRadius:"4px"}}),n.jsx("button",{onClick:()=>nA(""),style:{position:"absolute",top:"-8px",right:"-8px",width:"20px",height:"20px",borderRadius:"50%",background:"#fee2e2",color:"#ef4444",border:"none",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:n.jsx(pe,{size:12})})]})]})]}),n.jsxs("button",{onClick:ze,disabled:!h.trim(),style:{width:"100%",padding:"8px 16px",background:h.trim()?"#8b5cf6":"#ddd6fe",color:"white",border:"none",borderRadius:"6px",fontWeight:"500",cursor:h.trim()?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginTop:"8px"},children:[n.jsx(Re,{size:16})," Add Component"]}),n.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"12px"},children:WA.map(f=>n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("div",{style:{flex:1},children:n.jsx("div",{style:{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:f.name})}),n.jsx("button",{onClick:()=>Le(f.id),style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fee2e2",color:"#ef4444",border:"none",cursor:"pointer",marginLeft:"8px"},children:n.jsx(pe,{size:14})})]},f.id))})]}),n.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"12px",fontSize:"16px",color:"#1e293b"},children:"Groups"}),n.jsx("div",{style:{marginBottom:"12px"},children:n.jsx("input",{type:"text",value:UA,onChange:f=>HA(f.target.value),placeholder:"Group name",onKeyPress:f=>f.key==="Enter"&&Se(),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"}})}),n.jsxs("button",{onClick:Se,disabled:!UA.trim()||D.length===0&&jA.length===0,style:{width:"100%",padding:"8px 16px",background:!UA.trim()||D.length===0&&jA.length===0?"#ddd6fe":"#8b5cf6",color:"white",border:"none",borderRadius:"6px",fontWeight:"500",cursor:!UA.trim()||D.length===0&&jA.length===0?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[n.jsx(o0,{size:16})," Create Group"]}),n.jsxs("div",{style:{marginTop:"12px",padding:"12px",background:"#f1f5f9",borderRadius:"6px",fontSize:"12px"},children:[D.length>0||jA.length>0?n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{marginBottom:"8px",fontWeight:"500"},children:[D.length," component(s), ",jA.length," group(s) selected"]}),n.jsxs("button",{onClick:()=>{CA([]),dA([])},style:{display:"flex",alignItems:"center",gap:"4px",background:"none",border:"none",color:"#64748b",cursor:"pointer",fontSize:"12px",padding:"4px 8px",borderRadius:"4px"},children:[n.jsx(nu,{size:14})," Clear Selection"]})]}):n.jsx("div",{children:"No items selected"}),n.jsx("div",{style:{marginTop:"8px",color:"#64748b",fontStyle:"italic"},children:"Hold Shift + Click to select multiple items"})]}),n.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"12px"},children:ae.map(f=>n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f1f5f9"},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:f.name}),n.jsxs("div",{style:{fontSize:"12px",color:"#64748b",marginTop:"2px"},children:[f.componentIds?f.componentIds.length:0," components",f.groupIds&&f.groupIds.length>0&&`, ${f.groupIds.length} groups`]})]}),n.jsx("button",{onClick:()=>We(f.id),style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fee2e2",color:"#ef4444",border:"none",cursor:"pointer",marginLeft:"8px"},children:n.jsx(pe,{size:14})})]},f.id))})]}),n.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid #f1f5f9"},children:[n.jsx("h3",{style:{marginTop:"0",marginBottom:"12px",fontSize:"16px",color:"#1e293b"},children:"Connections"}),n.jsx("div",{style:{marginBottom:"12px"},children:n.jsx("input",{type:"text",value:m,onChange:f=>w(f.target.value),placeholder:"Connection label (optional)",onKeyPress:f=>f.key==="Enter"&&Ve(),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"}})}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"From Component"}),n.jsxs("select",{value:v||"",onChange:f=>E(f.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"",children:"Select component"}),WA.map(f=>n.jsx("option",{value:f.id,children:f.name},f.id))]})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"To Component"}),n.jsxs("select",{value:M||"",onChange:f=>aA(f.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"",children:"Select component"}),WA.map(f=>n.jsx("option",{value:f.id,children:f.name},f.id))]})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"Connection Type"}),n.jsxs("select",{value:_,onChange:f=>lA(f.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"solid",children:"Solid Line"}),n.jsx("option",{value:"dashed",children:"Dashed Line"}),n.jsx("option",{value:"dotted",children:"Dotted Line"})]})]}),n.jsxs("div",{style:{marginBottom:"12px"},children:[n.jsx("label",{style:{display:"block",marginBottom:"4px",fontSize:"12px",fontWeight:"500",color:"#64748b"},children:"Direction"}),n.jsxs("select",{value:pA,onChange:f=>QA(f.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontSize:"14px"},children:[n.jsx("option",{value:"directed",children:"Directed (with arrow)"}),n.jsx("option",{value:"undirected",children:"Undirected"})]})]}),n.jsxs("button",{onClick:Ve,disabled:!v||!M,style:{width:"100%",padding:"8px 16px",background:!v||!M?"#ddd6fe":"#8b5cf6",color:"white",border:"none",borderRadius:"6px",fontWeight:"500",cursor:!v||!M?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},children:[n.jsx(Vi,{size:16})," Add Connection"]}),n.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",marginTop:"12px"},children:PA.map(f=>{const b=WA.find(U=>U.id===f.from),C=WA.find(U=>U.id===f.to);return!b||!C?null:n.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #f1f5f9"},children:[n.jsxs("div",{style:{flex:1},children:[n.jsxs("div",{style:{fontSize:"14px",fontWeight:"500",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[b.name," → ",C.name]}),n.jsx("div",{style:{fontSize:"12px",color:"#64748b",marginTop:"2px"},children:f.type}),f.label&&n.jsx("div",{style:{fontSize:"12px",color:"#64748b",marginTop:"2px"},children:f.label})]}),n.jsx("button",{onClick:()=>Ye(f.id),style:{width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:"#fee2e2",color:"#ef4444",border:"none",cursor:"pointer",marginLeft:"8px"},children:n.jsx(pe,{size:14})})]},f.id)})})]})]}),n.jsx("div",{ref:VA,style:{flex:1,overflow:"auto",position:"relative",background:"#f8fafc"},children:n.jsxs("div",{ref:wA,onClick:hA,style:{position:"absolute",width:`${MA.width}px`,height:`${MA.height}px`,background:"white",backgroundImage:"linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",backgroundSize:"20px 20px",transform:`scale(${I})`,transformOrigin:"0 0"},children:[ae.map(g),PA.map(S),WA.map(re)]})})]}):n.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,padding:"16px",background:"white"},children:[n.jsx("div",{style:{display:"flex",gap:"8px",marginBottom:"12px"},children:n.jsxs("button",{onClick:()=>{const f=document.createElement("input");f.type="file",f.accept=".json",f.onchange=NA,f.click()},style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",border:"none",background:"#8b5cf6",color:"white"},children:[n.jsx(nn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:yA,onChange:f=>gA(f.target.value),style:{flex:1,padding:"12px",border:"1px solid #e2e8f0",borderRadius:"6px",fontFamily:"monospace",fontSize:"14px",resize:"none",marginBottom:"12px"}}),n.jsxs("button",{onClick:BA,style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",borderRadius:"6px",fontWeight:"500",cursor:"pointer",border:"none",background:"#8b5cf6",color:"white",alignSelf:"flex-start"},children:[n.jsx(Ha,{size:16})," Apply JSON"]})]})]})},iQ=({classDiagrams:i,onCreateClassDiagram:r,onLoadClassDiagram:s,onDeleteClassDiagram:o})=>{const[d,u]=k.useState(!1);return n.jsxs("div",{className:"class-diagram-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(i0,{size:48})}),n.jsx("h2",{children:"Class Diagram Designer"}),n.jsx("p",{children:"Model classes and their relationships in object-oriented design"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Class Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.classes?.length||0," classes • ",h.relationships?.length||0," relationships"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:B=>{B.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Fn,{size:16})}),n.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Class Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Banking System Classes",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},oQ=({classDiagram:i,classes:r=[],relationships:s=[],onUpdateClassDiagram:o,onBack:d})=>{const[u,h]=k.useState(""),[B,m]=k.useState(""),[w,v]=k.useState(""),[E,M]=k.useState(""),[aA,_]=k.useState("association"),[lA,pA]=k.useState("editor"),[QA,cA]=k.useState(""),[DA,yA]=k.useState(null),[gA,AA]=k.useState({x:0,y:0}),[SA,V]=k.useState(null),[iA,uA]=k.useState({x:0,y:0}),[EA,tA]=k.useState(null),[IA,KA]=k.useState(""),[TA,R]=k.useState(-1),[nA,vA]=k.useState({visibility:"+",name:"",type:"String"}),[LA,Q]=k.useState({visibility:"+",name:"",returnType:"void"}),[G,sA]=k.useState(1),[oA,UA]=k.useState({x:0,y:0}),[HA,D]=k.useState(!1),[CA,jA]=k.useState({x:0,y:0}),dA=k.useRef(null),I=[{header:"#EC4899",border:"#BE185D",background:"#FDF2F8"},{header:"#DB2777",border:"#9D174D",background:"#FCE7F3"},{header:"#F472B6",border:"#EC4899",background:"#FDF2F8"},{header:"#F43F5E",border:"#E11D48",background:"#FFF1F2"},{header:"#F97316",border:"#EA580C",background:"#FFEDD5"},{header:"#8B5CF6",border:"#7C3AED",background:"#F5F3FF"},{header:"#3B82F6",border:"#2563EB",background:"#EFF6FF"},{header:"#10B981",border:"#059669",background:"#ECFDF5"},{header:"#EF4444",border:"#DC2626",background:"#FEF2F2"},{header:"#8B5A2B",border:"#A16207",background:"#FFFBEB"},{header:"#6B7280",border:"#4B5563",background:"#F9FAFB"},{header:"#14B8A6",border:"#0D9488",background:"#F0FDFA"}],q=["String","int","float","double","boolean","void","char","long","short","byte"],MA=[{value:"+",label:"Public (+)"},{value:"-",label:"Private (-)"},{value:"#",label:"Protected (#)"},{value:"~",label:"Package (~)"}];k.useEffect(()=>{cA(JSON.stringify({classes:r,relationships:s},null,2))},[r,s]);const O=()=>I[Math.floor(Math.random()*I.length)],wA=()=>{const g=r.map(S=>({...S,colorScheme:O()}));o({...i,classes:g})},VA=()=>{sA(g=>Math.min(g*1.2,3))},WA=()=>{sA(g=>Math.max(g/1.2,.3))},PA=()=>{sA(1),UA({x:0,y:0})},ae=(g,S="12px",f="'SF Mono', monospace")=>{const C=document.createElement("canvas").getContext("2d");return C.font=`${S} ${f}`,C.measureText(g).width},de=g=>{const b=ae(g.name,"16px","'Inter', sans-serif")+32;let C=0;g.attributes.forEach(ge=>{const we=`${ge.visibility} ${ge.name} : ${ge.type}`,Oe=ae(we)+32;Oe>C&&(C=Oe)});let U=0;g.methods.forEach(ge=>{const we=`${ge.visibility} ${ge.name} : ${ge.returnType}`,Oe=ae(we)+32;Oe>U&&(U=Oe)});const H=Math.max(180,b,C,U),Y=40,K=26,eA=6,rA=1,_A=g.attributes.length>0?g.attributes.length*K+eA*2:0,FA=g.methods.length>0?g.methods.length*K+eA*2:0,RA=g.attributes.length>0&&g.methods.length>0?rA:0,ZA=Y+_A+FA+RA;return{width:Math.min(H,400),height:Math.max(ZA,60)}},ze=()=>{if(!u.trim())return;const g=O(),S=de({name:u,attributes:[],methods:[]}),f=[...r,{id:Date.now(),name:u,attributes:[],methods:[],x:50+Math.random()*200,y:50+Math.random()*200,width:S.width,height:S.height,colorScheme:g}];o({...i,classes:f}),h("")},Se=g=>{const S=r.find(f=>f.id===g);S&&tA(S)},Ve=(g,S=-1)=>{const f=r.find(b=>b.id===g);f&&(KA("attribute"),R(S),S>=0?vA({...f.attributes[S]}):vA({visibility:"+",name:"",type:"String"}))},Le=(g,S=-1)=>{const f=r.find(b=>b.id===g);f&&(KA("method"),R(S),S>=0?Q({...f.methods[S]}):Q({visibility:"+",name:"",returnType:"void"}))},Ye=()=>{if(!nA.name.trim())return;const g=r.map(S=>{if(S.id===EA.id){const f=[...S.attributes];TA>=0?f[TA]={...nA}:f.push({...nA});const b={...S,attributes:f},C=de(b);return{...b,width:C.width,height:C.height}}return S});o({...i,classes:g}),xe()},We=()=>{if(!LA.name.trim())return;let g=LA.name;g.includes("(")||(g+="()");const S=r.map(f=>{if(f.id===EA.id){const b=[...f.methods];TA>=0?b[TA]={...LA,name:g}:b.push({...LA,name:g});const C={...f,methods:b},U=de(C);return{...C,width:U.width,height:U.height}}return f});o({...i,classes:S}),xe()},xe=()=>{tA(null),KA(""),R(-1)},ue=()=>{if(!w||!E)return;const g=r.find(b=>b.id===parseInt(w)),S=r.find(b=>b.id===parseInt(E));if(!g||!S)return;const f=[...s,{id:Date.now(),from:g.id,to:S.id,type:aA,label:B||""}];o({...i,relationships:f}),m(""),v(""),M("")},x=g=>{const S=r.filter(b=>b.id!==g),f=s.filter(b=>!(b.from===g||b.to===g));o({...i,classes:S,relationships:f})},F=(g,S)=>{const f=r.map(b=>{if(b.id===g){const C=b.attributes.filter((Y,K)=>K!==S),U={...b,attributes:C},H=de(U);return{...U,width:H.width,height:H.height}}return b});o({...i,classes:f})},T=(g,S)=>{const f=r.map(b=>{if(b.id===g){const C=b.methods.filter((Y,K)=>K!==S),U={...b,methods:C},H=de(U);return{...U,width:H.width,height:H.height}}return b});o({...i,classes:f})},W=g=>{const S=s.filter(f=>f.id!==g);o({...i,relationships:S})},J=(g,S=null,f=!1)=>{g.stopPropagation();const b=dA.current?.getBoundingClientRect();b&&(S?f?(V(S),uA({x:g.clientX,y:g.clientY})):(yA(S),AA({x:(g.clientX-b.left)/G-oA.x-S.x,y:(g.clientY-b.top)/G-oA.y-S.y})):(D(!0),jA({x:g.clientX-oA.x,y:g.clientY-oA.y})))},hA=g=>{if(DA){const S=dA.current?.getBoundingClientRect();if(!S)return;const f=Math.max(0,(g.clientX-S.left)/G-oA.x-gA.x),b=Math.max(0,(g.clientY-S.top)/G-oA.y-gA.y),C=r.map(U=>U.id===DA.id?{...U,x:f,y:b}:U);o({...i,classes:C})}else if(SA){const S=(g.clientX-iA.x)/G,f=(g.clientY-iA.y)/G,b=r.map(C=>{if(C.id===SA.id){const U=Math.max(180,C.width+S),H=Math.max(90,C.height+f);return{...C,width:U,height:H}}return C});o({...i,classes:b}),uA({x:g.clientX,y:g.clientY})}else HA&&UA({x:g.clientX-CA.x,y:g.clientY-CA.y})},j=()=>{yA(null),V(null),D(!1)},xA=g=>{g.preventDefault();const S=g.deltaY>0?.9:1.1;sA(f=>Math.max(.3,Math.min(3,f*S)))};k.useEffect(()=>{if(DA||SA||HA)return document.addEventListener("mousemove",hA),document.addEventListener("mouseup",j),()=>{document.removeEventListener("mousemove",hA),document.removeEventListener("mouseup",j)}},[DA,SA,HA,gA,iA,CA,G,oA]);const BA=()=>JSON.stringify({classes:r,relationships:s},null,2),NA=()=>{navigator.clipboard.writeText(BA())},JA=()=>{try{const g=JSON.parse(QA);if(Array.isArray(g.classes)&&Array.isArray(g.relationships)){const S=g.classes.map(f=>({...f,...de(f)}));o({...i,classes:S,relationships:g.relationships})}else alert("Invalid JSON format. Expected classes and relationships arrays.")}catch(g){alert("Error parsing JSON: "+g.message)}},OA=g=>{const S=g.target.files[0];if(!S)return;const f=new FileReader;f.onload=b=>{cA(b.target.result)},f.readAsText(S)},te=()=>{if(!dA.current)return;const g=dA.current.style.transform;dA.current.style.transform="scale(1) translate(0px, 0px)",Er(()=>Promise.resolve().then(()=>Fr),void 0).then(S=>{S.default(dA.current,{backgroundColor:"#f8fafc",scale:2,useCORS:!0}).then(f=>{const b=document.createElement("a");b.download=`${i.name||"class-diagram"}.png`,b.href=f.toDataURL("image/png"),b.click(),dA.current.style.transform=g})})},$A=(g,S)=>{const f={x:g.x+g.width/2,y:g.y+g.height/2},b={x:S.x+S.width/2,y:S.y+S.height/2},C=b.x-f.x,U=b.y-f.y;f.x+(C>0?g.width/2:-g.width/2),f.y+(Math.abs(C)*g.height/g.width>Math.abs(U)?U>0?g.height/2:-g.height/2:(U>0?g.height/2:-g.height/2)*(g.width/g.height)),b.x+(C<0?S.width/2:-S.width/2),b.y+(Math.abs(C)*S.height/S.width>Math.abs(U)?U<0?S.height/2:-S.height/2:(U<0?S.height/2:-S.height/2)*(S.width/S.height));const H={x:Math.max(g.x,Math.min(g.x+g.width,Math.abs(C)>Math.abs(U)*(g.width/g.height)?f.x+(C>0?g.width/2:-g.width/2):f.x)),y:Math.max(g.y,Math.min(g.y+g.height,Math.abs(U)>Math.abs(C)*(g.height/g.width)?f.y+(U>0?g.height/2:-g.height/2):f.y))},Y={x:Math.max(S.x,Math.min(S.x+S.width,Math.abs(C)>Math.abs(U)*(S.width/S.height)?b.x+(C<0?S.width/2:-S.width/2):b.x)),y:Math.max(S.y,Math.min(S.y+S.height,Math.abs(U)>Math.abs(C)*(S.height/S.width)?b.y+(U<0?S.height/2:-S.height/2):b.y))};return{fromPoint:H,toPoint:Y}},he=(g,S)=>{if(Math.sqrt(Math.pow(S.x-g.x,2)+Math.pow(S.y-g.y,2))<300)return`M${g.x},${g.y} L${S.x},${S.y}`;const b=g.x+(S.x-g.x)*.5,C=g.y+(S.y-g.y)*.5;return Math.abs(S.x-g.x)>Math.abs(S.y-g.y)?`M${g.x},${g.y} L${b},${g.y} L${b},${S.y} L${S.x},${S.y}`:`M${g.x},${g.y} L${g.x},${C} L${S.x},${C} L${S.x},${S.y}`},Me=g=>{const S=g.colorScheme||I[0];return n.jsxs("div",{className:"class-box",style:{left:`${g.x}px`,top:`${g.y}px`,width:`${g.width}px`,height:`${g.height}px`,cursor:DA?.id===g.id?"grabbing":"grab",borderColor:S.border,backgroundColor:"white"},onMouseDown:f=>J(f,g),onDoubleClick:()=>Se(g.id),children:[n.jsx("div",{className:"class-header",style:{backgroundColor:S.header,color:"white"},children:n.jsx("div",{className:"class-name",children:g.name})}),n.jsxs("div",{className:"class-content",children:[g.attributes.length>0&&n.jsx("div",{className:"attributes-section",children:g.attributes.map((f,b)=>n.jsxs("div",{className:"class-item",onDoubleClick:C=>{C.stopPropagation(),Ve(g.id,b)},children:[n.jsxs("span",{className:"item-text",children:[f.visibility," ",f.name," : ",f.type]}),n.jsx("button",{onClick:C=>{C.stopPropagation(),F(g.id,b)},className:"item-delete-btn",children:n.jsx(pe,{size:10})})]},b))}),g.attributes.length>0&&g.methods.length>0&&n.jsx("div",{className:"section-divider",style:{backgroundColor:S.border}}),g.methods.length>0&&n.jsx("div",{className:"methods-section",children:g.methods.map((f,b)=>n.jsxs("div",{className:"class-item",onDoubleClick:C=>{C.stopPropagation(),Le(g.id,b)},children:[n.jsxs("span",{className:"item-text",children:[f.visibility," ",f.name," : ",f.returnType]}),n.jsx("button",{onClick:C=>{C.stopPropagation(),T(g.id,b)},className:"item-delete-btn",children:n.jsx(pe,{size:10})})]},b))})]}),n.jsx("div",{className:"resize-handle",style:{backgroundColor:S.header},onMouseDown:f=>J(f,g,!0)})]},g.id)},je=g=>{const S=r.find(rA=>rA.id===g.from),f=r.find(rA=>rA.id===g.to);if(!S||!f)return null;const b={x:S.x,y:S.y,width:S.width,height:S.height},C={x:f.x,y:f.y,width:f.width,height:f.height},{fromPoint:U,toPoint:H}=$A(b,C),Y=he(U,H),K=(U.x+H.x)/2,eA=(U.y+H.y)/2;return n.jsxs("svg",{className:"relationship-svg",style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:[n.jsxs("defs",{children:[n.jsx("marker",{id:`arrowhead-${g.id}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#475569"})}),n.jsx("marker",{id:`inheritance-${g.id}`,markerWidth:"12",markerHeight:"10",refX:"11",refY:"5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"white",stroke:"#475569",strokeWidth:"1"})}),n.jsx("marker",{id:`diamond-${g.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"#475569"})}),n.jsx("marker",{id:`diamond-empty-${g.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"white",stroke:"#475569",strokeWidth:"1"})})]}),(()=>{const _A=(()=>{switch(g.type){case"inheritance":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#inheritance-${g.id})`};case"realization":return{stroke:"#475569",strokeWidth:2,strokeDasharray:"5,5",markerEnd:`url(#inheritance-${g.id})`};case"dependency":return{stroke:"#475569",strokeWidth:1,strokeDasharray:"8,4",markerEnd:`url(#arrowhead-${g.id})`};case"aggregation":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-empty-${g.id})`};case"composition":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-${g.id})`};case"navigable":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#arrowhead-${g.id})`};default:return{stroke:"#475569",strokeWidth:2}}})();return n.jsxs(n.Fragment,{children:[n.jsx("path",{d:Y,fill:"none",..._A}),g.label&&n.jsxs("g",{children:[n.jsx("rect",{x:K-g.label.length*4,y:eA-8,width:g.label.length*8,height:16,fill:"white",stroke:"#e2e8f0",rx:"2"}),n.jsx("text",{x:K,y:eA+4,textAnchor:"middle",fontSize:"11",fill:"#475569",fontWeight:"500",children:g.label})]})]})})()]},g.id)},re=g=>{if(g.target===dA.current){const S=dA.current.getBoundingClientRect(),f=(g.clientX-S.left)/G-oA.x,b=(g.clientY-S.top)/G-oA.y,C=prompt("Enter class name:");if(C&&C.trim()){const U=O(),H=de({name:C.trim(),attributes:[],methods:[]}),Y=[...r,{id:Date.now(),name:C.trim(),attributes:[],methods:[],x:f-H.width/2,y:b-40,width:H.width,height:H.height,colorScheme:U}];o({...i,classes:Y})}}};return n.jsxs("div",{className:"class-diagram-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(Un,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"toolbar-controls",children:[n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:WA,className:"zoom-btn",children:n.jsx(Qr,{size:16})}),n.jsxs("span",{className:"zoom-level",children:[Math.round(G*100),"%"]}),n.jsx("button",{onClick:VA,className:"zoom-btn",children:n.jsx(Cr,{size:16})}),n.jsx("button",{onClick:PA,className:"zoom-btn reset",children:"Reset"})]}),n.jsxs("button",{onClick:wA,className:"color-btn",children:[n.jsx(d0,{size:16})," Randomize Colors"]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:te,className:"export-btn",children:[n.jsx(ra,{size:16})," Export Image"]}),n.jsxs("button",{onClick:NA,className:"export-btn",children:[n.jsx(ja,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const g=new Blob([BA()],{type:"application/json"}),S=URL.createObjectURL(g),f=document.createElement("a");f.href=S,f.download=`${i.name||"class-diagram"}.json`,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(S)},className:"export-btn",children:[n.jsx(En,{size:16})," Export JSON"]})]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${lA==="editor"?"active":""}`,onClick:()=>pA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${lA==="json"?"active":""}`,onClick:()=>pA("json"),children:"JSON Editor"})]}),lA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Classes"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:u,onChange:g=>h(g.target.value),placeholder:"New class name",onKeyPress:g=>g.key==="Enter"&&ze()}),n.jsxs("button",{onClick:ze,className:"add-btn",children:[n.jsx(Re,{size:16})," Add Class"]})]}),n.jsx("div",{className:"class-list",children:r.map(g=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-name",children:g.name}),n.jsx("button",{onClick:()=>x(g.id),className:"delete-btn",children:n.jsx(pe,{size:14})})]},g.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Relationships"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:B,onChange:g=>m(g.target.value),placeholder:"Relationship label (optional)",onKeyPress:g=>g.key==="Enter"&&ue()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"From Class"}),n.jsxs("select",{value:w||"",onChange:g=>v(g.target.value),children:[n.jsx("option",{value:"",children:"Select class"}),r.map(g=>n.jsx("option",{value:g.id,children:g.name},g.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"To Class"}),n.jsxs("select",{value:E||"",onChange:g=>M(g.target.value),children:[n.jsx("option",{value:"",children:"Select class"}),r.map(g=>n.jsx("option",{value:g.id,children:g.name},g.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Relationship Type"}),n.jsxs("select",{value:aA,onChange:g=>_(g.target.value),children:[n.jsx("option",{value:"association",children:"Association"}),n.jsx("option",{value:"navigable",children:"Navigable Association"}),n.jsx("option",{value:"inheritance",children:"Inheritance"}),n.jsx("option",{value:"realization",children:"Realization/Implementation"}),n.jsx("option",{value:"dependency",children:"Dependency"}),n.jsx("option",{value:"aggregation",children:"Aggregation"}),n.jsx("option",{value:"composition",children:"Composition"})]})]}),n.jsxs("button",{onClick:ue,disabled:!w||!E,className:"add-btn",children:[n.jsx(Vi,{size:16})," Add Relationship"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Current Relationships"}),n.jsx("div",{className:"relationship-list",children:s.map(g=>{const S=r.find(b=>b.id===g.from),f=r.find(b=>b.id===g.to);return!S||!f?null:n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-name",children:[S.name," → ",f.name,n.jsxs("div",{className:"item-type",children:["(",g.type,")"]})]}),g.label&&n.jsx("div",{className:"item-label",children:g.label}),n.jsx("button",{onClick:()=>W(g.id),className:"delete-btn",children:n.jsx(pe,{size:14})})]},g.id)})})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"UML Notation Guide"}),n.jsxs("div",{className:"notation-guide",children:[n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Visibility:"}),n.jsx("div",{children:"+ Public"}),n.jsx("div",{children:"- Private"}),n.jsx("div",{children:"# Protected"}),n.jsx("div",{children:"~ Package"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Attributes:"}),n.jsx("div",{children:"+name : String"}),n.jsx("div",{children:"-age : int"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Methods:"}),n.jsx("div",{children:"+getName() : String"}),n.jsx("div",{children:"-calculate() : void"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Quick Tips:"}),n.jsx("div",{children:"• Double-click canvas to add class"}),n.jsx("div",{children:"• Double-click class to edit"}),n.jsx("div",{children:"• Drag to move classes"}),n.jsx("div",{children:"• Drag resize handle to resize"}),n.jsx("div",{children:"• Mouse wheel to zoom"}),n.jsx("div",{children:"• Drag empty space to pan"})]})]})]})]}),n.jsx("div",{className:"diagram-canvas",ref:dA,onDoubleClick:re,onMouseDown:g=>J(g),onWheel:xA,children:n.jsxs("div",{className:"diagram-content",style:{transform:`scale(${G}) translate(${oA.x}px, ${oA.y}px)`,transformOrigin:"0 0",width:"5000px",height:"5000px",position:"relative"},children:[s.map(je),r.map(Me)]})})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const g=document.createElement("input");g.type="file",g.accept=".json",g.onchange=OA,g.click()},className:"import-btn",children:[n.jsx(nn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:QA,onChange:g=>cA(g.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:JA,className:"import-btn",children:[n.jsx(Ha,{size:16})," Apply JSON"]})]}),EA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsxs("h3",{children:["Edit Class: ",EA.name]}),n.jsx("button",{onClick:xe,className:"modal-close-btn",children:n.jsx(Ri,{size:20})})]}),n.jsx("div",{className:"modal-body",children:n.jsxs("div",{className:"edit-sections-container",children:[n.jsxs("div",{className:"edit-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h4",{children:"Attributes"}),n.jsxs("button",{onClick:()=>Ve(EA.id),className:"add-item-btn",children:[n.jsx(Re,{size:12})," Add Attribute"]})]}),n.jsxs("div",{className:"items-list",children:[EA.attributes.map((g,S)=>n.jsxs("div",{className:"item-row",onClick:()=>Ve(EA.id,S),children:[n.jsxs("div",{className:"item-text",children:[g.visibility," ",g.name," : ",g.type]}),n.jsx("div",{className:"item-actions",children:n.jsx("button",{onClick:f=>{f.stopPropagation(),F(EA.id,S)},className:"delete-btn",children:n.jsx(pe,{size:12})})})]},S)),EA.attributes.length===0&&n.jsx("div",{className:"empty-message",children:"No attributes defined"})]})]}),n.jsxs("div",{className:"edit-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h4",{children:"Methods"}),n.jsxs("button",{onClick:()=>Le(EA.id),className:"add-item-btn",children:[n.jsx(Re,{size:12})," Add Method"]})]}),n.jsxs("div",{className:"items-list",children:[EA.methods.map((g,S)=>n.jsxs("div",{className:"item-row",onClick:()=>Le(EA.id,S),children:[n.jsxs("div",{className:"item-text",children:[g.visibility," ",g.name," : ",g.returnType]}),n.jsx("div",{className:"item-actions",children:n.jsx("button",{onClick:f=>{f.stopPropagation(),T(EA.id,S)},className:"delete-btn",children:n.jsx(pe,{size:12})})})]},S)),EA.methods.length===0&&n.jsx("div",{className:"empty-message",children:"No methods defined"})]})]})]})}),n.jsx("div",{className:"modal-footer",children:n.jsx("button",{onClick:xe,className:"modal-cancel-btn",children:"Close"})})]})}),EA&&IA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:IA==="attribute"?TA>=0?"Edit Attribute":"Add Attribute":TA>=0?"Edit Method":"Add Method"}),n.jsx("button",{onClick:xe,className:"modal-close-btn",children:n.jsx(Ri,{size:20})})]}),n.jsx("div",{className:"modal-body",children:IA==="attribute"?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Visibility"}),n.jsx("select",{value:nA.visibility,onChange:g=>vA({...nA,visibility:g.target.value}),children:MA.map(g=>n.jsx("option",{value:g.value,children:g.label},g.value))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:nA.name,onChange:g=>vA({...nA,name:g.target.value}),placeholder:"Attribute name"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Type"}),n.jsxs("div",{className:"type-select",children:[n.jsx("select",{value:nA.type,onChange:g=>vA({...nA,type:g.target.value}),children:q.map(g=>n.jsx("option",{value:g,children:g},g))}),n.jsx("input",{type:"text",value:q.includes(nA.type)?"":nA.type,onChange:g=>vA({...nA,type:g.target.value}),placeholder:"Or enter custom type",style:{display:q.includes(nA.type)?"none":"block",marginTop:"8px"}})]})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Visibility"}),n.jsx("select",{value:LA.visibility,onChange:g=>Q({...LA,visibility:g.target.value}),children:MA.map(g=>n.jsx("option",{value:g.value,children:g.label},g.value))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:LA.name,onChange:g=>Q({...LA,name:g.target.value}),placeholder:"Method name (include parentheses)"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Return Type"}),n.jsxs("div",{className:"type-select",children:[n.jsx("select",{value:LA.returnType,onChange:g=>Q({...LA,returnType:g.target.value}),children:q.map(g=>n.jsx("option",{value:g,children:g},g))}),n.jsx("input",{type:"text",value:q.includes(LA.returnType)?"":LA.returnType,onChange:g=>Q({...LA,returnType:g.target.value}),placeholder:"Or enter custom type",style:{display:q.includes(LA.returnType)?"none":"block",marginTop:"8px"}})]})]})]})}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:xe,className:"modal-cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:IA==="attribute"?Ye:We,disabled:IA==="attribute"?!nA.name:!LA.name,className:"modal-save-btn",children:"Save"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
        
        .toolbar-controls {
          display: flex;
          align-items: center;
          gap: 16px;
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
          overflow: hidden;
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
      `})]})},sQ=({domainModels:i,onCreateDomainModel:r,onLoadDomainModel:s,onDeleteDomainModel:o})=>{const[d,u]=k.useState(!1);return n.jsxs("div",{className:"domain-model-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(i0,{size:48})}),n.jsx("h2",{children:"Domain Model Designer"}),n.jsx("p",{children:"Model business domain concepts and their relationships"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Domain Model"]})}),i.length>0&&n.jsxs("div",{className:"model-list",children:[n.jsx("h3",{children:"Your Domain Models"}),i.map(h=>n.jsxs("div",{className:"model-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"model-card-content",children:[n.jsx("div",{className:"model-card-name",children:h.name}),n.jsxs("div",{className:"model-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.entities?.length||0," entities • ",h.relationships?.length||0," relationships"]})]})]}),n.jsxs("div",{className:"model-card-actions",children:[n.jsx("button",{onClick:B=>{B.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Un,{size:16})}),n.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this domain model?")&&o(h.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Domain Model"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Model Name"}),n.jsx("input",{type:"text",placeholder:"e.g., E-Commerce Domain Model",id:"modelName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("modelName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Model"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},lQ=({domainModel:i={name:"Sample Domain Model"},entities:r=[],relationships:s=[],onUpdateDomainModel:o=()=>{},onBack:d=()=>{}})=>{const[u,h]=k.useState(""),[B,m]=k.useState(""),[w,v]=k.useState(""),[E,M]=k.useState(""),[aA,_]=k.useState("association"),[lA,pA]=k.useState("1"),[QA,cA]=k.useState("1"),[DA,yA]=k.useState("editor"),[gA,AA]=k.useState(""),[SA,V]=k.useState(null),[iA,uA]=k.useState({x:0,y:0}),[EA,tA]=k.useState(null),[IA,KA]=k.useState({x:0,y:0}),[TA,R]=k.useState(null),[nA,vA]=k.useState(""),[LA,Q]=k.useState(-1),[G,sA]=k.useState({name:"",type:"String"}),[oA,UA]=k.useState(1),[HA,D]=k.useState({x:0,y:0}),[CA,jA]=k.useState(!1),[dA,I]=k.useState({x:0,y:0}),q=k.useRef(null),MA=[{header:"#3B82F6",border:"#2563EB",background:"#EFF6FF"},{header:"#6366F1",border:"#4F46E5",background:"#EEF2FF"},{header:"#8B5CF6",border:"#7C3AED",background:"#F5F3FF"},{header:"#06B6D4",border:"#0891B2",background:"#ECFEFF"},{header:"#10B981",border:"#059669",background:"#ECFDF5"},{header:"#F59E0B",border:"#D97706",background:"#FFFBEB"},{header:"#EC4899",border:"#DB2777",background:"#FDF2F8"},{header:"#64748B",border:"#475569",background:"#F8FAFC"},{header:"#EF4444",border:"#DC2626",background:"#FEF2F2"},{header:"#F97316",border:"#EA580C",background:"#FFF7ED"},{header:"#84CC16",border:"#65A30D",background:"#F7FEE7"},{header:"#14B8A6",border:"#0D9488",background:"#F0FDFA"}],O=["String","Integer","Number","Boolean","Date","DateTime","Money","Text","ID"],wA=["1","*","0..1","1..*","0..*"];k.useEffect(()=>{AA(JSON.stringify({entities:r,relationships:s},null,2))},[r,s]);const VA=()=>MA[Math.floor(Math.random()*MA.length)],WA=()=>{const g=r.map(S=>({...S,colorScheme:VA()}));o({...i,entities:g})},PA=()=>{UA(g=>Math.min(g*1.2,3))},ae=()=>{UA(g=>Math.max(g/1.2,.3))},de=()=>{UA(1),D({x:0,y:0})},ze=(g,S="12px",f="'SF Mono', monospace")=>{const C=document.createElement("canvas").getContext("2d");return C.font=`${S} ${f}`,C.measureText(g).width},Se=g=>{const b=ze(g.name,"16px","'Inter', sans-serif")+32;let C=0;g.attributes.forEach(_A=>{const FA=`${_A.name} : ${_A.type}`,RA=ze(FA)+32;RA>C&&(C=RA)});const U=Math.max(180,b,C),H=40,eA=g.attributes.length>0?g.attributes.length*26+6:0,rA=H+eA+4;return{width:Math.min(U,400),height:Math.max(rA,50)}},Ve=()=>{if(!u.trim())return;const g=VA(),S=Se({name:u,attributes:[]}),f=[...r,{id:Date.now(),name:u,attributes:[],x:100+Math.random()*300,y:100+Math.random()*300,width:S.width,height:S.height,colorScheme:g}];o({...i,entities:f}),h("")},Le=g=>{const S=r.find(f=>f.id===g);S&&R(S)},Ye=(g,S=-1)=>{const f=r.find(b=>b.id===g);f&&(vA("attribute"),Q(S),S>=0?sA({...f.attributes[S]}):sA({name:"",type:"String"}))},We=()=>{if(!G.name.trim())return;const g=r.map(S=>{if(S.id===TA.id){const f=[...S.attributes];LA>=0?f[LA]={...G}:f.push({...G});const b={...S,attributes:f},C=Se(b);return{...b,width:C.width,height:C.height}}return S});o({...i,entities:g}),xe()},xe=()=>{R(null),vA(""),Q(-1)},ue=()=>{if(!w||!E)return;const g=r.find(b=>b.id===parseInt(w)),S=r.find(b=>b.id===parseInt(E));if(!g||!S)return;const f=[...s,{id:Date.now(),from:g.id,to:S.id,type:aA,label:B||"",multiplicityFrom:lA,multiplicityTo:QA}];o({...i,relationships:f}),m(""),v(""),M(""),pA("1"),cA("1")},x=g=>{const S=r.filter(b=>b.id!==g),f=s.filter(b=>!(b.from===g||b.to===g));o({...i,entities:S,relationships:f})},F=(g,S)=>{const f=r.map(b=>{if(b.id===g){const C=b.attributes.filter((Y,K)=>K!==S),U={...b,attributes:C},H=Se(U);return{...U,width:H.width,height:H.height}}return b});o({...i,entities:f})},T=g=>{const S=s.filter(f=>f.id!==g);o({...i,relationships:S})},W=g=>{g.target===q.current&&g.button===0&&(jA(!0),I({x:g.clientX-HA.x,y:g.clientY-HA.y}),g.preventDefault())},J=g=>{CA&&D({x:g.clientX-dA.x,y:g.clientY-dA.y})},hA=(g,S,f=!1)=>{g.stopPropagation();const b=q.current?.getBoundingClientRect();if(b)if(f)tA(S),KA({x:g.clientX,y:g.clientY});else{V(S);const C=(g.clientX-b.left-HA.x)/oA,U=(g.clientY-b.top-HA.y)/oA;uA({x:C-S.x,y:U-S.y})}},j=g=>{if(SA){const S=q.current?.getBoundingClientRect();if(!S)return;const f=(g.clientX-S.left-HA.x)/oA,b=(g.clientY-S.top-HA.y)/oA,C=Math.max(0,f-iA.x),U=Math.max(0,b-iA.y),H=r.map(Y=>Y.id===SA.id?{...Y,x:C,y:U}:Y);o({...i,entities:H})}else if(EA){const S=g.clientX-IA.x,f=g.clientY-IA.y,b=r.map(C=>{if(C.id===EA.id){const U=Math.max(180,C.width+S/oA),H=Math.max(80,C.height+f/oA);return{...C,width:U,height:H}}return C});o({...i,entities:b}),KA({x:g.clientX,y:g.clientY})}},xA=()=>{V(null),tA(null),jA(!1)};k.useEffect(()=>{if(SA||EA||CA)return document.addEventListener("mousemove",SA||EA?j:J),document.addEventListener("mouseup",xA),()=>{document.removeEventListener("mousemove",SA||EA?j:J),document.removeEventListener("mouseup",xA)}},[SA,EA,CA,iA,IA,dA,HA,oA]);const BA=()=>JSON.stringify({entities:r,relationships:s},null,2),NA=()=>{navigator.clipboard.writeText(BA())},JA=()=>{try{const g=JSON.parse(gA);if(Array.isArray(g.entities)&&Array.isArray(g.relationships)){const S=g.entities.map(f=>({...f,...Se(f)}));o({...i,entities:S,relationships:g.relationships})}else alert("Invalid JSON format. Expected entities and relationships arrays.")}catch(g){alert("Error parsing JSON: "+g.message)}},OA=g=>{const S=g.target.files[0];if(!S)return;const f=new FileReader;f.onload=b=>{AA(b.target.result)},f.readAsText(S)},te=()=>{if(!q.current)return;const g=q.current.style.transform;q.current.style.transform="scale(1) translate(0px, 0px)",Er(()=>Promise.resolve().then(()=>Fr),void 0).then(S=>{S.default(q.current,{backgroundColor:"#f8fafc",scale:2,useCORS:!0}).then(f=>{const b=document.createElement("a");b.download=`${i.name||"domain-model"}.png`,b.href=f.toDataURL("image/png"),b.click(),q.current.style.transform=g})})},$A=(g,S)=>{const f={x:g.x+g.width/2,y:g.y+g.height/2},b={x:S.x+S.width/2,y:S.y+S.height/2},C=b.x-f.x,U=b.y-f.y;let H,Y;if(Math.abs(C)/g.width>Math.abs(U)/g.height){const K=f.x+(C>0?g.width/2:-g.width/2),eA=b.x+(C>0?-S.width/2:S.width/2);H={x:K,y:f.y},Y={x:eA,y:b.y}}else{const K=f.y+(U>0?g.height/2:-g.height/2),eA=b.y+(U>0?-S.height/2:S.height/2);H={x:f.x,y:K},Y={x:b.x,y:eA}}return{fromPoint:H,toPoint:Y}},he=(g,S)=>{if(Math.sqrt(Math.pow(S.x-g.x,2)+Math.pow(S.y-g.y,2))<300)return`M${g.x},${g.y} L${S.x},${S.y}`;const b=g.x+(S.x-g.x)*.5,C=g.y+(S.y-g.y)*.5;return Math.abs(S.x-g.x)>Math.abs(S.y-g.y)?`M${g.x},${g.y} L${b},${g.y} L${b},${S.y} L${S.x},${S.y}`:`M${g.x},${g.y} L${g.x},${C} L${S.x},${C} L${S.x},${S.y}`},Me=g=>{const S=g.colorScheme||MA[0];return n.jsxs("div",{className:"entity-box",style:{left:`${g.x}px`,top:`${g.y}px`,width:`${g.width}px`,height:`${g.height}px`,cursor:SA?.id===g.id?"grabbing":"grab",borderColor:S.border,backgroundColor:"white"},onMouseDown:f=>hA(f,g),onDoubleClick:()=>Le(g.id),children:[n.jsx("div",{className:"entity-header",style:{backgroundColor:S.header,color:"white"},children:n.jsx("div",{className:"entity-name",children:g.name})}),n.jsx("div",{className:"entity-content",children:g.attributes.length>0&&n.jsx("div",{className:"attributes-section",children:g.attributes.map((f,b)=>n.jsxs("div",{className:"entity-item",onDoubleClick:C=>{C.stopPropagation(),Ye(g.id,b)},children:[n.jsxs("span",{className:"item-text",children:[f.name," : ",f.type]}),n.jsx("button",{onClick:C=>{C.stopPropagation(),F(g.id,b)},className:"item-delete-btn",children:n.jsx(pe,{size:10})})]},b))})}),n.jsx("div",{className:"resize-handle",style:{backgroundColor:S.header},onMouseDown:f=>hA(f,g,!0)})]},g.id)},je=g=>{const S=r.find(rA=>rA.id===g.from),f=r.find(rA=>rA.id===g.to);if(!S||!f)return null;const b={x:S.x,y:S.y,width:S.width,height:S.height},C={x:f.x,y:f.y,width:f.width,height:f.height},{fromPoint:U,toPoint:H}=$A(b,C),Y=he(U,H),K=(U.x+H.x)/2,eA=(U.y+H.y)/2;return n.jsxs("svg",{className:"relationship-svg",style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1},children:[n.jsxs("defs",{children:[n.jsx("marker",{id:`arrowhead-${g.id}`,markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#475569"})}),n.jsx("marker",{id:`inheritance-${g.id}`,markerWidth:"12",markerHeight:"10",refX:"11",refY:"5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 5, 0 10",fill:"white",stroke:"#475569",strokeWidth:"1"})}),n.jsx("marker",{id:`diamond-${g.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"#475569"})}),n.jsx("marker",{id:`diamond-empty-${g.id}`,markerWidth:"12",markerHeight:"8",refX:"11",refY:"4",orient:"auto",children:n.jsx("polygon",{points:"0 4, 6 0, 12 4, 6 8",fill:"white",stroke:"#475569",strokeWidth:"1"})})]}),(()=>{const _A=(()=>{switch(g.type){case"inheritance":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#inheritance-${g.id})`};case"realization":return{stroke:"#475569",strokeWidth:2,strokeDasharray:"5,5",markerEnd:`url(#inheritance-${g.id})`};case"dependency":return{stroke:"#475569",strokeWidth:1,strokeDasharray:"8,4",markerEnd:`url(#arrowhead-${g.id})`};case"aggregation":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-empty-${g.id})`};case"composition":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#diamond-${g.id})`};case"navigable":return{stroke:"#475569",strokeWidth:2,markerEnd:`url(#arrowhead-${g.id})`};default:return{stroke:"#475569",strokeWidth:2}}})();return n.jsxs(n.Fragment,{children:[n.jsx("path",{d:Y,fill:"none",..._A}),g.label&&n.jsxs("g",{children:[n.jsx("rect",{x:K-g.label.length*4,y:eA-8,width:g.label.length*8,height:16,fill:"white",stroke:"#e2e8f0",rx:"2"}),n.jsx("text",{x:K,y:eA+4,textAnchor:"middle",fontSize:"11",fill:"#475569",fontWeight:"500",children:g.label})]}),n.jsxs("g",{children:[n.jsx("text",{x:U.x+(H.x-U.x)*.25,y:U.y+(H.y-U.y)*.25-5,textAnchor:"middle",fontSize:"10",fill:"#475569",fontWeight:"500",children:g.multiplicityFrom||"1"}),n.jsx("text",{x:U.x+(H.x-U.x)*.75,y:U.y+(H.y-U.y)*.75-5,textAnchor:"middle",fontSize:"10",fill:"#475569",fontWeight:"500",children:g.multiplicityTo||"1"})]})]})})()]},g.id)},re=g=>{if(g.target===q.current){const S=q.current.getBoundingClientRect(),f=(g.clientX-S.left-HA.x)/oA,b=(g.clientY-S.top-HA.y)/oA,C=prompt("Enter entity name:");if(C&&C.trim()){const U=VA(),H=Se({name:C.trim(),attributes:[]}),Y=[...r,{id:Date.now(),name:C.trim(),attributes:[],x:f-H.width/2,y:b-40,width:H.width,height:H.height,colorScheme:U}];o({...i,entities:Y})}}};return n.jsxs("div",{className:"domain-model-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(Un,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"canvas-controls",children:[n.jsx("button",{onClick:WA,className:"control-btn",title:"Randomize Colors",children:n.jsx(d0,{size:16})}),n.jsx("button",{onClick:PA,className:"control-btn",title:"Zoom In",children:n.jsx(Cr,{size:16})}),n.jsx("button",{onClick:ae,className:"control-btn",title:"Zoom Out",children:n.jsx(Qr,{size:16})}),n.jsx("button",{onClick:de,className:"control-btn",title:"Reset View",children:n.jsx(u0,{size:16})}),n.jsxs("span",{className:"zoom-indicator",children:[Math.round(oA*100),"%"]})]}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:te,className:"export-btn",children:[n.jsx(ra,{size:16})," Export Image"]}),n.jsxs("button",{onClick:NA,className:"export-btn",children:[n.jsx(ja,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const g=new Blob([BA()],{type:"application/json"}),S=URL.createObjectURL(g),f=document.createElement("a");f.href=S,f.download=`${i.name||"domain-model"}.json`,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(S)},className:"export-btn",children:[n.jsx(En,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${DA==="editor"?"active":""}`,onClick:()=>yA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${DA==="json"?"active":""}`,onClick:()=>yA("json"),children:"JSON Editor"})]}),DA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"diagram-sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Entities"}),n.jsxs("div",{className:"form-group",children:[n.jsx("input",{type:"text",value:u,onChange:g=>h(g.target.value),placeholder:"New entity name",onKeyPress:g=>g.key==="Enter"&&Ve()}),n.jsxs("button",{onClick:Ve,className:"add-btn",children:[n.jsx(Re,{size:16})," Add Entity"]})]}),n.jsx("div",{className:"entity-list",children:r.map(g=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-name",children:g.name}),n.jsx("button",{onClick:()=>x(g.id),className:"delete-btn",children:n.jsx(pe,{size:14})})]},g.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Relationships"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:B,onChange:g=>m(g.target.value),placeholder:"Relationship label (optional)",onKeyPress:g=>g.key==="Enter"&&ue()})}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"From Entity"}),n.jsxs("select",{value:w||"",onChange:g=>v(g.target.value),children:[n.jsx("option",{value:"",children:"Select entity"}),r.map(g=>n.jsx("option",{value:g.id,children:g.name},g.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"To Entity"}),n.jsxs("select",{value:E||"",onChange:g=>M(g.target.value),children:[n.jsx("option",{value:"",children:"Select entity"}),r.map(g=>n.jsx("option",{value:g.id,children:g.name},g.id))]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Relationship Type"}),n.jsxs("select",{value:aA,onChange:g=>_(g.target.value),children:[n.jsx("option",{value:"association",children:"Association"}),n.jsx("option",{value:"navigable",children:"Navigable Association"}),n.jsx("option",{value:"inheritance",children:"Inheritance"}),n.jsx("option",{value:"realization",children:"Realization"}),n.jsx("option",{value:"dependency",children:"Dependency"}),n.jsx("option",{value:"aggregation",children:"Aggregation"}),n.jsx("option",{value:"composition",children:"Composition"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Multiplicity (From)"}),n.jsx("select",{value:lA,onChange:g=>pA(g.target.value),children:wA.map(g=>n.jsx("option",{value:g,children:g},g))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Multiplicity (To)"}),n.jsx("select",{value:QA,onChange:g=>cA(g.target.value),children:wA.map(g=>n.jsx("option",{value:g,children:g},g))})]}),n.jsxs("button",{onClick:ue,disabled:!w||!E,className:"add-btn",children:[n.jsx(Vi,{size:16})," Add Relationship"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Current Relationships"}),n.jsx("div",{className:"relationship-list",children:s.map(g=>{const S=r.find(b=>b.id===g.from),f=r.find(b=>b.id===g.to);return!S||!f?null:n.jsxs("div",{className:"list-item",children:[n.jsxs("div",{className:"item-name",children:[S.name," → ",f.name,n.jsxs("div",{className:"item-type",children:["(",g.type,")"]}),(g.multiplicityFrom!=="1"||g.multiplicityTo!=="1")&&n.jsxs("div",{className:"item-multiplicity",children:[g.multiplicityFrom," to ",g.multiplicityTo]})]}),g.label&&n.jsx("div",{className:"item-label",children:g.label}),n.jsx("button",{onClick:()=>T(g.id),className:"delete-btn",children:n.jsx(pe,{size:14})})]},g.id)})})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Domain Model Guide"}),n.jsxs("div",{className:"notation-guide",children:[n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Canvas Controls:"}),n.jsx("div",{children:"🎨 Randomize all colors"}),n.jsx("div",{children:"🔍 Zoom in/out"}),n.jsx("div",{children:"↺ Reset view"}),n.jsx("div",{children:"🖱️ Drag to pan canvas"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Relationship Types:"}),n.jsx("div",{children:"Association: Solid line"}),n.jsx("div",{children:"Navigable: Solid line with arrow"}),n.jsx("div",{children:"Inheritance: Solid line with triangle"}),n.jsx("div",{children:"Realization: Dashed line with triangle"}),n.jsx("div",{children:"Dependency: Dashed line with arrow"}),n.jsx("div",{children:"Aggregation: Line with empty diamond"}),n.jsx("div",{children:"Composition: Line with filled diamond"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Multiplicity:"}),n.jsx("div",{children:"1: Exactly one"}),n.jsx("div",{children:"*: Zero or more"}),n.jsx("div",{children:"0..1: Zero or one"}),n.jsx("div",{children:"1..*: One or more"}),n.jsx("div",{children:"0..*: Zero or more"})]}),n.jsxs("div",{className:"guide-item",children:[n.jsx("strong",{children:"Quick Tips:"}),n.jsx("div",{children:"• Double-click canvas to add entity"}),n.jsx("div",{children:"• Double-click entity to edit"}),n.jsx("div",{children:"• Drag to move entities"}),n.jsx("div",{children:"• Drag resize handle to resize"}),n.jsx("div",{children:"• Use mouse wheel to zoom"})]})]})]})]}),n.jsx("div",{className:"diagram-canvas",ref:q,onDoubleClick:re,onMouseDown:W,onWheel:g=>{g.preventDefault();const S=g.deltaY>0?.9:1.1;UA(f=>Math.max(.3,Math.min(3,f*S)))},style:{cursor:CA?"grabbing":"grab"},children:n.jsxs("div",{className:"canvas-content",style:{transform:`scale(${oA}) translate(${HA.x/oA}px, ${HA.y/oA}px)`,transformOrigin:"0 0",width:"4000px",height:"3000px",minWidth:"100%",minHeight:"100%"},children:[s.map(je),r.map(Me)]})})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const g=document.createElement("input");g.type="file",g.accept=".json",g.onchange=OA,g.click()},className:"import-btn",children:[n.jsx(nn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:gA,onChange:g=>AA(g.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:JA,className:"import-btn",children:[n.jsx(Ha,{size:16})," Apply JSON"]})]}),TA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsxs("h3",{children:["Edit Entity: ",TA.name]}),n.jsx("button",{onClick:xe,className:"modal-close-btn",children:n.jsx(Ri,{size:20})})]}),n.jsx("div",{className:"modal-body",children:n.jsx("div",{className:"edit-sections-container",children:n.jsxs("div",{className:"edit-section",children:[n.jsxs("div",{className:"section-header",children:[n.jsx("h4",{children:"Attributes"}),n.jsxs("button",{onClick:()=>Ye(TA.id),className:"add-item-btn",children:[n.jsx(Re,{size:12})," Add Attribute"]})]}),n.jsxs("div",{className:"items-list",children:[TA.attributes.map((g,S)=>n.jsxs("div",{className:"item-row",onClick:()=>Ye(TA.id,S),children:[n.jsxs("div",{className:"item-text",children:[g.name," : ",g.type]}),n.jsx("div",{className:"item-actions",children:n.jsx("button",{onClick:f=>{f.stopPropagation(),F(TA.id,S)},className:"delete-btn",children:n.jsx(pe,{size:12})})})]},S)),TA.attributes.length===0&&n.jsx("div",{className:"empty-message",children:"No attributes defined"})]})]})})}),n.jsx("div",{className:"modal-footer",children:n.jsx("button",{onClick:xe,className:"modal-cancel-btn",children:"Close"})})]})}),TA&&nA&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h3",{children:nA==="attribute"?LA>=0?"Edit Attribute":"Add Attribute":""}),n.jsx("button",{onClick:xe,className:"modal-close-btn",children:n.jsx(Ri,{size:20})})]}),n.jsx("div",{className:"modal-body",children:nA==="attribute"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Name"}),n.jsx("input",{type:"text",value:G.name,onChange:g=>sA({...G,name:g.target.value}),placeholder:"Attribute name"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Type"}),n.jsxs("div",{className:"type-select",children:[n.jsx("select",{value:G.type,onChange:g=>sA({...G,type:g.target.value}),children:O.map(g=>n.jsx("option",{value:g,children:g},g))}),n.jsx("input",{type:"text",value:O.includes(G.type)?"":G.type,onChange:g=>sA({...G,type:g.target.value}),placeholder:"Or enter custom type",style:{display:O.includes(G.type)?"none":"block",marginTop:"8px"}})]})]})]})}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:xe,className:"modal-cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:We,disabled:!G.name,className:"modal-save-btn",children:"Save"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
        
        .diagram-canvas {
          flex: 1;
          background: #f8fafc;
          position: relative;
          overflow: hidden;
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
      `})]})},cQ=({mindMaps:i,onCreateMindMap:r,onLoadMindMap:s,onDeleteMindMap:o})=>{const[d,u]=k.useState(!1);return n.jsxs("div",{className:"mindmap-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(s0,{size:48})}),n.jsx("h2",{children:"Mind Map Designer"}),n.jsx("p",{children:"Visualize your ideas and concepts in an intuitive hierarchical structure"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Mind Map"]})}),i.length>0&&n.jsxs("div",{className:"mindmap-list",children:[n.jsx("h3",{children:"Your Mind Maps"}),i.map(h=>n.jsxs("div",{className:"mindmap-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"mindmap-card-content",children:[n.jsx("div",{className:"mindmap-card-name",children:h.name}),n.jsxs("div",{className:"mindmap-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.nodes?.length||1," nodes"]})]})]}),n.jsxs("div",{className:"mindmap-card-actions",children:[n.jsx("button",{onClick:B=>{B.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Fn,{size:16})}),n.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this mind map?")&&o(h.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Mind Map"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Mind Map Name"}),n.jsx("input",{type:"text",placeholder:"e.g., Project Planning",id:"mindMapName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("mindMapName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Mind Map"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},dQ=({mindMap:i,nodes:r=[],connections:s=[],onUpdateMindMap:o,onBack:d})=>{const u=k.useRef(null),[h,B]=k.useState(!1),[m,w]=k.useState(null),[v,E]=k.useState(null),[M,aA]=k.useState(""),[_,lA]=k.useState(1),[pA,QA]=k.useState({x:0,y:0}),[cA,DA]=k.useState(!1),[yA,gA]=k.useState({x:0,y:0}),[AA,SA]=k.useState(null),[V,iA]=k.useState(!1),[uA,EA]=k.useState(!0),[tA,IA]=k.useState(null),[KA,TA]=k.useState("editor"),[R,nA]=k.useState(""),vA=20,LA=200,[Q,G]=k.useState(r.length>0?r:[{id:1,text:"Central Idea",x:400,y:300,level:0,parentId:null,isRoot:!0,color:"#ff6b6b",width:140,height:40}]);k.useEffect(()=>{r.length>0&&G(r)},[r]),k.useEffect(()=>{nA(JSON.stringify({nodes:Q},null,2))},[Q]);const sA=x=>{const W=Math.max(80,x.length*8+30);return{width:Math.min(W,300),height:40}},oA=x=>Q.filter(F=>F.parentId===x),UA=x=>{const F=oA(x);let T=[...F];return F.forEach(W=>{T=[...T,...UA(W.id)]}),T},HA=(x,F,T,W=!0)=>{G(J=>{const hA=[...J],j=hA.find(OA=>OA.id===x);if(!j)return J;const xA=Q.find(OA=>OA.id===x),BA=F-xA.x,NA=T-xA.y;j.x=F,j.y=T;const JA=(OA,te,$A)=>{hA.filter(Me=>Me.parentId===OA).forEach(Me=>{Me.x+=te,Me.y+=$A,JA(Me.id,te,$A)})};return W&&JA(x,BA,NA),hA})},D=()=>{G(x=>{const F=[...x],T=F.find(BA=>BA.isRoot);if(!T)return x;const W=30,J=20,hA=200,j=BA=>{const NA=F.filter(OA=>OA.parentId===BA);if(NA.length===0)return W;let JA=0;return NA.forEach((OA,te)=>{JA+=j(OA.id),te<NA.length-1&&(JA+=J)}),Math.max(JA,W)},xA=(BA,NA,JA,OA=null)=>{const te=F.find(re=>re.id===BA);if(!te)return;te.x=NA,te.y=JA;const $A=F.filter(re=>re.parentId===BA);if($A.length===0)return;let he=[],Me=[];te.isRoot?$A.forEach(re=>{re.x<te.x?he.push(re):Me.push(re)}):OA==="right"?Me=$A:he=$A;const je=(re,g)=>{if(re.length===0)return;const S=re.map(C=>j(C.id)),f=S.reduce((C,U)=>C+U,0)+(re.length-1)*J;let b=JA-f/2;re.forEach((C,U)=>{const H=S[U],Y=b+H/2,K=g==="left"?NA-hA:NA+hA;xA(C.id,K,Y,g),b+=H+J})};je(he,"left"),je(Me,"right")};return xA(T.id,T.x,T.y),F})},CA=(x,F)=>{if(!x||!F)return"";const T=(x.x+x.width/2)*_+pA.x,W=(x.y+x.height/2)*_+pA.y,J=(F.x+F.width/2)*_+pA.x,hA=(F.y+F.height/2)*_+pA.y,j=J-T,xA=hA-W,BA=Math.abs(j)*.5,NA=T+Math.sign(j)*BA,JA=W+xA*.1,OA=J-Math.sign(j)*BA,te=hA-xA*.1;return`M ${T} ${W} C ${NA} ${JA}, ${OA} ${te}, ${J} ${hA}`},jA=(x,F,T)=>{for(const J of Q){if(J.id===x.id||UA(x.id).some(BA=>BA.id===J.id))continue;const hA=J.x*_+pA.x,j=J.y*_+pA.y;if(Math.sqrt(Math.pow(F-(hA+J.width*_/2),2)+Math.pow(T-(j+J.height*_/2),2))<60*_)return J}return null},dA=(x,F)=>{if(x.stopPropagation(),x.detail===1){w(F.id),SA(F),DA(!0);const T=u.current.getBoundingClientRect();gA({x:x.clientX-T.left-pA.x-F.x*_,y:x.clientY-T.top-pA.y-F.y*_})}},I=x=>{x.target===u.current&&(w(null),iA(!0),gA({x:x.clientX-pA.x,y:x.clientY-pA.y}))},q=k.useCallback(x=>{if(cA&&AA){const F=u.current.getBoundingClientRect(),T=(x.clientX-F.left-pA.x-yA.x)/_,W=(x.clientY-F.top-pA.y-yA.y)/_,J=jA(AA,x.clientX-F.left,x.clientY-F.top);IA(J),HA(AA.id,T,W,!0)}else V&&QA({x:x.clientX-yA.x,y:x.clientY-yA.y})},[cA,AA,yA,_,pA,V,Q]),MA=k.useCallback(()=>{cA&&AA&&(tA&&G(x=>x.map(F=>F.id===AA.id?{...F,parentId:tA.id,level:tA.level+1,color:tA.level+1===1?"#4ecdc4":"#95e1d3"}:F)),setTimeout(()=>{D()},50)),DA(!1),SA(null),iA(!1),IA(null)},[cA,AA,tA]);k.useEffect(()=>(document.addEventListener("mousemove",q),document.addEventListener("mouseup",MA),()=>{document.removeEventListener("mousemove",q),document.removeEventListener("mouseup",MA)}),[q,MA]);const O=(x,F="right")=>{const T=Q.find(OA=>OA.id===x);if(!T)return;const W=Q.find(OA=>OA.isRoot);let J;T.isRoot?J=F==="right":(J=T.x>W.x,F=J?"right":"left");const hA=sA("New Node"),j=oA(x),xA=T.x+(J?LA:-LA),BA=T.y+j.length*(40+vA),NA={id:Date.now(),text:"New Node",x:xA,y:BA,level:T.level+1,parentId:x,isRoot:!1,color:T.level+1===1?"#4ecdc4":"#95e1d3",...hA},JA=[...Q,NA];G(JA),w(NA.id),o({...i,nodes:JA}),setTimeout(()=>{D()},50)},wA=x=>{const F=Q.find(j=>j.id===x);if(F?.isRoot)return;const T=UA(x),J=[F,...T].map(j=>j.id),hA=Q.filter(j=>!J.includes(j.id));G(hA),w(null),o({...i,nodes:hA}),setTimeout(()=>{D()},50)},VA=x=>{E(x.id),aA(x.text)},WA=(x,F)=>{if(!F.trim())return;const T=Q.map(W=>W.id===x?{...W,text:F,...sA(F)}:W);G(T),E(null),aA(""),o({...i,nodes:T})},PA=()=>lA(x=>Math.min(x*1.2,3)),ae=()=>lA(x=>Math.max(x/1.2,.3)),de=()=>{lA(1),QA({x:0,y:0})},ze=()=>B(x=>!x),Se=()=>JSON.stringify({nodes:Q},null,2),Ve=()=>{navigator.clipboard.writeText(Se())},Le=()=>{try{const x=JSON.parse(R);if(Array.isArray(x.nodes)){const F=x.nodes;G(F),o({...i,nodes:F})}else alert("Invalid JSON format. Expected nodes array.")}catch(x){alert("Error parsing JSON: "+x.message)}},Ye=x=>{const F=x.target.files[0];if(!F)return;const T=new FileReader;T.onload=W=>{nA(W.target.result)},T.readAsText(F)},We=()=>{u.current&&Er(()=>Promise.resolve().then(()=>Fr),void 0).then(x=>{x.default(u.current.parentElement,{backgroundColor:h?"#1f2937":"#ffffff",scale:2,useCORS:!0}).then(F=>{const T=document.createElement("a");T.download=`${i.name||"mindmap"}.png`,T.href=F.toDataURL("image/png"),T.click()})})},xe=()=>h?"#e2e8f0":"#1f2937",ue=()=>h?"#64748b":"#475569";return n.jsxs("div",{className:`mindmap-maker ${h?"dark":"light"}`,children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:d,className:"back-btn",children:[n.jsx(Un,{size:16})," Back"]}),n.jsx("h2",{children:i.name}),n.jsx("div",{className:"spacer"}),n.jsxs("div",{className:"export-buttons",children:[n.jsxs("button",{onClick:We,className:"export-btn",children:[n.jsx(ra,{size:16})," Export Image"]}),n.jsxs("button",{onClick:Ve,className:"export-btn",children:[n.jsx(ja,{size:16})," Copy JSON"]}),n.jsxs("button",{onClick:()=>{const x=new Blob([Se()],{type:"application/json"}),F=URL.createObjectURL(x),T=document.createElement("a");T.href=F,T.download=`${i.name||"mindmap"}.json`,document.body.appendChild(T),T.click(),document.body.removeChild(T),URL.revokeObjectURL(F)},className:"export-btn",children:[n.jsx(En,{size:16})," Export JSON"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${KA==="editor"?"active":""}`,onClick:()=>TA("editor"),children:"Mind Map Editor"}),n.jsx("button",{className:`tab ${KA==="json"?"active":""}`,onClick:()=>TA("json"),children:"JSON Editor"})]}),KA==="editor"?n.jsxs("div",{className:"mindmap-container",children:[uA&&n.jsx("div",{className:"top-toolbar",children:n.jsxs("div",{className:"toolbar-section",children:[n.jsx("button",{className:"toolbar-btn",onClick:ze,title:h?"Light Mode":"Dark Mode",children:h?n.jsx(dw,{size:18}):n.jsx(Tb,{size:18})}),n.jsx("button",{className:"toolbar-btn",title:"Auto Align",onClick:D,children:n.jsx(Wb,{size:18})})]})}),n.jsxs("svg",{ref:u,className:"canvas",width:"100%",height:"100%",onMouseDown:I,children:[n.jsxs("defs",{children:[n.jsxs("filter",{id:"glow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"coloredBlur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),n.jsx("filter",{id:"shadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:n.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"3",floodOpacity:"0.3"})}),n.jsxs("filter",{id:"connectionGlow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{stdDeviation:"5",result:"coloredBlur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"coloredBlur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),Q.map(x=>{const F=Q.find(T=>T.id===x.parentId);return F?n.jsx("path",{d:CA(F,x),stroke:ue(),strokeWidth:"2",fill:"none",opacity:"0.8",strokeLinecap:"round",strokeLinejoin:"round",className:"connection-line"},`connection-${x.id}`):null}),tA&&n.jsxs("g",{children:[n.jsxs("circle",{cx:(tA.x+tA.width/2)*_+pA.x,cy:(tA.y+tA.height/2)*_+pA.y,r:40,fill:"none",stroke:"#10b981",strokeWidth:"3",strokeDasharray:"5,5",opacity:"0.8",filter:"url(#connectionGlow)",children:[n.jsx("animate",{attributeName:"r",values:"35;45;35",dur:"1s",repeatCount:"indefinite"}),n.jsx("animate",{attributeName:"opacity",values:"0.6;1;0.6",dur:"1s",repeatCount:"indefinite"})]}),n.jsx("text",{x:(tA.x+tA.width/2)*_+pA.x,y:(tA.y+tA.height/2)*_+pA.y-50,textAnchor:"middle",fill:"#10b981",fontSize:"12",fontWeight:"bold",children:"Connect as Child"})]}),Q.map(x=>n.jsxs("g",{children:[n.jsxs("g",{transform:`translate(${x.x*_+pA.x}, ${x.y*_+pA.y}) scale(${_})`,className:`node-group ${cA&&AA?.id===x.id?"dragging":""}`,children:[n.jsx("rect",{width:x.width,height:x.height,rx:x.height/2,fill:x.color,filter:m===x.id?"url(#glow)":"url(#shadow)",stroke:m===x.id?"#fff":"transparent",strokeWidth:m===x.id?"2":"0",style:{cursor:"grab"},onMouseDown:F=>dA(F,x),onDoubleClick:()=>VA(x)}),n.jsx("text",{x:x.width/2,y:x.height/2,textAnchor:"middle",dominantBaseline:"middle",fill:xe(),fontSize:"14",fontWeight:"500",style:{pointerEvents:"none",userSelect:"none"},children:x.text.length>25?x.text.substring(0,25)+"...":x.text})]}),m===x.id&&n.jsxs(n.Fragment,{children:[(()=>{const F=Q.find(J=>J.isRoot),T=x.isRoot?!0:x.x>=F.x,W=x.isRoot?!0:x.x<F.x;return n.jsxs(n.Fragment,{children:[(x.isRoot||T)&&n.jsxs("g",{transform:`translate(${(x.x+x.width+15)*_+pA.x}, ${(x.y+x.height/2-12)*_+pA.y})`,children:[n.jsx("circle",{cx:12,cy:12,r:12,fill:"#10b981",stroke:"white",strokeWidth:"2",style:{cursor:"pointer"},onClick:()=>O(x.id,"right")}),n.jsx(nb,{size:12,color:"white",x:6,y:6,style:{pointerEvents:"none"}})]}),(x.isRoot||W)&&n.jsxs("g",{transform:`translate(${(x.x-35)*_+pA.x}, ${(x.y+x.height/2-12)*_+pA.y})`,children:[n.jsx("circle",{cx:12,cy:12,r:12,fill:"#10b981",stroke:"white",strokeWidth:"2",style:{cursor:"pointer"},onClick:()=>O(x.id,"left")}),n.jsx(eb,{size:12,color:"white",x:6,y:6,style:{pointerEvents:"none"}})]})]})})(),n.jsxs("g",{transform:`translate(${(x.x+x.width+50)*_+pA.x}, ${(x.y-15)*_+pA.y})`,children:[n.jsx("rect",{x:0,y:0,width:100,height:40,rx:20,fill:h?"#374151":"white",stroke:h?"#4b5563":"#e2e8f0",strokeWidth:"1",filter:"url(#shadow)"}),n.jsx("circle",{cx:25,cy:20,r:12,fill:"#3b82f6",style:{cursor:"pointer"},onClick:()=>VA(x)}),n.jsx(Gb,{size:12,color:"white",x:19,y:14,style:{pointerEvents:"none"}}),!x.isRoot&&n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:50,cy:20,r:12,fill:"#ef4444",style:{cursor:"pointer"},onClick:()=>wA(x.id)}),n.jsx(pe,{size:12,color:"white",x:44,y:14,style:{pointerEvents:"none"}})]}),n.jsx("circle",{cx:75,cy:20,r:12,fill:"#6b7280",style:{cursor:"pointer"}}),n.jsx(xb,{size:12,color:"white",x:69,y:14,style:{pointerEvents:"none"}})]})]})]},x.id))]}),v&&n.jsx("div",{className:"edit-overlay",children:n.jsx("div",{className:"edit-box",children:n.jsx("input",{type:"text",value:M,onChange:x=>aA(x.target.value),onBlur:()=>WA(v,M),onKeyDown:x=>{x.key==="Enter"&&WA(v,M),x.key==="Escape"&&(E(null),aA(""))},placeholder:"Enter node text...",autoFocus:!0})})}),n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{className:"zoom-btn",onClick:ae,title:"Zoom Out",children:"-"}),n.jsxs("span",{className:"zoom-level",children:[Math.round(_*100),"%"]}),n.jsx("button",{className:"zoom-btn",onClick:PA,title:"Zoom In",children:"+"}),n.jsx("button",{className:"zoom-btn reset",onClick:de,title:"Reset View",children:"⌂"})]})]}):n.jsxs("div",{className:"json-editor",children:[n.jsx("div",{className:"json-actions",children:n.jsxs("button",{onClick:()=>{const x=document.createElement("input");x.type="file",x.accept=".json",x.onchange=Ye,x.click()},className:"import-btn",children:[n.jsx(nn,{size:16})," Import JSON File"]})}),n.jsx("textarea",{value:R,onChange:x=>nA(x.target.value),className:"json-textarea"}),n.jsxs("button",{onClick:Le,className:"import-btn",children:[n.jsx(Ha,{size:16})," Apply JSON"]})]}),n.jsx("style",{jsx:!0,children:`
        .mindmap-maker {
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
        
        .mindmap-container {
          flex: 1;
          position: relative;
          overflow: hidden;
        }

        .light .top-toolbar {
          background: rgba(255, 255, 255, 0.95);
        }

        .dark .top-toolbar {
          background: rgba(55, 65, 81, 0.95);
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
          z-index: 10;
          backdrop-filter: blur(10px);
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
        }

        .light .toolbar-btn {
          color: #64748b;
        }

        .dark .toolbar-btn {
          color: #9ca3af;
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
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .node-group:hover rect {
          filter: url(#glow);
        }

        .node-group.dragging {
          opacity: 0.9;
          filter: drop-shadow(0 8px 25px rgba(0, 0, 0, 0.3));
        }

        .connection-line {
          transition: all 0.1s ease;
        }

        .connection-line:hover {
          stroke-width: 3;
          stroke: #3b82f6;
        }

        .edit-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
        }

        .edit-box {
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          min-width: 300px;
          padding: 20px;
        }

        .light .edit-box {
          background: white;
        }

        .dark .edit-box {
          background: #374151;
        }

        .edit-box input {
          width: 100%;
          font-size: 16px;
          padding: 12px 16px;
          border: 2px solid;
          border-radius: 8px;
          outline: none;
          transition: all 0.2s ease;
        }

        .light .edit-box input {
          background: white;
          color: #1f2937;
          border-color: #e2e8f0;
        }

        .dark .edit-box input {
          background: #4b5563;
          color: #e2e8f0;
          border-color: #6b7280;
        }

        .edit-box input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
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
        }

        .light .zoom-controls {
          background: rgba(255, 255, 255, 0.95);
        }

        .dark .zoom-controls {
          background: rgba(55, 65, 81, 0.95);
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
        }

        .light .zoom-btn {
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
        }

        .light .zoom-level {
          color: #64748b;
        }

        .dark .zoom-level {
          color: #9ca3af;
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

        .mindmap-container.light {
          background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
        }

        .mindmap-container.dark {
          background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
        }
      `})]})},uQ=({activityDiagrams:i,onCreateActivityDiagram:r,onLoadActivityDiagram:s,onDeleteActivityDiagram:o})=>{const[d,u]=k.useState(!1);return n.jsxs("div",{className:"activity-main",children:[n.jsxs("div",{className:"welcome-screen",children:[n.jsx("div",{className:"welcome-icon",children:n.jsx(_B,{size:48})}),n.jsx("h2",{children:"Activity Diagram Designer"}),n.jsx("p",{children:"Model business workflows and processes with UML activity diagrams"}),n.jsx("div",{className:"action-buttons",children:n.jsxs("button",{onClick:()=>u(!0),className:"primary-btn",children:[n.jsx(Re,{size:16})," New Activity Diagram"]})}),i.length>0&&n.jsxs("div",{className:"diagram-list",children:[n.jsx("h3",{children:"Your Activity Diagrams"}),i.map(h=>n.jsxs("div",{className:"diagram-card",onClick:()=>s(h),children:[n.jsxs("div",{className:"diagram-card-content",children:[n.jsx("div",{className:"diagram-card-name",children:h.name}),n.jsxs("div",{className:"diagram-card-meta",children:[n.jsx("span",{children:new Date(h.createdAt).toLocaleDateString()}),n.jsxs("span",{children:[h.nodes?.length||0," nodes • ",h.edges?.length||0," transitions"]})]})]}),n.jsxs("div",{className:"diagram-card-actions",children:[n.jsx("button",{onClick:B=>{B.stopPropagation(),s(h)},className:"open-btn",children:n.jsx(Fn,{size:16})}),n.jsx("button",{onClick:B=>{B.stopPropagation(),confirm("Delete this activity diagram?")&&o(h.id)},className:"delete-btn",children:n.jsx(pe,{size:16})})]})]},h.id))]})]}),d&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-content",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Activity Diagram"}),n.jsx("button",{onClick:()=>u(!1),className:"close-btn",children:"×"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Diagram Name"}),n.jsx("input",{type:"text",placeholder:"e.g., User Registration Process",id:"diagramName",autoFocus:!0})]}),n.jsxs("div",{className:"modal-footer",children:[n.jsx("button",{onClick:()=>u(!1),className:"cancel-btn",children:"Cancel"}),n.jsx("button",{onClick:()=>{const h=document.getElementById("diagramName").value;h.trim()&&(r(h),u(!1))},className:"create-btn",children:"Create Diagram"})]})]})}),n.jsx("style",{jsx:!0,children:`
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
      `})]})},fQ=({activityDiagram:i,swimlanes:r=[],nodes:s=[],edges:o=[],onUpdateActivityDiagram:d,onBack:u})=>{const h=k.useRef(null),B=k.useRef(null),[m,w]=k.useState(null),[v,E]=k.useState(null),[M,aA]=k.useState(1),[_,lA]=k.useState(null),[pA,QA]=k.useState(!1),[cA,DA]=k.useState({x:0,y:0}),[yA,gA]=k.useState("editor"),[AA,SA]=k.useState(""),[V,iA]=k.useState("select"),[uA,EA]=k.useState(!1),[tA,IA]=k.useState(null),[KA,TA]=k.useState({x:0,y:0}),[R,nA]=k.useState(""),[vA]=k.useState(220);k.useEffect(()=>{SA(JSON.stringify({name:i.name,swimlanes:r,nodes:s,edges:o},null,2))},[r,s,o,i.name]);const LA={initial:{width:40,height:40,color:"#10b981",shape:"circle"},activity:{width:120,height:60,color:"#60a5fa",shape:"rounded"},decision:{width:80,height:80,color:"#f59e0b",shape:"diamond"},final:{width:40,height:40,color:"#1e293b",shape:"doublecircle"},fork:{width:80,height:10,color:"#6b7280",shape:"rectangle"},join:{width:80,height:10,color:"#6b7280",shape:"rectangle"}},Q=(x,F)=>{const T=LA[x];if(x==="activity"){const W=Math.max(100,F.length*8+40);return{...T,width:Math.min(W,180)}}return T},G=x=>{const F=r.find(W=>W.id===x);if(!F)return null;const T=r.findIndex(W=>W.id===x);return{...F,x:T*vA,width:vA,centerX:T*vA+vA/2}},sA=x=>{const F=G(x.swimlaneId);if(!F)return x;const T=F.centerX-x.width/2;return{...x,x:T}},oA=(x,F,T)=>{const W=G(x.swimlaneId);if(!W)return{x:F,y:T};const J=W.x+10,hA=W.x+W.width-x.width-10,j=60,xA=Math.max(J,Math.min(hA,F)),BA=Math.max(j,T);return{x:xA,y:BA}},UA=(x,F)=>{const T=x+F/2;for(let W=0;W<r.length;W++){const J=W*vA;if(T>=J&&T<J+vA)return r[W].id}return r[0]?.id||null},HA=()=>{if(!R.trim())return;const x={id:Date.now(),name:R,order:r.length};d({...i,swimlanes:[...r,x]}),nA("")},D=x=>{if(r.length<=1){alert("Cannot delete the last swimlane");return}const F=r.filter(W=>W.id!==x),T=s.filter(W=>W.swimlaneId!==x);d({...i,swimlanes:F,nodes:T}),E(null)},CA=(x,F)=>{if(x.stopPropagation(),w(F.id),V==="select"){lA(F),QA(!0);const T=B.current.getBoundingClientRect();DA({x:(x.clientX-T.left)/M-F.x,y:(x.clientY-T.top)/M-F.y})}else V==="connection"&&(IA(F.id),EA(!0))},jA=k.useCallback(x=>{if(B.current){const F=B.current.getBoundingClientRect(),T=(x.clientX-F.left)/M,W=(x.clientY-F.top)/M;if(uA&&TA({x:T,y:W}),pA&&_){let J=T-cA.x,hA=W-cA.y;const j=oA(_,J,hA),xA=UA(j.x,_.width),BA=s.map(NA=>NA.id===_.id?{...NA,x:j.x,y:j.y,swimlaneId:xA}:NA);d({...i,nodes:BA})}}},[pA,uA,_,cA,M,s,i,d]),dA=k.useCallback(x=>{if(uA&&tA&&B.current){const F=B.current.getBoundingClientRect(),T=(x.clientX-F.left)/M,W=(x.clientY-F.top)/M,J=s.find(hA=>T>=hA.x&&T<=hA.x+hA.width&&W>=hA.y&&W<=hA.y+hA.height);if(J&&J.id!==tA&&!o.find(j=>j.source===tA&&j.target===J.id)){const j={id:Date.now(),source:tA,target:J.id,label:""};d({...i,edges:[...o,j]})}}QA(!1),lA(null),EA(!1),IA(null)},[uA,tA,s,o,M,i,d]);k.useEffect(()=>(document.addEventListener("mousemove",jA),document.addEventListener("mouseup",dA),()=>{document.removeEventListener("mousemove",jA),document.removeEventListener("mouseup",dA)}),[jA,dA]);const I=(x,F)=>{if(!F&&r.length>0&&(F=r[0].id),!G(F))return;const W={id:Date.now(),type:x,text:x==="initial"?"Start":x==="final"?"End":x==="decision"?"Decision":x==="fork"||x==="join"?"":"New Activity",y:200,swimlaneId:F,...Q(x,"New Activity")},J=sA(W);d({...i,nodes:[...s,J]}),w(J.id)},q=x=>{const F=s.filter(W=>W.id!==x),T=o.filter(W=>W.source!==x&&W.target!==x);d({...i,nodes:F,edges:T}),w(null)},MA=x=>{d({...i,edges:o.filter(F=>F.id!==x)})},O=(x,F)=>{const T=s.map(W=>W.id===x?{...W,text:F,...Q(W.type,F)}:W);d({...i,nodes:T})},wA=x=>{const F=s.map(T=>T.id===x?sA(T):T);d({...i,nodes:F})},VA=()=>aA(x=>Math.min(x*1.2,3)),WA=()=>aA(x=>Math.max(x/1.2,.3)),PA=()=>aA(1),ae=()=>{const x={name:i.name,swimlanes:r,nodes:s,edges:o};return JSON.stringify(x,null,2)},de=()=>{navigator.clipboard.writeText(ae()),alert("JSON copied to clipboard!")},ze=()=>{try{const x=JSON.parse(AA);x.swimlanes&&x.nodes&&x.edges?(d({...i,name:x.name||i.name,swimlanes:x.swimlanes,nodes:x.nodes,edges:x.edges}),alert("Diagram imported successfully!")):alert("Invalid JSON format. Expected swimlanes, nodes and edges arrays.")}catch(x){alert("Error parsing JSON: "+x.message)}},Se=x=>{const F=x.target.files[0];if(!F)return;const T=new FileReader;T.onload=W=>{SA(W.target.result)},T.readAsText(F)},Ve=(x,F)=>{const T=xA=>({x:xA.x+xA.width/2,y:xA.y+xA.height/2}),W=T(x),J=T(F),hA=J.x-W.x,j=J.y-W.y;if(Math.abs(hA)>Math.abs(j)){const xA=W.y;return`M ${W.x} ${W.y} L ${J.x} ${xA} L ${J.x} ${J.y}`}else{const xA=W.x;return`M ${W.x} ${W.y} L ${xA} ${J.y} L ${J.x} ${J.y}`}},Le=(x,F)=>{const T=F*vA,W=Math.max(1e3,s.reduce((J,hA)=>Math.max(J,hA.y+hA.height+150),0));return n.jsxs("g",{children:[n.jsx("rect",{x:T,y:0,width:vA,height:W,fill:F%2===0?"#ffffff":"#f9fafb",stroke:"#e5e7eb",strokeWidth:"2"}),n.jsx("text",{x:T+vA/2,y:30,textAnchor:"middle",fontSize:"15",fontWeight:"600",fill:"#1f2937",children:x.name}),n.jsx("line",{x1:T,y1:55,x2:T+vA,y2:55,stroke:"#d1d5db",strokeWidth:"2"})]},x.id)},Ye=x=>{const F=m===x.id,T=LA[x.type];return n.jsxs("g",{className:"node-group",onMouseDown:W=>CA(W,x),style:{cursor:V==="select"?"move":"crosshair",pointerEvents:"all"},children:[T.shape==="circle"&&n.jsx("circle",{cx:x.x+x.width/2,cy:x.y+x.height/2,r:x.width/2,fill:T.color,stroke:F?"#3b82f6":"#fff",strokeWidth:F?"3":"2",style:{filter:F?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"none"}}),T.shape==="doublecircle"&&n.jsxs(n.Fragment,{children:[n.jsx("circle",{cx:x.x+x.width/2,cy:x.y+x.height/2,r:x.width/2,fill:"none",stroke:T.color,strokeWidth:"3",style:{filter:F?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"none"}}),n.jsx("circle",{cx:x.x+x.width/2,cy:x.y+x.height/2,r:x.width/2-5,fill:T.color,stroke:F?"#3b82f6":"none",strokeWidth:F?"2":"0"})]}),T.shape==="rounded"&&n.jsx("rect",{x:x.x,y:x.y,width:x.width,height:x.height,rx:"12",fill:T.color,stroke:F?"#3b82f6":"#fff",strokeWidth:F?"3":"2",style:{filter:F?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"drop-shadow(0 2px 4px rgba(0,0,0,0.1))"}}),T.shape==="diamond"&&n.jsx("polygon",{points:`
              ${x.x+x.width/2},${x.y} 
              ${x.x+x.width},${x.y+x.height/2} 
              ${x.x+x.width/2},${x.y+x.height} 
              ${x.x},${x.y+x.height/2}
            `,fill:T.color,stroke:F?"#3b82f6":"#fff",strokeWidth:F?"3":"2",style:{filter:F?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"drop-shadow(0 2px 4px rgba(0,0,0,0.1))"}}),T.shape==="rectangle"&&n.jsx("rect",{x:x.x,y:x.y,width:x.width,height:x.height,fill:T.color,stroke:F?"#3b82f6":"#6b7280",strokeWidth:F?"3":"2",style:{filter:F?"drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))":"none"}}),x.type!=="fork"&&x.type!=="join"&&x.type!=="initial"&&x.type!=="final"&&n.jsx("text",{x:x.x+x.width/2,y:x.y+x.height/2,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"12",fontWeight:"600",children:x.text.length>20?x.text.substring(0,20)+"...":x.text})]},x.id)},We=x=>{const F=s.find(J=>J.id===x.source),T=s.find(J=>J.id===x.target);if(!F||!T)return null;const W=Ve(F,T);return n.jsxs("g",{className:"edge-group",children:[n.jsx("path",{d:W,stroke:"#6b7280",strokeWidth:"2",fill:"none",markerEnd:"url(#arrowhead)",style:{cursor:"pointer"},onClick:J=>{J.stopPropagation(),window.confirm("Delete this connection?")&&MA(x.id)}}),x.label&&n.jsx("text",{x:(F.x+T.x)/2,y:(F.y+T.y)/2-10,fill:"#374151",fontSize:"11",fontWeight:"500",style:{pointerEvents:"none"},children:x.label})]},x.id)},xe=Math.max(1e3,s.reduce((x,F)=>Math.max(x,F.y+F.height+150),0)),ue=r.length*vA;return n.jsxs("div",{className:"activity-maker",children:[n.jsxs("div",{className:"toolbar",children:[n.jsxs("button",{onClick:u,className:"back-btn",children:[n.jsx(Un,{size:16})," Back"]}),n.jsx("div",{className:"toolbar-left",children:n.jsx("h2",{children:i.name})}),n.jsx("div",{className:"toolbar-center",children:n.jsxs("div",{className:"zoom-controls",children:[n.jsx("button",{onClick:WA,className:"zoom-btn",title:"Zoom Out",children:n.jsx(Qr,{size:16})}),n.jsxs("span",{className:"zoom-level",children:[Math.round(M*100),"%"]}),n.jsx("button",{onClick:VA,className:"zoom-btn",title:"Zoom In",children:n.jsx(Cr,{size:16})}),n.jsx("button",{onClick:PA,className:"zoom-btn",title:"Reset Zoom",children:"Reset"})]})}),n.jsxs("div",{className:"toolbar-right",children:[n.jsxs("button",{onClick:de,className:"export-btn",title:"Copy JSON",children:[n.jsx(ja,{size:16})," Copy"]}),n.jsxs("button",{onClick:()=>{const x=new Blob([ae()],{type:"application/json"}),F=URL.createObjectURL(x),T=document.createElement("a");T.href=F,T.download=`${i.name.replace(/\s+/g,"-").toLowerCase()}.json`,document.body.appendChild(T),T.click(),document.body.removeChild(T),URL.revokeObjectURL(F)},className:"export-btn",title:"Download JSON",children:[n.jsx(En,{size:16})," Export"]})]})]}),n.jsxs("div",{className:"tabs",children:[n.jsx("button",{className:`tab ${yA==="editor"?"active":""}`,onClick:()=>gA("editor"),children:"Diagram Editor"}),n.jsx("button",{className:`tab ${yA==="json"?"active":""}`,onClick:()=>gA("json"),children:"JSON Editor"})]}),yA==="editor"?n.jsxs("div",{className:"diagram-container",children:[n.jsxs("div",{className:"sidebar",children:[n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Tools"}),n.jsxs("button",{className:`tool-btn ${V==="select"?"active":""}`,onClick:()=>iA("select"),children:[n.jsx(Lb,{size:16})," Select & Move"]}),n.jsxs("button",{className:`tool-btn ${V==="connection"?"active":""}`,onClick:()=>iA("connection"),children:[n.jsx(s0,{size:16})," Create Connection"]})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Swimlanes"}),n.jsx("div",{className:"form-group",children:n.jsx("input",{type:"text",value:R,onChange:x=>nA(x.target.value),placeholder:"Swimlane name",onKeyPress:x=>x.key==="Enter"&&HA()})}),n.jsxs("button",{onClick:HA,className:"add-btn",children:[n.jsx(Re,{size:16})," Add Swimlane"]}),n.jsx("div",{className:"list",children:r.map(x=>n.jsxs("div",{className:"list-item",children:[n.jsx("div",{className:"item-info",children:n.jsx("div",{className:"item-name",children:x.name})}),n.jsx("button",{onClick:()=>D(x.id),className:"delete-btn",title:"Delete swimlane",children:n.jsx(pe,{size:14})})]},x.id))})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{children:"Add Nodes"}),r.length>0&&n.jsxs("div",{className:"form-group",children:[n.jsx("label",{children:"Target Swimlane"}),n.jsx("select",{value:v||r[0]?.id||"",onChange:x=>E(parseInt(x.target.value)),children:r.map(x=>n.jsx("option",{value:x.id,children:x.name},x.id))})]}),n.jsxs("div",{className:"node-buttons",children:[n.jsxs("button",{onClick:()=>I("initial",v||r[0]?.id),title:"Start node",children:[n.jsx(Jb,{size:14})," Initial"]}),n.jsxs("button",{onClick:()=>I("activity",v||r[0]?.id),title:"Activity node",children:[n.jsx(lw,{size:14})," Activity"]}),n.jsxs("button",{onClick:()=>I("decision",v||r[0]?.id),title:"Decision node",children:[n.jsx(hb,{size:14})," Decision"]}),n.jsxs("button",{onClick:()=>I("fork",v||r[0]?.id),title:"Fork node",children:[n.jsx(nu,{size:14})," Fork"]}),n.jsxs("button",{onClick:()=>I("join",v||r[0]?.id),title:"Join node",children:[n.jsx(Hb,{size:14})," Join"]}),n.jsxs("button",{onClick:()=>I("final",v||r[0]?.id),title:"End node",children:[n.jsx(rb,{size:14})," Final"]})]})]})]}),n.jsx("div",{className:"canvas-wrapper",children:n.jsx("div",{className:"canvas",ref:B,style:{transform:`scale(${M})`,transformOrigin:"top left",width:ue,height:xe},children:n.jsxs("svg",{ref:h,width:ue,height:xe,style:{background:"#fff"},children:[n.jsx("defs",{children:n.jsx("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto",children:n.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#6b7280"})})}),r.map((x,F)=>Le(x,F)),o.map(x=>We(x)),s.map(x=>Ye(x)),uA&&tA&&n.jsx("line",{x1:s.find(x=>x.id===tA)?.x+s.find(x=>x.id===tA)?.width/2,y1:s.find(x=>x.id===tA)?.y+s.find(x=>x.id===tA)?.height/2,x2:KA.x,y2:KA.y,stroke:"#3b82f6",strokeWidth:"2",strokeDasharray:"5,5",style:{pointerEvents:"none"}})]})})}),m&&n.jsxs("div",{className:"properties-panel",children:[n.jsx("h3",{children:"Node Properties"}),(()=>{const x=s.find(F=>F.id===m);return x?n.jsxs("div",{className:"property-group",children:[n.jsx("label",{children:"Node ID"}),n.jsx("input",{type:"text",value:x.id,disabled:!0,className:"disabled-input"}),x.type!=="fork"&&x.type!=="join"&&n.jsxs(n.Fragment,{children:[n.jsx("label",{children:"Text Label"}),n.jsx("input",{type:"text",value:x.text,onChange:F=>O(x.id,F.target.value),placeholder:"Enter text"})]}),n.jsx("label",{children:"Node Type"}),n.jsxs("select",{value:x.type,onChange:F=>{const T=s.map(W=>W.id===m?{...W,type:F.target.value,...Q(F.target.value,W.text)}:W);d({...i,nodes:T})},children:[n.jsx("option",{value:"initial",children:"Initial Node"}),n.jsx("option",{value:"activity",children:"Activity"}),n.jsx("option",{value:"decision",children:"Decision"}),n.jsx("option",{value:"fork",children:"Fork"}),n.jsx("option",{value:"join",children:"Join"}),n.jsx("option",{value:"final",children:"Final Node"})]}),n.jsx("label",{children:"Swimlane"}),n.jsx("select",{value:x.swimlaneId||"",onChange:F=>{const T=parseInt(F.target.value),W=s.map(J=>{if(J.id===m){const hA={...J,swimlaneId:T};return sA(hA)}return J});d({...i,nodes:W})},children:r.map(F=>n.jsx("option",{value:F.id,children:F.name},F.id))}),n.jsx("label",{children:"Position"}),n.jsxs("div",{className:"position-group",children:[n.jsxs("div",{className:"position-item",children:[n.jsx("span",{children:"X:"}),n.jsx("input",{type:"number",value:Math.round(x.x),onChange:F=>{const T=parseInt(F.target.value)||0,W=oA(x,T,x.y),J=s.map(hA=>hA.id===m?{...hA,x:W.x}:hA);d({...i,nodes:J})}})]}),n.jsxs("div",{className:"position-item",children:[n.jsx("span",{children:"Y:"}),n.jsx("input",{type:"number",value:Math.round(x.y),onChange:F=>{const T=parseInt(F.target.value)||0,W=oA(x,x.x,T),J=s.map(hA=>hA.id===m?{...hA,y:W.y}:hA);d({...i,nodes:J})}})]})]}),n.jsxs("button",{onClick:()=>wA(m),className:"center-btn",children:[n.jsx(c0,{size:14})," Center in Swimlane"]}),n.jsxs("button",{onClick:()=>{window.confirm("Delete this node and all connected edges?")&&q(m)},className:"delete-node-btn",children:[n.jsx(pe,{size:14})," Delete Node"]})]}):null})()]})]}):n.jsxs("div",{className:"json-editor",children:[n.jsxs("div",{className:"json-actions",children:[n.jsxs("button",{onClick:()=>{const x=document.createElement("input");x.type="file",x.accept=".json",x.onchange=Se,x.click()},className:"import-btn",children:[n.jsx(nn,{size:16})," Import JSON File"]}),n.jsxs("button",{onClick:ze,className:"import-btn apply-btn",children:[n.jsx(Ha,{size:16})," Apply Changes"]})]}),n.jsx("textarea",{value:AA,onChange:x=>SA(x.target.value),className:"json-textarea",placeholder:"Paste or edit JSON here..."})]}),n.jsx("style",{children:`
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
      `})]})},kA={PROJECT:"projects",FLOWCHART:"flowcharts",GANTT:"gantt",USE_CASE:"usecase",SEQUENCE:"sequence",ARCHITECTURE:"architecture",CLASS:"class",DOMAIN_MODEL:"domainmodel",MIND_MAP:"mindmap",ACTIVITY:"activity"},Nd=()=>({projects:[],currentProject:null,flowcharts:[],currentFlowchart:null,ganttCharts:[],currentGanttChart:null,useCaseDiagrams:[],currentUseCaseDiagram:null,sequenceDiagrams:[],currentSequenceDiagram:null,architectureDiagrams:[],currentArchitectureDiagram:null,classDiagrams:[],currentClassDiagram:null,domainModels:[],currentDomainModel:null,mindMaps:[],currentMindMap:null,activityDiagrams:[],currentActivityDiagram:null}),hQ=()=>{const i=localStorage.getItem("evolutionChartData");if(!i)return Nd();try{const r=JSON.parse(i);return{...Nd(),...r}}catch(r){return console.error("Failed to parse localStorage data:",r),Nd()}},Ei=i=>{localStorage.setItem("evolutionChartData",JSON.stringify(i))},gQ=()=>{const[,i]=k.useReducer(I=>I+1,0),[r,s]=k.useState(kA.PROJECT),[o,d]=k.useState(""),u=()=>hQ(),h=(I,q,MA={})=>{const O=u(),wA={id:Date.now(),name:q,createdAt:new Date().toISOString(),...MA},VA={...O};switch(VA.currentProject=null,VA.currentFlowchart=null,VA.currentGanttChart=null,VA.currentUseCaseDiagram=null,VA.currentSequenceDiagram=null,VA.currentArchitectureDiagram=null,VA.currentClassDiagram=null,VA.currentDomainModel=null,VA.currentMindMap=null,VA.currentActivityDiagram=null,I){case kA.PROJECT:VA.projects=[...O.projects,wA],VA.currentProject=wA;break;case kA.FLOWCHART:VA.flowcharts=[...O.flowcharts,wA],VA.currentFlowchart=wA;break;case kA.GANTT:VA.ganttCharts=[...O.ganttCharts,wA],VA.currentGanttChart=wA;break;case kA.USE_CASE:VA.useCaseDiagrams=[...O.useCaseDiagrams,wA],VA.currentUseCaseDiagram=wA;break;case kA.SEQUENCE:VA.sequenceDiagrams=[...O.sequenceDiagrams,wA],VA.currentSequenceDiagram=wA;break;case kA.ARCHITECTURE:VA.architectureDiagrams=[...O.architectureDiagrams,wA],VA.currentArchitectureDiagram=wA;break;case kA.CLASS:VA.classDiagrams=[...O.classDiagrams,wA],VA.currentClassDiagram=wA;break;case kA.DOMAIN_MODEL:VA.domainModels=[...O.domainModels,wA],VA.currentDomainModel=wA;break;case kA.MIND_MAP:VA.mindMaps=[...O.mindMaps,wA],VA.currentMindMap=wA;break;case kA.ACTIVITY:VA.activityDiagrams=[...O.activityDiagrams,wA],VA.currentActivityDiagram=wA;break}Ei(VA),i()},B=(I,q)=>{const MA=u(),O={...MA};switch(I){case kA.PROJECT:O.projects=MA.projects.filter(wA=>wA.id!==q),MA.currentProject?.id===q&&(O.currentProject=null);break;case kA.FLOWCHART:O.flowcharts=MA.flowcharts.filter(wA=>wA.id!==q),MA.currentFlowchart?.id===q&&(O.currentFlowchart=null);break;case kA.GANTT:O.ganttCharts=MA.ganttCharts.filter(wA=>wA.id!==q),MA.currentGanttChart?.id===q&&(O.currentGanttChart=null);break;case kA.USE_CASE:O.useCaseDiagrams=MA.useCaseDiagrams.filter(wA=>wA.id!==q),MA.currentUseCaseDiagram?.id===q&&(O.currentUseCaseDiagram=null);break;case kA.SEQUENCE:O.sequenceDiagrams=MA.sequenceDiagrams.filter(wA=>wA.id!==q),MA.currentSequenceDiagram?.id===q&&(O.currentSequenceDiagram=null);break;case kA.ARCHITECTURE:O.architectureDiagrams=MA.architectureDiagrams.filter(wA=>wA.id!==q),MA.currentArchitectureDiagram?.id===q&&(O.currentArchitectureDiagram=null);break;case kA.CLASS:O.classDiagrams=MA.classDiagrams.filter(wA=>wA.id!==q),MA.currentClassDiagram?.id===q&&(O.currentClassDiagram=null);break;case kA.DOMAIN_MODEL:O.domainModels=MA.domainModels.filter(wA=>wA.id!==q),MA.currentDomainModel?.id===q&&(O.currentDomainModel=null);break;case kA.MIND_MAP:O.mindMaps=MA.mindMaps.filter(wA=>wA.id!==q),MA.currentMindMap?.id===q&&(O.currentMindMap=null);break;case kA.ACTIVITY:O.activityDiagrams=MA.activityDiagrams.filter(wA=>wA.id!==q),MA.currentActivityDiagram?.id===q&&(O.currentActivityDiagram=null);break}Ei(O),i()},m=(I,q)=>{const MA=u(),O={...MA};switch(I){case kA.PROJECT:O.projects=MA.projects.map(wA=>wA.id===q.id?q:wA),O.currentProject=q;break;case kA.FLOWCHART:O.flowcharts=MA.flowcharts.map(wA=>wA.id===q.id?q:wA),O.currentFlowchart=q;break;case kA.GANTT:O.ganttCharts=MA.ganttCharts.map(wA=>wA.id===q.id?q:wA),O.currentGanttChart=q;break;case kA.USE_CASE:O.useCaseDiagrams=MA.useCaseDiagrams.map(wA=>wA.id===q.id?q:wA),O.currentUseCaseDiagram=q;break;case kA.SEQUENCE:O.sequenceDiagrams=MA.sequenceDiagrams.map(wA=>wA.id===q.id?q:wA),O.currentSequenceDiagram=q;break;case kA.ARCHITECTURE:O.architectureDiagrams=MA.architectureDiagrams.map(wA=>wA.id===q.id?q:wA),O.currentArchitectureDiagram=q;break;case kA.CLASS:O.classDiagrams=MA.classDiagrams.map(wA=>wA.id===q.id?q:wA),O.currentClassDiagram=q;break;case kA.DOMAIN_MODEL:O.domainModels=MA.domainModels.map(wA=>wA.id===q.id?q:wA),O.currentDomainModel=q;break;case kA.MIND_MAP:O.mindMaps=MA.mindMaps.map(wA=>wA.id===q.id?q:wA),O.currentMindMap=q;break;case kA.ACTIVITY:O.activityDiagrams=MA.activityDiagrams.map(wA=>wA.id===q.id?q:wA),O.currentActivityDiagram=q;break}Ei(O),i()},w=(I,q,MA,O)=>{h(kA.PROJECT,I,{timelineStart:q,timelineEnd:MA,timeUnit:O,nodes:[],connections:[],zoom:1,pan:{x:0,y:0}})},v=I=>{h(kA.FLOWCHART,I,{nodes:[],edges:[],zoom:1,pan:{x:0,y:0}})},E=I=>{h(kA.GANTT,I,{tasks:[],startDate:new Date().toISOString(),endDate:new Date(Date.now()+30*24*60*60*1e3).toISOString()})},M=I=>{h(kA.USE_CASE,I,{actors:[],useCases:[],relationships:[],zoom:1,pan:{x:0,y:0}})},aA=I=>{h(kA.SEQUENCE,I,{participants:[],messages:[],zoom:1,pan:{x:0,y:0}})},_=I=>{h(kA.ARCHITECTURE,I,{components:[],connections:[],zoom:1,pan:{x:0,y:0}})},lA=I=>{h(kA.CLASS,I,{classes:[],relationships:[],zoom:1,pan:{x:0,y:0}})},pA=I=>{h(kA.DOMAIN_MODEL,I,{entities:[],relationships:[],zoom:1,pan:{x:0,y:0}})},QA=I=>{h(kA.MIND_MAP,I,{nodes:[{id:1,text:"Central Idea",x:400,y:300,level:0,parentId:null,isRoot:!0,color:"#ff6b6b",width:140,height:40}],zoom:1,pan:{x:0,y:0}})},cA=I=>{h(kA.ACTIVITY,I,{swimlanes:[{id:Date.now(),name:"Default Swimlane",order:0}],nodes:[],edges:[],zoom:1,pan:{x:0,y:0}})},DA=I=>B(kA.PROJECT,I),yA=I=>B(kA.FLOWCHART,I),gA=I=>B(kA.GANTT,I),AA=I=>B(kA.USE_CASE,I),SA=I=>B(kA.SEQUENCE,I),V=I=>B(kA.ARCHITECTURE,I),iA=I=>B(kA.CLASS,I),uA=I=>B(kA.DOMAIN_MODEL,I),EA=I=>B(kA.MIND_MAP,I),tA=I=>B(kA.ACTIVITY,I),IA=I=>m(kA.PROJECT,I),KA=I=>m(kA.FLOWCHART,I),TA=I=>m(kA.GANTT,I),R=I=>m(kA.USE_CASE,I),nA=I=>m(kA.SEQUENCE,I),vA=I=>m(kA.ARCHITECTURE,I),LA=I=>m(kA.CLASS,I),Q=I=>m(kA.DOMAIN_MODEL,I),G=I=>m(kA.MIND_MAP,I),sA=I=>m(kA.ACTIVITY,I),oA=I=>{try{const q=JSON.parse(I);return h(kA.FLOWCHART,`Imported Flowchart ${new Date().toLocaleString()}`,{nodes:q.nodes||[],edges:q.edges||[],zoom:1,pan:{x:0,y:0}}),!0}catch(q){return console.error("Invalid JSON:",q),!1}},UA=()=>{const q={...u(),currentProject:null,currentFlowchart:null,currentGanttChart:null,currentUseCaseDiagram:null,currentSequenceDiagram:null,currentArchitectureDiagram:null,currentClassDiagram:null,currentDomainModel:null,currentMindMap:null,currentActivityDiagram:null};Ei(q),i()},HA=(I,q)=>{const O={...u(),currentProject:null,currentFlowchart:null,currentGanttChart:null,currentUseCaseDiagram:null,currentSequenceDiagram:null,currentArchitectureDiagram:null,currentClassDiagram:null,currentDomainModel:null,currentMindMap:null,currentActivityDiagram:null};switch(I){case kA.PROJECT:O.currentProject=q;break;case kA.FLOWCHART:O.currentFlowchart=q;break;case kA.GANTT:O.currentGanttChart=q;break;case kA.USE_CASE:O.currentUseCaseDiagram=q;break;case kA.SEQUENCE:O.currentSequenceDiagram=q;break;case kA.ARCHITECTURE:O.currentArchitectureDiagram=q;break;case kA.CLASS:O.currentClassDiagram=q;break;case kA.DOMAIN_MODEL:O.currentDomainModel=q;break;case kA.MIND_MAP:O.currentMindMap=q;break;case kA.ACTIVITY:O.currentActivityDiagram=q;break}Ei(O),i()},D={appContainer:{minHeight:"100vh",width:"97.3%",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",padding:"20px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'},mainCard:{maxWidth:"1400px",margin:"0 auto",background:"rgba(255, 255, 255, 0.98)",backdropFilter:"blur(20px)",borderRadius:"24px",boxShadow:"0 25px 50px rgba(0, 0, 0, 0.15)",overflow:"hidden",minHeight:"85vh"},header:{background:"linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)",color:"white",padding:"40px 30px",textAlign:"center",position:"relative"},headerTitle:{fontSize:"36px",fontWeight:"800",margin:"0 0 12px 0",textShadow:"0 4px 8px rgba(0, 0, 0, 0.3)",letterSpacing:"-0.5px"},headerSubtitle:{fontSize:"18px",opacity:"0.95",margin:"0",fontWeight:"400"},modeSelector:{display:"flex",justifyContent:"center",padding:"30px 30px 0 30px",gap:"16px",marginBottom:"25px",flexWrap:"wrap"},tabButton:{padding:"16px 32px",border:"2px solid transparent",borderRadius:"50px",background:"rgba(0, 0, 0, 0.05)",color:"#64748b",fontSize:"16px",fontWeight:"600",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",outline:"none",position:"relative",backdropFilter:"blur(10px)",marginBottom:"10px"},tabButtonActive:I=>({background:`linear-gradient(135deg, ${I} 0%, ${I} 100%)`,color:"white",borderColor:"rgba(255, 255, 255, 0.2)",boxShadow:`0 8px 25px rgba(${CA(I)}, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)`,transform:"translateY(-2px)"}),tabButtonHover:I=>({background:`rgba(${CA(I)}, 0.1)`,color:I})},CA=I=>{const q=parseInt(I.slice(1,3),16),MA=parseInt(I.slice(3,5),16),O=parseInt(I.slice(5,7),16);return`${q}, ${MA}, ${O}`},jA=()=>[{type:kA.PROJECT,label:"📊 Evolution Charts",color:"#4f46e5",component:n.jsx(yw,{projects:u().projects,onCreateProject:w,onLoadProject:I=>HA(kA.PROJECT,I),onDeleteProject:DA})},{type:kA.FLOWCHART,label:"🔄 Flowcharts",color:"#7c3aed",component:n.jsx(Cw,{flowcharts:u().flowcharts,onCreateFlowchart:v,onLoadFlowchart:I=>HA(kA.FLOWCHART,I),onDeleteFlowchart:yA,onImportFlowchart:oA})},{type:kA.GANTT,label:"📅 Gantt Charts",color:"#3b82f6",component:n.jsx(Uw,{ganttCharts:u().ganttCharts,onCreateGanttChart:E,onLoadGanttChart:I=>HA(kA.GANTT,I),onDeleteGanttChart:gA})},{type:kA.USE_CASE,label:"👥 Use Case",color:"#10b981",component:n.jsx($2,{useCaseDiagrams:u().useCaseDiagrams,onCreateUseCaseDiagram:M,onLoadUseCaseDiagram:I=>HA(kA.USE_CASE,I),onDeleteUseCaseDiagram:AA})},{type:kA.SEQUENCE,label:"↔️ Sequence",color:"#06b6d4",component:n.jsx(tQ,{sequenceDiagrams:u().sequenceDiagrams,onCreateSequenceDiagram:aA,onLoadSequenceDiagram:I=>HA(kA.SEQUENCE,I),onDeleteSequenceDiagram:SA})},{type:kA.ARCHITECTURE,label:"🏛️ Architecture",color:"#8b5cf6",component:n.jsx(aQ,{architectureDiagrams:u().architectureDiagrams,onCreateArchitectureDiagram:_,onLoadArchitectureDiagram:I=>HA(kA.ARCHITECTURE,I),onDeleteArchitectureDiagram:V})},{type:kA.CLASS,label:"📐 Class Diagram",color:"#ec4899",component:n.jsx(iQ,{classDiagrams:u().classDiagrams,onCreateClassDiagram:lA,onLoadClassDiagram:I=>HA(kA.CLASS,I),onDeleteClassDiagram:iA})},{type:kA.DOMAIN_MODEL,label:"🏢 Domain Model",color:"#06b6d4",component:n.jsx(sQ,{domainModels:u().domainModels,onCreateDomainModel:pA,onLoadDomainModel:I=>HA(kA.DOMAIN_MODEL,I),onDeleteDomainModel:uA})},{type:kA.MIND_MAP,label:"🧠 Mind Maps",color:"#10b981",component:n.jsx(cQ,{mindMaps:u().mindMaps,onCreateMindMap:QA,onLoadMindMap:I=>HA(kA.MIND_MAP,I),onDeleteMindMap:EA})},{type:kA.ACTIVITY,label:"⚡ Activity Diagram",color:"#f59e0b",component:n.jsx(uQ,{activityDiagrams:u().activityDiagrams,onCreateActivityDiagram:cA,onLoadActivityDiagram:I=>HA(kA.ACTIVITY,I),onDeleteActivityDiagram:tA})}],dA=u();return n.jsx("div",{style:D.appContainer,children:n.jsx("div",{style:D.mainCard,children:dA.currentProject?n.jsx(vw,{project:dA.currentProject,nodes:dA.currentProject.nodes||[],connections:dA.currentProject.connections||[],onUpdateProject:IA,onBack:UA}):dA.currentFlowchart?n.jsx(Qw,{flowchart:dA.currentFlowchart,nodes:dA.currentFlowchart.nodes||[],edges:dA.currentFlowchart.edges||[],jsonInput:o,onJsonInputChange:d,onImportJson:oA,onUpdateFlowchart:KA,onBack:UA}):dA.currentGanttChart?n.jsx(W2,{ganttChart:dA.currentGanttChart,tasks:dA.currentGanttChart.tasks||[],onUpdateGanttChart:TA,onBack:UA}):dA.currentUseCaseDiagram?n.jsx(eQ,{useCaseDiagram:dA.currentUseCaseDiagram,actors:dA.currentUseCaseDiagram.actors||[],useCases:dA.currentUseCaseDiagram.useCases||[],relationships:dA.currentUseCaseDiagram.relationships||[],onUpdateUseCaseDiagram:R,onBack:UA}):dA.currentSequenceDiagram?n.jsx(nQ,{sequenceDiagram:dA.currentSequenceDiagram,participants:dA.currentSequenceDiagram.participants||[],messages:dA.currentSequenceDiagram.messages||[],onUpdateSequenceDiagram:nA,onBack:UA}):dA.currentArchitectureDiagram?n.jsx(rQ,{architectureDiagram:dA.currentArchitectureDiagram,components:dA.currentArchitectureDiagram.components||[],connections:dA.currentArchitectureDiagram.connections||[],onUpdateArchitectureDiagram:vA,onBack:UA}):dA.currentClassDiagram?n.jsx(oQ,{classDiagram:dA.currentClassDiagram,classes:dA.currentClassDiagram.classes||[],relationships:dA.currentClassDiagram.relationships||[],onUpdateClassDiagram:LA,onBack:UA}):dA.currentDomainModel?n.jsx(lQ,{domainModel:dA.currentDomainModel,entities:dA.currentDomainModel.entities||[],relationships:dA.currentDomainModel.relationships||[],onUpdateDomainModel:Q,onBack:UA}):dA.currentMindMap?n.jsx(dQ,{mindMap:dA.currentMindMap,nodes:dA.currentMindMap.nodes||[],onUpdateMindMap:G,onBack:UA}):dA.currentActivityDiagram?n.jsx(fQ,{activityDiagram:dA.currentActivityDiagram,swimlanes:dA.currentActivityDiagram.swimlanes||[],nodes:dA.currentActivityDiagram.nodes||[],edges:dA.currentActivityDiagram.edges||[],onUpdateActivityDiagram:sA,onBack:UA}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:D.header,children:[n.jsx("h1",{style:D.headerTitle,children:"Visual Designer Suite"}),n.jsx("p",{style:D.headerSubtitle,children:"Create stunning diagrams and charts"})]}),n.jsx("div",{style:D.modeSelector,children:jA().map(I=>n.jsx("button",{onClick:()=>s(I.type),style:{...D.tabButton,...r===I.type?D.tabButtonActive(I.color):{}},onMouseEnter:q=>{r!==I.type&&(q.target.style.background=D.tabButtonHover(I.color).background,q.target.style.color=D.tabButtonHover(I.color).color)},onMouseLeave:q=>{r!==I.type&&(q.target.style.background=D.tabButton.background,q.target.style.color=D.tabButton.color)},children:I.label},I.type))}),jA().find(I=>I.type===r)?.component]})})})};TB.createRoot(document.getElementById("root")).render(n.jsx(k.StrictMode,{children:n.jsx(gQ,{})}));
