import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Expand from './Ext/field/trigger/Expand.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtExpandtrigger =
/*#__PURE__*/
function (_Ext_field_trigger_Ex) {
  _inheritsLoose(ExtExpandtrigger, _Ext_field_trigger_Ex);

  function ExtExpandtrigger() {
    var _this;

    _this = _Ext_field_trigger_Ex.call(this, [], []) || this;
    _this.xtype = 'expandtrigger';
    return _this;
  }

  return ExtExpandtrigger;
}(Ext_field_trigger_Expand);

export { ExtExpandtrigger as default };
window.customElements.define('ext-expandtrigger', HTMLParsedElement.withParsedCallback(ExtExpandtrigger));