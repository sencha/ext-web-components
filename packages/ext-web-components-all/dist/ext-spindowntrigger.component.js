import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_SpinDown from './Ext/field/trigger/SpinDown.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtSpindowntrigger =
/*#__PURE__*/
function (_Ext_field_trigger_Sp) {
  _inheritsLoose(ExtSpindowntrigger, _Ext_field_trigger_Sp);

  function ExtSpindowntrigger() {
    var _this;

    _this = _Ext_field_trigger_Sp.call(this, [], []) || this;
    _this.xtype = 'spindowntrigger';
    return _this;
  }

  return ExtSpindowntrigger;
}(Ext_field_trigger_SpinDown);

export { ExtSpindowntrigger as default };
window.customElements.define('ext-spindowntrigger', HTMLParsedElement.withParsedCallback(ExtSpindowntrigger));