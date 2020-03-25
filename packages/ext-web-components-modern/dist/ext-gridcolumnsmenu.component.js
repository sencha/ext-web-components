import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_menu_Columns from './Ext/grid/menu/Columns.js';
import ElementParser from './runtime/ElementParser.js';

var EWCGridcolumnsmenu = /*#__PURE__*/function (_Ext_grid_menu_Column) {
  _inheritsLoose(EWCGridcolumnsmenu, _Ext_grid_menu_Column);

  var _super = _createSuper(EWCGridcolumnsmenu);

  function EWCGridcolumnsmenu() {
    var _this;

    _this = _Ext_grid_menu_Column.call(this, [], []) || this;
    _this.xtype = 'gridcolumnsmenu';
    return _this;
  }

  return EWCGridcolumnsmenu;
}(Ext_grid_menu_Columns);

export { EWCGridcolumnsmenu as default };

try {
  window.customElements.define('ext-gridcolumnsmenu', ElementParser.withParsedCallback(EWCGridcolumnsmenu));
} catch (e) {
  window.customElements.define('ext-gridcolumnsmenu', EWCGridcolumnsmenu);
}