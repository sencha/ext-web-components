import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_form_Search from '@sencha/ext-runtime-base/dist/./Ext/form/Search.js';
import Ext_form_Search from './Ext/form/Search.js';
import HTMLParsedElement from './HTMLParsedElement.js';

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
window.customElements.define('ext-searchfield', HTMLParsedElement.withParsedCallback(EWCSearchfield));