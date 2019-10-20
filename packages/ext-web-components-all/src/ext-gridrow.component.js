import Ext_grid_Row from './Ext/grid/Row.js';
import HTMLParsedElement from './HTMLParsedElement.js';
//import reactify from './reactify.js';

export default class ExtGridrow extends Ext_grid_Row {
    constructor() {
        super (
            [],
            []
        )
        this.xtype = 'gridrow'
    }
}

//(function () {
//    Ext.onReady(function() {
//        window.customElements.define('ext-gridrow', ExtGridrow);
//    });
//})();

//const  = HTMLParsedElement;
window.customElements.define('ext-gridrow', HTMLParsedElement.withParsedCallback(ExtGridrow))
//export default reactify(ExtGridrow);