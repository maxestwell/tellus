import{_ as d,r as a,o as c,c as r,a as e,t as l,e as u,n as p,d as n}from"./index-Bhop4ECf.js";const b={class:"text-c-centre"},g={class:"text-container"},m={class:"text"},R={class:"button-choices"},f={data(){return{isRecording:!1}},methods:{startRecording(){this.isRecording=!0},submitRecord(){this.isRecording=!1},submitResponse(){this.$router.push("/")}}},_=Object.assign(f,{__name:"RecordView",setup(v){const i=a("Default Title");return c(()=>{i.value="Tellus"}),(t,s)=>(n(),r("div",{class:p([{"bg-color-change":t.isRecording},"text-choices"])},[e("div",b,[e("div",g,[e("div",m,[e("h1",null,"You chose "+l(t.$route.query.answer)+"?!",1),s[4]||(s[4]=e("p",null,"record yourself for ~30s",-1)),e("div",R,[e("button",{class:"button-record button-record1",onClick:s[0]||(s[0]=(...o)=>t.startRecording&&t.startRecording(...o))},s[2]||(s[2]=[e("p",{class:"record-p"},"record",-1)])),t.isRecording?(n(),r("button",{key:0,class:"button-record button-record2",onClick:s[1]||(s[1]=o=>t.$router.push("/"))},s[3]||(s[3]=[e("p",{class:"record-p"},"submit",-1)]))):u("",!0)])])])])],2))}}),k=d(_,[["__scopeId","data-v-d8b38814"]]);export{k as default};
