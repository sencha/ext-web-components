import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_field_trigger_SpinUp from '@sencha/ext-runtime-base/dist/./Ext/field/trigger/SpinUp.js';
import Ext_field_trigger_SpinUp from './Ext/field/trigger/SpinUp.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCSpinuptrigger =
/*#__PURE__*/
function (_Ext_field_trigger_Sp) {
  _inheritsLoose(EWCSpinuptrigger, _Ext_field_trigger_Sp);

  function EWCSpinuptrigger() {
    var _this;

    _this = _Ext_field_trigger_Sp.call(this, [], []) || this;
    _this.xtype = 'spinuptrigger';
    return _this;
  }

  return EWCSpinuptrigger;
}(Ext_field_trigger_SpinUp);

export { EWCSpinuptrigger as default };
window.customElements.define('ext-spinuptrigger', HTMLParsedElement.withParsedCallback(EWCSpinuptrigger));