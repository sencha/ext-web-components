import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_Grid from './Ext/grid/Grid.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtGrid =
/*#__PURE__*/
function (_Ext_grid_Grid) {
  _inheritsLoose(ExtGrid, _Ext_grid_Grid);

  function ExtGrid() {
    var _this;

    _this = _Ext_grid_Grid.call(this, [], []) || this;
    _this.xtype = 'grid';
    return _this;
  }

  return ExtGrid;
}(Ext_grid_Grid);

export { ExtGrid as default };
window.customElements.define('ext-grid', HTMLParsedElement.withParsedCallback(ExtGrid));