(this.webpackJsonpattiahmall=this.webpackJsonpattiahmall||[]).push([[32],{323:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return A}));var l=a(15),r=a(35),n=a(3),s=a.n(n),c=a(6),m=a(2),i=a(1),o=a.n(i),d=a(61),u=a(8),b=a(21),x=a(29),p=a(14),h=a.n(p),E=(a(28),a(52)),f=a(5),y=a(16),v=a(67),N=a(4),g=a(42),w=a(108),k=a.n(w),j=a(109),C=a.n(j),_=a(112),O=a.n(_),S=a(110),z=a.n(S),M=a(269),D=a.n(M),q=a(22),F=a(11);function T(e){var t=e.id,a=e.isOpen,l=e.handleOrderDetailsClose,r=Object(d.a)(),n=r.locale,s=r.formatMessage,c=o.a.useContext(u.a).deliveryCountry;o.a.useEffect((function(){return a&&(document.body.style.overflow="hidden"),function(){return document.body.style.overflow="unset"}}),[a]);var m=Object(F.c)(["single-guest-order",t],y.A,{retry:!0,refetchOnWindowFocus:!1}),i=m.data,b=m.isLoading;return o.a.createElement(f.c.div,{variants:{hidden:{y:"50%",opacity:0},visible:{y:0,opacity:1,transition:{type:"tween"}},exited:{x:"100%",opacity:0,transition:{type:"tween"}}},initial:"hidden",animate:"visible",exit:"exited",className:"fixed top-0 left-0 right-0 bottom-0 overflow-y-scroll bg-body-light z-30 h-screen"},o.a.createElement("div",{className:" sticky top-0 p-3 flex items-center bg-main-color text-main-text z-1"},o.a.createElement("button",{className:"text-white text-center",onClick:l},"en"===n?o.a.createElement(q.f,{className:"w-6 h-6 "}):o.a.createElement(q.g,{className:"w-6 h-6 "})),o.a.createElement("h1",{className:"font-semibold text-lg mx-4"},s({id:"order-details"}))),b&&o.a.createElement("div",{className:"flex justify-center items-center",style:{height:"calc(100vh - 51px)"}},o.a.createElement(h.a,{type:"ThreeDots",color:"#b72b2b",height:40,width:40,visible:!0})),!b&&o.a.createElement("div",null,o.a.createElement("div",{className:"p-2 border-b"},o.a.createElement("h1",{className:"font-bold text-lg"},s({id:"delivery"}))),o.a.createElement("div",{className:"p-2"},o.a.createElement("div",{className:" font-semibold"},o.a.createElement("h1",{className:"text-gray-700 font-bold"},s({id:"full-name"})),o.a.createElement("h1",{className:"text-sm"},i.address.customer.name)),i.address.customer.email&&o.a.createElement("div",{className:" font-semibold"},o.a.createElement("h1",{className:"text-gray-700 font-bold "},s({id:"full-name"})),o.a.createElement("h1",{className:"text-sm"},i.address.customer.email)),o.a.createElement("div",{className:" font-semibold"},o.a.createElement("h1",{className:"text-gray-700 font-bold"},s({id:"phone-number"})),o.a.createElement("h1",{className:"text-sm"},i.address.customer.mobile)),o.a.createElement("div",{className:" font-semibold"},o.a.createElement("h1",{className:"text-gray-700 font-bold "},s({id:"location"})),o.a.createElement("h1",{className:"text-sm"},"".concat("map"===i.address.type?i.address.marked_address:i.address.userTyped_address))),o.a.createElement("div",{className:"font-semibold"},o.a.createElement("h1",{className:"text-gray-700  font-bold"},s({id:"maps-detailed-address-apartment"})),o.a.createElement("h1",{className:"text-sm"},i.address.apartment_house_number)),i.address.building_tower_number&&o.a.createElement("div",{className:"font-semibold"},o.a.createElement("h1",{className:"text-gray-800  font-bold"},s({id:"maps-detailed-address-building"})),o.a.createElement("h1",{className:"text-sm"},i.address.building_tower_number)),i.address.addition_direction&&o.a.createElement("div",{className:"font-semibold"},o.a.createElement("h1",{className:"text-gray-800 font-bold"},s({id:"maps-details-extra-details"})),o.a.createElement("h1",{className:"text-sm"},i.address.addition_direction)),o.a.createElement("div",null,"map"===i.address.type&&i.address.lat&&o.a.createElement("img",{src:"https://maps.googleapis.com/maps/api/staticmap?center=".concat(i.address.lat,",").concat(i.address.lng,"&zoom=15&size=150x150&\n              markers=color:blue%7C").concat(i.address.lat,"-").concat(i.address.lng,"&key=").concat("AIzaSyAYprqr3Vrnmhwx9UQozUNNks7CVH9m3Xg"),alt:"map"}))),o.a.createElement("hr",{className:"my-4"}),o.a.createElement("div",{className:"p-2 border-b"},o.a.createElement("h1",{className:"font-bold text-lg"},s({id:"order-receipt"}))),o.a.createElement("div",{className:"p-2 text-sm"},o.a.createElement("div",{className:"my-orders-items__table-desktop font-semibold text-center mb-2"},o.a.createElement("h1",null,"#"),o.a.createElement("h1",null,s({id:"the-item"})),o.a.createElement("h1",null,s({id:"quantity"})),o.a.createElement("h1",null,s({id:"price"})),o.a.createElement("h1",null,s({id:"total"}))),i.items.map((function(e,t){return o.a.createElement("div",{key:e.id,className:"my-orders-item-desktop text-base text-center"},o.a.createElement("div",{className:""},o.a.createElement("h1",{className:""},t+1)),o.a.createElement(N.b,{to:"/".concat(n,"/products/").concat(e.product.slug,"/").concat(e.id),className:"hover:underline truncate uppercase font-semibold block"},e.product.translation[n].title),o.a.createElement("div",{className:""},o.a.createElement("h1",{className:""},e.qty)),o.a.createElement("div",{style:{fontWeight:900}},o.a.createElement("h1",{className:""},e.price," ")),o.a.createElement("div",{style:{fontWeight:900},className:"text-green-700"},o.a.createElement("h1",{className:""},(e.price*e.qty).toFixed(3)," ",null===c||void 0===c?void 0:c.currency.translation[n].symbol)))})),o.a.createElement("hr",{className:"my-3"}),o.a.createElement("div",{className:"my-orders-receipt-summary font-bold"},o.a.createElement("h1",null,s({id:"cart-total"})),o.a.createElement("h1",{className:"text-center"},i.subtotal," ",o.a.createElement("span",{className:"mx-1"},null===c||void 0===c?void 0:c.currency.translation[n].symbol)),o.a.createElement("h1",null,s({id:"cart-delivery-cost"})),o.a.createElement("h1",{className:"text-center"},"0"===i.shipping_cost?s({id:"cart-free"}):i.shipping_cost," ",o.a.createElement("span",{className:"mx-1"},null===c||void 0===c?void 0:c.currency.translation[n].symbol)),"0.000"!==i.coupon_cost&&o.a.createElement("h1",{className:"mb-2 text-green-700"},s({id:"coupon-sale"})),"0.000"!==i.coupon_cost&&o.a.createElement("h1",{className:"mb-2 text-center text-green-700"},i.coupon_cost,o.a.createElement("span",{className:"mx-1"},null===c||void 0===c?void 0:c.currency.translation[n].symbol)),o.a.createElement("h1",{className:"text-green-700 text-lg font-bold",style:{fontWeight:900}},s({id:"subtotal"})),o.a.createElement("h1",{className:"text-green-700 text-lg font-bold text-center",style:{fontWeight:900}},i.total," ",null===c||void 0===c?void 0:c.currency.translation[n].symbol)))))}function W(e){var t=e.orders,a=Object(d.a)().formatMessage,l=o.a.useState(!1),r=Object(m.a)(l,2),n=r[0],s=r[1],c=o.a.useState(null),i=Object(m.a)(c,2),u=i[0],b=i[1],x={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}};return 0===t.length?o.a.createElement("div",{className:"flex justify-center items-center",style:{height:"calc(100vh - 56px)"}},a({id:"no-orders-placed"})):o.a.createElement(o.a.Fragment,null,o.a.createElement(f.c.div,{variants:{hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{staggerChildren:.1,when:"beforeChildren"}}},initial:"hidden",animate:"visible",exit:"exit",className:"",style:{minHeight:"calc(-56px + 100vh)"}},o.a.createElement("div",{className:"p-3 my-orders-items__grid-mobile"},t.map((function(e){return o.a.createElement(f.c.div,{key:e.id,layout:!0,onClick:function(){b(e.id),s(!0)},variants:x,className:"mb-3 cursor-pointer w-full rounded-lg ".concat(u===e.id?"bg-gray-800":"bg-gray-900","  hover:bg-gray-800 transition duration-200 text-main-text")},function(e){switch(e){case"completed":return o.a.createElement("div",{className:" text-body-text-dark flex items-center rounded  px-3 py-2  font-semibold bg-green-700  "},o.a.createElement("h1",null,a({id:"order-status"})),":",o.a.createElement("h1",{className:"mx-1"},a({id:"order-completed"})));case"canceled":return o.a.createElement("div",{className:" text-body-text-dark flex items-center rounded px-3 py-2 font-semibold bg-main-color  "},o.a.createElement("h1",null,a({id:"order-status"})),":",o.a.createElement("h1",{className:"mx-1"},a({id:"order-cancelled"})));case"pending":return o.a.createElement("div",{className:" text-body-text-dark  flex items-center rounded  px-3 py-2  font-semibold bg-yellow-600  "},o.a.createElement("h1",null,a({id:"order-status"})),":",o.a.createElement("h1",{className:"mx-1"},a({id:"order-pending"})));case"delivery":return o.a.createElement("div",{className:" text-body-text-dark  flex items-center rounded  px-3 py-2 font-semibold bg-blue-600  "},o.a.createElement("h1",null,a({id:"order-status"})),":",o.a.createElement("h1",{className:"mx-1"},a({id:"order-delivery"})));case"waiting_for_payment":return o.a.createElement("div",{className:" text-body-text-dark flex items-center  rounded px-3 py-2 font-semibold bg-yellow-600  "},o.a.createElement("h1",null,a({id:"order-status"})),":",o.a.createElement("h1",{className:"mx-1"},a({id:"order-waiting-for-payment"})));case"confirmed":return o.a.createElement("div",{className:" text-body-text-dark flex items-center rounded px-3 py-2  font-semibold bg-blue-600  "},o.a.createElement("h1",null,a({id:"order-status"})),":",o.a.createElement("h1",{className:"mx-1"},a({id:"order-confirmed"})));case"new":return o.a.createElement("div",{className:"text-body-text-dark px-3 py-2 rounded  font-semibold flex items-center  bg-blue-600  "},o.a.createElement("h1",null,a({id:"order-status"})),":",o.a.createElement("h1",{className:"mx-1"},a({id:"order-new"})))}}(e.status),o.a.createElement("div",{className:"p-3"},o.a.createElement("div",{className:"flex items-center font-bold"},o.a.createElement("h1",null,a({id:"order-number"})),o.a.createElement("h1",{className:"mx-1"},e.id)),o.a.createElement("div",{className:"flex items-center font-bold"},o.a.createElement("h1",null,a({id:"order-date"})),o.a.createElement("h1",{className:"mx-1"},D()(e.created_at).format("DD/MM/YYYY - HH:MM"))),o.a.createElement("div",{className:"flex items-center text-sm"},o.a.createElement("h1",{className:"text-gray-600"},"completed"===e.status?a({id:"delivery-status"}):a({id:"expected-delivery"})," ",":"),o.a.createElement("h1",{className:"mx-1"},"completed"===e.status?a({id:"delivered"}):"Soon")),o.a.createElement("div",{className:"text-sm"},o.a.createElement("h1",{className:"text-gray-600"},a({id:"payment-method"})," :"),"knet"===(t=e.payment_method)?o.a.createElement("div",{className:"  flex  items-center justify-start  p-2 font-semibold"},o.a.createElement("img",{src:k.a,alt:t}),o.a.createElement("div",{className:"flex-1 mx-3 text-left"},"K-net")):"credit"===t?o.a.createElement("div",{className:"  flex  items-center justify-start  p-2 font-semibold"},o.a.createElement("img",{src:C.a,alt:t}),o.a.createElement("div",{className:"flex-1 mx-3 text-left"},"Credit Card")):"amex"===t?o.a.createElement("div",{className:" flex  items-center justify-start  p-2 font-semibold"},o.a.createElement("img",{src:z.a,alt:t}),o.a.createElement("div",{className:"flex-1 mx-3 text-left"},"American Express")):"cod"===t?o.a.createElement("div",{className:"  flex  items-center justify-start  p-2 font-semibold"},o.a.createElement("img",{src:O.a,alt:t}),o.a.createElement("div",{className:"flex-1 mx-3 text-left"},a({id:"cash-on-delivery"}))):void 0),o.a.createElement("button",{onClick:function(){b(e.id),s(!0)},className:"px-3 py-1 text-body-text-dark bg-blue-700 uppercase  rounded font-semibold"},a({id:"order-details"}))));var t})))),o.a.createElement(f.a,null,n&&o.a.createElement(T,{id:u,handleOrderDetailsClose:function(){b(null),s(!1)},isOpen:n})))}var Y=[{value:"+965",label:"+965"},{value:"+966",label:"+966"}];function A(){var e=o.a.useContext(u.a).settings,t=o.a.useState(Y[0]),a=Object(m.a)(t,2),l=a[0],r=a[1],n=Object(d.a)(),i=n.formatMessage,p=n.locale,E=o.a.useState(!1),w=Object(m.a)(E,2),k=w[0],j=w[1],C=o.a.useState(""),_=Object(m.a)(C,2),O=_[0],S=_[1],z=o.a.useState(!1),M=Object(m.a)(z,2),D=M[0],q=M[1],F=o.a.useState([]),T=Object(m.a)(F,2),A=T[0],V=T[1],B=b.a({phoneNumber:b.c().matches(/^\d+$/,i({id:"number-only"})).required(i({id:"phone-empty"}))});return o.a.createElement(v.a,null,o.a.createElement(f.a,null,!D&&o.a.createElement(f.c.div,{initial:!1,exit:{opacity:0},className:" text-gray-900 p-1 relative flex items-center justify-center",style:{height:"calc(100vh - 56px)"}},k&&o.a.createElement(g.a,{message:O,closeFunction:function(){j(!1)}}),o.a.createElement(f.c.div,{className:" z-2  overflow-hidden"},o.a.createElement("div",{className:"flex items-center flex-col mb-4  rounded-lg text-center "},o.a.createElement(N.b,{to:"/".concat(p,"/")},o.a.createElement("img",{src:null===e||void 0===e?void 0:e.store_logo_color,alt:"",className:" mb-3",style:{width:"100px",height:"50px"}})),o.a.createElement("h2",{className:"text-xl mb-2 text-center font-bold"},i({id:"track-my-order"})),o.a.createElement("h1",{className:"font-semibold"},i({id:"track-order-enter-your-phone"}))),o.a.createElement("div",{className:"rounded-lg border bg-gray-100 mb-2"},o.a.createElement(x.a,{initialValues:{phoneNumber:""},validationSchema:B,onSubmit:function(){var e=Object(c.a)(s.a.mark((function e(t,a){var r,n,c,m,o,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!1),e.prev=1,e.next=4,Object(y.P)({phoneNumber:"".concat(l.value).concat(t.phoneNumber)});case 4:r=e.sent,V(r.orders),q(!0),a.setSubmitting(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),"user not exists"===(null===(n=e.t0.response)||void 0===n||null===(c=n.data)||void 0===c?void 0:c.message)?(j(!0),S(i({id:"track-order-no-orders"}))):"The selected mobile is invalid."===(null===(m=e.t0.response)||void 0===m||null===(o=m.data)||void 0===o||null===(d=o.message)||void 0===d?void 0:d.mobile[0])?a.setErrors({phoneNumber:i({id:"invalid-phone"})}):(j(!0),S(i({id:"something-went-wrong-snackbar"})));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var t=e.handleSubmit,a=e.values,n=e.isSubmitting;return o.a.createElement("form",{className:"px-3 py-2",onSubmit:t},o.a.createElement(H,{label:i({id:"phone-label"}),name:"phoneNumber",value:a.phoneNumber,countryCode:l,setCountryCode:r}),o.a.createElement("div",{className:" py-1 mt-2"},o.a.createElement("button",{disabled:n,type:"submit",className:"".concat(n?"bg-main-color cursor-not-allowed":"bg-main-color text-main-text hover:bg-main-color"," w-full rounded uppercase flex items-center justify-center  p-2 font-semibold  transition duration-150 ")},o.a.createElement(h.a,{type:"ThreeDots",color:"#fff",height:24,width:24,visible:n}),!n&&i({id:"btn-track"}))))})))))),o.a.createElement(f.a,null,D&&o.a.createElement(W,{orders:A})))}var H=function(e){var t=e.label,a=(e.value,e.name),n=e.countryCode,s=e.setCountryCode,c=Object(r.a)(e,["label","value","name","countryCode","setCountryCode"]),i=Object(x.b)(a),d=Object(m.a)(i,2),u=d[0],b=d[1];return o.a.createElement("div",{className:"w-full mb-2 flex flex-col "},o.a.createElement("label",{htmlFor:a,className:"text-sm font-semibold text-gray-800 mb-1"},t),o.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"0.5fr 1fr",gap:"0.5rem"}},o.a.createElement(E.a,{options:Y,isSearchable:!1,value:n,onChange:s,styles:{dropdownIndicator:function(e){return Object(l.a)({},e,{padding:"0.25rem"})},valueContainer:function(e){return Object(l.a)({},e,{padding:"0.5rem"})}}}),o.a.createElement("input",Object.assign({},u,c,{onBlur:function(e){u.onBlur(e)},className:" border rounded w-full p-2 ".concat(b.error&&"border-main-color")}))),b.touched&&b.error?o.a.createElement("h1",{className:"text-xs text-main-color mt-1"},b.error):o.a.createElement("h1",{className:"text-xs text-main-color mt-1",style:{height:"18px"}}," "))}}}]);
//# sourceMappingURL=32.e39b2df5.chunk.js.map