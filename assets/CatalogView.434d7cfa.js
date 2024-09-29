import{a as w}from"./bid.de4d7d96.js";import{i as f}from"./token-meta.094c1d66.js";import{s as m}from"./util.6e97abfb.js";import{d as g,r as p,c as l,q as v,h as b,l as u,t as _,i as a,w as c,f as d,o as k}from"./index.81d930ee.js";import"./firebaseConfig.4d01e9b5.js";import"./types.67d14e22.js";const A={class:"container"},P=g({__name:"CatalogView",setup(C){const n=p([]),i=p([]),o=l(()=>n.value.map(t=>({name:t.entity.name,artist:t.entity.artist,price:t.entity.price,price_unit:t.entity.price_unit})).sort((t,e)=>!(t!=null&&t.artist)||!(e!=null&&e.artist)?0:t.artist.localeCompare(e.artist))),h=l(()=>n.value.reduce((t,e)=>(t[e.id]=e,t),{})),y=l(()=>i.value.map(t=>{const e=h.value[t.entity.token_meta_id];return{bidding_name:t.entity.bidding_name,email:t.entity.email,phone_number:t.entity.phone_number,amount:t.entity.amount,amount_unit:t.entity.amount_unit,artist_name:e.entity.artist,artwork_name:e.entity.name}}).sort((t,e)=>!(t!=null&&t.artwork_name)||!(e!=null&&e.artwork_name)?0:t.artwork_name.localeCompare(e.artwork_name)));return v(async()=>{f(t=>{console.log("R",t),n.value=t}).catch(t=>{m(`Error fetching token metas: ${t}`)}),w(t=>{console.log("bids",t),i.value=t}).catch(t=>{m(`Error fetching bids: ${t}`)})}),(t,e)=>{const r=d("el-table-column"),s=d("el-table");return k(),b("div",A,[u("h2",null,_(`Artwork On Sale (${o.value.length} total)`),1),a(s,{height:"350",data:o.value,style:{width:"100%","overflow-y":"auto"}},{default:c(()=>[a(r,{prop:"artist",label:"Artist"}),a(r,{prop:"name",label:"Name"}),a(r,{prop:"price",label:"Price",width:"100"}),a(r,{prop:"price_unit",label:"Price Unit",width:"100"})]),_:1},8,["data"]),u("h2",null,_(`All Bids (${o.value.length} total)`),1),a(s,{height:"350",data:y.value,style:{width:"100%","overflow-y":"auto"}},{default:c(()=>[a(r,{prop:"bidding_name",label:"Name"}),a(r,{prop:"email",label:"Email"}),a(r,{prop:"phone_number",label:"Phone Number"}),a(r,{prop:"amount",label:"Amount"}),a(r,{prop:"amount_unit",label:"Unit"}),a(r,{prop:"artist_name",label:"Artist Name"}),a(r,{prop:"artwork_name",label:"Artwork Name"})]),_:1},8,["data"])])}}});export{P as default};
