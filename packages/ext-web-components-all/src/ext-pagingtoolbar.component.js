import Ext_grid_PagingToolbar from './Ext/grid/PagingToolbar.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtPagingtoolbar extends Ext_grid_PagingToolbar {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'pagingtoolbar'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-pagingtoolbar', ExtPagingtoolbar);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-pagingtoolbar', HTMLParsedElement.withParsedCallback(ExtPagingtoolbar))
//export default reactify(ExtPagingtoolbar);