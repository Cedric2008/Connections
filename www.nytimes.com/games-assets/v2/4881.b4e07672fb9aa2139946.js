!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ea6ce460-12de-4d52-a0d0-05ccbe87e8d4",e._sentryDebugIdIdentifier="sentry-dbid-ea6ce460-12de-4d52-a0d0-05ccbe87e8d4")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"8af3776a86627a2cf5c1fe045b836037564cbfb3"},(self.webpackChunk_xwords_phoenix=self.webpackChunk_xwords_phoenix||[]).push([[4881],{3064:function(e,t,n){n.d(t,{U:function(){return c}});var o=n(5489),a=n(6128);const i=window.location.origin,r=(0,a.f0)({redirect_uri:encodeURIComponent(i+window.location.pathname),response_type:"cookie",client_id:"games",application:"crosswords"}),l="".concat(o.OB.account,"/auth/enter-email?").concat(r),c=function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,n=arguments.length>1?arguments[1]:void 0;const i=(null==t||null===(e=t.navigationLinks)||void 0===e?void 0:e.login)||"";return(0,a.I3)(i)?i:n?(0,o.T0)(l,n):l}},6697:function(e,t,n){var o=n(9526),a=n(4403),i=n.n(a),r=n(9861),l=n(8116);t.Z=e=>{let{text:t="Play",type:n="primary",disabled:a=!1,className:c,onClick:s,isEmphasizedNew:d=!1,iconLeft:u,iconRight:m}=e;return o.createElement("button",{type:"button",className:i()("button-".concat(n),c,{disabled:a}),disabled:a,onClick:e=>{"function"==typeof s&&s(e)}},u&&o.createElement(r.Z,{icon:u}),d&&o.createElement(l.Z,{text:"new",position:"top-right-outside"}),t,m&&o.createElement(r.Z,{icon:m,className:"pz-icon-right"}))}},2466:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(9526),a=n(3961),i=n(4658),r=n(5489);function l(e){let{children:t,isHidden:n}=e;const l=(0,o.useRef)(document.getElementById(r.Mk)),c=(0,o.useRef)(document.getElementById("portal-game-toolbar")),s=o.useRef(document.getElementById(r.xD));o.useEffect((()=>{var e,t;i.tq&&(n?null===(e=s.current)||void 0===e||e.classList.remove(r.ec):null===(t=s.current)||void 0===t||t.classList.add(r.ec))}),[n]);const d=i.tq?l.current:c.current;return d?(0,a.createPortal)(t,d):o.createElement(o.Fragment,null,t)}},4458:function(e,t,n){n.d(t,{O1:function(){return s},pG:function(){return c},qW:function(){return d}});var o=n(9526),a=n(7256);const i=["activationRegiModal","activationRegiModalControl","loginOffer","letterboxedWelcome","gamesSaleCTA","authFlowConnections","sbLifetimeStats","sbLifetimeStatsPlusTooltip","wordleArchive","connectionsAttempts"],r={activationRegiModal:{testName:"ON_wordle_regi_modal",activeVariant:"1_regi_modal"},activationRegiModalControl:{testName:"ON_wordle_regi_modal",activeVariant:"0_control"},loginOffer:{testName:"ON_wordleOnboardingOffer_0822",activeVariant:"1_ShowOffer"},letterboxedWelcome:{testName:"GAMES_letter_boxed_welcome_0328",activeVariant:"1_NewLetterBoxedWelcome"},gamesSaleCTA:{testName:"MWD_phoenix_games_sale_cta",activeVariant:"1_Show"},authFlowConnections:{testName:"GAMES_connections_auth_web_1016",activeVariant:"1_Auth_Flow"},sbLifetimeStats:{testName:"GAMES_SBLifetimeStats_1123",activeVariant:"1_LifetimeStats"},sbLifetimeStatsPlusTooltip:{testName:"GAMES_SBLifetimeStats_1123",activeVariant:"2_LifetimeStatsPlusTooltip"},wordleArchive:{testName:"GAMES_wordleArchive_0124",activeVariant:"1_Archive"},connectionsAttempts:{testName:"GAMES_ConnectionsAttempts_0324",activeVariant:"1_Attempts"}},l=e=>i.reduce(((t,n)=>{if(e){const{testName:o,activeVariant:a}=r[n];t[n]=e(o)===a}else t[n]=!1;return t}),{}),c=o.createContext(l()),s=e=>{let{children:t}=e;const{getVariant:n}=(0,a.Z)(),r=l(n),[s,d]=o.useState(r);return o.useEffect((()=>{var e,t;e=r,t=s,i.some((n=>e[n]!==t[n]))&&d(r)}),[r]),o.createElement(c.Provider,{value:s},t)},d=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=(0,a.Z)(),{testName:i}=r[e],l=!!n.getVariant(i);o.useEffect((()=>{l&&t&&n.reportExposure(i)}),[l,t])}},3649:function(e,t,n){n.d(t,{Mk:function(){return d},ec:function(){return u},ku:function(){return c},xD:function(){return s}});var o=n(7226),a=n(2042),i=n(431),r=n(1586),l=n(2714);const c=()=>{(()=>{const e=[...document.querySelectorAll(".js-nav-tracker")],t=(0,i.rI)((0,a.iU)("nav-profile")),n=[...e,...t?[...t.querySelectorAll("a")]:[]],o=(0,a.j0)();n.forEach((e=>{var t;const n=(null==e||null===(t=e.dataset)||void 0===t?void 0:t.trackLabel)||"";n&&e.addEventListener("click",(()=>{(0,r.ob)({name:o,label:n,useBeacon:!0,context:null})}))}))})(),(()=>{const e=[...document.querySelectorAll(".js-sale-nav-tracker")],t=(0,a.j0)();e.forEach((e=>{var n;const o=(null==e||null===(n=e.dataset)||void 0===n?void 0:n.trackLabel)||"";o&&e.addEventListener("click",(()=>{(0,r.j)("moduleInteraction",{module:{label:o,element:{name:t,label:e.innerText,url:"https://www.nytimes.com/subscription/games?campaignId=4QHQ8"}}})}))}))})(),(()=>{const e=(0,i.rI)((0,a.iU)("hybrid-back"));e&&window.isHybridWebView&&window.NativeBridge&&(0,i.Oo)(e,"click",(()=>{var e;"sudoku"!==(0,a.j0)()&&(null===(e=window.NativeBridge)||void 0===e||e.gamesBackToHub())}))})(),(()=>{if(window.isHybridWebView&&window.NativeBridge){const e=document.querySelectorAll(".".concat((0,a.iU)("nav-login"))),t=document.querySelectorAll(".".concat((0,a.iU)("nav-logout"))),n=document.querySelectorAll(".".concat((0,a.iU)("nav-subscribe"))),o=document.querySelectorAll(".".concat((0,a.iU)("nav-account-details"))),r=e=>e.forEach((e=>{(0,i.cn)(e,"hybrid-hidden")})),l=a=>{const i=null==a?void 0:a.isUserLoggedIn,l=null==a?void 0:a.isSubscribed;i?r(e):(r(t),r(o)),l&&r(n)};window.NativeBridge.gamesGetUserDetails().then((e=>{if(!e.success)throw new Error(e.error);l(e.values.gamesGetUserDetails)})).catch((e=>{console.error("Getting user details failed",e),r(t),r(o)})),(0,i.Oo)(window,"gamesUserCredentialChanged",(e=>{var t;l(null==e||null===(t=e.detail)||void 0===t||null===(t=t.values)||void 0===t?void 0:t.gamesAuthenticateUser)}));const c=(e,t)=>{e.forEach((e=>{(0,i.Oo)(e,"click",(e=>{var n;e.preventDefault(),null===(n=window.NativeBridge)||void 0===n||n.gamesAuthenticateUser(t).then((e=>{if(!e.success)throw new Error(e.error);window.dispatchEvent(new CustomEvent("gamesUserCredentialChanged",{detail:e}))}))}))}))};c(n,"subscribe"),c(e,"login")}})(),(()=>{var e;const t=[...document.querySelectorAll(".top-sale-banner")],n=null===(e=document.querySelector(".top-sale-banner__urgency"))||void 0===e?void 0:e.innerHTML,o="".concat(null!=n?n:"","50% off your first year of Games."),i=(0,a.j0)();t.length>0&&(0,r.j)("impression",{module:{name:"games-sale-banner",region:i,label:o},eventData:{page_type:"games-sale-banner"}}),t.forEach((e=>{e.addEventListener("click",(()=>{(0,r.j)("moduleInteraction",{module:{region:"",label:o,element:{name:i,label:"games-sale-banner"}},eventData:{pageType:"games-sale-banner",type:"tap"}})}),!0)}))})(),setTimeout((()=>{[...document.querySelectorAll(".js-hub-tracker")].forEach((e=>{const t=e.dataset.trackHub,n=e.dataset.trackHubContext||null;e.addEventListener("click",(()=>{(0,o.d)(t,n)}),!0)}))}),0);let e=!1,t=-1;const n=(0,i.rI)((0,a.iU)("nav-burger")),c=(0,i.rI)((0,a.iU)("nav-drawer"));if(!n||!c)return;const s=[...c.querySelectorAll(".pz-nav-drawer__link"),...c.querySelectorAll(".pz-nav__button")],d=s.map((e=>{const t=e.textContent;return t&&t[0]?t[0].toUpperCase():""}));function u(){e=!0,n&&c&&((0,i.cn)(c,"open"),(0,i.cn)(n,"active"),(0,r.ob)({name:(0,a.j0)(),label:"click-nav",context:null}),(0,i.P$)(n,"aria-expanded",e.toString()),(0,i.P$)(c,"aria-hidden",(!e).toString()))}function m(){e=!1,n&&c&&((0,i.IV)(c,"open"),(0,i.cn)(c,"closing"),setTimeout((()=>{(0,i.IV)(c,"closing")}),500),(0,i.IV)(n,"active"),(0,i.P$)(n,"aria-expanded",e.toString()),(0,i.P$)(c,"aria-hidden",(!e).toString()))}(0,i.Oo)(n,"click",(()=>{e?m():u(),n.blur()})),(0,i.Oo)(n,"keydown",(n=>{const{key:o,keyCode:a}=n;if("Escape"!==o&&"Esc"!==o){if("Enter"!==o&&"Space"!==o&&32!==a)return"ArrowDown"===o?(n.preventDefault(),u(),t=0,void s[t].focus()):"ArrowUp"===o?(n.preventDefault(),u(),t=s.length-1,void s[t].focus()):void 0;e?m():(u(),t=0,s[t].focus())}else m()})),(0,i.Oo)(c,"keydown",(e=>{const{key:o,keyCode:a,shiftKey:i}=e;if("Escape"===o||"Esc"===o)return m(),void n.focus();if("ArrowDown"===o||"ArrowRight"===o||"Tab"===o&&!i)return e.preventDefault(),t===s.length-1?t=0:t+=1,void s[t].focus();if("ArrowUp"===o||"ArrowLeft"===o||"Tab"===o&&i)return e.preventDefault(),0===t?t=s.length-1:t-=1,void s[t].focus();if(a>=65&&a<=90){const e=d.findIndex(((e,n)=>e===String.fromCharCode(a)&&n!==t));e>=0&&(t=e,s[t].focus())}}));const v=(0,i.rI)((0,a.iU)("logo-nav"));"1_Archive"!==l.F.getVariant("GAMES_wordleArchive_0124")&&(()=>{const e=(0,i.rI)("wordle-archive-nav");e&&(0,i.cn)(e,"hide")})(),v.addEventListener("click",(()=>{const e={eventData:{pagetype:"game",trigger:"module",type:"click"},module:{name:"click",context:"",element:{name:window.location.href,label:"games-logo"}}};(0,r.j)("moduleInteraction",e)}));const f=document.querySelector("#js-nav-actions"),g=null==f?void 0:f.querySelectorAll("a.js-nav-subscribe")[0],b=null==f?void 0:f.querySelectorAll("a.js-nav-login")[0];null==g||g.addEventListener("click",(()=>{const e=(0,a.j0)();(0,r.j)("moduleInteraction",{eventData:{pagetype:"game",trigger:"module",type:"ob_click"},module:{element:{name:e,label:"subscribe-header"}}})})),null==b||b.addEventListener("click",(()=>{const e=(0,a.j0)();(0,r.j)("moduleInteraction",{eventData:{pagetype:"game",trigger:"module",type:"ob_click"},module:{element:{name:e,label:"log-in-header"}}})}))},s=(0,a.iU)("global-nav"),d=(0,a.iU)("mobile-toolbar"),u="show-mobile-toolbar";document.querySelector(".pz-header"),(0,i.rI)(s),(0,i.rI)(d)}}]);
//# sourceMappingURL=4881.b4e07672fb9aa2139946.js.map