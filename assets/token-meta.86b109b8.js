import{y as k}from"./index.9926658f.js";import{g as c,T as r,a as h,b as u}from"./types.7e0350da.js";import{g as p,a as f,b as l}from"./token-meta.4a8d7389.js";import{u as y}from"./account.b7164b7e.js";const m="6775bb4735c745ba9217a14381bb8357";async function g(t){const a=[];let e="";for(;;){const n=await fetch(`https://api.opensea.io/api/v1/assets/?owner=${t}&limit=200${e?"&cursor="+e:""}`,{headers:{"X-API-KEY":m}}),s=await n.json();if(d(n,s),s.assets&&a.push(...s.assets),e=s.next,!e)break}return a}const w=async t=>{const a=[];let e="";for(;;){const n=await fetch(`https://api.opensea.io/api/v1/events?account_address=${t}&event_type=created&limit=200${e?"&cursor="+e:""}`,{headers:{"X-API-KEY":m}}),s=await n.json();if(d(n,s),s.asset_events&&a.push(...s.asset_events.map(o=>({...o.asset,creator:o.from_account}))),e=s.next,!e)break}return a},d=(t,a)=>{if(t.status>=400)throw a.detail?a.detail:t.status==429?"Error - opensea rejected request due to rate limiting":"Error loading opensea tokens"},x=k({id:"token-meta",state:()=>({archive_token_meta_list:[],opensea_minted_token_meta_list:[],opensea_wallet_token_meta_list:[],opensea_converted_tokens:[],gallery_token_meta_list:[],demo_token_meta_list:[]}),getters:{archive_token_meta_map:t=>{const a={};return t.archive_token_meta_list.forEach(e=>{a[e.id]=e}),a},all_token_metas(t){const a={};return t.opensea_converted_tokens.forEach(e=>{a[e.id]=e}),t.archive_token_meta_list.forEach(e=>{if(a[c(e)]){delete a[c(e)];const n={id:e.id,entity:{...e.entity}};n.entity.platform=r.OpenseaArchive,a[n.id]=n;return}a[e.id]=e}),t.gallery_token_meta_list.forEach(e=>{a[e.id]=e}),t.demo_token_meta_list.forEach(e=>{a[e.id]=e}),a},sorted_all_token_metas(t){return JSON.parse(JSON.stringify(Object.values(this.all_token_metas))).sort((e,n)=>{var i,_;const s=((i=e.entity.artist)==null?void 0:i.toLowerCase())+e.entity.name.toLowerCase(),o=((_=n.entity.artist)==null?void 0:_.toLowerCase())+n.entity.name.toLowerCase();return s<o?-1:s>o?1:0})}},actions:{async loadArchiveTokenMetas(t){if(y().is_user_admin){await p(e=>{this.archive_token_meta_list=e.filter(n=>n.entity.external_media_url||n.entity.media_id)});return}await f(t,e=>{this.archive_token_meta_list=e})},async loadOpenseaMintedTokenMetas(t){await w(t).then(a=>{this.opensea_minted_token_meta_list=a})},async loadOpenseaWalletTokenMetas(t){await g(t).then(a=>{this.opensea_wallet_token_meta_list=a})},async loadOpenseaConvertedTokens(){const t=[],a=[...this.opensea_minted_token_meta_list,...this.opensea_wallet_token_meta_list],e=[];a.forEach(n=>{const s=v(n);t.push(s),e.push((async()=>{if(!s.entity.external_media_url)return;const o=await E(s.entity.external_thumbnail_url||"").catch(i=>{console.log(i)});!o||(s.entity.aspect_ratio=o)})())}),await Promise.all(e),this.opensea_converted_tokens=t},async loadGalleryTokenMetas(t){const a=[];t.forEach(n=>{a.push(...n.entity.token_meta_id_list)});const e=[];for(let n=0;n<a.length;n+=10){const s=await l(a.slice(n,n+10));e.push(...s)}this.gallery_token_meta_list=e},async loadDemoTokenMetas(){const a=await l(["dIGjSTr40mihc1oGtpeL","RU2HdfpA2stEZ6QvXJcX","xUnC4AYo18xqNIgh1vB7"]);a.forEach(e=>{e.entity.platform=r.ArchiveDemo}),console.log("demo token_meta_list",a),this.demo_token_meta_list=a}}}),v=t=>{var a,e;return{id:h(t),entity:{name:t.name,artist:((e=(a=t.creator)==null?void 0:a.user)==null?void 0:e.username)||"N/A",description:t.description,public_link:t.permalink,blockchain:u.Ethereum,asset_contract_address:t.asset_contract.address,token_id:t.token_id,platform:r.Opensea,external_thumbnail_url:t.image_thumbnail_url,external_media_url:t.animation_url?t.animation_url:t.image_url}}},E=t=>{const a=`${t}_aspect_ratio`;return new Promise((e,n)=>{const s=localStorage.getItem(a);if(s){e(Number(s));return}const o=new Image;o.onload=()=>{const i=o.naturalWidth/o.naturalHeight;console.log("aspect_ratio for opensea",i,t),localStorage.setItem(a,String(i)),e(i)},o.onerror=()=>{n("Error loading image")},o.src=t})};export{x as u};
