(this["webpackJsonpsatellite-client"]=this["webpackJsonpsatellite-client"]||[]).push([[0],{16:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(10),o=a.n(s),l=a(2),i=a(3),r=a(7),j=a(0),u=function(e){var t=JSON.parse(localStorage.getItem("user")).fullname,a=Object(n.useState)(!1),c=Object(l.a)(a,2),s=c[0],o=c[1],i=function(){return o((function(e){return!e}))},r=Object(j.jsxs)("div",{className:"logoutPanel",children:[Object(j.jsx)("p",{children:"Jestes zalogowany jako: ".concat(t)}),Object(j.jsx)("p",{children:"Czy na pewno chce si\u0119 wylogowa\u0107?"}),Object(j.jsx)("button",{className:"smallBtn",onClick:function(){localStorage.clear(),e.toggleIsUserLoggedIn()},children:"Tak"}),Object(j.jsx)("button",{className:"smallBtn",onClick:i,children:"Nie"})]});return Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Satellite APP"}),Object(j.jsx)("div",{className:"logoutBtn",onClick:i}),s?r:null]})},m=a(4),d=function(e){return e.errorsList.map((function(e){return Object(j.jsx)("p",{className:"error",children:e.message},e.message)}))},b=new Date,h=b.getDate(),O=b.getMonth()+1,g=b.getFullYear();1===h.length&&(h="0"+h.toString()),1===O.length&&(O="0"+h.toString()),b="".concat(g,"-").concat(O,"-").concat(h);for(var p=(new Date).getFullYear(),f=[],A=1900;A<=p;A++)f.push(A);f=f.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)})),p=p.toString();var x=function(e){var t;e.dateOfLaunching&&(t=e.dateOfLaunching.slice(0,10)),Object(n.useEffect)((function(){}),[]);var a=Object(n.useState)({sideNumber:e.sideNumber,model:e.model,producer:e.producer,softwareVersion:e.softwareVersion,modelYear:e.modelYear,dateOfLaunching:t,amountOfAmmunition:e.amountOfAmmunition,altitudeInOrbit:e.altitudeInOrbit,hasAI:e.hasAI}),c=Object(l.a)(a,2),s=c[0],o=c[1],r=Object(n.useState)([]),u=Object(l.a)(r,2),h=u[0],O=u[1],g=Object(n.useState)(""),p=Object(l.a)(g,2),A=p[0],x=p[1],v=function(e){var t=e.target.name,a=e.target.value;if("checkbox"!==e.target.type)o(Object(i.a)(Object(i.a)({},s),{},Object(m.a)({},t,a)));else{var n=e.target.checked;o(Object(i.a)(Object(i.a)({},s),{},Object(m.a)({},t,n)))}},C=Object(j.jsxs)("div",{className:"editFormContainer",children:[Object(j.jsx)("div",{onClick:e.toggleEditPanelState,className:"closeBtn"}),Object(j.jsx)("h2",{children:"Edytuj satelite..."}),Object(j.jsxs)("form",{action:"",onSubmit:function(t){t.preventDefault();var a=s.sideNumber,n=s.producer,c=s.softwareVersion,l=s.modelYear,i=s.dateOfLaunching,r=s.amountOfAmmunition,j=s.altitudeInOrbit,u=s.model,m=s.hasAI;a&&n&&c&&l&&i&&r&&j&&u?fetch("".concat("https://nuclearsatellite-api.herokuapp.com","/satellite/edit"),{method:"PUT",body:JSON.stringify({id:e._id,model:u,sideNumber:a,producer:n,softwareVersion:c,modelYear:l,dateOfLaunching:i,amountOfAmmunition:r,altitudeInOrbit:j,hasAI:m}),headers:{"x-access-token":localStorage.getItem("accessToken"),"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(t){t.errors&&(O([{message:t.error}]),console.log(h)),t.message&&(console.log("message",t.message),x(t.message),O([]),o({model:"",sideNumber:"",producer:"",softwareVersion:"",modelYear:"",dateOfLaunching:b,amountOfAmmunition:0,altitudeInOrbit:200,hasAI:!1}),e.updateSatelliteList(),setTimeout(e.toggleEditPanelState,1500))})):O([{message:"Wszystkie pola musz\u0105 by\u0107 wype\u0142nione"}])},children:[Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"model",children:"Model"}),Object(j.jsx)("input",{type:"text",autoComplete:"off",value:s.model,onChange:v,name:"model",id:"model"})]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"sideNumber",children:"Numer boczny"}),Object(j.jsx)("input",{type:"text",autoComplete:"off",value:s.sideNumber,onChange:v,name:"sideNumber",id:"sideNumber"})]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"producer",children:"Producent"}),Object(j.jsx)("input",{type:"text",autoComplete:"off",value:s.producer,onChange:v,name:"producer",id:"producer"})]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"softwareVersion",children:"Oprogramowanie"}),Object(j.jsx)("input",{type:"text",autoComplete:"off",value:s.softwareVersion,onChange:v,name:"softwareVersion",id:"softwareVersion"})]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"modelYear",children:"Rocznik modelu"}),Object(j.jsx)("select",{className:"formSelect",value:s.modelYear,name:"modelYear",onChange:v,children:f})]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"dateOfLaunching",children:"Data wystrzelenia"}),Object(j.jsx)("input",{type:"date",autoComplete:"off",value:s.dateOfLaunching,min:"1970-01-01",max:b,onChange:v,name:"dateOfLaunching",id:"dateOfLaunching"})]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"amountOfAmmunition",children:"Ilo\u015b\u0107 amunicji"}),Object(j.jsx)("input",{type:"number",autoComplete:"off",value:s.amountOfAmmunition,min:1,max:10,onChange:v,name:"amountOfAmmunition",id:"amountOfAmmunition"}),"szt"]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"altitudeInOrbit",children:"Wysoko\u015b\u0107"}),Object(j.jsx)("input",{type:"number",autoComplete:"off",value:s.altitudeInOrbit,min:200,max:2e3,onChange:v,name:"altitudeInOrbit",id:"altitudeInOrbit"}),"km"]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"hasAI",children:"Sztuczna Inteligencja"}),Object(j.jsx)("input",{type:"checkbox",autoComplete:"off",value:s.hasAI,onChange:v,name:"hasAI",id:"hasAI"})]}),Object(j.jsx)("button",{className:"submitBtn",type:"submit",children:"EDYTUJ"})]}),0===h.length?null:Object(j.jsx)(d,{errorsList:h}),A?Object(j.jsx)("h3",{children:A}):null]});return Object(j.jsx)("div",{className:"addSateliteContainer",children:C})},v=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)(""),i=Object(l.a)(o,2),r=i[0],u=i[1];return Object(j.jsxs)("div",{className:"deletePanel",children:[Object(j.jsx)("p",{children:"Czy na pewno chcesz usun\u0105\u0107 tego satelite?"}),Object(j.jsx)("button",{className:"smallBtn",onClick:function(){var t=e.id,a="".concat("https://nuclearsatellite-api.herokuapp.com","/satellite/delete/").concat(t);fetch(a,{method:"DELETE",headers:{"x-access-token":localStorage.getItem("accessToken"),"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(t){t.errors&&(s([{message:t.error}]),console.log(c)),t.message&&(console.log("message",t.message),u(t.message),s([]),setTimeout(e.updateSatelliteList,1500))}))},children:"TAK"}),Object(j.jsx)("button",{className:"smallBtn",onClick:e.toggleDeletePanelState,children:"NIE"}),0===c.length?null:Object(j.jsx)(d,{errorsList:c}),r?Object(j.jsx)("h3",{children:r}):null]})},C=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)(!1),r=Object(l.a)(o,2),u=r[0],m=r[1],d=function(){s(!1),m((function(e){return!e})),g(!1)},b=Object(n.useState)(!1),h=Object(l.a)(b,2),O=h[0],g=h[1],p=function(){s(!1),m(!1),g((function(e){return!e}))},f=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:"Numer boczny: ".concat(e.sideNumber)}),Object(j.jsx)("p",{children:"Wysko\u015b\u0107 nad orbit\u0105: ".concat(e.altitudeInOrbit," km")}),Object(j.jsx)("p",{children:"Sztuczna Intelogencja: ".concat(e.hasIE?"posiada":"nie posiada")}),Object(j.jsx)("p",{children:"Ilo\u015b\u0107 amunicji: ".concat(e.amountOfAmmunition," szt.")}),Object(j.jsx)("p",{children:"Data wystrzelenia: ".concat(e.dateOfLaunching)}),Object(j.jsx)("p",{children:"Data dodania: ".concat(e.creationDate)})]});return Object(j.jsxs)("div",{className:"satelliteInfo",children:[Object(j.jsx)("h3",{children:"".concat(e.producer," ").concat(e.model," ").concat(e.modelYear," ")}),Object(j.jsxs)("div",{className:"btnContainer",children:[Object(j.jsx)("div",{onClick:function(){s((function(e){return!e})),m(!1),g(!1)},className:"moreInfoBtn"}),Object(j.jsx)("div",{onClick:p,className:"editBtn"}),Object(j.jsx)("div",{onClick:d,className:"deleteBtn"})]}),c&&f,u&&Object(j.jsx)(v,{updateSatelliteList:e.updateSatelliteList,id:e._id,toggleDeletePanelState:d}),O&&Object(j.jsx)(x,Object(i.a)(Object(i.a)({updateSatelliteList:e.updateSatelliteList},e),{},{toggleEditPanelState:p}))]})},I=new Date,w=I.getDate(),y=I.getMonth()+1,N=I.getFullYear();1===w.length&&(w="0"+w.toString()),1===y.length&&(y="0"+w.toString()),I="".concat(N,"-").concat(y,"-").concat(w);for(var D=(new Date).getFullYear(),S=[],B=1900;B<=D;B++)S.push(B);S=S.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)})),D=D.toString();var P=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],s=a[1],o=function(){return s((function(e){return!e}))};Object(n.useEffect)((function(){}),[]);var r=Object(n.useState)({sideNumber:"",producer:"",model:"",softwareVersion:"",modelYear:D,dateOfLaunching:I,amountOfAmmunition:1,altitudeInOrbit:200,hasAI:!1}),u=Object(l.a)(r,2),b=u[0],h=u[1],O=Object(n.useState)([]),g=Object(l.a)(O,2),p=g[0],f=g[1],A=Object(n.useState)(""),x=Object(l.a)(A,2),v=x[0],C=x[1],w=function(e){var t=e.target.name,a=e.target.value;if("checkbox"!==e.target.type)h(Object(i.a)(Object(i.a)({},b),{},Object(m.a)({},t,a)));else{var n=e.target.checked;h(Object(i.a)(Object(i.a)({},b),{},Object(m.a)({},t,n)))}},y=Object(j.jsxs)("div",{className:"addFormContainer",children:[Object(j.jsx)("div",{onClick:o,className:"closeBtn"}),Object(j.jsx)("h2",{children:"Dodaj nowego satelite..."}),Object(j.jsxs)("form",{action:"",onSubmit:function(t){t.preventDefault();var a=b.sideNumber,n=b.producer,c=b.softwareVersion,s=b.modelYear,l=b.dateOfLaunching,i=b.amountOfAmmunition,r=b.altitudeInOrbit,j=b.model,u=b.hasAI;if(a&&n&&c&&s&&l&&i&&r&&j){var m=JSON.parse(localStorage.getItem("user"))._id;fetch("".concat("https://nuclearsatellite-api.herokuapp.com","/satellite/add"),{method:"POST",body:JSON.stringify({user:m,model:j,sideNumber:a,producer:n,softwareVersion:c,modelYear:s,dateOfLaunching:l,amountOfAmmunition:i,altitudeInOrbit:r,hasAI:u}),headers:{"x-access-token":localStorage.getItem("accessToken"),"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(t){t.errors&&(f([{message:t.error}]),console.log(p)),t.message&&(console.log("message",t.message),C(t.message),f([]),h({sideNumber:"",producer:"",softwareVersion:"",modelYear:D,dateOfLaunching:I,amountOfAmmunition:1,altitudeInOrbit:200,hasAI:!1}),e.updateSatelliteList(),setTimeout(o,1500))}))}else f([{message:"Wszystkie pola musz\u0105 by\u0107 wype\u0142nione"}])},children:[Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"model",children:"Model"}),Object(j.jsx)("input",{type:"text",autoComplete:"off",value:b.model,onChange:w,name:"model",id:"model"})]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"sideNumber",children:"Numer boczny"}),Object(j.jsx)("input",{type:"text",autoComplete:"off",value:b.sideNumber,onChange:w,name:"sideNumber",id:"sideNumber"})]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"producer",children:"Producent"}),Object(j.jsx)("input",{type:"text",autoComplete:"off",value:b.producer,onChange:w,name:"producer",id:"producer"})]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"softwareVersion",children:"Oprogramowanie"}),Object(j.jsx)("input",{type:"text",autoComplete:"off",value:b.softwareVersion,onChange:w,name:"softwareVersion",id:"softwareVersion"})]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"modelYear",children:"Rocznik modelu"}),Object(j.jsx)("select",{className:"formSelect",value:b.modelYear,name:"modelYear",onChange:w,children:S})]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"dateOfLaunching",children:"Data wystrzelenia"}),Object(j.jsx)("input",{type:"date",autoComplete:"off",value:b.dateOfLaunching,min:"1970-01-01",max:I,onChange:w,name:"dateOfLaunching",id:"dateOfLaunching"})]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"amountOfAmmunition",children:"Ilo\u015b\u0107 amunicji"}),Object(j.jsx)("input",{type:"number",autoComplete:"off",value:b.amountOfAmmunition,min:1,max:10,onChange:w,name:"amountOfAmmunition",id:"amountOfAmmunition"}),"szt"]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"altitudeInOrbit",children:"Wysoko\u015b\u0107"}),Object(j.jsx)("input",{type:"number",autoComplete:"off",value:b.altitudeInOrbit,min:200,max:2e3,onChange:w,name:"altitudeInOrbit",id:"altitudeInOrbit"}),"km"]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"hasAI",children:"Sztuczna Inteligencja"}),Object(j.jsx)("input",{type:"checkbox",autoComplete:"off",value:b.hasAI,onChange:w,name:"hasAI",id:"hasAI"})]}),Object(j.jsx)("button",{className:"submitBtn",type:"submit",children:"DODAJ"})]}),0===p.length?null:Object(j.jsx)(d,{errorsList:p}),v?Object(j.jsx)("h3",{children:v}):null]}),N=Object(j.jsx)("div",{className:"showFormBtn",onClick:o,children:Object(j.jsx)("h3",{children:"DODAJ NOWEGO SATELITE"})});return Object(j.jsx)("div",{className:"addSateliteContainer",children:c?y:N})},F=(a(9),function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)([]),m=Object(l.a)(o,2),d=m[0],b=m[1],h=function(){var e=JSON.parse(localStorage.getItem("user"))._id,t="".concat("https://nuclearsatellite-api.herokuapp.com","/satellite/get/").concat(e);fetch(t,{method:"GET",headers:{"x-access-token":localStorage.getItem("accessToken"),"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){if(Array.isArray(e))return s(Object(r.a)(e)),void b("");e.message?b(e.message):b("cos poszlo nie tak :(")}))};Object(n.useEffect)((function(){h()}),[]);var O=c.map((function(e){return Object(j.jsx)(C,Object(i.a)({updateSatelliteList:h},e),e._id)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{toggleIsUserLoggedIn:e.toggleIsUserLoggedIn}),Object(j.jsx)(P,{updateSatelliteList:h}),0===O.length?Object(j.jsx)("h3",{children:"Aktualnie nie posiadasz \u017cadnego satelity"}):O,d?Object(j.jsx)("h3",{children:d}):null]})}),k=function(){return Object(j.jsx)("footer",{children:Object(j.jsx)("h3",{children:"Copyright 2021 \u0141ukasz"})})},L=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(l.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)([]),r=Object(l.a)(o,2),u=r[0],b=r[1],h=Object(n.useState)(""),O=Object(l.a)(h,2),g=O[0],p=O[1],f=function(e){var t=e.target.name,a=e.target.value;s(Object(i.a)(Object(i.a)({},c),{},Object(m.a)({},t,a)))},A=function(t){t.preventDefault();var a=c.email,n=c.password;fetch("".concat("https://nuclearsatellite-api.herokuapp.com","/login"),{method:"POST",body:JSON.stringify({email:a,password:n}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){if(console.log(t),t.isLogged)return localStorage.setItem("accessToken",t.accessToken),localStorage.setItem("isLogged",t.isLogged),localStorage.setItem("user",JSON.stringify(t.user)),s({email:"",password:""}),b(""),p(""),void setTimeout(e.toggleIsUserLoggedIn,1500);b(t.errors)}))};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"formContainer",children:[Object(j.jsx)("h2",{children:"Logowanie"}),Object(j.jsxs)("form",{action:"",onSubmit:A,children:[Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"email",autoComplete:"off",value:c.email,onChange:f,name:"email",id:"email"})]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Has\u0142o"}),Object(j.jsx)("input",{type:"password",autoComplete:"off",value:c.password,onChange:f,name:"password",id:"password"})]}),Object(j.jsx)("button",{className:"submitBtn",onClick:A,children:"Zaloguj"})]}),0===u.length?null:Object(j.jsx)(d,{errorsList:u}),g?Object(j.jsx)("h3",{children:g}):null]})})},E=function(e){var t=Object(n.useState)({fullname:"",country:"",email:"",password:"",password2:"",hasAtomicButton:!1}),a=Object(l.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)([]),u=Object(l.a)(o,2),b=u[0],h=u[1],O=Object(n.useState)(""),g=Object(l.a)(O,2),p=g[0],f=g[1],A=function(e){var t=e.target.name,a=e.target.value;if("checkbox"!==e.target.type)s(Object(i.a)(Object(i.a)({},c),{},Object(m.a)({},t,a)));else{var n=e.target.checked;s(Object(i.a)(Object(i.a)({},c),{},Object(m.a)({},t,n)))}};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"formContainer",children:[Object(j.jsx)("h2",{children:"Rejestracja"}),Object(j.jsxs)("form",{action:"",onSubmit:function(t){t.preventDefault();var a=c.fullname,n=c.country,o=c.email,l=c.password,i=c.password2,j=c.hasAtomicButton;fetch("".concat("https://nuclearsatellite-api.herokuapp.com","/register"),{method:"POST",body:JSON.stringify({fullname:a,country:n,email:o,password:l,password2:i,hasAtomicButton:j}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){console.log(t),t.errors&&(h(Object(r.a)(t.errors)),console.log(b)),t.message&&(f(t.message),h([]),s({fullname:"",country:"",email:"",password:"",password2:"",hasAtomicButton:!1}),setTimeout(e.showLoginForm,1500))}))},children:[Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"fullname",children:"Pe\u0142na nazwa"}),Object(j.jsx)("input",{type:"text",autoComplete:"off",value:c.username,onChange:A,name:"fullname",id:"fullname"})]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"country",children:"Kraj pochodzenia"}),Object(j.jsx)("input",{type:"text",autoComplete:"off",value:c.country,onChange:A,name:"country",id:"country"})]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"email",autoComplete:"off",value:c.email,onChange:A,name:"email",id:"email"})]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Has\u0142o"}),Object(j.jsx)("input",{type:"password",autoComplete:"off",value:c.password,onChange:A,name:"password",id:"password"})]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"password2",children:"Powt\xf3rz has\u0142o"}),Object(j.jsx)("input",{type:"password",autoComplete:"off",value:c.password2,onChange:A,name:"password2",id:"password2"})]}),Object(j.jsxs)("div",{className:"loginPanelDiv",children:[Object(j.jsx)("label",{htmlFor:"hasAtomicButton",children:"Przycisk atomowy"}),Object(j.jsx)("input",{type:"checkbox",autoComplete:"off",value:c.hasAtomicButton,onChange:A,name:"hasAtomicButton",id:"hasAtomicButton"})]}),Object(j.jsx)("button",{className:"submitBtn",type:"submit",children:"Rejestracja"})]}),0===b.length?null:Object(j.jsx)(d,{errorsList:b}),p?Object(j.jsx)("h3",{children:p}):null]})})},Y=a.p+"static/media/globe.131b27b2.png",Q=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)(!1),i=Object(l.a)(o,2),r=i[0],u=i[1],m=function(){s(!0),u(!1)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"headerTitle",children:"Witaj w satellite APP"}),Object(j.jsx)("button",{className:"smallBtn",onClick:m,children:"Logowanie"}),Object(j.jsx)("button",{className:"smallBtn",onClick:function(){s(!1),u(!0)},children:"Rejestracja"}),c&&Object(j.jsx)(L,{toggleIsUserLoggedIn:e.toggleIsUserLoggedIn}),r&&Object(j.jsx)(E,{showLoginForm:m}),Object(j.jsxs)("div",{className:"logoContainer",children:[Object(j.jsx)("img",{src:"data:image/png;base64,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",className:"satelliteImg",alt:"satellite"}),Object(j.jsx)("img",{src:Y,className:"globeImg",alt:"globe"})]})]})},z=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],s=function(){return c((function(e){return!e}))},o=function(){JSON.parse(localStorage.getItem("isLogged"))&&s()};return Object(n.useEffect)((function(){setTimeout(o,1e3)}),[]),Object(j.jsxs)("div",{className:"App",children:[a?Object(j.jsx)(F,{toggleIsUserLoggedIn:s}):Object(j.jsx)(Q,{toggleIsUserLoggedIn:s}),Object(j.jsx)(k,{})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.0c6a110c.chunk.js.map