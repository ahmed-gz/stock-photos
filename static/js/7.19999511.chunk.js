(this["webpackJsonpstock-photos"]=this["webpackJsonpstock-photos"]||[]).push([[7],{159:function(e,t,a){"use strict";a.r(t);var n=a(29),r=a(0),o=a.n(r),c=a(15),i=a(155),s=a(158),l=a(60),m=a(161),u=a(28),d=a(153),p=a(165),g=a(154),b=a(82),f=a(1),h=a(2),v=a(3),j=(a(4),a(5)),O=o.a.forwardRef((function(e,t){var a=e.animation,n=void 0===a?"pulse":a,r=e.classes,c=e.className,i=e.component,s=void 0===i?"div":i,l=e.height,m=e.variant,u=void 0===m?"text":m,d=e.width,p=Object(h.a)(e,["animation","classes","className","component","height","variant","width"]);return o.a.createElement(s,Object(f.a)({ref:t,className:Object(v.a)(r.root,r[u],c,!1!==n&&r[n])},p,{style:Object(f.a)({width:d,height:l},p.style)}))})),w=Object(j.a)((function(e){return{root:{display:"block",backgroundColor:e.palette.action.hover,height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.5s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",content:'""',position:"absolute",bottom:0,left:0,right:0,top:0,zIndex:1}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"100%":{transform:"translateX(100%)"}}}}),{name:"MuiSkeleton"})(O),y=a(88),E=a(87),k=a(9),x=a(77),N=Object(x.a)((function(e){var t;return{tile:(t={padding:e.spacing(1,5)+" !important"},Object(k.a)(t,e.breakpoints.down("lg"),{padding:e.spacing(1,4)+" !important"}),Object(k.a)(t,e.breakpoints.down("md"),{padding:e.spacing(1,3)+" !important"}),Object(k.a)(t,e.breakpoints.down("sm"),{padding:e.spacing(1,2)+" !important"}),Object(k.a)(t,e.breakpoints.down("xs"),{padding:"2px !important"}),t),titleBar:{borderRadius:"0 0 4px 4px",background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},skeleton:{borderRadius:"4px"},textSkeleton:{bottom:"65px",margin:"5px",zIndex:e.zIndex.drawer+1,backgroundColor:e.palette.common.white}}})),C=function(e){var t=e.photos,a=e.perPage,n=e.isReloading,r=e.isLoading,c=N(),i=r?n?Object(u.a)(Array.from(new Array(a))):[].concat(Object(u.a)(t),Object(u.a)(Array.from(new Array(a)))):t;return o.a.createElement(d.a,{cellHeight:E.c+15,cols:4},i.map((function(e,t){return o.a.createElement(p.a,{key:t,cols:1,className:c.tile},e?o.a.createElement(b.a,{underline:"none",href:"#/photo/".concat(e.img_id)},o.a.createElement(y.a,{src:"".concat(E.b,"/").concat(e.img_id,".jpg"),title:e.tags,height:E.c.toString()}),o.a.createElement(g.a,{title:e.tags,titlePosition:"bottom",className:c.titleBar})):o.a.createElement(o.a.Fragment,null,o.a.createElement(w,{variant:"rect",animation:"wave",height:Number(E.c),className:c.skeleton}),o.a.createElement(w,{animation:"wave",height:48,className:c.textSkeleton})))})))},S=(a(31),a(19)),R=a(36);var P=function(e,t){var a=o.a.memo(o.a.forwardRef((function(t,a){return o.a.createElement(R.a,Object(f.a)({},t,{ref:a}),e)})));return a.muiName=R.a.muiName,a}(o.a.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}));var z=Object(j.a)((function(e){return{root:{display:"flex"},icon:{width:24,height:16,backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,marginLeft:e.spacing(.5),marginRight:e.spacing(.5),cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(S.b)(e.palette.grey[200],.12)}}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(h.a)(e,["classes"]);return o.a.createElement("li",Object(f.a)({className:t.root},a),o.a.createElement(P,{className:t.icon}))}));var A=Object(j.a)({root:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"PrivateBreadcrumbSeparator"})((function(e){var t=e.classes,a=e.className,n=Object(h.a)(e,["classes","className"]);return o.a.createElement("li",Object(f.a)({"aria-hidden":!0,className:Object(v.a)(t.root,a)},n))}));var B=o.a.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,c=e.component,i=void 0===c?"nav":c,s=e.itemsAfterCollapse,m=void 0===s?1:s,d=e.itemsBeforeCollapse,p=void 0===d?1:d,g=e.maxItems,b=void 0===g?8:g,j=e.separator,O=void 0===j?"/":j,w=Object(h.a)(e,["children","classes","className","component","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),y=o.a.useState(!1),E=y[0],k=y[1],x=o.a.Children.toArray(a).filter((function(e){return o.a.isValidElement(e)})).map((function(e,t){return o.a.createElement("li",{className:n.li,key:"child-".concat(t)},e)}));return o.a.createElement(l.a,Object(f.a)({ref:t,component:i,color:"textSecondary",className:Object(v.a)(n.root,r)},w),o.a.createElement("ol",{className:n.ol},function(e,t,a){return e.reduce((function(n,r,c){return c<e.length-1?n=n.concat(r,o.a.createElement(A,{key:"separator-".concat(c),className:t},a)):n.push(r),n}),[])}(E||b&&x.length<=b?x:function(e){return p+m>=e.length?e:[].concat(Object(u.a)(e.slice(0,p)),[o.a.createElement(z,{key:"ellipsis",onClick:function(){k(!0)}})],Object(u.a)(e.slice(e.length-m,e.length)))}(x),n.separator,O)))})),L=Object(j.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0},li:{listStyle:"none"},separator:{}},{name:"MuiBreadcrumbs"})(B),I=function(e){var t=e.category;return o.a.createElement(L,{"aria-label":"breadcrumb"},o.a.createElement(b.a,{color:"inherit",href:"#/"},"Categories"),t&&o.a.createElement(l.a,{color:"textPrimary"},t))},M=a(38),H=a(98),T=a.n(H),q=a(99),J=a.n(q),W=a(91),X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"trending",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"asc",c=Object(r.useState)([]),i=Object(n.a)(c,2),s=i[0],l=i[1],m=Object(r.useState)(!0),d=Object(n.a)(m,2),p=d[0],g=d[1],b=Object(r.useState)(!1),f=Object(n.a)(b,2),h=f[0],v=f[1],j=Object(r.useState)(t+1),O=Object(n.a)(j,2),w=O[0],y=O[1];return Object(r.useEffect)((function(){!function(t){var n,r,c,i;T.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return g(!0),v(!1),s.prev=2,s.next=5,T.a.awrap(J.a.get("".concat(W.b,"/").concat(e,"/").concat(a,"/").concat(o,"/").concat(t)));case 5:n=s.sent,r=n.data,c=r.results,i=r.nextPage,l(1===t?Object(u.a)(c):function(e){return[].concat(Object(u.a)(e),Object(u.a)(c))}),y(i),s.next=17;break;case 13:s.prev=13,s.t0=s.catch(2),console.log("Error: ",s.t0),v(!0);case 17:return s.prev=17,g(!1),window.dispatchEvent(new CustomEvent("scroll")),s.finish(17);case 21:case"end":return s.stop()}}),null,null,[[2,13,17,21]])}(t)}),[e,a,o,t]),[s,p,h,w]},$=Object(x.a)((function(e){return{root:{textAlign:"center"},h1:{padding:"20px 0",fontSize:"2rem",textTransform:"capitalize"}}}));t.default=function(){var e=$(),t=Object(r.useContext)(M.a),a=Object(c.g)().id,u=function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),o=a[0],c=a[1];return Object(r.useEffect)((function(){var t=function(){return c(window.innerHeight+window.scrollY>=document.body.offsetHeight-e)};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[e]),[o]}(200),d=Object(n.a)(u,1)[0],p=t.state,g=p.currentCategory,b=p.currentPage,f=t.actions,h=f.setCurrentCategory,v=f.reLoadPage,j=f.loadMore,O=X(a,b),w=Object(n.a)(O,4),y=w[0],E=w[1],k=w[2],x=w[3];return Object(r.useEffect)((function(){d&&x&&y.length&&!E&&j()}),[d,x,y,E]),Object(r.useEffect)((function(){window.scrollTo(0,0),v(),h(a)}),[a]),o.a.createElement(i.a,{maxWidth:"lg",className:e.root},o.a.createElement(s.a,{mx:"10px",py:"20px"},o.a.createElement(I,{category:g}),o.a.createElement(l.a,{color:"textPrimary",component:"h1",className:e.h1},g," Photos"),k&&o.a.createElement(m.a,{severity:"error"},"Something went wrong, please try again!"),o.a.createElement(C,{photos:y,perPage:40,isReloading:1===b,isLoading:E})))}},87:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o}));var n=180,r="https://cdn.stocksnap.io/img-thumbs/".concat("280h"),o="https://cdn.stocksnap.io/img-thumbs/".concat("960w")},88:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(150),c=a(151),i=a(152),s=a(77),l=Object(s.a)((function(e){return{img:{backgroundColor:"rgba(0, 0, 0, 0.08)"}}})),m=function(e){var t=e.src,a=e.title,n=e.height,s=l();return r.a.createElement(o.a,null,r.a.createElement(c.a,null,r.a.createElement(i.a,{component:"img",alt:a,height:n,image:t,title:a,className:s.img})))};m.defaultProps={src:"https://via.placeholder.com/600/1ee8a4",title:"nihil at amet non hic quia qui",height:"auto"};t.a=m},91:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n="https://www.mocky.io/v2/5e1cc3b23200006d0022883a?mocky-delay=2s",r="https://cors-anywhere.herokuapp.com/https://stocksnap.io/api/search-photos"}}]);
//# sourceMappingURL=7.19999511.chunk.js.map