import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Spinner from './Ext/form/Spinner.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtSpinnerfield =
/*#__PURE__*/
function (_Ext_form_Spinner) {
  _inheritsLoose(ExtSpinnerfield, _Ext_form_Spinner);

  function ExtSpinnerfield() {
    var _this;

    _this = _Ext_form_Spinner.call(this, [], []) || this;
    _this.xtype = 'spinnerfield';
    return _this;
  }

  return ExtSpinnerfield;
}(Ext_form_Spinner);

export { ExtSpinnerfield as default };
window.customElements.define('ext-spinnerfield', HTMLParsedElement.withParsedCallback(ExtSpinnerfield));