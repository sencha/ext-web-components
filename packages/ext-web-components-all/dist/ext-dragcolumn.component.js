import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Drag from './Ext/grid/column/Drag.js';
import HTMLParsedElement from './HTMLParsedElement.js';

var ExtDragcolumn =
/*#__PURE__*/
function (_Ext_grid_column_Drag) {
  _inheritsLoose(ExtDragcolumn, _Ext_grid_column_Drag);

  function ExtDragcolumn() {
    var _this;

    _this = _Ext_grid_column_Drag.call(this, [], []) || this;
    _this.xtype = 'dragcolumn';
    return _this;
  }

  return ExtDragcolumn;
}(Ext_grid_column_Drag);

export { ExtDragcolumn as default };
window.customElements.define('ext-dragcolumn', HTMLParsedElement.withParsedCallback(ExtDragcolumn));