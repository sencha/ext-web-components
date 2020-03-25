import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_PagingToolbar from './Ext/grid/PagingToolbar.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPagingtoolbar = /*#__PURE__*/function (_Ext_grid_PagingToolb) {
  _inheritsLoose(EWCPagingtoolbar, _Ext_grid_PagingToolb);

  var _super = _createSuper(EWCPagingtoolbar);

  function EWCPagingtoolbar() {
    var _this;

    _this = _Ext_grid_PagingToolb.call(this, [], []) || this;
    _this.xtype = 'pagingtoolbar';
    return _this;
  }

  return EWCPagingtoolbar;
}(Ext_grid_PagingToolbar);

export { EWCPagingtoolbar as default };

try {
  window.customElements.define('ext-pagingtoolbar', ElementParser.withParsedCallback(EWCPagingtoolbar));
} catch (e) {
  window.customElements.define('ext-pagingtoolbar', EWCPagingtoolbar);
}