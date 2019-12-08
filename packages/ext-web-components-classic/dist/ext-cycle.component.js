import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_CycleButton from '@sencha/ext-runtime-base/dist/./Ext/CycleButton.js';
import Ext_CycleButton from './Ext/CycleButton.js';
import ElementParser from './ElementParser.js';

var EWCCycle =
/*#__PURE__*/
function (_Ext_CycleButton) {
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
window.customElements.define('ext-cycle', ElementParser.withParsedCallback(EWCCycle));