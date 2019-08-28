import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Tool_Component from './Ext/panel/Tool';
export var ExtPaneltoolComponent =
/*#__PURE__*/
function (_Ext_panel_Tool_Compo) {
  _inheritsLoose(ExtPaneltoolComponent, _Ext_panel_Tool_Compo);

  function ExtPaneltoolComponent() {
    return _Ext_panel_Tool_Compo.call(this, '', '', {}, '') || this;
  }

  return ExtPaneltoolComponent;
}(Ext_panel_Tool_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-paneltool', ExtPaneltoolComponent);
  });
})();