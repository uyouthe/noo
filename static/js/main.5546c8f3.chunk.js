(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports={img:"style_img__1Zh_g",reverse:"style_reverse__vDji2"}},31:function(e,t,n){e.exports={logo:"style_logo__3Md10",root:"style_root__3tKLr"}},37:function(e,t,n){e.exports={root:"style_root__2NkpN"}},38:function(e,t,n){e.exports={root:"style_root__3KF15"}},39:function(e,t,n){e.exports={root:"style_root__NTJeY"}},42:function(e,t,n){e.exports=n(63)},48:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(19),i=n.n(o),c=(n(47),n(48),n(8)),s=n(9),l=n(11),u=n(10),m=n(12),p=n(17),d=n(15),f=n(2),h=n(13),v=n(3),y=n(25),g=function(e,t,n){return Object(f.a)({},e,Object(h.a)({},t,n))},E=function(e,t){return Object(v.b)(e,function(e,n){return t(function(t,n){return e({type:t,payload:n})},n)})},b=function(e,t){return e.preventDefault(),t(e)},w=function(e,t){return function(e){for(var t=e.split(""),n=0;n<t.length;n++)if(t[n].toUpperCase()!==t[n])return t[n]=t[n].toUpperCase(),t.join("");return"A"+t.slice(0,-1).join("")}(function(e,t){var n=Object.keys(t),r=e;return n.forEach(function(e){r=r.replace(e,t[e])}),r}(Object(y.keccak512)(e+t).slice(0,16),{1:"[",3:"?",5:"~",8:"^",9:"&"}))},O=function(e){return fetch("https://favicon.keeweb.info/"+e).then(function(e){return e.blob()}).then(function(e){return new Promise(function(t,n){var r=new FileReader;r.onloadend=function(){var e=r.result;"data:"!==e?t(e):n()},r.onerror=n,r.readAsDataURL(e)})})},j=function(e,t){var n={};return Object.keys(e).filter(function(e){return e!==t}).forEach(function(t){n[t]=e[t]}),n},k=function(e){return function(t){"Escape"===t.key&&e()}},N=function(e,t){var n={};return Object.keys(e).forEach(function(r){(""===t||r.includes(t))&&(n[r]=e[r])}),n},A=function(e,t){return function(n){return e({type:t,payload:n.target.value})}},x=n(26),D=n.n(x),I=n(31),S=n.n(I);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var L=a.a.createElement("path",{d:"M81.293 30.567L49.999 12.5 18.625 30.612l-1.098.639v37.5L46.512 85.48l2.158 1.245 1.329.775 1.169-.686 2.324-1.335 28.98-16.729v-37.5l-1.179-.683zM48.67 83.845l-28.645-16.54V34.309L48.67 50.847v32.998zm1.249-35.159L21.123 32.06l28.876-16.672 28.798 16.626-28.878 16.672z"}),R=a.a.createElement("path",{d:"M37.97 50.298c-1.662-2.99-4.833-4.396-7.093-3.146-2.261 1.25-2.749 4.689-1.092 7.68a8.173 8.173 0 0 0 1.568 1.989l-1.948 10.543 6.791 4.369-1.214-13.307a3.786 3.786 0 0 0 1.896-.447c2.254-1.249 2.747-4.69 1.092-7.681z"}),F=function(e){var t=e.svgRef,n=C(e,["svgRef"]);return a.a.createElement("svg",_({height:48,width:48,viewBox:"0 0 100 100",ref:t},n),L,R)},P=a.a.forwardRef(function(e,t){return a.a.createElement(F,_({svgRef:t},e))}),T=(n.p,function(e){return a.a.createElement("div",Object.assign({className:S.a.root},e),a.a.createElement(P,{className:S.a.logo}),e.children)}),M=function(e){return a.a.createElement("div",e,a.a.createElement(T,null,a.a.createElement("h1",null,"Noo \u2013 the password manager")),a.a.createElement("p",null,"Noo is the ",a.a.createElement("em",null,"truly")," secure password manager that stores all the data locally and never sends anything anywhere outside. There are no servers \u2013 ",a.a.createElement("em",null,"everything")," is stored here at your device."),a.a.createElement("p",null,"Noo can sync your passwords across any number of devices without the internet access. As long as you know your secret, Noo can re-generate your passwords anytime you use a new device."),a.a.createElement("h2",null,"How it works?"),a.a.createElement("p",null,"Noo generates strong passwords for the websites you use. Neither the password nor the secret are sent over the internet \u2013 the whole thing happens on your device."),a.a.createElement("p",null,"If the same secret is given, the same domain names would render the same passwords, so this is how Noo syncs. You just enter your secret and the domain \u2013\xa0the given password will be the same."),a.a.createElement("h2",null,"The technology behind Noo"),a.a.createElement("p",null,"There is ",a.a.createElement("a",{href:"https://nakedsecurity.sophos.com/2012/10/04/sha-3-hash-competition-concludes-keccak/",target:"_blank",rel:"noopener noreferrer"},"no way to acquire your secret")," from the password \u2013 the algorythm is the same as used in Etherium, so you are safe here."),a.a.createElement("p",null,"Noo, as well as Etherium blockchain, use the ",a.a.createElement("em",null,a.a.createElement("a",{href:"https://keccak.team/",target:"_blank",rel:"noopener noreferrer"},"Keccak"))," hash function that is pretty much ",a.a.createElement("a",{href:"https://en.wikipedia.org/wiki/SHA-3",target:"_blank",rel:"noopener noreferrer"},"can't be predicted"),". Thus, there is no way to decode your passwords without a secret that only you know."),a.a.createElement("p",{className:"pillbox",style:{justifyContent:"space-between"}},a.a.createElement("span",null,"\xa9 ",a.a.createElement("a",{href:"https://miloslav.website",target:"_blank",rel:"noopener noreferrer"},"Miloslav Voloskov")),a.a.createElement("span",{className:"pillbox"},a.a.createElement("a",{href:"https://github.com/uyouthe/noo",target:"_blank",rel:"noopener noreferrer"},"GitHub"),a.a.createElement("a",{href:"https://cdn.jsdelivr.net/gh/uyouthe/noo/LICENSE",target:"_blank",rel:"noopener noreferrer"},"Legal"))))},z=function(e){return a.a.createElement(D.a,{title:"Faq | Noo \u2013 the papassword manager"},a.a.createElement(r.Fragment,null,a.a.createElement("p",null,a.a.createElement(p.b,{to:"/"},"<"," Go to main page")),a.a.createElement(M,null)))},B=function(e){return a.a.createElement(d.a,{to:{pathname:"/"}})},U=n(28),W=U.b.div({enter:{x:0,opacity:1,delay:150,transition:{x:{type:"spring",stiffness:1e3,damping:15},default:{duration:300}}},exit:{x:50,opacity:0,transition:{duration:150}}}),q=n(37),H=n.n(q),J=function(e){return a.a.createElement("input",Object.assign({className:H.a.root},e))};J.displayName="Input";var V=J,K=n(38),Y=n.n(K),G=a.a.forwardRef(function(e,t){return a.a.createElement("button",Object.assign({ref:t},e,{className:[Y.a.root,e.className].join(" ")}),e.children)});G.displayName="Button";var X=G,Z=function(e){return a.a.createElement("div",Object.assign({style:{display:"flex",justifyContent:"center",margin:"24px 0"}},e),e.children)};Z.displayName="Center";var $=Z,Q=function(e){return a.a.createElement("div",Object.assign({style:{padding:e.padding||"12px"}},e),e.children)};Q.displayName="Pad";var ee=Q,te=function(e){return a.a.createElement(ee,{padding:"64px 0 0 0"},a.a.createElement("h2",null,"The secret"),a.a.createElement("p",null,"The secret will be your master password. If you know it, you can access your passwords on any other device."),a.a.createElement("p",null,"If you don't, there's no way to acquire it again. It can't be extracted from any of your passwords either."),a.a.createElement("p",null,"This is the first and the last time you see your secret there. Once you enter it, there'll be no way back."),a.a.createElement("form",{onSubmit:e.commit},a.a.createElement(V,{autoFocus:!0,required:!0,type:"password",placeholder:"keyboardcat",value:e.secret,onChange:e.edit}),a.a.createElement($,null,a.a.createElement(X,null,"Submit secret"))),a.a.createElement(M,{style:{marginTop:"100px"}}))};te.displayName="SecretInput";var ne=E(function(e){return{secret:e.ui.secret}},function(e){return{edit:function(t){return e("editSecret",t.target.value)},commit:function(t){return b(t,function(){return e("commitSecret")})}}})(te),re={editSecret:function(e,t){return Object(f.a)({},e,{ui:Object(f.a)({},e.ui,{secret:t})})},commitSecret:function(e){return Object(f.a)({},e,{secret:Object(y.keccak512)(e.ui.secret),ui:Object(f.a)({},e.ui,{secret:""})})}},ae=function(e){return a.a.createElement(r.Fragment,null,a.a.createElement(T,null),a.a.createElement(ne,null))},oe=n(14);function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ce(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var se=a.a.createElement("path",{d:"M16.5 16.5C-2 35-2 65 16.5 83.5s48.5 18.5 67 0 18.5-48.5 0-67-48.5-18.5-67 0zm35.4 6c4 0 7.2 3.3 7.2 7.3s-3.3 7.3-7.2 7.3c-4 0-7.3-3.3-7.3-7.4 0-4 3.3-7.2 7.3-7.2zm10.3 48.9c-.2.6-.6 1.3-1 1.7-2.6 2.7-5.8 4.3-9.6 4.3-1.8 0-3.5 0-5.3-.3-2.9-.4-6.6-4-6.1-7.8l1.2-7.8c.8-4.5 1.6-9.1 2.4-13.6 0-.3.1-.6.1-.9 0-1.9-.6-2.6-2.5-2.8-.8-.1-1.6-.2-2.4-.4-.9-.3-1.4-1.1-1.3-1.8.1-.8.6-1.3 1.6-1.5.5-.1 1.1-.1 1.7-.1h13.8c1.7 0 2.7.8 2.7 2.5 0 1.4-.2 2.8-.5 4.2-.9 5.2-1.9 10.3-2.8 15.5-.3 1.7-.7 3.4-.9 5.1-.1.8 0 1.7.2 2.5.3 1.1 1.1 1.7 2.2 1.6.9-.1 1.8-.4 2.7-.8.7-.3 1.3-.8 2-1 1.2-.4 2.1.3 1.8 1.4z"}),le=function(e){var t=e.svgRef,n=ce(e,["svgRef"]);return a.a.createElement("svg",ie({height:36,width:36,viewBox:"0 0 100 100",ref:t},n),se)},ue=a.a.forwardRef(function(e,t){return a.a.createElement(le,ie({svgRef:t},e))}),me=(n.p,function(e){return a.a.createElement("div",{className:"teeter"},a.a.createElement(T,null,a.a.createElement("h2",null,"Passwords")),a.a.createElement(p.b,{to:"/faq",target:"_blank"},a.a.createElement(ue,null)))}),pe=function(e){return a.a.createElement(r.Fragment,null,a.a.createElement("p",null,"It's time to make some passwords."),a.a.createElement("p",null,"Add the websites and services you use and Noo will generate the secure passwords for them."),a.a.createElement("p",null,"If you're using Noo for the first time, we recommend you to change your current passwords to what Noo will generate for you."))},de=function(e){return a.a.createElement(X,{autoFocus:!0,type:"button",onClick:e.activateDomainInput},"Add...")},fe=function(e){return a.a.createElement(X,{type:"button",onClick:e.toggleDomainEditing},"Edit...")},he=function(e){return a.a.createElement(X,{type:"button",onClick:e.toggleDomainEditing},"<"," Back")},ve=function(e){return a.a.createElement(ee,{padding:"64px 0"},a.a.createElement("p",{style:{margin:0}},"Nothing found."))},ye=function(e){return a.a.createElement(ee,{padding:"32px 0 0 0"},a.a.createElement(V,Object.assign({placeholder:"Search...",autoFocus:!0},e)))};ye.displayName="Search";var ge=Object(v.b)(function(e){return{value:e.search}},function(e){return{onChange:A(e,"editSearch")}})(ye),Ee={editSearch:function(e,t){return g(e,"search",t)}},be=n(39),we=n.n(be),Oe=function(e){return a.a.createElement("div",Object.assign({className:we.a.root},e),e.children)},je=function(e){return{padding:"8px",alignItems:"center",display:"flex",flexDirection:e.domainEditingActive?"row-reverse":"row",animationDelay:-1*(.2+Math.random())/2+"s",animationDuration:.2+Math.random()/2+"s"}};var ke=n(27),Ne=n.n(ke),Ae=function(e){return a.a.createElement("img",{alt:"",src:e.src,className:Ne.a.img})};function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function De(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ie=a.a.createElement("path",{d:"M65.1 17.8V6.5H35.8v11.3H11.4v6.1h7.3l5.2 67.7h53.3l5.2-67.7h8.3v-6.1H65.1zm-23.2-5.3h17.2v5.2H41.9v-5.2zm-5.7 64.6l-2.4-44.3 6.1-.3 2.4 44.3-6.1.3zm17.3-.3h-6.1V32.6h6.1v44.2zm11.2.2l-6.1-.3L61 32.4l6.1.3L64.7 77z"}),Se=function(e){var t=e.svgRef,n=De(e,["svgRef"]);return a.a.createElement("svg",xe({width:16,height:16,ref:t},n),a.a.createElement("svg",xe({fill:"#C00",viewBox:"1 -1 100 100",transform:"matrix(.69 0 0 .69 186 186)",ref:t},n),Ie))},_e=a.a.forwardRef(function(e,t){return a.a.createElement(Se,xe({svgRef:t},e))}),Ce=(n.p,function(e){return a.a.createElement(_e,{className:Ne.a.reverse})}),Le=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).init=function(){var e=this;this.props.domainEditingActive||this.props.iconIsPresent||O(this.props.name).then(function(t){return e.props.setIcon({name:e.props.name,value:t})}).catch(function(){return console.warn('It seems like "'.concat(e.props.name,"\" doesn't have an icon."))})}.bind(Object(oe.a)(n)),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.init()}},{key:"render",value:function(){return a.a.createElement(r.Fragment,null,!this.props.domainEditingActive&&a.a.createElement(Ae,this.props),this.props.domainEditingActive&&a.a.createElement(Ce,null))}}]),t}(r.Component);Le.displayName="Favicon";var Re=E(function(e,t){return{src:e.icons[t.name],iconIsPresent:Boolean(e.icons[t.name]),domainEditingActive:e.domainEditingActive}},function(e,t){return{setIcon:function(t){return e("setIcon",t)}}})(Le),Fe={setIcon:function(e,t){var n=t.name,r=t.value;return Object(f.a)({},e,{icons:Object(f.a)({},e.icons,Object(h.a)({},n,r))})}},Pe=function(e){return a.a.createElement(X,{onClick:e.remove,style:je(e),className:"shake",title:"Remove"},a.a.createElement(Re,{name:e.name}),e.name)},Te=n(40),Me=n.n(Te),ze=n(41),Be=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={open:!1},n.trigger=function(){n.setState(function(e){return Object(f.a)({},e,{open:!0})}),setTimeout(function(){return n.setState(function(e){return Object(f.a)({},e,{open:!1})})},1e3)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(r.Fragment,null,a.a.createElement(ze.Tooltip,Object.assign({title:"Password copied",position:"top",trigger:"manual"},this.state),a.a.createElement(Me.a,{style:this.props.style,component:X,"data-clipboard-text":this.props.value,onSuccess:this.trigger,title:"Copy password"},this.props.children)))}}]),t}(r.Component),Ue=function(e){return a.a.createElement(Be,{value:e.password,style:je(e)},a.a.createElement(Re,{name:e.name}),e.name)},We=function(e){return e.domainEditingActive?a.a.createElement(Pe,e):a.a.createElement(Ue,e)};We.displayName="Domain";var qe=Object(v.b)(function(e){return{domainEditingActive:e.domainEditingActive}},function(e,t){var n=t.name;return{remove:function(){return e({type:"removeKey",payload:n})}}})(We),He={removeKey:function(e,t){return Object(f.a)({},e,{keys:j(e.keys,t),domainEditingActive:Object.keys(e.keys).length>1})}},Je=function(e){return a.a.createElement(Oe,null,e.domains.map((t=qe,function(e,n){return a.a.createElement(t,Object.assign({},e,{key:n}))})));var t};Je.displayName="Domains";var Ve=Object(v.b)(function(e){return{domains:(t=N(e.keys,e.search),n="name",r="password",Object.keys(t).map(function(e){var a;return a={},Object(h.a)(a,n,e),Object(h.a)(a,r,t[e]),a}))};var t,n,r})(Je),Ke=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).handleEsc=function(e){var t=this;return k(function(){t.props.domainEditingActive&&t.props.domainsExist&&t.props.disableDomainEditing()})(e)}.bind(Object(oe.a)(n)),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleEsc)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleEsc)}},{key:"render",value:function(){return a.a.createElement(r.Fragment,null,a.a.createElement(me,null),this.props.domainsExist&&(this.props.manyDomains||this.props.searchIsNotEmpty)&&a.a.createElement(ge,null),!this.props.nothingFound&&this.props.domainsExist&&a.a.createElement(Ve,null),!this.props.domainsExist&&a.a.createElement(pe,null),this.props.nothingFound&&a.a.createElement(ve,null),!this.props.domainEditingActive&&a.a.createElement(de,this.props),this.props.domainEditingActive&&a.a.createElement(he,this.props),!this.props.domainEditingActive&&this.props.domainsExist&&a.a.createElement(fe,this.props))}}]),t}(r.Component);Ke.displayName="DomainList";var Ye=E(function(e){return{domainsExist:Object.keys(e.keys).length>0,manyDomains:Object.keys(e.keys).length>4,nothingFound:Object.keys(e.keys).length>0&&0===Object.keys(N(e.keys,e.search)).length,domainEditingActive:e.domainEditingActive,searchIsNotEmpty:e.search.length>0}},function(e){return{activateDomainInput:function(){return e("activateDomainInput")},toggleDomainEditing:function(){return e("toggleDomainEditing")}}})(Ke),Ge={activateDomainInput:function(e){return Object(f.a)({},e,{domainInputActive:!0,search:""})},toggleDomainEditing:function(e){return e.domainEditingActive?Object(f.a)({},e,{domainEditingActive:!1,search:""}):g(e,"domainEditingActive",!0)}},Xe={ui:{secret:"",newDomain:""},keys:{},icons:{},secret:"",search:"",domainInputActive:!1,domainEditingActive:!1},Ze=function(e){return!e.domainEditingActive&&a.a.createElement(X,{type:"button",onClick:e.onClick},"Logout...")};Ze.displayName="Logout";var $e=E(function(e){return{domainEditingActive:e.domainEditingActive}},function(e){return{onClick:function(){return e("logout")}}})(Ze),Qe={logout:function(e){return window.confirm("Are you sure want to quit? You will lose all your saved passwords.")?(localStorage.removeItem("noo"),Xe):e}},et=function(e){return a.a.createElement(D.a,{title:"Saved passwords"},a.a.createElement(r.Fragment,null,a.a.createElement(Ye,null),a.a.createElement($e,null)))},tt=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",k(this.props.close))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",k(this.props.close))}},{key:"render",value:function(){return a.a.createElement(r.Fragment,null,a.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},a.a.createElement(X,{type:"button",onClick:this.props.close},"Close")),a.a.createElement("h2",null,"Add new domain"),a.a.createElement("p",null,"Enter the domain name here and Noo will generate the strong password for it. Change your current password to this new, strong and syncronizable one."),a.a.createElement("form",{onSubmit:this.props.commit,noValidate:!0},a.a.createElement(V,{autoFocus:!0,required:!0,type:"url",placeholder:"example.com",value:this.props.value,onChange:this.props.edit}),a.a.createElement($,null,a.a.createElement(X,{disabled:this.props.isEmpty},"Add"))))}}]),t}(r.Component);tt.displayName="NewDomainInput";var nt=E(function(e){return{value:e.ui.newDomain,isEmpty:0===e.ui.newDomain.length}},function(e){return{edit:function(t){return e("editNewDomain",t.target.value)},commit:function(t){return b(t,function(){return e("commitNewDomain")})},close:function(){return e("closeNewDomain")}}})(tt),rt={editNewDomain:function(e,t){return Object(f.a)({},e,{ui:Object(f.a)({},e.ui,{newDomain:t})})},commitNewDomain:function(e){return Object(f.a)({},e,{keys:Object(f.a)({},e.keys,Object(h.a)({},e.ui.newDomain.toLowerCase(),w(e.ui.newDomain.toLowerCase(),e.secret))),ui:Object(f.a)({},e.ui,{newDomain:""}),domainInputActive:!1})},closeNewDomain:function(e){return g(e,"domainInputActive",!1)}},at=function(e){return a.a.createElement(U.a,null,e.secretInputActive&&a.a.createElement(W,{key:"SecretInput"},a.a.createElement(ae,null)),e.domainInputActive&&a.a.createElement(W,{key:"NewDomainInput"},a.a.createElement(nt,null)),e.domainListActive&&a.a.createElement(W,{key:"Default"},a.a.createElement(et,null)))};at.displayName="Default";var ot=Object(v.b)(function(e){return{secretInputActive:!Boolean(e.secret),domainInputActive:Boolean(e.secret)&&e.domainInputActive,domainListActive:Boolean(e.secret)&&!e.domainInputActive,secret:e.secret}})(at),it=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.start()}},{key:"render",value:function(){return a.a.createElement(ee,null,a.a.createElement(p.a,null,a.a.createElement(d.d,null,a.a.createElement(d.b,{exact:!0,path:"/",component:ot}),a.a.createElement(d.b,{exact:!0,path:"/faq",component:z}),a.a.createElement(d.b,{component:B}))))}}]),t}(r.Component);it.displayName="App";var ct=Object(v.b)(null,function(e){return{start:function(){return e({type:"start"})}}})(it),st={start:function(e){return e},hydrate:function(e,t){return function(e){try{JSON.parse(e)}catch(t){return!1}return!0}(t)?JSON.parse(t):e}},lt=n(20),ut=Object(f.a)({},st,Qe,re,rt,Ge,{},He,Fe,Ee,{}),mt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||lt.c,pt=Object(lt.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;return ut[n]?ut[n](e,r):e},mt(Object(lt.a)(function(e){return function(t){return function(n){var r=t(n),a=e.getState(),o=localStorage.getItem("noo");return a===Xe&&Boolean(o)?e.dispatch({type:"hydrate",payload:o}):localStorage.setItem("noo",JSON.stringify(a)),r}}}))),dt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ft(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(v.a,{store:pt},a.a.createElement(ct,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");dt?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ft(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ft(t,e)})}}()}},[[42,1,2]]]);
//# sourceMappingURL=main.5546c8f3.chunk.js.map