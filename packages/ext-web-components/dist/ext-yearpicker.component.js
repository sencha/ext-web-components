import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_YearPicker_Component from './Ext/panel/YearPicker';
export var ExtYearpickerComponent =
/*#__PURE__*/
function (_Ext_panel_YearPicker) {
  _inheritsLoose(ExtYearpickerComponent, _Ext_panel_YearPicker);

  function ExtYearpickerComponent() {
    return _Ext_panel_YearPicker.call(this, '', '', {}, '') || this;
  }

  return ExtYearpickerComponent;
}(Ext_panel_YearPicker_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-yearpicker', ExtYearpickerComponent);
  });
})();