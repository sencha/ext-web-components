import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_RowNumberer from './Ext/grid/RowNumberer.js';
import ElementParser from './runtime/ElementParser.js';

var EWCRownumberer = /*#__PURE__*/function (_Ext_grid_RowNumberer) {
  _inheritsLoose(EWCRownumberer, _Ext_grid_RowNumberer);

  var _super = _createSuper(EWCRownumberer);

  function EWCRownumberer() {
    var _this;

    _this = _Ext_grid_RowNumberer.call(this, [], []) || this;
    _this.xtype = 'rownumberer';
    return _this;
  }

  return EWCRownumberer;
}(Ext_grid_RowNumberer);

export { EWCRownumberer as default };

try {
  window.customElements.define('ext-rownumberer', ElementParser.withParsedCallback(EWCRownumberer));
} catch (e) {
  window.customElements.define('ext-rownumberer', EWCRownumberer);
}