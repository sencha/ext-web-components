import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Input from './Ext/field/Input.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtInputfield =
/*#__PURE__*/
function (_Ext_field_Input) {
  _inheritsLoose(ExtInputfield, _Ext_field_Input);

  function ExtInputfield() {
    var _this;

    _this = _Ext_field_Input.call(this, [], []) || this;
    _this.xtype = 'inputfield';
    return _this;
  }

  return ExtInputfield;
}(Ext_field_Input);

export { ExtInputfield as default };
window.customElements.define('ext-inputfield', HTMLParsedElement.withParsedCallback(ExtInputfield));