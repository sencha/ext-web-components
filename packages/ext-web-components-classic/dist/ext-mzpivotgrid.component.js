import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Mz_pivot_Table from './Mz/pivot/Table.js';
import ElementParser from './runtime/ElementParser.js';

var EWCMzpivotgrid = /*#__PURE__*/function (_Mz_pivot_Table) {
  _inheritsLoose(EWCMzpivotgrid, _Mz_pivot_Table);

  var _super = _createSuper(EWCMzpivotgrid);

  function EWCMzpivotgrid() {
    var _this;

    _this = _Mz_pivot_Table.call(this, [], []) || this;
    _this.xtype = 'mzpivotgrid';
    return _this;
  }

  return EWCMzpivotgrid;
}(Mz_pivot_Table);

export { EWCMzpivotgrid as default };

try {
  window.customElements.define('ext-mzpivotgrid', ElementParser.withParsedCallback(EWCMzpivotgrid));
} catch (e) {
  window.customElements.define('ext-mzpivotgrid', EWCMzpivotgrid);
}