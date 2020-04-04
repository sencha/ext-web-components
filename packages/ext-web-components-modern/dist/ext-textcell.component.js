import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_cell_Text from './Ext/grid/cell/Text.js';
import ElementParser from './common/ElementParser.js';

var EWCTextcell = /*#__PURE__*/function (_Ext_grid_cell_Text) {
  _inheritsLoose(EWCTextcell, _Ext_grid_cell_Text);

  var _super = _createSuper(EWCTextcell);

  function EWCTextcell() {
    var _this;

    _this = _Ext_grid_cell_Text.call(this, [], []) || this;
    _this.xtype = 'textcell';
    return _this;
  }

  return EWCTextcell;
}(Ext_grid_cell_Text);

export { EWCTextcell as default };

try {
  if (window.customElements.get('ext-textcell') == undefined) {
    window.customElements.define('ext-textcell', ElementParser.withParsedCallback(EWCTextcell));
  }
} catch (e) {
  if (window.customElements.get('ext-textcell') == undefined) {
    window.customElements.define('ext-textcell', EWCTextcell);
  }
}