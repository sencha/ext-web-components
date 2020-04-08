import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_Multiselect from './Ext/ux/Multiselect.js';
import ElementParser from './common/ElementParser.js';

var EWCMultiselect = /*#__PURE__*/function (_Ext_ux_Multiselect) {
  _inheritsLoose(EWCMultiselect, _Ext_ux_Multiselect);

  function EWCMultiselect() {
    var _this;

    _this = _Ext_ux_Multiselect.call(this, [], []) || this;
    _this.xtype = 'multiselect';
    return _this;
  }

  return EWCMultiselect;
}(Ext_ux_Multiselect);

export { EWCMultiselect as default };

try {
  if (window.customElements.get('ext-multiselect') == undefined) {
    window.customElements.define('ext-multiselect', ElementParser.withParsedCallback(EWCMultiselect));
  }
} catch (e) {
  if (window.customElements.get('ext-multiselect') == undefined) {
    window.customElements.define('ext-multiselect', EWCMultiselect);
  }
}