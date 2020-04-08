import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_toolbar_Breadcrumb from './Ext/toolbar/Breadcrumb.js';
import ElementParser from './common/ElementParser.js';

var EWCBreadcrumb = /*#__PURE__*/function (_Ext_toolbar_Breadcru) {
  _inheritsLoose(EWCBreadcrumb, _Ext_toolbar_Breadcru);

  function EWCBreadcrumb() {
    var _this;

    _this = _Ext_toolbar_Breadcru.call(this, [], []) || this;
    _this.xtype = 'breadcrumb';
    return _this;
  }

  return EWCBreadcrumb;
}(Ext_toolbar_Breadcrumb);

export { EWCBreadcrumb as default };

try {
  if (window.customElements.get('ext-breadcrumb') == undefined) {
    window.customElements.define('ext-breadcrumb', ElementParser.withParsedCallback(EWCBreadcrumb));
  }
} catch (e) {
  if (window.customElements.get('ext-breadcrumb') == undefined) {
    window.customElements.define('ext-breadcrumb', EWCBreadcrumb);
  }
}