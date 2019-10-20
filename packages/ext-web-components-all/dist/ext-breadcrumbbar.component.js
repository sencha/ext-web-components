import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_BreadcrumbBar from './Ext/BreadcrumbBar.js';
import HTMLParsedElement from './HTMLParsedElement.js'; //import reactify from './reactify.js';

var ExtBreadcrumbbar =
/*#__PURE__*/
function (_Ext_BreadcrumbBar) {
  _inheritsLoose(ExtBreadcrumbbar, _Ext_BreadcrumbBar);

  function ExtBreadcrumbbar() {
    var _this;

    _this = _Ext_BreadcrumbBar.call(this, [], []) || this;
    _this.xtype = 'breadcrumbbar';
    return _this;
  }

  return ExtBreadcrumbbar;
}(Ext_BreadcrumbBar); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-breadcrumbbar', ExtBreadcrumbbar);
//    });
//})();
//const  = HTMLParsedElement;


export { ExtBreadcrumbbar as default };
window.customElements.define('ext-breadcrumbbar', HTMLParsedElement.withParsedCallback(ExtBreadcrumbbar)); //export default reactify(ExtBreadcrumbbar);