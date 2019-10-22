import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_RowNumberer from './Ext/grid/column/RowNumberer.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtRownumberer =
/*#__PURE__*/
function (_Ext_grid_column_RowN) {
  _inheritsLoose(ExtRownumberer, _Ext_grid_column_RowN);

  function ExtRownumberer() {
    var _this;

    _this = _Ext_grid_column_RowN.call(this, [], []) || this;
    _this.xtype = 'rownumberer';
    return _this;
  }

  return ExtRownumberer;
}(Ext_grid_column_RowNumberer);

export { ExtRownumberer as default };
window.customElements.define('ext-rownumberer', HTMLParsedElement.withParsedCallback(ExtRownumberer));