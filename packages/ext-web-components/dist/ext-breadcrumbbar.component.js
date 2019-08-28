import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_BreadcrumbBar_Component from './Ext/BreadcrumbBar';
export var ExtBreadcrumbbarComponent =
/*#__PURE__*/
function (_Ext_BreadcrumbBar_Co) {
  _inheritsLoose(ExtBreadcrumbbarComponent, _Ext_BreadcrumbBar_Co);

  function ExtBreadcrumbbarComponent() {
    return _Ext_BreadcrumbBar_Co.call(this, '', '', {}, '') || this;
  }

  return ExtBreadcrumbbarComponent;
}(Ext_BreadcrumbBar_Component);

(function () {
  Ext.onReady(function () {
    window.customElements.define('ext-breadcrumbbar', ExtBreadcrumbbarComponent);
  });
})();