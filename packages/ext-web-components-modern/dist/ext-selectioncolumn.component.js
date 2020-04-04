import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_column_Selection from './Ext/grid/column/Selection.js';
import ElementParser from './common/ElementParser.js';

var EWCSelectioncolumn = /*#__PURE__*/function (_Ext_grid_column_Sele) {
  _inheritsLoose(EWCSelectioncolumn, _Ext_grid_column_Sele);

  var _super = _createSuper(EWCSelectioncolumn);

  function EWCSelectioncolumn() {
    var _this;

    _this = _Ext_grid_column_Sele.call(this, [], []) || this;
    _this.xtype = 'selectioncolumn';
    return _this;
  }

  return EWCSelectioncolumn;
}(Ext_grid_column_Selection);

export { EWCSelectioncolumn as default };

try {
  if (window.customElements.get('ext-selectioncolumn') == undefined) {
    window.customElements.define('ext-selectioncolumn', ElementParser.withParsedCallback(EWCSelectioncolumn));
  }
} catch (e) {
  if (window.customElements.get('ext-selectioncolumn') == undefined) {
    window.customElements.define('ext-selectioncolumn', EWCSelectioncolumn);
  }
}