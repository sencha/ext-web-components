import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Date from './Ext/grid/cell/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtDatecell =
/*#__PURE__*/
function (_Ext_grid_cell_Date) {
  _inheritsLoose(ExtDatecell, _Ext_grid_cell_Date);

  function ExtDatecell() {
    var _this;

    _this = _Ext_grid_cell_Date.call(this, [], []) || this;
    _this.xtype = 'datecell';
    return _this;
  }

  return ExtDatecell;
}(Ext_grid_cell_Date);

export { ExtDatecell as default };
window.customElements.define('ext-datecell', HTMLParsedElement.withParsedCallback(ExtDatecell));