import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_field_Tag from './Ext/form/field/Tag.js';
import ElementParser from './common/ElementParser.js';

var EWCTagfield = /*#__PURE__*/function (_Ext_form_field_Tag) {
  _inheritsLoose(EWCTagfield, _Ext_form_field_Tag);

  function EWCTagfield() {
    var _this;

    _this = _Ext_form_field_Tag.call(this, [], []) || this;
    _this.xtype = 'tagfield';
    return _this;
  }

  return EWCTagfield;
}(Ext_form_field_Tag);

export { EWCTagfield as default };

try {
  if (window.customElements.get('ext-tagfield') == undefined) {
    window.customElements.define('ext-tagfield', ElementParser.withParsedCallback(EWCTagfield));
  }
} catch (e) {
  if (window.customElements.get('ext-tagfield') == undefined) {
    window.customElements.define('ext-tagfield', EWCTagfield);
  }
}