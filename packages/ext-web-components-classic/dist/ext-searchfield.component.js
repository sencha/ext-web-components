import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_form_SearchField from './Ext/ux/form/SearchField.js';
import ElementParser from './runtime/ElementParser.js';

var EWCSearchfield =
/*#__PURE__*/
function (_Ext_ux_form_SearchFi) {
  _inheritsLoose(EWCSearchfield, _Ext_ux_form_SearchFi);

  function EWCSearchfield() {
    var _this;

    _this = _Ext_ux_form_SearchFi.call(this, [], []) || this;
    _this.xtype = 'searchfield';
    return _this;
  }

  return EWCSearchfield;
}(Ext_ux_form_SearchField);

export { EWCSearchfield as default };

try {
  window.customElements.define('ext-searchfield', ElementParser.withParsedCallback(EWCSearchfield));
} catch (e) {
  window.customElements.define('ext-searchfield', EWCSearchfield);
}