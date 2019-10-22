import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Check from './Ext/grid/cell/Check.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtCheckcell =
/*#__PURE__*/
function (_Ext_grid_cell_Check) {
  _inheritsLoose(ExtCheckcell, _Ext_grid_cell_Check);

  function ExtCheckcell() {
    var _this;

    _this = _Ext_grid_cell_Check.call(this, [], []) || this;
    _this.xtype = 'checkcell';
    return _this;
  }

  return ExtCheckcell;
}(Ext_grid_cell_Check);

export { ExtCheckcell as default };
window.customElements.define('ext-checkcell', HTMLParsedElement.withParsedCallback(ExtCheckcell));