import Ext_grid_column_Text from './Ext/grid/column/Text.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTextcolumn extends Ext_grid_column_Text {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'textcolumn'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-textcolumn', ExtTextcolumn);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-textcolumn', HTMLParsedElement.withParsedCallback(ExtTextcolumn))
//export default reactify(ExtTextcolumn);