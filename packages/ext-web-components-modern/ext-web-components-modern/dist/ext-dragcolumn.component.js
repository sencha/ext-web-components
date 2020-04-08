import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Drag from './Ext/grid/column/Drag.js';
import ElementParser from './common/ElementParser.js';

var EWCDragcolumn = /*#__PURE__*/function (_Ext_grid_column_Drag) {
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

try {
  if (window.customElements.get('ext-dragcolumn') == undefined) {
    window.customElements.define('ext-dragcolumn', ElementParser.withParsedCallback(EWCDragcolumn));
  }
} catch (e) {
  if (window.customElements.get('ext-dragcolumn') == undefined) {
    window.customElements.define('ext-dragcolumn', EWCDragcolumn);
  }
}