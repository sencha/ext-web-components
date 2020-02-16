import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_TreePicker from './Ext/ux/TreePicker.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTreepicker =
/*#__PURE__*/
function (_Ext_ux_TreePicker) {
  _inheritsLoose(EWCTreepicker, _Ext_ux_TreePicker);

  function EWCTreepicker() {
    var _this;

    _this = _Ext_ux_TreePicker.call(this, [], []) || this;
    _this.xtype = 'treepicker';
    return _this;
  }

  return EWCTreepicker;
}(Ext_ux_TreePicker);

export { EWCTreepicker as default };

try {
  window.customElements.define('ext-treepicker', ElementParser.withParsedCallback(EWCTreepicker));
} catch (e) {
  window.customElements.define('ext-treepicker', EWCTreepicker);
}