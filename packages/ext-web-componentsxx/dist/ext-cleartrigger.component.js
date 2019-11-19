import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Clear from './Ext/field/trigger/Clear';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCleartriggerComponent =
/*#__PURE__*/
function (_Ext_field_trigger_Cl) {
  _inheritsLoose(ExtCleartriggerComponent, _Ext_field_trigger_Cl);

  function ExtCleartriggerComponent() {
    var _this;

    _this = _Ext_field_trigger_Cl.call(this, [], []) || this;
    _this.xtype = 'cleartrigger';
    return _this;
  }

  return ExtCleartriggerComponent;
}(Ext_field_trigger_Clear); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-cleartrigger', ExtCleartriggerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-cleartrigger', HTMLParsedElement.withParsedCallback(ExtCleartriggerComponent));