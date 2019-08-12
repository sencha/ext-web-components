import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Tool_Component from './Ext/panel/Tool';
export var ExtToolComponent =
/*#__PURE__*/
function (_Ext_panel_Tool_Compo) {
  _inheritsLoose(ExtToolComponent, _Ext_panel_Tool_Compo);

  function ExtToolComponent() {
    return _Ext_panel_Tool_Compo.call(this, '', '', {}, '') || this;
  }

  return ExtToolComponent;
}(Ext_panel_Tool_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-tool', ExtToolComponent);
  });
})();