import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_SpinUp from './Ext/field/trigger/SpinUp.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtSpinuptriggerComponent =
/*#__PURE__*/
function (_Ext_field_trigger_Sp) {
  _inheritsLoose(ExtSpinuptriggerComponent, _Ext_field_trigger_Sp);

  function ExtSpinuptriggerComponent() {
    var _this;

    _this = _Ext_field_trigger_Sp.call(this, [], []) || this;
    _this.xtype = 'spinuptrigger';
    return _this;
  }

  return ExtSpinuptriggerComponent;
}(Ext_field_trigger_SpinUp); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spinuptrigger', ExtSpinuptriggerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-spinuptrigger', HTMLParsedElement.withParsedCallback(ExtSpinuptriggerComponent));