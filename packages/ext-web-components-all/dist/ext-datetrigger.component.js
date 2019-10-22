import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Date from './Ext/field/trigger/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtDatetrigger =
/*#__PURE__*/
function (_Ext_field_trigger_Da) {
  _inheritsLoose(ExtDatetrigger, _Ext_field_trigger_Da);

  function ExtDatetrigger() {
    var _this;

    _this = _Ext_field_trigger_Da.call(this, [], []) || this;
    _this.xtype = 'datetrigger';
    return _this;
  }

  return ExtDatetrigger;
}(Ext_field_trigger_Date);

export { ExtDatetrigger as default };
window.customElements.define('ext-datetrigger', HTMLParsedElement.withParsedCallback(ExtDatetrigger));