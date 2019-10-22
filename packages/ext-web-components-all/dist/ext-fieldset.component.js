import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_FieldSet from './Ext/form/FieldSet.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtFieldset =
/*#__PURE__*/
function (_Ext_form_FieldSet) {
  _inheritsLoose(ExtFieldset, _Ext_form_FieldSet);

  function ExtFieldset() {
    var _this;

    _this = _Ext_form_FieldSet.call(this, [], []) || this;
    _this.xtype = 'fieldset';
    return _this;
  }

  return ExtFieldset;
}(Ext_form_FieldSet);

export { ExtFieldset as default };
window.customElements.define('ext-fieldset', HTMLParsedElement.withParsedCallback(ExtFieldset));