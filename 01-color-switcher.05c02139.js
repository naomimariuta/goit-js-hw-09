var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,f=u||a||Function("return this")(),c=Object.prototype.toString,l=Math.max,d=Math.min,s=function(){return f.Date.now()};function b(t,e,n){var o,i,r,u,a,f,c=0,b=!1,y=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,c=e,u=t.apply(r,n)}function h(t){return c=t,a=setTimeout(T,e),b?g(t):u}function j(t){var n=t-f;return void 0===f||n>=e||n<0||y&&t-c>=r}function T(){var t=s();if(j(t))return w(t);a=setTimeout(T,function(t){var n=e-(t-f);return y?d(n,r-(t-c)):n}(t))}function w(t){return a=void 0,m&&o?g(t):(o=i=void 0,u)}function O(){var t=s(),n=j(t);if(o=arguments,i=this,f=t,n){if(void 0===a)return h(f);if(y)return a=setTimeout(T,e),g(f)}return void 0===a&&(a=setTimeout(T,e)),u}return e=p(e)||0,v(n)&&(b=!!n.leading,r=(y="maxWait"in n)?l(p(n.maxWait)||0,e):r,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=i=a=void 0},O.flush=function(){return void 0===a?u:w(s())},O}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function p(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==c.call(t)}(t))return NaN;if(v(t)){var u="function"==typeof t.valueOf?t.valueOf():t;t=v(u)?u+"":u}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var a=o.test(t);return a||i.test(t)?r(t.slice(2),a?2:8):n.test(t)?NaN:+t}const y=document.querySelector("button[data-start]"),m=document.querySelector("button[data-stop]"),g=document.querySelector("body");let h;m.disabled=!0,y.addEventListener("click",(function(){h=setInterval((()=>{g.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),y.disabled=!0,m.disabled=!1})),m.addEventListener("click",(function(){clearInterval(h),m.disabled=!0,y.disabled=!1}));
//# sourceMappingURL=01-color-switcher.05c02139.js.map
