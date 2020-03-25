import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_toolbar_Breadcrumb from './Ext/toolbar/Breadcrumb.js';
import ElementParser from './runtime/ElementParser.js';

var EWCBreadcrumb = /*#__PURE__*/function (_Ext_toolbar_Breadcru) {
  _inheritsLoose(EWCBreadcrumb, _Ext_toolbar_Breadcru);

  var _super = _createSuper(EWCBreadcrumb);

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
  window.customElements.define('ext-breadcrumb', ElementParser.withParsedCallback(EWCBreadcrumb));
} catch (e) {
  window.customElements.define('ext-breadcrumb', EWCBreadcrumb);
}