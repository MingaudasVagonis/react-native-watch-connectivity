(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),o=(n(0),n(125)),a={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},s={id:"troubleshooting",title:"Troubleshooting",description:"Apple's iOS/iWatch simulator integration is really quite buggy. I strongly suggest using real devices instead.",source:"@site/docs/troubleshooting.md",permalink:"/react-native-watch-connectivity/docs/troubleshooting",editUrl:"https://github.com/mtford90/react-native-watch-connectivity.github.io/edit/master/docs/troubleshooting.md",sidebar_label:"Troubleshooting",sidebar:"someSidebar",previous:{title:"Events",permalink:"/react-native-watch-connectivity/docs/guides-events"},next:{title:"Messages",permalink:"/react-native-watch-connectivity/docs/messages"}},c=[{value:"Messages are not being received on the simulator",id:"messages-are-not-being-received-on-the-simulator",children:[]},{value:"Watch remains unreachable on the simulator",id:"watch-remains-unreachable-on-the-simulator",children:[]},{value:"Watch app does not receive user info or application context in the simulator",id:"watch-app-does-not-receive-user-info-or-application-context-in-the-simulator",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Apple's iOS/iWatch simulator integration is really quite buggy. I strongly suggest using real devices instead."),Object(o.b)("h2",{id:"messages-are-not-being-received-on-the-simulator"},"Messages are not being received on the simulator"),Object(o.b)("p",null,"Note that communication between the iOS simulator and Apple Watch simulator can be very slow - it's much faster when using actual devices. I've seen response times of up to 2 minutes when using the simulator."),Object(o.b)("h2",{id:"watch-remains-unreachable-on-the-simulator"},"Watch remains unreachable on the simulator"),Object(o.b)("p",null,"Apple's dodgy watchos/ios simulator setup strikes again. If you keep reinstalling each app, it will eventually work. Better to use real devices."),Object(o.b)("h2",{id:"watch-app-does-not-receive-user-info-or-application-context-in-the-simulator"},"Watch app does not receive user info or application context in the simulator"),Object(o.b)("p",null,"There's a bug within Apple's simulator setup that can cause issues in iOS 13/watchOS6+ whereby the watch app's WCSessionDelegate does not fire ",Object(o.b)("inlineCode",{parentName:"p"},"didReceiveUserInfo"),". No solution for this as of yet until Apple fixes this problem. Either use real devices or else downgrade iOS/watchOS"))}u.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(a,".").concat(b)]||p[b]||h[b]||o;return n?i.a.createElement(d,s(s({ref:t},l),{},{components:n})):i.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);