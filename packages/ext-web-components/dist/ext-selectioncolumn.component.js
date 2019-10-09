import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Selection from './Ext/grid/column/Selection';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtSelectioncolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Sele) {
  _inheritsLoose(ExtSelectioncolumnComponent, _Ext_grid_column_Sele);

  function ExtSelectioncolumnComponent() {
    var _this;

    _this = _Ext_grid_column_Sele.call(this, [], []) || this;
    _this.xtype = 'selectioncolumn';
    return _this;
  }

  return ExtSelectioncolumnComponent;
}(Ext_grid_column_Selection); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-selectioncolumn', ExtSelectioncolumnComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-selectioncolumn', HTMLParsedElement.withParsedCallback(ExtSelectioncolumnComponent));