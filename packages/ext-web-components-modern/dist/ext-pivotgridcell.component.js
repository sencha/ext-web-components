import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_pivot_cell_Cell from './Ext/pivot/cell/Cell.js';
import ElementParser from './common/ElementParser.js';

var EWCPivotgridcell = /*#__PURE__*/function (_Ext_pivot_cell_Cell) {
  _inheritsLoose(EWCPivotgridcell, _Ext_pivot_cell_Cell);

  var _super = _createSuper(EWCPivotgridcell);

  function EWCPivotgridcell() {
    var _this;

    _this = _Ext_pivot_cell_Cell.call(this, [], []) || this;
    _this.xtype = 'pivotgridcell';
    return _this;
  }

  return EWCPivotgridcell;
}(Ext_pivot_cell_Cell);

export { EWCPivotgridcell as default };

try {
  if (window.customElements.get('ext-pivotgridcell') == undefined) {
    window.customElements.define('ext-pivotgridcell', ElementParser.withParsedCallback(EWCPivotgridcell));
  }
} catch (e) {
  if (window.customElements.get('ext-pivotgridcell') == undefined) {
    window.customElements.define('ext-pivotgridcell', EWCPivotgridcell);
  }
}