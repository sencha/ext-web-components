import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_BreadcrumbBar from './Ext/BreadcrumbBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtBreadcrumbbarComponent =
/*#__PURE__*/
function (_Ext_BreadcrumbBar) {
  _inheritsLoose(ExtBreadcrumbbarComponent, _Ext_BreadcrumbBar);

  function ExtBreadcrumbbarComponent() {
    var _this;

    _this = _Ext_BreadcrumbBar.call(this, [], []) || this;
    _this.xtype = 'breadcrumbbar';
    return _this;
  }

  return ExtBreadcrumbbarComponent;
}(Ext_BreadcrumbBar); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-breadcrumbbar', ExtBreadcrumbbarComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-breadcrumbbar', HTMLParsedElement.withParsedCallback(ExtBreadcrumbbarComponent));