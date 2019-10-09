import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Number from './Ext/grid/cell/Number';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtNumbercellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Number) {
  _inheritsLoose(ExtNumbercellComponent, _Ext_grid_cell_Number);

  function ExtNumbercellComponent() {
    var _this;

    _this = _Ext_grid_cell_Number.call(this, [], []) || this;
    _this.xtype = 'numbercell';
    return _this;
  }

  return ExtNumbercellComponent;
}(Ext_grid_cell_Number); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-numbercell', ExtNumbercellComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-numbercell', HTMLParsedElement.withParsedCallback(ExtNumbercellComponent));