import{r as a,o as d,c as p,a as t,b as r,T as m,f as o,t as i,F as f,d as b,e as g,u as v}from"./index-B1TL5I9a.js";const T={class:"submission-page"},k={name:"SubmissionPage",data(){return{file:null}},mounted(){this.file=this.$route.query.file},methods:{submitResponse(){this.$router.push("/confirmation")}}},$=Object.assign(k,{setup(N){const n=a("Default Title");return v(),d(()=>{n.value="Tellus"}),(s,e)=>{var l;return b(),p(f,null,[t("header",null,[r(m,{title:n.value},null,8,["title"]),r(g)]),t("div",T,[e[4]||(e[4]=t("h1",null,"Review Your Submission",-1)),e[5]||(e[5]=t("p",null,[t("strong",null,"Question:"),o(" Would you rather experience the 90s internet forever or the 2000s internet forever? ")],-1)),t("p",null,[e[2]||(e[2]=t("strong",null,"Your Answer:",-1)),o(" "+i(s.$route.query.answer),1)]),t("p",null,[e[3]||(e[3]=t("strong",null,"Uploaded File:",-1)),o(" "+i(((l=s.file)==null?void 0:l.name)||"No file uploaded"),1)]),t("button",{onClick:e[0]||(e[0]=(...u)=>s.submitResponse&&s.submitResponse(...u))},"Submit"),t("button",{onClick:e[1]||(e[1]=u=>s.$router.push("/upload"))},"Go Back")])],64)}}});export{$ as default};
