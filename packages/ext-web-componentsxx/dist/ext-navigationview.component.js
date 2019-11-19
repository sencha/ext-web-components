import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_NavigationView from './Ext/NavigationView';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtNavigationviewComponent =
/*#__PURE__*/
function (_Ext_NavigationView) {
  _inheritsLoose(ExtNavigationviewComponent, _Ext_NavigationView);

  function ExtNavigationviewComponent() {
    var _this;

    _this = _Ext_NavigationView.call(this, [], []) || this;
    _this.xtype = 'navigationview';
    return _this;
  }

  return ExtNavigationviewComponent;
}(Ext_NavigationView); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-navigationview', ExtNavigationviewComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-navigationview', HTMLParsedElement.withParsedCallback(ExtNavigationviewComponent));