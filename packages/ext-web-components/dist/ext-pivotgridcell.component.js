import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_pivot_cell_Cell from '@sencha/ext-runtime-base/dist/./Ext/pivot/cell/Cell.js';
import Ext_pivot_cell_Cell from './Ext/pivot/cell/Cell.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCPivotgridcell =
/*#__PURE__*/
function (_Ext_pivot_cell_Cell) {
  _inheritsLoose(EWCPivotgridcell, _Ext_pivot_cell_Cell);

  function EWCPivotgridcell() {
    var _this;

    _this = _Ext_pivot_cell_Cell.call(this, [], []) || this;
    _this.xtype = 'pivotgridcell';
    return _this;
  }

  return EWCPivotgridcell;
}(Ext_pivot_cell_Cell);

export { EWCPivotgridcell as default };
window.customElements.define('ext-pivotgridcell', HTMLParsedElement.withParsedCallback(EWCPivotgridcell));