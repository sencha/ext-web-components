import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtGridcolumn extends Ext_grid_column_Template {
    constructor() {
        super ([],[])
        this.xtype = 'gridcolumn';
    }
}
window.customElements.define('ext-gridcolumn', HTMLParsedElement.withParsedCallback(ExtGridcolumn))
