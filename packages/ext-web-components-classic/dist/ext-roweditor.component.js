import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_RowEditor from './Ext/grid/RowEditor.js';
import ElementParser from './common/ElementParser.js';

var EWCRoweditor = /*#__PURE__*/function (_Ext_grid_RowEditor) {
  _inheritsLoose(EWCRoweditor, _Ext_grid_RowEditor);

  var _super = _createSuper(EWCRoweditor);

  function EWCRoweditor() {
    var _this;

    _this = _Ext_grid_RowEditor.call(this, [], []) || this;
    _this.xtype = 'roweditor';
    return _this;
  }

  return EWCRoweditor;
}(Ext_grid_RowEditor);

export { EWCRoweditor as default };

try {
  if (window.customElements.get('ext-roweditor') == undefined) {
    window.customElements.define('ext-roweditor', ElementParser.withParsedCallback(EWCRoweditor));
  }
} catch (e) {
  if (window.customElements.get('ext-roweditor') == undefined) {
    window.customElements.define('ext-roweditor', EWCRoweditor);
  }
}