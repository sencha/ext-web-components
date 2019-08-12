import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Time_Component from './Ext/panel/Time';
export var ExtTimepanelComponent =
/*#__PURE__*/
function (_Ext_panel_Time_Compo) {
  _inheritsLoose(ExtTimepanelComponent, _Ext_panel_Time_Compo);

  function ExtTimepanelComponent() {
    return _Ext_panel_Time_Compo.call(this, '', '', {}, '') || this;
  }

  return ExtTimepanelComponent;
}(Ext_panel_Time_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-timepanel', ExtTimepanelComponent);
  });
})();