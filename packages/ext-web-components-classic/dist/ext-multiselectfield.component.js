import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_Multiselect from './Ext/ux/Multiselect.js';
import ElementParser from './ElementParser.js';

var EWCMultiselectfield =
/*#__PURE__*/
function (_Ext_ux_Multiselect) {
  _inheritsLoose(EWCMultiselectfield, _Ext_ux_Multiselect);

  function EWCMultiselectfield() {
    var _this;

    _this = _Ext_ux_Multiselect.call(this, [], []) || this;
    _this.xtype = 'multiselectfield';
    return _this;
  }

  return EWCMultiselectfield;
}(Ext_ux_Multiselect);

export { EWCMultiselectfield as default };

try {
  window.customElements.define('ext-multiselectfield', ElementParser.withParsedCallback(EWCMultiselectfield));
} catch (e) {
  console.log(e);
  window.customElements.define('ext-multiselectfield', EWCMultiselectfield);
}