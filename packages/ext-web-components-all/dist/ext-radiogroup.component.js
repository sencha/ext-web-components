import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_RadioGroup from './Ext/field/RadioGroup.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtRadiogroup =
/*#__PURE__*/
function (_Ext_field_RadioGroup) {
  _inheritsLoose(ExtRadiogroup, _Ext_field_RadioGroup);

  function ExtRadiogroup() {
    var _this;

    _this = _Ext_field_RadioGroup.call(this, [], []) || this;
    _this.xtype = 'radiogroup';
    return _this;
  }

  return ExtRadiogroup;
}(Ext_field_RadioGroup);

export { ExtRadiogroup as default };
window.customElements.define('ext-radiogroup', HTMLParsedElement.withParsedCallback(ExtRadiogroup));