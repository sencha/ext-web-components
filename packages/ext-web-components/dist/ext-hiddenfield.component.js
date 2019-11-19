import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_form_Hidden from '@sencha/ext-runtime-base/dist/./Ext/form/Hidden.js';
import Ext_form_Hidden from './Ext/form/Hidden.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCHiddenfield =
/*#__PURE__*/
function (_Ext_form_Hidden) {
  _inheritsLoose(EWCHiddenfield, _Ext_form_Hidden);

  function EWCHiddenfield() {
    var _this;

    _this = _Ext_form_Hidden.call(this, [], []) || this;
    _this.xtype = 'hiddenfield';
    return _this;
  }

  return EWCHiddenfield;
}(Ext_form_Hidden);

export { EWCHiddenfield as default };
window.customElements.define('ext-hiddenfield', HTMLParsedElement.withParsedCallback(EWCHiddenfield));