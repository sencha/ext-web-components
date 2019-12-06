import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_field_trigger_Date from '@sencha/ext-runtime-base/dist/./Ext/field/trigger/Date.js';
import Ext_field_trigger_Date from './Ext/field/trigger/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCDatetrigger =
/*#__PURE__*/
function (_Ext_field_trigger_Da) {
  _inheritsLoose(EWCDatetrigger, _Ext_field_trigger_Da);

  function EWCDatetrigger() {
    var _this;

    _this = _Ext_field_trigger_Da.call(this, [], []) || this;
    _this.xtype = 'datetrigger';
    return _this;
  }

  return EWCDatetrigger;
}(Ext_field_trigger_Date);

export { EWCDatetrigger as default };
window.customElements.define('ext-datetrigger', HTMLParsedElement.withParsedCallback(EWCDatetrigger));