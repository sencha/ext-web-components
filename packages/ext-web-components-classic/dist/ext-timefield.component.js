import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Time from './Ext/form/Time.js';
import ElementParser from './common/ElementParser.js';

var EWCTimefield = /*#__PURE__*/function (_Ext_form_Time) {
  _inheritsLoose(EWCTimefield, _Ext_form_Time);

  function EWCTimefield() {
    var _this;

    _this = _Ext_form_Time.call(this, [], []) || this;
    _this.xtype = 'timefield';
    return _this;
  }

  return EWCTimefield;
}(Ext_form_Time);

export { EWCTimefield as default };

try {
  if (window.customElements.get('ext-timefield') == undefined) {
    window.customElements.define('ext-timefield', ElementParser.withParsedCallback(EWCTimefield));
  }
} catch (e) {
  if (window.customElements.get('ext-timefield') == undefined) {
    window.customElements.define('ext-timefield', EWCTimefield);
  }
}