import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Tab from './Ext/Tab';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTabComponent =
/*#__PURE__*/
function (_Ext_Tab) {
  _inheritsLoose(ExtTabComponent, _Ext_Tab);

  function ExtTabComponent() {
    var _this;

    _this = _Ext_Tab.call(this, [], []) || this;
    _this.xtype = 'tab';
    return _this;
  }

  return ExtTabComponent;
}(Ext_Tab); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-tab', ExtTabComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-tab', HTMLParsedElement.withParsedCallback(ExtTabComponent));