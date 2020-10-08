import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Select from './Ext/form/Select.js';
import ElementParser from './common/ElementParser.js';

var EWCSelectfield = /*#__PURE__*/function (_Ext_form_Select) {
  _inheritsLoose(EWCSelectfield, _Ext_form_Select);

  function EWCSelectfield() {
    var _this;

    _this = _Ext_form_Select.call(this, [], []) || this;
    _this.xtype = 'selectfield';
    return _this;
  }

  return EWCSelectfield;
}(Ext_form_Select);

export { EWCSelectfield as default };

try {
  if (window.customElements.get('ext-selectfield') == undefined) {
    window.customElements.define('ext-selectfield', ElementParser.withParsedCallback(EWCSelectfield));
  }
} catch (e) {
  if (window.customElements.get('ext-selectfield') == undefined) {
    window.customElements.define('ext-selectfield', EWCSelectfield);
  }
}