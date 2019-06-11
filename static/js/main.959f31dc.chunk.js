(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(22)},19:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),c=a.n(r),i=(a(19),a(7)),s=a.n(i),l=a(12),h=a(8),u=a(9),d=a(2),m=a(3),p=a(6),b=a(4),f=a(1),v=a(5);var k=function(e){var t=e.phones,a=e.click,n=e.addPhone;return o.a.createElement("ul",{className:"phones"},t.map(function(e){return o.a.createElement("li",{className:"thumbnail","data-phone-id":e.id,"data-element":"phone-element",key:"data-"+e.id},o.a.createElement("a",{href:"#!/phones/motorola-xoom-with-wi-fi",className:"thumb","data-element":"details-link"},o.a.createElement("img",{alt:e.name+"\u2122 with Wi-Fi",src:"./"+e.imageUrl,onClick:function(){return a(e.id)}})),o.a.createElement("div",{className:"phones__btn-buy-wrapper"},o.a.createElement("a",{href:"#!/phones/motorola-xoom-with-wi-fi",className:"btn btn-success","data-element":"add-to-cart",onClick:function(){return n(e.id)}},"Add")),o.a.createElement("a",{href:"#!/phones/motorola-xoom-with-wi-fi","data-element":"details-link",onClick:function(){return a(e.id)}},e.name),o.a.createElement("p",null,e.snippet))}))},E=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.backToCatalog,a=e.addPhone,n=e.selected,r=e.phones.filter(function(e){return e.id===n});return o.a.createElement("div",null,o.a.createElement("img",{"data-element":"large-image",className:"phone",src:r[0].imageUrl,alt:"img"}),o.a.createElement("button",{"data-back-button":"backToCatalog",onClick:t},"Back"),o.a.createElement("button",{"data-element":"add-to-cart-view",onClick:function(){return a(n)}},"Add to basket"),o.a.createElement("h1",null),o.a.createElement("p",null),o.a.createElement("ul",{className:"phone-thumbs"}))}}]),t}(o.a.Component),g=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectedPhones,a=e.removePhone,n=Object.entries(t);return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Shopping Cart:"),o.a.createElement("ul",{"data-element":"add-phones"},this._renderList(n,a)))}},{key:"_renderList",value:function(e,t){return e.map(function(e,a){return o.a.createElement("li",{key:"add-phone"+a},o.a.createElement("button",{onClick:function(){return t(e[0])}},"x"),e[0],": ",e[1])})}}]),t}(o.a.Component);var P=function(e){var t=e.search;return o.a.createElement("p",null,"Search:",o.a.createElement("input",{onChange:t}))};var w=function(e){var t=e.sort;return o.a.createElement("p",null,"Sort by:",o.a.createElement("select",{onChange:function(e){return t(e)}},o.a.createElement("option",{value:"age"},"Newest"),o.a.createElement("option",{value:"name"},"Alphabetical")))},j=(a(21),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(b.a)(t).call(this))).url="https://mate-academy.github.io/phone-catalogue-static/api/",e.state={phones:[],phoneViewerHide:!0,pagePhone:"",selectedPhones:{}},e.clickedPhone=e.clickedPhone.bind(Object(f.a)(e)),e.backToCatalog=e.backToCatalog.bind(Object(f.a)(e)),e.addPhone=e.addPhone.bind(Object(f.a)(e)),e.removePhone=e.removePhone.bind(Object(f.a)(e)),e.filter=e.filter.bind(Object(f.a)(e)),e.sort=e.sort.bind(Object(f.a)(e)),e}return Object(v.a)(t,e),Object(m.a)(t,[{key:"clickedPhone",value:function(e){this.setState({phoneViewerHide:!1,pagePhone:e})}},{key:"backToCatalog",value:function(){this.setState({phoneViewerHide:!0})}},{key:"addPhone",value:function(e){var t=Object(u.a)({},this.state.selectedPhones);Object.keys(t).includes(e)?t[e]++:t[e]=1,this.setState({selectedPhones:t})}},{key:"removePhone",value:function(e){var t=Object(u.a)({},this.state.selectedPhones);for(var a in t)e===a&&(t[a]=t[a]-1);t[e]<1&&(delete t[e],this.setState({selectedPhones:t})),this.setState({selectedPhones:t})}},{key:"filter",value:function(e){var t=Object(h.a)(this.state.phones).filter(function(t){return t.id.toLowerCase().includes(e.target.value.toLowerCase())});""===e.target.value?this.getPhones():this.setState({phones:t})}},{key:"sort",value:function(e){var t,a=e.target.value,n=Object(h.a)(this.state.phones);"name"===a&&(t=n.sort(function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a<n?-1:a>n?1:0})),"age"===a&&(t=n.sort(function(e,t){return e.age-t.age})),this.setState({phones:t})}},{key:"getPhones",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.url+"phones.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({phones:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getPhones()}},{key:"render",value:function(){var e=o.a.createElement(k,{click:this.clickedPhone,addPhone:this.addPhone,phones:this.state.phones});return this.state.phoneViewerHide||(e=o.a.createElement(E,{backToCatalog:this.backToCatalog,addPhone:this.addPhone,selected:this.state.pagePhone,phones:this.state.phones})),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-2"},o.a.createElement("section",null,o.a.createElement(P,{search:this.filter}),o.a.createElement(w,{sort:this.sort})),o.a.createElement("section",null,o.a.createElement(g,{selectedPhones:this.state.selectedPhones,removePhone:this.removePhone}))),o.a.createElement("div",{className:"col-md-10"},e)))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.959f31dc.chunk.js.map