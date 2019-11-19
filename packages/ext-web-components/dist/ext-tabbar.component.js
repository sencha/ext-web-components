import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_TabBar from '@sencha/ext-runtime-base/dist/./Ext/TabBar.js';
import Ext_TabBar from './Ext/TabBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCTabbar =
/*#__PURE__*/
function (_Ext_TabBar) {
  _inheritsLoose(EWCTabbar, _Ext_TabBar);

  function EWCTabbar() {
    var _this;

    _this = _Ext_TabBar.call(this, [], []) || this;
    _this.xtype = 'tabbar';
    return _this;
  }

  return EWCTabbar;
}(Ext_TabBar);

export { EWCTabbar as default };
window.customElements.define('ext-tabbar', HTMLParsedElement.withParsedCallback(EWCTabbar));