(this["webpackJsonpfidelija-employee"]=this["webpackJsonpfidelija-employee"]||[]).push([[0],{162:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(13),r=n.n(c),o=n(240),s=n(18),i=n(29),j=n(8),l=n.n(j),u=n(14),d=n(31),b=n.n(d),p="https://api.fidelija.com.br/",O={authenticate:function(e){return Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(p,"oauth/token"),t.abrupt("return",b.a.post(n,e));case 2:case"end":return t.stop()}}),t)})))()},setLoggedUser:function(e,t){return Object(u.a)(l.a.mark((function n(){var a,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=JSON.stringify(e),c=JSON.stringify(t),localStorage.setItem("userData",a),localStorage.setItem("authData",c);case 4:case"end":return n.stop()}}),n)})))()},getEmployee:function(e){return Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(p,"api/employee-data"),t.abrupt("return",b.a.get(n,{headers:{Authorization:"".concat(e.token_type," ").concat(e.access_token)}}));case 2:case"end":return t.stop()}}),t)})))()},getAuthData:function(){var e=localStorage.getItem("authData");if(!e)return null;try{return JSON.parse(e)}catch(t){return console.log(t),null}},getLoggedUser:function(){var e=localStorage.getItem("userData");if(!e)return null;try{return JSON.parse(e)}catch(t){return console.log(t),null}},isAuthenticated:function(){return!!localStorage.getItem("authData")},clearLoggedUser:function(){localStorage.getItem("authData")&&(localStorage.removeItem("authData"),localStorage.removeItem("userData"),window.location.replace("/"))},getUserType:function(){if(localStorage.getItem("authData")){var e=JSON.parse(localStorage.getItem("userData")),t=e.is_admin,n=e.is_employee;if(1===t)return{is_admin:!0,is_employee:!1};if(1===n)return{is_employee:!0,is_admin:!1}}}},x="https://api.fidelija.com.br/",h=O.getAuthData()&&{headers:{Authorization:"".concat(O.getAuthData().token_type," ").concat(O.getAuthData().access_token)}},m={getUserByCpf:function(e){return Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(x,"api/user/cpf"),t.abrupt("return",b.a.post(n,e,h));case 2:case"end":return t.stop()}}),t)})))()},registerPoints:function(e){return Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(x,"api/points/stablishment"),t.abrupt("return",b.a.post(n,e,h));case 2:case"end":return t.stop()}}),t)})))()},getUser:function(e){return Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(x,"api/user/").concat(e),t.abrupt("return",b.a.get(n,h));case 2:case"end":return t.stop()}}),t)})))()},getRedeemHistory:function(){return Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(x,"api/employees/redeem/history"),e.abrupt("return",b.a.get(t,h));case 2:case"end":return e.stop()}}),e)})))()},getPointsHistory:function(){return Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(x,"api/employees/points/history"),e.abrupt("return",b.a.get(t,h));case 2:case"end":return e.stop()}}),e)})))()}},f="https://api.fidelija.com.br/",g=O.getAuthData()&&{headers:{Authorization:"".concat(O.getAuthData().token_type," ").concat(O.getAuthData().access_token)}},v={getVoucher:function(e){return Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(f,"api/vouchers/").concat(e),t.abrupt("return",b.a.get(n,g));case 2:case"end":return t.stop()}}),t)})))()},completeVoucher:function(e){return Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(f,"api/vouchers"),t.abrupt("return",b.a.post(n,e,g));case 2:case"end":return t.stop()}}),t)})))()}},y=n(36),k=n(72),w=n(2),C=function(e){var t=e.component,n=Object(k.a)(e,["component"]);return Object(w.jsx)(s.b,Object(y.a)(Object(y.a)({},n),{},{render:function(e){return O.isAuthenticated()?Object(w.jsx)(s.a,{to:{pathname:"/",state:{from:e.location}}}):Object(w.jsx)(t,Object(y.a)({},e))}}))},S=function(e){var t=e.component,n=Object(k.a)(e,["component"]);return Object(w.jsx)(s.b,Object(y.a)(Object(y.a)({},n),{},{render:function(e){return O.isAuthenticated()?Object(w.jsx)(t,Object(y.a)({},e)):Object(w.jsx)(s.a,{to:{pathname:"/",state:{from:e.location}}})}}))},N=n(11),D=n(220),P=n(48),_=n(241),I=n(207),W=n(221),F=n(222),A=n(242),B=n(196),E=n(165),R=n(199),U=Object(B.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#60c3ff"}}})),M=function(e){var t=U();return Object(w.jsx)(E.a,{className:t.backdrop,open:e.open,children:Object(w.jsx)(R.a,{color:"inherit"})})},L=n(246),V=n(244),H=function(e){return Object(w.jsx)(L.a,{open:e.toggleSnack,autoHideDuration:e.time,onClose:e.onClose,anchorOrigin:{vertical:"top",horizontal:"right"},children:Object(w.jsx)(V.a,{onClose:e.onClose,severity:e.color,variant:"filled",children:e.children})})},z=n(202),Y=n(203),J=n(201),T=n(247),q=n(107),K=n(206),Q=n(245),G=n(205),X=n(166),Z=n(209),$=n(211),ee=n(204),te=n(208),ne=Object(B.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},appBar:{marginBottom:"30px"},list:{width:250}}})),ae=n(210),ce=n(212),re=n(213),oe=function(e){var t=Object(a.useState)(!1),n=Object(N.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(!1),s=Object(N.a)(o,2),j=s[0],l=s[1],u=ne(),d=Object(a.useRef)(null);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(z.a,{position:"static",className:u.appBar,children:Object(w.jsxs)(Y.a,{children:[Object(w.jsx)(J.a,{edge:"start",className:u.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return l(!0)},children:Object(w.jsx)(ee.a,{})}),Object(w.jsx)(P.a,{variant:"h6",className:u.title,children:"Painel do funcion\xe1rio"}),Object(w.jsxs)("div",{children:[Object(w.jsx)(J.a,{onClick:function(){return r(!0)},ref:d,children:Object(w.jsx)(T.a,{src:"https://api.fidelija.com.br/"+O.getLoggedUser().photo})}),Object(w.jsx)(q.a,{anchorEl:d.current,open:c,onClose:function(){return r(!1)},children:Object(w.jsx)(K.a,{component:I.a,endIcon:Object(w.jsx)(te.a,{}),color:"secondary",onClick:function(){O.clearLoggedUser()},children:"Sair"})})]})]})}),Object(w.jsx)(Q.a,{anchor:"left",open:j,onOpen:function(){return l(!0)},onClose:function(){return l(!1)},children:Object(w.jsx)("div",{className:u.list,role:"presentation",onClick:function(){return l(!1)},onKeyDown:function(){return l(!1)},children:Object(w.jsxs)(G.a,{children:[Object(w.jsxs)(X.a,{button:!0,component:i.b,to:"/",children:[Object(w.jsx)(Z.a,{children:Object(w.jsx)(ae.a,{})}),Object(w.jsx)($.a,{children:"Hist\xf3rico"})]}),Object(w.jsxs)(X.a,{button:!0,component:i.b,to:"/point-user",children:[Object(w.jsx)(Z.a,{children:Object(w.jsx)(ce.a,{})}),Object(w.jsx)($.a,{children:"Pontuar"})]}),Object(w.jsxs)(X.a,{button:!0,component:i.b,to:"/redeem",children:[Object(w.jsx)(Z.a,{children:Object(w.jsx)(re.a,{})}),Object(w.jsx)($.a,{children:"Resgate de produto"})]})]})})})]})},se=n(214),ie=n(104),je=n.n(ie),le=Object(B.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}})),ue=function(){var e=le();return Object(w.jsx)(se.a,{className:e.fab,color:"secondary",component:i.b,to:"/reader",children:Object(w.jsx)(je.a,{})})},de=n(215),be=n(216),pe=n(217),Oe=n(218),xe=n(219),he=function(e){return Object(w.jsxs)(de.a,{open:e.open,onClose:e.close,children:[Object(w.jsx)(be.a,{children:"Aviso"}),Object(w.jsx)(pe.a,{children:Object(w.jsx)(Oe.a,{children:e.text})}),Object(w.jsx)(xe.a,{children:Object(w.jsx)(I.a,{onClick:e.close,color:"primary",children:"Continuar"})})]})},me=Object(B.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},logo:{margin:e.spacing(4),width:"180px"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),fe=n.p+"static/media/void.c788c571.svg",ge=n.p+"static/media/fidelija-logo.903316ba.png",ve=function(){var e=Object(a.useState)(""),t=Object(N.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(N.a)(r,2),s=o[0],i=o[1],j=Object(a.useState)(!1),d=Object(N.a)(j,2),b=d[0],p=d[1],x=Object(a.useState)(!1),h=Object(N.a)(x,2),m=h[0],f=h[1],g=Object(a.useState)(""),v=Object(N.a)(g,2),y=v[0],k=v[1],C=me(),S=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),t={username:n,password:s,scope:"*",client_id:1,grant_type:"password",client_secret:"IQLstf5Jhow51iiBGDxp9BPxlfMDwLvnxrsTF6n6"},e.prev=2,e.next=5,O.authenticate(t);case 5:return a=e.sent,e.next=8,O.getEmployee(a.data);case 8:if(!(c=e.sent).data.employeeInfo&&!c.data.stablishment){e.next=16;break}return e.next=12,O.setLoggedUser(c.data,a.data);case 12:p(!1),window.location.reload(),e.next=19;break;case 16:p(!1),k("Acesso n\xe3o autorizado"),f(!0);case 19:e.next=27;break;case 21:e.prev=21,e.t0=e.catch(2),console.log(e.t0),p(!1),k("Ocorreu um erro tente novamente."),f(!0);case 27:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)(D.a,{component:"main",maxWidth:"xs",children:[Object(w.jsx)(M,{open:b}),Object(w.jsx)(H,{toggleSnack:m,time:4500,onClose:function(){return f(!1)},color:"error",children:y}),Object(w.jsxs)("div",{className:C.paper,children:[Object(w.jsx)("img",{src:ge,alt:"Fidelij\xe1",className:C.logo}),Object(w.jsx)(P.a,{component:"h1",variant:"h5",children:"Login de Funcion\xe1rios"}),Object(w.jsxs)("div",{className:C.form,children:[Object(w.jsx)(_.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Email",name:"email",type:"email",value:n,onChange:function(e){return c(e.target.value)}}),Object(w.jsx)(_.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Senha",type:"password",value:s,onChange:function(e){return i(e.target.value)}}),Object(w.jsx)(I.a,{fullWidth:!0,variant:"contained",color:"primary",className:C.submit,onClick:function(){return S()},children:"Entrar"}),Object(w.jsx)(W.a,{container:!0,children:Object(w.jsx)(W.a,{item:!0,xs:!0,children:Object(w.jsx)(F.a,{href:"#",variant:"body2",children:"Esqueceu a senha?"})})})]})]}),Object(w.jsx)(A.a,{mt:8,children:Object(w.jsxs)(P.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(w.jsx)(F.a,{color:"inherit",href:"https://parceiro.fidelija.com.br/",children:"Fidelij\xe1"})," ",(new Date).getFullYear(),"."]})})]})},ye=n(82),ke=n.n(ye),we=n(223),Ce=n(111),Se=n(224),Ne=n(225),De=n(226),Pe=n(227),_e=n(228),Ie=n(74),We=Object(B.a)((function(e){return{button:{color:e.palette.common.white,backgroundColor:Ie.a[400],"&:hover":{backgroundColor:Ie.a[500]}},paper:{padding:"10px"},gridContainer:{marginBottom:"80px"},header:{marginBottom:"20px"}}})),Fe=function(){var e=Object(a.useState)(!1),t=Object(N.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),o=Object(N.a)(r,2),s=o[0],i=o[1],j=Object(a.useState)(""),d=Object(N.a)(j,2),b=d[0],p=d[1],x=Object(a.useState)(""),h=Object(N.a)(x,2),f=h[0],g=h[1],v=Object(a.useState)(""),k=Object(N.a)(v,2),C=k[0],S=k[1],F=Object(a.useState)(!1),A=Object(N.a)(F,2),B=A[0],E=A[1],R=Object(a.useState)(""),U=Object(N.a)(R,2),L=U[0],V=U[1],H=We(),z=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key){e.next=17;break}return c(!0),n={cpf:b},e.prev=3,e.next=6,m.getUserByCpf(n);case 6:a=e.sent,i(a.data),c(!1),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0),c(!1),V("N\xe3o foi poss\xedvel encontrar o usu\xe1rio."),E(!0);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),t={user_id:s.id,ammount:f,reference:C,employeeId:O.getLoggedUser().id},e.prev=2,e.next=5,m.registerPoints(t);case 5:i(null),g(""),p(""),S(""),c(!1),V("Usu\xe1rio pontuado com sucesso."),E(!0),e.next=20;break;case 14:e.prev=14,e.t0=e.catch(2),c(!1),console.log(e.t0),V("N\xe3o foi poss\xedvel pontuar o usu\xe1rio."),E(!0);case 20:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{children:[Object(w.jsx)(oe,{}),Object(w.jsx)(M,{open:n}),Object(w.jsx)(he,{open:B,close:function(){return E(!1)},text:L}),Object(w.jsxs)(D.a,{maxWidth:"lg",children:[Object(w.jsxs)("div",{className:H.header,children:[Object(w.jsx)(P.a,{variant:"h5",children:"Pontuar usu\xe1rio"}),Object(w.jsx)(we.a,{})]}),Object(w.jsxs)(W.a,{className:H.gridContainer,container:!0,spacing:3,direction:"column",justifyContent:"center",children:[Object(w.jsx)(W.a,{item:!0,xs:12,children:Object(w.jsxs)(Ce.a,{variant:"outlined",className:H.paper,children:[Object(w.jsx)(ke.a,{mask:"999.999.999-99",maskChar:"",value:b,onChange:function(e){return p(e.target.value)},onKeyPress:function(e){return z(e)},children:function(e){return Object(w.jsx)(_.a,Object(y.a)(Object(y.a)({},e),{},{fullWidth:!0,variant:"outlined",label:"CPF",margin:"normal",type:"text"}))}}),s&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(_.a,{fullWidth:!0,type:"number",variant:"outlined",label:"Valor da compra",margin:"normal",name:"valor",value:f,onChange:function(e){return g(e.target.value)}}),Object(w.jsx)(_.a,{fullWidth:!0,variant:"outlined",label:"Refer\xeancia",margin:"normal",name:"referencia",value:C,onChange:function(e){return S(e.target.value)}})]})]})}),s&&Object(w.jsx)(W.a,{item:!0,xs:12,children:Object(w.jsxs)(Ce.a,{variant:"outlined",children:[Object(w.jsxs)(G.a,{dense:!1,children:[Object(w.jsxs)(X.a,{children:[Object(w.jsx)(Se.a,{children:Object(w.jsx)(T.a,{src:"https://api.fidelija.com.br/"+s.photo,alt:s.name})}),Object(w.jsx)($.a,{children:s.name})]}),Object(w.jsxs)(X.a,{children:[Object(w.jsx)(Se.a,{children:Object(w.jsx)(T.a,{style:{backgroundColor:"#604bd2"},children:Object(w.jsx)(Ne.a,{})})}),Object(w.jsx)($.a,{children:s.cpf})]}),Object(w.jsxs)(X.a,{children:[Object(w.jsx)(Se.a,{children:Object(w.jsx)(T.a,{style:{backgroundColor:"#604bd2"},children:Object(w.jsx)(De.a,{})})}),Object(w.jsx)($.a,{children:C||"- - -"})]}),Object(w.jsxs)(X.a,{children:[Object(w.jsx)(Se.a,{children:Object(w.jsx)(T.a,{style:{backgroundColor:"#604bd2"},children:Object(w.jsx)(Pe.a,{})})}),Object(w.jsx)($.a,{children:s.stablishment_points||"- - -"})]}),Object(w.jsxs)(X.a,{children:[Object(w.jsx)(Se.a,{children:Object(w.jsx)(T.a,{style:{backgroundColor:"rgb(38 165 43)"},children:Object(w.jsx)(_e.a,{})})}),Object(w.jsx)($.a,{children:Math.ceil(5*f)})]})]}),Object(w.jsx)("div",{style:{padding:"10px"},children:Object(w.jsx)(I.a,{className:H.button,variant:"contained",color:"inherit",fullWidth:!0,size:"medium",disabled:""===f||""===C,onClick:function(){return Y()},children:"Pontuar"})})]})})]})]}),Object(w.jsx)(ue,{})]})},Ae=Object(B.a)((function(e){return{button:{color:e.palette.common.white,backgroundColor:Ie.a[400],"&:hover":{backgroundColor:Ie.a[500]}},inputs:{padding:"15px"},notFound:{textAlign:"center",margin:"70px"},notFoundMsg:{marginTop:"20px",marginBottom:"20px"},paperPadding:{padding:30}}})),Be=function(){var e=Object(a.useState)(null),t=Object(N.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(N.a)(r,2),i=o[0],j=o[1],d=Object(a.useState)(""),b=Object(N.a)(d,2),p=b[0],x=b[1],h=Object(a.useState)(!0),f=Object(N.a)(h,2),g=f[0],v=f[1],y=Object(a.useState)(!1),k=Object(N.a)(y,2),C=k[0],S=k[1],W=Object(a.useState)(""),F=Object(N.a)(W,2),A=F[0],B=F[1],E=Object(s.g)().id,R=Ae();Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.getUser(E);case 3:t=e.sent,n=t.data,console.log(n),c(n),v(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),v(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var U=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),t={user_id:n.id,ammount:i,reference:p,employeeId:O.getLoggedUser().id},e.prev=2,e.next=5,m.registerPoints(t);case 5:j(""),x(""),v(!1),B("Usu\xe1rio pontuado com sucesso."),S(!0),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0),v(!1),B("N\xe3o foi possivel pontuar o usu\xe1rio."),S(!0);case 18:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{children:[Object(w.jsx)(oe,{}),Object(w.jsx)(M,{open:g}),Object(w.jsx)(he,{open:C,close:function(){return S(!1)},text:A}),g||Object(w.jsx)(w.Fragment,{children:n?Object(w.jsx)(D.a,{maxWidth:"lg",children:Object(w.jsxs)(Ce.a,{variant:"outlined",children:[Object(w.jsxs)("div",{className:R.inputs,children:[Object(w.jsx)(_.a,{fullWidth:!0,type:"number",variant:"outlined",label:"Valor da compra",margin:"normal",name:"valor",value:i,onChange:function(e){return j(e.target.value)}}),Object(w.jsx)(_.a,{fullWidth:!0,variant:"outlined",label:"Referencia",margin:"normal",name:"referencia",value:p,onChange:function(e){return x(e.target.value)}})]}),Object(w.jsxs)(G.a,{dense:!1,children:[Object(w.jsxs)(X.a,{children:[Object(w.jsx)(Se.a,{children:Object(w.jsx)(T.a,{src:"https://api.fidelija.com.br/"+n.photo,alt:n.name})}),Object(w.jsx)($.a,{children:n.name})]}),Object(w.jsxs)(X.a,{children:[Object(w.jsx)(Se.a,{children:Object(w.jsx)(T.a,{style:{backgroundColor:"#604bd2"},children:Object(w.jsx)(Ne.a,{})})}),Object(w.jsx)($.a,{children:n.cpf})]}),Object(w.jsxs)(X.a,{children:[Object(w.jsx)(Se.a,{children:Object(w.jsx)(T.a,{style:{backgroundColor:"#604bd2"},children:Object(w.jsx)(De.a,{})})}),Object(w.jsx)($.a,{children:p||"- - -"})]}),Object(w.jsxs)(X.a,{children:[Object(w.jsx)(Se.a,{children:Object(w.jsx)(T.a,{style:{backgroundColor:"#604bd2"},children:Object(w.jsx)(Pe.a,{})})}),Object(w.jsx)($.a,{children:n.stablishment_points||"- - -"})]}),Object(w.jsxs)(X.a,{children:[Object(w.jsx)(Se.a,{children:Object(w.jsx)(T.a,{style:{backgroundColor:"rgb(38 165 43)"},children:Object(w.jsx)(_e.a,{})})}),Object(w.jsx)($.a,{children:Math.ceil(5*i)})]})]}),Object(w.jsx)("div",{style:{padding:"10px"},children:Object(w.jsx)(I.a,{className:R.button,variant:"contained",color:"inherit",fullWidth:!0,size:"medium",disabled:""===i||""===p,onClick:function(){return U()},children:"Pontuar"})})]})}):Object(w.jsx)("div",{className:R.notFound,children:Object(w.jsxs)(D.a,{maxWidth:"lg",children:[Object(w.jsx)("img",{src:fe,width:"250"}),Object(w.jsx)(P.a,{variant:"h6",className:R.notFoundMsg,children:"O usu\xe1rio n\xe3o foi encontrado"})]})})}),Object(w.jsx)(ue,{})]})},Ee=Object(B.a)((function(e){return{button:{color:e.palette.common.white,backgroundColor:Ie.a[400],"&:hover":{backgroundColor:Ie.a[500]}},imageContainer:{display:"flex",padding:"15px"},productPicture:{margin:"auto",border:"2px solid #bdbdbd",width:e.spacing(25),height:e.spacing(25)},notFound:{textAlign:"center",margin:"70px"},notFoundMsg:{marginTop:"20px",marginBottom:"20px"},paperPadding:{padding:30}}})),Re=n(229),Ue=n(230),Me=n(231),Le=function(){var e=Object(a.useState)(null),t=Object(N.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),o=Object(N.a)(r,2),i=o[0],j=o[1],d=Object(a.useState)(!1),b=Object(N.a)(d,2),p=b[0],O=b[1],x=Object(a.useState)(""),h=Object(N.a)(x,2),m=h[0],f=h[1],g=Object(s.g)().id,y=Ee();Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.getVoucher(g);case 3:t=e.sent,n=t.data,c(n),j(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var k=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),t={id:g},console.log(t),e.prev=3,e.next=6,v.completeVoucher(t);case 6:j(!1),f("Resgate concluido com sucesso."),O(!0),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0),j(!1),f("N\xe3o foi possivel efetuar o resgate."),O(!0);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{children:[Object(w.jsx)(oe,{}),Object(w.jsx)(M,{open:i}),Object(w.jsx)(he,{open:p,close:function(){return O(!1)},text:m}),i||Object(w.jsx)(w.Fragment,{children:n?Object(w.jsx)(D.a,{maxWidth:"lg",children:Object(w.jsxs)(Ce.a,{variant:"outlined",children:[Object(w.jsx)("div",{className:y.imageContainer,children:Object(w.jsx)(T.a,{className:y.productPicture,src:"https://api.fidelija.com.br/"+n.product.image})}),Object(w.jsxs)(G.a,{children:[Object(w.jsxs)(X.a,{children:[Object(w.jsx)(Se.a,{children:Object(w.jsx)(T.a,{children:Object(w.jsx)(Re.a,{})})}),Object(w.jsx)($.a,{primary:"Produto",secondary:n.product.name})]}),Object(w.jsxs)(X.a,{children:[Object(w.jsx)(Se.a,{children:Object(w.jsx)(T.a,{children:Object(w.jsx)(Ue.a,{})})}),Object(w.jsx)($.a,{primary:"Estoque",secondary:n.product.stock})]}),Object(w.jsxs)(X.a,{children:[Object(w.jsx)(Se.a,{children:Object(w.jsx)(T.a,{children:Object(w.jsx)(ce.a,{})})}),Object(w.jsx)($.a,{primary:"Valor em pontos",secondary:n.product.cost})]}),Object(w.jsxs)(X.a,{children:[Object(w.jsx)(Se.a,{children:Object(w.jsx)(T.a,{children:Object(w.jsx)(Me.a,{})})}),Object(w.jsx)($.a,{primary:"Validade",secondary:n.limit_date})]})]}),Object(w.jsx)("div",{style:{padding:"10px"},children:Object(w.jsx)(I.a,{className:y.button,fullWidth:!0,variant:"contained",onClick:function(){return k()},children:"Confirmar"})})]})}):Object(w.jsx)("div",{className:y.notFound,children:Object(w.jsxs)(D.a,{maxWidth:"lg",children:[Object(w.jsx)("img",{src:fe,width:"250"}),Object(w.jsx)(P.a,{variant:"h6",className:y.notFoundMsg,children:"O cupom inserido \xe9 inv\xe1lido ou n\xe3o existe."})]})})}),Object(w.jsx)(ue,{})]})},Ve=n(85),He=n.n(Ve),ze=Object(B.a)((function(e){return{paperContent:{padding:"50px",display:"flex",justifyContent:"center"},qr:{width:"100%"},header:{marginBottom:"20px"},button:{marginTop:"15px",marginBottom:"30px"}}})),Ye=function(){var e=Object(a.useRef)(null),t=ze();return Object(w.jsxs)("div",{children:[Object(w.jsx)(oe,{}),Object(w.jsxs)(D.a,{children:[Object(w.jsxs)("div",{className:t.header,children:[Object(w.jsx)(P.a,{variant:"h5",children:"Leitor de c\xf3digo QR"}),Object(w.jsx)(we.a,{})]}),Object(w.jsx)(Ce.a,{variant:"outlined",className:t.paperContent,children:Object(w.jsx)(He.a,{className:t.qr,delay:1e3,onError:function(e){return console.log(e)},onScan:function(e){e&&window.location.replace(e)}})}),Object(w.jsx)(I.a,{fullWidth:!0,variant:"contained",color:"primary",className:t.button,onClick:function(){return e.current.openImageDialog()},children:"Upload do C\xf3digo QR"}),Object(w.jsx)(He.a,{style:{display:"none"},ref:e,delay:300,onError:function(e){return console.log(e)},onScan:function(e){return function(e){e&&window.location.replace(e)}(e)},legacyMode:!0})]})]})},Je=n(86),Te=n.n(Je),qe=n(106),Ke=n(243),Qe=n(232),Ge=n(234),Xe=n(233),Ze=n(235),$e=n(236),et=n(237),tt=n(238),nt=n(239),at=Object(B.a)((function(e){return{paper:{padding:"6px 16px"}}})),ct=Object(qe.a)({overrides:{MuiTimelineItem:{missingOppositeContent:{"&:before":{display:"none"}}}}}),rt=function(){var e=Object(a.useState)([]),t=Object(N.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),o=Object(N.a)(r,2),s=o[0],i=o[1],j=Object(a.useState)(!0),d=Object(N.a)(j,2),b=d[0],p=d[1],O=Object(a.useState)(0),x=Object(N.a)(O,2),h=x[0],f=x[1],g=at();return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.getRedeemHistory();case 3:return t=e.sent,e.next=6,m.getPointsHistory();case 6:n=e.sent,console.log("points",n.data),console.log("redeem",t.data),c(t.data.data),i(n.data.data),p(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0),p(!1);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)(oe,{}),Object(w.jsx)(M,{open:b}),Object(w.jsxs)("div",{children:[Object(w.jsxs)(Ke.a,{value:h,onChange:function(e,t){return f(t)},centered:!0,children:[Object(w.jsx)(Qe.a,{label:"Pontua\xe7\xf5es"}),Object(w.jsx)(Qe.a,{label:"Resgates"})]}),Object(w.jsx)(we.a,{}),Object(w.jsx)("div",{role:"tabpanel",hidden:0!==h,id:"full-width-tabpanel-".concat(0),children:0===h&&Object(w.jsx)(Xe.a,{align:"left",children:s.map((function(e){return Object(w.jsx)(Ge.a,{theme:ct,children:Object(w.jsxs)(Ze.a,{children:[Object(w.jsxs)($e.a,{children:[Object(w.jsx)(et.a,{color:"primary"}),Object(w.jsx)(tt.a,{})]}),Object(w.jsxs)(nt.a,{children:[Object(w.jsxs)(Ce.a,{variant:"outlined",elevation:3,className:g.paper,children:[Object(w.jsx)(P.a,{variant:"h6",component:"h2",children:e.client}),Object(w.jsxs)(P.a,{variant:"body1",color:"textSecondary",children:[Object(w.jsxs)("span",{style:{marginRight:"15px"},children:["Pontos: ",e.amount]}),Object(w.jsxs)("span",{children:["Ref: ",e.transaction]})]})]}),Object(w.jsx)(P.a,{variant:"body2",color:"textSecondary",children:Te()(e.created_at).format("DD/MM/YYYY - HH:mm")})]})]})},e.id)}))})}),Object(w.jsx)("div",{role:"tabpanel",hidden:1!==h,id:"full-width-tabpanel-".concat(1),children:1===h&&Object(w.jsx)(Xe.a,{align:"left",children:n.map((function(e){return Object(w.jsx)(Ge.a,{theme:ct,children:Object(w.jsxs)(Ze.a,{children:[Object(w.jsxs)($e.a,{children:[Object(w.jsx)(et.a,{color:"secondary"}),Object(w.jsx)(tt.a,{})]}),Object(w.jsxs)(nt.a,{children:[Object(w.jsxs)(Ce.a,{variant:"outlined",elevation:3,className:g.paper,children:[Object(w.jsx)(P.a,{variant:"h6",component:"h2",children:e.client}),Object(w.jsx)(P.a,{children:e.product}),Object(w.jsxs)(P.a,{variant:"body1",color:"textSecondary",children:["Pontos: ",e.amount]})]}),Object(w.jsx)(P.a,{variant:"body2",color:"textSecondary",children:Te()(e.created_at).format("DD/MM/YYYY - HH:mm")})]})]})},e.id)}))})})]}),Object(w.jsx)(ue,{})]})},ot=Object(B.a)((function(e){return{button:{color:e.palette.common.white,backgroundColor:Ie.a[400],"&:hover":{backgroundColor:Ie.a[500]}},gridContainer:{marginBottom:"30px"},paper:{padding:"10px"},imageContainer:{display:"flex",padding:"15px"},productPicture:{margin:"auto",border:"2px solid #bdbdbd",width:e.spacing(25),height:e.spacing(25)},header:{marginBottom:"20px"}}})),st=function(){var e=Object(a.useState)(""),t=Object(N.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),o=Object(N.a)(r,2),s=o[0],i=o[1],j=Object(a.useState)(!1),d=Object(N.a)(j,2),b=d[0],p=d[1],O=Object(a.useState)(!1),x=Object(N.a)(O,2),h=x[0],m=x[1],f=Object(a.useState)(""),g=Object(N.a)(f,2),y=g[0],k=g[1],C=ot(),S=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key){e.next=18;break}return p(!0),e.prev=2,e.next=5,v.getVoucher(n);case 5:a=e.sent,c=a.data,i(c),p(!1),c||(k("Cupom n\xe3o encontrado."),m(!0)),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0),p(!1),k("Ocorreu um erro, tente novamente."),m(!0);case 18:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),i(null),t={id:n},e.prev=3,e.next=6,v.completeVoucher(t);case 6:p(!1),k("Resgate concluido com sucesso."),m(!0),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0),p(!1),k("N\xe3o foi possivel efetuar o resgate."),m(!0);case 17:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{children:[Object(w.jsx)(oe,{}),Object(w.jsx)(M,{open:b}),Object(w.jsx)(he,{open:h,close:function(){return m(!1)},text:y}),Object(w.jsxs)(D.a,{maxWidth:"lg",children:[Object(w.jsxs)("div",{className:C.header,children:[Object(w.jsx)(P.a,{variant:"h5",children:"Resgate"}),Object(w.jsx)(we.a,{})]}),Object(w.jsxs)(W.a,{className:C.gridContainer,container:!0,spacing:3,direction:"column",justifyContent:"center",children:[Object(w.jsx)(W.a,{item:!0,className:C.gridContainer,xs:12,children:Object(w.jsx)(Ce.a,{variant:"outlined",className:C.paper,children:Object(w.jsx)(_.a,{fullWidth:!0,variant:"outlined",label:"C\xf3digo de resgate",margin:"normal",type:"text",value:n,onChange:function(e){return c(e.target.value)},onKeyPress:function(e){return S(e)}})})}),s&&Object(w.jsx)(W.a,{item:!0,xs:12,children:Object(w.jsxs)(Ce.a,{variant:"outlined",children:[Object(w.jsx)("div",{className:C.imageContainer,children:Object(w.jsx)(T.a,{className:C.productPicture,src:"https://api.fidelija.com.br/"+s.product.image})}),Object(w.jsxs)(G.a,{children:[Object(w.jsxs)(X.a,{children:[Object(w.jsx)(Se.a,{children:Object(w.jsx)(T.a,{children:Object(w.jsx)(Re.a,{})})}),Object(w.jsx)($.a,{primary:"Produto",secondary:s.product.name})]}),Object(w.jsxs)(X.a,{children:[Object(w.jsx)(Se.a,{children:Object(w.jsx)(T.a,{children:Object(w.jsx)(Ue.a,{})})}),Object(w.jsx)($.a,{primary:"Estoque",secondary:s.product.stock})]}),Object(w.jsxs)(X.a,{children:[Object(w.jsx)(Se.a,{children:Object(w.jsx)(T.a,{children:Object(w.jsx)(ce.a,{})})}),Object(w.jsx)($.a,{primary:"Valor em pontos",secondary:s.product.cost})]}),Object(w.jsxs)(X.a,{children:[Object(w.jsx)(Se.a,{children:Object(w.jsx)(T.a,{children:Object(w.jsx)(Me.a,{})})}),Object(w.jsx)($.a,{primary:"Validade",secondary:s.limit_date})]})]}),Object(w.jsx)("div",{style:{padding:"10px"},children:Object(w.jsx)(I.a,{className:C.button,fullWidth:!0,variant:"contained",onClick:function(){return F()},children:"Confirmar"})})]})})]})]}),Object(w.jsx)(ue,{})]})},it=function(){return Object(w.jsx)(s.a,{to:"/"})},jt=function(){return Object(w.jsx)(i.a,{children:Object(w.jsxs)(s.d,{children:[O.isAuthenticated()?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(S,{path:"/",exact:!0,component:rt}),Object(w.jsx)(S,{path:"/user/search/:id",component:Be}),Object(w.jsx)(S,{path:"/voucher/:id",component:Le}),Object(w.jsx)(S,{path:"/redeem",component:st}),Object(w.jsx)(S,{path:"/reader",component:Ye}),Object(w.jsx)(S,{path:"/point-user",component:Fe})]}):Object(w.jsx)(C,{path:"/",exact:!0,component:ve}),Object(w.jsx)(s.b,{path:"*",exact:!0,component:it})]})})};var lt=function(){return Object(w.jsxs)("div",{style:{overflow:"hidden",position:"relative"},children:[Object(w.jsx)(o.a,{}),Object(w.jsx)(jt,{})]})};r.a.render(Object(w.jsx)(lt,{}),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.ecbca046.chunk.js.map