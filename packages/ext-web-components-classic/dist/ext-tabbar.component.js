import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_tab_Bar from './Ext/tab/Bar.js';
import ElementParser from './ElementParser.js';

var EWCTabbar =
/*#__PURE__*/
function (_Ext_tab_Bar) {
  _inheritsLoose(EWCTabbar, _Ext_tab_Bar);

  function EWCTabbar() {
    var _this;

    _this = _Ext_tab_Bar.call(this, [], []) || this;
    _this.xtype = 'tabbar';
    return _this;
  }

  return EWCTabbar;
}(Ext_tab_Bar);

export { EWCTabbar as default };

try {
  window.customElements.define('ext-tabbar', ElementParser.withParsedCallback(EWCTabbar));
} catch (e) {
  window.customElements.define('ext-tabbar', EWCTabbar);
}