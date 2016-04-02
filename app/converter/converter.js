"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril),_textfield=require("polythene/textfield/textfield"),_textfield2=_interopRequireDefault(_textfield),_templateBuilder=require("app/converter/template-builder"),_templateBuilder2=_interopRequireDefault(_templateBuilder),_indentSelector=require("app/converter/indent-selector"),_indentSelector2=_interopRequireDefault(_indentSelector),_examples=require("app/converter/examples"),_examples2=_interopRequireDefault(_examples);require("polythene/layout/theme/theme"),window.m=_mithril2.default;var converter={controller:function(){var e=_mithril2.default.prop(""),r=_mithril2.default.prop(""),l=_mithril2.default.prop(),i=0,t=function(){var t=(0,_templateBuilder2.default)({source:e(),indent:l()});r(t)},u=function(){var r=i++%_examples2.default.length;e(_examples2.default[r]),t()};return{convert:t,source:e,output:r,indentId:function(e){l(e),t()},showExample:u}},view:function view(ctrl){var output=ctrl.output(),rendered=void 0;try{rendered=eval(output)}catch(e){rendered="Could not render Mithril code - please check the output for any errors."}return(0,_mithril2.default)("div",[(0,_mithril2.default)(".group",[(0,_mithril2.default)("div.layout.justified.horizontal",[(0,_mithril2.default)("h2","Paste source HTML"),(0,_mithril2.default)("a",{href:"#",onclick:function(){return ctrl.showExample()}},"Insert random example")]),_mithril2.default.component(_textfield2.default,{class:"source",autofocus:!0,getState:function(e){var t=!(!ctrl.source()&&!e.value);ctrl.source(e.value),""===e.value?ctrl.output(""):t&&ctrl.convert()},multiline:!0,rows:8,value:function(){return ctrl.source()}})]),(0,_mithril2.default)(".group",[(0,_mithril2.default)("h2","Copy Mithril code from here"),_mithril2.default.component(_textfield2.default,{class:"result",multiline:!0,rows:8,value:function(){return ctrl.output()}}),_mithril2.default.component(_indentSelector2.default,{indentId:ctrl.indentId})]),(0,_mithril2.default)(".group",[(0,_mithril2.default)("h2","Rendered Mithril code"),(0,_mithril2.default)("div",{class:"render"},rendered?rendered:null)])])}};exports.default=converter;