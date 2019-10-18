import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_RowNumberer from './Ext/grid/column/RowNumberer.js';
import HTMLParsedElement from './HTMLParsedElement.js';
export var ExtRownumbererComponent =
/*#__PURE__*/
function (_Ext_grid_column_RowN) {
  _inheritsLoose(ExtRownumbererComponent, _Ext_grid_column_RowN);

  function ExtRownumbererComponent() {
    var _this;

    _this = _Ext_grid_column_RowN.call(this, [], []) || this;
    _this.xtype = 'rownumberer';
    return _this;
  }

  return ExtRownumbererComponent;
}(Ext_grid_column_RowNumberer); //(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-rownumberer', ExtRownumbererComponent);
//    });
//})();
//const  = HTMLParsedElement;

window.customElements.define('ext-rownumberer', HTMLParsedElement.withParsedCallback(ExtRownumbererComponent));