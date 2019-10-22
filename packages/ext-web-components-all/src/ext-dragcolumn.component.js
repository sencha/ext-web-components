import Ext_grid_column_Drag from './Ext/grid/column/Drag.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtDragcolumn extends Ext_grid_column_Drag {
    constructor() {
        super ([],[])
        this.xtype = 'dragcolumn';
    }
}
window.customElements.define('ext-dragcolumn', HTMLParsedElement.withParsedCallback(ExtDragcolumn))
