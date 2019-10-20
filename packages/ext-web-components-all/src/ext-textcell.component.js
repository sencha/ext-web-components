import Ext_grid_cell_Text from './Ext/grid/cell/Text.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtTextcell extends Ext_grid_cell_Text {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'textcell'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-textcell', ExtTextcell);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-textcell', HTMLParsedElement.withParsedCallback(ExtTextcell))
//export default reactify(ExtTextcell);