import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Boolean from './Ext/grid/cell/Boolean';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtBooleancellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Boolea) {
  _inheritsLoose(ExtBooleancellComponent, _Ext_grid_cell_Boolea);

  function ExtBooleancellComponent() {
    var _this;

    _this = _Ext_grid_cell_Boolea.call(this, [], []) || this;
    _this.xtype = 'booleancell';
    return _this;
  }

  return ExtBooleancellComponent;
}(Ext_grid_cell_Boolean); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-booleancell', ExtBooleancellComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-booleancell', HTMLParsedElement.withParsedCallback(ExtBooleancellComponent));