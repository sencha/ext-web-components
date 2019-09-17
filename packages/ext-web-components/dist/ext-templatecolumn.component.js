import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Template_Component from './Ext/grid/column/Template';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTemplatecolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Temp) {
  _inheritsLoose(ExtTemplatecolumnComponent, _Ext_grid_column_Temp);

  function ExtTemplatecolumnComponent() {
    var _this;

    _this = _Ext_grid_column_Temp.call(this, {}, [], []) || this;
    _this.xtype = 'templatecolumn';
    return _this;
  }

  return ExtTemplatecolumnComponent;
}(Ext_grid_column_Template_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-templatecolumn', ExtTemplatecolumnComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-templatecolumn', HTMLParsedElement.withParsedCallback(ExtTemplatecolumnComponent));