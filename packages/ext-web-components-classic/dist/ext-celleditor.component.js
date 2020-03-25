import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_CellEditor from './Ext/grid/CellEditor.js';
import ElementParser from './runtime/ElementParser.js';

var EWCCelleditor = /*#__PURE__*/function (_Ext_grid_CellEditor) {
  _inheritsLoose(EWCCelleditor, _Ext_grid_CellEditor);

  var _super = _createSuper(EWCCelleditor);

  function EWCCelleditor() {
    var _this;

    _this = _Ext_grid_CellEditor.call(this, [], []) || this;
    _this.xtype = 'celleditor';
    return _this;
  }

  return EWCCelleditor;
}(Ext_grid_CellEditor);

export { EWCCelleditor as default };

try {
  window.customElements.define('ext-celleditor', ElementParser.withParsedCallback(EWCCelleditor));
} catch (e) {
  window.customElements.define('ext-celleditor', EWCCelleditor);
}