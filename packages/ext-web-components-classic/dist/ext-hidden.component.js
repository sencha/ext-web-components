import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_form_Hidden from '@sencha/ext-runtime-base/dist/./Ext/form/Hidden.js';
import Ext_form_Hidden from './Ext/form/Hidden.js';
import ElementParser from './ElementParser.js';

var EWCHidden =
/*#__PURE__*/
function (_Ext_form_Hidden) {
  _inheritsLoose(EWCHidden, _Ext_form_Hidden);

  function EWCHidden() {
    var _this;

    _this = _Ext_form_Hidden.call(this, [], []) || this;
    _this.xtype = 'hidden';
    return _this;
  }

  return EWCHidden;
}(Ext_form_Hidden);

export { EWCHidden as default };
window.customElements.define('ext-hidden', ElementParser.withParsedCallback(EWCHidden));