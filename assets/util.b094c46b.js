import{x as n}from"./index.badfc3c7.js";function a(e){n({message:e,type:"error",showClose:!0,duration:8e3})}function c(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}function l(){return["jkurtz678@gmail.com","natemohler@ucla.edu","natemohleriv@gmail.com","ruben@eastsideled.com","juliaschell@ucla.edu"]}function u(e){if(!e.entity.last_check_in_time)return!1;const i=new Date,t=e.entity.last_check_in_time.seconds;return(i.getTime()/1e3-t)/(60*60)<2}export{u as a,l as g,c as i,a as s};