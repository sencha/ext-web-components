import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_cell_Cell from './Ext/grid/cell/Cell.js';
import ElementParser from './common/ElementParser.js';

var EWCGridcell = /*#__PURE__*/function (_Ext_grid_cell_Cell) {
  _inheritsLoose(EWCGridcell, _Ext_grid_cell_Cell);

  var _super = _createSuper(EWCGridcell);

  function EWCGridcell() {
    var _this;

    _this = _Ext_grid_cell_Cell.call(this, [], []) || this;
    _this.xtype = 'gridcell';
    return _this;
  }

  return EWCGridcell;
}(Ext_grid_cell_Cell);

export { EWCGridcell as default };

try {
  if (window.customElements.get('ext-gridcell') == undefined) {
    window.customElements.define('ext-gridcell', ElementParser.withParsedCallback(EWCGridcell));
  }
} catch (e) {
  if (window.customElements.get('ext-gridcell') == undefined) {
    window.customElements.define('ext-gridcell', EWCGridcell);
  }
}