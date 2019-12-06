import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_grid_column_RowNumberer from '@sencha/ext-runtime-base/dist/./Ext/grid/column/RowNumberer.js';
import Ext_grid_column_RowNumberer from './Ext/grid/column/RowNumberer.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCRownumberer =
/*#__PURE__*/
function (_Ext_grid_column_RowN) {
  _inheritsLoose(EWCRownumberer, _Ext_grid_column_RowN);

  function EWCRownumberer() {
    var _this;

    _this = _Ext_grid_column_RowN.call(this, [], []) || this;
    _this.xtype = 'rownumberer';
    return _this;
  }

  return EWCRownumberer;
}(Ext_grid_column_RowNumberer);

export { EWCRownumberer as default };
window.customElements.define('ext-rownumberer', HTMLParsedElement.withParsedCallback(EWCRownumberer));