import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Base_Component from './Ext/grid/cell/Base';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtGridcellbaseComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Base_C) {
  _inheritsLoose(ExtGridcellbaseComponent, _Ext_grid_cell_Base_C);

  function ExtGridcellbaseComponent() {
    var _this;

    _this = _Ext_grid_cell_Base_C.call(this, {}, [], []) || this;
    _this.xtype = 'gridcellbase';
    return _this;
  }

  return ExtGridcellbaseComponent;
}(Ext_grid_cell_Base_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridcellbase', ExtGridcellbaseComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-gridcellbase', HTMLParsedElement.withParsedCallback(ExtGridcellbaseComponent));