import{T as p}from"./TheTitle-CTqTawwA.js";import{_ as g,r as s,o as _,p as v,c as k,d as l,a as h,t as d,F as I,b}from"./index-Qt7jJzao.js";const T=["src","alt"],V={class:"profile"},w={class:"writing"},x={class:"profileborder"},A=["src","alt"],B={class:"sticker"},D=["src","alt"],N={__name:"ProfileView",props:{name:{type:String,required:!0}},setup(f){const i=s("Default Title"),r=f,a=s({}),n=s(""),c=s(""),u=s(""),m=s("");return _(()=>{const t=v.find(e=>e.profile.some(o=>o.name===r.name));if(t){const e=t.profile.find(o=>o.name===r.name);e&&(a.value=e,i.value=e.userName,n.value=`/tellus/images${e.backgroundImage}`,c.value=`/tellus/images${e.profileImage}`,u.value=`/tellus/images${e.sticker}`,m.value=e.location)}}),(t,e)=>(b(),k(I,null,[l("header",null,[h(p,{title:i.value},null,8,["title"])]),l("img",{src:n.value,alt:a.value.backgroundImageAlt,class:"bgimg"},null,8,T),l("div",V,[l("div",w,[l("div",x,[l("img",{src:c.value,alt:a.value.profileImageAlt,class:"profileimg"},null,8,A)]),l("p",null,d(m.value),1),l("p",null,d(a.value.bio),1),l("div",B,[e[0]||(e[0]=l("h2",null,"stickers",-1)),l("img",{src:u.value,alt:a.value.stickerAlt,class:"stickerimg"},null,8,D)])])])],64))}},$=g(N,[["__scopeId","data-v-203f4dca"]]);export{$ as default};
