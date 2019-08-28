import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Header_Component from './Ext/panel/Header';
export var ExtPanelheaderComponent =
/*#__PURE__*/
function (_Ext_panel_Header_Com) {
  _inheritsLoose(ExtPanelheaderComponent, _Ext_panel_Header_Com);

  function ExtPanelheaderComponent() {
    return _Ext_panel_Header_Com.call(this, '', '', {}, '') || this;
  }

  return ExtPanelheaderComponent;
}(Ext_panel_Header_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-panelheader', ExtPanelheaderComponent);
  });
})();