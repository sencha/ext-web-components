import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Number from './Ext/grid/column/Number.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtNumbercolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Numb) {
  _inheritsLoose(ExtNumbercolumnComponent, _Ext_grid_column_Numb);

  function ExtNumbercolumnComponent() {
    var _this;

    _this = _Ext_grid_column_Numb.call(this, [], []) || this;
    _this.xtype = 'numbercolumn';
    return _this;
  }

  return ExtNumbercolumnComponent;
}(Ext_grid_column_Number); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-numbercolumn', ExtNumbercolumnComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-numbercolumn', HTMLParsedElement.withParsedCallback(ExtNumbercolumnComponent));