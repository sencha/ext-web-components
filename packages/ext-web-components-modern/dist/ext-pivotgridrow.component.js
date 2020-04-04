import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_pivot_Row from './Ext/pivot/Row.js';
import ElementParser from './common/ElementParser.js';

var EWCPivotgridrow = /*#__PURE__*/function (_Ext_pivot_Row) {
  _inheritsLoose(EWCPivotgridrow, _Ext_pivot_Row);

  var _super = _createSuper(EWCPivotgridrow);

  function EWCPivotgridrow() {
    var _this;

    _this = _Ext_pivot_Row.call(this, [], []) || this;
    _this.xtype = 'pivotgridrow';
    return _this;
  }

  return EWCPivotgridrow;
}(Ext_pivot_Row);

export { EWCPivotgridrow as default };

try {
  if (window.customElements.get('ext-pivotgridrow') == undefined) {
    window.customElements.define('ext-pivotgridrow', ElementParser.withParsedCallback(EWCPivotgridrow));
  }
} catch (e) {
  if (window.customElements.get('ext-pivotgridrow') == undefined) {
    window.customElements.define('ext-pivotgridrow', EWCPivotgridrow);
  }
}