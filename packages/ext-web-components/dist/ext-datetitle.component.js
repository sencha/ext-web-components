import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_DateTitle_Component from './Ext/panel/DateTitle';
export var ExtDatetitleComponent =
/*#__PURE__*/
function (_Ext_panel_DateTitle_) {
  _inheritsLoose(ExtDatetitleComponent, _Ext_panel_DateTitle_);

  function ExtDatetitleComponent() {
    return _Ext_panel_DateTitle_.call(this, '', '', {}, '') || this;
  }

  return ExtDatetitleComponent;
}(Ext_panel_DateTitle_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-datetitle', ExtDatetitleComponent);
  });
})();