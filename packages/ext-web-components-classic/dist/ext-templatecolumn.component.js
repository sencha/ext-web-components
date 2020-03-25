import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_TemplateColumn from './Ext/grid/TemplateColumn.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTemplatecolumn = /*#__PURE__*/function (_Ext_grid_TemplateCol) {
  _inheritsLoose(EWCTemplatecolumn, _Ext_grid_TemplateCol);

  var _super = _createSuper(EWCTemplatecolumn);

  function EWCTemplatecolumn() {
    var _this;

    _this = _Ext_grid_TemplateCol.call(this, [], []) || this;
    _this.xtype = 'templatecolumn';
    return _this;
  }

  return EWCTemplatecolumn;
}(Ext_grid_TemplateColumn);

export { EWCTemplatecolumn as default };

try {
  window.customElements.define('ext-templatecolumn', ElementParser.withParsedCallback(EWCTemplatecolumn));
} catch (e) {
  window.customElements.define('ext-templatecolumn', EWCTemplatecolumn);
}