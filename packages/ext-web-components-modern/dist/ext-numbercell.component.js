import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_cell_Number from './Ext/grid/cell/Number.js';
import ElementParser from './runtime/ElementParser.js';

var EWCNumbercell = /*#__PURE__*/function (_Ext_grid_cell_Number) {
  _inheritsLoose(EWCNumbercell, _Ext_grid_cell_Number);

  var _super = _createSuper(EWCNumbercell);

  function EWCNumbercell() {
    var _this;

    _this = _Ext_grid_cell_Number.call(this, [], []) || this;
    _this.xtype = 'numbercell';
    return _this;
  }

  return EWCNumbercell;
}(Ext_grid_cell_Number);

export { EWCNumbercell as default };

try {
  window.customElements.define('ext-numbercell', ElementParser.withParsedCallback(EWCNumbercell));
} catch (e) {
  window.customElements.define('ext-numbercell', EWCNumbercell);
}