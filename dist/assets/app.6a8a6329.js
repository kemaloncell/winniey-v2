var N=Object.defineProperty,L=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var S=(t,e,n)=>e in t?N(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,I=(t,e)=>{for(var n in e||(e={}))x.call(e,n)&&S(t,n,e[n]);if(R)for(var n of R(e))j.call(e,n)&&S(t,n,e[n]);return t},w=(t,e)=>L(t,P(e));import{c as U,N as D,i as W,d as B,r as h,a as g,A as z,b as $,e as H,o as _,f as d,g as u,h as E,u as Y,j as M,k as f,t as F,l as K,m as T,n as J,p as G,q as Z,V as Q}from"./vendor.e2bcb249.js";const X=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};X();var ee={button:{about:t=>{const{normalize:e}=t;return e(["\xDCber"])},back:t=>{const{normalize:e}=t;return e(["Zur\xFCck"])},go:t=>{const{normalize:e}=t;return e(["Los"])},home:t=>{const{normalize:e}=t;return e(["Startseite"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Dunkelmodus umschalten"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Sprachen \xE4ndern"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Vite Startvorlage mit Vorlieben"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demo einer dynamischen Route"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["Hi, ",n(r("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Auch bekannt als"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Wie hei\xDFt du?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Nicht gefunden"])}},te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ee}),ne={button:{about:t=>{const{normalize:e}=t;return e(["About"])},back:t=>{const{normalize:e}=t;return e(["Back"])},go:t=>{const{normalize:e}=t;return e(["GO"])},home:t=>{const{normalize:e}=t;return e(["Home"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Toggle dark mode"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Change languages"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Opinionated Vite Starter Template"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demo of dynamic route"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["Hi, ",n(r("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Also known as"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["What's your name?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Not found"])}},re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ne}),ae={button:{about:t=>{const{normalize:e}=t;return e(["Acerca de"])},back:t=>{const{normalize:e}=t;return e(["Atr\xE1s"])},go:t=>{const{normalize:e}=t;return e(["Ir"])},home:t=>{const{normalize:e}=t;return e(["Inicio"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Alternar modo oscuro"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Cambiar idiomas"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Plantilla de Inicio de Vite Dogm\xE1tica"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demo de ruta din\xE1mica"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["\xA1Hola, ",n(r("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Tambi\xE9n conocido como"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["\xBFC\xF3mo te llamas?"])}},"not-found":t=>{const{normalize:e}=t;return e(["No se ha encontrado"])}},oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ae}),ie={button:{about:t=>{const{normalize:e}=t;return e(["\xC0 propos de"])},back:t=>{const{normalize:e}=t;return e(["Retour"])},go:t=>{const{normalize:e}=t;return e(["Essayer"])},home:t=>{const{normalize:e}=t;return e(["Accueil"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Basculer en mode sombre"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Changer de langue"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Exemple d'application Vite"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["D\xE9mo de route dynamique"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["Salut, ",n(r("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Aussi connu sous le nom de"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Comment t'appelles-tu ?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Page non trouv\xE9e"])}},se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ie}),le={button:{about:t=>{const{normalize:e}=t;return e(["Tentang"])},back:t=>{const{normalize:e}=t;return e(["Kembali"])},go:t=>{const{normalize:e}=t;return e(["Pergi"])},home:t=>{const{normalize:e}=t;return e(["Beranda"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Ubah ke mode gelap"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Ubah bahasa"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Template awal vite"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Contoh rute dinamik"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["Halo, ",n(r("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Juga diketahui sebagai"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Siapa nama anda?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Tidak ditemukan"])}},ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le}),me={button:{about:t=>{const{normalize:e}=t;return e(["Su di me"])},back:t=>{const{normalize:e}=t;return e(["Indietro"])},go:t=>{const{normalize:e}=t;return e(["Vai"])},home:t=>{const{normalize:e}=t;return e(["Home"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Attiva/disattiva modalit\xE0 scura"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Cambia lingua"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Modello per una Applicazione Vite"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demo di rotta dinamica"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["Ciao, ",n(r("name")),"!"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Come ti chiami?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Non trovato"])}},ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:me}),_e={button:{about:t=>{const{normalize:e}=t;return e(["\u3053\u308C\u306F\uFF1F"])},back:t=>{const{normalize:e}=t;return e(["\u623B\u308B"])},go:t=>{const{normalize:e}=t;return e(["\u9032\u3080"])},home:t=>{const{normalize:e}=t;return e(["\u30DB\u30FC\u30E0"])},toggle_dark:t=>{const{normalize:e}=t;return e(["\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9\u5207\u308A\u66FF\u3048"])},toggle_langs:t=>{const{normalize:e}=t;return e(["\u8A00\u8A9E\u5207\u308A\u66FF\u3048"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["\u56FA\u57F7\u3055\u308C\u305F Vite \u30B9\u30BF\u30FC\u30BF\u30FC\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["\u52D5\u7684\u30EB\u30FC\u30C8\u306E\u30C7\u30E2"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["\u3053\u3093\u306B\u3061\u306F\u3001",n(r("name")),"!"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["\u541B\u306E\u540D\u306F\u3002"])}},"not-found":t=>{const{normalize:e}=t;return e(["\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"])}},de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_e}),pe={button:{about:t=>{const{normalize:e}=t;return e(["\uC18C\uAC1C"])},back:t=>{const{normalize:e}=t;return e(["\uB4A4\uB85C\uAC00\uAE30"])},go:t=>{const{normalize:e}=t;return e(["\uC774\uB3D9"])},home:t=>{const{normalize:e}=t;return e(["\uD648"])},toggle_dark:t=>{const{normalize:e}=t;return e(["\uB2E4\uD06C\uBAA8\uB4DC \uD1A0\uAE00"])},toggle_langs:t=>{const{normalize:e}=t;return e(["\uC5B8\uC5B4 \uBCC0\uACBD"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Vite \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["\uB2E4\uC774\uB098\uBBF9 \uB77C\uC6B0\uD2B8 \uB370\uBAA8"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["\uC548\uB155, ",n(r("name")),"!"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["\uC774\uB984\uC774 \uBB50\uC608\uC694?"])}},"not-found":t=>{const{normalize:e}=t;return e(["\uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"])}},ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pe}),ye={button:{about:t=>{const{normalize:e}=t;return e(["O nas"])},back:t=>{const{normalize:e}=t;return e(["Wr\xF3\u0107"])},go:t=>{const{normalize:e}=t;return e(["WEJD\u0179"])},home:t=>{const{normalize:e}=t;return e(["Strona g\u0142\xF3wna"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Ustaw tryb nocny"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Zmie\u0144 j\u0119zyk"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Opiniowany szablon startowy Vite"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demonstracja dynamicznego route"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["Cze\u015B\u0107, ",n(r("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Znany te\u017C jako"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Jak masz na imi\u0119?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Nie znaleziono"])}},ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ye}),fe={button:{about:t=>{const{normalize:e}=t;return e(["Sobre"])},back:t=>{const{normalize:e}=t;return e(["Voltar"])},go:t=>{const{normalize:e}=t;return e(["Ir"])},home:t=>{const{normalize:e}=t;return e(["In\xEDcio"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Alternar modo escuro"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Mudar de idioma"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Modelo Opinativo de Partida de Vite"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demonstra\xE7\xE3o de rota din\xE2mica"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["Ol\xE1, ",n(r("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Tamb\xE9m conhecido como"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Qual \xE9 o seu nome?"])}},"not-found":t=>{const{normalize:e}=t;return e(["N\xE3o encontrado"])}},be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fe}),he={button:{about:t=>{const{normalize:e}=t;return e(["\u041E \u0448\u0430\u0431\u043B\u043E\u043D\u0435"])},back:t=>{const{normalize:e}=t;return e(["\u041D\u0430\u0437\u0430\u0434"])},go:t=>{const{normalize:e}=t;return e(["\u041F\u0435\u0440\u0435\u0439\u0442\u0438"])},home:t=>{const{normalize:e}=t;return e(["\u0413\u043B\u0430\u0432\u043D\u0430\u044F"])},toggle_dark:t=>{const{normalize:e}=t;return e(["\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0435\u043C\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C"])},toggle_langs:t=>{const{normalize:e}=t;return e(["\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u044F\u0437\u044B\u043A"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["\u0421\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D Vite"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["\u0414\u0435\u043C\u043E \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["\u041F\u0440\u0438\u0432\u0435\u0442, ",n(r("name")),"!"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["\u041A\u0430\u043A \u0442\u0435\u0431\u044F \u0437\u043E\u0432\u0443\u0442?"])}},"not-found":t=>{const{normalize:e}=t;return e(["\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"])}},Ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:he}),ve={button:{about:t=>{const{normalize:e}=t;return e(["Hakk\u0131mda"])},back:t=>{const{normalize:e}=t;return e(["Geri"])},go:t=>{const{normalize:e}=t;return e(["\u0130LER\u0130"])},home:t=>{const{normalize:e}=t;return e(["Anasayfa"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Karanl\u0131k modu de\u011Fi\u015Ftir"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Dilleri de\u011Fi\u015Ftir"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["G\xF6r\xFC\u015Fl\xFC Vite Ba\u015Flang\u0131\xE7 \u015Eablonu"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Dinamik rota demosu"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["Merhaba, ",n(r("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Ayr\u0131ca \u015F\xF6yle bilinir"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Ad\u0131n\u0131z nedir?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Bulunamad\u0131"])}},Re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ve}),Se={button:{about:t=>{const{normalize:e}=t;return e(["V\u1EC1"])},back:t=>{const{normalize:e}=t;return e(["Quay l\u1EA1i"])},go:t=>{const{normalize:e}=t;return e(["\u0110i"])},home:t=>{const{normalize:e}=t;return e(["Kh\u1EDFi \u0111\u1EA7u"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Chuy\u1EC3n \u0111\u1ED5i ch\u1EBF \u0111\u1ED9 t\u1ED1i"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Thay \u0111\u1ED5i ng\xF4n ng\u1EEF"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["\xDD ki\u1EBFn c\xE1 nh\xE2n Vite Template \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["B\u1EA3n gi\u1EDBi thi\u1EC7u v\u1EC1 dynamic route"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["Hi, ",n(r("name")),"!"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["T\xEAn b\u1EA1n l\xE0 g\xEC?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Kh\xF4ng t\xECm th\u1EA5y"])}},Ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Se}),we={button:{about:t=>{const{normalize:e}=t;return e(["\u5173\u4E8E"])},back:t=>{const{normalize:e}=t;return e(["\u8FD4\u56DE"])},go:t=>{const{normalize:e}=t;return e(["\u786E\u5B9A"])},home:t=>{const{normalize:e}=t;return e(["\u9996\u9875"])},toggle_dark:t=>{const{normalize:e}=t;return e(["\u5207\u6362\u6DF1\u8272\u6A21\u5F0F"])},toggle_langs:t=>{const{normalize:e}=t;return e(["\u5207\u6362\u8BED\u8A00"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["\u56FA\u6267\u5DF1\u89C1\u7684 Vite \u9879\u76EE\u6A21\u677F"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["\u52A8\u6001\u8DEF\u7531\u6F14\u793A"])},hi:t=>{const{normalize:e,interpolate:n,named:r}=t;return e(["\u4F60\u597D\uFF0C",n(r("name"))])},aka:t=>{const{normalize:e}=t;return e(["\u4E5F\u53EB"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["\u8F93\u5165\u4F60\u7684\u540D\u5B57"])}},"not-found":t=>{const{normalize:e}=t;return e(["\u672A\u627E\u5230\u9875\u9762"])}},De=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:we});const Me=Object.fromEntries(Object.entries({"../../locales/de.yml":te,"../../locales/en.yml":re,"../../locales/es.yml":oe,"../../locales/fr.yml":se,"../../locales/id.yml":ue,"../../locales/it.yml":ce,"../../locales/ja.yml":de,"../../locales/ko.yml":ze,"../../locales/pl.yml":ge,"../../locales/pt-BR.yml":be,"../../locales/ru.yml":Ae,"../../locales/tr.yml":Re,"../../locales/vi.yml":Ie,"../../locales/zh-CN.yml":De}).map(([t,e])=>{const n=t.endsWith(".yaml");return[t.slice(14,n?-5:-4),e.default]})),ke=({app:t})=>{const e=U({legacy:!1,locale:"en",messages:Me});t.use(e)};var Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:ke});const Te=({isClient:t,router:e})=>{t&&(e.beforeEach(()=>{D.start()}),e.afterEach(()=>{D.done()}))};var Oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:Te});const qe={models:{Menu:{name:"Menu",fields:{id:{name:"id",isArray:!1,type:"ID",isRequired:!0,attributes:[]},name:{name:"name",isArray:!1,type:"String",isRequired:!1,attributes:[]},businessID:{name:"businessID",isArray:!1,type:"ID",isRequired:!0,attributes:[]},MenuCategories:{name:"MenuCategories",isArray:!0,type:{model:"MenuCategory"},isRequired:!1,attributes:[],isArrayNullable:!0,association:{connectionType:"HAS_MANY",associatedWith:"menuID"}},images:{name:"images",isArray:!0,type:"AWSJSON",isRequired:!1,attributes:[],isArrayNullable:!0},notifications:{name:"notifications",isArray:!0,type:"AWSJSON",isRequired:!1,attributes:[],isArrayNullable:!0},isDefault:{name:"isDefault",isArray:!1,type:"Boolean",isRequired:!1,attributes:[]},createdAt:{name:"createdAt",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[],isReadOnly:!0},updatedAt:{name:"updatedAt",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[],isReadOnly:!0}},syncable:!0,pluralName:"Menus",attributes:[{type:"model",properties:{}},{type:"key",properties:{name:"byBusiness",fields:["businessID"]}},{type:"auth",properties:{rules:[{allow:"public",operations:["create","update","delete","read"]}]}}]},MenuCategory:{name:"MenuCategory",fields:{id:{name:"id",isArray:!1,type:"ID",isRequired:!0,attributes:[]},MenuItems:{name:"MenuItems",isArray:!0,type:{model:"MenuItem"},isRequired:!1,attributes:[],isArrayNullable:!0,association:{connectionType:"HAS_MANY",associatedWith:"menucategoryID"}},name:{name:"name",isArray:!1,type:"String",isRequired:!1,attributes:[]},menuID:{name:"menuID",isArray:!1,type:"ID",isRequired:!0,attributes:[]},createdAt:{name:"createdAt",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[],isReadOnly:!0},updatedAt:{name:"updatedAt",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[],isReadOnly:!0}},syncable:!0,pluralName:"MenuCategories",attributes:[{type:"model",properties:{}},{type:"key",properties:{name:"byMenu",fields:["menuID"]}},{type:"auth",properties:{rules:[{allow:"public",operations:["create","update","delete","read"]}]}}]},MenuItem:{name:"MenuItem",fields:{id:{name:"id",isArray:!1,type:"ID",isRequired:!0,attributes:[]},menucategoryID:{name:"menucategoryID",isArray:!1,type:"ID",isRequired:!1,attributes:[]},name:{name:"name",isArray:!1,type:"String",isRequired:!1,attributes:[]},description:{name:"description",isArray:!1,type:"String",isRequired:!1,attributes:[]},price:{name:"price",isArray:!1,type:"Float",isRequired:!1,attributes:[]},rating:{name:"rating",isArray:!1,type:"Float",isRequired:!1,attributes:[]},MenuItemReviews:{name:"MenuItemReviews",isArray:!0,type:{model:"MenuItemReview"},isRequired:!1,attributes:[],isArrayNullable:!0,association:{connectionType:"HAS_MANY",associatedWith:"menuitemID"}},currency:{name:"currency",isArray:!1,type:{enum:"Currency"},isRequired:!1,attributes:[]},image:{name:"image",isArray:!1,type:"String",isRequired:!1,attributes:[]},createdAt:{name:"createdAt",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[],isReadOnly:!0},updatedAt:{name:"updatedAt",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[],isReadOnly:!0}},syncable:!0,pluralName:"MenuItems",attributes:[{type:"model",properties:{}},{type:"key",properties:{name:"byMenuCategory",fields:["menucategoryID"]}},{type:"auth",properties:{rules:[{allow:"public",operations:["create","update","delete","read"]}]}}]},MenuItemReview:{name:"MenuItemReview",fields:{id:{name:"id",isArray:!1,type:"ID",isRequired:!0,attributes:[]},userID:{name:"userID",isArray:!1,type:"ID",isRequired:!0,attributes:[]},content:{name:"content",isArray:!1,type:"String",isRequired:!1,attributes:[]},rating:{name:"rating",isArray:!1,type:{enum:"MenuItemRating"},isRequired:!1,attributes:[]},createdAt:{name:"createdAt",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[]},menuitemID:{name:"menuitemID",isArray:!1,type:"ID",isRequired:!1,attributes:[]},updatedAt:{name:"updatedAt",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[],isReadOnly:!0}},syncable:!0,pluralName:"MenuItemReviews",attributes:[{type:"model",properties:{}},{type:"key",properties:{name:"byUser",fields:["userID"]}},{type:"key",properties:{name:"byMenuItem",fields:["menuitemID"]}},{type:"auth",properties:{rules:[{allow:"public",operations:["create","update","delete","read"]}]}}]},User:{name:"User",fields:{id:{name:"id",isArray:!1,type:"ID",isRequired:!0,attributes:[]},fullName:{name:"fullName",isArray:!1,type:"String",isRequired:!1,attributes:[]},profilePicture:{name:"profilePicture",isArray:!1,type:"String",isRequired:!1,attributes:[]},MenuItemReviews:{name:"MenuItemReviews",isArray:!0,type:{model:"MenuItemReview"},isRequired:!1,attributes:[],isArrayNullable:!0,association:{connectionType:"HAS_MANY",associatedWith:"userID"}},description:{name:"description",isArray:!1,type:"String",isRequired:!1,attributes:[]},owner:{name:"owner",isArray:!1,type:"String",isRequired:!1,attributes:[]},createdAt:{name:"createdAt",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[],isReadOnly:!0},updatedAt:{name:"updatedAt",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[],isReadOnly:!0}},syncable:!0,pluralName:"Users",attributes:[{type:"model",properties:{}},{type:"auth",properties:{rules:[{allow:"public",operations:["create","update","delete","read"]}]}}]},Business:{name:"Business",fields:{id:{name:"id",isArray:!1,type:"ID",isRequired:!0,attributes:[]},username:{name:"username",isArray:!1,type:"String",isRequired:!1,attributes:[]},address:{name:"address",isArray:!1,type:"String",isRequired:!1,attributes:[]},phone:{name:"phone",isArray:!1,type:"String",isRequired:!1,attributes:[]},description:{name:"description",isArray:!1,type:"String",isRequired:!1,attributes:[]},Menus:{name:"Menus",isArray:!0,type:{model:"Menu"},isRequired:!1,attributes:[],isArrayNullable:!0,association:{connectionType:"HAS_MANY",associatedWith:"businessID"}},additional:{name:"additional",isArray:!0,type:"AWSJSON",isRequired:!1,attributes:[],isArrayNullable:!0},name:{name:"name",isArray:!1,type:"String",isRequired:!1,attributes:[]},owner:{name:"owner",isArray:!1,type:"String",isRequired:!1,attributes:[]},wifi:{name:"wifi",isArray:!1,type:"String",isRequired:!1,attributes:[]},logo:{name:"logo",isArray:!1,type:"String",isRequired:!1,attributes:[]},createdAt:{name:"createdAt",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[],isReadOnly:!0},updatedAt:{name:"updatedAt",isArray:!1,type:"AWSDateTime",isRequired:!1,attributes:[],isReadOnly:!0}},syncable:!0,pluralName:"Businesses",attributes:[{type:"model",properties:{}},{type:"auth",properties:{rules:[{allow:"public",operations:["create","update","delete","read"]}]}}]}},enums:{Currency:{name:"Currency",values:["USD","EUR","TRY","ROUBLE"]},MenuItemRating:{name:"MenuItemRating",values:["NA","VERY_DISSATISFIED","DISSATISFIED","SATISFIED","VERY_SATISFIED"]}},nonModels:{},version:"bb30ffc731d05e5beb37effcec809c07"},{Menu:Rt,MenuCategory:St,MenuItem:It,MenuItemReview:wt,User:Dt,Business:Ce}=W(qe),O=B("auth",()=>{const t=h({}),e=h({}),n=g(()=>t.value),r=g(()=>e.value),a=g(()=>{var l;return(l=t.value)==null?void 0:l.username}),i=g(()=>{var l,m,c,v;return(v=(c=(m=(l=t.value)==null?void 0:l.signInUserSession)==null?void 0:m.idToken)==null?void 0:c.payload["cognito:groups"])==null?void 0:v.find(V=>V==="business")});async function s(){const l=await $.query(Ce,m=>{var c;return m.owner("eq",(c=t.value)==null?void 0:c.username)});e.value=l[0]||{}}async function p(){try{t.value=await z.currentAuthenticatedUser(),t.value&&await s()}catch{}}async function y(l,m){try{return t.value=await z.signUp({username:l,password:m,attributes:{email:l}}),!0}catch{}}async function b(l,m){try{return await z.confirmSignUp(l,m),!0}catch{}}async function q(l,m){try{return await z.signIn(l,m),await p(),!0}catch(c){if(c.name==="UserNotConfirmedException")return"UserNotConfirmedException"}}async function C(){try{await z.signOut(),t.value={}}catch{}}return{setCurrentUser:p,signUp:y,confirmEmail:b,login:q,logout:C,currentUser:n,isAuthenticated:a,isBusiness:i,currentBusiness:r}}),Ve=async({isClient:t,initialState:e,app:n})=>{const r=H();n.use(r),t?r.state.value=e.pinia||{}:e.pinia=r.state.value,await O().setCurrentUser()};var Ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:Ve});const Le="modulepreload",k={},Pe="/",o=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${Pe}${r}`,r in k)return;k[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":Le,a||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),a)return new Promise((p,y)=>{s.addEventListener("load",p),s.addEventListener("error",y)})})).then(()=>e())},xe=({isClient:t,router:e})=>{!t||e.isReady().then(async()=>{const{registerSW:n}=await o(()=>import("./virtual_pwa-register.3e08f338.js"),[]);n({immediate:!0})})};var je=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:xe}),A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n};const Ue={};function We(t,e){return" selam "}var Be=A(Ue,[["render",We]]);const $e=[{name:"README",path:"/readme",component:()=>o(()=>import("./README.665c40e3.js"),["assets/README.665c40e3.js","assets/vendor.e2bcb249.js"]),props:!0},{name:"about",path:"/about",component:()=>o(()=>import("./about.0277c8b3.js"),["assets/about.0277c8b3.js","assets/vendor.e2bcb249.js"]),props:!0},{name:"index",path:"/",component:Be,props:!0},{name:"businessUsername",path:"/:businessUsername",component:()=>o(()=>import("./index.c68f9d9a.js"),["assets/index.c68f9d9a.js","assets/vendor.e2bcb249.js"]),props:!0,meta:{layout:"default"}},{name:"admin",path:"/admin",component:()=>o(()=>import("./index.8f6b6048.js"),["assets/index.8f6b6048.js","assets/vendor.e2bcb249.js"]),props:!0,meta:{layout:"admin"}},{name:"login",path:"/login",component:()=>o(()=>import("./index.1ecf4154.js"),["assets/index.1ecf4154.js","assets/AuthConfirmation.75c2e067.js","assets/vendor.e2bcb249.js"]),props:!0,meta:{layout:"auth"}},{name:"register",path:"/register",component:()=>o(()=>import("./index.40ef1434.js"),["assets/index.40ef1434.js","assets/AuthConfirmation.75c2e067.js","assets/vendor.e2bcb249.js"]),props:!0,meta:{layout:"auth"}},{name:"businessUsername-menu",path:"/:businessUsername/menu",component:()=>o(()=>import("./index.662d9b1b.js"),["assets/index.662d9b1b.js","assets/index.91c10e31.css","assets/MenuCategory.6029289c.js","assets/vendor.e2bcb249.js"]),props:!0},{name:"admin-barcode",path:"/admin/barcode",component:()=>o(()=>import("./index.763159a4.js"),["assets/index.763159a4.js","assets/vendor.e2bcb249.js"]),props:!0,meta:{layout:"admin"}},{name:"admin-menu",path:"/admin/menu",component:()=>o(()=>import("./index.f3f95360.js"),["assets/index.f3f95360.js","assets/MenuCategory.6029289c.js","assets/vendor.e2bcb249.js","assets/MenuDropdown.c4187717.js","assets/GlobalModal.555b36e7.js","assets/AddMenu.f268a451.js","assets/MenuSettings.bf98d1fc.js","assets/AddCategoryModal.21ac2bbf.js","assets/EditModal.bb84358f.js","assets/DeleteModal.5d7ade82.js","assets/ChildAddModal.a500cd41.js","assets/ChildEditModal.2e0eca8c.js","assets/ChildDeleteModal.a5175fcc.js"]),props:!0,meta:{layout:"admin"}},{name:"admin-menu-components-AddCategoryModal",path:"/admin/menu/components/addcategorymodal",component:()=>o(()=>import("./AddCategoryModal.21ac2bbf.js"),["assets/AddCategoryModal.21ac2bbf.js","assets/GlobalModal.555b36e7.js","assets/vendor.e2bcb249.js"]),props:!0},{name:"admin-menu-components-ChildAddModal",path:"/admin/menu/components/childaddmodal",component:()=>o(()=>import("./ChildAddModal.a500cd41.js"),["assets/ChildAddModal.a500cd41.js","assets/GlobalModal.555b36e7.js","assets/vendor.e2bcb249.js"]),props:!0},{name:"admin-menu-components-ChildDeleteModal",path:"/admin/menu/components/childdeletemodal",component:()=>o(()=>import("./ChildDeleteModal.a5175fcc.js"),["assets/ChildDeleteModal.a5175fcc.js","assets/GlobalModal.555b36e7.js","assets/vendor.e2bcb249.js"]),props:!0},{name:"admin-menu-components-ChildEditModal",path:"/admin/menu/components/childeditmodal",component:()=>o(()=>import("./ChildEditModal.2e0eca8c.js"),["assets/ChildEditModal.2e0eca8c.js","assets/GlobalModal.555b36e7.js","assets/vendor.e2bcb249.js"]),props:!0},{name:"admin-menu-components-DeleteModal",path:"/admin/menu/components/deletemodal",component:()=>o(()=>import("./DeleteModal.5d7ade82.js"),["assets/DeleteModal.5d7ade82.js","assets/GlobalModal.555b36e7.js","assets/vendor.e2bcb249.js"]),props:!0},{name:"admin-menu-components-EditModal",path:"/admin/menu/components/editmodal",component:()=>o(()=>import("./EditModal.bb84358f.js"),["assets/EditModal.bb84358f.js","assets/GlobalModal.555b36e7.js","assets/vendor.e2bcb249.js"]),props:!0},{name:"admin-menu-components-MenuDropdown",path:"/admin/menu/components/menudropdown",component:()=>o(()=>import("./MenuDropdown.c4187717.js").then(function(t){return t.M}),["assets/MenuDropdown.c4187717.js","assets/GlobalModal.555b36e7.js","assets/vendor.e2bcb249.js","assets/AddMenu.f268a451.js","assets/MenuSettings.bf98d1fc.js"]),props:!0},{name:"admin-menu-modals-AddMenu",path:"/admin/menu/modals/addmenu",component:()=>o(()=>import("./AddMenu.f268a451.js"),["assets/AddMenu.f268a451.js","assets/GlobalModal.555b36e7.js","assets/vendor.e2bcb249.js"]),props:!0},{name:"admin-menu-modals-MenuSettings",path:"/admin/menu/modals/menusettings",component:()=>o(()=>import("./MenuSettings.bf98d1fc.js"),["assets/MenuSettings.bf98d1fc.js","assets/GlobalModal.555b36e7.js","assets/vendor.e2bcb249.js"]),props:!0}],He={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},Ye=u("path",{d:"M23.93 21L30 15l-6.07-6l-1.43 1.41L27.14 15l-4.64 4.59L23.93 21z",fill:"currentColor"},null,-1),Fe=u("path",{d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z",fill:"currentColor"},null,-1),Ke=u("path",{d:"M22 30h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z",fill:"currentColor"},null,-1),Je=[Ye,Fe,Ke];function Ge(t,e){return _(),d("svg",He,Je)}var Ze={name:"carbon-study-next",render:Ge};const Qe={class:"btn btn-circle p-3"},Xe={key:0,class:"menu p-4 shadow-lg bg-base-200 rounded-box absolute right-0 mt-15 z-10"},et=u("a",null," \xC7\u0131k\u0131\u015F Yap ",-1),tt=[et],nt=u("a",{class:"btn btn-ghost btn-sm rounded-btn"}," Giri\u015F Yap ",-1),rt=[nt],at=E({setup(t){const e=O(),n=Y(),r=h(!1),a=()=>{r.value=!r.value},i=()=>{e.logout()},s=()=>{n.push("/login")};return(p,y)=>{const b=Ze;return _(),d("div",null,[M(e).isAuthenticated?(_(),d("div",{key:0,class:"avatar cursor-pointer",onClick:a},[u("div",Qe,[f(b,{class:"inline-block"})]),r.value?(_(),d("ul",Xe,[u("li",null,[u("a",null,F(M(e).currentUser.attributes.email),1)]),u("li",{onClick:i},tt)])):K("",!0)])):(_(),d("div",{key:1,class:"flex items-stretch",onClick:s},rt))])}}}),ot={},it={class:"navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"},st=u("div",{class:"px-2 mx-2 navbar-start"},[u("span",{class:"text-lg font-bold"},"Winniey")],-1),lt={class:"navbar-end"};function ut(t,e){const n=at;return _(),d("div",it,[st,u("div",lt,[f(n)])])}var mt=A(ot,[["render",ut]]);const ct={},_t={class:"flex justify-center"},dt={class:"flex-1 max-w-7xl mx-2 md:mx-0"};function pt(t,e){const n=mt,r=T("router-view");return _(),d("div",null,[f(n),u("div",_t,[u("div",dt,[f(r)])])])}var zt=A(ct,[["render",pt]]);const yt={"404":()=>o(()=>import("./404.72bf84a0.js"),["assets/404.72bf84a0.js","assets/vendor.e2bcb249.js"]),admin:()=>o(()=>import("./admin.8f748719.js"),["assets/admin.8f748719.js","assets/vendor.e2bcb249.js"]),auth:()=>o(()=>import("./auth.0100a936.js"),["assets/auth.0100a936.js","assets/vendor.e2bcb249.js"]),default:zt};function gt(t){return t.map(e=>{var n;return{path:e.path,component:yt[((n=e.meta)==null?void 0:n.layout)||"default"],children:[w(I({},e),{path:""})]}})}const ft=E({setup(t){return J({title:"Vitesse",meta:[{name:"description",content:"Opinionated Vite Starter Template"}]}),(e,n)=>{const r=T("router-view");return _(),G(r)}}}),bt={aws_project_region:"us-east-1",aws_cognito_identity_pool_id:"us-east-1:5268e5f4-ee04-44c6-85b8-045d62c2bdec",aws_cognito_region:"us-east-1",aws_user_pools_id:"us-east-1_Yv5WmZ6YI",aws_user_pools_web_client_id:"d59upbdod77om5rku00g4vkcj",oauth:{},aws_cognito_username_attributes:["EMAIL"],aws_cognito_social_providers:[],aws_cognito_signup_attributes:["EMAIL"],aws_cognito_mfa_configuration:"OFF",aws_cognito_mfa_types:["SMS"],aws_cognito_password_protection_settings:{passwordPolicyMinLength:8,passwordPolicyCharacters:["REQUIRES_NUMBERS"]},aws_cognito_verification_mechanisms:["EMAIL"],aws_appsync_graphqlEndpoint:"https://7yvritbtvbccpivrtb4pja5zwa.appsync-api.us-east-1.amazonaws.com/graphql",aws_appsync_region:"us-east-1",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-syfiwdvko5ah5mgzajs7xwn3qy",aws_user_files_s3_bucket:"winniey-storage-d2iie9fdmnebxs125556-staging",aws_user_files_s3_bucket_region:"us-east-1"};const ht=gt($e);Z.configure(bt);Q(ft,{routes:ht,base:"/"},t=>{Object.values({"./modules/i18n.ts":Ee,"./modules/nprogress.ts":Oe,"./modules/pinia.ts":Ne,"./modules/pwa.ts":je}).forEach(e=>{var n;return(n=e.install)==null?void 0:n.call(e,t)})});export{Ce as B,Rt as M,A as _,St as a,It as b,at as c,O as u};
