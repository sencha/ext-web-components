import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_panel_YearPicker from '@sencha/ext-runtime-base/dist/./Ext/panel/YearPicker.js';
import Ext_panel_YearPicker from './Ext/panel/YearPicker.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCYearpicker =
/*#__PURE__*/
function (_Ext_panel_YearPicker) {
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
window.customElements.define('ext-yearpicker', HTMLParsedElement.withParsedCallback(EWCYearpicker));