import Ext_grid_column_Selection from './Ext/grid/column/Selection.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSelectioncolumn extends Ext_grid_column_Selection {
    constructor() {
        super ([],[])
        this.xtype = 'selectioncolumn';
    }
}
window.customElements.define('ext-selectioncolumn', HTMLParsedElement.withParsedCallback(ExtSelectioncolumn))
