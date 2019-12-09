import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_form_Toggle from '@sencha/ext-runtime-base/dist/./Ext/form/Toggle.js';
import Ext_form_Toggle from './Ext/form/Toggle.js';
import ElementParser from './ElementParser.js';

var EWCTogglefield =
/*#__PURE__*/
function (_Ext_form_Toggle) {
  _inheritsLoose(EWCTogglefield, _Ext_form_Toggle);

  function EWCTogglefield() {
    var _this;

    _this = _Ext_form_Toggle.call(this, [], []) || this;
    _this.xtype = 'togglefield';
    return _this;
  }

  return EWCTogglefield;
}(Ext_form_Toggle);

export { EWCTogglefield as default };
window.customElements.define('ext-togglefield', ElementParser.withParsedCallback(EWCTogglefield));