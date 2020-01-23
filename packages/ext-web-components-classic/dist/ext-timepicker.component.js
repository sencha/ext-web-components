import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_picker_Time from './Ext/picker/Time.js';
import ElementParser from './ElementParser.js';

var EWCTimepicker =
/*#__PURE__*/
function (_Ext_picker_Time) {
  _inheritsLoose(EWCTimepicker, _Ext_picker_Time);

  function EWCTimepicker() {
    var _this;

    _this = _Ext_picker_Time.call(this, [], []) || this;
    _this.xtype = 'timepicker';
    return _this;
  }

  return EWCTimepicker;
}(Ext_picker_Time);

export { EWCTimepicker as default };

try {
  window.customElements.define('ext-timepicker', ElementParser.withParsedCallback(EWCTimepicker));
} catch (e) {
  console.log(e);
  window.customElements.define('ext-timepicker', EWCTimepicker);
}