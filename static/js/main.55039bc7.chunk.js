(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(84)},70:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),s=a(8),l=a(9),i=a(11),u=a(10),m=a(12),p=a(88),d=a(87),h="https://api.bestbuy.com/beta/products/mostViewed(categoryId=pcmcat305200050000)?apiKey=zOyps5iN0ySoVtDgXtubx35V",E="https://api.bestbuy.com/beta/products/mostViewed(categoryId=abcat0811006)?apiKey=zOyps5iN0ySoVtDgXtubx35V",f=a(5),v=a(15),b=a.n(v),O=a(19),y=a(36),g=a.n(y),N=function(e){return function(){var t=Object(O.a)(b.a.mark(function t(a){var n,r;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,t.next=3,g.a.get(n);case 3:r=t.sent,a({type:"FETCH_ITEMS",payload:r.data.results});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(O.a)(b.a.mark(function t(a){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"ADD_TO_CART",payload:e});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(O.a)(b.a.mark(function t(a){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"REMOVE_FROM CART ",payload:e});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},w=a(85),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={activeButton:!1},a.onClickAdd=function(e){return a.props.cart.find(function(t){return t.sku===e.sku})?(a.setState({activeButton:!0}),null):a.props.addToCart(e)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.item,a=t.images,n=t.names,c=t.prices,o=t.customerReviews,s=t.sku,l=a.standard?a.standard:" https://img.bbystatic.com/BestBuy_US/images/products/5967/5967100_sa.jpg";return r.a.createElement("div",{className:"product-wrapper"},this.state.activeButton&&alert("product already in cart"),r.a.createElement("div",{className:"product-info"},r.a.createElement(w.a,{to:"Store/product/".concat(s)},r.a.createElement("div",{className:"phone-card"},r.a.createElement("figure",null,r.a.createElement("img",{src:l,alt:n.title})),r.a.createElement("div",{className:"item-info"},r.a.createElement("span",{className:"item-title"},n.title),r.a.createElement("span",{className:"price"},"Price : ",c.current),r.a.createElement("span",{className:"reviews"}," ","Reviews Score : ",o.averageScore),r.a.createElement("button",{className:"add-to-cart",disable:this.state.activeButton.toString(),onClick:function(){return e.onClickAdd(e.props.item)}},"Add To Cart"))))))}}]),t}(n.Component),S=Object(f.b)(function(e){return{cart:e.cart}},{addToCart:k})(C),A=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header-left"},r.a.createElement(w.a,{to:"/Store"},"I-World")),r.a.createElement("div",{className:"header-links-right"},r.a.createElement("nav",{className:"navigation"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(w.a,{to:"/Store"},"Phones")),r.a.createElement("li",null,r.a.createElement(w.a,{to:"Store/accesories"},"Accesories")),r.a.createElement("li",null,r.a.createElement(w.a,{to:"Store/cart"},r.a.createElement("i",{className:"fas fa-shopping-cart"})))))))},T=function(e){return r.a.createElement("section",{className:"banner"})},_=function(){return r.a.createElement("div",{className:"select-products"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(w.a,{to:"/Store"},r.a.createElement("i",{className:"fa fa-mobile","aria-hidden":"true"}),r.a.createElement("p",null,"Check out our Phones"))),r.a.createElement("li",null," ",r.a.createElement(w.a,{to:"Store/accesories"},r.a.createElement("i",{className:"fa fa-headphones","aria-hidden":"true"}),r.a.createElement("p",null,"Check out our Phone Accesories"))))))},I=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchItems(h)}},{key:"render",value:function(){var e=this.props.phones;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(T,null),r.a.createElement(_,null),r.a.createElement("div",{className:"product-grid"},e.map(function(e){return r.a.createElement(S,{key:e.sku,item:e})})," "))}}]),t}(n.Component),D=Object(f.b)(function(e){return{phones:e.phones}},{fetchItems:N})(I),B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={activeButton:!1},a.onClickAdd=function(e){return a.props.cart.find(function(t){return t.sku===e.sku})?(a.setState({activeButton:!0}),null):a.props.addToCart(e)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({activeButton:this.props.cart.find(function(t){return t.sku===e.props.path})})}},{key:"render",value:function(){var e=this,t=this.props.product,a=t.images,n=t.names,c=t.prices,o=t.descriptions,s=t.customerReviews;return r.a.createElement("div",{className:"single-product"},r.a.createElement("h1",null,n.title," "),r.a.createElement("img",{src:a.standard,alt:n.title}),r.a.createElement("p",{className:"item-description"}," ",o.short),r.a.createElement("div",{className:"single-price"},r.a.createElement("span",{className:"current-price"},r.a.createElement("strong",null,"$",c.current)),r.a.createElement("span",{className:"old-price"}," ",c.current!==c.regular?"WAS:"+c.regular:null),r.a.createElement("span",{className:"vote"},"Vote Average : ",s.averageScore)),r.a.createElement("div",{className:"btns"},r.a.createElement("button",{disabled:this.state.activeButton,onClick:function(){return e.onClickAdd(e.props.product)}},this.state.activeButton?"Already in cart":"Add To Cart"),r.a.createElement(w.a,{to:"Store/cart"},"Go to \u2192"," ",r.a.createElement("i",{className:"fa fa-shopping-cart","aria-hidden":"true"})),r.a.createElement(w.a,{to:"/Store"}," ","Back home \u2190 ",r.a.createElement("i",{className:"fas fa-home"}))))}}]),t}(n.Component),R=Object(f.b)(function(e){return{cart:e.cart}},{addToCart:k,removeFromCart:j})(B),F=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.activePhone,a=e.fetchItems;0===t.length&&(a(h),a(E))}},{key:"render",value:function(){var e=this.props.match.params.PhoneId,t=this.props.activePhone.find(function(t){return t.sku===e}),a=r.a.createElement("div",null," Loading ");return r.a.createElement("div",null,r.a.createElement(A,null),!t&&a,t&&r.a.createElement(R,{path:this.props.match.params.PhoneId,product:t}))}}]),t}(n.Component),V=Object(f.b)(function(e){return{activePhone:e.phones,cart:e.cart}},{fetchItems:N})(F),P=Object(f.b)(null,{removeFromCart:j})(function(e){var t=e.item;return r.a.createElement("div",{className:"cart-items"},r.a.createElement("div",{className:"cart-buying-option"},r.a.createElement("div",{className:"cart-items-img"},r.a.createElement("img",{src:t.images.standard,alt:t.names.title})),r.a.createElement("div",{className:"cart-items-details"},r.a.createElement("h3",null," DEVICE "),r.a.createElement("span",null,t.names.title),r.a.createElement("span",null,"Price: US$",t.prices.current))),r.a.createElement("button",{className:"remove-cart-item",onClick:function(){return a=t,void e.removeFromCart(a);var a}},"Remove From Cart"," "))}),x=Object(f.b)(function(e){return{cart:e.cart}})(function(e){var t=e.cart;if(0===e.cart.length)return r.a.createElement("div",{className:"empty-cart"}," ",r.a.createElement(A,{style:{color:"white"}}),r.a.createElement("span",{className:"title"}," Your Cart"),r.a.createElement("div",{className:"btn"}," ",r.a.createElement(w.a,{className:"go-shopping",to:"/Store"},"Go Shopping")),r.a.createElement("div",{className:"empty-cart-msg"},r.a.createElement("p",null,"It looks like your cart is empty...",r.a.createElement("i",{className:"fa fa-shopping-cart","aria-hidden":"true"}))," "));var a=t.length>0?t.reduce(function(e,t){return e+t.prices.regular},0):t[0].prices.regular;return r.a.createElement("div",null,r.a.createElement(A,null),t.map(function(e){return r.a.createElement(P,{key:e.sku,item:e,total:a})})," ",r.a.createElement("div",{className:"checkout"},r.a.createElement("i",{className:"fas fa-credit-card"}),r.a.createElement("h3",null,"TOTAL:",a.toFixed(2))))}),M=(a(70),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchItems(E)}},{key:"render",value:function(){var e=this.props.phonesAccesories;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(T,null),r.a.createElement(_,null),r.a.createElement("div",{className:"product-grid"},e.map(function(e){return r.a.createElement(S,{key:e.sku,item:e})})," "))}}]),t}(n.Component)),X=Object(f.b)(function(e){return{phonesAccesories:e.phonesAccesories}},{fetchItems:N})(M),L=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"products"},r.a.createElement(p.a,null,r.a.createElement(d.a,{exact:!0,path:"/Store",component:D}),r.a.createElement(d.a,{exact:!0,path:"Store/accesories",component:X}),r.a.createElement(d.a,{path:"Store/product/:PhoneId",component:V}),r.a.createElement(d.a,{path:"Store/cart",component:x}))))}}]),t}(n.Component),U=a(86);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(14),$=[],z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ITEMS":return t.payload;default:return e}},G=a(40),H=[],J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return Object(G.a)(e).concat([t.payload]);case"REMOVE_FROM CART ":return e.filter(function(e){return e.sku!==t.payload.sku});default:return e}},K=Object(W.c)({phones:z,phonesAccesories:z,cart:J}),Y=a(38),q=a(39),Q=a.n(q),Z=[Y.a,Q.a],ee=Object(W.e)(K,Object(W.d)(W.a.apply(void 0,Z),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));o.a.render(r.a.createElement(f.a,{store:ee},r.a.createElement(U.a,null,r.a.createElement(L,null))),document.getElementById("App")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,2,1]]]);
//# sourceMappingURL=main.55039bc7.chunk.js.map