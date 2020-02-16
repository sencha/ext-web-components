import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_Button from './Ext/ux/colorpick/Button.js';
import ElementParser from './runtime/ElementParser.js';

var EWCColorbutton =
/*#__PURE__*/
function (_Ext_ux_colorpick_But) {
  _inheritsLoose(EWCColorbutton, _Ext_ux_colorpick_But);

  function EWCColorbutton() {
    var _this;

    _this = _Ext_ux_colorpick_But.call(this, [], []) || this;
    _this.xtype = 'colorbutton';
    return _this;
  }

  return EWCColorbutton;
}(Ext_ux_colorpick_Button);

export { EWCColorbutton as default };

try {
  window.customElements.define('ext-colorbutton', ElementParser.withParsedCallback(EWCColorbutton));
} catch (e) {
  window.customElements.define('ext-colorbutton', EWCColorbutton);
}