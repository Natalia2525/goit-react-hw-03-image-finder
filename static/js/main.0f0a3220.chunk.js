(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2jUvf",Modal:"Modal_Modal__28M3P"}},19:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1fMs5"}},20:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__1eFuM",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__Q_LGq"}},24:function(e,t,a){e.exports={Button:"Button_Button__2Vpo_"}},6:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3ytl6",SearchForm:"Searchbar_SearchForm__3mf6g",SearchForm_button:"Searchbar_SearchForm_button__2SWLc",SearchForm_button_label:"Searchbar_SearchForm_button_label__3N_GL",SearchForm_input:"Searchbar_SearchForm_input__1fSpW"}},72:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(5),o=a.n(c),l=a(4),i=a(7),u=(a(31),a(6)),s=a.n(u),m=a(1),b=function(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(l.a)(a,2),c=n[0],o=n[1];return Object(m.jsx)("header",{className:s.a.Searchbar,children:Object(m.jsxs)("form",{className:s.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==c?(t(c),o("")):i.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441")},children:[Object(m.jsx)("button",{type:"submit",className:s.a.SearchForm_button,children:Object(m.jsx)("span",{className:s.a.SearchForm_button_label,children:"Search"})}),Object(m.jsx)("input",{className:s.a.SearchForm_input,type:"text",value:c,placeholder:"Search images and photos",onChange:function(e){o(e.target.value)}})]})})},j=a(9),h=a.n(j);h.a.defaults.baseURL="https://pixabay.com/api";var d=a(19),_=a.n(d),f=a(20),g=a.n(f),O=function(e){var t=e.gallery,a=e.onClick;return Object(m.jsx)(m.Fragment,{children:t.map((function(e){return Object(m.jsx)("li",{className:"ImageGalleryItem",onClick:a,children:Object(m.jsx)("img",{src:e.webformatURL,alt:"",className:g.a.ImageGalleryItem_image,"data-image":e.largeImageURL})},e.id)}))})},p=function(e){var t=e.gallery,a=e.onClick;return Object(m.jsx)("ul",{className:_.a.ImageGallery,children:Object(m.jsx)(O,{gallery:t,onClick:a})})},y=a(21),S=a(22),x=a(26),v=a(25),I=a(23),F=a.n(I),k=(a(71),function(e){Object(x.a)(a,e);var t=Object(v.a)(a);function a(){return Object(y.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"render",value:function(){return Object(m.jsx)(F.a,{style:{textAlign:"center"},className:"Loader",type:"Circles",color:"#00BFFF",height:80,width:80})}}]),a}(r.Component)),C=a(24),G=a.n(C),w=function(e){var t=e.onClick;return Object(m.jsx)("button",{onClick:t,className:G.a.Button,type:"button",children:"Load more"})},N=a(10),L=a.n(N),M=document.querySelector("#modal-root"),E=function(e){var t=e.onClose,a=e.children;Object(r.useEffect)((function(){return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}));var n=function(e){"Escape"===e.code&&t()};return Object(c.createPortal)(Object(m.jsx)("div",{className:L.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(m.jsx)("div",{className:L.a.Modal,children:a})}),M)},B=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),o=Object(l.a)(c,2),u=o[0],s=o[1],j=Object(r.useState)(1),d=Object(l.a)(j,2),_=d[0],f=d[1],g=Object(r.useState)(""),O=Object(l.a)(g,2),y=O[0],S=O[1],x=Object(r.useState)(""),v=Object(l.a)(x,2),I=v[0],F=v[1];Object(r.useEffect)((function(){if(""!==y)return n(!0),function(e){var t=e.searchQuery,a=e.page;return h.a.get("/?q=".concat(t,"&page=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12&key=").concat("19731613-0dd9928f669764263ad400b12")).then((function(e){return e.data.hits}))}({page:_,searchQuery:y}).then((function(e){return s(e)})).then((function(){return C()})).catch((function(e){return i.b.error("Error")})).finally((function(){return n(!1)}))}),[_,y]);var C=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b,{onSubmit:function(e){S(e),f(1),s([])}}),Object(m.jsx)(p,{gallery:u,onClick:function(e){e.preventDefault(),"IMG"===e.target.nodeName&&F(e.target.dataset.image)}}),a&&Object(m.jsx)(k,{}),u.length>0&&Object(m.jsx)(w,{onClick:function(){f(_+1)}}),I&&Object(m.jsx)(E,{onClose:function(){F("")},children:Object(m.jsx)("img",{src:I,alt:"modal"})}),Object(m.jsx)(i.a,{autoClose:1e3})]})};o.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(B,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.0f0a3220.chunk.js.map