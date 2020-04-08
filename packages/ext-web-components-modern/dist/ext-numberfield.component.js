import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Number from './Ext/form/Number.js';
import ElementParser from './common/ElementParser.js';

var EWCNumberfield = /*#__PURE__*/function (_Ext_form_Number) {
  _inheritsLoose(EWCNumberfield, _Ext_form_Number);

  function EWCNumberfield() {
    var _this;

    _this = _Ext_form_Number.call(this, [], []) || this;
    _this.xtype = 'numberfield';
    return _this;
  }

  return EWCNumberfield;
}(Ext_form_Number);

export { EWCNumberfield as default };

try {
  if (window.customElements.get('ext-numberfield') == undefined) {
    window.customElements.define('ext-numberfield', ElementParser.withParsedCallback(EWCNumberfield));
  }
} catch (e) {
  if (window.customElements.get('ext-numberfield') == undefined) {
    window.customElements.define('ext-numberfield', EWCNumberfield);
  }
}