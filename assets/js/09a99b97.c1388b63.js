/*! For license information please see 09a99b97.c1388b63.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[38841],{521893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(824246),o=n(511151);const i={id:"locations",title:"GitHub Locations",sidebar_label:"Locations",description:"Integrating source code stored in GitHub into the Backstage catalog"},a=void 0,s={unversionedId:"integrations/github/locations",id:"integrations/github/locations",title:"GitHub Locations",description:"Integrating source code stored in GitHub into the Backstage catalog",source:"@site/../docs/integrations/github/locations.md",sourceDirName:"integrations/github",slug:"/integrations/github/locations",permalink:"/docs/integrations/github/locations",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/github/locations.md",tags:[],version:"current",frontMatter:{id:"locations",title:"GitHub Locations",sidebar_label:"Locations",description:"Integrating source code stored in GitHub into the Backstage catalog"},sidebar:"docs",previous:{title:"Discovery",permalink:"/docs/integrations/gerrit/discovery"},next:{title:"Discovery",permalink:"/docs/integrations/github/discovery"}},c={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Token scopes",id:"token-scopes",level:3},{value:"Authentication with GitHub Apps",id:"authentication-with-github-apps",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",h2:"h2",code:"code",pre:"pre",blockquote:"blockquote",ul:"ul",li:"li",h3:"h3"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The GitHub integration supports loading catalog entities from github.com or\nGitHub Enterprise. Entities can be added to\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/configuration",children:"static catalog configuration"}),",\nregistered with the\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog-import",children:"catalog-import"}),"\nplugin, or ",(0,r.jsx)(t.a,{href:"/docs/integrations/github/discovery",children:"discovered"})," from a GitHub organization. Users and\nGroups can also be ",(0,r.jsx)(t.a,{href:"/docs/integrations/github/org",children:"loaded from an organization"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.p,{children:["To use this integration, add configuration to your root ",(0,r.jsx)(t.code,{children:"app-config.yaml"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"integrations:\n  github:\n    - host: github.com\n      token: ${GITHUB_TOKEN}\n    - host: ghe.example.net\n      apiBaseUrl: https://ghe.example.net/api/v3\n      rawBaseUrl: https://ghe.example.net/raw\n      token: ${GHE_TOKEN}\n"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: A public GitHub provider is added automatically at startup for\nconvenience, so you only need to list it if you want to supply a\n",(0,r.jsx)(t.a,{href:"https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token",children:"token"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Directly under the ",(0,r.jsx)(t.code,{children:"github"})," key is a list of provider configurations, where you\ncan list the various GitHub-compatible providers you want to be able to fetch\ndata from. Each entry is a structure with up to four elements:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"host"})," (optional): The host of the location target that you want to match on.\nThe default host is ",(0,r.jsx)(t.code,{children:"github.com"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"token"})," (optional): An authentication token as expected by GitHub. If\nsupplied, it will be passed along with all calls to this provider, both API\nand raw. If it is not supplied, anonymous access will be used."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"apiBaseUrl"})," (optional): If you want to communicate using the APIv3 method\nwith this provider, specify the base URL for its endpoint here, with no\ntrailing slash. Specifically when the target is GitHub, you can leave it out\nto be inferred automatically. For a GitHub Enterprise installation, it is\ncommonly at ",(0,r.jsx)(t.code,{children:"https://api.<host>"})," or ",(0,r.jsx)(t.code,{children:"https://<host>/api/v3"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"rawBaseUrl"})," (optional): If you want to communicate using the raw HTTP method\nwith this provider, specify the base URL for its endpoint here, with no\ntrailing slash. Specifically when the target is public GitHub, you can leave\nit out to be inferred automatically. For a GitHub Enterprise installation, it\nis commonly at ",(0,r.jsx)(t.code,{children:"https://<host>/raw"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["You need to supply either ",(0,r.jsx)(t.code,{children:"apiBaseUrl"})," or ",(0,r.jsx)(t.code,{children:"rawBaseUrl"})," or both (except for\npublic GitHub, for which we can infer them). The ",(0,r.jsx)(t.code,{children:"apiBaseUrl"})," will always be\npreferred over the other if a ",(0,r.jsx)(t.code,{children:"token"})," is given, otherwise ",(0,r.jsx)(t.code,{children:"rawBaseUrl"})," will be\npreferred."]}),"\n",(0,r.jsx)(t.h3,{id:"token-scopes",children:"Token scopes"}),"\n",(0,r.jsx)(t.p,{children:"When creating a personal access token on GitHub, you must select scopes to\ndefine the level of access for the token. The scopes required vary depending on\nyour use of the integration:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Reading software components:\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"repo"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Reading organization data:\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"read:org"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"read:user"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"user:email"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Publishing software templates:\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"repo"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"workflow"})," (if templates include GitHub workflows)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"authentication-with-github-apps",children:"Authentication with GitHub Apps"}),"\n",(0,r.jsxs)(t.p,{children:["Alternatively for GitHub organizations, Backstage can use GitHub Apps for backend authentication. This\nhas higher rate limits, and a clearer authorization model. See ",(0,r.jsx)(t.a,{href:"/docs/integrations/github/github-apps",children:"github-apps"})," for\nhow to set this up."]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(s[u]=i[u]);if(t){a=t(i);for(var l=0;l<a.length;l++)r.call(i,a[l])&&(s[a[l]]=i[a[l]])}}return s}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:i,_owner:a.current}}t.jsx=u,t.jsxs=u},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,s=60110,c=60112;t.Suspense=60113;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),a=f("react.provider"),s=f("react.context"),c=f("react.forward_ref"),t.Suspense=f("react.suspense"),u=f("react.memo"),l=f("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function b(){}function m(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var v=m.prototype=new b;v.constructor=m,r(v,y.prototype),v.isPureReactComponent=!0;var j={current:null},x=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,i={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,r)&&!w.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:j.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return a=a(c=e),e=""===r?"."+E(c,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),S(a,t,n,"",(function(e){return e}))):null!=a&&(k(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),t.push(a)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=r+E(s=e[u],u);c+=S(s,t,n,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(s=e.next()).done;)c+=S(s=s.value,t,n,l=r+E(s,u++),a);else if("object"===s)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function C(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function H(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function P(){var e=R.current;if(null===e)throw Error(h(321));return e}var $={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(h(143));return e}},t.Component=y,t.PureComponent=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var i=r({},e.props),a=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=j.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)x.call(t,l)&&!w.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){u=Array(l);for(var f=0;f<l;f++)u[f]=arguments[f+2];i.children=u}return{$$typeof:o,type:e.type,key:a,ref:s,props:i,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:H}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return P().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,n){return P().useReducer(e,t,n)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||a:i(e),r.createElement(o.Provider,{value:s},t)}}}]);