(this["webpackJsonpfidelija-employee"]=this["webpackJsonpfidelija-employee"]||[]).push([[0],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(13),c=a.n(r),o=a(211),s=a(18),i=a(47),l=a(9),u=a.n(l),j=a(16),b=a(34),d=a.n(b),O="https://api.fidelija.com.br/",p={authenticate:function(e){return Object(j.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(O,"oauth/token"),t.abrupt("return",d.a.post(a,e));case 2:case"end":return t.stop()}}),t)})))()},setLoggedUser:function(e,t){return Object(j.a)(u.a.mark((function a(){var n,r;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=JSON.stringify(e),r=JSON.stringify(t),localStorage.setItem("userData",n),localStorage.setItem("authData",r);case 4:case"end":return a.stop()}}),a)})))()},getEmployee:function(e){return Object(j.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(O,"api/employee-data"),t.abrupt("return",d.a.get(a,{headers:{Authorization:"".concat(e.token_type," ").concat(e.access_token)}}));case 2:case"end":return t.stop()}}),t)})))()},getAuthData:function(){var e=localStorage.getItem("authData");if(!e)return null;try{return JSON.parse(e)}catch(t){return console.log(t),null}},getLoggedUser:function(){var e=localStorage.getItem("userData");if(!e)return null;try{return JSON.parse(e)}catch(t){return console.log(t),null}},isAuthenticated:function(){return!!localStorage.getItem("authData")},clearLoggedUser:function(){localStorage.getItem("authData")&&(localStorage.removeItem("authData"),localStorage.removeItem("userData"),window.location.replace("/"))},getUserType:function(){if(localStorage.getItem("authData")){var e=JSON.parse(localStorage.getItem("userData")),t=e.is_admin,a=e.is_employee;if(1===t)return{is_admin:!0,is_employee:!1};if(1===a)return{is_employee:!0,is_admin:!1}}}},h="https://api.fidelija.com.br/",x=p.getAuthData()&&{headers:{Authorization:"".concat(p.getAuthData().token_type," ").concat(p.getAuthData().access_token)}},m={getUserByCpf:function(e){return Object(j.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(h,"api/user/cpf"),t.abrupt("return",d.a.post(a,e,x));case 2:case"end":return t.stop()}}),t)})))()},registerPoints:function(e){return Object(j.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(h,"api/points/stablishment"),t.abrupt("return",d.a.post(a,e,x));case 2:case"end":return t.stop()}}),t)})))()},getUser:function(e){return Object(j.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(h,"api/user/").concat(e),t.abrupt("return",d.a.get(a,x));case 2:case"end":return t.stop()}}),t)})))()}},f="https://api.fidelija.com.br/",g=p.getAuthData()&&{headers:{Authorization:"".concat(p.getAuthData().token_type," ").concat(p.getAuthData().access_token)}},v={getVoucher:function(e){return Object(j.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(f,"api/vouchers/").concat(e),t.abrupt("return",d.a.get(a,g));case 2:case"end":return t.stop()}}),t)})))()},completeVoucher:function(e){return Object(j.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(f,"api/vouchers"),t.abrupt("return",d.a.post(a,e,g));case 2:case"end":return t.stop()}}),t)})))()}},y=a(27),k=a(65),w=a(2),S=function(e){var t=e.component,a=Object(k.a)(e,["component"]);return Object(w.jsx)(s.b,Object(y.a)(Object(y.a)({},a),{},{render:function(e){return p.isAuthenticated()?Object(w.jsx)(s.a,{to:{pathname:"/",state:{from:e.location}}}):Object(w.jsx)(t,Object(y.a)({},e))}}))},C=function(e){var t=e.component,a=Object(k.a)(e,["component"]);return Object(w.jsx)(s.b,Object(y.a)(Object(y.a)({},a),{},{render:function(e){return p.isAuthenticated()?Object(w.jsx)(t,Object(y.a)({},e)):Object(w.jsx)(s.a,{to:{pathname:"/",state:{from:e.location}}})}}))},N=a(11),D=a(196),I=a(218),_=a(56),A=a(212),U=a(197),B=a(215),P=a(193),W=a(198),E=a(199),L=a(213),z=a(100),J=a.n(z),V=a(182),F=a(217),R=a(185),q=Object(V.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#60c3ff"}}})),M=function(e){var t=q();return Object(w.jsx)(F.a,{className:t.backdrop,open:e.open,children:Object(w.jsx)(R.a,{color:"inherit"})})},T=a(216),G=a(214),H=function(e){return Object(w.jsx)(T.a,{open:e.toggleSnack,autoHideDuration:e.time,onClose:e.onClose,anchorOrigin:{vertical:"top",horizontal:"right"},children:Object(w.jsx)(G.a,{onClose:e.onClose,severity:e.color,variant:"filled",children:e.children})})},Q=a(188),Y=a(189),K=a(187),X=a(102),Z=a(192),$=a(190),ee=a(194),te=Object(V.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},appBar:{marginBottom:"30px"}}})),ae=function(e){var t=Object(n.useState)(!1),a=Object(N.a)(t,2),r=a[0],c=a[1],o=te(),s=Object(n.useRef)(null);return Object(w.jsx)(Q.a,{position:"static",className:o.appBar,children:Object(w.jsxs)(Y.a,{children:[Object(w.jsx)(K.a,{edge:"start",className:o.menuButton,color:"inherit","aria-label":"menu",children:Object(w.jsx)($.a,{})}),Object(w.jsx)(_.a,{variant:"h6",className:o.title,children:"Painel do funcion\xe1rio"}),Object(w.jsxs)("div",{children:[Object(w.jsx)(K.a,{onClick:function(){return c(!0)},ref:s,children:Object(w.jsx)(I.a,{src:"https://api.fidelija.com.br/"+p.getLoggedUser().photo})}),Object(w.jsx)(X.a,{anchorEl:s.current,open:r,onClose:function(){return c(!1)},children:Object(w.jsx)(Z.a,{component:P.a,endIcon:Object(w.jsx)(ee.a,{}),color:"secondary",onClick:function(){p.clearLoggedUser()},children:"Sair"})})]})]})})},ne=a(64),re=a.n(ne),ce=a(195),oe=a(99),se=a.n(oe),ie=Object(V.a)((function(e){return{fab:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)}}})),le=function(){var e=Object(n.useRef)(null),t=ie();return Object(w.jsxs)("div",{children:[Object(w.jsx)(re.a,{style:{display:"none"},ref:e,delay:300,onError:function(e){return console.log(e)},onScan:function(e){return function(e){e&&window.location.replace(e)}(e)},legacyMode:!0}),Object(w.jsx)(ce.a,{className:t.fab,color:"secondary",onClick:function(){return e.current.openImageDialog()},children:Object(w.jsx)(se.a,{})})]})},ue=Object(V.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),je=function(){var e=Object(n.useState)(""),t=Object(N.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(N.a)(c,2),s=o[0],i=o[1],l=Object(n.useState)(!1),b=Object(N.a)(l,2),d=b[0],O=b[1],h=Object(n.useState)(!1),x=Object(N.a)(h,2),m=x[0],f=x[1],g=Object(n.useState)(""),v=Object(N.a)(g,2),y=v[0],k=v[1],S=ue(),C=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),t={username:a,password:s,scope:"*",client_id:1,grant_type:"password",client_secret:"IQLstf5Jhow51iiBGDxp9BPxlfMDwLvnxrsTF6n6"},e.prev=2,e.next=5,p.authenticate(t);case 5:return n=e.sent,e.next=8,p.getEmployee(n.data);case 8:if(!(r=e.sent).data.employeeInfo&&!r.data.stablishment){e.next=16;break}return e.next=12,p.setLoggedUser(r.data,n.data);case 12:O(!1),window.location.reload(),e.next=19;break;case 16:O(!1),k("Acesso n\xe3o autorizado"),f(!0);case 19:e.next=27;break;case 21:e.prev=21,e.t0=e.catch(2),console.log(e.t0),O(!1),k("Ocorreu um erro tente novamente."),f(!0);case 27:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)(D.a,{component:"main",maxWidth:"xs",children:[Object(w.jsx)(M,{open:d}),Object(w.jsx)(H,{toggleSnack:m,time:4500,onClose:function(){return f(!1)},color:"error",children:y}),Object(w.jsxs)("div",{className:S.paper,children:[Object(w.jsx)(I.a,{className:S.avatar,children:Object(w.jsx)(J.a,{})}),Object(w.jsx)(_.a,{component:"h1",variant:"h5",children:"Login de Funcion\xe1rios"}),Object(w.jsxs)("div",{className:S.form,children:[Object(w.jsx)(A.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Email",name:"email",type:"email",value:a,onChange:function(e){return r(e.target.value)}}),Object(w.jsx)(A.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Senha",type:"password",value:s,onChange:function(e){return i(e.target.value)}}),Object(w.jsx)(U.a,{control:Object(w.jsx)(B.a,{value:"remember",color:"primary"}),label:"Lembrar-me"}),Object(w.jsx)(P.a,{fullWidth:!0,variant:"contained",color:"primary",className:S.submit,onClick:function(){return C()},children:"Entrar"}),Object(w.jsxs)(W.a,{container:!0,children:[Object(w.jsx)(W.a,{item:!0,xs:!0,children:Object(w.jsx)(E.a,{href:"#",variant:"body2",children:"Esqueceu a senha?"})}),Object(w.jsx)(W.a,{item:!0,children:Object(w.jsx)(E.a,{href:"#",variant:"body2",children:"Ainda n\xe3o possui uma conta?"})})]})]})]}),Object(w.jsx)(L.a,{mt:8,children:Object(w.jsxs)(_.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(w.jsx)(E.a,{color:"inherit",href:"https://parceiro.fidelija.com.br/",children:"Fidelij\xe1"})," ",(new Date).getFullYear(),"."]})})]})},be=a(101),de=a.n(be),Oe=a(200),pe=a(152),he=a(191),xe=a(153),me=a(201),fe=a(202),ge=a(203),ve=a(204),ye=a(205),ke=a(206),we=a(67),Se=Object(V.a)((function(e){return{button:{color:e.palette.common.white,backgroundColor:we.a[400],"&:hover":{backgroundColor:we.a[500]}},paper:{padding:"10px"},gridContainer:{marginBottom:"80px"},header:{marginBottom:"20px"}}})),Ce=function(){var e=Object(n.useState)(!1),t=Object(N.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(N.a)(c,2),s=o[0],i=o[1],l=Object(n.useState)(!1),b=Object(N.a)(l,2),d=b[0],O=b[1],h=Object(n.useState)(""),x=Object(N.a)(h,2),f=x[0],g=x[1],v=Object(n.useState)(null),k=Object(N.a)(v,2),S=k[0],C=k[1],U=Object(n.useState)(""),B=Object(N.a)(U,2),E=B[0],L=B[1],z=Object(n.useState)(""),J=Object(N.a)(z,2),V=J[0],F=J[1],R=Object(n.useState)(""),q=Object(N.a)(R,2),T=q[0],G=q[1],Q=Se(),Y=function(){var e=Object(j.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),t={cpf:E},e.prev=2,e.next=5,m.getUserByCpf(t);case 5:a=e.sent,console.log(a.data),C(a.data),r(!1),!a.data&&E.length>0&&(g("Usu\xe1rio n\xe3o encontrado."),i(!0)),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0),r(!1),g("N\xe3o foi poss\xedvel buscar o usu\xe1rio."),i(!0);case 18:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!1),t={user_id:S.id,ammount:V,reference:T,employeeId:p.getLoggedUser().id},e.prev=2,e.next=5,m.registerPoints(t);case 5:C(null),F(""),L(""),G(""),r(!1),g("Usu\xe1rio pontuado com sucesso."),O(!0),e.next=20;break;case 14:e.prev=14,e.t0=e.catch(2),r(!1),g("N\xe3o foi possivel pontuar o usu\xe1rio"),i(!0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{children:[Object(w.jsx)(ae,{}),Object(w.jsx)(M,{open:a}),Object(w.jsx)(H,{toggleSnack:s||d,time:4500,onClose:function(){i(!1),O(!1)},color:d?"success":"warning",children:f}),Object(w.jsxs)(D.a,{maxWidth:"lg",children:[Object(w.jsxs)("div",{className:Q.header,children:[Object(w.jsx)(_.a,{variant:"h6",children:"Pontuar usu\xe1rio"}),Object(w.jsx)(Oe.a,{})]}),Object(w.jsxs)(W.a,{className:Q.gridContainer,container:!0,spacing:3,direction:"column",justifyContent:"center",children:[Object(w.jsx)(W.a,{item:!0,xs:12,children:Object(w.jsxs)(pe.a,{variant:"outlined",className:Q.paper,children:[Object(w.jsx)(de.a,{mask:"999.999.999-99",maskChar:"",value:E,onChange:function(e){return L(e.target.value)},onBlur:function(){return Y()},children:function(e){return Object(w.jsx)(A.a,Object(y.a)(Object(y.a)({},e),{},{fullWidth:!0,variant:"outlined",label:"CPF",margin:"normal",type:"text"}))}}),Object(w.jsx)(A.a,{fullWidth:!0,variant:"outlined",label:"Valor da compra",margin:"normal",name:"valor",value:V,onChange:function(e){return F(e.target.value)}}),Object(w.jsx)(A.a,{fullWidth:!0,variant:"outlined",label:"Refer\xeancia",margin:"normal",name:"valor",value:T,onChange:function(e){return G(e.target.value)}})]})}),S&&Object(w.jsx)(W.a,{item:!0,xs:12,children:Object(w.jsxs)(pe.a,{variant:"outlined",children:[Object(w.jsxs)(he.a,{dense:!1,children:[Object(w.jsxs)(xe.a,{children:[Object(w.jsx)(me.a,{children:Object(w.jsx)(I.a,{src:"https://api.fidelija.com.br/"+S.photo,alt:S.name})}),Object(w.jsx)(fe.a,{children:S.name})]}),Object(w.jsxs)(xe.a,{children:[Object(w.jsx)(me.a,{children:Object(w.jsx)(I.a,{style:{backgroundColor:"#604bd2"},children:Object(w.jsx)(ge.a,{})})}),Object(w.jsx)(fe.a,{children:S.cpf})]}),Object(w.jsxs)(xe.a,{children:[Object(w.jsx)(me.a,{children:Object(w.jsx)(I.a,{style:{backgroundColor:"#604bd2"},children:Object(w.jsx)(ve.a,{})})}),Object(w.jsx)(fe.a,{children:T||"- - -"})]}),Object(w.jsxs)(xe.a,{children:[Object(w.jsx)(me.a,{children:Object(w.jsx)(I.a,{style:{backgroundColor:"#604bd2"},children:Object(w.jsx)(ye.a,{})})}),Object(w.jsx)(fe.a,{children:S.stablishment_points||"- - -"})]}),Object(w.jsxs)(xe.a,{children:[Object(w.jsx)(me.a,{children:Object(w.jsx)(I.a,{style:{backgroundColor:"rgb(38 165 43)"},children:Object(w.jsx)(ke.a,{})})}),Object(w.jsx)(fe.a,{children:Math.ceil(5*V)})]})]}),Object(w.jsx)("div",{style:{padding:"10px"},children:Object(w.jsx)(P.a,{className:Q.button,variant:"contained",color:"inherit",fullWidth:!0,size:"medium",disabled:""===V||""===T,onClick:function(){return K()},children:"Pontuar"})})]})})]}),Object(w.jsx)(le,{})]})]})},Ne=Object(V.a)((function(e){return{button:{color:e.palette.common.white,backgroundColor:we.a[400],"&:hover":{backgroundColor:we.a[500]}},inputs:{padding:"15px"}}})),De=function(){var e=Object(n.useState)({}),t=Object(N.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(N.a)(c,2),i=o[0],l=o[1],b=Object(n.useState)(""),d=Object(N.a)(b,2),O=d[0],h=d[1],x=Object(n.useState)(!1),f=Object(N.a)(x,2),g=f[0],v=f[1],y=Object(n.useState)(!1),k=Object(N.a)(y,2),S=k[0],C=k[1],_=Object(n.useState)(""),U=Object(N.a)(_,2),B=U[0],W=U[1],E=Object(n.useState)(!1),L=Object(N.a)(E,2),z=L[0],J=L[1],V=Object(s.g)().id,F=Ne();Object(n.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.getUser(V);case 3:t=e.sent,a=t.data,console.log(a),r(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var R=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J(!1),t={user_id:a.id,ammount:i,reference:O,employeeId:p.getLoggedUser().id},e.prev=2,e.next=5,m.registerPoints(t);case 5:r(null),l(""),h(""),J(!1),W("Usu\xe1rio pontuado com sucesso."),C(!0),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(2),J(!1),W("N\xe3o foi possivel pontuar o usu\xe1rio"),v(!0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{children:[Object(w.jsx)(ae,{}),Object(w.jsx)(M,{open:z}),Object(w.jsx)(H,{toggleSnack:g||S,time:4500,onClose:function(){v(!1),C(!1)},color:S?"success":"warning",children:B}),a&&Object(w.jsx)(D.a,{children:Object(w.jsxs)(pe.a,{variant:"outlined",children:[Object(w.jsxs)("div",{className:F.inputs,children:[Object(w.jsx)(A.a,{fullWidth:!0,variant:"outlined",label:"Valor da compra",margin:"normal",name:"valor",value:i,onChange:function(e){return l(e.target.value)}}),Object(w.jsx)(A.a,{fullWidth:!0,variant:"outlined",label:"Referencia",margin:"normal",name:"valor",value:O,onChange:function(e){return h(e.target.value)}})]}),Object(w.jsxs)(he.a,{dense:!1,children:[Object(w.jsxs)(xe.a,{children:[Object(w.jsx)(me.a,{children:Object(w.jsx)(I.a,{src:"https://api.fidelija.com.br/"+a.photo,alt:a.name})}),Object(w.jsx)(fe.a,{children:a.name})]}),Object(w.jsxs)(xe.a,{children:[Object(w.jsx)(me.a,{children:Object(w.jsx)(I.a,{style:{backgroundColor:"#604bd2"},children:Object(w.jsx)(ge.a,{})})}),Object(w.jsx)(fe.a,{children:a.cpf})]}),Object(w.jsxs)(xe.a,{children:[Object(w.jsx)(me.a,{children:Object(w.jsx)(I.a,{style:{backgroundColor:"#604bd2"},children:Object(w.jsx)(ve.a,{})})}),Object(w.jsx)(fe.a,{children:O||"- - -"})]}),Object(w.jsxs)(xe.a,{children:[Object(w.jsx)(me.a,{children:Object(w.jsx)(I.a,{style:{backgroundColor:"#604bd2"},children:Object(w.jsx)(ye.a,{})})}),Object(w.jsx)(fe.a,{children:a.stablishment_points||"- - -"})]}),Object(w.jsxs)(xe.a,{children:[Object(w.jsx)(me.a,{children:Object(w.jsx)(I.a,{style:{backgroundColor:"rgb(38 165 43)"},children:Object(w.jsx)(ke.a,{})})}),Object(w.jsx)(fe.a,{children:Math.ceil(5*i)})]})]}),Object(w.jsx)("div",{style:{padding:"10px"},children:Object(w.jsx)(P.a,{className:F.button,variant:"contained",color:"inherit",fullWidth:!0,size:"medium",disabled:""===i||""===O,onClick:function(){return R()},children:"Pontuar"})})]})}),Object(w.jsx)(le,{})]})},Ie=Object(V.a)((function(e){return{button:{color:e.palette.common.white,backgroundColor:we.a[400],"&:hover":{backgroundColor:we.a[500]}},imageContainer:{display:"flex",padding:"15px"},productPicture:{margin:"auto",border:"2px solid #bdbdbd",width:e.spacing(25),height:e.spacing(25)}}})),_e=a(207),Ae=a(208),Ue=a(209),Be=a(210),Pe=function(){var e=Object(n.useState)(),t=Object(N.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),o=Object(N.a)(c,2),i=o[0],l=o[1],b=Object(n.useState)(!1),d=Object(N.a)(b,2),O=d[0],p=d[1],h=Object(n.useState)(!1),x=Object(N.a)(h,2),m=x[0],f=x[1],g=Object(n.useState)(""),y=Object(N.a)(g,2),k=y[0],S=y[1],C=Object(s.g)().id,_=Ie();Object(n.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.getVoucher(C);case 3:t=e.sent,a=t.data,r(a),l(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var A=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),t={id:C},console.log(t),e.prev=3,e.next=6,v.completeVoucher(t);case 6:l(!1),S("Pr\xeamio resgatado."),f(!0),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0),l(!1),S("N\xe3o foi possivel resgatar o pr\xeamio"),p(!0);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{children:[Object(w.jsx)(ae,{}),Object(w.jsx)(M,{open:i}),Object(w.jsx)(H,{toggleSnack:O||m,time:4500,onClose:function(){p(!1),f(!1)},color:m?"success":"warning",children:k}),a&&Object(w.jsx)(D.a,{children:Object(w.jsxs)(pe.a,{variant:"outlined",children:[Object(w.jsx)("div",{className:_.imageContainer,children:Object(w.jsx)(I.a,{className:_.productPicture,src:"https://api.fidelija.com.br/"+a.product.image})}),Object(w.jsxs)(he.a,{children:[Object(w.jsxs)(xe.a,{children:[Object(w.jsx)(me.a,{children:Object(w.jsx)(I.a,{children:Object(w.jsx)(_e.a,{})})}),Object(w.jsx)(fe.a,{primary:"Produto",secondary:a.product.name})]}),Object(w.jsxs)(xe.a,{children:[Object(w.jsx)(me.a,{children:Object(w.jsx)(I.a,{children:Object(w.jsx)(Ae.a,{})})}),Object(w.jsx)(fe.a,{primary:"Estoque",secondary:a.product.stock})]}),Object(w.jsxs)(xe.a,{children:[Object(w.jsx)(me.a,{children:Object(w.jsx)(I.a,{children:Object(w.jsx)(Ue.a,{})})}),Object(w.jsx)(fe.a,{primary:"Valor em pontos",secondary:a.product.cost})]}),Object(w.jsxs)(xe.a,{children:[Object(w.jsx)(me.a,{children:Object(w.jsx)(I.a,{children:Object(w.jsx)(Be.a,{})})}),Object(w.jsx)(fe.a,{primary:"Validade",secondary:a.limit_date})]})]}),Object(w.jsx)("div",{style:{padding:"10px"},children:Object(w.jsx)(P.a,{className:_.button,fullWidth:!0,variant:"contained",onClick:function(){return A()},children:"Confirmar"})})]})}),Object(w.jsx)(le,{})]})},We=function(){return Object(w.jsx)("div",{children:Object(w.jsx)(re.a,{delay:300,onError:function(e){return console.log(e)},onScan:function(e){e&&window.location.replace(e)}})})},Ee=function(){return Object(w.jsx)(s.a,{to:"/"})},Le=function(){return Object(w.jsx)(i.a,{children:Object(w.jsxs)(s.d,{children:[p.isAuthenticated()?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(C,{path:"/",component:Ce}),Object(w.jsx)(C,{path:"/user/search/:id",component:De}),Object(w.jsx)(C,{path:"/voucher/:id",component:Pe}),Object(w.jsx)(C,{path:"/reader",component:We})]}):Object(w.jsx)(S,{path:"/",exact:!0,component:je}),Object(w.jsx)(s.b,{path:"*",exact:!0,component:Ee})]})})};var ze=function(){return Object(w.jsxs)("div",{style:{overflow:"hidden"},children:[Object(w.jsx)(o.a,{}),Object(w.jsx)(Le,{})]})};c.a.render(Object(w.jsx)(ze,{}),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.2348930a.chunk.js.map