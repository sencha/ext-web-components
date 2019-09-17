import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Text_Component from './Ext/grid/cell/Text';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTextcellComponent =
/*#__PURE__*/
function (_Ext_grid_cell_Text_C) {
  _inheritsLoose(ExtTextcellComponent, _Ext_grid_cell_Text_C);

  function ExtTextcellComponent() {
    var _this;

    _this = _Ext_grid_cell_Text_C.call(this) || this;
    _this.xtype = 'textcell';
    return _this;
  }

  return ExtTextcellComponent;
}(Ext_grid_cell_Text_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-textcell', ExtTextcellComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-textcell', HTMLParsedElement.withParsedCallback(ExtTextcellComponent));