import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_ColorPicker from './Ext/menu/ColorPicker.js';
import ElementParser from './ElementParser.js';

var EWCColormenu =
/*#__PURE__*/
function (_Ext_menu_ColorPicker) {
  _inheritsLoose(EWCColormenu, _Ext_menu_ColorPicker);

  function EWCColormenu() {
    var _this;

    _this = _Ext_menu_ColorPicker.call(this, [], []) || this;
    _this.xtype = 'colormenu';
    return _this;
  }

  return EWCColormenu;
}(Ext_menu_ColorPicker);

export { EWCColormenu as default };

try {
  window.customElements.define('ext-colormenu', ElementParser.withParsedCallback(EWCColormenu));
} catch (e) {
  console.log(e);
  window.customElements.define('ext-colormenu', EWCColormenu);
}