import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_TabPanel_Component from './Ext/TabPanel';
export var ExtTabpanelComponent =
/*#__PURE__*/
function (_Ext_TabPanel_Compone) {
  _inheritsLoose(ExtTabpanelComponent, _Ext_TabPanel_Compone);

  function ExtTabpanelComponent() {
    return _Ext_TabPanel_Compone.call(this, '', '', {}, '') || this;
  }

  return ExtTabpanelComponent;
}(Ext_TabPanel_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-tabpanel', ExtTabpanelComponent);
  });
})();