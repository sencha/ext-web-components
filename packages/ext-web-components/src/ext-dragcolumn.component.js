//import Ext_grid_column_Drag from '@sencha/ext-runtime-base/dist/./Ext/grid/column/Drag.js';
import Ext_grid_column_Drag from './Ext/grid/column/Drag.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCDragcolumn extends Ext_grid_column_Drag {
    constructor() {
        super ([], []);
        this.xtype = 'dragcolumn';
    }

}
window.customElements.define('ext-dragcolumn', HTMLParsedElement.withParsedCallback(EWCDragcolumn));

