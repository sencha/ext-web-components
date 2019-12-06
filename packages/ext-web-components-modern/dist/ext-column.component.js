import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose.js";
//import Ext_grid_column_Template from '@sencha/ext-runtime-base/dist/./Ext/grid/column/Template.js';
import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCColumn =
/*#__PURE__*/
function (_Ext_grid_column_Temp) {
  _inheritsLoose(EWCColumn, _Ext_grid_column_Temp);

  function EWCColumn() {
    var _this;

    _this = _Ext_grid_column_Temp.call(this, [], []) || this;
    _this.xtype = 'column';
    return _this;
  }

  return EWCColumn;
}(Ext_grid_column_Template);

export { EWCColumn as default };
window.customElements.define('ext-column', HTMLParsedElement.withParsedCallback(EWCColumn));