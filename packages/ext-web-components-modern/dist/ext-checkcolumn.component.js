import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_column_Check from './Ext/grid/column/Check.js';
import ElementParser from './runtime/ElementParser.js';

var EWCCheckcolumn = /*#__PURE__*/function (_Ext_grid_column_Chec) {
  _inheritsLoose(EWCCheckcolumn, _Ext_grid_column_Chec);

  var _super = _createSuper(EWCCheckcolumn);

  function EWCCheckcolumn() {
    var _this;

    _this = _Ext_grid_column_Chec.call(this, [], []) || this;
    _this.xtype = 'checkcolumn';
    return _this;
  }

  return EWCCheckcolumn;
}(Ext_grid_column_Check);

export { EWCCheckcolumn as default };

try {
  window.customElements.define('ext-checkcolumn', ElementParser.withParsedCallback(EWCCheckcolumn));
} catch (e) {
  window.customElements.define('ext-checkcolumn', EWCCheckcolumn);
}