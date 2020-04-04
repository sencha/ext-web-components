import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_cell_RowNumberer from './Ext/grid/cell/RowNumberer.js';
import ElementParser from './common/ElementParser.js';

var EWCRownumberercell = /*#__PURE__*/function (_Ext_grid_cell_RowNum) {
  _inheritsLoose(EWCRownumberercell, _Ext_grid_cell_RowNum);

  var _super = _createSuper(EWCRownumberercell);

  function EWCRownumberercell() {
    var _this;

    _this = _Ext_grid_cell_RowNum.call(this, [], []) || this;
    _this.xtype = 'rownumberercell';
    return _this;
  }

  return EWCRownumberercell;
}(Ext_grid_cell_RowNumberer);

export { EWCRownumberercell as default };

try {
  if (window.customElements.get('ext-rownumberercell') == undefined) {
    window.customElements.define('ext-rownumberercell', ElementParser.withParsedCallback(EWCRownumberercell));
  }
} catch (e) {
  if (window.customElements.get('ext-rownumberercell') == undefined) {
    window.customElements.define('ext-rownumberercell', EWCRownumberercell);
  }
}