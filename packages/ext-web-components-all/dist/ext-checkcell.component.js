import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Check from './Ext/grid/cell/Check.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtCheckcellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Check) {
  _inheritsLoose(ExtCheckcellComponent, _Ext_grid_cell_Check);

  function ExtCheckcellComponent() {
    var _this;

    _this = _Ext_grid_cell_Check.call(this, [], []) || this;
    _this.xtype = 'checkcell';
    return _this;
  }

  return ExtCheckcellComponent;
}(Ext_grid_cell_Check); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-checkcell', ExtCheckcellComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-checkcell', HTMLParsedElement.withParsedCallback(ExtCheckcellComponent));