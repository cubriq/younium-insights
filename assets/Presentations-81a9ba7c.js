import{P as L,_ as N}from"./AboutKpi.vue_vue_type_script_setup_true_lang-f615d796.js";import{d as _,j as U,D as V,E as z,k as H,_ as w,o as l,c as m,G as v,y as k,q as f,s as g,e as n,f as S,l as P,n as y,p as B,h as T,u as E,r as M,H as I,g as R,F as x,m as A,t as b,I as O,a as $,z as W,A as Y,B as K}from"../index.js";let C=0;const J=["play","pause","ended","timeupdate","progress","seeked","texttrackchange","cuechange","cuepoint","volumechange","error","loaded"],Q=_({name:"VueVimeo",props:{playerHeight:{default:320},playerWidth:{default:640},options:{default:()=>({})},videoId:{required:!0,default:0},videoUrl:{default:void 0,type:String},loop:{default:!1},autoplay:{default:!1},controls:{default:!0}},setup(e,t){C+=1;const i=`vimeo-player-${C}`,c=U(()=>e.videoId),{emit:d}=t,r={id:e.videoId,width:e.playerWidth,height:e.playerHeight,loop:e.loop,autoplay:e.autoplay,controls:e.controls};let o={play:()=>!1,on:(...u)=>!1,ready:()=>o,then:u=>o,catch:u=>!1,pause:()=>!1,unload:()=>!1,loadVideo:u=>!1,setVolume:u=>!1};const s=()=>o.play(),a=()=>o.loadVideo(e.videoId),h=()=>o.pause(),j=()=>o.setVolume(0),q=(u=.5)=>o.setVolume(u);return V(()=>{e.videoUrl&&(r.url=String(e.videoUrl));const u=Object.assign(r,e.options);o=new L(i,u),o.ready().then(()=>{console.log("ready"),d("ready",o)}).catch(p=>{console.log("error"),d("error",p,o)}),J.forEach(p=>{o.on(p,G=>{d(p,G,o)})})}),z(()=>{o.unload()}),H(c,(u,p)=>{a()}),{play:s,pause:h,update:a,mute:j,unmute:q,elementId:i}}}),X=["id"];function Z(e,t,i,c,d,r){return l(),m("div",{id:e.elementId},null,8,X)}const ee=w(Q,[["render",Z]]),te=_({name:"TopContainer",components:{VueVimeo:ee},props:{vimeoID:{type:Number,default:38772314},vimeoUrl:{type:String,default:""},imageUrl:{type:String,default:""},wide:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1}},data:function(){return{videoPlaying:!1,videoShowing:!1,videoFadeColor:!1}},computed:{videoOptions(){return{title:0,byline:0,portrait:0}},getHeight(){let e=(v.windowHeight()-280)*.5625,t=600;return v.windowHeight()<700&&(t=v.windowHeight()*.5),e>v.windowHeight()-60&&(e=v.windowHeight()-60),this.wide?e:t}},methods:{onReady(){this.playerReady=!0;const e=String(this.iframeId);document.querySelector("#vimeo-player-"+e+" iframe");const t=document.getElementById("vimeo-player-"+String(this.iframeId)),i=this.getHeight;function c(){t&&(t.style.height=i+"px")}window.addEventListener("resize",function(){c()});const d=function(o,s,a){for(let h=0;h<o.length;h++)s.call(a,h,o[h])},r=document.querySelectorAll("iframe");d(r,function(o,s){s.setAttribute("width","100%"),s.setAttribute("height","100%")},this)},fadeInColor(){setTimeout(()=>{this.videoPlaying&&(this.videoFadeColor=!0)},40)},onPlay(){this.videoShowing=!0,this.videoPlaying=!0,this.fadeInColor()},play(){this.onPlay(),this.$refs.player.play()},onPause(){this.videoPlaying=!1},pause(){this.onPause(),this.$refs.player.pause()},stop(){this.videoPlaying=!1,this.videoShowing=!1,this.$refs.player.pause()}},mounted(){const e=document.getElementById("hero-cont-img")||{style:{height:""}};function t(){let i=window.innerHeight-280;i>800&&(i=800),e.style.height=i+"px"}window.addEventListener("resize",function(){t()})}}),D=e=>(B("data-v-b7518d9f"),e=e(),T(),e),oe=D(()=>n("button",{role:"button",class:"close-video close-toggle menu-open"},[n("div",{class:"menu-icon"})],-1)),ne=[oe],se={class:"hero-textplate sectioncontainer"},ie={class:"hero-content bg-white opacity-80 text-blue"},ae=D(()=>n("span",{class:"play"},null,-1)),le=[ae],de={class:"hero has-video bg-white cont",id:"hero-cont-img"},re=D(()=>n("span",{class:"play"},null,-1)),ce=[re];function ue(e,t,i,c,d,r){const o=k("vue-vimeo");return l(),m("div",null,[f(n("div",{class:y({"top-video-cont top":!0,wide:e.wide})},[n("div",{class:"stop-btn",onClick:t[0]||(t[0]=(...s)=>e.stop&&e.stop(...s))},ne),f(n("div",se,[n("div",ie,[n("a",{class:"btn play-btn",onClick:t[1]||(t[1]=(...s)=>e.play&&e.play(...s))},le)])],512),[[g,e.videoShowing&&!e.videoPlaying]]),S(o,{style:P({height:e.getHeight+"px"}),class:y({"vimeo-player":!0,active:e.videoShowing,idle:!e.videoFadeColor}),ref:"player",options:e.videoOptions,videoId:e.vimeoID,"video-url":e.vimeoUrl,onReady:e.onReady,onPlay:t[2]||(t[2]=s=>e.onPlay()),onEnded:t[3]||(t[3]=s=>e.videoShowing=!1),onPause:t[4]||(t[4]=s=>e.onPause())},null,8,["style","class","options","videoId","video-url","onReady"])],2),[[g,e.videoShowing]]),f(n("div",de,[f(n("div",{class:y({"hero-image-cont":!0,active:!0}),style:P({backgroundImage:`url('${e.imageUrl}')`})},null,4),[[g,!e.videoShowing]]),n("a",{class:"btn play-btn",onClick:t[5]||(t[5]=(...s)=>e.play&&e.play(...s))},ce)],512),[[g,!e.videoShowing]])])}const he=w(te,[["render",ue],["__scopeId","data-v-b7518d9f"]]),me={class:"home"},pe={class:"maincontent-container"},ve={id:"page-container",class:"pagecontainer js-pagecontainer"},fe={id:"primarycontent",class:"primarycontent"},ge={key:0},ye={class:"header-cont"},_e={class:"section-head"},we={class:"startpage-hero-text center"},Ie={class:"sectioncontainer lower"};const $e=_({__name:"Presentations",props:{picPath:{type:String,default:""},colCode:{type:String}},setup(e){const{common:t}=E(),i=e,c=M({presentations:U(()=>I.data.presentations.filter(o=>{var s;return o.colCode==i.colCode||!((s=i.colCode)!=null&&s.length)||o.colCode==t.routeID}))});function d(o){return O.jsonDateStrToISO(o)}function r(){I.data.presentations=[{ID:59,Title:"Introduction to insights (4 min)",BodyText:"",VimeoUrl:"https://vimeo.com/662689191",VimeoID:"662689191",FriendlyUrl:"insights-intro",PublishDate:"2024-03-22T11:25:26.777",StartImageUrl:"https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{ID:58,colCode:"MRR",Title:"Intro to MRR analysis (6 min)",BodyText:"",VimeoUrl:"https://vimeo.com/922692389",VimeoID:"922692389",FriendlyUrl:"currency-conversion",PublishDate:"2024-02-08T10:20:56.747",StartImageUrl:"https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2602&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}]}return V(()=>{I.data.presentations.length===0&&r()}),H(()=>t.jobCounter,()=>r()),(o,s)=>(l(),m("div",me,[n("div",pe,[n("section",ve,[n("div",fe,[(R(t).routeID=="undefined",l(),m("div",ge,[(l(!0),m(x,null,A(c.presentations,(a,h)=>(l(),m("div",{key:h,class:"contentarea contentarea-lightblue"},[n("div",ye,[n("h2",_e,b(a.Title),1),n("p",we,b(d(String(a.PublishDate))),1)]),n("div",Ie,[S(he,{iframeId:2,height:600,vimeoID:Number(a.VimeoID),vimeoUrl:a.VimeoUrl,imageUrl:a.StartImageUrl.substring(0,2)=="D2"?e.picPath+a.StartImageUrl:a.StartImageUrl},null,8,["vimeoID","vimeoUrl","imageUrl"])])]))),128))]))])])])]))}}),be=w($e,[["__scopeId","data-v-ce8c3e16"]]),F=e=>(B("data-v-e940a113"),e=e(),T(),e),Se={class:"page-grid theme"},De=F(()=>n("div",{class:"yin-card top-head"},[n("div",{class:"card-cont"},[n("h2",null,"Theme Settings")])],-1)),Pe=F(()=>n("div",{class:"yin-card top"},null,-1)),Ce={class:"yin-card left"},Ue={class:"yin-card main"},Ve={class:"top-buttons-nav"},He={class:"home-bottom"},ke=_({__name:"Presentations",setup(e){const{common:t,commonFn:i}=E(),c=M({tabs:["General","KPI's","User Interface"]});return(d,r)=>{const o=k("router-link");return l(),m("main",null,[n("div",Se,[De,Pe,n("div",Ce,[S(W)]),n("div",Ue,[n("div",Ve,[(l(!0),m(x,null,A(c.tabs,s=>(l(),$(o,{to:{name:"ThemeTab",params:{id:s.toLowerCase()}},class:y({active:s.toLowerCase()=="general"})},{default:Y(()=>[K(b(s)+" ",1)]),_:2},1032,["to","class"]))),256))]),n("div",He,[R(t).routeID=="definitions"?(l(),$(N,{key:0,columns:[]})):(l(),$(be,{key:1}))])])])])}}});const Ee=w(ke,[["__scopeId","data-v-e940a113"]]);export{Ee as default};