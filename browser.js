// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).constantcase=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var s,f,l,p;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(u.call(e,r)||c.call(e,r)?(s=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=s):e[r]=t.value),l="get"in t,p="set"in t,f&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(e,r,t.get),p&&a&&a.call(e,r,t.set),e};var s=r;function f(e,r,t){s(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(e){return"string"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return p&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var y=Object.prototype.hasOwnProperty;var h="function"==typeof Symbol?Symbol.toStringTag:"";var v=g()?function(e){var r,t,n,i,o;if(null==e)return d.call(e);t=e[h],o=h,r=null!=(i=e)&&y.call(i,o);try{e[h]=void 0}catch(r){return d.call(e)}return n=d.call(e),r?e[h]=t:delete e[h],n}:function(e){return d.call(e)},b=String.prototype.valueOf;var w=g();function m(e){return"object"==typeof e&&(e instanceof String||(w?function(e){try{return b.call(e),!0}catch(e){return!1}}(e):"[object String]"===v(e)))}function E(e){return l(e)||m(e)}function j(e){return"number"==typeof e}function _(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function x(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+_(i):_(i)+e,n&&(e="-"+e)),e}f(E,"isPrimitive",l),f(E,"isObject",m);var S=String.prototype.toLowerCase,T=String.prototype.toUpperCase;function k(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!j(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=x(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=x(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===T.call(e.specifier)?T.call(t):S.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function V(e){return"string"==typeof e}var $=Math.abs,A=String.prototype.toLowerCase,O=String.prototype.toUpperCase,R=String.prototype.replace,C=/e\+(\d)$/,F=/e-(\d)$/,I=/^(\d+)$/,P=/^(\d+)e/,B=/\.0$/,L=/\.0*e/,M=/(\..*[^0])0*e/;function Z(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!j(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":$(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=R.call(t,M,"$1e"),t=R.call(t,L,"e"),t=R.call(t,B,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=R.call(t,C,"e+0$1"),t=R.call(t,F,"e-0$1"),e.alternate&&(t=R.call(t,I,"$1."),t=R.call(t,P,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===O.call(e.specifier)?O.call(t):A.call(t)}function G(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function U(e,r,t){var n=r-e.length;return n<0?e:e=t?e+G(n):G(n)+e}var N=String.fromCharCode,W=isNaN,X=Array.isArray;function z(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function q(e){var r,t,n,i,o,a,u,c,s;if(!X(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,c=0;c<e.length;c++)if(V(n=e[c]))a+=n;else{if(r=void 0!==n.precision,!(n=z(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,W(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,W(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=k(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!W(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=W(o)?String(n.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=Z(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=x(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=U(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var D=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function H(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function J(e){var r,t,n,i;for(t=[],i=0,n=D.exec(e);n;)(r=e.slice(i,D.lastIndex-n[0].length)).length&&t.push(r),t.push(H(n)),i=D.lastIndex,n=D.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function K(e){return"string"==typeof e}function Q(e){var r,t,n;if(!K(e))throw new TypeError(Q("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=J(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return q.apply(null,t)}var Y=/[-\/\\^$*+?.()|[\]{}]/g;var ee=/./;function re(e){return"boolean"==typeof e}var te=Boolean.prototype.toString;var ne=g();function ie(e){return"object"==typeof e&&(e instanceof Boolean||(ne?function(e){try{return te.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===v(e)))}function oe(e){return re(e)||ie(e)}function ae(){return new Function("return this;")()}f(oe,"isPrimitive",re),f(oe,"isObject",ie);var ue="object"==typeof self?self:null,ce="object"==typeof window?window:null,se="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},fe="object"==typeof se?se:null;var le=function(e){if(arguments.length){if(!re(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return ae()}if(ue)return ue;if(ce)return ce;if(fe)return fe;throw new Error("unexpected error. Unable to resolve global object.")}(),pe=le.document&&le.document.childNodes,ge=Int8Array;function de(){return/^\s*function\s*([^(]*)/i}var ye=/^\s*function\s*([^(]*)/i;f(de,"REGEXP",ye);var he=Array.isArray?Array.isArray:function(e){return"[object Array]"===v(e)};function ve(e){return null!==e&&"object"==typeof e}function be(e){var r,t,n,i;if(("Object"===(t=v(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ye.exec(n.toString()))return r[1]}return ve(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}f(ve,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!he(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ve));var we="function"==typeof ee||"object"==typeof ge||"function"==typeof pe?function(e){return be(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?be(e).toLowerCase():r};var me=RegExp.prototype.exec;var Ee=g();function je(e){return"object"==typeof e&&(e instanceof RegExp||(Ee?function(e){try{return me.call(e),!0}catch(e){return!1}}(e):"[object RegExp]"===v(e)))}function _e(e,r,t){if(!l(e))throw new TypeError(Q("invalid argument. First argument must be a string. Value: `%s`.",e));if(l(r))r=function(e){var r,t;if(!l(e))throw new TypeError(Q("invalid argument. Must provide a regular expression string. Value: `%s`.",e));if("/"===e[0])for(t=e.length-1;t>=0&&"/"!==e[t];t--);return void 0===t||t<=0?e.replace(Y,"\\$&"):(r=(r=e.substring(1,t)).replace(Y,"\\$&"),e=e[0]+r+e.substring(t))}(r),r=new RegExp(r,"g");else if(!je(r))throw new TypeError(Q("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",r));if(!l(t)&&"function"!==we(t))throw new TypeError(Q("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return e.replace(r,t)}var xe=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var Se=/\s+/g,Te=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,ke=/([a-z0-9])([A-Z])/g;return function(e){if(!l(e))throw new TypeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("0h93N",e));return e=_e(e,Te," "),e=function(e){if(!l(e))throw new TypeError(Q("invalid argument. Must provide a string. Value: `%s`.",e));return _e(e,xe,"$1")}(e=_e(e,ke,"$1 $2")),function(e){if(!l(e))throw new TypeError(Q("invalid argument. Must provide a string. Value: `%s`.",e));return e.toUpperCase()}(e=_e(e,Se,"_"))}}));
//# sourceMappingURL=browser.js.map
