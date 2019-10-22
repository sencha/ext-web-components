import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Boolean from './Ext/grid/cell/Boolean.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtBooleancell =
/*#__PURE__*/
function (_Ext_grid_cell_Boolea) {
  _inheritsLoose(ExtBooleancell, _Ext_grid_cell_Boolea);

  function ExtBooleancell() {
    var _this;

    _this = _Ext_grid_cell_Boolea.call(this, [], []) || this;
    _this.xtype = 'booleancell';
    return _this;
  }

  return ExtBooleancell;
}(Ext_grid_cell_Boolean);

export { ExtBooleancell as default };
window.customElements.define('ext-booleancell', HTMLParsedElement.withParsedCallback(ExtBooleancell));