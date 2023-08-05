import{n as u,g as s,d as r,e as o}from"./firebaseConfig.d7a6b5a9.js";class h{static createBaseEntity(){const n=u.now();return{created_at:n,updated_at:n}}static updateBaseEntity(){return{updated_at:u.now()}}}var c=(e=>(e.Ethereum="ethereum",e.OffChain="off_chain",e))(c||{}),l=(e=>(e.Archive="archive",e.Opensea="opensea",e.OpenseaArchive="opensea_archive",e))(l||{});function m(e){return`${e.asset_contract.address}/${e.token_id}`}function d(e){return`${e.entity.asset_contract_address}/${e.entity.token_id}`}function f(e){switch(e){case"opensea":return"Opensea";case"opensea_archive":return"Opensea Archive";default:return"Archive"}}async function y(e){const n=s(),i=r(n,`thumb_${e.entity.media_id}.jpg`);try{const a=await o(i);return console.log(`getTokenMetaThumbnailImageURL - found url for image ${e.entity.name}`,a),a}catch(a){console.log(`getTokenMetaThumbnailImageURL - failed to find archive thumbnail image ${e.entity.name}`,a)}return e.entity.external_thumbnail_url?e.entity.external_thumbnail_url:new URL("/assets/logo.61e654f6.png",self.location).href}async function p(e){const n=s(),i=r(n,`medium_${e.entity.media_id}.jpg`);try{const t=await o(i);return console.log(`getTokenMetaThumbnailImageURL - found url for image ${e.entity.name}`,t),t}catch(t){console.log(`getTokenMetaThumbnailImageURL - failed to find archive medium image ${e.entity.name}`,t)}const a=r(n,`thumb_${e.entity.media_id}.jpg`);try{const t=await o(a);return console.log(`getTokenMetaThumbnailImageURL - found url for image ${e.entity.name}`,t),t}catch(t){console.log(`getTokenMetaThumbnailImageURL - failed to find archive thumbnail image ${e.entity.name}`,t)}return e.entity.external_thumbnail_url?e.entity.external_thumbnail_url:new URL("/assets/logo.61e654f6.png",self.location).href}async function b(e){console.log("token_meta",e);const n=s(),i=`${e.entity.media_id}${e.entity.media_type}`;console.log("path",i);const a=r(n,i);try{const t=await o(a);return console.log(`getTokenMetaThumbnailImageURL - found url for image ${e.entity.name}`,t),t}catch(t){console.log(`getTokenMetaThumbnailImageURL - failed to find archive thumbnail image ${e.entity.name}`,t)}return""}export{h as B,l as T,m as a,c as b,f as c,b as d,p as e,y as f,d as g};