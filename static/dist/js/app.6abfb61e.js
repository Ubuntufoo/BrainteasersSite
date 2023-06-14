(function(){"use strict";var e={7165:function(e,t,n){var r=n(6154),s=n(2346),a=n(9963),o=n(2201),i=n(6252),l=n(3577);const c={class:"container pt-5"},u={class:"shadow rounded bg-light w-75 mx-auto my-5 p-3"},d=(0,i._)("div",null,[(0,i._)("h2",{class:"display-3 fw-bold text-warning text-center pt-4"},"Anagram Hunt"),(0,i._)("hr",{class:"border border-black border-3 opacity-100 rounded"})],-1),m={key:0,class:"pt-2",id:"config-container"},p=(0,i.uE)('<ol class="list-group list-group-flush text-center my-5 fs-4"><li class="list-group-item"> Choose word length</li><li class="list-group-item"> Press <span class="fw-bold">Play!</span></li><li class="list-group-item"> Find anagrams! You get 60 seconds</li></ol>',1),g={key:1,id:"game-container"},f={class:"d-flex flex-xl-wrap justify-content-around border-bottom fw-bold py-4 fs-5"},w={key:2,class:"h-50 d-flex flex-column justify-content-evenly align-items-center text-center py-5",id:"end-game"},h=(0,i._)("h1",{class:"text-info display-4 mt-3"},"Time is Up!",-1),b={class:"text-info fs-1 my-4"},y=(0,i._)("p",null,"Final score:",-1),v={class:"fw-bold"};function x(e,t,n,r,s,a){const o=(0,i.up)("AnagramSelectInput"),x=(0,i.up)("AnagramPlayButton"),k=(0,i.up)("AnagramScoreComp"),_=(0,i.up)("AnagramTimeLeft"),A=(0,i.up)("AnagramWordGiven"),S=(0,i.up)("AnagramAnswerInput"),L=(0,i.up)("AnagramAnswerList"),C=(0,i.up)("AnagramRecordScore");return(0,i.wg)(),(0,i.iD)("section",c,[(0,i._)("div",u,[d,"config"===e.screen?((0,i.wg)(),(0,i.iD)("div",m,[(0,i.Wm)(o,{options:a.numbers,modelValue:e.WordLength,"onUpdate:modelValue":t[0]||(t[0]=t=>e.WordLength=t)},null,8,["options","modelValue"]),p,(0,i.Wm)(x,{onPlayButtonClick:a.play},null,8,["onPlayButtonClick"])])):"play"===e.screen?((0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("div",f,[(0,i.Wm)(k,{score:e.score},null,8,["score"]),(0,i.Wm)(_,{timeLeft:e.timeLeft},null,8,["timeLeft"])]),(0,i._)("div",null,[(0,i.Wm)(A,{startWord:e.startWord,answersLeft:e.answersLeft},null,8,["startWord","answersLeft"]),(0,i.Wm)(S,{modelValue:e.answered,"onUpdate:modelValue":t[1]||(t[1]=t=>e.answered=t),onChange:t[2]||(t[2]=t=>a.answerChk(e.answered))},null,8,["modelValue"]),(0,i.Wm)(L,{answers:e.correctAnswers},null,8,["answers"])])])):"game-over"===e.screen?((0,i.wg)(),(0,i.iD)("div",w,[h,(0,i._)("div",b,[y,(0,i._)("p",null,[(0,i._)("span",v,(0,l.zw)(e.finalScore),1),(0,i.Uk)(" Anagrams")])]),(0,i.Wm)(C,{finalScore:e.finalScore,user:n.user},null,8,["finalScore","user"]),(0,i._)("button",{onClick:t[3]||(t[3]=(...e)=>a.config&&a.config(...e)),class:"btn btn-primary btn-lg shadow rounded-pill fs-3 my-5"},"Play Again")])):(0,i.kq)("",!0)])])}n(7658);const k={class:"d-flex justify-content-evenly mt-3"},_=(0,i._)("label",{class:"form-label fw-bold text-uppercase fs-4 pt-3 text-center",for:"word-length"},"Word Length:",-1),A=["value"],S=["value"];function L(e,t,n,r,s,a){return(0,i.wg)(),(0,i.iD)("div",k,[_,(0,i._)("select",{class:"form-select shadow fs-4 w-50 text-center",role:"button",id:"word-length",value:n.modelValue,onChange:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.options,(e=>((0,i.wg)(),(0,i.iD)("option",{class:"fw-bold",key:e[1],value:e[1]},(0,l.zw)(e[0]),9,S)))),128))],40,A)])}var C={name:"AnagramSelectInput",props:{options:Array,modelValue:String}},D=n(3744);const W=(0,D.Z)(C,[["render",L]]);var I=W;const M={class:"text-center"};function P(e,t,n,r,s,a){return(0,i.wg)(),(0,i.iD)("div",M,[(0,i._)("button",{class:"btn btn-primary btn-lg shadow rounded-pill w-50 fs-4 mb-4",onClick:t[0]||(t[0]=t=>e.$emit("play-button-click"))}," Play! ")])}var j={name:"AnagramPlayButton"};const K=(0,D.Z)(j,[["render",P]]);var O=K;const T={class:"text-uppercase"};function N(e,t,n,r,s,a){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("p",T,"Score: "+(0,l.zw)(n.score),1)])}var Z={name:"AnagramScoreComp",props:{score:Number}};const q=(0,D.Z)(Z,[["render",N]]);var z=q;const V={class:"text-uppercase"};function $(e,t,n,r,s,a){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("p",V,"Time Left: "+(0,l.zw)(n.timeLeft),1)])}var B={name:"AnagramTimeLeft",props:{timeLeft:Number}};const G=(0,D.Z)(B,[["render",$]]);var U=G;const E={class:"d-flex flex-column gap-4 align-items-center m-5"},H={class:"fs-1 fw-bold text-white rounded-pill bg-primary px-5"},R={class:"fst-italic fs-5"};function Y(e,t,n,r,s,a){return(0,i.wg)(),(0,i.iD)("div",E,[(0,i._)("span",H,(0,l.zw)(n.startWord),1),(0,i._)("span",R,"( "+(0,l.zw)(n.answersLeft)+" remain )",1)])}var F={name:"AnagramWordGiven",props:{startWord:String,answersLeft:Number},data:function(){return{}}};const Q=(0,D.Z)(F,[["render",Y]]);var J=Q;const X={class:""},ee=["value"];function te(e,t,n,r,s,a){return(0,i.wg)(),(0,i.iD)("div",X,[(0,i._)("input",{class:"form-control shadow rounded text-center fw-bold w-75 mx-auto fs-5",role:"button",type:"text",placeholder:"> enter guess <",onChange:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value)),value:n.value},null,40,ee)])}var ne={name:"AnagramAnswerInput",props:{value:String},data:function(){return{}}};const re=(0,D.Z)(ne,[["render",te]]);var se=re;function ae(e,t,n,r,s,a){return(0,i.wg)(),(0,i.iD)("button",{class:"btn btn-secondary rounded-pill btn-lg shadow fs-4",onClick:t[0]||(t[0]=(...e)=>a.recordScore&&a.recordScore(...e))},"Record Score")}var oe={name:"AnagramRecordScore",props:{finalScore:Number,user:String},methods:{async recordScore(){const e={"user-name":this.user,score:this.finalScore,game:"ANAGRAM"};try{const t=await this.axios.post("/record-score/",e);console.log(t.data)}catch(t){console.error(`Error recording score: ${t.message}`),t.response&&404===t.response.status?console.error("Record not found"):t.response&&500===t.response.status?console.error("Server error"):console.error(`Unknown error: ${t.response.data}`)}}}};const ie=(0,D.Z)(oe,[["render",ae]]);var le=ie;const ce={class:"mx-auto vstack mt-4"};function ue(e,t,n,r,s,o){return(0,i.wg)(),(0,i.iD)("div",ce,[(0,i.Wm)(a.W3,{name:"list",tag:"ul",class:"me-4"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.answers,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e,class:(0,l.C_)("fs-1 fw-bold text-white rounded-pill bg-success text-center w-75 my-1 mx-auto")},(0,l.zw)(e),1)))),128))])),_:1})])}var de={name:"AnagramAnswerList",props:{answers:Array}};const me=(0,D.Z)(de,[["render",ue],["__scopeId","data-v-24d123a2"]]);var pe=me;const ge={5:[["abets","baste","betas","beast","beats"],["acres","cares","races","scare"],["alert","alter","later"],["angel","angle","glean"],["baker","brake","break"],["bared","beard","bread","debar"],["dater","rated","trade","tread"],["below","bowel","elbow"],["caret","cater","crate","trace","react"]],6:[["arrest","rarest","raster","raters","starer"],["carets","caters","caster","crates","reacts","recast","traces"],["canter","nectar","recant","trance"],["danger","gander","garden","ranged"],["daters","trades","treads","stared"]],7:[["allergy","gallery","largely","regally"],["aspired","despair","diapers","praised"],["claimed","decimal","declaim","medical"],["dearths","hardest","hatreds","threads","trashed"],["detains","instead","sainted","stained"]],8:[["parroted","predator","prorated","teardrop"],["repaints","painters","pantries","pertains"],["restrain","retrains","strainer","terrains","trainers"],["construe","counters","recounts","trounces"]]};function fe(e,t){const n=Math.random();return Math.floor(n*(t-e+1)+e)}function we(e){return Math.floor(Math.random()*e)}var he={name:"AnagramMainComponent",components:{AnagramSelectInput:I,AnagramPlayButton:O,AnagramScoreComp:z,AnagramTimeLeft:U,AnagramWordGiven:J,AnagramAnswerInput:se,AnagramRecordScore:le,AnagramAnswerList:pe},props:{user:String},data:function(){return{WordLength:"5",startArray:"",startWord:"",randArrayIndex:"",randWordIndex:"",answered:"",answerKey:"",correctAnswers:[],answersLeft:0,score:0,finalScore:0,startTime:"",timeLeft:60,screen:"config",newAnagram:{},anagrams:ge}},computed:{numbers(){return Array.from({length:4},((e,t)=>t+5)).map((e=>[e,e]))}},methods:{config(){this.screen="config"},gameOver(){this.finalScore=this.score,this.score=0,this.timeLeft=60,this.correctAnswers=[]},play(){this.screen="play",0===this.score&&(this.newAnagram=this.anagrams);const e=this.WordLength,t=this.newAnagram[e].length;if(0===t)this.screen="game-over",this.gameOver();else{this.randArrayIndex=we(t);const n=this.newAnagram[e][this.randArrayIndex],r=n.length;this.randWordIndex=we(r),this.startArray=n,this.startWord=n[this.randWordIndex],this.startArray.splice(this.randWordIndex,1),this.answerKey=this.startArray,this.answersLeft=this.answerKey.length,console.log(`answer key: ${this.answerKey}`)}this.startTimer()},startTimer(){60===this.timeLeft&&(this.timer=setInterval((()=>{this.timeLeft--,0===this.timeLeft&&(clearInterval(this.timer),this.screen="game-over",this.gameOver())}),1e3))},answerChk(e){const t=this.answerKey.indexOf(e.toLowerCase());-1!==t?(this.score++,this.answered="",this.answersLeft--,this.answerKey.splice(t,1),this.renderAnswer(e),console.log(`updated answer key: ${this.answerKey}`),0===this.answerKey.length&&(this.correctAnswers=[],this.newAnagram[this.WordLength].splice(this.randArrayIndex,1),this.play())):this.answered=""},renderAnswer(e){this.correctAnswers.push(e)}}};const be=(0,D.Z)(he,[["render",x]]);var ye=be;const ve={class:"container pt-5"},xe={class:"shadow rounded bg-light w-75 mx-auto p-3"},ke=(0,i._)("h2",{class:"display-3 fw-bold text-warning text-center pt-4"},"Mathificent",-1),_e=(0,i._)("hr",{class:"border border-black border-3 opacity-100 rounded"},null,-1),Ae={key:0,id:"config-container"},Se={key:1,id:"game-container",class:"pb-3"},Le={key:0},Ce={class:"d-flex justify-content-evenly border-bottom my-4"},De={class:"text-center"},We={key:1},Ie={class:"text-center"},Me=(0,i._)("h1",{class:"text-info display-4"},"Time is Up!",-1),Pe={class:"d-flex justify-content-evenly text-info fs-1 my-5"},je=(0,i._)("p",null,"Final score:",-1),Ke={class:"fw-bold"},Oe={class:"my-3"};function Te(e,t,n,r,s,a){const o=(0,i.up)("MathSelectInput"),c=(0,i.up)("MathPlayButton"),u=(0,i.up)("MathScore"),d=(0,i.up)("MathTimer"),m=(0,i.up)("MathEquation"),p=(0,i.up)("MathKeypad"),g=(0,i.up)("MathRecordScore");return(0,i.wg)(),(0,i.iD)("section",ve,[(0,i._)("div",xe,[ke,_e,"config"===e.screen?((0,i.wg)(),(0,i.iD)("div",Ae,[(0,i.Wm)(o,{currentValue:e.operation,label:"Operation",id:"operation",modelValue:e.operation,"onUpdate:modelValue":t[0]||(t[0]=t=>e.operation=t),options:e.operations},null,8,["currentValue","modelValue","options"]),(0,i.Wm)(o,{currentValue:e.maxNumber,label:"Maximum Number",id:"max-number",modelValue:e.maxNumber,"onUpdate:modelValue":t[1]||(t[1]=t=>e.maxNumber=t),options:a.numbers},null,8,["currentValue","modelValue","options"]),(0,i.Wm)(c,{onPlayButtonClick:a.play},null,8,["onPlayButtonClick"])])):"play"===e.screen?((0,i.wg)(),(0,i.iD)("div",Se,[e.timeLeft>0?((0,i.wg)(),(0,i.iD)("div",Le,[(0,i._)("div",Ce,[(0,i.Wm)(u,{score:e.score},null,8,["score"]),(0,i.Wm)(d,{timeLeft:e.timeLeft},null,8,["timeLeft"])]),(0,i._)("div",De,[(0,i._)("div",{class:(0,l.C_)([a.equationClass,"d-inline-flex justify-content-between fs-1 mb-3 py-3"])},[(0,i.Wm)(m,{question:a.question,answer:e.input,answered:e.answered},null,8,["question","answer","answered"])],2)]),(0,i.Wm)(p,{buttons:e.buttons,onKeyPress:a.setInput},null,8,["buttons","onKeyPress"])])):0===e.timeLeft?((0,i.wg)(),(0,i.iD)("div",We,[(0,i._)("div",Ie,[Me,(0,i._)("div",Pe,[je,(0,i._)("p",Ke,(0,l.zw)(e.finalScore),1)]),(0,i._)("div",null,[(0,i.Wm)(g,{user:n.user,finalScore:e.finalScore},null,8,["user","finalScore"])]),(0,i._)("div",Oe,[(0,i._)("button",{class:"btn btn-primary btn-lg shadow rounded-pill fs-3",onClick:t[2]||(t[2]=(...e)=>a.restart&&a.restart(...e))}," Play Again! ")]),(0,i._)("div",null,[(0,i._)("button",{class:"btn btn-primary btn-lg shadow rounded-pill fs-3",onClick:t[3]||(t[3]=(...e)=>a.config&&a.config(...e))}," Change Settings ")])])])):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])])}const Ne={class:"row w-75 justify-content-center my-5 mx-auto"},Ze=["for"],qe=["id","value"],ze=["value"];function Ve(e,t,n,r,s,a){return(0,i.wg)(),(0,i.iD)("div",Ne,[(0,i._)("label",{for:n.id,class:"col form-label fw-bold text-uppercase text-center fs-5 pt-3"},(0,l.zw)(n.label)+":",9,Ze),(0,i._)("select",{class:"col-md form-select shadow fs-5 text-center",id:n.id,value:n.currentValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.options,(e=>((0,i.wg)(),(0,i.iD)("option",{key:e[1],value:e[1],class:(0,l.C_)("fw-bold")},(0,l.zw)(e[0]),9,ze)))),128))],40,qe)])}var $e={name:"MathSelectInput",props:{id:String,label:String,options:Array,currentValue:String}};const Be=(0,D.Z)($e,[["render",Ve]]);var Ge=Be;const Ue={class:"text-center"};function Ee(e,t,n,r,s,a){return(0,i.wg)(),(0,i.iD)("div",Ue,[(0,i._)("button",{class:"btn btn-primary btn-lg shadow rounded-pill w-50 fs-4 mb-4",onClick:t[0]||(t[0]=t=>e.$emit("play-button-click"))}," Play! ")])}var He={name:"MathPlayButton"};const Re=(0,D.Z)(He,[["render",Ee]]);var Ye=Re;const Fe={class:"d-flex fs-4"},Qe=(0,i._)("p",{class:"text-uppercase me-2"},"Score:",-1),Je={class:"fw-bold"};function Xe(e,t,n,r,s,a){return(0,i.wg)(),(0,i.iD)("div",Fe,[Qe,(0,i._)("p",Je,(0,l.zw)(n.score),1)])}var et={name:"MathScore",props:{score:Number}};const tt=(0,D.Z)(et,[["render",Xe]]);var nt=tt;const rt={class:"d-flex fs-4"},st=(0,i._)("p",{class:"text-uppercase me-2"},"Time Left:",-1),at={class:"fw-bold"};function ot(e,t,n,r,s,a){return(0,i.wg)(),(0,i.iD)("div",rt,[st,(0,i._)("p",at,(0,l.zw)(n.timeLeft),1)])}var it={name:"MathTimer",props:{timeLeft:Number}};const lt=(0,D.Z)(it,[["render",ot]]);var ct=lt;const ut=(0,i._)("div",{class:"mx-3"},"=",-1);function dt(e,t,n,r,s,a){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",null,(0,l.zw)(n.question),1),ut,(0,i._)("div",null,(0,l.zw)(n.answer),1)],64)}var mt={name:"MathEquation",props:{question:String,answer:String,answered:Boolean}};const pt=(0,D.Z)(mt,[["render",dt]]);var gt=pt;function ft(e,t,n,r,s,a){return(0,i.wg)(),(0,i.iD)("button",{class:"btn btn-secondary btn-lg rounded-pill shadow fs-3",onClick:t[0]||(t[0]=(...e)=>a.recordScore&&a.recordScore(...e))},"Record Score")}var wt={name:"MathRecordScore",props:{finalScore:Number,user:String},methods:{async recordScore(){const e={"user-name":this.user,score:this.finalScore,game:"MATH"};try{const t=(await this.axios.post("/record-score/",e)).data;console.log(t.data)}catch(t){console.error(t.response.data)}}}};const ht=(0,D.Z)(wt,[["render",ft]]);var bt=ht;const yt={class:"row row-cols-3 justify-content-center gap-1 my-1"},vt=["onClick"],xt={class:"row row-cols-3 justify-content-center gap-1 my-1"},kt=["onClick"],_t={class:"row row-cols-3 justify-content-center gap-1 my-1"},At=["onClick"],St={class:"row row-cols-2 justify-content-center gap-2 my-1"},Lt=["onClick"];function Ct(e,t,n,r,s,a){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",yt,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.buttons.slice(0,3),(t=>((0,i.wg)(),(0,i.iD)("button",{key:t,onClick:n=>e.$emit("keyPress",t),class:(0,l.C_)("col-2 btn btn-outline-success shadow fs-3")},(0,l.zw)(t),9,vt)))),128))]),(0,i._)("div",xt,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.buttons.slice(3,6),(t=>((0,i.wg)(),(0,i.iD)("button",{key:t,onClick:n=>e.$emit("keyPress",t),class:(0,l.C_)("col-2 btn btn-outline-success shadow fs-3")},(0,l.zw)(t),9,kt)))),128))]),(0,i._)("div",_t,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.buttons.slice(6,9),(t=>((0,i.wg)(),(0,i.iD)("button",{key:t,onClick:n=>e.$emit("keyPress",t),class:(0,l.C_)("col-2 btn btn-outline-success shadow fs-3")},(0,l.zw)(t),9,At)))),128))]),(0,i._)("div",St,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.buttons.slice(9),(t=>((0,i.wg)(),(0,i.iD)("button",{key:t,onClick:n=>e.$emit("keyPress",t),class:(0,l.C_)("col-2 btn btn-outline-success shadow fs-3")},(0,l.zw)(t),9,Lt)))),128)),(0,i._)("button",{class:"col-4 btn btn-success shadow fs-3",onClick:t[0]||(t[0]=t=>e.$emit("keyPress","clear"))},"Clear")])],64)}var Dt={name:"MathKeypad",props:{buttons:Array}};const Wt=(0,D.Z)(Dt,[["render",Ct],["__scopeId","data-v-71b7bc8c"]]);var It=Wt,Mt={name:"MathMainComponent",components:{MathSelectInput:Ge,MathPlayButton:Ye,MathScore:nt,MathTimer:ct,MathEquation:gt,MathRecordScore:bt,MathKeypad:It},props:{user:String},data:function(){return{operations:[["Addition","+"],["Subtraction","-"],["Multiplication","x"],["Division","/"]],operation:"+",maxNumber:"10",buttons:[1,2,3,4,5,6,7,8,9,0],screen:"config",input:"",operands:{num1:"1",num2:"1"},answered:!1,score:0,finalScore:0,gameLength:60,timeLeft:0}},methods:{config(){this.screen="config"},play(){this.screen="play",this.newQuestion(),this.startTimer()},setInput(e){"clear"==e?this.input="":(this.input+=String(Number(e)),this.answered=this.checkAnswer(this.input,this.operation,this.operands),this.answered&&(setTimeout(this.newQuestion,300),this.score++,this.finalScore++))},getRandNumbers(e,t,n){let r=fe(t,n),s=fe(t,n);return"-"===e&&([r,s]=[Math.max(r,s),Math.min(r,s)]),"/"===e&&(0===s&&(s=fe(1,n)),r*=s),{num1:r,num2:s}},checkAnswer(e,t,n){if(isNaN(e))return!1;const{num1:r,num2:s}=n;let a;switch(t){case"+":a=r+s;break;case"-":a=r-s;break;case"x":a=r*s;break}return Number(e)===a},newQuestion(){this.input="",this.answered=!1,this.operands=this.getRandNumbers(this.operation,0,this.maxNumber)},startTimer(){window.addEventListener("keydown",this.handleKeyDown),this.timeLeft=this.gameLength,this.timeLeft>0&&(this.timer=setInterval((()=>{this.timeLeft--,0===this.timeLeft&&(clearInterval(this.timer),window.removeEventListener("keydown",this.handleKeyDown))}),1e3))},restart(){this.score=0,this.finalScore=0,this.startTimer(),this.newQuestion()},handleKeyDown(e){e.preventDefault(),32!==e.keyCode&&13!==e.keyCode&&(8===e.keyCode?this.input=this.input.substring(0,this.input.length-1):isNaN(e.key)||this.setInput(e.key))}},computed:{numbers:function(){const e=[];for(let t=2;t<=100;t++)e.push([t,t]);return e},question(){return`${this.operands.num1} ${this.operation} ${this.operands.num2}`},equationClass(){return this.answered?"text-primary fade":"text-info show"}}};const Pt=(0,D.Z)(Mt,[["render",Te]]);var jt=Pt,Kt=n(2262),Ot=n(2086),Tt=n.n(Ot);const Nt={id:"down-size",class:"simple-keyboard"};var Zt={__name:"WordleKeyboard",props:{guessedLetters:Object},emits:["onKeyPress"],setup(e,{emit:t}){const n=e,r=(0,Kt.iH)(null),s=e=>{t("onKeyPress",e)};return(0,i.bv)((()=>{r.value=new(Tt())("simple-keyboard",{layout:{default:["q w e r t y u i o p","a s d f g h j k l","{enter} z x c v b n m {bksp}"]},onKeyPress:s})})),(0,i.YP)((()=>n.guessedLetters),(e=>{r.value.addButtonTheme(e.miss.join(" "),"miss"),r.value.addButtonTheme(e.found.join(" "),"found"),r.value.addButtonTheme(e.hint.join(" "),"hint")}),{deep:!0}),(e,t)=>((0,i.wg)(),(0,i.iD)("div",Nt))}};const qt=Zt;var zt=qt;const Vt={key:0,class:"pt-2"};var $t={__name:"WordleLetterBox",props:{letter:{type:String,default:""},color:{type:String,default:""}},setup(e){return(t,n)=>((0,i.wg)(),(0,i.iD)("div",{id:"down-size",class:(0,l.C_)(["col rounded shadow justify-content-center align-items-center user-select-none text-uppercase text-center fs-1",{"border border-danger bg-danger text-white":"gray"==e.color,"border border-success bg-success text-white":"green"==e.color,"border border warning bg-warning text-white":"yellow"==e.color,"bg-light":!["gray","green","yellow"].includes(e.color)}])},[(0,i.Wm)(a.uT,null,{default:(0,i.w5)((()=>[e.letter?((0,i.wg)(),(0,i.iD)("p",Vt,(0,l.zw)(e.letter),1)):(0,i.kq)("",!0)])),_:1})],2))}};const Bt=(0,D.Z)($t,[["__scopeId","data-v-92427fec"]]);var Gt=Bt;const Ut={class:"row row-cols-5 justify-content-center gap-2 my-2"};var Et={__name:"WordleRow",props:{value:Array,solution:String,submitted:Boolean},setup(e){const t=e,n=(0,Kt.iH)(["","","","",""]);return(0,i.YP)((()=>t.submitted),(async(e,r)=>{if(t.submitted){let e=t.solution,r=t.value.join(""),s=["gray","gray","gray","gray","gray"],a=[];for(let t=0;t<5;t++)e.charAt(t)==r.charAt(t)?s[t]="green":a.push(e.charAt(t));for(let t=0;t<5;t++)"gray"==s[t]&&-1!=a.indexOf(r.charAt(t))&&(a.splice(a.indexOf(r.charAt(t)),1),s[t]="yellow"),n.value[t]=s[t],await new Promise((e=>setTimeout(e,300)))}})),(t,r)=>((0,i.wg)(),(0,i.iD)("div",Ut,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(5,(t=>(0,i.Wm)(Gt,{key:t,letter:e.value[t-1],color:n.value[t-1]},null,8,["letter","color"]))),64))]))}};const Ht=Et;var Rt=Ht;const Yt={class:"text-uppercase fw-bold h1"};var Ft={__name:"WordleGameOver",props:{content:{type:String,required:!0}},setup(e){return(t,n)=>((0,i.wg)(),(0,i.iD)("p",Yt,(0,l.zw)(e.content),1))}};const Qt=Ft;var Jt=Qt;const Xt=e=>((0,i.dD)("data-v-0bddd4f6"),e=e(),(0,i.Cn)(),e),en={class:"container position-relative d-flex justify-content-center pt-5"},tn={key:0,id:"game-title",class:"display-1 text-warning text-nowrap"},nn={key:0,class:"position-absolute top-50 start-50 translate-middle text-center"},rn=Xt((()=>(0,i._)("a",{class:"text-decoration-none text-white",onclick:"location.reload();"},"Play Again",-1))),sn=[rn];var an={__name:"WordleMain",props:{user:String},setup(e){const t={solution:"",guesses:[["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]],currentGuessIndex:0,guessedLetters:{miss:[],found:[],hint:[]}},n=()=>{s.solution=t.solution,s.guesses=t.guesses,s.currentGuessIndex=t.currentGuessIndex,s.guessedLetters=t.guessedLetters},s=(0,Kt.qj)(t),o=(0,i.Fl)((()=>s.guesses[s.currentGuessIndex-1]&&s.guesses[s.currentGuessIndex-1].join("")===s.solution)),c=(0,i.Fl)((()=>!o.value&&s.currentGuessIndex>=6)),u=(0,i.Fl)((()=>{let e="";return(o.value||c.value)&&(e="opacity-25"),e})),d=e=>{if(s.currentGuessIndex>=6||o.value)return;let t=s.guesses[s.currentGuessIndex];if("{enter}"==e){if(t.length>=5&&!t.includes("")){s.currentGuessIndex++;for(var n=0;n<5;n++){let e=t[n];e==s.solution.charAt(n)?(s.guessedLetters.found.push(e),s.guesses[s.currentGuessIndex][n]=e):-1!=s.solution.indexOf(e)?s.guessedLetters.hint.push(e):s.guessedLetters.miss.push(e)}}}else if("{bksp}"==e){for(let r=t.length-1;r>=0;r--)if(""!=t[r]){if(!s.guessedLetters.found.includes(t[r])||t[r]!=s.solution[r]){t[r]="";break}if(s.guesses[s.currentGuessIndex-1].reduce(((e,n)=>e+(n===t[r])),0)>=2&&s.solution.split("").reduce(((e,n)=>e+(n===t[r])),0)>=2)continue;if(s.guesses[s.currentGuessIndex-1].reduce(((e,n)=>e+(n===t[r])),0)<=1&&s.solution.split("").reduce(((e,n)=>e+(n===t[r])),0)>=2){if(t.reduce(((e,n)=>e+(n===t[r])),0)>=2){t[r]="";break}continue}}}else if(1==e.length){const n=/[a-zA-Z]/;if(n.test(e))for(let r=0;r<5;r++)if(!t[r]){t[r]=e;break}}};return(0,i.bv)((()=>{window.addEventListener("keyup",(e=>{e.preventDefault();let t="Enter"==e.key?"{enter}":"Backspace"==e.key?"{bksp}":e.key.toLowerCase();d(t)})),window.addEventListener("keydown",(e=>{const t=document.querySelector(`.hg-button[data-skbtn="${e.key.toLowerCase()}"]`);t&&(t.style.backgroundColor="#b3b3b3")})),window.addEventListener("keyup",(e=>{const t=document.querySelector(`.hg-button[data-skbtn="${e.key.toLowerCase()}"]`);t&&(t.style.backgroundColor="")}))})),r.Z.get("https://api.datamuse.com/words?sp=?????").then((e=>{const t=e.data[Math.floor(Math.random()*e.data.length)].word;s.solution=t})).catch((e=>{console.error(e)})),(e,t)=>((0,i.wg)(),(0,i.iD)("div",en,[(0,i._)("div",{class:(0,l.C_)((0,Kt.SU)(u))},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.guesses,((e,t)=>((0,i.wg)(),(0,i.j4)(Rt,{key:t,value:e,solution:s.solution,submitted:t<s.currentGuessIndex},null,8,["value","solution","submitted"])))),128)),(0,i.Wm)(zt,{onOnKeyPress:d,guessedLetters:s.guessedLetters},null,8,["guessedLetters"])],2),(0,i.Wm)(a.uT,null,{default:(0,i.w5)((()=>[0==s.guesses[0][0]?((0,i.wg)(),(0,i.iD)("div",tn,"Wordle +")):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(a.uT,null,{default:(0,i.w5)((()=>[(0,Kt.SU)(o)||(0,Kt.SU)(c)?((0,i.wg)(),(0,i.iD)("div",nn,[(0,Kt.SU)(o)?((0,i.wg)(),(0,i.j4)(Jt,{key:0,class:(0,l.C_)("text-primary"),content:"Congratulations!"})):(0,i.kq)("",!0),(0,Kt.SU)(c)?((0,i.wg)(),(0,i.j4)(Jt,{key:1,class:(0,l.C_)("text-primary"),content:"No more guesses. Play again!"},null,8,["content"])):(0,i.kq)("",!0),(0,i._)("button",{class:"btn btn-primary btn-lg fw-bold",onClick:n},sn)])):(0,i.kq)("",!0)])),_:1})]))}};const on=(0,D.Z)(an,[["__scopeId","data-v-0bddd4f6"]]);var ln=on;const cn=[{path:"/math-game",component:jt},{path:"/anagram-game",component:ye},{path:"/wordle-game",component:ln}],un=(0,o.p7)({history:(0,o.PO)(),routes:cn});var dn=un;function mn(e,t,n,r,s,a){const o=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(o,{user:s.parsedUser},null,8,["user"])}var pn={name:"App",data(){return{parsedUser:"User not authenticated"}},created(){this.parsedUser=JSON.parse(document.getElementById("username").textContent)}};const gn=(0,D.Z)(pn,[["render",mn]]);var fn=gn;r.Z.defaults.xsrfCookieName="csrftoken",r.Z.defaults.xsrfHeaderName="X-CSRFTOKEN";const wn=(0,a.ri)(fn);wn.use(dn),wn.use(s.Z,r.Z),wn.mount("#app")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,s,a){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],s=e[u][1],a=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(i=!1,a<o&&(o=a));if(i){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,s,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,a,o=r[0],i=r[1],l=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(l)var u=l(n)}for(t&&t(r);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self["webpackChunkvue_games"]=self["webpackChunkvue_games"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7165)}));r=n.O(r)})();
//# sourceMappingURL=app.6abfb61e.js.map