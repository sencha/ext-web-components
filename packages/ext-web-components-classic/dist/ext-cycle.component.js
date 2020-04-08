import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_CycleButton from './Ext/CycleButton.js';
import ElementParser from './common/ElementParser.js';

var EWCCycle = /*#__PURE__*/function (_Ext_CycleButton) {
  _inheritsLoose(EWCCycle, _Ext_CycleButton);

  function EWCCycle() {
    var _this;

    _this = _Ext_CycleButton.call(this, [], []) || this;
    _this.xtype = 'cycle';
    return _this;
  }

  return EWCCycle;
}(Ext_CycleButton);

export { EWCCycle as default };

try {
  if (window.customElements.get('ext-cycle') == undefined) {
    window.customElements.define('ext-cycle', ElementParser.withParsedCallback(EWCCycle));
  }
} catch (e) {
  if (window.customElements.get('ext-cycle') == undefined) {
    window.customElements.define('ext-cycle', EWCCycle);
  }
}