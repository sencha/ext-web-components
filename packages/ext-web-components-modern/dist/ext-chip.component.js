import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Chip from './Ext/Chip.js';
import ElementParser from './ElementParser.js';

var EWCChip =
/*#__PURE__*/
function (_Ext_Chip) {
  _inheritsLoose(EWCChip, _Ext_Chip);

  function EWCChip() {
    var _this;

    _this = _Ext_Chip.call(this, [], []) || this;
    _this.xtype = 'chip';
    return _this;
  }

  return EWCChip;
}(Ext_Chip);

export { EWCChip as default };

try {
  window.customElements.define('ext-chip', ElementParser.withParsedCallback(EWCChip));
} catch (e) {
  window.customElements.define('ext-chip', EWCChip);
}