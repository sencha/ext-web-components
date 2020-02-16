import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_window_Toast from './Ext/window/Toast.js';
import ElementParser from './runtime/ElementParser.js';

var EWCToast =
/*#__PURE__*/
function (_Ext_window_Toast) {
  _inheritsLoose(EWCToast, _Ext_window_Toast);

  function EWCToast() {
    var _this;

    _this = _Ext_window_Toast.call(this, [], []) || this;
    _this.xtype = 'toast';
    return _this;
  }

  return EWCToast;
}(Ext_window_Toast);

export { EWCToast as default };

try {
  window.customElements.define('ext-toast', ElementParser.withParsedCallback(EWCToast));
} catch (e) {
  window.customElements.define('ext-toast', EWCToast);
}