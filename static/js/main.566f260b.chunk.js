(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,t,s){},37:function(e,t,s){},44:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),i=s(28),r=s.n(i),a=(s(36),s(31)),o=s(9),l=s(10),j=s(12),d=s(11),u=(s(37),s(8)),b=s(0),h=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"home-parent",children:Object(b.jsxs)("div",{className:"home-cont",children:[Object(b.jsx)("h1",{children:"Quiz App"}),Object(b.jsx)(u.b,{to:"/quiz",children:Object(b.jsx)("button",{children:"Play"})})]})})}}]),s}(c.Component),p=(s(44),s(30)),x=s.n(p),O=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).next=function(){c.state.index_value<9?c.setState({index_value:c.state.index_value+1}):alert("Quiz Completed Quit Now")},c.previous=function(){0===c.state.index_value?alert("Please Start"):c.state.index_value>0&&c.setState({index_value:c.state.index_value-1})},c.verifyAns=function(e){var t=e.target.value,s=document.getElementById("ans");c.props.isAttempt(),c.state.datas[c.state.index_value].answer===t?(s.innerText="Correct!",s.style.backgroundColor="green",s.style.display="block",s.style.border="2px solid green",c.next(),c.setState({correct:c.state.correct+1}),c.props.checkCorrect()):(s.innerText="Wrong!!!",s.style.backgroundColor="red",s.style.animation="hideIt 1s forwards",s.style.display="block",s.style.border="2px solid red",c.next(),c.setState({wrong:c.state.attempt-c.state.correct+1}),c.props.checkWrong())},c.state={index_value:0,datas:[],attempt:0},c}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://my-json-server.typicode.com/Naveen132895/quiz-api/questions").then((function(t){e.setState({datas:t.data})}))}},{key:"render",value:function(){var e=this.state.datas.length,t=this.state.datas[this.state.index_value];return console.log(this.state.correct),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"quiz-parent",children:e>0?Object(b.jsxs)("div",{className:"quiz-cont",id:"quiz-cont",children:[Object(b.jsxs)("div",{id:"quiz-container",children:[Object(b.jsx)("div",{className:"head",children:"Question"}),Object(b.jsxs)("div",{className:"question-num",children:[Object(b.jsxs)("p",{id:"numbers",children:[t.id," of 10"]}),Object(b.jsx)("p",{id:"question",children:t.question})]}),Object(b.jsxs)("div",{className:"options-container",children:[Object(b.jsxs)("div",{className:"option-cont-1",children:[Object(b.jsx)("button",{className:"button",onClick:this.verifyAns,id:"opt-1",value:t.options[0],children:t.options[0]}),Object(b.jsx)("button",{className:"button",onClick:this.verifyAns,id:"opt-2",value:t.options[1],children:t.options[1]})]}),Object(b.jsxs)("div",{className:"option-cont-2",children:[Object(b.jsx)("button",{className:"button",onClick:this.verifyAns,id:"opt-3",value:t.options[2],children:t.options[2]}),Object(b.jsx)("button",{className:"button",onClick:this.verifyAns,id:"opt-4",value:t.options[3],children:t.options[3]})]})]})]}),Object(b.jsxs)("div",{className:"controls",children:[Object(b.jsx)("button",{onClick:this.previous,id:"prev",children:"Previous"}),Object(b.jsx)("button",{onClick:this.next,id:"next",children:"Next"}),Object(b.jsx)("button",{id:"quit",children:Object(b.jsx)(u.b,{to:"/Result",className:"link",children:"Quit"})})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{id:"ans"})})]}):Object(b.jsx)("div",{})})})}}]),s}(c.Component),m=(s(63),function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return console.log(this.props),Object(b.jsxs)("div",{className:"result-parent",children:[Object(b.jsxs)("div",{className:"result",children:[Object(b.jsx)("i",{class:"fa fa-check-circle","aria-hidden":"true"}),Object(b.jsx)("h1",{className:"result-heading",children:"Result"})]}),Object(b.jsxs)("div",{className:"result-cont",children:[10*this.props.correct<60?Object(b.jsx)("p",{className:"status",children:"You need more practice !"}):Object(b.jsx)("p",{children:"Well Done"}),Object(b.jsxs)("p",{className:"score",children:["Your Score: ",10*this.props.correct]}),Object(b.jsxs)("div",{className:"main",children:[Object(b.jsxs)("p",{children:["Total number of question:",Object(b.jsx)("span",{children:" 10"})]}),Object(b.jsxs)("p",{children:["Number of attempted question:",Object(b.jsx)("span",{children:this.props.attempt})]}),Object(b.jsxs)("p",{children:["Number of Correct Answers:",Object(b.jsxs)("span",{children:[" ",this.props.correct]})]}),Object(b.jsxs)("p",{children:["Number of Wrong Answers:",Object(b.jsx)("span",{children:this.props.wrong})]})]})]}),Object(b.jsxs)("div",{className:"btn-container",children:[Object(b.jsx)("button",{className:"play",children:Object(b.jsx)(u.b,{to:"/Quiz",className:"link",children:" Play Again"})}),Object(b.jsx)("button",{className:"back",children:Object(b.jsx)(u.b,{to:"/project-builder-react-stage-3-result",className:"link",children:"Back to Home"})})]})]})}}]),s}(c.Component)),v=s(2),f=function(e){Object(j.a)(s,e);var t=Object(d.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).checkCorrect=function(){e.setState({correct:e.state.correct+1})},e.isAttempt=function(){e.setState({attempt:e.state.attempt+1})},e.checkWrong=function(){e.setState({wrong:e.state.attempt-e.state.correct+1})},e.state={correct:0,attempt:0,wrong:0},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(u.a,{children:Object(b.jsxs)(v.c,{children:[Object(b.jsx)(v.a,{exact:!0,path:"/project-builder-react-stage-3-result",children:Object(b.jsx)(h,{})}),Object(b.jsx)(v.a,{path:"/Quiz",children:Object(b.jsx)(O,{checkCorrect:this.checkCorrect,isAttempt:this.isAttempt,checkWrong:this.checkWrong})}),Object(b.jsx)(v.a,{children:Object(b.jsx)(v.a,{path:"/Result",children:Object(b.jsx)(m,Object(a.a)({},this.state))})})]})})})}}]),s}(c.Component),N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,65)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),c(e),n(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),N()}},[[64,1,2]]]);
//# sourceMappingURL=main.566f260b.chunk.js.map