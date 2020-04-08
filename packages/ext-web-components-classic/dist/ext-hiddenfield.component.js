import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Hidden from './Ext/form/Hidden.js';
import ElementParser from './common/ElementParser.js';

var EWCHiddenfield = /*#__PURE__*/function (_Ext_form_Hidden) {
  _inheritsLoose(EWCHiddenfield, _Ext_form_Hidden);

  function EWCHiddenfield() {
    var _this;

    _this = _Ext_form_Hidden.call(this, [], []) || this;
    _this.xtype = 'hiddenfield';
    return _this;
  }

  return EWCHiddenfield;
}(Ext_form_Hidden);

export { EWCHiddenfield as default };

try {
  if (window.customElements.get('ext-hiddenfield') == undefined) {
    window.customElements.define('ext-hiddenfield', ElementParser.withParsedCallback(EWCHiddenfield));
  }
} catch (e) {
  if (window.customElements.get('ext-hiddenfield') == undefined) {
    window.customElements.define('ext-hiddenfield', EWCHiddenfield);
  }
}