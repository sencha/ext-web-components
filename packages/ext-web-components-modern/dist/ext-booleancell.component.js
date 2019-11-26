import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_cell_Boolean from '@sencha/ext-runtime-base/dist/./Ext/grid/cell/Boolean.js';
import Ext_grid_cell_Boolean from './Ext/grid/cell/Boolean.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCBooleancell =
/*#__PURE__*/
function (_Ext_grid_cell_Boolea) {
  _inheritsLoose(EWCBooleancell, _Ext_grid_cell_Boolea);

  function EWCBooleancell() {
    var _this;

    _this = _Ext_grid_cell_Boolea.call(this, [], []) || this;
    _this.xtype = 'booleancell';
    return _this;
  }

  return EWCBooleancell;
}(Ext_grid_cell_Boolean);

export { EWCBooleancell as default };
window.customElements.define('ext-booleancell', HTMLParsedElement.withParsedCallback(EWCBooleancell));