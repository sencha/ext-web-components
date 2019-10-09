import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Reveal from './Ext/field/trigger/Reveal';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtRevealtriggerComponent =
/*#__PURE__*/
function (_Ext_field_trigger_Re) {
  _inheritsLoose(ExtRevealtriggerComponent, _Ext_field_trigger_Re);

  function ExtRevealtriggerComponent() {
    var _this;

    _this = _Ext_field_trigger_Re.call(this, [], []) || this;
    _this.xtype = 'revealtrigger';
    return _this;
  }

  return ExtRevealtriggerComponent;
}(Ext_field_trigger_Reveal); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-revealtrigger', ExtRevealtriggerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-revealtrigger', HTMLParsedElement.withParsedCallback(ExtRevealtriggerComponent));