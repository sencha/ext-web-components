import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Number from './Ext/form/Number.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtNumberfield =
/*#__PURE__*/
function (_Ext_form_Number) {
  _inheritsLoose(ExtNumberfield, _Ext_form_Number);

  function ExtNumberfield() {
    var _this;

    _this = _Ext_form_Number.call(this, [], []) || this;
    _this.xtype = 'numberfield';
    return _this;
  }

  return ExtNumberfield;
}(Ext_form_Number);

export { ExtNumberfield as default };
window.customElements.define('ext-numberfield', HTMLParsedElement.withParsedCallback(ExtNumberfield));