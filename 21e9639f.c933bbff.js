(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{106:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return f}));var n=t(2),o=t(6),a=(t(0),t(125)),i={id:"user-info",title:"User Info",sidebar_label:"User Info"},c={id:"user-info",title:"User Info",description:"transferUserInfo",source:"@site/docs/user-info.md",permalink:"/react-native-watch-connectivity/docs/user-info",editUrl:"https://github.com/mtford90/react-native-watch-connectivity.github.io/edit/master/docs/user-info.md",sidebar_label:"User Info",sidebar:"someSidebar",previous:{title:"Messages",permalink:"/react-native-watch-connectivity/docs/messages"},next:{title:"Application Context",permalink:"/react-native-watch-connectivity/docs/application-context"}},s=[{value:"transferUserInfo",id:"transferuserinfo",children:[]},{value:"transferCurrentComplicationUserInfo",id:"transfercurrentcomplicationuserinfo",children:[]}],u={rightToc:s};function f(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"transferuserinfo"},"transferUserInfo"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { transferUserInfo } from "react-native-watch-connectivity"\n\nconst userInfo = {key: "value"}; // Any number of key/value pairs\n\ntransferUserInfo(userInfo); \n')),Object(a.b)("h2",{id:"transfercurrentcomplicationuserinfo"},"transferCurrentComplicationUserInfo"),Object(a.b)("p",null,"Same as transferUserInfo but receives priority. Generally used to update information with complications presented on the watch face."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { transferCurrentComplicationUserInfo } from "react-native-watch-connectivity"\n\nconst userInfo = {key: "value"}; // Any number of key/value pairs\n\ntransferCurrentComplicationUserInfo(userInfo);\n')))}f.isMDXComponent=!0},125:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),f=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=f(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=f(t),m=n,b=l["".concat(i,".").concat(m)]||l[m]||p[m]||a;return t?o.a.createElement(b,c(c({ref:r},u),{},{components:t})):o.a.createElement(b,c({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);