import Ext_grid_column_Number from './Ext/grid/column/Number.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtNumbercolumn extends Ext_grid_column_Number {
    constructor() {
        super ([],[])
        this.xtype = 'numbercolumn';
    }
}
window.customElements.define('ext-numbercolumn', HTMLParsedElement.withParsedCallback(ExtNumbercolumn))
