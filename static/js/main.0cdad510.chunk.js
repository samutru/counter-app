(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),s=a.n(c),l=(a(15),a(7)),o=a(6),i=a(1),u=a(2),m=a(4),d=a(3),f=a(5),b=function(e){var t=e.totalCounters;return r.a.createElement("nav",{className:"navbar navbar-light"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("i",{className:"fa fa-shopping-cart fa-lg m-2","aria-hidden":"true"}),r.a.createElement("span",{className:"badge badge-pill badge-info m-2",style:{width:50,fontSize:"24px"}},t),"Items in the list"))},h=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).getBadgeClasses=function(){var e="badge m-2 badge-";return e+=0===a.props.counter.value?"warning":"primary"},a.formatCount=function(){var e=a.props.counter.value;return 0===e?"Zero":e},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:""},r.a.createElement("span",{style:{fontSize:24},className:this.getBadgeClasses()},this.formatCount())),r.a.createElement("div",{className:""},r.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.props.onIncrement(e.props.counter)}},r.a.createElement("i",{className:"fa fa-plus-circle","aria-hidden":"true"})),r.a.createElement("button",{className:"btn btn-info m-2",onClick:function(){return e.props.onDecrement(e.props.counter)},disabled:0===this.props.counter.value?"disabled":""},r.a.createElement("i",{className:"fa fa-minus-circle","aria-hidden":"true"})),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.onDelete(e.props.counter.id)}},r.a.createElement("i",{className:"fa fa-trash-o","aria-hidden":"true"})))))}}]),t}(n.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onReset,a=e.onIncrement,n=e.onDelete,c=e.onDecrement,s=e.counters,l=e.onRestart;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:""},r.a.createElement("button",{className:"btn btn-success m-2",onClick:t,disabled:0===s.length?"disabled":""},r.a.createElement("i",{className:"fa fa-refresh","aria-hidden":"true"})),r.a.createElement("button",{className:"btn btn-primary m-2",onClick:l,disabled:0!==s.length?"disabled":""},r.a.createElement("i",{className:"fa fa-recycle","aria-hidden":"true"})))),s.map(function(e){return r.a.createElement(h,{key:e.id,counter:e,onIncrement:a,onDecrement:c,onDelete:n})}))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={counters:[{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},a.handleIncrement=function(e){var t=Object(o.a)(a.state.counters),n=t.indexOf(e);t[n]=Object(l.a)({},t[n]),t[n].value++,a.setState({counters:t})},a.handleDecrement=function(e){var t=Object(o.a)(a.state.counters),n=t.indexOf(e);t[n]=Object(l.a)({},t[n]),t[n].value--,a.setState({counters:t})},a.handleReset=function(){var e=a.state.counters.map(function(e){return e.value=0,e});a.setState({counters:e})},a.handleDelete=function(e){var t=a.state.counters.filter(function(t){return t.id!==e});a.setState({counters:t})},a.handleRestart=function(){window.location.reload()},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main__wrap"},r.a.createElement("main",{className:"container"},r.a.createElement("div",{className:"card__box"},r.a.createElement(b,{totalCounters:this.state.counters.filter(function(e){return e.value>0}).length}),r.a.createElement(p,{counters:this.state.counters,onReset:this.handleReset,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onRestart:this.handleRestart}))))}}]),t}(n.Component);a(16),a(17);s.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.0cdad510.chunk.js.map