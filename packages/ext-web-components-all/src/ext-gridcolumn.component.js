import Ext_grid_column_Template from './Ext/grid/column/Template.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtGridcolumn extends Ext_grid_column_Template {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'gridcolumn'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridcolumn', ExtGridcolumn);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridcolumn', HTMLParsedElement.withParsedCallback(ExtGridcolumn))
//export default reactify(ExtGridcolumn);