import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Panel_Component from './Ext/field/Panel';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtFieldpanelComponent =
/*#__PURE__*/
function (_Ext_field_Panel_Comp) {
  _inheritsLoose(ExtFieldpanelComponent, _Ext_field_Panel_Comp);

  function ExtFieldpanelComponent() {
    var _this;

    _this = _Ext_field_Panel_Comp.call(this) || this;
    _this.xtype = 'fieldpanel';
    return _this;
  }

  return ExtFieldpanelComponent;
}(Ext_field_Panel_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-fieldpanel', ExtFieldpanelComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-fieldpanel', HTMLParsedElement.withParsedCallback(ExtFieldpanelComponent));