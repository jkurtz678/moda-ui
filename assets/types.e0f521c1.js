import{h as u,r as i,j as s,i as l}from"./firebaseConfig.4d01e9b5.js";class y{static createBaseEntity(){const t=l.now();return{created_at:t,updated_at:t}}static updateBaseEntity(){return{updated_at:l.now()}}}var d=(e=>(e.Landscape="landscape",e.Portrait="portrait",e.LandscapeReversed="landscape_reversed",e.PortraitReversed="portrait_reversed",e))(d||{}),h=(e=>(e.Ethereum="ethereum",e.OffChain="off_chain",e))(h||{}),g=(e=>(e.Archive="archive",e.Opensea="opensea",e.OpenseaArchive="opensea_archive",e.ArchiveDemo="archive_demo",e))(g||{}),f=(e=>(e.Owner="owner",e.Editor="editor",e.Reader="reader",e))(f||{});function _(e){return`${e.contract}/${e.identifier}`}function v(e){return`${e.entity.asset_contract_address}/${e.entity.token_id}`}function b(e){switch(e){case"opensea":return"Opensea";case"opensea_archive":return"Opensea Archive";default:return"Archive"}}async function w(e){const t=u(),r=i(t,`thumb_${e.entity.media_id}.jpg`);try{return await s(r)}catch(n){console.log(`getTokenMetaThumbnailImageURL - failed to find archive thumbnail image ${e.entity.name}`,n)}return e.entity.external_thumbnail_url?e.entity.external_thumbnail_url:new URL("/assets/logo.61e654f6.png",self.location).href}async function $(e){const t=u(),r=i(t,`medium_${e.entity.media_id}.jpg`);try{return await s(r)}catch(a){console.log(`getTokenMetaThumbnailImageURL - failed to find archive medium image ${e.entity.name}`,a)}const n=i(t,`thumb_${e.entity.media_id}.jpg`);try{return await s(n)}catch(a){console.log(`getTokenMetaThumbnailImageURL - failed to find archive thumbnail image ${e.entity.name}`,a)}return e.entity.external_thumbnail_url?e.entity.external_thumbnail_url:new URL("/assets/logo.61e654f6.png",self.location).href}async function L(e){var a,c;const t=u();let r;if((a=e.entity)!=null&&a.media_id)r=m(e);else if((c=e.entity)!=null&&c.external_media_url)return e.entity.external_media_url;const n=i(t,r);try{return await s(n)}catch(o){console.log(`getTokenMetaThumbnailImageURL - failed to find archive thumbnail image ${e.entity.name}`,o)}return""}function m(e){return`${e.entity.media_id}${e.entity.media_type}`}export{y as B,f as G,d as O,g as T,h as a,v as b,b as c,L as d,m as e,w as f,_ as g,$ as h};