import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_column_Date from './Ext/grid/column/Date.js';
import ElementParser from './common/ElementParser.js';

var EWCDatecolumn = /*#__PURE__*/function (_Ext_grid_column_Date) {
  _inheritsLoose(EWCDatecolumn, _Ext_grid_column_Date);

  var _super = _createSuper(EWCDatecolumn);

  function EWCDatecolumn() {
    var _this;

    _this = _Ext_grid_column_Date.call(this, [], []) || this;
    _this.xtype = 'datecolumn';
    return _this;
  }

  return EWCDatecolumn;
}(Ext_grid_column_Date);

export { EWCDatecolumn as default };

try {
  if (window.customElements.get('ext-datecolumn') == undefined) {
    window.customElements.define('ext-datecolumn', ElementParser.withParsedCallback(EWCDatecolumn));
  }
} catch (e) {
  if (window.customElements.get('ext-datecolumn') == undefined) {
    window.customElements.define('ext-datecolumn', EWCDatecolumn);
  }
}