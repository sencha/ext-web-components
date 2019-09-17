import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Text_Component from './Ext/grid/column/Text';
import HTMLParsedElement from './HTMLParsedElement';
export var ExtTextcolumnComponent =
/*#__PURE__*/
function (_Ext_grid_column_Text) {
  _inheritsLoose(ExtTextcolumnComponent, _Ext_grid_column_Text);

  function ExtTextcolumnComponent() {
    var _this;

    _this = _Ext_grid_column_Text.call(this) || this;
    _this.xtype = 'textcolumn';
    return _this;
  }

  return ExtTextcolumnComponent;
}(Ext_grid_column_Text_Component); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-textcolumn', ExtTextcolumnComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-textcolumn', HTMLParsedElement.withParsedCallback(ExtTextcolumnComponent));