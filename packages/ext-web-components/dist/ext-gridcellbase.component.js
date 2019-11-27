import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_cell_Base from '@sencha/ext-runtime-base/dist/./Ext/grid/cell/Base.js';
import Ext_grid_cell_Base from './Ext/grid/cell/Base.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCGridcellbase =
/*#__PURE__*/
function (_Ext_grid_cell_Base) {
  _inheritsLoose(EWCGridcellbase, _Ext_grid_cell_Base);

  function EWCGridcellbase() {
    var _this;

    _this = _Ext_grid_cell_Base.call(this, [], []) || this;
    _this.xtype = 'gridcellbase';
    return _this;
  }

  return EWCGridcellbase;
}(Ext_grid_cell_Base);

export { EWCGridcellbase as default };
window.customElements.define('ext-gridcellbase', HTMLParsedElement.withParsedCallback(EWCGridcellbase));