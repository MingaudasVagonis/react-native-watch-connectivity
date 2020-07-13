(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{112:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(2),n=r(6),i=(r(0),r(125)),c={id:"api-reachability",title:"Reachability",sidebar_label:"Reachability"},o={id:"api-reachability",title:"Reachability",description:"subscribeToReachability",source:"@site/docs/api-reachability.md",permalink:"/react-native-watch-connectivity/docs/api-reachability",editUrl:"https://github.com/mtford90/react-native-watch-connectivity.github.io/edit/master/docs/api-reachability.md",sidebar_label:"Reachability",sidebar:"someSidebar",previous:{title:"Files",permalink:"/react-native-watch-connectivity/docs/files"},next:{title:"Watch State",permalink:"/react-native-watch-connectivity/docs/api-watch-state"}},l=[{value:"subscribeToReachability",id:"subscribetoreachability",children:[]},{value:"getReachability",id:"getreachability",children:[]}],b={rightToc:l};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"subscribetoreachability"},"subscribeToReachability"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import {subscribeToReachability} from 'react-native-watch-connectivity';\n\nconst unsubscribe = subscribeToReachability(reachable => {\n    console.log('reachable?', reachable);\n})\n\n// ...\n\nunsubscribe();\n")),Object(i.b)("h2",{id:"getreachability"},"getReachability"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import {getReachability} from 'react-native-watch-connectivity';\n\nconst reachable = await getReachability();\nconsole.log('reachable?', reachable);\n")))}u.isMDXComponent=!0},125:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),u=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},y=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(r),y=a,h=s["".concat(c,".").concat(y)]||s[y]||p[y]||i;return r?n.a.createElement(h,o(o({ref:t},b),{},{components:r})):n.a.createElement(h,o({ref:t},b))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<i;b++)c[b]=r[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);