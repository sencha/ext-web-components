import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Panel from './Ext/field/Panel.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtFieldpanelComponent =
/*#__PURE__*/
function (_Ext_field_Panel) {
  _inheritsLoose(ExtFieldpanelComponent, _Ext_field_Panel);

  function ExtFieldpanelComponent() {
    var _this;

    _this = _Ext_field_Panel.call(this, [], []) || this;
    _this.xtype = 'fieldpanel';
    return _this;
  }

  return ExtFieldpanelComponent;
}(Ext_field_Panel); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-fieldpanel', ExtFieldpanelComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-fieldpanel', HTMLParsedElement.withParsedCallback(ExtFieldpanelComponent));