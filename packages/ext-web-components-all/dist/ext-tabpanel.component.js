import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_TabPanel_Component from './Ext/TabPanel';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTabpanelComponent =
/*#__PURE__*/
function (_Ext_TabPanel_Compone) {
  _inheritsLoose(ExtTabpanelComponent, _Ext_TabPanel_Compone);

  function ExtTabpanelComponent() {
    var _this;

    _this = _Ext_TabPanel_Compone.call(this) || this;
    _this.xtype = 'tabpanel';
    return _this;
  }

  return ExtTabpanelComponent;
}(Ext_TabPanel_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tabpanel', ExtTabpanelComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-tabpanel', HTMLParsedElement.withParsedCallback(ExtTabpanelComponent));