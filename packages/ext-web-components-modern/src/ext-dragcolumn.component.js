import Ext_grid_column_Drag from './Ext/grid/column/Drag.js';
import ElementParser from './common/ElementParser.js';

export default class EWCDragcolumn extends Ext_grid_column_Drag {
  constructor() {
    super ([], []);
    this.xtype = 'dragcolumn';
  }
}
try {
  if (window.customElements.get('ext-dragcolumn') == undefined) {
    window.customElements.define('ext-dragcolumn', ElementParser.withParsedCallback(EWCDragcolumn));
  }
}
catch(e) {
  if (window.customElements.get('ext-dragcolumn') == undefined) {
    window.customElements.define('ext-dragcolumn', EWCDragcolumn);
  }
}
