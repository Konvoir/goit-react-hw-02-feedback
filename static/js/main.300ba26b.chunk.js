(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={list:"Statistics_list__3lSGv",item:"Statistics_item__2D2yg"}},10:function(e,t,a){e.exports={button:"FeedbackList_button__1HFvq"}},11:function(e,t,a){e.exports={container:"App_container__2ie8b"}},21:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),i=a(6),s=a.n(i),o=a(7),r=a(8),l=a(9),d=a(13),b=a(12),u=a(3),j=a.n(u),h=a(10),v=a.n(h),f=a(0),p=function(e){var t=e.options,a=e.onLeaveFeedback;return t.map((function(e){return function(e){var t=e.feedback,a=e.onLeaveFeedback;return Object(f.jsx)("button",{type:"button",className:v.a.button,onClick:a,"data-feedback":t,children:t},t)}({feedback:e,onLeaveFeedback:a})}))};p.propTypes={options:j.a.arrayOf(j.a.string).isRequired,onLeaveFeedback:j.a.func.isRequired};var k=a(5),m=a.n(k),O=function(e){var t=e.title,a=e.children;return Object(f.jsxs)("section",{className:m.a.section,children:[Object(f.jsx)("h1",{className:m.a.title,children:t}),a]})};O.defaultPropes={title:"",children:[]};var x=a(1),g=a.n(x),_=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,i=e.positivePercentage;return Object(f.jsx)(f.Fragment,{children:c?Object(f.jsxs)("ul",{className:g.a.list,children:[Object(f.jsxs)("li",{className:g.a.item,children:["Good: ",t]}),Object(f.jsxs)("li",{className:g.a.item,children:["Neutral: ",a]}),Object(f.jsxs)("li",{className:g.a.item,children:["Bad: ",n]}),Object(f.jsxs)("li",{className:g.a.item,children:["Total: ",c]}),Object(f.jsxs)("li",{className:g.a.item,children:["Positive feedback: ",i,"%"]})]}):Object(f.jsx)("h3",{className:g.a.item,children:"No feedback given"})})},F=["good","neutral","bad"],N=a(11),y=a.n(N),P=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var a=t.target.dataset.feedback;e.setState((function(e){return Object(o.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositivePercentage=function(){var t=e.state.good,a=e.countTotalFeedback();return a?Math.round(t/a*100):0},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=this.countTotalFeedback(),i=this.countPositivePercentage();return Object(f.jsxs)("div",{className:y.a.container,children:[Object(f.jsx)(O,{title:"Statistics",children:Object(f.jsx)(_,{good:t,neutral:a,bad:n,total:c,positivePercentage:i})}),Object(f.jsx)(O,{title:"Please leave feedback",children:Object(f.jsx)(p,{options:F,onLeaveFeedback:this.onLeaveFeedback})})]})}}]),a}(n.Component);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(P,{})}),document.getElementById("root"))},5:function(e,t,a){e.exports={section:"Section_section__3Ay3j",title:"Section_title__1_jHU"}}},[[21,1,2]]]);
//# sourceMappingURL=main.300ba26b.chunk.js.map