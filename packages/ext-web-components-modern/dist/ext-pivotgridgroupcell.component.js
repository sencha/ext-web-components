import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import Ext_pivot_cell_Group from './Ext/pivot/cell/Group.js';
import ElementParser from './common/ElementParser.js';

var EWCPivotgridgroupcell = /*#__PURE__*/function (_Ext_pivot_cell_Group) {
  _inheritsLoose(EWCPivotgridgroupcell, _Ext_pivot_cell_Group);

  var _super = _createSuper(EWCPivotgridgroupcell);

  function EWCPivotgridgroupcell() {
    var _this;

    _this = _Ext_pivot_cell_Group.call(this, [], []) || this;
    _this.xtype = 'pivotgridgroupcell';
    return _this;
  }

  return EWCPivotgridgroupcell;
}(Ext_pivot_cell_Group);

export { EWCPivotgridgroupcell as default };

try {
  if (window.customElements.get('ext-pivotgridgroupcell') == undefined) {
    window.customElements.define('ext-pivotgridgroupcell', ElementParser.withParsedCallback(EWCPivotgridgroupcell));
  }
} catch (e) {
  if (window.customElements.get('ext-pivotgridgroupcell') == undefined) {
    window.customElements.define('ext-pivotgridgroupcell', EWCPivotgridgroupcell);
  }
}