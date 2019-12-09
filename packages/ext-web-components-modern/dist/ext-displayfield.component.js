import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_form_Display from '@sencha/ext-runtime-base/dist/./Ext/form/Display.js';
import Ext_form_Display from './Ext/form/Display.js';
import ElementParser from './ElementParser.js';

var EWCDisplayfield =
/*#__PURE__*/
function (_Ext_form_Display) {
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
window.customElements.define('ext-displayfield', ElementParser.withParsedCallback(EWCDisplayfield));