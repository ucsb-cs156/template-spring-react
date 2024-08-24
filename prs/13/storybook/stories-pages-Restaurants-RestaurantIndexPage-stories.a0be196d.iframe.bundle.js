"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[399],{"./src/stories/pages/Restaurants/RestaurantIndexPage.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Empty:()=>Empty,ThreeItemsAdminUser:()=>ThreeItemsAdminUser,ThreeItemsOrdinaryUser:()=>ThreeItemsOrdinaryUser,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RestaurantIndexPage_stories});__webpack_require__("./node_modules/react/index.js");var currentUserFixtures=__webpack_require__("./src/fixtures/currentUserFixtures.js"),systemInfoFixtures=__webpack_require__("./src/fixtures/systemInfoFixtures.js"),restaurantFixtures=__webpack_require__("./src/fixtures/restaurantFixtures.js"),http=__webpack_require__("./node_modules/msw/lib/core/http.mjs"),HttpResponse=__webpack_require__("./node_modules/msw/lib/core/HttpResponse.mjs"),useBackend=__webpack_require__("./src/main/utils/useBackend.js"),BasicLayout=__webpack_require__("./src/main/layouts/BasicLayout/BasicLayout.js"),RestaurantTable=__webpack_require__("./src/main/components/Restaurants/RestaurantTable.js"),utils_currentUser=__webpack_require__("./src/main/utils/currentUser.js"),Button=__webpack_require__("./node_modules/react-bootstrap/esm/Button.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function RestaurantIndexPage(){const currentUser=(0,utils_currentUser.iZ)(),{data:restaurants,error:_error,status:_status}=(0,useBackend.O)(["/api/restaurants/all"],{method:"GET",url:"/api/restaurants/all"},[]);return(0,jsx_runtime.jsx)(BasicLayout.A,{children:(0,jsx_runtime.jsxs)("div",{className:"pt-2",children:[(()=>{if((0,utils_currentUser.hf)(currentUser,"ROLE_ADMIN"))return(0,jsx_runtime.jsx)(Button.A,{variant:"primary",href:"/restaurants/create",style:{float:"right"},children:"Create Restaurant"})})(),(0,jsx_runtime.jsx)("h1",{children:"Restaurants"}),(0,jsx_runtime.jsx)(RestaurantTable.A,{restaurants,currentUser})]})})}RestaurantIndexPage.__docgenInfo={description:"",methods:[],displayName:"RestaurantIndexPage"};const RestaurantIndexPage_stories={title:"pages/Restaurants/RestaurantIndexPage",component:RestaurantIndexPage},Template=()=>(0,jsx_runtime.jsx)(RestaurantIndexPage,{storybook:!0}),Empty=Template.bind({});Empty.parameters={msw:[http.L.get("/api/currentUser",(()=>HttpResponse.c.json(currentUserFixtures.x.userOnly,{status:200}))),http.L.get("/api/systemInfo",(()=>HttpResponse.c.json(systemInfoFixtures.c.showingNeither,{status:200}))),http.L.get("/api/restaurants/all",(()=>HttpResponse.c.json([],{status:200})))]};const ThreeItemsOrdinaryUser=Template.bind({});ThreeItemsOrdinaryUser.parameters={msw:[http.L.get("/api/currentUser",(()=>HttpResponse.c.json(currentUserFixtures.x.userOnly))),http.L.get("/api/systemInfo",(()=>HttpResponse.c.json(systemInfoFixtures.c.showingNeither))),http.L.get("/api/restaurants/all",(()=>HttpResponse.c.json(restaurantFixtures.o.threeRestaurants)))]};const ThreeItemsAdminUser=Template.bind({});ThreeItemsAdminUser.parameters={msw:[http.L.get("/api/currentUser",(()=>HttpResponse.c.json(currentUserFixtures.x.adminUser))),http.L.get("/api/systemInfo",(()=>HttpResponse.c.json(systemInfoFixtures.c.showingNeither))),http.L.get("/api/restaurants/all",(()=>HttpResponse.c.json(restaurantFixtures.o.threeRestaurants))),http.L.delete("/api/restaurants",(()=>HttpResponse.c.json({message:"Restaurant deleted successfully"},{status:200})))]};const __namedExportsOrder=["Empty","ThreeItemsOrdinaryUser","ThreeItemsAdminUser"];Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"() => <RestaurantIndexPage storybook={true} />",...Empty.parameters?.docs?.source}}},ThreeItemsOrdinaryUser.parameters={...ThreeItemsOrdinaryUser.parameters,docs:{...ThreeItemsOrdinaryUser.parameters?.docs,source:{originalSource:"() => <RestaurantIndexPage storybook={true} />",...ThreeItemsOrdinaryUser.parameters?.docs?.source}}},ThreeItemsAdminUser.parameters={...ThreeItemsAdminUser.parameters,docs:{...ThreeItemsAdminUser.parameters?.docs,source:{originalSource:"() => <RestaurantIndexPage storybook={true} />",...ThreeItemsAdminUser.parameters?.docs?.source}}}},"./src/fixtures/currentUserFixtures.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>currentUserFixtures,x:()=>apiCurrentUserFixtures});const apiCurrentUserFixtures={adminUser:{user:{id:1,email:"phtcon@ucsb.edu",googleSub:"115856948234298493496",pictureUrl:"https://lh3.googleusercontent.com/-bQynVrzVIrU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmkGuVsELD1ZeV5iDUAUfe6_K-p8w/s96-c/photo.jpg",fullName:"Phill Conrad",givenName:"Phill",familyName:"Conrad",emailVerified:!0,locale:"en",hostedDomain:"ucsb.edu",admin:!0},roles:[{authority:"ROLE_MEMBER"},{authority:"SCOPE_openid"},{authority:"SCOPE_https://www.googleapis.com/auth/userinfo.profile"},{authority:"SCOPE_https://www.googleapis.com/auth/userinfo.email"},{authority:"ROLE_USER",attributes:{sub:"115856948234298493496",name:"Phill Conrad",given_name:"Phill",family_name:"Conrad",picture:"https://lh3.googleusercontent.com/a/AATXAJyxrU2gDahCiNe4ampVZlv5176Jo0F0PG3KyYgk=s96-c",email:"phtcon@ucsb.edu",email_verified:!0,locale:"en",hd:"ucsb.edu"}},{authority:"ROLE_ADMIN"}]},userOnly:{user:{id:2,email:"pconrad.cis@gmail.com",googleSub:"102656447703889917227",pictureUrl:"https://lh3.googleusercontent.com/a-/AOh14GhpDBUt8eCEqiRT45hrFbcimsX_h1ONn0dc3HV8Bp8=s96-c",fullName:"Phillip Conrad",givenName:"Phillip",familyName:"Conrad",emailVerified:!0,locale:"en",hostedDomain:null,admin:!1},roles:[{authority:"SCOPE_openid"},{authority:"ROLE_USER",attributes:{sub:"102656447703889917227",name:"Phillip Conrad",given_name:"Phillip",family_name:"Conrad",picture:"https://lh3.googleusercontent.com/a-/AOh14GhpDBUt8eCEqiRT45hrFbcimsX_h1ONn0dc3HV8Bp8=s96-c",email:"pconrad.cis@gmail.com",email_verified:!0,locale:"en"}},{authority:"SCOPE_https://www.googleapis.com/auth/userinfo.profile"},{authority:"SCOPE_https://www.googleapis.com/auth/userinfo.email"}]},missingRolesToTestErrorHandling:{user:{id:2,email:"pconrad.cis@gmail.com",googleSub:"102656447703889917227",pictureUrl:"https://lh3.googleusercontent.com/a-/AOh14GhpDBUt8eCEqiRT45hrFbcimsX_h1ONn0dc3HV8Bp8=s96-c",fullName:"Phillip Conrad",givenName:"Phillip",familyName:"Conrad",emailVerified:!0,locale:"en",hostedDomain:null,admin:!1}}},currentUserFixtures={adminUser:{loggedIn:!0,root:{...apiCurrentUserFixtures.adminUser,rolesList:["ROLE_MEMBER","SCOPE_openid","SCOPE_https://www.googleapis.com/auth/userinfo.profile","SCOPE_https://www.googleapis.com/auth/userinfo.email","ROLE_USER","ROLE_ADMIN"]}},userOnly:{loggedIn:!0,root:{...apiCurrentUserFixtures.userOnly,rolesList:["SCOPE_openid","ROLE_USER","SCOPE_https://www.googleapis.com/auth/userinfo.profile","SCOPE_https://www.googleapis.com/auth/userinfo.email"]}},notLoggedIn:{loggedIn:!1,root:{}}}},"./src/fixtures/restaurantFixtures.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>restaurantFixtures});const restaurantFixtures={oneRestaurant:[{id:1,name:"The Habit",description:"Burgers and Fries"}],threeRestaurants:[{id:2,name:"Cristino's Bakery",description:"This place is takeout only.  It may look mostly like a bakery with Mexican pastries, but it also has amazing burritos and tacos"},{id:3,name:"Freebirds",description:"Burrito joint, and iconic Isla Vista location"},{id:4,name:"Ca' Dario Cucina Italiana",description:"White tablecloth Italian restaurant, with great pasta and pizza"}]}},"./src/fixtures/systemInfoFixtures.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>systemInfoFixtures});const systemInfoFixtures={showingBoth:{springH2ConsoleEnabled:!0,showSwaggerUILink:!0,oauthLogin:"/oauth2/authorization/google"},showingNeither:{springH2ConsoleEnabled:!1,showSwaggerUILink:!1,oauthLogin:"/oauth2/authorization/google"},oauthLoginUndefined:{springH2ConsoleEnabled:!1,showSwaggerUILink:!1}}},"./src/main/components/Nav/AppNavbar.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AppNavbar});var Navbar=__webpack_require__("./node_modules/react-bootstrap/esm/Navbar.js"),Container=__webpack_require__("./node_modules/react-bootstrap/esm/Container.js"),Nav=__webpack_require__("./node_modules/react-bootstrap/esm/Nav.js"),NavDropdown=__webpack_require__("./node_modules/react-bootstrap/esm/NavDropdown.js"),Button=__webpack_require__("./node_modules/react-bootstrap/esm/Button.js"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),utils_currentUser=__webpack_require__("./src/main/utils/currentUser.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function AppNavbarLocalhost(_ref){let{url}=_ref;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Navbar.A,{expand:"sm",bg:"warning",sticky:"top","data-testid":"AppNavbarLocalhost",children:(0,jsx_runtime.jsxs)(Container.A,{children:[(0,jsx_runtime.jsx)(Navbar.A.Brand,{href:"http://localhost:8080",children:"Warning"}),(0,jsx_runtime.jsx)(Navbar.A.Toggle,{}),(0,jsx_runtime.jsx)(Navbar.A.Collapse,{className:"justify-content-between",children:(0,jsx_runtime.jsx)(Nav.A,{className:"mr-auto text-center",children:(0,jsx_runtime.jsx)(Nav.A.Item,{className:"text-center",children:(0,jsx_runtime.jsxs)("p",{children:["Running on ",(0,jsx_runtime.jsx)("code",{children:url})," with no backend.",(0,jsx_runtime.jsx)("br",{}),"You probably want"," ",(0,jsx_runtime.jsx)("a",{href:"http://localhost:8080",children:"http://localhost:8080"})," ","instead."]})})})})]})})})}function AppNavbar(_ref){let{currentUser,systemInfo,doLogout,currentUrl=window.location.href}=_ref;var oauthLogin=(null==systemInfo?void 0:systemInfo.oauthLogin)||"/oauth2/authorization/google";return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(currentUrl.startsWith("http://localhost:3000")||currentUrl.startsWith("http://127.0.0.1:3000"))&&(0,jsx_runtime.jsx)(AppNavbarLocalhost,{url:currentUrl}),(0,jsx_runtime.jsx)(Navbar.A,{expand:"xl",variant:"dark",bg:"dark",sticky:"top","data-testid":"AppNavbar",children:(0,jsx_runtime.jsxs)(Container.A,{children:[(0,jsx_runtime.jsx)(Navbar.A.Brand,{as:dist.N_,to:"/",children:"Example"}),(0,jsx_runtime.jsx)(Navbar.A.Toggle,{}),(0,jsx_runtime.jsxs)(Nav.A,{className:"me-auto",children:[(null==systemInfo?void 0:systemInfo.springH2ConsoleEnabled)&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Nav.A.Link,{href:"/h2-console",children:"H2Console"})}),(null==systemInfo?void 0:systemInfo.showSwaggerUILink)&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Nav.A.Link,{href:"/swagger-ui/index.html",children:"Swagger"})})]}),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{}),(0,jsx_runtime.jsxs)(Navbar.A.Collapse,{className:"justify-content-between",children:[(0,jsx_runtime.jsxs)(Nav.A,{className:"mr-auto",children:[(0,utils_currentUser.hf)(currentUser,"ROLE_ADMIN")&&(0,jsx_runtime.jsx)(NavDropdown.A,{title:"Admin",id:"appnavbar-admin-dropdown","data-testid":"appnavbar-admin-dropdown",children:(0,jsx_runtime.jsx)(NavDropdown.A.Item,{href:"/admin/users",children:"Users"})}),currentUser&&currentUser.loggedIn?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Nav.A.Link,{as:dist.N_,to:"/restaurants",children:"Restaurants"}),(0,jsx_runtime.jsx)(Nav.A.Link,{as:dist.N_,to:"/ucsbdates",children:"UCSB Dates"}),(0,jsx_runtime.jsx)(Nav.A.Link,{as:dist.N_,to:"/placeholder",children:"Placeholder"})]}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})]}),(0,jsx_runtime.jsx)(Nav.A,{className:"ml-auto",children:currentUser&&currentUser.loggedIn?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Navbar.A.Text,{className:"me-3",as:dist.N_,to:"/profile",children:["Welcome, ",currentUser.root.user.email]}),(0,jsx_runtime.jsx)(Button.A,{onClick:doLogout,children:"Log Out"})]}):(0,jsx_runtime.jsx)(Button.A,{href:oauthLogin,children:"Log In"})})]})]})})]})}AppNavbarLocalhost.__docgenInfo={description:"",methods:[],displayName:"AppNavbarLocalhost"},AppNavbar.__docgenInfo={description:"",methods:[],displayName:"AppNavbar",props:{currentUrl:{defaultValue:{value:"window.location.href",computed:!0},required:!1}}}},"./src/main/components/OurTable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>OurTable,n:()=>ButtonColumn});var react_table__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-table/index.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-bootstrap/esm/Table.js"),react_bootstrap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-bootstrap/esm/Button.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js");function OurTable(_ref){let{columns,data,testid="testid"}=_ref;const{getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=(0,react_table__WEBPACK_IMPORTED_MODULE_0__.useTable)({columns,data},react_table__WEBPACK_IMPORTED_MODULE_0__.useSortBy);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.A,{...getTableProps(),striped:!0,bordered:!0,hover:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("thead",{children:headerGroups.map(((headerGroup,i)=>(0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("tr",{...headerGroup.getHeaderGroupProps(),"data-testid":`${testid}-header-group-${i}`,key:`${testid}-header-group-${i}`},headerGroup.headers.map((column=>(0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("th",{...column.getHeaderProps(column.getSortByToggleProps()),"data-testid":`${testid}-header-${column.id}`,key:`${testid}-header-${column.id}`},column.render("Header"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{"data-testid":`${testid}-header-${column.id}-sort-carets`,children:column.isSorted?column.isSortedDesc?" 🔽":" 🔼":""})))))))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tbody",{...getTableBodyProps(),children:rows.map((row=>{prepareRow(row);const rowTestId=`${testid}-row-${row.index}`;return(0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("tr",{...row.getRowProps(),"data-testid":rowTestId,key:rowTestId},row.cells.map(((cell,_index)=>{const testId=`${testid}-cell-row-${cell.row.index}-col-${cell.column.id}`;return(0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("td",{...cell.getCellProps(),"data-testid":testId,key:testId},cell.render("Cell"))})))}))})]})}function ButtonColumn(label,variant,callback,testid){return{Header:label,id:label,Cell:_ref2=>{let{cell}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.A,{variant,onClick:()=>callback(cell),"data-testid":`${testid}-cell-row-${cell.row.index}-col-${cell.column.id}-button`,children:label})}}}OurTable.__docgenInfo={description:"",methods:[],displayName:"OurTable",props:{testid:{defaultValue:{value:'"testid"',computed:!1},required:!1}}}},"./src/main/components/Restaurants/RestaurantTable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>RestaurantTable});__webpack_require__("./node_modules/react/index.js");var OurTable=__webpack_require__("./src/main/components/OurTable.js"),useBackend=__webpack_require__("./src/main/utils/useBackend.js"),react_toastify_esm=__webpack_require__("./node_modules/react-toastify/dist/react-toastify.esm.mjs");function onDeleteSuccess(message){console.log(message),(0,react_toastify_esm.oR)(message)}function cellToAxiosParamsDelete(cell){return{url:"/api/restaurants",method:"DELETE",params:{id:cell.row.values.id}}}var dist=__webpack_require__("./node_modules/react-router/dist/index.js"),utils_currentUser=__webpack_require__("./src/main/utils/currentUser.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function RestaurantTable(_ref){let{restaurants,currentUser,testIdPrefix="RestaurantTable"}=_ref;const navigate=(0,dist.Zp)(),editCallback=cell=>{navigate(`/restaurants/edit/${cell.row.values.id}`)},deleteMutation=(0,useBackend.p)(cellToAxiosParamsDelete,{onSuccess:onDeleteSuccess},["/api/restaurants/all"]),deleteCallback=async cell=>{deleteMutation.mutate(cell)},columns=[{Header:"id",accessor:"id"},{Header:"Name",accessor:"name"},{Header:"Description",accessor:"description"}];return(0,utils_currentUser.hf)(currentUser,"ROLE_ADMIN")&&(columns.push((0,OurTable.n)("Edit","primary",editCallback,testIdPrefix)),columns.push((0,OurTable.n)("Delete","danger",deleteCallback,testIdPrefix))),(0,jsx_runtime.jsx)(OurTable.A,{data:restaurants,columns,testid:testIdPrefix})}RestaurantTable.__docgenInfo={description:"",methods:[],displayName:"RestaurantTable",props:{testIdPrefix:{defaultValue:{value:'"RestaurantTable"',computed:!1},required:!1}}}},"./src/main/layouts/BasicLayout/BasicLayout.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BasicLayout});var Container=__webpack_require__("./node_modules/react-bootstrap/esm/Container.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Footer(){return(0,jsx_runtime.jsx)("footer",{className:"bg-light pt-3 pt-md-4 pb-4 pb-md-5","data-testid":"Footer",children:(0,jsx_runtime.jsx)(Container.A,{children:(0,jsx_runtime.jsxs)("p",{children:["This is a sample webapp using React with a Spring Boot backend. See the source code on"," ",(0,jsx_runtime.jsx)("a",{href:"https://github.com/ucsb-cs156/spring-react-template",children:"Github."})]})})})}Footer.__docgenInfo={description:"",methods:[],displayName:"Footer"};var AppNavbar=__webpack_require__("./src/main/components/Nav/AppNavbar.js"),utils_currentUser=__webpack_require__("./src/main/utils/currentUser.js"),es=__webpack_require__("./node_modules/react-query/es/index.js"),axios=__webpack_require__("./node_modules/axios/lib/axios.js");function BasicLayout(_ref){let{children}=_ref;const{data:currentUser}=(0,utils_currentUser.iZ)(),{data:systemInfo}=function useSystemInfo(){return(0,es.useQuery)("systemInfo",(async()=>{try{return(await axios.A.get("/api/systemInfo")).data}catch(e){return console.error("Error invoking axios.get: ",e),{}}}),{initialData:{initialData:!0,springH2ConsoleEnabled:!1,showSwaggerUILink:!1}})}(),doLogout=(0,utils_currentUser.Wn)().mutate;return(0,jsx_runtime.jsxs)("div",{className:"d-flex flex-column min-vh-100",children:[(0,jsx_runtime.jsx)(AppNavbar.A,{currentUser,systemInfo,doLogout}),(0,jsx_runtime.jsx)(Container.A,{expand:"xl",className:"pt-4 flex-grow-1",children}),(0,jsx_runtime.jsx)(Footer,{})]})}BasicLayout.__docgenInfo={description:"",methods:[],displayName:"BasicLayout"}},"./src/main/utils/currentUser.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Wn:()=>useLogout,hf:()=>hasRole,iZ:()=>useCurrentUser});var react_query__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-query/es/index.js"),axios__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/axios/lib/axios.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-router/dist/index.js");function useCurrentUser(){let rolesList=["ERROR_GETTING_ROLES"];return(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)("current user",(async()=>{try{const response=await axios__WEBPACK_IMPORTED_MODULE_1__.A.get("/api/currentUser");try{rolesList=response.data.roles.map((r=>r.authority))}catch(e){console.error("Error getting roles: ",e)}return response.data={...response.data,rolesList},{loggedIn:!0,root:response.data}}catch(e){console.error("Error invoking axios.get: ",e)}}),{initialData:{loggedIn:!1,root:null,initialData:!0}})}function useLogout(){const queryClient=(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)(),navigate=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Zp)();return(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)((async()=>{await axios__WEBPACK_IMPORTED_MODULE_1__.A.post("/logout"),await queryClient.resetQueries("current user",{exact:!0}),navigate("/")}))}function hasRole(currentUser,role){var _currentUser$data,_currentUser$data$roo,_currentUser$root,_currentUser$root$rol;return null!=currentUser&&(null!==(_currentUser$data=currentUser.data)&&void 0!==_currentUser$data&&null!==(_currentUser$data$roo=_currentUser$data.root)&&void 0!==_currentUser$data$roo&&_currentUser$data$roo.rolesList?currentUser.data.root.rolesList.includes(role):null===(_currentUser$root=currentUser.root)||void 0===_currentUser$root||null===(_currentUser$root$rol=_currentUser$root.rolesList)||void 0===_currentUser$root$rol?void 0:_currentUser$root$rol.includes(role))}},"./src/main/utils/useBackend.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>useBackend,p:()=>useBackendMutation});var react_query__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-query/es/index.js"),axios__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/axios/lib/axios.js"),react_toastify__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-toastify/dist/react-toastify.esm.mjs");function useBackend(queryKey,axiosParameters,initialData){return(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)(queryKey,(async()=>{try{return(await(0,axios__WEBPACK_IMPORTED_MODULE_2__.A)(axiosParameters)).data}catch(e){const errorMessage=`Error communicating with backend via ${axiosParameters.method} on ${axiosParameters.url}`;throw(0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.oR)(errorMessage),console.error(errorMessage,e),e}}),{initialData})}const wrappedParams=async params=>{try{return await(await(0,axios__WEBPACK_IMPORTED_MODULE_2__.A)(params)).data}catch(rejectedValue){throw error=rejectedValue,console.error("Axios Error:",error),(0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.oR)(`Axios Error: ${error}`),rejectedValue}var error};function useBackendMutation(objectToAxiosParams,useMutationParams){let queryKey=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const queryClient=(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();return(0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)((object=>wrappedParams(objectToAxiosParams(object))),{onError:data=>{(0,react_toastify__WEBPACK_IMPORTED_MODULE_1__.oR)(`${data}`)},onSettled:()=>{null!==queryKey&&queryClient.invalidateQueries(queryKey)},retry:!1,...useMutationParams})}}}]);