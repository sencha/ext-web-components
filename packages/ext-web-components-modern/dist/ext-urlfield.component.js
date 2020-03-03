import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Url from './Ext/form/Url.js';
import ElementParser from './runtime/ElementParser.js';

var EWCUrlfield = /*#__PURE__*/function (_Ext_form_Url) {
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

try {
  window.customElements.define('ext-urlfield', ElementParser.withParsedCallback(EWCUrlfield));
} catch (e) {
  window.customElements.define('ext-urlfield', EWCUrlfield);
}