import Ext_grid_column_Drag from './Ext/grid/column/Drag.js';
import ElementParser from './ElementParser.js';

export default class EWCDragcolumn extends Ext_grid_column_Drag {
  constructor() {
    super ([], []);
    this.xtype = 'dragcolumn';
  }
}
try {
  window.customElements.define('ext-dragcolumn', ElementParser.withParsedCallback(EWCDragcolumn));
}
catch(e) {
  window.customElements.define('ext-dragcolumn', EWCDragcolumn);
}
