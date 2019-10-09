import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Template from './Ext/grid/column/Template';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtGridcolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Temp) {
  _inheritsLoose(ExtGridcolumnComponent, _Ext_grid_column_Temp);

  function ExtGridcolumnComponent() {
    var _this;

    _this = _Ext_grid_column_Temp.call(this, [], []) || this;
    _this.xtype = 'gridcolumn';
    return _this;
  }

  return ExtGridcolumnComponent;
}(Ext_grid_column_Template); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridcolumn', ExtGridcolumnComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-gridcolumn', HTMLParsedElement.withParsedCallback(ExtGridcolumnComponent));