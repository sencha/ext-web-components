import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_cell_Check from './Ext/grid/cell/Check.js';
import ElementParser from './common/ElementParser.js';

var EWCCheckcell = /*#__PURE__*/function (_Ext_grid_cell_Check) {
  _inheritsLoose(EWCCheckcell, _Ext_grid_cell_Check);

  var _super = _createSuper(EWCCheckcell);

  function EWCCheckcell() {
    var _this;

    _this = _Ext_grid_cell_Check.call(this, [], []) || this;
    _this.xtype = 'checkcell';
    return _this;
  }

  return EWCCheckcell;
}(Ext_grid_cell_Check);

export { EWCCheckcell as default };

try {
  if (window.customElements.get('ext-checkcell') == undefined) {
    window.customElements.define('ext-checkcell', ElementParser.withParsedCallback(EWCCheckcell));
  }
} catch (e) {
  if (window.customElements.get('ext-checkcell') == undefined) {
    window.customElements.define('ext-checkcell', EWCCheckcell);
  }
}