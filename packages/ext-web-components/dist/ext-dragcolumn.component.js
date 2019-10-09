import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Drag from './Ext/grid/column/Drag';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtDragcolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Drag) {
  _inheritsLoose(ExtDragcolumnComponent, _Ext_grid_column_Drag);

  function ExtDragcolumnComponent() {
    var _this;

    _this = _Ext_grid_column_Drag.call(this, [], []) || this;
    _this.xtype = 'dragcolumn';
    return _this;
  }

  return ExtDragcolumnComponent;
}(Ext_grid_column_Drag); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-dragcolumn', ExtDragcolumnComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-dragcolumn', HTMLParsedElement.withParsedCallback(ExtDragcolumnComponent));