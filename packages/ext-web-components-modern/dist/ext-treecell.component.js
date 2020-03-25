import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_grid_cell_Tree from './Ext/grid/cell/Tree.js';
import ElementParser from './runtime/ElementParser.js';

var EWCTreecell = /*#__PURE__*/function (_Ext_grid_cell_Tree) {
  _inheritsLoose(EWCTreecell, _Ext_grid_cell_Tree);

  var _super = _createSuper(EWCTreecell);

  function EWCTreecell() {
    var _this;

    _this = _Ext_grid_cell_Tree.call(this, [], []) || this;
    _this.xtype = 'treecell';
    return _this;
  }

  return EWCTreecell;
}(Ext_grid_cell_Tree);

export { EWCTreecell as default };

try {
  window.customElements.define('ext-treecell', ElementParser.withParsedCallback(EWCTreecell));
} catch (e) {
  window.customElements.define('ext-treecell', EWCTreecell);
}