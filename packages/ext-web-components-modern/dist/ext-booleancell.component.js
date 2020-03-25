import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_cell_Boolean from './Ext/grid/cell/Boolean.js';
import ElementParser from './runtime/ElementParser.js';

var EWCBooleancell = /*#__PURE__*/function (_Ext_grid_cell_Boolea) {
  _inheritsLoose(EWCBooleancell, _Ext_grid_cell_Boolea);

  var _super = _createSuper(EWCBooleancell);

  function EWCBooleancell() {
    var _this;

    _this = _Ext_grid_cell_Boolea.call(this, [], []) || this;
    _this.xtype = 'booleancell';
    return _this;
  }

  return EWCBooleancell;
}(Ext_grid_cell_Boolean);

export { EWCBooleancell as default };

try {
  window.customElements.define('ext-booleancell', ElementParser.withParsedCallback(EWCBooleancell));
} catch (e) {
  window.customElements.define('ext-booleancell', EWCBooleancell);
}