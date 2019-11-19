import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Date from './Ext/grid/column/Date';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtDatecolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Date) {
  _inheritsLoose(ExtDatecolumnComponent, _Ext_grid_column_Date);

  function ExtDatecolumnComponent() {
    var _this;

    _this = _Ext_grid_column_Date.call(this, [], []) || this;
    _this.xtype = 'datecolumn';
    return _this;
  }

  return ExtDatecolumnComponent;
}(Ext_grid_column_Date); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-datecolumn', ExtDatecolumnComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-datecolumn', HTMLParsedElement.withParsedCallback(ExtDatecolumnComponent));