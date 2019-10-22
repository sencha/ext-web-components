import Ext_grid_column_RowNumberer from './Ext/grid/column/RowNumberer.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtRownumberer extends Ext_grid_column_RowNumberer {
    constructor() {
        super ([],[])
        this.xtype = 'rownumberer';
    }
}
window.customElements.define('ext-rownumberer', HTMLParsedElement.withParsedCallback(ExtRownumberer))
