import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Toggle from './Ext/form/Toggle.js';
import ElementParser from './common/ElementParser.js';

var EWCTogglefield = /*#__PURE__*/function (_Ext_form_Toggle) {
  _inheritsLoose(EWCTogglefield, _Ext_form_Toggle);

  function EWCTogglefield() {
    var _this;

    _this = _Ext_form_Toggle.call(this, [], []) || this;
    _this.xtype = 'togglefield';
    return _this;
  }

  return EWCTogglefield;
}(Ext_form_Toggle);

export { EWCTogglefield as default };

try {
  if (window.customElements.get('ext-togglefield') == undefined) {
    window.customElements.define('ext-togglefield', ElementParser.withParsedCallback(EWCTogglefield));
  }
} catch (e) {
  if (window.customElements.get('ext-togglefield') == undefined) {
    window.customElements.define('ext-togglefield', EWCTogglefield);
  }
}