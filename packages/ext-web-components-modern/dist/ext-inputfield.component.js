import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_field_Input from '@sencha/ext-runtime-base/dist/./Ext/field/Input.js';
import Ext_field_Input from './Ext/field/Input.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCInputfield =
/*#__PURE__*/
function (_Ext_field_Input) {
  _inheritsLoose(EWCInputfield, _Ext_field_Input);

  function EWCInputfield() {
    var _this;

    _this = _Ext_field_Input.call(this, [], []) || this;
    _this.xtype = 'inputfield';
    return _this;
  }

  return EWCInputfield;
}(Ext_field_Input);

export { EWCInputfield as default };
window.customElements.define('ext-inputfield', HTMLParsedElement.withParsedCallback(EWCInputfield));