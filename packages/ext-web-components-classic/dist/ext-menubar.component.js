import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_Bar from './Ext/menu/Bar.js';
import ElementParser from './ElementParser.js';

var EWCMenubar =
/*#__PURE__*/
function (_Ext_menu_Bar) {
  _inheritsLoose(EWCMenubar, _Ext_menu_Bar);

  function EWCMenubar() {
    var _this;

    _this = _Ext_menu_Bar.call(this, [], []) || this;
    _this.xtype = 'menubar';
    return _this;
  }

  return EWCMenubar;
}(Ext_menu_Bar);

export { EWCMenubar as default };
window.customElements.define('ext-menubar', ElementParser.withParsedCallback(EWCMenubar));