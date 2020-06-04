import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Spinner from './Ext/form/Spinner.js';
import ElementParser from './common/ElementParser.js';

var EWCSpinnerfield = /*#__PURE__*/function (_Ext_form_Spinner) {
  _inheritsLoose(EWCSpinnerfield, _Ext_form_Spinner);

  function EWCSpinnerfield() {
    var _this;

    _this = _Ext_form_Spinner.call(this, [], []) || this;
    _this.xtype = 'spinnerfield';
    return _this;
  }

  return EWCSpinnerfield;
}(Ext_form_Spinner);

export { EWCSpinnerfield as default };

try {
  if (window.customElements.get('ext-spinnerfield') == undefined) {
    window.customElements.define('ext-spinnerfield', ElementParser.withParsedCallback(EWCSpinnerfield));
  }
} catch (e) {
  if (window.customElements.get('ext-spinnerfield') == undefined) {
    window.customElements.define('ext-spinnerfield', EWCSpinnerfield);
  }
}