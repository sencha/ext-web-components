import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_Field from './Ext/ux/colorpick/Field.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtColorfield =
/*#__PURE__*/
function (_Ext_ux_colorpick_Fie) {
  _inheritsLoose(ExtColorfield, _Ext_ux_colorpick_Fie);

  function ExtColorfield() {
    var _this;

    _this = _Ext_ux_colorpick_Fie.call(this, [], []) || this;
    _this.xtype = 'colorfield';
    return _this;
  }

  return ExtColorfield;
}(Ext_ux_colorpick_Field);

export { ExtColorfield as default };
window.customElements.define('ext-colorfield', HTMLParsedElement.withParsedCallback(ExtColorfield));