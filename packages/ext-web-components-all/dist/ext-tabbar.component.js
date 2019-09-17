import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_TabBar_Component from './Ext/TabBar';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTabbarComponent =
/*#__PURE__*/
function (_Ext_TabBar_Component) {
  _inheritsLoose(ExtTabbarComponent, _Ext_TabBar_Component);

  function ExtTabbarComponent() {
    var _this;

    _this = _Ext_TabBar_Component.call(this) || this;
    _this.xtype = 'tabbar';
    return _this;
  }

  return ExtTabbarComponent;
}(Ext_TabBar_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tabbar', ExtTabbarComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-tabbar', HTMLParsedElement.withParsedCallback(ExtTabbarComponent));