import{s as w}from"./util.d924cb30.js";import{P as _}from"./types.903c99bc.js";import{g as q,c as H}from"./bid.3628f065.js";import{i as $}from"./firebaseConfig.4d01e9b5.js";import{d as M,r as c,c as f,Q as A,q as F,E as R,h as V,l as s,t as b,j as y,i as u,w as m,e as Q,b as I,f as h,o as x,u as U,z as j}from"./index.78684eed.js";const z={key:0},W=s("h3",{style:{"font-weight":"bold"}},"Highest Bid",-1),G={class:"bid"},J={style:{"margin-right":"5px"}},K={key:1},O=s("h3",{style:{"font-weight":"bold"}},"Starting Bid",-1),X={class:"bid-form"},Y=s("h3",{style:{"padding-bottom":"15px","font-weight":"bold"}},"Place a Bid",-1),Z={style:{display:"flex"}},ie=M({__name:"QrLandingBiddingForm",props:{token_meta:{}},setup(S){const p=S,g=Q(),T=I(),B=c(),o=c({token_meta_id:"",bidding_name:"",email:"",phone_number:"",amount:0,amount_unit:_.USD,created_at:$.now(),updated_at:$.now()}),k=c([]),C=f(()=>{var t,e,a,l,i,d;switch((e=(t=p.token_meta)==null?void 0:t.entity)==null?void 0:e.price_unit){case _.USD:return`$${(l=(a=p.token_meta)==null?void 0:a.entity)==null?void 0:l.price}`;case _.ETH:return`${(d=(i=p.token_meta)==null?void 0:i.entity)==null?void 0:d.price} ETH`;default:return""}}),D=f(()=>{var t,e,a,l;if(!n.value)return"";switch(n.value.entity.amount_unit){case _.USD:return`$${(e=(t=n==null?void 0:n.value)==null?void 0:t.entity)==null?void 0:e.amount}`;case _.ETH:return`${(l=(a=n==null?void 0:n.value)==null?void 0:a.entity)==null?void 0:l.amount} ETH`;default:return""}}),E=f(()=>{var t;return n.value?(t=n.value)==null?void 0:t.entity.amount_unit:p.token_meta.entity.price_unit}),L=A({bidding_name:[{required:!0,message:"Please enter your bidding name",trigger:"blur"}],email:[{required:!0,message:"Please enter your email",trigger:"blur"},{type:"email",message:"Please enter a valid email address",trigger:["blur","change"]}],phone_number:[{required:!0,message:"Please enter your phone number",trigger:"blur"},{pattern:/^\d{10}$/,message:"Please enter a valid 10-digit phone number",trigger:"blur"}],amount:[{required:!0,message:"Please enter a bid amount",trigger:"blur"},{validator:(t,e,a)=>{var d,r;console.log("value",e);const l=parseFloat(e);if(isNaN(l)){a(new Error("Please enter a valid number"));return}let i=0;n.value?n.value.entity.amount_unit==_.USD?i=n.value.entity.amount+20:i=n.value.entity.amount+.01:i=((r=(d=p.token_meta)==null?void 0:d.entity)==null?void 0:r.price)||0,console.log("minimum_amount",i,l),l<i?a(new Error(`Please enter a bid amount equal or greater than ${i}`)):a()},trigger:"blur"},{pattern:/^\d+(\.\d+)?$/,message:"Please enter a valid number",trigger:"blur"}]}),P=c(),v=c(!1);F(async()=>{if(!g.params.token_meta_id||g.params.token_meta_id instanceof Array){w("Error invalid token meta id");return}P.value=R.service({lock:!0,text:"Loading",background:"rgba(0, 0, 0, 0.7)"}),console.log("route.params.token_meta_id",g.params.token_meta_id),await q(g.params.token_meta_id,t=>{console.log("bids",t),k.value=t,P.value.close()})});const n=f(()=>k.value.length===0?null:k.value.reduce((t,e)=>t.entity.amount>e.entity.amount?t:e)),N=async t=>{if(console.log("submit called"),!t){w("Error finding form element");return}!await t.validate(a=>a)||(v.value=!0,o.value.amount=parseFloat(o.value.amount),o.value.token_meta_id=p.token_meta.id,o.value.amount_unit=E.value||_.USD,await H(o.value).then(()=>{v.value=!1,t.resetFields(),j({type:"success",message:"Successfully submitted bid!"})}).catch(a=>{v.value=!1,w(a)}))};return(t,e)=>{const a=h("el-input"),l=h("el-form-item"),i=h("el-button"),d=h("el-form");return x(),V("div",null,[n.value?(x(),V("div",z,[W,s("div",G,[s("span",J,b(n.value.entity.bidding_name),1),y("- "),s("span",null,b(D.value),1)])])):(x(),V("div",K,[O,s("h2",null,b(C.value),1)])),s("div",X,[Y,u(d,{ref_key:"formRef",ref:B,model:o.value,rules:L,"label-width":"160px","label-position":"left"},{default:m(()=>[u(l,{label:"Email (private)",prop:"email"},{default:m(()=>[u(a,{modelValue:o.value.email,"onUpdate:modelValue":e[0]||(e[0]=r=>o.value.email=r),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),u(l,{label:"Phone (private)",prop:"phone_number"},{default:m(()=>[u(a,{modelValue:o.value.phone_number,"onUpdate:modelValue":e[1]||(e[1]=r=>o.value.phone_number=r),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),u(l,{label:"Bidding Name (public)",prop:"bidding_name"},{default:m(()=>[u(a,{modelValue:o.value.bidding_name,"onUpdate:modelValue":e[2]||(e[2]=r=>o.value.bidding_name=r)},null,8,["modelValue"])]),_:1}),u(l,{label:"Bid Amount (public)",prop:"amount",style:{"max-width":"350px"}},{default:m(()=>[u(a,{modelValue:o.value.amount,"onUpdate:modelValue":e[3]||(e[3]=r=>o.value.amount=r)},{append:m(()=>[y(b(E.value=="eth"?"ETH":"$"),1)]),_:1},8,["modelValue"])]),_:1}),s("div",Z,[u(i,{loading:v.value,onClick:e[4]||(e[4]=r=>N(B.value)),class:"submit-button",color:"#000000",round:"",style:{"flex-grow":"1"}},{default:m(()=>[y(" SUBMIT ")]),_:1},8,["loading"]),u(i,{onClick:e[5]||(e[5]=r=>U(T).push({name:"actions",params:{token_meta_id:U(g).params.token_meta_id}})),class:"submit-button",round:"",style:{"flex-grow":"1"}},{default:m(()=>[y(" CANCEL ")]),_:1})])]),_:1},8,["model","rules"])])])}}});export{ie as default};