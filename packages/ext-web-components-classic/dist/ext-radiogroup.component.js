import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_RadioGroup from './Ext/form/RadioGroup.js';
import ElementParser from './common/ElementParser.js';

var EWCRadiogroup = /*#__PURE__*/function (_Ext_form_RadioGroup) {
  _inheritsLoose(EWCRadiogroup, _Ext_form_RadioGroup);

  function EWCRadiogroup() {
    var _this;

    _this = _Ext_form_RadioGroup.call(this, [], []) || this;
    _this.xtype = 'radiogroup';
    return _this;
  }

  return EWCRadiogroup;
}(Ext_form_RadioGroup);

export { EWCRadiogroup as default };

try {
  if (window.customElements.get('ext-radiogroup') == undefined) {
    window.customElements.define('ext-radiogroup', ElementParser.withParsedCallback(EWCRadiogroup));
  }
} catch (e) {
  if (window.customElements.get('ext-radiogroup') == undefined) {
    window.customElements.define('ext-radiogroup', EWCRadiogroup);
  }
}