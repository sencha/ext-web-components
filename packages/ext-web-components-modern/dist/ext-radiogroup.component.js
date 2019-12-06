import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_field_RadioGroup from '@sencha/ext-runtime-base/dist/./Ext/field/RadioGroup.js';
import Ext_field_RadioGroup from './Ext/field/RadioGroup.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-radiogroup', HTMLParsedElement.withParsedCallback(EWCRadiogroup));