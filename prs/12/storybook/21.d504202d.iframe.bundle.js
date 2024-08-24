"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[21],{"./src/fixtures/currentUserFixtures.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>currentUserFixtures,x:()=>apiCurrentUserFixtures});const apiCurrentUserFixtures={adminUser:{user:{id:1,email:"phtcon@ucsb.edu",googleSub:"115856948234298493496",pictureUrl:"https://lh3.googleusercontent.com/-bQynVrzVIrU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmkGuVsELD1ZeV5iDUAUfe6_K-p8w/s96-c/photo.jpg",fullName:"Phill Conrad",givenName:"Phill",familyName:"Conrad",emailVerified:!0,locale:"en",hostedDomain:"ucsb.edu",admin:!0},roles:[{authority:"ROLE_MEMBER"},{authority:"SCOPE_openid"},{authority:"SCOPE_https://www.googleapis.com/auth/userinfo.profile"},{authority:"SCOPE_https://www.googleapis.com/auth/userinfo.email"},{authority:"ROLE_USER",attributes:{sub:"115856948234298493496",name:"Phill Conrad",given_name:"Phill",family_name:"Conrad",picture:"https://lh3.googleusercontent.com/a/AATXAJyxrU2gDahCiNe4ampVZlv5176Jo0F0PG3KyYgk=s96-c",email:"phtcon@ucsb.edu",email_verified:!0,locale:"en",hd:"ucsb.edu"}},{authority:"ROLE_ADMIN"}]},userOnly:{user:{id:2,email:"pconrad.cis@gmail.com",googleSub:"102656447703889917227",pictureUrl:"https://lh3.googleusercontent.com/a-/AOh14GhpDBUt8eCEqiRT45hrFbcimsX_h1ONn0dc3HV8Bp8=s96-c",fullName:"Phillip Conrad",givenName:"Phillip",familyName:"Conrad",emailVerified:!0,locale:"en",hostedDomain:null,admin:!1},roles:[{authority:"SCOPE_openid"},{authority:"ROLE_USER",attributes:{sub:"102656447703889917227",name:"Phillip Conrad",given_name:"Phillip",family_name:"Conrad",picture:"https://lh3.googleusercontent.com/a-/AOh14GhpDBUt8eCEqiRT45hrFbcimsX_h1ONn0dc3HV8Bp8=s96-c",email:"pconrad.cis@gmail.com",email_verified:!0,locale:"en"}},{authority:"SCOPE_https://www.googleapis.com/auth/userinfo.profile"},{authority:"SCOPE_https://www.googleapis.com/auth/userinfo.email"}]},missingRolesToTestErrorHandling:{user:{id:2,email:"pconrad.cis@gmail.com",googleSub:"102656447703889917227",pictureUrl:"https://lh3.googleusercontent.com/a-/AOh14GhpDBUt8eCEqiRT45hrFbcimsX_h1ONn0dc3HV8Bp8=s96-c",fullName:"Phillip Conrad",givenName:"Phillip",familyName:"Conrad",emailVerified:!0,locale:"en",hostedDomain:null,admin:!1}}},currentUserFixtures={adminUser:{loggedIn:!0,root:{...apiCurrentUserFixtures.adminUser,rolesList:["ROLE_MEMBER","SCOPE_openid","SCOPE_https://www.googleapis.com/auth/userinfo.profile","SCOPE_https://www.googleapis.com/auth/userinfo.email","ROLE_USER","ROLE_ADMIN"]}},userOnly:{loggedIn:!0,root:{...apiCurrentUserFixtures.userOnly,rolesList:["SCOPE_openid","ROLE_USER","SCOPE_https://www.googleapis.com/auth/userinfo.profile","SCOPE_https://www.googleapis.com/auth/userinfo.email"]}},notLoggedIn:{loggedIn:!1,root:{}}}},"./src/main/utils/currentUser.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Wn:()=>useLogout,hf:()=>hasRole,iZ:()=>useCurrentUser});var react_query__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-query/es/index.js"),axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/axios/lib/axios.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js");function useCurrentUser(){let rolesList=["ERROR_GETTING_ROLES"];return(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)("current user",(async()=>{try{const response=await axios__WEBPACK_IMPORTED_MODULE_1__.A.get("/api/currentUser");try{rolesList=response.data.roles.map((r=>r.authority))}catch(e){console.error("Error getting roles: ",e)}return response.data={...response.data,rolesList},{loggedIn:!0,root:response.data}}catch(e){console.error("Error invoking axios.get: ",e)}}),{initialData:{loggedIn:!1,root:null,initialData:!0}})}function useLogout(){const queryClient=(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)(),navigate=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Zp)();return(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)((async()=>{await axios__WEBPACK_IMPORTED_MODULE_1__.A.post("/logout"),await queryClient.resetQueries("current user",{exact:!0}),navigate("/")}))}function hasRole(currentUser,role){var _currentUser$data,_currentUser$data$roo,_currentUser$root,_currentUser$root$rol;return null!=currentUser&&(null!=currentUser&&null!==(_currentUser$data=currentUser.data)&&void 0!==_currentUser$data&&null!==(_currentUser$data$roo=_currentUser$data.root)&&void 0!==_currentUser$data$roo&&_currentUser$data$roo.rolesList?currentUser.data.root.rolesList.includes(role):null===(_currentUser$root=currentUser.root)||void 0===_currentUser$root||null===(_currentUser$root$rol=_currentUser$root.rolesList)||void 0===_currentUser$root$rol?void 0:_currentUser$root$rol.includes(role))}},"./src/main/utils/useBackend.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>useBackend,p:()=>useBackendMutation});var react_query__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-query/es/index.js"),axios__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/axios/lib/axios.js"),react_toastify__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-toastify/dist/react-toastify.esm.mjs");function useBackend(queryKey,axiosParameters,initialData){return(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)(queryKey,(async()=>{try{return(await(0,axios__WEBPACK_IMPORTED_MODULE_2__.A)(axiosParameters)).data}catch(e){const errorMessage=`Error communicating with backend via ${axiosParameters.method} on ${axiosParameters.url}`;throw(0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.oR)(errorMessage),console.error(errorMessage,e),e}}),{initialData})}const wrappedParams=async params=>{try{return await(await(0,axios__WEBPACK_IMPORTED_MODULE_2__.A)(params)).data}catch(rejectedValue){throw error=rejectedValue,console.error("Axios Error:",error),(0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.oR)(`Axios Error: ${error}`),rejectedValue}var error};function useBackendMutation(objectToAxiosParams,useMutationParams){let queryKey=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const queryClient=(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();return(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)((object=>wrappedParams(objectToAxiosParams(object))),{onError:data=>{(0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.oR)(`${data}`)},onSettled:()=>{null!==queryKey&&queryClient.invalidateQueries(queryKey)},retry:!1,...useMutationParams})}},"./node_modules/msw/lib/core/index.mjs":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lib=__webpack_require__("./node_modules/outvariant/lib/index.mjs"),devUtils=__webpack_require__("./node_modules/msw/lib/core/utils/internal/devUtils.mjs");!function checkGlobals(){(0,lib.V1)("undefined"!=typeof URL,devUtils.J.formatMessage('Global "URL" class is not defined. This likely means that you\'re running MSW in an environment that doesn\'t support all Node.js standard API (e.g. React Native). If that\'s the case, please use an appropriate polyfill for the "URL" class, like "react-native-url-polyfill".'))}()},"./node_modules/react-toastify/dist/react-toastify.esm.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{oR:()=>B});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const c=e=>"number"==typeof e&&!isNaN(e),d=e=>"string"==typeof e,u=e=>"function"==typeof e,m=e=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(e)||d(e)||u(e)||c(e);function g(t){let{enter:a,exit:r,appendPosition:i=!1,collapse:l=!0,collapseDuration:c=300}=t;return function(t){let{children:d,position:u,preventExitTransition:p,done:m,nodeRef:g,isIn:y,playToast:v}=t;const h=i?`${a}--${u}`:a,T=i?`${r}--${u}`:r,E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{const e=g.current,t=h.split(" "),n=o=>{o.target===g.current&&(v(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===E.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const e=g.current,t=()=>{e.removeEventListener("animationend",t),l?function f(e,t,n){void 0===n&&(n=300);const{scrollHeight:o,style:s}=e;requestAnimationFrame((()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${n}ms`,requestAnimationFrame((()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)}))}))}(e,m,c):m()};y||(p?t():(E.current=1,e.className+=` ${T}`,e.addEventListener("animationend",t)))}),[y]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,d)}}const v=new Map;let h=[];const T=new Set,b=()=>v.size>0;function I(e,t){var n;if(t)return!(null==(n=v.get(t))||!n.isToastActive(e));let o=!1;return v.forEach((t=>{t.isToastActive(e)&&(o=!0)})),o}function _(e,t){m(e)&&(b()||h.push({content:e,options:t}),v.forEach((n=>{n.buildToast(e,t)})))}function C(e,t){v.forEach((n=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)}))}let w=1;const k=()=>""+w++;function P(e){return e&&(d(e.toastId)||c(e.toastId))?e.toastId:k()}function M(e,t){return _(e,t),t.toastId}function x(e,t){return{...t,type:t&&t.type||e,toastId:P(t)}}function A(e){return(t,n)=>M(t,x(e,n))}function B(e,t){return M(e,x("default",t))}B.loading=(e,t)=>M(e,x("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),B.promise=function(e,t,n){let o,{pending:s,error:a,success:r}=t;s&&(o=d(s)?B.loading(s,n):B.loading(s.render,{...n,...s}));const i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,s)=>{if(null==t)return void B.dismiss(o);const a={type:e,...i,...n,data:s},r=d(t)?{render:t}:t;return o?B.update(o,{...a,...r}):B(r.render,{...a,...r}),s},c=u(e)?e():e;return c.then((e=>l("success",r,e))).catch((e=>l("error",a,e))),c},B.success=A("success"),B.info=A("info"),B.error=A("error"),B.warning=A("warning"),B.warn=B.warning,B.dark=(e,t)=>M(e,x("default",{theme:"dark",...t})),B.dismiss=function(e){!function(e){var t;if(b()){if(null==e||d(t=e)||c(t))v.forEach((t=>{t.removeToast(e)}));else if(e&&("containerId"in e||"id"in e)){const t=v.get(e.containerId);t?t.removeToast(e.id):v.forEach((t=>{t.removeToast(e.id)}))}}else h=h.filter((t=>null!=e&&t.options.toastId!==e))}(e)},B.clearWaitingQueue=function(e){void 0===e&&(e={}),v.forEach((t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()}))},B.isActive=I,B.update=function(e,t){void 0===t&&(t={});const n=((e,t)=>{var n;let{containerId:o}=t;return null==(n=v.get(o||1))?void 0:n.toasts.get(e)})(e,t);if(n){const{props:o,content:s}=n,a={delay:100,...o,...t,toastId:t.toastId||e,updateId:k()};a.toastId!==e&&(a.staleId=e);const r=a.render||s;delete a.render,M(r,a)}},B.done=e=>{B.update(e,{progress:1})},B.onChange=function(e){return T.add(e),()=>{T.delete(e)}},B.play=e=>C(!0,e),B.pause=e=>C(!1,e);"undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;const S=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}};g(S("bounce",!0)),g(S("slide",!0)),g(S("zoom")),g(S("flip"))}}]);