import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Checkbox from './Ext/form/Checkbox.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCheckbox =
/*#__PURE__*/
function (_Ext_form_Checkbox) {
  _inheritsLoose(ExtCheckbox, _Ext_form_Checkbox);

  function ExtCheckbox() {
    var _this;

    _this = _Ext_form_Checkbox.call(this, [], []) || this;
    _this.xtype = 'checkbox';
    return _this;
  }

  return ExtCheckbox;
}(Ext_form_Checkbox);

export { ExtCheckbox as default };
window.customElements.define('ext-checkbox', HTMLParsedElement.withParsedCallback(ExtCheckbox));