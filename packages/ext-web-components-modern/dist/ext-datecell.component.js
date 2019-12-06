import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_grid_cell_Date from '@sencha/ext-runtime-base/dist/./Ext/grid/cell/Date.js';
import Ext_grid_cell_Date from './Ext/grid/cell/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCDatecell =
/*#__PURE__*/
function (_Ext_grid_cell_Date) {
  _inheritsLoose(EWCDatecell, _Ext_grid_cell_Date);

  function EWCDatecell() {
    var _this;

    _this = _Ext_grid_cell_Date.call(this, [], []) || this;
    _this.xtype = 'datecell';
    return _this;
  }

  return EWCDatecell;
}(Ext_grid_cell_Date);

export { EWCDatecell as default };
window.customElements.define('ext-datecell', HTMLParsedElement.withParsedCallback(EWCDatecell));