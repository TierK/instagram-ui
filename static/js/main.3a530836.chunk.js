(this["webpackJsonpinstagram-ui"]=this["webpackJsonpinstagram-ui"]||[]).push([[0],{26:function(e,t,a){e.exports=a(44)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),i=(a(31),a(32),a(6)),o=a(7),s=a(9),m=a(8),u=a(10),p=(a(33),a(15)),d=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},r.a.createElement("img",{src:"logo.png",style:{width:"60px"}})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(p.b,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{className:"nav-link",to:"/profile"},"Profile")))))}}]),t}(n.Component),v=(a(38),a(39),a(13)),h=a(14),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Post"},r.a.createElement("header",null,r.a.createElement("div",null," ",r.a.createElement(v.a,{icon:h.d})," ",this.props.id),r.a.createElement("div",null," ",r.a.createElement(v.a,{icon:h.a})," ",this.props.created)),r.a.createElement("div",{className:"userImg"},r.a.createElement("img",{src:this.props.imgUrl,alt:"userLogo"})),r.a.createElement("div",{className:"userTitle"},this.props.title),r.a.createElement("footer",null,r.a.createElement("div",null,this.props.children),r.a.createElement("div",{className:"likes"},r.a.createElement(v.a,{icon:h.c})," ",this.props.likes)))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={posts:[],loaded:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loaded:!0}),fetch("https://my-json-server.typicode.com/evyros/fake-api/posts").then((function(e){return e.json()})).then((function(t){e.setState({posts:t,loaded:!1})}))}},{key:"render",value:function(){function e(e){var t=new Date(1e3*e);return"".concat(t.getDate()," ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]," ").concat(t.getFullYear())}return r.a.createElement("div",{className:"Feed"},this.state.loading?r.a.createElement("div",{className:"Loader"},r.a.createElement(v.a,{icon:h.b,size:"6x",spin:!0}),"Loading..."):null,this.state.posts.map((function(t){return r.a.createElement(b,{id:t.id,created:e(t.created),imgUrl:t.image,title:t.title,likes:t.likes},r.a.createElement("div",{className:"postTags"},t.tags.map((function(e){return r.a.createElement("div",null,"#",e)}))))})))}}]),t}(n.Component),g=(a(43),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Profile")}}]),t}(n.Component)),f=a(11);var j=function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App bg-light"},r.a.createElement(d,null),r.a.createElement("main",null,r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/profile"},r.a.createElement(g,null)),r.a.createElement(f.a,{path:"/"},r.a.createElement(E,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.3a530836.chunk.js.map