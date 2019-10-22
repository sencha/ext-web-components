import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Clear from './Ext/field/trigger/Clear.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCleartrigger =
/*#__PURE__*/
function (_Ext_field_trigger_Cl) {
  _inheritsLoose(ExtCleartrigger, _Ext_field_trigger_Cl);

  function ExtCleartrigger() {
    var _this;

    _this = _Ext_field_trigger_Cl.call(this, [], []) || this;
    _this.xtype = 'cleartrigger';
    return _this;
  }

  return ExtCleartrigger;
}(Ext_field_trigger_Clear);

export { ExtCleartrigger as default };
window.customElements.define('ext-cleartrigger', HTMLParsedElement.withParsedCallback(ExtCleartrigger));