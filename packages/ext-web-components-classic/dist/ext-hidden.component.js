import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Hidden from './Ext/form/Hidden.js';
import ElementParser from './common/ElementParser.js';

var EWCHidden = /*#__PURE__*/function (_Ext_form_Hidden) {
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

try {
  if (window.customElements.get('ext-hidden') == undefined) {
    window.customElements.define('ext-hidden', ElementParser.withParsedCallback(EWCHidden));
  }
} catch (e) {
  if (window.customElements.get('ext-hidden') == undefined) {
    window.customElements.define('ext-hidden', EWCHidden);
  }
}