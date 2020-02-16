import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_RadioGroup from './Ext/field/RadioGroup.js';
import ElementParser from './runtime/ElementParser.js';

var EWCRadiogroup =
/*#__PURE__*/
function (_Ext_field_RadioGroup) {
  _inheritsLoose(EWCRadiogroup, _Ext_field_RadioGroup);

  function EWCRadiogroup() {
    var _this;

    _this = _Ext_field_RadioGroup.call(this, [], []) || this;
    _this.xtype = 'radiogroup';
    return _this;
  }

  return EWCRadiogroup;
}(Ext_field_RadioGroup);

export { EWCRadiogroup as default };

try {
  window.customElements.define('ext-radiogroup', ElementParser.withParsedCallback(EWCRadiogroup));
} catch (e) {
  window.customElements.define('ext-radiogroup', EWCRadiogroup);
}