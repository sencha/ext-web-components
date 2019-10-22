import Ext_grid_column_Check from './Ext/grid/column/Check.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtCheckcolumn extends Ext_grid_column_Check {
    constructor() {
        super ([],[])
        this.xtype = 'checkcolumn';
    }
}
window.customElements.define('ext-checkcolumn', HTMLParsedElement.withParsedCallback(ExtCheckcolumn))
