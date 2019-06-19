(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(22)},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),c=n.n(r),s=(n(19),n(12)),i=n(9),l=n(2),h=n.n(l),u=n(8),m=n(3),d=n(4),p=n(6),f=n(5),v=n(1),b=n(7);var g=function(e){var t=e.phones,n=e.click,a=e.addPhone,r=e.getPhoneImg;return o.a.createElement("ul",{className:"phones"},t.map(function(e){return o.a.createElement("li",{className:"thumbnail","data-phone-id":e.id,"data-element":"phone-element",key:"data-"+e.id},o.a.createElement("a",{href:"#!/phones/motorola-xoom-with-wi-fi",className:"thumb","data-element":"details-link"},o.a.createElement("img",{alt:e.name+"\u2122 with Wi-Fi",src:"./"+e.imageUrl,onClick:function(){n(e.id),r(e.id)}})),o.a.createElement("div",{className:"phones__btn-buy-wrapper"},o.a.createElement("a",{href:"#!/phones/motorola-xoom-with-wi-fi",className:"btn btn-success","data-element":"add-to-cart",onClick:function(){a(e.id)}},"Add")),o.a.createElement("a",{href:"#!/phones/motorola-xoom-with-wi-fi","data-element":"details-link",onClick:function(){n(e.id),r(e.id)}},e.name),o.a.createElement("p",null,e.snippet))}))};var k=function(e){var t=e.backToCatalog,n=e.addPhone,a=e.selected,r=e.phones,c=e.phoneImages,s=r.filter(function(e){return e.id===a});return o.a.createElement("div",null,o.a.createElement("img",{"data-element":"large-image",className:"phone",src:s[0].imageUrl,alt:"img"}),o.a.createElement("button",{"data-back-button":"backToCatalog",onClick:t},"Back"),o.a.createElement("button",{"data-element":"add-to-cart-view",onClick:function(){return n(a)}},"Add to basket"),o.a.createElement("h1",null,s[0].name),o.a.createElement("p",null,s[0].snippet),o.a.createElement("ul",{className:"phone-thumbs"},c.map(function(e,t){return o.a.createElement("li",{key:t,onClick:function(){return t=e,void(document.querySelector(".phone").src=t);var t}},o.a.createElement("img",{alt:"img",src:e}))})))},E=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectedPhones,n=e.removePhone,a=Object.entries(t);return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Shopping Cart:"),o.a.createElement("ul",{"data-element":"add-phones"},this._renderList(a,n)))}},{key:"_renderList",value:function(e,t){return e.map(function(e,n){return o.a.createElement("li",{key:"add-phone"+n},o.a.createElement("button",{onClick:function(){return t(e[0])}},"x"),e[0],": ",e[1])})}}]),t}(o.a.Component);var P=function(e){var t=e.search;return o.a.createElement("p",null,"Search:",o.a.createElement("input",{onChange:function(e){return t(e)}}))};var w=function(e){var t=e.sort;return o.a.createElement("p",null,"Sort by:",o.a.createElement("select",{onChange:function(e){return t(e)}},o.a.createElement("option",{value:"age"},"Newest"),o.a.createElement("option",{value:"name"},"Alphabetical")))},j=(n(21),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(f.a)(t).call(this))).getPhones=function(){var t=Object(u.a)(h.a.mark(function t(n){var a,o,r,c,s;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n&&(a=n.target.value),t.next=3,fetch(e.url+".json");case 3:return r=t.sent,t.next=6,r.json();case 6:c=t.sent,a?(s=c.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())}),o=s.length>0?s:[]):o=c,e.setState({phones:o});case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.getPhoneImages=function(){var t=Object(u.a)(h.a.mark(function t(n){var a,o;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.url+"/"+n+".json");case 2:return a=t.sent,t.next=5,a.json();case 5:o=t.sent,e.setState({phoneImages:o.images});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.url="https://mate-academy.github.io/phone-catalogue-static/api/phones",e.state={phones:[],phoneViewerHide:!0,pagePhone:"",selectedPhones:{},phoneImages:[]},e.clickedPhone=e.clickedPhone.bind(Object(v.a)(e)),e.backToCatalog=e.backToCatalog.bind(Object(v.a)(e)),e.addPhone=e.addPhone.bind(Object(v.a)(e)),e.removePhone=e.removePhone.bind(Object(v.a)(e)),e.filter=e.filter.bind(Object(v.a)(e)),e.sort=e.sort.bind(Object(v.a)(e)),e}return Object(b.a)(t,e),Object(d.a)(t,[{key:"clickedPhone",value:function(e){this.setState({phoneViewerHide:!1,pagePhone:e})}},{key:"backToCatalog",value:function(){this.setState({phoneViewerHide:!0})}},{key:"addPhone",value:function(e){var t=Object(i.a)({},this.state.selectedPhones);Object.keys(t).includes(e)?t[e]++:t[e]=1,this.setState({selectedPhones:t})}},{key:"removePhone",value:function(e){var t=Object(i.a)({},this.state.selectedPhones);for(var n in t)e===n&&(t[n]=t[n]-1);t[e]<1&&(delete t[e],this.setState({selectedPhones:t})),this.setState({selectedPhones:t})}},{key:"sort",value:function(e){var t,n=e.target.value,a=Object(s.a)(this.state.phones);"name"===n&&(t=a.sort(function(e,t){var n=e.name.toLowerCase(),a=t.name.toLowerCase();return n<a?-1:n>a?1:0})),"age"===n&&(t=a.sort(function(e,t){return e.age-t.age})),this.setState({phones:t})}},{key:"componentDidMount",value:function(){this.getPhones()}},{key:"render",value:function(){var e=o.a.createElement(g,{getPhoneImg:this.getPhoneImages,click:this.clickedPhone,addPhone:this.addPhone,phones:this.state.phones});return this.state.phoneViewerHide||(e=o.a.createElement(k,{backToCatalog:this.backToCatalog,addPhone:this.addPhone,selected:this.state.pagePhone,phones:this.state.phones,phoneImages:this.state.phoneImages})),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-2"},o.a.createElement("section",null,o.a.createElement(P,{search:this.getPhones}),o.a.createElement(w,{sort:this.sort})),o.a.createElement("section",null,o.a.createElement(E,{selectedPhones:this.state.selectedPhones,removePhone:this.removePhone}))),o.a.createElement("div",{className:"col-md-10"},e)))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.09e50ceb.chunk.js.map