import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Check_Component from './Ext/grid/cell/Check';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtCheckcellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Check_) {
  _inheritsLoose(ExtCheckcellComponent, _Ext_grid_cell_Check_);

  function ExtCheckcellComponent() {
    var _this;

    _this = _Ext_grid_cell_Check_.call(this, {}, [], []) || this;
    _this.xtype = 'checkcell';
    return _this;
  }

  return ExtCheckcellComponent;
}(Ext_grid_cell_Check_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-checkcell', ExtCheckcellComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-checkcell', HTMLParsedElement.withParsedCallback(ExtCheckcellComponent));