import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_form_Spinner from '@sencha/ext-runtime-base/dist/./Ext/form/Spinner.js';
import Ext_form_Spinner from './Ext/form/Spinner.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCSpinnerfield =
/*#__PURE__*/
function (_Ext_form_Spinner) {
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
window.customElements.define('ext-spinnerfield', HTMLParsedElement.withParsedCallback(EWCSpinnerfield));