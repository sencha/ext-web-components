import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Base from './Ext/grid/cell/Base.js';
import ElementParser from './runtime/ElementParser.js';

var EWCGridcellbase = /*#__PURE__*/function (_Ext_grid_cell_Base) {
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

try {
  window.customElements.define('ext-gridcellbase', ElementParser.withParsedCallback(EWCGridcellbase));
} catch (e) {
  window.customElements.define('ext-gridcellbase', EWCGridcellbase);
}