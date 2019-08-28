import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Panel_Component from './Ext/panel/Panel';
export var ExtPanelComponent =
/*#__PURE__*/
function (_Ext_panel_Panel_Comp) {
  _inheritsLoose(ExtPanelComponent, _Ext_panel_Panel_Comp);

  function ExtPanelComponent() {
    return _Ext_panel_Panel_Comp.call(this, '', '', {}, '') || this;
  }

  return ExtPanelComponent;
}(Ext_panel_Panel_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-panel', ExtPanelComponent);
  });
})();