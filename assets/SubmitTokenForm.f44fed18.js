import{c as P}from"./token-meta.c9c45678.js";import{i as I,r as j,j as G,h as $,B as O,T as H,u as z,s as k}from"./account.bd3567b2.js";import{p as U,d as J,k as _,H as C,r as i,o as x,f as w,w as t,h as o,e as a,g as R,j as v,t as T,i as B,G as K}from"./index.ae99024f.js";const Q=I(),W=async(h,f,e,c)=>{console.log("uploadFile - starting file upload for ",h);const y=j(Q,h);G(y,f).on("state_changed",d=>{console.log("snapshot",d.bytesTransferred,d.totalBytes),e(d.bytesTransferred/d.totalBytes)},d=>{console.log("uploadFile error - ",d),U({message:`Error uploading file to moda archive - ${d}`,type:"error",showClose:!0,duration:12e3})},c)};const X=v("Ethereum"),Y=v("Off-chain"),Z=B("div",{class:"el-upload__text"},[v(" Drop file here or "),B("em",null,"click to upload")],-1),te=J({setup(h){const f=_();_();const e=C({name:"",artist:"",description:"",public_link:"",created_at:$.now(),updated_at:$.now(),media_id:"",media_type:"",wallet_address:"",blockchain:O.Ethereum,asset_contract_address:"",token_id:"",platform:H.Archive}),c=_([]),y=C({name:[{required:!0,message:"Required",trigger:"blur"}],artist:[{required:!0,message:"Required",trigger:"blur"}],asset_contract_address:[{required:!0,message:"Required",trigger:"blur"}],token_id:[{required:!0,message:"Required",trigger:"blur"}]}),p=_(!1),d=_("0%"),q=z(),A=(m,l)=>K.confirm(`Cancel the upload of ${m.name} ?`).then(()=>!0,()=>!1),E=()=>{},S=async m=>{var b;if(!m){k("Error finding form element");return}if(!await m.validate(u=>u))return;if(e.wallet_address=q.get_account.entity.wallet_address,e.blockchain!="ethereum"&&(e.asset_contract_address="",e.token_id=""),((b=c==null?void 0:c.value)==null?void 0:b.length)!==1){k("Please add a file to upload");return}const s=c.value[0],n=u=>{d.value=`${Math.round(u*100)}%`},g=()=>{F(m,s)};p.value=!0;const V=`${s.uid}.${s.name.split(".").pop()}`;W(V,s.raw,n,g).catch(u=>{console.error(u),p.value=!1,k(`Error uploading file to moda archive - ${u}`)})},F=(m,l)=>{e.media_id=`${l.uid}`,e.media_type=`.${l.name.split(".").pop()}`,console.log("upload success, sending form: ",e),P(e).then(s=>{m.resetFields(),c.value=[],U({type:"success",message:"Successfully submitted token"})}).catch(s=>{k(`Error uploading metadata to moda archive - ${s}`)}).finally(()=>p.value=!1)};return(m,l)=>{const s=i("el-input"),n=i("el-form-item"),g=i("el-radio"),V=i("el-radio-group"),b=i("upload-filled"),u=i("el-icon"),D=i("el-upload"),M=i("Loading"),N=i("el-button"),L=i("el-form");return x(),w(L,{ref_key:"formRef",ref:f,model:a(e),rules:a(y),"label-position":"left","label-width":"180px",style:{"max-width":"750px"}},{default:t(()=>[o(n,{label:"Artwork title",style:{"max-width":"550px"},prop:"name"},{default:t(()=>[o(s,{modelValue:a(e).name,"onUpdate:modelValue":l[0]||(l[0]=r=>a(e).name=r)},null,8,["modelValue"])]),_:1}),o(n,{label:"Artist name",style:{"max-width":"550px"},prop:"artist"},{default:t(()=>[o(s,{modelValue:a(e).artist,"onUpdate:modelValue":l[1]||(l[1]=r=>a(e).artist=r)},null,8,["modelValue"])]),_:1}),o(n,{label:"Blockchain"},{default:t(()=>[o(V,{modelValue:a(e).blockchain,"onUpdate:modelValue":l[2]||(l[2]=r=>a(e).blockchain=r)},{default:t(()=>[o(g,{label:"ethereum"},{default:t(()=>[X]),_:1}),o(g,{label:"off_chain"},{default:t(()=>[Y]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(e).blockchain=="ethereum"?(x(),w(n,{key:0,label:"Asset Contract Address",style:{"max-width":"550px"},prop:"asset_contract_address"},{default:t(()=>[o(s,{modelValue:a(e).asset_contract_address,"onUpdate:modelValue":l[3]||(l[3]=r=>a(e).asset_contract_address=r)},null,8,["modelValue"])]),_:1})):R("",!0),a(e).blockchain=="ethereum"?(x(),w(n,{key:1,label:"Token ID",style:{"max-width":"550px"},prop:"token_id"},{default:t(()=>[o(s,{modelValue:a(e).token_id,"onUpdate:modelValue":l[4]||(l[4]=r=>a(e).token_id=r)},null,8,["modelValue"])]),_:1})):R("",!0),o(n,{label:"Description",prop:"description"},{default:t(()=>[o(s,{modelValue:a(e).description,"onUpdate:modelValue":l[5]||(l[5]=r=>a(e).description=r),type:"textarea",rows:"3"},null,8,["modelValue"])]),_:1}),o(n,{label:"Public Link",prop:"public_link"},{default:t(()=>[o(s,{modelValue:a(e).public_link,"onUpdate:modelValue":l[6]||(l[6]=r=>a(e).public_link=r)},null,8,["modelValue"])]),_:1}),o(n,null,{default:t(()=>[o(D,{class:"upload-demo","auto-upload":!1,action:"","on-remove":E,"before-remove":A,limit:1,drag:"","file-list":c.value},{default:t(()=>[o(u,{class:"el-icon--upload"},{default:t(()=>[o(b)]),_:1}),Z]),_:1},8,["file-list"])]),_:1}),o(n,null,{default:t(()=>[o(N,{onClick:l[7]||(l[7]=r=>S(f.value)),loading:p.value},{loading:t(()=>[o(u,{class:"is-loading",style:{"margin-right":"4px"}},{default:t(()=>[o(M)]),_:1}),v(" "+T(d.value),1)]),default:t(()=>[B("div",null,T(p.value?"UPLOADING":"SUBMIT"),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])}}});export{te as _};
