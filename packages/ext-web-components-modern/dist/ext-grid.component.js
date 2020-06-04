import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_Grid from './Ext/grid/Grid.js';
import ElementParser from './common/ElementParser.js';

var EWCGrid = /*#__PURE__*/function (_Ext_grid_Grid) {
  _inheritsLoose(EWCGrid, _Ext_grid_Grid);

  function EWCGrid() {
    var _this;

    _this = _Ext_grid_Grid.call(this, [], []) || this;
    _this.xtype = 'grid';
    return _this;
  }

  return EWCGrid;
}(Ext_grid_Grid);

export { EWCGrid as default };

try {
  if (window.customElements.get('ext-grid') == undefined) {
    window.customElements.define('ext-grid', ElementParser.withParsedCallback(EWCGrid));
  }
} catch (e) {
  if (window.customElements.get('ext-grid') == undefined) {
    window.customElements.define('ext-grid', EWCGrid);
  }
}