(()=>{var e={220:(e,n)=>{var t,o,l,r,i,_,a={},u=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,n){for(var t in n)e[t]=n[t];return e}function d(e){var n=e.parentNode;n&&n.removeChild(e)}function f(e,n,t){var o,l,r,i=arguments,_={};for(r in n)"key"==r?o=n[r]:"ref"==r?l=n[r]:_[r]=n[r];if(arguments.length>3)for(t=[t],r=3;r<arguments.length;r++)t.push(i[r]);if(null!=t&&(_.children=t),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===_[r]&&(_[r]=e.defaultProps[r]);return h(e,_,o,l,null)}function h(e,n,o,l,r){var i={type:e,props:n,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++t.__v:r};return null!=t.vnode&&t.vnode(i),i}function p(e){return e.children}function y(e,n){this.props=e,this.context=n}function m(e,n){if(null==n)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?m(e):null}function v(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return v(e)}}function F(e){(!e.__d&&(e.__d=!0)&&l.push(e)&&!b.__r++||i!==t.debounceRendering)&&((i=t.debounceRendering)||r)(b)}function b(){for(var e;b.__r=l.length;)e=l.sort((function(e,n){return e.__v.__b-n.__v.__b})),l=[],e.some((function(e){var n,t,o,l,r,i;e.__d&&(r=(l=(n=e).__v).__e,(i=n.__P)&&(t=[],(o=c({},l)).__v=l.__v+1,k(i,l,o,n.__n,void 0!==i.ownerSVGElement,null!=l.__h?[r]:null,t,null==r?m(l):r,l.__h),N(t,l),l.__e!=r&&v(l)))}))}function g(e,n,t,o,l,r,i,_,s,c){var d,f,y,v,F,b,g,E=o&&o.__k||u,x=E.length;for(t.__k=[],d=0;d<n.length;d++)if(null!=(v=t.__k[d]=null==(v=n[d])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v||"bigint"==typeof v?h(null,v,null,null,v):Array.isArray(v)?h(p,{children:v},null,null,null):v.__b>0?h(v.type,v.props,v.key,null,v.__v):v)){if(v.__=t,v.__b=t.__b+1,null===(y=E[d])||y&&v.key==y.key&&v.type===y.type)E[d]=void 0;else for(f=0;f<x;f++){if((y=E[f])&&v.key==y.key&&v.type===y.type){E[f]=void 0;break}y=null}k(e,v,y=y||a,l,r,i,_,s,c),F=v.__e,(f=v.ref)&&y.ref!=f&&(g||(g=[]),y.ref&&g.push(y.ref,null,v),g.push(f,v.__c||F,v)),null!=F?(null==b&&(b=F),"function"==typeof v.type&&null!=v.__k&&v.__k===y.__k?v.__d=s=A(v,s,e):s=w(e,v,y,E,F,s),c||"option"!==t.type?"function"==typeof t.type&&(t.__d=s):e.value=""):s&&y.__e==s&&s.parentNode!=e&&(s=m(y))}for(t.__e=b,d=x;d--;)null!=E[d]&&("function"==typeof t.type&&null!=E[d].__e&&E[d].__e==t.__d&&(t.__d=m(o,d+1)),C(E[d],E[d]));if(g)for(d=0;d<g.length;d++)P(g[d],g[++d],g[++d])}function A(e,n,t){var o,l;for(o=0;o<e.__k.length;o++)(l=e.__k[o])&&(l.__=e,n="function"==typeof l.type?A(l,n,t):w(t,l,l,e.__k,l.__e,n));return n}function w(e,n,t,o,l,r){var i,_,a;if(void 0!==n.__d)i=n.__d,n.__d=void 0;else if(null==t||l!=r||null==l.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(l),i=null;else{for(_=r,a=0;(_=_.nextSibling)&&a<o.length;a+=2)if(_==l)break e;e.insertBefore(l,r),i=r}return void 0!==i?i:l.nextSibling}function E(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||s.test(n)?t:t+"px"}function x(e,n,t,o,l){var r;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||E(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||E(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])r=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+r]=t,t?o||e.addEventListener(n,r?H:S,r):e.removeEventListener(n,r?H:S,r);else if("dangerouslySetInnerHTML"!==n){if(l)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function S(e){this.l[e.type+!1](t.event?t.event(e):e)}function H(e){this.l[e.type+!0](t.event?t.event(e):e)}function k(e,n,o,l,r,i,_,a,u){var s,d,f,h,m,v,F,b,A,w,E,x=n.type;if(void 0!==n.constructor)return null;null!=o.__h&&(u=o.__h,a=n.__e=o.__e,n.__h=null,i=[a]),(s=t.__b)&&s(n);try{e:if("function"==typeof x){if(b=n.props,A=(s=x.contextType)&&l[s.__c],w=s?A?A.props.value:s.__:l,o.__c?F=(d=n.__c=o.__c).__=d.__E:("prototype"in x&&x.prototype.render?n.__c=d=new x(b,w):(n.__c=d=new y(b,w),d.constructor=x,d.render=T),A&&A.sub(d),d.props=b,d.state||(d.state={}),d.context=w,d.__n=l,f=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=x.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=c({},d.__s)),c(d.__s,x.getDerivedStateFromProps(b,d.__s))),h=d.props,m=d.state,f)null==x.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==x.getDerivedStateFromProps&&b!==h&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(b,w),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(b,d.__s,w)||n.__v===o.__v){d.props=b,d.state=d.__s,n.__v!==o.__v&&(d.__d=!1),d.__v=n,n.__e=o.__e,n.__k=o.__k,n.__k.forEach((function(e){e&&(e.__=n)})),d.__h.length&&_.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(b,d.__s,w),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(h,m,v)}))}d.context=w,d.props=b,d.state=d.__s,(s=t.__r)&&s(n),d.__d=!1,d.__v=n,d.__P=e,s=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(l=c(c({},l),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(v=d.getSnapshotBeforeUpdate(h,m)),E=null!=s&&s.type===p&&null==s.key?s.props.children:s,g(e,Array.isArray(E)?E:[E],n,o,l,r,i,_,a,u),d.base=n.__e,n.__h=null,d.__h.length&&_.push(d),F&&(d.__E=d.__=null),d.__e=!1}else null==i&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=M(o.__e,n,o,l,r,i,_,u);(s=t.diffed)&&s(n)}catch(e){n.__v=null,(u||null!=i)&&(n.__e=a,n.__h=!!u,i[i.indexOf(a)]=null),t.__e(e,n,o)}}function N(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function M(e,n,t,o,l,r,i,_){var s,c,f,h,p=t.props,y=n.props,m=n.type,v=0;if("svg"===m&&(l=!0),null!=r)for(;v<r.length;v++)if((s=r[v])&&(s===e||(m?s.localName==m:3==s.nodeType))){e=s,r[v]=null;break}if(null==e){if(null===m)return document.createTextNode(y);e=l?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,y.is&&y),r=null,_=!1}if(null===m)p===y||_&&e.data===y||(e.data=y);else{if(r=r&&u.slice.call(e.childNodes),c=(p=t.props||a).dangerouslySetInnerHTML,f=y.dangerouslySetInnerHTML,!_){if(null!=r)for(p={},h=0;h<e.attributes.length;h++)p[e.attributes[h].name]=e.attributes[h].value;(f||c)&&(f&&(c&&f.__html==c.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,n,t,o,l){var r;for(r in t)"children"===r||"key"===r||r in n||x(e,r,null,t[r],o);for(r in n)l&&"function"!=typeof n[r]||"children"===r||"key"===r||"value"===r||"checked"===r||t[r]===n[r]||x(e,r,n[r],t[r],o)}(e,y,p,l,_),f)n.__k=[];else if(v=n.props.children,g(e,Array.isArray(v)?v:[v],n,t,o,l&&"foreignObject"!==m,r,i,e.firstChild,_),null!=r)for(v=r.length;v--;)null!=r[v]&&d(r[v]);_||("value"in y&&void 0!==(v=y.value)&&(v!==e.value||"progress"===m&&!v)&&x(e,"value",v,p.value,!1),"checked"in y&&void 0!==(v=y.checked)&&v!==e.checked&&x(e,"checked",v,p.checked,!1))}return e}function P(e,n,o){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,o)}}function C(e,n,o){var l,r,i;if(t.unmount&&t.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||P(l,null,n)),o||"function"==typeof e.type||(o=null!=(r=e.__e)),e.__e=e.__d=void 0,null!=(l=e.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(e){t.__e(e,n)}l.base=l.__P=null}if(l=e.__k)for(i=0;i<l.length;i++)l[i]&&C(l[i],n,o);null!=r&&d(r)}function T(e,n,t){return this.constructor(e,t)}function L(e,n,o){var l,r,i;t.__&&t.__(e,n),r=(l="function"==typeof o)?null:o&&o.__k||n.__k,i=[],k(n,e=(!l&&o||n).__k=f(p,null,[e]),r||a,a,void 0!==n.ownerSVGElement,!l&&o?[o]:r?null:n.firstChild?u.slice.call(n.childNodes):null,i,!l&&o?o:r?r.__e:n.firstChild,l),N(i,e)}t={__e:function(e,n){for(var t,o,l;n=n.__;)if((t=n.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(e)),l=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),l=t.__d),l)return t.__E=t}catch(n){e=n}throw e},__v:0},o=function(e){return null!=e&&void 0===e.constructor},y.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(c({},t),this.props)),e&&c(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),F(this))},y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),F(this))},y.prototype.render=p,l=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,_=0,n.render=L,n.hydrate=function e(n,t){L(n,t,e)},n.createElement=f,n.h=f,n.Fragment=p,n.createRef=function(){return{current:null}},n.isValidElement=o,n.Component=y,n.cloneElement=function(e,n,t){var o,l,r,i=arguments,_=c({},e.props);for(r in n)"key"==r?o=n[r]:"ref"==r?l=n[r]:_[r]=n[r];if(arguments.length>3)for(t=[t],r=3;r<arguments.length;r++)t.push(i[r]);return null!=t&&(_.children=t),h(e.type,_,o||e.key,l||e.ref,null)},n.createContext=function(e,n){var t={__c:n="__cC"+_++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,o;return this.getChildContext||(t=[],(o={})[n]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(F)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t},n.toChildArray=function e(n,t){return t=t||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some((function(n){e(n,t)})):t.push(n)),t},n.options=t},811:(e,n,t)=>{var o,l,r,i=t(220),_=0,a=[],u=i.options.__b,s=i.options.__r,c=i.options.diffed,d=i.options.__c,f=i.options.unmount;function h(e,n){i.options.__h&&i.options.__h(l,e,_||n),_=0;var t=l.__H||(l.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function p(e){return _=1,y(E,e)}function y(e,n,t){var r=h(o++,2);return r.t=e,r.__c||(r.__=[t?t(n):E(void 0,n),function(e){var n=r.t(r.__[0],e);r.__[0]!==n&&(r.__=[n,r.__[1]],r.__c.setState({}))}],r.__c=l),r.__}function m(e,n){var t=h(o++,4);!i.options.__s&&w(t.__H,n)&&(t.__=e,t.__H=n,l.__h.push(t))}function v(e,n){var t=h(o++,7);return w(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function F(){a.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(g),e.__H.__h.forEach(A),e.__H.__h=[]}catch(n){e.__H.__h=[],i.options.__e(n,e.__v)}})),a=[]}i.options.__b=function(e){l=null,u&&u(e)},i.options.__r=function(e){s&&s(e),o=0;var n=(l=e.__c).__H;n&&(n.__h.forEach(g),n.__h.forEach(A),n.__h=[])},i.options.diffed=function(e){c&&c(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==a.push(n)&&r===i.options.requestAnimationFrame||((r=i.options.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(o),b&&cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,100);b&&(n=requestAnimationFrame(t))})(F)),l=void 0},i.options.__c=function(e,n){n.some((function(e){try{e.__h.forEach(g),e.__h=e.__h.filter((function(e){return!e.__||A(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],i.options.__e(t,e.__v)}})),d&&d(e,n)},i.options.unmount=function(e){f&&f(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(g)}catch(e){i.options.__e(e,n.__v)}};var b="function"==typeof requestAnimationFrame;function g(e){var n=l;"function"==typeof e.__c&&e.__c(),l=n}function A(e){var n=l;e.__c=e.__(),l=n}function w(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function E(e,n){return"function"==typeof n?n(e):n}n.useState=p,n.useReducer=y,n.useEffect=function(e,n){var t=h(o++,3);!i.options.__s&&w(t.__H,n)&&(t.__=e,t.__H=n,l.__H.__h.push(t))},n.useLayoutEffect=m,n.useRef=function(e){return _=5,v((function(){return{current:e}}),[])},n.useImperativeHandle=function(e,n,t){_=6,m((function(){"function"==typeof e?e(n()):e&&(e.current=n())}),null==t?t:t.concat(e))},n.useMemo=v,n.useCallback=function(e,n){return _=8,v((function(){return e}),n)},n.useContext=function(e){var n=l.context[e.__c],t=h(o++,9);return t.__c=e,n?(null==t.__&&(t.__=!0,n.sub(l)),n.props.value):e.__},n.useDebugValue=function(e,n){i.options.useDebugValue&&i.options.useDebugValue(n?n(e):e)},n.useErrorBoundary=function(e){var n=h(o++,10),t=p();return n.__=e,l.componentDidCatch||(l.componentDidCatch=function(e){n.__&&n.__(e),t[1](e)}),[t[0],function(){t[1](void 0)}]}},800:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.flexibleExpensesTotal=n.inflexibleExpensesTotal=n.debtPaymentsTotal=n.allowanceTotal=n.inflexibleMonthlyExpenses=n.debtPayments=n.flexibleMonthlyExpenses=n.accounts=n.startingTime=void 0;const o=t(50);n.startingTime=1614908235844,n.accounts={Lilian:{dollarsPerMonth:60,awardSize:.5,awardName:"50¢ 🍭"},Ashley:{dollarsPerMonth:130,awardSize:5,awardName:"$5 💵"},Nathan:{dollarsPerMonth:130,awardSize:5,awardName:"$5 💵"},Food:{dollarsPerMonth:500,awardSize:10,awardName:"$10 🍔"},Social:{dollarsPerMonth:60,awardSize:20,awardName:"$20 🎮"},House:{dollarsPerMonth:260,awardSize:50,awardName:"$50 ⛏️"},Vacation:{dollarsPerMonth:50,awardSize:50,awardName:"$50 ⛽"},Emergency:{dollarsPerMonth:150,awardSize:100,awardName:"$100 🚑"}},n.flexibleMonthlyExpenses={"Expensive House Insurance vs. Minimum":100,"Selling Chevy Cobalt (no more car insurance)":100,Netflix:10,"Youtube Red Family":16,Disney:9,"Amazon Prime":Math.round(80/12)},n.debtPayments={"Mortgage [25y from July 2020]":1060,"Student loans [32k @ 6y 9m from March 2021]":484},n.inflexibleMonthlyExpenses={"House/car insurance":200,"Gas/electricity":350,"Property taxes":250,Water:150,Internet:78.75,Cell:80},n.allowanceTotal=o.objectEntries(n.accounts).reduce(((e,[n,t])=>e+t.dollarsPerMonth),0),n.debtPaymentsTotal=o.objectEntries(n.debtPayments).reduce(((e,[n,t])=>e+t),0),n.inflexibleExpensesTotal=o.objectEntries(n.inflexibleMonthlyExpenses).reduce(((e,[n,t])=>e+t),0),n.flexibleExpensesTotal=o.objectEntries(n.flexibleMonthlyExpenses).reduce(((e,[n,t])=>e+t),0)},967:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.calculateAllowance=void 0;const o=t(526),l=t(800),r=t(42);n.calculateAllowance=function(e){const{name:n,account:t}=e,i=o.millisToMonth(Date.now()-l.startingTime),_=o.monthToSec(1)/t.dollarsPerMonth*t.awardSize,a=i*t.dollarsPerMonth,u=r.transactions.filter((e=>null!=e[n])).reduce(((e,t)=>e-t[n]),a),s=Math.max(0,Math.floor(u/t.awardSize)*t.awardSize),c=(u-s)/t.awardSize,d=Math.floor((1-c)*_),f=Math.floor(d/60),h=Math.floor(f/60),p=Math.floor(h/24);return{quantizedAmount:s,daysUntilAward:p,hoursUntilAward:h-24*p,minutesUntilAward:f-60*h,secondsUntilAward:d-60*f}}},42:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.transactions=void 0,n.transactions=[{Ashley:-44.73},{Nathan:-38.28},{Lilian:-10.5},{Food:-154.9},{Social:-42.24},{Emergency:-127.28},{Vacation:-496.75},{House:-600.92},{Food:62.32},{Food:5.51},{Food:124.36},{Social:11},{Nathan:4},{Food:42},{Nathan:850},{Food:80.92},{Food:7.86},{House:100},{Food:86.26-28.812},{Lilian:38.812},{Food:20.9895},{Food:12.72*1.05},{Food:20.12},{House:36.74},{Food:39.22},{House:16},{Ashley:2.09},{Lilian:25.19},{Social:9.44},{Nathan:-850},{Social:10/3,Ashley:10/3,Lilian:10/3},{Food:39.264425},{Nathan:6.595575},{Food:86.28},{Food:6},{Food:27.29},{House:422.42},{Nathan:8.47},{Food:91.61},{Nathan:1},{Social:5},{Food:29.48},{Social:17},{Social:46.75},{Ashley:5.25},{House:256},{Nathan:4.41},{Food:42.68-4.41},{Nathan:97},{Food:6},{Food:82.35},{Food:105.297},{Nathan:14.46*1.05},{Food:48.97},{Food:16.716},{Nathan:4.41},{Nathan:138.306},{Ashley:31.4685},{Social:10.98*1.05},{Food:33.6125},{House:-125},{House:133.88},{Nathan:16},{Ashley:59.98},{Vacation:79.73},{Lilian:29.3475},{Vacation:71.68*1.05},{Vacation:93.85949999999998},{House:39.354000000000006},{Food:14.35},{House:23.6},{Ashley:90},{House:-23.6},{Social:-14.67},{Food:1.38},{Food:24.6},{Food:-112.85},{Food:40.42},{Food:24.13},{Food:24.15},{Nathan:8.39},{Ashley:26.187},{Lilian:6.174},{House:27.2685},{Food:36.940499999999986},{Lilian:28.31},{Nathan:18.89},{Social:31.5},{Ashley:7.1925},{Lilian:10.5},{Food:7.48*1.05},{Food:10},{Ashley:-250},{Food:69.55},{Food:56.09},{House:41.25},{Food:148.83-76.0095},{Ashley:73.479},{Nathan:2.5305},{Food:1.49},{Food:20.65},{Nathan:4.41},{Food:-17.83},{Ashley:-16.8},{Food:16.4},{Food:10.49},{Ashley:7.86},{Lilian:25.557},{Food:119.82},{Nathan:7.49},{Food:10.9665},{Ashley:16.2435},{Food:6.3},{Food:15.92},{Social:40},{Lilian:10},{Nathan:2},{Food:28.32},{Food:12.4},{Food:12},{Nathan:4.4},{House:50},{Food:12.26},{Food:12.6},{Food:17.8},{Food:7.35},{Food:9.87},{Food:14.26},{House:24.5},{House:9.98},{Ashley:19.93},{Ashley:35.78},{Ashley:8.57,Nathan:10.5},{Food:71.59},{Social:12*1.05},{Social:23.39},{Nathan:26.89},{Lilian:10.15},{Nathan:12.054},{Food:31.156},{Food:4.2},{Food:2.82},{House:41.95},{House:46.55},{Food:89.75},{Food:33,Lilian:10,Nathan:2,Ashley:31},{House:34.5},{Ashley:43.83+51.4+10},{Nathan:7.1},{Ashley:28.6},{Food:21.44},{Food:6.3},{Food:30.43},{Nathan:78.04},{Lilian:20,House:40},{Food:28.066499999999998},{Ashley:89.2185},{Lilian:15.7185},{House:22.0185},{Food:76.21},{Food:2.751},{Ashley:39.27},{Nathan:27.3},{Lilian:6*1.05},{Food:28.36},{Food:28.36},{Food:54.96},{Lilian:4.73},{Food:5.79},{Nathan:86.42},{Food:26.33},{Lilian:17.84},{Food:14.26},{Food:5},{Social:50.39},{Social:50.39},{Ashley:37.99},{Ashley:15.7185-74.49},{Lilian:-15.7185},{House:-24.5},{Ashley:-8.82},{Food:10.66},{Food:6.3},{Food:2.08},{Vacation:65.59},{Vacation:68.3},{House:457.12},{Ashley:9.95},{Ashley:19.908},{Food:55.782},{Ashley:-661.29},{Ashley:12.0645},{Food:14.0055},{Food:10.7415},{Nathan:4.41},{Ashley:1.4595},{House:12.23},{House:149.04},{Ashley:-892.48},{Nathan:-1182.27},{Food:-72}]},50:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.pipe=n.fromEntries=n.objectKeys=n.objectEntries=void 0,n.objectEntries=function(e){return Object.entries(e)},n.objectKeys=function(e){return Object.keys(e)},n.fromEntries=function(e){const n={};return e.forEach((e=>{n[e[0]]=e[1]})),n},n.pipe=function e(n){return{into:t=>e(t(n)),outFrom:e=>e(n)}}},526:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.monthToSec=n.millisToMonth=n.millisToDay=n.currentHour24=void 0,n.currentHour24=function(){const e=new Date,n=new Date;return n.setHours(0),n.setMinutes(0),n.setSeconds(0),(e.getTime()-n.getTime())/1e3/60/60},n.millisToDay=function(e){return e/1e3/60/60/24},n.millisToMonth=function(e){return e/1e3/60/60/24/30.436875},n.monthToSec=function(e){return 30.436875*e*24*60*60}},252:function(e,n,t){"use strict";var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(l,r){function i(e){try{a(o.next(e))}catch(e){r(e)}}function _(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var n;e.done?l(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,_)}a((o=o.apply(e,n||[])).next())}))},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const r=l(t(220)),i=t(811),_=t(50),a=t(967),u=t(800),s={fontFamily:"'Trebuchet MS'",fontSize:"26pt",color:"#d7e5e5",backgroundColor:"#151532",margin:0,width:"100%",height:"100%",display:"grid"},c={margin:"1em"},d=Object.assign(Object.assign({},c),{display:"grid",gridAutoColumns:"auto auto auto",gridAutoFlow:"column"});o(void 0,void 0,void 0,(function*(){const e=yield fetch("buildInfo.json"),n=yield e.json(),t=new Date(n.timestamp);r.default.render(r.default.createElement((()=>{const[e,n]=i.useState(0);return i.useEffect((()=>{const e=setInterval((()=>{n((e=>e+1))}),1e3);return()=>clearInterval(e)}),[]),r.default.createElement("div",{style:s},r.default.createElement("div",{style:c},r.default.createElement("h1",null,"Allowance"),r.default.createElement("i",null,"Transactions last updated: ",t.toLocaleString("default",{month:"long",day:"numeric",year:"numeric",hour:"numeric",hour12:!0}))),r.default.createElement("div",{style:d},_.objectEntries(u.accounts).map((([e,n])=>{const t=a.calculateAllowance({name:e,account:n});return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{style:{gridColumn:1}},e),r.default.createElement("div",{style:{gridColumn:2}},"💲",t.quantizedAmount.toFixed(2)),r.default.createElement("div",{style:{gridColumn:3}},r.default.createElement("i",null,"next")," ",n.awardName,r.default.createElement("i",null,"in ",t.daysUntilAward>0?`${t.daysUntilAward}d `:"",t.hoursUntilAward>0?`${t.hoursUntilAward}h `:"",t.minutesUntilAward>0?`${t.minutesUntilAward}m `:"",t.secondsUntilAward,"s")))}))))}),null),document.body)}))}},n={};!function t(o){var l=n[o];if(void 0!==l)return l.exports;var r=n[o]={exports:{}};return e[o].call(r.exports,r,r.exports,t),r.exports}(252)})();