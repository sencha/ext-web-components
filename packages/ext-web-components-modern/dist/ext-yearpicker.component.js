import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_YearPicker from './Ext/panel/YearPicker.js';
import ElementParser from './runtime/ElementParser.js';

var EWCYearpicker = /*#__PURE__*/function (_Ext_panel_YearPicker) {
  _inheritsLoose(EWCYearpicker, _Ext_panel_YearPicker);

  function EWCYearpicker() {
    var _this;

    _this = _Ext_panel_YearPicker.call(this, [], []) || this;
    _this.xtype = 'yearpicker';
    return _this;
  }

  return EWCYearpicker;
}(Ext_panel_YearPicker);

export { EWCYearpicker as default };

try {
  window.customElements.define('ext-yearpicker', ElementParser.withParsedCallback(EWCYearpicker));
} catch (e) {
  window.customElements.define('ext-yearpicker', EWCYearpicker);
}