import Ext_grid_column_Date from './Ext/grid/column/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtDatecolumn extends Ext_grid_column_Date {
    constructor() {
        super ([],[])
        this.xtype = 'datecolumn';
    }
}
window.customElements.define('ext-datecolumn', HTMLParsedElement.withParsedCallback(ExtDatecolumn))
