import{r as v,m,y as w,c as n}from"./index.80d5232a.js";function h(){let e=v(window.innerWidth);const i=()=>e.value=window.innerWidth;m(()=>window.addEventListener("resize",i)),w(()=>window.removeEventListener("resize",i));const d="xs",o="sm",s="md",t="lg",u="xl",r=n(()=>e.value<650?d:e.value>=650&&e.value<960?o:e.value>=960&&e.value<1200?s:e.value>=1200&&e.value<1700?t:e.value>=1700?u:""),a=n(()=>[o,s,t,u].includes(r.value)),l=n(()=>[s,t,u].includes(r.value)),c=n(()=>[t,u].includes(r.value));return{width:n(()=>e.value),screen_type:r,sm_and_up:a,md_and_up:l,lg_and_up:c}}export{h as u};
