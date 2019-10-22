import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_Button from './Ext/ux/colorpick/Button.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtColorbutton =
/*#__PURE__*/
function (_Ext_ux_colorpick_But) {
  _inheritsLoose(ExtColorbutton, _Ext_ux_colorpick_But);

  function ExtColorbutton() {
    var _this;

    _this = _Ext_ux_colorpick_But.call(this, [], []) || this;
    _this.xtype = 'colorbutton';
    return _this;
  }

  return ExtColorbutton;
}(Ext_ux_colorpick_Button);

export { ExtColorbutton as default };
window.customElements.define('ext-colorbutton', HTMLParsedElement.withParsedCallback(ExtColorbutton));