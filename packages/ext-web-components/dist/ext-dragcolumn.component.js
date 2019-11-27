import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
//import Ext_grid_column_Drag from '@sencha/ext-runtime-base/dist/./Ext/grid/column/Drag.js';
import Ext_grid_column_Drag from './Ext/grid/column/Drag.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var EWCDragcolumn =
/*#__PURE__*/
function (_Ext_grid_column_Drag) {
  _inheritsLoose(EWCDragcolumn, _Ext_grid_column_Drag);

  function EWCDragcolumn() {
    var _this;

    _this = _Ext_grid_column_Drag.call(this, [], []) || this;
    _this.xtype = 'dragcolumn';
    return _this;
  }

  return EWCDragcolumn;
}(Ext_grid_column_Drag);

export { EWCDragcolumn as default };
window.customElements.define('ext-dragcolumn', HTMLParsedElement.withParsedCallback(EWCDragcolumn));