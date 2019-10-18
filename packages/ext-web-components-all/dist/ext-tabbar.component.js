import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_TabBar from './Ext/TabBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtTabbarComponent =
/*#__PURE__*/
function (_Ext_TabBar) {
  _inheritsLoose(ExtTabbarComponent, _Ext_TabBar);

  function ExtTabbarComponent() {
    var _this;

    _this = _Ext_TabBar.call(this, [], []) || this;
    _this.xtype = 'tabbar';
    return _this;
  }

  return ExtTabbarComponent;
}(Ext_TabBar); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tabbar', ExtTabbarComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-tabbar', HTMLParsedElement.withParsedCallback(ExtTabbarComponent));