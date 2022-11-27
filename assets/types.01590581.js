import{h as n,i as s,r as i,j as o}from"./firebaseConfig.bef60b65.js";class l{static createBaseEntity(){const t=n.now();return{created_at:t,updated_at:t}}static updateBaseEntity(){return{updated_at:n.now()}}}var u=(e=>(e.Ethereum="ethereum",e.OffChain="off_chain",e))(u||{}),c=(e=>(e.Archive="archive",e.Opensea="opensea",e.OpenseaArchive="opensea_archive",e))(c||{});function g(e){return`${e.asset_contract.address}/${e.token_id}`}function d(e){return`${e.entity.asset_contract_address}/${e.entity.token_id}`}function f(e){switch(e){case"opensea":return"Opensea";case"opensea_archive":return"Opensea Archive";default:return"Archive"}}async function p(e){const t=s(),r=i(t,`thumb_${e.entity.media_id}.jpg`);try{const a=await o(r);return console.log(`getTokenMetaThumbnailImageURL - found url for image ${e.entity.name}`,a),a}catch(a){console.log(`getTokenMetaThumbnailImageURL - failed to find archive thumbnail image ${e.entity.name}`,a)}return e.entity.external_thumbnail_url?e.entity.external_thumbnail_url:new URL("/assets/logo.61e654f6.png",self.location).href}export{l as B,c as T,g as a,u as b,f as c,p as d,d as g};