import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_NavigationView_Component from './Ext/NavigationView';
export var ExtNavigationviewComponent =
/*#__PURE__*/
function (_Ext_NavigationView_C) {
  _inheritsLoose(ExtNavigationviewComponent, _Ext_NavigationView_C);

  function ExtNavigationviewComponent() {
    return _Ext_NavigationView_C.call(this, '', '', {}, '') || this;
  }

  return ExtNavigationviewComponent;
}(Ext_NavigationView_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-navigationview', ExtNavigationviewComponent);
  });
})();