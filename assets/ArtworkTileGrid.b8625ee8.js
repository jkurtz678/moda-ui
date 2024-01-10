import{d as J,P as le,r as A,Q as se,S as re,q as Z,B as ee,T as ie,o as c,h as f,F as G,J as Q,n as P,u as E,U as ce,j as N,t as S,L as ue,c as F,l as y,k as W,i as _,w as z,V as I,a as q,g as O,b as te,f as U,_ as ne,A as de,z as K,K as me,p as pe,m as _e}from"./index.ae856d64.js";import{a as fe}from"./thumbnail-image.33209ed6.js";import{c as ve,d as ke}from"./types.294958f7.js";import{s as he,m as ye}from"./util.c2a7c8d0.js";import{u as ge}from"./account.17e5277f.js";import{f as we}from"./token-meta.6133e320.js";import{u as oe}from"./gallery.69492853.js";import{u as ae}from"./breakpoints.448bfab6.js";import{u as xe}from"./token-meta.b9cdedc0.js";import{A as be}from"./ArtworkFilters.8922cf38.js";import"./firebaseConfig.4d01e9b5.js";import"./gallery-token.f0159eba.js";const Ce={columnWidth:400,gap:0,keyMapper:(i,m,o,v)=>v,minColumns:1,maxColumns:void 0,rtl:!1,scrollContainer:null,ssrColumns:0};function Te({columns:i,columnWidth:m,emit:o,gap:v,items:a,maxColumns:p,minColumns:l,nextTick:x,onBeforeUnmount:B,onMounted:g,rtl:h,scrollContainer:b,ssrColumns:R,vue:s,wall:r,watch:C}){function D(n,e,d,V){const L=H(d);return V+e+L<=n?D(n,e,d+1,V+e+L):d}function H(n){const e=Array.isArray(m.value)?m.value:[m.value];return e[n%e.length]}function w(){const n=D(r.value.getBoundingClientRect().width,v.value,0,-v.value),e=t(j(n));return e>0?e:1}function j(n){const e=p==null?void 0:p.value;return e&&n>e?e:n}function t(n){const e=l==null?void 0:l.value;return e&&n<e?e:n}function T(n){return Array.from({length:n}).map(()=>[])}if(R.value>0){const n=T(R.value);a.value.forEach((e,d)=>n[d%R.value].push(d)),i.value=n}async function u(n){if(n>=a.value.length)return;await x();const e=[...r.value.children];h.value&&e.reverse();const d=e.reduce((V,L)=>L.getBoundingClientRect().height<V.getBoundingClientRect().height?L:V);i.value[+d.dataset.index].push(n),await u(n+1)}async function k(n=!1){if(i.value.length===w()&&!n){o(s===2?"redraw-skip":"redrawSkip");return}i.value=T(w());const e=b==null?void 0:b.value,d=e?e.scrollTop:window.scrollY;await u(0),e?e.scrollBy({top:d-e.scrollTop}):window.scrollTo({top:d}),o("redraw")}const M=typeof ResizeObserver>"u"?void 0:new ResizeObserver(()=>k());return g(()=>{k(),M==null||M.observe(r.value)}),B(()=>M==null?void 0:M.unobserve(r.value)),C([a,h],()=>k(!0)),C([m,v,l,p],()=>k()),{getColumnWidthTarget:H}}const Ee=["data-index"],Ae=J({__name:"masonry-wall",props:le({columnWidth:{},items:{},gap:{},rtl:{type:Boolean},ssrColumns:{},scrollContainer:{},minColumns:{},maxColumns:{},keyMapper:{type:Function}},Ce),emits:["redraw","redrawSkip"],setup(i,{emit:m}){const o=i,v=A([]),a=A(),{getColumnWidthTarget:p}=Te({columns:v,emit:m,nextTick:se,onBeforeUnmount:re,onMounted:Z,vue:3,wall:a,watch:ee,...ie(o)});return(l,x)=>(c(),f("div",{ref_key:"wall",ref:a,class:"masonry-wall",style:P({display:"flex",gap:`${l.gap}px`})},[(c(!0),f(G,null,Q(v.value,(B,g)=>(c(),f("div",{key:g,class:"masonry-column","data-index":g,style:P({display:"flex","flex-basis":`${E(p)(g)}px`,"flex-direction":"column","flex-grow":1,gap:`${l.gap}px`,height:["-webkit-max-content","-moz-max-content","max-content"],"min-width":0})},[(c(!0),f(G,null,Q(B,(h,b)=>(c(),f("div",{key:l.keyMapper(l.items[h],g,b,h),class:"masonry-item"},[ce(l.$slots,"default",{item:l.items[h],column:g,row:b,index:h},()=>[N(S(l.items[h]),1)])]))),128))],12,Ee))),128))],4))}}),Be=(()=>{const i=Ae;return i.install=m=>{m.component("MasonryWall",i)},i})();const De=["src"],Me={class:"header"},Se={class:"platform"},ze={style:{"font-size":"1.6em","font-weight":"bold"}},$e={key:1,style:{"font-weight":"bold"}},Re={key:2,style:{display:"flex","align-items":"center"}},He={key:2,style:{"font-size":"0.8em","padding-left":"1em",color:"#606266"}},Ve={key:3,style:{height:"32px"}},Le={style:{"font-size":"0.9em","line-height":"1.3em"}},Fe={style:{margin:"10px 0px"}},Ie=J({__name:"ArtworkTile",props:{token_meta:{},column_width:{}},setup(i){const m=te(),o=i,v=fe(ue(o,"token_meta")),a=A(!1),p=A(0),l=A(),x=A(),B=ge(),g=oe(),{screen_type:h}=ae(),b=F(()=>ve(o.token_meta.entity.platform)),R=async()=>{const t=await ke(o.token_meta);if(!t){he("Error getting source file");return}window.open(t,"_blank")},s=F(()=>o.token_meta.entity.aspect_ratio?o.column_width/o.token_meta.entity.aspect_ratio:o.column_width),r=F(()=>{var T,u;const t=(u=(T=o.token_meta)==null?void 0:T.entity)==null?void 0:u.media_size;return t?ye(t):""}),C=()=>{const t=m.resolve({name:"preview-plaque",params:{token_meta_id:o.token_meta.id}});window.open(t.href)},D=()=>{window.open(o.token_meta.entity.public_link,"_blank")},H=()=>{window.open(o.token_meta.entity.artist_social_link,"_blank")};function w(){if(!l.value){console.log("animateDivHeight - error finding tile container");return}if(!a.value&&p.value==0&&(p.value=l.value.offsetHeight),a.value=!a.value,!x.value){console.log("animateDivHeight - error finding detail container");return}let t;a.value&&x.value.offsetHeight>p.value?t=x.value.offsetHeight:t=p.value;const T=300,u=10,k=l.value.offsetHeight,M=Math.ceil(t-k),n=Math.ceil(T/u),e=M/n;let d=0;const V=setInterval(()=>{if(d>=n){l.value.style.height=t+"px",clearInterval(V);return}d++;const L=k+e*d;l.value.style.height=L+"px"},u)}const j=()=>{de.prompt(`Are you sure you want to delete ${o.token_meta.entity.name}? Please type the word 'DELETE' to proceed.`,"Delete Artwork",{confirmButtonText:"Delete",cancelButtonText:"Cancel",inputPattern:/^DELETE$/i,inputErrorMessage:"Please enter the word DELETE to confirm."}).then(({value:t})=>{if(t)return we(o.token_meta.id)}).then(()=>{K({message:"Artwork deleted",type:"success",showClose:!0,duration:12e3})}).catch(t=>{K({message:`Error deleting artwork - ${t}`,type:"error",showClose:!0,duration:12e3})})};return(t,T)=>{const u=U("el-button"),k=U("el-tooltip");return c(),f("div",{ref_key:"tile_container",ref:l,class:"custom-card",onClick:w,style:P(`height: ${s.value}px !important`)},[y("img",{class:W(a.value?"absolute":""),src:E(v)},null,10,De),y("div",{class:W([a.value?"show-blur":"hide-blur","absolute overlay transition"])},null,2),y("div",{class:W(["transition absolute",a.value?"hide-blur":"show-blur"])},[y("div",Me,S(`${t.token_meta.entity.name} | ${t.token_meta.entity.artist}`),1),y("div",Se,S(b.value),1)],2),y("div",{ref_key:"detail_container",ref:x,class:W(["detail-container transition",a.value?"show-blur":"hide-blur"])},[y("div",ze,S(t.token_meta.entity.name),1),t.token_meta.entity.artist_social_link?(c(),f("div",{key:0,style:P(E(h)=="xs"?"display: flex; justify-content: center;":"")},[_(u,{link:"",style:{"font-weight":"bold",display:"block"},disabled:!a.value,onClick:I(H,["stop"])},{default:z(()=>[N(S(t.token_meta.entity.artist),1)]),_:1},8,["disabled"])],4)):(c(),f("div",$e,S(t.token_meta.entity.artist),1)),a.value?(c(),f("div",Re,[_(k,{class:"box-item",effect:"dark",content:"Edit art data",placement:"top"},{default:z(()=>[_(u,{icon:"Edit",text:"",circle:"",onClick:T[0]||(T[0]=I(M=>E(m).push({name:"edit-artwork",params:{token_meta_id:o.token_meta.id}}),["stop"]))})]),_:1}),_(k,{class:"box-item",effect:"dark",content:"Download art",placement:"top"},{default:z(()=>[_(u,{icon:"Download",text:"",circle:"",onClick:I(R,["stop"])})]),_:1}),_(k,{class:"box-item",effect:"dark",content:"Preview plaque",placement:"top"},{default:z(()=>[_(u,{icon:"Tickets",text:"",circle:"",onClick:I(C,["stop"])})]),_:1}),t.token_meta.entity.public_link?(c(),q(k,{key:0,class:"box-item",effect:"dark",content:"QR Code Link",placement:"top"},{default:z(()=>[_(u,{icon:"Link",text:"",circle:"",onClick:I(D,["stop"])})]),_:1})):O("",!0),E(B).is_user_admin?(c(),q(k,{key:1,class:"box-item",effect:"dark",content:"Delete Artwork",placement:"top"},{default:z(()=>[_(u,{icon:"Delete",text:"",circle:"",onClick:I(j,["stop"])})]),_:1})):O("",!0),r.value?(c(),f("span",He,S(r.value),1)):O("",!0)])):(c(),f("div",Ve)),y("div",Le,S(t.token_meta.entity.description),1),y("div",Fe,[(c(!0),f(G,null,Q(E(g).token_id_to_gallery_map.get(o.token_meta.id),M=>(c(),q(u,{size:"small",round:"",plain:"",type:"primary",style:{margin:"3px 10px 3px 0px"}},{default:z(()=>[N(S(M.entity.name),1)]),_:2},1024))),256))])],2)],4)}}});var Pe=ne(Ie,[["__scopeId","data-v-a0cdccec"]]);const Ue=i=>(pe("data-v-0fdc092a"),i=i(),_e(),i),We=Ue(()=>y("div",{style:{"padding-bottom":"90px"}},null,-1)),qe={key:1,style:{padding:"1em"}},Y=30,X=250,$=10,Ge=J({__name:"ArtworkTileGrid",setup(i){const m=te(),o=xe();oe();const v=A(null),a=A(Y),p=A([]),l=A("");ee(l,s=>{a.value=Y});const{screen_type:x}=ae(),B=F(()=>{switch(x.value){case"xs":return 340-$*2;case"sm":return 650-$*2;case"md":return 960-$*2;case"lg":return 1200-$*2;case"xl":return 1700-$*2}return 0}),g=F(()=>{let s=Math.floor(B.value/(X+$));return s>5&&(s=5),(B.value-(s-1)*$)/s}),h=F(()=>o.sorted_all_token_metas.filter(s=>Boolean(s.entity.aspect_ratio))),b=F(()=>{const s=p.value,r=0,C=r+a.value;return s.slice(r,C)});Z(()=>{const s=document.getElementById("masonry-container");if(!s){console.log("ArtworkTileGrid error, masonary_wall element not found");return}s.addEventListener("scroll",()=>{const r=s.scrollTop,C=s.scrollHeight,D=s.clientHeight;r/(C-D)*100>90&&a.value<p.value.length&&(a.value=a.value+20)})});const R=s=>{console.log("updateFilteredTokens",s),p.value=s};return(s,r)=>{const C=U("el-input"),D=U("el-button"),H=U("RouterView");return c(),f(G,null,[y("div",{class:"subheader",style:P([{display:"flex","align-items":"center"},E(x)=="xs"?"padding: 0px 8px 10px;":""])},[_(C,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=w=>l.value=w),"prefix-icon":E(me),placeholder:"Search artwork or artist",style:{"max-width":"350px"},clearable:""},null,8,["modelValue","prefix-icon"]),_(be,{all_tokens:h.value,search_filter:l.value,use_local_storage:!0,onUpdateFilteredTokens:r[1]||(r[1]=w=>R(w))},null,8,["all_tokens","search_filter"]),_(D,{icon:"Plus",type:"info",onClick:r[2]||(r[2]=w=>E(m).push({name:"new-artwork"})),style:{"margin-left":"10px"},size:"small"},{default:z(()=>[N("Artwork")]),_:1})],4),We,y("div",{id:"masonry-container",ref_key:"masonryContainer",ref:v,style:{"overflow-y":"auto",height:"100%",padding:"10px 10px 90px 10px"}},[b.value.length>0?(c(),q(E(Be),{key:0,id:"masonary-wall","scroll-container":v.value,items:b.value,"column-width":X,gap:$,style:P(`width: ${B.value}px; margin: auto`),"max-columns":5},{default:z(({item:w})=>[_(Pe,{token_meta:w,column_width:g.value},null,8,["token_meta","column_width"])]),_:1},8,["scroll-container","items","style"])):(c(),f("div",qe,"No artwork found"))],512),_(H)],64)}}});var ot=ne(Ge,[["__scopeId","data-v-0fdc092a"]]);export{ot as default};
