import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_YearPicker from './Ext/panel/YearPicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtYearpicker =
/*#__PURE__*/
function (_Ext_panel_YearPicker) {
  _inheritsLoose(ExtYearpicker, _Ext_panel_YearPicker);

  function ExtYearpicker() {
    var _this;

    _this = _Ext_panel_YearPicker.call(this, [], []) || this;
    _this.xtype = 'yearpicker';
    return _this;
  }

  return ExtYearpicker;
}(Ext_panel_YearPicker);

export { ExtYearpicker as default };
window.customElements.define('ext-yearpicker', HTMLParsedElement.withParsedCallback(ExtYearpicker));