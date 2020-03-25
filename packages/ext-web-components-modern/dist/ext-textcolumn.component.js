import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_column_Text from './Ext/grid/column/Text.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTextcolumn = /*#__PURE__*/function (_Ext_grid_column_Text) {
  _inheritsLoose(EWCTextcolumn, _Ext_grid_column_Text);

  var _super = _createSuper(EWCTextcolumn);

  function EWCTextcolumn() {
    var _this;

    _this = _Ext_grid_column_Text.call(this, [], []) || this;
    _this.xtype = 'textcolumn';
    return _this;
  }

  return EWCTextcolumn;
}(Ext_grid_column_Text);

export { EWCTextcolumn as default };

try {
  window.customElements.define('ext-textcolumn', ElementParser.withParsedCallback(EWCTextcolumn));
} catch (e) {
  window.customElements.define('ext-textcolumn', EWCTextcolumn);
}