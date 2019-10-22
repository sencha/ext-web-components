import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Select from './Ext/form/Select.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtSelectfield =
/*#__PURE__*/
function (_Ext_form_Select) {
  _inheritsLoose(ExtSelectfield, _Ext_form_Select);

  function ExtSelectfield() {
    var _this;

    _this = _Ext_form_Select.call(this, [], []) || this;
    _this.xtype = 'selectfield';
    return _this;
  }

  return ExtSelectfield;
}(Ext_form_Select);

export { ExtSelectfield as default };
window.customElements.define('ext-selectfield', HTMLParsedElement.withParsedCallback(ExtSelectfield));