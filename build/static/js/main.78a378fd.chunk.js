(this.webpackJsonpclubby=this.webpackJsonpclubby||[]).push([[0],{150:function(e,a,t){e.exports=t.p+"static/media/profile-cover.9992e0ee.jpg"},151:function(e,a,t){e.exports=t.p+"static/media/profile-picture-1.4d26e151.jpg"},152:function(e,a,t){e.exports=t.p+"static/media/profile-picture-2.487133c5.jpg"},153:function(e,a,t){e.exports=t.p+"static/media/profile-picture-4.ccd796b3.jpg"},169:function(e,a,t){e.exports=t(252)},174:function(e,a,t){},252:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(30),c=t.n(r),o=t(12),s=(t(174),t(175),t(176),t(8)),m=t(103),i=t(10),u={path:"/"},d={path:"/dashboard/overview"},p={path:"/transactions"},E={path:"/settings"},b={path:"/examples/sign-in"},g={path:"/sign-up"},f=t(7),h=t(6),y=t(262),N=t(263),x=t(148),v=t(272),w=t(264),j=t(56),O=t(274),k=t(149),C=t(24),I=t(74),S=t.n(I),T=t(9),A=t.n(T),_=function(e,a){return function(t){var n=new FormData;n.append("username",e),n.append("password",a),A.a.post("/token",n).then((function(e){var a={token:e.data.token_type+" "+e.data.access_token};A.a.defaults.headers.common.Authorization=a.token,t({type:"LOGIN",payload:a}),console.log("displatched baby")})).catch((function(e){alert("Oops... something went wrong! Try again"),console.log("[login.actions.js] loginAPI || Could not fetch login. Try again later.")}))}},L=function(){return function(e){A.a.get("/locationInfo").then((function(a){var t={address_id:a.data.address_id,capacity:a.data.capacity,opening_time:a.data.opening_time,closing_time:a.data.closing_time,location_name:a.data.name,organisation_id:a.data.organisation_id,location_id:a.data.id};e({type:"SET_LOCATION_INFO",payload:t})})).catch((function(e){console.log("[location.actions.js] getLocationInfoAPI || Could not put data in store. Try again later.")}))}};var P=Object(C.b)((function(e){return{token:e.login.login_data.token}}),{loginAPI:_,userInfoAPI:function(){return function(e){A.a.get("/me").then((function(a){console.dir(a.data),e({type:"USER_INFO",payload:a.data})})).catch((function(e){console.log("[userInfo.actions.js] loginAPI || Could not fetch user information. Try again later.")}))}},setLocationInfoInStoreAPI:L})((function(e){var a=l.a.useState(""),t=Object(s.a)(a,2),n=t[0],r=t[1],c=l.a.useState(""),m=Object(s.a)(c,2),u=m[0],p=m[1];return e.token?(e.userInfoAPI(),e.setLocationInfoInStoreAPI(),l.a.createElement(i.a,{to:d.path})):l.a.createElement("main",null,l.a.createElement("section",{className:"d-flex align-items-center my-5 mt-lg-6 mb-lg-5"},l.a.createElement(y.a,null,l.a.createElement(N.a,{className:"justify-content-center form-bg-image",style:{backgroundImage:"url(".concat(S.a,")")}},l.a.createElement(x.a,{xs:12,className:"d-flex align-items-center justify-content-center"},l.a.createElement("div",{className:"bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500"},l.a.createElement("div",{className:"text-center text-md-center mb-4 mt-md-0"},l.a.createElement("h3",{className:"mb-0"},"Sign in to Clubby!")),l.a.createElement(v.a,{className:"mt-4",style:{textAlign:"center"}},l.a.createElement(v.a.Group,{id:"email",className:"mb-4",style:{textAlign:"left"}},l.a.createElement(v.a.Label,null,"Your Email"),l.a.createElement(w.a,null,l.a.createElement(w.a.Text,null,l.a.createElement(f.a,{icon:h.m})),l.a.createElement(v.a.Control,{autoFocus:!0,required:!0,type:"email",placeholder:"example@company.com",onChange:function(e){return r(e.target.value)}}))),l.a.createElement(v.a.Group,null,l.a.createElement(v.a.Group,{id:"password",className:"mb-4",style:{textAlign:"left"}},l.a.createElement(v.a.Label,null,"Your Password"),l.a.createElement(w.a,null,l.a.createElement(w.a.Text,null,l.a.createElement(f.a,{icon:h.v})),l.a.createElement(v.a.Control,{required:!0,type:"password",placeholder:"Password",onChange:function(e){return p(e.target.value)}}))),l.a.createElement("div",{className:"d-flex justify-content-between align-items-center mb-4"},l.a.createElement(v.a.Check,{type:"checkbox"},l.a.createElement(j.a.Input,{id:"defaultCheck5",className:"me-2"}),l.a.createElement(j.a.Label,{htmlFor:"defaultCheck5",className:"mb-0"},"Remember me")),l.a.createElement(O.a.Link,{className:"small text-end"},"Lost password?"))),l.a.createElement(k.a,{onClick:function(){e.loginAPI(n,u)},variant:"secondary",className:"text-dark me-3"},"Sign in",l.a.createElement(f.a,{className:"d-none d-sm-inline ms-1"}))),l.a.createElement("div",{className:"d-flex justify-content-center align-items-center mt-4"},l.a.createElement("span",{className:"fw-normal"},"Not registered?",l.a.createElement(O.a.Link,{as:o.b,to:g.path,className:"fw-bold"}," Create account ")))))))))})),F=t(25),G=t.n(F),V=t(46),B=t(34),D=(t(277),t(265)),M=(t(278),t(11)),q=t(67),W=t.n(q),Y=t(68),z=t.n(Y),R=function(e){var a=e.data,t=[z()()];return l.a.createElement(W.a,{data:a,options:Object(M.a)(Object(M.a)({},{low:0,showArea:!0,fullWidth:!0,axisX:{position:"end",showGrid:!0},axisY:{showGrid:!1,showLabel:!1,labelInterpolationFnc:function(e){return"$".concat(e/1,"k")}}}),{},{plugins:t}),type:"Line",className:"ct-series-g ct-double-octave"})},U=function(e){var a=e.data,t=[z()()];return l.a.createElement(W.a,{data:a,options:Object(M.a)(Object(M.a)({},{low:0,showArea:!0,fullWidth:!1,axisX:{position:"end",showGrid:!0},axisY:{showGrid:!1,showLabel:!1,labelInterpolationFnc:function(e){return"$".concat(e/1,"k")}}}),{},{plugins:t}),type:"Line",className:"ct-series-g ct-major-tenth"})},H=function(e){var a=e.series,t=void 0===a?[]:a,n=e.donutWidth,r=function(e,a){return e+a},c={low:0,high:8,donutWidth:void 0===n?20:n,donut:!0,donutSolid:!0,fullWidth:!1,showLabel:!1,labelInterpolationFnc:function(e){return"".concat(Math.round(e/t.reduce(r)*100),"%")}},o=[z()()];return l.a.createElement(W.a,{data:{series:t},options:Object(M.a)(Object(M.a)({},c),{},{plugins:o}),type:"Pie",className:"ct-golden-section"})},J=t(31),$=t.n(J),X=t(150),K=t.n(X),Q=t(151),Z=t.n(Q),ee=t(152),ae=t.n(ee),te=t(153),ne=t.n(te),le=(Z.a,h.d,ae.a,h.k,$.a,h.d,ne.a,h.k,function(){return l.a.createElement(O.a,{border:"light",className:" p-0 mb-4"},l.a.createElement(O.a.Body,{className:"pb-5"},l.a.createElement(O.a.Title,null,"Your information"),l.a.createElement(v.a,{onSubmit:function(e){e.preventDefault(),window.location.reload()}},l.a.createElement(N.a,{className:"mb-3"},l.a.createElement(x.a,{md:6,className:"mb-3"},l.a.createElement(v.a.Group,{id:"firstName",style:{textAlign:"left"}},l.a.createElement(v.a.Label,null,"First Name"),l.a.createElement(v.a.Control,{type:"text",placeholder:"Enter your first name"}))),l.a.createElement(x.a,{md:6,className:"mb-3"},l.a.createElement(v.a.Group,{id:"lastName",style:{textAlign:"left"}},l.a.createElement(v.a.Label,null,"Last Name"),l.a.createElement(v.a.Control,{type:"text",placeholder:"Enter your last name"})))),l.a.createElement(N.a,{className:"mb-3"},l.a.createElement(x.a,{md:6,className:"mb-3"},l.a.createElement(v.a.Group,{id:"emal",style:{textAlign:"left"}},l.a.createElement(v.a.Label,null,"Email"),l.a.createElement(v.a.Control,{type:"email",placeholder:"name@company.com"}))),l.a.createElement(x.a,{md:6,className:"mb-3"},l.a.createElement(v.a.Group,{id:"emal",style:{textAlign:"left"}},l.a.createElement(v.a.Label,null,"Password"),l.a.createElement(v.a.Control,{type:"password",placeholder:"****"})))),l.a.createElement("div",{className:"mt-3",style:{textAlign:"center"}},l.a.createElement(k.a,{variant:"primary",type:"submit"},"Save")))))}),re=function(){return l.a.createElement(O.a,{border:"light",className:"text-center p-0 mb-4"},l.a.createElement("div",{style:{backgroundImage:"url(".concat(K.a,")")},className:"profile-cover rounded-top"}),l.a.createElement(O.a.Body,{className:"pb-5"},l.a.createElement(O.a.Img,{src:$.a,alt:"Neil Portrait",className:"user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4"}),l.a.createElement(O.a.Title,null,"<user name>"),l.a.createElement(O.a.Subtitle,{className:"fw-normal"},"<club name>"," "),l.a.createElement(O.a.Text,{className:"text-gray mb-4"},"<club location>")))};function ce(e){var a=Object(n.useState)("John"),t=Object(s.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)("Doe"),m=Object(s.a)(o,2),i=m[0],u=m[1],d=Object(n.useState)("johnie@sins.com"),p=Object(s.a)(d,2),E=p[0],b=p[1],g=Object(n.useState)("****"),f=Object(s.a)(g,2),h=f[0],y=f[1],w=Object(n.useState)("Bouncer"),j=Object(s.a)(w,2),C=j[0],I=j[1];return l.a.createElement(O.a,{border:"light",className:" p-0 mb-4"},l.a.createElement(O.a.Body,{className:"pb-5"},l.a.createElement(O.a.Title,null,"Create new user"),l.a.createElement(v.a,{onSubmit:function(e){e.preventDefault(),function(e,a,t,n,l){var r={first_name:e,last_name:a,email:t,password:n,user_type:l};A.a.post("/create_user",r).then((function(e){"User created"===e.data.message&&(alert("A new user has been created!"),window.location.reload())})).catch((function(e){422===e.response.status?alert(e.response.data.detail):alert("Something went wrong. Try again!"),console.log("[userInfo.actions.js] createNewUserAPI || Could not create new user. Try again later.")}))}(r,i,E,h,C)}},l.a.createElement(N.a,{className:"mb-3"},l.a.createElement(x.a,{md:6,className:"mb-3"},l.a.createElement(v.a.Group,{id:"firstName",style:{textAlign:"left"}},l.a.createElement(v.a.Label,null,"First Name"),l.a.createElement(v.a.Control,{required:!0,type:"text",placeholder:"Enter your first name",onChange:function(e){return c(e.target.value)}}))),l.a.createElement(x.a,{md:6,className:"mb-3"},l.a.createElement(v.a.Group,{id:"lastName",style:{textAlign:"left"}},l.a.createElement(v.a.Label,null,"Last Name"),l.a.createElement(v.a.Control,{required:!0,type:"text",placeholder:"Enter your last name",onChange:function(e){return u(e.target.value)}})))),l.a.createElement(N.a,{className:"mb-3"},l.a.createElement(x.a,{sm:4,className:"mb-3"},l.a.createElement(v.a.Group,{id:"email",style:{textAlign:"left"}},l.a.createElement(v.a.Label,null,"Email"),l.a.createElement(v.a.Control,{required:!0,type:"email",placeholder:"Enter your emailaddress",onChange:function(e){return b(e.target.value)}}))),l.a.createElement(x.a,{sm:4,className:"mb-3"},l.a.createElement(v.a.Group,{id:"password",style:{textAlign:"left"}},l.a.createElement(v.a.Label,null,"Password"),l.a.createElement(v.a.Control,{required:!0,type:"password",placeholder:"Enter your password",onChange:function(e){return y(e.target.value)}}))),l.a.createElement(x.a,{sm:4,className:"mb-3"},l.a.createElement(v.a.Group,{id:"usertype",style:{textAlign:"left"}},l.a.createElement(v.a.Label,null,"User Type"),l.a.createElement("br",null),l.a.createElement(v.a.Select,{required:!0,id:"state",onChange:function(e){return I(e.target.value)},defaultValue:"Bouncer"},l.a.createElement("option",{value:"Admin"},"Admin"),l.a.createElement("option",{value:"Manager"},"Manager"),l.a.createElement("option",{selected:!0,value:"Bouncer"},"Bouncer"))))),l.a.createElement("div",{className:"mt-3",style:{textAlign:"center"}},l.a.createElement(k.a,{variant:"primary",type:"submit"},"Create User")))))}function oe(e){var a=Object(n.useState)(0),t=Object(s.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(""),m=Object(s.a)(o,2),i=m[0],u=m[1],d=Object(n.useState)(""),p=Object(s.a)(d,2),E=p[0],b=p[1];function g(){return(g=Object(V.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("/locationInfo").then((function(e){c(e.data.capacity),u(e.data.opening_time),b(e.data.closing_time)})).catch((function(e){console.log("[TodayOverview.js] getLocationInfoAPI || Could not fetch data. Try again later.")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[]);return l.a.createElement(O.a,{border:"light",className:" p-0 mb-4"},l.a.createElement(O.a.Body,{className:"pb-5"},l.a.createElement(O.a.Title,null,"Location information"),l.a.createElement(v.a,{onSubmit:function(e){e.preventDefault(),function(e,a,t){var n={capacity:e,opening_time:a,closing_time:t};A.a.post("/locationInfo",n).catch((function(e){console.log("[location.actions.js] changeLocationCapacityAPI || Could not set location capacity. Try again later.")}))}(r,i,E),window.location.reload()}},l.a.createElement(N.a,{className:"mb-3"},l.a.createElement(x.a,{sm:6,className:"mb-3",style:{textAlign:"center"}},l.a.createElement(v.a.Group,{id:"capacity",style:{textAlign:"left"}},l.a.createElement(v.a.Label,null,"Opening time"),l.a.createElement(v.a.Control,{type:"time",defaultValue:i,onChange:function(e){return u(e.target.value)}}))),l.a.createElement(x.a,{sm:6,className:"mb-3",style:{textAlign:"center"}},l.a.createElement(v.a.Group,{id:"capacity",style:{textAlign:"left"}},l.a.createElement(v.a.Label,null,"Closing time"),l.a.createElement(v.a.Control,{type:"time",defaultValue:E,onChange:function(e){return b(e.target.value)}})))),l.a.createElement(N.a,{className:"mb-3"},l.a.createElement(x.a,{className:"mb-3",style:{textAlign:"center"}},l.a.createElement(v.a.Group,{id:"capacity",style:{textAlign:"left"}},l.a.createElement(v.a.Label,null,"Capacity"),l.a.createElement(v.a.Control,{type:"text",placeholder:"Current capacity: "+r,onChange:function(e){return c(e.target.value)}})))),l.a.createElement("div",{className:"mt-3",style:{textAlign:"center"}},l.a.createElement(k.a,{variant:"primary",type:"submit"},"Save")))))}var se=function(e){var a=e.icon,t=e.iconColor,n=e.category,r=e.title,c=e.period,o=e.percentage,s=e.comparison,m=o<0?h.a:h.c,i=o<0?"text-danger":"text-success";return l.a.createElement(O.a,{border:"light",className:"shadow-sm"},l.a.createElement(O.a.Body,null,l.a.createElement(N.a,{className:"d-block d-xl-flex align-items-center"},l.a.createElement(x.a,{xl:5,className:"text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0"},l.a.createElement("div",{className:"icon icon-shape icon-md icon-".concat(t," rounded me-4 me-sm-0")},l.a.createElement(f.a,{icon:a})),l.a.createElement("div",{className:"d-sm-none"},l.a.createElement("h5",null,n),l.a.createElement("h3",{className:"mb-1"},r))),l.a.createElement(x.a,{xs:12,xl:7,className:"px-xl-0"},l.a.createElement("div",{className:"d-none d-sm-block"},l.a.createElement("h5",null,n),l.a.createElement("h3",{className:"mb-1"},r)),l.a.createElement("div",{className:"small mt-2"},l.a.createElement(f.a,{icon:m,className:"".concat(i," me-1")}),l.a.createElement("span",null,l.a.createElement("span",{className:"".concat(i," fw-bold")},o,"%"," "),s),l.a.createElement("br",null),l.a.createElement("small",null,"Last change: ",c))))))},me=function(e){var a=e.title,t=e.data,n=void 0===t?[]:t,r=n.map((function(e){return e.value}));return l.a.createElement(O.a,{border:"light",className:"shadow-sm"},l.a.createElement(O.a.Body,null,l.a.createElement(N.a,{className:"d-block d-xl-flex align-items-center"},l.a.createElement(x.a,{xs:12,xl:5,className:"text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0"},l.a.createElement(H,{series:r})),l.a.createElement(x.a,{xs:12,xl:7,className:"px-xl-0"},l.a.createElement("h5",{className:"mb-3"},a),n.map((function(e){return l.a.createElement("h6",{key:"circle-element-".concat(e.id),className:"fw-normal text-gray"},l.a.createElement(f.a,{icon:e.icon,className:"icon icon-xs text-".concat(e.color," w-20 me-1")})," ".concat(e.label," "),"".concat(e.value,"%"))}))))))},ie=function(e){var a=e.title,t=e.percentage,n=t<0?h.a:h.c,r=t<0?"text-danger":"text-success";return l.a.createElement(O.a,{className:"bg-secondary-alt shadow-sm"},l.a.createElement(O.a.Header,{className:"d-flex flex-row align-items-center flex-0"},l.a.createElement("div",{className:"d-block"},l.a.createElement("h5",{className:"fw-normal mb-2"},a),l.a.createElement("small",{className:"fw-bold mt-2"},l.a.createElement("span",{className:"me-2"},"Yesterday"),l.a.createElement(f.a,{icon:n,className:"".concat(r," me-1")}),l.a.createElement("span",{className:r},t,"%"))),l.a.createElement("div",{className:"d-flex ms-auto"},l.a.createElement(k.a,{variant:"secondary",size:"sm",className:"me-2"},"Month"),l.a.createElement(k.a,{variant:"primary",size:"sm",className:"me-3"},"Week"))),l.a.createElement(O.a.Body,{className:"p-2"},l.a.createElement(R,{data:e.data})))},ue=function(e){var a=e.title,t=e.value,n=e.percentage,r=n<0?h.a:h.c,c=n<0?"text-danger":"text-success";return l.a.createElement(O.a,{className:"bg-secondary-alt shadow-sm"},l.a.createElement(O.a.Header,{className:"d-md-flex flex-row align-items-center flex-0"},l.a.createElement("div",{className:"d-block mb-3 mb-md-0"},l.a.createElement("h5",{className:"fw-normal mb-2"},a),l.a.createElement("h3",null,"$",t),l.a.createElement("small",{className:"fw-bold mt-2"},l.a.createElement("span",{className:"me-2"},"Yesterday"),l.a.createElement(f.a,{icon:r,className:"".concat(c," me-1")}),l.a.createElement("span",{className:c},n,"%"))),l.a.createElement("div",{className:"d-flex ms-auto"},l.a.createElement(k.a,{variant:"secondary",size:"sm",className:"me-2"},"Month"),l.a.createElement(k.a,{variant:"primary",size:"sm",className:"me-3"},"Week"))),l.a.createElement(O.a.Body,{className:"p-2"},l.a.createElement(U,{data:e.data})))},de=t(269),pe=[{id:1,label:"Desktop",value:60,color:"secondary",icon:h.l},{id:2,label:"Mobile Web",value:30,color:"primary",icon:h.r},{id:3,label:"Tablet Web",value:10,color:"tertiary",icon:h.t}];function Ee(e,a){return A.a.get("/presentVisitorsAtChange",{params:{opening_datetime:e,closing_datetime:a}}).then((function(e){return{labels:e.data.map((function(e){return new Date(e.timestamp).toLocaleTimeString()})),series:[e.data.map((function(e){return e.visitors_present}))]}})).catch((function(e){console.log("[statistics.actions.js] getPresentVisitorsAtChangeAPI || Could not fetch the data. Try again later.")}))}var be=Object(C.b)((function(e){return{userInfo:e.user.user_info,openingTime:e.location.location_info.opening_time,closingTime:e.location.location_info.closing_time}}),{loginAPI:_,setLocationInfoInStoreAPI:L})((function(e){var a=Object(n.useState)(0),t=Object(s.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(Object(de.a)(new Date,"hh:mm:ss")),m=Object(s.a)(o,2),i=m[0],u=m[1],d=Object(n.useState)(0),p=Object(s.a)(d,2),E=p[0],b=p[1],g=Object(n.useState)({}),f=Object(s.a)(g,2),y=f[0],v=f[1],w=Object(n.useState)(0),j=Object(s.a)(w,2),O=j[0],C=j[1];function I(e,a){return S.apply(this,arguments)}function S(){return(S=Object(V.a)(G.a.mark((function e(a,t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("/getPresentVisitors",{params:{opening_datetime:a,closing_datetime:t}}).then((function(e){c(e.data.count)})).catch((function(e){console.log("[TodayOverview.js] getPresentVisitorsAPI || Could not fetch data. Try again later.")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,a){return _.apply(this,arguments)}function _(){return(_=Object(V.a)(G.a.mark((function e(a,t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("/getLastVisitorsChange",{params:{opening_datetime:a,closing_datetime:t}}).then((function(e){var a=new Date(e.data.timestamp).toLocaleString();u(a)})).catch((function(e){console.log("[TodayOverview.js] getLastVisitorsChangeAPI || Could not fetch data. Try again later.")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,a){return P.apply(this,arguments)}function P(){return(P=Object(V.a)(G.a.mark((function e(a,t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("/getTotalVisitors",{params:{opening_datetime:a,closing_datetime:t}}).then((function(e){b(e.data.count)})).catch((function(e){console.log("[TodayOverview.js] getTotalVisitorsAPI || Could not fetch data. Try again later.")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){return B.apply(this,arguments)}function B(){return(B=Object(V.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("/currentOccupancyPercentage").then((function(e){C(e.data)})).catch((function(e){console.log("[TodayOverview.js] getCurrentOccupancyPercentageAPI || Could not fetch data. Try again later.")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){if(e.openingTime&&e.closingTime){var a=Object(de.a)(new Date,"Y-MM-dd")+" "+e.openingTime,t=new Date;t=Object(de.a)(t.setDate(t.getDate()+1),"Y-MM-dd")+" "+e.closingTime,Ee(a,t).then((function(e){v(e)})),I(a,t),T(a,t),L(a,t),F();var n=setInterval((function(){I(a,t),T(a,t),L(a,t),F(),Ee(a,t).then((function(e){v(e)}))}),1e4);return function(){return clearInterval(n)}}}),[e.openingTime,e.closingTime]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"},l.a.createElement("div",{className:"d-block mb-4 mb-md-0"},l.a.createElement("h4",null,"Today"),l.a.createElement("p",{className:"mb-0"},"This page shows insights about today.")),l.a.createElement("div",{className:"btn-toolbar mb-2 mb-md-0"},l.a.createElement(k.a,{variant:"outline-primary",size:"sm"},"Export"))),l.a.createElement(N.a,{className:"justify-content-md-center"},l.a.createElement(x.a,{xs:12,className:"mb-4 d-none d-sm-block"},l.a.createElement(ie,{title:"Visitors over time",data:y,percentage:10.57,period:i})),l.a.createElement(x.a,{xs:12,className:"mb-4 d-sm-none"},l.a.createElement(ue,{title:"Visitors over time",data:y,percentage:10.57,period:i})),l.a.createElement(x.a,{xs:12,sm:6,xl:4,className:"mb-4"},l.a.createElement(se,{category:"Current Visitors",title:r,period:i,percentage:18.2,icon:h.h,iconColor:"shape-secondary",comparison:"compared to average"})),l.a.createElement(x.a,{xs:12,sm:6,xl:4,className:"mb-4"},l.a.createElement(se,{category:"Occupancy",title:O+"%",period:i,percentage:28.4,icon:h.e,iconColor:"shape-tertiary"})),l.a.createElement(x.a,{xs:12,sm:6,xl:4,className:"mb-4"},l.a.createElement(se,{category:"Total Visitors",title:E,period:i,percentage:28.4,icon:h.e,iconColor:"shape-tertiary"}))))})),ge=t(266),fe=t(268);var he=Object(C.b)((function(e){return{}}),{})((function(e){var a={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],series:[[1,2,2,3,3,4,3]]};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"},l.a.createElement("div",{className:"d-block mb-4 mb-md-0"},l.a.createElement("h4",null,"Historical Analysis"),l.a.createElement("p",{className:"mb-0"},"This page shows insights about the data of the past.")),l.a.createElement("div",{className:"btn-toolbar mb-2 mb-md-0"},l.a.createElement(ge.a,null,l.a.createElement(k.a,{variant:"outline-primary",size:"sm"},"Share"),l.a.createElement(k.a,{variant:"outline-primary",size:"sm"},"Export")))),l.a.createElement(N.a,null,l.a.createElement(x.a,{xs:12,sm:6,xl:4,className:"mb-4"},l.a.createElement(se,{category:"Customers",title:"345k",period:"Feb 1 - Apr 1",percentage:18.2,icon:h.h,iconColor:"shape-secondary"})),l.a.createElement(x.a,{xs:12,sm:6,xl:4,className:"mb-4"},l.a.createElement(se,{category:"Revenue",title:"$43,594",period:"Feb 1 - Apr 1",percentage:28.4,icon:h.e,iconColor:"shape-tertiary"})),l.a.createElement(x.a,{xs:12,sm:6,xl:4,className:"mb-4"},l.a.createElement(me,{title:"Traffic Share",data:pe})),l.a.createElement(x.a,{xs:12,className:"mb-4 d-none d-sm-block"},l.a.createElement(ie,{title:"Sales Value",value:"10,567",percentage:10.57,data:a})),l.a.createElement(x.a,{xs:12,className:"mb-4 d-sm-none"},l.a.createElement(ue,{title:"Sales Value",value:"10,567",percentage:10.57,data:a}))),l.a.createElement(fe.a.Divider,{className:"my-3 border-indigo"}),l.a.createElement(N.a,null,l.a.createElement(x.a,{xs:12,sm:6,xl:4,className:"mb-4"},l.a.createElement(se,{category:"Customers",title:"345k",period:"Feb 1 - Apr 1",percentage:18.2,icon:h.h,iconColor:"shape-secondary"})),l.a.createElement(x.a,{xs:12,sm:6,xl:4,className:"mb-4"},l.a.createElement(se,{category:"Revenue",title:"$43,594",period:"Feb 1 - Apr 1",percentage:28.4,icon:h.e,iconColor:"shape-tertiary"})),l.a.createElement(x.a,{xs:12,sm:6,xl:4,className:"mb-4"},l.a.createElement(me,{title:"Traffic Share",data:pe}))))})),ye=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,null,l.a.createElement(x.a,{xs:12,xl:8},l.a.createElement(le,null),l.a.createElement(ce,null)),l.a.createElement(x.a,{xs:12,xl:4},l.a.createElement(N.a,null,l.a.createElement(x.a,{xs:12},l.a.createElement(re,{title:"Select profile photo",photo:$.a}),l.a.createElement(oe,null))))))},Ne=function(){return l.a.createElement("main",null,l.a.createElement("section",{className:"d-flex align-items-center my-5 mt-lg-6 mb-lg-5"},l.a.createElement(y.a,null,l.a.createElement("p",{className:"text-center"},l.a.createElement(O.a.Link,{as:o.b,to:d.path,className:"text-gray-700"},l.a.createElement(f.a,{icon:h.b,className:"me-2"})," Back to login")),l.a.createElement(N.a,{className:"justify-content-center form-bg-image",style:{backgroundImage:"url(".concat(S.a,")")}},l.a.createElement(x.a,{xs:12,className:"d-flex align-items-center justify-content-center"},l.a.createElement("div",{className:"mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500"},l.a.createElement("div",{className:"text-center text-md-center mb-4 mt-md-0"},l.a.createElement("h3",{className:"mb-0"},"Create an account")),l.a.createElement(v.a,{className:"mt-4"},l.a.createElement(v.a.Group,{id:"email",className:"mb-4"},l.a.createElement(v.a.Label,null,"Your Email"),l.a.createElement(w.a,null,l.a.createElement(w.a.Text,null,l.a.createElement(f.a,{icon:h.m})),l.a.createElement(v.a.Control,{autoFocus:!0,required:!0,type:"email",placeholder:"example@company.com"}))),l.a.createElement(v.a.Group,{id:"password",className:"mb-4"},l.a.createElement(v.a.Label,null,"Your Password"),l.a.createElement(w.a,null,l.a.createElement(w.a.Text,null,l.a.createElement(f.a,{icon:h.v})),l.a.createElement(v.a.Control,{required:!0,type:"password",placeholder:"Password"}))),l.a.createElement(v.a.Group,{id:"confirmPassword",className:"mb-4"},l.a.createElement(v.a.Label,null,"Confirm Password"),l.a.createElement(w.a,null,l.a.createElement(w.a.Text,null,l.a.createElement(f.a,{icon:h.v})),l.a.createElement(v.a.Control,{required:!0,type:"password",placeholder:"Confirm Password"}))),l.a.createElement(j.a,{type:"checkbox",className:"d-flex mb-4"},l.a.createElement(j.a.Input,{required:!0,id:"terms",className:"me-2"}),l.a.createElement(j.a.Label,{htmlFor:"terms"},"I agree to the",l.a.createElement(o.b,{to:u.path},"terms and conditions"))),l.a.createElement(k.a,{variant:"primary",type:"submit",className:"w-100"},"Sign up")),l.a.createElement("div",{className:"mt-3 mb-4 text-center"},l.a.createElement("span",{className:"fw-normal"},"or")),l.a.createElement("div",{className:"d-flex justify-content-center my-4"},l.a.createElement(k.a,{variant:"outline-light",className:"btn-icon-only btn-pill text-facebook me-2"},l.a.createElement(f.a,{icon:B.c})),l.a.createElement(k.a,{variant:"outline-light",className:"btn-icon-only btn-pill text-twitter me-2"},l.a.createElement(f.a,{icon:B.f})),l.a.createElement(k.a,{variant:"outline-light",className:"btn-icon-only btn-pil text-dark"},l.a.createElement(f.a,{icon:B.d}))),l.a.createElement("div",{className:"d-flex justify-content-center align-items-center mt-4"},l.a.createElement("span",{className:"fw-normal"},"Already have an account?",l.a.createElement(O.a.Link,{as:o.b,to:b.path,className:"fw-bold"}," Login here ")))))))))},xe=t(166),ve=t(276),we=t(275),je=t(267),Oe=t(271),ke=t(64),Ce=t.n(ke),Ie=function(){var e=Object(i.g)(),a=e.pathname,t=Object(n.useState)(!1),r=Object(s.a)(t,2),c=r[0],m=r[1],u=c?"show":"",b=function(){return m(!c)},g=function(e){var t=e.title,n=e.link,r=e.external,c=e.target,s=e.icon,i=e.image,u=e.badgeText,d=e.badgeBg,p=void 0===d?"secondary":d,E=e.badgeColor,b=void 0===E?"primary":E,g=u?"d-flex justify-content-start align-items-center justify-content-between":"",h=n===a?"active":"",y=r?{href:n}:{as:o.b,to:n};return l.a.createElement(we.a.Item,{className:h,onClick:function(){return m(!1)}},l.a.createElement(we.a.Link,Object.assign({},y,{target:c,className:g}),l.a.createElement("span",null,s?l.a.createElement("span",{className:"sidebar-icon"},l.a.createElement(f.a,{icon:s})," "):null,i?l.a.createElement(D.a,{src:i,width:20,height:20,className:"sidebar-icon svg-icon"}):null,l.a.createElement("span",{className:"sidebar-text"},t)),u?l.a.createElement(je.a,{pill:!0,bg:p,text:b,className:"badge-md notification-count ms-2"},u):null))},y=function(){window.localStorage.clear(),window.location.reload()};return l.a.createElement(l.a.Fragment,null,l.a.createElement(Oe.a,{expand:!1,collapseOnSelect:!0,variant:"dark",className:"navbar-theme-primary px-4 d-md-none"},l.a.createElement(Oe.a.Brand,{className:"me-lg-5",as:o.b,to:d.path},l.a.createElement(D.a,{src:Ce.a,className:"navbar-brand-light"})),l.a.createElement(Oe.a.Toggle,{as:k.a,"aria-controls":"main-navbar",onClick:b},l.a.createElement("span",{className:"navbar-toggler-icon"}))),l.a.createElement(ve.a,{timeout:300,in:c,classNames:"sidebar-transition"},l.a.createElement(xe.a,{className:"collapse ".concat(u," sidebar d-md-block bg-primary text-white")},l.a.createElement("div",{className:"sidebar-inner px-4 pt-3"},l.a.createElement("div",{className:"user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("div",{className:"user-avatar lg-avatar me-4"},l.a.createElement(D.a,{src:$.a,className:"card-img-top rounded-circle border-white"})),l.a.createElement("div",{className:"d-block"},l.a.createElement("h6",null,"Hi, Jane"))),l.a.createElement(we.a.Link,{className:"collapse-close d-md-none",onClick:b},l.a.createElement(f.a,{icon:h.u}))),l.a.createElement(we.a,{className:"flex-column pt-3 pt-md-0"},l.a.createElement(g,{title:"Clubby",image:Ce.a}),l.a.createElement(g,{title:"Today",link:d.path,icon:h.i}),l.a.createElement(g,{title:"History",icon:h.q,link:p.path}),l.a.createElement(fe.a.Divider,{className:"my-3 border-indigo"}),l.a.createElement(g,{title:"Settings",icon:h.j,link:E.path}),l.a.createElement(k.a,{as:o.b,variant:"secondary",size:"xs",onClick:function(){return y()},className:"text-dark"},l.a.createElement(f.a,{icon:h.s,className:"me-2"})," Sign Out"))))))};var Se=Object(C.b)((function(e){return{token:e.login.login_data.token,firstName:e.user.user_info.first_name}}),{loginAPI:_})((function(e){return l.a.createElement(Oe.a,{variant:"dark",expanded:!0,className:"ps-0 pe-2 pb-0"},l.a.createElement(y.a,{fluid:!0,className:"px-0",style:{justifyContent:"flex-end"}},l.a.createElement("div",null,l.a.createElement(we.a,null,l.a.createElement(fe.a,{as:we.a.Item},l.a.createElement(fe.a.Toggle,{as:we.a.Link,className:"pt-1 px-0"},l.a.createElement("div",{className:"media d-flex align-items-center"},l.a.createElement("div",{className:"media-body ms-2 text-dark align-items-right d-none d-lg-block",style:{marginRight:5}},l.a.createElement("span",{className:"mb-0 font-small fw-bold"},"Hi, "+e.firstName)),l.a.createElement(D.a,{src:$.a,className:"user-avatar md-avatar rounded-circle"}))),l.a.createElement(fe.a.Menu,{className:"user-dropdown dropdown-menu-right mt-2"},l.a.createElement(fe.a.Item,{className:"fw-bold",as:o.b,to:E.path},l.a.createElement(f.a,{icon:h.j,className:"me-2"})," Settings"),l.a.createElement(fe.a.Divider,null),l.a.createElement(fe.a.Item,{className:"fw-bold",onClick:function(){return window.localStorage.clear(),void window.location.reload()}},l.a.createElement(f.a,{icon:h.s,className:"text-danger me-2"}),"Logout")))))))})),Te=function(e){return l.a.createElement("div",null,l.a.createElement("footer",{className:"footer section py-5"},l.a.createElement(N.a,null,l.a.createElement(x.a,{xs:12,lg:6},l.a.createElement("ul",{className:"list-inline list-group-flush list-group-borderless text-center text-xl-right mb-0"},l.a.createElement("li",{className:"list-inline-item px-0 px-sm-2"},l.a.createElement(O.a.Link,{href:"https://trigate.io/about/",target:"_blank"},"About")),l.a.createElement("li",{className:"list-inline-item px-0 px-sm-2"},l.a.createElement(O.a.Link,{href:"https://trigate.io/",target:"_blank"},"Website")))))))},Ae=function(e){var a=e.show;return l.a.createElement("div",{className:"preloader bg-soft flex-column justify-content-center align-items-center ".concat(a?"":"show")},l.a.createElement(D.a,{className:"loader-element animate__animated animate__jackInTheBox",src:Ce.a,height:200}))},_e=t(158),Le=t(159),Pe=t(167),Fe=t(164);function Ge(e){var a=function(a){Object(Pe.a)(n,a);var t=Object(Fe.a)(n);function n(){return Object(_e.a)(this,n),t.apply(this,arguments)}return Object(Le.a)(n,[{key:"render",value:function(){return this.props.token?(A.a.defaults.headers.common.Authorization=this.props.token,l.a.createElement(e,this.props)):l.a.createElement(i.a,{to:u.path})}}]),n}(l.a.Component);return Object(C.b)((function(e){return{token:e.login.login_data.token}}))(a)}A.a.defaults.baseURL="https://clubbybackend.herokuapp.com";var Ve=function(e){var a=e.component,t=Object(m.a)(e,["component"]),r=Object(n.useState)(!1),c=Object(s.a)(r,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){return u(!0)}),1e3);return function(){return clearTimeout(e)}}),[]),l.a.createElement(i.b,Object.assign({},t,{render:function(e){return l.a.createElement(l.a.Fragment,null," ",l.a.createElement(Ae,{show:!o})," ",l.a.createElement(a,e)," ")}}))},Be=function(e){var a=e.component,t=Object(m.a)(e,["component"]),r=Object(n.useState)(!1),c=Object(s.a)(r,2),o=c[0],u=c[1];Object(n.useEffect)((function(){var e=setTimeout((function(){return u(!0)}),1e3);return function(){return clearTimeout(e)}}),[]);var d=Object(n.useState)((function(){return"false"!==localStorage.getItem("settingsVisible")})),p=Object(s.a)(d,2),E=p[0],b=p[1],g=function(){b(!E),localStorage.setItem("settingsVisible",!E)};return l.a.createElement(i.b,Object.assign({},t,{render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(Ae,{show:!o}),l.a.createElement(Ie,null),l.a.createElement("main",{className:"content"},l.a.createElement(Se,null),l.a.createElement(a,e),l.a.createElement(Te,{toggleSettings:g,showSettings:E})))}}))},De=function(){return l.a.createElement(i.d,null,l.a.createElement(Ve,{exact:!0,path:u.path,component:P}),l.a.createElement(Ve,{exact:!0,path:g.path,component:Ne}),l.a.createElement(Be,{exact:!0,path:d.path,component:Ge(be)}),l.a.createElement(Be,{exact:!0,path:p.path,component:Ge(he)}),l.a.createElement(Be,{exact:!0,path:E.path,component:Ge(ye)}))},Me=function(){var e=Object(i.g)().pathname;return Object(n.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"auto"})}),[e]),null},qe=t(55),We=t(160),Ye={login_data:[]};var ze={user_info:[]};var Re={location_info:[]};var Ue=Object(qe.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN":return Object(M.a)(Object(M.a)({},e),{},{login_data:a.payload});default:return Object(M.a)({},e)}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_INFO":return Object(M.a)(Object(M.a)({},e),{},{user_info:a.payload});default:return Object(M.a)({},e)}},location:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_LOCATION_INFO":return Object(M.a)(Object(M.a)({},e),{},{location_info:a.payload});default:return Object(M.a)({},e)}}}),He=function(e){e=JSON.parse(window.localStorage.getItem("state"))||e;var a=[We.a],t=Object(qe.d)(Ue,e,Object(qe.c)(qe.a.apply(void 0,a)));return t.subscribe((function(){var e=t.getState(),a={login:e.login,user:e.user,location:e.location};window.localStorage.setItem("state",JSON.stringify(a))})),t},Je=t(270),$e=t(273),Xe=Object(Je.a)({palette:{primary:{main:"#e67e22"},secondary:{main:"#0046AD"},contrastThreshold:2}});function Ke(e){var a=e.children,t=e.initialState,n=void 0===t?{}:t;return l.a.createElement($e.a,{theme:Xe},l.a.createElement(C.a,{store:He(n)},a))}c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ke,null,l.a.createElement(o.a,null,l.a.createElement(Me,null),l.a.createElement(De,null)))),document.getElementById("root"))},31:function(e,a,t){e.exports=t.p+"static/media/profile-picture-3.9a250e5c.jpg"},64:function(e,a,t){e.exports=t.p+"static/media/react-hero-logo.2398310c.svg"},74:function(e,a,t){e.exports=t.p+"static/media/signin.58ee1d5a.svg"}},[[169,1,2]]]);
//# sourceMappingURL=main.78a378fd.chunk.js.map