import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_BreadcrumbBar_Component from './Ext/BreadcrumbBar';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtBreadcrumbbarComponent =
/*#__PURE__*/
function (_Ext_BreadcrumbBar_Co) {
  _inheritsLoose(ExtBreadcrumbbarComponent, _Ext_BreadcrumbBar_Co);

  function ExtBreadcrumbbarComponent() {
    var _this;

    _this = _Ext_BreadcrumbBar_Co.call(this, {}, [], []) || this;
    _this.xtype = 'breadcrumbbar';
    return _this;
  }

  return ExtBreadcrumbbarComponent;
}(Ext_BreadcrumbBar_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-breadcrumbbar', ExtBreadcrumbbarComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-breadcrumbbar', HTMLParsedElement.withParsedCallback(ExtBreadcrumbbarComponent));