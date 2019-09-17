import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Expand_Component from './Ext/field/trigger/Expand';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtExpandtriggerComponent =
/*#__PURE__*/
function (_Ext_field_trigger_Ex) {
  _inheritsLoose(ExtExpandtriggerComponent, _Ext_field_trigger_Ex);

  function ExtExpandtriggerComponent() {
    var _this;

    _this = _Ext_field_trigger_Ex.call(this, {}, [], []) || this;
    _this.xtype = 'expandtrigger';
    return _this;
  }

  return ExtExpandtriggerComponent;
}(Ext_field_trigger_Expand_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-expandtrigger', ExtExpandtriggerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-expandtrigger', HTMLParsedElement.withParsedCallback(ExtExpandtriggerComponent));