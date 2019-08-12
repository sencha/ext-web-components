import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Date_Component from './Ext/panel/Date';
export var ExtDatepanelComponent =
/*#__PURE__*/
function (_Ext_panel_Date_Compo) {
  _inheritsLoose(ExtDatepanelComponent, _Ext_panel_Date_Compo);

  function ExtDatepanelComponent() {
    return _Ext_panel_Date_Compo.call(this, '', '', {}, '') || this;
  }

  return ExtDatepanelComponent;
}(Ext_panel_Date_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-datepanel', ExtDatepanelComponent);
  });
})();