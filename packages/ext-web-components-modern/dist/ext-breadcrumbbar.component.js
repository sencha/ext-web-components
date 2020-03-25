import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_BreadcrumbBar from './Ext/BreadcrumbBar.js';
import ElementParser from './runtime/ElementParser.js';

var EWCBreadcrumbbar = /*#__PURE__*/function (_Ext_BreadcrumbBar) {
  _inheritsLoose(EWCBreadcrumbbar, _Ext_BreadcrumbBar);

  var _super = _createSuper(EWCBreadcrumbbar);

  function EWCBreadcrumbbar() {
    var _this;

    _this = _Ext_BreadcrumbBar.call(this, [], []) || this;
    _this.xtype = 'breadcrumbbar';
    return _this;
  }

  return EWCBreadcrumbbar;
}(Ext_BreadcrumbBar);

export { EWCBreadcrumbbar as default };

try {
  window.customElements.define('ext-breadcrumbbar', ElementParser.withParsedCallback(EWCBreadcrumbbar));
} catch (e) {
  window.customElements.define('ext-breadcrumbbar', EWCBreadcrumbbar);
}