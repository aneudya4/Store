(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,t,a){e.exports=a(86)},72:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),o=a.n(c),s=a(6),i=a(7),l=a(9),u=a(8),m=a(10),p=a(90),d=a(89),h="zOyps5iN0ySoVtDgXtubx35V",E="https://api.bestbuy.com/beta/products/mostViewed(categoryId=pcmcat305200050000)?apiKey=".concat(h),f="https://api.bestbuy.com/beta/products/mostViewed(categoryId=abcat0811006)?apiKey=".concat(h),v=a(5),b=a(15),y=a.n(b),g=a(19),O=a(36),j=a.n(O),k=function(e){return function(){var t=Object(g.a)(y.a.mark(function t(a){var n,r;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,t.next=3,j.a.get(n);case 3:r=t.sent,a({type:"FETCH_ITEMS",payload:r.data.results});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(g.a)(y.a.mark(function t(a){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"ADD_TO_CART",payload:e});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(g.a)(y.a.mark(function t(a){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"REMOVE_FROM CART ",payload:e});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},w=a(87),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={activeButton:!1},a.onClickAdd=function(e){return a.itemInCart(e)?(a.setState({activeButton:!0}),null):a.props.addToCart(e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"itemInCart",value:function(e){return this.props.cart.find(function(t){return t.sku===e.sku})}},{key:"render",value:function(){var e=this,t=this.props.item,a=t.images,n=t.names,c=t.prices,o=t.customerReviews,s=t.sku,i=a.standard?a.standard:" https://img.bbystatic.com/BestBuy_US/images/products/5967/5967100_sa.jpg";return r.a.createElement("div",{className:"product-wrapper"},this.state.activeButton&&alert("product already in cart"),r.a.createElement("div",{className:"product-info"},r.a.createElement("div",{className:"phone-card"},r.a.createElement(w.a,{to:"/Store/product/".concat(s)},r.a.createElement("figure",null,r.a.createElement("img",{src:i,alt:n.title}))),r.a.createElement("div",{className:"item-info"},r.a.createElement("span",{className:"item-title"},n.title),r.a.createElement("span",{className:"price"},"Price : ",c.current),r.a.createElement("span",{className:"reviews"}," ","Reviews Score : ",o.averageScore),r.a.createElement("button",{className:this.itemInCart(this.props.item)?"view-cart":"add-to-cart",disable:this.state.activeButton.toString(),onClick:function(){return e.onClickAdd(e.props.item)}},this.itemInCart(this.props.item)?r.a.createElement(w.a,{to:"/store/cart"},"view Cart "):"add to cart")))))}}]),t}(n.Component),A=Object(v.b)(function(e){return{cart:e.cart}},{addToCart:N})(S),I=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header-left"},r.a.createElement(w.a,{to:"/Store"},"I-World")),r.a.createElement("div",{className:"header-links-right"},r.a.createElement("nav",{className:"navigation"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(w.a,{to:"/Store"},"Phones")),r.a.createElement("li",null,r.a.createElement(w.a,{to:"/Store/accesories"},"Accesories")),r.a.createElement("li",null,r.a.createElement(w.a,{to:"/Store/cart"},r.a.createElement("i",{className:"fas fa-shopping-cart"})))))))},T=function(e){return r.a.createElement("section",{className:"banner"})},B=function(){return r.a.createElement("div",{className:"select-products"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(w.a,{to:"/Store"},r.a.createElement("i",{className:"fa fa-mobile","aria-hidden":"true"}),r.a.createElement("p",null,"Check out our Phones"))),r.a.createElement("li",null," ",r.a.createElement(w.a,{to:"/Store/accesories"},r.a.createElement("i",{className:"fa fa-headphones","aria-hidden":"true"}),r.a.createElement("p",null,"Check out our Phone Accesories"))))))},R=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchItems(E)}},{key:"render",value:function(){var e=this.props.phones;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement(T,null),r.a.createElement(B,null),r.a.createElement("div",{className:"product-grid bg-color"},e.map(function(e){return r.a.createElement(A,{key:e.sku,item:e})})," "))}}]),t}(n.Component),F=Object(v.b)(function(e){return{phones:e.phones}},{fetchItems:k})(R),P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={activeButton:!1},a.onClickAdd=function(e){return a.props.cart.find(function(t){return t.sku===e.sku})?void a.setState({activeButton:!0}):a.props.addToCart(e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.setState({activeButton:this.props.cart.find(function(t){return t.sku===e.props.path})})}},{key:"render",value:function(){var e=this,t=this.props.product,a=t.images,n=t.names,c=t.prices,o=t.descriptions,s=t.customerReviews,i=this.state.activeButton;return r.a.createElement("div",{className:"single-product"},r.a.createElement("h1",null,n.title," "),r.a.createElement("img",{src:a.standard||"https://img.bbystatic.com/BestBuy_US/images/products/6287/6287787_sa.jpg",alt:n.title}),r.a.createElement("p",{className:"item-description"}," ",o.short),r.a.createElement("div",{className:"single-price"},r.a.createElement("span",{className:"current-price"},r.a.createElement("strong",null,"$",c.current)),r.a.createElement("span",{className:"old-price"}," ",c.current!==c.regular?"WAS:"+c.regular:null),r.a.createElement("span",{className:"vote"},"Vote Average : ",s.averageScore)),r.a.createElement("div",{className:"btns"},r.a.createElement("button",{disabled:i,className:i?"in-cart":null,onClick:function(){return e.onClickAdd(e.props.product)}},this.state.activeButton?"Added to cart":"Add To Cart"),r.a.createElement(w.a,{to:"/Store/cart"},"Go to \u2192"," ",r.a.createElement("i",{className:"fa fa-shopping-cart","aria-hidden":"true"})),r.a.createElement(w.a,{to:"/Store"}," ","Back home \u2190 ",r.a.createElement("i",{className:"fas fa-home"}))))}}]),t}(n.Component),_=Object(v.b)(function(e){return{cart:e.cart}},{addToCart:N,removeFromCart:C})(P),M=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.activePhone,a=e.fetchItems;0===t.length&&(a(E),a(f))}},{key:"render",value:function(){var e=this.props.match.params.PhoneId,t=this.props.activePhone.find(function(t){return t.sku===e}),a=r.a.createElement("div",null," Loading Product");return r.a.createElement("div",null,r.a.createElement(I,null),!t&&a,t&&r.a.createElement(_,{path:this.props.match.params.PhoneId,product:t}))}}]),t}(n.Component),D=Object(v.b)(function(e){return{activePhone:e.phones,cart:e.cart}},{fetchItems:k})(M),x=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.item;return r.a.createElement("div",{className:"cart-items"},r.a.createElement("div",{className:"cart-buying-option"},r.a.createElement("div",{className:"cart-items-img"},r.a.createElement("img",{src:t.images.standard,alt:t.names.title})),r.a.createElement("div",{className:"cart-items-details"},r.a.createElement("h3",null," DEVICE "),r.a.createElement("span",null,t.names.title),r.a.createElement("span",null,"Price: US$",t.prices.current))),r.a.createElement("button",{className:"remove-cart-item",onClick:function(){return a=t,void e.props.removeFromCart(a);var a}},"Remove From Cart"," "))}}]),t}(n.Component),V=Object(v.b)(null,{removeFromCart:C})(x),W=function(e){var t=e.total;return r.a.createElement("div",{className:"checkout"},r.a.createElement("i",{className:"fas fa-credit-card"}),r.a.createElement("h3",null,"TOTAL:",t.toFixed(2)))},U=Object(v.b)(function(e){return{cart:e.cart}})(function(e){var t=e.cart;if(0===e.cart.length)return r.a.createElement("div",{className:"empty-cart"}," ",r.a.createElement(I,null),r.a.createElement("span",{className:"title-cart"}," Your Cart"),r.a.createElement("div",{className:"btn"}," "),r.a.createElement("div",{className:"empty-cart-msg"},r.a.createElement("p",null,"It looks like your cart is empty...",r.a.createElement("i",{className:"fa fa-shopping-cart","aria-hidden":"true"}))," "));var a=t.length>0?t.reduce(function(e,t){return e+t.prices.regular},0):t[0].prices.regular;return r.a.createElement("div",null,r.a.createElement(I,null),t.map(function(e){return r.a.createElement(V,{key:e.sku,item:e})})," ",r.a.createElement(W,{total:a}))}),$=(a(72),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchItems(f)}},{key:"render",value:function(){var e=this.props.phonesAccesories;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement(T,null),r.a.createElement(B,null),r.a.createElement("div",{className:"product-grid bg-color"},e.map(function(e){return r.a.createElement(A,{key:e.sku,item:e})})," "))}}]),t}(n.Component)),H=Object(v.b)(function(e){return{phonesAccesories:e.phonesAccesories}},{fetchItems:k})($),J=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"products"},r.a.createElement(p.a,null,r.a.createElement(d.a,{exact:!0,path:"/Store",component:F}),r.a.createElement(d.a,{exact:!0,path:"/Store/accesories",component:H}),r.a.createElement(d.a,{path:"/Store/product/:PhoneId",component:D}),r.a.createElement(d.a,{path:"/Store/cart",component:U}))))}}]),t}(n.Component),K=a(88);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(14),z=[],G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ITEMS":return t.payload;default:return e}},X=a(41),Y=[],q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return Object(X.a)(e).concat([t.payload]);case"REMOVE_FROM CART ":return e.filter(function(e){return e.sku!==t.payload.sku});default:return e}},Q=Object(L.combineReducers)({phones:G,phonesAccesories:G,cart:q}),Z=a(38),ee=a(39),te=a.n(ee),ae=a(40),ne=[Z.a,te.a],re=Object(L.createStore)(Q,Object(ae.composeWithDevTools)(L.applyMiddleware.apply(void 0,ne)));o.a.render(r.a.createElement(v.a,{store:re},r.a.createElement(K.a,null,r.a.createElement(J,null))),document.getElementById("App")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,2,1]]]);
//# sourceMappingURL=main.1f382f02.chunk.js.map