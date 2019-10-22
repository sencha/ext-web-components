import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Search from './Ext/form/Search.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtSearchfield =
/*#__PURE__*/
function (_Ext_form_Search) {
  _inheritsLoose(ExtSearchfield, _Ext_form_Search);

  function ExtSearchfield() {
    var _this;

    _this = _Ext_form_Search.call(this, [], []) || this;
    _this.xtype = 'searchfield';
    return _this;
  }

  return ExtSearchfield;
}(Ext_form_Search);

export { ExtSearchfield as default };
window.customElements.define('ext-searchfield', HTMLParsedElement.withParsedCallback(ExtSearchfield));