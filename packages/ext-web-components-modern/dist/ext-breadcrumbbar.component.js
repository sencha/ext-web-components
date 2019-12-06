import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_BreadcrumbBar from '@sencha/ext-runtime-base/dist/./Ext/BreadcrumbBar.js';
import Ext_BreadcrumbBar from './Ext/BreadcrumbBar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCBreadcrumbbar =
/*#__PURE__*/
function (_Ext_BreadcrumbBar) {
  _inheritsLoose(EWCBreadcrumbbar, _Ext_BreadcrumbBar);

  function EWCBreadcrumbbar() {
    var _this;

    _this = _Ext_BreadcrumbBar.call(this, [], []) || this;
    _this.xtype = 'breadcrumbbar';
    return _this;
  }

  return EWCBreadcrumbbar;
}(Ext_BreadcrumbBar);

export { EWCBreadcrumbbar as default };
window.customElements.define('ext-breadcrumbbar', HTMLParsedElement.withParsedCallback(EWCBreadcrumbbar));