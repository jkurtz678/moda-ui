import{b as F}from"./token-meta.8015aff1.js";import{s as C}from"./util.039e61f6.js";import{b as N}from"./thumbnail-image.ec93d3bf.js";import{p as $}from"./types.4ea69ea7.js";import{r as d,p as M,d as S,J as B,m as A,z as D,c as l,h as u,i as m,n as P,u as x,g as b,t as g,e as I,b as G,o,_ as z,E as O,F as E,H as L,a as R}from"./index.30a563a6.js";import{e as j,f as K}from"./gallery-token.c4aa5fe8.js";import"./firebaseConfig.4d01e9b5.js";function V(f="200% 0px"){const a=d(!1);let r=null;const p=()=>{r=new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting&&(a.value=!0,r==null||r.disconnect())})},{rootMargin:f,threshold:0})},c=n=>{!n||(r&&r.disconnect(),p(),r==null||r.observe(n))};return M(()=>{r==null||r.disconnect(),r=null}),{isIntersecting:a,observe:c}}const H=["src"],U={style:{"font-weight":"bold","overflow-wrap":"break-word"}},q={style:{"min-height":"24px"}},J=S({__name:"CatalogArtTile",props:{token_meta:{}},setup(f){I();const a=G(),r=f,p=N(B(r,"token_meta")),{isIntersecting:c,observe:n}=V("200% 0px"),s=d(null);A(()=>{s.value?n(s.value):D(s,_=>{_&&n(_)},{immediate:!0})});const h=l(()=>!r.token_meta.entity.aspect_ratio||r.token_meta.entity.aspect_ratio<=1?340:340/r.token_meta.entity.aspect_ratio),v=l(()=>!r.token_meta.entity.aspect_ratio||r.token_meta.entity.aspect_ratio>=1?340:340*r.token_meta.entity.aspect_ratio);return(_,k)=>(o(),u("div",{class:"tile-container",style:{margin:"12px",width:"340px"},onClick:k[0]||(k[0]=e=>x(a).push({name:"actions",params:{token_meta_id:r.token_meta.id}}))},[m("div",{style:{display:"flex","flex-direction":"column",height:"100%"},ref_key:"tile",ref:s},[m("div",{style:P([{display:"flex","border-radius":"18px","flex-grow":"1"},`height: ${h.value}px !important; width: ${v.value}px !important `])},[x(c)?(o(),u("img",{key:0,src:x(p)},null,8,H)):b("",!0)],4),m("h2",U,g(r.token_meta.entity.name),1),m("div",q,g(x($)(r.token_meta)),1)],512)]))}});var Q=z(J,[["__scopeId","data-v-754524f1"]]);const W={key:0},Y={style:{"font-weight":"bold","font-size":"2.8em","padding-top":"1.5em"}},Z={key:0,style:{"white-space":"pre-wrap"}},X={key:1},ee={style:{"font-weight":"bold","font-size":"2.8em",padding:"48px 0px 24px 0px"}},te={style:{display:"flex",margin:"-12px","flex-wrap":"wrap"}},ue=S({__name:"CatalogGalleryDetail",setup(f){const a=I();a.params.gallery_id;const r=d([]),p=d([]),c=d(),n=d(),s={CtmSolhMWKKqrSrch1L3:`The Flux Festival Saturday Exhibition takes place on Nov. 23rd at the beautiful Audry Irmas Pavillion featuring Live Performances, New Media Art Gallery, VR films, and 3 floors of installations. Projekt Blank and Flux Festival are co-curating the physical exhibition to highlight artists and filmmakers pioneering creative uses of Ai and innovations in media art and film.

 Flux Festival culminates with live audio-visual performances by New York based @kevinpeterhe and @jakeoleson and the esteemed @nosajthing.`,vN1VWlc07Qo48dRTMKZw:`Presenting \u201CSequencer :: 002 \u2014 MICRO MYTHOLOGIES\u201D a design and media art group exhibition featuring a curation of new media artists exploring generative systems, mythical biology, micro organisms, and unseen or endangered parts of our world. This second edition will feature artists working in: Film, Animation, Light, Generative Art, Projection, Performance, and Time. Hosted at 821 Mateo St, SEQUENCER :: 002 will feature a gallery exhibition and an afterparty featuring Live performances by Spencer Sterling, Ninocence and DJ FUCK. 

Presented by the combined forces at Projekt______, and Optic Nerve.`},h=l(()=>{if(!a.params.gallery_id||typeof a.params.gallery_id!="string"){console.log("failed to get gallery id from params");return}return s[a.params.gallery_id]});l(()=>r.value.map(e=>({name:e.entity.name,artist:e.entity.artist,price:e.entity.price,price_unit:e.entity.price_unit})).sort((e,t)=>!(e!=null&&e.artist)||!(t!=null&&t.artist)?0:e.artist.localeCompare(t.artist)));const v=l(()=>Array.from(new Set(r.value.map(e=>e.entity.artist||""))).sort((e,t)=>e.localeCompare(t))),_=l(()=>r.value.reduce((e,t)=>(t.entity.artist&&(e[t.entity.artist]||(e[t.entity.artist]=[]),e[t.entity.artist].push(t)),e),{})),k=l(()=>r.value.reduce((e,t)=>(e[t.id]=t,e),{}));return l(()=>p.value.map(e=>{var i,y;const t=k.value[e.entity.token_meta_id];return{bidding_name:e.entity.bidding_name,email:e.entity.email,phone_number:e.entity.phone_number,amount:e.entity.amount,amount_unit:e.entity.amount_unit,artist_name:(i=t==null?void 0:t.entity)==null?void 0:i.artist,artwork_name:(y=t==null?void 0:t.entity)==null?void 0:y.name}}).sort((e,t)=>!(e!=null&&e.artwork_name)||!(t!=null&&t.artwork_name)?0:e.artwork_name.localeCompare(t.artwork_name))),A(async()=>{if(!a.params.gallery_id||typeof a.params.gallery_id!="string"){console.log("failed to get gallery id from params");return}n.value=O.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"}),j(a.params.gallery_id).then(e=>{const t=e.map(i=>i.entity.token_meta_id);return F(t).then(i=>{console.log("token_metas",r),r.value=i}).catch(i=>{C(`Error fetching token metas: ${i}`)}).finally(()=>{n.value.close()})}).catch(e=>{C(`Error fetching token metas: ${e}`)}),K(a.params.gallery_id).then(e=>{console.log("gallery",e),c.value=e}).catch(e=>{C(`Error fetching gallery: ${e}`)})}),(e,t)=>{var i,y;return(i=n.value)!=null&&i.visible?b("",!0):(o(),u("div",W,[m("h1",Y,g((y=c.value)==null?void 0:y.entity.name),1),h.value?(o(),u("div",Z,g(h.value),1)):b("",!0),v.value.length==0?(o(),u("div",X,t[0]||(t[0]=[m("h1",{style:{"font-weight":"bold","font-size":"2.8em",padding:"48px 0px 24px 0px"}},"No Artworks",-1)]))):(o(!0),u(E,{key:2},L(v.value,w=>(o(),u("div",{key:w,style:{margin:"20px 0px"}},[m("h1",ee,g(w),1),m("div",te,[(o(!0),u(E,null,L(_.value[w],T=>(o(),R(Q,{token_meta:T},null,8,["token_meta"]))),256))])]))),128))]))}}});export{ue as default};
