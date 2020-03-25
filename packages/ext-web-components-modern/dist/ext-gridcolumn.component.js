import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import ElementParser from './runtime/ElementParser.js';

var EWCGridcolumn = /*#__PURE__*/function (_Ext_grid_column_Temp) {
  _inheritsLoose(EWCGridcolumn, _Ext_grid_column_Temp);

  var _super = _createSuper(EWCGridcolumn);

  function EWCGridcolumn() {
    var _this;

    _this = _Ext_grid_column_Temp.call(this, [], []) || this;
    _this.xtype = 'gridcolumn';
    return _this;
  }

  return EWCGridcolumn;
}(Ext_grid_column_Template);

export { EWCGridcolumn as default };

try {
  window.customElements.define('ext-gridcolumn', ElementParser.withParsedCallback(EWCGridcolumn));
} catch (e) {
  window.customElements.define('ext-gridcolumn', EWCGridcolumn);
}