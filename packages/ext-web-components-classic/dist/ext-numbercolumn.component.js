import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_NumberColumn from './Ext/grid/NumberColumn.js';
import ElementParser from './common/ElementParser.js';

var EWCNumbercolumn = /*#__PURE__*/function (_Ext_grid_NumberColum) {
  _inheritsLoose(EWCNumbercolumn, _Ext_grid_NumberColum);

  var _super = _createSuper(EWCNumbercolumn);

  function EWCNumbercolumn() {
    var _this;

    _this = _Ext_grid_NumberColum.call(this, [], []) || this;
    _this.xtype = 'numbercolumn';
    return _this;
  }

  return EWCNumbercolumn;
}(Ext_grid_NumberColumn);

export { EWCNumbercolumn as default };

try {
  if (window.customElements.get('ext-numbercolumn') == undefined) {
    window.customElements.define('ext-numbercolumn', ElementParser.withParsedCallback(EWCNumbercolumn));
  }
} catch (e) {
  if (window.customElements.get('ext-numbercolumn') == undefined) {
    window.customElements.define('ext-numbercolumn', EWCNumbercolumn);
  }
}