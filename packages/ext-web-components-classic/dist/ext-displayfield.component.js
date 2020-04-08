import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Display from './Ext/form/Display.js';
import ElementParser from './common/ElementParser.js';

var EWCDisplayfield = /*#__PURE__*/function (_Ext_form_Display) {
  _inheritsLoose(EWCDisplayfield, _Ext_form_Display);

  function EWCDisplayfield() {
    var _this;

    _this = _Ext_form_Display.call(this, [], []) || this;
    _this.xtype = 'displayfield';
    return _this;
  }

  return EWCDisplayfield;
}(Ext_form_Display);

export { EWCDisplayfield as default };

try {
  if (window.customElements.get('ext-displayfield') == undefined) {
    window.customElements.define('ext-displayfield', ElementParser.withParsedCallback(EWCDisplayfield));
  }
} catch (e) {
  if (window.customElements.get('ext-displayfield') == undefined) {
    window.customElements.define('ext-displayfield', EWCDisplayfield);
  }
}