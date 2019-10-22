import Ext_grid_PagingToolbar from './Ext/grid/PagingToolbar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtPagingtoolbar extends Ext_grid_PagingToolbar {
    constructor() {
        super ([],[])
        this.xtype = 'pagingtoolbar';
    }
}
window.customElements.define('ext-pagingtoolbar', HTMLParsedElement.withParsedCallback(ExtPagingtoolbar))
