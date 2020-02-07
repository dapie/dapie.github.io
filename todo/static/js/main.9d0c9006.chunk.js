(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(9),c=a.n(s),i=(a(15),a(7)),o=a(2),h=a(3),r=a(5),d=a(4),k=a(1),u=a(6),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(k.a)(a)),a.handleClick=a.handleClick.bind(Object(k.a)(a)),a.handleKeyDown=a.handleKeyDown.bind(Object(k.a)(a)),a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(e){this.props.onChange(e.target.value)}},{key:"handleClick",value:function(){this.props.onClick()}},{key:"handleKeyDown",value:function(e){"Enter"===e.key&&this.props.onClick()}},{key:"render",value:function(){var e=this.props.value;return l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"New task",value:e,onChange:this.handleChange,onKeyDown:this.handleKeyDown}),l.a.createElement("div",{className:"input-group-append",id:"button-addon4"},l.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:this.handleClick},"Add")))}}]),t}(l.a.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).handleClickOnCheckbox=a.handleClickOnCheckbox.bind(Object(k.a)(a)),a.handleTaskTextChange=a.handleTaskTextChange.bind(Object(k.a)(a)),a.handleDeleteClick=a.handleDeleteClick.bind(Object(k.a)(a)),a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"handleClickOnCheckbox",value:function(){this.props.onClickCheckbox(this.props.id)}},{key:"handleTaskTextChange",value:function(e){this.props.onChangeText(this.props.id,e.target.value)}},{key:"handleDeleteClick",value:function(){this.props.onDeleteClick(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.text,a=e.done;return l.a.createElement("div",{className:"input-group mb-3"+(a?" done":" ")},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text"},l.a.createElement("input",{type:"checkbox",className:"bigcheckbox",checked:a,onChange:this.handleClickOnCheckbox}))),l.a.createElement("input",{type:"text",className:"form-control",value:t,onChange:this.handleTaskTextChange,disabled:a}),l.a.createElement("div",{className:"input-group-append",id:"button-addon4"},l.a.createElement("button",{className:"btn btn-danger",type:"button",onClick:this.handleDeleteClick},"\u2716")))}}]),t}(l.a.Component),C=(a(16),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={newTaskText:"",tasks:JSON.parse(localStorage.getItem("tasks"))||[]},a.handleNewTaskText=a.handleNewTaskText.bind(Object(k.a)(a)),a.handleNewTaskAdd=a.handleNewTaskAdd.bind(Object(k.a)(a)),a.handleCheckBoxClick=a.handleCheckBoxClick.bind(Object(k.a)(a)),a.handleTaskTextChange=a.handleTaskTextChange.bind(Object(k.a)(a)),a.handleTaskDeleteClick=a.handleTaskDeleteClick.bind(Object(k.a)(a)),a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"saveToLocalStorage",value:function(){localStorage.setItem("tasks",JSON.stringify(this.state.tasks))}},{key:"handleNewTaskText",value:function(e){this.setState({newTaskText:e})}},{key:"handleNewTaskAdd",value:function(){var e=this.state,t=e.tasks,a=e.newTaskText;if(a){var n=t.map((function(e){return e.id})),l=n.length?Math.max.apply(Math,Object(i.a)(n))+1:1;this.setState({tasks:[].concat(Object(i.a)(t),[{id:l,text:a,done:!1}]),newTaskText:""},this.saveToLocalStorage)}}},{key:"handleCheckBoxClick",value:function(e){var t=this.state.tasks,a=t.map((function(e){return e.id})).indexOf(e),n=Object(i.a)(t);n[a].done=!n[a].done,this.setState({tasks:n},this.saveToLocalStorage)}},{key:"handleTaskTextChange",value:function(e,t){var a=this.state.tasks,n=a.map((function(e){return e.id})).indexOf(e),l=Object(i.a)(a);l[n].text=t,this.setState({tasks:l},this.saveToLocalStorage)}},{key:"handleTaskDeleteClick",value:function(e){var t=this.state.tasks,a=t.map((function(e){return e.id})).indexOf(e);console.log(a);var n=Object(i.a)(t);n.splice(a,1),this.setState({tasks:n},this.saveToLocalStorage)}},{key:"render",value:function(){var e=this,t=this.state,a=t.tasks,n=t.newTaskText;return l.a.createElement("div",{className:"container mt-4 todo"},l.a.createElement("div",{className:"card px-3"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title text-center"},"ToDo"),l.a.createElement(p,{value:n,onChange:this.handleNewTaskText,onClick:this.handleNewTaskAdd}),l.a.createElement("hr",null),a.length?a.map((function(t){return l.a.createElement(b,{key:t.id,id:t.id,text:t.text,done:t.done,onClickCheckbox:e.handleCheckBoxClick,onChangeText:e.handleTaskTextChange,onDeleteClick:e.handleTaskDeleteClick})})):l.a.createElement("p",{className:"text-center"},"Empty list"))))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.9d0c9006.chunk.js.map