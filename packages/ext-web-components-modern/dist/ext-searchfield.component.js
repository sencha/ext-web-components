import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Search from './Ext/form/Search.js';
import ElementParser from './runtime/ElementParser.js';

var EWCSearchfield =
/*#__PURE__*/
function (_Ext_form_Search) {
  _inheritsLoose(EWCSearchfield, _Ext_form_Search);

  function EWCSearchfield() {
    var _this;

    _this = _Ext_form_Search.call(this, [], []) || this;
    _this.xtype = 'searchfield';
    return _this;
  }

  return EWCSearchfield;
}(Ext_form_Search);

export { EWCSearchfield as default };

try {
  window.customElements.define('ext-searchfield', ElementParser.withParsedCallback(EWCSearchfield));
} catch (e) {
  window.customElements.define('ext-searchfield', EWCSearchfield);
}