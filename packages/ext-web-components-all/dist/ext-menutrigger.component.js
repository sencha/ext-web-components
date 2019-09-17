import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Menu_Component from './Ext/field/trigger/Menu';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtMenutriggerComponent =
/*#__PURE__*/
function (_Ext_field_trigger_Me) {
  _inheritsLoose(ExtMenutriggerComponent, _Ext_field_trigger_Me);

  function ExtMenutriggerComponent() {
    var _this;

    _this = _Ext_field_trigger_Me.call(this) || this;
    _this.xtype = 'menutrigger';
    return _this;
  }

  return ExtMenutriggerComponent;
}(Ext_field_trigger_Menu_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-menutrigger', ExtMenutriggerComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-menutrigger', HTMLParsedElement.withParsedCallback(ExtMenutriggerComponent));