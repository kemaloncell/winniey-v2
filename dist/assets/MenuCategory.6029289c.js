import{a as _,o as a,f as c,g as e,j as u,l as m,t as l,G as r,h as f,r as h,C as g,F as v,E as b,p as x,w as y,H as w}from"./vendor.e2bcb249.js";const D={class:"card shadow-lg compact side bg-base-100 my-4"},k={class:"flex-row items-center card-body"},$={class:"flex-1"},C={class:"flex gap-4 items-center"},I={class:"avatar"},B={key:0,class:"rounded-btn w-16 h-16 mask mask-squircle"},j=["src"],O={class:"card-title mb-8"},q={key:0,class:"text-base-content text-opacity-40"},E={class:"flex flex-1 justify-end"},z={class:"flex flex-col items-center gap-4"},F={key:0,class:"card-title badge badge-xs badge-outline p-2 w-20"},N={class:"flex flex-col items-center gap-1 md:flex-row"},S={props:{menuItemData:{type:Object,required:!0}},setup(t){const n=t,s=_(()=>{const{image:o}=n.menuItemData;return o?`https://winniey-storage-d2iie9fdmnebxs125556-staging.s3.amazonaws.com/public/${o}`:!1});return(o,i)=>(a(),c("div",D,[e("div",k,[e("div",$,[e("div",C,[e("div",I,[u(s)?(a(),c("div",B,[e("img",{src:u(s)},null,8,j)])):m("",!0)]),e("div",null,[e("span",O,l(t.menuItemData.name),1),t.menuItemData.description?(a(),c("p",q,l(t.menuItemData.description),1)):m("",!0)]),e("div",E,[e("div",z,[t.menuItemData.price?(a(),c("div",F,l(t.menuItemData.price)+" "+l(t.menuItemData.currency),1)):m("",!0),e("div",N,[r(o.$slots,"actions")])])])])])])]))}},V={class:"absolute right-12 top-4"},A={class:"xs:w-16 sm:w-16 md:w-16 lg:w-64"},G={class:"collapse-content"},T=f({props:{categoryData:{type:Object,required:!0},collapseOpen:{type:Boolean,default:!1}},setup(t){const n=t,s=h(!1);g(()=>{s.value=n.collapseOpen});const o=()=>{s.value=!s.value};return(i,H)=>{const p=S;return a(),c("div",null,[e("div",{tabindex:"0",class:w(["collapse border rounded-box border-base-300 collapse-arrow",s.value?"collapse-open":"collapse-close"])},[e("div",V,[r(i.$slots,"actions")]),e("div",{class:"collapse-title text-xl font-medium pl-4 py-4",onClick:o},[e("div",A,l(n.categoryData.category.name),1)]),e("div",G,[r(i.$slots,"header"),(a(!0),c(v,null,b(n.categoryData.items,d=>(a(),x(p,{key:d.id,"menu-item-data":d},{actions:y(()=>[r(i.$slots,"itemActions",{menuItem:d})]),_:2},1032,["menu-item-data"]))),128))])],2)])}}});export{T as _};
