import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Boolean from './Ext/grid/column/Boolean';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtBooleancolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Bool) {
  _inheritsLoose(ExtBooleancolumnComponent, _Ext_grid_column_Bool);

  function ExtBooleancolumnComponent() {
    var _this;

    _this = _Ext_grid_column_Bool.call(this, [], []) || this;
    _this.xtype = 'booleancolumn';
    return _this;
  }

  return ExtBooleancolumnComponent;
}(Ext_grid_column_Boolean); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-booleancolumn', ExtBooleancolumnComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-booleancolumn', HTMLParsedElement.withParsedCallback(ExtBooleancolumnComponent));