import Ext_grid_column_Boolean from './Ext/grid/column/Boolean.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtBooleancolumn extends Ext_grid_column_Boolean {
    constructor() {
        super ([],[])
        this.xtype = 'booleancolumn';
    }
}
window.customElements.define('ext-booleancolumn', HTMLParsedElement.withParsedCallback(ExtBooleancolumn))
