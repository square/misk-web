!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("@misk/simpleredux"),require("@blueprintjs/core"),require("@misk/core"),require("react-redux"),require("redux-saga/effects"),require("@blueprintjs/icons"),require("connected-react-router"),require("redux"),require("axios"),require("react-router"),require("react-router-dom")):"function"==typeof define&&define.amd?define(["react","@misk/simpleredux","@blueprintjs/core","@misk/core","react-redux","redux-saga/effects","@blueprintjs/icons","connected-react-router","redux","axios","react-router","react-router-dom"],t):"object"==typeof exports?exports.Palette=t(require("react"),require("@misk/simpleredux"),require("@blueprintjs/core"),require("@misk/core"),require("react-redux"),require("redux-saga/effects"),require("@blueprintjs/icons"),require("connected-react-router"),require("redux"),require("axios"),require("react-router"),require("react-router-dom")):(e.MiskTabs=e.MiskTabs||{},e.MiskTabs.Palette=t(e.React,e.Misk.SimpleRedux,e.Blueprint.Core,e.Misk.Core,e.ReactRedux,e.ReduxSagaEffects,e.Blueprint.Icons,e.ConnectedReactRouter,e.Redux,e.Axios,e.ReactRouter,e.ReactRouterDom))}("undefined"!=typeof self?self:this,function(e,t,r,n,o,l,a,i,u,c,s,p){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=12)}([function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",function(){return o}),r.d(t,"__assign",function(){return l}),r.d(t,"__rest",function(){return a}),r.d(t,"__decorate",function(){return i}),r.d(t,"__param",function(){return u}),r.d(t,"__metadata",function(){return c}),r.d(t,"__awaiter",function(){return s}),r.d(t,"__generator",function(){return p}),r.d(t,"__exportStar",function(){return m}),r.d(t,"__values",function(){return f}),r.d(t,"__read",function(){return d}),r.d(t,"__spread",function(){return h}),r.d(t,"__spreadArrays",function(){return S}),r.d(t,"__await",function(){return E}),r.d(t,"__asyncGenerator",function(){return b}),r.d(t,"__asyncDelegator",function(){return y}),r.d(t,"__asyncValues",function(){return _}),r.d(t,"__makeTemplateObject",function(){return g}),r.d(t,"__importStar",function(){return C}),r.d(t,"__importDefault",function(){return w});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function o(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function i(e,t,r,n){var o,l=arguments.length,a=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(l<3?o(a):l>3?o(t,r,a):o(t,r))||a);return l>3&&a&&Object.defineProperty(t,r,a),a}function u(e,t){return function(r,n){t(r,n,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function s(e,t,r,n){return new(r||(r=Promise))(function(o,l){function a(e){try{u(n.next(e))}catch(e){l(e)}}function i(e){try{u(n.throw(e))}catch(e){l(e)}}function u(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(a,i)}u((n=n.apply(e,t||[])).next())})}function p(e,t){var r,n,o,l,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,n=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){a=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(6===l[0]&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(e){l=[6,e],n=0}finally{r=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}}function m(e,t){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}function f(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}function d(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,l=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=l.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=l.return)&&r.call(l)}finally{if(o)throw o.error}}return a}function h(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]));return e}function S(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var l=arguments[t],a=0,i=l.length;a<i;a++,o++)n[o]=l[a];return n}function E(e){return this instanceof E?(this.v=e,this):new E(e)}function b(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),l=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise(function(r,n){l.push([e,t,r,n])>1||i(e,t)})})}function i(e,t){try{(r=o[e](t)).value instanceof E?Promise.resolve(r.value.v).then(u,c):s(l[0][2],r)}catch(e){s(l[0][3],e)}var r}function u(e){i("next",e)}function c(e){i("throw",e)}function s(e,t){e(t),l.shift(),l.length&&i(l[0][0],l[0][1])}}function y(e){var t,r;return t={},n("next"),n("throw",function(e){throw e}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:E(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=f(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise(function(n,o){(function(e,t,r,n){Promise.resolve(n).then(function(t){e({value:t,done:r})},t)})(n,o,(t=e[r](t)).done,t.value)})}}}function g(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function C(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function w(e){return e&&e.__esModule?e:{default:e}}},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(2),l=r(16),a=r(17),i=r(8),u=r(9);n.__exportStar(r(9),t),t.rootDispatcher=n.__assign({},o.dispatchSimpleForm,o.dispatchSimpleNetwork,u.dispatchPalette),t.rootSelectors=function(e){return{palette:o.simpleRootSelector("palette",e),router:e.router,simpleForm:o.simpleRootSelector("simpleForm",e),simpleNetwork:o.simpleRootSelector("simpleNetwork",e)}},t.rootReducer=function(e){return a.combineReducers({palette:u.PaletteReducer,router:l.connectRouter(e),simpleForm:o.SimpleFormReducer,simpleNetwork:o.SimpleNetworkReducer})},t.rootSaga=function(){return n.__generator(this,function(e){switch(e.label){case 0:return[4,i.all([i.fork(u.watchPaletteSagas),i.fork(o.watchSimpleFormSagas),i.fork(o.watchSimpleNetworkSagas)])];case 1:return e.sent(),[2]}})},t.mapStateToProps=function(e){return t.rootSelectors(e)},t.mapDispatchToProps=n.__assign({},t.rootDispatcher)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=n.__importDefault(r(21));t.SampleFormContainer=o.default;var l=n.__importDefault(r(22));t.SampleNetworkContainer=l.default;var a=n.__importDefault(r(23));t.TabContainer=a.default},function(e,t){e.exports=o},function(e,t){e.exports=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(0),l=r(2),a=o.__importDefault(r(18)),i=r(8);function u(){var e,r;return o.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,5]),[4,i.call(a.default.get,"https://jsonplaceholder.typicode.com/posts/")];case 1:return e=n.sent().data,[4,i.put(t.dispatchPalette.paletteSuccess({data:e}))];case 2:return n.sent(),[3,5];case 3:return r=n.sent(),[4,i.put(t.dispatchPalette.paletteFailure({error:o.__assign({},r)}))];case 4:return n.sent(),[3,5];case 5:return[2]}})}!function(e){e.DINOSAUR="PALETTE_DINOSAUR",e.SUCCESS="PALETTE_SUCCESS",e.FAILURE="PALETTE_FAILURE"}(n=t.PALETTE||(t.PALETTE={})),t.dispatchPalette={paletteDinosaur:function(){return l.createAction(n.DINOSAUR,{error:null,loading:!0,success:!1})},paletteFailure:function(e){return l.createAction(n.FAILURE,o.__assign({},e,{loading:!1,success:!1}))},paletteSuccess:function(e){return l.createAction(n.SUCCESS,o.__assign({},e,{error:null,loading:!1,success:!0}))}},t.watchPaletteSagas=function(){return o.__generator(this,function(e){switch(e.label){case 0:return[4,i.all([i.takeLatest(n.DINOSAUR,u)])];case 1:return e.sent(),[2]}})};var c=l.defaultRootState("palette");t.PaletteReducer=function(e,t){switch(void 0===e&&(e=c),t.type){case n.DINOSAUR:case n.FAILURE:case n.SUCCESS:return e.merge(t.payload);default:return e}}},function(e,t){e.exports=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=n.__importDefault(r(24));t.HowToComponent=o.default;var l=n.__importDefault(r(25));t.SampleRouterComponent=l.default;var a=n.__importDefault(r(27));t.SampleTableComponent=a.default},function(e,t,r){r(13),e.exports=r(15)},function(e,t,r){"use strict";e.exports=r(14)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=(n=r(1))&&"object"==typeof n&&"default"in n?n.default:n;function l(e){return l.warnAboutHMRDisabled&&(l.warnAboutHMRDisabled=!0,console.error("React-Hot-Loader: misconfiguration detected, using production version in non-production environment."),console.error("React-Hot-Loader: Hot Module Replacement is not enabled.")),o.Children.only(e.children)}l.warnAboutHMRDisabled=!1;var a=function e(){return e.shouldWrapWithAppContainer?function(e){return function(t){return o.createElement(l,null,o.createElement(e,t))}}:function(e){return e}};a.shouldWrapWithAppContainer=!1;t.AppContainer=l,t.hot=a,t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e},t.configureComponent=function(){}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(4),l=n.__importStar(r(5)),a=n.__importDefault(r(19));n.__exportStar(r(11),t),n.__exportStar(r(6),t),o.createIndex("palette",o.createApp(a.default),l)},function(e,t){e.exports=i},function(e,t){e.exports=u},function(e,t){e.exports=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0).__importStar(r(1)),o=r(20),l=r(6),a=n.createElement("div",null,n.createElement(o.Switch,null,n.createElement(o.Route,{path:"/path/param/:first/:second/",component:l.TabContainer}),n.createElement(o.Route,{path:"*",component:l.TabContainer})));t.default=a},function(e,t){e.exports=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(3),l=r(10),a=r(4),i=r(2),u=n.__importStar(r(1)),c=r(7),s=r(5);t.SampleFormContainer=function(e){var t="Expense Report";return u.createElement("div",null,u.createElement(o.H1,null,"Test"),u.createElement(o.Pre,null,"sampleFormData:",JSON.stringify(i.simpleSelect(e.simpleForm,t,"data"),null,2)),u.createElement(o.H1,null,"Sample Form Component :: ",t),u.createElement(o.Pre,null,"raw form input:"," ",JSON.stringify(i.simpleSelect(e.simpleForm,t),null,2)),u.createElement(o.FormGroup,null,u.createElement(o.InputGroup,{id:"text-input",placeholder:"Full Name",onChange:i.onChangeFnCall(e.simpleFormInput,t+"::Name")}),u.createElement(o.NumericInput,{leftIcon:l.IconNames.DOLLAR,placeholder:"Price",onValueChange:i.onChangeNumberFnCall(e.simpleFormNumber,t+"::Price"),value:i.simpleSelect(e.simpleForm,t+"::Price","data")}),u.createElement(o.TextArea,{fill:!0,intent:o.Intent.PRIMARY,onChange:i.onChangeFnCall(e.simpleFormInput,t+"::Itemized Receipt"),placeholder:"Itemized Receipt"}),u.createElement(a.FlexContainer,null,u.createElement(o.H5,null,"Bill Splitting"),u.createElement(o.Checkbox,{checked:i.simpleSelect(e.simpleForm,t+"::CheckAlice","data"),label:"Alice",onChange:i.onChangeToggleFnCall(e.simpleFormToggle,t+"::CheckAlice",e.simpleForm)}),u.createElement(o.Checkbox,{checked:i.simpleSelect(e.simpleForm,t+"::CheckBob","data"),label:"Bob",onChange:i.onChangeToggleFnCall(e.simpleFormToggle,t+"::CheckBob",e.simpleForm)}),u.createElement(o.Checkbox,{checked:i.simpleSelect(e.simpleForm,t+"::CheckEve","data"),label:"Eve",onChange:i.onChangeToggleFnCall(e.simpleFormToggle,t+"::CheckEve",e.simpleForm)}),u.createElement(o.Checkbox,{checked:i.simpleSelect(e.simpleForm,t+"::CheckMallory","data"),label:"Mallory",onChange:i.onChangeToggleFnCall(e.simpleFormToggle,t+"::CheckMallory",e.simpleForm)}),u.createElement(o.Checkbox,{checked:i.simpleSelect(e.simpleForm,t+"::CheckTrent","data"),label:"Trent",onChange:i.onChangeToggleFnCall(e.simpleFormToggle,t+"::CheckTrent",e.simpleForm)})),u.createElement(o.RadioGroup,{label:"Meal",inline:!0,onChange:i.onChangeFnCall(e.simpleFormInput,t+"::Meal"),selectedValue:i.simpleSelect(e.simpleForm,t+"::Meal","data")},u.createElement(o.Radio,{label:"Breakfast",value:"breakfast"}),u.createElement(o.Radio,{label:"Lunch",value:"lunch"}),u.createElement(o.Radio,{label:"Dinner",value:"dinner"})),u.createElement(o.TagInput,{onChange:i.onChangeTagFnCall(e.simpleFormInput,t+"::Tags"),placeholder:"Tags",values:i.simpleSelect(e.simpleForm,t+"::Tags","data",5)}),u.createElement(o.H3,null,"Form Submission"),u.createElement(o.Pre,null,"submit form network request:"," ",JSON.stringify(i.simpleSelect(e.simpleNetwork,t+"::POST"),null,2)),u.createElement(o.InputGroup,{placeholder:"Form POST URL: http://your.url.com/to/send/a/request/to/",onChange:i.onChangeFnCall(e.simpleFormInput,t+"::POST_URL"),type:"url"}),u.createElement(o.Button,{onClick:i.onClickFnCall(e.simpleNetworkPost,t+"::POST",i.simpleSelect(e.simpleForm,t+"::POST_URL","data"),i.simpleSelect(e.simpleForm,t)),intent:o.Intent.PRIMARY,loading:i.simpleSelect(e.simpleNetwork,t+"::POST","loading"),text:"POST"})))},t.default=c.connect(s.mapStateToProps,s.mapDispatchToProps)(t.SampleFormContainer)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(3),l=r(2),a=n.__importStar(r(1)),i=r(7),u=r(5);t.SampleNetworkContainer=function(e){return a.createElement("div",null,a.createElement(o.H1,null,"Sample Network Component"),a.createElement(o.Pre,null,"sampleNetwork:",JSON.stringify(l.simpleSelect(e.simpleNetwork,"SampleNetwork"),null,2)),a.createElement(o.Pre,null,"simpleForm:",JSON.stringify(l.simpleSelect(e.simpleForm,"SampleNetwork"),null,2)),a.createElement(o.Pre,null,"url: ",l.simpleSelect(e.simpleForm,"SampleNetwork::url","data")),a.createElement(o.InputGroup,{placeholder:"Request URL: http://your.url.com/to/send/a/request/to/",onChange:l.onChangeFnCall(e.simpleFormInput,"SampleNetwork::url"),type:"url"}),a.createElement(o.TextArea,{fill:!0,onChange:l.onChangeFnCall(e.simpleFormInput,"SampleNetwork::data"),placeholder:"Request Body (JSON or Text)"}),a.createElement(o.ButtonGroup,null,a.createElement(o.Button,{onClick:l.onClickFnCall(e.simpleNetworkGet,"SampleNetwork::DELETE",l.simpleSelect(e.simpleForm,"SampleNetwork::url","data")),intent:o.Intent.DANGER,loading:l.simpleSelect(e.simpleNetwork,"SampleNetwork::DELETE","loading"),text:"DELETE"}),a.createElement(o.Button,{onClick:l.onClickFnCall(e.simpleNetworkGet,"SampleNetwork::GET",l.simpleSelect(e.simpleForm,"SampleNetwork::url","data")),intent:o.Intent.SUCCESS,loading:l.simpleSelect(e.simpleNetwork,"SampleNetwork::GET","loading"),text:"GET"}),a.createElement(o.Button,{onClick:l.onClickFnCall(e.simpleNetworkHead,"SampleNetwork::HEAD",l.simpleSelect(e.simpleForm,"SampleNetwork::url","data")),intent:o.Intent.NONE,loading:l.simpleSelect(e.simpleNetwork,"SampleNetwork::HEAD","loading"),text:"HEAD"}),a.createElement(o.Button,{onClick:l.onClickFnCall(e.simpleNetworkPatch,"SampleNetwork::PATCH",l.simpleSelect(e.simpleForm,"SampleNetwork::url","data"),l.simpleSelect(e.simpleForm,"SampleNetwork::data","data")),intent:o.Intent.PRIMARY,loading:l.simpleSelect(e.simpleNetwork,"SampleNetwork::PATCH","loading"),text:"PATCH"}),a.createElement(o.Button,{onClick:l.onClickFnCall(e.simpleNetworkPost,"SampleNetwork::POST",l.simpleSelect(e.simpleForm,"SampleNetwork::url","data"),l.simpleSelect(e.simpleForm,"SampleNetwork::data","data")),intent:o.Intent.PRIMARY,loading:l.simpleSelect(e.simpleNetwork,"SampleNetwork::POST","loading"),text:"POST"}),a.createElement(o.Button,{onClick:l.onClickFnCall(e.simpleNetworkPut,"SampleNetwork::PUT",l.simpleSelect(e.simpleForm,"SampleNetwork::url","data"),l.simpleSelect(e.simpleForm,"SampleNetwork::data","data")),intent:o.Intent.WARNING,loading:l.simpleSelect(e.simpleNetwork,"SampleNetwork::PUT","loading"),text:"PUT"})))},t.default=i.connect(u.mapStateToProps,u.mapDispatchToProps)(t.SampleNetworkContainer)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(2),l=n.__importStar(r(1)),a=r(7),i=r(11),u=r(6),c=r(5),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tableTag="Cars",t.tableUrl="https://cashapp.github.io/misk-web/examples/data/demo/cars.json",t}return n.__extends(t,e),t.prototype.componentDidMount=function(){this.props.simpleNetworkGet(this.tableTag,this.tableUrl)},t.prototype.render=function(){return l.createElement("div",null,l.createElement(i.SampleTableComponent,{data:o.simpleSelect(this.props.simpleNetwork,this.tableTag),rows:5,url:this.tableUrl,tag:this.tableTag}),l.createElement(i.HowToComponent,null),l.createElement(u.SampleNetworkContainer,null),l.createElement(u.SampleFormContainer,null),l.createElement(i.SampleRouterComponent,{history:this.props.history,location:this.props.location,match:this.props.match}))},t}(l.Component);t.default=a.connect(c.mapStateToProps,c.mapDispatchToProps)(s)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(3),l=n.__importStar(r(1));t.HowToComponent=function(){return l.createElement("div",null,l.createElement(o.H1,null,"Redux Powered Containers"),l.createElement("p",null,"There are examples below of forms, networks, buttons, tables, and other UI you will find helpful in building your Misk-Web tab. If you're looking for a way to test network functionality, HttpBin.org has a helpful echo Docker container that will do the trick."),l.createElement("ol",null,l.createElement("li",null,l.createElement("code",null,"$ docker run -p 1080:80 kennethreitz/httpbin")),l.createElement("li",null,"Use ",l.createElement("code",null,"http://localhost:1080/anything")," as your URL for any URL requests below")))},t.default=t.HowToComponent},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(3),l=r(10),a=n.__importStar(r(1)),i=r(26),u=r(4),c=function(e){return e.match?a.createElement(i.Link,{to:"/path/param/alpha/bravo"},a.createElement(o.Button,{text:"Test Path Parmeter"})):a.createElement("a",{href:"/path/param/alpha/bravo"},a.createElement(o.Button,{text:"Test Path Parmeter"}))};t.SampleRouterComponent=function(e){return a.createElement("div",null,a.createElement(o.H1,null,"Router Path Parameters"),"Learn more about these props injected by ",a.createElement("a",{href:"https://reacttraining.com/react-router/web/api/location"},"React Router here"),".",a.createElement(o.H3,null,"History"),a.createElement(u.CodePreContainer,null,JSON.stringify(e.history)),a.createElement(o.H3,null,"Location"),a.createElement(u.CodePreContainer,null,JSON.stringify(e.location)),a.createElement(o.H3,null,"Match"),a.createElement("p",null,"This example uses the following route configuration to show how path parameters can be easily parsed out within a component."),a.createElement(u.CodePreContainer,null,'\n      <Switch>\n        <Route path="/path/param/:first/:second/" component={TabContainer} />\n        ...\n      </Switch>\n    '),a.createElement("p",null,'Clicking Test Path Parameter below changes the url path to "/path/param/alpha/bravo". The blue buttons will then change from saying "none" to "alpha" and "bravo" respectively.'),a.createElement(o.ControlGroup,null,a.createElement(o.Button,{icon:l.IconNames.RESET,onClick:e.history&&e.history.goBack||null}),a.createElement(c,n.__assign({},e)),a.createElement(o.Button,{intent:o.Intent.PRIMARY,text:e.match&&e.match.params.first||"none"}),a.createElement(o.Button,{intent:o.Intent.PRIMARY,text:e.match&&e.match.params.second||"none"})),a.createElement(u.CodePreContainer,null,JSON.stringify(e.match)))},t.default=t.SampleRouterComponent},function(e,t){e.exports=p},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(3),l=r(4),a=n.__importStar(r(1)),i=function(e){var t=e.data;return a.createElement("tr",null,t&&Object.entries(t).map(function(e){var t=e[0],r=e[1];return a.createElement("td",{key:t},r)}))},u=function(e){var t=e.data,r=e.rows;return a.createElement("tbody",null,t&&t.slice(0,r).map(function(e,t){return a.createElement(i,{key:"row"+t,data:e})}))},c=function(e){var t=e.data;return a.createElement("thead",null,a.createElement("tr",null,t&&Object.entries(t).map(function(e){var t=e[0];e[1];return a.createElement("th",{key:t},t)})))};t.SampleTableComponent=function(e){var t=e.data,r=e.rows,n=void 0===r?5:r,i=e.url,s="Sample Table Component :: "+e.tag;if(t.cars&&null!==t.cars){var p=t.cars;return a.createElement("div",null,a.createElement(o.H1,null,s),a.createElement(o.Pre,null,"url: ",i),a.createElement(o.HTMLTable,{bordered:!0,striped:!0},a.createElement(c,{data:p[0]}),a.createElement(u,{data:p,rows:n})))}var m=a.createElement("p",{className:o.Classes.SKELETON},"lorem ipsum 1234 5678");return a.createElement("div",null,a.createElement(o.H1,null,s),a.createElement(o.Pre,null,"url: ",i),a.createElement(o.HTMLTable,{bordered:!0,striped:!0},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,m),a.createElement("th",null,m),a.createElement("th",null,m),a.createElement("th",null,m),a.createElement("th",null,m))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,m),a.createElement("td",null,m),a.createElement("td",null,m),a.createElement("td",null,m),a.createElement("td",null,m)))),a.createElement(l.ErrorCalloutComponent,{error:t.error}))},t.default=t.SampleTableComponent}])});