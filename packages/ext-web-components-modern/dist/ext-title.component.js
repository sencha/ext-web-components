import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_Title from '@sencha/ext-runtime-base/dist/./Ext/Title.js';
import Ext_Title from './Ext/Title.js';
import ElementParser from './ElementParser.js';

var EWCTitle =
/*#__PURE__*/
function (_Ext_Title) {
  _inheritsLoose(EWCTitle, _Ext_Title);

  function EWCTitle() {
    var _this;

    _this = _Ext_Title.call(this, [], []) || this;
    _this.xtype = 'title';
    return _this;
  }

  return EWCTitle;
}(Ext_Title);

export { EWCTitle as default };
window.customElements.define('ext-title', ElementParser.withParsedCallback(EWCTitle));