//import Ext_grid_PagingToolbar from '@sencha/ext-runtime-base/dist/./Ext/grid/PagingToolbar.js';
import Ext_grid_PagingToolbar from './Ext/grid/PagingToolbar.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCPagingtoolbar extends Ext_grid_PagingToolbar {
    constructor() {
        super ([], []);
        this.xtype = 'pagingtoolbar';
    }

}
window.customElements.define('ext-pagingtoolbar', HTMLParsedElement.withParsedCallback(EWCPagingtoolbar));

