import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_pivot_Grid from './Ext/pivot/Grid.js';
import ElementParser from './runtime/ElementParser.js';

var EWCPivotgrid = /*#__PURE__*/function (_Ext_pivot_Grid) {
  _inheritsLoose(EWCPivotgrid, _Ext_pivot_Grid);

  var _super = _createSuper(EWCPivotgrid);

  function EWCPivotgrid() {
    var _this;

    _this = _Ext_pivot_Grid.call(this, [], []) || this;
    _this.xtype = 'pivotgrid';
    return _this;
  }

  return EWCPivotgrid;
}(Ext_pivot_Grid);

export { EWCPivotgrid as default };

try {
  window.customElements.define('ext-pivotgrid', ElementParser.withParsedCallback(EWCPivotgrid));
} catch (e) {
  window.customElements.define('ext-pivotgrid', EWCPivotgrid);
}