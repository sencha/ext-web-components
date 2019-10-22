import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_SpinUp from './Ext/field/trigger/SpinUp.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtSpinuptrigger =
/*#__PURE__*/
function (_Ext_field_trigger_Sp) {
  _inheritsLoose(ExtSpinuptrigger, _Ext_field_trigger_Sp);

  function ExtSpinuptrigger() {
    var _this;

    _this = _Ext_field_trigger_Sp.call(this, [], []) || this;
    _this.xtype = 'spinuptrigger';
    return _this;
  }

  return ExtSpinuptrigger;
}(Ext_field_trigger_SpinUp);

export { ExtSpinuptrigger as default };
window.customElements.define('ext-spinuptrigger', HTMLParsedElement.withParsedCallback(ExtSpinuptrigger));