import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_RowNumberer from './Ext/grid/cell/RowNumberer';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtRownumberercellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_RowNum) {
  _inheritsLoose(ExtRownumberercellComponent, _Ext_grid_cell_RowNum);

  function ExtRownumberercellComponent() {
    var _this;

    _this = _Ext_grid_cell_RowNum.call(this, [], []) || this;
    _this.xtype = 'rownumberercell';
    return _this;
  }

  return ExtRownumberercellComponent;
}(Ext_grid_cell_RowNumberer); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-rownumberercell', ExtRownumberercellComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-rownumberercell', HTMLParsedElement.withParsedCallback(ExtRownumberercellComponent));