import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Field from './Ext/form/Field.js';
import ElementParser from './common/ElementParser.js';

var EWCField = /*#__PURE__*/function (_Ext_form_Field) {
  _inheritsLoose(EWCField, _Ext_form_Field);

  function EWCField() {
    var _this;

    _this = _Ext_form_Field.call(this, [], []) || this;
    _this.xtype = 'field';
    return _this;
  }

  return EWCField;
}(Ext_form_Field);

export { EWCField as default };

try {
  if (window.customElements.get('ext-field') == undefined) {
    window.customElements.define('ext-field', ElementParser.withParsedCallback(EWCField));
  }
} catch (e) {
  if (window.customElements.get('ext-field') == undefined) {
    window.customElements.define('ext-field', EWCField);
  }
}