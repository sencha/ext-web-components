import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_form_Url from '@sencha/ext-runtime-base/dist/./Ext/form/Url.js';
import Ext_form_Url from './Ext/form/Url.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCUrlfield =
/*#__PURE__*/
function (_Ext_form_Url) {
  _inheritsLoose(EWCUrlfield, _Ext_form_Url);

  function EWCUrlfield() {
    var _this;

    _this = _Ext_form_Url.call(this, [], []) || this;
    _this.xtype = 'urlfield';
    return _this;
  }

  return EWCUrlfield;
}(Ext_form_Url);

export { EWCUrlfield as default };
window.customElements.define('ext-urlfield', HTMLParsedElement.withParsedCallback(EWCUrlfield));