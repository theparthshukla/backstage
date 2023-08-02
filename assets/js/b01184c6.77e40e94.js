/*! For license information please see b01184c6.77e40e94.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[742922],{721852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(824246),o=n(511151);const i={id:"plugin-jenkins.jenkinsclient.getbuild",title:"JenkinsClient.getBuild()",description:"API reference for JenkinsClient.getBuild()"},u=void 0,c={unversionedId:"reference/plugin-jenkins.jenkinsclient.getbuild",id:"reference/plugin-jenkins.jenkinsclient.getbuild",title:"JenkinsClient.getBuild()",description:"API reference for JenkinsClient.getBuild()",source:"@site/../docs/reference/plugin-jenkins.jenkinsclient.getbuild.md",sourceDirName:"reference",slug:"/reference/plugin-jenkins.jenkinsclient.getbuild",permalink:"/docs/reference/plugin-jenkins.jenkinsclient.getbuild",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-jenkins.jenkinsclient.getbuild.md",tags:[],version:"current",frontMatter:{id:"plugin-jenkins.jenkinsclient.getbuild",title:"JenkinsClient.getBuild()",description:"API reference for JenkinsClient.getBuild()"}},s={},l=[{value:"Parameters",id:"parameters",level:2}];function a(e){const t=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-jenkins",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-jenkins"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-jenkins.jenkinsclient",children:(0,r.jsx)(t.code,{children:"JenkinsClient"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-jenkins.jenkinsclient.getbuild",children:(0,r.jsx)(t.code,{children:"getBuild"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.b,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"getBuild(options: {\n        entity: CompoundEntityRef;\n        jobFullName: string;\n        buildNumber: string;\n    }): Promise<Build>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"options"}),(0,r.jsxs)(t.td,{children:["{ entity: ",(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.compoundentityref",children:"CompoundEntityRef"}),"; jobFullName: string; buildNumber: string; }"]}),(0,r.jsx)(t.td,{})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.b,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<Build>"})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,u,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in i=Object(arguments[s]))n.call(i,l)&&(c[l]=i[l]);if(t){u=t(i);for(var a=0;a<u.length;a++)r.call(i,u[a])&&(c[u[a]]=i[u[a]])}}return c}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,i={},l=null,a=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)c.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:a,props:i,_owner:u.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var u=60109,c=60110,s=60112;t.Suspense=60113;var l=60115,a=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),u=f("react.provider"),c=f("react.context"),s=f("react.forward_ref"),t.Suspense=f("react.suspense"),l=f("react.memo"),a=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function j(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}function g(){}function m(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||y}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=j.prototype;var b=m.prototype=new g;b.constructor=m,r(b,j.prototype),b.isPureReactComponent=!0;var v={current:null},k=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,i={},u=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)k.call(t,r)&&!_.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var l=Array(s),a=0;a<s;a++)l[a]=arguments[a+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:v.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return u=u(s=e),e=""===r?"."+w(s,0):r,Array.isArray(u)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),S(u,t,n,"",(function(e){return e}))):null!=u&&(C(u)&&(u=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,n+(!u.key||s&&s.key===u.key?"":(""+u.key).replace(O,"$&/")+"/")+e)),t.push(u)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var a=r+w(c=e[l],l);s+=S(c,t,n,a,u)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),l=0;!(c=e.next()).done;)s+=S(c=c.value,t,n,a=r+w(c,l++),u);else if("object"===c)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function E(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function $(){var e=R.current;if(null===e)throw Error(p(321));return e}var I={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error(p(143));return e}},t.Component=j,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var i=r({},e.props),u=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=v.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)k.call(t,a)&&!_.hasOwnProperty(a)&&(i[a]=void 0===t[a]&&void 0!==l?l[a]:t[a])}var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){l=Array(a);for(var f=0;f<a;f++)l[f]=arguments[f+2];i.children=l}return{$$typeof:o,type:e.type,key:u,ref:c,props:i,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:a,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return $().useCallback(e,t)},t.useContext=function(e,t){return $().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return $().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return $().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return $().useLayoutEffect(e,t)},t.useMemo=function(e,t){return $().useMemo(e,t)},t.useReducer=function(e,t,n){return $().useReducer(e,t,n)},t.useRef=function(e){return $().useRef(e)},t.useState=function(e){return $().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const u={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||u:i(e),r.createElement(o.Provider,{value:c},t)}}}]);