import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_SpinDown_Component from './Ext/field/trigger/SpinDown';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSpindowntriggerComponent =
/*#__PURE__*/
function (_Ext_field_trigger_Sp) {
  _inheritsLoose(ExtSpindowntriggerComponent, _Ext_field_trigger_Sp);

  function ExtSpindowntriggerComponent() {
    var _this;

    _this = _Ext_field_trigger_Sp.call(this) || this;
    _this.xtype = 'spindowntrigger';
    return _this;
  }

  return ExtSpindowntriggerComponent;
}(Ext_field_trigger_SpinDown_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-spindowntrigger', ExtSpindowntriggerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-spindowntrigger', HTMLParsedElement.withParsedCallback(ExtSpindowntriggerComponent));