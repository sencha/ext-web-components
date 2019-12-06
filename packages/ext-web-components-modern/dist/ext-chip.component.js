import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_Chip from '@sencha/ext-runtime-base/dist/./Ext/Chip.js';
import Ext_Chip from './Ext/Chip.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-chip', HTMLParsedElement.withParsedCallback(EWCChip));