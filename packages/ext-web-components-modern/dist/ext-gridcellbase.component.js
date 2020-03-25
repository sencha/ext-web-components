import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_cell_Base from './Ext/grid/cell/Base.js';
import ElementParser from './runtime/ElementParser.js';

var EWCGridcellbase = /*#__PURE__*/function (_Ext_grid_cell_Base) {
  _inheritsLoose(EWCGridcellbase, _Ext_grid_cell_Base);

  var _super = _createSuper(EWCGridcellbase);

  function EWCGridcellbase() {
    var _this;

    _this = _Ext_grid_cell_Base.call(this, [], []) || this;
    _this.xtype = 'gridcellbase';
    return _this;
  }

  return EWCGridcellbase;
}(Ext_grid_cell_Base);

export { EWCGridcellbase as default };

try {
  window.customElements.define('ext-gridcellbase', ElementParser.withParsedCallback(EWCGridcellbase));
} catch (e) {
  window.customElements.define('ext-gridcellbase', EWCGridcellbase);
}