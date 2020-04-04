import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_column_Boolean from './Ext/grid/column/Boolean.js';
import ElementParser from './common/ElementParser.js';

var EWCBooleancolumn = /*#__PURE__*/function (_Ext_grid_column_Bool) {
  _inheritsLoose(EWCBooleancolumn, _Ext_grid_column_Bool);

  var _super = _createSuper(EWCBooleancolumn);

  function EWCBooleancolumn() {
    var _this;

    _this = _Ext_grid_column_Bool.call(this, [], []) || this;
    _this.xtype = 'booleancolumn';
    return _this;
  }

  return EWCBooleancolumn;
}(Ext_grid_column_Boolean);

export { EWCBooleancolumn as default };

try {
  if (window.customElements.get('ext-booleancolumn') == undefined) {
    window.customElements.define('ext-booleancolumn', ElementParser.withParsedCallback(EWCBooleancolumn));
  }
} catch (e) {
  if (window.customElements.get('ext-booleancolumn') == undefined) {
    window.customElements.define('ext-booleancolumn', EWCBooleancolumn);
  }
}