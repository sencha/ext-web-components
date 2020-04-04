import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_GridPanel from './Ext/grid/GridPanel.js';
import ElementParser from './common/ElementParser.js';

var EWCGrid = /*#__PURE__*/function (_Ext_grid_GridPanel) {
  _inheritsLoose(EWCGrid, _Ext_grid_GridPanel);

  var _super = _createSuper(EWCGrid);

  function EWCGrid() {
    var _this;

    _this = _Ext_grid_GridPanel.call(this, [], []) || this;
    _this.xtype = 'grid';
    return _this;
  }

  return EWCGrid;
}(Ext_grid_GridPanel);

export { EWCGrid as default };

try {
  if (window.customElements.get('ext-grid') == undefined) {
    window.customElements.define('ext-grid', ElementParser.withParsedCallback(EWCGrid));
  }
} catch (e) {
  if (window.customElements.get('ext-grid') == undefined) {
    window.customElements.define('ext-grid', EWCGrid);
  }
}