import{d as x,r as _,c as B,h as s,l as i,t as v,g as p,F as k,o,L as M,u as y,a as D,w as b,i as g,e as N,b as P,f as R,j as A,q as H,E as S,bE as z,bh as F}from"./index.fade40e5.js";import{s as Q}from"./util.170fdff7.js";import{P as L}from"./types.67d14e22.js";import{a as U}from"./thumbnail-image.2926bf4f.js";import{h as j}from"./token-meta.9b03395e.js";import"./firebaseConfig.4d01e9b5.js";const q={key:0},I={key:1},w=150,W=x({__name:"TruncatedDescription",props:{description:{}},setup(h){const e=h,t=_(!1),a=B(()=>e.description?t.value||e.description.length<w?e.description:`${e.description.substring(0,w)}...`:"No artwork description");return(r,u)=>(o(),s(k,null,[i("div",null,v(a.value),1),i("div",null,[r.description&&r.description.length>w?(o(),s("a",{key:0,onClick:u[0]||(u[0]=n=>t.value=!t.value),class:"link"},[t.value?(o(),s("span",q,"Less")):(o(),s("span",I,"More"))])):p("",!0)])],64))}}),G={style:{"font-weight":"bold"}},J={style:{"font-weight":"bold"}},K=["src"],O={style:{display:"flex","align-items":"center"}},X={key:0,style:{"font-weight":"bold"}},Y=x({__name:"ArtPreviewHeader",props:{token_meta:{}},setup(h){const e=N(),t=P(),a=h,r=U(M(a,"token_meta")),u=B(()=>{var n,l,f,c,m,d;switch((l=(n=a.token_meta)==null?void 0:n.entity)==null?void 0:l.price_unit){case L.USD:return`$${(c=(f=a.token_meta)==null?void 0:f.entity)==null?void 0:c.price}`;case L.ETH:return`${(d=(m=a.token_meta)==null?void 0:m.entity)==null?void 0:d.price} ETH`;default:return""}});return(n,l)=>{var c,m,d,$,E,T,V,C;const f=R("el-button");return o(),s(k,null,[i("h1",G,v((m=(c=n.token_meta)==null?void 0:c.entity)==null?void 0:m.name),1),i("h3",J,v(($=(d=n.token_meta)==null?void 0:d.entity)==null?void 0:$.artist),1),i("img",{src:y(r),style:{"max-width":"100%","max-height":"200px",padding:"8px 0px"}},null,8,K),((E=y(e).name)==null?void 0:E.toString())!="bid"?(o(),s(k,{key:0},[i("div",O,[n.token_meta.entity.permission_to_sell?(o(),s("h2",X,v(u.value),1)):p("",!0),(T=n.token_meta)!=null&&T.entity.permission_to_sell?(o(),D(f,{key:1,color:"#000000",size:"small",style:{"margin-left":"12px","font-size":"14px"},round:"",onClick:l[0]||(l[0]=te=>y(t).push({name:"bid",params:{token_meta_id:y(e).params.token_meta_id}}))},{default:b(()=>[A("Place A Bid")]),_:1})):p("",!0)]),g(W,{description:(C=(V=n.token_meta)==null?void 0:V.entity)==null?void 0:C.description},null,8,["description"])],64)):p("",!0)],64)}}});const Z=i("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"},null,-1),ee={class:"container"},le=x({__name:"QrLandingView",setup(h){const e=N();_(),_([]);const t=_(),a=_();return _(!1),H(async()=>{if(!e.params.token_meta_id||e.params.token_meta_id instanceof Array){Q("Error invalid token meta id");return}a.value=S.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"}),console.log("route.params.token_meta_id",e.params.token_meta_id),await j(e.params.token_meta_id,r=>{t.value=r,a.value.close()})}),(r,u)=>{const n=R("RouterView");return o(),s(k,null,[Z,i("div",ee,[t.value?(o(),s(k,{key:0},[g(Y,{token_meta:t.value},null,8,["token_meta"]),g(z,{name:"fade",mode:"out-in"},{default:b(()=>[g(n,null,{default:b(({Component:l})=>[(o(),D(F(l),{token_meta:t.value},null,8,["token_meta"]))]),_:1})]),_:1})],64)):p("",!0)])],64)}}});export{le as default};
