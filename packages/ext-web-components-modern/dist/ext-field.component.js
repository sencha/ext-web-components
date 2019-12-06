import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_form_Field from '@sencha/ext-runtime-base/dist/./Ext/form/Field.js';
import Ext_form_Field from './Ext/form/Field.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCField =
/*#__PURE__*/
function (_Ext_form_Field) {
  _inheritsLoose(EWCField, _Ext_form_Field);

  function EWCField() {
    var _this;

    _this = _Ext_form_Field.call(this, [], []) || this;
    _this.xtype = 'field';
    return _this;
  }

  return EWCField;
}(Ext_form_Field);

export { EWCField as default };
window.customElements.define('ext-field', HTMLParsedElement.withParsedCallback(EWCField));